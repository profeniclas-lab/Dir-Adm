export function renderModules(mainElement) {
  mainElement.innerHTML = `
    <section aria-labelledby="pageTitle">
      <h1 class="page-title" id="pageTitle">Módulos de estudo</h1>
      <p class="page-subtitle">
        A estrutura dos módulos será carregada a partir do novo catálogo pedagógico.
      </p>
      <div class="notice">
        O catálogo ainda será reconstruído. Nenhum conteúdo antigo foi importado
        automaticamente para evitar transportar classificações ou vínculos incorretos.
      </div>
    </section>
  `;
}
