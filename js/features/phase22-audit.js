/** ADM-ESTUDO — F22/L06. Auditoria integrada, somente leitura do progresso real.
 * Operações com efeitos potencialmente destrutivos são exercitadas apenas com
 * objetos de exemplo e armazenamentos simulados.
 */
import { STORAGE_KEY } from '../core/storage.js';
import { createInitialState } from '../core/state.js';
import { inspectStoredProgress } from '../core/storage-safety.js';
import { validateProgressBackup } from '../core/progress-backup-validator.js';
import { calculatePartialAchievement, isModuleCompleted } from '../core/progress.js';
import { questionStatus, matchesQuestionStatus } from '../core/question-status.js';
import { questionPerformance } from '../core/question-performance.js';
import { MODULES } from '../data/modules.js';
import { renderDashboard, dashboardLayoutChecks } from './dashboard.js';
import { settingsPageChecks } from './settings.js';
import { maintenanceChecks } from './maintenance.js';
import { planProgressReset, executeProgressReset } from '../core/reset-progress.js';
import { runIntegrationReport } from '../core/integration-report.js';

const clone = x => JSON.parse(JSON.stringify(x));
const object = x => x !== null && typeof x === 'object' && !Array.isArray(x);
function mockStorage(seed={}) {
  const items = new Map(Object.entries(seed));
  let writes = 0;
  return {
    getItem(key){ return items.has(key) ? items.get(key) : null; },
    setItem(key,value){ writes++; items.set(key,String(value)); },
    removeItem(key){ writes++;items.delete(key); },
    get writes(){ return writes; }
  };
}
const resultLine = (passed,name,detail='') => ({ passed:!!passed, name, detail:String(detail||'') });

