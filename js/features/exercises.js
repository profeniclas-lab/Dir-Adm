import { questionsForModule } from '../data/questions.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const abc=['A','B','C','D','E'];
export function exercisePool(moduleId){return questionsForModule(moduleId)}
export function createExerciseSession(state,moduleId){
 const all=exercisePool(moduleId),base=all.filter(q=>q.difficulty==='media');
 const hard=all.filter(q=>q.difficulty==='dificil');
 if(!base.length||hard.length<6)return false;
 const shuffled=[...hard].sort(()=>Math.random()-.5).slice(0,6);
 const ids=[...base,...shuffled].map(q=>q.id);
 state.progress.exercises[moduleId]={ids,answers:{},cursor:0,startedAt:new Date().toISOString(),finishedAt:null};
 return true;
}
export function exerciseSummary(state,moduleId){
 const s=state.progress?.exercises?.[moduleId];if(!s?.ids?.length)return null;
 const pool=exercisePool(moduleId),correct=s.ids.reduce((n,id)=>{const q=pool.find(q=>q.id===id);return n+(q&&s.answers?.[id]===q.answer?1:0)},0);
 const answered=s.ids.filter(id=>Number.isInteger(s.answers?.[id])).length;
 return {total:s.ids.length,answered,correct,finished:!!s.finishedAt,score:Math.round(correct/s.ids.length*100)};
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
 if(s.ids.every(id=>Number.isInteger(s.answers[id])))s.finishedAt=now;
 return true;
}
export function renderExercises(main,moduleId,state){
 const all=exercisePool(moduleId),s=state.progress?.exercises?.[moduleId];
 if(!all.length){main.innerHTML='<section class="exercise-panel"><button class="btn" data-action="exercise-back">← Voltar ao módulo</button><h1>Exercícios em preparação</h1><p>As questões deste módulo ainda não foram elaboradas.</p></section>';return;}
 const summary=exerciseSummary(state,moduleId);
 if(!s?.ids?.length){main.innerHTML=`<section class="exercise-panel"><button class="btn" data-action="exercise-back">← Voltar ao módulo</button><h1>Praticar o que aprendi</h1><p>12 questões de aprendizagem (duas por subtópico) e 6 difíceis sorteadas entre as 12 disponíveis.</p><p>Você receberá a correção após responder a cada questão. As respostas são salvas no navegador.</p><button class="btn btn-primary" data-action="exercise-start">Iniciar atividade</button></section>`;return;}
 const cursor=Math.min(Math.max(Number(s.cursor)||0,0),s.ids.length-1);
 const current=all.find(x=>x.id===s.ids[cursor]);
 const selected=s.answers[current.id],answered=Number.isInteger(selected),idx=s.ids.indexOf(current.id);
 const comments=answered?`<section class="exercise-feedback" aria-live="polite"><h3>${selected===current.answer?'Resposta correta':'Resposta incorreta'} — gabarito ${current.type==='ce'?current.options[current.answer]:abc[current.answer]}</h3><p><strong>Fundamento:</strong> ${esc(current.explanation)}</p><h4>Comentários das alternativas</h4><ol type="A">${current.options.map((o,i)=>`<li><strong>${esc(o)}:</strong> ${esc(current.optionComments?.[i]||'Consulte o fundamento acima.')}</li>`).join('')}</ol><p><strong>Conceito:</strong> ${esc(current.concept)}</p><p><strong>Pegadinha:</strong> ${esc(current.trap)}</p><p><strong>Como aparece em concursos:</strong> ${esc(current.examTip)}</p><p><strong>Exemplo inédito:</strong> ${esc(current.newExample)}</p><p><strong>Desafio:</strong> ${esc(current.challenge)}</p></section>`:'';
 const next=answered&&!summary.finished?`<button class="btn btn-primary" data-action="exercise-next">Próxima questão</button>`:'';
 main.innerHTML=`<section class="exercise-panel"><button class="btn" data-action="exercise-back">← Voltar ao módulo</button><h1>Exercícios de aprendizagem — ADM-01</h1><p>${summary.answered}/${summary.total} respondidas · ${summary.correct} acertos ${summary.finished?'· Concluído':''}</p>${summary.finished?`<div class="notice"><strong>Resultado: ${summary.score}%</strong> (${summary.correct}/${summary.total}). Para nova seleção de questões difíceis, inicie outra tentativa.</div><button class="btn" data-action="exercise-restart">Nova tentativa</button>`:''}<article class="exercise-question"><p class="exercise-meta">${esc(current.subtopicId)} · ${current.difficulty==='media'?'Média':'Difícil'} · ${esc(current.type)} · questão ${idx+1} de ${s.ids.length}</p><h2>${esc(current.stem).replace(/\n/g,'<br>')}</h2><div class="exercise-options">${current.options.map((o,i)=>`<button type="button" class="exercise-option ${answered&&i===current.answer?'is-correct':''} ${answered&&i===selected&&selected!==current.answer?'is-wrong':''}" data-exercise-choice="${i}" ${answered||summary.finished?'disabled':''}><strong>${current.type==='ce'?'':abc[i]+') '}</strong>${esc(o)}</button>`).join('')}</div>${comments}${next}</article></section>`;
}

export function nextExercise(state,moduleId){const s=state.progress?.exercises?.[moduleId];if(!s||!Number.isInteger(s.answers?.[s.ids[s.cursor]]))return false;if(s.cursor<s.ids.length-1){s.cursor++;return true;}return false;}
