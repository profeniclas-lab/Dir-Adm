/** Perguntas de autoavaliação diagnóstica, uma por subtópico. */
export const DIAGNOSTICS = Object.freeze({
  "ADM-01": [
    ["ADM-01-001", "Você consegue explicar o que é administrar e distinguir uma organização de um simples agrupamento de pessoas?"],
    ["ADM-01-002", "Você identifica recursos humanos, financeiros, materiais, tecnológicos e informacionais em um órgão público?"],
    ["ADM-01-003", "Você distingue eficiência, eficácia, efetividade e produtividade usando exemplos concretos?"],
    ["ADM-01-004", "Você reconhece as funções de planejar, organizar, dirigir e controlar em situações práticas?"],
    ["ADM-01-005", "Você diferencia os níveis estratégico, tático e operacional e suas decisões típicas?"],
    ["ADM-01-006", "Você distingue habilidades técnicas, humanas e conceituais do administrador?"],
  ],
  "ADM-02": [
    ["ADM-02-001", "Você explica por que o processo administrativo é integrado e contínuo, e não uma sequência rígida?"],
    ["ADM-02-002", "Você reconhece o planejamento e a tomada de decisões em um caso administrativo?"],
    ["ADM-02-003", "Você identifica como a organização distribui tarefas, recursos e responsabilidades?"],
    ["ADM-02-004", "Você distingue direção e coordenação de planejamento e controle?"],
    ["ADM-02-005", "Você explica como indicadores e feedback permitem corrigir desvios?"],
    ["ADM-02-006", "Você aplica as quatro funções administrativas a um serviço público, como uma unidade de atendimento?"],
  ],
  "ADM-03": [
    ["ADM-03-001", "Você compara planejamento estratégico, tático e operacional por alcance e horizonte?"],
    ["ADM-03-002", "Você distingue missão, visão e valores em exemplos de instituições públicas?"],
    ["ADM-03-003", "Você diferencia objetivo, meta, estratégia e plano, incluindo uma meta mensurável?"],
    ["ADM-03-004", "Você classifica forças e fraquezas como internas, e oportunidades e ameaças como externas, na SWOT?"],
    ["ADM-03-005", "Você reconhece a finalidade do Balanced Scorecard e suas perspectivas clássicas?"],
    ["ADM-03-006", "Você diferencia indicador, meta e objetivo e entende o papel do mapa estratégico?"],
  ]
});

export function getDiagnosticCards(module) {
  const entries = DIAGNOSTICS[module.id];
  if (!entries || entries.length !== module.subtopics.length) return null;
  const byId = new Map(entries);
  if (byId.size !== module.subtopics.length) return null;
  return module.subtopics.every(topic => byId.has(topic.id))
    ? module.subtopics.map(topic => ({ id: `${topic.id}-DIAG`, subtopicId: topic.id, subtopicTitle: topic.title, question: byId.get(topic.id) }))
    : null;
}
