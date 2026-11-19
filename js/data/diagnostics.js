/** Diagnóstico por recuperação ativa: ADM-01, ADM-02 e ADM-03. */
export const DIAGNOSTICS = Object.freeze({
  'ADM-01': [
    { subtopicId: 'ADM-01-001', front: 'Uma equipe de voluntários que se reúne uma vez é necessariamente uma organização? O que caracteriza uma organização?', back: 'Não necessariamente. Organização é um conjunto estruturado de pessoas que coordena esforços e recursos para alcançar objetivos comuns. Administrar é planejar, organizar, dirigir e controlar esses recursos e atividades.' },
    { subtopicId: 'ADM-01-002', front: 'Uma prefeitura compra computadores, contrata servidores e utiliza dados de atendimento. Quais recursos organizacionais aparecem?', back: 'Computadores: materiais e tecnológicos; servidores: humanos; dados: informacionais. O dinheiro usado nas compras e contratações é recurso financeiro. Os recursos se complementam para atingir objetivos.' },
    { subtopicId: 'ADM-01-003', front: 'Um setor atingiu a meta de atendimentos, mas gastou muito mais recursos que o previsto. Foi eficaz? Foi eficiente?', back: 'Foi eficaz porque alcançou a meta, mas não foi eficiente no uso dos recursos. Efetividade considera o impacto real gerado; produtividade relaciona a quantidade produzida aos recursos empregados.' },
    { subtopicId: 'ADM-01-004', front: 'Uma chefia define metas, distribui tarefas, orienta a equipe e compara resultados com o planejado. Quais funções administrativas aparecem?', back: 'Planejar: definir metas; organizar: distribuir tarefas e recursos; dirigir: orientar e mobilizar a equipe; controlar: acompanhar resultados, comparar com padrões e corrigir desvios. São funções integradas.' },
    { subtopicId: 'ADM-01-005', front: 'Quem costuma decidir a direção geral de uma instituição, transformar a estratégia em planos setoriais e executar as tarefas diárias?', back: 'Nível estratégico: alta administração, decisões amplas e de longo prazo. Nível tático: gerências, planos de setores. Nível operacional: supervisão e execução das rotinas. Os níveis se articulam.' },
    { subtopicId: 'ADM-01-006', front: 'Um gestor domina um sistema, resolve conflitos na equipe e entende como uma mudança afeta toda a organização. Quais habilidades utiliza?', back: 'Técnica: domínio de métodos e ferramentas; humana: relacionamento, comunicação e cooperação; conceitual: compreensão da organização como um todo e das relações entre suas partes.' }
  ],
  'ADM-02': [
    { subtopicId: 'ADM-02-001', front: 'Uma unidade pública planeja, organiza equipes, orienta servidores e verifica resultados. Essas etapas acontecem apenas uma vez, em ordem rígida?', back: 'Não. Planejamento, organização, direção e controle formam funções interdependentes e contínuas. O controle pode indicar a necessidade de rever o planejamento, e as funções podem ocorrer simultaneamente.' },
    { subtopicId: 'ADM-02-002', front: 'Uma chefia possui três formas de reduzir filas e escolhe uma delas após comparar custos e impactos. Qual a diferença entre planejar e decidir?', back: 'Planejar define objetivos, analisa o contexto e prepara cursos de ação; decidir é selecionar uma alternativa entre as disponíveis. A decisão integra o planejamento, mas decisões também ocorrem nas demais funções administrativas.' },
    { subtopicId: 'ADM-02-003', front: 'Uma secretaria cria setores, atribui responsabilidades e define quem responde a quem. Isso é planejar ou organizar?', back: 'É organizar: estruturar o trabalho, distribuir recursos, responsabilidades e autoridade. Planejar estabelece objetivos e caminhos; organizar prepara a estrutura e os meios para executá-los.' },
    { subtopicId: 'ADM-02-004', front: 'Uma gestora explica prioridades, escuta a equipe e resolve conflitos entre setores. Quais funções ou atividades predominam?', back: 'Predomina a direção, que envolve liderança, comunicação e motivação para mobilizar pessoas. A coordenação busca integrar atividades e evitar esforços desconectados; não se confunde com controle de resultados.' },
    { subtopicId: 'ADM-02-005', front: 'Um setor cumpriu 70% da meta. A chefia compara esse resultado ao padrão e altera o fluxo de atendimento. Que função aparece e quais são seus passos?', back: 'Controle: estabelecer padrões, medir o desempenho, comparar resultados com padrões e adotar ações corretivas quando necessário. Controlar não é apenas punir ou fiscalizar pessoas.' },
    { subtopicId: 'ADM-02-006', front: 'Uma prefeitura quer reduzir o tempo de atendimento ao cidadão. Como as quatro funções administrativas podem atuar juntas?', back: 'Planejar: definir meta e ações; organizar: distribuir pessoal e recursos; dirigir: orientar e mobilizar servidores; controlar: medir tempo de espera e corrigir desvios. O objetivo público é melhorar a prestação do serviço, respeitando as normas aplicáveis.' }
  ],
  'ADM-03': [
    { subtopicId: 'ADM-03-001', front: 'A direção define prioridades para cinco anos, uma gerência cria um plano anual e uma equipe estabelece tarefas semanais. Classifique os níveis de planejamento.', back: 'Estratégico: diretrizes amplas e de longo prazo; tático: desdobramento por áreas ou unidades; operacional: rotinas e tarefas detalhadas. Horizontes são típicos, não prazos legais fixos.' },
    { subtopicId: 'ADM-03-002', front: 'Uma instituição declara “prestar atendimento acessível”, deseja “ser referência em qualidade” e adota “transparência e respeito”. O que é missão, visão e valores?', back: 'Missão: razão de existir e propósito atual; visão: situação futura desejada; valores: princípios que orientam decisões e comportamentos. Não são sinônimos de metas numéricas.' },
    { subtopicId: 'ADM-03-003', front: 'Uma secretaria deseja melhorar o atendimento, fixa reduzir a espera para 15 minutos e decide implantar agendamento. Diferencie objetivo, meta e estratégia.', back: 'Objetivo: resultado desejado, como melhorar atendimento; meta: resultado específico e mensurável, como espera de até 15 minutos; estratégia: caminho escolhido, como agendamento. O plano detalha ações, responsáveis e recursos.' },
    { subtopicId: 'ADM-03-004', front: 'Uma equipe tem servidores experientes, sistemas antigos, recebe verba de programa externo e enfrenta mudança na demanda. Como classificar esses fatores na SWOT?', back: 'Forças e fraquezas são fatores internos: experiência da equipe (força) e sistemas antigos (fraqueza). Oportunidades e ameaças são externas: verba disponível (oportunidade) e mudança desfavorável da demanda (ameaça). A classificação depende do contexto.' },
    { subtopicId: 'ADM-03-005', front: 'Um gestor mede apenas o gasto mensal e afirma que isso basta para avaliar toda a estratégia. Como o Balanced Scorecard amplia essa visão?', back: 'O BSC traduz a estratégia em objetivos e indicadores articulados, considerando perspectivas além da financeira. No setor público, as perspectivas podem ser adaptadas à missão e ao valor entregue à sociedade; não há obrigação de copiar mecanicamente o modelo privado.' },
    { subtopicId: 'ADM-03-006', front: 'Um órgão mede quantos atendimentos realizou e também quantos cidadãos tiveram o problema resolvido. Qual a diferença entre esses indicadores e o papel do mapa estratégico?', back: 'Quantidade de atendimentos é um indicador de produção; resolução de demandas aproxima-se de resultado ou qualidade. Indicadores precisam refletir objetivos; o mapa estratégico representa relações entre objetivos, geralmente em lógica de causa e efeito, sem provar causalidade automaticamente.' }
  ],
"ADM-04": [
  {
    "subtopicId": "ADM-04-001",
    "front": "Por que separar atividades sem integrar informações pode aumentar filas?",
    "back": "Divisão do trabalho especializa tarefas e exige coordenação. Uma unidade de atendimento separa triagem, análise e entrega; precisa de comunicação entre as etapas para evitar retrabalho."
  },
  {
    "subtopicId": "ADM-04-002",
    "front": "Uma ordem fora da competência institucional torna-se válida por vir da chefia?",
    "back": "Hierarquia estabelece níveis de autoridade; responsabilidade acompanha o dever de executar e prestar contas. Uma chefia distribui demandas e acompanha prazos; cada servidor responde pelas tarefas sob sua atribuição."
  },
  {
    "subtopicId": "ADM-04-003",
    "front": "Por que uma equipe experiente pode admitir maior amplitude de controle?",
    "back": "Delegação transfere o exercício de atribuições nos limites permitidos; amplitude de controle é o número de subordinados diretamente supervisionados. Uma coordenadora autoriza supervisores a decidir escalas dentro das regras e mantém acompanhamento dos resultados."
  },
  {
    "subtopicId": "ADM-04-004",
    "front": "Qual decisão deve ser uniforme e qual pode ser adaptada pela unidade?",
    "back": "Centralização concentra decisões em níveis superiores; descentralização distribui decisões ou execução para unidades com maior autonomia. Uma rede de escolas deixa compras estratégicas na sede e permite ajustar horários de atendimento nas unidades."
  },
  {
    "subtopicId": "ADM-04-005",
    "front": "Que critério predomina em uma equipe dedicada a idosos e outra a estudantes?",
    "back": "Departamentalização agrupa atividades segundo critérios como função, produto, clientela, território ou processo. Um órgão cria unidades regionais para atender localidades distintas e mantém setor central de tecnologia."
  },
  {
    "subtopicId": "ADM-04-006",
    "front": "Qual risco surge quando duas chefias dão prioridades incompatíveis?",
    "back": "Organograma representa relações formais; estruturas funcional, divisional e matricial combinam autoridade de formas distintas. Uma equipe de projeto responde ao gerente do projeto e mantém vínculo técnico com a coordenação de informática."
  }
],
"ADM-05": [
  {
    "subtopicId": "ADM-05-001",
    "front": "Como a percepção de justiça afeta a aceitação de uma mudança?",
    "back": "Dirigir significa mobilizar pessoas para executar planos, envolvendo comunicação, orientação e liderança. Uma chefia explica a finalidade de novo protocolo, escuta dificuldades e acompanha a adoção da rotina."
  },
  {
    "subtopicId": "ADM-05-002",
    "front": "Uma referência técnica pode liderar sem assinar decisões da chefia?",
    "back": "Liderança é influência sobre pessoas; autoridade formal decorre do cargo; poder é capacidade de influenciar comportamentos. Uma servidora experiente orienta colegas sobre sistema novo sem ser superior hierárquica."
  },
  {
    "subtopicId": "ADM-05-003",
    "front": "Por que a urgência pode alterar o estilo de liderança adotado?",
    "back": "Estilos clássicos de liderança incluem autocrático, democrático e liberal (laissez-faire). Em uma emergência operacional, a chefia decide rapidamente; ao redesenhar o atendimento, consulta servidores."
  },
  {
    "subtopicId": "ADM-05-004",
    "front": "Como a experiência da equipe altera o nível de orientação necessário?",
    "back": "Teorias de liderança investigam traços, comportamentos e adequação às situações. Uma chefia oferece instrução detalhada a iniciantes e amplia autonomia quando a equipe ganha experiência."
  },
  {
    "subtopicId": "ADM-05-005",
    "front": "Por que um ambiente confortável pode não gerar entusiasmo com o trabalho?",
    "back": "Maslow propôs uma hierarquia de necessidades; Herzberg distinguiu fatores higiênicos e motivacionais. Um setor melhora iluminação e equipamentos, reduz queixas, mas ainda precisa oferecer tarefas significativas e reconhecimento."
  },
  {
    "subtopicId": "ADM-05-006",
    "front": "Por que uma recompensa valiosa pode não motivar se a pessoa acha impossível alcançá-la?",
    "back": "McGregor contrapôs pressupostos gerenciais X e Y; outras abordagens destacam expectativas e equidade. Uma chefia amplia autonomia e oferece recursos porque acredita na capacidade da equipe de assumir compromissos."
  }
],
"ADM-06": [
  {
    "subtopicId": "ADM-06-001",
    "front": "O que fazer se a meta era irrealista desde o início?",
    "back": "Controle compara resultados com padrões e orienta correções e aprendizagem. Uma biblioteca compara prazo médio de empréstimo com a meta e ajusta o fluxo quando surgem atrasos."
  },
  {
    "subtopicId": "ADM-06-002",
    "front": "Como evitar que uma meta de velocidade incentive atendimentos incompletos?",
    "back": "Indicadores são medidas de desempenho; padrões e metas fornecem referências para avaliação. Um órgão mede tempo médio de atendimento e percentual de solicitações resolvidas, não apenas volume de senhas distribuídas."
  },
  {
    "subtopicId": "ADM-06-003",
    "front": "Qual tipo de controle permite corrigir uma entrega enquanto ainda ocorre?",
    "back": "Controle preventivo ocorre antes, concomitante durante e posterior depois da execução. Antes de publicar edital, a equipe revisa requisitos; durante o contrato, fiscaliza entregas; depois, avalia resultados."
  },
  {
    "subtopicId": "ADM-06-004",
    "front": "Por que trocar um formulário sem investigar a causa pode não resolver atrasos?",
    "back": "Ação corretiva enfrenta desvios; melhoria contínua procura aperfeiçoar processos de modo recorrente. Após reclamações de atrasos, a equipe identifica falha no fluxo de documentos, testa novo procedimento e acompanha os indicadores."
  },
  {
    "subtopicId": "ADM-06-005",
    "front": "Por que cumprir uma meta não dispensa verificar legalidade do gasto?",
    "back": "Controle gerencial apoia a gestão; controle da Administração Pública envolve mecanismos internos, externos e sociais. Uma secretaria monitora gastos e metas; órgão de controle interno verifica procedimentos; cidadãos acompanham dados públicos."
  }
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
