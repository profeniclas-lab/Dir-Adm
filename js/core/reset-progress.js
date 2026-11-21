/** ADM-ESTUDO F22/L03 — reinicialização explícita, nunca automática. */
import { STORAGE_KEY } from './storage.js';
import { createInitialState } from './state.js';
import { inspectStoredProgress, validateStateForSaving } from './storage-safety.js';
import { verifyProgressBaseline, acknowledgeProgressWrite } from './progress-conflict-guard.js';
import { protectCurrentProgress, RECOVERY_KEY } from './progress-recovery-guard.js';
import { validateProgressBackup } from './progress-backup-validator.js';
import { getModuleById, MODULES } from '../data/modules.js';
import { questionsForModule } from '../data/questions.js';

const clone = data => JSON.parse(JSON.stringify(data));
const own = (o,k) => Object.prototype.hasOwnProperty.call(o||{},k);
const safe = x => x && typeof x === 'object' && !Array.isArray(x) ? x : {};

export function planProgressReset(state, scope='total', moduleId='') {
  if (!validateStateForSaving(state)) return {ok:false,message:'Progresso incompatível; nenhuma alteração permitida.'};
  if (scope !== 'total' && scope !== 'modulo') return {ok:false,message:'Escopo desconhecido.'};
  const result=scope==='total'?createInitialState():clone(state);
  if(scope==='total') {
    result.preferences=clone(state.preferences);
    result.navigation={...result.navigation,currentRoute:'configuracoes'};
    return {ok:true,state:result,scope,moduleId:null,message:'Todas as respostas, tentativas, revisões, erros e simulados serão reiniciados; preferências mantidas.'};
  }
  const module=getModuleById(moduleId);
  if (!module) return {ok:false,message:'Módulo inexistente.'};
  const p=result.progress;
  const topics=new Set(module.subtopics.map(t=>t.id));
  const ids=new Set((questionsForModule(moduleId)||[]).map(q=>q.id));
  // Sem perda silenciosa: não permitimos apagar referências usadas por um simulado em andamento.
  if (p.simulados?.active && Array.isArray(p.simulados.active.ids) && p.simulados.active.ids.some(id=>ids.has(id))) {
    return {ok:false,message:'Há um simulado ativo com questões deste módulo. Conclua ou cancele-o antes do reinício.'};
  }
  for(const name of ['modules','diagnostics','exercises']) if(p[name] && typeof p[name] === 'object') delete p[name][moduleId];
  for(const name of ['lessons']) for(const id of topics) if(p[name] && typeof p[name] === 'object')delete p[name][id];
  for(const name of ['questionHistory','reviewSchedule','reviewAttempts']) for(const id of ids) if(p[name] && typeof p[name] === 'object')delete p[name][id];
  for(const name of ['adaptiveReview','errorAttemptHistory']) for(const id of ids) if(p[name] && typeof p[name] === 'object')delete p[name][`question:${id}`];
  if(Array.isArray(p.errors))p.errors=p.errors.filter(e=>!ids.has(e?.questionId)&&e?.moduleId!==moduleId);
  if(Array.isArray(p.reviewQueue))p.reviewQueue=p.reviewQueue.filter(e=>!(e?.moduleId===moduleId||ids.has(e?.itemId)||ids.has(e?.questionId)||ids.has(e?.id)));
  if(Array.isArray(safe(p.questionBank).session?.ids) && p.questionBank.session.ids.some(id=>ids.has(id)))p.questionBank.session=null;
  // Histórico de simulados anteriores e flashcards globais são mantidos para evitar excluir
  // registros mistos ou de origem desconhecida sem uma atribuição confiável ao módulo.
  result.navigation={...result.navigation,currentRoute:'configuracoes',selectedModuleId:null,selectedSubtopicId:null};
  return {ok:true,state:result,scope,moduleId,message:'Respostas e registros de estudo identificados com o módulo serão reiniciados. Histórico de simulados anteriores e flashcards globais serão preservados.'};
}

