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
],
  "ADM-07": [
  {
    "subtopicId": "ADM-07-001",
    "front": "Ao identificar falhas de atendimento recorrentes, qual decisão revela gestão de pessoas integrada? Explique o raciocínio antes de virar o cartão.",
    "back": "Investigar competências e condições de trabalho antes de planejar desenvolvimento. Gestão de pessoas articula políticas para atrair, integrar, desenvolver, reconhecer e acompanhar pessoas de acordo com objetivos organizacionais. Não se limita ao departamento de pessoal: rotinas de folha e registros são necessárias, mas não substituem decisões sobre competências e ambiente de trabalho."
  },
  {
    "subtopicId": "ADM-07-002",
    "front": "Qual ação corresponde à integração de novos servidores? Explique o raciocínio antes de virar o cartão.",
    "back": "Apresentar rotinas, responsabilidades, canais de apoio e padrões de atendimento. Recrutamento busca atrair candidatos; seleção compara requisitos e perfis; integração apresenta atribuições, processos e cultura de trabalho. Na Administração Pública, o ingresso em cargo efetivo observa, como regra, concurso público; técnicas de recrutamento empresarial não substituem exigências constitucionais."
  },
  {
    "subtopicId": "ADM-07-003",
    "front": "O setor aprendeu um sistema, mas continua cometendo erros por falta de acesso. Qual decisão é mais adequada? Explique o raciocínio antes de virar o cartão.",
    "back": "Corrigir a barreira de acesso e avaliar a aplicação prática do treinamento. Treinamento costuma focalizar competências necessárias ao desempenho atual; desenvolvimento amplia capacidades para desafios e responsabilidades futuras. Aprendizagem envolve aquisição e aplicação de conhecimentos; participar de curso não garante transferência para o trabalho."
  },
  {
    "subtopicId": "ADM-07-004",
    "front": "Como avaliar um atendente que resolve casos complexos com menos atendimentos diários? Explique o raciocínio antes de virar o cartão.",
    "back": "Combinar indicadores quantitativos e qualitativos, considerando complexidade e critérios conhecidos. Avaliação de desempenho compara resultados e comportamentos observáveis com critérios previamente definidos; gestão por competências identifica conhecimentos, habilidades e atitudes requeridos. Avaliar não é apenas atribuir nota: critérios, evidências e devolutiva permitem decisões de desenvolvimento."
  },
  {
    "subtopicId": "ADM-07-005",
    "front": "O que indica melhoria do clima sem necessariamente alterar a cultura de imediato? Explique o raciocínio antes de virar o cartão.",
    "back": "Aumento da percepção de apoio e diálogo após mudanças na liderança. Cultura reúne valores, pressupostos e práticas compartilhados; clima expressa percepções das pessoas sobre o ambiente de trabalho em determinado período. Clima pode mudar relativamente rápido; cultura tende a ser mais profunda e persistente, embora também possa mudar."
  },
  {
    "subtopicId": "ADM-07-006",
    "front": "Qual medida atua sobre uma causa estrutural de desgaste no trabalho? Explique o raciocínio antes de virar o cartão.",
    "back": "Revisar carga de tarefas e condições físicas de execução do serviço. Qualidade de vida no trabalho envolve condições de trabalho, saúde, segurança, reconhecimento, equilíbrio e relações respeitosas. Ações recreativas podem ajudar, mas não substituem medidas estruturais sobre sobrecarga, ergonomia e organização do trabalho."
  }
],
  "ADM-08": [
  {
    "subtopicId": "ADM-08-001",
    "front": "Como reduzir erros causados por siglas desconhecidas em uma orientação? Explique o raciocínio antes de virar o cartão.",
    "back": "Explicar termos e pedir confirmação de entendimento por meio de feedback. Comunicação envolve emissor, mensagem, canal, receptor, contexto e feedback; ruídos podem alterar a compreensão. Transmitir uma mensagem não garante entendimento; o feedback ajuda a verificar se o significado foi compartilhado."
  },
  {
    "subtopicId": "ADM-08-002",
    "front": "Qual exemplo caracteriza comunicação ascendente? Explique o raciocínio antes de virar o cartão.",
    "back": "Um servidor informa à chefia dificuldades encontradas no atendimento. Comunicação formal segue canais instituídos; informal surge das interações cotidianas. Fluxos podem ser descendentes, ascendentes ou horizontais. Informal não significa necessariamente falsa; formal não significa necessariamente eficaz."
  },
  {
    "subtopicId": "ADM-08-003",
    "front": "Qual devolutiva favorece aprendizagem após um erro de protocolo? Explique o raciocínio antes de virar o cartão.",
    "back": "Descrever o procedimento, ouvir o contexto e pactuar uma correção concreta. Feedback útil descreve comportamentos observáveis, seus efeitos e possibilidades de melhoria; escuta ativa busca compreender antes de responder. Feedback não se confunde com crítica pessoal; ouvir ativamente não significa concordar com tudo."
  },
  {
    "subtopicId": "ADM-08-004",
    "front": "Qual prática demonstra interdependência e colaboração entre setores? Explique o raciocínio antes de virar o cartão.",
    "back": "Definir responsabilidades e pontos de repasse entre protocolo e arquivo. Equipes coordenam esforços em torno de objetivos comuns, com interdependência, responsabilidades definidas e comunicação. Estar no mesmo setor não garante trabalho em equipe; colaboração exige integração real das atividades."
  },
  {
    "subtopicId": "ADM-08-005",
    "front": "Qual abordagem enfrenta um conflito de agenda entre duas equipes? Explique o raciocínio antes de virar o cartão.",
    "back": "Identificar necessidades de ambas e negociar critérios transparentes de uso. Conflitos surgem de interesses, percepções ou necessidades divergentes; negociação busca construir encaminhamentos aceitáveis com diálogo e critérios. Conflito não é sempre prejudicial: divergências bem tratadas podem revelar problemas e produzir melhorias."
  }
],
  "ADM-09": [
  {
    "subtopicId": "ADM-09-001",
    "front": "Qual medida melhora a qualidade sem afastar requisitos legais? Explique o raciocínio antes de virar o cartão.",
    "back": "Simplificar orientações e reduzir etapas desnecessárias, mantendo exigências obrigatórias. Qualidade relaciona-se à capacidade de processos e serviços atenderem requisitos e necessidades legítimas dos usuários. No serviço público, satisfação do usuário importa, mas não autoriza descumprir regras de legalidade, equidade e interesse público."
  },
  {
    "subtopicId": "ADM-09-002",
    "front": "Qual iniciativa expressa melhoria contínua? Explique o raciocínio antes de virar o cartão.",
    "back": "Medir retrabalho, corrigir sua causa e verificar o efeito da mudança. Gestão da qualidade total envolve compromisso organizacional amplo com processos, prevenção de falhas e foco no usuário; melhoria contínua busca aperfeiçoamentos sucessivos. Qualidade não depende apenas da inspeção final; prevenir erros ao longo do processo tende a ser mais eficaz."
  },
  {
    "subtopicId": "ADM-09-003",
    "front": "Após testar novo agendamento, a unidade compara o tempo de espera com a meta. Qual etapa é essa? Explique o raciocínio antes de virar o cartão.",
    "back": "Check: verificar resultados e confrontá-los com o objetivo planejado. PDCA organiza melhoria em Planejar (Plan), Executar (Do), Verificar (Check) e Agir/Ajustar (Act). Verificar resultados não é o mesmo que executar; agir inclui padronizar melhorias eficazes ou corrigir desvios."
  },
  {
    "subtopicId": "ADM-09-004",
    "front": "Para levantar causas possíveis de atrasos antes de investigá-las, qual ferramenta é adequada? Explique o raciocínio antes de virar o cartão.",
    "back": "Diagrama de Ishikawa, seguido de verificação das hipóteses levantadas. O diagrama de Ishikawa organiza possíveis causas de um problema; o gráfico de Pareto ordena categorias por frequência ou impacto para orientar prioridades. Ishikawa não prova causalidade sozinho; Pareto não determina automaticamente a causa-raiz."
  },
  {
    "subtopicId": "ADM-09-005",
    "front": "O plano de ação já definiu responsáveis e prazos. Como verificar se melhorou o serviço? Explique o raciocínio antes de virar o cartão.",
    "back": "Acompanhar um indicador de espera com método de medição consistente. 5W2H estrutura um plano de ação com o quê, por quê, onde, quando, quem, como e quanto custa; indicadores acompanham resultados ou processos. Preencher 5W2H não demonstra que uma ação funcionou; indicadores e acompanhamento permitem verificar efeitos."
  }
],
"ADM-10": [
  {
    "subtopicId": "ADM-10-001",
    "front": "Qual a diferença entre classificar, especificar e codificar um material?",
    "back": "Classificar agrupa itens; especificar descreve atributos técnicos; codificar atribui identificação padronizada. Um código não substitui uma especificação suficiente."
  },
  {
    "subtopicId": "ADM-10-002",
    "front": "O recebimento de materiais termina ao descarregar as caixas?",
    "back": "Não. É necessário conferir documentos, quantidade e conformidade conforme o procedimento aplicável; armazenar envolve localização, conservação e rastreabilidade."
  },
  {
    "subtopicId": "ADM-10-003",
    "front": "Por que estoque elevado nem sempre é bom?",
    "back": "Pode evitar faltas, mas aumenta custos de espaço, capital, perdas e obsolescência. O equilíbrio depende da demanda e do prazo de reposição."
  },
  {
    "subtopicId": "ADM-10-004",
    "front": "Diferencie estoque de segurança, ponto de pedido e giro.",
    "back": "Estoque de segurança protege contra incertezas; ponto de pedido sinaliza a reposição considerando demanda e prazo; giro mede renovação do estoque em um período."
  },
  {
    "subtopicId": "ADM-10-005",
    "front": "Para que serve o inventário se o sistema já registra todos os itens?",
    "back": "O inventário confronta quantidades físicas e registros, identifica divergências e subsidia apuração. Almoxarifado recebe, guarda e distribui materiais."
  },
  {
    "subtopicId": "ADM-10-006",
    "front": "Tombamento significa que um bem jamais poderá ser baixado?",
    "back": "Não. Tombamento identifica e registra o bem; baixa retira-o do controle patrimonial segundo procedimento aplicável, não sendo sinônimo de descarte físico."
  }
],
"ADM-11": [
  {
    "subtopicId": "ADM-11-001",
    "front": "Diferencie processo, atividade, tarefa e procedimento.",
    "back": "Processo articula atividades para transformar entradas em resultados; atividade reúne trabalhos; tarefa é ação específica; procedimento descreve como executar uma ação."
  },
  {
    "subtopicId": "ADM-11-002",
    "front": "Atendimento ao cidadão é sempre processo de apoio?",
    "back": "Não. Processos finalísticos entregam valor ligado à missão institucional; processos de apoio oferecem meios. A classificação depende da finalidade do órgão."
  },
  {
    "subtopicId": "ADM-11-003",
    "front": "O que caracteriza a gestão por processos?",
    "back": "Acompanha fluxos ponta a ponta e resultados entre setores, sem necessariamente eliminar departamentos; requer responsabilidades e indicadores ao longo do processo."
  },
  {
    "subtopicId": "ADM-11-004",
    "front": "Qual a diferença entre fluxograma e organograma?",
    "back": "Fluxograma representa etapas, decisões e caminhos de um processo; organograma representa unidades e relações hierárquicas. Um processo pode atravessar vários setores."
  },
  {
    "subtopicId": "ADM-11-005",
    "front": "Como identificar um gargalo sem simplesmente culpar um setor?",
    "back": "Examinar filas, tempos, capacidade e retrabalho. Gargalo é uma restrição ao fluxo; melhorar uma etapa não restritiva pode não reduzir o prazo total."
  }
],
"ADM-12": [
  {
    "subtopicId": "ADM-12-001",
    "front": "Qualidade no atendimento exige atender a todo pedido do cidadão?",
    "back": "Não. Exige informação correta, respeito, clareza, acessibilidade e orientação, mesmo quando o pedido não pode ser deferido segundo as regras."
  },
  {
    "subtopicId": "ADM-12-002",
    "front": "Linguagem clara é a mesma coisa que informalidade excessiva?",
    "back": "Não. Linguagem clara preserva precisão e compreensão; postura profissional inclui respeito, discrição e comunicação adequada ao público."
  },
  {
    "subtopicId": "ADM-12-003",
    "front": "Quais cuidados mudam entre atendimento presencial, telefônico e digital?",
    "back": "Todos exigem orientação, registro adequado e proteção de dados; cada canal demanda recursos específicos de comunicação, confirmação de entendimento e acessibilidade."
  },
  {
    "subtopicId": "ADM-12-004",
    "front": "Atender todas as pessoas de modo idêntico garante acessibilidade?",
    "back": "Não necessariamente. Barreiras distintas podem exigir adaptações razoáveis para assegurar acesso efetivo e equitativo."
  },
  {
    "subtopicId": "ADM-12-005",
    "front": "Como administrar conflitos sem prometer algo fora da competência do órgão?",
    "back": "Escutar, esclarecer critérios, explicar limites e encaminhamentos e registrar quando cabível, respeitando regras e evitando privilégios."
  }
],
"AP-13": [
  {
    "subtopicId": "AP-13-001",
    "front": "Como você diferenciaria os conceitos centrais de administração pública: sentidos e conceitos em uma situação concreta?",
    "back": "Em sentido subjetivo, Administração Pública designa os sujeitos que exercem atividade administrativa. O sentido objetivo diz respeito à atividade administrativa desempenhada. Exemplo: Uma autarquia é exemplo de sujeito administrativo; fiscalizar determinado serviço é exemplo de atividade administrativa."
  },
  {
    "subtopicId": "AP-13-002",
    "front": "Como você diferenciaria os conceitos centrais de administração direta e indireta: visão geral em uma situação concreta?",
    "back": "Órgãos da administração direta integram a pessoa política e, em regra, não possuem personalidade jurídica própria. Entidades da administração indireta possuem personalidade jurídica própria. Exemplo: Uma secretaria municipal é órgão da administração direta; uma autarquia municipal é entidade da administração indireta."
  },
  {
    "subtopicId": "AP-13-003",
    "front": "Como você diferenciaria os conceitos centrais de interesse público e finalidade pública em uma situação concreta?",
    "back": "O agente público deve orientar sua atuação à finalidade pública estabelecida pelo ordenamento. Interesse público não se confunde com vantagem pessoal do agente. Exemplo: Um gestor não pode direcionar atendimento prioritário a amigos alegando interesse público."
  },
  {
    "subtopicId": "AP-13-004",
    "front": "Como você diferenciaria os conceitos centrais de estado, governo e administração pública em uma situação concreta?",
    "back": "Governo relaciona-se à direção política do Estado, enquanto Administração Pública executa atividades administrativas. O Estado possui continuidade institucional para além da alternância de governos. Exemplo: A troca de prefeito altera a direção política, mas não extingue a personalidade jurídica do município."
  }
],
"AP-14": [
  {
    "subtopicId": "AP-14-001",
    "front": "Como você diferenciaria os conceitos centrais de modelo patrimonialista em uma situação concreta?",
    "back": "No patrimonialismo, a confusão entre interesses privados do governante e patrimônio público é característica central. Relações pessoais e favorecimentos são traços associados ao patrimonialismo. Exemplo: Um dirigente distribui cargos como recompensa a parentes e aliados, sem critérios impessoais."
  },
  {
    "subtopicId": "AP-14-002",
    "front": "Como você diferenciaria os conceitos centrais de modelo burocrático em uma situação concreta?",
    "back": "A burocracia valoriza regras formais, impessoalidade e profissionalização. A previsibilidade e a hierarquia formal integram a lógica burocrática. Exemplo: Uma seleção por critérios impessoais e procedimentos documentados expressa traços burocráticos."
  },
  {
    "subtopicId": "AP-14-003",
    "front": "Como você diferenciaria os conceitos centrais de modelo gerencial em uma situação concreta?",
    "back": "O modelo gerencial valoriza resultados e avaliação de desempenho na prestação de serviços. Indicadores e responsabilização podem apoiar o foco em resultados. Exemplo: Um órgão acompanha prazo e qualidade do atendimento e corrige processos com base nos indicadores."
  },
  {
    "subtopicId": "AP-14-004",
    "front": "Como você diferenciaria os conceitos centrais de comparação entre os modelos em uma situação concreta?",
    "back": "O patrimonialismo se associa ao personalismo; a burocracia, à impessoalidade formal; o gerencialismo, a resultados. Traços de modelos distintos podem coexistir em uma mesma instituição. Exemplo: Um setor usa regras formais de seleção e indicadores de qualidade, combinando traços burocráticos e gerenciais."
  },
  {
    "subtopicId": "AP-14-005",
    "front": "Como você diferenciaria os conceitos centrais de reformas administrativas e gestão pública brasileira em uma situação concreta?",
    "back": "O Plano Diretor de 1995 é associado à agenda de reforma gerencial do Estado brasileiro. O Decreto-Lei 200/1967 é marco relevante na organização administrativa federal. Exemplo: Um órgão moderniza a gestão por indicadores sem dispensar prestação de contas."
  }
],
"DA-15": [
  {
    "subtopicId": "DA-15-001",
    "front": "Como você diferenciaria os conceitos centrais de princípios expressos do art. 37 da constituição em uma situação concreta?",
    "back": "Legalidade, impessoalidade, moralidade, publicidade e eficiência estão expressos no caput do art. 37 da Constituição. O caput do art. 37 alcança administração direta e indireta dos entes federativos. Exemplo: Uma autarquia estadual deve observar os princípios do caput do art. 37."
  },
  {
    "subtopicId": "DA-15-002",
    "front": "Como você diferenciaria os conceitos centrais de legalidade, impessoalidade e moralidade em uma situação concreta?",
    "back": "A legalidade administrativa exige fundamento e conformidade com o ordenamento jurídico. A impessoalidade impede favorecimentos pessoais no exercício da função. Exemplo: Um servidor não pode antecipar atendimento de amigo sem critério legal de prioridade."
  },
  {
    "subtopicId": "DA-15-003",
    "front": "Como você diferenciaria os conceitos centrais de publicidade e eficiência em uma situação concreta?",
    "back": "A publicidade administrativa admite limites jurídicos relacionados a sigilo e proteção de dados. Eficiência exige atenção à qualidade dos resultados e ao uso dos recursos. Exemplo: Um portal informa gastos públicos sem expor desnecessariamente dados pessoais protegidos."
  },
  {
    "subtopicId": "DA-15-004",
    "front": "Como você diferenciaria os conceitos centrais de supremacia e indisponibilidade do interesse público em uma situação concreta?",
    "back": "A indisponibilidade impede que o gestor trate bens e interesses públicos como propriedade particular. Prerrogativas administrativas devem ser exercidas dentro dos limites jurídicos. Exemplo: Um gestor não pode perdoar dívida pública por amizade sem fundamento legal."
  },
  {
    "subtopicId": "DA-15-005",
    "front": "Como você diferenciaria os conceitos centrais de razoabilidade, proporcionalidade e motivação em uma situação concreta?",
    "back": "A proporcionalidade envolve adequação, necessidade e ponderação da medida. Motivação permite compreender os fundamentos fáticos e jurídicos de uma decisão. Exemplo: Antes de restringir acesso a um serviço, o órgão avalia alternativas menos gravosas e justifica a decisão."
  },
  {
    "subtopicId": "DA-15-006",
    "front": "Como você diferenciaria os conceitos centrais de autotutela, segurança jurídica e continuidade em uma situação concreta?",
    "back": "Autotutela permite à Administração revisar seus atos nos limites do ordenamento. Segurança jurídica valoriza estabilidade e proteção da confiança legítima. Exemplo: Uma administração identifica ilegalidade em ato anterior e examina sua anulação, respeitando garantias aplicáveis."
  }
],
"DA-16": [
  {
    "subtopicId": "DA-16-001",
    "front": "Qual a diferença ou limite essencial de administração direta e órgãos públicos? Dê um exemplo de concurso.",
    "back": "Órgãos integram pessoas políticas e, em regra, não possuem personalidade jurídica própria. Órgãos são centros de competências e podem integrar diferentes Poderes. Exemplo: Uma secretaria estadual atua em nome do próprio estado, não como pessoa jurídica distinta."
  },
  {
    "subtopicId": "DA-16-002",
    "front": "Qual a diferença ou limite essencial de autarquias e fundações públicas? Dê um exemplo de concurso.",
    "back": "Autarquias são pessoas jurídicas de direito público criadas diretamente por lei específica. A instituição de fundações públicas segue o regime constitucional aplicável e sua natureza jurídica exige análise. Exemplo: Uma autarquia previdenciária tem personalidade própria e se sujeita à supervisão finalística prevista em lei."
  },
  {
    "subtopicId": "DA-16-003",
    "front": "Qual a diferença ou limite essencial de empresas públicas e sociedades de economia mista? Dê um exemplo de concurso.",
    "back": "Empresa pública admite capital integralmente público e pode adotar formas societárias admitidas em direito. Sociedade de economia mista é constituída sob a forma de sociedade anônima e possui controle estatal. Exemplo: Uma estatal que presta serviço público possui personalidade de direito privado, sem se confundir com órgão."
  },
  {
    "subtopicId": "DA-16-004",
    "front": "Qual a diferença ou limite essencial de centralização e descentralização? Dê um exemplo de concurso.",
    "back": "Centralização ocorre quando a própria pessoa política desempenha atividade por seus órgãos. Descentralização envolve atribuição de execução a outra pessoa jurídica, conforme o instrumento jurídico. Exemplo: Um município presta serviço por secretaria e descentraliza outra atividade a autarquia."
  },
  {
    "subtopicId": "DA-16-005",
    "front": "Qual a diferença ou limite essencial de concentração e desconcentração? Dê um exemplo de concurso.",
    "back": "Desconcentração distribui competências internamente entre órgãos de uma mesma pessoa jurídica. Concentração reúne atribuições em menor número de órgãos da mesma pessoa jurídica. Exemplo: Um ministério cria unidades regionais sem constituir novas pessoas jurídicas."
  },
  {
    "subtopicId": "DA-16-006",
    "front": "Qual a diferença ou limite essencial de entidades e vínculos de supervisão? Dê um exemplo de concurso.",
    "back": "Entidades da administração indireta têm personalidade jurídica própria e se submetem aos controles legalmente previstos. A vinculação para controle finalístico não se confunde com subordinação hierárquica típica entre órgãos. Exemplo: Um ministério acompanha metas de autarquia vinculada, sem dirigir cada ato como chefia interna."
  }
],
"DA-17": [
  {
    "subtopicId": "DA-17-001",
    "front": "Qual a diferença ou limite essencial de conceito e classificação de agentes públicos? Dê um exemplo de concurso.",
    "back": "Agente público é categoria ampla que abrange quem exerce função estatal, mesmo transitoriamente, nas hipóteses jurídicas cabíveis. A classificação doutrinária pode distinguir agentes políticos, servidores e particulares em colaboração. Exemplo: Um mesário convocado pode exercer função pública temporária sem ocupar cargo efetivo."
  },
  {
    "subtopicId": "DA-17-002",
    "front": "Qual a diferença ou limite essencial de cargo, emprego e função pública? Dê um exemplo de concurso.",
    "back": "Cargo público é unidade de atribuições criada nos termos da lei e vinculada a regime jurídico próprio. Emprego público costuma relacionar-se a vínculo contratual regido pela CLT, observadas normas constitucionais. Exemplo: Uma empresa pública contrata empregado público, enquanto autarquia pode prover cargo estatutário."
  },
  {
    "subtopicId": "DA-17-003",
    "front": "Qual a diferença ou limite essencial de ingresso, provimento e vacância? Dê um exemplo de concurso.",
    "back": "A investidura em cargo ou emprego público depende, em regra, de aprovação prévia em concurso, ressalvadas exceções constitucionais. Provimento refere-se ao preenchimento do cargo; vacância, à desocupação nas hipóteses legais. Exemplo: Após concurso, candidata é nomeada e toma posse conforme regras; exoneração posterior gera vacância."
  },
  {
    "subtopicId": "DA-17-004",
    "front": "Qual a diferença ou limite essencial de direitos, deveres e proibições? Dê um exemplo de concurso.",
    "back": "Direitos e deveres dos servidores dependem do regime jurídico aplicável e das normas constitucionais. Deveres funcionais podem incluir zelo, urbanidade e observância de ordens legais. Exemplo: Servidor estadual consulta seu estatuto próprio antes de presumir licença prevista em lei federal."
  },
  {
    "subtopicId": "DA-17-005",
    "front": "Qual a diferença ou limite essencial de responsabilidades e acumulação? Dê um exemplo de concurso.",
    "back": "Responsabilidades civil, penal e administrativa podem coexistir, respeitados os requisitos de cada esfera. Acumulação remunerada de cargos depende das exceções constitucionais e da compatibilidade de horários. Exemplo: Uma professora verifica se o segundo cargo é acumulável constitucionalmente e se os horários são compatíveis."
  },
  {
    "subtopicId": "DA-17-006",
    "front": "Qual a diferença ou limite essencial de regimes jurídicos e legislação aplicável? Dê um exemplo de concurso.",
    "back": "O regime jurídico depende do ente, da entidade, do vínculo e da legislação pertinente. Para cargos estaduais do RN, a legislação local deve ser consultada, sem confusão com o estatuto federal. Exemplo: Antes de responder sobre licença de servidor do RN, o candidato identifica o regime local aplicável."
  }
],
"DA-18": [
  {
    "subtopicId": "DA-18-001",
    "front": "Qual a diferença ou limite essencial de poder hierárquico? Dê um exemplo de concurso.",
    "back": "Poder hierárquico organiza, coordena e distribui funções dentro de estrutura administrativa hierarquizada. Delegação e avocação de competências obedecem a limites legais e não são irrestritas. Exemplo: Uma chefia redistribui tarefas entre unidades subordinadas dentro de suas competências."
  },
  {
    "subtopicId": "DA-18-002",
    "front": "Qual a diferença ou limite essencial de poder disciplinar? Dê um exemplo de concurso.",
    "back": "Poder disciplinar permite apurar e sancionar infrações funcionais ou de pessoas submetidas a vínculo especial, nos termos legais. A aplicação de sanção exige respeito ao devido processo e às garantias pertinentes. Exemplo: A administração instaura procedimento adequado para apurar possível infração funcional."
  },
  {
    "subtopicId": "DA-18-003",
    "front": "Qual a diferença ou limite essencial de poder regulamentar e normativo? Dê um exemplo de concurso.",
    "back": "Poder regulamentar permite editar atos gerais para fiel execução da lei nos limites constitucionais. Há hipóteses constitucionais específicas de decretos autônomos, com limites expressos. Exemplo: Um decreto detalha procedimentos de execução de lei sem inovar contra seu conteúdo."
  },
  {
    "subtopicId": "DA-18-004",
    "front": "Qual a diferença ou limite essencial de poder de polícia? Dê um exemplo de concurso.",
    "back": "Poder de polícia condiciona ou restringe atividades e direitos individuais em benefício de interesses coletivos juridicamente protegidos. Seu exercício está sujeito a legalidade, finalidade, proporcionalidade e controle. Exemplo: Fiscalização sanitária verifica requisitos de funcionamento de estabelecimento conforme a lei."
  },
  {
    "subtopicId": "DA-18-005",
    "front": "Qual a diferença ou limite essencial de abuso de poder: excesso e desvio de finalidade? Dê um exemplo de concurso.",
    "back": "Excesso de poder ocorre quando agente extrapola limites de competência. Desvio de finalidade ocorre quando competência é exercida para fim diverso do previsto em lei. Exemplo: Fiscal competente aplica sanção para perseguir desafeto: a finalidade desviada compromete o ato."
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
