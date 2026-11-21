import { renderPedagogicalFlowTestsButton } from '../core/pedagogical-flow-tests.js';
import { renderStorageRoundtripTestsButton } from '../core/storage-roundtrip-tests.js';
import { MODULES, AREAS } from '../data/modules.js';
import { renderPersistenceDiagnosticsButton } from '../core/persistence-diagnostics.js';
import { renderRecoveryManager } from '../core/recovery-manager.js';
import { renderBackupIntegrityButton } from '../core/backup-integrity-tests.js';
import { renderRestoreConflictTestsButton } from '../core/restore-conflict-tests.js';
import { renderDriveBackupGuide } from '../core/drive-backup-guide.js';
import { renderDashboardConsistency } from '../core/dashboard-consistency.js';
import { renderLearningTimeline } from '../core/learning-timeline.js';
import { renderStudyRecommendations } from '../core/study-recommendations.js';
import { renderLearningPriorities } from '../core/learning-priorities.js';
import { renderLearningOverview } from '../core/learning-overview.js';
import { moduleAchievement } from './module-achievement.js';
import { getDiagnosticSummary } from './diagnostic.js';
import { lessonStats } from './lessons.js';
import { exerciseSummary } from './exercises.js';
import { isModuleCompleted } from '../core/progress.js';

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&quot;',"'":'&#39;'}[c]));
const validDate = value => typeof value === 'string' && Number.isFinite(Date.parse(value));
const fmt = value => validDate(value) ? new Date(value).toLocaleDateString('pt-BR') : '—';
const pct = value => Number.isFinite(value) ? `${value}%` : '—%';
const getReviewEntries = state => Object.values(state.progress?.reviewSchedule || {}).filter(item => item && item.questionId && validDate(item.dueAt));

export function dashboardSummary(state) {
  const modules = MODULES.map(module => {
    const achievement = moduleAchievement(state, module);
    const diagnostic = getDiagnosticSummary(state, module.id);
    const lessons = lessonStats(state, module);
    const exercises = exerciseSummary(state, module.id);
    const hasActivity = !!(
      diagnostic?.answered ||
      lessons?.completed ||
      lessons?.rated ||
      exercises?.answered ||
      state.progress?.modules?.[module.id]
    );
    return {module,achievement,diagnostic,lessons,exercises,hasActivity,
      completed:isModuleCompleted(achievement,75)};
  });
  const active = modules.filter(x=>x.hasActivity);
  const pending = active.filter(x=>!x.completed);
  const completed = active.filter(x=>x.completed);
  const scheduled = getReviewEntries(state);
  const due = scheduled.filter(x=>Date.parse(x.dueAt)<=Date.now());
  const errors = Array.isArray(state.progress?.errors) ? state.progress.errors.filter(x=>x?.questionId) : [];
  const studiedLessons = Object.values(state.progress?.lessons || {}).filter(x=>x?.completed===true).length;
  const answeredExercises = Object.values(state.progress?.exercises || {}).reduce((sum,x)=>sum+Object.keys(x?.answers||{}).length,0);
  return {modules,active,pending,completed,scheduled,due,errors,studiedLessons,answeredExercises};
}

function moduleCard(x){
 const {module,achievement,diagnostic,lessons,exercises}=x;
 const stage = !diagnostic?.completed?'Concluir diagnóstico':
  (lessons?.completed||0)<module.subtopics.length?'Estudar aulas':
  lessons?.rated!==module.subtopics.length?'Autoavaliar aulas':
  !exercises?.finished?'Finalizar exercícios':'Reforçar pontos de dificuldade';
 return `<article class="module-card" style="display:block;margin:0">
   <div style="display:flex;justify-content:space-between;gap:12px;align-items:start;flex-wrap:wrap">
     <div><strong>${escapeHtml(module.title)}</strong><div class="mod-area">${escapeHtml(module.id)} · ${escapeHtml(AREAS[module.area]||module.area)}</div></div>
     <strong>${pct(achievement.percentage)}</strong>
   </div>
   <p style="margin:10px 0 6px">Próxima ação: ${escapeHtml(stage)}</p>
   <p style="margin:0 0 12px;font-size:.9rem">Cobertura das etapas: ${achievement.coveragePercentage}%</p>
   <button type="button" class="btn btn-primary" data-module-id="${escapeHtml(module.id)}">Continuar módulo</button>
 </article>`;
}

