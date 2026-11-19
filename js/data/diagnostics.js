/** Diagnóstico por recuperação ativa: apenas ADM-01 nesta fase. */
export const DIAGNOSTICS = Object.freeze({
  'ADM-01': [
    { subtopicId: 'ADM-01-001', front: 'Uma equipe de voluntários que se reúne uma vez é necessariamente uma organização? O que caracteriza uma organização?', back: 'Não necessariamente. Organização é um conjunto estruturado de pessoas que coordena esforços e recursos para alcançar objetivos comuns. Administrar é planejar, organizar, dirigir e controlar esses recursos e atividades.' },
    { subtopicId: 'ADM-01-002', front: 'Uma prefeitura compra computadores, contrata servidores e utiliza dados de atendimento. Quais recursos organizacionais aparecem?', back: 'Computadores: materiais e tecnológicos; servidores: humanos; dados: informacionais. O dinheiro usado nas compras e contratações é recurso financeiro. Os recursos se complementam para atingir objetivos.' },
    { subtopicId: 'ADM-01-003', front: 'Um setor atingiu a meta de atendimentos, mas gastou muito mais recursos que o previsto. Foi eficaz? Foi eficiente?', back: 'Foi eficaz porque alcançou a meta, mas não foi eficiente no uso dos recursos. Efetividade considera o impacto real gerado; produtividade relaciona a quantidade produzida aos recursos empregados.' },
    { subtopicId: 'ADM-01-004', front: 'Uma chefia define metas, distribui tarefas, orienta a equipe e compara resultados com o planejado. Quais funções administrativas aparecem?', back: 'Planejar: definir metas; organizar: distribuir tarefas e recursos; dirigir: orientar e mobilizar a equipe; controlar: acompanhar resultados, comparar com padrões e corrigir desvios. São funções integradas.' },
    { subtopicId: 'ADM-01-005', front: 'Quem costuma decidir a direção geral de uma instituição, transformar a estratégia em planos setoriais e executar as tarefas diárias?', back: 'Nível estratégico: alta administração, decisões amplas e de longo prazo. Nível tático: gerências, planos de setores. Nível operacional: supervisão e execução das rotinas. Os níveis se articulam.' },
    { subtopicId: 'ADM-01-006', front: 'Um gestor domina um sistema, resolve conflitos na equipe e entende como uma mudança afeta toda a organização. Quais habilidades utiliza?', back: 'Técnica: domínio de métodos e ferramentas; humana: relacionamento, comunicação e cooperação; conceitual: compreensão da organização como um todo e das relações entre suas partes.' }
  ]
});

export function getDiagnosticCards(module) {
  const entries = DIAGNOSTICS[module.id];
  if (!entries || entries.length !== module.subtopics.length) return null;
  const byId = new Map(entries.map(item => [item.subtopicId, item]));
  if (byId.size !== module.subtopics.length || !module.subtopics.every(topic => byId.has(topic.id))) return null;
  return module.subtopics.map(topic => ({
    id: `${topic.id}-DIAG`, subtopicId: topic.id, subtopicTitle: topic.title,
    question: byId.get(topic.id).front, answer: byId.get(topic.id).back
  }));
}
