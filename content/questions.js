/* ============================================================
   BANCO DE QUESTÕES — Administração + Direito Administrativo
   Fase 10 — Parte 1 de 4
   Módulos: ADM-01 a ADM-07
   Padrão: 8 questões por módulo
   Fontes reais: AOCP/CODERN 2026, Quadrix/CREF-15 2026,
                 Quadrix/CREF-20 2026, Fundatec/CRA-RS 2026,
                 Fundatec/Porto Alegre 2026, FAFIPA/Ivaiporã 2026,
                 FEPESE/Florianópolis 2026, Avança/Itapecerica 2026
   ============================================================ */

window.QUESTIONS = [

  /* ============================================================
     ADM-01 — Fundamentos de Administração (8 questões)
  ============================================================ */
  {
    id: 'Q-REAL-ADM-01-001',
    tipo: 'DIDATICA',
    area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Eficiência, eficácia e efetividade',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Uma secretaria municipal implanta um novo sistema de protocolo que reduz em 40% o tempo de tramitação dos processos, mas NÃO consegue ampliar o número de processos concluídos por mês, porque a equipe continua insuficiente. A economia gerada é realocada para outras áreas, sem impacto percebido pelo cidadão. Sobre as dimensões de desempenho, é correto afirmar que o órgão foi:',
    alternativas: [
      { id: 'A', texto: 'eficiente, eficaz e efetivo, pois houve economia e melhoria no processo.' },
      { id: 'B', texto: 'eficiente (uso mais racional do tempo), mas não eficaz (não ampliou processos concluídos) nem efetivo (não houve impacto social real).' },
      { id: 'C', texto: 'eficaz, mas não eficiente, porque o sistema reduziu o tempo de tramitação sem reduzir custos.' },
      { id: 'D', texto: 'efetivo, porque a economia foi realocada para outras áreas, gerando impacto social indireto.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Houve EFICIÊNCIA (redução de 40% no tempo = uso mais racional do recurso). NÃO houve EFICÁCIA (a meta de ampliar processos concluídos não foi atingida). NÃO houve EFETIVIDADE (não houve impacto social real na vida do cidadão).',
      incorretas: { A: 'A eficácia e a efetividade não foram atingidas.', C: 'A eficiência foi atingida; a eficácia, não.', D: 'A realocação da economia, por si só, não configura efetividade — falta o efeito transformador.' },
      conceitoCobrado: 'Eficiência x eficácia x efetividade',
      pegadinha: 'A banca mistura economia de recursos (eficiência) com impacto social (efetividade).',
      comoApareceEmConcurso: 'Cenários aplicados com dados numéricos.'
    },
    tags: ['eficiência', 'eficácia', 'efetividade']
  },
  {
    id: 'Q-DID-ADM-01-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'PODC e níveis organizacionais',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Sobre as quatro funções administrativas (PODC) e os três níveis organizacionais, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'O planejamento operacional é formulado pela cúpula; o estratégico, pela supervisão.' },
      { id: 'B', texto: 'As funções administrativas (planejamento, organização, direção e controle) são exercidas exclusivamente pelo nível estratégico.' },
      { id: 'C', texto: 'As funções administrativas perpassam todos os níveis organizacionais — cada nível as exerce com maior ou menor profundidade, conforme sua responsabilidade.' },
      { id: 'D', texto: 'A direção antecede a organização no ciclo PODC, pois lidera as pessoas antes de estruturá-las.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'As quatro funções administrativas perpassam TODOS os níveis — o que muda é o grau de profundidade e o escopo. O nível estratégico as exerce sobre a organização como um todo; o tático, sobre departamentos; o operacional, sobre tarefas.',
      incorretas: { A: 'Inverte: o estratégico é da cúpula; o operacional, da supervisão.', B: 'As funções perpassam todos os níveis.', D: 'A organização precede a direção.' },
      conceitoCobrado: 'PODC e níveis organizacionais',
      pegadinha: 'Restringir o PODC a um único nível.',
      comoApareceEmConcurso: 'Cobrança combinada de dois conceitos.'
    },
    tags: ['PODC', 'níveis organizacionais']
  },
  {
    id: 'Q-DID-ADM-01-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Habilidades do administrador (Katz)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Segundo a teoria de Katz, as habilidades do administrador são classificadas em técnicas, humanas e conceituais. Sobre a relação entre habilidades e níveis organizacionais, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'As habilidades humanas são exigidas exclusivamente do nível tático.' },
      { id: 'B', texto: 'As habilidades técnicas predominam no nível operacional; as conceituais, no nível estratégico; as humanas são exigidas em todos os níveis, com destaque no tático.' },
      { id: 'C', texto: 'As três habilidades têm o mesmo peso em todos os níveis, sem qualquer predominância relativa.' },
      { id: 'D', texto: 'As habilidades conceituais são exigidas exclusivamente do nível operacional.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A correspondência clássica é: técnicas (operacional), conceituais (estratégico), humanas (todos os níveis, com destaque no tático).',
      incorretas: { A: 'As humanas são exigidas em todos os níveis.', C: 'Há predominância relativa.', D: 'As conceituais predominam no estratégico.' },
      conceitoCobrado: 'Habilidades de Katz x níveis organizacionais',
      pegadinha: 'Inverter a correspondência ou restringir as habilidades a um único nível.',
      comoApareceEmConcurso: 'Cobrança direta do modelo de Katz.'
    },
    tags: ['Katz', 'habilidades']
  },
  {
    id: 'Q-DID-ADM-01-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Recursos organizacionais',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'São considerados recursos organizacionais, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Recursos humanos, materiais e financeiros.' },
      { id: 'B', texto: 'Recursos tecnológicos e informacionais.' },
      { id: 'C', texto: 'Recursos naturais e ambientais.' },
      { id: 'D', texto: 'Recursos patrimoniais.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Os recursos organizacionais clássicos são: humanos, materiais, financeiros, tecnológicos e informacionais. "Recursos patrimoniais" não é uma categoria autônoma — os bens patrimoniais integram os recursos materiais.',
      incorretas: { A: 'São recursos organizacionais.', B: 'São recursos organizacionais.', C: 'São recursos organizacionais (naturais e ambientais).' },
      conceitoCobrado: 'Recursos organizacionais',
      pegadinha: 'Criar uma categoria inexistente.',
      comoApareceEmConcurso: 'Cobrança direta do rol.'
    },
    tags: ['recursos organizacionais']
  },
  {
    id: 'Q-DID-ADM-01-004',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Produtividade',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o conceito de produtividade na Administração, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É sinônimo de eficácia, pois mede exclusivamente o atingimento de objetivos.' },
      { id: 'B', texto: 'É a relação entre os resultados produzidos (outputs) e os recursos utilizados (inputs).' },
      { id: 'C', texto: 'É a mesma coisa que eficiência, pois ambas medem o uso racional de recursos.' },
      { id: 'D', texto: 'É sinônimo de efetividade, pois mede o impacto social da ação organizacional.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'PRODUTIVIDADE é a relação quantitativa entre output (resultado) e input (recurso). Ex.: 30 processos/servidor-hora.',
      incorretas: { A: 'Produtividade é relação; eficácia é atingimento de objetivos.', C: 'Eficiência é juízo qualitativo sobre o uso de recursos; produtividade é relação quantitativa.', D: 'Efetividade é impacto social.' },
      conceitoCobrado: 'Produtividade x eficiência x eficácia x efetividade',
      pegadinha: 'Igualar produtividade a eficiência, eficácia ou efetividade.',
      comoApareceEmConcurso: 'Distinção entre os quatro conceitos.'
    },
    tags: ['produtividade']
  },
  {
    id: 'Q-DID-ADM-01-005',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Administração no setor público',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a aplicação da Administração no setor público, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Os conceitos de eficiência, eficácia e efetividade não se aplicam ao setor público, apenas ao privado.' },
      { id: 'B', texto: 'O setor público aplica os mesmos conceitos da teoria geral da Administração, com as devidas adaptações decorrentes dos princípios constitucionais (legalidade, impessoalidade, moralidade, publicidade e eficiência).' },
      { id: 'C', texto: 'O PODC não se aplica ao setor público, pois este segue apenas a lei.' },
      { id: 'D', texto: 'O setor público não tem objetivos organizacionais, apenas finalidades legais.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Os conceitos da teoria geral se aplicam ao setor público, com adaptações: os princípios constitucionais (LIMPE) condicionam a atuação, e o objetivo central é o interesse público — não o lucro.',
      incorretas: { A: 'Os conceitos se aplicam a qualquer organização.', C: 'O PODC se aplica ao setor público.', D: 'O setor público tem finalidades legais E objetivos organizacionais.' },
      conceitoCobrado: 'Aplicação da Administração no setor público',
      pegadinha: 'Negar a aplicabilidade dos conceitos ao setor público.',
      comoApareceEmConcurso: 'Distinção entre gestão pública e privada.'
    },
    tags: ['setor público', 'LIMPE']
  },
  {
    id: 'Q-DID-ADM-01-006',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Organizações',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Sobre o conceito de organização, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Organização é exclusivamente uma empresa com fins lucrativos.' },
      { id: 'B', texto: 'Organização é um sistema social que combina recursos para produzir bens ou serviços, com ou sem fins lucrativos.' },
      { id: 'C', texto: 'Organização é sinônimo de Administração Pública.' },
      { id: 'D', texto: 'Organização é um conceito restrito ao setor privado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ORGANIZAÇÃO é um sistema social que combina recursos (humanos, materiais, financeiros, tecnológicos, informacionais) para produzir bens ou serviços — pode ter ou não fins lucrativos. Inclui empresas, órgãos públicos, ONGs, escolas, hospitais etc.',
      incorretas: { A: 'Organização não se restringe a empresas com fins lucrativos.', C: 'Administração Pública é uma espécie de organização.', D: 'Existe em qualquer setor.' },
      conceitoCobrado: 'Conceito de organização',
      pegadinha: 'Restringir a organizações com fins lucrativos.',
      comoApareceEmConcurso: 'Cobrança direta do conceito.'
    },
    tags: ['organizações']
  },
  {
    id: 'Q-DID-ADM-01-007',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Funções administrativas',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'São funções administrativas clássicas do PODC, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Planejamento.' },
      { id: 'B', texto: 'Organização.' },
      { id: 'C', texto: 'Direção.' },
      { id: 'D', texto: 'Contabilidade.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Contabilidade é uma técnica/área de apoio — não é uma das quatro funções administrativas do PODC. As quatro são: planejamento, organização, direção e controle.',
      incorretas: { A: 'É função do PODC.', B: 'É função do PODC.', C: 'É função do PODC.' },
      conceitoCobrado: 'Funções administrativas',
      pegadinha: 'Incluir área técnica como função administrativa.',
      comoApareceEmConcurso: 'Cobrança direta do PODC.'
    },
    tags: ['PODC']
  },
  {
    id: 'Q-DID-ADM-01-008',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Eficiência x eficácia',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'É possível ser eficiente sem ser eficaz? E eficaz sem ser eficiente? Assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Sim para ambas: é possível usar bem os recursos sem atingir os objetivos, e atingir os objetivos usando mal os recursos.' },
      { id: 'B', texto: 'Não para ambas: eficiência e eficácia são sempre simultâneas.' },
      { id: 'C', texto: 'Sim apenas para a primeira situação (eficiente sem eficaz); na segunda, a eficácia sempre pressupõe eficiência.' },
      { id: 'D', texto: 'Não — eficiência e eficácia são sinônimos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'As duas dissociações são possíveis. Eficiente sem eficaz: usou bem os recursos, mas não atingiu o objetivo. Eficaz sem eficiente: atingiu o objetivo, mas desperdiçou recursos.',
      incorretas: { B: 'Podem ser dissociadas.', C: 'A segunda dissociação também é possível.', D: 'São conceitos distintos.' },
      conceitoCobrado: 'Dissociação entre eficiência e eficácia',
      pegadinha: 'Achar que eficácia pressupõe eficiência.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['eficiência', 'eficácia']
  },

  /* ============================================================
     ADM-02 — Processo Administrativo (8 questões)
  ============================================================ */
  {
    id: 'Q-REAL-ADM-02-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-02',
    banca: 'Quadrix', orgao: 'CREF-20/SE', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-20/SE — Assistente Administrativo' },
    subtema: 'Funções administrativas (planejamento, organização, direção e controle)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Acerca das funções administrativas de planejamento, organização, direção e controle, julgue os itens a seguir: I. O planejamento estabelece os objetivos organizacionais e verifica, ao final do período, se eles foram alcançados. II. A organização é responsável pela distribuição de tarefas entre os servidores e pela tomada de liderança da equipe durante a execução das atividades. III. Após a organização distribuir tarefas e recursos, cabe à direção orientar e conduzir os servidores na execução do que foi planejado. IV. O controle compara os resultados alcançados após a execução com os padrões estabelecidos, permitindo corrigir desvios. Assinale a alternativa que aponta as assertivas corretas:',
    alternativas: [
      { id: 'A', texto: 'I e II, apenas.' },
      { id: 'B', texto: 'II e III, apenas.' },
      { id: 'C', texto: 'III e IV, apenas.' },
      { id: 'D', texto: 'I, III e IV, apenas.' },
      { id: 'E', texto: 'I, II, III e IV.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'III está correta (direção orienta e conduz). IV está correta (controle compara e corrige). I está INCORRETA — verificar ao final do período é função do CONTROLE, não do planejamento. II está INCORRETA — tomar liderança da equipe é função da DIREÇÃO, não da organização.',
      incorretas: { A: 'I e II são incorretas.', B: 'II é incorreta.', D: 'I e II são incorretas.', E: 'I e II são incorretas.' },
      conceitoCobrado: 'Funções administrativas — atribuições de cada uma',
      pegadinha: 'Atribuir ao planejamento a verificação final (é do controle) e à organização a liderança da equipe (é da direção).',
      comoApareceEmConcurso: 'Cobrança da distinção entre as quatro funções.'
    },
    tags: ['PODC', 'funções administrativas']
  },
  {
    id: 'Q-REAL-ADM-02-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-02',
    banca: 'Quadrix', orgao: 'CREF-20/SE', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-20/SE — Assistente Administrativo' },
    subtema: 'Ciclo administrativo e processos organizacionais',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A respeito das funções administrativas e do ciclo de gestão, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'O planejamento é a primeira função do ciclo, seguido da organização, direção e controle — este último realimenta o ciclo com informações para novo planejamento.' },
      { id: 'B', texto: 'A direção é a primeira função, pois lidera as pessoas antes de qualquer planejamento.' },
      { id: 'C', texto: 'O controle encerra o ciclo e não se relaciona com o planejamento.' },
      { id: 'D', texto: 'A organização antecede o planejamento, pois estrutura os recursos antes de definir objetivos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O PODC é cíclico: planejamento → organização → direção → controle. O controle realimenta o ciclo — os desvios identificados geram novo planejamento.',
      incorretas: { B: 'A direção não é a primeira.', C: 'O controle se relaciona com o planejamento (é seu espelho).', D: 'O planejamento antecede a organização.' },
      conceitoCobrado: 'Ciclo PODC',
      pegadinha: 'Inverter a ordem ou isolar o controle do ciclo.',
      comoApareceEmConcurso: 'Cobrança da sequência e da natureza cíclica.'
    },
    tags: ['PODC', 'ciclo']
  },
  {
    id: 'Q-DID-ADM-02-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'PODC x processo administrativo (Lei 9.784/99)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um servidor afirma: "Minha função principal é o processo administrativo — ou seja, planejar, organizar, dirigir e controlar." Sobre essa afirmação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Está correta: processo administrativo (Lei 9.784/99) e ciclo PODC são sinônimos.' },
      { id: 'B', texto: 'Confunde dois conceitos distintos: o PODC é o ciclo de funções do gestor (teoria geral); o processo administrativo da Lei 9.784/99 é o rito jurídico de decisão da Administração, com fases, prazos, contraditório e ampla defesa.' },
      { id: 'C', texto: 'Está correta apenas no âmbito federal, pois a Lei 9.784/99 aplica-se apenas à União.' },
      { id: 'D', texto: 'Está correta apenas no âmbito estadual.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Há uma confusão terminológica clássica. O PODC é o ciclo de funções administrativas (teoria geral). O processo administrativo da Lei 9.784/1999 é o rito jurídico de decisão (instauração, instrução, defesa, relatório, decisão, recursos). São conceitos DIFERENTES.',
      incorretas: { A: 'Não são sinônimos.', C: 'A distinção não depende do ente.', D: 'Idem.' },
      conceitoCobrado: 'PODC x processo administrativo da Lei 9.784/99',
      pegadinha: 'Confundir os dois conceitos pelo nome parecido.',
      comoApareceEmConcurso: 'Cobrança da distinção.'
    },
    tags: ['PODC', 'processo administrativo']
  },
  {
    id: 'Q-DID-ADM-02-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'Planejamento e controle como "espelhos"',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a relação entre planejamento e controle, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São funções independentes, sem relação.' },
      { id: 'B', texto: 'O planejamento define os padrões; o controle compara o desempenho real com esses padrões e corrige desvios. Sem padrões de planejamento, não há controle.' },
      { id: 'C', texto: 'O controle precede o planejamento, pois define os padrões.' },
      { id: 'D', texto: 'O controle só existe no setor privado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Planejamento e controle são funções-espelho: o planejamento define os padrões; o controle mede e corrige.',
      incorretas: { A: 'São interdependentes.', C: 'O planejamento precede o controle.', D: 'O controle existe em qualquer organização.' },
      conceitoCobrado: 'Interdependência planejamento x controle',
      pegadinha: 'Inverter a lógica ou negar a relação.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['planejamento', 'controle']
  },
  {
    id: 'Q-DID-ADM-02-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'Funções administrativas — identificação em cenário',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Uma Secretaria de Saúde define em janeiro a meta de ampliar a cobertura vacinal em 20%. Em fevereiro, redistribui equipes entre as UBS. Em março, o Secretário faz reuniões de motivação com os coordenadores. Em dezembro, analisa os resultados e identifica que duas regionais não atingiram a meta, decidindo reforçar a capacitação nelas. As funções exercidas em janeiro, fevereiro, março e dezembro são, respectivamente:',
    alternativas: [
      { id: 'A', texto: 'Controle, organização, direção e planejamento.' },
      { id: 'B', texto: 'Planejamento, organização, direção e controle.' },
      { id: 'C', texto: 'Organização, planejamento, controle e direção.' },
      { id: 'D', texto: 'Direção, controle, planejamento e organização.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Janeiro = PLANEJAMENTO (definição de meta). Fevereiro = ORGANIZAÇÃO (redistribuição de equipes). Março = DIREÇÃO (reuniões de motivação). Dezembro = CONTROLE (análise e ação corretiva).',
      incorretas: { A: 'Inverte.', C: 'Inverte.', D: 'Inverte.' },
      conceitoCobrado: 'Identificação das funções administrativas em cenário',
      pegadinha: 'Inverter a sequência.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['PODC', 'cenário']
  },
  {
    id: 'Q-DID-ADM-02-004',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'Natureza cíclica do PODC',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a natureza do PODC, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É uma sequência linear e estanque, que termina no controle.' },
      { id: 'B', texto: 'É um ciclo interdependente: o controle realimenta novo planejamento, e as funções podem ocorrer simultaneamente em diferentes níveis.' },
      { id: 'C', texto: 'Cada função só pode ser iniciada após o término completo da anterior.' },
      { id: 'D', texto: 'As funções são independentes entre si.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O PODC é cíclico e interdependente: o controle realimenta o planejamento; as funções podem ocorrer em paralelo nos diferentes níveis.',
      incorretas: { A: 'Não é linear.', C: 'As funções se interpenetram.', D: 'São interdependentes.' },
      conceitoCobrado: 'Natureza cíclica do PODC',
      pegadinha: 'Tratar o PODC como sequência rígida.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['PODC', 'ciclo']
  },
  {
    id: 'Q-DID-ADM-02-005',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'PODC no setor público',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a aplicação do PODC no setor público, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O PODC não se aplica ao setor público, pois este não tem objetivos organizacionais.' },
      { id: 'B', texto: 'O PODC aplica-se ao setor público, com adaptações: os princípios constitucionais (LIMPE) condicionam a atuação, e o objetivo central é o interesse público.' },
      { id: 'C', texto: 'O setor público só aplica o planejamento e o controle — não aplica organização nem direção.' },
      { id: 'D', texto: 'A direção não se aplica ao setor público, pois a liderança é incompatível com a hierarquia.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O PODC aplica-se plenamente ao setor público, com adaptações decorrentes dos princípios constitucionais e do objetivo de interesse público.',
      incorretas: { A: 'Aplica-se.', C: 'Aplica todas as quatro funções.', D: 'A liderança é compatível com a hierarquia.' },
      conceitoCobrado: 'PODC no setor público',
      pegadinha: 'Negar a aplicabilidade de alguma função ao setor público.',
      comoApareceEmConcurso: 'Distinção público x privado.'
    },
    tags: ['PODC', 'setor público']
  },
  {
    id: 'Q-DID-ADM-02-006',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'Controle como diagnóstico',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a função de controle no PODC, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Limita-se a punir servidores que cometem irregularidades.' },
      { id: 'B', texto: 'É uma função diagnóstica: mede o desempenho, compara com os padrões e corrige desvios, com vistas à melhoria.' },
      { id: 'C', texto: 'Só existe no setor privado.' },
      { id: 'D', texto: 'É dispensável quando o planejamento é bem feito.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O controle é diagnóstico e corretivo — não meramente punitivo. Ele mede, compara e corrige, alimentando o ciclo.',
      incorretas: { A: 'A punição é apenas uma das ações corretivas possíveis.', C: 'Existe em qualquer organização.', D: 'O controle é essencial, mesmo com bom planejamento.' },
      conceitoCobrado: 'Finalidade do controle',
      pegadinha: 'Reduzir o controle à punição.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['controle']
  },

  /* ============================================================
     ADM-03 — Planejamento (8 questões)
  ============================================================ */
  {
    id: 'Q-REAL-ADM-03-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-03',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'PPA, LDO e LOA',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Um gestor público federal participa das três etapas do planejamento orçamentário. Primeiro, colabora na elaboração de um plano de médio prazo (quatro anos), que estabelece de forma regionalizada as diretrizes, os objetivos e as metas da administração. Em seguida, trabalha na definição das prioridades para o exercício financeiro subsequente. Por fim, acompanha a aprovação da lei que estima a receita e fixa a despesa. Esses instrumentos correspondem, respectivamente, a:',
    alternativas: [
      { id: 'A', texto: 'Plano Plurianual (PPA), Lei de Diretrizes Orçamentárias (LDO) e Lei Orçamentária Anual (LOA).' },
      { id: 'B', texto: 'Lei de Diretrizes Orçamentárias (LDO), Plano Plurianual (PPA) e Lei Orçamentária Anual (LOA).' },
      { id: 'C', texto: 'Plano Plurianual (PPA), Lei Orçamentária Anual (LOA) e Lei de Diretrizes Orçamentárias (LDO).' },
      { id: 'D', texto: 'Lei Orçamentária Anual (LOA), Lei de Diretrizes Orçamentárias (LDO) e Plano Plurianual (PPA).' },
      { id: 'E', texto: 'Plano Decenal de Desenvolvimento, Lei de Responsabilidade Fiscal (LRF) e Lei Orçamentária Anual (LOA).' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'PPA (plano de médio prazo, 4 anos, com diretrizes, objetivos e metas regionalizadas). LDO (prioridades para o exercício seguinte, orienta a elaboração da LOA). LOA (estima receita e fixa despesa para o exercício).',
      incorretas: { B: 'Inverte PPA e LDO.', C: 'Inverte LDO e LOA.', D: 'Inverte a ordem.', E: 'Plano Decenal e LRF não são os instrumentos mencionados.' },
      conceitoCobrado: 'PPA, LDO e LOA',
      pegadinha: 'Trocar a ordem ou confundir LDO com LOA.',
      comoApareceEmConcurso: 'Cobrança da ordem e do papel de cada instrumento.'
    },
    tags: ['PPA', 'LDO', 'LOA']
  },
  {
    id: 'Q-REAL-ADM-03-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-03',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Níveis de planejamento',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Considere que a CODERN está promovendo uma reestruturação administrativa para aumentar sua eficiência. Foram adotadas: diretrizes de longo prazo para ampliação da capacidade portuária; metas periódicas de desempenho para os setores; e rotinas de organização do trabalho e manutenção dos equipamentos. Sobre a classificação dessas ações nos níveis de planejamento, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'As diretrizes de longo prazo correspondem ao nível tático, pois orientam os gerentes intermediários.' },
      { id: 'B', texto: 'As metas periódicas de desempenho estão associadas ao nível tático, por traduzir objetivos estratégicos em ações gerenciais.' },
      { id: 'C', texto: 'As rotinas de organização do trabalho caracterizam o nível tático, pois envolvem padronização de processos.' },
      { id: 'D', texto: 'O nível estratégico é responsável por detalhar a execução das atividades operacionais no curto prazo.' },
      { id: 'E', texto: 'Todos os níveis de planejamento têm a mesma finalidade, diferenciando-se apenas pelo prazo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Metas periódicas de desempenho = TÁTICO (médio prazo, desdobram o estratégico). Diretrizes de longo prazo = ESTRATÉGICO. Rotinas de organização do trabalho = OPERACIONAL.',
      incorretas: { A: 'Diretrizes de longo prazo = estratégico.', C: 'Rotinas = operacional.', D: 'Detalhar execução = operacional.', E: 'Os níveis têm finalidades distintas.' },
      conceitoCobrado: 'Níveis de planejamento (estratégico, tático, operacional)',
      pegadinha: 'Confundir os níveis ou atribuir ao estratégico a execução operacional.',
      comoApareceEmConcurso: 'Classificação em cenário.'
    },
    tags: ['níveis de planejamento']
  },
  {
    id: 'Q-REAL-ADM-03-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-03',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã/PR', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã/PR — Auxiliar Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Níveis de planejamento — tático',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o foco de atuação e o horizonte temporal do nível tático de planejamento, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Destina-se exclusivamente à programação de fusões, cisões e incorporações societárias.' },
      { id: 'B', texto: 'Exime o gestor de considerar as variáveis instáveis do ambiente macroeconômico externo.' },
      { id: 'C', texto: 'Abrange a totalidade da organização, com visão de longo prazo e diretrizes amplas formuladas pela alta cúpula.' },
      { id: 'D', texto: 'Possui foco setorial, médio prazo, e traduz as diretrizes do planejamento estratégico para departamentos específicos.' },
      { id: 'E', texto: 'Foca em metas de curtíssimo prazo, com forte orientação interna para tarefas cotidianas.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'O planejamento TÁTICO tem foco setorial, médio prazo, e traduz as diretrizes estratégicas para departamentos específicos.',
      incorretas: { A: 'Restringe indevidamente.', B: 'O ambiente externo é considerado.', C: 'Descreve o nível estratégico.', E: 'Descreve o nível operacional.' },
      conceitoCobrado: 'Nível tático de planejamento',
      pegadinha: 'Confundir tático com estratégico ou operacional.',
      comoApareceEmConcurso: 'Cobrança direta da definição.'
    },
    tags: ['planejamento tático']
  },
  {
    id: 'Q-REAL-ADM-03-004',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-03',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Ciclo orçamentário — planejamento, execução e controle',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um gestor público federal recém-nomeado participa de quatro situações: I. definição de programas governamentais de longo prazo, com metas físicas e financeiras que ultrapassam um exercício; II. análise de projeto de lei que estabelece metas fiscais, prioridades da administração e orienta a elaboração do orçamento do exercício seguinte; III. acompanhamento da arrecadação de receitas e autorização de despesas, com ajustes por meio de créditos adicionais; IV. avaliação, junto aos órgãos de controle, do cumprimento das metas, verificando eficiência, eficácia e economicidade. Assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'As situações I e II correspondem à fase de elaboração do orçamento; III e IV referem-se exclusivamente ao controle externo.' },
      { id: 'B', texto: 'A situação I refere-se ao Plano Plurianual, a II à Lei Orçamentária Anual, e III e IV pertencem à execução orçamentária.' },
      { id: 'C', texto: 'As situações I, II, III e IV representam, respectivamente, planejamento, elaboração normativa, execução e controle do ciclo orçamentário.' },
      { id: 'D', texto: 'A situação II relaciona-se à Lei de Diretrizes Orçamentárias, a III à execução orçamentária, e a IV ao controle do ciclo orçamentário.' },
      { id: 'E', texto: 'As situações I e III pertencem à mesma etapa do ciclo orçamentário.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'I = PPA (planejamento). II = LDO (estabelece metas fiscais, prioridades e orienta a LOA). III = execução orçamentária (arrecadação e despesa). IV = controle e avaliação.',
      incorretas: { A: 'IV não é exclusivamente controle externo.', B: 'II é LDO, não LOA.', C: 'II não é "elaboração normativa" genérica.', E: 'I é PPA; III é execução.' },
      conceitoCobrado: 'Ciclo orçamentário (PPA, LDO, LOA, execução e controle)',
      pegadinha: 'Confundir LDO com LOA e restringir o controle ao externo.',
      comoApareceEmConcurso: 'Cenário aplicado com múltiplas etapas.'
    },
    tags: ['PPA', 'LDO', 'LOA', 'execução', 'controle']
  },
  {
    id: 'Q-DID-ADM-03-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-03',
    subtema: 'Missão, visão e valores',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Sobre missão, visão e valores, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Missão é onde a organização quer chegar; visão é a razão de sua existência.' },
      { id: 'B', texto: 'Missão é a razão de existir (presente); visão é onde a organização quer chegar (futuro); valores são os princípios que orientam a conduta.' },
      { id: 'C', texto: 'Missão, visão e valores são sinônimos.' },
      { id: 'D', texto: 'Visão é a razão de existir; missão é o futuro almejado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'MISSÃO: razão de existir (presente). VISÃO: futuro almejado. VALORES: princípios de conduta.',
      incorretas: { A: 'Inverte missão e visão.', C: 'São conceitos distintos.', D: 'Inverte visão e missão.' },
      conceitoCobrado: 'Elementos do planejamento',
      pegadinha: 'Inverter missão e visão.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['missão', 'visão', 'valores']
  },
  {
    id: 'Q-DID-ADM-03-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-03',
    subtema: 'Análise SWOT',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a análise SWOT, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Forças e oportunidades são fatores externos; fraquezas e ameaças são internos.' },
      { id: 'B', texto: 'Forças e fraquezas são fatores internos; oportunidades e ameaças são fatores externos.' },
      { id: 'C', texto: 'Todos os quatro elementos são internos.' },
      { id: 'D', texto: 'Todos os quatro elementos são externos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'SWOT: forças/fraquezas = ambiente INTERNO; oportunidades/ameaças = ambiente EXTERNO.',
      incorretas: { A: 'Inverte.', C: 'A SWOT tem dimensão interna e externa.', D: 'Idem.' },
      conceitoCobrado: 'Análise SWOT',
      pegadinha: 'Inverter interno x externo.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['SWOT']
  },
  {
    id: 'Q-DID-ADM-03-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-03',
    subtema: 'Objetivo x meta',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a relação entre objetivo e meta, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Objetivo é amplo e qualitativo; meta é o objetivo quantificado com prazo.' },
      { id: 'B', texto: 'Meta é ampla e qualitativa; objetivo é o quantificado com prazo.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Objetivo é sempre de curto prazo; meta, de longo prazo.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'OBJETIVO: alvo amplo e qualitativo. META: objetivo quantificado e datado.',
      incorretas: { B: 'Inverte.', C: 'São conceitos distintos.', D: 'O prazo não define a distinção.' },
      conceitoCobrado: 'Objetivo x meta',
      pegadinha: 'Inverter os conceitos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['objetivo', 'meta']
  },
  {
    id: 'Q-DID-ADM-03-004',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-03',
    subtema: 'BSC — Balanced Scorecard',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre o Balanced Scorecard (BSC), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É uma ferramenta contábil de balanço patrimonial.' },
      { id: 'B', texto: 'É uma ferramenta de gestão estratégica que traduz a estratégia em objetivos, indicadores, metas e iniciativas, sob quatro perspectivas: financeira, clientes, processos internos e aprendizado/crescimento.' },
      { id: 'C', texto: 'É uma técnica de análise de investimentos.' },
      { id: 'D', texto: 'É exclusivo do setor privado, não se aplicando ao setor público.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O BSC é ferramenta de gestão estratégica com quatro perspectivas clássicas. No setor público, adapta-se (ex.: "sociedade" no lugar de "clientes").',
      incorretas: { A: 'Não é ferramenta contábil.', C: 'Não é análise de investimentos.', D: 'Aplica-se ao setor público, com adaptações.' },
      conceitoCobrado: 'Balanced Scorecard',
      pegadinha: 'Reduzir o BSC a uma ferramenta financeira.',
      comoApareceEmConcurso: 'Cobrança das quatro perspectivas.'
    },
    tags: ['BSC']
  },

  /* ============================================================
     ADM-04 — Organização (8 questões)
  ============================================================ */
  {
    id: 'Q-REAL-ADM-04-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-04',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Estrutura matricial',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma empresa pública adotou estrutura organizacional matricial para conduzir projetos estratégicos. Nessa configuração, engenheiros, analistas e técnicos permanecem vinculados às áreas funcionais, mas também são alocados temporariamente em projetos específicos, respondendo simultaneamente a diferentes gestores. Analise as assertivas: I. A estrutura matricial permite maior integração entre as áreas funcionais, favorecendo a utilização compartilhada de especialistas. II. Na estrutura matricial, a duplicidade de comando pode gerar conflitos de autoridade, exigindo mecanismos claros de comunicação e definição de responsabilidades. III. A estrutura matricial elimina a necessidade de hierarquia formal. IV. A vinculação simultânea a gerentes funcionais e de projeto caracteriza a essência da departamentalização matricial. Assinale a alternativa que aponta as corretas:',
    alternativas: [
      { id: 'A', texto: 'Apenas I e III.' },
      { id: 'B', texto: 'Apenas II e IV.' },
      { id: 'C', texto: 'Apenas I, II e IV.' },
      { id: 'D', texto: 'Apenas I, III e IV.' },
      { id: 'E', texto: 'I, II, III e IV.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'I, II e IV estão corretas. III está INCORRETA — a estrutura matricial NÃO elimina a hierarquia formal; ela convive com a dimensão funcional e a dimensão de projeto.',
      incorretas: { A: 'III é incorreta.', B: 'I é correta.', D: 'III é incorreta.', E: 'III é incorreta.' },
      conceitoCobrado: 'Estrutura matricial',
      pegadinha: 'Achar que a matricial elimina a hierarquia.',
      comoApareceEmConcurso: 'Cenário aplicado com múltiplas assertivas.'
    },
    tags: ['estrutura matricial']
  },
  {
    id: 'Q-REAL-ADM-04-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-04',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Centralização x descentralização',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma empresa pública identificou que a alta administração estava sobrecarregada com decisões operacionais e táticas, gerando morosidade. Optou por ampliar a descentralização decisória em determinadas unidades, mantendo diretrizes estratégicas e mecanismos de controle centralizados. Analise: I. A centralização das diretrizes estratégicas pode favorecer a uniformidade de processos e decisões. II. A descentralização, ao aproximar a decisão dos níveis operacionais, tende a reduzir o tempo de resposta e estimular participação e comprometimento. III. A descentralização implica, necessariamente, menor controle organizacional, eliminando a necessidade de mecanismos formais de acompanhamento. IV. A escolha entre centralização e descentralização independe de fatores como capacitação dos subordinados e complexidade das atividades. Assinale a alternativa que aponta as corretas:',
    alternativas: [
      { id: 'A', texto: 'Apenas I e II.' },
      { id: 'B', texto: 'Apenas I e III.' },
      { id: 'C', texto: 'Apenas II e IV.' },
      { id: 'D', texto: 'Apenas II, III e IV.' },
      { id: 'E', texto: 'I, II, III e IV.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'I e II estão corretas. III está INCORRETA — descentralização NÃO elimina a necessidade de mecanismos formais de controle; ela exige coordenação. IV está INCORRETA — a escolha depende de fatores como capacitação e complexidade.',
      incorretas: { B: 'III é incorreta.', C: 'IV é incorreta.', D: 'III e IV são incorretas.', E: 'III e IV são incorretas.' },
      conceitoCobrado: 'Centralização x descentralização',
      pegadinha: 'Achar que descentralizar é abandonar o controle.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['centralização', 'descentralização']
  },
  {
    id: 'Q-REAL-ADM-04-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-04',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Estrutura linha-staff',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Na estrutura linha-staff, os órgãos de assessoria prestam consultoria e recomendação especializada, sem exercer autoridade formal sobre as unidades de linha, às quais compete a decisão sobre a adoção das sugestões recebidas.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. Na estrutura linha-staff, os órgãos de assessoria (staff) prestam consultoria e recomendação, sem autoridade formal sobre as unidades de linha (que decidem).',
      incorretas: { B: 'A definição está correta.' },
      conceitoCobrado: 'Estrutura linha-staff',
      pegadinha: 'Confundir staff com linha.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['linha-staff']
  },
  {
    id: 'Q-REAL-ADM-04-004',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-04',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Departamentalização por clientes',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A departamentalização por clientes agrupa as atividades conforme a localização em que são desenvolvidas, o que a faz ser especialmente indicada para organizações com atuação dispersa em diferentes regiões.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. A departamentalização por CLIENTES agrupa as atividades conforme o PERFIL DO PÚBLICO ATENDIDO — não conforme a localização. A departamentalização conforme a localização é a GEOGRÁFICA.',
      incorretas: { A: 'A descrição corresponde à departamentalização geográfica.' },
      conceitoCobrado: 'Tipos de departamentalização',
      pegadinha: 'Trocar cliente por geográfica.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['departamentalização por clientes']
  },
  {
    id: 'Q-REAL-ADM-04-005',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-04',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Quadro de distribuição do trabalho (QDT)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'O quadro de distribuição do trabalho (QDT) constitui um instrumento de organização e métodos apto a evidenciar aspectos como a duplicidade de tarefas e o desequilíbrio na carga de trabalho entre os servidores da unidade.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. O QDT evidencia a distribuição de tarefas, permitindo identificar duplicidades e desequilíbrios na carga de trabalho.',
      incorretas: { B: 'A definição está correta.' },
      conceitoCobrado: 'QDT — quadro de distribuição do trabalho',
      pegadinha: 'Subestimar a função do QDT.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['QDT']
  },
  {
    id: 'Q-DID-ADM-04-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-04',
    subtema: 'Delegação x descentralização',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a delegação e a descentralização, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Delegação é ato pontual de transferir autoridade; descentralização é estrutural e permanente.' },
      { id: 'B', texto: 'São sinônimos.' },
      { id: 'C', texto: 'Delegação é estrutural; descentralização é pontual.' },
      { id: 'D', texto: 'Ambas transferem a responsabilidade final.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'DELEGAÇÃO: ato pontual, para tarefa específica — a responsabilidade final permanece. DESCENTRALIZAÇÃO: é estrutural, distribui autoridade de forma permanente.',
      incorretas: { B: 'São conceitos distintos.', C: 'Inverte.', D: 'A delegação não transfere a responsabilidade final.' },
      conceitoCobrado: 'Delegação x descentralização',
      pegadinha: 'Confundir ou inverter os conceitos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['delegação', 'descentralização']
  },
  {
    id: 'Q-DID-ADM-04-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-04',
    subtema: 'Amplitude de controle',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a amplitude de controle, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Amplitude AMPLA (muitos subordinados por gestor) gera MAIS níveis hierárquicos.' },
      { id: 'B', texto: 'Amplitude ESTREITA (poucos subordinados por gestor) gera MENOS níveis hierárquicos.' },
      { id: 'C', texto: 'Amplitude AMPLA gera MENOS níveis hierárquicos; amplitude ESTREITA gera MAIS níveis.' },
      { id: 'D', texto: 'A amplitude não interfere no número de níveis hierárquicos.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A relação é inversa: amplitude AMPLA = estrutura achatada (menos níveis); amplitude ESTREITA = estrutura verticalizada (mais níveis).',
      incorretas: { A: 'Inverte.', B: 'Inverte.', D: 'Há relação direta.' },
      conceitoCobrado: 'Amplitude de controle',
      pegadinha: 'Inverter a relação.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['amplitude de controle']
  },
  {
    id: 'Q-DID-ADM-04-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-04',
    subtema: 'Estruturas organizacionais',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a estrutura linear, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Cada subordinado tem múltiplos chefes especializados.' },
      { id: 'B', texto: 'Cada subordinado tem um único chefe, com comando único — característica que favorece a rapidez decisória, mas pode gerar rigidez.' },
      { id: 'C', texto: 'É típica de organizações com projetos complexos e múltiplas subordinações.' },
      { id: 'D', texto: 'Não tem hierarquia.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A estrutura LINEAR tem comando único: cada subordinado responde a UM chefe. Favorece rapidez decisória, mas pode gerar rigidez. É típica de organizações simples e militares.',
      incorretas: { A: 'Descreve a funcional.', C: 'Descreve a matricial.', D: 'A linear é hierárquica.' },
      conceitoCobrado: 'Estrutura linear',
      pegadinha: 'Confundir com funcional ou matricial.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['estrutura linear']
  },

  /* ============================================================
     ADM-05 — Direção, liderança e motivação (8 questões)
  ============================================================ */
  {
    id: 'Q-REAL-ADM-05-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-05',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Teorias de liderança (traços, contingencial, transacional e transformacional)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Uma empresa pública iniciou reestruturação com foco em liderança. Foram identificados quatro perfis: I. gestor que busca identificar características pessoais comuns entre líderes de alto desempenho para replicá-las em novos coordenadores; II. gestora que adapta seu estilo de liderança conforme o nível de maturidade, autonomia e capacidade técnica da equipe; III. líder que estabelece metas claras e oferece recompensas, como bônus e reconhecimento, pelo cumprimento dos objetivos; IV. gestora que atua na construção de uma visão de futuro compartilhada, promovendo engajamento e comprometimento com as mudanças organizacionais. A correta associação entre os perfis e as teorias é:',
    alternativas: [
      { id: 'A', texto: 'I – Comportamental; II – Transformacional; III – Contingencial; IV – Transacional.' },
      { id: 'B', texto: 'I – Traços; II – Contingencial; III – Transacional; IV – Transformacional.' },
      { id: 'C', texto: 'I – Contingencial; II – Comportamental; III – Transformacional; IV – Transacional.' },
      { id: 'D', texto: 'I – Traços; II – Comportamental; III – Contingencial; IV – Transformacional.' },
      { id: 'E', texto: 'I – Transformacional; II – Contingencial; III – Comportamental; IV – Traços.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'I = TRAÇOS (características inatas). II = CONTINGENCIAL (estilo varia conforme a equipe). III = TRANSACIONAL (metas e recompensas). IV = TRANSFORMACIONAL (visão de futuro, engajamento).',
      incorretas: { A: 'I não é comportamental; II não é transformacional.', C: 'I não é contingencial; II não é comportamental.', D: 'II não é comportamental; III não é contingencial.', E: 'I não é transformacional; IV não é traços.' },
      conceitoCobrado: 'Teorias de liderança',
      pegadinha: 'Confundir transacional com transformacional; traços com comportamental.',
      comoApareceEmConcurso: 'Associação de perfis a teorias.'
    },
    tags: ['liderança', 'traços', 'contingencial', 'transacional', 'transformacional']
  },
  {
    id: 'Q-REAL-ADM-05-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-05',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Papéis gerenciais (Mintzberg)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'O gerente de operações de uma empresa pública está coordenando a chegada de um navio de grande calado. Ele: 1. participa de almoço de negócios com diretores da Receita Federal e da Polícia Federal para estreitar relacionamento; 2. redige memorando técnico para todos os operadores de guindaste e práticos do porto, explicando novos procedimentos de segurança; 3. reúne-se com a empresa terceirizada de dragagem para convencê-la a antecipar o cronograma sem custos adicionais, oferecendo em troca prioridade de atracação em serviços futuros. As três ações referem-se, respectivamente, aos papéis de:',
    alternativas: [
      { id: 'A', texto: 'Representação, porta-voz e alocação de recursos.' },
      { id: 'B', texto: 'Ligação, disseminação e negociação.' },
      { id: 'C', texto: 'Liderança, monitoração e empreendedorismo.' },
      { id: 'D', texto: 'Ligação, porta-voz e resolução de conflitos.' },
      { id: 'E', texto: 'Representação, disseminação e resolução de conflitos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '1 = LIGAÇÃO (relacionamento com stakeholders externos). 2 = DISSEMINAÇÃO (transmissão interna de informações). 3 = NEGOCIAÇÃO (acordo com terceiros).',
      incorretas: { A: 'A ação 1 é ligação, não representação; a 3 é negociação, não alocação.', C: 'Não corresponde.', D: 'A 3 é negociação, não resolução de conflitos.', E: 'A 1 é ligação; a 3 é negociação.' },
      conceitoCobrado: 'Papéis gerenciais de Mintzberg',
      pegadinha: 'Confundir ligação com representação; negociação com resolução de conflitos.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['Mintzberg', 'papéis gerenciais']
  },
  {
    id: 'Q-REAL-ADM-05-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-05',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Teoria das relações humanas',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'A teoria das relações humanas evidenciou que o nível de produção dos trabalhadores é determinado mais pelas normas sociais do grupo e pelas expectativas que o cercam do que por sua capacidade física ou fisiológica.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. A teoria das relações humanas (Elton Mayo) evidenciou a importância das normas sociais e das expectativas do grupo sobre a produção — superando a visão estritamente fisiológica da Administração Científica.',
      incorretas: { B: 'A afirmação está correta.' },
      conceitoCobrado: 'Teoria das relações humanas',
      pegadinha: 'Negar a influência do grupo sobre a produtividade.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['relações humanas', 'Mayo']
  },
  {
    id: 'Q-DID-ADM-05-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-05',
    subtema: 'Autoridade x poder',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a diferença entre autoridade e poder, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Autoridade decorre do cargo; poder é a capacidade de influenciar, independentemente do cargo.' },
      { id: 'B', texto: 'São sinônimos.' },
      { id: 'C', texto: 'Poder decorre do cargo; autoridade é a influência sem cargo.' },
      { id: 'D', texto: 'Todo chefe tem poder, e todo líder informal tem autoridade formal.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'AUTORIDADE: direito formal de dar ordens (cargo). PODER: capacidade de influenciar (pode vir do cargo, do conhecimento, da personalidade).',
      incorretas: { B: 'São conceitos distintos.', C: 'Inverte.', D: 'O líder informal não tem autoridade formal.' },
      conceitoCobrado: 'Autoridade x poder',
      pegadinha: 'Inverter ou igualar os conceitos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['autoridade', 'poder']
  },
  {
    id: 'Q-DID-ADM-05-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-05',
    subtema: 'Estilos clássicos de liderança',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre os três estilos clássicos de liderança (autocrática, democrática e liberal), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Autocrática: centralizada; democrática: participativa; liberal: autonomia ao grupo.' },
      { id: 'B', texto: 'Autocrática: participativa; democrática: centralizada; liberal: sem liderança.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'A liberal é sempre a mais eficaz.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Autocrática = centralização; democrática = participação; liberal (laissez-faire) = autonomia ao grupo.',
      incorretas: { B: 'Inverte.', C: 'São distintos.', D: 'Não há estilo sempre mais eficaz.' },
      conceitoCobrado: 'Estilos clássicos de liderança',
      pegadinha: 'Inverter ou absolutizar.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['liderança', 'estilos']
  },
  {
    id: 'Q-DID-ADM-05-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-05',
    subtema: 'Herzberg — fatores higiênicos x motivadores',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Sobre a teoria dos dois fatores de Herzberg, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Salário é fator motivador; reconhecimento é fator higiênico.' },
      { id: 'B', texto: 'Fatores higiênicos (salário, condições) evitam insatisfação, mas não motivam; fatores motivadores (reconhecimento, responsabilidade) motivam.' },
      { id: 'C', texto: 'Higiene e motivação são sinônimos.' },
      { id: 'D', texto: 'Só o salário motiva.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'HIGIÊNICOS: extrínsecos — evitam insatisfação, mas não motivam. MOTIVADORES: intrínsecos — motivam.',
      incorretas: { A: 'Inverte.', C: 'São conceitos distintos.', D: 'Salário é higiênico.' },
      conceitoCobrado: 'Herzberg',
      pegadinha: 'Classificar salário como motivador.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['Herzberg', 'higiene', 'motivação']
  },
  {
    id: 'Q-DID-ADM-05-004',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-05',
    subtema: 'Maslow — hierarquia das necessidades',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a hierarquia das necessidades de Maslow, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'As necessidades são satisfeitas em qualquer ordem.' },
      { id: 'B', texto: 'A ordem ascendente é: fisiológicas → segurança → sociais → estima → autorrealização.' },
      { id: 'C', texto: 'A autorrealização é a base da pirâmide.' },
      { id: 'D', texto: 'São apenas duas necessidades.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A hierarquia de Maslow, na ordem ascendente, é: fisiológicas → segurança → sociais → estima → autorrealização.',
      incorretas: { A: 'A ordem é ascendente.', C: 'A autorrealização é o topo.', D: 'São cinco níveis.' },
      conceitoCobrado: 'Maslow',
      pegadinha: 'Inverter a ordem.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['Maslow']
  },
  {
    id: 'Q-DID-ADM-05-005',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-05',
    subtema: 'McGregor — teoria X e Y',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre as teorias X e Y de McGregor, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Teoria X: visão negativa (trabalhador precisa ser controlado); teoria Y: visão positiva (trabalho natural, busca responsabilidade).' },
      { id: 'B', texto: 'Teoria X: visão positiva; teoria Y: visão negativa.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Ambas são teorias de liderança situacional.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'TEORIA X: visão negativa do ser humano. TEORIA Y: visão positiva.',
      incorretas: { B: 'Inverte.', C: 'São distintas.', D: 'São pressupostos sobre a natureza humana, não teorias de liderança.' },
      conceitoCobrado: 'McGregor',
      pegadinha: 'Inverter X e Y.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['McGregor', 'teoria X', 'teoria Y']
  },

  /* ============================================================
     ADM-06 — Controle e avaliação (8 questões)
  ============================================================ */
  {
    id: 'Q-REAL-ADM-06-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-06',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Função de controle',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A CODERN iniciou um processo de melhoria de seus procedimentos internos. Durante uma reunião, a diretoria solicitou que cada setor acompanhasse sistematicamente o desempenho das atividades, comparando os resultados obtidos com as metas previamente estabelecidas e, quando necessário, adotando medidas corretivas para ajustar os processos. A prática solicitada aos gestores está relacionada a qual função da administração?',
    alternativas: [
      { id: 'A', texto: 'Planejamento.' },
      { id: 'B', texto: 'Organização.' },
      { id: 'C', texto: 'Direção.' },
      { id: 'D', texto: 'Controle.' },
      { id: 'E', texto: 'Coordenação.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Acompanhar desempenho, comparar com metas e adotar medidas corretivas é a função de CONTROLE.',
      incorretas: { A: 'Planejamento define metas; não as compara com o desempenho.', B: 'Organização estrutura recursos.', C: 'Direção lidera e motiva.', E: 'Coordenação não é uma das quatro funções clássicas (é uma dimensão da direção).' },
      conceitoCobrado: 'Função de controle',
      pegadinha: 'Confundir controle com planejamento.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['controle']
  },
  {
    id: 'Q-REAL-ADM-06-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-06',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Controle concomitante',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'O controle concomitante é aquele exercido antes do início da atividade, com finalidade eminentemente preventiva, evitando a ocorrência de desvios.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. O controle CONCOMITANTE é exercido DURANTE a atividade — não antes. O controle exercido ANTES é o PREVENTIVO (ou prévio). O posterior é exercido depois.',
      incorretas: { A: 'A definição corresponde ao controle preventivo, não ao concomitante.' },
      conceitoCobrado: 'Tipos de controle (preventivo, concomitante, posterior)',
      pegadinha: 'Trocar preventivo por concomitante.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['controle concomitante', 'controle preventivo']
  },
  {
    id: 'Q-REAL-ADM-06-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-06',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Orçamento como instrumento de planejamento e controle',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Na administração financeira, o orçamento desempenha, simultaneamente, função de planejamento e de controle, pois traduz os planos em termos quantitativos e serve de padrão para o confronto com os valores efetivamente realizados.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. O orçamento é, ao mesmo tempo, instrumento de PLANEJAMENTO (traduz planos em termos quantitativos) e de CONTROLE (padrão para confronto com os valores realizados).',
      incorretas: { B: 'A afirmação está correta.' },
      conceitoCobrado: 'Orçamento — planejamento e controle',
      pegadinha: 'Achar que o orçamento é apenas planejamento ou apenas controle.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['orçamento', 'controle', 'planejamento']
  },
  {
    id: 'Q-DID-ADM-06-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-06',
    subtema: 'Etapas do controle',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'São etapas do processo de controle, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Estabelecimento de padrões.' },
      { id: 'B', texto: 'Medição do desempenho real.' },
      { id: 'C', texto: 'Comparação com o padrão.' },
      { id: 'D', texto: 'Eliminação do planejamento.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A eliminação do planejamento NÃO é etapa do controle — é o oposto: sem planejamento (que define padrões), não há controle. As etapas são: padrões → medição → comparação → ação corretiva.',
      incorretas: { A: 'É etapa.', B: 'É etapa.', C: 'É etapa.' },
      conceitoCobrado: 'Etapas do controle',
      pegadinha: 'Incluir item absurdo.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['controle', 'etapas']
  },
  {
    id: 'Q-DID-ADM-06-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-06',
    subtema: 'Padrão x indicador',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre padrão e indicador no controle, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Padrão é a referência (o que se espera); indicador é a métrica que mede o desempenho real.' },
      { id: 'C', texto: 'Indicador é a referência; padrão é a métrica.' },
      { id: 'D', texto: 'Padrão só existe no setor privado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'PADRÃO: critério de referência. INDICADOR: métrica que mede o desempenho real.',
      incorretas: { A: 'São conceitos distintos.', C: 'Inverte.', D: 'Existe em qualquer organização.' },
      conceitoCobrado: 'Padrão x indicador',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['padrão', 'indicador']
  },
  {
    id: 'Q-DID-ADM-06-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-06',
    subtema: 'Controle preventivo, simultâneo e posterior',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre os três tipos de controle, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Preventivo = antes; simultâneo = durante; posterior = depois.' },
      { id: 'B', texto: 'Preventivo = depois; simultâneo = antes; posterior = durante.' },
      { id: 'C', texto: 'Todos ocorrem depois.' },
      { id: 'D', texto: 'Todos ocorrem antes.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'PREVENTIVO: antes (evita o desvio). SIMULTÂNEO: durante (corrige em tempo real). POSTERIOR: depois (identifica o desvio).',
      incorretas: { B: 'Inverte.', C: 'Há os três tipos.', D: 'Idem.' },
      conceitoCobrado: 'Tipos de controle',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['controle preventivo', 'simultâneo', 'posterior']
  },
  {
    id: 'Q-DID-ADM-06-004',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-06',
    subtema: 'Controle administrativo x controle da Administração Pública',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre o controle administrativo (PODC) e o controle da Administração Pública (Direito Administrativo), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'O controle administrativo (PODC) é a função do gestor de medir e corrigir; o controle da Administração Pública (DA) é o conjunto de mecanismos jurídicos e institucionais (autotutela, controle legislativo, judicial, externo).' },
      { id: 'C', texto: 'Só existe controle no Direito Administrativo.' },
      { id: 'D', texto: 'Só existe controle na Teoria Geral.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'São conceitos DISTINTOS: o controle do PODC é função gerencial; o controle da Administração Pública é o conjunto de mecanismos jurídico-institucionais.',
      incorretas: { A: 'Não são sinônimos.', C: 'Existe em ambos.', D: 'Idem.' },
      conceitoCobrado: 'Controle administrativo x controle da Adm. Pública',
      pegadinha: 'Confundir os dois.',
      comoApareceEmConcurso: 'Distinção de conceitos.'
    },
    tags: ['controle', 'autotutela']
  },
  {
    id: 'Q-DID-ADM-06-005',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-06',
    subtema: 'Finalidade do controle',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a finalidade do controle, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É exclusivamente punir.' },
      { id: 'B', texto: 'É medir, comparar e corrigir desvios, com vistas à melhoria do desempenho organizacional.' },
      { id: 'C', texto: 'É apenas registrar.' },
      { id: 'D', texto: 'É dispensável.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O controle é diagnóstico e corretivo — visa à melhoria. A punição é apenas uma das ações corretivas possíveis.',
      incorretas: { A: 'Não é exclusivamente punitivo.', C: 'Não é apenas registro.', D: 'É essencial.' },
      conceitoCobrado: 'Finalidade do controle',
      pegadinha: 'Reduzir o controle à punição.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['controle', 'finalidade']
  },

  /* ============================================================
     ADM-07 — Gestão de Pessoas (8 questões)
  ============================================================ */
  {
    id: 'Q-REAL-ADM-07-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-07',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Avaliação de desempenho — escolha forçada',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma empresa pública substituiu o modelo tradicional de avaliação de desempenho por um método estruturado em blocos de proposições descritivas. Cada bloco contém afirmações com diferentes conotações de desempenho, sendo o avaliador compelido a indicar aquela que melhor representa o comportamento do avaliado e aquela que menos o representa. Os valores atribuídos às afirmações não são de conhecimento do avaliador, tendo sido previamente calibrados por especialistas. A respeito desse método, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Trata-se da Avaliação por Incidentes Críticos, cuja principal vantagem reside na eliminação de registros subjetivos.' },
      { id: 'B', texto: 'Trata-se da Escolha Forçada, que busca reduzir distorções como leniência e efeito de halo, embora possa apresentar como limitação a dificuldade de construção e validação dos instrumentos.' },
      { id: 'C', texto: 'Trata-se da Pesquisa de Campo, caracterizada pela atuação conjunta entre especialista e gestor de linha.' },
      { id: 'D', texto: 'Trata-se da Avaliação 360 Graus, cuja principal característica é a coleta de percepções múltiplas, eliminando a ponderação estatística.' },
      { id: 'E', texto: 'Trata-se da Gestão por Objetivos, baseada na negociação de metas mensuráveis.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A descrição corresponde à ESCOLHA FORÇADA: blocos de proposições, avaliador escolhe a que melhor e a que menos representa, valores desconhecidos pelo avaliador (calibrados por especialistas). Reduz distorções, mas tem dificuldade de construção.',
      incorretas: { A: 'Incidentes críticos registra ocorrências — não blocos de escolha.', C: 'Pesquisa de campo envolve especialista e gestor.', D: '360° coleta percepções múltiplas.', E: 'Gestão por objetivos negocia metas.' },
      conceitoCobrado: 'Métodos de avaliação de desempenho',
      pegadinha: 'Confundir escolha forçada com outros métodos.',
      comoApareceEmConcurso: 'Descrição de método aplicado.'
    },
    tags: ['avaliação de desempenho', 'escolha forçada']
  },
  {
    id: 'Q-REAL-ADM-07-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-07',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Avaliação de desempenho — método das escalas gráficas',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Para Santos (2014), a avaliação de desempenho surgiu no Brasil na década de 1960, através de um método que definia a promoção por merecimento e por antiguidade, com boletim de merecimento composto por fatores essenciais (qualidade do trabalho, iniciativa, colaboração, ética profissional, conhecimento do trabalho) e complementares (assiduidade, pontualidade, disciplina). Esse método é denominado:',
    alternativas: [
      { id: 'A', texto: 'Método comparativo.' },
      { id: 'B', texto: 'Método da escolha forçada.' },
      { id: 'C', texto: 'Método das escalas gráficas.' },
      { id: 'D', texto: 'Método dos incidentes críticos.' },
      { id: 'E', texto: 'Método 360 graus.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'O método descrito — fatores essenciais e complementares, com avaliação por merecimento — corresponde ao MÉTODO DAS ESCALAS GRÁFICAS.',
      incorretas: { A: 'Comparativo compara avaliados entre si.', B: 'Escolha forçada usa blocos de proposições.', D: 'Incidentes críticos registra ocorrências.', E: '360° coleta múltiplas percepções.' },
      conceitoCobrado: 'Métodos de avaliação de desempenho',
      pegadinha: 'Confundir escalas gráficas com escolha forçada.',
      comoApareceEmConcurso: 'Cobrança de método específico.'
    },
    tags: ['avaliação de desempenho', 'escalas gráficas']
  },
  {
    id: 'Q-REAL-ADM-07-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-07',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Testes psicológicos — psicométricos x personalidade',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma empresa está conduzindo processo seletivo e aplicou testes psicológicos para avaliar candidatos, mensurando tanto a capacidade cognitiva quanto características comportamentais. Sobre a finalidade e classificação dos testes, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Testes psicométricos identificam traços emocionais; testes de personalidade mensuram inteligência.' },
      { id: 'B', texto: 'Ambos têm a mesma finalidade, aplicados indistintamente.' },
      { id: 'C', texto: 'Testes psicométricos analisam experiências anteriores; testes de personalidade avaliam conhecimentos técnicos.' },
      { id: 'D', texto: 'Testes psicométricos e de personalidade são aplicados apenas em etapas finais para confirmar entrevistas.' },
      { id: 'E', texto: 'Testes psicométricos mensuram aptidões por meio de escores padronizados; testes de personalidade buscam identificar traços comportamentais, interesses e aspectos motivacionais.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'PSICOMÉTRICOS: aptidões, escores padronizados. PERSONALIDADE: traços comportamentais, interesses, motivações.',
      incorretas: { A: 'Inverte.', B: 'Têm finalidades distintas.', C: 'Não corresponde.', D: 'Não se restringem a etapas finais.' },
      conceitoCobrado: 'Testes psicológicos no processo seletivo',
      pegadinha: 'Inverter psicométrico e personalidade.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['testes psicológicos', 'seleção']
  },
  {
    id: 'Q-REAL-ADM-07-004',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-07',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Aptidão (gestão por competências)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Segundo Freitas (2022), um dos termos utilizados pelo sistema de gestão por competências é a aptidão. Assinale a alternativa que apresenta a definição desse termo:',
    alternativas: [
      { id: 'A', texto: 'Posição assumida pelo indivíduo perante um estímulo externo.' },
      { id: 'B', texto: 'Participação ativa em ações com impacto social, político ou ambiental.' },
      { id: 'C', texto: 'Capacidade de utilizar e colocar em prática determinados conhecimentos adquiridos em treinamentos ou na vivência profissional e pessoal.' },
      { id: 'D', texto: 'Disposição inata para o desempenho de determinadas atividades.' },
      { id: 'E', texto: 'Transformação que se pretende alcançar quando se realiza uma ação.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'APTIDÃO é a DISPOSIÇÃO INATA (natural) para o desempenho de determinadas atividades.',
      incorretas: { A: 'Descreve atitude.', B: 'Descreve cidadania.', C: 'Descreve habilidade.', E: 'Descreve objetivo.' },
      conceitoCobrado: 'Gestão por competências (CHA)',
      pegadinha: 'Confundir aptidão com habilidade ou atitude.',
      comoApareceEmConcurso: 'Definição de termo.'
    },
    tags: ['competências', 'aptidão', 'CHA']
  },
  {
    id: 'Q-REAL-ADM-07-005',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-07',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Treinamento x desenvolvimento',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Treinamento e desenvolvimento são expressões equivalentes, pois ambos destinam-se a preparar o colaborador para o desempenho do cargo por ele atualmente ocupado.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. TREINAMENTO prepara para a TAREFA ATUAL (curto prazo, operacional). DESENVOLVIMENTO prepara para o FUTURO (longo prazo, estratégico). Não são equivalentes.',
      incorretas: { A: 'São conceitos distintos.' },
      conceitoCobrado: 'Treinamento x desenvolvimento',
      pegadinha: 'Igualar os conceitos.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['treinamento', 'desenvolvimento']
  },
  {
    id: 'Q-DID-ADM-07-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-07',
    subtema: 'Os seis processos de gestão de pessoas',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'São processos de gestão de pessoas, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Agregar pessoas.' },
      { id: 'B', texto: 'Recompensar pessoas.' },
      { id: 'C', texto: 'Desenvolver pessoas.' },
      { id: 'D', texto: 'Contabilizar pessoas.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Os seis processos são: agregar, aplicar, recompensar, desenvolver, manter e monitorar. "Contabilizar" NÃO é um deles.',
      incorretas: { A: 'É processo.', B: 'É processo.', C: 'É processo.' },
      conceitoCobrado: 'Processos de gestão de pessoas',
      pegadinha: 'Criar processo inexistente.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['gestão de pessoas', 'processos']
  },
  {
    id: 'Q-DID-ADM-07-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-07',
    subtema: 'Recrutamento x seleção',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre recrutamento e seleção, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Recrutamento atrai candidatos; seleção escolhe o que melhor atende ao perfil.' },
      { id: 'C', texto: 'Seleção atrai; recrutamento escolhe.' },
      { id: 'D', texto: 'Ambos dispensam planejamento.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'RECRUTAMENTO: atração (vitrine). SELEÇÃO: escolha (peneira).',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Exigem planejamento.' },
      conceitoCobrado: 'Recrutamento x seleção',
      pegadinha: 'Inverter ou igualar.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['recrutamento', 'seleção']
  },
  {
    id: 'Q-DID-ADM-07-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-07',
    subtema: 'Clima x cultura organizacional',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre clima e cultura organizacional, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Clima e cultura são sinônimos.' },
      { id: 'B', texto: 'Clima é a percepção momentânea (temperatura); cultura é o conjunto de valores e crenças enraizados (DNA).' },
      { id: 'C', texto: 'Cultura é momentânea; clima é enraizado.' },
      { id: 'D', texto: 'Nenhum dos dois influencia o comportamento.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'CLIMA: percepção coletiva momentânea. CULTURA: valores e crenças enraizados.',
      incorretas: { A: 'São conceitos distintos.', C: 'Inverte.', D: 'Ambos influenciam o comportamento.' },
      conceitoCobrado: 'Clima x cultura',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['clima', 'cultura']
  },
  /* ============================================================
     ADM-08 — Comunicação e comportamento organizacional
  ============================================================ */
  {
    id: 'Q-REAL-ADM-08-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-08',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Rede informal de comunicação',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'A rede informal de comunicação, embora não prevista no organograma, transmite informações com rapidez e pode ser aproveitada pelo gestor como fonte de diagnóstico do clima organizacional.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. A rede informal é ágil, não está no organograma e pode ser útil ao gestor como termômetro do clima organizacional.',
      incorretas: { B: 'A definição está correta.' },
      conceitoCobrado: 'Comunicação informal',
      pegadinha: 'Achar que a informalidade é sempre prejudicial.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['comunicação informal']
  },
  {
    id: 'Q-REAL-ADM-08-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-08',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Pensamento grupal (groupthink)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'O pensamento grupal constitui manifestação positiva da coesão da equipe, na medida em que amplia a análise crítica das alternativas e aprimora a qualidade das decisões coletivas.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. O pensamento grupal (groupthink) é um fenômeno NEGATIVO: a busca por consenso suprime a análise crítica e piora a qualidade das decisões.',
      incorretas: { A: 'A descrição é o oposto do pensamento grupal.' },
      conceitoCobrado: 'Pensamento grupal',
      pegadinha: 'Tratar o groupthink como aspecto positivo.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['groupthink', 'comportamento organizacional']
  },
  {
    id: 'Q-REAL-ADM-08-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-08',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Relações públicas',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'As atividades de relações públicas relacionam-se à divulgação institucional da organização perante o público externo, não abrangendo ações de comunicação dirigidas ao público interno.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. As relações públicas abrangem também o público INTERNO — comunicação interna é parte da função.',
      incorretas: { A: 'A afirmação restringe indevidamente.' },
      conceitoCobrado: 'Relações públicas',
      pegadinha: 'Restringir relações públicas ao público externo.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['relações públicas', 'comunicação interna']
  },
  {
    id: 'Q-REAL-ADM-08-004',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-08',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã/PR', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã/PR — Auxiliar Administrativo' },
    subtema: 'Barreiras de comunicação',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Mariana, ao atender um cidadão no balcão de serviços, utilizou diversos termos técnicos da legislação financeira para explicar o indeferimento de um processo, deixando o usuário confuso. Sobre as barreiras que incidiram na comunicação, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Mariana provocou uma barreira organizacional ao seguir as linhas formais do organograma.' },
      { id: 'B', texto: 'Mariana contornou uma barreira de comunicação ao aplicar as regras de feedback recomendadas para a recepção.' },
      { id: 'C', texto: 'Mariana gerou uma barreira semântica no atendimento ao utilizar uma linguagem técnica incompatível com o repertório do receptor.' },
      { id: 'D', texto: 'Mariana enfrentou uma barreira física decorrente de ruídos eletromagnéticos na linha telefônica.' },
      { id: 'E', texto: 'Mariana enfrentou uma barreira de canal ao utilizar a comunicação verbal direta.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'O uso de jargão técnico incompatível com o repertório do interlocutor é BARREIRA SEMÂNTICA.',
      incorretas: { A: 'Barreira organizacional envolve estrutura, não jargão.', B: 'Não houve contorno de barreira.', D: 'Não houve barreira física.', E: 'Comunicação verbal direta não é barreira por si.' },
      conceitoCobrado: 'Barreiras de comunicação',
      pegadinha: 'Confundir semântica com organizacional.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['barreira semântica']
  },
  {
    id: 'Q-DID-ADM-08-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-08',
    subtema: 'Elementos do processo de comunicação',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'São elementos do processo de comunicação, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Emissor.' },
      { id: 'B', texto: 'Mensagem.' },
      { id: 'C', texto: 'Canal.' },
      { id: 'D', texto: 'Contabilidade.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Contabilidade não é elemento do processo de comunicação. Os elementos são: emissor, codificação, mensagem, canal, decodificação, receptor, feedback e ruído.',
      incorretas: { A: 'É elemento.', B: 'É elemento.', C: 'É elemento.' },
      conceitoCobrado: 'Elementos da comunicação',
      pegadinha: 'Incluir área técnica como elemento.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['comunicação', 'elementos']
  },
  {
    id: 'Q-DID-ADM-08-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-08',
    subtema: 'Comunicação formal x informal',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a comunicação formal e a informal, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A comunicação formal é sempre prejudicial, e a informal, sempre benéfica.' },
      { id: 'B', texto: 'A formal flui pelos canais oficiais (hierarquia, documentos); a informal, pelas relações interpessoais — ambas coexistem e se influenciam.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'A informal não existe em órgãos públicos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A comunicação FORMAL flui pelos canais oficiais; a INFORMAL, pelas relações interpessoais. Coexistem e podem se reforçar ou se contrapor.',
      incorretas: { A: 'Não há valor absoluto.', C: 'São distintas.', D: 'Existe em qualquer organização.' },
      conceitoCobrado: 'Comunicação formal x informal',
      pegadinha: 'Tratar como valor absoluto.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['comunicação formal', 'informal']
  },
  {
    id: 'Q-DID-ADM-08-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-08',
    subtema: 'Grupo x equipe',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a diferença entre grupo e equipe, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Grupo tem responsabilidade individual e sinergia neutra (ou negativa); equipe tem responsabilidade mútua, habilidades complementares e sinergia positiva.' },
      { id: 'C', texto: 'Equipe tem apenas responsabilidade individual.' },
      { id: 'D', texto: 'Grupo exige habilidades complementares.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'GRUPO: responsabilidade individual e sinergia neutra/negativa. EQUIPE: responsabilidade mútua, habilidades complementares e sinergia positiva.',
      incorretas: { A: 'São distintos.', C: 'Equipe tem responsabilidade mútua.', D: 'Grupo não exige complementaridade.' },
      conceitoCobrado: 'Grupo x equipe',
      pegadinha: 'Igualar os conceitos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['grupo', 'equipe']
  },
  {
    id: 'Q-DID-ADM-08-004',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-08',
    subtema: 'Conflito funcional x disfuncional',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre o conflito organizacional, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Todo conflito é disfuncional e deve ser eliminado.' },
      { id: 'B', texto: 'O conflito funcional é construtivo (estimula debate e melhoria); o disfuncional é destrutivo (prejudica o desempenho).' },
      { id: 'C', texto: 'Todo conflito é funcional.' },
      { id: 'D', texto: 'O conflito não influencia o desempenho.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'FUNCIONAL: construtivo. DISFUNCIONAL: destrutivo.',
      incorretas: { A: 'Nem todo conflito é disfuncional.', C: 'Nem todo é funcional.', D: 'Influencia.' },
      conceitoCobrado: 'Conflito funcional x disfuncional',
      pegadinha: 'Tratar como valor absoluto.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['conflito funcional', 'disfuncional']
  },

  /* ============================================================
     ADM-09 — Gestão da Qualidade
  ============================================================ */
  {
    id: 'Q-REAL-ADM-09-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-09',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã/PR', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã/PR — Auxiliar Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'PDCA e melhoria contínua',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre as ferramentas e princípios de melhoria contínua aplicados ao serviço público, assinale a alternativa INCORRETA:',
    alternativas: [
      { id: 'A', texto: 'A melhoria contínua pressupõe que os processos devem ser constantemente monitorados e ajustados para a eliminação de desperdícios.' },
      { id: 'B', texto: 'O ciclo PDCA é composto por etapas estáticas de planejamento e ação que dispensam o monitoramento e a verificação dos processos.' },
      { id: 'C', texto: 'O princípio do foco no cliente exige que o órgão público direcione suas ações para atender às demandas da sociedade civil.' },
      { id: 'D', texto: 'Os indicadores de desempenho constituem ferramentas que servem para mensurar a produtividade e a eficácia das ações públicas.' },
      { id: 'E', texto: 'O Diagrama de Causa e Efeito auxilia na identificação e na organização das causas potenciais de um problema específico avaliado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está INCORRETA: o PDCA é CÍCLICO (não estático) e pressupõe monitoramento e verificação.',
      incorretas: { A: 'Correta.', C: 'Correta.', D: 'Correta.', E: 'Correta.' },
      conceitoCobrado: 'PDCA e melhoria contínua',
      pegadinha: 'Descrever o PDCA como estático.',
      comoApareceEmConcurso: 'Cobrança de INCORRETA em cenário.'
    },
    tags: ['PDCA', 'melhoria contínua']
  },
  {
    id: 'Q-REAL-ADM-09-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-09',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Indicador de grau de atendimento',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Durante a avaliação do desempenho logístico de uma empresa pública, verificou-se que, dos 1.200 pedidos registrados, 150 não foram atendidos conforme as condições estabelecidas (prazo, quantidade ou integridade). A partir dessas informações, o indicador de grau de atendimento da operação corresponde a:',
    alternativas: [
      { id: 'A', texto: '82,5%.' },
      { id: 'B', texto: '85,0%.' },
      { id: 'C', texto: '87,5%.' },
      { id: 'D', texto: '90,0%.' },
      { id: 'E', texto: '92,5%.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Grau de atendimento = (pedidos atendidos / total) × 100 = (1200 − 150)/1200 × 100 = 1050/1200 × 100 = 87,5%.',
      incorretas: { A: '82,5% não corresponde ao cálculo.', B: '85,0% não corresponde.', D: '90,0% não corresponde.', E: '92,5% não corresponde.' },
      conceitoCobrado: 'Indicadores de qualidade — grau de atendimento',
      pegadinha: 'Erro de cálculo (usar 150/1200 ou confundir numerador/denominador).',
      comoApareceEmConcurso: 'Cálculo aplicado.'
    },
    tags: ['indicador', 'grau de atendimento']
  },
  {
    id: 'Q-REAL-ADM-09-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-09',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Benchmarking',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Uma empresa pública pretende melhorar a eficiência de seus processos operacionais, analisando práticas adotadas por outras organizações do setor que apresentam melhores resultados, para identificar práticas bem-sucedidas e avaliar a possibilidade de adaptá-las à realidade da empresa. A ferramenta de gestão utilizada é:',
    alternativas: [
      { id: 'A', texto: 'Planejamento estratégico.' },
      { id: 'B', texto: 'Benchmarking.' },
      { id: 'C', texto: 'Gestão por processos.' },
      { id: 'D', texto: 'Análise SWOT.' },
      { id: 'E', texto: 'Reengenharia de processos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'BENCHMARKING é a análise de práticas de outras organizações bem-sucedidas, com vistas à adaptação.',
      incorretas: { A: 'Planejamento estratégico define rumos.', C: 'Gestão por processos organiza o fluxo interno.', D: 'SWOT é diagnóstico interno/externo.', E: 'Reengenharia é redesenho radical.' },
      conceitoCobrado: 'Benchmarking',
      pegadinha: 'Confundir com SWOT ou reengenharia.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['benchmarking']
  },
  {
    id: 'Q-REAL-ADM-09-004',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-09',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Melhoria contínua x reengenharia',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'A melhoria contínua e a reengenharia de processos são sinônimos: ambas consistem em redesenhar radicalmente o processo, começando do zero.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. A melhoria contínua é INCREMENTAL (pequenos ajustes); a reengenharia é RADICAL (redesenho do zero).',
      incorretas: { A: 'São conceitos distintos.' },
      conceitoCobrado: 'Melhoria contínua x reengenharia',
      pegadinha: 'Igualar os conceitos.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['melhoria contínua', 'reengenharia']
  },
  {
    id: 'Q-DID-ADM-09-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-09',
    subtema: 'Ishikawa x Pareto',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre o Diagrama de Ishikawa e o Diagrama de Pareto, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Ishikawa prioriza as causas; Pareto identifica.' },
      { id: 'B', texto: 'Ishikawa identifica as causas (6M); Pareto prioriza (80/20).' },
      { id: 'C', texto: 'São a mesma ferramenta.' },
      { id: 'D', texto: 'Pareto identifica; Ishikawa prioriza.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ISHIKAWA identifica as causas (espinha de peixe/6M); PARETO prioriza (80/20).',
      incorretas: { A: 'Inverte.', C: 'São distintas.', D: 'Inverte.' },
      conceitoCobrado: 'Ishikawa x Pareto',
      pegadinha: 'Inverter as funções.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['Ishikawa', 'Pareto']
  },
  {
    id: 'Q-DID-ADM-09-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-09',
    subtema: '5W2H',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a ferramenta 5W2H, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É uma ferramenta de plano de ação que responde: o quê, por quê, onde, quando, quem, como e quanto custa.' },
      { id: 'B', texto: 'É uma ferramenta de diagnóstico de causas.' },
      { id: 'C', texto: 'É uma ferramenta de priorização de problemas.' },
      { id: 'D', texto: 'É uma técnica de análise de investimentos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O 5W2H é ferramenta de PLANO DE AÇÃO: What, Why, Where, When, Who, How, How much.',
      incorretas: { B: 'Diagnóstico de causas = Ishikawa.', C: 'Priorização = Pareto.', D: 'Não é análise de investimentos.' },
      conceitoCobrado: '5W2H',
      pegadinha: 'Confundir com Ishikawa ou Pareto.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['5W2H']
  },
  {
    id: 'Q-DID-ADM-09-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-09',
    subtema: 'Qualidade total',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a qualidade total (TQM), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É responsabilidade exclusiva do setor de qualidade.' },
      { id: 'B', texto: 'É uma abordagem que envolve todos os setores e servidores da organização, com foco no usuário e comprometimento da alta direção.' },
      { id: 'C', texto: 'Dispensa o comprometimento da alta direção.' },
      { id: 'D', texto: 'É exclusiva do setor privado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A qualidade total é uma abordagem SISTÊMICA: todos os setores e servidores, foco no usuário, comprometimento da alta direção.',
      incorretas: { A: 'Envolve todos.', C: 'Exige alta direção.', D: 'Aplica-se a qualquer organização.' },
      conceitoCobrado: 'Qualidade total',
      pegadinha: 'Restringir a um setor.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['qualidade total', 'TQM']
  },
  {
    id: 'Q-DID-ADM-09-004',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-09',
    subtema: 'Indicadores de qualidade',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre os indicadores de qualidade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São métricas que medem o desempenho, como tempo de espera, taxa de erro e índice de satisfação.' },
      { id: 'B', texto: 'São opcionais e não influenciam a gestão.' },
      { id: 'C', texto: 'São exclusivos da área financeira.' },
      { id: 'D', texto: 'São sinônimos de padrão.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Os indicadores são métricas de desempenho: tempo de espera, taxa de erro, satisfação etc.',
      incorretas: { B: 'São essenciais.', C: 'Aplicam-se a todas as áreas.', D: 'Padrão é a referência; indicador é a métrica.' },
      conceitoCobrado: 'Indicadores de qualidade',
      pegadinha: 'Confundir com padrão.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['indicadores', 'qualidade']
  },

  /* ============================================================
     ADM-10 — Administração de Materiais e Patrimônio
  ============================================================ */
  {
    id: 'Q-REAL-ADM-10-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-10',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Lote econômico de compra (LEC)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A CODERN identificou que, para determinado item de uso frequente, os custos de emissão de pedidos e de manutenção de estoque impactam significativamente os gastos. A demanda anual do item é estável e são conhecidos o custo de realização de pedidos e o custo de armazenagem por unidade. Para definir a quantidade ideal a ser adquirida em cada pedido, minimizando o custo total, a ferramenta adequada é:',
    alternativas: [
      { id: 'A', texto: 'Curva ABC.' },
      { id: 'B', texto: 'Ponto de pedido.' },
      { id: 'C', texto: 'Lote econômico de compra (LEC).' },
      { id: 'D', texto: 'Estoque de segurança.' },
      { id: 'E', texto: 'Sistema de inventário rotativo.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'O LEC (lote econômico de compra) determina a QUANTIDADE IDEAL por pedido, minimizando a soma dos custos de pedido e de armazenagem.',
      incorretas: { A: 'Curva ABC classifica itens por valor.', B: 'Ponto de pedido define QUANDO comprar.', D: 'Estoque de segurança protege contra imprevistos.', E: 'Inventário rotativo é conferência de estoque.' },
      conceitoCobrado: 'Lote econômico de compra (LEC)',
      pegadinha: 'Confundir LEC com ponto de pedido (quando) ou com curva ABC (classificação).',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['LEC', 'lote econômico']
  },
  {
    id: 'Q-REAL-ADM-10-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-10',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Ponto de pedido (cálculo)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um item apresenta consumo médio diário de 30 unidades, prazo de entrega de 4 dias e estoque de segurança de 60 unidades. O tempo de processamento interno do pedido é de 1 dia (já considerado no prazo de entrega). O ponto de pedido do item é:',
    alternativas: [
      { id: 'A', texto: '120 unidades.' },
      { id: 'B', texto: '150 unidades.' },
      { id: 'C', texto: '180 unidades.' },
      { id: 'D', texto: '210 unidades.' },
      { id: 'E', texto: '300 unidades.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'PP = (consumo médio × tempo de reposição) + estoque de segurança = (30 × 4) + 60 = 120 + 60 = 180 unidades.',
      incorretas: { A: '120 é apenas o consumo durante o tempo de reposição (30 × 4).', B: '150 não corresponde.', D: '210 não corresponde.', E: '300 é o lote econômico (não o ponto de pedido).' },
      conceitoCobrado: 'Ponto de pedido',
      pegadinha: 'Esquecer o estoque de segurança.',
      comoApareceEmConcurso: 'Cálculo aplicado.'
    },
    tags: ['ponto de pedido']
  },
  {
    id: 'Q-REAL-ADM-10-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-10',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Giro de estoque',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Uma empresa pública apresenta consumo anual de 2.400 unidades de determinado item e estoque médio de 200 unidades. O giro de estoque do item é de 12 vezes ao ano, o que expressa:',
    alternativas: [
      { id: 'A', texto: 'o número de vezes que o estoque médio é renovado no período.' },
      { id: 'B', texto: 'o prazo médio de pagamento de fornecedores.' },
      { id: 'C', texto: 'a quantidade mínima para não faltar material.' },
      { id: 'D', texto: 'o custo total de armazenagem.' },
      { id: 'E', texto: 'o prazo de entrega do fornecedor.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O GIRO DE ESTOQUE mede o número de vezes que o estoque médio se renova no período. Giro = consumo / estoque médio = 2400 / 200 = 12.',
      incorretas: { B: 'Prazo médio de pagamento é outro indicador.', C: 'Estoque mínimo é outro conceito.', D: 'Custo de armazenagem é outro indicador.', E: 'Prazo de entrega é dado do fornecedor.' },
      conceitoCobrado: 'Giro de estoque',
      pegadinha: 'Confundir giro com estoque mínimo ou prazo de pagamento.',
      comoApareceEmConcurso: 'Interpretação de indicador.'
    },
    tags: ['giro de estoque']
  },
  {
    id: 'Q-REAL-ADM-10-004',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-10',
    banca: 'Avança SP', orgao: 'Autarquia Municipal de Saúde de Itapecerica da Serra/SP', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Avança SP 2026 — Autarquia Municipal de Saúde de Itapecerica da Serra/SP — Assistente Administrativo' },
    subtema: 'Tipos de inventário',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Associe os tipos de inventário às suas descrições: 1 - Inventário físico; 2 - Inventário rotativo; 3 - Inventário periódico. ( ) Levantamento contínuo e seletivo, realizado segundo cronograma que abrange todos os itens dentro de determinado período fiscal. ( ) Contagem de todos os itens em períodos determinados, podendo receber a denominação de geral quando realizada no encerramento do exercício fiscal. ( ) Procedimento de levantamento físico e contagem dos itens de material existentes em uma organização. A sequência correta, de cima para baixo, é:',
    alternativas: [
      { id: 'A', texto: '1 – 2 – 3.' },
      { id: 'B', texto: '2 – 3 – 1.' },
      { id: 'C', texto: '3 – 1 – 2.' },
      { id: 'D', texto: '2 – 1 – 3.' },
      { id: 'E', texto: '3 – 2 – 1.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '2 = rotativo (contínuo e seletivo). 3 = periódico (em períodos determinados, inclui o geral). 1 = físico (levantamento e contagem). Sequência: 2 – 3 – 1.',
      incorretas: { A: 'Inverte.', C: 'Inverte.', D: 'Inverte.', E: 'Inverte.' },
      conceitoCobrado: 'Tipos de inventário',
      pegadinha: 'Confundir rotativo com periódico.',
      comoApareceEmConcurso: 'Associação.'
    },
    tags: ['inventário físico', 'rotativo', 'periódico']
  },
  {
    id: 'Q-REAL-ADM-10-005',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-10',
    banca: 'Avança SP', orgao: 'Autarquia Municipal de Saúde de Itapecerica da Serra/SP', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Avança SP 2026 — Autarquia Municipal de Saúde de Itapecerica da Serra/SP — Assistente Administrativo' },
    subtema: 'Recebimento de materiais',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o recebimento de materiais em órgãos públicos, assinale a alternativa que apresenta uma informação INCORRETA:',
    alternativas: [
      { id: 'A', texto: 'O recebimento provisório compreende a recepção dos veículos, verificação de dados básicos e encaminhamento para descarga.' },
      { id: 'B', texto: 'A conferência quantitativa verifica se a quantidade declarada na nota fiscal corresponde à entregue.' },
      { id: 'C', texto: 'A conferência qualitativa verifica se as especificações técnicas estão de acordo com as solicitadas.' },
      { id: 'D', texto: 'A regularização é a etapa final do recebimento, podendo resultar em entrada no estoque, devolução ou reclamação.' },
      { id: 'E', texto: 'O recebimento definitivo é a etapa em que o fornecedor assina o documento fiscal que acompanha o material, para fins de comprovação da data de entrega.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A alternativa E está INCORRETA: o recebimento DEFINITIVO é a aceitação do material após verificação — não é o momento em que o fornecedor assina a nota (isso ocorre no recebimento provisório).',
      incorretas: { A: 'Correta.', B: 'Correta.', C: 'Correta.', D: 'Correta.' },
      conceitoCobrado: 'Etapas do recebimento de materiais',
      pegadinha: 'Confundir recebimento provisório com definitivo.',
      comoApareceEmConcurso: 'Cobrança de INCORRETA.'
    },
    tags: ['recebimento', 'provisório', 'definitivo']
  },
  {
    id: 'Q-DID-ADM-10-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-10',
    subtema: 'Bem de consumo x bem permanente',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'São exemplos de bens de consumo e de bens permanentes, respectivamente:',
    alternativas: [
      { id: 'A', texto: 'Computador e caneta.' },
      { id: 'B', texto: 'Papel e mesa.' },
      { id: 'C', texto: 'Mesa e computador.' },
      { id: 'D', texto: 'Caneta e papel.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Papel é bem de CONSUMO (consumido com o uso); mesa é bem PERMANENTE (durável, tombada).',
      incorretas: { A: 'Inverte.', C: 'Ambos são permanentes.', D: 'Ambos são de consumo.' },
      conceitoCobrado: 'Bem de consumo x permanente',
      pegadinha: 'Inverter as categorias.',
      comoApareceEmConcurso: 'Cobrança de exemplos.'
    },
    tags: ['bem de consumo', 'bem permanente']
  },
  {
    id: 'Q-DID-ADM-10-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-10',
    subtema: 'Estoque mínimo x estoque de segurança',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre estoque mínimo e estoque de segurança, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'O mínimo é um limite operacional; o de segurança é uma proteção adicional contra imprevistos.' },
      { id: 'C', texto: 'O mínimo é proteção adicional; o de segurança é limite operacional.' },
      { id: 'D', texto: 'Nenhum dos dois é usado na gestão de estoques.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'MÍNIMO: limite operacional abaixo do qual não se deve operar. SEGURANÇA: parcela adicional para cobrir imprevistos.',
      incorretas: { A: 'São conceitos distintos.', C: 'Inverte.', D: 'Ambos são usados.' },
      conceitoCobrado: 'Estoque mínimo x segurança',
      pegadinha: 'Inverter ou igualar.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['estoque mínimo', 'estoque de segurança']
  },
  {
    id: 'Q-DID-ADM-10-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-10',
    subtema: 'Tombamento x inventário',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre tombamento e inventário, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Tombamento atribui número patrimonial ao bem (identificação); inventário é a conferência física (contagem e conciliação).' },
      { id: 'C', texto: 'Tombamento é a conferência; inventário é a identificação.' },
      { id: 'D', texto: 'Nenhum dos dois é usado na gestão patrimonial.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'TOMBAMENTO: atribui número patrimonial (identificação). INVENTÁRIO: conferência física e conciliação com os registros.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Ambos são usados.' },
      conceitoCobrado: 'Tombamento x inventário',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['tombamento', 'inventário']
  },

  /* ============================================================
     ADM-11 — Gestão de Processos
  ============================================================ */
  {
    id: 'Q-DID-ADM-11-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Processo x projeto',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a diferença entre processo e projeto, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Processo é contínuo e repetitivo; projeto é temporário e único, com começo, meio e fim.' },
      { id: 'C', texto: 'Processo é temporário; projeto é contínuo.' },
      { id: 'D', texto: 'Projetos não têm prazo definido.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'PROCESSO: contínuo, repetitivo. PROJETO: temporário, único, com começo/meio/fim.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Projetos têm prazo.' },
      conceitoCobrado: 'Processo x projeto',
      pegadinha: 'Inverter ou igualar.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['processo', 'projeto']
  },
  {
    id: 'Q-DID-ADM-11-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Processos finalísticos x de apoio',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a classificação dos processos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Finalísticos dão suporte aos de apoio.' },
      { id: 'B', texto: 'Finalísticos geram valor direto ao cliente/cidadão; de apoio dão suporte interno (RH, compras, TI).' },
      { id: 'C', texto: 'Só existem processos de apoio.' },
      { id: 'D', texto: 'Finalísticos são exclusivos do setor privado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'FINALÍSTICOS: valor direto ao cliente/cidadão. DE APOIO: suporte interno.',
      incorretas: { A: 'Inverte.', C: 'Existem os dois tipos.', D: 'Existem em qualquer organização.' },
      conceitoCobrado: 'Processos finalísticos x apoio',
      pegadinha: 'Inverter a relação.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['processo finalístico', 'processo de apoio']
  },
  {
    id: 'Q-DID-ADM-11-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Atividade x tarefa',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre atividade e tarefa, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Atividade é unidade de trabalho dentro do processo; tarefa é sua subdivisão, com execução individual.' },
      { id: 'C', texto: 'Tarefa é mais ampla que atividade.' },
      { id: 'D', texto: 'Atividade é a execução individual.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ATIVIDADE: unidade de trabalho dentro do processo. TAREFA: subdivisão, execução individual.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'A tarefa é a execução individual.' },
      conceitoCobrado: 'Atividade x tarefa',
      pegadinha: 'Inverter a hierarquia.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['atividade', 'tarefa']
  },
  {
    id: 'Q-DID-ADM-11-004',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Melhoria contínua x reengenharia',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre melhoria contínua e reengenharia, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Melhoria contínua é incremental; reengenharia é radical (redesenho do zero).' },
      { id: 'C', texto: 'Melhoria contínua é radical; reengenharia é incremental.' },
      { id: 'D', texto: 'Ambas eliminam a necessidade de processos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'MELHORIA CONTÍNUA: incremental (kaizen). REENGENHARIA: radical, com ruptura.',
      incorretas: { A: 'São distintas.', C: 'Inverte.', D: 'Ambas atuam sobre processos.' },
      conceitoCobrado: 'Melhoria contínua x reengenharia',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['melhoria contínua', 'reengenharia']
  },
  {
    id: 'Q-DID-ADM-11-005',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Gestão funcional x gestão por processos',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a gestão funcional e a gestão por processos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'A funcional organiza por departamentos (silos); a por processos organiza por fluxo ponta a ponta, com foco no valor entregue.' },
      { id: 'C', texto: 'A por processos organiza por departamentos.' },
      { id: 'D', texto: 'A funcional olha o fluxo ponta a ponta.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'FUNCIONAL: departamentos, com risco de silos. POR PROCESSOS: fluxo ponta a ponta, com foco no valor.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Inverte.' },
      conceitoCobrado: 'Gestão funcional x por processos',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['gestão funcional', 'gestão por processos']
  },
  {
    id: 'Q-DID-ADM-11-006',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Fluxograma',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'O fluxograma é:',
    alternativas: [
      { id: 'A', texto: 'Uma ferramenta de representação visual do fluxo de um processo.' },
      { id: 'B', texto: 'Um indicador financeiro.' },
      { id: 'C', texto: 'Uma técnica de avaliação de desempenho.' },
      { id: 'D', texto: 'Um tipo de organograma.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O FLUXOGRAMA é a representação visual do fluxo de um processo, com símbolos padronizados.',
      incorretas: { B: 'Não é indicador financeiro.', C: 'Não é avaliação de desempenho.', D: 'Organograma representa estrutura; fluxograma representa processo.' },
      conceitoCobrado: 'Fluxograma',
      pegadinha: 'Confundir com organograma.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['fluxograma']
  },
  {
    id: 'Q-DID-ADM-11-007',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Gargalo',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o gargalo de um processo, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É a etapa que limita a capacidade total do processo, onde há acúmulo ou espera.' },
      { id: 'B', texto: 'É a primeira etapa do processo.' },
      { id: 'C', texto: 'É a última etapa do processo.' },
      { id: 'D', texto: 'É uma etapa sem impacto no desempenho.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'GARGALO: etapa que limita a capacidade total — está onde há acúmulo/espera. É por ali que a melhoria deve começar.',
      incorretas: { B: 'Não é necessariamente a primeira.', C: 'Não é necessariamente a última.', D: 'Tem grande impacto.' },
      conceitoCobrado: 'Gargalo',
      pegadinha: 'Confundir gargalo com primeira ou última etapa.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['gargalo']
  },
  {
    id: 'Q-DID-ADM-11-008',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Mapeamento de processos (AS-IS / TO-BE)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o mapeamento de processos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'AS-IS representa o processo como é hoje; TO-BE representa o processo como deveria ser.' },
      { id: 'B', texto: 'AS-IS representa o futuro; TO-BE representa o presente.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Dispensa o uso de fluxogramas.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'AS-IS: como é hoje. TO-BE: como deveria ser (após a melhoria).',
      incorretas: { B: 'Inverte.', C: 'São distintos.', D: 'O fluxograma é ferramenta típica.' },
      conceitoCobrado: 'Mapeamento de processos',
      pegadinha: 'Inverter AS-IS e TO-BE.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['AS-IS', 'TO-BE', 'mapeamento']
  },

  /* ============================================================
     ADM-12 — Atendimento ao público e relações interpessoais
  ============================================================ */
  {
    id: 'Q-REAL-ADM-12-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-12',
    banca: 'FEPESE', orgao: 'Prefeitura de Florianópolis/SC', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'FEPESE 2026 — Prefeitura de Florianópolis/SC — Assistente Administrativo' },
    subtema: 'Expedição de documentos',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'Assinale a alternativa que descreve corretamente a atividade de expedição de documentos, essencial nas rotinas administrativas de um órgão público:',
    alternativas: [
      { id: 'A', texto: 'Recebimento de documentos enviados por outros órgãos.' },
      { id: 'B', texto: 'Arquivamento de processos já concluídos e encerrados.' },
      { id: 'C', texto: 'Classificação de documentos por ordem cronológica de criação.' },
      { id: 'D', texto: 'Envio formal de correspondências e documentos oficiais aos destinatários.' },
      { id: 'E', texto: 'Digitalização de processos físicos para consulta interna.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'EXPEDIÇÃO é o ENVIO formal de correspondências e documentos oficiais aos destinatários.',
      incorretas: { A: 'Recebimento é outra fase (protocolo).', B: 'Arquivamento é outra fase.', C: 'Classificação é outra fase.', E: 'Digitalização é outra atividade.' },
      conceitoCobrado: 'Expedição de documentos',
      pegadinha: 'Confundir com recebimento, arquivamento ou digitalização.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['expedição']
  },
  {
    id: 'Q-REAL-ADM-12-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-12',
    banca: 'FEPESE', orgao: 'Prefeitura de Florianópolis/SC', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'FEPESE 2026 — Prefeitura de Florianópolis/SC — Assistente Administrativo' },
    subtema: 'Relatórios administrativos',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'A elaboração de relatórios administrativos é uma atribuição comum ao cargo de assistente administrativo. Assinale a alternativa que indica corretamente uma característica fundamental desse tipo de documento:',
    alternativas: [
      { id: 'A', texto: 'Apresentar informações de forma objetiva, organizada e com dados verificáveis.' },
      { id: 'B', texto: 'Expressar opiniões pessoais do servidor sobre os assuntos tratados.' },
      { id: 'C', texto: 'Dispensar a revisão e a aprovação de superior hierárquico.' },
      { id: 'D', texto: 'Incluir informações fictícias para complementar lacunas.' },
      { id: 'E', texto: 'Utilizar linguagem informal e formato livre de padronização.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O relatório administrativo deve ser OBJETIVO, ORGANIZADO e com DADOS VERIFICÁVEIS — é instrumento de informação, não de opinião.',
      incorretas: { B: 'Deve evitar opiniões pessoais.', C: 'Exige revisão e aprovação.', D: 'Não deve conter ficção.', E: 'Linguagem formal e padronizada.' },
      conceitoCobrado: 'Relatórios administrativos',
      pegadinha: 'Admitir opinião pessoal ou ficção.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['relatórios']
  },
  {
    id: 'Q-REAL-ADM-12-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-12',
    banca: 'FEPESE', orgao: 'Prefeitura de Florianópolis/SC', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'FEPESE 2026 — Prefeitura de Florianópolis/SC — Assistente Administrativo' },
    subtema: 'Escuta ativa',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'A escuta ativa é uma habilidade de comunicação essencial para o servidor que realiza atendimento ao público. Assinale a alternativa que define corretamente essa prática:',
    alternativas: [
      { id: 'A', texto: 'Ouvir parcialmente e antecipar a resposta antes do término da fala.' },
      { id: 'B', texto: 'Ouvir com atenção, demonstrar interesse genuíno e compreender a demanda do cidadão.' },
      { id: 'C', texto: 'Interromper o cidadão para agilizar o atendimento.' },
      { id: 'D', texto: 'Responder de forma padronizada sem considerar a situação específica.' },
      { id: 'E', texto: 'Desviar a atenção para outras tarefas durante o atendimento.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ESCUTA ATIVA é ouvir com atenção, demonstrar interesse genuíno e compreender a demanda do cidadão.',
      incorretas: { A: 'Antecipar a resposta é o oposto.', C: 'Interromper é antiético.', D: 'A resposta deve ser contextualizada.', E: 'Desviar a atenção compromete o atendimento.' },
      conceitoCobrado: 'Escuta ativa',
      pegadinha: 'Confundir com resposta padronizada ou interrupção.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['escuta ativa']
  },
  {
    id: 'Q-REAL-ADM-12-004',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-12',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Fechos da redação oficial',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'A redação oficial admite dois fechos para as comunicações: Respeitosamente, empregado nas correspondências dirigidas a autoridades de hierarquia superior; e Atenciosamente, utilizado nas correspondências destinadas a autoridades de mesma hierarquia ou de hierarquia inferior.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. "Respeitosamente" para superior; "Atenciosamente" para mesma hierarquia ou inferior — conforme o Manual de Redação da Presidência da República.',
      incorretas: { B: 'A regra está correta.' },
      conceitoCobrado: 'Fechos da redação oficial',
      pegadinha: 'Inverter os fechos.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['fechos', 'redação oficial']
  },
  {
    id: 'Q-REAL-ADM-12-005',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-12',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Ofício',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'O ofício é o expediente utilizado para a comunicação oficial entre órgãos da Administração Pública e, também, entre a Administração Pública e particulares, observadas as normas de redação oficial.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. O ofício é o documento de comunicação oficial entre órgãos públicos e destes com particulares.',
      incorretas: { B: 'A definição está correta.' },
      conceitoCobrado: 'Ofício',
      pegadinha: 'Restringir o ofício a um único destinatário.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['ofício']
  },
  {
    id: 'Q-REAL-ADM-12-006',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-12',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã/PR', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã/PR — Auxiliar Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Requerimento',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'Sobre os formatos de documentos oficiais, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'O ofício registra, de maneira circunstanciada, os fatos e manifestações ocorridas durante reuniões.' },
      { id: 'B', texto: 'O despacho registra acontecimentos e deliberações de reuniões.' },
      { id: 'C', texto: 'A ata registra determinações administrativas destinadas à execução de providências.' },
      { id: 'D', texto: 'A portaria formaliza solicitações individuais de servidores.' },
      { id: 'E', texto: 'O requerimento formaliza pedido ou solicitação do interessado perante a autoridade ou órgão competente.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'O REQUERIMENTO formaliza pedido ou solicitação do interessado.',
      incorretas: { A: 'Descreve a ATA, não o ofício.', B: 'Descreve a ATA, não o despacho.', C: 'Descreve a PORTARIA, não a ata.', D: 'Descreve o REQUERIMENTO, não a portaria.' },
      conceitoCobrado: 'Documentos oficiais',
      pegadinha: 'Confundir os tipos de documento.',
      comoApareceEmConcurso: 'Cobrança de definição.'
    },
    tags: ['requerimento', 'documentos oficiais']
  },
  {
    id: 'Q-REAL-ADM-12-007',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-12',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã/PR', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã/PR — Auxiliar Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Atendimento telefônico',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'Sobre as regras de operação e encaminhamento de chamadas no atendimento telefônico em órgãos públicos, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Deve-se atender prontamente à chamada, identificar o nome do órgão público, saudar o interlocutor com polidez e buscar auxiliá-lo.' },
      { id: 'B', texto: 'Deve-se deixar as chamadas em espera prolongada sem prestar satisfação.' },
      { id: 'C', texto: 'Deve-se ignorar as ligações externas para focar em digitação de memorandos.' },
      { id: 'D', texto: 'Deve-se usar linguagem excessivamente informal e gírias.' },
      { id: 'E', texto: 'Deve-se transferir imediatamente para a assessoria jurídica antes de triagem.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Atender prontamente, identificar o órgão, saudar com polidez e auxiliar é a conduta adequada.',
      incorretas: { B: 'Espera prolongada sem satisfação é inadequada.', C: 'Ignorar ligações é inadequado.', D: 'Linguagem informal e gírias são inadequadas.', E: 'Transferir sem triagem é inadequado.' },
      conceitoCobrado: 'Atendimento telefônico',
      pegadinha: 'Admitir condutas antiéticas.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['atendimento telefônico']
  },
  {
    id: 'Q-DID-ADM-12-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-12',
    subtema: 'Cidadão como usuário de direitos',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a natureza da relação entre o servidor público e o cidadão no atendimento, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O cidadão é "cliente" do Estado, e o atendimento é uma mercadoria.' },
      { id: 'B', texto: 'O cidadão é usuário de DIREITOS — o serviço é dever do Estado, não favor.' },
      { id: 'C', texto: 'O cidadão não tem direitos no atendimento público.' },
      { id: 'D', texto: 'O atendimento público segue a mesma lógica do privado, com foco no consumidor.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O cidadão é USUÁRIO DE DIREITOS — o serviço é dever do Estado, regido pelo LIMPE. Não é cliente nem favor.',
      incorretas: { A: 'Cidadão não é cliente.', C: 'Tem direitos.', D: 'A lógica é de cidadania, não de consumo.' },
      conceitoCobrado: 'Cidadão como usuário de direitos',
      pegadinha: 'Tratar o cidadão como cliente.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['cidadania', 'atendimento público']
  },

  /* ============================================================
     AP-13 — Conceitos fundamentais de Administração Pública
  ============================================================ */
  {
    id: 'Q-DID-AP-13-001',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Sentidos objetivo x subjetivo',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre os sentidos objetivo e subjetivo da Administração Pública, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Objetivo designa a atividade administrativa (o que se faz); subjetivo designa o conjunto de órgãos e pessoas (quem faz).' },
      { id: 'B', texto: 'Objetivo designa os órgãos; subjetivo, a atividade.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Ambos designam apenas o Poder Executivo.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'OBJETIVO (material): a ATIVIDADE. SUBJETIVO (formal/orgânico): os ÓRGÃOS E PESSOAS.',
      incorretas: { B: 'Inverte.', C: 'São distintos.', D: 'Não se confundem com "restrito".' },
      conceitoCobrado: 'Sentidos da Administração Pública',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['sentido objetivo', 'sentido subjetivo']
  },
  {
    id: 'Q-DID-AP-13-002',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Sentido amplo x restrito',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre os sentidos amplo e restrito de Administração Pública, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Amplo: apenas o Executivo; restrito: os três Poderes.' },
      { id: 'B', texto: 'Amplo: os três Poderes quando exercem função administrativa + órgãos auxiliares; restrito: apenas o Executivo.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Restrito: os três Poderes.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AMPLO: os três Poderes em função administrativa + órgãos auxiliares. RESTRITO: apenas o Executivo.',
      incorretas: { A: 'Inverte.', C: 'São distintos.', D: 'Restrito = Executivo.' },
      conceitoCobrado: 'Sentido amplo x restrito',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['sentido amplo', 'sentido restrito']
  },
  {
    id: 'Q-DID-AP-13-003',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Administração direta x indireta',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a Administração direta e a indireta, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Direta: entes federativos e órgãos (sem personalidade própria); indireta: autarquias, fundações, empresas públicas e SEM (com personalidade própria).' },
      { id: 'B', texto: 'Direta: entidades com personalidade própria; indireta: entes federativos.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Ambas são compostas apenas por órgãos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'DIRETA: entes + órgãos (sem personalidade). INDIRETA: entidades (com personalidade).',
      incorretas: { B: 'Inverte.', C: 'São distintas.', D: 'A indireta tem entidades, não apenas órgãos.' },
      conceitoCobrado: 'Administração direta x indireta',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['administração direta', 'indireta']
  },
  {
    id: 'Q-DID-AP-13-004',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Órgãos x entidades',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre órgãos e entidades, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Órgãos têm personalidade própria; entidades não.' },
      { id: 'B', texto: 'Órgãos NÃO têm personalidade própria; entidades têm personalidade própria.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Ambos integram apenas a Administração Indireta.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ÓRGÃOS: sem personalidade própria. ENTIDADES: com personalidade própria (autarquias, fundações, EP, SEM).',
      incorretas: { A: 'Inverte.', C: 'São distintos.', D: 'Órgãos integram a direta; entidades, a indireta.' },
      conceitoCobrado: 'Órgãos x entidades',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['órgão', 'entidade']
  },
  {
    id: 'Q-DID-AP-13-005',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Interesse público x interesse do Estado',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a distinção entre interesse público e interesse do Estado, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Interesse público é o da COLETIVIDADE; interesse do Estado é o da máquina administrativa — não se confundem, e o Estado é instrumento para realizar o interesse público.' },
      { id: 'C', texto: 'Interesse do Estado é o da coletividade.' },
      { id: 'D', texto: 'Só existe interesse do Estado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'INTERESSE PÚBLICO: coletividade. INTERESSE DO ESTADO: máquina administrativa. O Estado é meio, não fim.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Existe o interesse público.' },
      conceitoCobrado: 'Interesse público x interesse do Estado',
      pegadinha: 'Confundir os dois.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['interesse público', 'interesse do Estado']
  },
  {
    id: 'Q-DID-AP-13-006',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Supremacia x indisponibilidade',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a supremacia e a indisponibilidade do interesse público, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Supremacia fundamenta prerrogativas; indisponibilidade fundamenta restrições.' },
      { id: 'B', texto: 'Ambas fundamentam prerrogativas.' },
      { id: 'C', texto: 'Ambas fundamentam restrições.' },
      { id: 'D', texto: 'Não existem na CF/88.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'SUPREMACIA: prerrogativas (desapropriação, cláusulas exorbitantes). INDISPONIBILIDADE: restrições (só age conforme a lei).',
      incorretas: { B: 'Incompleta.', C: 'Incompleta.', D: 'São pilares do regime jurídico-administrativo.' },
      conceitoCobrado: 'Supremacia x indisponibilidade',
      pegadinha: 'Inverter as funções.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['supremacia', 'indisponibilidade']
  },
  {
    id: 'Q-DID-AP-13-007',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Teoria do Órgão',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a Teoria do Órgão (ou da imputação), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A conduta do agente público é imputada à pessoa jurídica a que pertence o órgão.' },
      { id: 'B', texto: 'A conduta do agente é imputada a ele próprio.' },
      { id: 'C', texto: 'O órgão tem personalidade própria.' },
      { id: 'D', texto: 'A vítima deve acionar o agente diretamente.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Pela Teoria do Órgão, a conduta do agente é imputada à PESSOA JURÍDICA. A vítima aciona o Estado; o Estado, depois, pode regressar contra o agente.',
      incorretas: { B: 'A imputação é ao Estado.', C: 'Órgão não tem personalidade.', D: 'A vítima aciona o Estado.' },
      conceitoCobrado: 'Teoria do Órgão',
      pegadinha: 'Achar que a vítima aciona o agente diretamente.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['teoria do órgão', 'imputação']
  },
  {
    id: 'Q-DID-AP-13-008',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Aplicação em cenário',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma prefeitura (a) emite alvará; (b) cria autarquia para transporte; (c) capacita fiscais; (d) compra computadores. Sobre essas situações, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: '(a) é atividade administrativa (sentido objetivo); (b) é criação de entidade da indireta; (c) e (d) são atos de gestão interna da direta.' },
      { id: 'B', texto: '(a) e (b) são Administração Direta; (c) e (d) são indireta.' },
      { id: 'C', texto: 'Todas ocorrem na indireta.' },
      { id: 'D', texto: '(b) é Administração Direta, pois a autarquia integra a Prefeitura.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: '(a) atividade (sentido objetivo); (b) criação de entidade da indireta; (c) e (d) atos de gestão interna da direta.',
      incorretas: { B: 'Inverte.', C: 'Todas na indireta? Não.', D: 'Autarquia é indireta.' },
      conceitoCobrado: 'Aplicação dos conceitos',
      pegadinha: 'Classificar a autarquia como direta.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['direta', 'indireta', 'sentido objetivo']
  },

  /* ============================================================
     AP-14 — Modelos de Administração Pública
  ============================================================ */
  {
    id: 'Q-REAL-AP-14-001',
    tipo: 'REAL', area: 'AP', moduloId: 'AP-14',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Modelos de gestão pública',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma organização pública apresentou, ao longo de sua trajetória, as seguintes práticas: I. ocupação de cargos estratégicos por relações de confiança pessoal, com uso da estrutura administrativa para interesses particulares; II. atuação orientada por regulamentos detalhados, com ênfase na formalização de procedimentos e na observância rigorosa da hierarquia; III. gestão com contratos de desempenho, indicadores de eficiência, descentralização e avaliação por resultados; IV. ampliação do controle sobre os agentes por meio da padronização de rotinas e definição de competências formais, buscando previsibilidade. A correta associação entre as situações e os modelos é:',
    alternativas: [
      { id: 'A', texto: 'I e II: patrimonialista; III e IV: gerencial.' },
      { id: 'B', texto: 'I: patrimonialista; II e IV: burocrático; III: gerencial.' },
      { id: 'C', texto: 'I e III: patrimonialista; II e IV: burocrático.' },
      { id: 'D', texto: 'II: patrimonialista; I e IV: burocrático; III: gerencial.' },
      { id: 'E', texto: 'I: burocrático; II: gerencial; III e IV: patrimonialista.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'I = PATRIMONIALISTA (confusão público/privado, pessoalidade). II e IV = BUROCRÁTICO (regulamentos, hierarquia, padronização). III = GERENCIAL (contratos de desempenho, indicadores, resultados).',
      incorretas: { A: 'Inverte II e III.', C: 'III não é patrimonialista.', D: 'II não é patrimonialista.', E: 'Inverte.' },
      conceitoCobrado: 'Modelos de Administração Pública',
      pegadinha: 'Confundir burocrático com gerencial e patrimonialista com burocrático.',
      comoApareceEmConcurso: 'Associação de práticas a modelos.'
    },
    tags: ['patrimonialismo', 'burocracia', 'gerencial']
  },
  {
    id: 'Q-REAL-AP-14-002',
    tipo: 'REAL', area: 'AP', moduloId: 'AP-14',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Modelos de gestão pública — associação',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre os modelos de gestão pública e suas características predominantes, assinale a alternativa que apresenta a correta associação:',
    alternativas: [
      { id: 'A', texto: 'I e II: patrimonialista; III e IV: gerencial.' },
      { id: 'B', texto: 'I: patrimonialista; II e IV: burocrático; III: gerencial.' },
      { id: 'C', texto: 'I e III: patrimonialista; II e IV: burocrático.' },
      { id: 'D', texto: 'II: patrimonialista; I e IV: burocrático; III: gerencial.' },
      { id: 'E', texto: 'I: burocrático; II: gerencial; III e IV: patrimonialista.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'I = patrimonialista; II e IV = burocrático; III = gerencial. A alternativa B é a única compatível com a classificação.',
      incorretas: { A: 'Inverte II e III.', C: 'III não é patrimonialista.', D: 'II não é patrimonialista.', E: 'Inverte.' },
      conceitoCobrado: 'Modelos de Administração Pública',
      pegadinha: 'Confundir as práticas e seus modelos.',
      comoApareceEmConcurso: 'Associação.'
    },
    tags: ['patrimonialismo', 'burocracia', 'gerencial']
  },
  {
    id: 'Q-DID-AP-14-001',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-14',
    subtema: 'Patrimonialismo',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Sobre o patrimonialismo, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É marcado pela confusão entre o público e o privado e pela pessoalidade na ocupação de cargos.' },
      { id: 'B', texto: 'É marcado pela impessoalidade e pela meritocracia.' },
      { id: 'C', texto: 'É o modelo atual da Administração Pública brasileira.' },
      { id: 'D', texto: 'Surgiu após a Reforma de 1995.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O PATRIMONIALISMO é o modelo pré-burocrático: confusão público/privado, pessoalidade, nepotismo.',
      incorretas: { B: 'Descreve a burocracia.', C: 'Foi superado (embora práticas persistam).', D: 'É anterior.' },
      conceitoCobrado: 'Patrimonialismo',
      pegadinha: 'Confundir com burocracia.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['patrimonialismo']
  },
  {
    id: 'Q-DID-AP-14-002',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-14',
    subtema: 'Burocracia',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a burocracia weberiana, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Caracteriza-se pela impessoalidade, meritocracia, formalismo, hierarquia e regras escritas.' },
      { id: 'B', texto: 'Caracteriza-se pela confusão público/privado.' },
      { id: 'C', texto: 'Foi introduzida no Brasil pela Reforma de 1995.' },
      { id: 'D', texto: 'Tem como foco exclusivo os resultados.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A BUROCRACIA tem como marcas: impessoalidade, meritocracia, formalismo, hierarquia e regras escritas.',
      incorretas: { B: 'Descreve o patrimonialismo.', C: 'Foi introduzida em 1936 (Reforma do DASP).', D: 'Foco em resultados é gerencial.' },
      conceitoCobrado: 'Burocracia',
      pegadinha: 'Confundir com patrimonialismo ou gerencial.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['burocracia', 'Weber']
  },
  {
    id: 'Q-DID-AP-14-003',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-14',
    subtema: 'Administração gerencial',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a administração gerencial (nova gestão pública), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Foca em resultados, eficiência, qualidade e satisfação do cidadão, com descentralização e avaliação de desempenho.' },
      { id: 'B', texto: 'Foca em procedimentos, formalismo e hierarquia rígida.' },
      { id: 'C', texto: 'Foi introduzida no Brasil pela Reforma de 1936.' },
      { id: 'D', texto: 'Substituiu completamente a burocracia.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A GERENCIAL foca em RESULTADOS, eficiência, qualidade, satisfação do cidadão, com descentralização e avaliação.',
      incorretas: { B: 'Descreve a burocracia.', C: 'Foi introduzida pela Reforma de 1995 (Bresser-Pereira) e EC 19/1998.', D: 'Não substituiu por completo — convive com práticas burocráticas.' },
      conceitoCobrado: 'Administração gerencial',
      pegadinha: 'Confundir com burocracia ou dizer que substituiu por completo.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['gerencial', 'nova gestão pública']
  },
  {
    id: 'Q-DID-AP-14-004',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-14',
    subtema: 'Reforma de 1936',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A Reforma Administrativa de 1936, no Brasil, está associada:',
    alternativas: [
      { id: 'A', texto: 'À introdução da burocracia weberiana, com a criação do DASP.' },
      { id: 'B', texto: 'À introdução da administração gerencial.' },
      { id: 'C', texto: 'À criação do CNJ.' },
      { id: 'D', texto: 'À reforma tributária.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A Reforma de 1936 introduziu a BUROCRACIA weberiana no Brasil, com a criação do DASP (Departamento Administrativo do Serviço Público).',
      incorretas: { B: 'A gerencial é de 1995.', C: 'CNJ foi criado pela EC 45/2004.', D: 'Reforma tributária é outra.' },
      conceitoCobrado: 'Reforma de 1936',
      pegadinha: 'Confundir com a Reforma de 1995.',
      comoApareceEmConcurso: 'Cobrança de associação.'
    },
    tags: ['reforma 1936', 'DASP']
  },
  {
    id: 'Q-DID-AP-14-005',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-14',
    subtema: 'Reforma de 1995 / EC 19',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a Reforma Administrativa de 1995 (Plano Diretor da Reforma do Aparelho do Estado) e a EC 19/1998, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Introduziram a administração gerencial no Brasil, com foco em resultados, descentralização e avaliação de desempenho; a EC 19/1998 inseriu a eficiência no caput do art. 37.' },
      { id: 'B', texto: 'Introduziram a burocracia weberiana no Brasil.' },
      { id: 'C', texto: 'Eliminaram o concurso público.' },
      { id: 'D', texto: 'Criaram o CNJ.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A Reforma de 1995 (Bresser-Pereira) e a EC 19/1998 introduziram a GERENCIAL: foco em resultados, descentralização, avaliação de desempenho; e a EC 19/1998 inseriu a EFICIÊNCIA no art. 37.',
      incorretas: { B: 'A burocracia foi introduzida em 1936.', C: 'O concurso foi mantido.', D: 'O CNJ foi criado pela EC 45/2004.' },
      conceitoCobrado: 'Reforma de 1995 / EC 19',
      pegadinha: 'Confundir com a Reforma de 1936 ou com a EC 45.',
      comoApareceEmConcurso: 'Cobrança de associação.'
    },
    tags: ['reforma 1995', 'EC 19/1998', 'gerencial']
  },
  {
    id: 'Q-DID-AP-14-006',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-14',
    subtema: 'Comparação entre os modelos',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a comparação entre patrimonialismo, burocracia e administração gerencial, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Patrimonialismo foca em pessoalidade; burocracia, em procedimentos; gerencial, em resultados.' },
      { id: 'B', texto: 'Patrimonialismo foca em resultados; burocracia, em pessoalidade; gerencial, em procedimentos.' },
      { id: 'C', texto: 'Todos os três focam em procedimentos.' },
      { id: 'D', texto: 'Todos os três focam em resultados.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'PATRIMONIALISMO: pessoalidade. BUROCRACIA: procedimentos. GERENCIAL: resultados.',
      incorretas: { B: 'Inverte.', C: 'Só a burocracia foca em procedimentos.', D: 'Só a gerencial foca em resultados.' },
      conceitoCobrado: 'Comparação entre os modelos',
      pegadinha: 'Inverter os focos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['patrimonialismo', 'burocracia', 'gerencial']
  },
  /* ============================================================
     DA-15 — Princípios da Administração Pública
  ============================================================ */
  {
    id: 'Q-REAL-DA-15-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-15',
    banca: 'FEPESE', orgao: 'Prefeitura de Florianópolis/SC', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'FEPESE 2026 — Prefeitura de Florianópolis/SC — Assistente Administrativo' },
    subtema: 'Princípio da publicidade',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'O princípio constitucional que determina a divulgação oficial dos atos praticados pela Administração Pública, como forma de garantir transparência e controle social, é denominado princípio da:',
    alternativas: [
      { id: 'A', texto: 'Legalidade.' },
      { id: 'B', texto: 'Eficiência.' },
      { id: 'C', texto: 'Impessoalidade.' },
      { id: 'D', texto: 'Moralidade.' },
      { id: 'E', texto: 'Publicidade.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A divulgação oficial dos atos para transparência e controle social é o princípio da PUBLICIDADE.',
      incorretas: { A: 'Legalidade trata da conformidade com a lei.', B: 'Eficiência trata de resultados.', C: 'Impessoalidade trata da objetividade.', D: 'Moralidade trata da ética.' },
      conceitoCobrado: 'Princípio da publicidade',
      pegadinha: 'Confundir com transparência (que é uma consequência da publicidade).',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['publicidade', 'LIMPE']
  },
  {
    id: 'Q-REAL-DA-15-002',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-15',
    banca: 'FEPESE', orgao: 'Prefeitura de Florianópolis/SC', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'FEPESE 2026 — Prefeitura de Florianópolis/SC — Assistente Administrativo' },
    subtema: 'Princípio da eficiência',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'O princípio da eficiência, previsto na Constituição Federal, orienta a Administração Pública a buscar os melhores resultados na prestação dos serviços públicos. Assinale a alternativa que indica corretamente o significado prático desse princípio:',
    alternativas: [
      { id: 'A', texto: 'Autorizar o gestor a agir fora dos limites legais para obter resultados.' },
      { id: 'B', texto: 'Permitir a contratação de servidores sem concurso em situações rotineiras.' },
      { id: 'C', texto: 'Prestar serviços com qualidade, rapidez e aproveitamento racional dos recursos.' },
      { id: 'D', texto: 'Substituir o planejamento pela improvisação para agilizar processos.' },
      { id: 'E', texto: 'Eliminar controles internos para desburocratizar a gestão pública.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'EFICIÊNCIA = prestar serviços com qualidade, rapidez e aproveitamento racional dos recursos.',
      incorretas: { A: 'A eficiência não autoriza agir fora da lei.', B: 'Concurso público permanece obrigatório.', D: 'A eficiência não dispensa o planejamento.', E: 'A eficiência não elimina os controles.' },
      conceitoCobrado: 'Princípio da eficiência',
      pegadinha: 'Confundir eficiência com dispensa de legalidade, concurso ou controle.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['eficiência', 'LIMPE']
  },
  {
    id: 'Q-REAL-DA-15-003',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-15',
    banca: 'Avança SP', orgao: 'Autarquia Municipal de Saúde de Itapecerica da Serra/SP', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Avança SP 2026 — Autarquia Municipal de Saúde de Itapecerica da Serra/SP — Assistente Administrativo' },
    subtema: 'Impessoalidade x publicidade (promoção pessoal)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Um servidor público, ao atender usuários externos, decide priorizar um amigo em detrimento dos demais que aguardavam na fila regular. Além disso, solicita que colegas divulguem em redes sociais institucionais uma ação administrativa destacando seu nome e imagem como responsável direto pelo serviço prestado. Sobre a conduta e os princípios da Administração Pública, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A conduta é adequada, pois o princípio da eficiência permite flexibilizar a ordem de atendimento.' },
      { id: 'B', texto: 'A priorização do amigo fere a legalidade, e a divulgação da imagem é permitida pela publicidade.' },
      { id: 'C', texto: 'As duas condutas violam a impessoalidade, pois demonstram favorecimento pessoal e promoção individual no âmbito da Administração.' },
      { id: 'D', texto: 'A situação viola apenas a moralidade, sem impacto sobre outros princípios.' },
      { id: 'E', texto: 'Nenhuma das condutas viola princípios administrativos, pois o servidor tem discricionariedade.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'As duas condutas violam a IMPESSOALIDADE: o favorecimento pessoal (amigo na fila) e a promoção pessoal (art. 37, §1º, CF).',
      incorretas: { A: 'A eficiência não autoriza favorecimento.', B: 'A promoção pessoal é vedada.', D: 'Além da moralidade, a impessoalidade também é violada.', E: 'A discricionariedade não autoriza favorecimento nem promoção pessoal.' },
      conceitoCobrado: 'Impessoalidade (objetividade e vedação de promoção pessoal)',
      pegadinha: 'Reduzir a violação a um único princípio.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['impessoalidade', 'promoção pessoal']
  },
  {
    id: 'Q-REAL-DA-15-004',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-15',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã/PR', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã/PR — Auxiliar Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'LIMPE (art. 37, caput)',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'O art. 37, caput, da Constituição estabelece que a Administração Pública obedecerá a quais princípios?',
    alternativas: [
      { id: 'A', texto: 'Legalidade, hierarquia, autonomia, publicidade e eficiência.' },
      { id: 'B', texto: 'Legalidade, impessoalidade, economicidade, publicidade e eficiência.' },
      { id: 'C', texto: 'Moralidade, autonomia, transparência, eficiência e hierarquia.' },
      { id: 'D', texto: 'Impessoalidade, publicidade, autonomia, legalidade e razoabilidade.' },
      { id: 'E', texto: 'Legalidade, impessoalidade, moralidade, publicidade e eficiência.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'São os princípios do LIMPE: LEGALIDADE, IMPESSOALIDADE, MORALIDADE, PUBLICIDADE e EFICIÊNCIA.',
      incorretas: { A: 'Hierarquia e autonomia não estão no caput.', B: 'Economicidade não está no caput.', C: 'Autonomia, transparência e hierarquia não estão no caput.', D: 'Autonomia e razoabilidade não estão no caput.' },
      conceitoCobrado: 'LIMPE',
      pegadinha: 'Incluir princípios implícitos ou administrativos no rol expresso.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['LIMPE', 'art. 37']
  },
  {
    id: 'Q-DID-DA-15-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-15',
    subtema: 'Legalidade administrativa x legalidade do particular',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o princípio da legalidade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A legalidade administrativa é idêntica à do particular: ambos podem fazer tudo o que a lei não proíbe.' },
      { id: 'B', texto: 'A legalidade do particular permite fazer tudo o que a lei não proíbe; a legalidade administrativa exige que a Administração só faça o que a lei autoriza ou determina.' },
      { id: 'C', texto: 'A Administração pode fazer tudo o que a lei não proíbe, desde que motive o ato.' },
      { id: 'D', texto: 'O particular só pode fazer o que a lei autoriza, e a Administração pode fazer tudo o que a lei não proíbe.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'LEGALIDADE DO PARTICULAR: pode tudo o que a lei não proíbe. LEGALIDADE ADMINISTRATIVA: só pode o que a lei autoriza ou determina.',
      incorretas: { A: 'São diferentes.', C: 'A Administração não tem autonomia de vontade.', D: 'Inverte.' },
      conceitoCobrado: 'Legalidade administrativa x do particular',
      pegadinha: 'Inverter ou igualar.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['legalidade']
  },
  {
    id: 'Q-DID-DA-15-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-15',
    subtema: 'Moralidade',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o princípio da moralidade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Basta o cumprimento formal da lei.' },
      { id: 'B', texto: 'Exige conduta ética, probidade e boa-fé — além do cumprimento formal da lei. Um ato pode ser legal e imoral.' },
      { id: 'C', texto: 'É sinônimo de legalidade.' },
      { id: 'D', texto: 'Não se aplica a atos administrativos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A MORALIDADE exige ética, probidade e boa-fé — vai além da legalidade formal.',
      incorretas: { A: 'A moralidade exige mais que a legalidade.', C: 'São princípios distintos.', D: 'Aplica-se a toda atuação administrativa.' },
      conceitoCobrado: 'Moralidade',
      pegadinha: 'Reduzir a moralidade ao cumprimento da lei.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['moralidade']
  },
  {
    id: 'Q-DID-DA-15-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-15',
    subtema: 'Autotutela x tutela',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a autotutela e a tutela, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Autotutela: a Administração revê seus próprios atos. Tutela: supervisão da Administração Direta sobre a Indireta.' },
      { id: 'C', texto: 'Autotutela é a supervisão da indireta; tutela é a revisão dos próprios atos.' },
      { id: 'D', texto: 'Ambas são exercidas apenas pelo Judiciário.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AUTOTUTELA: revisão dos PRÓPRIOS atos (Súmulas 346 e 473 do STF). TUTELA: supervisão da DIRETA sobre a INDIRETA (controle finalístico).',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'São funções administrativas.' },
      conceitoCobrado: 'Autotutela x tutela',
      pegadinha: 'Confundir os institutos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['autotutela', 'tutela']
  },
  {
    id: 'Q-DID-DA-15-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-15',
    subtema: 'Razoabilidade x proporcionalidade',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a razoabilidade e a proporcionalidade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Razoabilidade é a adequação lógica entre meios e fins; proporcionalidade analisa adequação, necessidade e proporcionalidade em sentido estrito.' },
      { id: 'C', texto: 'Proporcionalidade é apenas a adequação lógica.' },
      { id: 'D', texto: 'Não se aplicam à Administração Pública.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'RAZOABILIDADE: adequação meios-fins. PROPORCIONALIDADE: três planos — adequação, necessidade e proporcionalidade em sentido estrito.',
      incorretas: { A: 'São distintos (a proporcionalidade é mais analítica).', C: 'A proporcionalidade vai além da adequação.', D: 'Aplicam-se.' },
      conceitoCobrado: 'Razoabilidade x proporcionalidade',
      pegadinha: 'Igualar ou reduzir a proporcionalidade a um único plano.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['razoabilidade', 'proporcionalidade']
  },

  /* ============================================================
     DA-16 — Organização da Administração Pública
  ============================================================ */
  {
    id: 'Q-REAL-DA-16-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-16',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Administração Indireta — características',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A CODERN é uma entidade vinculada à União e responsável pela administração de portos no estado do Rio Grande do Norte. Considerando sua natureza jurídica e sua posição na estrutura da Administração Pública brasileira, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Integra a Administração Pública Direta, pois presta serviços públicos essenciais e está subordinada hierarquicamente à União.' },
      { id: 'B', texto: 'Integra a Administração Pública Indireta, possui personalidade jurídica própria, patrimônio próprio e atua de forma descentralizada em relação à União.' },
      { id: 'C', texto: 'Integra a Administração Pública Indireta, porém não possui autonomia administrativa nem patrimônio próprio, estando subordinada hierarquicamente à União.' },
      { id: 'D', texto: 'Integra a Administração Pública Direta, pois executa atividades delegadas pela União, ainda que possua personalidade jurídica própria.' },
      { id: 'E', texto: 'Integra a Administração Pública Indireta, mas não possui personalidade jurídica própria, atuando apenas como órgão da União.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A CODERN é entidade da Administração INDIRETA — tem personalidade jurídica própria, patrimônio próprio e atua de forma descentralizada. Não é subordinada hierarquicamente à União (há tutela, não hierarquia).',
      incorretas: { A: 'Administração Indireta, não direta.', C: 'Tem personalidade e patrimônio próprios.', D: 'Administração Indireta.', E: 'Tem personalidade jurídica própria.' },
      conceitoCobrado: 'Administração Indireta',
      pegadinha: 'Confundir descentralização com hierarquia.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['administração indireta', 'autarquia']
  },
  {
    id: 'Q-REAL-DA-16-002',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-16',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Administração Pública Direta — características',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Com base em Rossi (2020), sobre as características da Administração Pública direta, assinale a alternativa INCORRETA:',
    alternativas: [
      { id: 'A', texto: 'É composta pelos seguintes entes políticos: União, Estados, Distrito Federal e Municípios.' },
      { id: 'B', texto: 'Possui competências legislativas e administrativas.' },
      { id: 'C', texto: 'Seu quadro de pessoal é composto por servidores públicos.' },
      { id: 'D', texto: 'Os entes políticos da Administração Pública direta são pessoas jurídicas de direito privado.' },
      { id: 'E', texto: 'As entidades da Administração Pública direta gozam de privilégios tributários, ou seja, têm imunidade recíproca para impostos.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está INCORRETA: os entes políticos da Administração Direta são pessoas jurídicas de DIREITO PÚBLICO, não privado.',
      incorretas: { A: 'Correta.', B: 'Correta.', C: 'Correta.', E: 'Correta.' },
      conceitoCobrado: 'Administração Direta',
      pegadinha: 'Inverter a natureza jurídica.',
      comoApareceEmConcurso: 'Cobrança de INCORRETA.'
    },
    tags: ['administração direta']
  },
  {
    id: 'Q-REAL-DA-16-003',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-16',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Agências reguladoras',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Segundo Rossi (2020), entre os entes integrantes da Administração Pública indireta estão as autarquias de regime especial responsáveis pela regulamentação, pelo controle e pela fiscalização de serviços públicos, atividades e bens transferidos ao setor privado. Essas autarquias se denominam:',
    alternativas: [
      { id: 'A', texto: 'Agências executoras.' },
      { id: 'B', texto: 'Agências reguladoras.' },
      { id: 'C', texto: 'Agências fundacionais.' },
      { id: 'D', texto: 'Fundações públicas.' },
      { id: 'E', texto: 'Conselhos profissionais.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AGÊNCIAS REGULADORAS são autarquias de regime especial que regulamentam, controlam e fiscalizam serviços públicos transferidos ao setor privado.',
      incorretas: { A: 'Não é a denominação correta.', C: 'Não existe essa categoria.', D: 'Fundações são outra categoria.', E: 'Conselhos são outra categoria.' },
      conceitoCobrado: 'Agências reguladoras',
      pegadinha: 'Confundir com agências executivas (categoria distinta).',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['agências reguladoras']
  },
  {
    id: 'Q-REAL-DA-16-004',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-16',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Autarquia x descentralização x desconcentração',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'A criação de uma autarquia por lei específica, para a execução descentralizada de atividade típica do Estado, caracteriza desconcentração administrativa, pois implica a distribuição interna de competências no âmbito do ente federativo.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. A criação de autarquia é DESCENTRALIZAÇÃO (criação de entidade com personalidade própria), não desconcentração (que ocorre dentro da mesma pessoa jurídica, entre órgãos).',
      incorretas: { A: 'A afirmação confunde os institutos.' },
      conceitoCobrado: 'Descentralização x desconcentração',
      pegadinha: 'Confundir os institutos.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['descentralização', 'desconcentração', 'autarquia']
  },
  {
    id: 'Q-DID-DA-16-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-16',
    subtema: 'Autarquia x fundação x EP x SEM',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre as entidades da Administração Indireta, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Empresa pública é sempre S.A.; SEM pode ser qualquer forma.' },
      { id: 'B', texto: 'Autarquia é direito público; fundação pode ser de direito público ou privado; empresa pública tem 100% de capital público; SEM tem capital misto com maioria pública, sempre S.A.' },
      { id: 'C', texto: 'Autarquia é direito privado; EP é direito público.' },
      { id: 'D', texto: 'SEM tem 100% de capital público.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AUTARQUIA: direito público. FUNDAÇÃO: direito público ou privado. EP: 100% público, qualquer forma. SEM: misto com maioria pública, sempre S.A.',
      incorretas: { A: 'Inverte.', C: 'Inverte.', D: 'SEM tem capital misto.' },
      conceitoCobrado: 'Entidades da Administração Indireta',
      pegadinha: 'Inverter as naturezas ou as formas societárias.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['autarquia', 'fundação', 'empresa pública', 'SEM']
  },
  {
    id: 'Q-DID-DA-16-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-16',
    subtema: 'Descentralização x desconcentração',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre descentralização e desconcentração, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Descentralização é sempre interna; desconcentração é sempre externa.' },
      { id: 'B', texto: 'Descentralização envolve outra pessoa (cria entidade ou delega a particular); desconcentração é dentro da mesma pessoa, entre órgãos.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'A desconcentração cria nova pessoa jurídica.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'DESCENTRALIZAÇÃO: para OUTRA pessoa (outorga — autarquia/fundação; delegação — particular). DESCONCENTRAÇÃO: dentro da MESMA pessoa (órgãos).',
      incorretas: { A: 'Inverte.', C: 'São distintos.', D: 'A desconcentração NÃO cria nova pessoa jurídica.' },
      conceitoCobrado: 'Descentralização x desconcentração',
      pegadinha: 'Achar que desconcentração cria pessoa jurídica.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['descentralização', 'desconcentração']
  },
  {
    id: 'Q-DID-DA-16-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-16',
    subtema: 'Centralização x descentralização',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre centralização e descentralização, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Centralização: o ente executa diretamente; descentralização: o ente repassa a execução a outra pessoa.' },
      { id: 'C', texto: 'Centralização repassa a execução.' },
      { id: 'D', texto: 'Descentralização concentra as decisões.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'CENTRALIZAÇÃO: o próprio ente executa. DESCENTRALIZAÇÃO: repassa a outra pessoa (outorga ou delegação).',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Inverte.' },
      conceitoCobrado: 'Centralização x descentralização',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['centralização', 'descentralização']
  },
  {
    id: 'Q-DID-DA-16-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-16',
    subtema: 'Teoria do Órgão',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a Teoria do Órgão (ou da imputação), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A conduta do agente é imputada a ele próprio.' },
      { id: 'B', texto: 'A conduta do agente é imputada à pessoa jurídica a que pertence o órgão.' },
      { id: 'C', texto: 'O órgão tem personalidade própria.' },
      { id: 'D', texto: 'A vítima deve acionar o agente diretamente.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Pela Teoria do Órgão, a conduta do agente é imputada à PESSOA JURÍDICA. A vítima aciona o Estado.',
      incorretas: { A: 'Imputa-se ao Estado.', C: 'Órgão não tem personalidade.', D: 'A vítima aciona o Estado.' },
      conceitoCobrado: 'Teoria do Órgão',
      pegadinha: 'Achar que a vítima aciona o agente diretamente.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['teoria do órgão']
  },

  /* ============================================================
     DA-17 — Agentes públicos
  ============================================================ */
  {
    id: 'Q-REAL-DA-17-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-17',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Provimento (movimentação x retorno)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'A Lei Complementar nº 133/1985 (Estatuto dos Funcionários Públicos do Município de Porto Alegre), em seu art. 11 e incisos, classifica determinadas formas de provimento dos cargos efetivos quanto à movimentação interna do funcionário público, enquanto outras constituem formas de retorno ao exercício de cargo. Assinale a alternativa que apresenta uma forma de provimento correspondente à movimentação interna e uma correspondente ao retorno ao exercício, respectivamente:',
    alternativas: [
      { id: 'A', texto: 'Promoção e reintegração.' },
      { id: 'B', texto: 'Nomeação e readaptação.' },
      { id: 'C', texto: 'Reintegração e aproveitamento.' },
      { id: 'D', texto: 'Transferência e readaptação.' },
      { id: 'E', texto: 'Promoção e readaptação.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A PROMOÇÃO é forma de provimento por movimentação interna (dentro da carreira). A REINTEGRAÇÃO é forma de provimento por retorno ao exercício (o servidor estável retorna ao cargo após demissão ilegal).',
      incorretas: { B: 'Nomeação é provimento originário.', C: 'Reintegração é retorno; aproveitamento é retorno — falta a movimentação interna.', D: 'Transferência (não é provimento derivado após EC 19/1998) e readaptação (retorno).', E: 'Readaptação é retorno.' },
      conceitoCobrado: 'Formas de provimento',
      pegadinha: 'Confundir movimentação interna com retorno ao exercício.',
      comoApareceEmConcurso: 'Associação de formas.'
    },
    tags: ['provimento', 'promoção', 'reintegração']
  },
  {
    id: 'Q-REAL-DA-17-002',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-17',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã/PR', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã/PR — Auxiliar Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Cedência de servidor',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'João é servidor público efetivo do Município de Ivaiporã - PR. A Administração estuda cedê-lo temporariamente para atuar em órgão público estadual, a fim de auxiliar em projeto de interesse mútuo. Simultaneamente, analisa-se pedido para cedência de outros servidores municipais a uma empresa particular com fins lucrativos. Considerando as diretrizes da Lei Orgânica do Município, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A transferência temporária de João pode ser realizada de forma unilateral pela chefia, dispensando convênio.' },
      { id: 'B', texto: 'A legislação municipal proíbe absolutamente a cedência para outros entes, restringindo-a aos Poderes do próprio Município.' },
      { id: 'C', texto: 'A cedência para empresa particular com fins lucrativos é autorizada, desde que haja concordância do servidor e termo de ajuste.' },
      { id: 'D', texto: 'A anuência do servidor é o único requisito para a cedência, dispensando convênios.' },
      { id: 'E', texto: 'A cedência de João para o órgão estadual exige manifestação expressa de anuência e deve ser formalizada obrigatoriamente por meio de convênio.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A cedência exige anuência expressa do servidor e formalização por convênio (ou instrumento congênere), em regra, apenas para órgãos públicos — não para empresas privadas com fins lucrativos.',
      incorretas: { A: 'Exige convênio e anuência.', B: 'Não há proibição absoluta.', C: 'Cedência para empresa privada com fins lucrativos não é autorizada.', D: 'Exige convênio.' },
      conceitoCobrado: 'Cedência de servidor',
      pegadinha: 'Achar que a cedência para empresa privada é livre.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['cedência', 'servidor público']
  },
  {
    id: 'Q-DID-DA-17-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-17',
    subtema: 'Classificação dos agentes públicos',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a classificação dos agentes públicos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Agentes políticos são todos os concursados.' },
      { id: 'B', texto: 'Agentes políticos exercem funções de cúpula; servidores públicos têm vínculo profissional; particulares em colaboração atuam sem vínculo (ex.: mesários).' },
      { id: 'C', texto: 'Particulares em colaboração são servidores estatutários.' },
      { id: 'D', texto: 'Empregados públicos são servidores estatutários.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AGENTES POLÍTICOS: cúpula. SERVIDORES: vínculo profissional. PARTICULARES EM COLABORAÇÃO: sem vínculo empregatício.',
      incorretas: { A: 'Nem todos os agentes políticos são concursados.', C: 'Particulares em colaboração não são servidores.', D: 'Empregados públicos são celetistas.' },
      conceitoCobrado: 'Classificação dos agentes públicos',
      pegadinha: 'Confundir as categorias.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['agentes públicos', 'classificação']
  },
  {
    id: 'Q-DID-DA-17-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-17',
    subtema: 'Cargo x emprego x função',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre cargo, emprego e função, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Cargo é celetista; emprego é estatutário.' },
      { id: 'B', texto: 'Cargo é estatutário; emprego é celetista; função é o conjunto de atribuições, sem vínculo de cargo ou emprego.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Função de confiança pode ser exercida por pessoa de fora da carreira.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'CARGO: estatutário. EMPREGO: celetista. FUNÇÃO: atribuições, sem vínculo de cargo ou emprego.',
      incorretas: { A: 'Inverte.', C: 'São distintos.', D: 'Função de confiança é privativa de servidor de carreira.' },
      conceitoCobrado: 'Cargo x emprego x função',
      pegadinha: 'Inverter ou confundir.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['cargo', 'emprego', 'função']
  },
  {
    id: 'Q-DID-DA-17-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-17',
    subtema: 'Acumulação de cargos',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a acumulação de cargos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É permitida em qualquer hipótese, com compatibilidade de horários.' },
      { id: 'B', texto: 'É permitida apenas nas hipóteses do art. 37, XVI: dois cargos de professor; um de professor + outro técnico/científico; dois privativos de profissionais de saúde — com compatibilidade de horários e respeito ao teto.' },
      { id: 'C', texto: 'É permitida para qualquer par de cargos, desde que haja anuência da chefia.' },
      { id: 'D', texto: 'É vedada em qualquer hipótese.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A acumulação é permitida apenas nas três hipóteses do art. 37, XVI (PP-PT-SS), com compatibilidade de horários e respeito ao teto.',
      incorretas: { A: 'Não é livre.', C: 'Não depende apenas da chefia.', D: 'Há hipóteses permitidas.' },
      conceitoCobrado: 'Acumulação de cargos',
      pegadinha: 'Generalizar ou negar as exceções.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['acumulação', 'art. 37']
  },
  {
    id: 'Q-DID-DA-17-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-17',
    subtema: 'Provimento originário x derivado',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre provimento originário e derivado, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Originário: nomeação (em regra, com concurso). Derivado: promoção, readaptação, reversão, aproveitamento, reintegração, recondução.' },
      { id: 'C', texto: 'A transferência é forma de provimento derivado.' },
      { id: 'D', texto: 'O derivado é a nomeação.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ORIGINÁRIO: nomeação. DERIVADO: promoção, readaptação, reversão, aproveitamento, reintegração, recondução. A transferência foi extinta como provimento derivado (EC 19/1998).',
      incorretas: { A: 'São distintos.', C: 'A transferência não é mais prevista.', D: 'Inverte.' },
      conceitoCobrado: 'Provimento originário x derivado',
      pegadinha: 'Incluir a transferência como provimento derivado.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['provimento', 'originário', 'derivado']
  },
  {
    id: 'Q-DID-DA-17-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-17',
    subtema: 'Empregado público',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o empregado público, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É ocupante de cargo efetivo, sob regime estatutário.' },
      { id: 'B', texto: 'É ocupante de emprego público, sob regime celetista (CLT), típico de empresas públicas, SEM e fundações públicas de direito privado.' },
      { id: 'C', texto: 'É agente político.' },
      { id: 'D', texto: 'Não tem vínculo com a Administração.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'EMPREGADO PÚBLICO: ocupante de emprego público, sob CLT, em empresas públicas, SEM e fundações de direito privado.',
      incorretas: { A: 'Descreve o servidor estatutário.', C: 'É categoria distinta.', D: 'Tem vínculo celetista.' },
      conceitoCobrado: 'Empregado público',
      pegadinha: 'Confundir com servidor estatutário.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['empregado público', 'CLT']
  },
  {
    id: 'Q-DID-DA-17-006',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-17',
    subtema: 'Caso concreto — acumulação de cargos de saúde',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Marina é servidora estatutária do Ministério da Saúde, ocupante de cargo efetivo de enfermeira, com jornada de 30 horas semanais. É aprovada em concurso para outro cargo efetivo de enfermeira em um hospital federal, também com 30 horas semanais. Sobre a acumulação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É vedada, porque a acumulação é proibida em qualquer hipótese.' },
      { id: 'B', texto: 'É permitida, pois se trata de dois cargos privativos de profissionais de saúde, com compatibilidade de horários e respeito ao teto — hipótese do art. 37, XVI, "c".' },
      { id: 'C', texto: 'É permitida apenas se Marina renunciar a um dos cargos em 30 dias.' },
      { id: 'D', texto: 'É vedada, porque os dois cargos são federais.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Hipótese do art. 37, XVI, "c" — dois cargos privativos de profissionais de saúde. Exige compatibilidade (30h + 30h) e respeito ao teto. É permitida.',
      incorretas: { A: 'Há hipóteses permitidas.', C: 'Não há essa exigência.', D: 'A esfera não impede a acumulação, se respeitadas as hipóteses.' },
      conceitoCobrado: 'Acumulação de cargos de saúde',
      pegadinha: 'Achar que a acumulação é vedada ou que a esfera importa.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['acumulação', 'saúde']
  },

  /* ============================================================
     DA-18 — Poderes da Administração Pública
  ============================================================ */
  {
    id: 'Q-REAL-DA-18-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-18',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Desvio de finalidade',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'O desvio de finalidade configura-se apenas quando o agente público pratica o ato administrativo para satisfazer interesse particular seu ou de terceiro, não se caracterizando quando a conduta, ainda que alheia à finalidade específica prevista na norma que autoriza o ato, atenda a alguma outra finalidade de interesse público.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. O desvio de finalidade NÃO se restringe ao interesse particular: ocorre sempre que o agente pratica o ato com FINALIDADE DIVERSA da prevista em lei — ainda que atenda a outra finalidade pública. O vício está no desvio da finalidade legal, não apenas no interesse pessoal.',
      incorretas: { A: 'A afirmação restringe indevidamente o desvio de finalidade.' },
      conceitoCobrado: 'Desvio de finalidade',
      pegadinha: 'Restringir o desvio ao interesse particular.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['desvio de finalidade']
  },
  {
    id: 'Q-DID-DA-18-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-18',
    subtema: 'Poderes administrativos — visão geral',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'São poderes administrativos, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Poder hierárquico.' },
      { id: 'B', texto: 'Poder disciplinar.' },
      { id: 'C', texto: 'Poder regulamentar.' },
      { id: 'D', texto: 'Poder moderador.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'O PODER MODERADOR é figura histórica do Império (Brasil Império, Poder Moderador do Imperador) — não é poder administrativo na CF/88. Os poderes administrativos são: hierárquico, disciplinar, regulamentar e de polícia.',
      incorretas: { A: 'É poder administrativo.', B: 'É poder administrativo.', C: 'É poder administrativo.' },
      conceitoCobrado: 'Poderes administrativos',
      pegadinha: 'Incluir figura histórica.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['poderes administrativos']
  },
  {
    id: 'Q-DID-DA-18-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-18',
    subtema: 'Disciplinar x polícia',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o poder disciplinar e o poder de polícia, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Disciplinar atinge servidores e sujeitos à disciplina interna; polícia atinge o particular em geral, limitando direitos em favor do interesse público.' },
      { id: 'C', texto: 'Disciplinar atinge o particular em geral.' },
      { id: 'D', texto: 'Polícia atinge apenas servidores.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'DISCIPLINAR: servidores e sujeitos à disciplina interna. POLÍCIA: particular em geral.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Inverte.' },
      conceitoCobrado: 'Disciplinar x polícia',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['disciplinar', 'polícia']
  },
  {
    id: 'Q-DID-DA-18-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-18',
    subtema: 'Excesso x desvio de poder',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre excesso de poder e desvio de poder, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Excesso: atua além da competência (ato ultra vires). Desvio: atua dentro da competência, mas com finalidade diversa da prevista em lei.' },
      { id: 'C', texto: 'Excesso: fim diverso. Desvio: além da competência.' },
      { id: 'D', texto: 'Só existe excesso, não desvio.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'EXCESSO: além da competência. DESVIO: dentro da competência, com finalidade diversa.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Ambos existem.' },
      conceitoCobrado: 'Excesso x desvio',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['excesso de poder', 'desvio de poder']
  },
  {
    id: 'Q-DID-DA-18-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-18',
    subtema: 'Poder regulamentar',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o poder regulamentar, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Permite ao chefe do Executivo editar decretos que inovam na ordem jurídica.' },
      { id: 'B', texto: 'Permite ao chefe do Executivo editar decretos que detalham a lei, sem inovar na ordem jurídica.' },
      { id: 'C', texto: 'Pode ser exercido por qualquer agente público.' },
      { id: 'D', texto: 'Não existe na CF/88.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O poder REGULAMENTAR permite ao chefe do Executivo editar decretos que detalham a lei, SEM INOVAR na ordem jurídica. A competência é do chefe do Executivo (Presidente, Governador, Prefeito).',
      incorretas: { A: 'Não inova.', C: 'É do chefe do Executivo.', D: 'Existe.' },
      conceitoCobrado: 'Poder regulamentar',
      pegadinha: 'Achar que o decreto inova.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['poder regulamentar']
  },
  {
    id: 'Q-DID-DA-18-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-18',
    subtema: 'Poder hierárquico',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'São manifestações do poder hierárquico, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Dar ordens.' },
      { id: 'B', texto: 'Fiscalizar.' },
      { id: 'C', texto: 'Avocar.' },
      { id: 'D', texto: 'Punir o particular por infração de trânsito.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Punir o particular por infração de trânsito é manifestação do PODER DE POLÍCIA, não do hierárquico. O poder hierárquico é interno e envolve dar ordens, fiscalizar, delegar e avocar.',
      incorretas: { A: 'É manifestação.', B: 'É manifestação.', C: 'É manifestação.' },
      conceitoCobrado: 'Poder hierárquico',
      pegadinha: 'Confundir com poder de polícia.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['poder hierárquico']
  },
  {
    id: 'Q-DID-DA-18-006',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-18',
    subtema: 'Poder de polícia',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o poder de polícia, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É a atividade da Administração que limita ou disciplina direitos do particular em favor do interesse público.' },
      { id: 'B', texto: 'É sinônimo de poder disciplinar.' },
      { id: 'C', texto: 'Atinge apenas servidores públicos.' },
      { id: 'D', texto: 'Só existe na esfera federal.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O poder de polícia limita ou disciplina direitos do particular em favor do interesse público (fiscalização, interdição, licenciamento).',
      incorretas: { B: 'É diferente do disciplinar.', C: 'Atinge o particular.', D: 'Existe em todas as esferas.' },
      conceitoCobrado: 'Poder de polícia',
      pegadinha: 'Confundir com disciplinar.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['poder de polícia']
  },
  {
    id: 'Q-DID-DA-18-007',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-18',
    subtema: 'Abuso de poder (gênero) x desvio de finalidade (espécie)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a relação entre abuso de poder e desvio de finalidade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Abuso de poder é o gênero, que abrange o excesso de poder e o desvio de finalidade (este, uma das espécies).' },
      { id: 'C', texto: 'O desvio de finalidade é gênero.' },
      { id: 'D', texto: 'O abuso se limita ao excesso de poder.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ABUSO DE PODER: gênero. Espécies: EXCESSO DE PODER e DESVIO DE FINALIDADE (ou de poder).',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'O abuso também abrange o desvio.' },
      conceitoCobrado: 'Abuso de poder',
      pegadinha: 'Inverter gênero e espécie.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['abuso de poder', 'desvio de finalidade']
  },

  /* ============================================================
     DA-19 — Atos Administrativos
  ============================================================ */
  {
    id: 'Q-REAL-DA-19-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-19',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Requisitos do ato administrativo',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Segundo Meirelles (2018), são requisitos do ato administrativo, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Competência.' },
      { id: 'B', texto: 'Finalidade.' },
      { id: 'C', texto: 'Forma.' },
      { id: 'D', texto: 'Mérito.' },
      { id: 'E', texto: 'Objeto.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Os requisitos são: COMPETÊNCIA, FINALIDADE, FORMA, MOTIVO e OBJETO. MÉRITO não é requisito — é o juízo de conveniência e oportunidade do ato discricionário.',
      incorretas: { A: 'É requisito.', B: 'É requisito.', C: 'É requisito.', E: 'É requisito.' },
      conceitoCobrado: 'Requisitos do ato administrativo',
      pegadinha: 'Incluir mérito como requisito.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['ato administrativo', 'requisitos']
  },
  {
    id: 'Q-DID-DA-19-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-19',
    subtema: 'Anulação x revogação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre anulação e revogação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Anulação: por ilegalidade, ex tunc, Administração e Judiciário. Revogação: por mérito, ex nunc, só Administração.' },
      { id: 'B', texto: 'Anulação: por mérito, ex nunc. Revogação: por ilegalidade, ex tunc.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'O Judiciário pode revogar ato inconveniente.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'ANULAÇÃO: ilegalidade, ex tunc, Administração e Judiciário. REVOGAÇÃO: mérito, ex nunc, só Administração (Súmulas 346 e 473 do STF).',
      incorretas: { B: 'Inverte.', C: 'São distintos.', D: 'O Judiciário só anula.' },
      conceitoCobrado: 'Anulação x revogação',
      pegadinha: 'Inverter ou atribuir revogação ao Judiciário.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['anulação', 'revogação']
  },
  {
    id: 'Q-DID-DA-19-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-19',
    subtema: 'Cassação x caducidade x contraposição',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre as formas de extinção do ato administrativo, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Cassação: descumprimento; caducidade: prazo/fato; contraposição: ato novo que extingue o anterior.' },
      { id: 'B', texto: 'Cassação: prazo; caducidade: descumprimento.' },
      { id: 'C', texto: 'Contraposição: descumprimento.' },
      { id: 'D', texto: 'São sinônimos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'CASSAÇÃO: descumprimento de condição. CADUCIDADE: decurso de prazo ou mudança de fato. CONTRAPOSIÇÃO: ato novo que extingue o anterior por incompatibilidade.',
      incorretas: { B: 'Inverte.', C: 'Inverte.', D: 'São distintos.' },
      conceitoCobrado: 'Formas de extinção do ato',
      pegadinha: 'Confundir as formas.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['cassação', 'caducidade', 'contraposição']
  },
  {
    id: 'Q-DID-DA-19-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-19',
    subtema: 'Presunção de legitimidade',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a presunção de legitimidade do ato administrativo, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É absoluta.' },
      { id: 'B', texto: 'É relativa — o ato se presume válido até prova em contrário.' },
      { id: 'C', texto: 'Não existe.' },
      { id: 'D', texto: 'Só se aplica a atos vinculados.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A presunção de legitimidade é RELATIVA (iuris tantum): o ato se presume válido até prova em contrário.',
      incorretas: { A: 'Não é absoluta.', C: 'Existe.', D: 'Aplica-se a qualquer ato administrativo.' },
      conceitoCobrado: 'Presunção de legitimidade',
      pegadinha: 'Achar que é absoluta.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['presunção de legitimidade']
  },
  {
    id: 'Q-DID-DA-19-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-19',
    subtema: 'Autoexecutoriedade',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a autoexecutoriedade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Está presente em todos os atos administrativos.' },
      { id: 'B', texto: 'Não está presente em todos os atos: a multa, por exemplo, não tem autoexecutoriedade (precisa de cobrança judicial); a interdição tem.' },
      { id: 'C', texto: 'Não existe no Direito Administrativo.' },
      { id: 'D', texto: 'É exclusiva do Poder Legislativo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A AUTOEXECUTORIEDADE não está em todos os atos: a multa não tem (cobrança judicial); a interdição tem (execução direta).',
      incorretas: { A: 'Não está em todos.', C: 'Existe.', D: 'É atributo de atos administrativos.' },
      conceitoCobrado: 'Autoexecutoriedade',
      pegadinha: 'Generalizar a autoexecutoriedade.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['autoexecutoriedade']
  },
  {
    id: 'Q-DID-DA-19-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-19',
    subtema: 'Convalidação',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a convalidação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Alcança qualquer vício.' },
      { id: 'B', texto: 'Alcança apenas vícios sanáveis (competência e forma, quando não houver prejuízo ao interesse público nem a terceiros), com efeito ex tunc.' },
      { id: 'C', texto: 'Alcança apenas vícios de finalidade, motivo e objeto.' },
      { id: 'D', texto: 'Não existe no Direito Administrativo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A CONVALIDAÇÃO alcança vícios SANÁVEIS (competência e forma), com efeito ex tunc. Vícios de finalidade, motivo e objeto são, em regra, insanáveis.',
      incorretas: { A: 'Não alcança qualquer vício.', C: 'Inverte.', D: 'Existe.' },
      conceitoCobrado: 'Convalidação',
      pegadinha: 'Achar que todo vício é convalidável.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['convalidação']
  },
  {
    id: 'Q-DID-DA-19-006',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-19',
    subtema: 'Vícios do ato — competência e finalidade',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um servidor sem competência aplica multa (vício de competência); um agente usa o poder de fiscalização para perseguir desafeto (vício de finalidade). Sobre esses vícios, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Ambos são insanáveis.' },
      { id: 'B', texto: 'O vício de competência é, em regra, sanável (convalidação); o de finalidade é, em regra, insanável.' },
      { id: 'C', texto: 'O de competência é insanável; o de finalidade é sanável.' },
      { id: 'D', texto: 'Ambos são sanáveis.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'COMPETÊNCIA: sanável (convalidação, em regra). FINALIDADE: insanável (em regra).',
      incorretas: { A: 'A competência é sanável.', C: 'Inverte.', D: 'A finalidade é insanável.' },
      conceitoCobrado: 'Vícios do ato',
      pegadinha: 'Inverter a sanabilidade.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['vício de competência', 'vício de finalidade']
  },

  /* ============================================================
     DA-20 — Serviços Públicos
  ============================================================ */
  {
    id: 'Q-REAL-DA-20-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-20',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Serviços uti universi x uti singuli',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Os serviços públicos uti universi são prestados a destinatários determinados e podem ser remunerados mediante taxa, por serem específicos e divisíveis.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. Serviços UTI UNIVERSI (gerais) são prestados a destinatários INDETERMINADOS (toda a coletividade), são INDIVISÍVEIS e, em regra, custeados por IMPOSTO. O que a questão descreve (destinatários determinados, específicos e divisíveis, taxa) corresponde aos serviços UTI SINGULI (individuais).',
      incorretas: { A: 'A descrição corresponde a uti singuli, não uti universi.' },
      conceitoCobrado: 'Serviços uti universi x uti singuli',
      pegadinha: 'Inverter as definições.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['uti universi', 'uti singuli']
  },
  {
    id: 'Q-DID-DA-20-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Princípios do serviço público',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'São princípios do serviço público, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Generalidade.' },
      { id: 'B', texto: 'Continuidade.' },
      { id: 'C', texto: 'Modicidade.' },
      { id: 'D', texto: 'Lucratividade.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A LUCRAVIDADE não é princípio do serviço público — o serviço público pode até ser prestado com lucro, mas o princípio não é a lucratividade. Os princípios são: generalidade, continuidade, modicidade, regularidade, atualidade, segurança, cortesia e mutabilidade.',
      incorretas: { A: 'É princípio.', B: 'É princípio.', C: 'É princípio.' },
      conceitoCobrado: 'Princípios do serviço público',
      pegadinha: 'Incluir lucratividade como princípio.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['princípios do serviço público']
  },
  {
    id: 'Q-DID-DA-20-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Concessão x permissão x autorização',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre as três formas de delegação de serviço público, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Concessão: contrato, prazo determinado, licitação. Permissão: ato unilateral, prazo indeterminado, licitação pela Lei 8.987/95. Autorização: ato unilateral, prazo curto, sem licitação.' },
      { id: 'B', texto: 'Concessão: ato unilateral, prazo indeterminado. Permissão: contrato, prazo determinado.' },
      { id: 'C', texto: 'Todas são contratos.' },
      { id: 'D', texto: 'Todas exigem licitação.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'CONCESSÃO: contrato, prazo determinado, licitação. PERMISSÃO: ato unilateral, prazo indeterminado, licitação (Lei 8.987/95). AUTORIZAÇÃO: ato unilateral, prazo curto, sem licitação.',
      incorretas: { B: 'Inverte.', C: 'Apenas a concessão é contrato.', D: 'A autorização não exige licitação.' },
      conceitoCobrado: 'Formas de delegação de serviço público',
      pegadinha: 'Inverter as naturezas ou generalizar a licitação.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['concessão', 'permissão', 'autorização']
  },
  {
    id: 'Q-DID-DA-20-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Continuidade do serviço público',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o princípio da continuidade do serviço público, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É absoluto: o serviço nunca pode ser interrompido.' },
      { id: 'B', texto: 'É a regra, mas admite exceções legais (razões técnicas, inadimplemento do usuário após aviso, emergência).' },
      { id: 'C', texto: 'Não existe no ordenamento.' },
      { id: 'D', texto: 'Só se aplica a serviços privados.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A continuidade é a REGRA, mas admite exceções legais (razões técnicas, inadimplemento após aviso, emergência).',
      incorretas: { A: 'Não é absoluta.', C: 'Existe.', D: 'Aplica-se ao serviço público.' },
      conceitoCobrado: 'Continuidade',
      pegadinha: 'Achar que é absoluta.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['continuidade']
  },
  {
    id: 'Q-DID-DA-20-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Encampação x caducidade',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre encampação e caducidade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Encampação: retomada do serviço por INTERESSE PÚBLICO, durante o prazo, com lei autorizativa e indenização. Caducidade: perda da concessão por DESCUMPRIMENTO, sem indenização.' },
      { id: 'C', texto: 'Encampação: descumprimento. Caducidade: interesse público.' },
      { id: 'D', texto: 'Ambas não exigem indenização.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ENCAMPAÇÃO: interesse público, lei autorizativa, indenização. CADUCIDADE: descumprimento, sem indenização.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'A encampação exige indenização.' },
      conceitoCobrado: 'Encampação x caducidade',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['encampação', 'caducidade']
  },
  {
    id: 'Q-DID-DA-20-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Serviço público próprio x impróprio',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre os serviços públicos próprios e impróprios, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Próprios: essenciais, prestados pelo Estado. Impróprios: atividade econômica em sentido estrito.' },
      { id: 'B', texto: 'Próprios: atividade econômica. Impróprios: essenciais.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Só existem serviços próprios.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'PRÓPRIOS: essenciais, prestados pelo Estado (saúde, educação). IMPRÓPRIOS: atividade econômica em sentido estrito.',
      incorretas: { B: 'Inverte.', C: 'São distintos.', D: 'Existem os dois.' },
      conceitoCobrado: 'Serviços públicos próprios x impróprios',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['serviço próprio', 'serviço impróprio']
  },
  {
    id: 'Q-DID-DA-20-006',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Caso concreto — classificação de delegação',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'A prefeitura firmou quatro ajustes: (1) contrato de 20 anos para exploração do transporte coletivo, com licitação; (2) termo de permissão de quiosque em praça, por prazo indeterminado; (3) autorização para food truck em evento de 3 dias; (4) autorização para feira cultural em praça pública por 1 fim de semana. Esses ajustes correspondem, respectivamente, a:',
    alternativas: [
      { id: 'A', texto: 'Concessão, permissão, autorização e autorização.' },
      { id: 'B', texto: 'Permissão, concessão, autorização e autorização.' },
      { id: 'C', texto: 'Concessão, autorização, permissão e autorização.' },
      { id: 'D', texto: 'Autorização, concessão, permissão e permissão.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: '(1) contrato de 20 anos + licitação = CONCESSÃO. (2) permissão de quiosque, prazo indeterminado = PERMISSÃO. (3) food truck em evento de 3 dias = AUTORIZAÇÃO. (4) feira por 1 fim de semana = AUTORIZAÇÃO.',
      incorretas: { B: 'Inverte 1 e 2.', C: 'Inverte 2 e 3.', D: 'Inverte.' },
      conceitoCobrado: 'Formas de delegação em cenário',
      pegadinha: 'Confundir os ajustes.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['concessão', 'permissão', 'autorização']
  },
  {
    id: 'Q-DID-DA-20-007',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Usuários do serviço público',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre os direitos dos usuários do serviço público, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Estão previstos apenas na Lei 8.987/95, não havendo qualquer direito no CDC.' },
      { id: 'B', texto: 'Estão previstos na Lei 8.987/95 e, quando aplicável, no CDC — incluindo informação, qualidade, resposta a reclamações e continuidade.' },
      { id: 'C', texto: 'Não há direitos dos usuários.' },
      { id: 'D', texto: 'Só existem direitos dos usuários no setor privado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Os direitos dos usuários estão na Lei 8.987/95 e, quando aplicável, no CDC — informação, qualidade, resposta a reclamações, continuidade.',
      incorretas: { A: 'O CDC pode ser aplicado.', C: 'Há direitos.', D: 'Existem direitos em ambos.' },
      conceitoCobrado: 'Direitos dos usuários',
      pegadinha: 'Achar que o CDC não se aplica.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['usuários', 'CDC', 'Lei 8.987/95']
  },

  /* ============================================================
     DA-21 — Licitações e contratos administrativos
  ============================================================ */
  {
    id: 'Q-REAL-DA-21-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-21',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Dispensa por valor',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Silvio é assistente administrativo do DEMHAB e precisa realizar coleta de preços de serviços para a contratação da manutenção de veículos automotores da frota do órgão sem licitação. Para a contratação de serviços de manutenção de veículos que envolva valor de até R$ 130.984,20, Silvio poderá utilizar uma das categorias para a contratação direta. De acordo com a Nova Lei de Licitações e Contratos Administrativos, a referida categoria se denomina licitação:',
    alternativas: [
      { id: 'A', texto: 'Dispensável.' },
      { id: 'B', texto: 'Dispensada.' },
      { id: 'C', texto: 'Inexigível.' },
      { id: 'D', texto: 'Postecipada.' },
      { id: 'E', texto: 'Postergada.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A contratação direta por VALOR, dentro dos limites legais, é hipótese de licitação DISPENSÁVEL (art. 75 da Lei 14.133/2021).',
      incorretas: { B: 'Dispensada é a licitação que não precisa ser realizada por força de lei, mas o termo técnico é dispensável.', C: 'Inexigível é para competição inviável.', D: 'Não existe.', E: 'Não existe.' },
      conceitoCobrado: 'Dispensa por valor',
      pegadinha: 'Confundir dispensável com dispensada ou inexigível.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['dispensa', 'licitação dispensável']
  },
  {
    id: 'Q-REAL-DA-21-002',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-21',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Fase preparatória — estudo técnico preliminar',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'De acordo com Vaz (2022), além da compatibilidade com o Plano de Contratação Anual (PCA), a Nova Lei de Licitações e Contratos Administrativos exige a realização de diversas etapas para a fase preparatória. A primeira etapa dessa fase, sendo o primeiro ato que a Administração deve realizar após instaurar o processo administrativo tendente a definir os termos da licitação, é o:',
    alternativas: [
      { id: 'A', texto: 'Anteprojeto.' },
      { id: 'B', texto: 'Estudo técnico preliminar.' },
      { id: 'C', texto: 'Projeto básico.' },
      { id: 'D', texto: 'Projeto executivo.' },
      { id: 'E', texto: 'Termo de referência.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A primeira etapa da fase preparatória é o ESTUDO TÉCNICO PRELIMINAR (ETP) — art. 18 da Lei 14.133/2021.',
      incorretas: { A: 'Anteprojeto é etapa posterior.', C: 'Projeto básico é posterior.', D: 'Projeto executivo é posterior.', E: 'Termo de referência é posterior.' },
      conceitoCobrado: 'Fase preparatória — ETP',
      pegadinha: 'Confundir com termo de referência ou projeto básico.',
      comoApareceEmConcurso: 'Cobrança de ordem.'
    },
    tags: ['ETP', 'fase preparatória']
  },
  {
    id: 'Q-REAL-DA-21-003',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-21',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Inexigibilidade — notória especialização',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A contratação de instituição de notória especialização para ministrar um curso de aperfeiçoamento aos empregados do Conselho pode ser enquadrada como hipótese de inexigibilidade de licitação.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. A contratação de profissional ou instituição de NOTÓRIA ESPECIALIZAÇÃO, para serviço técnico especializado, é hipótese de INEXIGIBILIDADE (art. 74 da Lei 14.133/2021).',
      incorretas: { B: 'A hipótese está correta.' },
      conceitoCobrado: 'Inexigibilidade',
      pegadinha: 'Achar que é dispensa.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['inexigibilidade', 'notória especialização']
  },
  {
    id: 'Q-REAL-DA-21-004',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-21',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Impugnação de edital',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Na sistemática da Lei nº 14.133/2021, a legitimidade para impugnar o edital de licitação está condicionada à prévia habilitação do interessado no certame.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. A legitimidade para impugnar o edital NÃO depende de prévia habilitação. Qualquer cidadão é parte legítima para impugnar edital por irregularidade, e qualquer licitante é parte legítima para solicitar esclarecimentos ou providências (art. 164 da Lei 14.133/2021).',
      incorretas: { A: 'A legitimidade não depende de habilitação.' },
      conceitoCobrado: 'Impugnação de edital',
      pegadinha: 'Condicionar a impugnação à habilitação.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['impugnação', 'edital']
  },
  {
    id: 'Q-DID-DA-21-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-21',
    subtema: 'Dispensa x inexigibilidade',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre dispensa e inexigibilidade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Dispensa: competição possível, mas a lei dispensa (valor, emergência). Inexigibilidade: competição inviável (fornecedor exclusivo, notória especialização).' },
      { id: 'C', texto: 'Dispensa: competição inviável. Inexigibilidade: competição possível.' },
      { id: 'D', texto: 'Ambas exigem licitação.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'DISPENSA: competição POSSÍVEL, mas a lei dispensa. INEXIGIBILIDADE: competição INVIÁVEL.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Ambas são hipóteses de contratação direta (sem licitação).' },
      conceitoCobrado: 'Dispensa x inexigibilidade',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['dispensa', 'inexigibilidade']
  },
  {
    id: 'Q-DID-DA-21-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-21',
    subtema: 'Modalidades de licitação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'São modalidades de licitação previstas na Lei 14.133/2021, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Pregão.' },
      { id: 'B', texto: 'Concorrência.' },
      { id: 'C', texto: 'Convite.' },
      { id: 'D', texto: 'Concurso.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CONVITE não é modalidade na Lei 14.133/2021 (era da Lei 8.666/93). As modalidades são: pregão, concorrência, concurso, leilão e diálogo competitivo.',
      incorretas: { A: 'É modalidade.', B: 'É modalidade.', D: 'É modalidade.' },
      conceitoCobrado: 'Modalidades de licitação',
      pegadinha: 'Incluir modalidade revogada.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['modalidades', 'convite']
  },
  {
    id: 'Q-DID-DA-21-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-21',
    subtema: 'Cláusulas exorbitantes',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'São cláusulas exorbitantes dos contratos administrativos, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Alteração unilateral do contrato.' },
      { id: 'B', texto: 'Rescisão unilateral.' },
      { id: 'C', texto: 'Fiscalização.' },
      { id: 'D', texto: 'Renúncia de direitos pela Administração.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A RENÚNCIA de direitos NÃO é cláusula exorbitante — é o oposto: a Administração não pode renunciar a prerrogativas que existem em favor do interesse público. As cláusulas exorbitantes incluem alteração unilateral, rescisão unilateral, fiscalização e aplicação de sanções.',
      incorretas: { A: 'É cláusula exorbitante.', B: 'É cláusula exorbitante.', C: 'É cláusula exorbitante.' },
      conceitoCobrado: 'Cláusulas exorbitantes',
      pegadinha: 'Incluir renúncia.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['cláusulas exorbitantes']
  },
  {
    id: 'Q-DID-DA-21-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-21',
    subtema: 'Critérios de julgamento',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'São critérios de julgamento previstos na Lei 14.133/2021, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Menor preço.' },
      { id: 'B', texto: 'Melhor técnica ou conteúdo artístico.' },
      { id: 'C', texto: 'Técnica e preço.' },
      { id: 'D', texto: 'Maior vantagem financeira imediata.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: '"Maior vantagem financeira imediata" não é critério da Lei 14.133/2021. Os critérios são: menor preço, maior desconto, melhor técnica ou conteúdo artístico, técnica e preço, maior lance (leilão) e maior retorno econômico.',
      incorretas: { A: 'É critério.', B: 'É critério.', C: 'É critério.' },
      conceitoCobrado: 'Critérios de julgamento',
      pegadinha: 'Inventar critério.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['critérios de julgamento']
  },
  /* ============================================================
     DA-22 — Responsabilidade Civil do Estado
  ============================================================ */
  {
    id: 'Q-DID-DA-22-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Responsabilidade objetiva x subjetiva',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a responsabilidade civil do Estado no ordenamento brasileiro, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O Brasil adotou a teoria subjetiva em atos comissivos: a vítima precisa provar a culpa do agente.' },
      { id: 'B', texto: 'O Brasil adotou a teoria OBJETIVA (art. 37, §6º, CF) em atos comissivos: basta dano + nexo causal + conduta, independentemente de culpa.' },
      { id: 'C', texto: 'O Brasil adotou a teoria do risco integral: não há excludentes em nenhuma hipótese.' },
      { id: 'D', texto: 'O Brasil não tem regra constitucional sobre responsabilidade do Estado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O art. 37, §6º, da CF adotou a responsabilidade OBJETIVA em atos comissivos: dano + nexo causal + conduta, independentemente de culpa.',
      incorretas: { A: 'A responsabilidade do Estado é objetiva; a do agente (ação regressiva) é subjetiva.', C: 'Risco integral não é a regra adotada.', D: 'Há regra expressa (art. 37, §6º).' },
      conceitoCobrado: 'Responsabilidade objetiva do Estado',
      pegadinha: 'Confundir responsabilidade objetiva com subjetiva ou risco integral.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['responsabilidade civil', 'objetiva']
  },
  {
    id: 'Q-DID-DA-22-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Ação regressiva',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Sobre a ação regressiva do Estado contra o agente público, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Independe de dolo ou culpa do agente — basta o Estado ter indenizado a vítima.' },
      { id: 'B', texto: 'Exige DOLO ou CULPA do agente — é a responsabilidade subjetiva do agente perante o Estado, depois que o Estado indeniza a vítima.' },
      { id: 'C', texto: 'É vedada pela Constituição.' },
      { id: 'D', texto: 'A vítima deve ajuizar ação diretamente contra o agente.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A ação regressiva exige DOLO ou CULPA do agente — é a responsabilidade SUBJETIVA do agente perante o Estado.',
      incorretas: { A: 'Exige dolo/culpa.', C: 'É prevista no art. 37, §6º.', D: 'A vítima aciona o Estado.' },
      conceitoCobrado: 'Ação regressiva',
      pegadinha: 'Achar que independe de dolo/culpa.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['ação regressiva', 'dolo', 'culpa']
  },
  {
    id: 'Q-DID-DA-22-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Excludentes de responsabilidade',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'São excludentes da responsabilidade civil do Estado, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Culpa exclusiva da vítima.' },
      { id: 'B', texto: 'Caso fortuito ou força maior.' },
      { id: 'C', texto: 'Fato de terceiro.' },
      { id: 'D', texto: 'Culpa leve do agente público.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A CULPA LEVE do agente NÃO exclui a responsabilidade do Estado — a responsabilidade do Estado perante a vítima é OBJETIVA e não depende de culpa do agente. As excludentes são: culpa exclusiva da vítima, caso fortuito/força maior e fato de terceiro.',
      incorretas: { A: 'É excludente.', B: 'É excludente.', C: 'É excludente.' },
      conceitoCobrado: 'Excludentes de responsabilidade',
      pegadinha: 'Incluir a culpa do agente como excludente.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['excludentes', 'culpa da vítima', 'caso fortuito']
  },
  {
    id: 'Q-DID-DA-22-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Teoria do risco administrativo x risco integral',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'O Brasil adotou a teoria do risco:',
    alternativas: [
      { id: 'A', texto: 'Integral, sem excludentes.' },
      { id: 'B', texto: 'Administrativo, com excludentes (culpa exclusiva da vítima, caso fortuito/força maior, fato de terceiro).' },
      { id: 'C', texto: 'Subjetiva, exigindo culpa em todos os casos.' },
      { id: 'D', texto: 'Objetiva, sem qualquer excludente.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O Brasil adotou a teoria do RISCO ADMINISTRATIVO: responsabilidade objetiva, mas com EXCLUDENTES. O risco integral não é a regra.',
      incorretas: { A: 'Risco integral não é a regra adotada.', C: 'A responsabilidade é objetiva.', D: 'Há excludentes.' },
      conceitoCobrado: 'Risco administrativo x risco integral',
      pegadinha: 'Confundir os dois.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['risco administrativo', 'risco integral']
  },
  {
    id: 'Q-DID-DA-22-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Atos comissivos x omissivos',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Sobre a responsabilidade do Estado em atos comissivos e omissivos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Ambos são sempre objetivos.' },
      { id: 'B', texto: 'Em atos comissivos, a responsabilidade é objetiva; em omissões genéricas, a jurisprudência majoritária exige comprovação de culpa (falha do serviço).' },
      { id: 'C', texto: 'Em atos comissivos, a responsabilidade é subjetiva.' },
      { id: 'D', texto: 'Em omissões, a responsabilidade é sempre objetiva.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Atos COMISSIVOS: objetiva (art. 37, §6º). Omissões GENÉRICAS: exige-se culpa (falha do serviço). Em omissões específicas (dever legal direto), pode haver objetiva.',
      incorretas: { A: 'A omissão genérica exige culpa.', C: 'Inverte.', D: 'Inverte.' },
      conceitoCobrado: 'Atos comissivos x omissivos',
      pegadinha: 'Generalizar a objetividade.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['atos comissivos', 'omissivos']
  },
  {
    id: 'Q-DID-DA-22-006',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Caso concreto — atropelamento por veículo oficial',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Um veículo oficial, conduzido por servidor no exercício da função, atropela um pedestre que atravessava em local proibido, com sinal vermelho. A vítima sofreu lesões. Sobre a responsabilidade do Estado, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O Estado sempre responde, pois a responsabilidade é objetiva e não admite excludentes.' },
      { id: 'B', texto: 'Há CULPA EXCLUSIVA DA VÍTIMA (pedestre em local proibido, sinal vermelho), o que exclui a responsabilidade do Estado — desde que o servidor não tenha concorrido para o evento.' },
      { id: 'C', texto: 'A culpa exclusiva da vítima não exclui a responsabilidade do Estado.' },
      { id: 'D', texto: 'O Estado responde sempre, independentemente da conduta da vítima.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A CULPA EXCLUSIVA DA VÍTIMA é excludente de responsabilidade — quebra o nexo causal. Se o servidor não concorreu, a responsabilidade do Estado é excluída.',
      incorretas: { A: 'Há excludentes.', C: 'A culpa exclusiva exclui.', D: 'A conduta da vítima é considerada.' },
      conceitoCobrado: 'Culpa exclusiva da vítima',
      pegadinha: 'Achar que a responsabilidade objetiva é absoluta.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['culpa exclusiva da vítima']
  },
  {
    id: 'Q-DID-DA-22-007',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Caso concreto — ação regressiva',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Um servidor público federal, no exercício da função, conduz veículo oficial com imprudência e causa dano a um particular. A vítima ajuíza ação indenizatória. Sobre as regras da responsabilidade civil, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A ação deve ser proposta diretamente contra o servidor, pois foi ele quem causou o dano.' },
      { id: 'B', texto: 'A ação deve ser proposta contra a União (responsabilidade OBJETIVA), e a União, após indenizar a vítima, pode ajuizar AÇÃO REGRESSIVA contra o servidor — desde que comprovados DOLO ou CULPA (no caso, culpa por imprudência).' },
      { id: 'C', texto: 'A ação deve ser proposta contra o servidor e a União, em litisconsórcio necessário.' },
      { id: 'D', texto: 'A vítima não tem direito à indenização, pois o dano foi causado por agente público.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A vítima aciona o ESTADO (União), por responsabilidade OBJETIVA. Após indenizar, a União pode ajuizar AÇÃO REGRESSIVA contra o servidor, desde que comprovados DOLO ou CULPA (no caso, imprudência).',
      incorretas: { A: 'Ignora a Teoria do Órgão.', C: 'Não há litisconsórcio necessário.', D: 'Há direito à indenização.' },
      conceitoCobrado: 'Responsabilidade objetiva + ação regressiva',
      pegadinha: 'Achar que a vítima aciona o agente diretamente.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['ação regressiva', 'teoria do órgão']
  },
  {
    id: 'Q-DID-DA-22-008',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Requisitos da responsabilidade objetiva',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'São requisitos da responsabilidade civil objetiva do Estado:',
    alternativas: [
      { id: 'A', texto: 'Conduta, dano, nexo causal e culpa do agente.' },
      { id: 'B', texto: 'Conduta, dano e nexo causal — independentemente de culpa.' },
      { id: 'C', texto: 'Apenas o dano.' },
      { id: 'D', texto: 'Apenas a conduta.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Requisitos: CONDUTA + DANO + NEXO CAUSAL — independentemente de culpa.',
      incorretas: { A: 'A culpa não é exigida do Estado.', C: 'Faltam conduta e nexo.', D: 'Faltam dano e nexo.' },
      conceitoCobrado: 'Requisitos da responsabilidade objetiva',
      pegadinha: 'Incluir culpa do agente como requisito.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['requisitos', 'nexo causal']
  },

  /* ============================================================
     DA-23 — Controle da Administração Pública
  ============================================================ */
  {
    id: 'Q-REAL-DA-23-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-23',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Competências do TCU',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um auditor recém-empossado no TCU atua em processos de fiscalização. Foram apresentadas as seguintes situações: I. dirigente de sociedade de economia mista, constituída com recursos da União, questiona a competência do TCU para julgar suas contas; II. prefeito municipal utiliza recursos federais recebidos por convênio para execução de obra, sendo posteriormente fiscalizado pelo TCU; III. gestor de entidade privada que recebe contribuições parafiscais afirma não estar sujeito à fiscalização do TCU; IV. particular, sem vínculo formal com a Administração, é responsabilizado por prejuízo ao erário em razão de extravio de bens públicos sob sua guarda eventual. Sobre as competências do TCU, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Apenas as situações II e IV estão sujeitas à jurisdição do TCU.' },
      { id: 'B', texto: 'Apenas as situações I, II e IV estão sujeitas à jurisdição do TCU, excluindo-se entidades privadas.' },
      { id: 'C', texto: 'Todas as situações (I, II, III e IV) estão sujeitas à jurisdição do TCU, ainda que envolvam entidades de direito privado ou particulares sem vínculo formal com a Administração.' },
      { id: 'D', texto: 'Apenas as situações I e II estão sujeitas à jurisdição do TCU.' },
      { id: 'E', texto: 'Nenhuma das situações está integralmente sujeita ao TCU.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'O TCU tem jurisdição ampla: alcança sociedades de economia mista (recursos da União), recursos federais repassados a municípios, entidades privadas que recebem contribuições parafiscais e particulares que causem prejuízo ao erário.',
      incorretas: { A: 'I e III também estão sujeitas.', B: 'III também está sujeita.', D: 'III e IV também estão sujeitas.', E: 'Todas estão sujeitas.' },
      conceitoCobrado: 'Competências do TCU',
      pegadinha: 'Restringir a jurisdição do TCU à Administração direta ou indireta.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['TCU', 'controle externo']
  },
  {
    id: 'Q-REAL-DA-23-002',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-23',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'CGU — órgão central do controle interno',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Auditor da CGU foi designado para avaliar a execução de programa federal voltado à melhoria da infraestrutura portuária. Identificou irregularidades na aplicação de recursos, falhas no cumprimento de metas do plano plurianual e ausência de estrutura formal de controle interno em uma unidade. Elaborou relatório, encaminhou recomendações e comunicou os fatos às instâncias competentes. Sobre a organização, competências e atuação da CGU, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'A CGU integra o Poder Executivo federal e exerce a função de órgão central do sistema de controle interno, atuando na avaliação de metas, fiscalização de programas e apuração de irregularidades.' },
      { id: 'B', texto: 'A CGU integra o Poder Executivo federal e exerce a função de órgão setorial do sistema de controle interno.' },
      { id: 'C', texto: 'A CGU integra o Poder Executivo federal e exerce função de assessoramento direto, atuando na formulação de políticas econômicas.' },
      { id: 'D', texto: 'A CGU integra o Poder Executivo federal e exerce a função de órgão de controle interno, atuando na execução de obras públicas.' },
      { id: 'E', texto: 'A CGU integra o Poder Executivo federal e exerce função de coordenação institucional, atuando na elaboração de leis orçamentárias.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A CGU é órgão CENTRAL do sistema de controle interno do Executivo federal — avalia metas, fiscaliza programas e apura irregularidades.',
      incorretas: { B: 'É órgão central, não setorial.', C: 'Não é órgão de assessoramento direto.', D: 'Não executa obras.', E: 'Não elabora leis orçamentárias.' },
      conceitoCobrado: 'CGU — órgão central do controle interno',
      pegadinha: 'Confundir com órgão setorial.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['CGU', 'controle interno']
  },
  {
    id: 'Q-REAL-DA-23-003',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-23',
    banca: 'Fundatec', orgao: 'CRA-RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Fundatec 2026 — CRA-RS — Auxiliar Administrativo' },
    subtema: 'Sistema de controle interno (art. 74)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Assinale a alternativa que indica corretamente uma finalidade do sistema de controle interno do Poder Executivo, conforme a Constituição Federal:',
    alternativas: [
      { id: 'A', texto: 'Avaliar se as metas previstas na LDO estão sendo cumpridas.' },
      { id: 'B', texto: 'Avaliar os resultados da aplicação de recursos privados por entidades de direito privado.' },
      { id: 'C', texto: 'Apoiar o controle externo para que este exerça sua missão institucional.' },
      { id: 'D', texto: 'Controlar as operações de créditos, mas não de avais.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Compete ao sistema de controle interno (art. 74, CF) avaliar o cumprimento das metas previstas no plano plurianual, a execução dos programas de governo e dos orçamentos da União — bem como avaliar se as metas da LDO estão sendo cumpridas. A alternativa A está correta.',
      incorretas: { B: 'O controle interno avalia recursos públicos, não privados.', C: 'O apoio ao controle externo é uma das atribuições, mas a alternativa A é a mais precisa quanto à avaliação de metas da LDO.', D: 'O controle abrange créditos e avais.' },
      conceitoCobrado: 'Sistema de controle interno (art. 74)',
      pegadinha: 'Restringir o controle a créditos, sem avais.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['controle interno', 'art. 74']
  },
  {
    id: 'Q-DID-DA-23-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-23',
    subtema: 'Controle interno x externo',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre controle interno e externo, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Interno é exercido pelos Tribunais de Contas; externo, pelas Controladorias.' },
      { id: 'B', texto: 'Interno é exercido dentro de cada Poder (Controladorias — art. 74); externo é exercido pelos Tribunais de Contas (art. 71).' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Externo é exercido apenas pelo Judiciário.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'INTERNO: dentro de cada Poder (art. 74 — Controladorias). EXTERNO: Tribunais de Contas (art. 71).',
      incorretas: { A: 'Inverte.', C: 'São distintos.', D: 'Externo é exercido pelo Legislativo, com apoio dos Tribunais de Contas.' },
      conceitoCobrado: 'Controle interno x externo',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['controle interno', 'externo']
  },
  {
    id: 'Q-DID-DA-23-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-23',
    subtema: 'Legalidade x mérito',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o controle de legalidade e o controle de mérito, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O Judiciário pode rever legalidade e mérito.' },
      { id: 'B', texto: 'O controle de legalidade pode ser exercido pela Administração E pelo Judiciário; o de mérito é exercido APENAS pela Administração.' },
      { id: 'C', texto: 'O controle de mérito pode ser exercido pelo Judiciário.' },
      { id: 'D', texto: 'Legalidade e mérito são sinônimos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'LEGALIDADE: Administração + Judiciário. MÉRITO: só Administração. O Judiciário não substitui o mérito administrativo.',
      incorretas: { A: 'O Judiciário não revê mérito.', C: 'Não.', D: 'São distintos.' },
      conceitoCobrado: 'Legalidade x mérito',
      pegadinha: 'Achar que o Judiciário revê mérito.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['legalidade', 'mérito']
  },
  {
    id: 'Q-DID-DA-23-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-23',
    subtema: 'Autotutela x tutela',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre autotutela e tutela, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Autotutela: revisão dos próprios atos (Súmulas 346 e 473 do STF). Tutela: supervisão da Administração Direta sobre a Indireta.' },
      { id: 'C', texto: 'Autotutela é a supervisão da Indireta.' },
      { id: 'D', texto: 'Tutela é a revisão dos próprios atos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AUTOTUTELA: revisão dos próprios atos (anular ilegais, revogar inconvenientes — Súmulas 346 e 473 do STF). TUTELA: supervisão da Direta sobre a Indireta.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Inverte.' },
      conceitoCobrado: 'Autotutela x tutela',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['autotutela', 'tutela']
  },
  {
    id: 'Q-DID-DA-23-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-23',
    subtema: 'TCU x Congresso — julgamento de contas',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre o julgamento das contas do Presidente da República, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O TCU julga as contas do Presidente.' },
      { id: 'B', texto: 'O TCU APRECIA as contas do Presidente e emite parecer prévio; quem JULGA é o Congresso Nacional (art. 49, IX).' },
      { id: 'C', texto: 'O Congresso apenas opina, e o TCU julga.' },
      { id: 'D', texto: 'Nenhum dos dois atua.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O TCU APRECIA (parecer prévio) e o CONGRESSO JULGA (art. 49, IX). O TCU julga as contas dos DEMAIS administradores.',
      incorretas: { A: 'O TCU aprecia, não julga.', C: 'Inverte.', D: 'Ambos atuam.' },
      conceitoCobrado: 'TCU x Congresso',
      pegadinha: 'Achar que o TCU julga as contas do Presidente.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['TCU', 'Congresso', 'contas do Presidente']
  },
  {
    id: 'Q-DID-DA-23-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-23',
    subtema: 'Prazo decadencial para anulação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o prazo decadencial para a Administração anular seus atos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É de 5 anos, salvo comprovada má-fé (art. 54 da Lei 9.784/99).' },
      { id: 'B', texto: 'É de 10 anos, sem exceção.' },
      { id: 'C', texto: 'É de 2 anos.' },
      { id: 'D', texto: 'Não há prazo.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O prazo decadencial é de 5 ANOS, salvo comprovada má-fé (art. 54 da Lei 9.784/99).',
      incorretas: { B: 'É 5 anos.', C: 'É 5 anos.', D: 'Há prazo.' },
      conceitoCobrado: 'Prazo decadencial',
      pegadinha: 'Errar o prazo.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['prazo decadencial', 'art. 54']
  },

  /* ============================================================
     DA-24 — Improbidade Administrativa
  ============================================================ */
  {
    id: 'Q-REAL-DA-24-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-24',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Improbidade — herdeiro e reparação ao erário',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'João é o único filho e sucessor de José, que faleceu em agosto de 2025, sem deixar patrimônio. José causou danos ao erário público ao fraudar licitação de empresa pública federal; a apuração e a confirmação da fraude foram feitas por comissão sindicante, com relatório emitido após o falecimento. Considerando a Lei 8.429/1992, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'João terá que reparar o prejuízo com seu próprio patrimônio pessoal, já que José não deixou patrimônio.' },
      { id: 'B', texto: 'João não tem obrigação de reparar o prejuízo causado pelo pai, ainda que José tivesse deixado patrimônio.' },
      { id: 'C', texto: 'Não há previsão de reparação ao erário, independentemente de estar vivo ou ter falecido.' },
      { id: 'D', texto: 'João teria que reparar o prejuízo caso José tivesse deixado patrimônio, até o limite da herança ou patrimônio transferido.' },
      { id: 'E', texto: 'José somente poderia responder pelo prejuízo com seu patrimônio pessoal caso ainda estivesse vivo.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A obrigação de reparar o dano é TRANSMISSÍVEL aos herdeiros, mas LIMITADA ao valor da herança ou do patrimônio transferido (art. 8º da Lei 8.429/1992). No caso, José não deixou patrimônio — logo, João não responde com seu patrimônio pessoal.',
      incorretas: { A: 'A responsabilidade do herdeiro é limitada à herança.', B: 'Há obrigação, limitada à herança.', C: 'Há previsão legal.', E: 'A obrigação de reparar é transmissível.' },
      conceitoCobrado: 'Improbidade — transmissão da obrigação de reparar',
      pegadinha: 'Achar que o herdeiro responde com patrimônio pessoal ou que a obrigação se extingue com a morte.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['improbidade', 'herdeiro', 'reparação']
  },
  {
    id: 'Q-REAL-DA-24-002',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-24',
    banca: 'Fundatec', orgao: 'CRA-RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Fundatec 2026 — CRA-RS — Auxiliar Administrativo' },
    subtema: 'Improbidade — dolo',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Considerando as disposições da Lei de Improbidade Administrativa (Lei 8.429/1992, com as alterações da Lei 14.230/2021), assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Consideram-se atos de improbidade as condutas culposas e dolosas tipificadas na lei.' },
      { id: 'B', texto: 'A mera perda patrimonial decorrente da atividade econômica não acarretará improbidade em qualquer hipótese.' },
      { id: 'C', texto: 'O exercício de agente público fica condicionado à apresentação de declaração de imposto de renda e proventos.' },
      { id: 'D', texto: 'Configura improbidade a ação ou omissão decorrente de divergência interpretativa da lei, com base em jurisprudência não pacificada.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A mera perda patrimonial decorrente da atividade econômica NÃO configura, por si só, improbidade — é o que prevê o art. 10, §2º, da Lei 8.429/1992 (com a Lei 14.230/2021).',
      incorretas: { A: 'A lei exige DOLO em todas as modalidades (Lei 14.230/2021).', C: 'A declaração de bens é dever, mas não condiciona o exercício.', D: 'Divergência interpretativa com base em jurisprudência não pacificada NÃO configura improbidade (art. 21, §2º).' },
      conceitoCobrado: 'Improbidade — exclusão de conduta culposa e divergência interpretativa',
      pegadinha: 'Achar que a improbidade admite culpa ou divergência interpretativa.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['improbidade', 'dolo', 'divergência interpretativa']
  },
  {
    id: 'Q-REAL-DA-24-003',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-24',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Improbidade — apreciação pelo TCU',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'A aprovação das contas do agente público pelo tribunal ou conselho de contas impede a aplicação de sanções por improbidade administrativa relativas aos mesmos fatos examinados.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. A aprovação das contas pelo Tribunal de Contas NÃO impede a aplicação de sanções por improbidade — as instâncias são independentes. A Lei 8.429/1992 (art. 21) prevê expressamente a independência das instâncias.',
      incorretas: { A: 'A aprovação de contas não obsta a improbidade.' },
      conceitoCobrado: 'Improbidade — independência das instâncias',
      pegadinha: 'Achar que a aprovação de contas "blinda" o agente.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['improbidade', 'TCU', 'independência']
  },
  {
    id: 'Q-DID-DA-24-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-24',
    subtema: 'Modalidades de improbidade',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'São modalidades de improbidade administrativa (Lei 8.429/1992), EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Enriquecimento ilícito.' },
      { id: 'B', texto: 'Prejuízo ao erário.' },
      { id: 'C', texto: 'Atentado a princípios.' },
      { id: 'D', texto: 'Improbidade culposa.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A IMPROBIDADE CULPOSA foi EXTINTA pela Lei 14.230/2021 — não é mais modalidade. As modalidades são: enriquecimento ilícito (art. 9º), prejuízo ao erário (art. 10) e atentado a princípios (art. 11).',
      incorretas: { A: 'É modalidade.', B: 'É modalidade.', C: 'É modalidade.' },
      conceitoCobrado: 'Modalidades de improbidade',
      pegadinha: 'Incluir a modalidade culposa (extinta).',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['improbidade', 'modalidades', 'dolo']
  },
  {
    id: 'Q-DID-DA-24-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-24',
    subtema: 'Dolo (Lei 14.230/2021)',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre o elemento subjetivo da improbidade após a Lei 14.230/2021, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Admite-se culpa em todas as modalidades.' },
      { id: 'B', texto: 'Exige-se DOLO em todas as modalidades — a Lei 14.230/2021 eliminou a modalidade culposa.' },
      { id: 'C', texto: 'Exige-se dolo apenas no enriquecimento ilícito.' },
      { id: 'D', texto: 'A lei não alterou o elemento subjetivo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A Lei 14.230/2021 passou a exigir DOLO em TODAS as modalidades, eliminando a culposa.',
      incorretas: { A: 'Não admite culpa.', C: 'Exige em todas.', D: 'Houve alteração.' },
      conceitoCobrado: 'Dolo na improbidade',
      pegadinha: 'Achar que a culpa ainda é admitida.',
      comoApareceEmConcurso: 'Cobrança atual.'
    },
    tags: ['improbidade', 'dolo', 'Lei 14.230/2021']
  },
  {
    id: 'Q-DID-DA-24-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-24',
    subtema: 'Improbidade x irregularidade administrativa',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Sobre a diferença entre improbidade e irregularidade administrativa, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Improbidade exige conduta DOLOSA e GRAVE; irregularidade é falha formal ou procedimental, que pode gerar sanções administrativas, mas não necessariamente improbidade.' },
      { id: 'C', texto: 'Toda irregularidade é improbidade.' },
      { id: 'D', texto: 'Toda improbidade é irregularidade leve.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'IMPROBIDADE: dolo + gravidade. IRREGULARIDADE: falha formal, sem dolo e sem gravidade suficiente.',
      incorretas: { A: 'São distintos.', C: 'Nem toda irregularidade é improbidade.', D: 'A improbidade é grave.' },
      conceitoCobrado: 'Improbidade x irregularidade',
      pegadinha: 'Igualar ou confundir.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['improbidade', 'irregularidade']
  },
  {
    id: 'Q-DID-DA-24-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-24',
    subtema: 'Legitimidade da ação de improbidade',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a legitimidade para propor ação civil pública por improbidade administrativa, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Qualquer cidadão pode ajuizar a ação diretamente.' },
      { id: 'B', texto: 'A ação é de competência do MINISTÉRIO PÚBLICO — o cidadão pode representar, mas não ajuizar diretamente.' },
      { id: 'C', texto: 'Qualquer pessoa jurídica pode ajuizar.' },
      { id: 'D', texto: 'Só a União pode ajuizar.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A ação civil pública por improbidade é de competência do MINISTÉRIO PÚBLICO (art. 17 da Lei 8.429/1992). O cidadão pode representar, mas não ajuizar.',
      incorretas: { A: 'Não cabe ao cidadão ajuizar.', C: 'Não.', D: 'Não é só a União.' },
      conceitoCobrado: 'Legitimidade da ação de improbidade',
      pegadinha: 'Achar que o cidadão pode ajuizar diretamente.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['improbidade', 'legitimidade', 'MP']
  },
  {
    id: 'Q-DID-DA-24-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-24',
    subtema: 'Responsabilização de terceiros',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a responsabilização de terceiros por improbidade administrativa, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Apenas agentes públicos podem ser responsabilizados.' },
      { id: 'B', texto: 'Terceiros que induzam ou concorram para o ato de improbidade também podem ser responsabilizados (art. 3º da Lei 8.429/1992).' },
      { id: 'C', texto: 'Terceiros nunca respondem.' },
      { id: 'D', texto: 'Só respondem se forem servidores.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Terceiros que concorram para o ato também podem ser responsabilizados (art. 3º).',
      incorretas: { A: 'Terceiros também.', C: 'Podem responder.', D: 'Não é necessário ser servidor.' },
      conceitoCobrado: 'Responsabilização de terceiros',
      pegadinha: 'Achar que só agentes públicos respondem.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['improbidade', 'terceiros']
  },

  /* ============================================================
     DA-25 — Processo Administrativo
  ============================================================ */
  {
    id: 'Q-REAL-DA-25-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-25',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Fase de instrução',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'De acordo com a Lei Complementar nº 992/2023 do Município de Porto Alegre, as atividades de ___________ são destinadas a averiguar e comprovar os dados necessários à tomada de decisão e serão realizadas de ofício ou mediante impulsionamento do órgão responsável pelo processo administrativo, sem prejuízo do direito de os interessados proporem atuações probatórias. Assinale a alternativa que preenche corretamente a lacuna:',
    alternativas: [
      { id: 'A', texto: 'Instauração.' },
      { id: 'B', texto: 'Instrução.' },
      { id: 'C', texto: 'Tramitação.' },
      { id: 'D', texto: 'Edição.' },
      { id: 'E', texto: 'Homologação.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A fase de INSTRUÇÃO é destinada a averiguar e comprovar os dados necessários à tomada de decisão.',
      incorretas: { A: 'Instauração é o início.', C: 'Tramitação é o andamento.', D: 'Edição não é fase.', E: 'Homologação é aprovação.' },
      conceitoCobrado: 'Fases do processo administrativo',
      pegadinha: 'Confundir instrução com instauração.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['instrução', 'processo administrativo']
  },
  {
    id: 'Q-REAL-DA-25-002',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-25',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Comunicação dos atos processuais',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Segundo a Lei Complementar nº 992/2023 do Município de Porto Alegre, como se denomina a comunicação dos atos processuais?',
    alternativas: [
      { id: 'A', texto: 'Notificação.' },
      { id: 'B', texto: 'Averbação.' },
      { id: 'C', texto: 'Qualificação.' },
      { id: 'D', texto: 'Apensação.' },
      { id: 'E', texto: 'Indicação.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A comunicação dos atos processuais é feita por NOTIFICAÇÃO.',
      incorretas: { B: 'Averbação é registro.', C: 'Qualificação é identificação.', D: 'Apensação é união de processos.', E: 'Indicação não é comunicação.' },
      conceitoCobrado: 'Comunicação dos atos',
      pegadinha: 'Confundir notificação com outros institutos.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['notificação', 'comunicação']
  },
  {
    id: 'Q-REAL-DA-25-003',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-25',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Lei 9.784/99 — delegação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Suponha-se que uma autoridade do CREF-15 tenha revogado delegação de competência antes do término previsto no ato delegatório. Nesse caso, é CORRETO afirmar que, embora a delegação seja revogável a qualquer tempo, o ato de revogação deverá ser publicado em meio oficial.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. A delegação é revogável a qualquer tempo (art. 14 da Lei 9.784/99), e o ato de revogação deve ser publicado no meio oficial.',
      incorretas: { B: 'A afirmação está correta.' },
      conceitoCobrado: 'Delegação de competência',
      pegadinha: 'Achar que a revogação dispensa publicação.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['delegação', 'revogação']
  },
  {
    id: 'Q-REAL-DA-25-004',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-25',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Lei 9.784/99 — aplicação subsidiária',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Suponha-se que um processo administrativo específico, no âmbito do CREF-15, seja regido por lei própria, omissa quanto a determinada questão procedimental. Nesse caso, é CORRETO afirmar que se aplicam, subsidiariamente, os preceitos da Lei 9.784/1999.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. A Lei 9.784/99 aplica-se subsidiariamente aos processos administrativos específicos (art. 69).',
      incorretas: { B: 'A afirmação está correta.' },
      conceitoCobrado: 'Aplicação subsidiária da Lei 9.784/99',
      pegadinha: 'Achar que a lei específica exclui a aplicação subsidiária.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['Lei 9.784/99', 'aplicação subsidiária']
  },
  {
    id: 'Q-DID-DA-25-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-25',
    subtema: 'Processo administrativo x PODC',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a distinção entre processo administrativo (Lei 9.784/99) e ciclo administrativo (PODC), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'O processo administrativo (Lei 9.784/99) é o rito jurídico de decisão; o ciclo PODC é o conjunto de funções do gestor.' },
      { id: 'C', texto: 'O PODC é o rito jurídico.' },
      { id: 'D', texto: 'A Lei 9.784/99 regula o PODC.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'PROCESSO ADMINISTRATIVO: rito jurídico de decisão. CICLO PODC: funções do gestor.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'A Lei 9.784/99 regula o processo administrativo, não o PODC.' },
      conceitoCobrado: 'Processo administrativo x PODC',
      pegadinha: 'Confundir os conceitos pelo nome parecido.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['processo administrativo', 'PODC']
  },
  {
    id: 'Q-DID-DA-25-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-25',
    subtema: 'Impedimento x suspeição',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre impedimento e suspeição, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Impedimento: vínculo objetivo (cônjuge, parente até 3º grau, interesse direto). Suspeição: vínculo subjetivo (amizade íntima, inimizade).' },
      { id: 'C', texto: 'Impedimento é subjetivo; suspeição é objetiva.' },
      { id: 'D', texto: 'Ambos são subjetivos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'IMPEDIMENTO: vínculo OBJETIVO. SUSPEIÇÃO: vínculo SUBJETIVO.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'O impedimento é objetivo.' },
      conceitoCobrado: 'Impedimento x suspeição',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['impedimento', 'suspeição']
  },
  {
    id: 'Q-DID-DA-25-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-25',
    subtema: 'Fases do processo administrativo',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'São fases do processo administrativo, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Instauração.' },
      { id: 'B', texto: 'Instrução.' },
      { id: 'C', texto: 'Defesa.' },
      { id: 'D', texto: 'Homologação judicial.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A HOMOLOGAÇÃO JUDICIAL não é fase do processo administrativo — este é o rito da Administração. As fases são: instauração, instrução, defesa, relatório e decisão (além dos recursos).',
      incorretas: { A: 'É fase.', B: 'É fase.', C: 'É fase.' },
      conceitoCobrado: 'Fases do processo administrativo',
      pegadinha: 'Incluir fase judicial.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['processo administrativo', 'fases']
  },
  {
    id: 'Q-DID-DA-25-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-25',
    subtema: 'Recursos administrativos',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre os recursos administrativos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O pedido de reconsideração é dirigido à autoridade superior.' },
      { id: 'B', texto: 'O recurso hierárquico é dirigido à mesma autoridade.' },
      { id: 'C', texto: 'O pedido de reconsideração é dirigido à MESMA autoridade; o recurso hierárquico, à autoridade SUPERIOR.' },
      { id: 'D', texto: 'Não há recursos administrativos.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'RECONSIDERAÇÃO: mesma autoridade. RECURSO HIERÁRQUICO: autoridade superior.',
      incorretas: { A: 'Inverte.', B: 'Inverte.', D: 'Há recursos.' },
      conceitoCobrado: 'Recursos administrativos',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['recursos administrativos', 'reconsideração', 'hierárquico']
  },

  /* ============================================================
     DA-26 — Bens Públicos
  ============================================================ */
  {
    id: 'Q-DID-DA-26-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Classificação dos bens públicos',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'São exemplos de bens públicos de uso comum do povo, de uso especial e dominicais, respectivamente:',
    alternativas: [
      { id: 'A', texto: 'Praça, escola e terreno sem uso.' },
      { id: 'B', texto: 'Escola, praça e terreno sem uso.' },
      { id: 'C', texto: 'Terreno sem uso, escola e praça.' },
      { id: 'D', texto: 'Praça, terreno sem uso e escola.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'USO COMUM: praça (coletividade). USO ESPECIAL: escola (serviço público). DOMINICAL: terreno sem uso (sem destinação específica).',
      incorretas: { B: 'Inverte.', C: 'Inverte.', D: 'Inverte.' },
      conceitoCobrado: 'Classificação dos bens públicos',
      pegadinha: 'Inverter as categorias.',
      comoApareceEmConcurso: 'Cobrança de exemplos.'
    },
    tags: ['uso comum', 'uso especial', 'dominical']
  },
  {
    id: 'Q-DID-DA-26-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Imprescritibilidade',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre a imprescritibilidade dos bens públicos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Os bens públicos podem ser adquiridos por usucapião.' },
      { id: 'B', texto: 'Os bens públicos NÃO são adquiríveis por usucapião, independentemente do tempo de ocupação.' },
      { id: 'C', texto: 'Só os bens dominicais podem ser usucapidos.' },
      { id: 'D', texto: 'A imprescritibilidade não se aplica aos bens públicos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'IMPESCRITIBILIDADE: bens públicos NÃO são adquiridos por usucapião, independentemente do tempo.',
      incorretas: { A: 'Não são usucapíveis.', C: 'Nem os dominicais são usucapíveis.', D: 'Aplica-se.' },
      conceitoCobrado: 'Imprescritibilidade',
      pegadinha: 'Achar que o tempo de ocupação gera aquisição.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['imprescritibilidade', 'usucapião']
  },
  {
    id: 'Q-DID-DA-26-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Inalienabilidade e alienação',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Sobre a alienação de bens públicos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É livre, bastando a decisão da autoridade administrativa.' },
      { id: 'B', texto: 'Exige, em regra, autorização legislativa, avaliação prévia e licitação (leilão).' },
      { id: 'C', texto: 'Só pode ocorrer por doação.' },
      { id: 'D', texto: 'É vedada em qualquer hipótese.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alienação exige, em regra, autorização legislativa, avaliação prévia e licitação (leilão), além de outros requisitos legais.',
      incorretas: { A: 'Não é livre.', C: 'Pode ser venda, doação etc.', D: 'Há hipóteses permitidas.' },
      conceitoCobrado: 'Alienação de bens públicos',
      pegadinha: 'Achar que basta a decisão administrativa.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['alienação', 'leilão']
  },
  {
    id: 'Q-DID-DA-26-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Autorização, permissão e concessão de uso',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Sobre as formas de uso de bem público por particular, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Autorização: ato unilateral, precário, interesse do particular. Permissão: ato unilateral, precário, prazo indeterminado. Concessão: contrato, prazo determinado, precedido de licitação.' },
      { id: 'C', texto: 'Concessão é ato unilateral.' },
      { id: 'D', texto: 'Autorização exige licitação.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AUTORIZAÇÃO: ato precário, interesse do particular. PERMISSÃO: ato precário, prazo indeterminado. CONCESSÃO: contrato, prazo determinado, com licitação.',
      incorretas: { A: 'São distintos.', C: 'Concessão é contrato.', D: 'Autorização não exige licitação.' },
      conceitoCobrado: 'Formas de uso de bem público',
      pegadinha: 'Confundir as três formas.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['autorização', 'permissão', 'concessão de uso']
  },
  {
    id: 'Q-DID-DA-26-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Afetação x desafetação',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre afetação e desafetação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Afetação é a perda da destinação pública; desafetação é a atribuição de destinação pública.' },
      { id: 'B', texto: 'Afetação é a atribuição de destinação pública; desafetação é a perda dessa destinação.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Não existem no regime dos bens públicos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AFETAÇÃO: atribui destinação pública. DESAFETAÇÃO: retira a destinação pública. Bens desafetados podem ser alienados (se dominicais).',
      incorretas: { A: 'Inverte.', C: 'São distintos.', D: 'Existem.' },
      conceitoCobrado: 'Afetação x desafetação',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['afetação', 'desafetação']
  },
  {
    id: 'Q-DID-DA-26-006',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Caso concreto — alienação de bem desafetado',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Um prédio municipal funcionava como escola, mas a escola foi transferida para outro prédio novo, e o imóvel ficou sem uso. A Prefeitura quer vendê-lo. Sobre a situação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O imóvel continua sendo bem de uso especial e não pode ser alienado.' },
      { id: 'B', texto: 'Com a desafetação (cessação da destinação pública), o imóvel passa à categoria de bem dominical e pode ser alienado, cumpridos os requisitos legais (autorização legislativa, avaliação e licitação).' },
      { id: 'C', texto: 'O imóvel é bem de uso comum, podendo ser alienado livremente.' },
      { id: 'D', texto: 'A alienação depende apenas da decisão do Prefeito.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Com a DESAFETAÇÃO, o imóvel passa à categoria de bem DOMINICAL e pode ser alienado, cumpridos os requisitos (autorização legislativa, avaliação e licitação).',
      incorretas: { A: 'Houve desafetação.', C: 'Bem de uso comum não é o caso.', D: 'Depende de requisitos legais.' },
      conceitoCobrado: 'Desafetação e alienação',
      pegadinha: 'Achar que o imóvel continua afetado.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['desafetação', 'alienação']
  },
  {
    id: 'Q-DID-DA-26-007',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Impenhorabilidade',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre a impenhorabilidade dos bens públicos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Bens públicos podem ser penhorados livremente.' },
      { id: 'B', texto: 'Bens públicos NÃO podem ser penhorados — a execução contra o Estado segue o regime de precatórios.' },
      { id: 'C', texto: 'Só os bens dominicais são impenhoráveis.' },
      { id: 'D', texto: 'A impenhorabilidade não se aplica no setor público.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'IMPENHORABILIDADE: bens públicos não são penhoráveis — execução por precatórios.',
      incorretas: { A: 'Não podem ser penhorados.', C: 'A regra alcança os bens públicos em geral.', D: 'Aplica-se.' },
      conceitoCobrado: 'Impenhorabilidade',
      pegadinha: 'Achar que é possível a penhora.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['impenhorabilidade', 'precatórios']
  },
  {
    id: 'Q-DID-DA-26-008',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Bens de uso comum x uso especial',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre os bens de uso comum e os de uso especial, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Uso comum: destinados à coletividade em geral (ruas, praças, rios). Uso especial: destinados a serviço ou estabelecimento público (escolas, hospitais, repartições).' },
      { id: 'C', texto: 'Uso especial: destinados à coletividade. Uso comum: a serviço público.' },
      { id: 'D', texto: 'Nenhum dos dois pode ser afetado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'USO COMUM: coletividade em geral. USO ESPECIAL: serviço/estabelecimento público.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Ambos são afetados.' },
      conceitoCobrado: 'Uso comum x uso especial',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['uso comum', 'uso especial']
  },

  /* ============================================================
     DA-27 — Intervenção do Estado e restrições administrativas
  ============================================================ */
  {
    id: 'Q-DID-DA-27-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Formas de intervenção',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'São formas de intervenção do Estado na propriedade, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Desapropriação.' },
      { id: 'B', texto: 'Servidão administrativa.' },
      { id: 'C', texto: 'Tombamento.' },
      { id: 'D', texto: 'Confisco tributário.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'CONFISCO TRIBUTÁRIO não é forma de intervenção do Estado na propriedade (é sanção tributária). As formas de intervenção são: desapropriação, servidão administrativa, requisição, ocupação temporária, limitações administrativas e tombamento.',
      incorretas: { A: 'É forma.', B: 'É forma.', C: 'É forma.' },
      conceitoCobrado: 'Formas de intervenção do Estado',
      pegadinha: 'Incluir confisco tributário.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['intervenção', 'formas']
  },
  {
    id: 'Q-DID-DA-27-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Desapropriação — indenização',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre a desapropriação ordinária, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Dispensa indenização.' },
      { id: 'B', texto: 'Exige indenização prévia, justa e em dinheiro (regra do art. 5º, XXIV, CF).' },
      { id: 'C', texto: 'A indenização é paga em títulos, sempre.' },
      { id: 'D', texto: 'A indenização é facultativa.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A DESAPROPRIAÇÃO ORDINÁRIA exige indenização PRÉVIA, JUSTA e EM DINHEIRO (regra do art. 5º, XXIV).',
      incorretas: { A: 'Exige indenização.', C: 'Títulos são de hipóteses específicas.', D: 'É obrigatória.' },
      conceitoCobrado: 'Desapropriação — indenização',
      pegadinha: 'Generalizar títulos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['desapropriação', 'indenização']
  },
  {
    id: 'Q-DID-DA-27-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Desapropriação extraordinária',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Sobre a desapropriação extraordinária (art. 243 da CF), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É a mesma coisa que a desapropriação indireta (confisco).' },
      { id: 'B', texto: 'Destina-se ao cultivo ilegal de plantas psicotrópicas, com indenização apenas das benfeitorias úteis.' },
      { id: 'C', texto: 'Dispensa qualquer indenização.' },
      { id: 'D', texto: 'É a mesma coisa que a desapropriação ordinária.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A DESAPROPRIAÇÃO EXTRAORDINÁRIA (art. 243) é para cultivo ilegal de plantas psicotrópicas, com indenização apenas das benfeitorias úteis.',
      incorretas: { A: 'É distinta da indireta.', C: 'Há indenização das benfeitorias úteis.', D: 'É distinta da ordinária.' },
      conceitoCobrado: 'Desapropriação extraordinária',
      pegadinha: 'Confundir com ordinária ou indireta.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['desapropriação extraordinária', 'art. 243']
  },
  {
    id: 'Q-DID-DA-27-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Servidão administrativa x desapropriação',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Sobre a servidão administrativa e a desapropriação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Servidão: ônus real, sem transferência da propriedade. Desapropriação: transfere a propriedade ao Estado, com indenização.' },
      { id: 'C', texto: 'Servidão transfere a propriedade.' },
      { id: 'D', texto: 'Desapropriação não transfere a propriedade.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'SERVIDÃO: ônus real, sem transferência. DESAPROPRIAÇÃO: transfere a propriedade, com indenização.',
      incorretas: { A: 'São distintos.', C: 'Servidão não transfere.', D: 'Desapropriação transfere.' },
      conceitoCobrado: 'Servidão x desapropriação',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['servidão', 'desapropriação']
  },
  {
    id: 'Q-DID-DA-27-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Requisição administrativa',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre a requisição administrativa, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Transfere definitivamente a propriedade ao Estado.' },
      { id: 'B', texto: 'É o uso TEMPORÁRIO de bem particular em caso de IMINENTE PERIGO PÚBLICO, com indenização ULTERIOR se houver dano (art. 5º, XXV, CF).' },
      { id: 'C', texto: 'Nunca gera indenização.' },
      { id: 'D', texto: 'Não existe na CF/88.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A REQUISIÇÃO é uso TEMPORÁRIO de bem particular em caso de IMINENTE PERIGO PÚBLICO, com indenização ULTERIOR se houver dano (art. 5º, XXV).',
      incorretas: { A: 'Não transfere propriedade.', C: 'Pode gerar indenização ulterior.', D: 'Existe (art. 5º, XXV).' },
      conceitoCobrado: 'Requisição administrativa',
      pegadinha: 'Achar que transfere propriedade.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['requisição', 'art. 5º, XXV']
  },
  {
    id: 'Q-DID-DA-27-006',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Ocupação temporária',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre a ocupação temporária, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É o uso temporário de imóvel para obras ou serviços públicos (ex.: canteiro de obras).' },
      { id: 'B', texto: 'Transfere a propriedade ao Estado.' },
      { id: 'C', texto: 'Só ocorre em caso de calamidade.' },
      { id: 'D', texto: 'Não gera direito a indenização.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A OCUPAÇÃO TEMPORÁRIA é uso temporário de imóvel para obras ou serviços públicos (ex.: canteiro de obras).',
      incorretas: { B: 'Não transfere.', C: 'Calamidade é hipótese de requisição.', D: 'Em regra, gera indenização.' },
      conceitoCobrado: 'Ocupação temporária',
      pegadinha: 'Confundir com requisição.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['ocupação temporária']
  },
  {
    id: 'Q-DID-DA-27-007',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Limitações administrativas',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre as limitações administrativas, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São restrições gerais e abstratas ao uso da propriedade, em regra sem indenização (salvo se esvaziarem o valor econômico do bem).' },
      { id: 'B', texto: 'Transferem a propriedade ao Estado.' },
      { id: 'C', texto: 'Sempre geram indenização.' },
      { id: 'D', texto: 'Só atingem um único imóvel.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'LIMITAÇÕES: gerais e abstratas (zoneamento, gabarito), em regra sem indenização.',
      incorretas: { B: 'Não transferem.', C: 'Em regra, não indenizam.', D: 'São gerais (não individuais).' },
      conceitoCobrado: 'Limitações administrativas',
      pegadinha: 'Generalizar a indenização.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['limitações administrativas']
  },
  {
    id: 'Q-DID-DA-27-008',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Tombamento',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre o tombamento, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Transfere a propriedade ao Estado.' },
      { id: 'B', texto: 'Preserva bem de valor cultural, impondo restrições à conservação e ao uso, SEM transferir a propriedade.' },
      { id: 'C', texto: 'Sempre gera indenização.' },
      { id: 'D', texto: 'Só pode ser feito pela União.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O TOMBAMENTO preserva bem de valor cultural, impondo restrições, SEM transferir a propriedade. Em regra, não gera indenização (salvo se esvaziar o valor econômico).',
      incorretas: { A: 'Não transfere.', C: 'Em regra, não indeniza.', D: 'Pode ser feito por União, Estados, DF e Municípios.' },
      conceitoCobrado: 'Tombamento',
      pegadinha: 'Achar que transfere propriedade.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['tombamento']
  },

  /* ============================================================
     REV-28 — Revisão integrada e domínio por questões
  ============================================================ */
  {
    id: 'Q-DID-REV-28-001',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Revisão ativa x revisão passiva',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre as estratégias de revisão, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A revisão passiva (reler, grifar) é mais eficiente que a ativa.' },
      { id: 'B', texto: 'A revisão ativa (questões, flashcards, ensinar) tem maior retenção que a passiva, pois exige recuperação ativa.' },
      { id: 'C', texto: 'Revisão ativa e passiva têm o mesmo efeito.' },
      { id: 'D', texto: 'A revisão só é eficaz se feita uma única vez.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A REVISÃO ATIVA tem maior retenção — exige recuperação ativa (active recall).',
      incorretas: { A: 'Inverte.', C: 'Têm efeitos diferentes.', D: 'A revisão deve ser periódica.' },
      conceitoCobrado: 'Revisão ativa x passiva',
      pegadinha: 'Achar que reler é suficiente.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['revisão ativa', 'revisão passiva']
  },
  {
    id: 'Q-DID-REV-28-002',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Banco de erros e classificação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o banco de erros e a classificação dos erros, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O banco de erros só conta a quantidade de erros, sem classificação.' },
      { id: 'B', texto: 'O banco de erros registra as questões erradas e classifica a causa (falta de conhecimento, confusão, interpretação, pegadinha, esquecimento, pressa); cada tipo exige ação diferente.' },
      { id: 'C', texto: 'Todos os erros são falta de conhecimento.' },
      { id: 'D', texto: 'O banco substitui a resolução de novas questões.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O banco classifica a CAUSA do erro — cada tipo exige ação diferente.',
      incorretas: { A: 'Há classificação.', C: 'Há seis tipos.', D: 'Novas questões são essenciais.' },
      conceitoCobrado: 'Banco de erros',
      pegadinha: 'Tratar todo erro como falta de conhecimento.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['banco de erros', 'classificação']
  },
  {
    id: 'Q-DID-REV-28-003',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Classificação do erro em caso concreto',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma estudante resolveu 20 questões de Atos Administrativos e identificou: (i) 5 erros por confundir anulação com revogação; (ii) 3 erros por não saber o conceito de contraposição; (iii) 2 erros por não perceber que o enunciado pediu a alternativa INCORRETA; (iv) 1 erro por responder rápido demais. Sobre a classificação e a ação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Todos os erros são falta de conhecimento, e a ação é a mesma.' },
      { id: 'B', texto: '(i) confusão entre conceitos (ação: comparar); (ii) falta de conhecimento (ação: estudar); (iii) interpretação (ação: treinar leitura); (iv) pressa (ação: gerenciar tempo) — cada tipo exige ação diferente.' },
      { id: 'C', texto: '(i) pressa; (ii) interpretação; (iii) falta de conhecimento; (iv) confusão.' },
      { id: 'D', texto: 'Nenhum dos erros pode ser classificado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '(i) confusão; (ii) falta de conhecimento; (iii) interpretação; (iv) pressa — cada um com ação própria.',
      incorretas: { A: 'Há tipos distintos.', C: 'Inverte.', D: 'Todos podem ser classificados.' },
      conceitoCobrado: 'Classificação de erros',
      pegadinha: 'Simplificar a classificação.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['classificação de erros', 'estudo']
  },
  {
    id: 'Q-DID-REV-28-004',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Revisão espaçada',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a revisão espaçada, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Programa retornos em intervalos crescentes (1, 3, 7, 15, 30, 60 dias), combatendo o esquecimento no ponto certo.' },
      { id: 'B', texto: 'É sinônimo de revisão contínua sem programação.' },
      { id: 'C', texto: 'Só funciona para flashcards, não para questões.' },
      { id: 'D', texto: 'Dispensa o planejamento.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A REVISÃO ESPAÇADA programa retornos em intervalos crescentes — combate o esquecimento no ponto certo.',
      incorretas: { B: 'É programada.', C: 'Funciona para questões e flashcards.', D: 'Exige planejamento.' },
      conceitoCobrado: 'Revisão espaçada',
      pegadinha: 'Achar que é contínua sem programação.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['revisão espaçada']
  },
  {
    id: 'Q-DID-REV-28-005',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Ciclo x cronograma',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre ciclo e cronograma de estudo, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Ciclo é flexível (teoria → questões → revisão); cronograma distribui matérias por datas fixas. O ideal é combinar os dois.' },
      { id: 'C', texto: 'Ciclo é rígido.' },
      { id: 'D', texto: 'Cronograma é flexível.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'CICLO: flexível. CRONOGRAMA: rígido. O ideal é combinar.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Inverte.' },
      conceitoCobrado: 'Ciclo x cronograma',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['ciclo', 'cronograma']
  },
  {
    id: 'Q-DID-REV-28-006',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Integração entre módulos — gestão de pessoas e atendimento',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um servidor atende mal o cidadão, tratando-o com rispidez. Sobre a situação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A situação não envolve improbidade administrativa nem princípio administrativo.' },
      { id: 'B', texto: 'A conduta viola princípios da Administração (impessoalidade e moralidade) e os deveres de atendimento (urbanidade, cortesia); pode gerar responsabilização administrativa, mas não se confunde com improbidade (que exige dolo e gravidade).' },
      { id: 'C', texto: 'A conduta é improbidade.' },
      { id: 'D', texto: 'A conduta é crime.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A conduta viola princípios (impessoalidade, moralidade) e deveres de atendimento. Pode gerar responsabilização administrativa, mas não se confunde com improbidade (que exige dolo e gravidade).',
      incorretas: { A: 'Envolve princípios e deveres.', C: 'Improbidade exige dolo e gravidade.', D: 'Não necessariamente crime.' },
      conceitoCobrado: 'Integração entre ADM-12, DA-15, DA-24',
      pegadinha: 'Classificar toda falha como improbidade.',
      comoApareceEmConcurso: 'Cenário integrado.'
    },
    tags: ['integração', 'atendimento', 'princípios']
  },
  {
    id: 'Q-DID-REV-28-007',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Integração entre módulos — atos administrativos e improbidade',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um servidor pratica ato administrativo com vício de finalidade (perseguição a desafeto). Sobre as consequências, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O ato é apenas irregular, sem consequências.' },
      { id: 'B', texto: 'O ato é nulo (vício de finalidade — insanável); pode configurar improbidade se houver DOLO e GRAVIDADE, e gerar responsabilização administrativa, civil e penal.' },
      { id: 'C', texto: 'O ato é válido, pois o servidor tinha competência.' },
      { id: 'D', texto: 'O ato pode ser convalidado, pois o vício de finalidade é sanável.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Vício de finalidade é insanável — o ato é NULO. Pode configurar improbidade (se dolo e gravidade) e gerar responsabilizações.',
      incorretas: { A: 'Há consequências.', C: 'Vício de finalidade torna o ato nulo.', D: 'Vício de finalidade é insanável.' },
      conceitoCobrado: 'Integração entre DA-19 e DA-24',
      pegadinha: 'Achar que o vício de finalidade é convalidável.',
      comoApareceEmConcurso: 'Cenário integrado.'
    },
    tags: ['integração', 'ato administrativo', 'improbidade']
  },
  {
    id: 'Q-DID-REV-28-008',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Integração entre módulos — organização e licitação',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um órgão público decide contratar diretamente uma empresa privada para serviços de manutenção, sem licitação, com o argumento de "urgência". Sobre a situação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A contratação direta é sempre válida em caso de urgência.' },
      { id: 'B', texto: 'A contratação direta por urgência exige que a situação se enquadre nas hipóteses legais (emergência ou calamidade) e que sejam cumpridos os requisitos formais (motivação, justificativa, processo administrativo) — caso contrário, é irregular.' },
      { id: 'C', texto: 'A urgência dispensa qualquer formalidade.' },
      { id: 'D', texto: 'A contratação direta é sempre improbidade.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A contratação direta por urgência exige enquadramento legal (emergência/calamidade) e cumprimento dos requisitos formais. Sem isso, é irregular.',
      incorretas: { A: 'Não é sempre válida.', C: 'Exige formalidades.', D: 'Não é sempre improbidade.' },
      conceitoCobrado: 'Integração entre DA-16, DA-21 e DA-24',
      pegadinha: 'Achar que a urgência dispensa requisitos.',
      comoApareceEmConcurso: 'Cenário integrado.'
    },
    tags: ['integração', 'licitação', 'urgência']
  }

];
