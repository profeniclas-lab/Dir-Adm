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
  },
  /* ============================================================
     ADM-06 — Controle e avaliação
  ============================================================ */
  'ADM-06': {
    id: 'D-ADM-06',
    moduloId: 'ADM-06',
    itens: [
      {
        id: 'D-ADM-06-01',
        tipo: 'multipla_escolha',
        subtopico: 'Conceito, finalidade e etapas do controle',
        pergunta: 'Sobre a função administrativa de controle, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'O controle é a função que estabelece os objetivos organizacionais, antecedendo o planejamento.' },
          { id: 'B', texto: 'O controle visa assegurar que os resultados obtidos estejam em conformidade com os padrões previamente estabelecidos, seguindo as etapas: padrões → medição → comparação → ação corretiva.' },
          { id: 'C', texto: 'O controle limita-se a punir servidores que cometem irregularidades, não tendo relação com desempenho ou metas.' },
          { id: 'D', texto: 'O controle é uma função estanque: uma vez definidos os padrões, não se admite revisão nem correção de desvios.' }
        ],
        gabarito: 'B',
        explicacao: 'O controle é a função que mede o desempenho, compara com os padrões definidos no planejamento e adota ações corretivas. As etapas são: estabelecer padrões → medir o desempenho real → comparar com o padrão → agir corretivamente. A alternativa A confunde controle com planejamento; C reduz o controle à punição; D nega a natureza dinâmica e cíclica do controle.'
      },
      {
        id: 'D-ADM-06-02',
        tipo: 'multipla_escolha',
        subtopico: 'Tipos de controle (preventivo, simultâneo e posterior)',
        pergunta: 'Sobre os três tipos de controle (preventivo, simultâneo e posterior), assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'O controle preventivo age depois da execução; o posterior, antes; o simultâneo, no intervalo entre os dois.' },
          { id: 'B', texto: 'O controle preventivo age antes da execução (ex.: treinamento, seleção criteriosa); o simultâneo, durante a execução (ex.: supervisão direta, painel em tempo real); o posterior, após a execução (ex.: auditoria, balanço).' },
          { id: 'C', texto: 'O controle simultâneo é mais eficiente que o preventivo, pois permite corrigir com base em dados completos.' },
          { id: 'D', texto: 'O controle posterior é o único que permite ação corretiva efetiva; os demais são meramente ilustrativos.' }
        ],
        gabarito: 'B',
        explicacao: 'Preventivo = antes (evita o desvio); simultâneo = durante (corrige em tempo real); posterior = depois (identifica o desvio e alimenta o próximo ciclo). A alternativa A inverte; C apresenta juízo de valor que não corresponde à classificação; D desqualifica os demais tipos. Cada tipo tem seu papel, e o ideal é combinar os três.'
      },
      {
        id: 'D-ADM-06-03',
        tipo: 'multipla_escolha',
        subtopico: 'Padrão, indicador e ação corretiva (nível difícil)',
        pergunta: 'Um órgão público define a meta de atender 100% dos pedidos de informação em até 20 dias. Mensalmente, mede o percentual de pedidos atendidos no prazo. Quando o percentual cai abaixo de 95%, o gestor reforça a equipe e revisa o fluxo de resposta. Nesse cenário, a meta, o percentual medido e o reforço de equipe correspondem, respectivamente, a:',
        alternativas: [
          { id: 'A', texto: 'Indicador, padrão e ação corretiva.' },
          { id: 'B', texto: 'Padrão, indicador e ação corretiva.' },
          { id: 'C', texto: 'Ação corretiva, padrão e indicador.' },
          { id: 'D', texto: 'Padrão, ação corretiva e indicador.' }
        ],
        gabarito: 'B',
        explicacao: 'A meta (atender 100% em 20 dias) é o PADRÃO — a referência do que se espera. O percentual medido (quantos pedidos foram atendidos no prazo) é o INDICADOR — a métrica do desempenho real. O reforço de equipe e a revisão do fluxo são a AÇÃO CORRETIVA — a intervenção para alinhar o desempenho ao padrão. É a aplicação mais fina das etapas do controle — e a que separa quem decorou de quem entendeu a lógica de feedback.'
      },
      {
        id: 'D-ADM-06-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Controle preventivo, simultâneo e posterior',
        pergunta: 'O controle preventivo age antes da execução; o simultâneo, durante; o posterior, depois. Os três podem coexistir numa mesma organização e se complementam.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. Preventivo (antes — evita o desvio), simultâneo (durante — corrige em tempo real) e posterior (depois — identifica o desvio e alimenta o próximo ciclo). Não são excludentes: coexistem e se complementam.'
      },
      {
        id: 'D-ADM-06-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Finalidade do controle',
        pergunta: 'O controle é uma função exclusivamente punitiva: sua única finalidade é aplicar sanções a servidores que cometem irregularidades.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. O controle é função diagnóstica: mede desempenho, compara com padrões e corrige desvios para melhorar resultados. A punição é apenas uma das possíveis ações corretivas — e não a principal. O controle existe para melhorar, não apenas para punir.'
      },
      {
        id: 'D-ADM-06-06',
        tipo: 'situacao',
        subtopico: 'Controle interno x externo e tipos de controle',
        pergunta: 'O Tribunal de Contas da União realiza auditoria sobre a execução de um contrato de obra pública firmado por um ministério. A obra já foi concluída, e a auditoria identifica sobrepreço. Simultaneamente, a Controladoria-Geral da União revisa os controles internos do ministério para evitar que o problema se repita. Considerando os tipos de controle (quanto ao órgão e ao momento), é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Ambos são controle interno e preventivo.' },
          { id: 'B', texto: 'O TCU exerce controle externo e posterior; a CGU exerce controle interno, também de natureza predominantemente posterior, com foco em prevenção futura.' },
          { id: 'C', texto: 'O TCU exerce controle interno e simultâneo; a CGU exerce controle externo e preventivo.' },
          { id: 'D', texto: 'Ambos são controle externo e simultâneo, pois ocorrem durante a execução do contrato.' }
        ],
        gabarito: 'B',
        explicacao: 'O TCU é órgão de controle EXTERNO (auxilia o Legislativo) e atua, no caso, de forma POSTERIOR (a obra já foi concluída). A CGU é órgão de controle INTERNO do Executivo Federal e, ao revisar controles, atua com foco PREVENTIVO para o futuro — embora a análise do caso concreto seja posterior. A chave é distinguir o órgão (interno x externo) e a função (preventivo, simultâneo ou posterior).'
      },
      {
        id: 'D-ADM-06-07',
        tipo: 'autoavaliacao',
        subtopico: 'Etapas, tipos e natureza do controle',
        pergunta: 'Você consegue, sem consultar, explicar as etapas do controle, os três tipos (preventivo, simultâneo e posterior) e a diferença entre controle interno e externo?',
        resposta: 'ETAPAS: estabelecer padrões → medir desempenho real → comparar com o padrão → agir corretivamente. TIPOS: preventivo (antes — treinamento, seleção), simultâneo (durante — supervisão, painel em tempo real) e posterior (depois — auditoria, balanço). CONTROLE INTERNO: autocontrole de cada Poder/órgão (ex.: CGU, Controladorias). CONTROLE EXTERNO: exercido por outro órgão (Congresso + Tribunais de Contas; Judiciário no controle de legalidade). A lógica é sempre: medir → comparar → corrigir.'
      }
    ]
  },

  /* ============================================================
     ADM-07 — Gestão de Pessoas
  ============================================================ */
  'ADM-07': {
    id: 'D-ADM-07',
    moduloId: 'ADM-07',
    itens: [
      {
        id: 'D-ADM-07-01',
        tipo: 'multipla_escolha',
        subtopico: 'Os seis processos de gestão de pessoas',
        pergunta: 'Sobre o modelo dos seis processos de gestão de pessoas (agregar, aplicar, recompensar, desenvolver, manter e monitorar), assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'O processo de "agregar" corresponde à remuneração e aos benefícios; o de "recompensar", ao recrutamento e à seleção.' },
          { id: 'B', texto: 'Agregar = recrutamento e seleção; aplicar = desenho de cargos e avaliação de desempenho; recompensar = remuneração e benefícios; desenvolver = treinamento e carreiras; manter = higiene, segurança e QVT; monitorar = sistemas de informação.' },
          { id: 'C', texto: 'O processo de "desenvolver" corresponde ao treinamento operacional de curto prazo, e o de "manter" corresponde à atração de candidatos.' },
          { id: 'D', texto: 'Os seis processos são independentes e não se relacionam com os objetivos organizacionais.' }
        ],
        gabarito: 'B',
        explicacao: 'O modelo clássico dos seis processos é: AGREGAR (recrutamento e seleção), APLICAR (desenho de cargos, avaliação, movimentação), RECOMPENSAR (remuneração, benefícios, incentivos), DESENVOLVER (treinamento, carreiras), MANTER (higiene e segurança, QVT, clima) e MONITORAR (sistemas de informação). A alternativa A inverte agregar e recompensar; C confunde manter com agregar; D nega a natureza sistêmica do modelo.'
      },
      {
        id: 'D-ADM-07-02',
        tipo: 'multipla_escolha',
        subtopico: 'Treinamento x desenvolvimento',
        pergunta: 'Sobre treinamento e desenvolvimento, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Treinamento e desenvolvimento são sinônimos: ambos preparam o empregado para a tarefa atual.' },
          { id: 'B', texto: 'Treinamento prepara para a tarefa atual (curto prazo, operacional); desenvolvimento prepara para o futuro (longo prazo, estratégico).' },
          { id: 'C', texto: 'Treinamento prepara para o futuro; desenvolvimento, para a tarefa atual.' },
          { id: 'D', texto: 'Desenvolvimento é exclusivo de cargos de chefia; treinamento é exclusivo de cargos operacionais.' }
        ],
        gabarito: 'B',
        explicacao: 'TREINAMENTO: prepara para a TAREFA ATUAL — curto prazo, foco operacional (ex.: curso do novo sistema). DESENVOLVIMENTO: prepara para o FUTURO — longo prazo, foco estratégico (ex.: formação de lideranças). A alternativa C inverte; A confunde; D restringe indevidamente — ambos podem ser aplicados a qualquer nível, conforme a necessidade.'
      },
      {
        id: 'D-ADM-07-03',
        tipo: 'multipla_escolha',
        subtopico: 'Recrutamento interno x externo (nível difícil)',
        pergunta: 'Uma organização de médio porte promove há 15 anos todos os seus gerentes por recrutamento interno. A prática gerou motivação inicial, mas, nos últimos anos, a empresa vem perdendo competitividade por falta de novas ideias, e a rotatividade entre os gerentes tem aumentado. O diagnóstico mais adequado e a recomendação correspondente são:',
        alternativas: [
          { id: 'A', texto: 'O problema é de clima organizacional; a recomendação é fazer uma pesquisa de satisfação.' },
          { id: 'B', texto: 'O problema é de endogenia (viés interno excessivo); a recomendação é equilibrar o recrutamento, combinando o interno com o externo em posições estratégicas, para trazer renovação de ideias.' },
          { id: 'C', texto: 'O problema é de seleção; a recomendação é substituir o recrutamento interno por externo em todos os cargos.' },
          { id: 'D', texto: 'O problema é de treinamento; a recomendação é investir em cursos operacionais para os gerentes.' }
        ],
        gabarito: 'B',
        explicacao: 'O recrutamento interno tem vantagens (motivação, mobilidade, menor custo), mas, quando exclusivo, tende a gerar ENDOGENIA (manutenção dos mesmos vícios e falta de novas ideias). O diagnóstico correto é o viés interno excessivo, e a recomendação é EQUILIBRAR, combinando interno e externo — especialmente em posições estratégicas, onde a renovação de perspectivas é mais crítica. A alternativa C é excessiva (substituir tudo); A e D não enfrentam a causa do problema.'
      },
      {
        id: 'D-ADM-07-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Recrutamento x seleção',
        pergunta: 'Recrutamento e seleção são sinônimos: ambos consistem na escolha do candidato que melhor atende ao perfil da vaga.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. RECRUTAMENTO é a ATRAÇÃO de candidatos (busca ativa). SELEÇÃO é a ESCOLHA, entre os candidatos atraídos, do que melhor atende ao perfil. Recrutamento é a "vitrine"; seleção é a "peneira". São etapas distintas e sequenciais.'
      },
      {
        id: 'D-ADM-07-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Clima x cultura organizacional',
        pergunta: 'Clima organizacional é a percepção coletiva momentânea sobre o ambiente de trabalho (pode flutuar com eventos), enquanto cultura organizacional é o conjunto de valores e crenças enraizados (duradouros, difíceis de mudar).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. CLIMA é a "temperatura" (percepção momentânea, flutua com eventos). CULTURA é o "DNA" (valores e crenças enraizados, duradouros). A analogia ajuda a fixar a diferença — e essa é a distinção mais cobrada em prova.'
      },
      {
        id: 'D-ADM-07-06',
        tipo: 'situacao',
        subtopico: 'Classificação de práticas de gestão de pessoas',
        pergunta: 'Um órgão público está reestruturando suas práticas de gestão de pessoas. Foram propostas cinco ações: (1) realizar concurso público para novos analistas; (2) aplicar prova prática, entrevista e análise curricular; (3) oferecer curso de 40h sobre o novo sistema de protocolo; (4) implementar programa de formação de lideranças para os próximos 3 anos; (5) revisar o plano de cargos e salários. Essas ações correspondem, respectivamente, a:',
        alternativas: [
          { id: 'A', texto: 'Recrutamento, seleção, treinamento, desenvolvimento e recompensa.' },
          { id: 'B', texto: 'Seleção, recrutamento, desenvolvimento, treinamento e manter.' },
          { id: 'C', texto: 'Recrutamento, seleção, desenvolvimento, treinamento e recompensa.' },
          { id: 'D', texto: 'Seleção, treinamento, recrutamento, manter e monitorar.' }
        ],
        gabarito: 'A',
        explicacao: '(1) Concurso público = RECRUTAMENTO (atração de candidatos). (2) Prova + entrevista + análise = SELEÇÃO (escolha). (3) Curso de 40h sobre o sistema = TREINAMENTO (preparação para a tarefa atual, curto prazo). (4) Formação de lideranças para os próximos 3 anos = DESENVOLVIMENTO (preparação para o futuro, longo prazo). (5) Plano de cargos e salários = RECOMPENSA (remuneração e benefícios). A chave é identificar o processo correspondente a cada prática.'
      },
      {
        id: 'D-ADM-07-07',
        tipo: 'autoavaliacao',
        subtopico: 'Distinções fundamentais da gestão de pessoas',
        pergunta: 'Você consegue, sem consultar, diferenciar recrutamento x seleção, treinamento x desenvolvimento, clima x cultura e as visões de pessoas como recursos x parceiras?',
        resposta: 'RECRUTAMENTO x SELEÇÃO: atração (vitrine) x escolha (peneira). TREINAMENTO x DESENVOLVIMENTO: tarefa atual (curto prazo, operacional) x futuro (longo prazo, estratégico). CLIMA x CULTURA: percepção momentânea (temperatura) x valores enraizados (DNA). PESSOAS COMO RECURSOS x PARCEIRAS: visão tradicional (custo, padronização) x visão moderna (capital humano, engajamento, autonomia). Também é essencial distinguir os seis processos: agregar, aplicar, recompensar, desenvolver, manter e monitorar.'
      }
    ]
  },

  /* ============================================================
     ADM-10 — Administração de Materiais e Patrimônio
  ============================================================ */
  'ADM-10': {
    id: 'D-ADM-10',
    moduloId: 'ADM-10',
    itens: [
      {
        id: 'D-ADM-10-01',
        tipo: 'multipla_escolha',
        subtopico: 'Bem de consumo x bem permanente',
        pergunta: 'Sobre a classificação de bens na Administração de Materiais e Patrimônio, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Bens de consumo são duráveis e tombados; bens permanentes são consumidos com o uso.' },
          { id: 'B', texto: 'Bens de consumo são consumidos com o uso ou têm vida útil curta (papel, caneta); bens permanentes são duráveis e, em regra, tombados (móveis, equipamentos, veículos).' },
          { id: 'C', texto: 'Computadores, mesas e impressoras são bens de consumo, pois perdem valor com o tempo.' },
          { id: 'D', texto: 'Papel, caneta e cartucho de tinta são bens permanentes, pois duram algumas semanas.' }
        ],
        gabarito: 'B',
        explicacao: 'BENS DE CONSUMO: consumidos com o uso ou de vida útil curta (papel, caneta, combustível). BENS PERMANENTES: duráveis, não se extinguem com o uso (móveis, equipamentos, veículos) — em regra, são TOMBADOS. A alternativa A inverte; C classifica bens permanentes como de consumo; D classifica materiais de consumo como permanentes.'
      },
      {
        id: 'D-ADM-10-02',
        tipo: 'multipla_escolha',
        subtopico: 'Estoque mínimo x estoque de segurança',
        pergunta: 'Sobre o estoque mínimo e o estoque de segurança, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'São sinônimos: ambos representam a quantidade mínima para evitar desabastecimento.' },
          { id: 'B', texto: 'Estoque mínimo é a quantidade-limite abaixo da qual não se deve operar; estoque de segurança é uma parcela adicional para cobrir imprevistos (demanda maior que a prevista ou atraso do fornecedor).' },
          { id: 'C', texto: 'Estoque de segurança é a quantidade máxima que a organização pode estocar.' },
          { id: 'D', texto: 'Estoque mínimo é calculado com base no giro de estoque, e o de segurança, no ponto de pedido.' }
        ],
        gabarito: 'B',
        explicacao: 'O ESTOQUE MÍNIMO é um limite operacional — abaixo dele, a operação fica vulnerável. O ESTOQUE DE SEGURANÇA é uma proteção ADICIONAL contra IMPREVISTOS (demanda acima do previsto, atraso de fornecedor). São conceitos relacionados, mas NÃO sinônimos. A alternativa A iguala indevidamente; C confunde com estoque máximo; D apresenta fórmulas inexistentes.'
      },
      {
        id: 'D-ADM-10-03',
        tipo: 'multipla_escolha',
        subtopico: 'Ponto de pedido — cálculo (nível difícil)',
        pergunta: 'Um órgão público consome, em média, 20 unidades de um item por dia. O tempo de reposição do fornecedor é de 8 dias. O estoque de segurança definido é de 60 unidades. Com base na fórmula do ponto de pedido (consumo médio × tempo de reposição + estoque de segurança), assinale a alternativa que indica o ponto de pedido:',
        alternativas: [
          { id: 'A', texto: '160 unidades.' },
          { id: 'B', texto: '220 unidades.' },
          { id: 'C', texto: '160 unidades, desconsiderando o estoque de segurança — o que seria um erro.' },
          { id: 'D', texto: '80 unidades.' }
        ],
        gabarito: 'B',
        explicacao: 'A fórmula do ponto de pedido é: PP = (consumo médio × tempo de reposição) + estoque de segurança. Substituindo: PP = (20 × 8) + 60 = 160 + 60 = 220 unidades. A alternativa A (160) considera apenas o consumo durante o tempo de reposição, esquecendo o estoque de segurança; C e D apresentam valores intermediários. Esta é a principal aplicação quantitativa do módulo e costuma cair em prova.'
      },
      {
        id: 'D-ADM-10-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Tombamento e inventário',
        pergunta: 'O tombamento atribui número patrimonial único ao bem no momento de sua incorporação; o inventário é a conferência física periódica para conciliar o que está registrado com o que efetivamente existe.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. O TOMBAMENTO identifica o bem (número patrimonial). O INVENTÁRIO confere o acervo (contagem física e conciliação com os registros). São funções distintas e complementares: o tombamento individualiza; o inventário audita o conjunto.'
      },
      {
        id: 'D-ADM-10-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Estoque mínimo e estoque de segurança',
        pergunta: 'Estoque mínimo e estoque de segurança são sinônimos: ambos representam exatamente a mesma quantidade de itens.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Embora relacionados, NÃO são sinônimos. O ESTOQUE MÍNIMO é um limite operacional (quantidade mínima para não comprometer a operação); o ESTOQUE DE SEGURANÇA é uma proteção ADICIONAL contra imprevistos (demanda acima do previsto ou atraso do fornecedor). A confusão entre os dois é uma das pegadinhas mais comuns do tema.'
      },
      {
        id: 'D-ADM-10-06',
        tipo: 'situacao',
        subtopico: 'Classificação de bens e identificação de processo',
        pergunta: 'Um órgão público está organizando seu setor de patrimônio. Recebeu quatro demandas: (1) cadastrar os computadores adquiridos, atribuindo número de patrimônio; (2) conferir fisicamente os bens em uso, comparando com os registros; (3) dar baixa em um veículo sinistrado; (4) transferir 10 cadeiras do setor A para o setor B. Essas demandas correspondem, respectivamente, a:',
        alternativas: [
          { id: 'A', texto: 'Tombamento, inventário, baixa patrimonial e movimentação.' },
          { id: 'B', texto: 'Inventário, tombamento, movimentação e baixa patrimonial.' },
          { id: 'C', texto: 'Tombamento, baixa patrimonial, inventário e movimentação.' },
          { id: 'D', texto: 'Movimentação, inventário, tombamento e baixa patrimonial.' }
        ],
        gabarito: 'A',
        explicacao: '(1) Atribuir número de patrimônio = TOMBAMENTO. (2) Conferir fisicamente os bens = INVENTÁRIO. (3) Dar baixa em veículo sinistrado = BAIXA PATRIMONIAL. (4) Transferir cadeiras entre setores = MOVIMENTAÇÃO. A chave é associar cada demanda ao instituto próprio do patrimônio.'
      },
      {
        id: 'D-ADM-10-07',
        tipo: 'autoavaliacao',
        subtopico: 'Conceitos fundamentais de materiais e patrimônio',
        pergunta: 'Você consegue, sem consultar, diferenciar bem de consumo x bem permanente, estoque mínimo x estoque de segurança, ponto de pedido x giro de estoque, tombamento x inventário, e alienação x baixa patrimonial?',
        resposta: 'BEM DE CONSUMO x PERMANENTE: consumido com o uso (papel, caneta) x durável e, em regra, tombado (móveis, equipamentos, veículos). ESTOQUE MÍNIMO x DE SEGURANÇA: limite operacional x proteção adicional contra imprevistos. PONTO DE PEDIDO x GIRO: gatilho da compra (consumo médio × tempo de reposição + estoque de segurança) x indicador de renovação (consumo / estoque médio). TOMBAMENTO x INVENTÁRIO: identificação (número patrimonial) x conferência física. ALIENAÇÃO x BAIXA: transferência de propriedade a terceiro (causa) x retirada definitiva do patrimônio (gênero, que inclui a alienação, sinistro, obsolescência, furto).'
      }
    ]
  },

  /* ============================================================
     ADM-11 — Gestão de Processos
  ============================================================ */
  'ADM-11': {
    id: 'D-ADM-11',
    moduloId: 'ADM-11',
    itens: [
      {
        id: 'D-ADM-11-01',
        tipo: 'multipla_escolha',
        subtopico: 'Processo x projeto',
        pergunta: 'Sobre a diferença entre processo e projeto, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Processo e projeto são sinônimos: ambos têm começo, meio e fim definidos.' },
          { id: 'B', texto: 'Processo é contínuo e repetitivo (ex.: atendimento ao cidadão); projeto é temporário e único, com começo, meio e fim definidos (ex.: implantação de um novo sistema).' },
          { id: 'C', texto: 'Processo é único e temporário; projeto é contínuo e repetitivo.' },
          { id: 'D', texto: 'Projetos não têm prazo definido; processos, sim.' }
        ],
        gabarito: 'B',
        explicacao: 'PROCESSO: contínuo e repetitivo — gera o mesmo tipo de saída várias vezes (ex.: atendimento, matrícula, emissão de certidão). PROJETO: temporário e único — tem começo, meio e fim definidos e resultado singular (ex.: implantação de novo sistema, reforma de um prédio). A alternativa C inverte; A iguala indevidamente; D troca as características.'
      },
      {
        id: 'D-ADM-11-02',
        tipo: 'multipla_escolha',
        subtopico: 'Processos finalísticos x processos de apoio',
        pergunta: 'Sobre a classificação de processos, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Processos finalísticos dão suporte aos processos de apoio, que são os que geram valor direto ao cidadão.' },
          { id: 'B', texto: 'Processos finalísticos geram valor direto ao cliente/cidadão (ex.: emissão de alvará); processos de apoio dão suporte aos finalísticos (ex.: RH, compras, TI).' },
          { id: 'C', texto: 'Processos de apoio são os únicos que existem na Administração Pública.' },
          { id: 'D', texto: 'Processos finalísticos são exclusivos da iniciativa privada, e de apoio, exclusivos do setor público.' }
        ],
        gabarito: 'B',
        explicacao: 'FINALÍSTICOS (ou de negócio): geram valor DIRETO ao cliente/cidadão (ex.: emissão de alvará, matrícula escolar). DE APOIO (ou de suporte): sustentam os finalísticos internamente (ex.: RH, compras, TI). A alternativa A inverte a relação; C e D restringem indevidamente a aplicação — ambos existem em qualquer organização, pública ou privada.'
      },
      {
        id: 'D-ADM-11-03',
        tipo: 'multipla_escolha',
        subtopico: 'Identificação de gargalo (nível difícil)',
        pergunta: 'No processo de matrícula de uma rede municipal de ensino, o fluxo é: inscrição → conferência de documentos → análise de vagas → confirmação de matrícula → comunicação ao responsável. Nos últimos meses, a etapa de ANÁLISE DE VAGAS tem acumulado pedidos, e o tempo total de matrícula subiu de 5 para 15 dias. As demais etapas operam dentro da capacidade. Nesse cenário, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'O gargalo está na etapa de inscrição, pois é a primeira do processo.' },
          { id: 'B', texto: 'O gargalo está na etapa de ANÁLISE DE VAGAS, pois é nela que há acúmulo de pedidos e onde a capacidade limita o desempenho global do processo.' },
          { id: 'C', texto: 'Não há gargalo, pois o processo como um todo continua funcionando.' },
          { id: 'D', texto: 'O gargalo está na etapa de comunicação, pois é a última do processo.' }
        ],
        gabarito: 'B',
        explicacao: 'GARGALO é a etapa que LIMITA a capacidade total do processo — e ele está onde há ACÚMULO/ESPERA. No caso, a análise de vagas acumula pedidos e eleva o tempo total de 5 para 15 dias. A correção deve começar por ali. A alternativa A confunde ordem com gargalo; C nega a existência do gargalo; D confunde a etapa final com a etapa limitante.'
      },
      {
        id: 'D-ADM-11-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Melhoria contínua x reengenharia',
        pergunta: 'Melhoria contínua e reengenharia são sinônimos: ambas consistem em redesenhar radicalmente o processo, começando do zero.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. MELHORIA CONTÍNUA (kaizen) é INCREMENTAL — pequenos ajustes sucessivos, sem ruptura. REENGENHARIA é RADICAL — redesenho completo, "começar do zero", com ruptura do processo atual. Uma aperfeiçoa; a outra reinventa. A confusão entre os dois é uma das pegadinhas mais comuns.'
      },
      {
        id: 'D-ADM-11-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Gestão funcional x gestão por processos',
        pergunta: 'A gestão funcional organiza a organização por departamentos, com foco na eficiência local; a gestão por processos organiza por fluxo ponta a ponta, com foco no valor entregue ao cliente/cidadão.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. A gestão FUNCIONAL tem foco no departamento (eficiência local), mas pode gerar "silos" e retrabalho. A gestão POR PROCESSOS olha o FLUXO PONTA A PONTA, com foco no valor entregue ao cliente/cidadão — e busca romper os silos.'
      },
      {
        id: 'D-ADM-11-06',
        tipo: 'situacao',
        subtopico: 'Processo x projeto e finalístico x apoio',
        pergunta: 'Uma prefeitura está executando duas iniciativas simultâneas: (i) implantação de um novo sistema de protocolo digital, com prazo de 8 meses e equipe dedicada; (ii) manutenção do atendimento diário ao cidadão no balcão, que ocorre continuamente. Além disso, o setor de RH está contratando servidores para reforçar o atendimento. Sobre essas iniciativas, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: '(i) é processo finalístico; (ii) é projeto de apoio; e o RH é processo finalístico.' },
          { id: 'B', texto: '(i) é projeto; (ii) é processo finalístico; e o RH é processo de apoio.' },
          { id: 'C', texto: '(i) é processo de apoio; (ii) é projeto; e o RH é processo finalístico.' },
          { id: 'D', texto: '(i) e (ii) são processos de apoio; e o RH é processo finalístico.' }
        ],
        gabarito: 'B',
        explicacao: '(i) Implantação de novo sistema, com prazo e equipe dedicada, é PROJETO (temporário e único). (ii) Atendimento diário ao cidadão é PROCESSO FINALÍSTICO (contínuo, gera valor direto ao cidadão). (iii) Contratação de servidores pelo RH é PROCESSO DE APOIO (sustenta os finalísticos internamente). A chave é distinguir processo (contínuo) de projeto (temporário) e finalístico (valor direto) de apoio (suporte interno).'
      },
      {
        id: 'D-ADM-11-07',
        tipo: 'autoavaliacao',
        subtopico: 'Conceitos fundamentais de gestão por processos',
        pergunta: 'Você consegue, sem consultar, diferenciar processo x projeto, finalístico x apoio, atividade x tarefa, melhoria contínua x reengenharia e identificar um gargalo em um fluxo?',
        resposta: 'PROCESSO x PROJETO: contínuo/repetitivo x temporário/único. FINALÍSTICO x APOIO: valor direto ao cidadão (ex.: certidão) x suporte interno (ex.: RH, compras, TI). ATIVIDADE x TAREFA: unidade de trabalho dentro do processo (ex.: conferir documentos) x subdivisão com execução individual (ex.: carimbar protocolo). MELHORIA CONTÍNUA x REENGENHARIA: incremental (ajustes sucessivos) x radical (redesenho "do zero"). GARGALO: etapa que limita a capacidade total do processo — está onde há acúmulo/espera; é por ela que a melhoria deve começar.'
      }
    ]
  },
  /* ============================================================
     AP-13 — Conceitos fundamentais de Administração Pública
  ============================================================ */
  'AP-13': {
    id: 'D-AP-13',
    moduloId: 'AP-13',
    itens: [
      {
        id: 'D-AP-13-01',
        tipo: 'multipla_escolha',
        subtopico: 'Sentidos da Administração Pública (objetivo x subjetivo)',
        pergunta: 'Sobre os sentidos da expressão "Administração Pública", assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Sentido objetivo refere-se ao conjunto de órgãos e pessoas que exercem a atividade administrativa; sentido subjetivo refere-se à própria atividade administrativa.' },
          { id: 'B', texto: 'Sentido objetivo (ou material) designa a ATIVIDADE administrativa (o que se faz); sentido subjetivo (ou formal/orgânico) designa o CONJUNTO DE ÓRGÃOS E PESSOAS que a exercem (quem faz).' },
          { id: 'C', texto: 'Sentido objetivo e subjetivo são sinônimos: ambos designam a estrutura de órgãos da Administração.' },
          { id: 'D', texto: 'Sentido subjetivo designa apenas o Poder Executivo, e sentido objetivo apenas o Poder Judiciário.' }
        ],
        gabarito: 'B',
        explicacao: 'Sentido OBJETIVO (material): a própria ATIVIDADE administrativa (serviço público, polícia administrativa, fomento). Sentido SUBJETIVO (formal/orgânico): o CONJUNTO DE ÓRGÃOS E PESSOAS que exercem essa atividade. A pergunta-chave é: "o que" (objetivo) x "quem" (subjetivo). A alternativa A inverte; C iguala; D restringe indevidamente a Poderes.'
      },
      {
        id: 'D-AP-13-02',
        tipo: 'multipla_escolha',
        subtopico: 'Sentido amplo x restrito',
        pergunta: 'Sobre os sentidos amplo e restrito de Administração Pública, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Sentido amplo abrange apenas o Poder Executivo; sentido restrito abrange os três Poderes quando exercem função administrativa.' },
          { id: 'B', texto: 'Sentido amplo abrange os três Poderes (Executivo, Legislativo e Judiciário) quando exercem função administrativa, além de órgãos auxiliares; sentido restrito abrange apenas o Poder Executivo.' },
          { id: 'C', texto: 'Sentido amplo e restrito são sinônimos: ambos se referem apenas à estrutura do Poder Executivo.' },
          { id: 'D', texto: 'Sentido restrito abrange os três Poderes; sentido amplo, apenas o Legislativo.' }
        ],
        gabarito: 'B',
        explicacao: 'Sentido AMPLO: os três Poderes quando exercem função administrativa (ex.: o Judiciário comprando computadores para seus servidores) + órgãos auxiliares (Tribunais de Contas, MP). Sentido RESTRITO: apenas o Poder Executivo. A alternativa A inverte; C iguala; D restringe de forma incorreta.'
      },
      {
        id: 'D-AP-13-03',
        tipo: 'multipla_escolha',
        subtopico: 'Interesse público x interesse do Estado (nível difícil)',
        pergunta: 'Um prefeito determina que todos os contratos de publicidade do município sejam firmados com uma empresa de propriedade de seu irmão, sob o argumento de que "a empresa é a mais eficiente do mercado e, portanto, atender ao interesse público". Sobre a situação, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A medida atende ao interesse público, pois a eficiência da empresa é o único critério relevante.' },
          { id: 'B', texto: 'A medida confunde interesse público com interesse do Estado (ou da Administração) e, mais grave, com interesse pessoal do agente — o que viola os princípios da impessoalidade e da moralidade. O interesse público é o interesse da COLETIVIDADE, não do governante nem da máquina administrativa.' },
          { id: 'C', texto: 'A medida é válida porque o prefeito tem competência para escolher os fornecedores do município.' },
          { id: 'D', texto: 'A medida é válida desde que a empresa do irmão ofereça o menor preço, mesmo sem licitação.' }
        ],
        gabarito: 'B',
        explicacao: 'O INTERESSE PÚBLICO é o interesse da COLETIVIDADE, não do governante nem da máquina administrativa (interesse do Estado). Quando o agente usa a máquina pública para favorecer interesse pessoal (ainda que familiar), há desvio de finalidade, violação da impessoalidade e da moralidade. A alternativa A naturaliza o conflito de interesses; C ignora os limites legais; D confunde eficiência com legalidade. A questão é difícil porque exige distinguir três conceitos que costumam ser tratados como sinônimos: interesse público, interesse do Estado e interesse do agente.'
      },
      {
        id: 'D-AP-13-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Órgãos públicos x entidades',
        pergunta: 'Os órgãos públicos, como os ministérios e as secretarias, têm personalidade jurídica própria e integram a Administração Indireta.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Os ÓRGÃOS públicos NÃO têm personalidade jurídica própria — integram a pessoa jurídica a que pertencem (a União, o Estado, o Município) e fazem parte da Administração DIRETA. A personalidade jurídica própria é característica das ENTIDADES da Administração Indireta (autarquias, fundações, empresas públicas e SEM).'
      },
      {
        id: 'D-AP-13-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Supremacia x indisponibilidade do interesse público',
        pergunta: 'A supremacia do interesse público fundamenta as prerrogativas da Administração (ex.: desapropriação, cláusulas exorbitantes); a indisponibilidade do interesse público fundamenta as restrições à atuação administrativa (ex.: só agir conforme a lei).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. Os dois pilares do regime jurídico-administrativo são: SUPREMACIA (o interesse público prevalece sobre o individual — base das prerrogativas) e INDISPONIBILIDADE (o interesse público não pode ser disposto pelo administrador — base das restrições). Um confere poderes; o outro impõe limites.'
      },
      {
        id: 'D-AP-13-06',
        tipo: 'situacao',
        subtopico: 'Classificação em direta x indireta e sentido objetivo x subjetivo',
        pergunta: 'Uma prefeitura (a) emite alvará de funcionamento para um restaurante; (b) cria uma autarquia para gerir o transporte público; (c) capacita seus fiscais; (d) compra computadores para a Secretaria de Fazenda. Sobre essas situações, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Todas as situações ocorrem exclusivamente na Administração Indireta.' },
          { id: 'B', texto: '(a) é atividade administrativa (sentido objetivo); (b) é criação de entidade da Administração Indireta; (c) e (d) são atos de gestão interna da Administração Direta.' },
          { id: 'C', texto: '(a) e (b) são Administração Direta; (c) e (d) são Administração Indireta.' },
          { id: 'D', texto: '(b) é Administração Direta, pois a autarquia integra a Prefeitura.' }
        ],
        gabarito: 'B',
        explicacao: '(a) Emissão de alvará = ATIVIDADE administrativa (sentido OBJETIVO). (b) Criação de autarquia = entidade da Administração INDIRETA. (c) Capacitação de fiscais e (d) compra de computadores = atos de gestão interna da Administração DIRETA (a Prefeitura como ente). A chave é distinguir atividade (o que se faz) x entidade (quem faz), e direta x indireta.'
      },
      {
        id: 'D-AP-13-07',
        tipo: 'autoavaliacao',
        subtopico: 'Conceitos fundamentais da Administração Pública',
        pergunta: 'Você consegue, sem consultar, explicar os quatro sentidos de Administração Pública (amplo, restrito, objetivo e subjetivo) e a diferença entre interesse público, interesse do Estado e interesse do agente?',
        resposta: 'SENTIDOS: AMPLO (3 Poderes em função administrativa + órgãos auxiliares); RESTRITO (apenas Executivo); OBJETIVO (a atividade — o que se faz); SUBJETIVO (os órgãos e pessoas — quem faz). INTERESSE PÚBLICO: interesse da COLETIVIDADE. INTERESSE DO ESTADO: interesse da máquina administrativa como organização. INTERESSE DO AGENTE: interesse pessoal do governante — jamais se confunde com interesse público. A confusão entre os três é a raiz do desvio de finalidade.'
      }
    ]
  },

  /* ============================================================
     AP-14 — Modelos de Administração Pública
  ============================================================ */
  'AP-14': {
    id: 'D-AP-14',
    moduloId: 'AP-14',
    itens: [
      {
        id: 'D-AP-14-01',
        tipo: 'multipla_escolha',
        subtopico: 'Características dos três modelos',
        pergunta: 'Sobre os três grandes modelos de Administração Pública, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Patrimonialismo: foco em procedimentos; burocracia: confusão entre público e privado; gerencial: foco em resultados.' },
          { id: 'B', texto: 'Patrimonialismo: confusão entre o público e o privado; burocracia: formalismo, impessoalidade, meritocracia e regras escritas; gerencial: foco em resultados, eficiência e satisfação do cidadão.' },
          { id: 'C', texto: 'Os três modelos são sinônimos: todos se baseiam na impessoalidade e na meritocracia.' },
          { id: 'D', texto: 'A administração gerencial sucedeu o patrimonialismo, eliminando completamente a burocracia.' }
        ],
        gabarito: 'B',
        explicacao: 'PATRIMONIALISMO: confusão público/privado, pessoalidade, nepotismo (modelo pré-burocrático). BUROCRACIA: impessoalidade, meritocracia, formalismo, regras escritas, hierarquia (modelo weberiano). GERENCIAL: foco em resultados, eficiência, qualidade e satisfação do cidadão (nova gestão pública). A alternativa A troca as características; C iguala; D é historicamente incorreta (a gerencial não elimina a burocracia — convive com ela).'
      },
      {
        id: 'D-AP-14-02',
        tipo: 'multipla_escolha',
        subtopico: 'Reformas administrativas brasileiras',
        pergunta: 'Sobre as reformas administrativas brasileiras, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A Reforma de 1936 (criação do DASP) introduziu a administração gerencial; a Reforma de 1995 (Plano Diretor) introduziu a burocracia.' },
          { id: 'B', texto: 'A Reforma de 1936 (criação do DASP) introduziu a burocracia weberiana; a Reforma de 1995 (Plano Diretor, Bresser-Pereira) introduziu a administração gerencial, com foco em resultados e descentralização.' },
          { id: 'C', texto: 'A Reforma de 1995 eliminou completamente a burocracia no Brasil.' },
          { id: 'D', texto: 'A Reforma de 1967 (DL 200) foi a que introduziu a meritocracia no serviço público, criando o DASP.' }
        ],
        gabarito: 'B',
        explicacao: 'A Reforma de 1936 (criação do DASP) introduziu a BUROCRACIA weberiana (meritocracia, impessoalidade, regras escritas). A Reforma de 1995 (Plano Diretor da Reforma do Aparelho do Estado, conduzida por Bresser-Pereira) introduziu a ADMINISTRAÇÃO GERENCIAL (resultados, descentralização, contratos de gestão, avaliação de desempenho). A Reforma de 1967 (DL 200) descentralizou para autarquias e fundações, mas não criou o DASP (criado em 1936). A alternativa A inverte; C é falsa; D confunde a data de criação do DASP.'
      },
      {
        id: 'D-AP-14-03',
        tipo: 'multipla_escolha',
        subtopico: 'EC 19/1998 e administração gerencial (nível difícil)',
        pergunta: 'A Emenda Constitucional 19/1998 é considerada o marco constitucional da administração gerencial no Brasil. Sobre suas principais alterações, é correto afirmar que ela:',
        alternativas: [
          { id: 'A', texto: 'Inseriu a moralidade no caput do art. 37 da CF, criando o LIMPE.' },
          { id: 'B', texto: 'Inseriu a eficiência no caput do art. 37 da CF, incorporando ao texto constitucional o princípio da gestão por resultados, além de prever a avaliação de desempenho e os contratos de gestão.' },
          { id: 'C', texto: 'Eliminou o concurso público, passando a admitir a livre nomeação para todos os cargos efetivos.' },
          { id: 'D', texto: 'Criou o Conselho Nacional de Justiça (CNJ) e a súmula vinculante.' }
        ],
        gabarito: 'B',
        explicacao: 'A EC 19/1998 inseriu a EFICIÊNCIA no caput do art. 37 (formando o LIMPE) e trouxe dispositivos da lógica gerencial: avaliação de desempenho, contratos de gestão, possibilidade de vínculo por emprego público, entre outros. A alternativa A está errada — a moralidade já estava no texto original de 1988; a EC 19 inseriu a eficiência. C é absurda (o concurso permaneceu). D se refere à EC 45/2004 (Reforma do Judiciário). A dificuldade está em distinguir o que cada emenda realmente alterou — e em não confundir EC 19/1998 (gerencial) com EC 45/2004 (Judiciário).'
      },
      {
        id: 'D-AP-14-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Burocracia x administração gerencial',
        pergunta: 'A burocracia prioriza o controle de MEIOS (procedimentos, regras, formalidades); a administração gerencial prioriza o controle de FINS (resultados, indicadores, satisfação do cidadão).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. A BUROCRACIA controla procedimentos (o "como"), para garantir impessoalidade e impessoalidade na execução. A GERENCIAL controla resultados (o "o quê" e "para quê"), por meio de metas, indicadores e avaliação de desempenho. Uma prioriza o meio; a outra, o fim.'
      },
      {
        id: 'D-AP-14-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Patrimonialismo',
        pergunta: 'O patrimonialismo é um modelo de administração pública em que há separação clara entre o patrimônio público e o privado, com predomínio da impessoalidade e da meritocracia.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. O PATRIMONIALISMO se caracteriza justamente pela CONFUSÃO entre o público e o privado: os cargos e bens públicos são tratados como propriedade do governante. Não há impessoalidade nem meritocracia — o nepotismo e o clientelismo são a regra. A alternativa descreve a BUROCRACIA, não o patrimonialismo.'
      },
      {
        id: 'D-AP-14-06',
        tipo: 'situacao',
        subtopico: 'Identificação do modelo predominante',
        pergunta: 'Um órgão público está passando por uma reforma interna. Foram propostas quatro ações: (1) exigir concurso público para todos os cargos, com avaliação objetiva de mérito; (2) implantar contrato de gestão com metas e indicadores de desempenho; (3) definir procedimentos padronizados e hierarquia formal; (4) premiar equipes pelo alcance de resultados, com base em indicadores de satisfação do cidadão. As ações (1) e (3) estão mais associadas a qual modelo? E as ações (2) e (4)?',
        alternativas: [
          { id: 'A', texto: '(1) e (3): gerencial; (2) e (4): burocrático.' },
          { id: 'B', texto: '(1) e (3): burocrático; (2) e (4): gerencial.' },
          { id: 'C', texto: '(1) e (3): patrimonialista; (2) e (4): burocrático.' },
          { id: 'D', texto: 'Todas as ações são do mesmo modelo.' }
        ],
        gabarito: 'B',
        explicacao: '(1) Concurso público com mérito e (3) procedimentos padronizados + hierarquia formal são marcas do modelo BUROCRÁTICO. (2) Contrato de gestão com metas e (4) premiação por resultados/satisfação do cidadão são marcas do modelo GERENCIAL. A chave é reconhecer as marcas de cada modelo: burocracia (procedimento, mérito, hierarquia) x gerencial (resultado, indicador, avaliação).'
      },
      {
        id: 'D-AP-14-07',
        tipo: 'autoavaliacao',
        subtopico: 'Comparação entre os modelos e as reformas',
        pergunta: 'Você consegue, sem consultar, comparar os modelos patrimonialista, burocrático e gerencial — e associar cada um às reformas brasileiras de 1936, 1967 e 1995, além da EC 19/1998?',
        resposta: 'PATRIMONIALISTA: confusão público/privado, pessoalidade, nepotismo — modelo pré-burocrático. BUROCRÁTICO: impessoalidade, meritocracia, formalismo, regras escritas, hierarquia — Reforma de 1936 (DASP). GERENCIAL: resultados, eficiência, satisfação do cidadão, descentralização, contratos de gestão — Reforma de 1995 (Bresser-Pereira) e EC 19/1998 (eficiência no caput do art. 37). Reforma de 1967 (DL 200): descentralização para autarquias e fundações — não é gerencial nem burocrática pura, mas uma etapa intermediária. A EC 19/1998 é o marco constitucional da gestão por resultados.'
      }
    ]
  },

  /* ============================================================
     DA-15 — Princípios da Administração Pública
  ============================================================ */
  'DA-15': {
    id: 'D-DA-15',
    moduloId: 'DA-15',
    itens: [
      {
        id: 'D-DA-15-01',
        tipo: 'multipla_escolha',
        subtopico: 'LIMPE (art. 37, caput, CF/88)',
        pergunta: 'São princípios expressos da Administração Pública no caput do art. 37 da CF/88:',
        alternativas: [
          { id: 'A', texto: 'Legalidade, impessoalidade, moralidade, publicidade e eficiência.' },
          { id: 'B', texto: 'Legalidade, imparcialidade, moralidade, transparência e eficiência.' },
          { id: 'C', texto: 'Razoabilidade, proporcionalidade, moralidade, publicidade e economicidade.' },
          { id: 'D', texto: 'Legalidade, impessoalidade, motivação, publicidade e economicidade.' }
        ],
        gabarito: 'A',
        explicacao: 'O caput do art. 37 traz os princípios expressos do LIMPE: LEGALIDADE, IMPESSOALIDADE, MORALIDADE, PUBLICIDADE e EFICIÊNCIA (a eficiência foi inserida pela EC 19/1998). A alternativa B troca termos; C mistura princípios implícitos (razoabilidade, proporcionalidade) e economicidade; D troca impessoalidade por motivação e eficiência por economicidade.'
      },
      {
        id: 'D-DA-15-02',
        tipo: 'multipla_escolha',
        subtopico: 'Legalidade administrativa x legalidade do particular',
        pergunta: 'Sobre o princípio da legalidade, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A legalidade administrativa é idêntica à legalidade do particular: ambos podem fazer tudo o que a lei não proíbe.' },
          { id: 'B', texto: 'A legalidade do particular permite fazer tudo o que a lei não proíbe (autonomia privada); a legalidade administrativa exige que a Administração só faça o que a lei autoriza ou determina (legalidade estrita).' },
          { id: 'C', texto: 'A Administração pode fazer tudo o que a lei não proíbe, desde que motive o ato.' },
          { id: 'D', texto: 'O particular só pode fazer o que a lei autoriza, e a Administração pode fazer tudo o que a lei não proíbe.' }
        ],
        gabarito: 'B',
        explicacao: 'LEGALIDADE DO PARTICULAR: pode fazer tudo o que a lei NÃO PROÍBE (autonomia privada — art. 5º, II, CF). LEGALIDADE ADMINISTRATIVA: só pode fazer o que a lei AUTORIZA ou DETERMINA (legalidade estrita) — a Administração não tem autonomia de vontade. A alternativa A iguala; C adota a lógica do particular; D inverte. É a pegadinha mais clássica do tema.'
      },
      {
        id: 'D-DA-15-03',
        tipo: 'multipla_escolha',
        subtopico: 'Moralidade, impessoalidade e razoabilidade x proporcionalidade (nível difícil)',
        pergunta: 'Um diretor de hospital público determina a demissão sumária de um servidor que criticou, em rede social, a gestão do hospital — sem qualquer processo administrativo, sem contraditório e sem motivação. Paralelamente, um fiscal aplica multa máxima por uma infração leve, sem justificar a gradação. Sobre os princípios violados, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'No primeiro caso, houve violação apenas da moralidade; no segundo, apenas da legalidade.' },
          { id: 'B', texto: 'No primeiro caso, houve violação da impessoalidade (perseguição), da moralidade, do contraditório e da ampla defesa; no segundo, houve violação da razoabilidade e da proporcionalidade.' },
          { id: 'C', texto: 'Em ambos os casos, houve violação exclusiva da eficiência.' },
          { id: 'D', texto: 'Em ambos os casos, não houve violação de princípios, pois o agente público tem discricionariedade absoluta.' }
        ],
        gabarito: 'B',
        explicacao: 'No primeiro caso: a demissão sumária por retaliação a crítica viola a IMPESSOALIDADE (perseguição), a MORALIDADE, o CONTRADITÓRIO e a AMPLA DEFESA (ausência de processo), além da MOTIVAÇÃO (decisão sem fundamentação). No segundo: a multa máxima por infração leve, sem justificativa, viola a RAZOABILIDADE (adequação meios-fins) e a PROPORCIONALIDADE (a sanção não pode ser desproporcional à infração). A alternativa A restringe indevidamente; C simplifica demais; D ignora que a discricionariedade não é absoluta.'
      },
      {
        id: 'D-DA-15-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Eficiência (EC 19/1998)',
        pergunta: 'O princípio da eficiência foi inserido no caput do art. 37 pela EC 19/1998 — é, portanto, princípio EXPRESSO da Administração Pública, e não implícito.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. A EC 19/1998 inseriu a eficiência no caput do art. 37, formando o LIMPE. Antes da emenda, era considerada implícita pela doutrina; com a EC 19/1998, tornou-se expressa. Hoje, é princípio expresso e vinculante.'
      },
      {
        id: 'D-DA-15-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Autotutela x tutela',
        pergunta: 'Autotutela e tutela são sinônimos: ambas se referem ao poder da Administração de rever seus próprios atos.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. AUTOTUTELA: a Administração revê SEUS PRÓPRIOS atos (anula os ilegais, revoga os inconvenientes — Súmulas 346 e 473 do STF). TUTELA (ou controle finalístico): é a supervisão que a Administração DIRETA exerce sobre a INDIRETA (ex.: supervisão de autarquias). São institutos distintos — a confusão é uma pegadinha recorrente.'
      },
      {
        id: 'D-DA-15-06',
        tipo: 'situacao',
        subtopico: 'Aplicação de princípios a caso concreto',
        pergunta: 'Uma prefeitura publica, no Diário Oficial, ato de nomeação de um servidor. No mesmo dia, o prefeito determina a inclusão, no rodapé da publicação, de uma foto sua com os dizeres "gestão que transforma". Além disso, o ato não indica os fundamentos legais da nomeação. Sobre os princípios violados, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Não há violação de princípios: publicar a foto é apenas uma forma de comunicação institucional.' },
          { id: 'B', texto: 'A promoção pessoal do prefeito viola a IMPESSOALIDADE (art. 37, §1º, CF); a ausência de motivação viola a MOTIVAÇÃO (princípio implícito) e, reflexamente, o contraditório e a ampla defesa em relação aos interessados.' },
          { id: 'C', texto: 'A única violação é da legalidade, pois faltou indicar o fundamento legal.' },
          { id: 'D', texto: 'A única violação é da eficiência, pois o ato não foi produtivo.' }
        ],
        gabarito: 'B',
        explicacao: 'A promoção pessoal de agentes públicos em atos, programas, obras, serviços e campanhas é VEDADA pelo art. 37, §1º, da CF — viola a IMPESSOALIDADE. A ausência de motivação viola o dever de MOTIVAR (princípio implícito), comprometendo o contraditório e a ampla defesa. A alternativa A naturaliza a violação; C restringe; D não trata do problema.'
      },
      {
        id: 'D-DA-15-07',
        tipo: 'autoavaliacao',
        subtopico: 'LIMPE e princípios implícitos',
        pergunta: 'Você consegue, sem consultar, explicar os cinco princípios expressos do LIMPE e os principais princípios implícitos (supremacia, indisponibilidade, razoabilidade, proporcionalidade, continuidade, autotutela, segurança jurídica e motivação)?',
        resposta: 'LIMPE: LEGALIDADE (Administração só faz o que a lei autoriza); IMPESSOALIDADE (objetividade, vedação de promoção pessoal); MORALIDADE (ética, probidade, boa-fé); PUBLICIDADE (transparência, ressalvados sigilos legais); EFICIÊNCIA (EC 19/1998 — resultados, economicidade). IMPLÍCITOS: SUPREMACIA (interesse público prevalece sobre o individual — prerrogativas); INDISPONIBILIDADE (o administrador não dispõe do interesse público — restrições); RAZOABILIDADE (adequação meios-fins); PROPORCIONALIDADE (adequação, necessidade e proporcionalidade em sentido estrito); CONTINUIDADE (serviço público não pode ser interrompido, salvo exceções); AUTOTUTELA (revisão dos próprios atos); SEGURANÇA JURÍDICA (estabilidade das relações); MOTIVAÇÃO (dever de fundamentar decisões).'
      }
    ]
  },

  /* ============================================================
     DA-16 — Organização da Administração Pública
  ============================================================ */
  'DA-16': {
    id: 'D-DA-16',
    moduloId: 'DA-16',
    itens: [
      {
        id: 'D-DA-16-01',
        tipo: 'multipla_escolha',
        subtopico: 'Administração direta x indireta',
        pergunta: 'Sobre a Administração Pública direta e indireta, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A Administração direta é composta por entidades com personalidade jurídica própria; a indireta, pelos entes federativos e seus órgãos.' },
          { id: 'B', texto: 'A Administração direta é composta pelos próprios entes federativos (União, Estados, DF, Municípios) e seus órgãos (sem personalidade jurídica própria); a indireta, por autarquias, fundações públicas, empresas públicas e sociedades de economia mista (todas com personalidade jurídica própria).' },
          { id: 'C', texto: 'Administração direta e indireta são sinônimos.' },
          { id: 'D', texto: 'Órgãos públicos integram a Administração Indireta, e autarquias integram a Direta.' }
        ],
        gabarito: 'B',
        explicacao: 'DIRETA: entes federativos + órgãos (sem personalidade jurídica própria). INDIRETA: autarquias, fundações públicas, empresas públicas e sociedades de economia mista (todas com personalidade jurídica própria). A alternativa A inverte; C iguala; D troca os grupos.'
      },
      {
        id: 'D-DA-16-02',
        tipo: 'multipla_escolha',
        subtopico: 'Autarquia x fundação pública x empresa pública x SEM',
        pergunta: 'Sobre as entidades da Administração Indireta, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Empresa pública é sempre sociedade anônima; sociedade de economia mista pode ser qualquer forma societária.' },
          { id: 'B', texto: 'Autarquia é pessoa jurídica de direito público, criada por lei, para função típica da Administração; fundação pública pode ser de direito público ou privado; empresa pública tem capital 100% público, em qualquer forma societária; sociedade de economia mista tem capital misto, com maioria pública, sempre sob a forma de S.A.' },
          { id: 'C', texto: 'Autarquia é pessoa jurídica de direito privado; empresa pública é sempre de direito público.' },
          { id: 'D', texto: 'Sociedade de economia mista tem capital 100% público.' }
        ],
        gabarito: 'B',
        explicacao: 'AUTARQUIA: direito público, criada por lei, para função típica. FUNDAÇÃO PÚBLICA: direito público OU privado, para atividade não exclusiva do Estado. EMPRESA PÚBLICA: capital 100% público, qualquer forma societária (LTDA, S.A.). SEM: capital misto, com MAIORIA pública, SEMPRE S.A. A alternativa A inverte empresa pública e SEM; C inverte autarquia e empresa pública; D diz que SEM é 100% público (é misto).'
      },
      {
        id: 'D-DA-16-03',
        tipo: 'multipla_escolha',
        subtopico: 'Descentralização x desconcentração (nível difícil)',
        pergunta: 'A prefeitura de um município decide (a) criar uma autarquia para gerir o serviço de água e esgoto; (b) criar uma Secretaria de Meio Ambiente; (c) conceder a exploração do transporte coletivo a uma empresa privada; (d) dividir a Secretaria de Saúde em coordenações regionais. Sobre esses atos, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: '(a), (b), (c) e (d) são descentralização.' },
          { id: 'B', texto: '(a) e (c) são descentralização (outorga e delegação, respectivamente); (b) e (d) são desconcentração (criação de órgãos dentro da mesma pessoa jurídica).' },
          { id: 'C', texto: '(a), (b), (c) e (d) são desconcentração.' },
          { id: 'D', texto: '(a) e (b) são desconcentração; (c) e (d) são descentralização.' }
        ],
        gabarito: 'B',
        explicacao: '(a) Criação de autarquia = DESCENTRALIZAÇÃO POR OUTORGA (transfere titularidade e execução, via lei, a entidade com personalidade jurídica própria). (c) Concessão a empresa privada = DESCENTRALIZAÇÃO POR DELEGAÇÃO (transfere apenas a execução). (b) Criação de Secretaria = DESCONCENTRAÇÃO (novo órgão dentro da mesma pessoa jurídica). (d) Divisão em coordenações regionais = DESCONCENTRAÇÃO (divisão interna entre órgãos). A chave é: descentralização cria/transfere para OUTRA pessoa; desconcentração divide dentro da MESMA pessoa.'
      },
      {
        id: 'D-DA-16-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Personalidade jurídica',
        pergunta: 'Os órgãos públicos possuem personalidade jurídica própria, ao passo que as entidades da Administração Indireta não a possuem.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso — é o inverso. ÓRGÃOS não têm personalidade jurídica própria: integram a pessoa jurídica a que pertencem (União, Estado, Município). ENTIDADES da Administração Indireta (autarquias, fundações, empresas públicas, SEM) TÊM personalidade jurídica própria.'
      },
      {
        id: 'D-DA-16-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Autarquia e fundação pública',
        pergunta: 'Autarquia e fundação pública são sinônimos: ambas são pessoas jurídicas de direito público, criadas por lei, para função típica da Administração.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. A AUTARQUIA é sempre pessoa jurídica de direito público, criada por lei, para função típica da Administração (ex.: INSS, IBGE). A FUNDAÇÃO PÚBLICA pode ser de direito público OU privado, e é criada para atividade NÃO exclusiva do Estado (ex.: universidade federal, FUNAI). Ambas integram a Administração Indireta, mas têm naturezas e finalidades distintas.'
      },
      {
        id: 'D-DA-16-06',
        tipo: 'situacao',
        subtopico: 'Teoria do órgão e imputação',
        pergunta: 'Um servidor do Ministério da Saúde, no exercício de suas funções, causa dano a um particular por ação negligente. A vítima pretende ajuizar ação indenizatória. Com base na Teoria do Órgão (ou da imputação) adotada pelo Direito Administrativo brasileiro, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A ação deve ser proposta contra o servidor, pois foi ele quem causou o dano diretamente.' },
          { id: 'B', texto: 'A ação deve ser proposta contra a União, pois a conduta do agente é imputada à pessoa jurídica a que pertence o órgão — a Administração responde objetivamente, cabendo ação regressiva contra o agente em caso de dolo ou culpa.' },
          { id: 'C', texto: 'A ação deve ser proposta contra o órgão (Ministério da Saúde), que tem personalidade jurídica própria.' },
          { id: 'D', texto: 'A ação deve ser proposta contra o servidor e contra a União, em litisconsórcio necessário, com responsabilidade solidária subjetiva.' }
        ],
        gabarito: 'B',
        explicacao: 'Pela TEORIA DO ÓRGÃO (ou da imputação), a conduta do agente público é imputada à PESSOA JURÍDICA a que pertence o órgão. Assim, a vítima ajuíza a ação contra a União (responsabilidade OBJETIVA — art. 37, §6º, CF), e a União, posteriormente, pode ajuizar AÇÃO REGRESSIVA contra o agente em caso de DOLO ou CULPA. A alternativa A ignora a teoria; C confunde órgão (sem personalidade) com ente; D propõe litisconsórcio que não é necessário.'
      },
      {
        id: 'D-DA-16-07',
        tipo: 'autoavaliacao',
        subtopico: 'Estrutura e distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, diferenciar administração direta x indireta, órgão x entidade, autarquia x fundação, empresa pública x SEM, descentralização x desconcentração e explicar a Teoria do Órgão?',
        resposta: 'DIRETA x INDIRETA: entes e órgãos (sem personalidade) x entidades (com personalidade). ÓRGÃO x ENTIDADE: centro de competência sem CNPJ x pessoa jurídica com CNPJ. AUTARQUIA x FUNDAÇÃO: direito público, função típica x direito público ou privado, atividade não exclusiva. EMPRESA PÚBLICA x SEM: 100% público, qualquer forma x misto com maioria pública, sempre S.A. DESCENTRALIZAÇÃO x DESCONCENTRAÇÃO: para outra pessoa (outorga ou delegação) x dentro da mesma pessoa (órgãos). TEORIA DO ÓRGÃO: a conduta do agente é imputada à pessoa jurídica a que pertence o órgão — a Administração responde objetivamente, com ação regressiva contra o agente em caso de dolo ou culpa.'
      }
    ]
  },

  /* ============================================================
     DA-17 — Agentes públicos
  ============================================================ */
  'DA-17': {
    id: 'D-DA-17',
    moduloId: 'DA-17',
    itens: [
      {
        id: 'D-DA-17-01',
        tipo: 'multipla_escolha',
        subtopico: 'Classificação dos agentes públicos',
        pergunta: 'Sobre a classificação dos agentes públicos, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Agentes políticos são todos os servidores concursados, independentemente da função exercida.' },
          { id: 'B', texto: 'Agentes políticos exercem funções de cúpula (Presidente, Governador, Prefeito, Ministros, Secretários, Vereadores, Deputados, Senadores, Juízes, Membros do MP); servidores públicos mantêm vínculo profissional com a Administração; particulares em colaboração atuam sem vínculo empregatício (ex.: mesários, jurados).' },
          { id: 'C', texto: 'Particulares em colaboração são servidores estatutários.' },
          { id: 'D', texto: 'Empregados públicos são servidores estatutários.' }
        ],
        gabarito: 'B',
        explicacao: 'AGENTES POLÍTICOS: cúpula do Estado, funções de direção e decisão (Presidente, Governador, Prefeito, Ministros, Secretários, Vereadores, Deputados, Senadores, Juízes, Membros do MP). SERVIDORES PÚBLICOS: vínculo profissional com a Administração (estatutários ou empregados). PARTICULARES EM COLABORAÇÃO: atuam sem vínculo empregatício (mesários, jurados). A alternativa A reduz indevidamente os agentes políticos aos concursados; C e D classificam incorretamente.'
      },
      {
        id: 'D-DA-17-02',
        tipo: 'multipla_escolha',
        subtopico: 'Cargo x emprego x função',
        pergunta: 'Sobre as figuras de cargo, emprego e função pública, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Cargo é vínculo celetista; emprego é vínculo estatutário; função é a mesma coisa que cargo.' },
          { id: 'B', texto: 'Cargo é vínculo estatutário, criado por lei, com denominação própria e vencimento; emprego é vínculo celetista (CLT); função é o conjunto de atribuições, sem vínculo de cargo ou emprego (ex.: função de confiança, função temporária).' },
          { id: 'C', texto: 'Cargo e emprego são sinônimos; função é o mesmo que emprego.' },
          { id: 'D', texto: 'Função de confiança é acessível a qualquer pessoa, independentemente de ser servidor de carreira.' }
        ],
        gabarito: 'B',
        explicacao: 'CARGO: vínculo estatutário, criado por lei, com denominação própria e vencimento (ex.: Analista Judiciário). EMPREGO: vínculo celetista (CLT), típico de empresas públicas e SEM. FUNÇÃO: conjunto de atribuições, sem vínculo de cargo ou emprego — pode ser FUNÇÃO DE CONFIANÇA (privativa de servidor de carreira) ou FUNÇÃO TEMPORÁRIA (art. 37, IX). A alternativa A inverte; C iguala; D ignora a exigência de ser servidor de carreira.'
      },
      {
        id: 'D-DA-17-03',
        tipo: 'multipla_escolha',
        subtopico: 'Acumulação de cargos e provimento derivado (nível difícil)',
        pergunta: 'Sobre a acumulação de cargos e o provimento, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'É permitida a acumulação de dois cargos de técnico administrativo, desde que haja compatibilidade de horários.' },
          { id: 'B', texto: 'A acumulação é permitida nas hipóteses do art. 37, XVI (dois cargos de professor; um de professor + outro técnico/científico; dois privativos de profissionais de saúde), sempre com compatibilidade de horários e respeito ao teto. A transferência deixou de ser forma de provimento derivado após a EC 19/1998.' },
          { id: 'C', texto: 'A transferência ainda é forma de provimento derivado, expressamente prevista na CF/88.' },
          { id: 'D', texto: 'A acumulação de cargos é permitida livremente, desde que o servidor tenha disponibilidade.' }
        ],
        gabarito: 'B',
        explicacao: 'ACUMULAÇÃO: permitida apenas nas três hipóteses do art. 37, XVI (mnemônico PP-PT-SS), com compatibilidade de horários e respeito ao teto. A TRANSFERÊNCIA foi extinta como forma de provimento derivado pela EC 19/1998 — a alternativa C é o erro clássico. A alternativa A cai no erro de acumular dois cargos de técnico (só é permitida a acumulação de professor com professor, professor com técnico, e saúde com saúde). D ignora as restrições.'
      },
      {
        id: 'D-DA-17-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Provimento originário x derivado',
        pergunta: 'Provimento originário é a nomeação, em regra precedida de concurso público; provimento derivado é a alteração dentro da mesma carreira ou entre carreiras (promoção, readaptação, reversão, aproveitamento, reintegração, recondução).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. O provimento ORIGINÁRIO é a nomeação (início do vínculo, em regra precedido de concurso). O provimento DERIVADO é a alteração dentro da mesma carreira ou entre carreiras: promoção, readaptação, reversão, aproveitamento, reintegração e recondução. A transferência não é mais admitida como provimento derivado (EC 19/1998).'
      },
      {
        id: 'D-DA-17-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Empregado público',
        pergunta: 'Empregado público é o ocupante de emprego público, sob regime celetista (CLT), típico de empresas públicas, sociedades de economia mista e fundações públicas de direito privado.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. EMPREGADO PÚBLICO ocupa EMPREGO público, sob regime celetista (CLT) — típico de empresas públicas, SEM e fundações públicas de direito privado. Não se confunde com o SERVIDOR ESTATUTÁRIO, que ocupa CARGO efetivo, sob regime jurídico único.'
      },
      {
        id: 'D-DA-17-06',
        tipo: 'situacao',
        subtopico: 'Caso concreto de acumulação',
        pergunta: 'Marina é servidora estatutária do Ministério da Saúde, ocupante de cargo efetivo de enfermeira, com jornada de 30 horas semanais. Ela é aprovada em concurso para outro cargo efetivo de enfermeira em um hospital federal, também com 30 horas semanais. Sobre a acumulação, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'É vedada, porque a acumulação de cargos é proibida em qualquer hipótese.' },
          { id: 'B', texto: 'É permitida, pois se trata de dois cargos privativos de profissionais de saúde, com compatibilidade de horários e respeito ao teto — hipótese do art. 37, XVI, "c".' },
          { id: 'C', texto: 'É permitida apenas se Marina renunciar a um dos cargos no prazo de 30 dias.' },
          { id: 'D', texto: 'É vedada, porque os dois cargos são federais.' }
        ],
        gabarito: 'B',
        explicacao: 'Trata-se da hipótese do art. 37, XVI, "c" — DOIS cargos privativos de profissionais de saúde. Exige-se compatibilidade de horários (30h + 30h = 60h, compatível) e respeito ao teto remuneratório. A acumulação é lícita. A alternativa A ignora as exceções constitucionais; C cria exigência inexistente; D não é critério de vedação — a acumulação pode ocorrer entre cargos de qualquer esfera, desde que respeitadas as hipóteses constitucionais.'
      },
      {
        id: 'D-DA-17-07',
        tipo: 'autoavaliacao',
        subtopico: 'Classificação e regime dos agentes públicos',
        pergunta: 'Você consegue, sem consultar, classificar os agentes públicos (políticos, servidores, empregados públicos e particulares em colaboração) e diferenciar cargo, emprego e função, provimento originário e derivado, e as hipóteses de acumulação?',
        resposta: 'AGENTES POLÍTICOS: cúpula (Presidente, Governador, Prefeito, Ministros, Secretários, Vereadores, Deputados, Senadores, Juízes, Membros do MP). SERVIDORES PÚBLICOS: vínculo profissional — estatutários (cargo efetivo, regime jurídico único) e empregados públicos (emprego, CLT). PARTICULARES EM COLABORAÇÃO: sem vínculo (mesários, jurados). CARGO x EMPREGO x FUNÇÃO: estatutário x celetista x sem vínculo. PROVIMENTO: originário (nomeação) x derivado (promoção, readaptação, reversão, aproveitamento, reintegração, recondução — a transferência foi extinta pela EC 19/1998). ACUMULAÇÃO: 3 hipóteses (2 de professor; 1 professor + 1 técnico; 2 de saúde), com compatibilidade e teto — mnemônico PP-PT-SS.'
      }
    ]
  },

  /* ============================================================
     DA-18 — Poderes da Administração Pública
  ============================================================ */
  'DA-18': {
    id: 'D-DA-18',
    moduloId: 'DA-18',
    itens: [
      {
        id: 'D-DA-18-01',
        tipo: 'multipla_escolha',
        subtopico: 'Os quatro poderes administrativos',
        pergunta: 'Sobre os poderes administrativos, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'São poderes administrativos: hierárquico, disciplinar, regulamentar (ou normativo) e de polícia — todos instrumentais, existindo para o interesse público.' },
          { id: 'B', texto: 'São poderes administrativos: Executivo, Legislativo, Judiciário e Moderador.' },
          { id: 'C', texto: 'Os poderes administrativos são ilimitados, pois a Administração não se submete a controle.' },
          { id: 'D', texto: 'Poder hierárquico e poder disciplinar são a mesma coisa: ambos permitem punir servidores.' }
        ],
        gabarito: 'A',
        explicacao: 'Os poderes administrativos são: HIERÁRQUICO (organiza a estrutura, ordens, fiscalização, delegação, avocação), DISCIPLINAR (pune faltas), REGULAMENTAR ou NORMATIVO (decreto do chefe do Executivo para detalhar lei, sem inovar) e DE POLÍCIA (limita direitos do particular em favor do interesse público). Todos são instrumentais — existem para o interesse público. A alternativa B confunde com Poderes do Estado; C é absurda; D confunde hierárquico e disciplinar (o disciplinar é uma manifestação do hierárquico, mas não se confundem).'
      },
      {
        id: 'D-DA-18-02',
        tipo: 'multipla_escolha',
        subtopico: 'Poder disciplinar x poder de polícia',
        pergunta: 'Sobre a diferença entre poder disciplinar e poder de polícia, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Poder disciplinar atinge o particular em geral; poder de polícia atinge servidores públicos.' },
          { id: 'B', texto: 'Poder disciplinar atinge SERVIDORES e pessoas sujeitas à disciplina interna (ex.: alunos de escola pública, contratados); poder de polícia atinge o PARTICULAR em geral, limitando direitos em favor do interesse público (ex.: fiscalização sanitária, interdição).' },
          { id: 'C', texto: 'São sinônimos: ambos se referem à punição de infrações.' },
          { id: 'D', texto: 'Poder de polícia é exclusivo da União; poder disciplinar é exclusivo dos Estados.' }
        ],
        gabarito: 'B',
        explicacao: 'PODER DISCIPLINAR: atinge SERVIDORES e pessoas sujeitas à disciplina interna (alunos, contratados). PODER DE POLÍCIA: atinge o PARTICULAR em geral, limitando direitos em favor do interesse público (fiscalização, interdição, licenciamento). A alternativa A inverte; C iguala; D inventa restrição por ente. É a distinção mais cobrada do módulo.'
      },
      {
        id: 'D-DA-18-03',
        tipo: 'multipla_escolha',
        subtopico: 'Excesso de poder x desvio de poder (nível difícil)',
        pergunta: 'Um fiscal de vigilância sanitária, no exercício de suas funções, interdita um restaurante com condições higiênicas adequadas, motivado por desavença pessoal com o proprietário. Paralelamente, um servidor sem competência para aplicar multas aplica uma multa a um cidadão. Sobre as situações, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'As duas situações configuram excesso de poder.' },
          { id: 'B', texto: 'A primeira configura DESVIO DE PODER (desvio de finalidade) — o agente está dentro da competência, mas usa o poder para fim diverso do previsto na lei; a segunda configura EXCESSO DE PODER — o agente atua além de sua competência.' },
          { id: 'C', texto: 'A primeira configura excesso de poder; a segunda, desvio de poder.' },
          { id: 'D', texto: 'Não há abuso de poder em nenhum dos casos, pois ambos agiram no exercício da função.' }
        ],
        gabarito: 'B',
        explicacao: 'DESVIO DE PODER (ou de finalidade): o agente atua DENTRO da competência, mas com FINALIDADE diversa da prevista na lei (interdição por desavença pessoal). EXCESSO DE PODER: o agente atua ALÉM de sua competência (servidor sem competência aplica multa). Ambos são abuso de poder e geram nulidade do ato. A chave é: excesso = além da competência; desvio = fim diverso. A dificuldade está em identificar corretamente cada figura em casos concretos.'
      },
      {
        id: 'D-DA-18-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Poder regulamentar',
        pergunta: 'O poder regulamentar permite ao chefe do Poder Executivo (Presidente, Governador, Prefeito) editar decretos para detalhar a lei, sem inovar na ordem jurídica — ou seja, sem criar direitos ou obrigações novos.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. O poder REGULAMENTAR é a competência do chefe do Executivo para editar DECRETOS que detalham a lei, sem inovar na ordem jurídica (não criam direitos nem obrigações novos). A competência é do chefe do Executivo — não de qualquer agente — e o decreto não pode contrariar a lei.'
      },
      {
        id: 'D-DA-18-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Abuso de poder',
        pergunta: 'O abuso de poder abrange duas formas: o excesso de poder (ato além da competência) e o desvio de poder ou de finalidade (ato com finalidade diversa da prevista em lei).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. ABUSO DE PODER é o gênero, que abrange: (a) EXCESSO DE PODER — o agente atua além de sua competência (ato ultra vires); (b) DESVIO DE PODER (ou de finalidade) — o agente atua dentro da competência, mas com finalidade diversa da prevista em lei. Ambos são vícios de legalidade e geram nulidade do ato.'
      },
      {
        id: 'D-DA-18-06',
        tipo: 'situacao',
        subtopico: 'Aplicação dos poderes administrativos',
        pergunta: 'Um prefeito edita decreto regulamentando a lei municipal de licenciamento ambiental; um fiscal interdita obra irregular; um diretor de escola aplica advertência a aluno que descumpriu o regimento; um superior avoca, para si, a decisão de um subordinado. Essas quatro situações correspondem, respectivamente, a manifestações de:',
        alternativas: [
          { id: 'A', texto: 'Poder regulamentar, poder de polícia, poder disciplinar e poder hierárquico.' },
          { id: 'B', texto: 'Poder de polícia, poder regulamentar, poder hierárquico e poder disciplinar.' },
          { id: 'C', texto: 'Poder disciplinar, poder de polícia, poder regulamentar e poder hierárquico.' },
          { id: 'D', texto: 'Poder hierárquico, poder disciplinar, poder de polícia e poder regulamentar.' }
        ],
        gabarito: 'A',
        explicacao: '(1) Decreto regulamentando lei = PODER REGULAMENTAR. (2) Fiscal interdita obra irregular = PODER DE POLÍCIA. (3) Advertência a aluno = PODER DISCIPLINAR (atinge pessoa sujeita à disciplina interna). (4) Avocação de decisão = PODER HIERÁRQUICO (superior chama para si competência do subordinado). A chave é reconhecer cada manifestação concreta.'
      },
      {
        id: 'D-DA-18-07',
        tipo: 'autoavaliacao',
        subtopico: 'Poderes administrativos e abuso de poder',
        pergunta: 'Você consegue, sem consultar, diferenciar os quatro poderes administrativos (hierárquico, disciplinar, regulamentar e de polícia) e as duas formas de abuso de poder (excesso e desvio)?',
        resposta: 'PODERES: HIERÁRQUICO (organiza a estrutura — ordens, fiscalização, delegação, avocação); DISCIPLINAR (pune servidores e sujeitos à disciplina interna); REGULAMENTAR (decreto do chefe do Executivo para detalhar lei, sem inovar); POLÍCIA (limita direitos do particular em favor do interesse público — fiscalização, interdição, licenciamento). ABUSO: EXCESSO (além da competência — ato ultra vires) x DESVIO (dentro da competência, mas com finalidade diversa da prevista em lei). Ambos geram nulidade do ato. Disciplinar x polícia: servidores/sujeitos internos x particular em geral.'
      }
    ]
  },
  /* ============================================================
     DA-19 — Atos Administrativos
  ============================================================ */
  'DA-19': {
    id: 'D-DA-19',
    moduloId: 'DA-19',
    itens: [
      {
        id: 'D-DA-19-01',
        tipo: 'multipla_escolha',
        subtopico: 'Elementos/requisitos do ato administrativo',
        pergunta: 'Sobre os elementos (ou requisitos) do ato administrativo, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'São cinco: competência, finalidade, forma, motivo e objeto. Competência e finalidade são sempre vinculadas; forma, motivo e objeto podem ser vinculados ou discricionários, conforme o ato.' },
          { id: 'B', texto: 'São quatro: sujeito, objeto, forma e motivação. O motivo integra o objeto.' },
          { id: 'C', texto: 'São três: competência, forma e finalidade. Motivo e objeto são elementos acidentais.' },
          { id: 'D', texto: 'São dois: legalidade e moralidade. Os demais são princípios, não elementos.' }
        ],
        gabarito: 'A',
        explicacao: 'Os cinco elementos do ato administrativo são: COMPETÊNCIA (poder legal — em regra, vinculada; pode ser delegada, salvo quando exclusiva), FINALIDADE (interesse público — sempre vinculada), FORMA (exteriorização — em regra, vinculada, salvo forma livre), MOTIVO (pressupostos de fato e de direito — pode ser vinculado ou discricionário) e OBJETO (conteúdo — pode ser vinculado ou discricionário). A alternativa B reduz indevidamente; C exclui motivo e objeto; D confunde elementos com princípios.'
      },
      {
        id: 'D-DA-19-02',
        tipo: 'multipla_escolha',
        subtopico: 'Anulação x revogação',
        pergunta: 'Sobre a anulação e a revogação do ato administrativo, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Anulação: por ilegalidade, com efeito ex nunc, apenas pela Administração. Revogação: por mérito, com efeito ex tunc, pela Administração e pelo Judiciário.' },
          { id: 'B', texto: 'Anulação: por ilegalidade, com efeito ex tunc (retroativo), pela Administração e pelo Judiciário. Revogação: por conveniência/oportunidade (mérito), com efeito ex nunc (não retroativo), apenas pela Administração.' },
          { id: 'C', texto: 'Anulação e revogação são sinônimos: ambas decorrem de ilegalidade.' },
          { id: 'D', texto: 'O Judiciário pode revogar ato administrativo inconveniente, desde que haja provocação da parte interessada.' }
        ],
        gabarito: 'B',
        explicacao: 'ANULAÇÃO: ato ILEGAL — efeito EX TUNC (retroativo) — feita pela Administração (autotutela) E pelo Judiciário (controle de legalidade). REVOGAÇÃO: ato INCONVENIENTE (mérito) — efeito EX NUNC (dali para frente) — SÓ pela Administração. A alternativa A inverte os efeitos e as legitimidades; C confunde os institutos; D repete a pegadinha clássica (o Judiciário não revoga — só anula).'
      },
      {
        id: 'D-DA-19-03',
        tipo: 'multipla_escolha',
        subtopico: 'Vícios do ato e convalidação (nível difícil)',
        pergunta: 'Um servidor sem competência para a prática do ato, mas com boa-fé, aplica uma sanção administrativa a um particular. O ato é posteriormente ratificado pela autoridade competente, sem prejuízo ao interesse público nem a terceiros. Paralelamente, em outro caso, um agente competente aplica sanção com base em MOTIVO FALSO (fatos inexistentes). Sobre a possibilidade de convalidação, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Ambos os atos são convalidáveis, pois a convalidação corrige qualquer vício.' },
          { id: 'B', texto: 'O primeiro ato é convalidável (vício de competência — sanável, em regra); o segundo NÃO é convalidável (vício de motivo — insanável, em regra). A convalidação só alcança vícios de competência e forma, quando não houver prejuízo ao interesse público nem a terceiros, com efeito ex tunc.' },
          { id: 'C', texto: 'Nenhum dos atos é convalidável, pois a sanção é ato punitivo.' },
          { id: 'D', texto: 'O primeiro ato é insanável, e o segundo é convalidável, pois o motivo falso pode ser corrigido.' }
        ],
        gabarito: 'B',
        explicacao: 'A CONVALIDAÇÃO corrige vícios SANÁVEIS: competência (quando não exclusiva) e forma (quando não essencial à validade do ato), desde que não haja prejuízo ao interesse público nem a terceiros — com efeito EX TUNC. Vícios de FINALIDADE, MOTIVO e OBJETO são, em regra, INSANÁVEIS. No primeiro caso, o vício de competência é sanável (ratificação pela autoridade competente). No segundo, o vício de motivo (fato falso) é insanável — o ato é nulo. A chave é saber quais vícios são convalidáveis e quais não são.'
      },
      {
        id: 'D-DA-19-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Presunção de legitimidade',
        pergunta: 'A presunção de legitimidade do ato administrativo é ABSOLUTA: não admite prova em contrário, em nenhuma hipótese.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. A presunção de legitimidade é RELATIVA (iuris tantum): o ato se presume válido até prova em contrário. Admite, portanto, impugnação e prova contrária. É um atributo que transfere ao particular o ônus de provar a ilegalidade — mas não é absoluto.'
      },
      {
        id: 'D-DA-19-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Autoexecutoriedade',
        pergunta: 'A autoexecutoriedade é atributo presente em TODOS os atos administrativos, sem exceção.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. A autoexecutoriedade NÃO está presente em todos os atos. A MULT	 (sanção pecuniária) é exemplo clássico de ato sem autoexecutoriedade — precisa de cobrança judicial. Já a INTERDIÇÃO é exemplo de ato com autoexecutoriedade. A presença ou não depende de previsão legal e da natureza do ato.'
      },
      {
        id: 'D-DA-19-06',
        tipo: 'situacao',
        subtopico: 'Cassação x caducidade x contraposição',
        pergunta: 'Um permissionário de uso de bem público teve sua permissão extinta em três situações distintas, em momentos diferentes: (a) descumpriu uma condição prevista no termo; (b) o prazo da permissão expirou; (c) foi editado um novo ato incompatível com a permissão anterior, que a substituiu. Os institutos de extinção são, respectivamente:',
        alternativas: [
          { id: 'A', texto: 'Cassação, caducidade e contraposição.' },
          { id: 'B', texto: 'Caducidade, cassação e contraposição.' },
          { id: 'C', texto: 'Contraposição, caducidade e cassação.' },
          { id: 'D', texto: 'Cassação, contraposição e caducidade.' }
        ],
        gabarito: 'A',
        explicacao: '(a) DESCUMPRIMENTO de condição = CASSAÇÃO. (b) DECURSO DE PRAZO = CADUCIDADE. (c) ATO NOVO incompatível que extingue o anterior = CONTRAPOSIÇÃO. A chave é: cassação (comportamento), caducidade (prazo/fato) e contraposição (ato novo). É a distinção mais fina do tema.'
      },
      {
        id: 'D-DA-19-07',
        tipo: 'autoavaliacao',
        subtopico: 'Elementos, atributos e extinção do ato administrativo',
        pergunta: 'Você consegue, sem consultar, explicar os cinco elementos do ato, os quatro atributos, as formas de extinção (anulação, revogação, cassação, caducidade, contraposição) e a convalidação?',
        resposta: 'ELEMENTOS: competência, finalidade, forma, motivo e objeto. ATRIBUTOS: presunção de legitimidade (relativa), imperatividade, autoexecutoriedade (não é de todo ato) e tipicidade. EXTINÇÃO: ANULAÇÃO (ilegal, ex tunc, Administração + Judiciário), REVOGAÇÃO (mérito, ex nunc, só Administração), CASSAÇÃO (descumprimento), CADUCIDADE (prazo/fato), CONTRAPOSIÇÃO (ato novo que extingue o anterior). CONVALIDAÇÃO: vícios sanáveis (competência e forma), com efeito ex tunc, sem prejuízo ao interesse público nem a terceiros. Vícios de finalidade, motivo e objeto, em regra, são insanáveis.'
      }
    ]
  },

  /* ============================================================
     DA-20 — Serviços Públicos
  ============================================================ */
  'DA-20': {
    id: 'D-DA-20',
    moduloId: 'DA-20',
    itens: [
      {
        id: 'D-DA-20-01',
        tipo: 'multipla_escolha',
        subtopico: 'Princípios do serviço público',
        pergunta: 'Sobre os princípios do serviço público, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'A continuidade é o único princípio do serviço público; os demais são princípios da Administração.' },
          { id: 'B', texto: 'São princípios do serviço público, entre outros: generalidade, continuidade, modicidade, regularidade, atualidade, segurança, cortesia e mutabilidade.' },
          { id: 'C', texto: 'O princípio da continuidade é absoluto: o serviço público não pode ser interrompido em nenhuma hipótese.' },
          { id: 'D', texto: 'O princípio da modicidade exige que as tarifas sejam gratuitas em todos os casos.' }
        ],
        gabarito: 'B',
        explicacao: 'São princípios do serviço público: GENERALIDADE (para todos), CONTINUIDADE (sem interrupção, salvo exceções), MODICIDADE (tarifas acessíveis), REGULARIDADE (operação contínua e adequada), ATUALIDADE (modernidade), SEGURANÇA, CORTESIA e MUTABILIDADE (adaptação). A alternativa A reduz indevidamente; C absolutiza a continuidade; D confunde modicidade com gratuidade.'
      },
      {
        id: 'D-DA-20-02',
        tipo: 'multipla_escolha',
        subtopico: 'Concessão x permissão x autorização',
        pergunta: 'Sobre as três formas de delegação de serviço público, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Concessão: ato unilateral, prazo indeterminado; permissão: contrato, prazo determinado; autorização: contrato, sem licitação.' },
          { id: 'B', texto: 'Concessão: contrato administrativo, prazo determinado, licitação obrigatória; permissão: ato unilateral, prazo indeterminado, licitação pela Lei 8.987/95; autorização: ato unilateral, prazo curto, sem licitação.' },
          { id: 'C', texto: 'Concessão, permissão e autorização são sinônimos: todas exigem licitação e contrato.' },
          { id: 'D', texto: 'Autorização exige licitação; permissão não exige.' }
        ],
        gabarito: 'B',
        explicacao: 'CONCESSÃO: contrato, prazo DETERMINADO, licitação obrigatória, pessoa jurídica. PERMISSÃO: ato unilateral, prazo INDETERMINADO, licitação pela Lei 8.987/95, pessoa física ou jurídica. AUTORIZAÇÃO: ato unilateral, prazo CURTO, sem licitação. A alternativa A inverte; C iguala; D inverte os requisitos de licitação.'
      },
      {
        id: 'D-DA-20-03',
        tipo: 'multipla_escolha',
        subtopico: 'Encampação x caducidade x continuidade (nível difícil)',
        pergunta: 'Uma concessionária de transporte coletivo vinha operando regularmente, mas, após grave crise financeira, reduziu a frota em 40% e passou a descumprir os horários previstos, prejudicando a população. Diante disso, o poder concedente decidiu retomar o serviço imediatamente, sem indenização, alegando descumprimento contratual. Sobre a medida e sua relação com os princípios do serviço público, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Trata-se de encampação, que exige lei autorizativa e indenização — a medida é válida apenas com esses requisitos.' },
          { id: 'B', texto: 'Trata-se de caducidade, que dispensa indenização e é justificada pelo descumprimento contratual; a medida também se relaciona com o princípio da continuidade, pois a redução da frota comprometeu a prestação adequada do serviço.' },
          { id: 'C', texto: 'Trata-se de rescisão amigável, que exige acordo entre as partes.' },
          { id: 'D', texto: 'A medida é inválida em qualquer hipótese, porque a concessionária tem direito adquirido à exploração do serviço.' }
        ],
        gabarito: 'B',
        explicacao: 'A CADUCIDADE é a perda da concessão por DESCUMPRIMENTO de obrigações contratuais pela concessionária — não exige indenização e independe de lei autorizativa. A ENCAMPAÇÃO (A) ocorre por INTERESSE PÚBLICO, durante o prazo, com lei autorizativa e indenização. A redução da frota e o descumprimento de horários, além de justificarem a caducidade, também violam o princípio da CONTINUIDADE (o serviço deve ser prestado de forma contínua e adequada). A dificuldade está em distinguir os dois institutos e conectá-los ao princípio aplicável.'
      },
      {
        id: 'D-DA-20-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Uti universi x uti singuli',
        pergunta: 'Serviços uti universi (gerais) são indivisíveis e prestados a toda a coletividade (ex.: iluminação pública); serviços uti singuli (individuais) são divisíveis, com usuários determinados e mensuráveis (ex.: energia elétrica, água).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. UTI UNIVERSI (gerais): indivisíveis, para toda a coletividade (iluminação pública, limpeza urbana) — em regra, custeados por imposto. UTI SINGULI (individuais): divisíveis, mensuráveis, com usuários determinados (energia elétrica, água) — em regra, custeados por tarifa. A distinção é importante para a forma de custeio.'
      },
      {
        id: 'D-DA-20-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Continuidade do serviço público',
        pergunta: 'O princípio da continuidade é absoluto: o serviço público jamais pode ser interrompido, em nenhuma hipótese.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. A continuidade é a regra, mas admite EXCEÇÕES previstas em lei: razões de ordem técnica ou de segurança, inadimplemento do usuário (após aviso prévio) e situações de emergência. A interrupção, nessas hipóteses, é lícita — desde que observados os requisitos legais.'
      },
      {
        id: 'D-DA-20-06',
        tipo: 'situacao',
        subtopico: 'Classificação das formas de delegação',
        pergunta: 'A prefeitura de um município firmou quatro ajustes: (1) contrato de 20 anos com empresa privada para explorar o transporte coletivo, mediante licitação; (2) termo de permissão de uso de quiosque em praça pública, por prazo indeterminado; (3) autorização para um food truck operar em evento de 3 dias; (4) autorização para uma ONG realizar uma feira cultural em praça pública, por 1 fim de semana. Esses ajustes correspondem, respectivamente, a:',
        alternativas: [
          { id: 'A', texto: 'Concessão, permissão, autorização e autorização.' },
          { id: 'B', texto: 'Permissão, concessão, autorização e autorização.' },
          { id: 'C', texto: 'Concessão, autorização, permissão e autorização.' },
          { id: 'D', texto: 'Autorização, concessão, permissão e permissão.' }
        ],
        gabarito: 'A',
        explicacao: '(1) Contrato de 20 anos, com licitação = CONCESSÃO. (2) Termo de permissão de uso de quiosque, prazo indeterminado = PERMISSÃO. (3) Food truck em evento de 3 dias = AUTORIZAÇÃO (prazo curto, sem licitação). (4) Feira cultural em praça pública por 1 fim de semana = AUTORIZAÇÃO. A chave é: contrato/prazo longo (concessão), ato/prazo indeterminado (permissão), ato/prazo curto (autorização).'
      },
      {
        id: 'D-DA-20-07',
        tipo: 'autoavaliacao',
        subtopico: 'Serviços públicos — conceitos fundamentais',
        pergunta: 'Você consegue, sem consultar, diferenciar concessão, permissão e autorização, explicar os princípios do serviço público e distinguir uti universi de uti singuli e encampação de caducidade?',
        resposta: 'CONCESSÃO (contrato, prazo determinado, licitação), PERMISSÃO (ato, prazo indeterminado, licitação pela Lei 8.987/95), AUTORIZAÇÃO (ato, prazo curto, sem licitação). PRINCÍPIOS: generalidade, continuidade, modicidade, regularidade, atualidade, segurança, cortesia, mutabilidade. UTI UNIVERSI (geral, indivisível, imposto) x UTI SINGULI (individual, divisível, tarifa). ENCAMPAÇÃO (interesse público, com lei e indenização) x CADUCIDADE (descumprimento, sem indenização).'
      }
    ]
  },

  /* ============================================================
     DA-21 — Licitações e contratos administrativos
  ============================================================ */
  'DA-21': {
    id: 'D-DA-21',
    moduloId: 'DA-21',
    itens: [
      {
        id: 'D-DA-21-01',
        tipo: 'multipla_escolha',
        subtopico: 'Princípios e marco legal',
        pergunta: 'Sobre a licitação e seu marco legal, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A Lei 8.666/93 continua sendo o marco geral das licitações, pois a Lei 14.133/2021 não a substituiu.' },
          { id: 'B', texto: 'A Lei 14.133/2021 é o novo marco geral das licitações e contratos administrativos, tendo substituído a Lei 8.666/93 (e também a Lei 10.520/02 e a Lei 12.462/11), e prevê, entre outros, os princípios da legalidade, impessoalidade, moralidade, publicidade, eficiência, interesse público, probidade, igualdade, planejamento, transparência, eficácia, segregação de funções, motivação, vinculação ao edital, julgamento objetivo, segurança jurídica, razoabilidade, competitividade, proporcionalidade, celeridade, economicidade e desenvolvimento nacional sustentável.' },
          { id: 'C', texto: 'A Lei 14.133/2021 revogou todos os princípios da licitação, que agora são apenas discricionários.' },
          { id: 'D', texto: 'A licitação tem como único princípio a economicidade.' }
        ],
        gabarito: 'B',
        explicacao: 'A Lei 14.133/2021 é o novo marco geral, substituindo a Lei 8.666/93 (e as Leis 10.520/02 e 12.462/11). Seu art. 5º traz um rol amplo de princípios — não apenas a economicidade. A alternativa A está desatualizada; C é absurda; D reduz indevidamente o rol. Este é um dos temas mais cobrados do módulo.'
      },
      {
        id: 'D-DA-21-02',
        tipo: 'multipla_escolha',
        subtopico: 'Modalidades de licitação',
        pergunta: 'Sobre as modalidades de licitação previstas na Lei 14.133/2021, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'São modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo.' },
          { id: 'B', texto: 'São modalidades: convite, tomada de preços, concorrência, concurso e leilão.' },
          { id: 'C', texto: 'Pregão é modalidade restrita a obras e serviços de engenharia.' },
          { id: 'D', texto: 'A modalidade é escolhida livremente pelo gestor, independentemente do objeto.' }
        ],
        gabarito: 'A',
        explicacao: 'A Lei 14.133/2021 prevê cinco modalidades: PREGÃO (bens e serviços comuns), CONCORRÊNCIA (obras, serviços especiais e bens não comuns), CONCURSO (trabalho técnico, científico ou artístico), LEILÃO (alienação de bens) e DIÁLOGO COMPETITIVO (inovação ou complexidade técnica). A alternativa B traz modalidades da lei antiga (convite, tomada de preços); C restringe indevidamente; D ignora que a modalidade depende do OBJETO.'
      },
      {
        id: 'D-DA-21-03',
        tipo: 'multipla_escolha',
        subtopico: 'Dispensa x inexigibilidade (nível difícil)',
        pergunta: 'Uma prefeitura precisa contratar: (a) compra de material de escritório no valor de R$ 40.000,00, dentro do limite legal de dispensa por valor; (b) contratação de um artista consagrado para show de aniversário da cidade; (c) contratação de serviço de manutenção de elevador, com fornecedor exclusivo na região; (d) contratação emergencial para conter dano causado por enchente. Sobre a contratação, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Todas as situações configuram inexigibilidade, pois não há como competir.' },
          { id: 'B', texto: '(a) e (d) são hipóteses de DISPENSA (competição possível, mas a lei dispensa — por valor e por emergência); (b) e (c) são hipóteses de INEXIGIBILIDADE (competição inviável — artista consagrado e fornecedor exclusivo).' },
          { id: 'C', texto: '(a), (b), (c) e (d) são hipóteses de dispensa, pois a Administração pode escolher.' },
          { id: 'D', texto: '(a) é inexigibilidade; (b) é dispensa; (c) é dispensa; (d) é inexigibilidade.' }
        ],
        gabarito: 'B',
        explicacao: 'DISPENSA (art. 75): a competição é POSSÍVEL, mas a lei dispensa — casos de (a) valor e (d) emergência. INEXIGIBILIDADE (art. 74): a competição é INVIÁVEL — casos de (b) artista consagrado e (c) fornecedor exclusivo. A chave é: dispensa (competição possível) x inexigibilidade (competição inviável). Esta é a pegadinha mais clássica do módulo — e a que a banca mais cobra em questões difíceis.'
      },
      {
        id: 'D-DA-21-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Modalidade x critério de julgamento',
        pergunta: 'Modalidade de licitação e critério de julgamento são sinônimos: ambos se referem à forma de escolha do vencedor.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. MODALIDADE é o "tipo" de licitação (pregão, concorrência, concurso, leilão, diálogo competitivo). CRITÉRIO DE JULGAMENTO é a "régua" usada para escolher o vencedor (menor preço, maior desconto, melhor técnica, técnica e preço, maior lance, maior retorno econômico). A mesma modalidade pode usar critérios diferentes, conforme a lei.'
      },
      {
        id: 'D-DA-21-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Cláusulas exorbitantes',
        pergunta: 'As cláusulas exorbitantes são prerrogativas da Administração que não existem nos contratos privados — como alteração unilateral, rescisão unilateral, fiscalização, aplicação de sanções e ocupação provisória.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. As CLÁUSULAS EXORBITANTES são prerrogativas da Administração que decorrem da supremacia do interesse público — e que não existem nos contratos privados. Exemplos: alteração unilateral do contrato, rescisão unilateral, fiscalização, aplicação de sanções e ocupação provisória. São a marca do regime público.'
      },
      {
        id: 'D-DA-21-06',
        tipo: 'situacao',
        subtopico: 'Sanções administrativas',
        pergunta: 'Uma empresa vencedora de licitação descumpriu parcialmente o contrato, atrasando a entrega de parte dos bens. Após regular processo administrativo, com contraditório e ampla defesa, a Administração decidiu aplicar sanção. Considerando as sanções previstas na Lei 14.133/2021, é correto afirmar que a sanção aplicável pode ser:',
        alternativas: [
          { id: 'A', texto: 'Apenas advertência, pois o descumprimento foi parcial.' },
          { id: 'B', texto: 'Advertência, multa, impedimento de licitar e contratar (até 3 anos) ou declaração de inidoneidade (até 6 anos), conforme a gravidade da infração e o devido processo legal.' },
          { id: 'C', texto: 'Apenas multa, pois as demais sanções exigem decisão judicial.' },
          { id: 'D', texto: 'Apenas declaração de inidoneidade, pois a infração é grave.' }
        ],
        gabarito: 'B',
        explicacao: 'As sanções da Lei 14.133/2021 incluem: ADVERTÊNCIA, MULTA, IMPEDIMENTO de licitar e contratar (até 3 anos) e DECLARAÇÃO DE INIDONEIDADE (até 6 anos) — aplicáveis conforme a gravidade da infração e o devido processo legal. A alternativa A restringe; C ignora o rol; D também restringe. A chave é conhecer o rol de sanções e a gradação.'
      },
      {
        id: 'D-DA-21-07',
        tipo: 'autoavaliacao',
        subtopico: 'Licitações e contratos — conceitos fundamentais',
        pergunta: 'Você consegue, sem consultar, diferenciar dispensa de inexigibilidade, modalidade de critério de julgamento, e explicar as cláusulas exorbitantes e as sanções da Lei 14.133/2021?',
        resposta: 'DISPENSA (art. 75): competição possível, mas a lei dispensa (valor, emergência). INEXIGIBILIDADE (art. 74): competição inviável (fornecedor exclusivo, artista consagrado). MODALIDADE: tipo (pregão, concorrência, concurso, leilão, diálogo competitivo). CRITÉRIO: régua (menor preço, maior desconto, melhor técnica, técnica e preço, maior lance, maior retorno econômico). CLÁUSULAS EXORBITANTES: prerrogativas da Administração (alteração e rescisão unilaterais, fiscalização, sanções, ocupação provisória). SANÇÕES: advertência, multa, impedimento (até 3 anos), inidoneidade (até 6 anos).'
      }
    ]
  },

  /* ============================================================
     DA-23 — Controle da Administração Pública
  ============================================================ */
  'DA-23': {
    id: 'D-DA-23',
    moduloId: 'DA-23',
    itens: [
      {
        id: 'D-DA-23-01',
        tipo: 'multipla_escolha',
        subtopico: 'Controle interno x externo',
        pergunta: 'Sobre o controle interno e o controle externo da Administração Pública, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Controle interno é exercido pelos Tribunais de Contas; controle externo, pelas Controladorias.' },
          { id: 'B', texto: 'Controle interno é exercido dentro de cada Poder (Controladorias, sistemas de controle interno — art. 74, CF); controle externo é exercido pelos Tribunais de Contas (art. 71, CF), auxiliares do Legislativo.' },
          { id: 'C', texto: 'Controle interno e externo são sinônimos: ambos são exercidos pelo Legislativo.' },
          { id: 'D', texto: 'Controle externo é exercido apenas pelo Judiciário.' }
        ],
        gabarito: 'B',
        explicacao: 'CONTROLE INTERNO: exercido dentro de cada Poder (art. 74, CF) — Controladorias, sistemas de controle interno. CONTROLE EXTERNO: exercido pelos Tribunais de Contas (art. 71, CF), auxiliares do Legislativo. A alternativa A inverte; C iguala; D restringe indevidamente o controle externo ao Judiciário.'
      },
      {
        id: 'D-DA-23-02',
        tipo: 'multipla_escolha',
        subtopico: 'Controle de legalidade x controle de mérito',
        pergunta: 'Sobre o controle de legalidade e o controle de mérito, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'O Judiciário pode rever tanto a legalidade quanto o mérito dos atos administrativos, substituindo a decisão do administrador.' },
          { id: 'B', texto: 'O controle de legalidade pode ser exercido pela Administração E pelo Judiciário; o controle de mérito (conveniência e oportunidade) é exercido APENAS pela Administração.' },
          { id: 'C', texto: 'O controle de mérito pode ser exercido pelo Legislativo, pelo Judiciário e pela Administração.' },
          { id: 'D', texto: 'Controle de legalidade e de mérito são sinônimos: ambos se referem à conformidade com a lei.' }
        ],
        gabarito: 'B',
        explicacao: 'O controle de LEGALIDADE pode ser exercido pela Administração (autotutela) E pelo Judiciário (controle judicial). O controle de MÉRITO (conveniência e oportunidade) é exercido APENAS pela Administração — o Judiciário não substitui o mérito administrativo. A alternativa A é a pegadinha mais comum; C e D confundem os institutos.'
      },
      {
        id: 'D-DA-23-03',
        tipo: 'multipla_escolha',
        subtopico: 'Competências do TCU x Congresso (nível difícil)',
        pergunta: 'Sobre o controle externo exercido pelos Tribunais de Contas e pelo Congresso Nacional, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'O TCU julga as contas do Presidente da República, aplicando-lhe as sanções cabíveis.' },
          { id: 'B', texto: 'O TCU APRECIA as contas do Presidente da República, emitindo parecer prévio; quem JULGA as contas é o Congresso Nacional (art. 49, IX, CF). O TCU julga as contas dos demais administradores públicos.' },
          { id: 'C', texto: 'O Congresso Nacional julga as contas de todos os administradores públicos, e o TCU apenas opina.' },
          { id: 'D', texto: 'O TCU não tem competência para aplicar sanções; sua função é apenas opinativa.' }
        ],
        gabarito: 'B',
        explicacao: 'O TCU APRECIA as contas do Presidente da República e emite parecer prévio (art. 71, I); quem JULGA é o Congresso Nacional (art. 49, IX). O TCU JULGA as contas dos DEMAIS administradores públicos (art. 71, II). A alternativa A confunde apreciação com julgamento; C inverte; D ignora a competência sancionatória do TCU (art. 71, VIII e ss.). Esta é a pegadinha clássica do módulo.'
      },
      {
        id: 'D-DA-23-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Autotutela x tutela',
        pergunta: 'Autotutela e tutela são sinônimos: ambas se referem ao poder da Administração de rever seus próprios atos.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. AUTOTUTELA: a Administração revê SEUS PRÓPRIOS atos (anula ilegais, revoga inconvenientes — Súmulas 346 e 473 do STF). TUTELA (controle finalístico): supervisão que a Administração DIRETA exerce sobre a INDIRETA. São institutos distintos — a confusão é pegadinha recorrente.'
      },
      {
        id: 'D-DA-23-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Prazo decadencial de anulação',
        pergunta: 'O prazo decadencial para a Administração anular seus atos é de 5 anos, salvo comprovada má-fé (art. 54 da Lei 9.784/99).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. O art. 54 da Lei 9.784/99 fixa o prazo decadencial de 5 anos para a Administração anular seus atos, salvo comprovada má-fé. A Súmula 473 do STF e a jurisprudência consolidada reconhecem esse prazo. O instituto concretiza a segurança jurídica.'
      },
      {
        id: 'D-DA-23-06',
        tipo: 'situacao',
        subtopico: 'Classificação do controle em caso concreto',
        pergunta: 'Um cidadão protocola representação na ouvidoria de um ministério, alegando ilegalidade em contrato administrativo. O ministério anula o contrato, com base em parecer da consultoria jurídica. Paralelamente, o TCU, ao apreciar as contas anuais do órgão, aponta irregularidades no mesmo contrato. O Judiciário, por sua vez, ao julgar ação popular, mantém a nulidade do contrato. Sobre essas atuações, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A atuação do ministério é controle externo; a do TCU é interno; a do Judiciário é apenas opinativa.' },
          { id: 'B', texto: 'A atuação do ministério é CONTROLE ADMINISTRATIVO (autotutela, por provocação); a do TCU é CONTROLE EXTERNO (controle legislativo, com apoio dos Tribunais de Contas); a do Judiciário é CONTROLE JUDICIAL (de legalidade).' },
          { id: 'C', texto: 'Todas as atuações são controle interno, pois se referem ao mesmo contrato.' },
          { id: 'D', texto: 'Somente a atuação do Judiciário é válida; as demais são meramente consultivas.' }
        ],
        gabarito: 'B',
        explicacao: 'A anulação pelo ministério é CONTROLE ADMINISTRATIVO (autotutela, por provocação — Súmula 473 do STF). A atuação do TCU é CONTROLE EXTERNO (o TCU auxilia o Legislativo no controle externo). A atuação do Judiciário é CONTROLE JUDICIAL — de legalidade, sem rever mérito. A chave é identificar o órgão e a natureza do controle.'
      },
      {
        id: 'D-DA-23-07',
        tipo: 'autoavaliacao',
        subtopico: 'Controle da Administração Pública',
        pergunta: 'Você consegue, sem consultar, diferenciar controle interno de externo, controle de legalidade de mérito, autotutela de tutela, e explicar as competências do TCU e do Congresso?',
        resposta: 'INTERNO (art. 74 — Controladorias) x EXTERNO (art. 71 — Tribunais de Contas). LEGALIDADE (Administração + Judiciário) x MÉRITO (só Administração). AUTOTUTELA (próprios atos, Súmulas 346 e 473) x TUTELA (supervisão da indireta). TCU: APRECIA contas do Presidente e emite parecer prévio; JULGA contas dos demais administradores; aplica sanções. Congresso: JULGA as contas do Presidente (art. 49, IX). Prazo decadencial para anular: 5 anos, salvo má-fé (art. 54 da Lei 9.784/99).'
      }
    ]
  },

  /* ============================================================
     DA-25 — Processo Administrativo
  ============================================================ */
  'DA-25': {
    id: 'D-DA-25',
    moduloId: 'DA-25',
    itens: [
      {
        id: 'D-DA-25-01',
        tipo: 'multipla_escolha',
        subtopico: 'Princípios e direitos do administrado',
        pergunta: 'Sobre os princípios e direitos do administrado no processo administrativo (Lei 9.784/1999), é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'O processo administrativo rege-se apenas pelo princípio da legalidade; os demais são aplicáveis apenas ao processo judicial.' },
          { id: 'B', texto: 'A Lei 9.784/1999 prevê princípios como legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência; e assegura ao administrado, entre outros, o direito de ser tratado com respeito, conhecer as decisões, ter vista dos autos, formular alegações, produzir provas e recorrer.' },
          { id: 'C', texto: 'O administrado não tem direito de vista dos autos, por sigilo administrativo.' },
          { id: 'D', texto: 'A ampla defesa e o contraditório não se aplicam ao processo administrativo.' }
        ],
        gabarito: 'B',
        explicacao: 'A Lei 9.784/1999 (art. 2º) prevê expressamente os princípios: legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência. E, no art. 3º, assegura ao administrado, entre outros, o direito de ser tratado com respeito, conhecer as decisões, ter vista dos autos, formular alegações, produzir provas e recorrer. As alternativas A, C e D contrariam o texto legal.'
      },
      {
        id: 'D-DA-25-02',
        tipo: 'multipla_escolha',
        subtopico: 'Fases do processo administrativo',
        pergunta: 'Sobre as fases do processo administrativo (Lei 9.784/1999), é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'As fases são: instauração, instrução, defesa, relatório e decisão — sem possibilidade de recurso.' },
          { id: 'B', texto: 'As fases são: instauração (de ofício ou a pedido), instrução (produção de provas e manifestações), defesa, relatório e decisão; após a decisão, cabem recursos administrativos (pedido de reconsideração e recurso hierárquico).' },
          { id: 'C', texto: 'O processo administrativo não tem fase de defesa: a Administração decide diretamente.' },
          { id: 'D', texto: 'O relatório é elaborado pelo interessado, não pela Administração.' }
        ],
        gabarito: 'B',
        explicacao: 'As fases do processo administrativo são: INSTAURAÇÃO (de ofício ou a pedido), INSTRUÇÃO (produção de provas e manifestações), DEFESA, RELATÓRIO (elaborado pela Administração) e DECISÃO. Após a decisão, cabem recursos administrativos — pedido de reconsideração (à mesma autoridade) e recurso hierárquico (à autoridade superior). A alternativa A nega a possibilidade de recurso; C nega a fase de defesa; D inverte a autoria do relatório.'
      },
      {
        id: 'D-DA-25-03',
        tipo: 'multipla_escolha',
        subtopico: 'Impedimento x suspeição (nível difícil)',
        pergunta: 'Um servidor foi designado para analisar pedido de licença formulado por sua esposa. Paralelamente, outro servidor foi designado para analisar pedido formulado por um amigo íntimo. Sobre a situação, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Ambos os casos configuram suspeição, pois envolvem relações pessoais.' },
          { id: 'B', texto: 'O primeiro caso configura IMPEDIMENTO (vínculo objetivo — cônjuge); o segundo configura SUSPEIÇÃO (vínculo subjetivo — amizade íntima). Em ambos, o servidor deve declarar-se impedido/suspeito e ser afastado do processo.' },
          { id: 'C', texto: 'Ambos os casos configuram impedimento, pois o servidor deve ser afastado em qualquer hipótese de relação pessoal.' },
          { id: 'D', texto: 'Não há impedimento nem suspeição: o servidor pode analisar o pedido normalmente.' }
        ],
        gabarito: 'B',
        explicacao: 'IMPEDIMENTO (art. 18 da Lei 9.784/99): vínculo OBJETIVO — interesse direto, cônjuge, parente até 3º grau, litígio. Leva à exclusão obrigatória. SUSPEIÇÃO (art. 20): vínculo SUBJETIVO — amizade íntima, inimizade. Leva à exclusão por declaração. Cônjuge = impedimento; amigo íntimo = suspeição. Em ambos, o servidor deve declarar-se e ser afastado. A chave é distinguir objetivo x subjetivo — pegadinha recorrente.'
      },
      {
        id: 'D-DA-25-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Competência administrativa',
        pergunta: 'A competência administrativa é irrenunciável, podendo ser delegada apenas se não for exclusiva, e desde que haja previsão legal.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. A competência administrativa é IRRENUNCIÁVEL (art. 11 da Lei 9.784/99) e só pode ser delegada quando não for exclusiva — e desde que haja previsão legal. Não se admite renúncia nem delegação de competência exclusiva.'
      },
      {
        id: 'D-DA-25-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Processo administrativo x ciclo administrativo',
        pergunta: 'Processo administrativo (Lei 9.784/1999) e ciclo administrativo (PODC) são sinônimos: ambos se referem ao mesmo conjunto de funções administrativas.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. PROCESSO ADMINISTRATIVO (Lei 9.784/1999) é o rito jurídico de decisão da Administração, com fases, prazos, contraditório e ampla defesa. CICLO ADMINISTRATIVO (PODC) é o conjunto de funções do gestor — planejamento, organização, direção e controle. São coisas DIFERENTES, apesar do nome parecido. É uma das pegadinhas mais recorrentes do módulo.'
      },
      {
        id: 'D-DA-25-06',
        tipo: 'situacao',
        subtopico: 'Aplicação da Lei 9.784/99',
        pergunta: 'Um servidor é acusado de falta funcional. A Administração instaura processo administrativo disciplinar, assegurando ao servidor vista dos autos, produção de provas, manifestação e recurso. Ao final, a autoridade competente decide pela aplicação de suspensão, com decisão motivada. Sobre o caso, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A Administração agiu corretamente: observou os princípios do contraditório, da ampla defesa, da motivação e da legalidade, e as fases do processo administrativo.' },
          { id: 'B', texto: 'A Administração agiu incorretamente: o servidor não tem direito de vista dos autos nem de produção de provas.' },
          { id: 'C', texto: 'A Administração agiu incorretamente: a decisão não precisa ser motivada, bastando a aplicação da sanção.' },
          { id: 'D', texto: 'A Administração agiu corretamente apenas porque o servidor é estatutário, o que dispensa o contraditório.' }
        ],
        gabarito: 'A',
        explicacao: 'A Administração observou o devido processo legal administrativo: garantiu vista dos autos, produção de provas, contraditório e ampla defesa; proferiu decisão motivada (art. 50 da Lei 9.784/99); e aplicou sanção prevista em lei (legalidade). A alternativa B nega direitos expressos; C dispensa a motivação; D dispensa o contraditório — em desacordo com o art. 5º, LV, da CF e com a Lei 9.784/99.'
      },
      {
        id: 'D-DA-25-07',
        tipo: 'autoavaliacao',
        subtopico: 'Processo administrativo — conceitos fundamentais',
        pergunta: 'Você consegue, sem consultar, explicar as fases do processo administrativo, a diferença entre impedimento e suspeição, os recursos cabíveis e a distinção entre processo administrativo (Lei 9.784/99) e ciclo PODC?',
        resposta: 'FASES: instauração → instrução → defesa → relatório → decisão. IMPEDIMENTO (vínculo objetivo — cônjuge, parente até 3º grau, interesse direto) x SUSPEIÇÃO (vínculo subjetivo — amizade íntima, inimizade). RECURSOS: pedido de reconsideração (mesma autoridade) x recurso hierárquico (autoridade superior). PROCESSO ADMINISTRATIVO (Lei 9.784/99) x CICLO PODC: rito jurídico de decisão x funções do gestor. PRAZOS: 30 dias para decidir (prorrogável); 5 anos para anular, salvo má-fé.'
      }
    ]
  },

  /* ============================================================
     REV-28 — Revisão integrada e domínio por questões
  ============================================================ */
  'REV-28': {
    id: 'D-REV-28',
    moduloId: 'REV-28',
    itens: [
      {
        id: 'D-REV-28-01',
        tipo: 'multipla_escolha',
        subtopico: 'Revisão ativa x revisão passiva',
        pergunta: 'Sobre as estratégias de revisão, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Revisão passiva (reler, grifar, assistir aula) é mais eficiente que a revisão ativa, pois reforça a memória visual.' },
          { id: 'B', texto: 'Revisão ativa (fazer questões, resolver flashcards, explicar em voz alta, ensinar) tem maior retenção que a revisão passiva — porque exige recuperação ativa da informação, e não apenas reconhecimento.' },
          { id: 'C', texto: 'Revisão ativa e passiva têm o mesmo efeito sobre a aprendizagem.' },
          { id: 'D', texto: 'A revisão só é eficaz se for feita uma única vez, imediatamente após o estudo.' }
        ],
        gabarito: 'B',
        explicacao: 'A REVISÃO ATIVA é mais eficiente que a passiva. Ao resolver questões, explicar em voz alta ou ensinar, o estudante realiza RECUPERAÇÃO ATIVA (active recall), que fortalece a memória de longo prazo. A revisão passiva (reler, grifar) tende a gerar apenas reconhecimento — o que não se sustenta em prova. A alternativa A inverte; C iguala; D reduz a revisão a um único momento.'
      },
      {
        id: 'D-REV-28-02',
        tipo: 'multipla_escolha',
        subtopico: 'Banco de erros e classificação',
        pergunta: 'Sobre o banco de erros e a classificação dos erros, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'O banco de erros é útil apenas para registrar a quantidade de erros, sem necessidade de classificação.' },
          { id: 'B', texto: 'O banco de erros registra as questões erradas e CLASSIFICA a causa (falta de conhecimento, confusão entre conceitos, interpretação, pegadinha da banca, esquecimento, erro por pressa); cada tipo exige uma AÇÃO diferente, o que permite direcionar o estudo.' },
          { id: 'C', texto: 'Classificar os erros é desnecessário: todos os erros são falta de conhecimento.' },
          { id: 'D', texto: 'O banco de erros substitui a resolução de novas questões.' }
        ],
        gabarito: 'B',
        explicacao: 'O BANCO DE ERROS é o coração do método: registra as questões erradas e CLASSIFICA a causa. Cada tipo exige ação diferente: falta de conhecimento (estudar de novo), confusão (comparar conceitos), interpretação (treinar leitura), pegadinha (conhecer a banca), esquecimento (revisão espaçada), pressa (gerenciar tempo). A alternativa A reduz o banco a um contador; C simplifica demais; D nega a necessidade de praticar novas questões.'
      },
      {
        id: 'D-REV-28-03',
        tipo: 'multipla_escolha',
        subtopico: 'Identificação do tipo de erro (nível difícil)',
        pergunta: 'Uma estudante resolveu 20 questões de Atos Administrativos. Ao corrigir, identificou: (i) 5 erros por confundir anulação com revogação; (ii) 3 erros por não saber o conceito de "contraposição"; (iii) 2 erros por não perceber que o enunciado pediu a alternativa INCORRETA; (iv) 1 erro por responder rápido demais, sem ler o enunciado até o fim. Sobre a classificação e a ação correspondente, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: '(i) falta de conhecimento; (ii) confusão; (iii) pressa; (iv) interpretação — e a ação é a mesma para todos.' },
          { id: 'B', texto: '(i) confusão entre conceitos (ação: comparar anulação x revogação); (ii) falta de conhecimento (ação: estudar o conceito de contraposição); (iii) interpretação (ação: treinar leitura de enunciados); (iv) pressa (ação: gerenciar o tempo) — cada tipo exige ação diferente.' },
          { id: 'C', texto: '(i) pressa; (ii) interpretação; (iii) falta de conhecimento; (iv) confusão — e a ação é sempre estudar a aula inteira.' },
          { id: 'D', texto: 'Todos os erros são de falta de conhecimento, pois a estudante não dominava a matéria.' }
        ],
        gabarito: 'B',
        explicacao: '(i) Confundir anulação com revogação é CONFUSÃO ENTRE CONCEITOS — a ação é COMPARAR os dois institutos. (ii) Não saber o que é contraposição é FALTA DE CONHECIMENTO — a ação é ESTUDAR o conceito. (iii) Não perceber que o enunciado pediu a INCORRETA é INTERPRETAÇÃO — a ação é TREINAR a leitura atenta. (iv) Responder rápido demais é PRESSA — a ação é GERENCIAR o tempo. Cada tipo exige AÇÃO DIFERENTE. A alternativa D simplifica demais e ignora a classificação — que é a chave do método. Esta é a questão mais difícil do módulo, porque exige aplicar a classificação a um caso concreto.'
      },
      {
        id: 'D-REV-28-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Revisão espaçada',
        pergunta: 'A revisão espaçada programa retornos em intervalos crescentes (1, 3, 7, 15, 30, 60 dias) — o que combate o esquecimento no ponto certo, tornando o estudo mais eficiente.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. A REVISÃO ESPAÇADA (spaced repetition) programa retornos em intervalos crescentes (1, 3, 7, 15, 30, 60 dias), o que combate o esquecimento no ponto em que ele ocorreria. É muito mais eficiente que a revisão contínua sem programação — porque otimiza o tempo e consolida a memória de longo prazo.'
      },
      {
        id: 'D-REV-28-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Classificação dos erros',
        pergunta: 'Todos os erros em questões de concurso têm a mesma causa (falta de conhecimento) e, por isso, a mesma ação corretiva.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Há SEIS tipos de erro — falta de conhecimento, confusão entre conceitos, interpretação, pegadinha da banca, esquecimento e pressa — e cada um exige AÇÃO DIFERENTE. Tratar todos como "falta de conhecimento" leva a estudar o que não se precisa, sem resolver o problema real. A classificação é o que direciona o estudo.'
      },
      {
        id: 'D-REV-28-06',
        tipo: 'situacao',
        subtopico: 'Diagnóstico de método de estudo',
        pergunta: 'Um estudante se prepara para concursos há 6 meses. Ele estuda 4 horas por dia, mas percebe que a nota não evolui. Ao analisar sua rotina, verifica: (1) relê as aulas, mas não faz questões; (2) não revisa periodicamente; (3) não registra os erros; (4) não faz simulados. O diagnóstico mais adequado e a recomendação correspondente são:',
        alternativas: [
          { id: 'A', texto: 'O problema é de carga horária; a recomendação é estudar 8 horas por dia.' },
          { id: 'B', texto: 'O problema é de MÉTODO: ele estuda por revisão passiva, sem prática ativa, sem revisão espaçada, sem banco de erros e sem simulados. A recomendação é adotar a revisão integrada: ciclos (teoria → questões → análise de erros → revisão → novas questões), revisão espaçada e simulados periódicos.' },
          { id: 'C', texto: 'O problema é de conteúdo; a recomendação é estudar mais matérias.' },
          { id: 'D', texto: 'O problema é de motivação; a recomendação é trocar de método sem mudar a rotina.' }
        ],
        gabarito: 'B',
        explicacao: 'O diagnóstico correto é de MÉTODO: o estudante estuda por revisão passiva (reler), sem prática ativa (questões), sem revisão espaçada, sem banco de erros e sem simulados. A recomendação é adotar a REVISÃO INTEGRADA: ciclos curtos (teoria → questões → análise de erros → revisão → novas questões), revisão espaçada (1, 3, 7, 15, 30, 60 dias), banco de erros e simulados periódicos. A alternativa A foca em quantidade, não em método; C, em conteúdo; D, em motivação — nenhuma resolve a causa.'
      },
      {
        id: 'D-REV-28-07',
        tipo: 'autoavaliacao',
        subtopico: 'Revisão integrada — conceitos fundamentais',
        pergunta: 'Você consegue, sem consultar, explicar o que é revisão ativa, banco de erros, classificação de erros, revisão espaçada e a diferença entre ciclo e cronograma?',
        resposta: 'REVISÃO ATIVA: exige recuperação da informação (questões, flashcards, ensinar) — mais eficiente que a passiva (reler). BANCO DE ERROS: registro estruturado das questões erradas. CLASSIFICAÇÃO: seis tipos (falta de conhecimento, confusão, interpretação, pegadinha, esquecimento, pressa) — cada um exige AÇÃO diferente. REVISÃO ESPAÇADA: intervalos crescentes (1, 3, 7, 15, 30, 60 dias) — combate o esquecimento no ponto certo. CICLO x CRONOGRAMA: ciclo é flexível (teoria → questões → revisão), cronograma é rígido (datas fixas). A revisão integrada combina todos esses elementos.'
      }
    ]
  }   
};