export function runPhase22Audit(settingsRoot) {
  const checks = [], groups = [];
  const add = (name,fn) => {
    try {
      const r=fn();
      checks.push(resultLine(typeof r === 'object' && r !== null ? r.ok : r,name,typeof r === 'object' && r !== null ? r.detail : ''));
    } catch(error) {checks.push(resultLine(false,name,error?.message||error));}
  };
  const group = (name,fn) => {const start=checks.length;fn();groups.push({name,checks:checks.slice(start)});};
  let beforeRaw=null, state=null, storageReadable=false;
  try {
    beforeRaw=window.localStorage.getItem(STORAGE_KEY);
    storageReadable=true;
    const status=inspectStoredProgress();
    state=status.ok && status.code!=='empty' ? status.state : status.ok ? createInitialState() : null;
  } catch (_) {storageReadable=false;}

  group('Estrutura e navegação',()=>{
    add('Configurações contém backup, reinício e manutenção',()=>
      !!settingsRoot?.querySelector('#settings-backup') &&
      !!settingsRoot?.querySelector('#settings-reset #reset-execute') &&
      !!settingsRoot?.querySelector('#settings-maintenance #maintenance-run'));
    add('Controles do reinício simples sem arquivo obrigatório',()=>
      !!settingsRoot?.querySelector('#reset-scope') && !settingsRoot?.querySelector('#reset-backup-file') &&
      !!settingsRoot?.querySelector('#reset-execute'));
    add('Seis testes técnicos reunidos em Configurações',()=>maintenanceChecks(settingsRoot).ok);
    add('Verificação estrutural de Configurações aprovada',()=>settingsPageChecks(settingsRoot).ok);
    add('Controlador de backup disponível',()=>document.documentElement.dataset.f22BackupControls === 'ready');
    add('Menu de Configurações disponível',()=>!!document.querySelector('[data-nav="configuracoes"]'));
    add('Dashboard com quatro indicadores e sem backup/testes técnicos',()=>{
      if(!state)return {ok:false,detail:'Progresso local incompatível: não renderizado para evitar leitura enganosa.'};
      const detached=document.createElement('div');
      renderDashboard(detached,clone(state));
      const layout=dashboardLayoutChecks(detached);
      return {ok:layout.ok, detail:layout.checks.filter(c=>!c.passed).map(c=>c.name).join('; ')};
    });
  });

  group('Cálculos e questões (exemplos isolados)',()=>{
    const scores={diagnostic:{available:true,score:100},lessonCompletion:{available:true,score:100},lessonSelfAssessment:{available:true,score:100},exercises:{available:true,score:50}};
    add('Aproveitamento de 75% com etapas completas conclui módulo',()=>isModuleCompleted(calculatePartialAchievement(scores)));
    add('Aproveitamento incompleto não conclui módulo',()=>{
      const incomplete=clone(scores);delete incomplete.exercises;
      return !isModuleCompleted(calculatePartialAchievement(incomplete));
    });
    add('Aproveitamento inferior a 75% não conclui módulo',()=>{
      const low=clone(scores);low.exercises.score=49;
      return !isModuleCompleted(calculatePartialAchievement(low));
    });
    add('Questões respondidas e não respondidas classificadas',()=>{
      const q={id:'F22-EXEMPLO',answer:1,options:['A','B']};
      return questionStatus(q,{})==='nao-respondidas' &&
        matchesQuestionStatus(q,{'F22-EXEMPLO':{lastAnswer:1}},'acertadas') &&
        matchesQuestionStatus(q,{'F22-EXEMPLO':{lastAnswer:0}},'erradas');
    });
    add('Desempenho distingue chute correto de conhecimento seguro',()=>{
      const qs=[{id:'Q-X',answer:1,options:['A','B']},{id:'Q-Y',answer:1,options:['A','B']}];
      const st={progress:{questionHistory:{'Q-X':{lastAnswer:1,assessment:'chute'},'Q-Y':{lastAnswer:1,assessment:'seguro'}}}};
      const p=questionPerformance(qs,st);
      return p.answered===2 && p.correct===2 && p.guessedCorrect===1 && p.secureCorrect===1;
    });
    add('Backup de exemplo válido; versão incompatível rejeitada',()=>{
      const s=createInitialState();
      const b={format:'adm-estudo-progress-backup',backupVersion:1,createdAt:new Date().toISOString(),storageKey:STORAGE_KEY,schemaVersion:s.schemaVersion,state:s};
      return validateProgressBackup(b).valid && !validateProgressBackup({...b,backupVersion:42}).valid;
    });
  });

  group('Reinicialização (somente objetos e armazenamento simulados)',()=>{
    const m=MODULES[0];
    add('Catálogo contém módulo de teste',()=>!!m?.id);
    if(!m)return;
    const other=MODULES.find(x=>x.id!==m.id);
    const seed=createInitialState();seed.preferences.theme='exemplo-f22';
    seed.progress.modules[m.id]={started:true};
    if(other)seed.progress.modules[other.id]={started:true};
    if(m.subtopics?.[0])seed.progress.lessons[m.subtopics[0].id]={completed:true};
    const before=JSON.stringify(seed);
    add('Plano total zera aprendizagem e conserva preferências',()=>{
      const r=planProgressReset(seed,'total');
      return r.ok && Object.keys(r.state.progress.modules).length===0 && r.state.preferences.theme==='exemplo-f22';
    });
    add('Plano por módulo preserva outros módulos',()=>{
      const r=planProgressReset(seed,'modulo',m.id);
      return r.ok && !Object.hasOwn(r.state.progress.modules,m.id) &&
        (!other || Object.hasOwn(r.state.progress.modules,other.id));
    });
    add('Planejamentos não alteram estado de entrada',()=>JSON.stringify(seed)===before);
    add('Cancelamento não grava nem remove dados',()=>{
      const raw=JSON.stringify(seed),storage=mockStorage({[STORAGE_KEY]:raw});
      const r=executeProgressReset({scope:'total',confirmed:false},storage);
      return !r.ok && storage.getItem(STORAGE_KEY)===raw && storage.writes===0;
    });
    add('Reinício total simulado limpa dados de teste',()=>{
      const storage=mockStorage({[STORAGE_KEY]:JSON.stringify(seed)});
      const r=executeProgressReset({scope:'total',confirmed:true},storage);
      const next=JSON.parse(storage.getItem(STORAGE_KEY));
      return r.ok && Object.keys(next.progress.modules).length===0 && next.preferences.theme==='exemplo-f22';
    });
    add('Reinício por módulo simulado preserva outro módulo',()=>{
      const storage=mockStorage({[STORAGE_KEY]:JSON.stringify(seed)});
      const r=executeProgressReset({scope:'modulo',moduleId:m.id,confirmed:true},storage);
      const next=JSON.parse(storage.getItem(STORAGE_KEY));
      return r.ok && !Object.hasOwn(next.progress.modules,m.id) &&
        (!other || Object.hasOwn(next.progress.modules,other.id));
    });
  });

  group('Integração existente e preservação do progresso',()=>{
    add('Suítes integradas da Fase 20 sem falhas',()=>{
      const r=runIntegrationReport();
      return {ok:r.summary?.failed===0 && r.summary?.pending===0,
        detail:`${r.summary?.ok||0} aprovadas; ${r.summary?.failed||0} falhas; ${r.summary?.pending||0} pendentes`};
    });
    add('Leitura do armazenamento disponível e esquema compatível',()=>storageReadable && !!state);
    add('Auditoria não modificou o progresso armazenado',()=>{
      if(!storageReadable)return false;
      return window.localStorage.getItem(STORAGE_KEY)===beforeRaw;
    });
  });
  const total=checks.length,failed=checks.filter(c=>!c.passed).length;
  return {version:'F22-L06',generatedAt:new Date().toISOString(),readOnly:true,
    ok:failed===0,total,passed:total-failed,failed,groups,
    manualPending:[
      'Exportar e validar um backup real; conferir o arquivo baixado',
      'Restauração apenas em perfil de testes, seguida de recarga e conferência',
      'Cancelar a confirmação do reinício real e conferir preservação',
      'Reinício por módulo em perfil de testes e conferência dos demais módulos',
      'Reinício total em perfil de testes e conferência das preferências',
      'Abrir o mesmo perfil em duas abas e verificar comportamento de conflitos e recargas',
      'Confirmar que revisões, questões, estatísticas e acesso aos módulos continuam funcionando'
    ],homologated:false};
}

