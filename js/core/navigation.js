const ROUTES = Object.freeze({
  dashboard: "Dashboard",
  modulos: "Módulos",
  questoes: "Questões",
  "banco-questoes": "Banco de Questões",
  flashcards: "Flashcards",
  revisao: "Revisão",
  erros: "Meus Erros",
  simulados: "Simulados",
  estatisticas: "Estatísticas",
  configuracoes: "Configurações",
  sobre: "Sobre"
});

export function getRouteTitle(route) {
  return ROUTES[route] || "ADM-ESTUDO";
}

export function setupNavigation({ onNavigate }) {
  document.addEventListener("click", (event) => {
    const navButton = event.target.closest("[data-nav]");

    if (navButton) {
      onNavigate(navButton.dataset.nav);
      document.body.classList.remove("sidebar-open");
      return;
    }

    const menuButton = event.target.closest('[data-action="toggle-sidebar"]');
    if (menuButton) {
      document.body.classList.toggle("sidebar-open");
    }
  });
}

export function setActiveNavigation(route) {
  document.querySelectorAll("[data-nav]").forEach((button) => {
    const active = button.dataset.nav === route;
    button.classList.toggle("active", active);

    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
}