export function inspectResetReadOnly(storage=window.localStorage) {
  const checks=[];
  const test=(name,passed)=>checks.push({name,passed:!!passed});
  const raw=storage.getItem(STORAGE_KEY);
  test('Leitura de armazenamento disponível',true);
  const status=inspectStoredProgress(storage);
  test('Progresso legível e compatível',status.ok && raw!==null);
  const candidate=status.state;
  if(candidate) {
    const before=JSON.stringify(candidate);
    const total=planProgressReset(candidate,'total');
    test('Plano total válido sem escrever',total.ok && validateStateForSaving(total.state));
    test('Preferências preservadas no plano total',total.ok && JSON.stringify(total.state.preferences)===JSON.stringify(candidate.preferences));
    test('Plano não altera os dados de entrada',JSON.stringify(candidate)===before);
    test('Plano rejeita módulo inexistente',!planProgressReset(candidate,'modulo','ID-INVALIDO').ok);
  }
  test('Cópia de recuperação pendente identificável',storage.getItem(RECOVERY_KEY)===null?'sem pendência':'existe pendência: reinício deve ser bloqueado');
  return {version:'F22-L03',date:new Date().toISOString(),checks,ok:checks.every(c=>c.passed),readOnly:true};
}

/** Backup escolhido pelo usuário deve corresponder byte a byte ao estado lógico salvo. */
/** Verifica backup do mesmo progresso pedagógico, ignorando apenas navegação e metadados transitórios. */
export async function verifyResetBackup(file, storage=window.localStorage) {
  if(!file || !/\.json$/i.test(file.name) || file.size<=0 || file.size>20*1024*1024)
    return {ok:false,message:'Escolha um backup JSON de até 20 MB.'};
  let documentValue;
  try {documentValue=JSON.parse(await file.text());}
  catch{return {ok:false,message:'O arquivo não é JSON válido.'};}
  const validation=validateProgressBackup(documentValue);
  if(!validation.valid)return {ok:false,message:'Backup incompatível: '+validation.errors.join(' ')};
  let raw;
  try {raw=storage.getItem(STORAGE_KEY);}catch{return {ok:false,message:'Armazenamento inacessível.'};}
  if(raw===null)return {ok:false,message:'Não existe progresso atual para reiniciar.'};
  let actual;
  try {actual=JSON.parse(raw);}catch{return {ok:false,message:'Progresso local ilegível.'};}
  if(!validateStateForSaving(actual))return {ok:false,message:'Progresso local incompatível. Reinício bloqueado.'};
  // A navegação e metadata.updatedAt mudam a cada salvamento, sem alterar respostas.
  // Compare os dados que precisam ser protegidos; nunca ignore alterações em progress.
  const canonical=value=>{
    if(Array.isArray(value))return value.map(canonical);
    if(value && typeof value==='object')return Object.fromEntries(Object.keys(value).sort().map(k=>[k,canonical(value[k])]));
    return value;
  };
  const equal=(left,right)=>JSON.stringify(canonical(left))===JSON.stringify(canonical(right));
  if(!equal(documentValue.state.progress,actual.progress))
    return {ok:false,message:'O progresso pedagógico mudou desde o backup. Exporte um JSON novo e selecione-o novamente.'};
  if(!equal(documentValue.state.preferences,actual.preferences))
    return {ok:false,message:'As preferências mudaram desde o backup. Exporte um JSON novo e selecione-o novamente.'};
  if(documentValue.state.schemaVersion!==actual.schemaVersion)
    return {ok:false,message:'Versão do esquema alterada; reinício bloqueado.'};
  // O snapshot real atual segue sendo exigido literalmente na execução,
  // além do bloqueio de conflitos entre abas e da cópia de recuperação.
  return {ok:true,raw,message:'Backup validado: progresso e preferências coincidem. Navegação e metadados transitórios não interferem.'};
}

