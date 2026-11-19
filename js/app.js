import { loadState, saveState } from "./core/storage.js";
import { setupNavigation, setActiveNavigation, getRouteTitle } from "./core/navigation.js";
import { renderDashboard } from "./features/dashboard.js";
import { renderModules } from "./features/modules.js";
import { renderModuleDetail } from "./features/module-detail.js";
import { renderDiagnostic, renderDiagnosticEdit, saveDiagnosticAnswer, resetDiagnostic } from "./features/diagnostic.js";
import { validateCatalog } from "./data/modules.js";

const state = loadState();
const mainElement = document.getElementById("main");
const catalogErrors = validateCatalog();
if (catalogErrors.length) console.error("[ADM-ESTUDO] Catálogo inválido:", catalogErrors);
let activeView = 'module';
let editSubtopicId = null;
let cardFlipped = false;

function renderCurrentPage() {
  if (!mainElement) return;
  document.title = `ADM-ESTUDO v2.0 — ${getRouteTitle(state.navigation.currentRoute)}`;
  setActiveNavigation(state.navigation.currentRoute);
  if (catalogErrors.length) {
    mainElement.textContent = "Erro de validação no catálogo. Consulte o console do navegador.";
    return;
  }
  switch (state.navigation.currentRoute) {
    case "dashboard": renderDashboard(mainElement, state); break;
    case "modulos":
      if (state.navigation.selectedModuleId) {
        if (activeView === 'diagnostic') renderDiagnostic(mainElement, state.navigation.selectedModuleId, state, { editSubtopicId, flipped: cardFlipped });
        else renderModuleDetail(mainElement, state.navigation.selectedModuleId, state);
      } else renderModules(mainElement);
      break;
    default:
      mainElement.innerHTML = `<section><h1 class="page-title">${getRouteTitle(state.navigation.currentRoute)}</h1><p class="page-subtitle">Esta área será implementada nas próximas etapas.</p><div class="notice">A funcionalidade ainda não foi ativada na nova arquitetura.</div></section>`;
  }
}
function commitAndRender() { saveState(state); renderCurrentPage(); }
function resetCardView() { editSubtopicId = null; cardFlipped = false; }
function navigateTo(route) {
  state.navigation.currentRoute = route;
  activeView = 'module'; resetCardView();
  if (route === 'modulos') state.navigation.selectedModuleId = null;
  commitAndRender();
}

document.addEventListener('click', event => {
  const moduleButton = event.target.closest('[data-module-id]');
  if (moduleButton) {
    state.navigation.currentRoute = 'modulos';
    state.navigation.selectedModuleId = moduleButton.dataset.moduleId;
    activeView = 'module'; resetCardView();
    commitAndRender(); return;
  }
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (action === 'modules-back') {
    state.navigation.selectedModuleId = null; activeView = 'module'; resetCardView(); commitAndRender(); return;
  }
  if (action === 'diagnostic-open') {
    activeView = 'diagnostic'; resetCardView(); renderCurrentPage(); return;
  }
  if (action === 'diagnostic-back') {
    activeView = 'module'; resetCardView(); renderCurrentPage(); return;
  }
  if (action === 'diag-flip' && activeView === 'diagnostic') { cardFlipped = !cardFlipped; renderCurrentPage(); return; }
  const choiceButton = event.target.closest('[data-diag-choice]');
  if (choiceButton && state.navigation.selectedModuleId && activeView === 'diagnostic') {
    if (cardFlipped && saveDiagnosticAnswer(state, state.navigation.selectedModuleId, choiceButton.dataset.diagSubtopic, choiceButton.dataset.diagChoice)) { resetCardView(); commitAndRender(); }
    return;
  }
  const editButton = event.target.closest('[data-diag-edit]');
  if (editButton && state.navigation.selectedModuleId && activeView === 'diagnostic') {
    editSubtopicId = editButton.dataset.diagEdit; cardFlipped = false; renderDiagnosticEdit(mainElement, state.navigation.selectedModuleId, editSubtopicId, state); return;
  }
  if (action === 'diagnostic-reset' && activeView === 'diagnostic' && state.navigation.selectedModuleId) {
    if (window.confirm('Deseja apagar as respostas deste diagnóstico e começar novamente?')) {
      resetDiagnostic(state, state.navigation.selectedModuleId); resetCardView(); commitAndRender();
    }
  }
});
setupNavigation({ onNavigate: navigateTo });
renderCurrentPage();
console.info('[ADM-ESTUDO] Aplicação v2.0: flashcards diagnósticos habilitados apenas no ADM-01.');
