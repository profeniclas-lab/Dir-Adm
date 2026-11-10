/* ============================================================
   EXERCÍCIOS PÓS-AULA — "Praticar o que aprendi"
   Melhoria 1 — Estrutura + blueprints iniciais (ADM-01 a ADM-04)

   Estrutura:
   - EXERCISE_BLUEPRINTS: mapa modId → { nivel1..nivel4: [qids] }
     Lista IDs de QUESTIONS (Q-...) e/ou EXERCISE_EXTRA_QUESTIONS (EX-...)
     Se a lista tiver menos que o esperado, o motor completa com questões
     do mesmo módulo (fallback) e sinaliza a UI.

   - EXERCISE_EXTRA_QUESTIONS: questões adicionais (formato idêntico a
     QUESTIONS), usadas quando o banco base não cobre um nível.
     Prefixo obrigatório: EX-

   R1 entregue: blueprints completos de ADM-01 a ADM-04
   R6+ entregará: demais módulos, progressivamente
   ============================================================ */

window.EXERCISE_BLUEPRINTS = {

  /* ============================================================
     ADM-01 — Fundamentos de Administração
  ============================================================ */
  'ADM-01': {
    nivel1: [
      'Q-DID-ADM-01-006',   // conceito de organização
      'Q-DID-ADM-01-007',   // funções administrativas (EXCETO)
      'Q-DID-ADM-01-003'    // recursos organizacionais
    ],
    nivel2: [
      'Q-REAL-ADM-01-001',  // eficiência/eficácia/efetividade (cenário)
      'Q-DID-ADM-01-002',   // Katz x níveis
      'Q-DID-ADM-01-004',   // produtividade
      'Q-DID-ADM-01-011'    // níveis hierárquicos
    ],
    nivel3: [
      'Q-DID-ADM-01-008',   // eficiência sem eficácia / eficácia sem eficiência
      'Q-REAL-ADM-01-009',  // etmologia + conceito
      'Q-DID-ADM-01-010'    // objetivos da Administração (INCORRETA)
    ],
    nivel4: [
      'Q-DID-ADM-01-005',   // Administração aplicada ao setor público (integra com AP-13)
      'Q-DID-ADM-01-001'    // PODC x níveis organizacionais (integra com ADM-02)
    ]
  },

  /* ============================================================
     ADM-02 — Processo Administrativo
  ============================================================ */
  'ADM-02': {
    nivel1: [
      'Q-DID-ADM-02-002',   // planejamento e controle como espelhos
      'Q-DID-ADM-02-004',   // natureza cíclica do PODC
      'Q-DID-ADM-02-006'    // controle como diagnóstico
    ],
    nivel2: [
      'Q-DID-ADM-02-003',   // cenário aplicado (jan/fev/mar/dez)
      'Q-DID-ADM-02-005',   // PODC no setor público
      'Q-REAL-ADM-02-002',  // ciclo administrativo e processos
      'Q-DID-ADM-02-010'    // tomada de decisão — etapas
    ],
    nivel3: [
      'Q-REAL-ADM-02-001',  // funções administrativas (Quadrix)
      'Q-DID-ADM-02-001',   // PODC x processo administrativo (Lei 9.784/99)
      'Q-REAL-ADM-02-009'   // funções administrativas (identificação)
    ],
    nivel4: [
      'EX-ADM-02-001',      // integração PODC + Controle (ADM-06)
      'EX-ADM-02-002'       // integração PODC + Processo Administrativo (DA-25)
    ]
  },

  /* ============================================================
     ADM-03 — Planejamento
  ============================================================ */
  'ADM-03': {
    nivel1: [
      'Q-DID-ADM-03-001',   // missão/visão/valores
      'Q-DID-ADM-03-003',   // objetivo x meta
      'Q-REAL-ADM-03-009'   // horizonte temporal do planejamento estratégico
    ],
    nivel2: [
      'Q-DID-ADM-03-002',   // SWOT
      'Q-DID-ADM-03-004',   // BSC
      'Q-REAL-ADM-03-002',  // níveis de planejamento (cenário CODERN)
      'Q-REAL-ADM-03-003'   // nível tático (foco setorial)
    ],
    nivel3: [
      'Q-REAL-ADM-03-004',  // ciclo orçamentário (PPA/LDO/LOA/execução/controle)
      'Q-DID-ADM-03-010',   // etapas do planejamento
      'Q-REAL-ADM-03-001'   // PPA, LDO e LOA (AOCP)
    ],
    nivel4: [
      'EX-ADM-03-001',      // integração Planejamento + Controle (ADM-06)
      'EX-ADM-03-002'       // integração BSC + Gestão por Processos (ADM-11)
    ]
  },

  /* ============================================================
     ADM-04 — Organização
  ============================================================ */
  'ADM-04': {
    nivel1: [
      'Q-DID-ADM-04-001',   // delegação x descentralização
      'Q-DID-ADM-04-002',   // amplitude de controle
      'Q-DID-ADM-04-003'    // estrutura linear
    ],
    nivel2: [
      'Q-REAL-ADM-04-003',  // linha-staff
      'Q-REAL-ADM-04-004',  // departamentalização por clientes
      'Q-REAL-ADM-04-009',  // especialização do trabalho
      'Q-DID-ADM-04-010'    // organização sem fronteiras
    ],
    nivel3: [
      'Q-REAL-ADM-04-001',  // estrutura matricial (CODERN)
      'Q-REAL-ADM-04-002',  // centralização x descentralização (CODERN)
      'Q-DID-ADM-04-011'    // departamentalização matricial (IFPB)
    ],
    nivel4: [
      'Q-REAL-ADM-04-005',  // QDT (integra com ADM-11 / gestão de processos)
      'EX-ADM-04-001'       // integração Estrutura + Administração Indireta (DA-16)
    ]
  },

  /* ============================================================
     ADM-05 — Direção, liderança e motivação
  ============================================================ */
  'ADM-05': {
    nivel1: [
      'Q-DID-ADM-05-001',   // autoridade x poder
      'Q-DID-ADM-05-002',   // estilos clássicos
      'Q-DID-ADM-05-004'    // Maslow
    ],
    nivel2: [
      'Q-DID-ADM-05-003',   // Herzberg
      'Q-DID-ADM-05-005',   // McGregor
      'Q-REAL-ADM-05-001',  // teorias de liderança (traços/contingencial/transacional/transformacional)
      'Q-DID-ADM-05-013'    // teoria dos traços
    ],
    nivel3: [
      'Q-REAL-ADM-05-002',  // papéis de Mintzberg
      'Q-DID-ADM-05-011',   // teoria ERC
      'Q-DID-ADM-05-012'    // Mintzberg — atividades
    ],
    nivel4: [
      'Q-REAL-ADM-05-009',  // autoridade burocrática (integra AP-14)
      'EX-ADM-05-001'       // integração liderança (ADM-05) + Katz/níveis (ADM-01)
    ]
  },

  /* ============================================================
     ADM-06 — Controle e avaliação
  ============================================================ */
  'ADM-06': {
    nivel1: [
      'Q-REAL-ADM-06-001',  // função de controle
      'Q-DID-ADM-06-001',   // etapas do controle
      'Q-DID-ADM-06-005'    // finalidade do controle
    ],
    nivel2: [
      'Q-REAL-ADM-06-002',  // controle concomitante
      'Q-DID-ADM-06-002',   // padrão x indicador
      'Q-DID-ADM-06-003',   // tipos de controle
      'Q-REAL-ADM-06-003'   // orçamento — planejamento + controle
    ],
    nivel3: [
      'Q-DID-ADM-06-004',   // controle administrativo x controle da Adm. Pública
      'Q-REAL-ADM-06-009',  // ênfase nas exceções
      'Q-DID-ADM-06-010'    // indicadores estratégicos
    ],
    nivel4: [
      'EX-ADM-06-001',      // integração controle (ADM-06) + gestão por processos (ADM-11)
      'EX-ADM-06-002'       // integração controle (ADM-06) + controle da Adm. Pública (DA-23)
    ]
  },

  /* ============================================================
     ADM-07 — Gestão de Pessoas
  ============================================================ */
  'ADM-07': {
    nivel1: [
      'Q-DID-ADM-07-001',   // seis processos
      'Q-DID-ADM-07-002',   // recrutamento x seleção
      'Q-DID-ADM-07-003'    // clima x cultura
    ],
    nivel2: [
      'Q-REAL-ADM-07-005',  // treinamento x desenvolvimento
      'Q-REAL-ADM-07-009',  // pilares da gestão de pessoas
      'Q-REAL-ADM-07-004',  // aptidão
      'Q-REAL-ADM-07-001'   // escolha forçada
    ],
    nivel3: [
      'Q-REAL-ADM-07-010',  // testes psicológicos (Quati, Palográfico, PMK, etc.)
      'Q-REAL-ADM-07-011',  // cargo — atribuições x especificações
      'Q-REAL-ADM-07-012'   // avaliação 90º
    ],
    nivel4: [
      'Q-REAL-ADM-07-002',  // escalas gráficas (conecta com evolução histórica)
      'EX-ADM-07-001'       // integração gestão por competências (ADM-07) + estrutura (ADM-04)
    ]
  },

  /* ============================================================
     ADM-08 — Comunicação e comportamento organizacional
  ============================================================ */
  'ADM-08': {
    nivel1: [
      'Q-DID-ADM-08-001',   // elementos do processo
      'Q-DID-ADM-08-002',   // formal x informal
      'Q-DID-ADM-08-003'    // grupo x equipe
    ],
    nivel2: [
      'Q-REAL-ADM-08-001',  // rede informal
      'Q-REAL-ADM-08-009',  // função da comunicação (informação)
      'Q-DID-ADM-08-004',   // conflito funcional x disfuncional
      'Q-REAL-ADM-08-004'   // barreira semântica
    ],
    nivel3: [
      'Q-REAL-ADM-08-002',  // pensamento grupal (groupthink)
      'Q-REAL-ADM-08-010',  // percepção seletiva
      'Q-REAL-ADM-08-011'   // negociação — ganha-perde x perde-perde
    ],
    nivel4: [
      'Q-REAL-ADM-08-003',  // relações públicas (integra com comunicação organizacional)
      'EX-ADM-08-001'       // integração comunicação (ADM-08) + impessoalidade (DA-15)
    ]
  }

};