export function executeProgressReset({scope,moduleId,verifiedRaw,confirmed=false},storage=window.localStorage) {
  if(!confirmed || typeof verifiedRaw!=='string')return {ok:false,message:'Backup e confirmação obrigatórios.'};
  const guard=verifyProgressBaseline(storage);
  if(!guard.ok)return {ok:false,message:guard.message};
  const status=inspectStoredProgress(storage);
  if(!status.ok || status.code==='empty')return {ok:false,message:'Progresso atual indisponível ou incompatível.'};
  const current=storage.getItem(STORAGE_KEY);
  if(current!==verifiedRaw)return {ok:false,message:'O progresso mudou após validar o backup. Reinício bloqueado.'};
  if(storage.getItem(RECOVERY_KEY)!==null)return {ok:false,message:'Há uma cópia de recuperação pendente. Exporte e libere-a com segurança antes de reiniciar.'};
  const plan=planProgressReset(status.state,scope,moduleId);
  if(!plan.ok)return plan;
  if(!validateStateForSaving(plan.state))return {ok:false,message:'Estado novo inválido; nada alterado.'};
  const replacement=JSON.stringify(plan.state);
  const copy=protectCurrentProgress(current,replacement,storage);
  if(!copy.ok)return {ok:false,message:copy.message};
  // Não reverter automaticamente caso outra aba tenha modificado o progresso.
  const second=verifyProgressBaseline(storage);
  if(!second.ok || storage.getItem(STORAGE_KEY)!==current)return {ok:false,message:'Conflito antes da gravação; progresso atual preservado. A cópia local de recuperação permanece.'};
  try {
    storage.setItem(STORAGE_KEY,replacement);
    if(storage.getItem(STORAGE_KEY)!==replacement)throw Error('Gravação não confirmada');
    acknowledgeProgressWrite(replacement);
    return {ok:true,message:'Reinício confirmado. Uma cópia do progresso anterior foi guardada localmente. A página será recarregada.'};
  } catch {
    // Falha fechada: mantém cópia anterior em RECOVERY_KEY; tentativa de restauração apenas
    // quando não houve alteração concorrente desde a gravação deste fluxo.
    return {ok:false,message:'Falha ao gravar. Não feche a aba: a cópia anterior permanece na chave de recuperação. Verifique o progresso antes de continuar.'};
  }
}

