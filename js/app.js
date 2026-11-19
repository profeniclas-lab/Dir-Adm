import { loadState, saveState } from "./core/storage.js";
import {
  setupNavigation,
  setActiveNavigation,
  getRouteTitle
} from "./core/navigation.js";
import { renderDashboard } from "./features/dashboard.js";
import { renderModules } from "./features/modules.js";

const state = loadState();
const mainElement = document.getElementById("main");

function renderCurrentPage() {
  if (!mainElement) return;

  document.title = `ADM-ESTUDO v2.0 — ${getRouteTitle(state.navigation.currentRoute)}`;
  setActiveNavigation(state.navigation.currentRoute);

  switch (state.navigation.currentRoute) {
    case "dashboard":
      renderDashboard(mainElement, state);
      break;

    case "modulos":
      renderModules(mainElement);
      break;

    default:
      mainElement.innerHTML = `
        <section>
          <h1 class="page-title">${getRouteTitle(state.navigation.currentRoute)}</h1>
          <p class="page-subtitle">Esta área será implementada nas próximas etapas.</p>
          <div class="notice">
            A funcionalidade ainda não foi ativada na nova arquitetura.
          </div>
        </section>
      `;
  }
}

function navigateTo(route) {
  state.navigation.currentRoute = route;
  saveState(state);
  renderCurrentPage();
}

setupNavigation({ onNavigate: navigateTo });
renderCurrentPage();

console.info("[ADM-ESTUDO] Aplicação v2.0 inicializada.");
