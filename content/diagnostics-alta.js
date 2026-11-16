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

};