const h=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function installResetUI(main) {
  const card=main.querySelector('#settings-reset');if(!card)return;
  card.innerHTML=`<h2 style="font-size:17px;margin:0 0 8px">↻ Reiniciar progresso</h2>
  <p>Uma operação irreversível neste navegador. A cópia anterior ficará armazenada para recuperação, mas você também deverá guardar seu backup JSON fora do aplicativo.</p>
  <label>Alcance <select id="reset-scope" style="display:block;padding:8px;margin:8px 0"><option value="total">Todo o progresso</option><option value="modulo">Somente um módulo</option></select></label>
  <label id="reset-module-wrap" hidden>Módulo <select id="reset-module" style="display:block;padding:8px;margin:8px 0"></select></label>
  <p><strong>Antes de prosseguir:</strong> use Exportar backup acima, confira que o JSON foi realmente baixado e selecione o mesmo arquivo aqui.</p>
  <label>Confirmar arquivo JSON de backup <input type="file" id="reset-backup-file" accept=".json,application/json" style="display:block;margin:8px 0"></label>
  <button type="button" class="btn" id="reset-validate">Validar cópia externa</button>
  <button type="button" class="btn btn-danger" data-reset-progress="1" id="reset-execute" disabled>Reiniciar progresso</button>
  <p id="reset-result" role="status" aria-live="polite" style="white-space:pre-wrap;margin-top:10px"></p>
  <p class="page-subtitle">No reinício por módulo, históricos globais de simulados e flashcards sem atribuição inequívoca permanecem preservados.</p>
  <hr style="margin:16px 0"><h3>Verificação técnica — somente leitura</h3>
  <button type="button" class="btn" id="reset-audit">Verificar sem alterar dados</button>
  <button type="button" class="btn" id="reset-audit-download" disabled>Baixar relatório TXT</button>
  <pre id="reset-audit-result" role="status" style="white-space:pre-wrap;margin-top:10px"></pre>`;
  const scope=card.querySelector('#reset-scope'),moduleSelect=card.querySelector('#reset-module'),moduleWrap=card.querySelector('#reset-module-wrap');
  const fileInput=card.querySelector('#reset-backup-file'),validate=card.querySelector('#reset-validate'),execute=card.querySelector('#reset-execute'),result=card.querySelector('#reset-result');
  let verified=null;
  const invalidate=()=>{verified=null;execute.disabled=true;result.textContent='';};
  // Somente módulos conhecidos, sem alterar navegação nem progresso.
  for(const m of MODULES){const o=document.createElement('option');o.value=m.id;o.textContent=m.id+' — '+m.title;moduleSelect.append(o);}
  scope.addEventListener('change',()=>{moduleWrap.hidden=scope.value!=='modulo';invalidate();});
  moduleSelect.addEventListener('change',invalidate);fileInput.addEventListener('change',invalidate);
  validate.addEventListener('click',async()=>{
    invalidate();
    const r=await verifyResetBackup(fileInput.files?.[0]);
    if(!r.ok){result.textContent=r.message;return;}
    const guard=verifyProgressBaseline();
    if(!guard.ok){result.textContent='Conflito de aba: '+guard.message;return;}
    if(window.localStorage.getItem(RECOVERY_KEY)!==null){result.textContent='Há cópia de recuperação pendente. Antes de reiniciar, exporte e libere-a na seção de recuperação.';return;}
    const plan=planProgressReset(JSON.parse(r.raw),scope.value,moduleSelect.value);
    if(!plan.ok){result.textContent=plan.message;return;}
    verified=r.raw;execute.disabled=false;result.textContent=r.message+'\n'+plan.message+'\nVocê ainda deve confirmar duas vezes para executar.';
  });
  let auditText='';
  const auditBtn=card.querySelector('#reset-audit'),auditDown=card.querySelector('#reset-audit-download'),auditResult=card.querySelector('#reset-audit-result');
  auditBtn.addEventListener('click',()=>{
    try {const r=inspectResetReadOnly();auditText=['ADM-ESTUDO | FASE 22 — LOTE 3',r.date, ...r.checks.map(c=>(c.passed?'OK':'FALHA')+' — '+c.name),'Somente leitura; operação real não testada.', 'Testes manuais necessários em perfil separado.'].join('\n');auditResult.textContent=auditText;auditDown.disabled=false;}
    catch(e){auditResult.textContent='Falha de leitura: '+String(e?.message||e);auditDown.disabled=true;}
  });
  auditDown.addEventListener('click',()=>{if(!auditText)return;const blob=new Blob([auditText],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='adm-estudo-fase22-lote03-relatorio.txt';document.body.appendChild(a);try{a.click();}finally{a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}});
  execute.addEventListener('click',()=>{
    if(!verified)return;
    const sc=scope.value,mid=moduleSelect.value;
    const label=sc==='total'?'TODO O PROGRESSO':`O MÓDULO ${mid}`;
    if(!window.confirm('ATENÇÃO: você deseja reiniciar '+label+'? Já guardou e conferiu o arquivo JSON fora do navegador?'))return;
    const typed=window.prompt('CONFIRMAÇÃO FINAL: digite exatamente REINICIAR para prosseguir.');
    if(typed!=='REINICIAR'){result.textContent='Cancelado. Nada foi alterado.';return;}
    execute.disabled=true;
    const out=executeProgressReset({scope:sc,moduleId:mid,verifiedRaw:verified,confirmed:true});
    result.textContent=out.message;
    verified=null;
    if(out.ok){window.alert(out.message);window.location.reload();}
  });
}
