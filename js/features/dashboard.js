export function renderDashboard(mainElement, state) {
  const modulesStarted = Object.keys(state.progress.modules || {}).length;

  mainElement.innerHTML = `
    <section aria-labelledby="pageTitle">
      <h1 class="page-title" id="pageTitle">Seu painel de estudos</h1>
      <p class="page-subtitle">
        A nova estrutura do ADM-ESTUDO está inicializada. Seu progresso será
        acompanhado por módulo, subtópico e etapa de aprendizagem.
      </p>

      <div class="cards-grid">
        <article class="stat-card">
          <div class="stat-label">Módulos iniciados</div>
          <div class="stat-value">${modulesStarted}</div>
          <div class="stat-hint">Acompanhamento individual</div>
        </article>
        <article class="stat-card">
          <div class="stat-label">Versão da estrutura</div>
          <div class="stat-value">2.0</div>
          <div class="stat-hint">Arquitetura modular</div>
        </article>
        <article class="stat-card">
          <div class="stat-label">Progresso salvo</div>
          <div class="stat-value">Local</div>
          <div class="stat-hint">Neste navegador e dispositivo</div>
        </article>
      </div>

      <h2 class="section-title">Próxima etapa</h2>
      <div class="notice">
        <strong>Estrutura técnica pronta para receber os conteúdos.</strong>
        <p>Na próxima etapa definiremos os módulos, subtópicos e identificadores
        permanentes que conectarão aulas, diagnósticos, questões e flashcards.</p>
      </div>
    </section>
  `;
}