window.EXERCISE_EXTRA_QUESTIONS = [

  /* ============================================================
     EX-ADM-02-001 — Integração PODC + Controle (ADM-06)
  ============================================================ */
  {
    id: 'EX-ADM-02-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'Integração PODC + Controle (ADM-06)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma Secretaria de Educação definiu, no início do ano, a meta de elevar o IDEB em 15%. Ao final do período, a equipe de gestão comparou o resultado obtido com a meta e identificou que duas escolas ficaram abaixo do esperado. A partir daí, decidiu reformular o plano de formação de professores para o ano seguinte. Considerando a integração entre as funções administrativas, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A comparação dos resultados com a meta é função de organização; a reformulação do plano é função de direção.' },
      { id: 'B', texto: 'A comparação dos resultados com a meta é função de controle; a reformulação do plano demonstra o caráter cíclico do PODC, em que o controle realimenta novo planejamento.' },
      { id: 'C', texto: 'A definição da meta é função de direção; a reformulação do plano é função de controle.' },
      { id: 'D', texto: 'O PODC é linear: após o controle, o ciclo se encerra e não há retorno ao planejamento.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A comparação entre resultado e meta é CONTROLE. A reformulação do plano a partir dos desvios identificados demonstra o CICLO do PODC: o controle realimenta o planejamento. As funções não são estanques.',
      incorretas: { A: 'Inverte as funções.', C: 'Inverte as funções.', D: 'O PODC é cíclico, não linear.' },
      conceitoCobrado: 'Integração PODC (ADM-02) + Controle (ADM-06)',
      pegadinha: 'Tratar o PODC como sequência linear que termina no controle.',
      comoApareceEmConcurso: 'Cenário aplicado que exige reconhecer duas funções e sua interdependência.'
    },
    tags: ['integração', 'PODC', 'controle']
  },

  /* ============================================================
     EX-ADM-02-002 — Integração PODC + Processo Administrativo (DA-25)
  ============================================================ */
  {
    id: 'EX-ADM-02-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'Integração PODC + Processo Administrativo (Lei 9.784/99)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um gestor afirma: "Na minha rotina, processo administrativo e PODC são a mesma coisa — ambos organizam o trabalho". Sobre essa afirmação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Está correta: são sinônimos, pois ambos tratam da organização do trabalho administrativo.' },
      { id: 'B', texto: 'Confunde dois conceitos distintos: o PODC é o ciclo de funções do gestor (planejar, organizar, dirigir, controlar); o processo administrativo da Lei 9.784/99 é o rito jurídico de decisão da Administração, com fases, prazos, contraditório e ampla defesa.' },
      { id: 'C', texto: 'Está correta apenas no âmbito federal, pois a Lei 9.784/99 aplica-se à União.' },
      { id: 'D', texto: 'Está correta apenas no âmbito estadual.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'São conceitos DIFERENTES. O PODC é o ciclo de funções da Teoria Geral. O processo administrativo da Lei 9.784/99 é o rito jurídico de decisão (instauração, instrução, defesa, relatório, decisão, recursos), com contraditório e ampla defesa.',
      incorretas: { A: 'Não são sinônimos.', C: 'A distinção não depende do ente federativo.', D: 'Idem.' },
      conceitoCobrado: 'Integração PODC (ADM-02) + Processo Administrativo (DA-25)',
      pegadinha: 'Confundir os dois conceitos pelo nome parecido.',
      comoApareceEmConcurso: 'Pegadinha clássica em provas que combinam Administração e Direito Administrativo.'
    },
    tags: ['integração', 'PODC', 'processo administrativo']
  },

  /* ============================================================
     EX-ADM-03-001 — Integração Planejamento + Controle (ADM-06)
  ============================================================ */
  {
    id: 'EX-ADM-03-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-03',
    subtema: 'Integração Planejamento + Controle (ADM-06)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um órgão público definiu como meta reduzir em 20% o tempo médio de atendimento ao cidadão. Para acompanhar, estabeleceu o indicador "tempo médio de espera" e passou a medi-lo mensalmente. Ao final do trimestre, o indicador mostrou queda de apenas 5%, e o gestor decidiu revisar o fluxo de triagem. Considerando a relação entre planejamento e controle, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A meta é elemento do controle; o indicador é elemento do planejamento.' },
      { id: 'B', texto: 'A meta é elemento do PLANEJAMENTO; o indicador pertence ao CONTROLE (é o instrumento de medição); a revisão do fluxo é AÇÃO CORRETIVA, que realimenta o planejamento.' },
      { id: 'C', texto: 'Planejamento e controle são funções independentes: a definição da meta não se relaciona com a medição.' },
      { id: 'D', texto: 'A ação corretiva encerra o ciclo de controle e não se relaciona com o planejamento.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'META = planejamento (padrão). INDICADOR = controle (métrica). AÇÃO CORRETIVA = resposta do controle que realimenta o planejamento. O controle é o "espelho" do planejamento: sem padrão, não há como medir; sem medição, não há como corrigir.',
      incorretas: { A: 'Inverte os papéis.', C: 'São interdependentes (funções-espelho).', D: 'A ação corretiva alimenta novo planejamento.' },
      conceitoCobrado: 'Integração Planejamento (ADM-03) + Controle (ADM-06)',
      pegadinha: 'Inverter meta (planejamento) com indicador (controle).',
      comoApareceEmConcurso: 'Cenário aplicado com duas funções.'
    },
    tags: ['integração', 'planejamento', 'controle']
  },

  /* ============================================================
     EX-ADM-03-002 — Integração BSC + Gestão por Processos (ADM-11)
  ============================================================ */
  {
    id: 'EX-ADM-03-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-03',
    subtema: 'Integração BSC + Gestão por Processos (ADM-11)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma autarquia municipal adotou o Balanced Scorecard (BSC) e definiu, na perspectiva de PROCESSOS INTERNOS, a meta de "reduzir de 15 para 5 dias o tempo de emissão de alvará". Para alcançar a meta, mapeou o fluxo do processo, identificou o gargalo na análise jurídica e redesenhou a etapa de conferência documental. Sobre a relação entre BSC e gestão por processos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'BSC e gestão por processos são ferramentas incompatíveis: o BSC mede resultados, a gestão por processos organiza o fluxo, sem relação entre elas.' },
      { id: 'B', texto: 'O BSC define METAS e INDICADORES por perspectiva; a gestão por processos fornece o MÉTODO para alcançar a meta, ao mapear o fluxo, identificar gargalos e redesenhar etapas. São complementares: o BSC diz "o quê e quanto"; a gestão por processos diz "como".' },
      { id: 'C', texto: 'A gestão por processos substitui o BSC, pois é mais operacional.' },
      { id: 'D', texto: 'O BSC é exclusivo da perspectiva financeira; não se aplica a processos internos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O BSC traduz a estratégia em objetivos, indicadores, metas e iniciativas por perspectiva. A gestão por processos MAPEIA o fluxo, identifica gargalos e redesenha etapas para alcançar as metas. São complementares: o BSC define "o quê" e "quanto"; a gestão por processos define "como".',
      incorretas: { A: 'São complementares, não incompatíveis.', C: 'Não substitui; complementa.', D: 'O BSC tem quatro perspectivas, incluindo processos internos.' },
      conceitoCobrado: 'Integração BSC (ADM-03) + Gestão por Processos (ADM-11)',
      pegadinha: 'Tratar as ferramentas como excludentes em vez de complementares.',
      comoApareceEmConcurso: 'Cenário aplicado de gestão pública com múltiplas ferramentas.'
    },
    tags: ['integração', 'BSC', 'processos']
  },

  /* ============================================================
     EX-ADM-04-001 — Integração Estrutura + Administração Indireta (DA-16)
  ============================================================ */
  {
    id: 'EX-ADM-04-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-04',
    subtema: 'Integração Estrutura + Administração Indireta (DA-16)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma prefeitura decidiu criar uma autarquia municipal para gerir o serviço de transporte público, com patrimônio próprio, autonomia administrativa e financeira, vinculada à Secretaria de Mobilidade Urbana para fins de supervisão. Sobre a estrutura resultante, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Houve descentralização por outorga (criação de entidade com personalidade jurídica própria); a relação entre a autarquia e a Secretaria é de TUTELA (supervisão), não de hierarquia.' },
      { id: 'B', texto: 'Houve descentralização por delegação (a autarquia é empresa privada); a relação é de hierarquia.' },
      { id: 'C', texto: 'Houve desconcentração (divisão interna entre órgãos da mesma pessoa jurídica); a autarquia não tem personalidade própria.' },
      { id: 'D', texto: 'Houve centralização (a autarquia é órgão da administração direta); não há supervisão.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A criação de autarquia é DESCENTRALIZAÇÃO POR OUTORGA (entidade com personalidade jurídica própria). A relação com a Administração Direta é de TUTELA (supervisão finalística), não de hierarquia. Autarquia não é empresa privada nem órgão sem personalidade.',
      incorretas: { B: 'Autarquia não é empresa privada; relação é tutela.', C: 'Desconcentração não cria nova pessoa; autarquia tem personalidade.', D: 'Autarquia integra a Administração Indireta; relação é tutela.' },
      conceitoCobrado: 'Integração Estrutura (ADM-04) + Administração Indireta (DA-16)',
      pegadinha: 'Confundir descentralização por outorga (autarquia) com delegação (privada) e hierarquia com tutela.',
      comoApareceEmConcurso: 'Cenário aplicado que exige combinar Teoria Geral com Direito Administrativo.'
    },
    tags: ['integração', 'estrutura', 'administração indireta']
  },

  /* ============================================================
     EX-ADM-05-001 — Integração Liderança (ADM-05) + Habilidades/Níveis (ADM-01)
  ============================================================ */
  {
    id: 'EX-ADM-05-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-05',
    subtema: 'Integração Liderança + Habilidades de Katz (ADM-01)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Uma servidora recém-promovida a supervisora de um setor operacional precisa, ao mesmo tempo, dominar os procedimentos técnicos (conferir rotinas, operar o sistema) e conduzir uma equipe desmotivada, com conflitos internos. Ao ser promovida, no ano seguinte, a gerente de área, passará a lidar também com o planejamento do departamento e a integração com outras áreas. Considerando o modelo de Katz e os níveis organizacionais, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A servidora usará apenas habilidades técnicas em todos os níveis, pois a liderança é inata.' },
      { id: 'B', texto: 'No nível operacional (supervisão), predominam as habilidades técnicas; as humanas são exigidas em todos os níveis, com destaque no tático; no nível gerencial (tático), cresce a exigência de habilidades conceituais.' },
      { id: 'C', texto: 'A promoção a gerente elimina a necessidade de habilidades humanas, pois o foco passa a ser apenas o planejamento.' },
      { id: 'D', texto: 'As habilidades conceituais são mais exigidas no nível operacional do que no estratégico.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O modelo de Katz relaciona as habilidades aos níveis: técnicas (operacional), humanas (todos os níveis, com destaque no tático) e conceituais (estratégico/tático). Ao subir de nível, a exigência de conceituais cresce — sem eliminar as humanas.',
      incorretas: { A: 'A liderança não é inata e o modelo de Katz relaciona habilidades a níveis.', C: 'As humanas continuam necessárias em todos os níveis.', D: 'As conceituais predominam no estratégico, não no operacional.' },
      conceitoCobrado: 'Integração Liderança (ADM-05) + Habilidades de Katz (ADM-01)',
      pegadinha: 'Achar que subir de nível elimina a necessidade de habilidades humanas.',
      comoApareceEmConcurso: 'Cenário aplicado que combina duas teorias clássicas.'
    },
    tags: ['integração', 'liderança', 'Katz']
  },

  /* ============================================================
     EX-ADM-06-001 — Integração Controle (ADM-06) + Gestão por Processos (ADM-11)
  ============================================================ */
  {
    id: 'EX-ADM-06-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-06',
    subtema: 'Integração Controle + Gestão por Processos (ADM-11)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma Secretaria de Saúde mediu que o tempo médio de matrícula em creches subiu de 5 para 15 dias. Para entender o problema, a equipe mapeou o fluxo completo (inscrição → conferência → análise de vagas → confirmação → comunicação), identificando que a etapa de análise de vagas acumulava pedidos e limitava todo o processo. A partir disso, decidiu reforçar a equipe nessa etapa específica e acompanhar mensalmente o novo tempo médio. Sobre a relação entre as ferramentas utilizadas, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A medição do tempo é controle; o mapeamento é gestão por processos; a intervenção na etapa crítica é ação corretiva baseada na identificação do gargalo. As ferramentas se complementam: o controle diagnostica, a gestão por processos explica.' },
      { id: 'B', texto: 'O controle e a gestão por processos são incompatíveis: um mede, o outro organiza, sem relação entre eles.' },
      { id: 'C', texto: 'O gargalo é sempre a primeira etapa do processo, e o controle só atua no final.' },
      { id: 'D', texto: 'A intervenção na etapa de análise de vagas é planejamento, não ação corretiva.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Controle mede e compara com padrões; gestão por processos mapeia o fluxo e identifica o gargalo; a ação corretiva atua na etapa crítica. São ferramentas complementares — não concorrentes.',
      incorretas: { B: 'São complementares.', C: 'Gargalo não é necessariamente a primeira etapa.', D: 'A intervenção reativa é ação corretiva.' },
      conceitoCobrado: 'Integração Controle (ADM-06) + Gestão por Processos (ADM-11)',
      pegadinha: 'Tratar as ferramentas como excludentes.',
      comoApareceEmConcurso: 'Cenário aplicado que combina diagnóstico (controle) com explicação (processos).'
    },
    tags: ['integração', 'controle', 'processos']
  },

  /* ============================================================
     EX-ADM-06-002 — Integração Controle (ADM-06) + Controle da Adm. Pública (DA-23)
  ============================================================ */
  {
    id: 'EX-ADM-06-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-06',
    subtema: 'Integração Controle Administrativo (ADM-06) + Controle da Administração Pública (DA-23)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um gestor público acompanha mensalmente os indicadores de sua equipe (tempo de resposta, taxa de erro, satisfação), ajustando o fluxo quando detecta desvio. Paralelamente, a Controladoria-Geral do órgão audita os procedimentos e o Tribunal de Contas realiza fiscalização anual. Sobre as formas de controle em atuação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Todas as situações são controle administrativo, pois envolvem órgãos públicos.' },
      { id: 'B', texto: 'A atuação do gestor é CONTROLE ADMINISTRATIVO (função do PODC); a da Controladoria é CONTROLE INTERNO (dentro do próprio Poder); a do Tribunal de Contas é CONTROLE EXTERNO (auxilia o Legislativo). São três dimensões complementares, exercidas por atores distintos.' },
      { id: 'C', texto: 'A Controladoria exerce controle externo, e o Tribunal de Contas exerce controle interno.' },
      { id: 'D', texto: 'O Tribunal de Contas só pode atuar se o gestor não fizer o controle administrativo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'GESTOR → controle administrativo (PODC). CONTROLADORIA → controle interno (art. 74, CF). TCU → controle externo (art. 71, CF). Cada um tem seu papel, sem substituir os outros.',
      incorretas: { A: 'São dimensões distintas.', C: 'Inverte.', D: 'Atuam de forma complementar, não subsidiária.' },
      conceitoCobrado: 'Integração Controle Administrativo (ADM-06) + Controle da Adm. Pública (DA-23)',
      pegadinha: 'Confundir controle interno com controle externo e tratá-los como excludentes.',
      comoApareceEmConcurso: 'Cenário que exige distinguir atores e naturezas do controle.'
    },
    tags: ['integração', 'controle', 'DA-23']
  },

  /* ============================================================
     EX-ADM-07-001 — Integração Gestão por Competências (ADM-07) + Estrutura (ADM-04)
  ============================================================ */
  {
    id: 'EX-ADM-07-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-07',
    subtema: 'Integração Gestão por Competências (ADM-07) + Estrutura (ADM-04)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma autarquia decidiu alinhar a gestão de pessoas à sua estrutura organizacional. Para cada departamento (divisão funcional), definiu o mapa de competências (conhecimentos, habilidades e atitudes) exigido pelos cargos. Em seguida, usou esse mapa para orientar recrutamento, avaliação de desempenho e treinamento. Sobre a relação entre gestão por competências e estrutura, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A gestão por competências substitui a estrutura organizacional, tornando a departamentalização desnecessária.' },
      { id: 'B', texto: 'A departamentalização funcional fornece o QUADRO no qual as competências são aplicadas; a gestão por competências fornece o CONTEÚDO (CHA) exigido em cada posição. São complementares: a estrutura diz onde, as competências dizem o quê.' },
      { id: 'C', texto: 'A gestão por competências só funciona em estruturas matriciais.' },
      { id: 'D', texto: 'Competências e estrutura são independentes: a estrutura não influencia as competências exigidas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Estrutura (divisão funcional) define os departamentos; competências (CHA) definem o que cada cargo exige. Complementares: estrutura diz ONDE, competências dizem O QUÊ.',
      incorretas: { A: 'Não substitui — complementa.', C: 'Aplica-se a qualquer estrutura.', D: 'A estrutura condiciona as competências.' },
      conceitoCobrado: 'Integração Gestão por Competências (ADM-07) + Estrutura (ADM-04)',
      pegadinha: 'Tratar competências e estrutura como independentes.',
      comoApareceEmConcurso: 'Cenário que combina duas ferramentas clássicas.'
    },
    tags: ['integração', 'competências', 'estrutura']
  },

  /* ============================================================
     EX-ADM-08-001 — Integração Comunicação (ADM-08) + Impessoalidade (DA-15)
  ============================================================ */
  {
    id: 'EX-ADM-08-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-08',
    subtema: 'Integração Comunicação Institucional (ADM-08) + Impessoalidade (DA-15)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'A Secretaria de Saúde de um município publica, no portal oficial, uma campanha de vacinação. Na peça, consta o nome do Secretário em destaque, sua foto e a frase "Gestão do Secretário X — compromisso com a vida". Ao mesmo tempo, a equipe de comunicação divulga internamente (por e-mail e mural) os novos protocolos de atendimento, com orientações claras aos servidores. Sobre as duas situações, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Ambas são comunicação institucional válida, pois a publicidade oficial permite a promoção pessoal do agente responsável.' },
      { id: 'B', texto: 'A campanha externa viola a IMPESSOALIDADE (art. 37, §1º, CF), que veda promoção pessoal de agentes públicos em atos, programas, obras e campanhas. A comunicação interna é legítima, pois visa informar servidores sobre protocolos, sem promoção pessoal.' },
      { id: 'C', texto: 'A comunicação interna é ilegal, pois envolve apenas servidores e não a população.' },
      { id: 'D', texto: 'A campanha externa é válida porque a impessoalidade não se aplica à comunicação institucional.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A promoção pessoal em campanha oficial viola a IMPESSOALIDADE (art. 37, §1º, CF). A comunicação interna, por sua vez, é legítima — informa servidores sobre protocolos, sem promoção pessoal.',
      incorretas: { A: 'A promoção pessoal é vedada.', C: 'Comunicação interna é legítima.', D: 'A impessoalidade se aplica a toda comunicação oficial.' },
      conceitoCobrado: 'Integração Comunicação Institucional (ADM-08) + Impessoalidade (DA-15)',
      pegadinha: 'Confundir publicidade institucional com promoção pessoal.',
      comoApareceEmConcurso: 'Cenário que combina comunicação organizacional com princípio constitucional.'
    },
    tags: ['integração', 'comunicação', 'impessoalidade']
  }

];
