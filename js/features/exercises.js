import { questionsForModule } from '../data/questions.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const abc=['A','B','C','D','E'];
const REVIEW = Object.freeze({seguro:{days:7,label:'Acertei com segurança'},duvida:{days:3,label:'Acertei com dúvida'},chute:{days:1,label:'Acertei chutando'},desconhecimento:{days:1,label:'Errei por desconhecimento'},pegadinha:{days:2,label:'Errei por pegadinha'},interpretacao:{days:2,label:'Errei por interpretação'},desatencao:{days:3,label:'Errei por desatenção'}});
const selfAssessOptions=(correct)=>correct?['seguro','duvida','chute']:['desconhecimento','pegadinha','interpretacao','desatencao'];
const shuffle=a=>{const x=[...a];for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;};
export function exercisePool(moduleId){return questionsForModule(moduleId)}
export function createExerciseSession(state,moduleId){
 const all=exercisePool(moduleId),base=all.filter(q=>q.difficulty==='media');
 const hard=all.filter(q=>q.difficulty==='dificil');
 if(!base.length||hard.length<6)return false;
 const shuffled=shuffle(hard).slice(0,6);
 const ids=[...base,...shuffled].map(q=>q.id);
 state.progress.exercises[moduleId]={ids,answers:{},assessments:{},cursor:0,startedAt:new Date().toISOString(),finishedAt:null};
 return true;
}
export function exerciseSummary(state,moduleId){
 const s=state.progress?.exercises?.[moduleId];if(!s?.ids?.length)return null;
 const pool=exercisePool(moduleId),correct=s.ids.reduce((n,id)=>{const q=pool.find(q=>q.id===id);return n+(q&&s.answers?.[id]===q.answer?1:0)},0);
 const answered=s.ids.filter(id=>Number.isInteger(s.answers?.[id])).length;
 const assessed=s.ids.filter(id=>!!s.assessments?.[id]).length;
 return {total:s.ids.length,answered,assessed,correct,finished:!!s.finishedAt,score:Math.round(correct/s.ids.length*100)};
}
export function answerExercise(state,moduleId,qid,choice){
 const s=state.progress?.exercises?.[moduleId],q=exercisePool(moduleId).find(x=>x.id===qid);
 if(!s||!q||s.finishedAt||!s.ids.includes(qid)||Number.isInteger(s.answers[qid])||!Number.isInteger(choice)||choice<0||choice>=q.options.length)return false;
 s.answers[qid]=choice;
 const now=new Date().toISOString();
 state.progress.questionHistory[qid]={lastAnswer:choice,correct:choice===q.answer,updatedAt:now};
 if(choice!==q.answer){
  const errors=state.progress.errors;
  if(Array.isArray(errors)&&!errors.some(e=>e?.questionId===qid))errors.push({questionId:qid,moduleId,subtopicId:q.subtopicId,createdAt:now});
 }
 // A atividade só termina quando todas as respostas e autoavaliações forem registradas.
 return true;
}

export function assessExercise(state,moduleId,qid,reason){
 const s=state.progress?.exercises?.[moduleId],q=exercisePool(moduleId).find(x=>x.id===qid);
 if(!s||!q||s.finishedAt||s.ids[s.cursor]!==qid||!Number.isInteger(s.answers?.[qid])||s.assessments?.[qid]||!REVIEW[reason])return false;
 const correct=s.answers[qid]===q.answer;
 if(!selfAssessOptions(correct).includes(reason))return false;
 const now=new Date(),due=new Date(now.getTime()+REVIEW[reason].days*86400000);
 s.assessments??={};s.assessments[qid]={reason,correct,assessedAt:now.toISOString(),reviewAt:due.toISOString(),intervalDays:REVIEW[reason].days};
 state.progress.questionHistory??={};state.progress.questionHistory[qid]={...(state.progress.questionHistory[qid]||{}),assessment:reason,reviewAt:due.toISOString(),intervalDays:REVIEW[reason].days,updatedAt:now.toISOString()};
 // A fila usa o mesmo identificador da questão e é atualizada a cada nova tentativa.
 state.progress.reviewSchedule??={};state.progress.reviewSchedule[qid]={questionId:qid,moduleId,subtopicId:q.subtopicId,reason,correct,intervalDays:REVIEW[reason].days,dueAt:due.toISOString(),updatedAt:now.toISOString()};
 if(s.ids.every(id=>Number.isInteger(s.answers[id])&&!!s.assessments[id]))s.finishedAt=now.toISOString();
 return true;
}

