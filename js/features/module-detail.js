import { AREAS, getModuleById } from '../data/modules.js';
import { moduleAchievement } from './module-achievement.js';
import { getDiagnosticSummary } from './diagnostic.js';
import { getLesson } from '../data/lessons.js';
import { exercisePool, exerciseSummary } from './exercises.js';
import { lessonStats } from './lessons.js';
import { isModuleCompleted } from '../core/progress.js';

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const format = n => Number(n).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
const stages = [
  { id: 'diagnostic', title: 'Diagnóstico', description: 'Avalie o que já sabe antes de estudar.' },
  { id: 'lesson', title: 'Aula', description: 'Estude cada subtópico em uma página própria.' },
  { id: 'exercises', title: 'Exercícios de aprendizagem', description: 'Pratique o que aprendeu com correções explicadas.' },
  { id: 'questions', title: 'Banco de questões do módulo', description: 'Resolva questões vinculadas aos conteúdos estudados.' },
  { id: 'flashcards', title: 'Banco de flashcards do módulo', description: 'Reforce conceitos e identifique dúvidas.' }
];

function achievementMarkup(progress) {
  const c = progress.components;
  const sections = [
    { title: 'Diagnóstico', keys: ['diagnostic'], weight: 20 },
    { title: 'Aulas', keys: ['lessonCompletion', 'lessonSelfAssessment'], weight: 30 },
    { title: 'Exercícios de aprendizagem', keys: ['exercises'], weight: 50 }
  ];
  const rows = sections.map(s => {
    const points = s.keys.reduce((sum, key) => sum + c[key].points, 0);
    const assessed = s.keys.every(key => c[key].available);
    const pct = Math.max(0, Math.min(100, points / s.weight * 100));
    return `<div style="margin:12px 0">
      <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap">
        <span>${escapeHtml(s.title)}${assessed ? '' : ' <small>(parcial ou pendente)</small>'}</span>
        <strong>${format(points)}% / ${s.weight}%</strong>
      </div>
      <div role="progressbar" aria-label="${escapeHtml(s.title)}" aria-valuemin="0" aria-valuemax="${s.weight}" aria-valuenow="${points}" style="height:8px;background:#d5dce3;border-radius:6px;overflow:hidden;margin-top:6px">
        <div style="background:#2563eb;height:100%;width:${pct}%"></div>
      </div>
    </div>`;
  }).join('');
  const complete = isModuleCompleted(progress, 75);
  return `<section class="module-achievement" aria-labelledby="achievementTitle">
    <h2 id="achievementTitle">Aproveitamento do módulo</h2>
    ${rows}
    <p><strong>Total conquistado: ${format(progress.earnedWeightedPoints)}% / 100%</strong></p>
    <p>${complete ? 'Meta atingida: pelo menos 75% e todas as etapas avaliadas.' : `Meta: 75% com todas as etapas avaliadas. Cobertura atual dos critérios: ${progress.coveragePercentage}% / 100%.`}</p>
    <p>O banco de questões e os flashcards são atividades complementares e não alteram este aproveitamento.</p>
  </section>`;
}

export function renderModuleDetail(mainElement, moduleId, state) {
  const module = getModuleById(moduleId);
  if (!module) {
    mainElement.innerHTML = '<div class="notice">Módulo não encontrado. <button class="btn" data-action="modules-back">Voltar</button></div>';
    return;
  }
  const diagnostic = getDiagnosticSummary(state, moduleId);
  const stats = lessonStats(state, module);
  const exercise = exerciseSummary(state, moduleId);
  const progress = moduleAchievement(state, module);
  mainElement.innerHTML = `
    <section class="module-detail" aria-labelledby="pageTitle">
      <button type="button" class="btn" data-action="modules-back">← Todos os módulos</button>
      <h1 class="page-title" id="pageTitle" style="margin-top:18px">${escapeHtml(module.title)}</h1>
      <p class="page-subtitle">${escapeHtml(module.id)} · ${escapeHtml(AREAS[module.area])} · ${module.subtopics.length} subtópicos</p>
      ${achievementMarkup(progress)}
      ${stages.map((stage, index) => {
        const available = stage.id === 'diagnostic' && diagnostic;
        const status = available ? (diagnostic.completed ? 'Concluído' : `${diagnostic.answered}/${diagnostic.total} respondidos`) : stage.id === 'exercises' && exercisePool(moduleId).length ? (exercise?.finished ? 'Concluído' : exercise ? `${exercise.answered}/${exercise.total} respondidas` : 'Disponível') : stage.id === 'lesson' && stats ? `${stats.completed}/${stats.total} estudadas` : 'Em preparação';
        return `<section class="module-stage" aria-labelledby="stage-${index}">
          <div class="module-stage-heading"><h2 id="stage-${index}">${index + 1}. ${escapeHtml(stage.title)}</h2><span class="module-pending">${status}</span></div>
          <p>${escapeHtml(stage.description)}</p>
          ${available ? `<button type="button" class="btn btn-primary" data-action="diagnostic-open">${diagnostic.completed ? 'Rever diagnóstico' : diagnostic.answered ? 'Continuar diagnóstico' : 'Iniciar diagnóstico'}</button>` : ''}
          ${stage.id === 'exercises' && exercisePool(moduleId).length ? `<button type="button" class="btn btn-primary" data-action="exercise-open">${exercise?.finished ? 'Rever resultado' : exercise ? 'Continuar atividade' : 'Iniciar exercícios'}</button>` : ''}
          ${stage.id === 'lesson' ? `<h3>Aulas por subtópico</h3><ol class="module-subtopics">${module.subtopics.map(topic => `<li><span>${escapeHtml(topic.title)}</span>${getLesson(topic.id) ? `<button type="button" class="btn" data-lesson-open="${escapeHtml(topic.id)}">${state.progress?.lessons?.[topic.id]?.completed ? 'Rever aula ✓' : 'Estudar aula'}</button>` : '<small>Em preparação</small>'}</li>`).join('')}</ol>` : ''}
        </section>`;
      }).join('')}
      <section class="module-stage" aria-labelledby="moduleInfoTitle">
        <h2 id="moduleInfoTitle">Informações</h2>
        <dl class="module-info-list"><div><dt>Identificador</dt><dd>${escapeHtml(module.id)}</dd></div><div><dt>Área</dt><dd>${escapeHtml(AREAS[module.area])}</dd></div><div><dt>Subtópicos</dt><dd>${module.subtopics.length}</dd></div><div><dt>Prioridade</dt><dd>${escapeHtml(module.priority)}</dd></div><div><dt>Atividades disponíveis</dt><dd>${[diagnostic ? 'Diagnóstico' : null, stats ? 'Aulas' : null, exercisePool(moduleId).length ? 'Exercícios' : null].filter(Boolean).join(' e ') || 'Nenhuma nesta etapa'}</dd></div><div><dt>Diagnóstico</dt><dd>${diagnostic ? `${diagnostic.answered}/${diagnostic.total} respostas` : 'Em preparação'}</dd></div></dl>
      </section>
    </section>`;
}
