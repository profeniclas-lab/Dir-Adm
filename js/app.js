import { loadState, saveState } from "./core/storage.js";
import { setupNavigation, setActiveNavigation, getRouteTitle } from "./core/navigation.js";
import { renderDashboard } from "./features/dashboard.js";
import { renderModules } from "./features/modules.js";
import { validateCatalog } from "./data/modules.js";

const state = loadState();
const mainElement = document.getElementById("main");
const catalogErrors = validateCatalog();
if (catalogErrors.length) console.error("[ADM-ESTUDO] Catálogo inválido:", catalogErrors);

function renderCurrentPage() {
  if (!mainElement) return;
  document.title = `ADM-ESTUDO v2.0 — ${getRouteTitle(state.navigation.currentRoute)}`;
  setActiveNavigation(state.navigation.currentRoute);
  if (catalogErrors.length) {
    mainElement.textContent = "Erro de validação no catálogo. Consulte o console do navegador.";
    return;
  }
  switch (state.navigation.currentRoute) {
    case "dashboard":
      renderDashboard(mainElement, state);
      break;
    case "modulos":
      renderModules(mainElement, { selectedModuleId: state.navigation.selectedModuleId });
      break;
    default:
      mainElement.innerHTML = `<section><h1 class="page-title">${getRouteTitle(state.navigation.currentRoute)}</h1><p class="page-subtitle">Esta área será implementada nas próximas etapas.</p><div class="notice">A funcionalidade ainda não foi ativada na nova arquitetura.</div></section>`;
  }
}

function navigateTo(route) {
  state.navigation.currentRoute = route;
  if (route === "modulos") state.navigation.selectedModuleId = null;
  saveState(state);
  renderCurrentPage();
}

document.addEventListener("click", event => {
  const moduleButton = event.target.closest("[data-module-id]");
  if (moduleButton) {
    state.navigation.currentRoute = "modulos";
    state.navigation.selectedModuleId = moduleButton.dataset.moduleId;
    saveState(state);
    renderCurrentPage();
    return;
  }
  if (event.target.closest('[data-action="modules-back"]')) {
    state.navigation.selectedModuleId = null;
    saveState(state);
    renderCurrentPage();
  }
});

setupNavigation({ onNavigate: navigateTo });
renderCurrentPage();
console.info("[ADM-ESTUDO] Aplicação v2.0 inicializada; catálogo validado.");
