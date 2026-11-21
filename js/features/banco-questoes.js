import { MODULES, AREAS } from '../data/modules.js';
import { recordBankReview } from '../core/review-events.js';
import { questionsForModule } from '../data/questions.js';
import { matchesQuestionStatus, countQuestionStatuses, QUESTION_STATUS_OPTIONS } from '../core/question-status.js';

const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffle = values => {const a=[...values];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const valid = q => q && typeof q.id==='string' && Array.isArray(q.options) && q.options.length>=2 && Number.isInteger(q.answer) && q.answer>=0 && q.answer<q.options.length;
function bank(){const seen=new Set(),out=[];for(const m of MODULES){for(const q of questionsForModule(m.id)||[]){if(!valid(q)||seen.has(q.id))continue;seen.add(q.id);out.push({...q,moduleId:m.id,area:m.area});}}return out;}
const get = id => bank().find(q=>q.id===id);
function store(state){
 state.progress??={};
 state.progress.questionBank??={filter:{area:'todas',moduleId:'todos',difficulty:'todas',situation:'todas'},session:null};
 const d=state.progress.questionBank;
 d.filter??={};
 d.filter.area??='todas';d.filter.moduleId??='todos';d.filter.difficulty??='todas';d.filter.situation??='todas';
 return d;
}
function matches(q,f,history){
 return (f.area==='todas'||q.area===f.area)
   &&(f.moduleId==='todos'||q.moduleId===f.moduleId)
   &&(f.difficulty==='todas'||q.difficulty===f.difficulty)
   &&matchesQuestionStatus(q,history,f.situation);
}
const types = {ce:'Certo ou Errado',classica:'Múltipla escolha',vf:'Verdadeiro/Falso',combinacao:'Combinação',associacao:'Associação',lacunas:'Lacunas',exceto:'EXCETO'};
export function updateBankFilter(state,key,value){
 const data=store(state);if(data.session)return false;
 if(!['area','moduleId','difficulty','situation'].includes(key))return false;
 const f={...data.filter,[key]:value};if(key==='area')f.moduleId='todos';
 if(!['todas',...Object.keys(AREAS)].includes(f.area))return false;
 if(f.moduleId!=='todos'&&!MODULES.some(m=>m.id===f.moduleId&&(f.area==='todas'||m.area===f.area)))return false;
 if(!['todas','media','dificil','facil'].includes(f.difficulty))return false;
 if(!QUESTION_STATUS_OPTIONS.includes(f.situation))return false;
 data.filter=f;return true;
}
export function startBankSession(state){
 const data=store(state);if(data.session)return false;
 const history=state.progress?.questionHistory||{};
 const available=shuffle(bank().filter(q=>matches(q,data.filter,history)));
 if(!available.length)return false;
 data.session={ids:available.map(q=>q.id),cursor:0,answers:{},orders:Object.fromEntries(available.map(q=>[q.id,q.type==='ce'?q.options.map((_,i)=>i):shuffle(q.options.map((_,i)=>i))])),startedAt:new Date().toISOString()};return true;
}
export function answerBankQuestion(state,id,answer){
 const s=store(state).session,q=get(id);
 if(!s||s.ids[s.cursor]!==id||!q||Object.hasOwn(s.answers,id)||!Number.isInteger(answer)||answer<0||answer>=q.options.length)return false;
 s.answers[id]=answer;recordBankReview(state,q,answer);return true;
}
export function nextBankQuestion(state){const s=store(state).session;if(!s||!Object.hasOwn(s.answers,s.ids[s.cursor])||s.cursor>=s.ids.length-1)return false;s.cursor++;return true;}
export function closeBankSession(state){const d=store(state);if(!d.session)return false;d.session=null;return true;}
export function renderQuestionBank(main,state){
 const d=store(state),all=bank(),s=d.session;
 if(!s){
  const history=state.progress?.questionHistory||{};
  const available=all.filter(q=>matches(q,d.filter,history));
  const areaModuleDifficulty=all.filter(q=>(d.filter.area==='todas'||q.area===d.filter.area)&&(d.filter.moduleId==='todos'||q.moduleId===d.filter.moduleId)&&(d.filter.difficulty==='todas'||q.difficulty===d.filter.difficulty));
  const counts=countQuestionStatuses(areaModuleDifficulty,history);
  const mods=MODULES.filter(m=>d.filter.area==='todas'||m.area===d.filter.area);
  const option=(v,label,current)=>`<option value="${esc(v)}" ${v===current?'selected':''}>${esc(label)}</option>`;
  main.innerHTML=`<section class="module-detail"><h1 class="page-title">Banco de Questões</h1><p class="page-subtitle">Questões cadastradas no aplicativo, com correção imediata. Não são necessariamente questões reais de concursos.</p>
  <p><strong>${all.length}</strong> questões válidas no banco · <strong>${available.length}</strong> após os filtros.</p>
  <label>Área <select data-bank-filter="area">${option('todas','Todas as áreas',d.filter.area)}${Object.entries(AREAS).map(([id,label])=>option(id,label,d.filter.area)).join('')}</select></label>
  <label>Módulo <select data-bank-filter="moduleId">${option('todos','Todos os módulos',d.filter.moduleId)}${mods.map(m=>option(m.id,`${m.id} — ${m.title}`,d.filter.moduleId)).join('')}</select></label>
  <label>Dificuldade <select data-bank-filter="difficulty">${[['todas','Todas'],['facil','Fácil'],['media','Média'],['dificil','Difícil']].map(([v,l])=>option(v,l,d.filter.difficulty)).join('')}</select></label>
  <label>Situação das questões <select data-bank-filter="situation">${[['todas','Todas as questões'],['nao-respondidas','Somente não respondidas'],['respondidas','Somente respondidas'],['erradas','Questões que errei'],['acertadas','Questões que acertei']].map(([v,l])=>option(v,l,d.filter.situation)).join('')}</select></label>
  <p><strong>${counts.respondidas}</strong> respondidas · <strong>${counts['nao-respondidas']}</strong> não respondidas · <strong>${counts.acertadas}</strong> acertadas · <strong>${counts.erradas}</strong> erradas (conforme a última resposta registrada, nos filtros de área, módulo e dificuldade).</p>
  <p>Uma sessão percorre as questões filtradas em ordem sorteada, sem repetições. Você pode encerrá-la quando quiser. As respostas já registradas permanecem no histórico; questões não respondidas continuam disponíveis em outras sessões.</p>
  <button type="button" class="btn btn-primary" data-action="bank-start" ${available.length?'':'disabled'}>Iniciar questões (${available.length})</button>${!all.length?'<div class="notice">Nenhuma questão válida foi encontrada. Verifique se js/data/questions.js está preenchido e exporta questionsForModule.</div>':''}</section>`;return;
 }
 const q=get(s.ids[s.cursor]);if(!q){main.innerHTML='<section class="module-detail"><h1>Questão indisponível</h1><p>O banco de questões mudou durante esta sessão.</p><button class="btn" data-action="bank-close">Encerrar sessão</button></section>';return;}
 const order=s.orders[q.id]||q.options.map((_,i)=>i),answered=Object.hasOwn(s.answers,q.id),correct=answered&&s.answers[q.id]===q.answer,completed=Object.keys(s.answers).length;
 main.innerHTML=`<section class="module-detail"><button class="btn" data-action="bank-close">Encerrar sessão</button><h1 class="page-title">Banco de Questões</h1><p class="page-subtitle">${s.cursor+1} de ${s.ids.length} · ${completed} respondidas · ${esc(q.moduleId)} · ${esc(q.subtopicId)} · ${esc(q.difficulty||'')}</p><h2>${esc(q.stem)}</h2><div class="exercise-options">${order.map((original,index)=>`<button type="button" class="btn" style="display:block;width:100%;text-align:left;margin:8px 0" data-bank-choice="${original}" ${answered?'disabled':''}>${q.type==='ce'?'':String.fromCharCode(65+index)+') '}${esc(q.options[original])}</button>`).join('')}</div>
 ${answered?`<section class="exercise-feedback"><h3>${correct?'Resposta correta':'Resposta incorreta'}</h3><p><strong>Gabarito:</strong> ${esc(q.options[q.answer])}</p><p><strong>Fundamento:</strong> ${esc(q.explanation)}</p><h3>Alternativas comentadas</h3><ol>${order.map(i=>`<li><strong>${esc(q.options[i])}:</strong> ${esc(q.optionComments?.[i]||'Consulte o fundamento.')}</li>`).join('')}</ol><p><strong>Conceito:</strong> ${esc(q.concept)}</p><p><strong>Pegadinha:</strong> ${esc(q.trap)}</p><p><strong>Exemplo novo:</strong> ${esc(q.newExample)}</p></section>${s.cursor<s.ids.length-1?'<button class="btn btn-primary" data-action="bank-next">Próxima questão</button>':'<div class="notice">Você chegou ao fim das questões selecionadas. Encerre a sessão para escolher outros filtros.</div>'}`:''}</section>`;
}