export function renderExercises(main,moduleId,state){
 const all=exercisePool(moduleId),s=state.progress?.exercises?.[moduleId];
 if(!all.length){main.innerHTML='<section class="exercise-panel"><button class="btn" data-action="exercise-back">← Voltar ao módulo</button><h1>Exercícios em preparação</h1><p>As questões deste módulo ainda não foram elaboradas.</p></section>';return;}
 const summary=exerciseSummary(state,moduleId);
 if(!s?.ids?.length){main.innerHTML=`<section class="exercise-panel"><button class="btn" data-action="exercise-back">← Voltar ao módulo</button><h1>Praticar o que aprendi</h1><p>12 questões de aprendizagem (duas por subtópico) e 6 difíceis sorteadas entre as 12 disponíveis.</p><p>Você receberá a correção após responder a cada questão. As respostas são salvas no navegador.</p><button class="btn btn-primary" data-action="exercise-start">Iniciar atividade</button></section>`;return;}
 const cursor=Math.min(Math.max(Number(s.cursor)||0,0),s.ids.length-1);
 const current=all.find(x=>x.id===s.ids[cursor]);
 const selected=s.answers[current.id],answered=Number.isInteger(selected),assessed=!!s.assessments?.[current.id],idx=s.ids.indexOf(current.id);
 const comments=answered?`<section class="exercise-feedback" aria-live="polite"><h3>${selected===current.answer?'Resposta correta':'Resposta incorreta'} — gabarito ${current.type==='ce'?current.options[current.answer]:abc[current.answer]}</h3><p><strong>Fundamento:</strong> ${esc(current.explanation)}</p><h4>Comentários das alternativas</h4><ol type="A">${current.options.map((o,i)=>`<li><strong>${esc(o)}:</strong> ${esc(current.optionComments?.[i]||'Consulte o fundamento acima.')}</li>`).join('')}</ol><p><strong>Conceito:</strong> ${esc(current.concept)}</p><p><strong>Pegadinha:</strong> ${esc(current.trap)}</p><p><strong>Como aparece em concursos:</strong> ${esc(current.examTip)}</p><p><strong>Exemplo inédito:</strong> ${esc(current.newExample)}</p><p><strong>Desafio:</strong> ${esc(current.challenge)}</p></section>`:'';
 const assessment=answered?`<section class="exercise-assessment"><h3>Como foi seu desempenho nesta questão?</h3><p>${selected===current.answer?'Você acertou.':'Você errou.'} Selecione o motivo para programar a revisão.</p>${assessed?`<p><strong>Registrado:</strong> ${esc(REVIEW[s.assessments[current.id].reason].label)} · revisão em ${s.assessments[current.id].intervalDays} dia(s).</p>`:`<div class="exercise-assessment-options">${selfAssessOptions(selected===current.answer).map(reason=>`<button type="button" class="btn" data-exercise-assess="${reason}">${esc(REVIEW[reason].label)}</button>`).join('')}</div>`}</section>`:'';
 const next=assessed&&!summary.finished?`<button class="btn btn-primary" data-action="exercise-next">Próxima questão</button>`:'';
 main.innerHTML=`<section class="exercise-panel"><button class="btn" data-action="exercise-back">← Voltar ao módulo</button><h1>Exercícios de aprendizagem — ADM-01</h1><p>${summary.answered}/${summary.total} respondidas · ${summary.correct} acertos ${summary.finished?'· Concluído':''}</p>${summary.finished?`<div class="notice"><strong>Resultado: ${summary.score}%</strong> (${summary.correct}/${summary.total}). Para nova seleção de questões difíceis, inicie outra tentativa.</div><button class="btn" data-action="exercise-restart">Nova tentativa</button>`:''}<article class="exercise-question"><p class="exercise-meta">${esc(current.subtopicId)} · ${current.difficulty==='media'?'Média':'Difícil'} · ${esc(current.type)} · questão ${idx+1} de ${s.ids.length}</p><h2>${esc(current.stem).replace(/\n/g,'<br>')}</h2><div class="exercise-options">${current.options.map((o,i)=>`<button type="button" class="exercise-option ${answered&&i===current.answer?'is-correct':''} ${answered&&i===selected&&selected!==current.answer?'is-wrong':''}" data-exercise-choice="${i}" ${answered||summary.finished?'disabled':''}><strong>${current.type==='ce'?'':abc[i]+') '}</strong>${esc(o)}</button>`).join('')}</div>${comments}${assessment}${next}</article></section>`;
}

export function nextExercise(state,moduleId){const s=state.progress?.exercises?.[moduleId];if(!s||!s.assessments?.[s.ids[s.cursor]])return false;if(s.cursor<s.ids.length-1){s.cursor++;return true;}return false;}
