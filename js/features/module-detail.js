import { AREAS, getModuleById } from "../data/modules.js";
import { calculatePartialAchievement } from "../core/progress.js";

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[char]);
const stages = [
  { id: "diagnostic", title: "Diagnóstico", description: "Avalie o que já sabe antes de estudar." },
  { id: "lesson", title: "Aula", description: "Estude cada subtópico em uma página própria." },
  { id: "exercises", title: "Exercícios de aprendizagem", description: "Pratique o que aprendeu com correções explicadas." },
  { id: "questions", title: "Banco de questões do módulo", description: "Resolva questões vinculadas aos conteúdos estudados." },
  { id: "flashcards", title: "Banco de flashcards do módulo", description: "Reforce conceitos e identifique dúvidas." }
];

export function renderModuleDetail(mainElement, moduleId, state) {
  const module = getModuleById(moduleId);
  if (!module) {
    mainElement.innerHTML = '<div class="notice">Módulo não encontrado. <button class="btn" data-action="modules-back">Voltar</button></div>';
    return;
  }
  // Nenhum componente é marcado como disponível até existir uma atividade real e avaliada.
  const progress = calculatePartialAchievement({});
  const progressLabel = progress.hasData ? `${progress.percentage}%` : "Ainda não calculado";
  mainElement.innerHTML = `
    <section class="module-detail" aria-labelledby="pageTitle">
      <button type="button" class="btn" data-action="modules-back">← Todos os módulos</button>
      <h1 class="page-title" id="pageTitle" style="margin-top:18px">${escapeHtml(module.title)}</h1>
      <p class="page-subtitle">${escapeHtml(module.id)} · ${escapeHtml(AREAS[module.area])} · ${module.subtopics.length} subtópicos</p>
      <section class="module-achievement" aria-labelledby="achievementTitle">
        <h2 id="achievementTitle">Aproveitamento</h2>
        <strong>${progressLabel}</strong>
        <p>O aproveitamento será calculado a partir das atividades concluídas quando elas estiverem disponíveis.</p>
      </section>
      ${stages.map((stage, index) => `<section class="module-stage" aria-labelledby="stage-${index}">
        <div class="module-stage-heading"><h2 id="stage-${index}">${index + 1}. ${escapeHtml(stage.title)}</h2><span class="module-pending">Em preparação</span></div>
        <p>${escapeHtml(stage.description)}</p>
        ${stage.id === "lesson" ? `<h3>Subtópicos previstos</h3><ol class="module-subtopics">${module.subtopics.map(topic => `<li><span>${escapeHtml(topic.title)}</span><small>${escapeHtml(topic.id)}</small></li>`).join("")}</ol>` : ""}
      </section>`).join("")}
      <section class="module-stage" aria-labelledby="moduleInfoTitle">
        <h2 id="moduleInfoTitle">Informações</h2>
        <dl class="module-info-list"><div><dt>Identificador</dt><dd>${escapeHtml(module.id)}</dd></div><div><dt>Área</dt><dd>${escapeHtml(AREAS[module.area])}</dd></div><div><dt>Subtópicos</dt><dd>${module.subtopics.length}</dd></div><div><dt>Prioridade</dt><dd>${escapeHtml(module.priority)}</dd></div><div><dt>Atividades disponíveis</dt><dd>0 nesta etapa</dd></div><div><dt>Progresso registrado</dt><dd>Nenhum</dd></div></dl>
      </section>
    </section>`;
}
