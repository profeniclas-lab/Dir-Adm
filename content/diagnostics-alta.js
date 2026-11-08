/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade ALTA
   Administração + Direito Administrativo
   Entregues: ADM-01, ADM-02, ADM-03, ADM-04
   Padrão por módulo: 3 MC (1 difícil) + 2 V/F + 1 situação + 1 autoavaliação
   Próximos sub-lotes: 4.2 (ADM-06, ADM-07, ADM-10, ADM-11)
                       4.3 (AP-13, AP-14, DA-15, DA-16, DA-17, DA-18)
                       4.4 (DA-19, DA-20, DA-21, DA-23, DA-25, REV-28)
   ============================================================ */

window.DIAGNOSTICS_ALTA = {

  /* ============================================================
     ADM-01 — Fundamentos de Administração
  ============================================================ */
  'ADM-01': {
    id: 'D-ADM-01',
    moduloId: 'ADM-01',
    itens: [
      {
        id: 'D-ADM-01-01',
        tipo: 'multipla_escolha',
        subtopico: 'Eficiência, eficácia, efetividade e produtividade',
        pergunta: 'Sobre os conceitos de eficiência, eficácia, efetividade e produtividade na Administração, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Eficiência é a capacidade de atingir os objetivos organizacionais, enquanto eficácia é o uso racional dos recursos.' },
          { id: 'B', texto: 'Eficácia refere-se ao atingimento dos objetivos; eficiência, ao uso racional dos recursos; efetividade, ao impacto social positivo real; produtividade, à relação entre outputs e inputs.' },
          { id: 'C', texto: 'Efetividade e eficácia são sinônimos — ambas medem o atingimento de metas internas.' },
          { id: 'D', texto: 'Produtividade é sinônimo de eficácia: mede exclusivamente o alcance dos objetivos organizacionais.' }
        ],
        gabarito: 'B',
        explicacao: 'Eficiência = meios (uso racional de recursos); eficácia = fins (atingimento de objetivos); efetividade = impacto social real mantido no tempo; produtividade = relação output/input. A alternativa A inverte eficiência e eficácia; C confunde efetividade com eficácia; D confunde produtividade com eficácia.'
      },
      {
        id: 'D-ADM-01-02',
        tipo: 'multipla_escolha',
        subtopico: 'Níveis organizacionais e habilidades do administrador (Katz)',
        pergunta: 'Segundo a teoria de Katz sobre as habilidades do administrador, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'As habilidades técnicas são mais exigidas no nível estratégico; as conceituais, no nível operacional.' },
          { id: 'B', texto: 'As habilidades humanas são exigidas exclusivamente no nível tático, não sendo relevantes nos níveis estratégico e operacional.' },
          { id: 'C', texto: 'As habilidades técnicas predominam no nível operacional; as conceituais, no nível estratégico; as humanas são exigidas em todos os níveis, com destaque no tático.' },
          { id: 'D', texto: 'As três habilidades (técnicas, humanas e conceituais) têm o mesmo peso em todos os níveis organizacionais, sem qualquer predominância.' }
        ],
        gabarito: 'C',
        explicacao: 'A correspondência clássica de Katz é: técnicas (operacional), conceituais (estratégico) e humanas (todos os níveis, com destaque no tático). A alternativa A inverte; B restringe indevidamente as humanas; D nega a predominância relativa, que é o ponto central da teoria.'
      },
      {
        id: 'D-ADM-01-03',
        tipo: 'multipla_escolha',
        subtopico: 'Diferenças entre eficiência, eficácia e efetividade (nível difícil)',
        pergunta: 'Um órgão público implanta um novo sistema de agendamento que reduz em 40% o tempo de marcação de consultas, mas NÃO consegue ampliar o número de consultas realizadas, porque a equipe médica permanece insuficiente. A economia gerada com a redução do tempo é realocada para outras áreas, sem qualquer impacto perceptível na saúde da população atendida. Sobre as dimensões de desempenho, é correto afirmar que o órgão foi:',
        alternativas: [
          { id: 'A', texto: 'eficiente, eficaz e efetivo, porque houve economia e melhoria no processo.' },
          { id: 'B', texto: 'eficiente (uso mais racional do tempo), mas não eficaz (não ampliou consultas) nem efetivo (não houve impacto social real na saúde).' },
          { id: 'C', texto: 'eficaz, mas não eficiente, porque o sistema melhorou o processo sem reduzir custos.' },
          { id: 'D', texto: 'efetivo, porque a economia foi realocada para outras áreas, gerando impacto social indireto.' }
        ],
        gabarito: 'B',
        explicacao: 'Houve EFICIÊNCIA (redução de 40% no tempo = uso mais racional de recurso), mas NÃO houve EFICÁCIA (a meta de ampliar consultas não foi atingida) e NÃO houve EFETIVIDADE (não houve impacto social real na saúde da população). A realocação da economia não configura efetividade por si só, pois falta o efeito transformador na vida das pessoas. É a distinção mais fina do tema — e a que separa quem decorou de quem entendeu.'
      },
      {
        id: 'D-ADM-01-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Ciclo PODC',
        pergunta: 'O PODC (Planejamento, Organização, Direção e Controle) é um ciclo contínuo e interdependente: o controle alimenta um novo planejamento, reiniciando o processo. Não se trata de uma sequência linear que termina no controle.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. O PODC é cíclico e interdependente: o produto do controle (desvios identificados) realimenta o próximo planejamento. Não é uma sequência rígida que termina no controle — é um processo contínuo.'
      },
      {
        id: 'D-ADM-01-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Habilidades do administrador',
        pergunta: 'As habilidades humanas (relacionamento interpessoal) são exigidas exclusivamente do nível tático, não sendo relevantes no nível estratégico nem no nível operacional.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. As habilidades humanas são exigidas em TODOS os níveis organizacionais — com peso relativo maior no tático, mas igualmente necessárias no estratégico (liderança de alta direção) e no operacional (supervisão de equipes). O que varia é a predominância relativa, não a exigência.'
      },
      {
        id: 'D-ADM-01-06',
        tipo: 'situacao',
        subtopico: 'Aplicação de eficiência, eficácia e efetividade',
        pergunta: 'Um município cria um programa de distribuição de cestas básicas. O programa é executado com o menor custo possível (eficiência), entrega 100% das cestas previstas no prazo (eficácia), mas, ao final de um ano, a insegurança alimentar das famílias atendidas permanece inalterada, porque o programa não foi acompanhado de ações estruturantes (geração de renda, qualificação). Sobre o desempenho do programa, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Foi eficiente, eficaz e efetivo — os três critérios foram plenamente atendidos.' },
          { id: 'B', texto: 'Foi eficiente e eficaz, mas NÃO foi efetivo — não houve impacto social real na vida das famílias.' },
          { id: 'C', texto: 'Foi efetivo, mas não eficiente — o baixo custo comprometeu a efetividade.' },
          { id: 'D', texto: 'Não foi eficiente nem eficaz — o programa não gerou resultado algum.' }
        ],
        gabarito: 'B',
        explicacao: 'O programa foi EFICIENTE (menor custo), EFICAZ (100% das cestas no prazo), mas NÃO foi EFETIVO (não transformou a realidade social — a insegurança alimentar permaneceu). A efetividade exige impacto social real e duradouro, não apenas cumprimento de metas internas.'
      },
      {
        id: 'D-ADM-01-07',
        tipo: 'autoavaliacao',
        subtopico: 'Distinção dos conceitos de desempenho',
        pergunta: 'Você consegue, sem consultar, diferenciar eficiência, eficácia, efetividade e produtividade — e explicar um exemplo de cada?',
        resposta: 'EFICIÊNCIA: uso racional dos recursos (meios). Ex.: reduzir o consumo de papel em 30%. EFICÁCIA: atingimento dos objetivos organizacionais (fins). Ex.: atender 100% dos pedidos no prazo legal. EFETIVIDADE: impacto social positivo real, mantido no tempo. Ex.: redução efetiva da mortalidade infantil após o programa. PRODUTIVIDADE: relação entre outputs e inputs. Ex.: 30 processos analisados por servidor/hora. A chave é: eficiência olha o meio; eficácia, o fim; efetividade, o impacto; produtividade, a relação entre produção e recursos.'
      }
    ]
  },

  /* ============================================================
     ADM-02 — Processo Administrativo
  ============================================================ */
  'ADM-02': {
    id: 'D-ADM-02',
    moduloId: 'ADM-02',
    itens: [
      {
        id: 'D-ADM-02-01',
        tipo: 'multipla_escolha',
        subtopico: 'Funções administrativas (PODC)',
        pergunta: 'Sobre as quatro funções administrativas que compõem o PODC, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'O PODC é uma sequência rígida: cada função só pode ser iniciada após o término completo da anterior, sem retorno.' },
          { id: 'B', texto: 'As funções são interdependentes e cíclicas: o controle alimenta novo planejamento, e as funções podem ocorrer simultaneamente em diferentes níveis da organização.' },
          { id: 'C', texto: 'O controle é a função que antecede o planejamento, pois é ele que define os objetivos organizacionais.' },
          { id: 'D', texto: 'A direção é a função que estrutura os recursos e atividades, e a organização é a que lidera e motiva pessoas.' }
        ],
        gabarito: 'B',
        explicacao: 'O PODC é interdependente e cíclico: o controle realimenta o planejamento, e as funções podem ocorrer em paralelo nos diferentes níveis. A alternativa A descreve uma linearidade que não existe; C inverte a lógica (o planejamento precede o controle); D inverte organização e direção.'
      },
      {
        id: 'D-ADM-02-02',
        tipo: 'multipla_escolha',
        subtopico: 'Planejamento e controle como "espelhos"',
        pergunta: 'Sobre a relação entre as funções de planejamento e controle, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'São funções independentes: o planejamento define objetivos, e o controle não se relaciona com esses objetivos.' },
          { id: 'B', texto: 'O planejamento define os padrões de desempenho; o controle compara o desempenho real com esses padrões e corrige desvios. Sem padrões de planejamento, não há como controlar.' },
          { id: 'C', texto: 'O controle precede o planejamento, pois é ele que define os padrões a serem alcançados.' },
          { id: 'D', texto: 'O controle só existe no setor privado; no setor público, não há controle de desempenho.' }
        ],
        gabarito: 'B',
        explicacao: 'Planejamento e controle são funções-espelho: o planejamento estabelece padrões; o controle mede e compara o desempenho real com esses padrões, corrigindo desvios. Sem padrões definidos no planejamento, o controle não tem referência. A alternativa C inverte a lógica; A e D negam a relação.'
      },
      {
        id: 'D-ADM-02-03',
        tipo: 'multipla_escolha',
        subtopico: 'PODC x Processo Administrativo (Lei 9.784/99) (nível difícil)',
        pergunta: 'Um servidor afirma: "Como estou no setor de processos, minha função principal é o processo administrativo — ou seja, planejar, organizar, dirigir e controlar." Com base na distinção técnica entre os dois conceitos, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A afirmação está correta: processo administrativo (Lei 9.784/99) e ciclo PODC são sinônimos.' },
          { id: 'B', texto: 'A afirmação confunde dois conceitos distintos: o PODC é o ciclo de funções do gestor (teoria geral); o processo administrativo da Lei 9.784/99 é o rito jurídico de decisão da Administração, com fases, prazos, contraditório e ampla defesa.' },
          { id: 'C', texto: 'A afirmação está parcialmente correta: o PODC é aplicável apenas ao setor privado, e o processo administrativo da Lei 9.784/99, apenas ao setor público.' },
          { id: 'D', texto: 'A afirmação está correta apenas se o servidor atuar em órgão federal, pois a Lei 9.784/99 só se aplica à União.' }
        ],
        gabarito: 'B',
        explicacao: 'Há uma confusão terminológica clássica: o PODC é o ciclo de funções administrativas (planejar, organizar, dirigir, controlar), estudado na Teoria Geral da Administração. O "processo administrativo" da Lei 9.784/1999 é o rito jurídico pelo qual a Administração Pública toma decisões (instauração, instrução, defesa, relatório, decisão, recursos). São conceitos DIFERENTES, apesar do nome parecido. Esta é a pegadinha mais recorrente do módulo.'
      },
      {
        id: 'D-ADM-02-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Natureza do PODC',
        pergunta: 'O PODC é uma sequência linear e estanque: cada função termina completamente antes de a próxima começar, e o ciclo termina no controle.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. O PODC é cíclico e interdependente: as funções se interpenetram, podem ocorrer simultaneamente em diferentes níveis e o controle realimenta novo planejamento. Não há um "fim" no controle.'
      },
      {
        id: 'D-ADM-02-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Finalidade do controle',
        pergunta: 'A função de controle limita-se a punir servidores que cometem irregularidades.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. O controle é função diagnóstica: mede o desempenho, compara com os padrões do planejamento e corrige desvios para melhorar resultados. A punição é apenas uma das possíveis ações corretivas — e não a principal.'
      },
      {
        id: 'D-ADM-02-06',
        tipo: 'situacao',
        subtopico: 'Identificação de função administrativa',
        pergunta: 'Uma Secretaria de Educação define, em janeiro, a meta de elevar o IDEB em 15% até o final do ano. Em fevereiro, redistribui turmas e professores entre as escolas. Em março, o Secretário faz reuniões de motivação com os diretores. Em novembro, analisa os resultados das avaliações e identifica que duas escolas ficaram abaixo da meta, decidindo reforçar a formação de professores nelas. As funções administrativas exercidas em janeiro, fevereiro, março e novembro são, respectivamente:',
        alternativas: [
          { id: 'A', texto: 'Controle, organização, direção e planejamento.' },
          { id: 'B', texto: 'Planejamento, organização, direção e controle.' },
          { id: 'C', texto: 'Organização, planejamento, controle e direção.' },
          { id: 'D', texto: 'Direção, controle, planejamento e organização.' }
        ],
        gabarito: 'B',
        explicacao: 'Janeiro: definição de meta = PLANEJAMENTO. Fevereiro: redistribuição de turmas e professores = ORGANIZAÇÃO (estruturação de recursos). Março: reuniões de motivação = DIREÇÃO (liderança). Novembro: análise de resultados e ação corretiva = CONTROLE. É a aplicação clássica do PODC em sequência lógica.'
      },
      {
        id: 'D-ADM-02-07',
        tipo: 'autoavaliacao',
        subtopico: 'Ciclo e interdependência do PODC',
        pergunta: 'Você consegue explicar, sem consultar, por que o PODC é considerado um ciclo interdependente — e não uma sequência linear?',
        resposta: 'O PODC é interdependente porque as funções se alimentam mutuamente: o planejamento define os padrões que o controle vai usar; o controle, ao identificar desvios, gera informação que realimenta novo planejamento. Além disso, as funções ocorrem simultaneamente nos diferentes níveis organizacionais (enquanto a cúpula planeja o próximo ciclo, a base executa o atual). Não há um "fim" no controle — ele é o início do próximo ciclo. Essa é a diferença entre uma visão linear (ultrapassada) e uma visão sistêmica (correta) do PODC.'
      }
    ]
  },

  /* ============================================================
     ADM-03 — Planejamento
  ============================================================ */
  'ADM-03': {
    id: 'D-ADM-03',
    moduloId: 'ADM-03',
    itens: [
      {
        id: 'D-ADM-03-01',
        tipo: 'multipla_escolha',
        subtopico: 'Missão, visão, valores, objetivos e metas',
        pergunta: 'Sobre os elementos do planejamento, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Missão é onde a organização quer chegar no futuro; visão é a razão de sua existência no presente.' },
          { id: 'B', texto: 'Missão é a razão de existir da organização (presente); visão é onde ela quer chegar (futuro); valores são os princípios que orientam a conduta; objetivos são alvos amplos; metas são objetivos quantificados com prazo.' },
          { id: 'C', texto: 'Objetivos e metas são sinônimos: ambos são amplos e qualitativos.' },
          { id: 'D', texto: 'Valores são metas de curto prazo, e planos são documentos que independem dos objetivos organizacionais.' }
        ],
        gabarito: 'B',
        explicacao: 'Missão = razão de existir (presente). Visão = onde quer chegar (futuro). Valores = princípios de conduta. Objetivos = alvos amplos e qualitativos. Metas = objetivos quantificados e datados. Planos = documentos que formalizam as estratégias. A alternativa A inverte missão e visão; C confunde objetivo com meta; D confunde valores com metas.'
      },
      {
        id: 'D-ADM-03-02',
        tipo: 'multipla_escolha',
        subtopico: 'Análise SWOT',
        pergunta: 'Na análise SWOT, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Forças e fraquezas são fatores internos, controláveis pela organização; oportunidades e ameaças são fatores externos, não controláveis.' },
          { id: 'B', texto: 'Forças e oportunidades são fatores internos; fraquezas e ameaças são externos.' },
          { id: 'C', texto: 'Todos os quatro elementos são internos — a SWOT analisa apenas o ambiente da organização.' },
          { id: 'D', texto: 'Todos os quatro elementos são externos — a SWOT analisa apenas o ambiente em que a organização está inserida.' }
        ],
        gabarito: 'A',
        explicacao: 'SWOT = forças e fraquezas (ambiente INTERNO, controlável) + oportunidades e ameaças (ambiente EXTERNO, não controlável). A distinção interno x externo é o ponto central — e a pegadinha mais comum. As alternativas B, C e D trocam indevidamente as categorias.'
      },
      {
        id: 'D-ADM-03-03',
        tipo: 'multipla_escolha',
        subtopico: 'Balanced Scorecard (BSC) (nível difícil)',
        pergunta: 'Uma Secretaria de Saúde está implementando o Balanced Scorecard (BSC) e definiu os seguintes objetivos estratégicos: (i) reduzir a mortalidade infantil em 20% em 3 anos; (ii) ampliar a satisfação dos usuários nas UBS para 85%; (iii) reduzir o tempo médio de espera por consulta de 30 para 10 dias; (iv) capacitar 100% dos enfermeiros em protocolos de atenção básica. Em relação às quatro perspectivas clássicas do BSC, esses objetivos correspondem, respectivamente, a:',
        alternativas: [
          { id: 'A', texto: 'Clientes, financeira, processos internos e aprendizado/crescimento.' },
          { id: 'B', texto: 'Clientes (ou sociedade), clientes, processos internos e aprendizado/crescimento.' },
          { id: 'C', texto: 'Financeira, clientes, aprendizado/crescimento e processos internos.' },
          { id: 'D', texto: 'Processos internos, clientes, aprendizado/crescimento e financeira.' }
        ],
        gabarito: 'B',
        explicacao: 'No BSC, as quatro perspectivas clássicas são: financeira, clientes, processos internos e aprendizado/crescimento. No setor público, é comum adaptar "clientes" para "sociedade" — por isso o item (i) "reduzir a mortalidade infantil" é tipicamente da perspectiva SOCIEDADE (cliente no setor público). O item (ii) "satisfação dos usuários" é claramente da perspectiva CLIENTES. O item (iii) "reduzir tempo de espera" é da perspectiva PROCESSOS INTERNOS. O item (iv) "capacitar enfermeiros" é da perspectiva APRENDIZADO/CRESCIMENTO. Esta é uma questão difícil porque exige conhecer as quatro perspectivas e saber aplicá-las a um contexto específico — e distinguir a adaptação "sociedade" no setor público.'
      },
      {
        id: 'D-ADM-03-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Objetivo x meta',
        pergunta: 'Meta é um alvo mais amplo e qualitativo que objetivo; por isso, toda meta pressupõe um objetivo quantificado.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso — a relação é o contrário. Objetivo é amplo e qualitativo (ex.: "melhorar o atendimento"). Meta é o objetivo quantificado com prazo (ex.: "reduzir o tempo médio de espera em 30% até dezembro"). Toda META pressupõe um OBJETIVO, e não o inverso.'
      },
      {
        id: 'D-ADM-03-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Análise SWOT — interno x externo',
        pergunta: 'Na análise SWOT, as forças e as oportunidades são ambas categorias do ambiente externo, pois representam fatores positivos que a organização pode aproveitar.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. FORÇAS são fatores INTERNOS positivos (controláveis). OPORTUNIDADES são fatores EXTERNOS positivos (não controláveis). A distinção entre interno e externo é fundamental — não se pode agrupá-las como "ambiente externo".'
      },
      {
        id: 'D-ADM-03-06',
        tipo: 'situacao',
        subtopico: 'Classificação em SWOT',
        pergunta: 'Uma escola pública municipal está realizando sua análise SWOT para o planejamento de 2025. Foram levantados quatro pontos: (1) o corpo docente da escola é altamente qualificado e estável; (2) a Prefeitura anunciou um novo programa de financiamento para reforma de escolas; (3) o prédio da escola tem problemas estruturais na rede elétrica; (4) há previsão de corte no repasse de recursos federais. Esses pontos correspondem, respectivamente, a:',
        alternativas: [
          { id: 'A', texto: 'Força, oportunidade, fraqueza e ameaça.' },
          { id: 'B', texto: 'Oportunidade, força, ameaça e fraqueza.' },
          { id: 'C', texto: 'Força, fraqueza, oportunidade e ameaça.' },
          { id: 'D', texto: 'Fraqueza, oportunidade, força e ameaça.' }
        ],
        gabarito: 'A',
        explicacao: '(1) Corpo docente qualificado = FORÇA (interno positivo). (2) Programa de financiamento anunciado = OPORTUNIDADE (externo positivo). (3) Problemas na rede elétrica = FRAQUEZA (interno negativo). (4) Corte no repasse federal = AMEAÇA (externo negativo). A chave é sempre: interno (controlável) x externo (não controlável); positivo x negativo.'
      },
      {
        id: 'D-ADM-03-07',
        tipo: 'autoavaliacao',
        subtopico: 'Elementos do planejamento e ferramentas',
        pergunta: 'Você consegue, sem consultar, explicar os elementos do planejamento (missão, visão, valores, objetivos, metas, estratégias, planos) e a diferença entre SWOT e BSC?',
        resposta: 'MISSÃO: razão de existir (presente). VISÃO: onde a organização quer chegar (futuro). VALORES: princípios de conduta. OBJETIVOS: alvos amplos e qualitativos. METAS: objetivos quantificados com prazo. ESTRATÉGIAS: cursos de ação escolhidos. PLANOS: documentos que formalizam. SWOT: ferramenta de diagnóstico do ambiente (interno: forças e fraquezas; externo: oportunidades e ameaças). BSC: ferramenta de gestão estratégica que traduz a estratégia em quatro perspectivas (financeira, clientes, processos internos, aprendizado/crescimento), com objetivos, indicadores, metas e iniciativas. SWOT diagnostica; BSC executa e mede.'
      }
    ]
  },

  /* ============================================================
     ADM-04 — Organização
  ============================================================ */
  'ADM-04': {
    id: 'D-ADM-04',
    moduloId: 'ADM-04',
    itens: [
      {
        id: 'D-ADM-04-01',
        tipo: 'multipla_escolha',
        subtopico: 'Centralização x descentralização',
        pergunta: 'Sobre a centralização e a descentralização administrativa, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Centralização é sempre ruim e descentralização é sempre boa — quanto mais descentralizado, melhor.' },
          { id: 'B', texto: 'Centralização concentra as decisões na cúpula (maior controle, menor agilidade); descentralização distribui decisões (maior agilidade, demanda coordenação). A escolha depende do contexto e do tipo de decisão.' },
          { id: 'C', texto: 'Centralização e descentralização são sinônimos — ambas distribuem decisões pela organização.' },
          { id: 'D', texto: 'Descentralização é um ato pontual de transferência de autoridade para uma tarefa específica.' }
        ],
        gabarito: 'B',
        explicacao: 'Centralização e descentralização são um trade-off: centralização dá mais controle e menos agilidade; descentralização dá mais agilidade e exige coordenação. Não há um "melhor absoluto" — depende do contexto e do tipo de decisão. A alternativa A trata como valor absoluto; C confunde os conceitos; D descreve DELEGAÇÃO, não descentralização.'
      },
      {
        id: 'D-ADM-04-02',
        tipo: 'multipla_escolha',
        subtopico: 'Tipos de departamentalização',
        pergunta: 'Uma rede de hospitais públicos organiza sua estrutura em diretorias específicas para atendimento infantil, adulto e idoso. Esse tipo de departamentalização é:',
        alternativas: [
          { id: 'A', texto: 'Funcional, porque agrupa por função desempenhada.' },
          { id: 'B', texto: 'Por cliente, porque agrupa conforme o perfil do público atendido.' },
          { id: 'C', texto: 'Geográfica, porque divide por localização.' },
          { id: 'D', texto: 'Por processo, porque agrupa conforme as etapas de trabalho.' }
        ],
        gabarito: 'B',
        explicacao: 'A departamentalização POR CLIENTE agrupa as atividades conforme o perfil do público atendido (crianças, adultos, idosos). A FUNCIONAL agruparia por função (médicos, enfermeiros, administrativo); a GEOGRÁFICA, por localização; a POR PROCESSO, por etapas de trabalho. A chave é identificar o critério de agrupamento.'
      },
      {
        id: 'D-ADM-04-03',
        tipo: 'multipla_escolha',
        subtopico: 'Estrutura matricial (nível difícil)',
        pergunta: 'Um órgão público decide implantar uma estrutura em que cada servidor passa a responder simultaneamente ao seu gerente funcional (da área de origem) e ao gerente de um projeto transversal (como a digitalização de processos). Sobre essa estrutura, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Trata-se de estrutura linear, em que cada subordinado tem um único chefe — o que elimina conflitos de comando.' },
          { id: 'B', texto: 'Trata-se de estrutura funcional, em que cada subordinado responde a vários chefes especializados, sem qualquer risco de conflito.' },
          { id: 'C', texto: 'Trata-se de estrutura matricial, com dupla subordinação — o que traz como principal risco o conflito de ordens entre os dois gerentes, exigindo boa coordenação.' },
          { id: 'D', texto: 'Trata-se de estrutura em rede, sem hierarquia nem coordenação.' }
        ],
        gabarito: 'C',
        explicacao: 'A estrutura MATRICIAL combina a dimensão funcional (gerente da área) com a dimensão de projetos (gerente do projeto), gerando DUPLA SUBORDINAÇÃO. O principal risco é o CONFLITO DE ORDENS entre os dois chefes. A linear (A) tem chefe único; a funcional (B) tem múltiplos chefes especializados, mas sem a dimensão de projeto; a em rede (D) é outro modelo. A chave é reconhecer a dupla subordinação típica da matricial.'
      },
      {
        id: 'D-ADM-04-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Delegação x descentralização',
        pergunta: 'A delegação transfere ao subordinado a autoridade E a responsabilidade final pela tarefa, de modo que o superior deixa de responder pelo resultado.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. A delegação transfere a AUTORIDADE para executar a tarefa, mas a RESPONSABILIDADE FINAL permanece com quem delegou. O superior continua respondendo pelo resultado perante a organização. É o princípio da paridade autoridade-responsabilidade: delega-se a execução, não a responsabilidade final.'
      },
      {
        id: 'D-ADM-04-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Amplitude de controle',
        pergunta: 'Quanto MAIOR a amplitude de controle (muitos subordinados por gestor), MAIOR será o número de níveis hierárquicos da organização.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso — a relação é inversa. Amplitude AMPLA (muitos subordinados por gestor) gera MENOS níveis hierárquicos (estrutura achatada). Amplitude ESTREITA (poucos subordinados) gera MAIS níveis hierárquicos (estrutura verticalizada). Quanto maior a amplitude, mais "chata" a estrutura.'
      },
      {
        id: 'D-ADM-04-06',
        tipo: 'situacao',
        subtopico: 'Identificação de estrutura e departamentalização',
        pergunta: 'Uma prefeitura decide criar quatro regionais administrativas (Norte, Sul, Leste, Oeste), cada uma com autonomia para executar serviços de manutenção urbana, atendimento ao cidadão e licenciamento de pequeno porte, prestando contas à Secretaria de Administração. Sobre essa estrutura, é correto afirmar que houve:',
        alternativas: [
          { id: 'A', texto: 'Desconcentração, pois a divisão ocorreu dentro da mesma pessoa jurídica, entre órgãos, sem criação de nova pessoa.' },
          { id: 'B', texto: 'Descentralização por outorga, pois cada regional passou a ter personalidade jurídica própria.' },
          { id: 'C', texto: 'Descentralização por delegação, pois cada regional passou a ser uma empresa privada.' },
          { id: 'D', texto: 'Concentração, pois todas as decisões continuaram centralizadas na Secretaria de Administração.' }
        ],
        gabarito: 'A',
        explicacao: 'As regionais são ÓRGÃOS da mesma pessoa jurídica (a Prefeitura), sem personalidade própria. A divisão interna, com distribuição de competências entre órgãos, é DESCONCENTRAÇÃO. A descentralização (B e C) exigiria a criação de uma entidade com personalidade jurídica própria (autarquia, fundação, empresa pública, SEM) ou a delegação a particular. A concentração (D) significaria que a execução permaneceria em um único órgão.'
      },
      {
        id: 'D-ADM-04-07',
        tipo: 'autoavaliacao',
        subtopico: 'Distinções fundamentais da função Organização',
        pergunta: 'Você consegue, sem consultar, diferenciar centralização x descentralização, delegação x descentralização, concentração x desconcentração e amplitude de controle estreita x ampla?',
        resposta: 'CENTRALIZAÇÃO x DESCENTRALIZAÇÃO: onde a decisão fica — cúpula x distribuída. DELEGAÇÃO x DESCENTRALIZAÇÃO: ato pontual de transferir autoridade (delegação) x transferência estrutural e permanente (descentralização). CONCENTRAÇÃO x DESCONCENTRAÇÃO: um único órgão executa (concentração) x divisão entre órgãos da MESMA pessoa jurídica (desconcentração — sem nova personalidade). AMPLITUDE ESTREITA x AMPLA: poucos subordinados por gestor → mais níveis hierárquicos (verticalizada) x muitos subordinados → menos níveis (achatada).'
      }
    ]
  }

  /* ============================================================
     PRÓXIMOS SUB-LOTES (a preencher):
     ADM-06, ADM-07, ADM-10, ADM-11  → sub-lote 4.2
     AP-13, AP-14, DA-15 a DA-18     → sub-lote 4.3
     DA-19, DA-20, DA-21, DA-23,
     DA-25, REV-28                   → sub-lote 4.4
  ============================================================ */

};/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade ALTA
   Administração + Direito Administrativo
   Entregues: ADM-01, ADM-02, ADM-03, ADM-04
   Padrão por módulo: 3 MC (1 difícil) + 2 V/F + 1 situação + 1 autoavaliação
   Próximos sub-lotes: 4.2 (ADM-06, ADM-07, ADM-10, ADM-11)
                       4.3 (AP-13, AP-14, DA-15, DA-16, DA-17, DA-18)
                       4.4 (DA-19, DA-20, DA-21, DA-23, DA-25, REV-28)
   ============================================================ */

