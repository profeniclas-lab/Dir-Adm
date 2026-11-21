import { MODULES, AREAS } from '../data/modules.js';
import { renderDashboardConsistency } from '../core/dashboard-consistency.js';
import { renderDetailedLearningStats } from '../core/learning-detail.js';
import { renderLearningTimeline } from '../core/learning-timeline.js';
import { renderLearningOverview } from '../core/learning-overview.js';
import { moduleAchievement } from './module-achievement.js';
import { getDiagnosticSummary } from './diagnostic.js';
import { lessonStats } from './lessons.js';
import { exerciseSummary } from './exercises.js';
import { isModuleCompleted } from '../core/progress.js';

const e=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pct=x=>Number.isFinite(x)?`${Math.round(x)}%`:'—';
const validDate=x=>typeof x==='string'&&Number.isFinite(Date.parse(x));
const formatDate=x=>validDate(x)?new Date(x).toLocaleDateString('pt-BR'):'—';
const sum=(arr,fn)=>arr.reduce((n,x)=>n+fn(x),0);

export function collectStudyStats(state){
 const p=state.progress||{};
 const modules=MODULES.map(module=>{
  const achievement=moduleAchievement(state,module);
  const diagnostic=getDiagnosticSummary(state,module.id);
  const lessons=lessonStats(state,module);
  const exercise=exerciseSummary(state,module.id);
  const started=Boolean(diagnostic?.answered||lessons?.completed||lessons?.rated||exercise?.answered);
  return {module,achievement,diagnostic,lessons,exercise,started,completed:isModuleCompleted(achievement,75)};
 });
 const started=modules.filter(x=>x.started),completed=started.filter(x=>x.completed);
 const exerciseSessions=modules.filter(x=>x.exercise?.total);
 const finishedExercises=exerciseSessions.filter(x=>x.exercise.finished);
 const answered=sum(exerciseSessions,x=>x.exercise.answered||0);
 const correct=sum(exerciseSessions,x=>x.exercise.correct||0);
 const simulations=(Array.isArray(p.simulados?.history)?p.simulados.history:[]).filter(x=>x?.finishedAt&&Number.isFinite(Number(x.score)));
 const review=Object.values(p.reviewSchedule||{}).filter(x=>x?.questionId&&validDate(x.dueAt));
 const due=review.filter(x=>Date.parse(x.dueAt)<=Date.now());
 const errors=Array.isArray(p.errors)?p.errors.filter(x=>x?.questionId):[];
 const flash=Object.values(p.flashcards||{}).filter(x=>x&&typeof x==='object'&&['sei','duvida','nao'].includes(x.rating));
 const flashDue=flash.filter(x=>validDate(x.dueAt)&&Date.parse(x.dueAt)<=Date.now());
 const simCorrect=sum(simulations,x=>Number(x.correct)||0),simTotal=sum(simulations,x=>Number(x.total)||0);
 return {modules,started,completed,exerciseSessions,finishedExercises,answered,correct,simulations,simCorrect,simTotal,review,due,errors,flash,flashDue,
   lessonDone:sum(modules,x=>x.lessons?.completed||0),lessonTotal:sum(modules,x=>x.lessons?.total||0),
   avgAchievement:started.length?Math.round(sum(started,x=>x.achievement.percentage||0)/started.length):null};
}
const metric=(title,value,desc)=>`<article class="stat-card"><div class="stat-label">${e(title)}</div><div class="stat-value">${e(value)}</div><div class="stat-hint">${e(desc)}</div></article>`;
export function renderStatistics(main,state){
 const s=collectStudyStats(state);
 const byArea=Object.entries(AREAS).map(([area,name])=>{
  const rows=s.modules.filter(x=>x.module.area===area),started=rows.filter(x=>x.started);
  return {area,name,total:rows.length,started:started.length,completed:started.filter(x=>x.completed).length,avg:started.length?Math.round(sum(started,x=>x.achievement.percentage||0)/started.length):null};
 });
 const recent=s.simulations.slice(-10).reverse();
 const progress=s.modules.filter(x=>x.started).sort((a,b)=>(a.achievement.percentage??0)-(b.achievement.percentage??0));
 main.innerHTML=`<section class="module-detail"><h1 class="page-title">Estatísticas de aprendizagem</h1>
 <p class="page-subtitle">Resumo dos registros salvos neste navegador. Os números não representam sincronização entre dispositivos.</p>
 <div class="cards-grid">
 ${metric('Módulos iniciados',s.started.length,`de ${MODULES.length} módulos`)}
 ${metric('Módulos concluídos',s.completed.length,'Aproveitamento ≥75% com etapas contabilizadas')}
 ${metric('Aproveitamento médio',pct(s.avgAchievement),'Média simples dos módulos iniciados')}
 ${metric('Aulas concluídas',s.lessonDone,`de ${s.lessonTotal} aulas disponíveis`)}
 ${metric('Respostas em exercícios',s.answered,'Tentativas atuais dos módulos')}
 ${metric('Acertos em exercícios',s.answered?pct(s.correct/s.answered*100):'—','Apenas questões respondidas nas tentativas atuais')}
 ${metric('Simulados finalizados',s.simulations.length,'Histórico armazenado')}
 ${metric('Acertos em simulados',s.simTotal?pct(s.simCorrect/s.simTotal*100):'—','Proporção ponderada por questões')}
 ${metric('Revisões vencidas',s.due.length,`${s.review.length} agendadas`)}
 ${metric('Questões no banco de erros',s.errors.length,'Registros ainda presentes')}
 ${metric('Flashcards avaliados',s.flash.length,`${s.flashDue.length} com revisão vencida`)}
 ${metric('Exercícios concluídos',s.finishedExercises.length,`${s.exerciseSessions.length} sessões registradas`)}
 </div>
 ${renderLearningOverview(state,s.modules)}<h2 class="section-title">Progresso por área</h2>
 <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse"><thead><tr><th style="text-align:left;padding:8px">Área</th><th>Iniciados</th><th>Concluídos</th><th>Média</th></tr></thead><tbody>
 ${byArea.map(x=>`<tr><td style="padding:8px;border-top:1px solid #bbb">${e(x.name)}</td><td style="text-align:center">${x.started}/${x.total}</td><td style="text-align:center">${x.completed}</td><td style="text-align:center">${pct(x.avg)}</td></tr>`).join('')}</tbody></table></div>
 ${renderDetailedLearningStats(state,s.modules,AREAS)}<h2 class="section-title">Módulos iniciados</h2>
 ${progress.length?`<div style="display:grid;gap:10px">${progress.map(x=>`<article class="module-card" style="display:block"><div style="display:flex;justify-content:space-between;gap:8px"><strong>${e(x.module.id)} — ${e(x.module.title)}</strong><strong>${pct(x.achievement.percentage)}</strong></div><div style="height:9px;border-radius:8px;background:#ddd;margin:10px 0;overflow:hidden"><div style="height:100%;width:${Math.max(0,Math.min(100,x.achievement.percentage||0))}%;background:#327f70"></div></div><p style="margin:4px 0">Cobertura das etapas: ${pct(x.achievement.coveragePercentage)} · ${x.completed?'Critério de conclusão atingido':'Em andamento'}</p><button class="btn" data-stats-module="${e(x.module.id)}">Abrir módulo</button></article>`).join('')}</div>`:'<p>Nenhum módulo iniciado.</p>'}
 ${renderLearningTimeline(state)}${renderDashboardConsistency(state,s.modules)}<h2 class="section-title">Últimos simulados</h2>
 ${recent.length?`<ol>${recent.map(x=>`<li>${e(x.area==='todas'?'Todas as áreas':AREAS[x.area]||x.area)} — ${e(x.correct)}/${e(x.total)} (${pct(Number(x.score))}) · ${formatDate(x.finishedAt)}</li>`).join('')}</ol>`:'<p>Ainda não há simulados finalizados.</p>'}
 <p class="page-subtitle">As porcentagens de aproveitamento são indicadores de atividades e autoavaliações, não uma medida direta de domínio. O total de respostas em exercícios não inclui tentativas anteriores sobrescritas.</p>
 </section>`;
}
