/* ============================================================
   CONFIGURAÇÃO — App de Administração + Direito Administrativo
   Este é o ÚNICO arquivo que muda entre apps de matérias diferentes.
   Os arquivos index.html, style.css e app.js são genéricos e devem
   ser reutilizados sem alteração em futuras matérias.
   ============================================================ */

window.APP_CONFIG = {

  /* ---------- Identidade visual ---------- */
  appName: 'ADM-ESTUDO',
  appSubtitle: 'Administração + Direito Administrativo',
  appVersion: '1.0',
  schemaVersion: 1,

  /* ---------- Persistência ----------
     DEVE ser única por matéria para não colidir com outras apps
     no mesmo navegador. A app antiga usa 'direitoConstitucional.state'. */
  storageKey: 'admDireitoAdm.state',

  /* ---------- Áreas da matéria (chave → rótulo exibido) ----------
     Usadas nos filtros, no card do módulo e nas telas de estatísticas. */
  areaLabels: {
    ADM: 'Administração',
    AP:  'Administração Pública',
    DA:  'Direito Administrativo',
    REV: 'Revisão Integrada'
  },

  /* ---------- Rótulos de prioridade (chave → rótulo exibido) ----------
     O seu programa usa 🔴 Muito alta / 🟠 Alta / 🟡 Média.
     Mapeamos para as três chaves do motor. */
  priorityLabels: {
    alta:  'Muito Alta',
    media: 'Alta',
    baixa: 'Média'
  },

  /* ---------- Ordem de prioridade para as sugestões do dashboard ---------- */
  priorityOrder: ['alta', 'media', 'baixa'],

  /* ---------- Arquivos de conteúdo ----------
     Cada sufixo "X" carrega:
       content/lessons-X.js       → window.LESSONS_X
       content/diagnostics-X.js   → window.DIAGNOSTICS_X
     Se um dia você quiser uma quarta categoria (ex.: "especial"),
     basta adicionar o sufixo aqui e criar os dois arquivos. */
  contentSuffixes: ['alta', 'media', 'complementar'],

  /* ---------- Página "Sobre" ----------
     Textos exibidos em Sobre → Informações. */
  sobre: {
    publicoAlvo: 'Concursos de nível médio (Administrativo / Técnico / Assistente)',
    baseLegal:   'Programa de Administração + Direito Administrativo',
    observacoes: 'App offline. Dados salvos neste navegador. Sem servidor, sem IA externa.'
  }

};