window.DIAGNOSTICS_ALTA = {

  /* ============================================================
     ADM-01 — Fundamentos de Administração
  ============================================================ */
  'ADM-01': {
    id: 'D-ADM-01',
    moduloId: 'ADM-01',
    itens: [
      {
        id: 'D-ADM-01-01',
        tipo: 'multipla_escolha',
        subtopico: 'Eficiência, eficácia, efetividade e produtividade',
        pergunta: 'Sobre os conceitos de eficiência, eficácia, efetividade e produtividade na Administração, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Eficiência é a capacidade de atingir os objetivos organizacionais, enquanto eficácia é o uso racional dos recursos.' },
          { id: 'B', texto: 'Eficácia refere-se ao atingimento dos objetivos; eficiência, ao uso racional dos recursos; efetividade, ao impacto social positivo real; produtividade, à relação entre outputs e inputs.' },
          { id: 'C', texto: 'Efetividade e eficácia são sinônimos — ambas medem o atingimento de metas internas.' },
          { id: 'D', texto: 'Produtividade é sinônimo de eficácia: mede exclusivamente o alcance dos objetivos organizacionais.' }
        ],
        gabarito: 'B',
        explicacao: 'Eficiência = meios (uso racional de recursos); eficácia = fins (atingimento de objetivos); efetividade = impacto social real mantido no tempo; produtividade = relação output/input. A alternativa A inverte eficiência e eficácia; C confunde efetividade com eficácia; D confunde produtividade com eficácia.'
      },
      {
        id: 'D-ADM-01-02',
        tipo: 'multipla_escolha',
        subtopico: 'Níveis organizacionais e habilidades do administrador (Katz)',
        pergunta: 'Segundo a teoria de Katz sobre as habilidades do administrador, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'As habilidades técnicas são mais exigidas no nível estratégico; as conceituais, no nível operacional.' },
          { id: 'B', texto: 'As habilidades humanas são exigidas exclusivamente no nível tático, não sendo relevantes nos níveis estratégico e operacional.' },
          { id: 'C', texto: 'As habilidades técnicas predominam no nível operacional; as conceituais, no nível estratégico; as humanas são exigidas em todos os níveis, com destaque no tático.' },
          { id: 'D', texto: 'As três habilidades (técnicas, humanas e conceituais) têm o mesmo peso em todos os níveis organizacionais, sem qualquer predominância.' }
        ],
        gabarito: 'C',
        explicacao: 'A correspondência clássica de Katz é: técnicas (operacional), conceituais (estratégico) e humanas (todos os níveis, com destaque no tático). A alternativa A inverte; B restringe indevidamente as humanas; D nega a predominância relativa, que é o ponto central da teoria.'
      },
      {
        id: 'D-ADM-01-03',
        tipo: 'multipla_escolha',
        subtopico: 'Diferenças entre eficiência, eficácia e efetividade (nível difícil)',
        pergunta: 'Um órgão público implanta um novo sistema de agendamento que reduz em 40% o tempo de marcação de consultas, mas NÃO consegue ampliar o número de consultas realizadas, porque a equipe médica permanece insuficiente. A economia gerada com a redução do tempo é realocada para outras áreas, sem qualquer impacto perceptível na saúde da população atendida. Sobre as dimensões de desempenho, é correto afirmar que o órgão foi:',
        alternativas: [
          { id: 'A', texto: 'eficiente, eficaz e efetivo, porque houve economia e melhoria no processo.' },
          { id: 'B', texto: 'eficiente (uso mais racional do tempo), mas não eficaz (não ampliou consultas) nem efetivo (não houve impacto social real na saúde).' },
          { id: 'C', texto: 'eficaz, mas não eficiente, porque o sistema melhorou o processo sem reduzir custos.' },
          { id: 'D', texto: 'efetivo, porque a economia foi realocada para outras áreas, gerando impacto social indireto.' }
        ],
        gabarito: 'B',
        explicacao: 'Houve EFICIÊNCIA (redução de 40% no tempo = uso mais racional de recurso), mas NÃO houve EFICÁCIA (a meta de ampliar consultas não foi atingida) e NÃO houve EFETIVIDADE (não houve impacto social real na saúde da população). A realocação da economia não configura efetividade por si só, pois falta o efeito transformador na vida das pessoas. É a distinção mais fina do tema — e a que separa quem decorou de quem entendeu.'
      },
      {
        id: 'D-ADM-01-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Ciclo PODC',
        pergunta: 'O PODC (Planejamento, Organização, Direção e Controle) é um ciclo contínuo e interdependente: o controle alimenta um novo planejamento, reiniciando o processo. Não se trata de uma sequência linear que termina no controle.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. O PODC é cíclico e interdependente: o produto do controle (desvios identificados) realimenta o próximo planejamento. Não é uma sequência rígida que termina no controle — é um processo contínuo.'
      },
      {
        id: 'D-ADM-01-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Habilidades do administrador',
        pergunta: 'As habilidades humanas (relacionamento interpessoal) são exigidas exclusivamente do nível tático, não sendo relevantes no nível estratégico nem no nível operacional.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. As habilidades humanas são exigidas em TODOS os níveis organizacionais — com peso relativo maior no tático, mas igualmente necessárias no estratégico (liderança de alta direção) e no operacional (supervisão de equipes). O que varia é a predominância relativa, não a exigência.'
      },
      {
        id: 'D-ADM-01-06',
        tipo: 'situacao',
        subtopico: 'Aplicação de eficiência, eficácia e efetividade',
        pergunta: 'Um município cria um programa de distribuição de cestas básicas. O programa é executado com o menor custo possível (eficiência), entrega 100% das cestas previstas no prazo (eficácia), mas, ao final de um ano, a insegurança alimentar das famílias atendidas permanece inalterada, porque o programa não foi acompanhado de ações estruturantes (geração de renda, qualificação). Sobre o desempenho do programa, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Foi eficiente, eficaz e efetivo — os três critérios foram plenamente atendidos.' },
          { id: 'B', texto: 'Foi eficiente e eficaz, mas NÃO foi efetivo — não houve impacto social real na vida das famílias.' },
          { id: 'C', texto: 'Foi efetivo, mas não eficiente — o baixo custo comprometeu a efetividade.' },
          { id: 'D', texto: 'Não foi eficiente nem eficaz — o programa não gerou resultado algum.' }
        ],
        gabarito: 'B',
        explicacao: 'O programa foi EFICIENTE (menor custo), EFICAZ (100% das cestas no prazo), mas NÃO foi EFETIVO (não transformou a realidade social — a insegurança alimentar permaneceu). A efetividade exige impacto social real e duradouro, não apenas cumprimento de metas internas.'
      },
      {
        id: 'D-ADM-01-07',
        tipo: 'autoavaliacao',
        subtopico: 'Distinção dos conceitos de desempenho',
        pergunta: 'Você consegue, sem consultar, diferenciar eficiência, eficácia, efetividade e produtividade — e explicar um exemplo de cada?',
        resposta: 'EFICIÊNCIA: uso racional dos recursos (meios). Ex.: reduzir o consumo de papel em 30%. EFICÁCIA: atingimento dos objetivos organizacionais (fins). Ex.: atender 100% dos pedidos no prazo legal. EFETIVIDADE: impacto social positivo real, mantido no tempo. Ex.: redução efetiva da mortalidade infantil após o programa. PRODUTIVIDADE: relação entre outputs e inputs. Ex.: 30 processos analisados por servidor/hora. A chave é: eficiência olha o meio; eficácia, o fim; efetividade, o impacto; produtividade, a relação entre produção e recursos.'
      }
    ]
  },

  /* ============================================================
     ADM-02 — Processo Administrativo
  ============================================================ */
  'ADM-02': {
    id: 'D-ADM-02',
    moduloId: 'ADM-02',
    itens: [
      {
        id: 'D-ADM-02-01',
        tipo: 'multipla_escolha',
        subtopico: 'Funções administrativas (PODC)',
        pergunta: 'Sobre as quatro funções administrativas que compõem o PODC, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'O PODC é uma sequência rígida: cada função só pode ser iniciada após o término completo da anterior, sem retorno.' },
          { id: 'B', texto: 'As funções são interdependentes e cíclicas: o controle alimenta novo planejamento, e as funções podem ocorrer simultaneamente em diferentes níveis da organização.' },
          { id: 'C', texto: 'O controle é a função que antecede o planejamento, pois é ele que define os objetivos organizacionais.' },
          { id: 'D', texto: 'A direção é a função que estrutura os recursos e atividades, e a organização é a que lidera e motiva pessoas.' }
        ],
        gabarito: 'B',
        explicacao: 'O PODC é interdependente e cíclico: o controle realimenta o planejamento, e as funções podem ocorrer em paralelo nos diferentes níveis. A alternativa A descreve uma linearidade que não existe; C inverte a lógica (o planejamento precede o controle); D inverte organização e direção.'
      },
      {
        id: 'D-ADM-02-02',
        tipo: 'multipla_escolha',
        subtopico: 'Planejamento e controle como "espelhos"',
        pergunta: 'Sobre a relação entre as funções de planejamento e controle, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'São funções independentes: o planejamento define objetivos, e o controle não se relaciona com esses objetivos.' },
          { id: 'B', texto: 'O planejamento define os padrões de desempenho; o controle compara o desempenho real com esses padrões e corrige desvios. Sem padrões de planejamento, não há como controlar.' },
          { id: 'C', texto: 'O controle precede o planejamento, pois é ele que define os padrões a serem alcançados.' },
          { id: 'D', texto: 'O controle só existe no setor privado; no setor público, não há controle de desempenho.' }
        ],
        gabarito: 'B',
        explicacao: 'Planejamento e controle são funções-espelho: o planejamento estabelece padrões; o controle mede e compara o desempenho real com esses padrões, corrigindo desvios. Sem padrões definidos no planejamento, o controle não tem referência. A alternativa C inverte a lógica; A e D negam a relação.'
      },
      {
        id: 'D-ADM-02-03',
        tipo: 'multipla_escolha',
        subtopico: 'PODC x Processo Administrativo (Lei 9.784/99) (nível difícil)',
        pergunta: 'Um servidor afirma: "Como estou no setor de processos, minha função principal é o processo administrativo — ou seja, planejar, organizar, dirigir e controlar." Com base na distinção técnica entre os dois conceitos, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A afirmação está correta: processo administrativo (Lei 9.784/99) e ciclo PODC são sinônimos.' },
          { id: 'B', texto: 'A afirmação confunde dois conceitos distintos: o PODC é o ciclo de funções do gestor (teoria geral); o processo administrativo da Lei 9.784/99 é o rito jurídico de decisão da Administração, com fases, prazos, contraditório e ampla defesa.' },
          { id: 'C', texto: 'A afirmação está parcialmente correta: o PODC é aplicável apenas ao setor privado, e o processo administrativo da Lei 9.784/99, apenas ao setor público.' },
          { id: 'D', texto: 'A afirmação está correta apenas se o servidor atuar em órgão federal, pois a Lei 9.784/99 só se aplica à União.' }
        ],
        gabarito: 'B',
        explicacao: 'Há uma confusão terminológica clássica: o PODC é o ciclo de funções administrativas (planejar, organizar, dirigir, controlar), estudado na Teoria Geral da Administração. O "processo administrativo" da Lei 9.784/1999 é o rito jurídico pelo qual a Administração Pública toma decisões (instauração, instrução, defesa, relatório, decisão, recursos). São conceitos DIFERENTES, apesar do nome parecido. Esta é a pegadinha mais recorrente do módulo.'
      },
      {
        id: 'D-ADM-02-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Natureza do PODC',
        pergunta: 'O PODC é uma sequência linear e estanque: cada função termina completamente antes de a próxima começar, e o ciclo termina no controle.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. O PODC é cíclico e interdependente: as funções se interpenetram, podem ocorrer simultaneamente em diferentes níveis e o controle realimenta novo planejamento. Não há um "fim" no controle.'
      },
      {
        id: 'D-ADM-02-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Finalidade do controle',
        pergunta: 'A função de controle limita-se a punir servidores que cometem irregularidades.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. O controle é função diagnóstica: mede o desempenho, compara com os padrões do planejamento e corrige desvios para melhorar resultados. A punição é apenas uma das possíveis ações corretivas — e não a principal.'
      },
      {
        id: 'D-ADM-02-06',
        tipo: 'situacao',
        subtopico: 'Identificação de função administrativa',
        pergunta: 'Uma Secretaria de Educação define, em janeiro, a meta de elevar o IDEB em 15% até o final do ano. Em fevereiro, redistribui turmas e professores entre as escolas. Em março, o Secretário faz reuniões de motivação com os diretores. Em novembro, analisa os resultados das avaliações e identifica que duas escolas ficaram abaixo da meta, decidindo reforçar a formação de professores nelas. As funções administrativas exercidas em janeiro, fevereiro, março e novembro são, respectivamente:',
        alternativas: [
          { id: 'A', texto: 'Controle, organização, direção e planejamento.' },
          { id: 'B', texto: 'Planejamento, organização, direção e controle.' },
          { id: 'C', texto: 'Organização, planejamento, controle e direção.' },
          { id: 'D', texto: 'Direção, controle, planejamento e organização.' }
        ],
        gabarito: 'B',
        explicacao: 'Janeiro: definição de meta = PLANEJAMENTO. Fevereiro: redistribuição de turmas e professores = ORGANIZAÇÃO (estruturação de recursos). Março: reuniões de motivação = DIREÇÃO (liderança). Novembro: análise de resultados e ação corretiva = CONTROLE. É a aplicação clássica do PODC em sequência lógica.'
      },
      {
        id: 'D-ADM-02-07',
        tipo: 'autoavaliacao',
        subtopico: 'Ciclo e interdependência do PODC',
        pergunta: 'Você consegue explicar, sem consultar, por que o PODC é considerado um ciclo interdependente — e não uma sequência linear?',
        resposta: 'O PODC é interdependente porque as funções se alimentam mutuamente: o planejamento define os padrões que o controle vai usar; o controle, ao identificar desvios, gera informação que realimenta novo planejamento. Além disso, as funções ocorrem simultaneamente nos diferentes níveis organizacionais (enquanto a cúpula planeja o próximo ciclo, a base executa o atual). Não há um "fim" no controle — ele é o início do próximo ciclo. Essa é a diferença entre uma visão linear (ultrapassada) e uma visão sistêmica (correta) do PODC.'
      }
    ]
  },

  /* ============================================================
     ADM-03 — Planejamento
  ============================================================ */
  'ADM-03': {
    id: 'D-ADM-03',
    moduloId: 'ADM-03',
    itens: [
      {
        id: 'D-ADM-03-01',
        tipo: 'multipla_escolha',
        subtopico: 'Missão, visão, valores, objetivos e metas',
        pergunta: 'Sobre os elementos do planejamento, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Missão é onde a organização quer chegar no futuro; visão é a razão de sua existência no presente.' },
          { id: 'B', texto: 'Missão é a razão de existir da organização (presente); visão é onde ela quer chegar (futuro); valores são os princípios que orientam a conduta; objetivos são alvos amplos; metas são objetivos quantificados com prazo.' },
          { id: 'C', texto: 'Objetivos e metas são sinônimos: ambos são amplos e qualitativos.' },
          { id: 'D', texto: 'Valores são metas de curto prazo, e planos são documentos que independem dos objetivos organizacionais.' }
        ],
        gabarito: 'B',
        explicacao: 'Missão = razão de existir (presente). Visão = onde quer chegar (futuro). Valores = princípios de conduta. Objetivos = alvos amplos e qualitativos. Metas = objetivos quantificados e datados. Planos = documentos que formalizam as estratégias. A alternativa A inverte missão e visão; C confunde objetivo com meta; D confunde valores com metas.'
      },
      {
        id: 'D-ADM-03-02',
        tipo: 'multipla_escolha',
        subtopico: 'Análise SWOT',
        pergunta: 'Na análise SWOT, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Forças e fraquezas são fatores internos, controláveis pela organização; oportunidades e ameaças são fatores externos, não controláveis.' },
          { id: 'B', texto: 'Forças e oportunidades são fatores internos; fraquezas e ameaças são externos.' },
          { id: 'C', texto: 'Todos os quatro elementos são internos — a SWOT analisa apenas o ambiente da organização.' },
          { id: 'D', texto: 'Todos os quatro elementos são externos — a SWOT analisa apenas o ambiente em que a organização está inserida.' }
        ],
        gabarito: 'A',
        explicacao: 'SWOT = forças e fraquezas (ambiente INTERNO, controlável) + oportunidades e ameaças (ambiente EXTERNO, não controlável). A distinção interno x externo é o ponto central — e a pegadinha mais comum. As alternativas B, C e D trocam indevidamente as categorias.'
      },
      {
        id: 'D-ADM-03-03',
        tipo: 'multipla_escolha',
        subtopico: 'Balanced Scorecard (BSC) (nível difícil)',
        pergunta: 'Uma Secretaria de Saúde está implementando o Balanced Scorecard (BSC) e definiu os seguintes objetivos estratégicos: (i) reduzir a mortalidade infantil em 20% em 3 anos; (ii) ampliar a satisfação dos usuários nas UBS para 85%; (iii) reduzir o tempo médio de espera por consulta de 30 para 10 dias; (iv) capacitar 100% dos enfermeiros em protocolos de atenção básica. Em relação às quatro perspectivas clássicas do BSC, esses objetivos correspondem, respectivamente, a:',
        alternativas: [
          { id: 'A', texto: 'Clientes, financeira, processos internos e aprendizado/crescimento.' },
          { id: 'B', texto: 'Clientes (ou sociedade), clientes, processos internos e aprendizado/crescimento.' },
          { id: 'C', texto: 'Financeira, clientes, aprendizado/crescimento e processos internos.' },
          { id: 'D', texto: 'Processos internos, clientes, aprendizado/crescimento e financeira.' }
        ],
        gabarito: 'B',
        explicacao: 'No BSC, as quatro perspectivas clássicas são: financeira, clientes, processos internos e aprendizado/crescimento. No setor público, é comum adaptar "clientes" para "sociedade" — por isso o item (i) "reduzir a mortalidade infantil" é tipicamente da perspectiva SOCIEDADE (cliente no setor público). O item (ii) "satisfação dos usuários" é claramente da perspectiva CLIENTES. O item (iii) "reduzir tempo de espera" é da perspectiva PROCESSOS INTERNOS. O item (iv) "capacitar enfermeiros" é da perspectiva APRENDIZADO/CRESCIMENTO. Esta é uma questão difícil porque exige conhecer as quatro perspectivas e saber aplicá-las a um contexto específico — e distinguir a adaptação "sociedade" no setor público.'
      },
      {
        id: 'D-ADM-03-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Objetivo x meta',
        pergunta: 'Meta é um alvo mais amplo e qualitativo que objetivo; por isso, toda meta pressupõe um objetivo quantificado.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso — a relação é o contrário. Objetivo é amplo e qualitativo (ex.: "melhorar o atendimento"). Meta é o objetivo quantificado com prazo (ex.: "reduzir o tempo médio de espera em 30% até dezembro"). Toda META pressupõe um OBJETIVO, e não o inverso.'
      },
      {
        id: 'D-ADM-03-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Análise SWOT — interno x externo',
        pergunta: 'Na análise SWOT, as forças e as oportunidades são ambas categorias do ambiente externo, pois representam fatores positivos que a organização pode aproveitar.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. FORÇAS são fatores INTERNOS positivos (controláveis). OPORTUNIDADES são fatores EXTERNOS positivos (não controláveis). A distinção entre interno e externo é fundamental — não se pode agrupá-las como "ambiente externo".'
      },
      {
        id: 'D-ADM-03-06',
        tipo: 'situacao',
        subtopico: 'Classificação em SWOT',
        pergunta: 'Uma escola pública municipal está realizando sua análise SWOT para o planejamento de 2025. Foram levantados quatro pontos: (1) o corpo docente da escola é altamente qualificado e estável; (2) a Prefeitura anunciou um novo programa de financiamento para reforma de escolas; (3) o prédio da escola tem problemas estruturais na rede elétrica; (4) há previsão de corte no repasse de recursos federais. Esses pontos correspondem, respectivamente, a:',
        alternativas: [
          { id: 'A', texto: 'Força, oportunidade, fraqueza e ameaça.' },
          { id: 'B', texto: 'Oportunidade, força, ameaça e fraqueza.' },
          { id: 'C', texto: 'Força, fraqueza, oportunidade e ameaça.' },
          { id: 'D', texto: 'Fraqueza, oportunidade, força e ameaça.' }
        ],
        gabarito: 'A',
        explicacao: '(1) Corpo docente qualificado = FORÇA (interno positivo). (2) Programa de financiamento anunciado = OPORTUNIDADE (externo positivo). (3) Problemas na rede elétrica = FRAQUEZA (interno negativo). (4) Corte no repasse federal = AMEAÇA (externo negativo). A chave é sempre: interno (controlável) x externo (não controlável); positivo x negativo.'
      },
      {
        id: 'D-ADM-03-07',
        tipo: 'autoavaliacao',
        subtopico: 'Elementos do planejamento e ferramentas',
        pergunta: 'Você consegue, sem consultar, explicar os elementos do planejamento (missão, visão, valores, objetivos, metas, estratégias, planos) e a diferença entre SWOT e BSC?',
        resposta: 'MISSÃO: razão de existir (presente). VISÃO: onde a organização quer chegar (futuro). VALORES: princípios de conduta. OBJETIVOS: alvos amplos e qualitativos. METAS: objetivos quantificados com prazo. ESTRATÉGIAS: cursos de ação escolhidos. PLANOS: documentos que formalizam. SWOT: ferramenta de diagnóstico do ambiente (interno: forças e fraquezas; externo: oportunidades e ameaças). BSC: ferramenta de gestão estratégica que traduz a estratégia em quatro perspectivas (financeira, clientes, processos internos, aprendizado/crescimento), com objetivos, indicadores, metas e iniciativas. SWOT diagnostica; BSC executa e mede.'
      }
    ]
  },

  /* ============================================================
     ADM-04 — Organização
  ============================================================ */
  'ADM-04': {
    id: 'D-ADM-04',
    moduloId: 'ADM-04',
    itens: [
      {
        id: 'D-ADM-04-01',
        tipo: 'multipla_escolha',
        subtopico: 'Centralização x descentralização',
        pergunta: 'Sobre a centralização e a descentralização administrativa, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Centralização é sempre ruim e descentralização é sempre boa — quanto mais descentralizado, melhor.' },
          { id: 'B', texto: 'Centralização concentra as decisões na cúpula (maior controle, menor agilidade); descentralização distribui decisões (maior agilidade, demanda coordenação). A escolha depende do contexto e do tipo de decisão.' },
          { id: 'C', texto: 'Centralização e descentralização são sinônimos — ambas distribuem decisões pela organização.' },
          { id: 'D', texto: 'Descentralização é um ato pontual de transferência de autoridade para uma tarefa específica.' }
        ],
        gabarito: 'B',
        explicacao: 'Centralização e descentralização são um trade-off: centralização dá mais controle e menos agilidade; descentralização dá mais agilidade e exige coordenação. Não há um "melhor absoluto" — depende do contexto e do tipo de decisão. A alternativa A trata como valor absoluto; C confunde os conceitos; D descreve DELEGAÇÃO, não descentralização.'
      },
      {
        id: 'D-ADM-04-02',
        tipo: 'multipla_escolha',
        subtopico: 'Tipos de departamentalização',
        pergunta: 'Uma rede de hospitais públicos organiza sua estrutura em diretorias específicas para atendimento infantil, adulto e idoso. Esse tipo de departamentalização é:',
        alternativas: [
          { id: 'A', texto: 'Funcional, porque agrupa por função desempenhada.' },
          { id: 'B', texto: 'Por cliente, porque agrupa conforme o perfil do público atendido.' },
          { id: 'C', texto: 'Geográfica, porque divide por localização.' },
          { id: 'D', texto: 'Por processo, porque agrupa conforme as etapas de trabalho.' }
        ],
        gabarito: 'B',
        explicacao: 'A departamentalização POR CLIENTE agrupa as atividades conforme o perfil do público atendido (crianças, adultos, idosos). A FUNCIONAL agruparia por função (médicos, enfermeiros, administrativo); a GEOGRÁFICA, por localização; a POR PROCESSO, por etapas de trabalho. A chave é identificar o critério de agrupamento.'
      },
      {
        id: 'D-ADM-04-03',
        tipo: 'multipla_escolha',
        subtopico: 'Estrutura matricial (nível difícil)',
        pergunta: 'Um órgão público decide implantar uma estrutura em que cada servidor passa a responder simultaneamente ao seu gerente funcional (da área de origem) e ao gerente de um projeto transversal (como a digitalização de processos). Sobre essa estrutura, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Trata-se de estrutura linear, em que cada subordinado tem um único chefe — o que elimina conflitos de comando.' },
          { id: 'B', texto: 'Trata-se de estrutura funcional, em que cada subordinado responde a vários chefes especializados, sem qualquer risco de conflito.' },
          { id: 'C', texto: 'Trata-se de estrutura matricial, com dupla subordinação — o que traz como principal risco o conflito de ordens entre os dois gerentes, exigindo boa coordenação.' },
          { id: 'D', texto: 'Trata-se de estrutura em rede, sem hierarquia nem coordenação.' }
        ],
        gabarito: 'C',
        explicacao: 'A estrutura MATRICIAL combina a dimensão funcional (gerente da área) com a dimensão de projetos (gerente do projeto), gerando DUPLA SUBORDINAÇÃO. O principal risco é o CONFLITO DE ORDENS entre os dois chefes. A linear (A) tem chefe único; a funcional (B) tem múltiplos chefes especializados, mas sem a dimensão de projeto; a em rede (D) é outro modelo. A chave é reconhecer a dupla subordinação típica da matricial.'
      },
      {
        id: 'D-ADM-04-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Delegação x descentralização',
        pergunta: 'A delegação transfere ao subordinado a autoridade E a responsabilidade final pela tarefa, de modo que o superior deixa de responder pelo resultado.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. A delegação transfere a AUTORIDADE para executar a tarefa, mas a RESPONSABILIDADE FINAL permanece com quem delegou. O superior continua respondendo pelo resultado perante a organização. É o princípio da paridade autoridade-responsabilidade: delega-se a execução, não a responsabilidade final.'
      },
      {
        id: 'D-ADM-04-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Amplitude de controle',
        pergunta: 'Quanto MAIOR a amplitude de controle (muitos subordinados por gestor), MAIOR será o número de níveis hierárquicos da organização.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso — a relação é inversa. Amplitude AMPLA (muitos subordinados por gestor) gera MENOS níveis hierárquicos (estrutura achatada). Amplitude ESTREITA (poucos subordinados) gera MAIS níveis hierárquicos (estrutura verticalizada). Quanto maior a amplitude, mais "chata" a estrutura.'
      },
      {
        id: 'D-ADM-04-06',
        tipo: 'situacao',
        subtopico: 'Identificação de estrutura e departamentalização',
        pergunta: 'Uma prefeitura decide criar quatro regionais administrativas (Norte, Sul, Leste, Oeste), cada uma com autonomia para executar serviços de manutenção urbana, atendimento ao cidadão e licenciamento de pequeno porte, prestando contas à Secretaria de Administração. Sobre essa estrutura, é correto afirmar que houve:',
        alternativas: [
          { id: 'A', texto: 'Desconcentração, pois a divisão ocorreu dentro da mesma pessoa jurídica, entre órgãos, sem criação de nova pessoa.' },
          { id: 'B', texto: 'Descentralização por outorga, pois cada regional passou a ter personalidade jurídica própria.' },
          { id: 'C', texto: 'Descentralização por delegação, pois cada regional passou a ser uma empresa privada.' },
          { id: 'D', texto: 'Concentração, pois todas as decisões continuaram centralizadas na Secretaria de Administração.' }
        ],
        gabarito: 'A',
        explicacao: 'As regionais são ÓRGÃOS da mesma pessoa jurídica (a Prefeitura), sem personalidade própria. A divisão interna, com distribuição de competências entre órgãos, é DESCONCENTRAÇÃO. A descentralização (B e C) exigiria a criação de uma entidade com personalidade jurídica própria (autarquia, fundação, empresa pública, SEM) ou a delegação a particular. A concentração (D) significaria que a execução permaneceria em um único órgão.'
      },
      {
        id: 'D-ADM-04-07',
        tipo: 'autoavaliacao',
        subtopico: 'Distinções fundamentais da função Organização',
        pergunta: 'Você consegue, sem consultar, diferenciar centralização x descentralização, delegação x descentralização, concentração x desconcentração e amplitude de controle estreita x ampla?',
        resposta: 'CENTRALIZAÇÃO x DESCENTRALIZAÇÃO: onde a decisão fica — cúpula x distribuída. DELEGAÇÃO x DESCENTRALIZAÇÃO: ato pontual de transferir autoridade (delegação) x transferência estrutural e permanente (descentralização). CONCENTRAÇÃO x DESCONCENTRAÇÃO: um único órgão executa (concentração) x divisão entre órgãos da MESMA pessoa jurídica (desconcentração — sem nova personalidade). AMPLITUDE ESTREITA x AMPLA: poucos subordinados por gestor → mais níveis hierárquicos (verticalizada) x muitos subordinados → menos níveis (achatada).'
      }
    ]
  }

  /* ============================================================
     PRÓXIMOS SUB-LOTES (a preencher):
     ADM-06, ADM-07, ADM-10, ADM-11  → sub-lote 4.2
     AP-13, AP-14, DA-15 a DA-18     → sub-lote 4.3
     DA-19, DA-20, DA-21, DA-23,
     DA-25, REV-28                   → sub-lote 4.4
  ============================================================ */

};