export function formatPhase22Audit(r) {
  const lines=['ADM-ESTUDO — FASE 22 / LOTE 6',`Gerado em: ${r.generatedAt}`,
    `VERIFICAÇÕES AUTOMATIZADAS: ${r.ok?'APROVADAS':'COM FALHAS'}`,
    `Total: ${r.total} | OK: ${r.passed} | FALHAS: ${r.failed}`,
    'Escopo: leitura do progresso real e testes com estados e armazenamentos simulados.',
    ''];
  for(const g of r.groups){
    lines.push('=== '+g.name.toUpperCase()+' ===');
    for(const c of g.checks)lines.push(`${c.passed?'OK':'FALHA'} — ${c.name}${c.detail?' | '+c.detail:''}`);
    lines.push('');
  }
  lines.push('=== HOMOLOGAÇÃO MANUAL PENDENTE ===',...r.manualPending.map((s,i)=>`${i+1}. ${s}`),
    '', 'A execução desta auditoria NÃO realiza reinício, restauração ou exportação automática.',
    'A conclusão automatizada não significa homologação das operações reais.');
  return lines.join('\n');
}

export function installPhase22AuditUI(main) {
  const anchor=main.querySelector('#settings-maintenance');
  if(!anchor)return;
  const section=document.createElement('section');section.id='settings-final-audit';
  section.className='settings-card';
  section.style.cssText='background:var(--surface,#fff);border:1px solid var(--border,#e2e8f0);border-radius:10px;padding:18px;margin:12px 0';
  section.innerHTML=`<h2 style="font-size:17px;margin:0 0 8px">✅ Auditoria integrada — Fase 22 / Lote 6</h2>
    <p>Verificação automatizada no navegador, em modo de leitura. Reinício e restauração são simulados, nunca executados sobre seu progresso.</p>
    <button type="button" class="btn btn-primary" id="f22-final-run">Executar auditoria integrada</button>
    <button type="button" class="btn" id="f22-final-download" disabled>Baixar relatório TXT</button>
    <pre id="f22-final-result" role="status" aria-live="polite" style="white-space:pre-wrap;max-height:500px;overflow:auto;margin-top:12px"></pre>
    <p class="page-subtitle">Para homologação final, os testes manuais em perfil separado ainda são necessários.</p>`;
  anchor.insertAdjacentElement('afterend',section);
  let report='';const output=section.querySelector('#f22-final-result'),download=section.querySelector('#f22-final-download');
  section.querySelector('#f22-final-run').addEventListener('click',()=>{
    try {report=formatPhase22Audit(runPhase22Audit(main));output.textContent=report;download.disabled=false;}
    catch(e){report='';output.textContent='Auditoria interrompida: '+String(e?.message||e);download.disabled=true;}
  });
  download.addEventListener('click',()=>{
    if(!report)return;
    const url=URL.createObjectURL(new Blob([report],{type:'text/plain;charset=utf-8'}));
    const a=document.createElement('a');a.href=url;a.download='adm-estudo-fase22-lote06-relatorio.txt';
    document.body.appendChild(a);try{a.click();}finally{a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}
  });
}
