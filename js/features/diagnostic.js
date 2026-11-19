import { getModuleById } from "../data/modules.js";
import { getDiagnosticCards } from "../data/diagnostics.js";

export const DIAGNOSTIC_OPTIONS = Object.freeze({ sei: 100, duvida: 50, nao: 0 });
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function getDiagnosticSummary(state, moduleId) {
  const module = getModuleById(moduleId);
  const cards = module && getDiagnosticCards(module);
  if (!cards) return null;
  const answers = state.progress.diagnostics?.[moduleId]?.answers || {};
  const valid = cards.filter(card => Object.hasOwn(DIAGNOSTIC_OPTIONS, answers[card.subtopicId]));
  const total = cards.length;
  const completed = valid.length === total;
  const score = completed ? Math.round(valid.reduce((sum, card) => sum + DIAGNOSTIC_OPTIONS[answers[card.subtopicId]], 0) / total) : null;
  return { total, answered: valid.length, completed, score, cards, answers };
}

export function saveDiagnosticAnswer(state, moduleId, subtopicId, choice) {
  const summary = getDiagnosticSummary(state, moduleId);
  if (!summary || !summary.cards.some(card => card.subtopicId === subtopicId) || !Object.hasOwn(DIAGNOSTIC_OPTIONS, choice)) return false;
  state.progress.diagnostics ||= {};
  const existing = state.progress.diagnostics[moduleId] || { answers: {} };
  existing.answers ||= {};
  existing.answers[subtopicId] = choice;
  existing.updatedAt = new Date().toISOString();
  state.progress.diagnostics[moduleId] = existing;
  return true;
}

export function resetDiagnostic(state, moduleId) {
  if (!getDiagnosticSummary(state, moduleId)) return false;
  delete state.progress.diagnostics[moduleId];
  return true;
}

export function renderDiagnostic(mainElement, moduleId, state) {
  const module = getModuleById(moduleId);
  const summary = getDiagnosticSummary(state, moduleId);
  if (!module || !summary) {
    mainElement.innerHTML = '<div class="notice">Diagnóstico ainda indisponível neste módulo. <button class="btn" type="button" data-action="diagnostic-back">Voltar ao módulo</button></div>';
    return;
  }
  const current = summary.cards.find(card => !Object.hasOwn(DIAGNOSTIC_OPTIONS, summary.answers[card.subtopicId]));
  mainElement.innerHTML = `<section class="diagnostic-view" aria-labelledby="pageTitle">
    <button type="button" class="btn" data-action="diagnostic-back">← Voltar ao módulo</button>
    <h1 class="page-title" id="pageTitle">Diagnóstico — ${escapeHtml(module.title)}</h1>
    <p class="page-subtitle">Autoavaliação inicial: marque o quanto você conhece cada subtópico. Não é uma prova de acertos e erros.</p>
    <div class="diagnostic-progress"><strong>${summary.answered} de ${summary.total} respondidos</strong><progress max="${summary.total}" value="${summary.answered}"></progress></div>
    ${current ? `<article class="diagnostic-card">
      <p class="diagnostic-topic">${escapeHtml(current.subtopicTitle)}</p>
      <h2>${escapeHtml(current.question)}</h2>
      <div class="diagnostic-choices">
        <button type="button" class="btn" data-diag-choice="sei" data-diag-subtopic="${escapeHtml(current.subtopicId)}">Eu sei</button>
        <button type="button" class="btn" data-diag-choice="duvida" data-diag-subtopic="${escapeHtml(current.subtopicId)}">Tenho dúvida</button>
        <button type="button" class="btn" data-diag-choice="nao" data-diag-subtopic="${escapeHtml(current.subtopicId)}">Não sei</button>
      </div>
      <p class="diagnostic-help">Eu sei = consigo explicar sem ajuda; Tenho dúvida = reconheço parte do assunto; Não sei = ainda preciso aprender.</p>
    </article>` : `<article class="diagnostic-card"><h2>Diagnóstico concluído</h2><p>Autopercepção inicial: <strong>${summary.score}%</strong>. Esse valor não representa nota de prova nem comprova domínio do conteúdo.</p><p>Você pode revisar suas respostas ou refazer o diagnóstico.</p></article>`}
    <h2 class="section-title">Respostas registradas</h2>
    <div class="diagnostic-review">${summary.cards.map(card => {
      const choice = summary.answers[card.subtopicId];
      const label = choice === 'sei' ? 'Eu sei' : choice === 'duvida' ? 'Tenho dúvida' : choice === 'nao' ? 'Não sei' : 'Pendente';
      return `<div class="diagnostic-review-row"><span>${escapeHtml(card.subtopicTitle)}</span><span>${label}</span>${choice ? `<button class="btn" type="button" data-diag-edit="${escapeHtml(card.subtopicId)}">Alterar</button>` : ''}</div>`;
    }).join('')}</div>
    ${summary.answered ? '<button class="btn" type="button" data-action="diagnostic-reset">Recomeçar diagnóstico</button>' : ''}
  </section>`;
}

export function renderDiagnosticEdit(mainElement, moduleId, subtopicId, state) {
  const summary = getDiagnosticSummary(state, moduleId);
  const card = summary?.cards.find(item => item.subtopicId === subtopicId);
  if (!card) return renderDiagnostic(mainElement, moduleId, state);
  renderDiagnostic(mainElement, moduleId, state);
  const area = mainElement.querySelector('.diagnostic-card');
  area.innerHTML = `<p class="diagnostic-topic">Alterar resposta — ${escapeHtml(card.subtopicTitle)}</p><h2>${escapeHtml(card.question)}</h2><div class="diagnostic-choices"><button class="btn" type="button" data-diag-choice="sei" data-diag-subtopic="${escapeHtml(card.subtopicId)}">Eu sei</button><button class="btn" type="button" data-diag-choice="duvida" data-diag-subtopic="${escapeHtml(card.subtopicId)}">Tenho dúvida</button><button class="btn" type="button" data-diag-choice="nao" data-diag-subtopic="${escapeHtml(card.subtopicId)}">Não sei</button></div>`;
}