export function renderDashboard(mainElement,state){
 const s=dashboardSummary(state);
 const nextDue=s.scheduled.filter(x=>Date.parse(x.dueAt)>Date.now()).sort((a,b)=>Date.parse(a.dueAt)-Date.parse(b.dueAt))[0];
 const recommended=s.pending.slice().sort((a,b)=>{
   const pr={alta:0,media:1,baixa:2};
   return (pr[a.module.priority]??3)-(pr[b.module.priority]??3) ||
     (b.achievement.percentage??0)-(a.achievement.percentage??0);
 });
 const nextModules=recommended.slice(0,6);
 const intro=s.active.length?`Você iniciou ${s.active.length} módulo(s). Os módulos com aproveitamento de pelo menos 75% e todas as etapas contabilizadas deixam esta lista, mas continuam acessíveis em Módulos.`:
 'Seu estudo começa pelos módulos. Após responder ao diagnóstico, o painel mostrará o progresso e as próximas atividades.';
 mainElement.innerHTML=`<section aria-labelledby="pageTitle">
  <h1 class="page-title" id="pageTitle">Seu painel de estudos</h1>
  <div style="margin:12px 0"><button type="button" class="btn btn-primary" data-backup-export="1">Exportar backup do progresso (.json)</button>
  ${renderRecoveryManager()}
  ${renderDriveBackupGuide()}
  ${renderBackupIntegrityButton()}
  ${renderPersistenceDiagnosticsButton()}
  ${renderPedagogicalFlowTestsButton()}
  ${renderRestoreConflictTestsButton()}
  ${renderStorageRoundtripTestsButton()}
  <button type="button" class="btn" data-backup-inspect="1">Verificar arquivo de backup (.json)</button>
  <button type="button" class="btn" data-backup-restore="1">Restaurar progresso de arquivo (.json)</button>
  <input type="file" id="backup-restore-input" accept=".json,application/json" style="display:none">
  <pre id="backup-restore-result" role="status" aria-live="polite" style="white-space:pre-wrap"></pre>
  <input type="file" id="backup-file-input" accept=".json,application/json" style="display:none">
  <pre id="backup-validation-result" role="status" aria-live="polite" style="white-space:pre-wrap"></pre></div>
  <p class="page-subtitle">${escapeHtml(intro)}</p>
  <div class="cards-grid">
    <article class="stat-card"><div class="stat-label">Módulos iniciados</div><div class="stat-value">${s.active.length}</div><div class="stat-hint">de ${MODULES.length} cadastrados</div></article>
    <article class="stat-card"><div class="stat-label">Módulos concluídos</div><div class="stat-value">${s.completed.length}</div><div class="stat-hint">≥75% com todas as etapas avaliadas</div></article>
    <article class="stat-card"><div class="stat-label">Revisões pendentes</div><div class="stat-value">${s.due.length}</div><div class="stat-hint">${s.scheduled.length} questões agendadas</div></article>
    <article class="stat-card"><div class="stat-label">Questões no banco de erros</div><div class="stat-value">${s.errors.length}</div><div class="stat-hint">Histórico preservado</div></article>
    <article class="stat-card"><div class="stat-label">Aulas estudadas</div><div class="stat-value">${s.studiedLessons}</div><div class="stat-hint">Marcadas como concluídas</div></article>
    <article class="stat-card"><div class="stat-label">Respostas em exercícios</div><div class="stat-value">${s.answeredExercises}</div><div class="stat-hint">Tentativas atualmente registradas</div></article>
  </div>
  ${renderLearningOverview(state,s.modules)}${renderLearningPriorities(state,s.modules)}<h2 class="section-title">O que estudar agora</h2>
  ${nextModules.length?`<div class="module-list" style="display:grid;gap:12px">${nextModules.map(moduleCard).join('')}</div>`:
  `<div class="notice">${s.active.length?'Todos os módulos iniciados atingiram o critério de conclusão. Você pode continuar revisando ou escolher outro módulo.':'Nenhum módulo iniciado. Escolha um módulo para começar.'}</div>`}
  ${s.pending.length>6?`<p>Mais ${s.pending.length-6} módulo(s) em andamento. <button type="button" class="btn" data-nav="modulos">Ver todos os módulos</button></p>`:''}
  ${renderStudyRecommendations(state,s.modules)}${renderLearningTimeline(state)}${renderDashboardConsistency(state,s.modules)}<h2 class="section-title">Revisão e reforço</h2>
  <div class="notice">
    <p><strong>${s.due.length}</strong> revisão(ões) vencida(s). ${nextDue?`Próxima revisão futura: ${fmt(nextDue.dueAt)}.`:'Nenhuma outra revisão futura agendada.'}</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button type="button" class="btn btn-primary" data-nav="revisao">Abrir Revisão</button>
      <button type="button" class="btn" data-nav="erros">Abrir Meus Erros (${s.errors.length})</button>
      <button type="button" class="btn" data-nav="modulos">Ver módulos</button>
    </div>
  </div>
  <p class="page-subtitle">O aproveitamento não é uma medida direta de domínio. Os dados ficam salvos neste navegador; não representam sincronização entre dispositivos.</p>
 </section>`;
}
