/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade ALTA
   Reconstrução v2.0 — padrão pedagógico unificado

   Estrutura por item:
   - explicacao (string)         → motor atual lê e exibe
   - explicacaoDetalhada (obj)   → motor Etapa 5 lerá

   Composição por módulo:
   3 MC + 2 V/F + 1 situação + 1 autoavaliação = 7 itens.

   Bloco 1: ADM-01, ADM-02
   ============================================================ */

window.DIAGNOSTICS_ALTA = {

  /* ============================================================
     ADM-01 — Fundamentos de Administração
  ============================================================ */
  'ADM-01': {
    id: 'D-ADM-01',
    moduloId: 'ADM-01',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-01-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Funções administrativas (PODC)',
        pergunta: 'Sobre as quatro funções administrativas que compõem o ciclo PODC, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'O planejamento verifica, ao final do período, se os objetivos foram atingidos, corrigindo os desvios identificados.' },
          { id: 'B', texto: 'A organização distribui tarefas, recursos e autoridade entre os membros da equipe e setores da instituição.' },
          { id: 'C', texto: 'A direção orienta, motiva e conduz as pessoas na execução do que foi planejado e organizado.' },
          { id: 'D', texto: 'O controle compara resultados com padrões previamente estabelecidos e adota ações corretivas quando necessário.' },
          { id: 'E', texto: 'O PODC é um instrumento da teoria geral da Administração, aplicável a organizações públicas e privadas.' }
        ],
        gabarito: 'A',
        explicacao: 'A alternativa A é a INCORRETA. Verificar resultados ao final do período é função do CONTROLE, não do planejamento. Planejamento define metas e padrões; controle compara o desempenho real com esses padrões e corrige desvios.',
        explicacaoDetalhada: {
          correta: 'A alternativa A está INCORRETA e, por isso, é a resposta. Verificar ao final do período se os objetivos foram atingidos e corrigir desvios é função do CONTROLE, não do planejamento. O planejamento define objetivos, metas e padrões; o controle é quem os compara com o desempenho real.',
          incorretas: {
            B: 'A alternativa está correta e não deve ser marcada. A organização é, de fato, a função que estrutura recursos, distribui tarefas e define autoridade. Seria INCORRETA se atribuísse à organização a liderança da equipe — isso pertence à direção.',
            C: 'A alternativa está correta e não deve ser marcada. A direção lidera, motiva e orienta as pessoas. Seria INCORRETA se dissesse que a direção define metas ou distribui tarefas — essas são funções, respectivamente, do planejamento e da organização.',
            D: 'A alternativa está correta e não deve ser marcada. O controle compara resultados com padrões e adota ações corretivas. Seria INCORRETA se dissesse que o controle cria os padrões — os padrões nascem do planejamento.',
            E: 'A alternativa está correta e não deve ser marcada. O PODC aplica-se a qualquer organização, com adaptações no setor público (LIMPE, interesse público). Seria INCORRETA se afirmasse que o PODC é exclusivo do setor privado.'
          },
          conceitoCobrado: 'Atribuições específicas de cada função administrativa no ciclo PODC',
          pegadinha: 'Bancas costumam trocar as atribuições entre planejamento e controle (a verificação final é do controle) e entre organização e direção (a liderança é da direção). Fixar: planejamento (define) → organização (estrutura) → direção (lidera) → controle (compara e corrige).',
          comoApareceEmConcurso: 'O formato "EXCETO/INCORRETA" com atribuições trocadas é clássico em provas de nível médio. A confusão mais recorrente é atribuir ao planejamento a verificação final (que é do controle).',
          exemploInedito: {
            contexto: 'Um gestor afirma em reunião: "Já que planejamos tudo em janeiro, não precisamos nos preocupar em medir nada em dezembro — o planejamento já garantiu o resultado".',
            aplicacao: 'O gestor confunde planejamento com controle. Planejar define o "onde queremos chegar" e os padrões de sucesso; sem a medição posterior (controle), não há como saber se os padrões foram atingidos. As duas funções são complementares, não substitutas.',
            desafio: 'Que consequência prática, no setor público, tem um gestor que planeja mas não controla? Relacione com a prestação de contas aos órgãos de controle externo.'
          }
        },
        tags: ['PODC', 'funções administrativas']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-01-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Ciclo PODC — natureza interdependente',
        pergunta: 'O PODC é um ciclo contínuo e interdependente: o controle realimenta novo planejamento, reiniciando o processo. Não se trata de uma sequência linear que termina no controle.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. O PODC é cíclico: desvios identificados no controle alimentam novo planejamento. Não há "fim" no controle — ele é o gatilho do próximo ciclo.',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. O PODC é cíclico: os desvios identificados no controle alimentam novo planejamento, e as funções podem ocorrer simultaneamente em diferentes níveis organizacionais. Não há "fim" no controle — ele é o gatilho do próximo ciclo.',
          incorretas: {
            F: 'A afirmação não é falsa. O caráter cíclico é a essência do PODC. Tratá-lo como sequência linear que "termina no controle" é visão ultrapassada, que desconsidera a realimentação (feedback) e a simultaneidade das funções nos diferentes níveis hierárquicos.'
          },
          conceitoCobrado: 'Natureza cíclica e interdependente do PODC',
          pegadinha: 'A visão linear do PODC ("planeja, organiza, dirige, controla e acabou") é intuitiva e enganosa. A palavra-chave é "realimentação": o controle gera informação para novo planejamento.',
          comoApareceEmConcurso: 'Bancas usam essa distinção para separar quem decorou a sequência de quem entendeu o ciclo. A afirmação "o PODC termina no controle" é recorrente em itens de C/E.',
          exemploInedito: {
            contexto: 'Uma escola pública define, em 2024, a meta de elevar o IDEB em 10%. Em 2025, ao verificar os resultados (controle), identifica que apenas 5% foi alcançado e decide, para 2026, reformular a formação de professores (novo planejamento).',
            aplicacao: 'O controle de 2025 gerou informação que alimentou o planejamento de 2026. Não houve "fim" — houve realimentação. Se o PODC fosse linear, a escola simplesmente "encerraria" o ciclo em 2025 sem aprender com o resultado.',
            desafio: 'Um órgão que faz controle mas não usa os resultados para replanejar está aplicando o PODC de que forma? Que consequência isso tem para a melhoria contínua?'
          }
        },
        tags: ['PODC', 'ciclo']
      },

      /* ---------- Item 3 — Formato 2 (I, II, III) — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-01-03',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 2,
        subtopico: 'Conceito de Administração e de organização',
        pergunta: 'Sobre o conceito de Administração e de organização, analise as afirmações a seguir:\n\nI. A Administração é exclusiva de empresas privadas, não se aplicando a órgãos públicos, pois estes seguem apenas a lei.\nII. Organização é um sistema social que combina recursos e pessoas para produzir bens ou serviços, com ou sem fins lucrativos.\nIII. As funções administrativas do PODC perpassam todos os níveis organizacionais, variando apenas em profundidade e escopo conforme o nível.\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas II e III.' },
          { id: 'D', texto: 'Apenas I e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. II e III são verdadeiras; I é falsa (Administração não é exclusiva do privado — aplica-se a qualquer organização, com adaptações no setor público).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. A afirmação II está certa: organização é sistema social que combina recursos para produzir bens ou serviços, com ou sem fins lucrativos — inclui empresas, órgãos públicos, ONGs. A afirmação III também está certa: as funções administrativas perpassam todos os níveis, variando apenas em profundidade. A afirmação I está INCORRETA.',
          incorretas: {
            A: 'A afirmação I está incorreta: a Administração não é exclusiva do setor privado. Ela se aplica a qualquer organização, com adaptações decorrentes dos princípios do LIMPE e do interesse público. A afirmação II está correta. Logo, "apenas I" não procede.',
            B: 'A afirmação II está correta, mas a III também. As funções administrativas perpassam todos os níveis — cada um as exerce com maior ou menor profundidade. Descartar a III é erro de leitura do modelo de níveis organizacionais.',
            D: 'A afirmação I é incorreta (Administração não é exclusiva do privado) e a III está correta. Portanto, "apenas I e III" não se sustenta — a I não pode ser incluída.',
            E: 'Não é possível aceitar as três. A afirmação I está incorreta — Administração aplica-se também ao setor público, com adaptações. Incluí-la como correta é o erro central desta alternativa.'
          },
          conceitoCobrado: 'Conceito de Administração, de organização e abrangência do PODC',
          pegadinha: 'A afirmação I explora a crença, comum em iniciantes, de que "Administração é coisa de empresa privada". No setor público, o que muda é o objetivo (interesse público) e as adaptações (LIMPE), não a aplicação dos conceitos.',
          comoApareceEmConcurso: 'Bancas costumam colocar afirmações que misturam verdadeiro e falso, exigindo do candidato distinguir entre aplicação genérica (todos os tipos de organização) e adaptações específicas (setor público).',
          exemploInedito: {
            contexto: 'Um hospital público e uma rede de farmácias privada contratam gestores com o mesmo perfil: precisam planejar metas, organizar equipes, liderar pessoas e controlar resultados.',
            aplicacao: 'Ambos aplicam o PODC e os conceitos de eficiência, eficácia e efetividade — o que muda é o objetivo final (interesse público x lucro). A Administração não é exclusiva do privado: ela é adaptada, não excluída.',
            desafio: 'Se um hospital público reduz em 20% o tempo de espera sem ampliar o número de atendimentos, foi eficiente? Eficaz? Efetivo? Justifique cada dimensão.'
          }
        },
        tags: ['conceito', 'organização', 'PODC', 'abrangência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-01-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Habilidades do administrador (Katz)',
        pergunta: 'Segundo a teoria de Katz, as habilidades humanas (relacionamento interpessoal) são exigidas exclusivamente do nível tático, não sendo relevantes no nível estratégico nem no operacional.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. As habilidades humanas são exigidas em TODOS os níveis, com destaque relativo no tático. O que varia é a predominância, não a exigência.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. As habilidades humanas são exigidas em TODOS os níveis organizacionais — com destaque relativo no tático, mas igualmente necessárias no estratégico (liderança de alta direção) e no operacional (supervisão de equipes). O que varia é a predominância relativa, não a exigência.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela restringe as habilidades humanas ao nível tático, contrariando o modelo de Katz. No estratégico, o dirigente precisa negociar com stakeholders e inspirar a organização; no operacional, o supervisor precisa liderar equipes. Restringir a um único nível é erro conceitual clássico.'
          },
          conceitoCobrado: 'Habilidades de Katz (técnicas, humanas, conceituais) x níveis organizacionais',
          pegadinha: 'A palavra "exclusivamente" é a armadilha. Modelos clássicos raramente têm exigências exclusivas — o que existe é predominância relativa. Absolutos ("só", "apenas", "exclusivamente") em C/E são, em geral, sinal de erro.',
          comoApareceEmConcurso: 'Bancas usam a inversão entre nível e habilidade predominante, ou absolutos para transformar uma afirmação correta em incorreta. Sempre desconfiar de absolutos em modelos teóricos.',
          exemploInedito: {
            contexto: 'Uma servidora é promovida de analista operacional para coordenadora de equipe e, dois anos depois, para diretora de área. Em cada nível, continua precisando lidar com pessoas: mediar conflitos (operacional), alinhar equipes (tático) e construir coalizões (estratégico).',
            aplicacao: 'Em todos os níveis, a habilidade humana permanece essencial. O que muda é o escopo: mediação de conflitos individuais → alinhamento de equipes → negociação política e articulação institucional.',
            desafio: 'Se as habilidades humanas são exigidas em todos os níveis, por que o modelo de Katz destaca o nível tático como aquele em que elas "predominam"?'
          }
        },
        tags: ['Katz', 'habilidades', 'níveis organizacionais']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-01-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Aplicação de eficiência, eficácia e efetividade',
        pergunta: 'Uma prefeitura implanta um novo sistema de agendamento online que reduz de 15 para 9 minutos o tempo médio de marcação de consultas, com a mesma equipe administrativa. A meta formal do órgão era ampliar em 20% o número de consultas realizadas em 1 ano. Como a equipe médica não foi ampliada, o número de consultas permaneceu igual. Ao final de 1 ano, também não se observou melhora nos indicadores de saúde. Sobre o desempenho da prefeitura, é CORRETO afirmar que houve:',
        alternativas: [
          { id: 'A', texto: 'eficiência, eficácia e efetividade, pois o sistema modernizou o processo e melhorou o atendimento ao cidadão.' },
          { id: 'B', texto: 'eficiência apenas, pois houve redução do tempo de marcação, mas não houve ampliação de consultas nem impacto social.' },
          { id: 'C', texto: 'eficácia apenas, pois o sistema modernizou o processo administrativo mesmo sem ampliar as consultas realizadas.' },
          { id: 'D', texto: 'efetividade apenas, pois a modernização do processo gerou melhoria indireta nos indicadores de saúde pública.' },
          { id: 'E', texto: 'eficácia e efetividade, mas não eficiência, pois o sistema não foi amplamente adotado pelos usuários.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. Houve eficiência (reduziu tempo de marcação com a mesma equipe), mas não houve eficácia (meta de ampliar consultas não foi atingida) nem efetividade (indicadores de saúde não mudaram).',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. Houve EFICIÊNCIA (reduziu o tempo de marcação com a mesma equipe — uso mais racional do recurso). NÃO houve EFICÁCIA (a meta formal era ampliar consultas em 20%, e isso não ocorreu). NÃO houve EFETIVIDADE (não houve impacto social — os indicadores de saúde permaneceram iguais).',
          incorretas: {
            A: 'A alternativa confunde modernização (eficiência) com atingimento de metas (eficácia) e impacto social (efetividade). Reduzir tempo de marcação não é "melhorar o atendimento" em sentido social — é apenas ganho de processo. Eficácia exigiria bater a meta; efetividade exigiria mudar indicadores de saúde. Nenhuma das duas ocorreu.',
            C: 'A alternativa troca eficiência por eficácia. O ganho foi de PROCESSO (tempo de marcação), o que caracteriza eficiência. Eficácia mede o atingimento do OBJETIVO FORMAL (ampliar consultas em 20%) — e isso não foi atingido. Modernizar não é sinônimo de eficácia.',
            D: 'A alternativa confunde eficiência com efetividade. Efetividade exige impacto social REAL e MENSURÁVEL — no caso, mudança nos indicadores de saúde. O enunciado afirma explicitamente que não houve melhora. Ganho de processo não gera, por si só, efetividade.',
            E: 'A alternativa inverte os conceitos: afirma não haver eficiência quando foi justamente o que ocorreu (redução de tempo com mesma equipe); e afirma haver eficácia quando a meta não foi atingida. Também inventa premissa ("não foi amplamente adotado pelos usuários") que o enunciado não menciona.'
          },
          conceitoCobrado: 'Distinção aplicada entre eficiência, eficácia e efetividade em cenário do setor público',
          pegadinha: 'A banca coloca dados numéricos (15→9 min, meta de 20%, equipe médica não ampliada, indicadores sem melhora) para induzir o candidato a concluir "melhorou, então é efetivo". É preciso separar rigorosamente: eficiência (processo) x eficácia (meta) x efetividade (impacto social).',
          comoApareceEmConcurso: 'Cenários aplicados com dados numéricos testam a distinção entre os três conceitos. O padrão é: ganho de processo (eficiência), meta parcialmente atingida (eficácia parcial), impacto social ausente (efetividade não atingida). Leitura apressada leva a A ou D.',
          exemploInedito: {
            contexto: 'Um município implanta aplicativo para solicitar poda de árvores. O tempo de registro cai de 10 para 2 minutos, com a mesma equipe. A meta era ampliar em 30% as podas realizadas por mês; como a equipe de campo não foi ampliada, o número permaneceu igual. Ao final de 1 ano, o número de reclamações de árvores caídas não diminuiu.',
            aplicacao: 'Mesmo raciocínio: eficiência (tempo de registro caiu); eficácia NÃO atingida (meta de ampliar podas não cumprida); efetividade NÃO atingida (reclamações permaneceram). O ganho de processo não se converteu em resultado.',
            desafio: 'O que a prefeitura deveria fazer para CONVERTER o ganho de eficiência em eficácia e, depois, em efetividade? Pense em duas ações concretas.'
          }
        },
        tags: ['eficiência', 'eficácia', 'efetividade', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 3 (Associação) — Dificuldade 3 ---------- */
      {
        id: 'D-ADM-01-06',
        tipo: 'multipla_escolha',
        formato: 'associacao',
        dificuldade: 3,
        subtopico: 'Habilidades de Katz x níveis organizacionais',
        pergunta: 'Segundo o modelo de Katz, as habilidades do administrador (técnicas, humanas e conceituais) relacionam-se de forma diferente com os níveis organizacionais (estratégico, tático e operacional). Assinale a alternativa que associa corretamente cada NÍVEL à habilidade PREDOMINANTE e à sua justificativa:\n\nColuna I — Nível\n1. Estratégico\n2. Tático\n3. Operacional\n\nColuna II — Habilidade predominante e justificativa\n( ) Habilidade técnica — execução de tarefas e domínio de procedimentos específicos.\n( ) Habilidade conceitual — visão sistêmica, leitura do ambiente e definição de rumos.\n( ) Habilidade humana — coordenação de equipes e mediação de relações interpessoais.',
        alternativas: [
          { id: 'A', texto: '1 – segunda; 2 – terceira; 3 – primeira.' },
          { id: 'B', texto: '1 – primeira; 2 – segunda; 3 – terceira.' },
          { id: 'C', texto: '1 – terceira; 2 – primeira; 3 – segunda.' },
          { id: 'D', texto: '1 – segunda; 2 – primeira; 3 – terceira.' },
          { id: 'E', texto: '1 – primeira; 2 – terceira; 3 – segunda.' }
        ],
        gabarito: 'A',
        explicacao: 'A alternativa A está correta. Estratégico (1) → conceitual (segunda); Tático (2) → humana (terceira); Operacional (3) → técnica (primeira).',
        explicacaoDetalhada: {
          correta: 'A alternativa A está correta. Nível ESTRATÉGICO (1) → habilidade CONCEITUAL (segunda da Coluna II) — visão sistêmica e definição de rumos. Nível TÁTICO (2) → habilidade HUMANA (terceira da Coluna II) — coordenação de equipes e mediação. Nível OPERACIONAL (3) → habilidade TÉCNICA (primeira da Coluna II) — execução e domínio de procedimentos.',
          incorretas: {
            B: 'A alternativa inverte as correspondências: coloca a técnica no estratégico, a conceitual no tático e a humana no operacional. É a inversão completa do modelo. O estratégico não executa tarefas técnicas — define rumos; o operacional não define rumos — executa.',
            C: 'A alternativa coloca a humana no estratégico, a técnica no tático e a conceitual no operacional — três erros simultâneos. Nem a humana é predominante no estratégico, nem a técnica no tático, nem a conceitual no operacional.',
            D: 'A alternativa acerta apenas a primeira correspondência (1-segunda) e erra as duas seguintes: coloca a técnica no tático (correto seria humana) e a humana no operacional (correto seria técnica). Erro parcial é a marca do distrator construído para confundir quem sabe "mais ou menos".',
            E: 'A alternativa coloca a técnica no estratégico, a humana no tático e a conceitual no operacional. Só a do meio (2-terceira) está correta; as outras duas estão invertidas.'
          },
          conceitoCobrado: 'Modelo de Katz aplicado — correspondência entre habilidade predominante e nível organizacional',
          pegadinha: 'A associação de colunas exige que o candidato saiba não apenas as três habilidades e os três níveis isoladamente, mas a CORRESPONDÊNCIA predominante entre eles. O erro típico é inverter técnica e conceitual ou alocar a humana em um único nível.',
          comoApareceEmConcurso: 'Bancas usam associação de colunas com os três pares (nível x habilidade) para testar a precisão da correspondência. É comum embaralhar as colunas de modo que apenas uma combinação esteja integralmente correta.',
          exemploInedito: {
            contexto: 'Um analista operacional domina o sistema de protocolo (técnica). Ao ser promovido a coordenador, passa a mediar conflitos e distribuir tarefas (humana). Ao ser promovido a diretor, precisa ler o cenário político-institucional e definir o plano estratégico (conceitual).',
            aplicacao: 'A trajetória ilustra a mudança de predominância: quanto mais alto o nível, maior a exigência conceitual; quanto mais baixo, maior a exigência técnica. A humana perpassa todos os níveis, com destaque no tático.',
            desafio: 'Se esse diretor voltasse ao nível operacional por um período, qual habilidade passaria a predominar novamente? Isso significa que ele "perdeu" as conceituais?'
          }
        },
        tags: ['Katz', 'habilidades', 'níveis organizacionais', 'associação']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-ADM-01-07',
        tipo: 'autoavaliacao',
        subtopico: 'Distinção dos conceitos de desempenho e das habilidades do administrador',
        pergunta: 'Sem consultar, você consegue diferenciar eficiência, eficácia, efetividade e produtividade — e explicar um exemplo de cada? Consegue, também, relacionar as habilidades de Katz (técnicas, humanas, conceituais) aos níveis organizacionais (estratégico, tático, operacional)?',
        resposta: 'EFICIÊNCIA: uso racional dos recursos (meios). Ex.: reduzir o consumo de papel em 30% mantendo o mesmo serviço. EFICÁCIA: atingimento do objetivo formal (fins). Ex.: cumprir a meta de atender 100% dos pedidos no prazo. EFETIVIDADE: impacto social real, mensurável e mantido no tempo. Ex.: queda efetiva da mortalidade infantil após um programa de saúde. PRODUTIVIDADE: relação quantitativa entre outputs e inputs. Ex.: 30 processos analisados por servidor/hora. A chave é: eficiência olha o meio; eficácia, o fim; efetividade, o impacto; produtividade, a relação produção/recurso. KATZ: técnicas predominam no operacional; conceituais no estratégico; humanas em todos os níveis, com destaque no tático. O que varia é a predominância relativa, não a presença/ausência.'
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

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-02-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Funções administrativas — atribuições específicas',
        pergunta: 'Sobre as quatro funções administrativas do ciclo PODC, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'O planejamento define objetivos, metas e padrões que orientarão as demais funções administrativas.' },
          { id: 'B', texto: 'A organização distribui tarefas, recursos e autoridade entre os membros da equipe e setores da instituição.' },
          { id: 'C', texto: 'A direção orienta e motiva as pessoas para executar o que foi planejado e organizado.' },
          { id: 'D', texto: 'O controle compara resultados com padrões e encerra o ciclo, sem relação com o planejamento inicial.' },
          { id: 'E', texto: 'O PODC é ferramenta da teoria geral da Administração, aplicável a organizações públicas e privadas.' }
        ],
        gabarito: 'D',
        explicacao: 'A alternativa D é a INCORRETA. O controle NÃO encerra o ciclo nem se isola do planejamento: é o "espelho" do planejamento — compara desempenho real com padrões e realimenta novo planejamento. O PODC é CÍCLICO.',
        explicacaoDetalhada: {
          correta: 'A alternativa D está INCORRETA e, por isso, é a resposta. O controle NÃO encerra o ciclo nem se isola do planejamento: é o "espelho" do planejamento — compara desempenho real com padrões e gera informação que realimenta novo planejamento.',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. O planejamento define objetivos, metas e padrões. Seria INCORRETA se dissesse que o planejamento verifica resultados ao final do período — isso é função do controle.',
            B: 'A alternativa está correta e não deve ser marcada. A organização estrutura recursos, distribui tarefas e define autoridade. Seria INCORRETA se atribuísse à organização a liderança da equipe — isso é da direção.',
            C: 'A alternativa está correta e não deve ser marcada. A direção lidera, motiva e orienta. Seria INCORRETA se dissesse que a direção define metas ou distribui tarefas.',
            E: 'A alternativa está correta e não deve ser marcada. O PODC aplica-se a qualquer organização. Seria INCORRETA se afirmasse que é exclusivo do setor privado.'
          },
          conceitoCobrado: 'Atribuições específicas de cada função administrativa e a natureza cíclica do PODC',
          pegadinha: 'A palavra "encerra" em D é a armadilha: o controle não encerra nada — ele realimenta. Além disso, "sem relação com o planejamento" contradiz a própria natureza de "espelho" entre as duas funções.',
          comoApareceEmConcurso: 'O formato "EXCETO/INCORRETA" com atribuições trocadas é clássico. A afirmação de que o controle "encerra o ciclo" é uma das armadilhas mais recorrentes.',
          exemploInedito: {
            contexto: 'Um gestor diz em reunião anual: "Já medimos os resultados de 2024, encerramos o ciclo e agora começamos tudo do zero em 2025, sem olhar para trás".',
            aplicacao: 'O gestor desconhece a realimentação. O correto é usar os resultados de 2024 (controle) para informar o planejamento de 2025 — corrigir o que não funcionou, reforçar o que funcionou, ajustar metas. Sem isso, o PODC não é ciclo: é sequência truncada.',
            desafio: 'Quais riscos um órgão público corre ao tratar o PODC como sequência linear que "termina" no controle? Relacione com a prestação de contas e a melhoria contínua dos serviços.'
          }
        },
        tags: ['PODC', 'funções administrativas']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-02-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'PODC — natureza cíclica',
        pergunta: 'O PODC é uma sequência linear e estanque: cada função termina completamente antes de a próxima começar, e o ciclo termina no controle.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. O PODC é CÍCLICO e interdependente: as funções se interpenetram, ocorrem simultaneamente em diferentes níveis, e o controle realimenta novo planejamento.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. O PODC é CÍCLICO e interdependente: as funções se interpenetram, podem ocorrer simultaneamente em diferentes níveis, e o controle realimenta novo planejamento. Não há "fim" no controle.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela descreve uma visão LINEAR do PODC, superada. As funções não são estanques: um gestor pode planejar enquanto organiza, e o controle de hoje gera informação para o planejamento de amanhã. Além disso, o controle não "termina" o ciclo — ele o reinicia.'
          },
          conceitoCobrado: 'Natureza cíclica e interdependente do PODC',
          pegadinha: 'As palavras "linear" e "estanque" são os marcadores do erro. Modelos administrativos modernos enfatizam interdependência, não sequencialidade estrita.',
          comoApareceEmConcurso: 'Afirmações que descrevem o PODC como "linear" ou "estanque" são quase sempre FALSAS em C/E. A banca testa a visão sistêmica versus a visão mecânica.',
          exemploInedito: {
            contexto: 'Em uma Secretaria, enquanto o Secretário define o planejamento do próximo ano, os coordenadores seguem executando o plano vigente, e a Controladoria mede os resultados do trimestre — tudo ao mesmo tempo, em níveis diferentes.',
            aplicacao: 'O exemplo mostra que as funções ocorrem em PARALELO em diferentes níveis. Não há "espera" de uma função terminar para a outra começar.',
            desafio: 'Se as funções ocorrem em paralelo, como o gestor deve priorizar sua atenção? Qual o risco de focar apenas no planejamento e negligenciar o controle?'
          }
        },
        tags: ['PODC', 'ciclo']
      },

      /* ---------- Item 3 — Formato 1 (V/F sequência) — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-02-03',
        tipo: 'multipla_escolha',
        formato: 'vf_sequencia',
        dificuldade: 2,
        subtopico: 'Relação entre as quatro funções — planejamento e controle como "espelhos"',
        pergunta: 'Sobre a relação entre as funções administrativas do PODC, analise as afirmações a seguir e assinale a sequência correta:\n\nI. O planejamento define os padrões de desempenho que o controle utilizará como referência para comparar os resultados.\nII. A direção antecede o planejamento, pois é a função que estabelece as pessoas que executarão o plano.\nIII. O controle, ao identificar desvios, fornece informações que podem gerar novo planejamento — o que caracteriza o caráter cíclico do PODC.\nIV. A organização é a função que estrutura recursos e distribui tarefas; sem ela, o planejamento não se converte em ação coordenada.',
        alternativas: [
          { id: 'A', texto: 'V – V – V – F.' },
          { id: 'B', texto: 'V – F – V – V.' },
          { id: 'C', texto: 'F – V – V – V.' },
          { id: 'D', texto: 'V – F – F – V.' },
          { id: 'E', texto: 'F – F – V – V.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta: I (V), II (F), III (V), IV (V). A II é falsa: a direção NÃO antecede o planejamento — atua na execução, depois que planejamento e organização definiram rumos e estrutura.',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta: I (V), II (F), III (V), IV (V). A afirmação I é verdadeira (planejamento define os padrões usados pelo controle). A II é falsa (a direção NÃO antecede o planejamento — atua depois, na execução). A III é verdadeira (controle realimenta planejamento). A IV é verdadeira (organização estrutura recursos e distribui tarefas).',
          incorretas: {
            A: 'A alternativa erra ao marcar a II como verdadeira. A direção NÃO antecede o planejamento — ela atua na fase de execução, depois que planejamento e organização definiram rumos e estrutura. Inverter a ordem contraria a própria lógica do PODC.',
            C: 'A alternativa erra ao marcar a I como falsa. O planejamento define, sim, os padrões que o controle usará como referência — essa é a essência da relação "espelho". Sem padrões definidos no planejamento, o controle não tem referência para comparar.',
            D: 'A alternativa erra em dois pontos: marca a III como falsa (ela é verdadeira — o controle realimenta o planejamento) e mantém a IV verdadeira (correto, mas insuficiente). Erro de leitura sobre a natureza cíclica.',
            E: 'A alternativa erra ao marcar a I como falsa (ela é verdadeira) e a II como falsa (correto). Erra ao considerar o par uniformemente, sem examinar cada afirmação individualmente. É a "alternativa do chute" para quem não leu com atenção.'
          },
          conceitoCobrado: 'Interdependência entre as funções do PODC, com destaque para a relação planejamento-controle (espelho)',
          pegadinha: 'A afirmação II explora a confusão entre "direção" e "planejamento" — a direção NÃO define quem executa (isso é organização) nem o que fazer (isso é planejamento). Ela conduz as pessoas na execução.',
          comoApareceEmConcurso: 'O formato V/F sequência é clássico quando a banca quer testar 4 conceitos relacionados em uma única questão. Cada afirmação costuma ter um erro conceitual específico, e a combinação correta exige leitura rigorosa.',
          exemploInedito: {
            contexto: 'Em uma Secretaria de Educação: (1) Secretário define meta de ampliar aprovação em 15% (planejamento); (2) diretores distribuem turmas e professores (organização); (3) coordenadores fazem reuniões pedagógicas (direção); (4) equipe técnica mede resultados bimestralmente (controle); (5) com base nos ajustes, Secretário revisa a meta para o ano seguinte (novo planejamento).',
            aplicacao: 'A DIREÇÃO (etapa 3) acontece DEPOIS do planejamento (1) e da organização (2) — não antes. E o CONTROLE (4) realimenta o PLANEJAMENTO (5). As afirmações I, III e IV estão contempladas; a II contradiz o exemplo.',
            desafio: 'Em uma organização pública, é comum a direção "atropelar" o planejamento por pressão política. Que consequências isso traz para a coerência do PODC e para a prestação de contas?'
          }
        },
        tags: ['PODC', 'planejamento', 'controle', 'vf sequência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-02-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Finalidade do controle',
        pergunta: 'A função de controle no PODC limita-se a punir servidores que cometem irregularidades, não tendo relação com o desempenho organizacional nem com a melhoria dos serviços.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. O controle é função DIAGNÓSTICA e CORRETIVA: mede o desempenho, compara com padrões e adota ações corretivas. A punição é apenas uma das ações possíveis — e não a principal.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. O controle é função DIAGNÓSTICA e CORRETIVA: mede o desempenho, compara com os padrões definidos no planejamento e adota ações corretivas para melhorar resultados. A punição é apenas uma das ações corretivas possíveis — e não a principal.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela reduz o controle à punição, empobrecendo sua função. O controle existe para DIAGNOSTICAR desvios e APRIMORAR o desempenho. Confundi-lo com mera punição é erro conceitual clássico. A punição é exceção, não regra. E o controle tem, sim, relação direta com o desempenho organizacional e a melhoria dos serviços.'
          },
          conceitoCobrado: 'Finalidade do controle no ciclo PODC',
          pegadinha: 'As palavras "limita-se" e "não tendo relação" são absolutos que denunciam o erro. O controle tem múltiplas finalidades (diagnóstico, correção, prevenção, aprendizado), e a punição é apenas uma delas.',
          comoApareceEmConcurso: 'Bancas usam essa distorção para separar quem entende o controle como função gerencial de quem o associa apenas à punição — confusão frequente em candidatos que vêm do senso comum.',
          exemploInedito: {
            contexto: 'Um órgão mede mensalmente o tempo de tramitação de processos. Quando o tempo sobe, a equipe investiga o gargalo e redistribui servidores. Quando cai, padroniza o que funcionou. Nenhuma punição é aplicada — o foco é melhorar o fluxo.',
            aplicacao: 'O exemplo mostra controle como DIAGNÓSTICO e MELHORIA, não como punição. O controle existe para aprender e aprimorar. A punição, quando cabível, é apenas uma das ações possíveis — e costuma ser tratada em outra instância (correição, PAD).',
            desafio: 'Que diferença prática há entre um controle "punitivo" e um controle "diagnóstico" na gestão de uma equipe? Que tipo de controle tende a gerar mais engajamento?'
          }
        },
        tags: ['controle', 'finalidade']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-02-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Identificação de função administrativa em cenário',
        pergunta: 'Uma Secretaria de Saúde define em janeiro a meta de ampliar a cobertura vacinal em 20%. Em fevereiro, redistribui equipes entre as UBS. Em março, o Secretário faz reuniões de motivação com os coordenadores. Em dezembro, analisa os resultados e identifica que duas regionais não atingiram a meta, decidindo reforçar a capacitação nelas para o próximo ano. As funções administrativas exercidas em janeiro, fevereiro, março e dezembro são, respectivamente:',
        alternativas: [
          { id: 'A', texto: 'controle, organização, direção e planejamento.' },
          { id: 'B', texto: 'planejamento, organização, direção e controle.' },
          { id: 'C', texto: 'organização, planejamento, controle e direção.' },
          { id: 'D', texto: 'direção, controle, planejamento e organização.' },
          { id: 'E', texto: 'planejamento, direção, organização e controle.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. Janeiro = planejamento (meta); fevereiro = organização (redistribuição de equipes); março = direção (motivação); dezembro = controle (análise e ação corretiva).',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. Janeiro = PLANEJAMENTO (definição de meta); fevereiro = ORGANIZAÇÃO (redistribuição de equipes); março = DIREÇÃO (reuniões de motivação); dezembro = CONTROLE (análise de resultados e ação corretiva).',
          incorretas: {
            A: 'A alternativa inverte a ordem: coloca controle em janeiro (janeiro é planejamento), organização em fevereiro (correto), direção em março (correto) e planejamento em dezembro (dezembro é controle). Erro clássico de quem confunde "definir meta" com "verificar resultado".',
            C: 'A alternativa erra ao colocar organização em janeiro e planejamento em fevereiro. Também inverte controle e direção: março é direção, não controle. Erro sistemático de inversão entre as quatro funções.',
            D: 'A alternativa embaralha todas as funções: direção em janeiro (janeiro é planejamento), controle em fevereiro (fevereiro é organização), planejamento em março (março é direção) e organização em dezembro (dezembro é controle). É o distrator para capturar quem "chutou" sem ler o cenário.',
            E: 'A alternativa acerta janeiro (planejamento) mas erra fevereiro (diz direção, quando é organização), março (diz organização, quando é direção) e dezembro (acerta o controle). É a "alternativa quase correta" — erra apenas os dois do meio, exigindo atenção redobrada.'
          },
          conceitoCobrado: 'Identificação das quatro funções administrativas em cenário aplicado',
          pegadinha: 'A banca descreve ações concretas (definir meta, redistribuir equipes, fazer reuniões, analisar resultados) que precisam ser traduzidas nas funções abstratas. A confusão mais comum é entre organização (redistribuir recursos) e direção (motivar pessoas), e entre planejamento (definir meta) e controle (verificar resultado).',
          comoApareceEmConcurso: 'Cenários com verbos de ação são o padrão para cobrar PODC de forma aplicada. O candidato precisa traduzir "redistribuiu" → organização, "motivou" → direção, "analisou" → controle, "definiu" → planejamento.',
          exemploInedito: {
            contexto: 'Um órgão define meta de reduzir faltas em 10% (janeiro); realoca servidores (fevereiro); faz reuniões de engajamento (março); e, ao final do ano, compara o resultado com a meta e propõe treinamento (dezembro).',
            aplicacao: 'Mesmo padrão: planejamento, organização, direção e controle. O que muda são os verbos, mas a essência é idêntica. A "ação corretiva" no final do ciclo (treinamento) é parte do controle — não é planejamento novo ainda, é resposta ao desvio identificado.',
            desafio: 'Se o gestor, em dezembro, ao invés de comparar resultados, simplesmente definisse uma nova meta sem olhar o que aconteceu, qual função ele estaria negligenciando? Por quê?'
          }
        },
        tags: ['PODC', 'funções administrativas', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 2 (I, II, III) — Dificuldade 3 ---------- */
      {
        id: 'D-ADM-02-06',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 3,
        subtopico: 'PODC x Processo Administrativo da Lei 9.784/1999',
        pergunta: 'Sobre a relação entre o ciclo PODC (Teoria Geral da Administração) e o processo administrativo da Lei 9.784/1999, analise as afirmações a seguir:\n\nI. O PODC e o processo administrativo da Lei 9.784/1999 são sinônimos, pois ambos tratam das funções de planejar, organizar, dirigir e controlar no serviço público.\nII. O PODC é o ciclo de funções gerenciais (planejar, organizar, dirigir e controlar), aplicável a qualquer organização, com adaptações no setor público.\nIII. O processo administrativo da Lei 9.784/1999 é o rito jurídico de decisão da Administração Pública, com fases, prazos, contraditório e ampla defesa, sendo distinto do PODC.\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas I e III.' },
          { id: 'D', texto: 'Apenas II e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'D',
        explicacao: 'A alternativa D está correta. II e III são verdadeiras; I é falsa (PODC e processo administrativo da Lei 9.784/1999 são conceitos de áreas distintas, não sinônimos).',
        explicacaoDetalhada: {
          correta: 'A alternativa D está correta. A afirmação II está certa: o PODC é ciclo de funções gerenciais aplicável a qualquer organização. A afirmação III também está certa: o processo administrativo da Lei 9.784/1999 é rito jurídico de decisão, com fases, prazos, contraditório e ampla defesa — distinto do PODC. A afirmação I está INCORRETA (não são sinônimos).',
          incorretas: {
            A: 'A afirmação I está incorreta: PODC e processo administrativo da Lei 9.784/1999 NÃO são sinônimos. São conceitos de áreas distintas (Teoria Geral x Direito Administrativo), com naturezas diferentes (funções gerenciais x rito jurídico). A afirmação II está correta. Logo, "apenas I" não procede.',
            B: 'A afirmação II está correta, mas a III também. Descartar a III é negar a definição técnica do processo administrativo como rito jurídico de decisão. A alternativa peca por excluir uma afirmação verdadeira.',
            C: 'A afirmação I é incorreta e a III é correta — portanto, incluir I como correta (junto com III) é erro. A confusão entre os dois conceitos é justamente o que a I explora.',
            E: 'Não é possível aceitar as três. A afirmação I é o erro central: confundir PODC com processo administrativo da Lei 9.784/1999 é a pegadinha mais recorrente nesse tema. II e III estão corretas, mas I não.'
          },
          conceitoCobrado: 'Distinção entre PODC (Teoria Geral) e processo administrativo da Lei 9.784/1999 (Direito Administrativo)',
          pegadinha: 'A palavra "processo administrativo" tem dois sentidos: (i) o ciclo PODC (sentido gerencial); (ii) o rito da Lei 9.784/1999 (sentido jurídico). A banca explora essa ambiguidade, exigindo que o candidato diferencie os contextos. É a pegadinha clássica do módulo.',
          comoApareceEmConcurso: 'Bancas de concursos que combinam Administração e Direito Administrativo usam essa distinção com frequência. A afirmação I ("são sinônimos") é quase sempre FALSA — os conceitos têm naturezas diferentes.',
          exemploInedito: {
            contexto: 'Em um mesmo órgão, um gestor define metas para o próximo ano (PODC — planejamento) e, paralelamente, um servidor instaura processo administrativo para apurar irregularidade (Lei 9.784/1999). São atividades distintas, em áreas distintas, com naturezas distintas.',
            aplicacao: 'O gestor aplica o PODC (funções gerenciais); o servidor aplica o rito jurídico (fases, prazos, contraditório, ampla defesa). Um não substitui o outro: coexistem. Confundi-los é erro conceitual e pode gerar problemas práticos.',
            desafio: 'Se um gestor trata o processo administrativo disciplinar como se fosse uma "etapa do PODC", que garantias constitucionais ele pode violar? Pense em contraditório, ampla defesa e devido processo legal.'
          }
        },
        tags: ['PODC', 'processo administrativo', 'Lei 9.784/1999', 'afirmações romanas']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-ADM-02-07',
        tipo: 'autoavaliacao',
        subtopico: 'Ciclo PODC, interdependência das funções e distinção em relação ao processo administrativo da Lei 9.784/1999',
        pergunta: 'Sem consultar, você consegue explicar por que o PODC é um ciclo interdependente (e não linear)? Consegue diferenciar cada uma das quatro funções em um cenário aplicado? E consegue distinguir o PODC do processo administrativo da Lei 9.784/1999?',
        resposta: 'CICLO INTERDEPENDENTE: o planejamento define padrões; a organização estrutura recursos; a direção lidera pessoas; o controle compara desempenho com padrões e gera informação que realimenta novo planejamento. As funções ocorrem em paralelo em diferentes níveis e se alimentam mutuamente — não há "fim" no controle. IDENTIFICAÇÃO EM CENÁRIO: verbos como "definir metas" (planejamento), "redistribuir recursos" (organização), "motivar/liderar" (direção) e "comparar resultados" (controle) ajudam a traduzir ações concretas em funções abstratas. DISTINÇÃO PODC x LEI 9.784: o PODC é ciclo de funções gerenciais da Teoria Geral; o processo administrativo da Lei 9.784/1999 é o rito jurídico de decisão da Administração, com fases, prazos, contraditório e ampla defesa. São conceitos de áreas distintas, não sinônimos — apesar do nome parecido.'
      }

    ]
  }
  ,

  /* ============================================================
     ADM-03 — Planejamento
  ============================================================ */
  'ADM-03': {
    id: 'D-ADM-03',
    moduloId: 'ADM-03',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-03-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Elementos do planejamento (missão, visão, valores, objetivos, metas, planos)',
        pergunta: 'Sobre os elementos do planejamento, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'Missão é a razão de existir da organização, expressando o seu papel no presente.' },
          { id: 'B', texto: 'Visão é o estado futuro desejado, indicando onde a organização quer chegar.' },
          { id: 'C', texto: 'Valores são os princípios éticos e as crenças que orientam a conduta organizacional.' },
          { id: 'D', texto: 'Objetivos são alvos quantificados com prazo definido, derivados das metas organizacionais.' },
          { id: 'E', texto: 'Planos são documentos que formalizam estratégias e cursos de ação escolhidos.' }
        ],
        gabarito: 'D',
        explicacao: 'A alternativa D é a INCORRETA. Objetivos são alvos amplos e qualitativos; METAS é que são quantificadas com prazo. A relação está invertida em D.',
        explicacaoDetalhada: {
          correta: 'A alternativa D está INCORRETA e, por isso, é a resposta. A relação está invertida: OBJETIVOS são alvos amplos e qualitativos (ex.: "melhorar o atendimento"); METAS são objetivos quantificados com prazo (ex.: "reduzir o tempo de espera em 30% até dezembro"). Dizer que objetivos derivam de metas inverte a lógica — são as metas que derivam dos objetivos.',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. Missão é a razão de existir no presente. Seria INCORRETA se dissesse que missão é o estado futuro desejado — isso é visão.',
            B: 'A alternativa está correta e não deve ser marcada. Visão é o estado futuro desejado. Seria INCORRETA se dissesse que visão é a razão de existir — isso é missão.',
            C: 'A alternativa está correta e não deve ser marcada. Valores são princípios éticos e crenças. Seria INCORRETA se dissesse que valores são metas de curto prazo — valores não são metas, são orientações.',
            E: 'A alternativa está correta e não deve ser marcada. Planos formalizam estratégias e cursos de ação. Seria INCORRETA se dissesse que planos independem dos objetivos — planos são o "como" para atingir objetivos e metas.'
          },
          conceitoCobrado: 'Elementos do planejamento — distinção entre missão, visão, valores, objetivos, metas e planos',
          pegadinha: 'A confusão mais comum é entre objetivo e meta (D inverte). Outra pegadinha frequente é entre missão e visão (A/B — se invertidos, ficam errados). Fixar: missão (presente) → visão (futuro) → valores (princípios) → objetivos (amplos/qualitativos) → metas (quantificadas/prazo) → planos (formalização).',
          comoApareceEmConcurso: 'Bancas costumam trocar pares em uma única alternativa e manter os outros corretos. A "inversão" de definições é o padrão: missão↔visão, objetivo↔meta. É a questão mais recorrente do módulo.',
          exemploInedito: {
            contexto: 'Uma autarquia previdenciária declara: "Nossa missão é garantir aposentadorias com eficiência; nossa visão é ser referência nacional em gestão previdenciária até 2030; nosso objetivo é melhorar o atendimento; nossa meta é reduzir de 40 para 20 dias o tempo de concessão até dezembro; nosso plano de ação prevê digitalização do processo".',
            aplicacao: 'Cada elemento cumpre uma função distinta: missão = razão de existir no presente; visão = futuro almejado; objetivo = alvo amplo e qualitativo; meta = objetivo quantificado e datado; plano = curso de ação formalizado. Se alguém dissesse que "a meta é melhorar o atendimento", inverteria objetivo e meta — exatamente o erro que a alternativa D reproduz.',
            desafio: 'Reescreva a frase acima identificando cada elemento (missão, visão, objetivo, meta, plano). Se a organização dissesse "nossa meta é ser referência nacional até 2030", estaria usando o termo corretamente? Justifique.'
          }
        },
        tags: ['planejamento', 'missão', 'visão', 'objetivo', 'meta']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-03-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Missão x visão',
        pergunta: 'Missão é onde a organização quer chegar no futuro; visão é a razão de sua existência no presente.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. A relação está invertida: missão é a razão de existir (presente); visão é o estado futuro desejado (futuro).',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. A relação está invertida: MISSÃO é a razão de existir da organização, expressa o papel atual (presente). VISÃO é o estado futuro desejado, onde se quer chegar (futuro). A afirmação troca os dois conceitos.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela troca missão por visão. Fixar a lógica: missão = "por que existimos hoje"; visão = "onde queremos chegar". A visão orienta o futuro; a missão justifica o presente. Inverter confunde o planejamento estratégico inteiro.'
          },
          conceitoCobrado: 'Distinção entre missão (presente) e visão (futuro)',
          pegadinha: 'As palavras "futuro" e "presente" na afirmação entregam o erro a quem sabe o conteúdo, mas induzem ao erro a quem decorou apenas "missão e visão são elementos do planejamento" sem fixar qual é qual. É a pegadinha nº 1 do módulo.',
          comoApareceEmConcurso: 'Bancas trocam missão/visão em C/E com frequência. Outra variação é trocar valores por missão, ou metas por visão. A dica é memorizar: "missão é o hoje; visão é o amanhã".',
          exemploInedito: {
            contexto: 'Um hospital público declara: "Nossa missão é salvar vidas com acolhimento; nossa visão é ser o hospital de referência do estado em 2030".',
            aplicacao: 'A missão responde "o que fazemos hoje" — salvar vidas com acolhimento. A visão responde "onde queremos chegar" — ser referência em 2030. Se o hospital dissesse "nossa missão é ser referência em 2030", estaria usando o termo errado — isso é visão.',
            desafio: 'Pense em uma organização pública que você conhece. Sem consultar, formule uma missão (presente) e uma visão (futuro) para ela. Verifique se trocou os conceitos.'
          }
        },
        tags: ['planejamento', 'missão', 'visão']
      },

      /* ---------- Item 3 — Formato 2 (I, II, III) — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-03-03',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 2,
        subtopico: 'Análise SWOT e Balanced Scorecard (BSC)',
        pergunta: 'Sobre a análise SWOT e o Balanced Scorecard (BSC), analise as afirmações a seguir:\n\nI. Na análise SWOT, forças e fraquezas são fatores internos (controláveis), enquanto oportunidades e ameaças são fatores externos (não controláveis).\nII. O BSC traduz a estratégia em quatro perspectivas: financeira, clientes, processos internos e aprendizado/crescimento, com objetivos, indicadores, metas e iniciativas.\nIII. No BSC aplicado ao setor público, a perspectiva "clientes" é idêntica à do setor privado, pois em ambos o objetivo central é o lucro.\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas I e II.' },
          { id: 'D', texto: 'Apenas II e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. I e II são verdadeiras; III é falsa (no setor público, "clientes" costuma ser adaptada para "sociedade" — o objetivo central não é o lucro).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. A afirmação I está certa: forças e fraquezas são fatores internos; oportunidades e ameaças são externos. A afirmação II também está certa: o BSC usa quatro perspectivas clássicas com objetivos, indicadores, metas e iniciativas. A afirmação III está INCORRETA: no setor público, a perspectiva "clientes" é adaptada para "sociedade", e o objetivo central não é o lucro.',
          incorretas: {
            A: 'A afirmação I está correta, mas a II também. O BSC tem, sim, as quatro perspectivas clássicas (financeira, clientes, processos internos, aprendizado/crescimento). Excluir a II é negar a estrutura do BSC.',
            B: 'A afirmação II está correta, mas a I também. SWOT distingue fatores internos (forças e fraquezas) de externos (oportunidades e ameaças) — é o ponto central da ferramenta. Excluir a I é desconsiderar esse aspecto fundamental.',
            D: 'A afirmação III é falsa — no setor público, "clientes" é adaptada para "sociedade"; o objetivo não é o lucro. Incluir a III como correta é o erro central desta alternativa. A II está correta, mas a III não.',
            E: 'Não é possível aceitar as três. A afirmação III é o erro: o setor público adapta o BSC em razão do interesse público, não do lucro. Incluir a III como correta é o que torna esta alternativa errada.'
          },
          conceitoCobrado: 'SWOT (interno x externo) e BSC (quatro perspectivas + adaptação ao setor público)',
          pegadinha: 'A afirmação III explora uma crença de que o BSC é "idêntico" em qualquer contexto. Na verdade, o setor público adapta a perspectiva "clientes" para "sociedade", e o objetivo central é o interesse público, não o lucro. É a pegadinha típica do módulo.',
          comoApareceEmConcurso: 'Bancas combinam SWOT e BSC em uma única questão de afirmações romanas para testar dois conteúdos de uma vez. A estratégia é colocar 2 afirmações verdadeiras e 1 falsa em pontos-chave — geralmente a falsa é a que aplica indevidamente um conceito do setor privado ao setor público.',
          exemploInedito: {
            contexto: 'Uma Secretaria de Saúde aplica o BSC com quatro perspectivas: na "sociedade", reduzir mortalidade infantil; na "clientes", elevar a satisfação dos usuários; nos "processos internos", reduzir tempo de espera; no "aprendizado", capacitar enfermeiros.',
            aplicacao: 'A Secretaria substituiu "financeira" pela perspectiva "sociedade" — típico do setor público. Se dissesse que a perspectiva "clientes" é igual à do privado (busca de lucro), erraria — aqui o "cliente" é o cidadão, e o objetivo é o interesse público. Isso é exatamente o que a afirmação III faz.',
            desafio: 'Se você aplicasse o BSC a uma escola pública, que indicador usaria em cada perspectiva? Pense em um indicador para "sociedade", um para "clientes/usuários", um para "processos internos" e um para "aprendizado".'
          }
        },
        tags: ['SWOT', 'BSC', 'afirmações romanas']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-03-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Objetivo x meta',
        pergunta: 'Meta é um alvo mais amplo e qualitativo que objetivo; por isso, toda meta pressupõe um objetivo quantificado.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. A relação está invertida: objetivo é amplo e qualitativo; meta é o objetivo quantificado com prazo. Toda META pressupõe um OBJETIVO, não o contrário.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. A relação está invertida. OBJETIVO é amplo e qualitativo (ex.: "melhorar o atendimento"). META é o objetivo quantificado com prazo (ex.: "reduzir o tempo de espera em 30% até dezembro"). Toda META pressupõe um OBJETIVO — não o contrário.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela descreve a relação invertida: diz que "meta é ampla e qualitativa" (mas meta é quantificada e datada) e que "toda meta pressupõe um objetivo quantificado" (o correto é que toda meta pressupõe um objetivo amplo, e não quantificado). A dupla inversão torna a afirmação falsa.'
          },
          conceitoCobrado: 'Relação entre objetivo (amplo/qualitativo) e meta (quantificada/prazo)',
          pegadinha: 'A afirmação tem DUAS inversões simultâneas: (1) troca as definições de objetivo e meta; (2) inverte a relação de pressuposição. Quem lê rápido pode concordar com "toda meta pressupõe um objetivo" — mas a palavra "quantificado" ao final torna a frase falsa, porque objetivo não é quantificado.',
          comoApareceEmConcurso: 'Bancas gostam de inverter pares em C/E. A dica é sempre verificar cada termo separadamente: "meta = quantificada, prazo"; "objetivo = amplo, qualitativo". Se a afirmação mistura, é falsa.',
          exemploInedito: {
            contexto: 'Um órgão define como objetivo "melhorar a qualidade do atendimento" e, a partir dele, define a meta "elevar de 70% para 85% o índice de satisfação dos usuários até dezembro de 2025".',
            aplicacao: 'O objetivo é amplo e qualitativo (melhorar); a meta é quantificada e datada (70% → 85% até dezembro). A meta deriva do objetivo — não o contrário. Se alguém dissesse "o objetivo é elevar de 70% para 85%", estaria usando "objetivo" no lugar de "meta".',
            desafio: 'Dê um exemplo de objetivo e um de meta para uma escola pública. Qual dos dois é o mais amplo? Qual dos dois você consegue medir numericamente?'
          }
        },
        tags: ['objetivo', 'meta']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-03-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Classificação de fatores na análise SWOT',
        pergunta: 'Uma Secretaria de Meio Ambiente está realizando sua análise SWOT para o planejamento de 2026 e levantou quatro pontos: (1) ausência de sistema informatizado próprio para licenciamento; (2) anúncio de novos recursos federais para digitalização de serviços ambientais; (3) equipe técnica com 20 servidores concursados e estáveis; (4) alteração na legislação estadual que amplia exigências sem prever repasse de recursos. Esses pontos correspondem, respectivamente, a:',
        alternativas: [
          { id: 'A', texto: 'força, oportunidade, fraqueza e ameaça.' },
          { id: 'B', texto: 'oportunidade, força, ameaça e fraqueza.' },
          { id: 'C', texto: 'fraqueza, oportunidade, força e ameaça.' },
          { id: 'D', texto: 'fraqueza, ameaça, força e oportunidade.' },
          { id: 'E', texto: 'ameaça, fraqueza, oportunidade e força.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. (1) ausência de sistema = fraqueza (interno negativo); (2) recursos federais = oportunidade (externo positivo); (3) equipe estável = força (interno positivo); (4) alteração legislativa = ameaça (externo negativo).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. (1) Ausência de sistema informatizado = FRAQUEZA (interno negativo). (2) Novos recursos federais = OPORTUNIDADE (externo positivo). (3) Equipe técnica estável = FORÇA (interno positivo). (4) Alteração legislativa sem repasse = AMEAÇA (externo negativo). A chave é sempre: interno (controlável) x externo (não controlável), positivo x negativo.',
          incorretas: {
            A: 'A alternativa começa errando: (1) ausência de sistema é fraqueza, não força. A "força" seria ter o sistema. Além disso, (3) equipe estável é força, não fraqueza. Erro duplo de classificação — a alternativa troca os dois primeiros e os dois últimos.',
            B: 'A alternativa troca tudo: (1) ausência de sistema não é oportunidade (é fraqueza); (2) recursos federais não são força (são oportunidade, porque vêm de fora); (3) equipe estável não é ameaça (é força); (4) alteração legislativa não é fraqueza (é ameaça, porque vem de fora). Erro completo de leitura de interno x externo.',
            D: 'A alternativa acerta (1) fraqueza e (3) força, mas erra (2) e (4): recursos federais são oportunidade (não ameaça); alteração legislativa é ameaça (não oportunidade). O erro está em confundir "externo positivo" com "externo negativo".',
            E: 'A alternativa erra completamente: (1) ausência de sistema não é ameaça (é fraqueza interna); (2) recursos federais não são fraqueza (são oportunidade externa); (3) equipe estável não é oportunidade (é força interna); (4) alteração legislativa não é força (é ameaça externa). Inverte todos os quadrantes da SWOT.'
          },
          conceitoCobrado: 'Classificação de fatores na SWOT (interno x externo; positivo x negativo)',
          pegadinha: 'A pegadinha é a distinção entre interno (controlável) e externo (não controlável). Muitos confundem "recurso" com "força" e "lei" com "fraqueza", mas o critério é a origem: se depende da organização, é interno; se vem do ambiente, é externo.',
          comoApareceEmConcurso: 'Cenários com quatro pontos são clássicos para testar a classificação SWOT. A banca costuma misturar os quadrantes para verificar se o candidato domina o critério interno x externo, não apenas o rótulo "positivo x negativo".',
          exemploInedito: {
            contexto: 'Um instituto federal faz SWOT para 2026: (1) corpo docente com doutorado; (2) edital federal de apoio à pesquisa aplicada; (3) infraestrutura laboratorial defasada; (4) contingenciamento orçamentário anunciado.',
            aplicacao: 'Classificação: (1) força (interno positivo); (2) oportunidade (externo positivo); (3) fraqueza (interno negativo); (4) ameaça (externo negativo). A regra é: quem controla? A própria organização (interno) ou o ambiente (externo)?',
            desafio: 'Se você fosse gestor do instituto, em qual dos quatro pontos concentraria esforços de curto prazo? Justifique considerando o que a organização controla e o que não controla.'
          }
        },
        tags: ['SWOT', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 3 (Associação) — Dificuldade 3 ---------- */
      {
        id: 'D-ADM-03-06',
        tipo: 'multipla_escolha',
        formato: 'associacao',
        dificuldade: 3,
        subtopico: 'Níveis de planejamento (estratégico, tático, operacional) x horizonte x características',
        pergunta: 'Sobre os níveis de planejamento, associe corretamente cada NÍVEL ao HORIZONTE e à CARACTERÍSTICA correspondentes:\n\nColuna I — Nível\n1. Estratégico\n2. Tático\n3. Operacional\n\nColuna II — Horizonte e característica\n( ) Longo prazo; envolve a organização como um todo; define missão, visão e diretrizes.\n( ) Curto prazo; foco em tarefas cotidianas; detalha procedimentos e rotinas.\n( ) Médio prazo; foco setorial; desdobra diretrizes estratégicas para departamentos.',
        alternativas: [
          { id: 'A', texto: '1 – primeira; 2 – segunda; 3 – terceira.' },
          { id: 'B', texto: '1 – segunda; 2 – primeira; 3 – terceira.' },
          { id: 'C', texto: '1 – terceira; 2 – primeira; 3 – segunda.' },
          { id: 'D', texto: '1 – primeira; 2 – terceira; 3 – segunda.' },
          { id: 'E', texto: '1 – terceira; 2 – segunda; 3 – primeira.' }
        ],
        gabarito: 'D',
        explicacao: 'A alternativa D está correta. Estratégico (1) → longo prazo e visão global (primeira); Tático (2) → médio prazo e foco setorial (terceira); Operacional (3) → curto prazo e tarefas cotidianas (segunda).',
        explicacaoDetalhada: {
          correta: 'A alternativa D está correta. Nível ESTRATÉGICO (1) → longo prazo; organização como um todo; missão, visão e diretrizes (primeira da Coluna II). Nível TÁTICO (2) → médio prazo; foco setorial; desdobra diretrizes para departamentos (terceira da Coluna II). Nível OPERACIONAL (3) → curto prazo; tarefas cotidianas; detalha procedimentos (segunda da Coluna II).',
          incorretas: {
            A: 'A alternativa erra (2) e (3): coloca o TÁTICO como "curto prazo e tarefas cotidianas" (isso é operacional) e o OPERACIONAL como "médio prazo e setorial" (isso é tático). O ESTRATÉGICO acerta. É o erro clássico de trocar tático por operacional.',
            B: 'A alternativa erra (1) e (2): coloca o ESTRATÉGICO como "curto prazo" (é longo prazo) e o TÁTICO como "longo prazo e organização como um todo" (é médio prazo e setorial). Apenas o OPERACIONAL acerta. Erro duplo entre estratégico e tático.',
            C: 'A alternativa erra as três correspondências: coloca o ESTRATÉGICO como operacional (curto prazo), o TÁTICO como estratégico (longo prazo) e o OPERACIONAL como tático (médio prazo). É a inversão completa da hierarquia.',
            E: 'A alternativa coloca o ESTRATÉGICO como "curto prazo", o TÁTICO como "médio prazo" (este está correto) e o OPERACIONAL como "longo prazo". Só o do meio está certo; os extremos estão invertidos. É o distrator construído para quem só memorizou o nível tático.'
          },
          conceitoCobrado: 'Correspondência entre níveis de planejamento, horizonte temporal e características',
          pegadinha: 'A associação de colunas exige que o candidato não apenas saiba os três níveis e as três características isoladamente, mas a CORRESPONDÊNCIA entre eles. A confusão mais comum é entre tático (médio/setorial) e operacional (curto/cotidiano) — ambos são "abaixo" do estratégico, mas com naturezas distintas.',
          comoApareceEmConcurso: 'Bancas usam associação de colunas com níveis e características para testar a precisão. É comum embaralhar as colunas de modo que apenas uma combinação esteja integralmente correta.',
          exemploInedito: {
            contexto: 'Um instituto federal, em 2025, (1) define plano decenal de expansão de campi (estratégico); (2) fixa metas anuais por pró-reitoria (tático); (3) elabora cronograma semanal de manutenção dos laboratórios (operacional).',
            aplicacao: 'O plano decenal é estratégico (longo prazo, visão global). As metas por pró-reitoria são táticas (médio prazo, setorial). O cronograma semanal é operacional (curto prazo, tarefas cotidianas). Se alguém dissesse que o plano decenal é tático, erraria — tático é o elo entre estratégico e operacional.',
            desafio: 'Se você fosse diretor de um órgão público, qual dos três níveis exigiria mais tempo de dedicação sua? Por quê? Pense em como o dia a dia "puxa" o gestor para o operacional.'
          }
        },
        tags: ['níveis de planejamento', 'estratégico', 'tático', 'operacional', 'associação']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-ADM-03-07',
        tipo: 'autoavaliacao',
        subtopico: 'Elementos do planejamento, SWOT, BSC e níveis de planejamento',
        pergunta: 'Sem consultar, você consegue explicar os elementos do planejamento (missão, visão, valores, objetivos, metas, planos), diferenciar SWOT de BSC e associar os três níveis de planejamento (estratégico, tático e operacional) ao horizonte e ao escopo correspondentes?',
        resposta: 'MISSÃO: razão de existir (presente). VISÃO: estado futuro desejado. VALORES: princípios de conduta. OBJETIVOS: alvos amplos e qualitativos. METAS: objetivos quantificados com prazo. PLANOS: documentos que formalizam as estratégias. SWOT: ferramenta de diagnóstico (interno: forças/fraquezas; externo: oportunidades/ameaças). BSC: ferramenta de gestão estratégica com quatro perspectivas (financeira, clientes, processos internos, aprendizado/crescimento) — no setor público, "clientes" costuma ser adaptada para "sociedade". NÍVEIS: estratégico (longo prazo, organização como um todo, define missão/visão/diretrizes); tático (médio prazo, foco setorial, desdobra o estratégico); operacional (curto prazo, tarefas cotidianas, detalha procedimentos). SWOT diagnostica; BSC executa e mede; os três níveis conectam presente e futuro.'
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

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-04-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Conceitos básicos da função organização (hierarquia, amplitude, delegação, departamentalização)',
        pergunta: 'Sobre conceitos fundamentais da função organização, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'Hierarquia é a distribuição de autoridade em níveis, do topo à base, definindo quem responde a quem.' },
          { id: 'B', texto: 'Amplitude de controle é o número de subordinados que um gestor pode supervisionar de forma eficaz.' },
          { id: 'C', texto: 'Delegação transfere ao subordinado a responsabilidade final pela tarefa, eximindo o superior do acompanhamento.' },
          { id: 'D', texto: 'Departamentalização é o agrupamento de atividades conforme um critério escolhido (função, cliente, região etc.).' },
          { id: 'E', texto: 'Especialização é a divisão do trabalho em tarefas mais específicas, visando maior eficiência.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C é a INCORRETA. A delegação transfere AUTORIDADE para executar a tarefa, mas a responsabilidade final permanece com o superior. Delegar não é eximir-se — é transferir a execução, mantendo o acompanhamento.',
        explicacaoDetalhada: {
          correta: 'A alternativa C está INCORRETA e, por isso, é a resposta. A delegação transfere AUTORIDADE (para executar) — mas a RESPONSABILIDADE FINAL permanece com quem delegou. O superior continua respondendo pelo resultado perante a organização e deve acompanhar a execução. Isso é o princípio da paridade autoridade-responsabilidade.',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. Hierarquia é distribuição de autoridade em níveis. Seria INCORRETA se dissesse que hierarquia é a distribuição de tarefas — isso é especialização.',
            B: 'A alternativa está correta e não deve ser marcada. Amplitude de controle é o número de subordinados por gestor. Seria INCORRETA se dissesse que amplitude é o número de níveis hierárquicos — são conceitos relacionados, mas distintos.',
            D: 'A alternativa está correta e não deve ser marcada. Departamentalização é agrupamento conforme critério. Seria INCORRETA se dissesse que departamentalização é a divisão do trabalho em tarefas — isso é especialização.',
            E: 'A alternativa está correta e não deve ser marcada. Especialização é divisão do trabalho em tarefas específicas. Seria INCORRETA se dissesse que especialização é distribuição de autoridade — isso é hierarquia.'
          },
          conceitoCobrado: 'Conceitos básicos da função organização: hierarquia, amplitude, delegação, departamentalização, especialização',
          pegadinha: 'A palavra "eximindo" em C é a armadilha. Delegar NÃO exime o superior — ele continua responsável. É o erro mais recorrente do módulo: confundir transferência de autoridade com transferência de responsabilidade.',
          comoApareceEmConcurso: 'Bancas costumam apresentar definições corretas de hierarquia, amplitude, departamentalização e especialização, e trocar apenas a de delegação. É a questão clássica de "conceito trocado" no formato EXCETO.',
          exemploInedito: {
            contexto: 'Um diretor delega ao coordenador a assinatura de despachos de rotina. O coordenador assina um despacho com erro. A irregularidade é identificada pela auditoria.',
            aplicacao: 'O coordenador responde pela execução, mas o diretor continua responsável perante a organização e os órgãos de controle. A delegação transferiu a autoridade para assinar, mas não transferiu a responsabilidade final. Isso ilustra exatamente por que a alternativa C está errada.',
            desafio: 'Em uma autarquia, se um diretor delega ao subordinado a autorização de despesas e o subordinado comete irregularidade, quem responde perante o Tribunal de Contas? Apenas o subordinado? Ou ambos? Explique.'
          }
        },
        tags: ['organização', 'delegação', 'hierarquia', 'amplitude', 'especialização']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-04-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Amplitude de controle x níveis hierárquicos',
        pergunta: 'Quanto MAIOR a amplitude de controle (muitos subordinados por gestor), MAIOR será o número de níveis hierárquicos da organização.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. A relação é INVERSA: amplitude ampla (muitos subordinados por gestor) gera MENOS níveis hierárquicos (estrutura achatada). Amplitude estreita (poucos subordinados) gera MAIS níveis (estrutura verticalizada).',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. A relação é INVERSA. Amplitude AMPLA (muitos subordinados por gestor) gera MENOS níveis hierárquicos — estrutura achatada. Amplitude ESTREITA (poucos subordinados) gera MAIS níveis — estrutura verticalizada. Quanto maior a amplitude, mais "chata" a estrutura.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela inverte a relação. Se um gestor supervisiona muitos subordinados (amplitude ampla), ele precisa de menos camadas hierárquicas para alcançar a base. Se super visiona poucos (amplitude estreita), a organização tende a ter mais camadas — cada gestor tem um "alcance" menor. A regra é: amplitude e número de níveis são INVERSAMENTE proporcionais.'
          },
          conceitoCobrado: 'Relação inversa entre amplitude de controle e número de níveis hierárquicos',
          pegadinha: 'A intuição engana: "se cada gestor tem mais subordinados, preciso de mais chefes" — não. Amplitude ampla = menos chefes = menos níveis. A palavra "maior" no início e no final da frase tenta sugerir uma relação direta, quando é inversa.',
          comoApareceEmConcurso: 'Bancas usam a relação inversa para testar se o candidato internalizou o conceito. A afirmação "amplitude maior, mais níveis" é quase sempre FALSA. A dica é desenhar mentalmente: 1 chefe com 20 subordinados → 2 níveis; 1 chefe com 2 subordinados (cada um com 2…) → 4-5 níveis.',
          exemploInedito: {
            contexto: 'Uma startup tem 1 CEO e 20 funcionários diretos — 2 níveis hierárquicos. Uma rede bancária tem CEO, 5 diretores, 25 gerentes regionais, 125 gerentes locais e 625 caixas — 5 níveis hierárquicos.',
            aplicacao: 'A startup tem amplitude ampla (20 por gestor) e poucos níveis (2). O banco tem amplitude estreita (5 a 5) e muitos níveis (5). Confirma a relação inversa: quanto maior a amplitude, menos níveis; quanto menor a amplitude, mais níveis.',
            desafio: 'Uma organização pública que quer "achatar" a estrutura deve aumentar ou diminuir a amplitude de controle? Que consequência isso traz para a sobrecarga dos gestores?'
          }
        },
        tags: ['amplitude de controle', 'níveis hierárquicos']
      },

      /* ---------- Item 3 — Formato 1 (V/F sequência) — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-04-03',
        tipo: 'multipla_escolha',
        formato: 'vf_sequencia',
        dificuldade: 2,
        subtopico: 'Centralização, descentralização, delegação e concentração/desconcentração',
        pergunta: 'Sobre os conceitos de centralização, descentralização, delegação e concentração/desconcentração, analise as afirmações e assinale a sequência correta:\n\nI. Descentralização é ato pontual de transferência de autoridade para uma tarefa específica.\nII. Centralização concentra decisões na cúpula; descentralização as distribui pela organização, aproximando a decisão do problema.\nIII. Concentração e desconcentração referem-se à distribuição interna de competências entre órgãos da mesma pessoa jurídica, sem criar nova entidade.\nIV. A escolha entre centralizar e descentralizar é absoluta: a descentralização é sempre superior à centralização em qualquer contexto.',
        alternativas: [
          { id: 'A', texto: 'V – V – F – F.' },
          { id: 'B', texto: 'F – V – V – F.' },
          { id: 'C', texto: 'V – F – V – F.' },
          { id: 'D', texto: 'F – V – F – V.' },
          { id: 'E', texto: 'F – F – V – V.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta: I (F), II (V), III (V), IV (F). A I é falsa (descreve delegação, não descentralização). A IV é falsa (não há superioridade absoluta — depende do contexto).',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta: I (F), II (V), III (V), IV (F). A afirmação I é falsa — descreve a DELEGAÇÃO (ato pontual), não a descentralização (que é estrutural e permanente). A II é verdadeira — centralização concentra; descentralização distribui. A III é verdadeira — concentração/desconcentração tratam da distribuição interna entre órgãos da mesma pessoa jurídica. A IV é falsa — não há superioridade absoluta; centralização e descentralização são trade-offs.',
          incorretas: {
            A: 'A alternativa erra ao marcar I como verdadeira. A descentralização NÃO é ato pontual — é estrutural e permanente. O ato pontual é a delegação. Erra também ao marcar III como falsa — concentração/desconcentração tratam, sim, da distribuição interna entre órgãos da mesma pessoa jurídica.',
            C: 'A alternativa erra ao marcar I como verdadeira (descentralização não é ato pontual) e ao marcar III como verdadeira (correto). Erra ainda ao marcar II como falsa (ela é verdadeira).',
            D: 'A alternativa erra ao marcar IV como verdadeira. Não há superioridade absoluta da descentralização — depende do contexto, do tipo de decisão e da capacitação dos subordinados. Também erra ao marcar III como falsa (ela é verdadeira).',
            E: 'A alternativa erra ao marcar II como falsa (ela é verdadeira) e IV como verdadeira (ela é falsa). O erro central é aceitar a ideia de que a descentralização é "sempre superior" — o que contraria a lógica de trade-off.'
          },
          conceitoCobrado: 'Distinção entre centralização, descentralização, delegação e concentração/desconcentração',
          pegadinha: 'A afirmação I confunde DELEGAÇÃO (ato pontual) com DESCENTRALIZAÇÃO (estrutural). A IV explora a crença de que "descentralizar é sempre bom" — mas não há superioridade absoluta: centralização dá mais controle; descentralização, mais agilidade. Depende do contexto.',
          comoApareceEmConcurso: 'O formato V/F sequência é usado para testar 4 pares de conceitos em uma única questão. A banca costuma colocar 1-2 afirmações que invertem pares (delegação x descentralização, concentração x descentralização) e 1 afirmação com juízo absoluto ("sempre", "nunca") — que quase sempre é falsa.',
          exemploInedito: {
            contexto: 'Em uma prefeitura: (1) o prefeito delega ao secretário a assinatura de um contrato específico; (2) a prefeitura cria quatro regionais administrativas para aproximar as decisões locais; (3) a secretaria divide suas atribuições entre coordenações internas sem criar nova pessoa jurídica.',
            aplicacao: '(1) é DELEGAÇÃO (ato pontual); (2) é DESCENTRALIZAÇÃO (estrutural, aproxima decisão); (3) é DESCONCENTRAÇÃO (divisão interna, mesma pessoa jurídica). Não há hierarquia de valor entre os conceitos — cada um serve a um propósito.',
            desafio: 'Por que não faz sentido dizer que "descentralização é sempre melhor que centralização"? Dê um exemplo de situação em que a centralização é a escolha mais adequada.'
          }
        },
        tags: ['centralização', 'descentralização', 'delegação', 'concentração', 'vf sequência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-04-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Delegação x responsabilidade',
        pergunta: 'A delegação transfere ao subordinado a autoridade E a responsabilidade final pela tarefa, de modo que o superior deixa de responder pelo resultado.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. A delegação transfere a AUTORIDADE para executar, mas a RESPONSABILIDADE FINAL permanece com quem delegou. O superior continua respondendo pelo resultado.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. A delegação transfere a AUTORIDADE (para executar a tarefa), mas a RESPONSABILIDADE FINAL permanece com quem delegou. O superior continua respondendo pelo resultado perante a organização e deve acompanhar a execução. É o princípio da paridade autoridade-responsabilidade.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela duplica a transferência: diz que a delegação transfere autoridade E responsabilidade final. O correto é que transfere APENAS a autoridade — a responsabilidade final fica com o superior. Se o subordinado erra, ambos podem responder: o subordinado pela execução, o superior pela escolha e pelo acompanhamento.'
          },
          conceitoCobrado: 'Delegação — transferência de autoridade sem transferência de responsabilidade final',
          pegadinha: 'A palavra "E" em "autoridade E responsabilidade" é a armadilha. Delega-se autoridade, não responsabilidade final. Quem delega continua responsável. É o erro mais recorrente do módulo.',
          comoApareceEmConcurso: 'Bancas usam essa distorção para testar se o candidato domina o princípio. A afirmação "delegação transfere responsabilidade" é quase sempre FALSA. A dica é lembrar: "delega-se o fazer, não o responder".',
          exemploInedito: {
            contexto: 'Um coordenador delega ao estagiário a conferência de documentos de um processo. O estagiário confere errado e o processo é indeferido por vício formal. O cidadão reclama.',
            aplicacao: 'O estagiário responde pela execução (erro na conferência), mas o coordenador responde pela escolha (delegou a tarefa a quem não tinha competência) e pelo acompanhamento (não supervisionou). A responsabilidade final é do coordenador, não do estagiário. A delegação não o eximiu.',
            desafio: 'Em uma repartição pública, se um diretor delega a um servidor a elaboração de um parecer e o parecer contém erro jurídico, quem responde perante a Corregedoria? Apenas o servidor? Ou também o diretor? Justifique.'
          }
        },
        tags: ['delegação', 'responsabilidade']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-04-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Identificação de estrutura organizacional em cenário',
        pergunta: 'Uma empresa pública implanta uma estrutura em que cada engenheiro permanece vinculado à sua gerência funcional (Obras, TI, Operações), mas, simultaneamente, é alocado em um projeto transversal (digitalização do porto), respondendo a dois gestores: o gerente funcional da sua área de origem e o gerente do projeto. A estrutura resultante é:',
        alternativas: [
          { id: 'A', texto: 'linear, pois cada subordinado tem um único chefe, com comando único.' },
          { id: 'B', texto: 'funcional, pois cada subordinado responde a múltiplos chefes especializados, sem dimensão de projeto.' },
          { id: 'C', texto: 'matricial, pois combina a dimensão funcional com a dimensão de projeto, gerando dupla subordinação.' },
          { id: 'D', texto: 'em rede, pois elimina a hierarquia formal e organiza-se por projetos autônomos.' },
          { id: 'E', texto: 'linha-staff, pois a assessoria jurídica recomenda, mas não decide, e a linha decide.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. A estrutura MATRICIAL combina a dimensão funcional (gerente da área) com a dimensão de projeto (gerente do projeto), gerando dupla subordinação e risco de conflito de ordens.',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. A estrutura MATRICIAL combina a dimensão funcional (gerente da área de origem) com a dimensão de projeto (gerente do projeto transversal), gerando DUPLA SUBORDINAÇÃO. O principal risco é o CONFLITO DE ORDENS entre os dois gestores, exigindo coordenação clara.',
          incorretas: {
            A: 'A alternativa descreve a estrutura LINEAR — comando único, cada subordinado responde a um chefe. É o oposto do cenário: aqui cada engenheiro responde a DOIS gestores (funcional e de projeto). A linear não admite dupla subordinação.',
            B: 'A alternativa descreve a estrutura FUNCIONAL — múltiplos chefes especializados, mas SEM a dimensão de projeto. O cenário inclui explicitamente a dimensão de projeto (digitalização do porto), o que caracteriza a matricial. A funcional pura não teria o gerente de projeto.',
            D: 'A alternativa descreve a estrutura EM REDE — sem hierarquia formal, organizada por projetos autônomos. O cenário mantém a hierarquia funcional (gerência de Obras, TI, Operações) e acrescenta a dimensão de projeto. Não há eliminação da hierarquia.',
            E: 'A alternativa descreve a estrutura LINHA-STAFF — assessoria que recomenda, sem autoridade formal, e linha que decide. O cenário não descreve assessoria: descreve dois gestores com autoridade sobre o mesmo subordinado. É a matricial, não a linha-staff.'
          },
          conceitoCobrado: 'Estrutura matricial — dupla subordinação, combinação entre dimensão funcional e de projeto',
          pegadinha: 'A banca descreve o cenário sem dizer o nome "matricial" — o candidato precisa identificar pela característica (dupla subordinação entre funcional e projeto). A confusão mais comum é com a funcional (que também tem múltiplos chefes, mas sem a dimensão de projeto) ou com a linha-staff (que tem assessoria, não dupla chefia).',
          comoApareceEmConcurso: 'Cenários aplicados são o padrão para testar estruturas organizacionais. A palavra-chave é "dupla subordinação" — se aparece, é matricial; se é "comando único", é linear; se é "múltiplos chefes especializados, sem projeto", é funcional.',
          exemploInedito: {
            contexto: 'Um instituto federal aloca professores-pesquisadores em seus departamentos de origem (Matemática, Física) e, simultaneamente, em projetos de pesquisa interdisciplinares. Cada professor responde ao chefe do departamento e ao coordenador do projeto.',
            aplicacao: 'Também é estrutura matricial: dupla subordinação (departamento + projeto). O conflito de ordens pode ocorrer (ex.: o coordenador do projeto exige dedicação integral, enquanto o chefe do departamento exige aulas). Exige coordenação clara.',
            desafio: 'Que mecanismos um gestor pode adotar para reduzir o conflito de ordens em uma estrutura matricial? Pense em dois ou três.'
          }
        },
        tags: ['estrutura matricial', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 2 (I, II, III) — Dificuldade 3 ---------- */
      {
        id: 'D-ADM-04-06',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 3,
        subtopico: 'Departamentalização — critérios de agrupamento',
        pergunta: 'Sobre os critérios de departamentalização, analise as afirmações a seguir:\n\nI. Agrupar atividades por perfil do público atendido (crianças, adultos, idosos) é departamentalização por cliente.\nII. Agrupar atividades por localização geográfica (regionais Norte, Sul, Leste, Oeste) é departamentalização geográfica.\nIII. Agrupar atividades por etapas do processo produtivo (recebimento, triagem, análise, decisão) é departamentalização funcional.\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas I e II.' },
          { id: 'D', texto: 'Apenas II e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. I e II são verdadeiras; III é falsa (agrupar por etapas do processo é departamentalização POR PROCESSO, não funcional).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. A afirmação I está certa: agrupar por perfil do público é departamentalização por CLIENTE. A II também está certa: agrupar por localização é departamentalização GEOGRÁFICA. A III está INCORRETA: agrupar por etapas do processo produtivo é departamentalização POR PROCESSO, não funcional. A funcional agruparia por função desempenhada (compras, vendas, RH), não por etapas do processo.',
          incorretas: {
            A: 'A afirmação I está correta, mas a II também. Agrupar por localização geográfica é, sim, departamentalização geográfica. Excluir a II é negar um critério clássico.',
            B: 'A afirmação II está correta, mas a I também. Agrupar por perfil do público é departamentalização por cliente — critério clássico. Excluir a I é negar outro critério clássico.',
            D: 'A afirmação III é falsa — agrupar por etapas do processo é departamentalização POR PROCESSO, não funcional. Incluir a III como correta é o erro central desta alternativa. A II está correta, mas a III não.',
            E: 'Não é possível aceitar as três. A afirmação III confunde departamentalização por PROCESSO com departamentalização FUNCIONAL. A funcional agrupa por função (compras, vendas, RH); a por processo agrupa por etapas (recebimento, triagem, análise). Incluir a III é o que torna a alternativa errada.'
          },
          conceitoCobrado: 'Critérios de departamentalização: por cliente, geográfica, funcional e por processo',
          pegadinha: 'A confusão mais comum é entre departamentalização FUNCIONAL (por função: compras, vendas, RH) e POR PROCESSO (por etapas: recebimento, triagem, análise). A afirmação III usa "etapas do processo produtivo" e chama de funcional — erro clássico.',
          comoApareceEmConcurso: 'Bancas testam a distinção entre critérios de departamentalização com afirmações que misturam exemplos corretos e um exemplo trocado. A estratégia é colocar 2 afirmações verdadeiras e 1 falsa em ponto-chave — geralmente a falsa é a que troca funcional por processo (ou por cliente).',
          exemploInedito: {
            contexto: 'Um hospital público organiza suas diretorias de quatro formas possíveis: (a) por especialidade (clínica médica, cirurgia, pediatria) — funcional; (b) por perfil do paciente (infantil, adulto, idoso) — por cliente; (c) por localização (unidade centro, unidade norte) — geográfica; (d) por etapa do atendimento (recepção, triagem, consulta, exames) — por processo.',
            aplicacao: 'Cada critério tem uma lógica. O hospital pode combinar critérios (matricial) ou escolher um principal. A confusão da afirmação III está em chamar "funcional" o que é "por processo" — são critérios distintos, ainda que ambos organizem o fluxo de trabalho.',
            desafio: 'Se você fosse gestor de um hospital público, qual critério de departamentalização escolheria como principal? Justifique considerando o tipo de atividade e o público atendido.'
          }
        },
        tags: ['departamentalização', 'cliente', 'geográfica', 'funcional', 'processo', 'afirmações romanas']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-ADM-04-07',
        tipo: 'autoavaliacao',
        subtopico: 'Distinções fundamentais da função organização',
        pergunta: 'Sem consultar, você consegue diferenciar centralização x descentralização, delegação x descentralização, concentração x desconcentração, amplitude de controle estreita x ampla e os principais tipos de estrutura (linear, funcional, linha-staff e matricial)?',
        resposta: 'CENTRALIZAÇÃO x DESCENTRALIZAÇÃO: onde a decisão fica — cúpula x distribuída. DELEGAÇÃO x DESCENTRALIZAÇÃO: ato pontual de transferir autoridade (delegação) x transferência estrutural e permanente (descentralização); a delegação mantém a responsabilidade final com o superior. CONCENTRAÇÃO x DESCONCENTRAÇÃO: um único órgão executa (concentração) x divisão entre órgãos da MESMA pessoa jurídica (desconcentração — sem nova personalidade). AMPLITUDE ESTREITA x AMPLA: poucos subordinados por gestor → mais níveis hierárquicos (verticalizada) x muitos subordinados → menos níveis (achatada). ESTRUTURAS: linear (comando único, rápida, mas rígida); funcional (múltiplos chefes especializados, sem projeto); linha-staff (assessoria recomenda, linha decide); matricial (dupla subordinação — funcional + projeto, com risco de conflito de ordens).'
      }

    ]
  }

};
