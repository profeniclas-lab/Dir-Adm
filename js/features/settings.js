/** ADM-ESTUDO — Fase 22, Lote 1.
 * Estrutura somente de leitura; não modifica progresso nem configurações.
 * Os controles sensíveis continuam no Dashboard até os próximos lotes.
 */
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const sections = Object.freeze([
  {id:'backup',icon:'☁️',title:'Backup e restauração',description:'Exportar e validar backups, restaurar progresso e guardar uma cópia no Google Drive.',detail:'As ações continuam disponíveis no Dashboard até a migração segura do Lote 2.',lot:'Lote 2'},
  {id:'reset',icon:'↻',title:'Reiniciar progresso',description:'Recomeçar os estudos totalmente ou somente em um módulo, com confirmação e proteção de dados.',detail:'Nenhum botão de exclusão foi ativado. A implementação protegida ficará para o Lote 3.',lot:'Lote 3'},
  {id:'dashboard',icon:'▦',title:'Preferências do Dashboard',description:'Controlar as informações exibidas no painel principal sem perder acesso às estatísticas.',detail:'Organização e simplificação previstas para os Lotes 4 e 5.',lot:'Lotes 4–5'},
  {id:'maintenance',icon:'⚙',title:'Diagnóstico e manutenção',description:'Executar verificações de integridade e consultar informações técnicas do aplicativo.',detail:'A migração das ferramentas técnicas será feita no Lote 5.',lot:'Lote 5'}
]);

function card(s){
  return `<section id="settings-${s.id}" class="settings-card" aria-labelledby="settings-title-${s.id}" style="background:var(--surface,#fff);border:1px solid var(--border,#e2e8f0);border-radius:10px;padding:18px;margin-bottom:12px">
  <h2 id="settings-title-${s.id}" style="font-size:17px;margin:0 0 8px">${escapeHtml(s.icon)} ${escapeHtml(s.title)}</h2>
  <p style="margin:0 0 8px">${escapeHtml(s.description)}</p>
  <p class="page-subtitle" style="margin:0 0 7px">${escapeHtml(s.detail)}</p>
  <small style="color:var(--text-muted,#64748b)">Previsto: ${escapeHtml(s.lot)}</small>
  </section>`;
}

export function settingsPageChecks(root) {
  const checks = [
    {name:'Página de Configurações aberta',passed:!!root?.querySelector('#settings-heading')},
    {name:'Quatro seções estruturais presentes',passed:sections.every(s => !!root?.querySelector(`#settings-${s.id}`))},
    {name:'Navegação lateral contém Configurações',passed:!!document.querySelector('[data-nav="configuracoes"]')},
    {name:'Sem controles de apagar/restaurar nesta tela',passed:!root?.querySelector('[data-backup-restore], [data-reset-progress], [data-recovery-release]')},
    {name:'Aviso de migração segura visível',passed:!!root?.querySelector('#settings-migration-note')}
  ];
  return {version:'F22-L01',generatedAt:new Date().toISOString(),checks,ok:checks.every(c=>c.passed),readOnly:true};
}

export function formatSettingsReport(report) {
  return [
    'ADM-ESTUDO | FASE 22 — LOTE 1',
    'Gerado em '+report.generatedAt,
    report.ok ? 'VERIFICAÇÕES DE ESTRUTURA: APROVADAS' : 'VERIFICAÇÕES DE ESTRUTURA: EXISTEM FALHAS',
    'Escopo: estrutura visual e DOM; não substitui testes de backup/restauração.',
    'Somente leitura: '+(report.readOnly?'sim':'não'),
    ...report.checks.map(c=>(c.passed?'OK':'FALHA')+' — '+c.name),
    '',
    'TESTES MANUAIS A REALIZAR:',
    '1. Abrir Configurações pelo menu lateral.',
    '2. Recarregar a página e verificar se Configurações permanece acessível.',
    '3. Voltar ao Dashboard e conferir backup/restauração/testes existentes.',
    '4. Conferir que o progresso anterior continua visível.',
    '5. Conferir em outra aba se nada foi reiniciado.',
    '',
    'Nenhum progresso é modificado por estes testes de estrutura.'
  ].join('\n');
}

export function renderSettings(mainElement) {
  mainElement.innerHTML = `<section class="settings-page" aria-labelledby="settings-heading">
    <h1 id="settings-heading" class="page-title">Configurações</h1>
    <p class="page-subtitle">Organização do aplicativo e segurança do seu progresso.</p>
    <div id="settings-migration-note" class="notice" style="margin-bottom:16px">
      <strong>Fase 22 — Lote 1:</strong> estrutura preparada. Nesta etapa, nenhuma ação de backup ou reinicialização foi movida ou ativada. O Dashboard continua com todas as operações existentes.
    </div>
    ${sections.map(card).join('')}
    <section class="settings-card" aria-labelledby="settings-audit-title" style="background:var(--surface,#fff);border:1px solid var(--border,#e2e8f0);border-radius:10px;padding:18px">
      <h2 id="settings-audit-title" style="font-size:17px;margin:0 0 8px">Verificação no navegador — Lote 1</h2>
      <p>Testa apenas a estrutura desta página. Não escreve no armazenamento nem modifica respostas.</p>
      <button type="button" class="btn btn-primary" data-settings-audit="1">Verificar estrutura</button>
      <button type="button" class="btn" data-settings-download="1" disabled>Baixar relatório TXT</button>
      <pre id="settings-audit-result" role="status" aria-live="polite" style="white-space:pre-wrap;margin-top:12px"></pre>
    </section>
  </section>`;
  const run = mainElement.querySelector('[data-settings-audit]');
  const download = mainElement.querySelector('[data-settings-download]');
  const display = mainElement.querySelector('#settings-audit-result');
  let reportText = '';
  run?.addEventListener('click', () => {
    const result=settingsPageChecks(mainElement);
    reportText=formatSettingsReport(result);
    display.textContent=reportText;
    download.disabled=false;
  });
  download?.addEventListener('click', () => {
    if(!reportText)return;
    const blob=new Blob([reportText],{type:'text/plain;charset=utf-8'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');a.href=url;a.download='adm-estudo-fase22-lote01-relatorio.txt';
    document.body.appendChild(a);
    try {a.click();} finally {a.remove();window.setTimeout(()=>URL.revokeObjectURL(url),30000);}
  });
}
