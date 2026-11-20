import { scheduleAdaptiveReview } from '../core/adaptive-review.js';
import { MODULES } from '../data/modules.js';
import { renderErrorAnalysis } from '../core/error-intelligence.js';
import { questionsForModule } from '../data/questions.js';

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const allQuestions = () => MODULES.flatMap(m => questionsForModule(m.id));
const questionMap = () => new Map(allQuestions().map(q => [q.id, q]));
const interval = Object.freeze({seguro:7,duvida:3,chute:1,desconhecimento:1,pegadinha:2,interpretacao:2,desatencao:3});
const labels = {seguro:'Acertei com segurança',duvida:'Acertei com dúvida',chute:'Acertei por palpite',desconhecimento:'Errei por desconhecimento',pegadinha:'Errei por pegadinha',interpretacao:'Errei por interpretação',desatencao:'Errei por desatenção'};
const letter = i => String.fromCharCode(65+i);
const shuffled = items => {const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const due = record => record?.dueAt && Number.isFinite(Date.parse(record.dueAt)) && Date.parse(record.dueAt)<=Date.now();

export function reviewCounts(state) {
 const schedule=Object.values(state.progress?.reviewSchedule||{});
 const valid=schedule.filter(x=>x?.questionId);
 return {scheduled:valid.length,due:valid.filter(due).length,errors:Array.isArray(state.progress?.errors)?state.progress.errors.length:0};
}
function itemsFor(state,mode){
 const lookup=questionMap(),schedule=Object.values(state.progress?.reviewSchedule||{});
 if(mode==='revisao')return schedule.filter(due).map(r=>({q:lookup.get(r.questionId),record:r})).filter(x=>x.q);
 const errors=Array.isArray(state.progress?.errors)?state.progress.errors:[];
 return errors.map(r=>({q:lookup.get(r.questionId),record:r})).filter(x=>x.q);
}
export function renderReviewList(main,state,mode){
 const items=itemsFor(state,mode),counts=reviewCounts(state);
 const missing=mode==='revisao'?counts.due-items.length:counts.errors-items.length;
 main.innerHTML=`<section class="module-detail"><h1 class="page-title">${mode==='revisao'?'Revisão espaçada':'Meus Erros'}</h1>
 <p class="page-subtitle">${mode==='revisao'?`${counts.due} revisão(ões) vencida(s) · ${counts.scheduled} programada(s)`:`${counts.errors} registro(s) de erro`}</p>
 <p>${mode==='revisao'?'Responda às questões previstas para hoje ou anteriores. A próxima revisão será agendada conforme sua autoavaliação.':'Refaça as questões em que houve erro. Um acerto não apaga automaticamente o histórico; você pode remover um registro manualmente.'}</p>
 ${missing>0?`<div class="notice">${missing} registro(s) sem questão correspondente no banco atual. Nenhum dado foi apagado.</div>`:''}
 ${mode==='erros'?renderErrorAnalysis(state):''}
 ${items.length?`<div class="module-list">${items.map(({q,record})=>`<article class="module-card" style="display:block;margin-bottom:12px"><strong>${escapeHtml(q.subtopicId||q.moduleId||'Questão')}</strong><p>${escapeHtml(q.stem).slice(0,240)}</p><button type="button" class="btn btn-primary" data-review-open="${escapeHtml(q.id)}">Responder novamente</button>${mode==='erros'?` <button type="button" class="btn" data-review-remove="${escapeHtml(q.id)}">Remover do banco de erros</button>`:''}</article>`).join('')}</div>`:'<div class="notice">Nenhuma questão disponível nesta lista no momento.</div>'}
 </section>`;
}
export function renderReviewQuestion(main,state,mode,id){
 const q=questionMap().get(id);
 if(!q){renderReviewList(main,state,mode);return;}
 const attempt=state.progress?.reviewAttempts?.[id];
 const order=Array.isArray(attempt?.order)&&attempt.order.length===q.options.length?attempt.order:q.options.map((_,i)=>i);
 const answered=Number.isInteger(attempt?.answer);
 const correct=answered&&attempt.answer===q.answer;
 const assessed=!!attempt?.assessment;
 const options=order.map((idx,i)=>`<button type="button" class="btn ${answered&&idx===q.answer?'is-correct':''}" style="display:block;margin:8px 0;text-align:left;width:100%" ${answered?'disabled':''} data-review-choice="${idx}">${q.type==='ce'?'':letter(i)+') '}${escapeHtml(q.options[idx])}</button>`).join('');
 const explanation=answered?`<section class="exercise-feedback"><h3>${correct?'Resposta correta':'Resposta incorreta'} — ${escapeHtml(q.options[q.answer])}</h3><p><strong>Fundamento:</strong> ${escapeHtml(q.explanation)}</p><ol>${order.map(i=>`<li><strong>${escapeHtml(q.options[i])}:</strong> ${escapeHtml(q.optionComments?.[i]||'Consulte o fundamento.')}</li>`).join('')}</ol><p><strong>Conceito:</strong> ${escapeHtml(q.concept)}</p><p><strong>Pegadinha:</strong> ${escapeHtml(q.trap)}</p><p><strong>Exemplo adicional:</strong> ${escapeHtml(q.newExample)}</p></section>`:'';
 const reasons=correct?['seguro','duvida','chute']:['desconhecimento','pegadinha','interpretacao','desatencao'];
 main.innerHTML=`<section class="module-detail"><button class="btn" data-review-back="1">← Voltar</button><h1 class="page-title">Revisão da questão</h1><p>${escapeHtml(q.subtopicId||'')}</p><h2>${escapeHtml(q.stem)}</h2>${options}${explanation}
 ${answered&&!assessed?`<h3>Como foi sua resposta?</h3>${reasons.map(r=>`<button type="button" class="btn" style="margin:4px" data-review-assess="${r}">${labels[r]}</button>`).join('')}`:''}
 ${assessed?`<div class="notice">Revisão registrada: ${escapeHtml(labels[attempt.assessment])}. Próxima revisão em ${interval[attempt.assessment]} dia(s).</div><button class="btn btn-primary" data-review-back="1">Voltar à lista</button>`:''}</section>`;
}
export function beginReview(state,id){
 const q=questionMap().get(id);
 if(!q)return false;
 state.progress.reviewAttempts??={};
 state.progress.reviewAttempts[id]={order:q.type==='ce'?q.options.map((_,i)=>i):shuffled(q.options.map((_,i)=>i)),answer:null,assessment:null,startedAt:new Date().toISOString()};
 return true;
}
export function answerReview(state,id,choice){
 const a=state.progress?.reviewAttempts?.[id],q=questionMap().get(id);
 if(!a||!q||Number.isInteger(a.answer)||!Number.isInteger(choice)||choice<0||choice>=q.options.length)return false;
 a.answer=choice;return true;
}
export function assessReview(state,id,reason){
 const a=state.progress?.reviewAttempts?.[id],q=questionMap().get(id);
 if(!a||!q||!Number.isInteger(a.answer)||a.assessment||!Object.hasOwn(interval,reason))return false;
 const correct=a.answer===q.answer;
 if(!((correct?['seguro','duvida','chute']:['desconhecimento','pegadinha','interpretacao','desatencao']).includes(reason)))return false;
 const adaptive=scheduleAdaptiveReview(state,'question',id,reason);
 const now=new Date(),next=new Date(adaptive.dueAt);
 a.assessment=reason;a.completedAt=now.toISOString();
 state.progress.reviewSchedule??={};
 state.progress.reviewSchedule[id]={questionId:id,moduleId:q.moduleId||q.subtopicId?.slice(0,5),subtopicId:q.subtopicId,reason,correct,intervalDays:adaptive.intervalDays,dueAt:next.toISOString(),updatedAt:now.toISOString()};
 state.progress.questionHistory??={};
 state.progress.questionHistory[id]={...(state.progress.questionHistory[id]||{}),lastAnswer:a.answer,correct,assessment:reason,reviewAt:next.toISOString(),intervalDays:adaptive.intervalDays,updatedAt:now.toISOString()};
 if(!correct){state.progress.errors??=[];if(!state.progress.errors.some(x=>x.questionId===id))state.progress.errors.push({questionId:id,moduleId:q.moduleId||q.subtopicId?.slice(0,5),subtopicId:q.subtopicId,createdAt:now.toISOString()});}
 return true;
}
export function removeError(state,id){
 const errors=state.progress?.errors;
 if(!Array.isArray(errors))return false;
 const before=errors.length;state.progress.errors=errors.filter(x=>x?.questionId!==id);return before!==state.progress.errors.length;
}
