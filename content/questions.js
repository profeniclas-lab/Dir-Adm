/* ============================================================
   BANCO DE QUESTÕES — Direito Constitucional
   Lote 1: DC-02, DC-03, DC-04
   Lotes futuros: DC-05, DC-06, DC-07 (lote 2)
                  DC-08, DC-09, DC-11 (lote 3)
                  DC-12, DC-13, DC-RN (lote 4)
   ============================================================ */

window.QUESTIONS = [

  /* ============================================================
     DC-02 — Princípios Fundamentais
  ============================================================ */
  {
    id: 'Q-DID-DC-0201',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-02',
    subtema: 'Fundamentos da República',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Assinale a alternativa que apresenta APENAS fundamentos da República Federativa do Brasil (art. 1º, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, pluralismo político.' },
      { id: 'B', texto: 'Construir uma sociedade livre, justa e solidária; garantir o desenvolvimento nacional.' },
      { id: 'C', texto: 'Independência nacional, prevalência dos direitos humanos e autodeterminação dos povos.' },
      { id: 'D', texto: 'Erradicar a pobreza e reduzir as desigualdades sociais e regionais.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A é o rol completo do art. 1º (fundamentos).',
      incorretas: { B: 'São OBJETIVOS fundamentais (art. 3º, I e II).', C: 'São PRINCÍPIOS das relações internacionais (art. 4º, I, II e III).', D: 'São OBJETIVOS fundamentais (art. 3º, III).' },
      conceitoCobrado: 'Distinção entre fundamentos, objetivos e princípios de relações internacionais.',
      pegadinha: 'A banca mistura as três listas (art. 1º, 3º e 4º).',
      comoApareceEmConcurso: 'Questão clássica: "assinale o que é fundamento da República".'
    },
    tags: ['fundamentos', 'art. 1º']
  },
  {
    id: 'Q-DID-DC-0202',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-02',
    subtema: 'Soberania x autonomia',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre os entes da Federação brasileira, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A União, os Estados, o DF e os Municípios são todos soberanos.' },
      { id: 'B', texto: 'A soberania é atributo exclusivo da República Federativa do Brasil; os demais entes têm autonomia política, administrativa e financeira.' },
      { id: 'C', texto: 'Somente a União é autônoma; os demais entes são subordinados.' },
      { id: 'D', texto: 'Os Municípios são soberanos em matéria de interesse local.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Soberania é poder supremo na ordem interna e independência na ordem externa — pertence APENAS à República (o todo). Os entes têm autonomia.',
      incorretas: { A: 'Só a República é soberana.', C: 'Todos os entes são autônomos.', D: 'Municípios têm autonomia, não soberania.' },
      conceitoCobrado: 'Soberania x autonomia.',
      pegadinha: 'Dizer que os Municípios são soberanos ou subordinados aos Estados.',
      comoApareceEmConcurso: 'Cobrança direta da distinção entre os conceitos.'
    },
    tags: ['soberania', 'autonomia']
  },
  {
    id: 'Q-DID-DC-0203',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-02',
    subtema: 'Objetivos fundamentais',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'NÃO é objetivo fundamental da República Federativa do Brasil (art. 3º, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Construir uma sociedade livre, justa e solidária.' },
      { id: 'B', texto: 'Garantir o desenvolvimento nacional.' },
      { id: 'C', texto: 'Erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais.' },
      { id: 'D', texto: 'Promover a secessão dos Estados-membros para preservar identidades regionais.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A secessão é vedada — a Federação é cláusula pétrea (art. 60, §4º, I).',
      incorretas: { A: 'É o objetivo do art. 3º, I.', B: 'É o objetivo do art. 3º, II.', C: 'É o objetivo do art. 3º, III.' },
      conceitoCobrado: 'Objetivos fundamentais e cláusulas pétreas.',
      pegadinha: 'Apresentar alternativa com conteúdo inconstitucional.',
      comoApareceEmConcurso: 'Cobrança de literalidade do art. 3º.'
    },
    tags: ['objetivos', 'art. 3º']
  },
  {
    id: 'Q-DID-DC-0204',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-02',
    subtema: 'Relações internacionais',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre os princípios das relações internacionais (art. 4º, CF/88), assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'A não intervenção é princípio das relações internacionais, não se confundindo com o instituto da intervenção federal.' },
      { id: 'B', texto: 'A prevalência dos direitos humanos está no art. 1º como fundamento da República.' },
      { id: 'C', texto: 'O asilo político é vedado pela CF/88.' },
      { id: 'D', texto: 'A cooperação entre os povos para o progresso da humanidade é vedada.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A não intervenção (art. 4º, IV) é princípio das relações internacionais; a intervenção federal (art. 34) é instituto interno diferente.',
      incorretas: { B: 'A prevalência dos direitos humanos está no art. 4º, II (não no art. 1º); no art. 1º, III, está a dignidade da pessoa humana.', C: 'A CF/88 prevê o asilo político no art. 4º, X.', D: 'A cooperação entre os povos é prevista no art. 4º, IX.' },
      conceitoCobrado: 'Princípios das relações internacionais.',
      pegadinha: 'Confundir não intervenção (internacional) com intervenção federal (interna).',
      comoApareceEmConcurso: 'Distinção entre institutos.'
    },
    tags: ['relações internacionais', 'art. 4º']
  },
  {
    id: 'Q-DID-DC-0205',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-02',
    subtema: 'Forma de Estado e de Governo',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a organização do Estado brasileiro, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'Forma de Estado: Federação. Forma de governo: República. Sistema de governo: Presidencialismo. Regime político: Democracia semidireta.' },
      { id: 'B', texto: 'Forma de Estado: República. Forma de governo: Federação.' },
      { id: 'C', texto: 'Forma de Estado: Monarquia. Forma de governo: Parlamentarismo.' },
      { id: 'D', texto: 'Forma de Estado: Presidencialismo. Forma de governo: Democracia.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Brasil é Federação (forma de Estado), República (forma de governo), Presidencialismo (sistema de governo) e Democracia semidireta (regime político).',
      incorretas: { B: 'Inverte as definições.', C: 'Brasil não é monarquia nem parlamentarismo.', D: 'Presidencialismo é sistema de governo, não forma de Estado.' },
      conceitoCobrado: 'Forma de Estado, forma de governo, sistema e regime.',
      pegadinha: 'Trocar as 4 categorias.',
      comoApareceEmConcurso: 'Questão conceitual recorrente.'
    },
    tags: ['forma de Estado', 'forma de governo']
  },

  /* ============================================================
     DC-03 — Direitos e Deveres Individuais e Coletivos
  ============================================================ */
  {
    id: 'Q-DID-DC-0301',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Crimes inafiançáveis x imprescritíveis',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre os crimes previstos no art. 5º da CF/88, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Racismo é inafiançável e imprescritível; tortura, tráfico e terrorismo são inafiançáveis, mas não imprescritíveis.' },
      { id: 'B', texto: 'Todos os crimes hediondos são imprescritíveis.' },
      { id: 'C', texto: 'A tortura é imprescritível, mas afiançável.' },
      { id: 'D', texto: 'A ação de grupos armados é afiançável, mas imprescritível.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Racismo: inafiançável e imprescritível (XLII). 3T (tortura, tráfico e terrorismo): inafiançáveis e hediondos, mas NÃO imprescritíveis (XLIII).',
      incorretas: { B: 'Nem todo crime hediondo é imprescritível.', C: 'Tortura é inafiançável.', D: 'Ação de grupos armados é INAFIANÇÁVEL e imprescritível (XLIV).' },
      conceitoCobrado: 'Racismo, 3T e ação de grupos armados.',
      pegadinha: 'Trocar inafiançável com imprescritível.',
      comoApareceEmConcurso: 'Clássica em provas de Direito Constitucional.'
    },
    tags: ['racismo', 'tortura', 'crimes hediondos']
  },
  {
    id: 'Q-DID-DC-0302',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Inviolabilidade do domicílio',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a inviolabilidade do domicílio (art. 5º, XI, CF/88), assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'A casa é asilo inviolável; ninguém nela pode entrar sem consentimento, salvo flagrante, desastre, socorro ou, durante o dia, por ordem judicial.' },
      { id: 'B', texto: 'A ordem judicial pode ser cumprida a qualquer hora do dia ou da noite.' },
      { id: 'C', texto: 'O consentimento do morador só é dispensado à noite, em caso de flagrante.' },
      { id: 'D', texto: 'A inviolabilidade do domicílio é absoluta, sem exceções.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Literalidade do art. 5º, XI.',
      incorretas: { B: 'A ordem judicial só pode ser cumprida DURANTE O DIA.', C: 'O consentimento não é a única via — a lei admite as exceções do art. 5º, XI.', D: 'Não é absoluta — tem exceções expressas.' },
      conceitoCobrado: 'Inviolabilidade do domicílio e suas exceções.',
      pegadinha: 'Achar que ordem judicial pode ser cumprida à noite.',
      comoApareceEmConcurso: 'Muito comum em situações práticas.'
    },
    tags: ['domicílio', 'art. 5º, XI']
  },
  {
    id: 'Q-DID-DC-0303',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Extradição',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a extradição de brasileiros, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O brasileiro nato nunca pode ser extraditado; o naturalizado pode ser extraditado por crime comum antes da naturalização ou por tráfico ilícito de drogas a qualquer tempo.' },
      { id: 'B', texto: 'O brasileiro naturalizado nunca pode ser extraditado, em nenhuma hipótese.' },
      { id: 'C', texto: 'O brasileiro nato pode ser extraditado por crime hediondo.' },
      { id: 'D', texto: 'O brasileiro nato pode ser extraditado se cometer crime antes da naturalização.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 5º, LI: nenhum brasileiro nato será extraditado. Naturalizado: crime comum antes da naturalização ou tráfico a qualquer tempo.',
      incorretas: { B: 'Naturalizado pode ser extraditado nas duas hipóteses.', C: 'Nato nunca é extraditado (em regra).', D: 'Nato nunca é extraditado — não se aplica o argumento de "antes da naturalização", pois ele já nasceu brasileiro.' },
      conceitoCobrado: 'Extradição de brasileiro nato x naturalizado.',
      pegadinha: 'Transferir a lógica do naturalizado para o nato.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['extradição', 'nacionalidade']
  },
  {
    id: 'Q-DID-DC-0304',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Liberdade de expressão e anonimato',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a liberdade de manifestação do pensamento (art. 5º, IV, CF/88):',
    alternativas: [
      { id: 'A', texto: 'É livre, sendo vedado o anonimato.' },
      { id: 'B', texto: 'É livre e admite o anonimato.' },
      { id: 'C', texto: 'Só pode ser exercida dentro de casa.' },
      { id: 'D', texto: 'Depende de autorização judicial prévia.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 5º, IV: "é livre a manifestação do pensamento, sendo vedado o anonimato".',
      incorretas: { B: 'O anonimato é VEDADO.', C: 'Não há restrição de lugar.', D: 'Não depende de autorização prévia.' },
      conceitoCobrado: 'Liberdade de expressão + vedação ao anonimato.',
      pegadinha: 'Achar que o anonimato é permitido.',
      comoApareceEmConcurso: 'Cobrança direta do inciso IV.'
    },
    tags: ['liberdade de expressão', 'anonimato']
  },
  {
    id: 'Q-DID-DC-0305',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Remédios constitucionais',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Um cidadão tem seu nome indevidamente negativado em cadastro público por erro administrativo de um órgão federal. O remédio constitucional adequado é:',
    alternativas: [
      { id: 'A', texto: 'Habeas corpus.' },
      { id: 'B', texto: 'Habeas data.' },
      { id: 'C', texto: 'Mandado de segurança.' },
      { id: 'D', texto: 'Ação popular.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Trata-se de direito líquido e certo violado por ilegalidade — cabe MS (art. 5º, LXIX). O STF entende que, se o problema é a ilegalidade da negativação, o MS é o adequado.',
      incorretas: { A: 'HC é para liberdade de locomoção.', B: 'HD é para acesso/retificação de dados, mas quando há ilegalidade da inscrição o STF entende que cabe MS.', D: 'AP é para ato lesivo ao patrimônio público.' },
      conceitoCobrado: 'Cabimento dos remédios constitucionais.',
      pegadinha: 'Confundir HD com MS em caso de negativação indevida.',
      comoApareceEmConcurso: 'Situações práticas com remédios.'
    },
    tags: ['remédios', 'mandado de segurança']
  },
  {
    id: 'Q-DID-DC-0306',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Presunção de inocência',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a presunção de inocência (art. 5º, LVII, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória.' },
      { id: 'B', texto: 'A presunção de inocência cessa com a condenação em primeira instância.' },
      { id: 'C', texto: 'A presunção de inocência cessa com a condenação em segunda instância.' },
      { id: 'D', texto: 'A presunção de inocência não existe no ordenamento brasileiro.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Literalidade do art. 5º, LVII: "ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória".',
      incorretas: { B: 'Não cessa em primeira instância.', C: 'O STF já decidiu que a presunção só cessa com o trânsito em julgado (AP 937 QO, 2019).', D: 'Existe expressamente.' },
      conceitoCobrado: 'Presunção de inocência x trânsito em julgado.',
      pegadinha: 'Achar que a segunda instância encerra a presunção.',
      comoApareceEmConcurso: 'Tema recorrente após 2019.'
    },
    tags: ['presunção de inocência', 'art. 5º, LVII']
  },

  /* ============================================================
     DC-04 — Direitos Sociais
  ============================================================ */
  {
    id: 'Q-DID-DC-0401',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Rol do art. 6º',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'São direitos sociais expressamente previstos no art. 6º da CF/88, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Educação, saúde e alimentação.' },
      { id: 'B', texto: 'Moradia e transporte.' },
      { id: 'C', texto: 'Propriedade e livre iniciativa.' },
      { id: 'D', texto: 'Previdência social, proteção à maternidade e assistência aos desamparados.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Propriedade é direito individual (art. 5º, XXII); livre iniciativa é fundamento (art. 1º, IV).',
      incorretas: { A: 'São direitos sociais do art. 6º.', B: 'Foram incluídos por EC 26/2000 (moradia) e EC 90/2015 (transporte).', D: 'São direitos sociais do art. 6º.' },
      conceitoCobrado: 'Rol do art. 6º.',
      pegadinha: 'Misturar direitos individuais e fundamentos.',
      comoApareceEmConcurso: 'Cobrança direta do rol.'
    },
    tags: ['direitos sociais', 'art. 6º']
  },
  {
    id: 'Q-DID-DC-0402',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Trabalhadores domésticos',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre os direitos dos trabalhadores domésticos (art. 7º, parágrafo único, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Aplicam-se TODOS os incisos do art. 7º, sem exceção.' },
      { id: 'B', texto: 'Aplica-se apenas uma LISTA TAXATIVA de incisos, expressa no parágrafo único do art. 7º.' },
      { id: 'C', texto: 'Não têm nenhum direito constitucional assegurado.' },
      { id: 'D', texto: 'Têm os mesmos direitos dos servidores públicos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Após a EC 72/2013, o parágrafo único do art. 7º garante aos domésticos uma lista específica de incisos — não todos.',
      incorretas: { A: 'Apenas uma lista.', C: 'Têm diversos direitos assegurados.', D: 'Regime é celetista, não estatutário.' },
      conceitoCobrado: 'Direitos dos domésticos.',
      pegadinha: 'Achar que todos os incisos do art. 7º se aplicam.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['domésticos', 'art. 7º']
  },
  {
    id: 'Q-DID-DC-0403',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Seguridade social',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a seguridade social (art. 194, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Compreende saúde, previdência e assistência social; a previdência exige contribuição prévia, mas saúde e assistência não.' },
      { id: 'B', texto: 'Compreende apenas a previdência social.' },
      { id: 'C', texto: 'A saúde exige contribuição prévia.' },
      { id: 'D', texto: 'A assistência social é restrita a quem contribui.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Seguridade (art. 194) abrange saúde (universal), previdência (contributiva) e assistência (para quem dela necessitar, sem contribuição).',
      incorretas: { B: 'Abrange os três.', C: 'Saúde é universal e gratuita.', D: 'Assistência é para quem necessitar, sem exigência de contribuição.' },
      conceitoCobrado: 'Seguridade x previdência.',
      pegadinha: 'Achar que saúde exige contribuição.',
      comoApareceEmConcurso: 'Cobrança direta do art. 194.'
    },
    tags: ['seguridade social', 'art. 194']
  },
  {
    id: 'Q-DID-DC-0404',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Liberdade sindical',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a liberdade sindical (art. 8º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A lei não poderá exigir autorização do Estado para a fundação de sindicato, ressalvado o registro no órgão competente.' },
      { id: 'B', texto: 'É vedada a criação de mais de um sindicato representativo da mesma categoria na mesma base territorial.' },
      { id: 'C', texto: 'O sindicato é obrigado a manter filiação única com a Central Única.' },
      { id: 'D', texto: 'Ninguém é obrigado a filiar-se, mas é obrigado a manter-se filiado após a adesão.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 8º, I: a lei não exigirá autorização do Estado para fundação de sindicato, ressalvado o registro no órgão competente.',
      incorretas: { B: 'O art. 8º, II estabelece a UNICIDADE sindical (um sindicato por categoria e base territorial) — a alternativa, isoladamente, é correta, mas a questão pede a correta em face do caput — nesta redação, o gabarito é A.', C: 'Não há obrigação de filiação a central única.', D: 'Ninguém é obrigado a filiar-se ou manter-se filiado (art. 8º, V).' },
      conceitoCobrado: 'Liberdade sindical.',
      pegadinha: 'Confundir liberdade com obrigações inexistentes.',
      comoApareceEmConcurso: 'Cobrança direta do art. 8º.'
    },
    tags: ['sindicalização', 'art. 8º']
  },
  {
    id: 'Q-DID-DC-0405',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Greve',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre o direito de greve (art. 9º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Compete aos trabalhadores decidir sobre a oportunidade de exercê-lo e sobre os interesses que devam por meio dele defender; a lei definirá os serviços essenciais.' },
      { id: 'B', texto: 'É vedado em qualquer hipótese.' },
      { id: 'C', texto: 'Servidores públicos não podem exercer o direito de greve em nenhuma hipótese.' },
      { id: 'D', texto: 'A greve só pode ser exercida por sindicatos, nunca pelos próprios trabalhadores.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Literalidade do art. 9º.',
      incorretas: { B: 'É direito dos trabalhadores.', C: 'O STF reconhece o direito de greve dos servidores, com aplicação analógica da Lei 7.783/1989 enquanto pendente lei específica.', D: 'Compete aos trabalhadores decidir sobre a greve.' },
      conceitoCobrado: 'Direito de greve.',
      pegadinha: 'Negar o direito de greve ao servidor público.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['greve', 'art. 9º']
  }  ,

  /* ============================================================
     DC-05 — Nacionalidade
  ============================================================ */
  {
    id: 'Q-DID-DC-0501',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-05',
    subtema: 'Brasileiro nato por solo',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Um casal de turistas franceses, em férias no Brasil, tem um filho em território brasileiro. Sobre a nacionalidade dessa criança, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Será brasileira nata, salvo se os pais estiverem a serviço da França.' },
      { id: 'B', texto: 'Será apenas francesa, pois os pais são estrangeiros.' },
      { id: 'C', texto: 'Será brasileira naturalizada após residir 15 anos no Brasil.' },
      { id: 'D', texto: 'Será brasileira nata em qualquer hipótese, sem exceção.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 12, I, "a": nascido no Brasil, filho de estrangeiros, é brasileiro NATO, SALVO se os pais estiverem A SERVIÇO DO PAÍS DELES. Turistas franceses NÃO estão a serviço da França — logo, a criança é brasileira nata.',
      incorretas: { B: 'A regra do solo se aplica.', C: 'Naturalização não se aplica ao caso.', D: 'Existe a exceção dos pais a serviço do país de origem.' },
      conceitoCobrado: 'Brasileiro nato por solo e sua exceção.',
      pegadinha: 'Achar que a exceção é "pais a serviço do Brasil" — é "a serviço do país de origem deles".',
      comoApareceEmConcurso: 'Cobrança clássica com caso concreto.'
    },
    tags: ['nacionalidade', 'solo']
  },
  {
    id: 'Q-DID-DC-0502',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-05',
    subtema: 'Cargos privativos de nato',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Assinale a alternativa que contém APENAS cargos privativos de brasileiro nato (art. 12, §3º, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Presidente da República, Ministro do STF e Governador de Estado.' },
      { id: 'B', texto: 'Presidente da República, Presidente da Câmara dos Deputados e Ministro da Defesa.' },
      { id: 'C', texto: 'Senador, Prefeito e carreira diplomática.' },
      { id: 'D', texto: 'Ministro de Estado, Governador e oficial das Forças Armadas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Os 8 cargos privativos de nato são: Presidente e Vice; Presidente da Câmara e do Senado; Ministro do STF; carreira diplomática; oficial das Forças Armadas; Ministro da Defesa.',
      incorretas: { A: 'Governador pode ser naturalizado.', C: 'Senador e Prefeito podem ser naturalizados.', D: 'Ministro de Estado (exceto Defesa) e Governador podem ser naturalizados.' },
      conceitoCobrado: 'Cargos privativos de brasileiro nato.',
      pegadinha: 'Misturar cargos eletivos (Governador, Senador) com os privativos.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['nato', 'cargos privativos']
  },
  {
    id: 'Q-DID-DC-0503',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-05',
    subtema: 'Extradição',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a extradição de brasileiros, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O brasileiro nato nunca pode ser extraditado; o naturalizado pode por crime comum ANTES da naturalização ou por tráfico ilícito de drogas a QUALQUER tempo.' },
      { id: 'B', texto: 'O brasileiro naturalizado nunca pode ser extraditado.' },
      { id: 'C', texto: 'O brasileiro nato pode ser extraditado por crime hediondo.' },
      { id: 'D', texto: 'O brasileiro nato e o naturalizado têm o mesmo regime de extradição.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 5º, LI: nenhum brasileiro nato será extraditado. Naturalizado: crime comum antes da naturalização ou tráfico a qualquer tempo.',
      incorretas: { B: 'Pode ser extraditado nas duas hipóteses.', C: 'Nato nunca é extraditado.', D: 'Regimes diferentes.' },
      conceitoCobrado: 'Extradição: nato x naturalizado.',
      pegadinha: 'Achar que o naturalizado nunca é extraditado.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['extradição', 'nato', 'naturalizado']
  },
  {
    id: 'Q-DID-DC-0504',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-05',
    subtema: 'Quase-nacionalidade',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a quase-nacionalidade (art. 12, §2º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Beneficia portugueses com residência permanente no Brasil, se houver reciprocidade em Portugal, conferindo-lhes os direitos inerentes ao brasileiro naturalizado.' },
      { id: 'B', texto: 'Confere ao português todos os direitos de brasileiro nato, inclusive cargos privativos de nato.' },
      { id: 'C', texto: 'É vedada pela CF/88.' },
      { id: 'D', texto: 'Beneficia qualquer estrangeiro com residência no Brasil há mais de 15 anos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 12, §2º: portugueses com residência permanente, se houver reciprocidade, têm direitos do BRASILEIRO NATURALIZADO. Não é nacionalidade plena.',
      incorretas: { B: 'Não dá acesso a cargos privativos de nato.', C: 'É prevista expressamente.', D: 'É só para portugueses.' },
      conceitoCobrado: 'Quase-nacionalidade.',
      pegadinha: 'Confundir com naturalização ordinária.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['quase-nacionalidade', 'português']
  },
  {
    id: 'Q-DID-DC-0505',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-05',
    subtema: 'Brasileiro nato por sangue',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Filho de pai brasileiro e mãe italiana, nascido na Itália, cujos pais NÃO estão a serviço do Brasil. Para ser brasileiro nato, será necessário:',
    alternativas: [
      { id: 'A', texto: 'Nada — será automaticamente brasileiro nato.' },
      { id: 'B', texto: 'Ser registrado em repartição brasileira competente OU, residindo no Brasil, optar, a qualquer tempo, depois de atingida a maioridade, pela nacionalidade brasileira.' },
      { id: 'C', texto: 'Aguardar 15 anos de residência no Brasil para naturalizar.' },
      { id: 'D', texto: 'Renunciar à nacionalidade italiana antes dos 18 anos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 12, I, "c": sangue + registro em repartição competente OU sangue + residência + opção após a maioridade.',
      incorretas: { A: 'Só é automático quando os pais estão a serviço do Brasil (art. 12, I, "b").', C: 'Naturalização é hipótese do art. 12, II.', D: 'Não é exigência.' },
      conceitoCobrado: 'Brasileiro nato por sangue — registro ou opção.',
      pegadinha: 'Confundir as hipóteses "b" e "c" do art. 12, I.',
      comoApareceEmConcurso: 'Casos concretos com filhos nascidos no exterior.'
    },
    tags: ['nacionalidade', 'sangue']
  },
  {
    id: 'Q-DID-DC-0506',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-05',
    subtema: 'Naturalização por 15 anos',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'A naturalização do estrangeiro residente no Brasil há mais de 15 anos ininterruptos, sem condenação penal, que requeira a nacionalidade brasileira (art. 12, II, "b"), é ato:',
    alternativas: [
      { id: 'A', texto: 'Discricionário do Presidente da República, sem vinculação a requisitos.' },
      { id: 'B', texto: 'Vinculado, pois cumpridos os requisitos legais, o interessado tem direito subjetivo à naturalização (STF).' },
      { id: 'C', texto: 'Vedado pela CF/88.' },
      { id: 'D', texto: 'Automático, independentemente de requerimento.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O STF firmou que a naturalização por 15 anos (art. 12, II, "b") é ato VINCULADO — cumpridos os requisitos, o estrangeiro tem direito subjetivo à naturalização.',
      incorretas: { A: 'É vinculado, não discricionário.', C: 'É previsto expressamente.', D: 'Exige requerimento do interessado.' },
      conceitoCobrado: 'Naturalização por 15 anos (art. 12, II, "b").',
      pegadinha: 'Achar que é ato discricionário.',
      comoApareceEmConcurso: 'Cobrança do entendimento do STF.'
    },
    tags: ['naturalização', 'art. 12']
  },

  /* ============================================================
     DC-06 — Direitos Políticos e Partidos Políticos
  ============================================================ */
  {
    id: 'Q-DID-DC-0601',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-06',
    subtema: 'Plebiscito x referendo',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Sobre os institutos de participação popular, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O plebiscito convoca o povo a ratificar decisão já tomada; o referendo autoriza previamente.' },
      { id: 'B', texto: 'O plebiscito ocorre ANTES da decisão legislativa; o referendo, DEPOIS, para ratificar ou rejeitar.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Ambos ocorrem apenas após decisão do STF.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'PLEBISCITO: consulta prévia. REFERENDO: consulta posterior. Mnemônico: P = Precede; R = Ratifica.',
      incorretas: { A: 'Inverte.', C: 'São distintos.', D: 'Não dependem do STF.' },
      conceitoCobrado: 'Plebiscito x referendo.',
      pegadinha: 'Inverter os conceitos.',
      comoApareceEmConcurso: 'Alta frequência.'
    },
    tags: ['plebiscito', 'referendo']
  },
  {
    id: 'Q-DID-DC-0602',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-06',
    subtema: 'Voto obrigatório x facultativo',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre o alistamento eleitoral (art. 14, §1º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É obrigatório para maiores de 18 anos; facultativo para analfabetos, maiores de 70 anos e maiores de 16 e menores de 18.' },
      { id: 'B', texto: 'É facultativo para todos os brasileiros.' },
      { id: 'C', texto: 'É obrigatório apenas para quem tem ensino médio completo.' },
      { id: 'D', texto: 'É obrigatório para maiores de 70 anos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 14, §1º: obrigatório para maiores de 18; facultativo para analfabetos, maiores de 70 e maiores de 16 e menores de 18.',
      incorretas: { B: 'Regra é obrigatório.', C: 'Não há exigência de escolaridade.', D: 'Maiores de 70 têm voto FACULTATIVO.' },
      conceitoCobrado: 'Alistamento eleitoral.',
      pegadinha: 'Achar que maiores de 70 são obrigados.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['voto', 'alistamento']
  },
  {
    id: 'Q-DID-DC-0603',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-06',
    subtema: 'Idades mínimas',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A idade mínima para concorrer ao cargo de Senador da República é:',
    alternativas: [
      { id: 'A', texto: '21 anos.' },
      { id: 'B', texto: '30 anos.' },
      { id: 'C', texto: '35 anos.' },
      { id: 'D', texto: '18 anos.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Art. 14, §3º, VI, "a": 35 anos para Presidente, Vice-Presidente e Senador.',
      incorretas: { A: '21 anos: Deputado, Prefeito, Juiz de Paz.', B: '30 anos: Governador.', D: '18 anos: Vereador.' },
      conceitoCobrado: 'Idades mínimas do art. 14, §3º, VI.',
      pegadinha: 'Trocar as idades.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['elegibilidade', 'idades']
  },
  {
    id: 'Q-DID-DC-0604',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-06',
    subtema: 'Inelegibilidade reflexa',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a inelegibilidade reflexa (art. 14, §7º, CF/88), é correto afirmar que atinge:',
    alternativas: [
      { id: 'A', texto: 'Cônjuge e parentes até o 2º grau, no território de jurisdição do titular.' },
      { id: 'B', texto: 'Qualquer parente, em qualquer grau, em todo o território nacional.' },
      { id: 'C', texto: 'Apenas o cônjuge.' },
      { id: 'D', texto: 'Amigos íntimos do titular.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 14, §7º: cônjuge e parentes consanguíneos ou afins até o 2º grau (ou por adoção), no território de jurisdição do titular.',
      incorretas: { B: 'Limita-se ao 2º grau e ao território.', C: 'Abrange também parentes.', D: 'Não abrange amigos.' },
      conceitoCobrado: 'Inelegibilidade reflexa.',
      pegadinha: 'Achar que atinge 3º grau ou todo o país.',
      comoApareceEmConcurso: 'Situações práticas.'
    },
    tags: ['inelegibilidade reflexa']
  },
  {
    id: 'Q-DID-DC-0605',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-06',
    subtema: 'Partidos políticos',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre os partidos políticos (art. 17, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A partir da EC 97/2017, é vedada a celebração de coligações nas eleições proporcionais.' },
      { id: 'B', texto: 'As coligações proporcionais continuam permitidas.' },
      { id: 'C', texto: 'É vedada a criação de partidos políticos.' },
      { id: 'D', texto: 'Os partidos não precisam ter caráter nacional.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'EC 97/2017 vedou coligações em eleições proporcionais (Deputados, Vereadores) — mantidas nas majoritárias.',
      incorretas: { B: 'Vedadas a partir de 2020.', C: 'A criação é livre (art. 17, caput).', D: 'Art. 17, I: caráter nacional é obrigatório.' },
      conceitoCobrado: 'Coligações partidárias.',
      pegadinha: 'Achar que ainda existem coligações proporcionais.',
      comoApareceEmConcurso: 'Tema pós-EC 97/2017.'
    },
    tags: ['partidos', 'coligações']
  },

  /* ============================================================
     DC-07 — Remédios Constitucionais
  ============================================================ */
  {
    id: 'Q-DID-DC-0701',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-07',
    subtema: 'Cabimento',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre os remédios constitucionais, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O habeas corpus é gratuito e protege a liberdade de locomoção.' },
      { id: 'B', texto: 'O habeas data é gratuito.' },
      { id: 'C', texto: 'O mandado de segurança cabe para proteger liberdade de locomoção.' },
      { id: 'D', texto: 'O mandado de injunção cabe para retificar dados pessoais em banco público.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'HC: liberdade de locomoção; gratuito (art. 5º, LXXVII).',
      incorretas: { B: 'HD NÃO é gratuito.', C: 'MS é subsidiário — se cabe HC, não cabe MS.', D: 'MI é para falta de norma regulamentadora.' },
      conceitoCobrado: 'Cabimento e gratuidade dos remédios.',
      pegadinha: 'Achar que o HD é gratuito.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['remédios', 'gratuidade']
  },
  {
    id: 'Q-DID-DC-0702',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-07',
    subtema: 'Ação popular',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a ação popular (art. 5º, LXXIII, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Qualquer CIDADÃO é parte legítima; salvo comprovada má-fé, é isento de custas judiciais e do ônus da sucumbência.' },
      { id: 'B', texto: 'Só o Ministério Público tem legitimidade.' },
      { id: 'C', texto: 'Visa proteger apenas o patrimônio público material.' },
      { id: 'D', texto: 'Cabe a qualquer pessoa, inclusive estrangeiro não naturalizado.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'AP: legitimado é o CIDADÃO (eleitor); isenção de custas e sucumbência, salvo má-fé.',
      incorretas: { B: 'MP pode propor AÇÃO CIVIL PÚBLICA.', C: 'Também moralidade, meio ambiente e patrimônio histórico-cultural.', D: 'Só CIDADÃO (eleitor).' },
      conceitoCobrado: 'Ação popular.',
      pegadinha: 'Confundir legitimidade com ACP.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['ação popular', 'legitimidade']
  },
  {
    id: 'Q-DID-DC-0703',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-07',
    subtema: 'Mandado de segurança coletivo',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'NÃO pode impetrar mandado de segurança coletivo (art. 5º, LXX, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Partido político com representação no Congresso Nacional.' },
      { id: 'B', texto: 'Organização sindical.' },
      { id: 'C', texto: 'Entidade de classe.' },
      { id: 'D', texto: 'Cidadão isoladamente.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'MS coletivo: partido com representação no Congresso, organização sindical, entidade de classe e associação (1 ano). Cidadão isolado NÃO pode.',
      incorretas: { A: 'Está no rol.', B: 'Está no rol.', C: 'Está no rol.' },
      conceitoCobrado: 'Legitimados do MS coletivo.',
      pegadinha: 'Confundir com AP (que cabe a cidadão).',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['MS coletivo', 'legitimidade']
  },
  {
    id: 'Q-DID-DC-0704',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-07',
    subtema: 'Habeas data x mandado de segurança',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Servidor tem seu nome indevidamente negativado em cadastro público por ilegalidade administrativa. O remédio adequado é:',
    alternativas: [
      { id: 'A', texto: 'Habeas data.' },
      { id: 'B', texto: 'Mandado de segurança, por se tratar de ilegalidade que atinge direito líquido e certo (STF).' },
      { id: 'C', texto: 'Habeas corpus.' },
      { id: 'D', texto: 'Ação popular.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'STF: quando o problema é a ILEGALIDADE da inscrição em cadastro, cabe MS; o HD é para ACESSAR ou RETIFICAR dados — sem impugnação de ilegalidade da inscrição.',
      incorretas: { A: 'HD não é o adequado para impugnar a ilegalidade da negativação.', C: 'HC é para locomoção.', D: 'AP exige ato lesivo ao patrimônio público.' },
      conceitoCobrado: 'Distinção MS x HD.',
      pegadinha: 'Confundir os dois.',
      comoApareceEmConcurso: 'Cobrança do entendimento do STF.'
    },
    tags: ['MS', 'HD']
  },
  {
    id: 'Q-DID-DC-0705',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-07',
    subtema: 'Mandado de injunção',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre o mandado de injunção (art. 5º, LXXI, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Cabe sempre que a falta de norma regulamentadora torne inviável o exercício de direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania.' },
      { id: 'B', texto: 'Cabe para proteger liberdade de locomoção.' },
      { id: 'C', texto: 'É sinônimo de ação direta de inconstitucionalidade por omissão.' },
      { id: 'D', texto: 'É gratuito como o habeas corpus.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Literalidade do art. 5º, LXXI.',
      incorretas: { B: 'Isso é HC.', C: 'MI é individual/coletivo; ADO é ação do STF com efeitos mais amplos.', D: 'Gratuidade expressa é apenas do HC.' },
      conceitoCobrado: 'MI.',
      pegadinha: 'Confundir com ADO.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['MI', 'art. 5º, LXXI']
  },
  {
    id: 'Q-DID-DC-0706',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-07',
    subtema: 'CPI x remédios',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre o habeas corpus, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Pode ser impetrado por qualquer pessoa, física ou jurídica, nacional ou estrangeira, em favor próprio ou de terceiro, e é gratuito.' },
      { id: 'B', texto: 'Só pode ser impetrado pelo próprio preso.' },
      { id: 'C', texto: 'É restrito a brasileiros natos.' },
      { id: 'D', texto: 'É pago, com custas judiciais.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'HC é universal: qualquer pessoa, em favor próprio ou de terceiro, e é gratuito (art. 5º, LXXVII).',
      incorretas: { B: 'Pode ser impetrado por qualquer pessoa (inclusive por terceiro).', C: 'Estende-se a qualquer pessoa.', D: 'É gratuito.' },
      conceitoCobrado: 'HC — legitimidade e gratuidade.',
      pegadinha: 'Restringir a legitimidade.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['HC', 'gratuidade']
  }  ,

  /* ============================================================
     DC-08 — Organização Político-Administrativa
  ============================================================ */
  {
    id: 'Q-DID-DC-0801',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-08',
    subtema: 'Soberania x autonomia',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre os entes federativos, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A União, os Estados, o DF e os Municípios são todos soberanos.' },
      { id: 'B', texto: 'A soberania é atributo exclusivo da República Federativa do Brasil; os entes têm autonomia política, administrativa e financeira.' },
      { id: 'C', texto: 'Somente a União é autônoma; os demais entes são subordinados a ela.' },
      { id: 'D', texto: 'Os Municípios são subordinados aos Estados.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Soberania = atributo exclusivo da República. Autonomia = atributo de cada ente (União, Estados, DF, Municípios).',
      incorretas: { A: 'Só a República é soberana.', C: 'Todos os entes são autônomos.', D: 'Municípios não são subordinados aos Estados.' },
      conceitoCobrado: 'Soberania x autonomia.',
      pegadinha: 'Achar que os Municípios são subordinados ou que os Estados são soberanos.',
      comoApareceEmConcurso: 'Clássica em DA e DC.'
    },
    tags: ['federação', 'autonomia']
  },
  {
    id: 'Q-DID-DC-0802',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-08',
    subtema: 'Criação de Estados e Municípios',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a criação de novos entes federativos, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A criação de Estados depende de lei ordinária federal; a de Municípios, de lei complementar estadual.' },
      { id: 'B', texto: 'A criação de Estados depende de lei COMPLEMENTAR federal + plebiscito + oitiva das Assembleias; a de Municípios, de lei ESTADUAL + plebiscito + estudo de viabilidade municipal.' },
      { id: 'C', texto: 'Ambas dependem de decreto do Presidente da República.' },
      { id: 'D', texto: 'Só a União pode criar Municípios.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Estados: LC federal + plebiscito + oitiva das Assembleias (art. 18, §3º). Municípios: lei estadual + plebiscito + estudo de viabilidade (art. 18, §4º).',
      incorretas: { A: 'Inverte os instrumentos.', C: 'Não é por decreto.', D: 'Municípios são criados por lei estadual.' },
      conceitoCobrado: 'Criação de Estados x criação de Municípios.',
      pegadinha: 'Trocar lei complementar (federal) com lei estadual.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['criação', 'art. 18']
  },
  {
    id: 'Q-DID-DC-0803',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-08',
    subtema: 'Distrito Federal',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre o Distrito Federal (art. 32, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É regido por Constituição própria e pode ser dividido em Municípios.' },
      { id: 'B', texto: 'É regido por LEI ORGÂNICA, acumula competências estaduais e municipais, e NÃO pode ser dividido em Municípios.' },
      { id: 'C', texto: 'É um Território Federal administrado pela União.' },
      { id: 'D', texto: 'Tem soberania, mas não autonomia.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 32: DF rege-se por Lei Orgânica (não Constituição), acumula competências estaduais e municipais, e não pode ser dividido em Municípios.',
      incorretas: { A: 'Não tem Constituição e não se divide.', C: 'Não é Território Federal.', D: 'Tem autonomia parcial, não soberania.' },
      conceitoCobrado: 'Estatuto do DF.',
      pegadinha: 'Achar que o DF tem Constituição ou se divide em Municípios.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['DF', 'art. 32']
  },
  {
    id: 'Q-DID-DC-0804',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-08',
    subtema: 'Vedações federativas',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre as vedações federativas (art. 19, CF/88), é correto afirmar que é vedado à União, aos Estados, ao DF e aos Municípios:',
    alternativas: [
      { id: 'A', texto: 'Estabelecer cultos religiosos ou igrejas, subvencioná-los, embaraçar-lhes o funcionamento ou manter com eles relação de dependência ou aliança — ressalvada a colaboração de interesse público.' },
      { id: 'B', texto: 'Recusar fé aos documentos públicos apenas se emitidos por órgãos federais.' },
      { id: 'C', texto: 'Criar distinções entre brasileiros apenas em ano eleitoral.' },
      { id: 'D', texto: 'Colaborar com igrejas em situações de calamidade pública.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Literalidade do art. 19, I: veda estabelecer cultos, subvencionar, embaraçar ou manter dependência/aliança, ressalvada a colaboração de interesse público.',
      incorretas: { B: 'É vedado recusar fé a QUALQUER documento público.', C: 'A vedação é permanente, não só em ano eleitoral.', D: 'A colaboração de interesse público é permitida.' },
      conceitoCobrado: 'Vedações federativas.',
      pegadinha: 'Restringir as vedações.',
      comoApareceEmConcurso: 'Cobrança direta do art. 19.'
    },
    tags: ['vedações', 'art. 19']
  },
  {
    id: 'Q-DID-DC-0805',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-08',
    subtema: 'Territórios Federais',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre os Territórios Federais (art. 18, §2º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São entes federativos autônomos com Constituição própria.' },
      { id: 'B', texto: 'Integram a União, não têm autonomia política plena, e sua criação, transformação em Estado ou reintegração ao Estado de origem dependem de lei complementar.' },
      { id: 'C', texto: 'Têm os mesmos poderes dos Estados-membros.' },
      { id: 'D', texto: 'Têm soberania, como a União.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Territórios: integram a União, sem autonomia política plena. Criação/transformação/reintegração por lei complementar (art. 18, §2º).',
      incorretas: { A: 'Não são entes autônomos com Constituição.', C: 'Não têm os mesmos poderes dos Estados.', D: 'Soberania é só da República.' },
      conceitoCobrado: 'Territórios Federais.',
      pegadinha: 'Achar que Território é ente federativo.',
      comoApareceEmConcurso: 'Cobrança média.'
    },
    tags: ['territórios', 'art. 18']
  },

  /* ============================================================
     DC-09 — Repartição de Competências
  ============================================================ */
  {
    id: 'Q-DID-DC-0901',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-09',
    subtema: 'Exclusiva x privativa',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre as competências da União (arts. 21 e 22, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A competência EXCLUSIVA (art. 21) pode ser delegada aos Estados por lei complementar; a PRIVATIVA (art. 22) não.' },
      { id: 'B', texto: 'A competência EXCLUSIVA (art. 21) NÃO é delegável; a PRIVATIVA (art. 22) pode ser delegada aos Estados por lei complementar, para questões específicas.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Ambas são indelegáveis.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'EXCLUSIVA (art. 21): material, indelegável. PRIVATIVA (art. 22): legislativa, delegável por LC (art. 22, parágrafo único).',
      incorretas: { A: 'Inverte.', C: 'São categorias distintas.', D: 'A privativa é delegável.' },
      conceitoCobrado: 'Exclusiva x privativa.',
      pegadinha: 'Inverter as definições. Mnemônico: EXclusiva = EXclui delegação.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['exclusiva', 'privativa']
  },
  {
    id: 'Q-DID-DC-0902',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-09',
    subtema: 'Comum x concorrente',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre competência COMUM (art. 23) e CONCORRENTE (art. 24), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Comum é legislativa; concorrente é material.' },
      { id: 'B', texto: 'Comum é MATERIAL (todos os entes juntos, ex.: saúde, meio ambiente); concorrente é LEGISLATIVA (União edita normas gerais; Estados/DF editam específicas).' },
      { id: 'C', texto: 'Ambas são exclusivas da União.' },
      { id: 'D', texto: 'São sinônimos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'COMUM (art. 23): material, todos os entes. CONCORRENTE (art. 24): legislativa, União (normas gerais) + Estados/DF (específicas).',
      incorretas: { A: 'Inverte.', C: 'Ambas envolvem múltiplos entes.', D: 'São distintas.' },
      conceitoCobrado: 'Comum x concorrente.',
      pegadinha: 'Trocar material com legislativa.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['comum', 'concorrente']
  },
  {
    id: 'Q-DID-DC-0903',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-09',
    subtema: 'Superveniência de lei federal',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a superveniência de lei federal geral em matéria de competência concorrente (art. 24, §4º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Revoga integralmente a lei estadual que dispuser sobre normas específicas.' },
      { id: 'B', texto: 'SUSPENDE a eficácia da lei estadual no que lhe for CONTRÁRIO.' },
      { id: 'C', texto: 'Não produz efeitos sobre a lei estadual.' },
      { id: 'D', texto: 'Transforma a lei estadual em lei federal.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 24, §4º: superveniência de lei federal geral SUSPENDE a lei estadual no que lhe for CONTRÁRIO.',
      incorretas: { A: 'Não revoga — apenas suspende no que for contrário.', C: 'Produz efeito suspensivo parcial.', D: 'Não transforma.' },
      conceitoCobrado: 'Efeito da superveniência federal.',
      pegadinha: 'Confundir revogação (definitiva) com suspensão (temporária/parcial).',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['concorrente', 'art. 24']
  },
  {
    id: 'Q-DID-DC-0904',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-09',
    subtema: 'Competência legislativa',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a competência legislativa de Estados e Municípios, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Estados têm competência residual (o que não é da União nem dos Municípios); Municípios têm competência para legislar sobre interesse local e suplementar a legislação federal/estadual no que couber.' },
      { id: 'B', texto: 'Estados só podem legislar sobre matéria expressamente prevista.' },
      { id: 'C', texto: 'Municípios têm competência residual.' },
      { id: 'D', texto: 'Municípios podem legislar sobre direito civil.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 25, §1º (Estados): competência residual. Art. 30, I (Municípios): interesse local. Art. 30, II: suplementar.',
      incorretas: { B: 'Estados têm competência residual (art. 25, §1º).', C: 'Residual é dos Estados.', D: 'Direito civil é privativo da União.' },
      conceitoCobrado: 'Competências estaduais e municipais.',
      pegadinha: 'Achar que Estados só legislam sobre matéria expressa — eles têm competência residual.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['residual', 'interesse local']
  },
  {
    id: 'Q-DID-DC-0905',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-09',
    subtema: 'Competência do DF',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre as competências do Distrito Federal (art. 32, §1º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Acumula as competências legislativas reservadas aos Estados e aos Municípios.' },
      { id: 'B', texto: 'Tem apenas competências municipais.' },
      { id: 'C', texto: 'Tem apenas competências estaduais.' },
      { id: 'D', texto: 'Só legisla sobre matéria expressamente prevista na CF.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 32, §1º: ao DF são atribuídas as competências legislativas reservadas aos Estados e Municípios.',
      incorretas: { B: 'Acumula as duas (municipais + estaduais).', C: 'Acumula as duas (municipais + estaduais).', D: 'Acumula as competências estaduais e municipais.' },
      conceitoCobrado: 'Competências do DF.',
      pegadinha: 'Achar que o DF tem só competências estaduais.',
      comoApareceEmConcurso: 'Cobrança média.'
    },
    tags: ['DF', 'competências']
  },

  /* ============================================================
     DC-11 — Administração Pública na Constituição
  ============================================================ */
  {
    id: 'Q-DID-DC-1101',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-11',
    subtema: 'Princípios (LIMPE)',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'São princípios expressos da Administração Pública no caput do art. 37 da CF/88:',
    alternativas: [
      { id: 'A', texto: 'Legalidade, impessoalidade, moralidade, publicidade e eficiência.' },
      { id: 'B', texto: 'Legalidade, imparcialidade, moralidade, transparência e eficiência.' },
      { id: 'C', texto: 'Razoabilidade, proporcionalidade, moralidade, publicidade e eficiência.' },
      { id: 'D', texto: 'Legalidade, impessoalidade, motivação, publicidade e economicidade.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência.',
      incorretas: { B: 'Imparcialidade e transparência não estão no caput.', C: 'Razoabilidade e proporcionalidade são implícitos.', D: 'Motivação é implícita.' },
      conceitoCobrado: 'LIMPE.',
      pegadinha: 'Trocar por termos próximos.',
      comoApareceEmConcurso: 'Toda prova cobra LIMPE.'
    },
    tags: ['LIMPE', 'art. 37']
  },
  {
    id: 'Q-DID-DC-1102',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-11',
    subtema: 'Concurso público',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre o concurso público (art. 37, II, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É dispensável para cargos efetivos, sendo obrigatório apenas para cargos em comissão.' },
      { id: 'B', texto: 'É obrigatório para provimento de cargos efetivos e empregos públicos, salvo cargos em comissão (livre nomeação e exoneração).' },
      { id: 'C', texto: 'Só se aplica a cargos federais.' },
      { id: 'D', texto: 'O prazo de validade é de 4 anos, prorrogável uma vez por igual período.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Concurso é regra para cargos efetivos e empregos públicos. Cargos em comissão são de livre nomeação (não exigem concurso).',
      incorretas: { A: 'Inverte.', C: 'Aplica-se a União, Estados, DF e Municípios.', D: 'Prazo é de até 2 anos, prorrogável uma única vez por igual período.' },
      conceitoCobrado: 'Concurso público.',
      pegadinha: 'Confundir prazo (2 anos, uma prorrogação) com cargos em comissão.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['concurso', 'art. 37']
  },
  {
    id: 'Q-DID-DC-1103',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-11',
    subtema: 'Acumulação de cargos',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a acumulação remunerada de cargos públicos (art. 37, XVI, CF/88), é correto afirmar que é permitida quando:',
    alternativas: [
      { id: 'A', texto: 'Houve qualquer tipo de vínculo, desde que o servidor tenha disponibilidade.' },
      { id: 'B', texto: 'Houver compatibilidade de horários e se tratar de: dois cargos de professor; um de professor com outro técnico ou científico; ou dois privativos de profissionais de saúde.' },
      { id: 'C', texto: 'O servidor for estável e tiver mais de 10 anos de serviço.' },
      { id: 'D', texto: 'For autorizada pelo chefe imediato.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 37, XVI: 3 hipóteses (2 de professor; 1 professor + 1 técnico/científico; 2 privativos de saúde), com compatibilidade de horários e respeito ao teto.',
      incorretas: { A: 'Não é por disponibilidade.', C: 'Não depende de estabilidade ou tempo de serviço.', D: 'Não depende de autorização do chefe.' },
      conceitoCobrado: 'Acumulação de cargos.',
      pegadinha: 'Mnemônico: "PROF-PROF", "PROF-TEC", "SAÚDE-SAÚDE".',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['acumulação', 'art. 37']
  },
  {
    id: 'Q-DID-DC-1104',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-11',
    subtema: 'Teto remuneratório',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre o teto remuneratório (art. 37, XI, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O teto geral é o subsídio de Ministro do STF; nos Estados e DF, o subsídio de Desembargador do TJ; nos Municípios, o subsídio de Prefeito.' },
      { id: 'B', texto: 'Não há teto para servidores públicos.' },
      { id: 'C', texto: 'O teto é o salário do Presidente da República em todos os entes.' },
      { id: 'D', texto: 'O teto é fixado por decreto do Executivo a cada ano.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 37, XI: teto geral = subsídio de Ministro do STF; estadual = Desembargador do TJ; municipal = Prefeito.',
      incorretas: { B: 'Há teto constitucional.', C: 'Não é o salário do Presidente.', D: 'O teto é constitucional, não por decreto.' },
      conceitoCobrado: 'Teto remuneratório.',
      pegadinha: 'Confundir os 3 níveis.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['teto', 'art. 37']
  },
  {
    id: 'Q-DID-DC-1105',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-11',
    subtema: 'Responsabilidade civil do Estado',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a responsabilidade civil do Estado (art. 37, §6º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É objetiva perante terceiros (basta dano + nexo causal + conduta), e a ação regressiva contra o agente exige DOLO ou CULPA.' },
      { id: 'B', texto: 'É subjetiva em todos os casos.' },
      { id: 'C', texto: 'A ação regressiva independe de dolo ou culpa do agente.' },
      { id: 'D', texto: 'O Estado não responde pelos atos de seus agentes.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 37, §6º: responsabilidade OBJETIVA do Estado perante terceiros (atos comissivos) + ação regressiva com dolo/culpa do agente.',
      incorretas: { B: 'Objetiva em atos comissivos.', C: 'Exige dolo ou culpa.', D: 'Responde objetivamente.' },
      conceitoCobrado: 'Responsabilidade civil objetiva + ação regressiva.',
      pegadinha: 'Achar que a ação regressiva dispensa dolo/culpa.',
      comoApareceEmConcurso: 'Clássica em DA e DC.'
    },
    tags: ['responsabilidade', 'art. 37']
  },
  {
    id: 'Q-DID-DC-1106',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-11',
    subtema: 'Cargo em comissão x função de confiança',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre cargo em comissão e função de confiança (art. 37, V, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'As funções de confiança são exercidas exclusivamente por servidores de carreira; os cargos em comissão são de livre nomeação e exoneração, destinados a direção, chefia e assessoramento.' },
      { id: 'B', texto: 'Ambos podem ser ocupados por pessoas de fora da Administração.' },
      { id: 'C', texto: 'Ambos exigem concurso público.' },
      { id: 'D', texto: 'Cargos em comissão são privativos de servidores de carreira.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 37, V: funções de confiança — privativas de servidor de carreira; cargos em comissão — livre nomeação e exoneração, para direção, chefia e assessoramento.',
      incorretas: { B: 'Funções de confiança são privativas de servidores de carreira.', C: 'Cargo em comissão não exige concurso.', D: 'Inverte.' },
      conceitoCobrado: 'Função de confiança x cargo em comissão.',
      pegadinha: 'Inverter os conceitos.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['cargo em comissão', 'função de confiança']
  }  ,

  /* ============================================================
     DC-12 — Poder Legislativo
  ============================================================ */
  {
    id: 'Q-DID-DC-1201',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-12',
    subtema: 'Composição do Congresso',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a composição do Congresso Nacional (arts. 44 a 46, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É bicameral, formado pela Câmara dos Deputados (representantes do povo) e pelo Senado Federal (representantes dos Estados e do DF).' },
      { id: 'B', texto: 'É unicameral, formado apenas pela Câmara dos Deputados.' },
      { id: 'C', texto: 'Cada Estado elege 8 senadores e 3 deputados federais.' },
      { id: 'D', texto: 'Deputados federais têm mandato de 8 anos; senadores, de 4 anos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Congresso é BICAMERAL: Câmara (povo) + Senado (Estados e DF).',
      incorretas: { B: 'É bicameral.', C: 'Inverte: cada Estado elege 3 senadores e mínimo de 8 deputados federais.', D: 'Inverte: deputados = 4 anos; senadores = 8 anos.' },
      conceitoCobrado: 'Composição do Congresso.',
      pegadinha: 'Trocar número de deputados e senadores por Estado e mandatos.',
      comoApareceEmConcurso: 'Clássica em DC e em concursos de Tribunais.'
    },
    tags: ['congresso', 'art. 44']
  },
  {
    id: 'Q-DID-DC-1202',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-12',
    subtema: 'Competências privativas da Câmara e do Senado',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre as competências privativas da Câmara e do Senado, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A Câmara autoriza a instauração de processo contra o Presidente (art. 51, I); o Senado processa e julga nos crimes de responsabilidade (art. 52, I).' },
      { id: 'B', texto: 'A Câmara processa e julga o Presidente; o Senado apenas autoriza.' },
      { id: 'C', texto: 'Ambas as Casas julgam conjuntamente o Presidente em sessão unicameral.' },
      { id: 'D', texto: 'O Senado autoriza; a Câmara julga.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 51, I: Câmara AUTORIZA (2/3). Art. 52, I: Senado PROCESSA E JULGA.',
      incorretas: { B: 'Inverte.', C: 'Não há julgamento conjunto em sessão unicameral — é o Senado, sob a presidência do Presidente do STF.', D: 'Inverte.' },
      conceitoCobrado: 'Competências privativas do art. 51 e do art. 52.',
      pegadinha: 'Confundir "autorizar" (Câmara) com "processar e julgar" (Senado).',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['Câmara', 'Senado', 'crime de responsabilidade']
  },
  {
    id: 'Q-DID-DC-1203',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-12',
    subtema: 'Imunidades parlamentares',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre as imunidades parlamentares (art. 53, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A imunidade MATERIAL abrange opiniões, palavras e votos, no exercício do mandato, valendo em qualquer lugar; a FORMAL protege contra prisão (salvo flagrante de crime inafiançável) e processo criminal.' },
      { id: 'B', texto: 'A imunidade material só vale dentro do Congresso.' },
      { id: 'C', texto: 'A imunidade formal impede qualquer processo criminal contra o parlamentar.' },
      { id: 'D', texto: 'A imunidade material e a formal são sinônimos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'MATERIAL (caput): opiniões, palavras e votos, no exercício do mandato, em qualquer lugar. FORMAL: prisão apenas em flagrante de crime inafiançável; processo criminal sem licença prévia (EC 35/2001), com possibilidade de sustação pela Casa.',
      incorretas: { B: 'Vale em qualquer lugar.', C: 'Não impede — a EC 35/2001 aboliu a licença prévia para processo.', D: 'São distintas.' },
      conceitoCobrado: 'Imunidades parlamentares.',
      pegadinha: 'Achar que a imunidade material só vale no Congresso ou que a formal exige licença.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['imunidade', 'art. 53']
  },
  {
    id: 'Q-DID-DC-1204',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-12',
    subtema: 'CPI — poderes e limites',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre os poderes e limites da CPI (art. 58, §3º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A CPI pode decretar prisão preventiva e determinar interceptação telefônica diretamente.' },
      { id: 'B', texto: 'A CPI pode quebrar sigilo bancário, fiscal e de dados telefônicos, convocar, ouvir e requisitar, mas NÃO pode decretar prisão (salvo flagrante), determinar busca domiciliar ou interceptação telefônica.' },
      { id: 'C', texto: 'A CPI não tem qualquer poder de investigação.' },
      { id: 'D', texto: 'A CPI julga e condena os investigados.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'CPI tem poderes de investigação próprios das autoridades judiciais, mas com LIMITES: não prende (salvo flagrante), não faz busca domiciliar, não determina interceptação telefônica. Pode quebrar sigilos bancário/fiscal/de dados telefônicos.',
      incorretas: { A: 'Excede os limites da CPI.', C: 'Tem poderes de investigação.', D: 'Não julga — apenas investiga e encaminha.' },
      conceitoCobrado: 'Poderes e limites da CPI.',
      pegadinha: 'Achar que a CPI pode tudo que um juiz pode.',
      comoApareceEmConcurso: 'Alta frequência em concursos de Tribunais.'
    },
    tags: ['CPI', 'art. 58']
  },
  {
    id: 'Q-DID-DC-1205',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-12',
    subtema: 'Tribunal de Contas',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre o Tribunal de Contas da União (art. 70 a 75, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É órgão do Poder Judiciário, com competência para julgar contas.' },
      { id: 'B', texto: 'É órgão auxiliar do Poder Legislativo, com autonomia e funções próprias, exercendo controle externo contábil, financeiro, orçamentário, operacional e patrimonial.' },
      { id: 'C', texto: 'É subordinado ao Poder Executivo.' },
      { id: 'D', texto: 'É uma autarquia federal.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'TCU é órgão AUXILIAR do Legislativo, com autonomia, sem subordinação hierárquica. Exerce controle externo.',
      incorretas: { A: 'Não é do Judiciário.', C: 'Não é subordinado ao Executivo.', D: 'Não é autarquia.' },
      conceitoCobrado: 'Natureza do Tribunal de Contas.',
      pegadinha: 'Achar que integra o Judiciário.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['TCU', 'art. 70']
  },

  /* ============================================================
     DC-13 — Processo Legislativo
  ============================================================ */
  {
    id: 'Q-DID-DC-1301',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-13',
    subtema: 'Quóruns',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre os quóruns no processo legislativo, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Emenda constitucional exige 3/5 em dois turnos em cada Casa; lei complementar exige maioria ABSOLUTA; lei ordinária exige maioria SIMPLES.' },
      { id: 'B', texto: 'Emenda exige maioria absoluta; lei complementar exige 3/5; lei ordinária exige maioria simples.' },
      { id: 'C', texto: 'Lei complementar e lei ordinária têm o mesmo quórum.' },
      { id: 'D', texto: 'Emenda constitucional exige unanimidade.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Emenda (art. 60, §2º): 3/5 em dois turnos em cada Casa. LC (art. 69): maioria absoluta. LO (art. 47): maioria simples.',
      incorretas: { B: 'Inverte.', C: 'LC (absoluta) ≠ LO (simples).', D: 'Não exige unanimidade.' },
      conceitoCobrado: 'Quóruns.',
      pegadinha: 'Trocar 3/5, absoluta e simples.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['quórum', 'processo legislativo']
  },
  {
    id: 'Q-DID-DC-1302',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-13',
    subtema: 'Medida provisória',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a medida provisória (art. 62, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Tem vigência de 60 dias, prorrogável uma única vez por igual período; se não apreciada em 45 dias, entra em regime de urgência e tranca a pauta da Casa onde estiver.' },
      { id: 'B', texto: 'Tem vigência de 90 dias prorrogáveis indefinidamente.' },
      { id: 'C', texto: 'Pode tratar de qualquer matéria.' },
      { id: 'D', texto: 'Não precisa de relevância e urgência.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 62: 60 + 60 dias; trancamento da pauta após 45 dias; perde eficácia desde a edição se não apreciada em 120 dias.',
      incorretas: { B: 'Prazo é 60+60.', C: 'Há vedações materiais (art. 62, §1º).', D: 'Relevância e urgência são pressupostos.' },
      conceitoCobrado: 'Medida provisória.',
      pegadinha: 'Confundir prazos ou esquecer o trancamento em 45 dias.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['MP', 'art. 62']
  },
  {
    id: 'Q-DID-DC-1303',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-13',
    subtema: 'Sanção e veto',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a sanção e o veto (art. 66, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O Presidente tem 15 dias úteis para sancionar ou vetar; o veto pode ser total ou parcial, e é apreciado pelo Congresso em sessão conjunta, com derrubada por maioria absoluta.' },
      { id: 'B', texto: 'O veto parcial pode atingir palavra ou artigo isolado sem relação com o conjunto.' },
      { id: 'C', texto: 'O veto é irrecusável pelo Congresso.' },
      { id: 'D', texto: 'A sanção tem prazo de 30 dias.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Prazo de 15 dias úteis; veto total ou parcial; derrubada por MAIORIA ABSOLUTA em sessão conjunta.',
      incorretas: { B: 'Veto parcial só atinge parte com sentido próprio.', C: 'O veto pode ser derrubado.', D: 'Prazo é 15 dias úteis.' },
      conceitoCobrado: 'Sanção e veto.',
      pegadinha: 'Confundir prazo ou modalidade de veto.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['sanção', 'veto']
  },
  {
    id: 'Q-DID-DC-1304',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-13',
    subtema: 'Espécies normativas',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre as espécies normativas do art. 59, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São: emendas à Constituição, leis complementares, leis ordinárias, leis delegadas, medidas provisórias, decretos legislativos e resoluções.' },
      { id: 'B', texto: 'São apenas: lei ordinária e lei complementar.' },
      { id: 'C', texto: 'Decretos legislativos e resoluções não são espécies normativas.' },
      { id: 'D', texto: 'Medidas provisórias não têm força de lei.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 59: 7 espécies normativas.',
      incorretas: { B: 'Há 7.', C: 'São espécies previstas.', D: 'MP tem força de lei.' },
      conceitoCobrado: 'Espécies normativas.',
      pegadinha: 'Reduzir o rol.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['espécies normativas', 'art. 59']
  },
  {
    id: 'Q-DID-DC-1305',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-13',
    subtema: 'Decreto legislativo x resolução',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre decretos legislativos e resoluções, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Decretos legislativos tratam de matéria de competência EXCLUSIVA do Congresso (art. 49); resoluções tratam de matéria de competência PRIVATIVA do Congresso, da Câmara ou do Senado.' },
      { id: 'B', texto: 'Ambos dependem de sanção do Presidente.' },
      { id: 'C', texto: 'Decretos legislativos são sinônimos de resoluções.' },
      { id: 'D', texto: 'Resoluções dependem de sanção e veto.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Decreto legislativo: matéria exclusiva (art. 49). Resolução: matéria privativa (Congresso, Câmara ou Senado).',
      incorretas: { B: 'Nenhum dos dois depende de sanção.', C: 'São espécies distintas.', D: 'Não dependem de sanção.' },
      conceitoCobrado: 'Decreto legislativo x resolução.',
      pegadinha: 'Achar que dependem de sanção presidencial.',
      comoApareceEmConcurso: 'Cobrança média.'
    },
    tags: ['decreto legislativo', 'resolução']
  },

  /* ============================================================
     DC-RN — Constituição do Estado do Rio Grande do Norte
  ============================================================ */
  {
    id: 'Q-DID-DC-RN01',
    tipo: 'DIDATICA',
    area: 'CE',
    moduloId: 'DC-RN',
    subtema: 'Estrutura do Estado',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a organização do Estado do Rio Grande do Norte, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O Poder Legislativo estadual é exercido pela Assembleia Legislativa do RN, UNICAMERAL, com deputados estaduais eleitos para mandato de 4 anos.' },
      { id: 'B', texto: 'O Poder Legislativo estadual é bicameral, com deputados e senadores estaduais.' },
      { id: 'C', texto: 'O Estado do RN é regido por Lei Orgânica.' },
      { id: 'D', texto: 'A Capital do Estado é Mossoró.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Assembleia Legislativa do RN é UNICAMERAL, com deputados estaduais de mandato de 4 anos.',
      incorretas: { B: 'Não há senadores estaduais.', C: 'Estados têm Constituição (não Lei Orgânica).', D: 'A Capital é Natal.' },
      conceitoCobrado: 'Estrutura do Legislativo estadual.',
      pegadinha: 'Confundir com bicameralismo ou com Lei Orgânica.',
      comoApareceEmConcurso: 'Cobrado em concursos estaduais do RN.'
    },
    tags: ['RN', 'Assembleia']
  },
  {
    id: 'Q-DID-DC-RN02',
    tipo: 'DIDATICA',
    area: 'CE',
    moduloId: 'DC-RN',
    subtema: 'Tribunal de Contas',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'No Rio Grande do Norte, o Tribunal de Contas do Estado (TCE/RN):',
    alternativas: [
      { id: 'A', texto: 'Fiscaliza apenas o Estado, sendo a fiscalização dos Municípios atribuída a um Tribunal de Contas dos Municípios separado.' },
      { id: 'B', texto: 'É órgão auxiliar da Assembleia Legislativa e fiscaliza o Estado E os Municípios do RN, uma vez que não há Tribunal de Contas dos Municípios separado.' },
      { id: 'C', texto: 'É órgão do Poder Judiciário.' },
      { id: 'D', texto: 'É subordinado ao Governador do Estado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'No RN, o TCE acumula as funções de fiscalização estadual e municipal — é órgão auxiliar do Legislativo, com autonomia.',
      incorretas: { A: 'Não há TCM separado no RN.', C: 'Não é do Judiciário.', D: 'Não é subordinado ao Governador.' },
      conceitoCobrado: 'Atuação do TCE/RN.',
      pegadinha: 'Achar que existe TCM no RN.',
      comoApareceEmConcurso: 'Cobrado em concursos do RN.'
    },
    tags: ['RN', 'TCE']
  },
  {
    id: 'Q-DID-DC-RN03',
    tipo: 'DIDATICA',
    area: 'CE',
    moduloId: 'DC-RN',
    subtema: 'Subordinação à CF',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a relação entre a Constituição do Estado do RN (CE/RN/1989) e a Constituição Federal (CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A CE/RN é soberana e pode contrariar a CF.' },
      { id: 'B', texto: 'A CE/RN está SUBORDINADA à CF/88 e não pode contrariar normas federais nem criar hipóteses não previstas na CF.' },
      { id: 'C', texto: 'A CE/RN e a CF têm o mesmo status hierárquico.' },
      { id: 'D', texto: 'A CE/RN revoga dispositivos da CF aplicáveis ao Estado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A CE/RN é norma estadual, subordinada à CF — prevalece o princípio da supremacia constitucional federal.',
      incorretas: { A: 'Não é soberana e não pode contrariar a CF.', C: 'Hierarquia é distinta.', D: 'Não revoga dispositivos da CF.' },
      conceitoCobrado: 'Supremacia da CF sobre a CE.',
      pegadinha: 'Achar que a CE pode contrariar a CF.',
      comoApareceEmConcurso: 'Cobrança clássica em concursos estaduais.'
    },
    tags: ['RN', 'supremacia']
  },
  {
    id: 'Q-DID-DC-RN04',
    tipo: 'DIDATICA',
    area: 'CE',
    moduloId: 'DC-RN',
    subtema: 'Servidores estaduais',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre o regime jurídico dos servidores públicos do Estado do RN, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É celetista (CLT).' },
      { id: 'B', texto: 'É estatutário (regime jurídico único), estabelecido em Lei Complementar estadual.' },
      { id: 'C', texto: 'É livre, sem lei específica.' },
      { id: 'D', texto: 'Aplica-se somente aos servidores federais.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Servidores estaduais do RN são regidos por regime jurídico único (estatutário), em LC estadual.',
      incorretas: { A: 'Não é celetista.', C: 'Exige lei.', D: 'Aplica-se aos servidores estaduais.' },
      conceitoCobrado: 'Regime dos servidores estaduais.',
      pegadinha: 'Confundir com celetista.',
      comoApareceEmConcurso: 'Cobrado em concursos estaduais.'
    },
    tags: ['RN', 'servidores']
  },
  {
    id: 'Q-DID-DC-RN05',
    tipo: 'DIDATICA',
    area: 'CE',
    moduloId: 'DC-RN',
    subtema: 'Eleição do Governador',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a eleição do Governador do Estado do RN, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É feita por maioria simples, sem 2º turno.' },
      { id: 'B', texto: 'É feita por maioria ABSOLUTA, com 2º turno se necessário, mandato de 4 anos, admitida uma reeleição.' },
      { id: 'C', texto: 'É feita por voto indireto (assembleia).' },
      { id: 'D', texto: 'O Governador é nomeado pelo Presidente da República.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Eleição majoritária em 2 turnos se necessário; mandato de 4 anos; reeleição permitida uma única vez.',
      incorretas: { A: 'Maioria absoluta com 2º turno.', C: 'Eleição direta.', D: 'Eleito pelo povo.' },
      conceitoCobrado: 'Eleição do Governador.',
      pegadinha: 'Confundir com eleição indireta.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['RN', 'Governador']
  },

  /* ============================================================
     DC-10 — Intervenção
  ============================================================ */
  {
    id: 'Q-DID-DC-1001',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-10',
    subtema: 'Hipóteses de intervenção federal',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'NÃO é hipótese de intervenção FEDERAL nos Estados (art. 34, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Manter a integridade nacional.' },
      { id: 'B', texto: 'Repelir invasão estrangeira ou de uma unidade da Federação em outra.' },
      { id: 'C', texto: 'Deixar de aplicar o mínimo exigido da receita municipal na saúde e na educação.' },
      { id: 'D', texto: 'Reorganizar as finanças da unidade da Federação que suspender o pagamento da dívida fundada por mais de 2 anos.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A não aplicação do mínimo em saúde e educação é hipótese de intervenção ESTADUAL em MUNICÍPIO (art. 35, III).',
      incorretas: { A: 'É hipótese do art. 34, I.', B: 'É hipótese do art. 34, II.', D: 'É hipótese do art. 34, V.' },
      conceitoCobrado: 'Hipóteses de intervenção federal x estadual.',
      pegadinha: 'Misturar hipóteses dos arts. 34 e 35.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['intervenção', 'art. 34']
  },
  {
    id: 'Q-DID-DC-1002',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-10',
    subtema: 'Hipóteses de intervenção estadual',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'São hipóteses de intervenção ESTADUAL nos Municípios (art. 35, CF/88), EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Deixar de ser paga, sem motivo, por 2 anos, a dívida fundada.' },
      { id: 'B', texto: 'Não forem prestadas contas devidas, na forma da lei.' },
      { id: 'C', texto: 'Não tiver sido aplicado o mínimo exigido da receita municipal na manutenção e desenvolvimento do ensino e nas ações e serviços públicos de saúde.' },
      { id: 'D', texto: 'Descumprimento de decisão do Tribunal de Contas da União.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A hipótese do inciso IV do art. 35 é o Tribunal de JUSTIÇA dar provimento a representação para assegurar a observância de princípios da Constituição ESTADUAL, ou prover execução de lei, ordem ou decisão judicial — não do TCU.',
      incorretas: { A: 'É o inciso I.', B: 'É o inciso II.', C: 'É o inciso III.' },
      conceitoCobrado: 'Intervenção estadual em Municípios.',
      pegadinha: 'Confundir TJ com TCU.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['intervenção', 'art. 35']
  },
  {
    id: 'Q-DID-DC-1003',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-10',
    subtema: 'Procedimento',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre o procedimento da intervenção federal, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O decreto é expedido pelo Congresso Nacional e sancionado pelo Presidente.' },
      { id: 'B', texto: 'O decreto é expedido pelo Presidente, ouvidos o Conselho da República e o Conselho de Defesa Nacional, e submetido ao Congresso em 24 horas.' },
      { id: 'C', texto: 'O decreto é expedido pelo STF.' },
      { id: 'D', texto: 'O decreto dispensa controle do Congresso.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 36: decreto do Presidente + ouvidoria prévia dos Conselhos + controle do Congresso em 24h (convocação extraordinária em 5 dias se em recesso).',
      incorretas: { A: 'Não é do Congresso.', C: 'Não é do STF.', D: 'Há controle político pelo Congresso.' },
      conceitoCobrado: 'Procedimento da intervenção.',
      pegadinha: 'Achar que é o Congresso que decreta.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['intervenção', 'procedimento']
  },
  {
    id: 'Q-DID-DC-1004',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-10',
    subtema: 'Intervenção x Estado de Defesa',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre a diferença entre intervenção e Estado de Defesa, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Intervenção atinge o ente federativo (quebra temporária de autonomia); Estado de Defesa restringe direitos em locais determinados, sem quebra da autonomia.' },
      { id: 'B', texto: 'São sinônimos.' },
      { id: 'C', texto: 'O Estado de Defesa quebra a autonomia do Estado.' },
      { id: 'D', texto: 'A intervenção só pode ocorrer em Municípios.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Intervenção: atinge ente federativo (Estado ou Município). Estado de Defesa: restrição de direitos em locais determinados, sem quebra da autonomia.',
      incorretas: { B: 'São institutos distintos.', C: 'Não quebra autonomia.', D: 'A intervenção federal atinge Estados e DF; a estadual, Municípios.' },
      conceitoCobrado: 'Distinção entre intervenção e Estado de Defesa.',
      pegadinha: 'Confundir os institutos.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['intervenção', 'defesa']
  },
  {
    id: 'Q-DID-DC-1005',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-10',
    subtema: 'Efeitos',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre o término da intervenção, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É permanente — uma vez decretada, não pode cessar.' },
      { id: 'B', texto: 'Cessada a causa, as autoridades afastadas retornam aos seus cargos, salvo impedimento legal.' },
      { id: 'C', texto: 'As autoridades afastadas nunca retornam.' },
      { id: 'D', texto: 'A intervenção só pode cessar por decisão do STF.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 36, §3º: cessados os motivos da intervenção, as autoridades afastadas retornam aos seus cargos, salvo impedimento legal.',
      incorretas: { A: 'É temporária.', C: 'Retornam.', D: 'Cessa quando cessa a causa.' },
      conceitoCobrado: 'Efeitos da cessação da intervenção.',
      pegadinha: 'Achar que a intervenção é permanente.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['intervenção', 'cessação']
  },

  /* ============================================================
     DC-14 — Poder Executivo
  ============================================================ */
  {
    id: 'Q-DID-DC-1401',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-14',
    subtema: 'Requisitos',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'São requisitos para ser Presidente da República, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Ser brasileiro nato.' },
      { id: 'B', texto: 'Ter no mínimo 35 anos de idade.' },
      { id: 'C', texto: 'Estar no pleno exercício dos direitos políticos e ter domicílio eleitoral.' },
      { id: 'D', texto: 'Ter no mínimo 30 anos de idade.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Idade mínima é 35 anos (art. 14, §3º, VI, "a"), não 30 (que é para Governador).',
      incorretas: { A: 'É requisito.', B: 'É requisito.', C: 'É requisito.' },
      conceitoCobrado: 'Requisitos para Presidente.',
      pegadinha: 'Trocar 35 com 30.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['Presidente', 'requisitos']
  },
  {
    id: 'Q-DID-DC-1402',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-14',
    subtema: 'Sucessão',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Em caso de vacância simultânea dos cargos de Presidente e Vice nos 2 últimos anos do mandato, o que ocorre?',
    alternativas: [
      { id: 'A', texto: 'Eleição DIRETA em 90 dias.' },
      { id: 'B', texto: 'Eleição INDIRETA pelo Congresso Nacional em 30 dias.' },
      { id: 'C', texto: 'Assume definitivamente o Presidente do STF.' },
      { id: 'D', texto: 'Não há nova eleição — o mandato é concluído pelo Presidente da Câmara.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 81, §1º: vacância nos 2 últimos anos → eleição INDIRETA pelo Congresso em 30 dias.',
      incorretas: { A: 'Eleição direta é nos 2 primeiros anos.', C: 'A linha sucessória assume apenas temporariamente, não definitivamente.', D: 'Há nova eleição.' },
      conceitoCobrado: 'Vacância nos 2 últimos anos.',
      pegadinha: 'Inverter os prazos e modalidades.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['sucessão', 'vacância']
  },
  {
    id: 'Q-DID-DC-1403',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-14',
    subtema: 'Crimes de responsabilidade',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre os crimes de responsabilidade do Presidente da República, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A Câmara autoriza por 2/3 e o STF julga.' },
      { id: 'B', texto: 'A Câmara autoriza por 2/3 e o Senado Federal processa e julga.' },
      { id: 'C', texto: 'O Senado julga sem necessidade de autorização.' },
      { id: 'D', texto: 'O STF julga diretamente.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Crime de responsabilidade: Câmara AUTORIZA (2/3) e Senado PROCESSA E JULGA (art. 86 + art. 52, I).',
      incorretas: { A: 'STF julga crime COMUM.', C: 'Há necessidade de autorização.', D: 'STF julga crime comum.' },
      conceitoCobrado: 'Crime de responsabilidade.',
      pegadinha: 'Confundir crime comum com crime de responsabilidade.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['crime de responsabilidade', 'impeachment']
  },
  {
    id: 'Q-DID-DC-1404',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-14',
    subtema: 'Competências',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'NÃO é competência privativa do Presidente da República (art. 84, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Sancionar, promulgar e fazer publicar as leis, bem como expedir decretos e regulamentos para sua fiel execução.' },
      { id: 'B', texto: 'Editar medidas provisórias com força de lei.' },
      { id: 'C', texto: 'Nomear, após aprovação pelo Senado, os Ministros do STF.' },
      { id: 'D', texto: 'Julgar as causas em que a União seja parte.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Julgar causas em que a União é parte é competência do PODER JUDICIÁRIO (Justiça Federal), não do Presidente.',
      incorretas: { A: 'É o inciso IV.', B: 'É o inciso XXVI.', C: 'É o inciso XIV (com aprovação do Senado).' },
      conceitoCobrado: 'Competências do Presidente.',
      pegadinha: 'Confundir função administrativa com jurisdicional.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['Presidente', 'competências']
  },
  {
    id: 'Q-DID-DC-1405',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-14',
    subtema: 'Mandato',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre o mandato do Presidente da República, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É de 4 anos, permitida uma única reeleição.' },
      { id: 'B', texto: 'É de 5 anos, sem possibilidade de reeleição.' },
      { id: 'C', texto: 'É de 4 anos, sem possibilidade de reeleição.' },
      { id: 'D', texto: 'É de 6 anos, com reeleição ilimitada.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 82 + EC 16/1997: mandato de 4 anos, admitida UMA única reeleição.',
      incorretas: { B: 'É 4 anos, com uma reeleição.', C: 'Admite uma reeleição.', D: 'Não é 6 anos.' },
      conceitoCobrado: 'Mandato presidencial e reeleição.',
      pegadinha: 'Trocar duração ou negar reeleição.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['mandato', 'reeleição']
  },

  /* ============================================================
     DC-15 — Poder Judiciário
  ============================================================ */
  {
    id: 'Q-DID-DC-1501',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-15',
    subtema: 'STF x STJ',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre o STF e o STJ, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O STF é guarda da lei federal; o STJ é guarda da Constituição.' },
      { id: 'B', texto: 'O STF é guarda da Constituição; o STJ é guarda da lei federal.' },
      { id: 'C', texto: 'Ambos têm 11 ministros.' },
      { id: 'D', texto: 'O STJ julga ADI e ADPF.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'STF = guarda da CF (11 ministros); STJ = guarda da lei federal (33 ministros).',
      incorretas: { A: 'Inverte.', C: 'STF = 11; STJ = 33.', D: 'ADI/ADPF são do STF.' },
      conceitoCobrado: 'Funções do STF e do STJ.',
      pegadinha: 'Inverter guarda e composição.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['STF', 'STJ']
  },
  {
    id: 'Q-DID-DC-1502',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-15',
    subtema: 'Garantias dos magistrados',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'São garantias constitucionais dos magistrados (art. 95, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Vitaliciedade, inamovibilidade e irredutibilidade de subsídio.' },
      { id: 'B', texto: 'Estabilidade, inamovibilidade e irredutibilidade de vencimentos.' },
      { id: 'C', texto: 'Vitaliciedade, estabilidade e irredutibilidade.' },
      { id: 'D', texto: 'Apenas vitaliciedade.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 95: vitaliciedade, inamovibilidade e irredutibilidade de subsídio.',
      incorretas: { B: 'Magistrado tem vitaliciedade, não estabilidade.', C: 'Estabilidade é do servidor público.', D: 'São três garantias.' },
      conceitoCobrado: 'Garantias do magistrado.',
      pegadinha: 'Trocar vitaliciedade por estabilidade.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['garantias', 'magistratura']
  },
  {
    id: 'Q-DID-DC-1503',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-15',
    subtema: 'Justiça Federal',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Compete à Justiça Federal processar e julgar:',
    alternativas: [
      { id: 'A', texto: 'Causas em que a União, autarquia federal ou empresa pública federal forem partes.' },
      { id: 'B', texto: 'Causas entre particulares sobre contratos.' },
      { id: 'C', texto: 'Divórcios.' },
      { id: 'D', texto: 'Crimes militares.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 109, I: causas em que a União, autarquia ou empresa pública federal forem partes (como autoras, rés, assistentes ou oponentes).',
      incorretas: { B: 'Competência da Justiça Estadual.', C: 'Justiça Estadual (varas de família).', D: 'Justiça Militar.' },
      conceitoCobrado: 'Competência da Justiça Federal.',
      pegadinha: 'Achar que qualquer causa com ente público é federal.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['Justiça Federal', 'art. 109']
  },
  {
    id: 'Q-DID-DC-1504',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-15',
    subtema: 'CNJ',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre o Conselho Nacional de Justiça (CNJ), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É órgão de controle administrativo, financeiro e disciplinar do Judiciário, criado pela EC 45/2004.' },
      { id: 'B', texto: 'Julga causas originárias em matéria constitucional.' },
      { id: 'C', texto: 'Substitui o STF no julgamento de ADI.' },
      { id: 'D', texto: 'É subordinado ao Poder Executivo.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'CNJ: órgão de controle administrativo, financeiro e disciplinar do Judiciário (EC 45/2004).',
      incorretas: { B: 'Não julga causas.', C: 'ADI continua sendo do STF.', D: 'Tem autonomia.' },
      conceitoCobrado: 'Função do CNJ.',
      pegadinha: 'Achar que o CNJ julga causas.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['CNJ', 'EC 45/2004']
  },
  {
    id: 'Q-DID-DC-1505',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-15',
    subtema: 'Justiça Estadual',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre a Justiça Estadual, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Tem competência residual — tudo o que não for das Justiças Federal, do Trabalho, Eleitoral e Militar.' },
      { id: 'B', texto: 'Julga apenas causas penais.' },
      { id: 'C', texto: 'Só existe na capital.' },
      { id: 'D', texto: 'Substitui a Justiça Federal quando esta estiver sobrecarregada.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Justiça Estadual tem competência RESIDUAL — o que não for das outras Justiças.',
      incorretas: { B: 'Julga causas cíveis, penais, comerciais, etc.', C: 'Existe em todo o Estado.', D: 'Não substitui.' },
      conceitoCobrado: 'Competência residual da Justiça Estadual.',
      pegadinha: 'Achar que tem competência limitada.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['Justiça Estadual']
  },

  /* ============================================================
     DC-16 — Funções Essenciais à Justiça
  ============================================================ */
  {
    id: 'Q-DID-DC-1601',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-16',
    subtema: 'Ministério Público',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'São princípios institucionais do Ministério Público (art. 127, §1º, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Unidade, indivisibilidade e independência funcional.' },
      { id: 'B', texto: 'Legalidade, impessoalidade e moralidade.' },
      { id: 'C', texto: 'Hierarquia, disciplina e subordinação.' },
      { id: 'D', texto: 'Publicidade, eficiência e transparência.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 127, §1º: unidade, indivisibilidade e independência funcional.',
      incorretas: { B: 'São princípios da Administração (LIMPE parcial).', C: 'Hierarquia é do Judiciário/Militar.', D: 'São princípios da Administração.' },
      conceitoCobrado: 'Princípios do MP.',
      pegadinha: 'Confundir com LIMPE.',
      comoApareceEmConcurso: 'Altíssima frequência em concursos de MP.'
    },
    tags: ['MP', 'princípios']
  },
  {
    id: 'Q-DID-DC-1602',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-16',
    subtema: 'Defensoria Pública',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre a Defensoria Pública (art. 134, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É instituição permanente, essencial à função jurisdicional do Estado, à qual incumbe a orientação jurídica, a promoção dos direitos humanos e a defesa dos direitos individuais e coletivos aos necessitados, integral e gratuitamente.' },
      { id: 'B', texto: 'É subordinada ao Poder Executivo.' },
      { id: 'C', texto: 'Atende apenas quem paga.' },
      { id: 'D', texto: 'Só existe na esfera federal.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 134 (redação da EC 80/2014): Defensoria é instituição permanente, essencial à função jurisdicional, que atende os necessitados de forma integral e gratuita.',
      incorretas: { B: 'Tem autonomia funcional e administrativa.', C: 'Atende gratuitamente.', D: 'Existe em todas as esferas.' },
      conceitoCobrado: 'Defensoria Pública.',
      pegadinha: 'Achar que é subordinada.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['Defensoria Pública']
  },
  {
    id: 'Q-DID-DC-1603',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-16',
    subtema: 'Advocacia-Geral da União',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre a Advocacia-Geral da União (AGU), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Representa a União, judicial e extrajudicialmente, e presta consultoria e assessoramento ao Poder Executivo federal.' },
      { id: 'B', texto: 'É órgão do Poder Judiciário.' },
      { id: 'C', texto: 'Defende os necessitados.' },
      { id: 'D', texto: 'É subordinada ao STF.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 131: AGU representa a União (judicial e extrajudicialmente) e presta consultoria/assessoramento ao Executivo federal.',
      incorretas: { B: 'É órgão do Executivo federal (função essencial à Justiça).', C: 'Defensoria defende necessitados.', D: 'Não é subordinada ao STF.' },
      conceitoCobrado: 'AGU.',
      pegadinha: 'Confundir AGU com Defensoria ou MP.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['AGU', 'advocacia pública']
  },
  {
    id: 'Q-DID-DC-1604',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-16',
    subtema: 'Advocacia',
    dificuldade: 1,
    prioridade: 'media',
    enunciado: 'Sobre a advocacia (art. 133, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O advogado é indispensável à administração da justiça, sendo inviolável por seus atos e manifestações no exercício da profissão, nos limites da lei.' },
      { id: 'B', texto: 'O advogado é subordinado ao Judiciário.' },
      { id: 'C', texto: 'Só pode atuar em causas criminais.' },
      { id: 'D', texto: 'Sua atuação depende de autorização judicial prévia.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 133: literalidade.',
      incorretas: { B: 'É autônomo.', C: 'Atua em qualquer causa.', D: 'Não depende de autorização judicial.' },
      conceitoCobrado: 'Advocacia.',
      pegadinha: 'Restringir a atuação.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['advocacia', 'art. 133']
  },
  {
    id: 'Q-DID-DC-1605',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-16',
    subtema: 'CNMP',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre o Conselho Nacional do Ministério Público (CNMP), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É órgão de controle administrativo, financeiro e disciplinar do MP, criado pela EC 45/2004.' },
      { id: 'B', texto: 'Julga causas penais contra membros do MP.' },
      { id: 'C', texto: 'Substitui o MP na propositura de ações.' },
      { id: 'D', texto: 'É subordinado ao Poder Executivo.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'CNMP: controle administrativo, financeiro e disciplinar do MP (EC 45/2004).',
      incorretas: { B: 'Não julga causas.', C: 'Não substitui o MP.', D: 'Tem autonomia.' },
      conceitoCobrado: 'CNMP.',
      pegadinha: 'Achar que julga causas.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['CNMP', 'EC 45/2004']
  },

  /* ============================================================
     DC-17 — Defesa do Estado e Instituições Democráticas
  ============================================================ */
  {
    id: 'Q-DID-DC-1701',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-17',
    subtema: 'Estado de Defesa',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre o Estado de Defesa (art. 136, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Prazo de 30 dias, prorrogável uma única vez por igual período; decreto do Presidente, ouvidos os Conselhos da República e de Defesa Nacional.' },
      { id: 'B', texto: 'Prazo de 60 dias, prorrogável indefinidamente.' },
      { id: 'C', texto: 'Não depende de controle pelo Congresso.' },
      { id: 'D', texto: 'Pode ser decretado apenas em caso de guerra.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 136: 30 dias, prorrogável UMA vez; decreto do Presidente; ouvidoria dos Conselhos; controle pelo Congresso.',
      incorretas: { B: 'Prazo é 30+30.', C: 'Há controle político.', D: 'Guerra é hipótese do Estado de Sítio.' },
      conceitoCobrado: 'Estado de Defesa.',
      pegadinha: 'Confundir prazo com o Estado de Sítio.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['Estado de Defesa', 'art. 136']
  },
  {
    id: 'Q-DID-DC-1702',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-17',
    subtema: 'Estado de Sítio',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre o Estado de Sítio (art. 137, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Cabe em caso de comoção grave de repercussão nacional, ineficácia do Estado de Defesa ou declaração de guerra/agressão estrangeira; prazo de 30 dias, prorrogável por iguais períodos.' },
      { id: 'B', texto: 'Cabe apenas em caso de calamidade natural.' },
      { id: 'C', texto: 'Não pode ser prorrogado.' },
      { id: 'D', texto: 'O Congresso pode ser dissolvido durante o Estado de Sítio.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 137: comoção nacional, ineficácia do Estado de Defesa ou guerra/agressão estrangeira; 30 dias prorrogável por iguais períodos.',
      incorretas: { B: 'Calamidade natural é hipótese de Estado de Defesa.', C: 'Pode ser prorrogado.', D: 'O Congresso NÃO pode ser dissolvido (art. 138).' },
      conceitoCobrado: 'Estado de Sítio.',
      pegadinha: 'Confundir hipóteses.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['Estado de Sítio', 'art. 137']
  },
  {
    id: 'Q-DID-DC-1703',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-17',
    subtema: 'Forças Armadas',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre as Forças Armadas (art. 142, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São constituídas pela Marinha, Exército e Aeronáutica; destinam-se à defesa da Pátria, à garantia dos Poderes constituídos e da lei e da ordem.' },
      { id: 'B', texto: 'Incluem as polícias militares.' },
      { id: 'C', texto: 'São subordinadas aos Estados.' },
      { id: 'D', texto: 'Têm função de polícia judiciária.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 142: Marinha, Exército e Aeronáutica; missão de defesa da Pátria, garantia dos Poderes e da lei e da ordem.',
      incorretas: { B: 'Polícias militares são órgãos de segurança pública (art. 144).', C: 'São instituições nacionais.', D: 'Polícia judiciária é da PF e das Polícias Civis.' },
      conceitoCobrado: 'Forças Armadas.',
      pegadinha: 'Confundir FFAA com segurança pública.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['Forças Armadas', 'art. 142']
  },
  {
    id: 'Q-DID-DC-1704',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-17',
    subtema: 'Segurança Pública',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre os órgãos de segurança pública (art. 144, CF/88), assinale a alternativa INCORRETA:',
    alternativas: [
      { id: 'A', texto: 'Polícia Federal: apura crimes contra a ordem política e social e faz polícia marítima, aeroportuária e de fronteiras.' },
      { id: 'B', texto: 'Polícia Rodoviária Federal: patrulhamento ostensivo das rodovias federais.' },
      { id: 'C', texto: 'Polícias Militares: policiamento ostensivo e preservação da ordem pública nos Estados.' },
      { id: 'D', texto: 'Polícias Civis: policiamento ostensivo nas ruas.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Polícias Civis exercem funções de POLÍCIA JUDICIÁRIA e apuram infrações penais (exceto militares). Policiamento ostensivo é da Polícia Militar.',
      incorretas: { A: 'Correta.', B: 'Correta.', C: 'Correta.' },
      conceitoCobrado: 'Atribuições das polícias.',
      pegadinha: 'Confundir polícia judiciária com ostensiva.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['segurança pública', 'art. 144']
  },
  {
    id: 'Q-DID-DC-1705',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-17',
    subtema: 'Controle',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre o controle do Estado de Defesa e do Estado de Sítio, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O decreto é submetido ao Congresso Nacional, que decide por maioria absoluta; durante o Estado de Sítio, o Congresso não pode ser dissolvido.' },
      { id: 'B', texto: 'Não há controle pelo Congresso.' },
      { id: 'C', texto: 'O STF controla exclusivamente.' },
      { id: 'D', texto: 'O decreto dispensa justificativa.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Controle político pelo Congresso (apreciação do decreto). Art. 138: o Congresso não pode ser dissolvido durante o Estado de Sítio.',
      incorretas: { B: 'Há controle.', C: 'O controle é político pelo Congresso.', D: 'O decreto deve indicar motivos.' },
      conceitoCobrado: 'Controle do Estado de Defesa e Sítio.',
      pegadinha: 'Achar que não há controle.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['controle', 'art. 138']
  },

  /* ============================================================
     DC-18 — Controle de Constitucionalidade
  ============================================================ */
  {
    id: 'Q-DID-DC-1801',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-18',
    subtema: 'Difuso x concentrado',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre as espécies de controle de constitucionalidade, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Difuso: qualquer juiz, incidental, efeitos inter partes. Concentrado: STF, ação própria, efeitos erga omnes e vinculante.' },
      { id: 'B', texto: 'Difuso: STF, efeitos erga omnes. Concentrado: qualquer juiz, inter partes.' },
      { id: 'C', texto: 'Ambos são exercidos exclusivamente pelo STF.' },
      { id: 'D', texto: 'O controle concentrado é exercido por qualquer tribunal.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'DIFUSO: qualquer juiz, incidental, inter partes. CONCENTRADO: STF, ação própria, erga omnes e vinculante.',
      incorretas: { B: 'Inverte.', C: 'Só o concentrado é exclusivo do STF.', D: 'É exclusivo do STF.' },
      conceitoCobrado: 'Difuso x concentrado.',
      pegadinha: 'Inverter as definições.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['difuso', 'concentrado']
  },
  {
    id: 'Q-DID-DC-1802',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-18',
    subtema: 'ADI x ADC',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre a ADI e a ADC, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'ADI cabe contra lei ou ato normativo federal ou estadual; ADC cabe apenas contra lei ou ato normativo FEDERAL.' },
      { id: 'B', texto: 'Ambas cabem contra lei municipal.' },
      { id: 'C', texto: 'A ADC cabe contra lei estadual.' },
      { id: 'D', texto: 'A ADI cabe apenas contra lei federal.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'ADI (art. 102, I, "a"): lei federal OU estadual. ADC: apenas lei FEDERAL.',
      incorretas: { B: 'Lei municipal não cabe ADI/ADC.', C: 'ADC é só federal.', D: 'ADI também cabe contra lei estadual.' },
      conceitoCobrado: 'Cabimento ADI e ADC.',
      pegadinha: 'Confundir os cabimentos.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['ADI', 'ADC']
  },
  {
    id: 'Q-DID-DC-1803',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-18',
    subtema: 'ADPF x ADO',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre ADPF e ADO, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'ADPF é residual (cabe quando não houver outro meio eficaz) e protege preceito fundamental; ADO visa tornar efetiva norma constitucional em caso de omissão legislativa.' },
      { id: 'B', texto: 'ADPF e ADO são sinônimos.' },
      { id: 'C', texto: 'ADO cabe contra lei existente.' },
      { id: 'D', texto: 'ADPF só cabe contra lei federal.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'ADPF: residual, protege preceito fundamental. ADO: omissão legislativa.',
      incorretas: { B: 'São distintas.', C: 'ADO é para omissão.', D: 'ADPF abrange lei municipal, estadual e federal.' },
      conceitoCobrado: 'ADPF x ADO.',
      pegadinha: 'Confundir finalidades.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['ADPF', 'ADO']
  },
  {
    id: 'Q-DID-DC-1804',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-18',
    subtema: 'Legitimados',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'NÃO é legitimado para propor ADI (art. 103, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Presidente da República.' },
      { id: 'B', texto: 'Procurador-Geral da República.' },
      { id: 'C', texto: 'Conselho Federal da OAB.' },
      { id: 'D', texto: 'Qualquer cidadão.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Qualquer cidadão não é legitimado para ADI (isso é para AÇÃO POPULAR). Os legitimados estão no art. 103.',
      incorretas: { A: 'É legitimado (art. 103, I).', B: 'É legitimado (art. 103, VI).', C: 'É legitimado (art. 103, VII).' },
      conceitoCobrado: 'Legitimados do art. 103.',
      pegadinha: 'Confundir com AÇÃO POPULAR.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['ADI', 'legitimados']
  },
  {
    id: 'Q-DID-DC-1805',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-18',
    subtema: 'Efeitos',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre os efeitos da decisão de mérito em ADI, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Em regra, são erga omnes e vinculantes; a modulação de efeitos é possível (art. 27 da Lei 9.868/1999).' },
      { id: 'B', texto: 'São sempre inter partes.' },
      { id: 'C', texto: 'Só valem para as partes do processo.' },
      { id: 'D', texto: 'Não têm efeito vinculante.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Decisão de mérito em ADI: erga omnes e vinculante; modulação possível (art. 27).',
      incorretas: { B: 'Erga omnes.', C: 'Erga omnes.', D: 'Tem efeito vinculante.' },
      conceitoCobrado: 'Efeitos da ADI.',
      pegadinha: 'Achar que só vale para as partes.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['ADI', 'efeitos']
  },

  /* ============================================================
     DC-01 — Teoria da Constituição
  ============================================================ */
  {
    id: 'Q-DID-DC-0101',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-01',
    subtema: 'Classificações de Constituição',
    dificuldade: 2,
    prioridade: 'baixa',
    enunciado: 'Sobre a classificação da Constituição Federal de 1988, é correto afirmar que ela é:',
    alternativas: [
      { id: 'A', texto: 'Escrita, outorgada, rígida, formal e analítica.' },
      { id: 'B', texto: 'Escrita, promulgada, rígida, formal e analítica.' },
      { id: 'C', texto: 'Não escrita, promulgada, flexível, material e sintética.' },
      { id: 'D', texto: 'Escrita, promulgada, semirrígida, material e analítica.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'CF/88: ESCRITA (documento formal), PROMULGADA (Assembleia Constituinte), RÍGIDA (3/5 em dois turnos), FORMAL (normas constitucionais solenes), ANALÍTICA (extensa).',
      incorretas: { A: 'Não foi outorgada — foi promulgada.', C: 'É escrita, rígida, formal e analítica.', D: 'É rígida, não semirrígida; formal, não material.' },
      conceitoCobrado: 'Classificações de Constituição.',
      pegadinha: 'Confundir promulgada com outorgada; rígida com semirrígida.',
      comoApareceEmConcurso: 'Clássica em DC.'
    },
    tags: ['classificação', 'CF/88']
  },
  {
    id: 'Q-DID-DC-0102',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-01',
    subtema: 'Poder constituinte originário',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'São características do poder constituinte ORIGINÁRIO:',
    alternativas: [
      { id: 'A', texto: 'Inicial, autônomo, ilimitado, incondicionado e soberano.' },
      { id: 'B', texto: 'Derivado, limitado, condicionado e subordinado.' },
      { id: 'C', texto: 'Permanente, reformador e submisso à CF anterior.' },
      { id: 'D', texto: 'Restrito às cláusulas pétreas.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Originário: inicial, autônomo, ilimitado, incondicionado e soberano. Cria a Constituição sem se submeter a limites jurídicos preexistentes.',
      incorretas: { B: 'São características do DERIVADO.', C: 'O originário não é permanente nem submisso.', D: 'Cláusulas pétreas limitam o DERIVADO, não o originário.' },
      conceitoCobrado: 'Poder constituinte originário.',
      pegadinha: 'Trocar com o derivado.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['poder constituinte', 'originário']
  },
  {
    id: 'Q-DID-DC-0103',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-01',
    subtema: 'Cláusulas pétreas',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'São cláusulas pétreas expressas (art. 60, §4º, CF/88), EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Forma federativa de Estado.' },
      { id: 'B', texto: 'Voto direto, secreto, universal e periódico.' },
      { id: 'C', texto: 'Separação dos Poderes.' },
      { id: 'D', texto: 'Sistema presidencialista de governo.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'O sistema presidencialista NÃO é cláusula pétrea — pode ser alterado por emenda (ex.: adoção do parlamentarismo).',
      incorretas: { A: 'É cláusula pétrea (art. 60, §4º, I).', B: 'É cláusula pétrea (art. 60, §4º, II).', C: 'É cláusula pétrea (art. 60, §4º, III).' },
      conceitoCobrado: 'Cláusulas pétreas.',
      pegadinha: 'Misturar cláusulas pétreas com outras matérias importantes.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['cláusulas pétreas', 'art. 60']
  },
  {
    id: 'Q-DID-DC-0104',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-01',
    subtema: 'Poder constituinte derivado',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'Sobre o poder constituinte DERIVADO, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É ilimitado e incondicionado, como o originário.' },
      { id: 'B', texto: 'É submetido a limites (temporais, circunstanciais, materiais e processuais), sendo exercido por emenda ou revisão.' },
      { id: 'C', texto: 'Não existe no Brasil.' },
      { id: 'D', texto: 'Só pode ser exercido por Assembleia Constituinte.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O derivado é LIMITADO e CONDICIONADO — submete-se a limites temporais, circunstanciais, materiais (cláusulas pétreas) e processuais (3/5 em dois turnos).',
      incorretas: { A: 'Ilimitado é o ORIGINÁRIO.', C: 'Existe: reforma e revisão.', D: 'Emenda é feita pelo Congresso, não por Assembleia Constituinte.' },
      conceitoCobrado: 'Poder constituinte derivado.',
      pegadinha: 'Confundir com o originário.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['poder constituinte', 'derivado']
  },
  {
    id: 'Q-DID-DC-0105',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-01',
    subtema: 'Recepção',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'Sobre a recepção de normas pela nova Constituição, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Leis anteriores à nova CF que sejam materialmente compatíveis com ela continuam válidas (recepção).' },
      { id: 'B', texto: 'Todas as leis anteriores são automaticamente revogadas.' },
      { id: 'C', texto: 'Leis anteriores só continuam se formalmente compatíveis.' },
      { id: 'D', texto: 'Recepção é sinônimo de repristinação.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Recepção: a lei anterior à nova CF que seja MATERIALMENTE compatível continua válida. A análise é apenas material (não se exige compatibilidade formal).',
      incorretas: { B: 'Nem todas são revogadas.', C: 'Analisa-se apenas a compatibilidade material.', D: 'Repristinação é o retorno de lei revogada.' },
      conceitoCobrado: 'Recepção.',
      pegadinha: 'Achar que se exige compatibilidade formal.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['recepção']
  },

  /* ============================================================
     DC-19 — Ordem Econômica e Social
  ============================================================ */
  {
    id: 'Q-DID-DC-1901',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-19',
    subtema: 'Princípios da ordem econômica',
    dificuldade: 2,
    prioridade: 'baixa',
    enunciado: 'NÃO é princípio da ordem econômica (art. 170, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Livre concorrência e defesa do consumidor.' },
      { id: 'B', texto: 'Função social da propriedade.' },
      { id: 'C', texto: 'Redução das desigualdades regionais e sociais.' },
      { id: 'D', texto: 'Gratuidade universal dos serviços públicos.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Gratuidade universal NÃO é princípio da ordem econômica. Serviços públicos podem ser remunerados por tarifa ou taxa.',
      incorretas: { A: 'Está no art. 170, IV e V.', B: 'Está no art. 170, III.', C: 'Está no art. 170, VII.' },
      conceitoCobrado: 'Princípios da ordem econômica.',
      pegadinha: 'Confundir gratuidade com princípio econômico.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['ordem econômica', 'art. 170']
  },
  {
    id: 'Q-DID-DC-1902',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-19',
    subtema: 'Atuação do Estado',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'Sobre a atuação do Estado na economia (arts. 173 e 174, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O Estado pode explorar qualquer atividade econômica diretamente.' },
      { id: 'B', texto: 'A exploração direta de atividade econômica pelo Estado só é permitida em casos de segurança nacional ou relevante interesse coletivo.' },
      { id: 'C', texto: 'O Estado não tem função reguladora.' },
      { id: 'D', texto: 'O Estado só atua como agente normativo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 173: exploração direta apenas em segurança nacional ou relevante interesse coletivo. Art. 174: agente normativo e regulador.',
      incorretas: { A: 'Há restrições.', C: 'O art. 174 prevê a função reguladora.', D: 'Também atua diretamente em casos excepcionais.' },
      conceitoCobrado: 'Atuação do Estado na economia.',
      pegadinha: 'Achar que o Estado pode explorar qualquer atividade.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['ordem econômica', 'art. 173']
  },
  {
    id: 'Q-DID-DC-1903',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-19',
    subtema: 'Seguridade social',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'Sobre a seguridade social (art. 194, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Compreende saúde, previdência e assistência; a previdência é contributiva, mas saúde e assistência não exigem contribuição.' },
      { id: 'B', texto: 'Todas as áreas exigem contribuição prévia.' },
      { id: 'C', texto: 'Só abrange a previdência.' },
      { id: 'D', texto: 'A saúde é contributiva.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Seguridade = saúde + previdência + assistência. Só a PREVIDÊNCIA é contributiva.',
      incorretas: { B: 'Só a previdência exige contribuição.', C: 'Abrange as três.', D: 'Saúde é universal.' },
      conceitoCobrado: 'Seguridade social.',
      pegadinha: 'Achar que saúde exige contribuição.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['seguridade', 'art. 194']
  },
  {
    id: 'Q-DID-DC-1904',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-19',
    subtema: 'Meio ambiente',
    dificuldade: 2,
    prioridade: 'baixa',
    enunciado: 'Sobre o meio ambiente (art. 225, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Todos têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida, impondo-se ao Poder Público e à coletividade o dever de defendê-lo.' },
      { id: 'B', texto: 'É responsabilidade exclusiva do Poder Público.' },
      { id: 'C', texto: 'Não tem proteção constitucional.' },
      { id: 'D', texto: 'Só protege a flora.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Literalidade do art. 225: direito de todos + dever do Poder Público e da coletividade.',
      incorretas: { B: 'Responsabilidade compartilhada.', C: 'Está no art. 225.', D: 'Protege fauna, flora e demais recursos.' },
      conceitoCobrado: 'Meio ambiente.',
      pegadinha: 'Restringir a responsabilidade.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['meio ambiente', 'art. 225']
  },
  {
    id: 'Q-DID-DC-1905',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-19',
    subtema: 'Ordem social — criança e adolescente',
    dificuldade: 2,
    prioridade: 'baixa',
    enunciado: 'Sobre a proteção constitucional da criança e do adolescente (art. 227, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É dever da família, da sociedade e do Estado, com prioridade ABSOLUTA.' },
      { id: 'B', texto: 'É dever exclusivo da família.' },
      { id: 'C', texto: 'É dever exclusivo do Estado.' },
      { id: 'D', texto: 'A proteção é opcional.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 227: dever da família, sociedade e Estado, com ABSOLUTA PRIORIDADE.',
      incorretas: { B: 'Também sociedade e Estado.', C: 'Também família e sociedade.', D: 'É obrigatório.' },
      conceitoCobrado: 'Proteção da criança e do adolescente.',
      pegadinha: 'Restringir a responsabilidade.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['ordem social', 'art. 227']
  },

  /* ============================================================
     DC-20 — ADCT e Atualizações Constitucionais
  ============================================================ */
  {
    id: 'Q-DID-DC-2001',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-20',
    subtema: 'Natureza do ADCT',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'Sobre o Ato das Disposições Constitucionais Transitórias (ADCT), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Tem natureza de lei ordinária.' },
      { id: 'B', texto: 'Tem a MESMA FORÇA NORMATIVA da CF/88 (é norma constitucional), com natureza TRANSITÓRIA, e é alterado por emenda constitucional.' },
      { id: 'C', texto: 'Não integra a Constituição.' },
      { id: 'D', texto: 'Só pode ser alterado por Assembleia Constituinte.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O ADCT integra a CF/88 com a mesma força normativa. Sua natureza é transitória, e é alterado por emenda constitucional (3/5 em dois turnos).',
      incorretas: { A: 'Não é lei ordinária.', C: 'Integra a CF.', D: 'É alterado por emenda.' },
      conceitoCobrado: 'Natureza do ADCT.',
      pegadinha: 'Achar que é lei ordinária ou norma inferior.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['ADCT']
  },
  {
    id: 'Q-DID-DC-2002',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-20',
    subtema: 'Revisão constitucional',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'Sobre a revisão constitucional (art. 3º do ADCT), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Foi realizada uma única vez, em 1993, por maioria absoluta, e está esgotada.' },
      { id: 'B', texto: 'Pode ser realizada a cada 10 anos.' },
      { id: 'C', texto: 'Substitui a emenda constitucional.' },
      { id: 'D', texto: 'Não foi realizada.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A revisão foi ÚNICA (art. 3º do ADCT), em 1993, por maioria absoluta. Já está esgotada. Alterações posteriores só por EMENDA (art. 60).',
      incorretas: { B: 'Não é periódica.', C: 'Não substitui a emenda.', D: 'Foi realizada em 1993.' },
      conceitoCobrado: 'Revisão constitucional.',
      pegadinha: 'Achar que pode ser repetida.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['revisão', 'ADCT']
  },
  {
    id: 'Q-DID-DC-2003',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-20',
    subtema: 'Emendas constitucionais',
    dificuldade: 2,
    prioridade: 'baixa',
    enunciado: 'A inserção do princípio da eficiência no caput do art. 37 da CF foi feita pela:',
    alternativas: [
      { id: 'A', texto: 'EC 45/2004 (Reforma do Judiciário).' },
      { id: 'B', texto: 'EC 19/1998 (Reforma Gerencial).' },
      { id: 'C', texto: 'EC 20/1998 (Reforma da Previdência).' },
      { id: 'D', texto: 'EC 90/2015 (Transporte).' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A eficiência foi inserida pela EC 19/1998, formando o LIMPE.',
      incorretas: { A: 'EC 45/2004 criou o CNJ, súmula vinculante e repercussão geral.', C: 'EC 20/1998 foi a reforma da previdência.', D: 'EC 90/2015 incluiu o transporte no art. 6º.' },
      conceitoCobrado: 'Emendas constitucionais.',
      pegadinha: 'Confundir EC 19 com EC 45.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['EC 19/1998', 'eficiência']
  },
  {
    id: 'Q-DID-DC-2004',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-20',
    subtema: 'Emendas constitucionais',
    dificuldade: 2,
    prioridade: 'baixa',
    enunciado: 'A EC 45/2004 (Reforma do Judiciário) NÃO introduziu:',
    alternativas: [
      { id: 'A', texto: 'O Conselho Nacional de Justiça (CNJ).' },
      { id: 'B', texto: 'A súmula vinculante.' },
      { id: 'C', texto: 'A repercussão geral no recurso extraordinário.' },
      { id: 'D', texto: 'O princípio da eficiência no art. 37.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A eficiência no art. 37 foi introduzida pela EC 19/1998 (Reforma Gerencial), não pela EC 45/2004.',
      incorretas: { A: 'A EC 45 criou o CNJ (art. 103-B).', B: 'A EC 45 introduziu a súmula vinculante (art. 103-A).', C: 'A EC 45 introduziu a repercussão geral (art. 102, §3º).' },
      conceitoCobrado: 'EC 45/2004.',
      pegadinha: 'Confundir EC 19 com EC 45.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['EC 45/2004', 'CNJ']
  },
  {
    id: 'Q-DID-DC-2005',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-20',
    subtema: 'Alterações recentes',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'Sobre a EC 131/2023, é correto afirmar que ela:',
    alternativas: [
      { id: 'A', texto: 'Alterou as hipóteses de PERDA da nacionalidade brasileira.' },
      { id: 'B', texto: 'Acabou com o voto obrigatório.' },
      { id: 'C', texto: 'Reformou o Judiciário.' },
      { id: 'D', texto: 'Criou o CNJ.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A EC 131/2023 alterou as hipóteses de PERDA da nacionalidade (art. 12, §4º), flexibilizando as causas.',
      incorretas: { B: 'Não tratou de voto.', C: 'Reforma do Judiciário foi EC 45/2004.', D: 'CNJ foi criado pela EC 45/2004.' },
      conceitoCobrado: 'Alterações constitucionais recentes.',
      pegadinha: 'Confundir ECs.',
      comoApareceEmConcurso: 'Tema atualizado.'
    },
    tags: ['EC 131/2023', 'nacionalidade']
  },
  /* ============================================================
     DC-04 — Direitos Sociais (LOTE REAL — 51 questões)
     Inserir antes do ]; final, com vírgula após o último item anterior
  ============================================================ */
  {
    id: 'Q-REAL-DC-0401',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Associação profissional ou sindical',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'De acordo com o disposto na Constituição Federal, sobre a associação profissional ou sindical, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'A lei não poderá exigir autorização do Estado para a fundação de sindicato, tampouco o registro no órgão competente, vedadas ao Poder Público a interferência e a intervenção na organização sindical.' },
      { id: 'B', texto: 'É vedada a criação de mais de uma organização sindical, em qualquer grau, representativa de categoria profissional ou econômica, na mesma base territorial, que será definida pelos trabalhadores ou empregadores interessados, não podendo ser inferior à área de um Estado.' },
      { id: 'C', texto: 'É obrigatória a participação dos sindicatos nas negociações coletivas de trabalho.' },
      { id: 'D', texto: 'O aposentado filiado tem direito a votar, mas não pode ser votado nas organizações sindicais.' },
      { id: 'E', texto: 'É vedada a dispensa do empregado sindicalizado a partir do registro da candidatura a cargo de direção ou representação sindical e, se eleito, ainda que suplente, até dois anos após o final do mandato, salvo se cometer falta grave, nos termos da lei.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Art. 8º, VI, CF/88: "é obrigatória a participação dos sindicatos nas negociações coletivas de trabalho".',
      incorretas: {
        A: 'Art. 8º, I: a lei não pode exigir AUTORIZAÇÃO, mas RESSALVA o registro no órgão competente.',
        B: 'Art. 8º, II: a base territorial mínima é a área de um MUNICÍPIO, não de um Estado.',
        D: 'Art. 8º, VII: o aposentado filiado tem direito a votar E ser votado.',
        E: 'Art. 8º, VIII: a estabilidade sindical vai até UM ANO após o final do mandato (não dois anos).'
      },
      conceitoCobrado: 'Liberdade sindical (art. 8º).',
      pegadinha: 'Trocar "Município" por "Estado" (B) e "um ano" por "dois anos" (E).',
      comoApareceEmConcurso: 'Cobrança da literalidade do art. 8º com substituição de palavras-chave.'
    },
    tags: ['sindicalização', 'art. 8º']
  },
  {
    id: 'Q-REAL-DC-0402',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Rol do art. 6º e renda básica',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Analise atentamente as afirmações abaixo: I - São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância, a assistência aos desamparados, na forma da Constituição Federal de 1988. II - Todo estrangeiro em situação de vulnerabilidade social terá direito a uma renda básica familiar, garantida pelo poder público em programa permanente de transferência de renda, cujas normas e requisitos de acesso serão determinados em lei, observada a legislação fiscal e orçamentária.',
    alternativas: [
      { id: 'A', texto: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa da I.' },
      { id: 'B', texto: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.' },
      { id: 'C', texto: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.' },
      { id: 'D', texto: 'As asserções I e II são proposições falsas.' },
      { id: 'E', texto: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'I é verdadeira (rol completo do art. 6º). II é falsa: o art. 6º, parágrafo único, fala em "todo BRASILEIRO em situação de vulnerabilidade social", não em estrangeiro.',
      incorretas: {
        A: 'II é falsa — não é estrangeiro, é brasileiro.',
        B: 'II é falsa.',
        D: 'I é verdadeira.',
        E: 'I é verdadeira e II é falsa — o inverso do que afirma a alternativa.'
      },
      conceitoCobrado: 'Rol do art. 6º + renda básica familiar (art. 6º, parágrafo único).',
      pegadinha: 'Trocar "brasileiro" por "estrangeiro" no parágrafo único.',
      comoApareceEmConcurso: 'Cobrança literal do art. 6º e seu parágrafo único.'
    },
    tags: ['art. 6º', 'renda básica']
  },
  {
    id: 'Q-REAL-DC-0403',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Liberdade de reunião',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Membros de uma determinada categoria profissional, representada pelo sindicato Y, se mobilizam para iniciar uma série de atos para chamar a atenção da opinião pública sobre as precárias condições de trabalho a que estão submetidos. Um desses atos será a realização de uma manifestação em praça pública, cuja pauta será a reivindicação de melhores condições de trabalho. Um dos dirigentes do sindicato Y entra em contato com a Prefeitura, para comunicar à autoridade competente sobre o dia, o horário, o local, o número estimado de participantes e a pauta da manifestação, quando lhe é confirmado que não há outra reunião anteriormente convocada para o mesmo local. Contudo, chegado o dia da manifestação, pacífica e sem armas, ela é dissolvida por autoridades policiais, para não atrapalhar o trânsito da região. Diante dessa situação hipotética, a manifestação do sindicato Y:',
    alternativas: [
      { id: 'A', texto: 'é inconstitucional, pois o exercício da liberdade de reunião não é absoluto;' },
      { id: 'B', texto: 'é inconstitucional, pois a liberdade de locomoção prevalece sobre a liberdade de reunião;' },
      { id: 'C', texto: 'é constitucional, pois atendeu aos requisitos exigidos pela Constituição de 1988 para o exercício legítimo da liberdade de reunião;' },
      { id: 'D', texto: 'é constitucional, pois o exercício da liberdade de reunião não é restringido pela Constituição de 1988;' },
      { id: 'E', texto: 'é inconstitucional, pois o exercício da liberdade de reunião é condicionado à autorização prévia da autoridade competente.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Art. 5º, XVI: a reunião era pacífica, sem armas, em local aberto, com prévio aviso à autoridade e sem frustrar outra reunião anteriormente convocada — todos os requisitos foram atendidos, logo é constitucional.',
      incorretas: {
        A: 'A liberdade de reunião tem limites, mas foram respeitados no caso.',
        B: 'Não há prevalência abstrata entre liberdades; o caso concreto é de reunião legítima.',
        D: 'A liberdade de reunião TEM restrições constitucionais (art. 5º, XVI).',
        E: 'A CF exige apenas PRÉVIO AVISO, não autorização prévia.'
      },
      conceitoCobrado: 'Liberdade de reunião (art. 5º, XVI).',
      pegadinha: 'Confundir "prévio aviso" com "autorização prévia".',
      comoApareceEmConcurso: 'Casos concretos sobre limites da liberdade de reunião.'
    },
    tags: ['reunião', 'art. 5º, XVI']
  },
  {
    id: 'Q-REAL-DC-0404',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais — identificação',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Nos termos da Constituição Federal, em relação aos direitos classificados como direitos sociais, assinalar a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Proteção dos dados pessoais, razoável duração do processo e inviolabilidade de domicílio.' },
      { id: 'B', texto: 'Liberdades de consciência, crença e expressão.' },
      { id: 'C', texto: 'Habeas corpus, habeas data e mandado de segurança.' },
      { id: 'D', texto: 'Transporte, previdência social e saúde.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Transporte (EC 90/2015), previdência social e saúde estão expressos no art. 6º.',
      incorretas: {
        A: 'São direitos individuais (art. 5º) e garantias processuais.',
        B: 'São liberdades individuais (art. 5º, VI e IX).',
        C: 'São remédios constitucionais (art. 5º, LXVIII, LXXII e LXIX).'
      },
      conceitoCobrado: 'Identificação dos direitos sociais do art. 6º.',
      pegadinha: 'Misturar direitos individuais, remédios e direitos sociais.',
      comoApareceEmConcurso: 'Cobrança direta do rol do art. 6º.'
    },
    tags: ['art. 6º', 'direitos sociais']
  },
  {
    id: 'Q-REAL-DC-0405',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Rol do art. 6º',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'A Constituição Federal prevê um rol de direitos sociais em seu artigo 6º, dentre os quais o direito social à:',
    alternativas: [
      { id: 'A', texto: 'proteção à maternidade.' },
      { id: 'B', texto: 'seguridade social.' },
      { id: 'C', texto: 'propriedade.' },
      { id: 'D', texto: 'comunicação social.' },
      { id: 'E', texto: 'reforma agrária.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 6º prevê expressamente a "proteção à maternidade e à infância".',
      incorretas: {
        B: 'Seguridade social é o gênero (art. 194) que abrange saúde, previdência e assistência — não é direito social do art. 6º.',
        C: 'Propriedade é direito individual (art. 5º, XXII).',
        D: 'Comunicação social é capítulo da CF (art. 220), não direito social do art. 6º.',
        E: 'Reforma agrária é prevista no art. 184, mas não é direito social do art. 6º.'
      },
      conceitoCobrado: 'Rol do art. 6º.',
      pegadinha: 'Confundir "seguridade social" (gênero) com direitos sociais do art. 6º.',
      comoApareceEmConcurso: 'Cobrança literal do rol.'
    },
    tags: ['art. 6º', 'proteção à maternidade']
  },
  {
    id: 'Q-REAL-DC-0406',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Representante dos empregados',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Em conformidade com a Constituição Federal de 1988, analise atentamente o trecho abaixo e assinale a alternativa que complete corretamente a lacuna. "Nas empresas de mais de _____ empregados, é assegurada a eleição de um representante destes com a finalidade exclusiva de promover-lhes o entendimento direto com os empregadores."',
    alternativas: [
      { id: 'A', texto: 'Cinquenta.' },
      { id: 'B', texto: 'Setenta e cinco.' },
      { id: 'C', texto: 'Cem.' },
      { id: 'D', texto: 'Cento e cinquenta.' },
      { id: 'E', texto: 'Duzentos.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'Art. 11, CF/88: "Nas empresas de mais de DUZENTOS empregados, é assegurada a eleição de um representante destes com a finalidade exclusiva de promover-lhes o entendimento direto com os empregadores."',
      incorretas: {
        A: 'Cinquenta é o número de empregados para outros fins (ex.: comissão interna), não o do art. 11.',
        B: 'Não é o número previsto.',
        C: 'Cem não é o número previsto.',
        D: 'Cento e cinquenta não é o número previsto.'
      },
      conceitoCobrado: 'Representante dos empregados (art. 11).',
      pegadinha: 'Trocar 200 por 100 ou 50 (números usados em outras normas).',
      comoApareceEmConcurso: 'Cobrança literal do art. 11.'
    },
    tags: ['art. 11', 'representante dos empregados']
  },
  {
    id: 'Q-REAL-DC-0407',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais incluídos por EC',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Os direitos sociais são fundamentais para a garantia de uma sociedade mais justa e solidária. Entre as alternativas abaixo, qual delas foi incluída como direito social por meio de emenda constitucional posterior à promulgação da Constituição da República Federativa de 1988?',
    alternativas: [
      { id: 'A', texto: 'Direito à saúde.' },
      { id: 'B', texto: 'Direito à educação.' },
      { id: 'C', texto: 'Direito ao trabalho.' },
      { id: 'D', texto: 'Direito ao transporte.' },
      { id: 'E', texto: 'Direito à segurança.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'O transporte foi incluído no art. 6º pela EC 90/2015.',
      incorretas: {
        A: 'Saúde estava no texto original de 1988.',
        B: 'Educação estava no texto original de 1988.',
        C: 'Trabalho estava no texto original de 1988.',
        E: 'Segurança estava no texto original de 1988.'
      },
      conceitoCobrado: 'Alterações do art. 6º por emenda constitucional.',
      pegadinha: 'Achar que moradia (EC 26/2000), alimentação (EC 64/2010) ou transporte (EC 90/2015) eram originais.',
      comoApareceEmConcurso: 'Cobrança das ECs que ampliaram o art. 6º.'
    },
    tags: ['EC 90/2015', 'transporte']
  },
  {
    id: 'Q-REAL-DC-0408',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Fundamentos, direitos sociais e DF',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a Constituição Federal de 1988, julgue as afirmações como verdadeiras (V) ou falsas (F): (__) A Constituição Federal de 1988 consagra a dignidade da pessoa humana como um dos fundamentos da República Federativa do Brasil. (__) Os direitos sociais, como a saúde, educação e previdência social, não estão assegurados pela Constituição de 1988. (__) O Distrito Federal acumula as competências legislativas e administrativas dos Estados e Municípios. Assinale a alternativa cuja respectiva ordem de julgamento está correta:',
    alternativas: [
      { id: 'A', texto: 'V - V - V.' },
      { id: 'B', texto: 'F - F - F.' },
      { id: 'C', texto: 'V - F - V.' },
      { id: 'D', texto: 'V - F - F.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'V (art. 1º, III), F (direitos sociais ESTÃO assegurados no art. 6º), V (art. 32, §1º).',
      incorretas: {
        A: 'A segunda afirmação é falsa.',
        B: 'A primeira e a terceira são verdadeiras.',
        D: 'A terceira afirmação é verdadeira (art. 32, §1º).'
      },
      conceitoCobrado: 'Fundamentos da República + direitos sociais + competências do DF.',
      pegadinha: 'Negar a previsão constitucional dos direitos sociais.',
      comoApareceEmConcurso: 'Questão interdisciplinar.'
    },
    tags: ['fundamentos', 'art. 6º', 'DF']
  },
  {
    id: 'Q-REAL-DC-0409',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Greve de servidor público',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Samuel, Flávio, Conrado e Viviane são motoristas lotados na secretaria de saúde. Suas funções consistem basicamente em transportar diariamente medicamentos do almoxarifado para os hospitais e postos de saúde da cidade. Inconformados com as condições precárias dos veículos, com as rotas extensas a serem cumpridas em horários extremamente curtos, os 4 servidores resolvem protestar contra a Prefeitura. Os 4 obreiros deflagraram greve total e com isso todo o fornecimento de medicação nas unidades hospitalares e nos postos de saúde ficou prejudicada. Com base no caso hipotético e fundamentada nas regras constitucionais e consolidadas no Supremo Tribunal Federal, é certo afirmar que:',
    alternativas: [
      { id: 'A', texto: 'servidor público, de qualquer área, não pode fazer greve, mas pode se sindicalizar.' },
      { id: 'B', texto: 'servidor público, de qualquer área, não pode se sindicalizar e nem deflagrar greve.' },
      { id: 'C', texto: 'servidor público pode fazer greve, desde que não seja total, de modo a se garantir a continuidade na prestação do serviço público.' },
      { id: 'D', texto: 'assim como no setor privado, servidor público pode fazer greve, inclusive total, só não podendo investir predatoriamente contra o patrimônio do seu empregador, como por exemplo, nos casos de sabotagem.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'O STF (RE 693.456, 2016) reconhece o direito de greve dos servidores públicos, mas com limitações: em serviços essenciais, deve ser garantida a continuidade (greve não pode ser total).',
      incorretas: {
        A: 'O STF reconhece o direito de greve ao servidor.',
        B: 'Servidor pode se sindicalizar (art. 37, VI) e fazer greve (STF).',
        D: 'A greve total em serviço essencial (saúde) é ilícita — deve garantir continuidade.'
      },
      conceitoCobrado: 'Direito de greve do servidor público (STF, RE 693.456).',
      pegadinha: 'Achar que a greve do servidor pode ser total em serviço essencial.',
      comoApareceEmConcurso: 'Cobrança do entendimento do STF sobre greve de servidor.'
    },
    tags: ['greve', 'servidor público', 'STF']
  },
  {
    id: 'Q-REAL-DC-0410',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais — finalidades',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Um grupo de analistas estudava o impacto dos direitos sociais sobre políticas públicas municipais. Para exercitar o conteúdo, o instrutor propôs associação entre direitos previstos na Constituição e suas características essenciais. Coluna I: Direitos sociais — 1. Educação; 2. Saúde; 3. Moradia. Coluna II: Características — (__) Direito de acesso universal às ações e serviços; (__) Direito destinado ao pleno desenvolvimento da pessoa; (__) Direito relacionado a condições dignas de habitação. Marque a alternativa que apresenta a associação correta:',
    alternativas: [
      { id: 'A', texto: '1, 2, 3.' },
      { id: 'B', texto: '2, 1, 3.' },
      { id: 'C', texto: '2, 3, 1.' },
      { id: 'D', texto: '1, 3, 2.' },
      { id: 'E', texto: '3, 1, 2.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Saúde = acesso universal (art. 196); Educação = pleno desenvolvimento da pessoa (art. 205); Moradia = condições dignas de habitação.',
      incorretas: {
        A: 'Inverte as duas primeiras.',
        C: 'Inverte a segunda com a terceira.',
        D: 'Inverte a primeira com a segunda.',
        E: 'Inverte a primeira com a terceira.'
      },
      conceitoCobrado: 'Finalidades dos direitos sociais.',
      pegadinha: 'Trocar as características entre os direitos.',
      comoApareceEmConcurso: 'Questão de associação.'
    },
    tags: ['educação', 'saúde', 'moradia']
  },
  {
    id: 'Q-REAL-DC-0411',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais e socioeducação',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Os Direitos Sociais, elencados no Artigo 6º da Constituição da República Federativa do Brasil de 1988 (CRFB/88), são normas que exigem prestações positivas do Estado. No contexto do adolescente em cumprimento de medida socioeducativa, esses direitos são fundamentais. Sobre os Direitos Sociais, analise as afirmativas a seguir: I. A educação, a saúde e o trabalho são reconhecidos como direitos sociais. II. A profissionalização, assegurada no âmbito do Sistema Nacional de Atendimento Socioeducativo (SINASE), é uma concretização do direito social à educação e ao trabalho. III. O direito à moradia, previsto no Art. 6º, justifica que os quartos nas unidades socioeducativas tenham condições de habitabilidade e dignidade. Está correto o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I apenas.' },
      { id: 'B', texto: 'II e III apenas.' },
      { id: 'C', texto: 'I e II apenas.' },
      { id: 'D', texto: 'I, II e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'I é verdadeira (art. 6º); II é verdadeira (profissionalização concretiza educação + trabalho); III é verdadeira (moradia → habitabilidade digna).',
      incorretas: {
        A: 'II e III também estão corretas.',
        B: 'I também está correta.',
        C: 'III também está correta.'
      },
      conceitoCobrado: 'Direitos sociais aplicados ao SINASE.',
      pegadinha: 'Excluir a moradia do contexto socioeducativo.',
      comoApareceEmConcurso: 'Aplicação prática dos direitos sociais.'
    },
    tags: ['SINASE', 'direitos sociais']
  },
  {
    id: 'Q-REAL-DC-0412',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Rol do art. 6º',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Acerca das disposições inerentes aos direitos sociais, conforme o Art. 6º da CF/88, é correto afirmar que eles:',
    alternativas: [
      { id: 'A', texto: 'compreendem a liberdade de expressão e o direito de greve.' },
      { id: 'B', texto: 'priorizam a educação, saúde e segurança.' },
      { id: 'C', texto: 'incluem a moradia, o lazer e a proteção à maternidade e à infância.' },
      { id: 'D', texto: 'garantem o direito social homogêneo acima do individual e do coletivo.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Moradia, lazer e proteção à maternidade e à infância estão expressos no art. 6º.',
      incorretas: {
        A: 'Liberdade de expressão é direito individual (art. 5º, IX); greve é direito social do art. 9º, mas não está no rol do art. 6º.',
        B: 'Não há hierarquia/prioridade entre os direitos sociais do art. 6º.',
        D: 'Não existe "direito social homogêneo acima do individual e do coletivo" — os direitos são harmônicos.'
      },
      conceitoCobrado: 'Rol do art. 6º e ausência de hierarquia.',
      pegadinha: 'Inventar prioridade entre direitos sociais.',
      comoApareceEmConcurso: 'Cobrança direta do rol.'
    },
    tags: ['art. 6º', 'moradia', 'lazer']
  },
  {
    id: 'Q-REAL-DC-0413',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Somente direitos sociais',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Considerando as disposições da Constituição Federal, assinale a alternativa que apresenta SOMENTE direitos sociais.',
    alternativas: [
      { id: 'A', texto: 'Saúde, alimentação, liberdade e igualdade.' },
      { id: 'B', texto: 'Liberdade, vida, lazer e transporte.' },
      { id: 'C', texto: 'Propriedade, proteção à maternidade, igualdade e lazer.' },
      { id: 'D', texto: 'Lazer, educação, proteção à maternidade e à infância e alimentação.' },
      { id: 'E', texto: 'Vida, transporte, previdência social, liberdade, igualdade e moradia.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Lazer, educação, proteção à maternidade e à infância e alimentação estão todos no art. 6º.',
      incorretas: {
        A: 'Liberdade e igualdade são direitos individuais (art. 5º).',
        B: 'Liberdade e vida são direitos individuais.',
        C: 'Propriedade e igualdade são direitos individuais.',
        E: 'Vida, liberdade e igualdade são direitos individuais.'
      },
      conceitoCobrado: 'Distinção entre direitos sociais e individuais.',
      pegadinha: 'Misturar direitos individuais (art. 5º) com sociais (art. 6º).',
      comoApareceEmConcurso: 'Clássica de identificação.'
    },
    tags: ['art. 6º', 'direitos individuais']
  },
  {
    id: 'Q-REAL-DC-0414',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Renda básica familiar',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Pedro se encontra em situação de vulnerabilidade social e faz jus a determinado valor assegurado pelo Poder Público em programa de transferência de renda. Considerando os balizamentos estabelecidos pela Constituição da República em relação ao direito social a ser fruído por Pedro, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'se trata de programa temporário.' },
      { id: 'B', texto: 'o programa apresenta contornos previdenciários, tendo caráter contributivo.' },
      { id: 'C', texto: 'a renda básica recebida por Pedro é compreendida na perspectiva individual, não familiar.' },
      { id: 'D', texto: 'as normas e os requisitos de acesso são determinados em lei, não decorrendo diretamente da ordem constitucional.' },
      { id: 'E', texto: 'não deve ser observada a legislação fiscal e orçamentária, pois o valor recebido está relacionado à dignidade humana.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Art. 6º, parágrafo único: "cujas normas e requisitos de acesso serão determinados em lei" — é norma de eficácia limitada.',
      incorretas: {
        A: 'O programa é PERMANENTE (art. 6º, parágrafo único).',
        B: 'Não é previdenciário nem contributivo — é assistencial.',
        C: 'A renda é FAMILIAR, não individual.',
        E: 'A própria CF determina a observância da legislação fiscal e orçamentária.'
      },
      conceitoCobrado: 'Renda básica familiar (art. 6º, parágrafo único).',
      pegadinha: 'Trocar "familiar" por "individual" e "permanente" por "temporário".',
      comoApareceEmConcurso: 'Cobrança literal do parágrafo único do art. 6º.'
    },
    tags: ['renda básica', 'art. 6º, parágrafo único']
  },
  {
    id: 'Q-REAL-DC-0415',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Rol do art. 6º',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'São direitos sociais previstos no art. 6º da Constituição Federal: I. Alimentação. II. Trabalho. III. Previdência social. IV. Proteção à maternidade e à infância. Quais estão corretos?',
    alternativas: [
      { id: 'A', texto: 'Apenas I e II.' },
      { id: 'B', texto: 'Apenas I e III.' },
      { id: 'C', texto: 'Apenas II e IV.' },
      { id: 'D', texto: 'Apenas I, III e IV.' },
      { id: 'E', texto: 'I, II, III e IV.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'Todos os quatro estão expressos no art. 6º.',
      incorretas: {
        A: 'III e IV também estão no art. 6º.',
        B: 'II e IV também estão no art. 6º.',
        C: 'I e III também estão no art. 6º.',
        D: 'II também está no art. 6º.'
      },
      conceitoCobrado: 'Rol do art. 6º.',
      pegadinha: 'Excluir algum item do rol.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 6º']
  },
  {
    id: 'Q-REAL-DC-0416',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Associação sindical',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A Constituição Federal de 1988, em seu artigo 8º, prevê que é livre a associação profissional ou sindical. Sobre o tema, analise as assertivas abaixo: I. A lei não poderá exigir autorização do Estado para a fundação de sindicato, ressalvado o registro no órgão competente, vedadas ao Poder Público a interferência e a intervenção na organização sindical. II. É facultativa a participação dos sindicatos nas negociações coletivas de trabalho. III. O aposentado filiado tem direito a votar, porém não pode ser votado nas organizações sindicais. IV. Ninguém será obrigado a filiar-se ou a manter-se filiado a sindicato. Quais estão corretas?',
    alternativas: [
      { id: 'A', texto: 'Apenas I.' },
      { id: 'B', texto: 'Apenas I e II.' },
      { id: 'C', texto: 'Apenas I e IV.' },
      { id: 'D', texto: 'Apenas II e III.' },
      { id: 'E', texto: 'Apenas III e IV.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'I (art. 8º, I) e IV (art. 8º, V) estão corretas.',
      incorretas: {
        A: 'IV também está correta.',
        B: 'II é falsa (participação é OBRIGATÓRIA — art. 8º, VI).',
        D: 'II e III são falsas.',
        E: 'III é falsa (aposentado pode votar E ser votado — art. 8º, VII).'
      },
      conceitoCobrado: 'Art. 8º — incisos I, V, VI e VII.',
      pegadinha: 'Trocar "obrigatória" por "facultativa" (II) e "votar e ser votado" por "só votar" (III).',
      comoApareceEmConcurso: 'Cobrança da literalidade do art. 8º.'
    },
    tags: ['art. 8º', 'sindicalização']
  },
  {
    id: 'Q-REAL-DC-0417',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direito social — identificação',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Durante uma palestra para novos servidores da Câmara, Marcelo, Técnico Legislativo, explica que os direitos sociais são garantias previstas na Constituição. Qual dos direitos abaixo é considerado um direito social?',
    alternativas: [
      { id: 'A', texto: 'Direito à segurança pública.' },
      { id: 'B', texto: 'Direito à vida.' },
      { id: 'C', texto: 'Direito à educação.' },
      { id: 'D', texto: 'Direito à propriedade.' },
      { id: 'E', texto: 'Direito à liberdade de expressão.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Educação está expressa no art. 6º.',
      incorretas: {
        A: 'Segurança pública é dever do Estado (art. 144), não direito social do art. 6º.',
        B: 'Vida é direito individual (art. 5º, caput).',
        D: 'Propriedade é direito individual (art. 5º, XXII).',
        E: 'Liberdade de expressão é direito individual (art. 5º, IX).'
      },
      conceitoCobrado: 'Identificação de direito social.',
      pegadinha: 'Confundir "segurança" (social, art. 6º) com "segurança pública" (art. 144).',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['art. 6º', 'educação']
  },
  {
    id: 'Q-REAL-DC-0418',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Associação sindical — V/F',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A associação sindical refere-se à formação de grupos de trabalhadores que se unem em uma entidade comum para representar e defender seus interesses laborais, econômicos e sociais. Nesse contexto, analise as afirmativas abaixo e indique "V" para verdadeiro e "F" para falso. (__) A lei poderá exigir autorização do Estado para a fundação de sindicato, ressalvado o registro no órgão competente, vedadas ao Poder Público a interferência e a intervenção na organização sindical. (__) Ninguém será obrigado a filiar-se ou a manter-se filiado a sindicato. (__) É permitida a dispensa do empregado sindicalizado a partir do registro da candidatura a cargo de direção ou representação sindical e, se eleito, ainda que suplente, até um ano após o final do mandato.',
    alternativas: [
      { id: 'A', texto: 'V, F, V.' },
      { id: 'B', texto: 'F, V, F.' },
      { id: 'C', texto: 'F, F, V.' },
      { id: 'D', texto: 'V, V, F.' },
      { id: 'E', texto: 'F, F, F.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'F (a lei NÃO poderá exigir autorização — art. 8º, I), V (art. 8º, V), F (é VEDADA a dispensa, não permitida — art. 8º, VIII).',
      incorretas: {
        A: 'A primeira é falsa; a terceira é falsa.',
        C: 'A terceira é falsa.',
        D: 'A primeira e a terceira são falsas.',
        E: 'A segunda é verdadeira.'
      },
      conceitoCobrado: 'Art. 8º, I, V e VIII.',
      pegadinha: 'Trocar "não poderá" por "poderá" (I) e "vedada" por "permitida" (III).',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 8º', 'estabilidade sindical']
  },
  {
    id: 'Q-REAL-DC-0419',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Rol do art. 6º',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Avalie se os direitos sociais, na forma da Constituição, incluem: I. o transporte; II. o lazer; III. a segurança; IV. a proteção à infância; V. a proteção ao meio ambiente. Estão corretos os itens:',
    alternativas: [
      { id: 'A', texto: 'I, II e III, apenas.' },
      { id: 'B', texto: 'III, IV e V, apenas.' },
      { id: 'C', texto: 'I, II, III e IV, apenas.' },
      { id: 'D', texto: 'I, II, III e V, apenas.' },
      { id: 'E', texto: 'I, II, III, IV e V.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'I (transporte — EC 90/2015), II (lazer), III (segurança) e IV (proteção à infância) estão no art. 6º. V (meio ambiente) NÃO está no rol de direitos sociais — é direito de todos (art. 225).',
      incorretas: {
        A: 'IV também está correta.',
        B: 'I e II também estão corretos.',
        D: 'V não é direito social do art. 6º.',
        E: 'V não é direito social do art. 6º.'
      },
      conceitoCobrado: 'Rol do art. 6º x meio ambiente (art. 225).',
      pegadinha: 'Incluir "proteção ao meio ambiente" no rol do art. 6º.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['art. 6º', 'meio ambiente']
  },
  {
    id: 'Q-REAL-DC-0420',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos individuais x sociais',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Considerando o disposto na Constituição da República Federativa do Brasil de 1988, no tocante aos direitos e deveres individuais e coletivos e aos direitos sociais, leia os itens a seguir: I – Todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, independentemente de autorização, desde que não frustrem outra reunião anteriormente convocada para o mesmo local, sendo apenas exigido prévio aviso à autoridade competente. II – No caso de iminente perigo público, a autoridade competente poderá usar de propriedade particular, assegurada ao proprietário indenização ulterior, se houver dano. III – Para preservar a identidade da autoridade policial, o preso não tem direito à identificação dos responsáveis por sua prisão, entretanto, terá direito à identificação dos responsáveis pelo seu interrogatório policial. IV – Na forma do disposto na Constituição Federal de 1988, são direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância, e a assistência aos desamparados. Assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'Apenas os itens I e III estão corretos.' },
      { id: 'B', texto: 'Apenas o item III está incorreto.' },
      { id: 'C', texto: 'Apenas os itens I e II estão incorretos.' },
      { id: 'D', texto: 'Todos os itens estão corretos.' },
      { id: 'E', texto: 'Apenas os itens III e IV estão corretos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'I (art. 5º, XVI), II (art. 5º, XXV) e IV (art. 6º) estão corretos. III está INCORRETO: o art. 5º, LXIV garante ao preso o direito à identificação dos responsáveis por sua prisão OU por seu interrogatório policial.',
      incorretas: {
        A: 'III está incorreto.',
        C: 'I e II estão corretos.',
        D: 'III está incorreto.',
        E: 'I e II também estão corretos.'
      },
      conceitoCobrado: 'Direitos individuais (art. 5º) e sociais (art. 6º).',
      pegadinha: 'Achar que o preso só tem direito à identificação no interrogatório.',
      comoApareceEmConcurso: 'Cobrança literal do art. 5º, LXIV.'
    },
    tags: ['art. 5º', 'art. 6º', 'preso']
  },
  {
    id: 'Q-REAL-DC-0421',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais — INCORRETA',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Os direitos sociais são garantias fundamentais de caráter prestacional, previstas na Constituição Federal, que buscam assegurar condições mínimas de dignidade e justiça social aos cidadãos, promovendo o bem-estar coletivo. Dada a sua importância, estão incluídos no rol dos Direitos e Garantias Fundamentais. Nesse sentido, com base nas disposições da Constituição Federal sobre a matéria, analise as alternativas e assinale a opção INCORRETA:',
    alternativas: [
      { id: 'A', texto: 'Nas empresas de mais de cinquenta empregados, é assegurada a eleição de um representante destes com a finalidade exclusiva de promover-lhes o entendimento direto com os empregadores.' },
      { id: 'B', texto: 'Todo brasileiro em situação de vulnerabilidade social terá direito a uma renda básica familiar, garantida pelo poder público em programa permanente de transferência de renda, cujas normas e requisitos de acesso serão determinados em lei, observada a legislação fiscal e orçamentária.' },
      { id: 'C', texto: 'É assegurada a participação dos trabalhadores e empregadores nos colegiados dos órgãos públicos em que seus interesses profissionais ou previdenciários sejam objeto de discussão e deliberação.' },
      { id: 'D', texto: 'É assegurado o direito de greve, competindo aos trabalhadores decidir sobre a oportunidade de exercê-lo e sobre os interesses que devam por meio dele defender.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A está INCORRETA: o art. 11 exige mais de DUZENTOS empregados (não cinquenta).',
      incorretas: {
        B: 'Correta — art. 6º, parágrafo único.',
        C: 'Correta — art. 10.',
        D: 'Correta — art. 9º, caput.'
      },
      conceitoCobrado: 'Art. 11 (representante dos empregados).',
      pegadinha: 'Trocar 200 por 50.',
      comoApareceEmConcurso: 'Cobrança literal do art. 11.'
    },
    tags: ['art. 11', 'representante']
  },
  {
    id: 'Q-REAL-DC-0422',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais — identificação',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Os Direitos Sociais previstos no Texto Fundamental da República são caracterizados como espécies do gênero garantias fundamentais, podendo citar-se, dentre eles, a prerrogativa à:',
    alternativas: [
      { id: 'A', texto: 'liberdade.' },
      { id: 'B', texto: 'igualdade.' },
      { id: 'C', texto: 'moradia.' },
      { id: 'D', texto: 'propriedade privada.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Moradia é direito social (art. 6º, EC 26/2000).',
      incorretas: {
        A: 'Liberdade é direito individual (art. 5º).',
        B: 'Igualdade é direito individual (art. 5º, caput).',
        D: 'Propriedade é direito individual (art. 5º, XXII).'
      },
      conceitoCobrado: 'Identificação de direito social.',
      pegadinha: 'Misturar direitos individuais e sociais.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['art. 6º', 'moradia']
  },
  {
    id: 'Q-REAL-DC-0423',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais — identificação',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Nos termos da Constituição da República Federativa do Brasil, são alguns dos direitos sociais, dentre outros:',
    alternativas: [
      { id: 'A', texto: 'a educação, a saúde e a alimentação.' },
      { id: 'B', texto: 'o trabalho, a moradia e a dignidade da pessoa humana.' },
      { id: 'C', texto: 'o lazer, a segurança e a intimidade.' },
      { id: 'D', texto: 'a proteção à maternidade e à infância, a assistência aos desamparados e o direito à herança.' },
      { id: 'E', texto: 'o transporte, a previdência social e a inviolabilidade do domicílio.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Educação, saúde e alimentação estão no art. 6º.',
      incorretas: {
        B: 'Dignidade da pessoa humana é FUNDAMENTO (art. 1º, III), não direito social.',
        C: 'Intimidade é direito individual (art. 5º, X).',
        D: 'Herança é direito individual (art. 5º, XXX).',
        E: 'Inviolabilidade do domicílio é direito individual (art. 5º, XI).'
      },
      conceitoCobrado: 'Distinção entre fundamentos, direitos individuais e sociais.',
      pegadinha: 'Misturar dignidade (fundamento) com direitos sociais.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['art. 6º', 'direitos individuais']
  },
  {
    id: 'Q-REAL-DC-0424',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Eficácia da norma — renda básica',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'De acordo com o Art. 6º, parágrafo único, da Constituição da República de 1988, todo brasileiro em situação de vulnerabilidade social terá direito a uma renda básica familiar, garantida pelo poder público em programa permanente de transferência de renda, cujas normas e requisitos de acesso serão determinados em lei, observada a legislação fiscal e orçamentária. Do referido preceito obtém-se uma norma constitucional de eficácia:',
    alternativas: [
      { id: 'A', texto: 'plena.' },
      { id: 'B', texto: 'contida.' },
      { id: 'C', texto: 'limitada e de princípio institutivo.' },
      { id: 'D', texto: 'limitada e de princípio programático.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A norma do art. 6º, parágrafo único, é de eficácia LIMITADA, pois depende de lei para produzir efeitos plenos, e de princípio PROGRAMÁTICO, pois traça diretriz a ser concretizada pelo Estado.',
      incorretas: {
        A: 'Não é plena — depende de regulamentação.',
        B: 'Não é contida — não há direito imediatamente exigível.',
        C: 'É programática (diretriz), não institutiva (cria órgão).'
      },
      conceitoCobrado: 'Classificação das normas constitucionais quanto à eficácia.',
      pegadinha: 'Confundir "programática" com "institutiva".',
      comoApareceEmConcurso: 'Cobrança da classificação de José Afonso da Silva.'
    },
    tags: ['eficácia limitada', 'renda básica']
  },
  {
    id: 'Q-REAL-DC-0425',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Renda básica familiar',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Acerca do direito à renda básica familiar estabelecido pela Constituição Federal, assinale a alternativa correta: I. É um direito de todo brasileiro. II. Trata-se de uma renda garantida pelo poder público em programas permanentes. III. Decretos Municipais devem estabelecer as normas e requisitos de acesso.',
    alternativas: [
      { id: 'A', texto: 'Apenas I está correto.' },
      { id: 'B', texto: 'Apenas II está correto.' },
      { id: 'C', texto: 'Apenas III está correto.' },
      { id: 'D', texto: 'Apenas I e II estão corretos.' },
      { id: 'E', texto: 'Apenas II e III estão corretos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Apenas II está correto: o programa é permanente (art. 6º, parágrafo único). I é incorreto porque só alcança brasileiros em situação de vulnerabilidade social. III é incorreto porque as normas e requisitos são determinados em LEI, não por decreto municipal.',
      incorretas: {
        A: 'I é incompleto (só vulneráveis).',
        C: 'III é falso.',
        D: 'I é incompleto.',
        E: 'III é falso.'
      },
      conceitoCobrado: 'Renda básica familiar (art. 6º, parágrafo único).',
      pegadinha: 'Achar que é direito de "todo brasileiro" e que decreto pode regulamentar.',
      comoApareceEmConcurso: 'Cobrança literal do parágrafo único.'
    },
    tags: ['renda básica', 'art. 6º']
  },
  {
    id: 'Q-REAL-DC-0426',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Estabilidade do sindicalizado',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A Constituição Federal de 1988 rege que o empregado sindicalizado:',
    alternativas: [
      { id: 'A', texto: 'está inibido de ser dispensado do emprego a partir do momento do registro de sua candidatura até um ano após o final do seu mandato.' },
      { id: 'B', texto: 'está inibido de ser dispensado do emprego a partir do momento de sua posse até um ano após o término do mandato.' },
      { id: 'C', texto: 'pode ser demitido por qualquer motivo, a partir do registro da sua candidatura, desde que possua mais de um ano de vínculo empregatício.' },
      { id: 'D', texto: 'pode ser demitido sem justa causa, a partir do momento de sua posse, ainda que o seu mandato possua mais de um ano de duração.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 8º, VIII: a estabilidade sindical vai do REGISTRO DA CANDIDATURA até UM ANO após o final do mandato, salvo falta grave.',
      incorretas: {
        B: 'O marco inicial é o registro da candidatura, não a posse.',
        C: 'A dispensa é vedada no período de estabilidade.',
        D: 'A dispensa é vedada no período de estabilidade.'
      },
      conceitoCobrado: 'Estabilidade do empregado sindicalizado (art. 8º, VIII).',
      pegadinha: 'Trocar "registro da candidatura" por "posse".',
      comoApareceEmConcurso: 'Cobrança literal do art. 8º, VIII.'
    },
    tags: ['estabilidade sindical', 'art. 8º']
  },
  {
    id: 'Q-REAL-DC-0427',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Texto do art. 6º',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'O capítulo II da Constituição Federal/88 trata sobre os direitos sociais e em seu Art. 6º descreve quais são estes direitos. Assinale a alternativa que representa os direitos sociais de acordo com o Art. 6º da CF/88.',
    alternativas: [
      { id: 'A', texto: 'São direitos sociais a educação, a saúde, a alimentação, o trabalho e a moradia.' },
      { id: 'B', texto: 'São direitos sociais a educação, a saúde, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, na forma desta Constituição.' },
      { id: 'C', texto: 'São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, a segurança, a previdência social, a proteção à maternidade e à infância, a assistência aos desamparados, na forma desta Constituição.' },
      { id: 'D', texto: 'São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância, a assistência aos desamparados, na forma desta Constituição.' },
      { id: 'E', texto: 'São direitos sociais a educação, a saúde, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância, na forma desta Constituição.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'D traz o rol COMPLETO do art. 6º (com alimentação, lazer, proteção à maternidade e à infância e assistência aos desamparados).',
      incorretas: {
        A: 'Faltam transporte, lazer, segurança, previdência, proteção à maternidade e à infância e assistência aos desamparados.',
        B: 'Faltam alimentação, proteção à maternidade e à infância e assistência aos desamparados.',
        C: 'Falta o lazer.',
        E: 'Falta a alimentação.'
      },
      conceitoCobrado: 'Texto integral do art. 6º.',
      pegadinha: 'Omitir um dos direitos do rol.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 6º', 'rol completo']
  },
  {
    id: 'Q-REAL-DC-0428',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Competência concorrente e direitos trabalhistas',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Com base na Constituição Federal, analise as assertivas abaixo, assinalando V, se verdadeiras, ou F, se falsas. (__) Compete à União, aos Estados e ao Distrito Federal legislar concorrentemente sobre proteção à infância e à juventude. (__) A saúde é um direito social constitucionalmente previsto. (__) Piso salarial proporcional à extensão e à complexidade do trabalho é direito dos trabalhadores urbanos e rurais. A ordem correta de preenchimento dos parênteses, de cima para baixo, é:',
    alternativas: [
      { id: 'A', texto: 'V – V – V.' },
      { id: 'B', texto: 'V – F – F.' },
      { id: 'C', texto: 'V – F – V.' },
      { id: 'D', texto: 'F – V – V.' },
      { id: 'E', texto: 'F – F – F.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'V (art. 24, XV), V (art. 6º), V (art. 7º, V).',
      incorretas: {
        B: 'A segunda e a terceira são verdadeiras.',
        C: 'A terceira é verdadeira.',
        D: 'A primeira é verdadeira.',
        E: 'Todas são verdadeiras.'
      },
      conceitoCobrado: 'Competência concorrente + direitos sociais + direitos trabalhistas.',
      pegadinha: 'Negar a competência concorrente sobre infância e juventude.',
      comoApareceEmConcurso: 'Questão interdisciplinar.'
    },
    tags: ['art. 24', 'art. 6º', 'art. 7º']
  },
  {
    id: 'Q-REAL-DC-0429',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Associação — suspensão x dissolução',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'A Associação Alpha, regularmente constituída e em funcionamento há mais de dois anos no estado de Rondônia, teve suas atividades suspensas por determinação do Poder Judiciário. Neste caso, para ter validade, a referida decisão judicial:',
    alternativas: [
      { id: 'A', texto: 'Depende de trânsito em julgado, assim como a dissolução compulsória da associação também depende do trânsito em julgado da decisão judicial.' },
      { id: 'B', texto: 'Independe de trânsito em julgado, ao contrário da dissolução compulsória da associação que depende do trânsito em julgado da decisão judicial.' },
      { id: 'C', texto: 'Depende de trânsito em julgado, ao contrário da dissolução compulsória da associação que independe do trânsito em julgado da decisão judicial.' },
      { id: 'D', texto: 'Independe de trânsito em julgado, assim como a dissolução compulsória da associação também independe do trânsito em julgado da decisão judicial.' },
      { id: 'E', texto: 'Depende de trânsito em julgado em primeira instância, ao contrário da dissolução compulsória da associação que depende do trânsito em julgado em segunda instância.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 5º, XIX: a SUSPENSÃO das atividades exige apenas decisão judicial (independe de trânsito em julgado); a DISSOLUÇÃO compulsória exige trânsito em julgado.',
      incorretas: {
        A: 'A suspensão independe de trânsito em julgado.',
        C: 'Inverte as regras.',
        D: 'A dissolução depende de trânsito em julgado.',
        E: 'Não há distinção por instância.'
      },
      conceitoCobrado: 'Suspensão x dissolução de associação (art. 5º, XIX).',
      pegadinha: 'Inverter os requisitos.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['associação', 'art. 5º, XIX']
  },
  {
    id: 'Q-REAL-DC-0430',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais — direitos humanos',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre os direitos e garantias fundamentais, a Constituição Federal de 1988: I. é considerada um avanço no que tange à defesa dos Direitos Humanos Universais. II. assegura a ampliação dos direitos sociais. III. define de maneira severa e punitiva os direitos e deveres do cidadão brasileiro. É correto o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I, apenas.' },
      { id: 'B', texto: 'I e II, apenas.' },
      { id: 'C', texto: 'II e III, apenas.' },
      { id: 'D', texto: 'I, II e III.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'I (a CF/88 é marco na proteção de direitos humanos) e II (ampliou direitos sociais) estão corretas. III é falsa: a CF/88 não define direitos de forma "severa e punitiva".',
      incorretas: {
        A: 'II também está correta.',
        C: 'I também está correta; III é falsa.',
        D: 'III é falsa.'
      },
      conceitoCobrado: 'Características da CF/88.',
      pegadinha: 'Achar que a CF/88 é "punitiva".',
      comoApareceEmConcurso: 'Questão conceitual.'
    },
    tags: ['CF/88', 'direitos humanos']
  },
  {
    id: 'Q-REAL-DC-0431',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Filiação sindical',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'A Constituição Federal de 1988 consolidou a legislação anterior que autorizava a criação de sindicato de trabalhadores. A filiação sindical no Brasil é:',
    alternativas: [
      { id: 'A', texto: 'facultativa para todos os trabalhadores.' },
      { id: 'B', texto: 'facultativa para os aposentados.' },
      { id: 'C', texto: 'obrigatória para os aposentados.' },
      { id: 'D', texto: 'obrigatória para todos os trabalhadores.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 8º, V: "ninguém será obrigado a filiar-se ou a manter-se filiado a sindicato" — a filiação é facultativa para TODOS.',
      incorretas: {
        B: 'É facultativa para todos, não só para aposentados.',
        C: 'Não há obrigatoriedade.',
        D: 'Não há obrigatoriedade.'
      },
      conceitoCobrado: 'Liberdade sindical (art. 8º, V).',
      pegadinha: 'Achar que a filiação é obrigatória.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['filiação sindical', 'art. 8º, V']
  },
  {
    id: 'Q-REAL-DC-0432',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais — rol',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Conforme previsto na Constituição Federal, são direitos sociais: I. Educação, saúde e alimentação. II. Proteção à maternidade e à infância; assistência aos desempregados. III. Transporte, lazer, segurança e previdência social. Está(ão) CORRETO(S):',
    alternativas: [
      { id: 'A', texto: 'Somente o item I.' },
      { id: 'B', texto: 'Somente o item II.' },
      { id: 'C', texto: 'Somente os itens I e III.' },
      { id: 'D', texto: 'Todos os itens.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'I e III estão corretos. II é INCORRETO porque o art. 6º fala em "assistência aos DESAMPARADOS" (não "desempregados").',
      incorretas: {
        A: 'III também está correto.',
        B: 'II está incorreto.',
        D: 'II está incorreto.'
      },
      conceitoCobrado: 'Rol do art. 6º.',
      pegadinha: 'Trocar "desamparados" por "desempregados".',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 6º', 'desamparados']
  },
  {
    id: 'Q-REAL-DC-0433',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Art. 6º — alternativas',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A Constituição Federal traz os direitos sociais em seu artigo 6º. Assim, assinale a assertiva correta:',
    alternativas: [
      { id: 'A', texto: 'A proteção à maternidade e a infância não são direitos sociais.' },
      { id: 'B', texto: 'Nas empresas de mais de cem empregados, é assegurada a eleição de um representante destes com a finalidade exclusiva de promover-lhes o entendimento direto com os empregadores.' },
      { id: 'C', texto: 'Todo brasileiro em situação de vulnerabilidade social terá direito a uma renda básica familiar, garantida pelo poder público em programa permanente de transferência de renda, cujas normas e requisitos de acesso serão determinados em lei.' },
      { id: 'D', texto: 'O lazer não é considerado um direito social.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'C reproduz o art. 6º, parágrafo único.',
      incorretas: {
        A: 'Proteção à maternidade e à infância SÃO direitos sociais.',
        B: 'O art. 11 exige mais de DUZENTOS empregados (não cem).',
        D: 'Lazer É direito social.'
      },
      conceitoCobrado: 'Art. 6º e parágrafo único.',
      pegadinha: 'Trocar 200 por 100 (B).',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 6º', 'renda básica', 'art. 11']
  },
  {
    id: 'Q-REAL-DC-0434',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Art. 8º — INCORRETA',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Assinale a alternativa INCORRETA. Segundo o Art. 8º CF/88 — É livre a associação profissional ou sindical, observado o seguinte:',
    alternativas: [
      { id: 'A', texto: 'ninguém será obrigado a filiar-se ou a manter-se filiado a sindicato.' },
      { id: 'B', texto: 'aposentado filiado tem direito a votar e ser votado nas organizações sindicais.' },
      { id: 'C', texto: 'é obrigatória a participação dos sindicatos nas negociações coletivas de trabalho.' },
      { id: 'D', texto: 'ao sindicato não cabe a defesa dos direitos e interesses coletivos, mas somente os individuais da categoria, inclusive em questões judiciais ou administrativas.' },
      { id: 'E', texto: 'a lei não poderá exigir autorização do Estado para a fundação de sindicato, ressalvado o registro no órgão competente, vedadas ao Poder Público a interferência e a intervenção na organização sindical.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'D está INCORRETA: o art. 8º, III diz que ao sindicato cabe a defesa dos direitos e interesses COLETIVOS OU INDIVIDUAIS da categoria, inclusive em questões judiciais ou administrativas.',
      incorretas: {
        A: 'Correta — art. 8º, V.',
        B: 'Correta — art. 8º, VII.',
        C: 'Correta — art. 8º, VI.',
        E: 'Correta — art. 8º, I.'
      },
      conceitoCobrado: 'Art. 8º, III (defesa coletiva e individual).',
      pegadinha: 'Restringir a atuação do sindicato aos interesses individuais.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 8º', 'defesa sindical']
  },
  {
    id: 'Q-REAL-DC-0435',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Estabilidade do suplente',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Considere que Maurício é empregado sindicalizado da Empresa ABC e foi eleito como suplente para o cargo de representação sindical. De acordo com o disposto na Constituição Federal, é correto afirmar que Maurício:',
    alternativas: [
      { id: 'A', texto: 'apenas pôde se candidatar, pois já estava sindicalizado há pelo menos cinco anos.' },
      { id: 'B', texto: 'somente teria estabilidade caso tivesse sido eleito para o cargo de direção do sindicato.' },
      { id: 'C', texto: 'não pode ser dispensado até dois anos após o final do mandato.' },
      { id: 'D', texto: 'possui estabilidade no cargo, adquirida no momento em que foi eleito.' },
      { id: 'E', texto: 'não pode ser dispensado até um ano após o final do mandato, salvo se cometer falta grave.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'Art. 8º, VIII: a estabilidade alcança o eleito, AINDA QUE SUPLENTE, até UM ANO após o final do mandato, salvo falta grave.',
      incorretas: {
        A: 'Não há exigência de 5 anos de sindicalização.',
        B: 'A estabilidade alcança também o suplente.',
        C: 'O prazo é de UM ano, não dois.',
        D: 'A estabilidade é provisória, não definitiva.'
      },
      conceitoCobrado: 'Estabilidade do suplente (art. 8º, VIII).',
      pegadinha: 'Achar que só o titular tem estabilidade ou que o prazo é de 2 anos.',
      comoApareceEmConcurso: 'Cobrança literal do art. 8º, VIII.'
    },
    tags: ['estabilidade', 'suplente', 'art. 8º']
  },
  {
    id: 'Q-REAL-DC-0436',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Irredutibilidade salarial',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Em que pese os direitos sociais dos trabalhadores urbanos e rurais, definidos pela Constituição Federal de 1988, das assertivas apresentadas, é CORRETO afirmar que será garantido a irredutibilidade do salário, salvo por: I – Convenção coletiva. II – Acordo coletivo. III – Comprovado estado de necessidade do empregador.',
    alternativas: [
      { id: 'A', texto: 'I e II.' },
      { id: 'B', texto: 'II e III.' },
      { id: 'C', texto: 'I e III.' },
      { id: 'D', texto: 'II.' },
      { id: 'E', texto: 'I, II e III.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 7º, VI: "irredutibilidade do salário, salvo o disposto em convenção ou acordo coletivo".',
      incorretas: {
        B: 'III não autoriza redução.',
        C: 'III não autoriza redução.',
        D: 'I também autoriza.',
        E: 'III não autoriza redução.'
      },
      conceitoCobrado: 'Irredutibilidade salarial (art. 7º, VI).',
      pegadinha: 'Achar que estado de necessidade do empregador autoriza redução.',
      comoApareceEmConcurso: 'Cobrança literal do art. 7º, VI.'
    },
    tags: ['irredutibilidade', 'art. 7º, VI']
  },
  {
    id: 'Q-REAL-DC-0437',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Renda básica, seguro-desemprego e transporte',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Relativamente aos termos da Constituição Federal, analise as assertivas abaixo, assinalando V, se verdadeiras, ou F, se falsas. (__) Todo brasileiro em situação de vulnerabilidade social terá direito a uma renda básica familiar. (__) O seguro-desemprego é direito dos trabalhadores urbanos e rurais, devendo ser concedido nos casos em que o funcionário pede demissão. (__) O transporte é direito social previsto na Constituição. A ordem correta de preenchimento dos parênteses, de cima para baixo, é:',
    alternativas: [
      { id: 'A', texto: 'V – F – F.' },
      { id: 'B', texto: 'V – V – V.' },
      { id: 'C', texto: 'V – F – V.' },
      { id: 'D', texto: 'F – V – V.' },
      { id: 'E', texto: 'F – F – F.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'V (art. 6º, parágrafo único), F (seguro-desemprego é para dispensa SEM justa causa, não para pedido de demissão), V (transporte — EC 90/2015).',
      incorretas: {
        A: 'A terceira é verdadeira.',
        B: 'A segunda é falsa.',
        D: 'A primeira é verdadeira.',
        E: 'A primeira e a terceira são verdadeiras.'
      },
      conceitoCobrado: 'Renda básica + seguro-desemprego + transporte.',
      pegadinha: 'Achar que o seguro-desemprego cabe no pedido de demissão.',
      comoApareceEmConcurso: 'Cobrança combinada.'
    },
    tags: ['renda básica', 'seguro-desemprego', 'transporte']
  },
  {
    id: 'Q-REAL-DC-0438',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'EC 53/2006',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Uma das alterações instituídas pela Emenda Constitucional nº 53/2006 foi:',
    alternativas: [
      { id: 'A', texto: 'Assistência gratuita aos filhos e dependentes desde o nascimento até 5 (cinco) anos de idade em creches e pré-escolas.' },
      { id: 'B', texto: 'Atendimento auxiliar de intérpretes da Língua Brasileira de Sinais – Libras – para alunos com deficiência.' },
      { id: 'C', texto: 'Exclusão do plano de carreira docente por tempo de trabalho, em detrimento do plano de mérito e excelência acadêmica.' },
      { id: 'D', texto: 'Ampliação do ensino em tempo integral para creches e pré-escolas, e também para o ensino médio nas escolas da União.' },
      { id: 'E', texto: 'Estabelecimento da autonomia dos estados e municípios em relação aos currículos e calendários escolares.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A EC 53/2006 deu nova redação ao art. 7º, XXV, assegurando assistência gratuita aos filhos e dependentes desde o nascimento até 5 anos em creches e pré-escolas.',
      incorretas: {
        B: 'Libras foi tratada pela Lei 10.436/2002 e pelo Decreto 5.626/2005, não pela EC 53/2006.',
        C: 'A EC 53/2006 não excluiu plano de carreira.',
        D: 'A EC 53/2006 não tratou de ensino integral.',
        E: 'A EC 53/2006 não tratou de currículos/calendários.'
      },
      conceitoCobrado: 'EC 53/2006 (art. 7º, XXV).',
      pegadinha: 'Confundir com outras normas educacionais.',
      comoApareceEmConcurso: 'Cobrança de emenda específica.'
    },
    tags: ['EC 53/2006', 'creches']
  },
  {
    id: 'Q-REAL-DC-0439',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Locomoção, greve e associação',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Nos termos da Constituição Federal, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'é livre a locomoção no território nacional em tempo de paz e de guerra, podendo qualquer pessoa, nos termos da lei, nele entrar, permanecer ou dele sair com seus bens.' },
      { id: 'B', texto: 'é assegurado o direito de greve, competindo aos trabalhadores decidir sobre a oportunidade de exercê-lo e sobre os interesses que devam por meio dele defender.' },
      { id: 'C', texto: 'as entidades associativas, independentemente de autorização, têm legitimidade para representar seus filiados judicial ou extrajudicialmente.' },
      { id: 'D', texto: 'a administração pública indireta dos Estados obedecerá aos princípios de legalidade, relatividade dos direitos, moralidade, publicidade e eficiência.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'B reproduz o art. 9º, caput.',
      incorretas: {
        A: 'A locomoção é livre em tempo de PAZ (art. 5º, XV), não em tempo de guerra.',
        C: 'As entidades associativas precisam de AUTORIZAÇÃO expressa para representar filiados (art. 5º, XXI).',
        D: 'O princípio é da LEGALIDADE, não "relatividade dos direitos"; e o correto é "impessoalidade".'
      },
      conceitoCobrado: 'Direito de greve (art. 9º).',
      pegadinha: 'Trocar "paz" por "paz e guerra" (A) e "autorização" por "independentemente" (C).',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['greve', 'art. 9º']
  },
  {
    id: 'Q-REAL-DC-0440',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Irredutibilidade e devido processo',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Com fundamento na Constituição Federal, analise as assertivas abaixo: I. É direito dos trabalhadores urbanos e rurais a irredutibilidade do salário, mesmo após acordo coletivo. II. Ninguém será processado nem sentenciado senão pela autoridade competente. III. É livre a associação profissional ou sindical. Quais estão corretas?',
    alternativas: [
      { id: 'A', texto: 'Apenas II.' },
      { id: 'B', texto: 'Apenas I e II.' },
      { id: 'C', texto: 'Apenas I e III.' },
      { id: 'D', texto: 'Apenas II e III.' },
      { id: 'E', texto: 'I, II e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'II (art. 5º, LIII) e III (art. 8º, caput) estão corretas. I é FALSA: o art. 7º, VI admite redução por convenção ou acordo coletivo.',
      incorretas: {
        A: 'III também está correta.',
        B: 'I é falsa.',
        C: 'I é falsa.',
        E: 'I é falsa.'
      },
      conceitoCobrado: 'Irredutibilidade (art. 7º, VI) + devido processo + liberdade sindical.',
      pegadinha: 'Achar que a irredutibilidade é absoluta.',
      comoApareceEmConcurso: 'Cobrança combinada.'
    },
    tags: ['irredutibilidade', 'art. 5º, LIII', 'art. 8º']
  },
  {
    id: 'Q-REAL-DC-0441',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Liberdade sindical',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Relativamente à garantia da liberdade de associação profissional ou sindical prevista na Constituição da República de 1988, é correto afirmar:',
    alternativas: [
      { id: 'A', texto: 'Ninguém será obrigado a filiar-se ou a manter-se filiado a sindicato, salvo imposição de lei local.' },
      { id: 'B', texto: 'O aposentado filiado não tem direito a votar e ser votado nas organizações sindicais.' },
      { id: 'C', texto: 'Ao sindicato cabe a defesa judicial dos direitos e interesses coletivos da categoria, sendo vedada a atuação em defesas administrativas.' },
      { id: 'D', texto: 'A lei não poderá exigir autorização do Estado para a fundação de sindicato, ressalvado o registro no órgão competente.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'D reproduz o art. 8º, I.',
      incorretas: {
        A: 'Não há exceção por lei local (art. 8º, V).',
        B: 'O aposentado TEM direito a votar e ser votado (art. 8º, VII).',
        C: 'O sindicato atua em defesas judiciais E administrativas (art. 8º, III).'
      },
      conceitoCobrado: 'Art. 8º, I, III, V e VII.',
      pegadinha: 'Inventar exceção por lei local (A).',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 8º', 'liberdade sindical']
  },
  {
    id: 'Q-REAL-DC-0442',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais x fundamentos',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'De acordo com a Constituição Federal, são considerados direitos sociais: I. A educação. II. O pluralismo político. III. O lazer. Está(ão) CORRETO(S):',
    alternativas: [
      { id: 'A', texto: 'Somente o item I.' },
      { id: 'B', texto: 'Somente o item II.' },
      { id: 'C', texto: 'Somente os itens I e III.' },
      { id: 'D', texto: 'Todos os itens.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Educação e lazer estão no art. 6º. II é falso: pluralismo político é FUNDAMENTO da República (art. 1º, V).',
      incorretas: {
        A: 'III também está correto.',
        B: 'II é falso.',
        D: 'II é falso.'
      },
      conceitoCobrado: 'Distinção entre fundamentos e direitos sociais.',
      pegadinha: 'Confundir pluralismo político (fundamento) com direito social.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['art. 6º', 'pluralismo político']
  },
  {
    id: 'Q-REAL-DC-0443',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Associação sindical — unicidade',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Em conformidade com a Constituição Federal, sobre a associação profissional ou sindical, assinalar a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'A lei poderá exigir autorização do Estado para a fundação de sindicato, ressalvado o registro no órgão competente, permitido ao Poder Público a interferência e a intervenção na organização sindical.' },
      { id: 'B', texto: 'É vedada a criação de mais de uma organização sindical, em qualquer grau, representativa de categoria profissional ou econômica, na mesma base territorial, que será definida pelos trabalhadores ou empregadores interessados, não podendo ser inferior à área de um Município.' },
      { id: 'C', texto: 'Ao sindicato cabe a defesa dos direitos e interesses coletivos ou individuais da categoria, exceto em questões judiciais ou administrativas.' },
      { id: 'D', texto: 'É facultativa a participação dos sindicatos nas negociações coletivas de trabalho.' },
      { id: 'E', texto: 'O aposentado filiado tem direito a votar, mas não de ser votado, nas organizações sindicais.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'B reproduz o art. 8º, II (unicidade sindical, base mínima municipal).',
      incorretas: {
        A: 'A lei NÃO pode exigir autorização e são VEDADAS interferência/intervenção.',
        C: 'O sindicato atua INCLUSIVE em questões judiciais e administrativas.',
        D: 'A participação é OBRIGATÓRIA.',
        E: 'O aposentado pode votar E ser votado.'
      },
      conceitoCobrado: 'Art. 8º, II (unicidade sindical).',
      pegadinha: 'Trocar "Município" por outra base.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['unicidade sindical', 'art. 8º, II']
  },
  {
    id: 'Q-REAL-DC-0444',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Texto do art. 6º',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Conforme artigo 6º da CF/88, que trata sobre os Direitos Sociais, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e a infância, a assistência aos desamparados, na forma desta Constituição.' },
      { id: 'B', texto: 'São direitos sociais educação, a saúde, a alimentação, o trabalho, a moradia, a segurança, a previdência social, a proteção à maternidade e à infância, a assistência aos desamparados, salvo transporte e lazer, uma vez que não recepcionados pela norma constitucional.' },
      { id: 'C', texto: 'São direitos sociais a educação a saúde, a alimentação, o trabalho, a moradia, a segurança, a previdência social, e a infância, apenas.' },
      { id: 'D', texto: 'São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, a segurança, a previdência social, a proteção à maternidade e a infância, salvo a assistência aos desamparados uma vez não faz parte do rol de direitos sociais.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A traz o rol completo do art. 6º.',
      incorretas: {
        B: 'Transporte e lazer ESTÃO no rol (EC 90/2015 e texto original).',
        C: 'Faltam diversos direitos.',
        D: 'Assistência aos desamparados ESTÁ no rol.'
      },
      conceitoCobrado: 'Texto integral do art. 6º.',
      pegadinha: 'Excluir transporte/lazer ou assistência aos desamparados.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 6º', 'rol completo']
  },
  {
    id: 'Q-REAL-DC-0445',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais — INCORRETA',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A respeito da Constituição da República Federativa do Brasil, dos direitos sociais é INCORRETO afirmar:',
    alternativas: [
      { id: 'A', texto: 'É assegurado a todos o acesso à informação e resguardado o sigilo da fonte, quando necessário ao exercício profissional.' },
      { id: 'B', texto: 'É assegurado o direito de greve, competindo aos trabalhadores decidir sobre a oportunidade de exercê-lo e sobre os interesses que devam por meio dele defender.' },
      { id: 'C', texto: 'É assegurada a participação dos trabalhadores e empregadores nos colegiados dos órgãos públicos em que seus interesses profissionais ou previdenciários sejam objeto de discussão e deliberação.' },
      { id: 'D', texto: 'São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância, a assistência aos desamparados, na forma desta Constituição.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A está INCORRETA como afirmação sobre direitos sociais: o acesso à informação e o sigilo da fonte são direitos INDIVIDUAIS (art. 5º, XIV), não direitos sociais.',
      incorretas: {
        B: 'Correta — art. 9º.',
        C: 'Correta — art. 10.',
        D: 'Correta — art. 6º.'
      },
      conceitoCobrado: 'Distinção entre direitos individuais e sociais.',
      pegadinha: 'Apresentar direito individual como se fosse social.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['art. 5º, XIV', 'art. 6º']
  },
  {
    id: 'Q-REAL-DC-0446',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Art. 8º — participação sindical',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'De acordo com o texto constitucional, é livre a associação profissional ou sindical, observado o seguinte:',
    alternativas: [
      { id: 'A', texto: 'Ao sindicato cabe a defesa dos direitos e interesses coletivos ou individuais da categoria, exceto em questões judiciais.' },
      { id: 'B', texto: 'É obrigatória a participação dos sindicatos nas negociações coletivas de trabalho.' },
      { id: 'C', texto: 'O aposentado filiado não tem direito a votar e ser votado nas organizações sindicais.' },
      { id: 'D', texto: 'É garantida a criação de mais de uma organização sindical, em qualquer grau, representativa de categoria profissional ou econômica, na mesma base territorial, que será definida pelos trabalhadores ou empregadores interessados, não podendo ser inferior à área de um Município.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'B reproduz o art. 8º, VI.',
      incorretas: {
        A: 'O sindicato atua INCLUSIVE em questões judiciais.',
        C: 'O aposentado TEM direito a votar e ser votado.',
        D: 'É VEDADA a criação de mais de uma organização sindical na mesma base territorial.'
      },
      conceitoCobrado: 'Art. 8º, VI (participação obrigatória).',
      pegadinha: 'Inverter "obrigatória" por "facultativa".',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 8º, VI', 'negociação coletiva']
  },
  {
    id: 'Q-REAL-DC-0447',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Locomoção e exercício profissional',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Analise as afirmativas a seguir: I. É livre, no Brasil, a locomoção no território nacional em tempo de paz, podendo qualquer pessoa, nos termos da lei e cumpridas as exigências fiscalizatórias aplicáveis, nele entrar, permanecer ou dele sair com seus bens, conforme previsto no artigo 2º, inciso XV, que trata de direitos fundamentais na Constituição Federal de 1988. II. No Brasil, é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei federal, estadual ou municipal estabelecer ou, ainda, obedecidas as qualificações mínimas determinadas pelo órgão representativo da classe, conforme previsto no artigo 10º, inciso XIII, que trata de direitos fundamentais na Constituição Federal de 1988. Marque a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'As duas afirmativas são verdadeiras.' },
      { id: 'B', texto: 'A afirmativa I é verdadeira, e a II é falsa.' },
      { id: 'C', texto: 'A afirmativa II é verdadeira, e a I é falsa.' },
      { id: 'D', texto: 'As duas afirmativas são falsas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'I é verdadeira (art. 5º, XV). II é FALSA: o art. 5º, XIII exige qualificações estabelecidas por LEI (federal), não por lei estadual/municipal nem por órgão de classe.',
      incorretas: {
        A: 'II é falsa.',
        C: 'I é verdadeira.',
        D: 'I é verdadeira.'
      },
      conceitoCobrado: 'Art. 5º, XIII e XV.',
      pegadinha: 'Ampliar a exigência de qualificação para lei estadual/municipal ou órgão de classe.',
      comoApareceEmConcurso: 'Cobrança literal com distratores.'
    },
    tags: ['art. 5º, XIII', 'art. 5º, XV']
  },
  {
    id: 'Q-REAL-DC-0448',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos trabalhistas',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'A respeito dos direitos sociais previstos em capítulo próprio da Constituição Federal de 1988, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'O pagamento de salário-família em razão do dependente é aplicável a todo trabalhador que comprove a existência de, pelo menos, um filho em idade escolar.' },
      { id: 'B', texto: 'É recomendável que a remuneração do trabalho noturno não seja inferior ao trabalho diurno desenvolvido, sendo, no entanto, facultada ao empregador a decisão sobre a remuneração superior daquele.' },
      { id: 'C', texto: 'Além de outros direitos que visem a melhoria de sua condição social, ao trabalhador é garantido o direito ao gozo de férias anuais remuneradas com, pelo menos, metade a mais do que o salário normal.' },
      { id: 'D', texto: 'É direito do trabalhador urbano e rural a duração do trabalho não superior a oito horas diárias e 44 horas semanais, facultada a compensação de horários e a redução de jornada, mediante acordo com convenção coletiva de trabalho.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'D reproduz o art. 7º, XIII.',
      incorretas: {
        A: 'O salário-família é só para o trabalhador de BAIXA RENDA (art. 7º, XII).',
        B: 'A remuneração do trabalho noturno é SUPERIOR à do diurno (art. 7º, IX) — não é "recomendável", é direito.',
        C: 'As férias são com, pelo menos, UM TERÇO a mais (art. 7º, XVII), não metade.'
      },
      conceitoCobrado: 'Direitos dos trabalhadores (art. 7º).',
      pegadinha: 'Trocar "um terço" por "metade" (C) e "baixa renda" por "todo trabalhador" (A).',
      comoApareceEmConcurso: 'Cobrança de detalhes do art. 7º.'
    },
    tags: ['art. 7º', 'jornada']
  },
  {
    id: 'Q-REAL-DC-0449',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Filiação e negociação sindical',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Joana, servidora ocupante de cargo de provimento efetivo no âmbito do Poder Judiciário de determinado Estado da Federação, foi comunicada pelo sindicato da categoria que seriam iniciadas as negociações coletivas de trabalho e era obrigatória a participação do sindicato. Por tal razão, era igualmente obrigatória a filiação de todos os servidores ao sindicato, de modo que a categoria não fosse sub-representada em seus interesses. A narrativa afigura-se:',
    alternativas: [
      { id: 'A', texto: 'incorreta em relação a Joana, pois a filiação é facultativa, e correta quanto ao sindicato, pois a sua participação é imposta pela Constituição.' },
      { id: 'B', texto: 'correta em relação a Joana, por força do princípio da solidariedade social, e incorreta quanto ao sindicato, por ferir o princípio da liberdade de gestão.' },
      { id: 'C', texto: 'correta em relação a Joana, já que a filiação dos servidores do Poder Judiciário é obrigatória, e incorreta quanto ao sindicato, que tem autonomia gerencial.' },
      { id: 'D', texto: 'incorreta em relação a Joana, pois os servidores do Poder Judiciário não podem filiar-se a sindicato, e correta quanto ao sindicato, desde que haja determinação judicial.' },
      { id: 'E', texto: 'incorreta em relação a Joana, que somente pode ser obrigada a exercer cargo de direção no sindicato, não a sindicalizar-se, e correta quanto ao sindicato, que defende a categoria.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A filiação é facultativa (art. 8º, V), mas a participação do sindicato nas negociações coletivas é obrigatória (art. 8º, VI).',
      incorretas: {
        B: 'A filiação não é obrigatória.',
        C: 'A filiação não é obrigatória.',
        D: 'Servidores podem filiar-se a sindicato.',
        E: 'Ninguém é obrigado a exercer cargo de direção sindical.'
      },
      conceitoCobrado: 'Art. 8º, V e VI.',
      pegadinha: 'Confundir participação obrigatória do SINDICATO com filiação obrigatória do SERVIDOR.',
      comoApareceEmConcurso: 'Cobrança combinada.'
    },
    tags: ['filiação', 'negociação coletiva']
  },
  {
    id: 'Q-REAL-DC-0450',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos e garantias — INCORRETA',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Em relação aos direitos e garantias fundamentais previstos na Constituição Federal, assinale a alternativa INCORRETA:',
    alternativas: [
      { id: 'A', texto: 'Nas empresas de mais de cem empregados, é assegurada a eleição de um representante destes com a finalidade exclusiva de promover-lhes o entendimento direto com os empregadores.' },
      { id: 'B', texto: 'É livre a manifestação do pensamento, sendo vedado o anonimato.' },
      { id: 'C', texto: 'A pena será cumprida em estabelecimentos distintos, de acordo com a natureza do delito, a idade e o sexo do apenado.' },
      { id: 'D', texto: 'É obrigatória a participação dos sindicatos nas negociações coletivas de trabalho.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A está INCORRETA: o art. 11 exige mais de DUZENTOS empregados (não cem).',
      incorretas: {
        B: 'Correta — art. 5º, IV.',
        C: 'Correta — art. 5º, XLVIII.',
        D: 'Correta — art. 8º, VI.'
      },
      conceitoCobrado: 'Art. 11 (representante dos empregados).',
      pegadinha: 'Trocar 200 por 100.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 11', 'representante']
  },
  {
    id: 'Q-REAL-DC-0451',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Estabilidade sindical',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A Constituição Federal de 1988 estabelece em seu art. 8º a liberdade de associação profissional ou sindical e dispõe sobre o que deve ser observado para o exercício de tal direito. Assinale a única alternativa que corresponde corretamente a um destes direitos:',
    alternativas: [
      { id: 'A', texto: 'É vedada a dispensa do empregado sindicalizado a partir do registro da candidatura a cargo de direção ou representação sindical e, se eleito, ainda que suplente, até um ano após o final do mandato, salvo se cometer falta grave nos termos da lei.' },
      { id: 'B', texto: 'Não é obrigatória a participação dos sindicatos nas negociações coletivas de trabalho.' },
      { id: 'C', texto: 'Todos serão obrigados a filiar-se ou a manter-se filiado a sindicato.' },
      { id: 'D', texto: 'É permitida a criação de mais de uma organização sindical, em qualquer grau, representativa de categoria profissional ou econômica, na mesma base territorial, que será definida pelos trabalhadores ou empregadores interessados, não podendo ser inferior à área de um Município.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A reproduz o art. 8º, VIII.',
      incorretas: {
        B: 'A participação É obrigatória (art. 8º, VI).',
        C: 'Ninguém é obrigado a filiar-se (art. 8º, V).',
        D: 'É VEDADA a criação de mais de uma organização sindical na mesma base (art. 8º, II).'
      },
      conceitoCobrado: 'Art. 8º, VIII (estabilidade sindical).',
      pegadinha: 'Trocar "vedada" por "permitida" (D).',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 8º, VIII', 'estabilidade']
  },
  /* ============================================================
     LOTE REAL — Questões de Concurso (PDF)
     Módulos: DC-01, DC-02, DC-03, DC-04, DC-06 e DC-07
     IDs: Q-REAL-DC-XXXX
  ============================================================ */

  /* ---------- DC-03 — Direitos e Deveres Individuais e Coletivos ---------- */
  {
    id: 'Q-REAL-DC-0301',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Contraditório e ampla defesa',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A Constituição Federal assegura garantias processuais fundamentais destinadas à proteção dos direitos dos indivíduos em processos judiciais e administrativos. Considerando exclusivamente o disposto no Art. 5º, inciso LV, da Constituição Federal, analise as afirmativas. I. O contraditório e a ampla defesa são garantidos em processos judiciais. II. O contraditório e a ampla defesa são garantidos em processos administrativos. III. O contraditório e a ampla defesa incluem a utilização dos meios e recursos a ela inerentes. IV. O contraditório depende de autorização judicial para ser exercido no processo administrativo. Assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'Apenas I e II.' },
      { id: 'B', texto: 'Apenas I, II e III.' },
      { id: 'C', texto: 'Apenas I.' },
      { id: 'D', texto: 'Apenas II e III.' },
      { id: 'E', texto: 'I, II, III e IV.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O art. 5º, LV, assegura contraditório e ampla defesa "aos litigantes, em processo judicial ou administrativo, e aos acusados em geral", com "os meios e recursos a ela inerentes". I, II e III estão corretos.[reference:0]',
      incorretas: {
        A: 'III também está correto.',
        C: 'II e III também estão corretos.',
        D: 'I também está correto.',
        E: 'IV é falso: não se exige autorização judicial para o contraditório no processo administrativo.'
      },
      conceitoCobrado: 'Art. 5º, LV — contraditório e ampla defesa.',
      pegadinha: 'Exigir autorização judicial para o contraditório administrativo (IV).',
      comoApareceEmConcurso: 'Cobrança literal do inciso LV.'
    },
    tags: ['contraditório', 'ampla defesa', 'art. 5º, LV']
  },
  {
    id: 'Q-REAL-DC-0302',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Requisição de bens (iminente perigo público)',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A defesa civil da cidade foi alertada, pelo setor de meteorologia, que há grande probabilidade de três bairros serem atingidos por um evento climático extremo, que tem a potencialidade de gerar uma chuva de 200 mm em uma hora. Embora a zeladoria do local funcione adequadamente e a área não tenha histórico de alagamentos, os especialistas alertam que o volume atípico de chuvas pode gerar alagamentos e colocar a vida das pessoas em risco. Além do envio de alerta para os telefones dos indivíduos que estejam na região, estão sendo consideradas algumas medidas que poderão ser tomadas, caso necessário. Com base no disposto na Constituição Federal, é correto afirmar que, nessa situação hipotética, os guardas municipais deslocados para trabalhar na operação podem:',
    alternativas: [
      { id: 'A', texto: 'entrar em residências afetadas pela enchente, desde que haja prévia anuência dos proprietários.' },
      { id: 'B', texto: 'desapropriar veículos aquáticos para uso imediato na realização dos resgates, mediante indenização posterior, justa e em dinheiro.' },
      { id: 'C', texto: 'requisitar o uso de veículos ou bens de natureza particular, para lidar com a situação de iminente perigo público, assegurada ao proprietário indenização ulterior, se houver dano.' },
      { id: 'D', texto: 'utilizar estritamente os espaços e bens de propriedade do Estado para lidar com o problema, pois a situação de iminente perigo público não autoriza o poder público a utilizar ou desapropriar bens de propriedade particular, sem prévia indenização ou concordância do titular do direito.' },
      { id: 'E', texto: 'utilizar imóveis particulares desocupados para realizar os primeiros socorros dos afetados, assegurada posterior indenização, independentemente da existência de dano.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Art. 5º, XXV: "no caso de iminente perigo público, a autoridade competente poderá usar de propriedade particular, assegurada ao proprietário indenização ulterior, se houver dano".',
      incorretas: {
        A: 'A requisição independe de anuência do proprietário.',
        B: 'Não se trata de desapropriação, mas de requisição administrativa.',
        D: 'A CF autoriza expressamente o uso de bem particular em iminente perigo público.',
        E: 'A indenização só é devida se houver dano.'
      },
      conceitoCobrado: 'Requisição administrativa (art. 5º, XXV).',
      pegadinha: 'Confundir requisição (uso temporário) com desapropriação (perda da propriedade).',
      comoApareceEmConcurso: 'Casos práticos de defesa civil.'
    },
    tags: ['requisição', 'art. 5º, XXV', 'perigo público']
  },
  {
    id: 'Q-REAL-DC-0303',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Direitos do preso',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A Constituição Federal de 1988 prevê diversas garantias para as pessoas presas em razão de condenações criminais ou no curso do processo. Tendo em vista os direitos e garantias fundamentais previstos na Constituição Federal, assinale a alternativa INCORRETA.',
    alternativas: [
      { id: 'A', texto: 'O preso será informado de seus direitos, entre os quais o de permanecer calado, sendo-lhe assegurada a assistência da família e de advogado.' },
      { id: 'B', texto: 'Aos presos é garantido o respeito à integridade física e moral.' },
      { id: 'C', texto: 'A prisão ilegal será imediatamente relaxada pela autoridade judiciária.' },
      { id: 'D', texto: 'A não ser em situações de transgressão ou crime propriamente militar nos termos da lei, a prisão de qualquer pessoa só poderá acontecer se for em flagrante delito ou mediante ordem judicial escrita e devidamente fundamentada.' },
      { id: 'E', texto: 'A prisão de qualquer pessoa e o local onde se encontre serão comunicados imediatamente ao juiz competente e à família do preso ou à pessoa por ele indicada. Contudo, no intuito de colocar a salvo a integridade física e moral dos profissionais da segurança pública, não é reconhecido ao preso o direito à identificação dos responsáveis por sua prisão ou por seu interrogatório policial.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'E é INCORRETA: o art. 5º, LXIV, assegura ao preso o direito à identificação dos responsáveis por sua prisão ou por seu interrogatório policial.[reference:1]',
      incorretas: {
        A: 'Correta — art. 5º, LXIII.',
        B: 'Correta — art. 5º, XLIX.',
        C: 'Correta — art. 5º, LXV.',
        D: 'Correta — art. 5º, LXI.'
      },
      conceitoCobrado: 'Direitos do preso (art. 5º, LXI, LXIII, LXIV, LXV).',
      pegadinha: 'Negar o direito à identificação dos responsáveis pela prisão.',
      comoApareceEmConcurso: 'Cobrança literal dos incisos.'
    },
    tags: ['preso', 'art. 5º, LXIV']
  },
  {
    id: 'Q-REAL-DC-0304',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Acesso à Justiça e duração razoável do processo',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'A Constituição Federal de 1988 preceitua, como direito fundamental, o acesso à Justiça, não se limitando a entrada no Judiciário, viabilizando que aquele que estiver com a razão veja seu direito reconhecido. Considerando a legislação em vigor e as jurisprudências do Superior Tribunal de Justiça e do Supremo Tribunal Federal, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'a previsão legal no ordenamento jurídico, de meios atípicos de execução, é reforço do princípio da efetividade da prestação jurisdicional.' },
      { id: 'B', texto: 'eficácia e efetividade são termos sinônimos no âmbito judicial, referindo-se à capacidade da decisão de produzir efeitos jurídicos.' },
      { id: 'C', texto: 'a demora, por mais de dois meses, para se proferir uma decisão determinando-se a citação do réu, viola a garantia constitucional da duração razoável do processo.' },
      { id: 'D', texto: 'o princípio do contraditório consiste no direito de utilizar todos os meios e recursos legalmente previstos para provar sua inocência ou seu direito.' },
      { id: 'E', texto: 'a lentidão na prestação jurisdicional caracteriza falha que, entretanto, não pode ensejar responsabilização do Estado ou do Magistrado atuante na causa.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A previsão de meios atípicos de execução reforça a efetividade da prestação jurisdicional, em consonância com o art. 5º, XXXV e LXXVIII.',
      incorretas: {
        B: 'Eficácia e efetividade não são sinônimos.',
        C: 'Não há prazo constitucional fixo de 2 meses; a razoabilidade é analisada caso a caso.',
        D: 'O contraditório é mais amplo que o direito de provar.',
        E: 'A lentidão pode, em tese, gerar responsabilização.'
      },
      conceitoCobrado: 'Acesso à Justiça e efetividade.',
      pegadinha: 'Fixar prazos rígidos para a duração razoável.',
      comoApareceEmConcurso: 'Questão conceitual.'
    },
    tags: ['acesso à justiça', 'efetividade']
  },
  {
    id: 'Q-REAL-DC-0305',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Tribunal Penal Internacional',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Nos termos da Constituição Federal, "o Brasil se submete à jurisdição de Tribunal Penal Internacional a cuja criação tenha manifestado adesão" (art. 5º, § 4º). Considerando a competência material do Tribunal Penal Internacional, são crimes de sua competência para julgamento, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'crimes de genocídio.' },
      { id: 'B', texto: 'crimes contra a humanidade.' },
      { id: 'C', texto: 'crimes de guerra.' },
      { id: 'D', texto: 'crimes contra a Administração Pública.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'O TPI julga genocídio, crimes contra a humanidade, crimes de guerra e crimes de agressão. Crimes contra a Administração Pública não estão no Estatuto de Roma.',
      incorretas: {
        A: 'Genocídio é crime de competência do TPI.',
        B: 'Crimes contra a humanidade são de competência do TPI.',
        C: 'Crimes de guerra são de competência do TPI.'
      },
      conceitoCobrado: 'Competência do TPI (art. 5º, §4º).',
      pegadinha: 'Incluir crimes domésticos (Administração Pública) no rol do TPI.',
      comoApareceEmConcurso: 'Cobrança do Estatuto de Roma.'
    },
    tags: ['TPI', 'art. 5º, §4º']
  },
  {
    id: 'Q-REAL-DC-0306',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Legalidade (decreto e obrigações)',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: '(IBED) Em um Estado de Direito, a edição de um decreto pelo chefe do Poder Executivo permite criar, sem fundamento em lei, obrigações primárias e sanções aplicáveis aos cidadãos, desde que a medida seja apresentada como urgente e destinada ao interesse coletivo.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Errado. O art. 5º, II, da CF estabelece que "ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei". Decreto não pode criar obrigações primárias sem lei.[reference:2]',
      incorretas: {
        A: 'A CF veda a criação de obrigações por decreto sem fundamento em lei.'
      },
      conceitoCobrado: 'Princípio da legalidade (art. 5º, II).',
      pegadinha: 'Achar que decreto pode criar obrigações primárias.',
      comoApareceEmConcurso: 'Questão clássica de legalidade.'
    },
    tags: ['legalidade', 'art. 5º, II']
  },
  {
    id: 'Q-REAL-DC-0307',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Sucessão de bens de estrangeiros',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Johan, de nacionalidade alemã, era casado com Maria, de nacionalidade brasileira, sendo ambos genitores de Priscilla, também de nacionalidade brasileira. A família residia na Alemanha, mas, após o falecimento de Johan, passaram a residir no Brasil. Considerando que Johan deixou bens na Alemanha e no Brasil, é correto afirmar, em relação a esses últimos que, para fins de sucessão:',
    alternativas: [
      { id: 'A', texto: 'é possível que Maria e Priscilla optem pela lei brasileira ou pela lei alemã.' },
      { id: 'B', texto: 'deve ser sempre aplicada a lei alemã, considerando a nacionalidade de Johan.' },
      { id: 'C', texto: 'deve ser aplicada a lei brasileira, caso Priscilla ainda não tenha atingido a maioridade civil.' },
      { id: 'D', texto: 'deve ser aplicada a lei brasileira, caso a lei alemã não seja mais favorável a Maria e a Priscilla.' },
      { id: 'E', texto: 'deve ser sempre aplicada a lei brasileira, considerando a nacionalidade de Maria e de Priscilla.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Art. 5º, XXXI: a sucessão de bens de estrangeiros situados no Brasil será regulada pela lei brasileira em benefício do cônjuge ou dos filhos brasileiros, sempre que não lhes seja mais favorável a lei pessoal do de cujus (lei alemã).',
      incorretas: {
        A: 'Não há opção; aplica-se a lei mais favorável.',
        B: 'A lei alemã só prevalece se mais favorável.',
        C: 'A maioridade de Priscilla não é o critério.',
        E: 'A regra não é a aplicação automática da lei brasileira.'
      },
      conceitoCobrado: 'Sucessão de bens de estrangeiros (art. 5º, XXXI).',
      pegadinha: 'Achar que a lei brasileira sempre se aplica.',
      comoApareceEmConcurso: 'Cobrança literal do inciso XXXI.'
    },
    tags: ['sucessão', 'estrangeiro', 'art. 5º, XXXI']
  },
  {
    id: 'Q-REAL-DC-0308',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Ampla defesa e igualdade (estrangeiros)',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Considere que, hipoteticamente, com a preocupação sobre vazamentos de informações e com a integridade da segurança institucional do CAU/CE, houve a edição de uma Portaria Normativa interna com duas regras primordiais: I) Fica estabelecido que qualquer arquiteto que esteja respondendo a processo ético-disciplinar na autarquia terá o acesso aos autos do processo negado caso a diretoria apure que o profissional possui um "comportamento não cooperativo"; e, II) Fica proibido que estrangeiros residentes no Brasil assumam cargo público efetivo na estrutura administrativa do CAU/CE, sob a justificativa constitucional de proteção à soberania nacional. Considerando os ditames do art. 5º da Constituição Federal de 1988 (CF/88), sobre a validade constitucional da Portaria, pode-se afirmar corretamente que:',
    alternativas: [
      { id: 'A', texto: 'No contexto apresentado, a restrição imposta aos estrangeiros é constitucional, na medida em que a CF/88 reserva os cargos públicos de carreira exclusivamente a brasileiros.' },
      { id: 'B', texto: 'A Portaria é integralmente válida, visto que os conselhos profissionais de fiscalização possuem autonomia administrativa e financeira para restringir o acesso a autos e delimitar seus quadros a brasileiros natos ou naturalizados.' },
      { id: 'C', texto: 'A inconstitucionalidade recai apenas na negação de acesso aos autos (ofensa à ampla defesa), sendo válida a proibição de estrangeiros no CAU/CE, visto que autarquias federais possuem autonomia normativa e lidam com dados sensíveis de interesse estatal.' },
      { id: 'D', texto: 'A Portaria é inconstitucional em ambas as regras, pois viola o direito ao contraditório e à ampla defesa em processo administrativo, bem como fere a garantia de igualdade e inviolabilidade de direitos assegurada aos brasileiros e aos estrangeiros residentes no país.' },
      { id: 'E', texto: 'A Portaria é válida quanto à restrição de acesso aos autos, visto que o direito à informação cede espaço à segurança institucional na ponderação entre esses dois fundamentos constitucionais; porém, é inválida quanto à proibição aos estrangeiros, que gozam de igualdade perante a lei, sem distinção de qualquer natureza.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'D. A restrição de acesso aos autos viola o contraditório e a ampla defesa (art. 5º, LV). A proibição a estrangeiros viola a igualdade (art. 5º, caput) e a possibilidade de acesso a cargos públicos (art. 37, I).',
      incorretas: {
        A: 'A CF não reserva todos os cargos públicos exclusivamente a brasileiros.',
        B: 'A autonomia não autoriza restringir direitos fundamentais.',
        C: 'A proibição a estrangeiros também é inconstitucional.',
        E: 'A restrição de acesso aos autos não é válida.'
      },
      conceitoCobrado: 'Contraditório, ampla defesa e igualdade.',
      pegadinha: 'Achar que a segurança institucional justifica restringir a defesa.',
      comoApareceEmConcurso: 'Caso concreto envolvendo conselho profissional.'
    },
    tags: ['ampla defesa', 'igualdade', 'estrangeiros']
  },
  {
    id: 'Q-REAL-DC-0309',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Tratados de direitos humanos',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Após reunião internacional realizada na Malásia, firmou-se tratado de direitos humanos sobre prevenção e combate à tortura. No Brasil, o tratado foi aprovado, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros. Nessa hipótese, é correto afirmar que o referido tratado gozará de status equivalente às:',
    alternativas: [
      { id: 'A', texto: 'medidas provisórias convertidas em lei.' },
      { id: 'B', texto: 'emendas constitucionais.' },
      { id: 'C', texto: 'leis complementares federais.' },
      { id: 'D', texto: 'leis ordinárias federais.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 5º, §3º: tratados de direitos humanos aprovados em cada Casa, em dois turnos, por 3/5 dos votos, equivalem a emendas constitucionais.[reference:3]',
      incorretas: {
        A: 'Não se equiparam a medidas provisórias.',
        C: 'Não se equiparam a leis complementares.',
        D: 'Não se equiparam a leis ordinárias.'
      },
      conceitoCobrado: 'Status dos tratados de direitos humanos (art. 5º, §3º).',
      pegadinha: 'Confundir com o rito de emenda (que é o mesmo).',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['tratados', 'direitos humanos', 'art. 5º, §3º']
  },
  {
    id: 'Q-REAL-DC-0310',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Direitos e deveres individuais',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A Constituição Federal, no que diz respeito aos direitos e deveres individuais e coletivos, estabelece que:',
    alternativas: [
      { id: 'A', texto: 'É garantido o direito de propriedade, mesmo sem qualquer função social.' },
      { id: 'B', texto: 'É garantida a reunião pacífica, com armas, em locais abertos ao público.' },
      { id: 'C', texto: 'É livre a manifestação do pensamento, sendo vedado o anonimato.' },
      { id: 'D', texto: 'É facultado ao Estado restringir o acesso à informação pública.' },
      { id: 'E', texto: 'Todos são iguais perante a lei, exceto os estrangeiros.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Art. 5º, IV: "é livre a manifestação do pensamento, sendo vedado o anonimato".',
      incorretas: {
        A: 'A propriedade atende à função social (art. 5º, XXIII).',
        B: 'A reunião deve ser sem armas (art. 5º, XVI).',
        D: 'O acesso à informação é direito de todos (art. 5º, XXXIII).',
        E: 'A igualdade alcança brasileiros e estrangeiros residentes (art. 5º, caput).'
      },
      conceitoCobrado: 'Direitos individuais (art. 5º).',
      pegadinha: 'Reunião com armas e restrição de informação.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['manifestação', 'anonimato', 'art. 5º, IV']
  },
  {
    id: 'Q-REAL-DC-0311',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Direitos e garantias (diversos)',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'O artigo 5º da Constituição Federal de 1988 preceitua que todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se, aos brasileiros e aos estrangeiros residentes no país, a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade. Considerando a legislação em vigor, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'em nenhuma hipótese, alguém será privado de direitos por motivo de crença religiosa ou de convicção filosófica ou política.' },
      { id: 'B', texto: 'é livre a locomoção no território nacional em qualquer tempo, podendo qualquer pessoa, nos termos da lei, nele entrar, permanecer ou dele sair com seus bens.' },
      { id: 'C', texto: 'a criação e o funcionamento de associações e de cooperativas dependem de autorização da autoridade competente, na forma da Lei.' },
      { id: 'D', texto: 'é assegurado o direito de fiscalização do aproveitamento econômico das obras que criarem ou de que participarem aos criadores.' },
      { id: 'E', texto: 'a sucessão de bens de estrangeiros situados no país será regulada pela lei do seu país de origem, desde que em benefício do cônjuge ou dos filhos brasileiros.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Art. 5º, XXVIII, "b": é assegurado aos criadores o direito de fiscalização do aproveitamento econômico das obras que criarem ou de que participarem.',
      incorretas: {
        A: 'A escusa de consciência pode gerar privação de direitos se a prestação alternativa for recusada (art. 5º, VIII).',
        B: 'A locomoção é livre em tempo de paz (art. 5º, XV).',
        C: 'A criação de associações independe de autorização (art. 5º, XVIII).',
        E: 'A sucessão de bens de estrangeiros no Brasil é regulada pela lei brasileira, salvo se a lei estrangeira for mais favorável (art. 5º, XXXI).'
      },
      conceitoCobrado: 'Direitos autorais (art. 5º, XXVIII).',
      pegadinha: 'Inverter a regra da sucessão de estrangeiros.',
      comoApareceEmConcurso: 'Cobrança de incisos menos óbvios.'
    },
    tags: ['direito autoral', 'art. 5º, XXVIII']
  },
  {
    id: 'Q-REAL-DC-0312',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Penas vedadas',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'De acordo com o artigo 5º da Constituição Federal, NÃO haverá penas: I. de morte, salvo em caso de guerra declarada. II. de caráter perpétuo e de trabalhos forçados. III. de banimento e cruéis. É correto o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'III, apenas.' },
      { id: 'B', texto: 'I e II, apenas.' },
      { id: 'C', texto: 'II e III, apenas.' },
      { id: 'D', texto: 'I, II e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Art. 5º, XLVII: não haverá penas de morte (salvo guerra declarada), de caráter perpétuo, de trabalhos forçados, de banimento ou cruéis. I, II e III estão corretos.',
      incorretas: {
        A: 'I e II também estão corretos.',
        B: 'III também está correto.',
        C: 'I também está correto.'
      },
      conceitoCobrado: 'Penas vedadas (art. 5º, XLVII).',
      pegadinha: 'Esquecer a exceção da guerra declarada.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['penas', 'art. 5º, XLVII']
  },
  {
    id: 'Q-REAL-DC-0313',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Tribunal do Júri',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre a Instituição do Júri, considere as assertivas a seguir. I. É reconhecida a instituição do júri, sendo assegurada, entre outras garantias, a soberania dos veredictos e a competência para o julgamento dos crimes dolosos contra a vida. II. Por força do princípio da publicidade, as votações dos jurados devem ser abertas ao público e devidamente fundamentadas para garantir a transparência do julgamento. III. A competência constitucional do tribunal do júri é absoluta e inafastável para o julgamento de qualquer crime que resulte em morte, inclusive nos casos de crimes culposos. Está CORRETO o que se afirma:',
    alternativas: [
      { id: 'A', texto: 'III, apenas.' },
      { id: 'B', texto: 'I, apenas.' },
      { id: 'C', texto: 'I e II, apenas.' },
      { id: 'D', texto: 'I, II e III.' },
      { id: 'E', texto: 'II, apenas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'I está correta (art. 5º, XXXVIII). II é falsa: as votações são sigilosas. III é falsa: o júri julga crimes dolosos contra a vida, não culposos.',
      incorretas: {
        A: 'I está correta.',
        C: 'II é falsa.',
        D: 'II e III são falsas.',
        E: 'I está correta.'
      },
      conceitoCobrado: 'Tribunal do Júri (art. 5º, XXXVIII).',
      pegadinha: 'Achar que as votações são públicas e que o júri julga crimes culposos.',
      comoApareceEmConcurso: 'Cobrança das garantias do júri.'
    },
    tags: ['júri', 'art. 5º, XXXVIII']
  },
  {
    id: 'Q-REAL-DC-0314',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Direito penal e processual penal',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Considerando as disposições da Constituição Federal sobre direito penal e processo penal, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'A lei não poderá adotar a pena de interdição de direitos.' },
      { id: 'B', texto: 'A lei penal não retroagirá para beneficiar o réu.' },
      { id: 'C', texto: 'A decretação do perdimento de bens decorrente de pena não poderá ser, nos termos da lei, estendida aos sucessores e contra eles executadas.' },
      { id: 'D', texto: 'É imprescritível o crime de tráfico ilícito de entorpecentes e drogas afins.' },
      { id: 'E', texto: 'Às presidiárias serão asseguradas condições para que possam permanecer com seus filhos durante o período de amamentação.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'Art. 5º, L: "às presidiárias serão asseguradas condições para que possam permanecer com seus filhos durante o período de amamentação".',
      incorretas: {
        A: 'A interdição de direitos é pena admitida (art. 5º, XLVI).',
        B: 'A lei penal retroage para beneficiar o réu (art. 5º, XL).',
        C: 'O perdimento de bens pode ser estendido aos sucessores (art. 5º, XLV).',
        D: 'O tráfico não é imprescritível (art. 5º, XLIII).'
      },
      conceitoCobrado: 'Direito penal e processual penal (art. 5º, XL, XLIII, XLV, XLVI, L).',
      pegadinha: 'Achar que o tráfico é imprescritível.',
      comoApareceEmConcurso: 'Cobrança combinada.'
    },
    tags: ['penal', 'presidiárias', 'art. 5º, L']
  },
  {
    id: 'Q-REAL-DC-0315',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Contraditório em processo administrativo',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Determinada lei estadual instituiu procedimento administrativo que restringe, sem possibilidade de contraditório prévio, o acesso de cidadãos a benefícios assistenciais, sob a justificativa de combate a fraudes. A norma prevê apenas a possibilidade de recurso posterior, sem efeito suspensivo. À luz da Constituição Federal de 1988 e da jurisprudência consolidada sobre direitos e garantias fundamentais, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'A lei é constitucional, pois a administração pública pode, no exercício do poder de polícia, limitar direitos individuais sempre que houver interesse público relevante, sendo suficiente a previsão de recurso posterior.' },
      { id: 'B', texto: 'A lei é inconstitucional, pois viola o devido processo legal, o contraditório e a ampla defesa, que se aplicam também aos processos administrativos, especialmente quando houver restrição de direitos.' },
      { id: 'C', texto: 'A lei é constitucional, desde que o benefício assistencial tenha natureza discricionária, hipótese em que não se exige contraditório prévio.' },
      { id: 'D', texto: 'A lei é parcialmente constitucional, pois o contraditório somente é obrigatório em processos judiciais, não se estendendo aos procedimentos administrativos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O art. 5º, LV, assegura contraditório e ampla defesa também nos processos administrativos. A restrição de benefício sem contraditório prévio é inconstitucional.',
      incorretas: {
        A: 'O poder de polícia não dispensa o contraditório.',
        C: 'A natureza do benefício não afasta a garantia.',
        D: 'O contraditório aplica-se aos processos administrativos.'
      },
      conceitoCobrado: 'Contraditório e ampla defesa em processos administrativos.',
      pegadinha: 'Achar que o contraditório só vale no processo judicial.',
      comoApareceEmConcurso: 'Cobrança do art. 5º, LV.'
    },
    tags: ['contraditório', 'processo administrativo']
  },
  {
    id: 'Q-REAL-DC-0316',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Coisa julgada e direito adquirido',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Durante a consolidação de determinado ato normativo, discutiu-se a possibilidade de a lei alcançar fatos ocorridos antes de sua entrada em vigor. De acordo com a Constituição Federal, marque a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'A proteção à coisa julgada aplica-se exclusivamente às decisões penais.' },
      { id: 'B', texto: 'A lei não prejudicará o direito adquirido, o ato jurídico perfeito e a coisa julgada.' },
      { id: 'C', texto: 'A lei pode livremente atingir a coisa julgada sempre que houver interesse público.' },
      { id: 'D', texto: 'O direito adquirido não possui proteção constitucional.' },
      { id: 'E', texto: 'O ato jurídico perfeito pode ser desconstituído por qualquer lei posterior.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 5º, XXXVI: "a lei não prejudicará o direito adquirido, o ato jurídico perfeito e a coisa julgada".[reference:4]',
      incorretas: {
        A: 'A proteção não é exclusiva da esfera penal.',
        C: 'A coisa julgada não pode ser atingida livremente.',
        D: 'O direito adquirido tem proteção constitucional.',
        E: 'O ato jurídico perfeito não pode ser desconstituído por lei posterior.'
      },
      conceitoCobrado: 'Irretroatividade e segurança jurídica (art. 5º, XXXVI).',
      pegadinha: 'Achar que a coisa julgada pode ser revista por interesse público.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['coisa julgada', 'art. 5º, XXXVI']
  },
  {
    id: 'Q-REAL-DC-0317',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Objeção de consciência e serviço militar',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Considere o seguinte caso hipotético: Carlos foi convocado para o serviço militar obrigatório. No entanto, por profunda convicção filosófica pacifista, ele se recusa a participar de qualquer atividade de natureza bélica. A legislação brasileira, prevendo situações como essa, oferece a possibilidade de um serviço alternativo de caráter administrativo. À luz do art. 5º, VIII, da Constituição Federal de 1988, analise a situação apresentada e assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'Carlos não pode ser privado de direitos por razão de sua convicção, mas se ele recusar-se a cumprir tanto o serviço militar quanto o serviço alternativo que a lei estabelece, poderá sofrer sanções, como a suspensão de seus direitos políticos.' },
      { id: 'B', texto: 'A liberdade de consciência é um direito absoluto. Portanto, Carlos pode simplesmente recusar-se a cumprir o serviço militar sem a necessidade de aceitar qualquer outra obrigação em troca, mantendo todos os seus direitos intactos.' },
      { id: 'C', texto: 'Ao recusar-se a prestar o serviço militar, Carlos comete um crime e deve ser imediatamente processado, pois a defesa da Pátria é um dever que não admite exceções.' },
      { id: 'D', texto: 'Carlos só poderia recusar-se a prestar o serviço militar se sua objeção fosse baseada em uma crença religiosa, não sendo a convicção filosófica ou política aceita pela Constituição para esse fim.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 5º, VIII: ninguém será privado de direitos por motivo de crença religiosa ou de convicção filosófica ou política, salvo se as invocar para eximir-se de obrigação legal a todos imposta e recusar-se a cumprir prestação alternativa fixada em lei. A recusa da prestação alternativa gera sanções (como suspensão de direitos políticos).',
      incorretas: {
        B: 'A liberdade de consciência não é absoluta; a prestação alternativa é obrigatória.',
        C: 'A objeção de consciência é admitida constitucionalmente.',
        D: 'A convicção filosófica e política também é protegida.'
      },
      conceitoCobrado: 'Objeção de consciência (art. 5º, VIII).',
      pegadinha: 'Achar que a liberdade de consciência é absoluta.',
      comoApareceEmConcurso: 'Cobrança literal do inciso VIII.'
    },
    tags: ['objeção de consciência', 'art. 5º, VIII']
  },
  {
    id: 'Q-REAL-DC-0318',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Manifestação, domicílio, sigilo e reunião',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Considerando os direitos e deveres individuais e coletivos previstos na Constituição Federal, assinale a alternativa INCORRETA, à luz do texto constitucional.',
    alternativas: [
      { id: 'A', texto: 'A liberdade de manifestação do pensamento é assegurada, desde que seja possível a identificação do autor da manifestação.' },
      { id: 'B', texto: 'A inviolabilidade do domicílio admite exceções, inclusive por determinação judicial durante o período noturno, nas hipóteses previstas em lei.' },
      { id: 'C', texto: 'O sigilo das comunicações telefônicas pode ser afastado por ordem judicial, observadas as hipóteses e a forma estabelecidas em lei, para fins de investigação criminal ou instrução processual penal.' },
      { id: 'D', texto: 'O direito de reunião pacífica, sem armas, em locais abertos ao público, independe de autorização, exigindo-se comunicação prévia à autoridade competente.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'B é INCORRETA: a ordem judicial para entrada em domicílio só pode ser cumprida durante o dia (art. 5º, XI).',
      incorretas: {
        A: 'Correta — o anonimato é vedado (art. 5º, IV).',
        C: 'Correta — art. 5º, XII.',
        D: 'Correta — art. 5º, XVI.'
      },
      conceitoCobrado: 'Inviolabilidade do domicílio (art. 5º, XI).',
      pegadinha: 'Achar que a ordem judicial pode ser cumprida à noite.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['domicílio', 'art. 5º, XI']
  },
  {
    id: 'Q-REAL-DC-0319',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Direito de petição e certidões',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Durante atividade comunitária, a Guarda Civil Municipal recebeu denúncia de que um agente público impedia moradores de registrar petições e solicitar certidões em repartição municipal, alegando que tais atos dependeriam de taxa administrativa. Considerando os direitos e garantias fundamentais, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'o poder público pode exigir taxa para assegurar autenticidade de certidões, desde que previstas em lei específica.' },
      { id: 'B', texto: 'o direito de petição e de obtenção de certidões depende de comprovação de interesse público relevante.' },
      { id: 'C', texto: 'o direito de petição e o direito a certidões somente são gratuitos para estrangeiros residentes.' },
      { id: 'D', texto: 'o direito de petição e o de obtenção de certidões independe do pagamento de taxas, sendo assegurados a todos.' },
      { id: 'E', texto: 'a Administração pode negar certidão se o requerente não for servidor público.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Art. 5º, XXXIV, "a" e "b": são assegurados a todos, independentemente do pagamento de taxas, o direito de petição e a obtenção de certidões.[reference:5]',
      incorretas: {
        A: 'A CF assegura a gratuidade.',
        B: 'Não se exige interesse público relevante.',
        C: 'O direito é de todos, não só de estrangeiros.',
        E: 'A certidão não pode ser negada por esse motivo.'
      },
      conceitoCobrado: 'Direito de petição e certidões (art. 5º, XXXIV).',
      pegadinha: 'Achar que se pode cobrar taxa.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['petição', 'certidões', 'art. 5º, XXXIV']
  },
  {
    id: 'Q-REAL-DC-0320',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Direitos e garantias (retroação, herança, anonimato, domicílio, racismo)',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A Constituição Federal de 1988 estabelece um amplo rol de direitos e garantias fundamentais. De acordo com a referida Constituição, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'A lei não retroagirá, salvo para beneficiar o réu.' },
      { id: 'B', texto: 'O direito de herança é garantido apenas aos estrangeiros residentes.' },
      { id: 'C', texto: 'É livre a manifestação do pensamento, sendo garantido o anonimato.' },
      { id: 'D', texto: 'A casa é asilo inviolável, nela ninguém podendo penetrar, sem consentimento do morador, salvo por ordem judicial a qualquer hora.' },
      { id: 'E', texto: 'A prática do racismo constitui crime afiançável e prescritível.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 5º, XL: "a lei penal não retroagirá, salvo para beneficiar o réu".',
      incorretas: {
        B: 'A herança é garantida a todos (art. 5º, XXX).',
        C: 'O anonimato é vedado (art. 5º, IV).',
        D: 'A ordem judicial só pode ser cumprida durante o dia (art. 5º, XI).',
        E: 'O racismo é inafiançável e imprescritível (art. 5º, XLII).'
      },
      conceitoCobrado: 'Direitos e garantias (art. 5º, XL, XXX, IV, XI, XLII).',
      pegadinha: 'Trocar "inafiançável" por "afiançável".',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['retroação', 'racismo', 'art. 5º']
  },
  {
    id: 'Q-REAL-DC-0321',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Direito de reunião em Câmara Municipal',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'É dia de votação, na Câmara Municipal da cidade X, do projeto de lei que trata da revisão geral anual da remuneração dos servidores públicos. O tema desperta forte mobilização no funcionalismo, pois, segundo os representantes das categorias profissionais, a revisão não tem sido suficiente para recompor, em termos reais, o poder de compra dos agentes públicos. Por essa razão, foi organizada uma grande manifestação, havendo notícias de que milhares de servidores, ativos e aposentados, estão se dirigindo à sede do Poder Legislativo para exercer pressão política sobre os vereadores. Diante desse cenário, a presidência da Câmara Municipal comunica o fato à Guarda Municipal e solicita o deslocamento de efetivo para o local. Antes de determinar a atuação da corporação, o comandante da Guarda decide rememorar, com seus subordinados, alguns aspectos constitucionalmente relevantes acerca da situação. Com base na hipótese apresentada e na Constituição Federal, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'a guarda municipal não pode, em qualquer hipótese, adotar providências para impedir que os manifestantes, ainda que em grande número, entrem nas dependências da Câmara.' },
      { id: 'B', texto: 'os servidores públicos possuem, de fato, o direito à revisão da remuneração anual, pelos índices oficiais de inflação.' },
      { id: 'C', texto: 'a manifestação será ilegal, caso não tenha sido previamente autorizada pela autoridade pública competente.' },
      { id: 'D', texto: 'os servidores públicos possuem, como qualquer indivíduo, o direito fundamental à reunião e de associação, e a realização da manifestação deve ter sido previamente avisada à autoridade competente.' },
      { id: 'E', texto: 'a manifestação será válida se não implicar obstrução de vias públicas, for precedida de autorização judicial e não afetar o direito de ir e vir dos demais munícipes.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'O direito de reunião (art. 5º, XVI) exige apenas prévio aviso à autoridade competente, não autorização.',
      incorretas: {
        A: 'A guarda pode adotar providências para garantir a ordem.',
        B: 'A revisão anual não é direito absoluto.',
        C: 'Não se exige autorização prévia.',
        E: 'Não se exige autorização judicial.'
      },
      conceitoCobrado: 'Direito de reunião (art. 5º, XVI).',
      pegadinha: 'Confundir aviso prévio com autorização.',
      comoApareceEmConcurso: 'Caso concreto.'
    },
    tags: ['reunião', 'art. 5º, XVI']
  },
  {
    id: 'Q-REAL-DC-0322',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Liberdade de associação',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'De acordo com a Constituição Federal de 1988, assinale a alternativa CORRETA acerca da liberdade de associação.',
    alternativas: [
      { id: 'A', texto: 'As associações poderão ser compulsoriamente dissolvidas por decisão administrativa definitiva.' },
      { id: 'B', texto: 'As associações somente poderão ter suas atividades suspensas por decisão do Poder Legislativo.' },
      { id: 'C', texto: 'As associações só poderão ser compulsoriamente dissolvidas ou ter suas atividades suspensas por decisão judicial, exigindo-se trânsito em julgado apenas para a dissolução.' },
      { id: 'D', texto: 'As associações poderão ser dissolvidas por ato do Poder Executivo quando houver interesse público relevante.' },
      { id: 'E', texto: 'A suspensão das atividades de associação depende de trânsito em julgado da decisão judicial.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Art. 5º, XIX: as associações só poderão ser compulsoriamente dissolvidas ou ter suas atividades suspensas por decisão judicial, exigindo-se, no primeiro caso, o trânsito em julgado.[reference:6]',
      incorretas: {
        A: 'Não cabe decisão administrativa.',
        B: 'Não cabe decisão do Legislativo.',
        D: 'Não cabe ato do Executivo.',
        E: 'A suspensão não exige trânsito em julgado.'
      },
      conceitoCobrado: 'Liberdade de associação (art. 5º, XIX).',
      pegadinha: 'Exigir trânsito em julgado para a suspensão.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['associação', 'art. 5º, XIX']
  },
  {
    id: 'Q-REAL-DC-0323',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Processo administrativo (vista dos autos e certidões)',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Em um processo administrativo municipal, foi instaurada apuração que pode resultar em sanção ao servidor. Após ser notificado para apresentar defesa, o servidor protocolou requerimento solicitando: (i) vista integral dos autos e cópias dos documentos utilizados como fundamento da apuração; e (ii) certidão com o histórico de movimentações do processo e a data-limite para defesa. O setor responsável indeferiu o pedido, afirmando que "o acesso aos autos somente será permitido por advogado constituído" e que "a emissão de certidões e o protocolo de petições dependem do pagamento prévio de taxa administrativa, para evitar excesso de demandas". Considerando a Constituição Federal de 1988, identifique a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'A exigência de pagamento prévio de taxa é constitucional, pois a Administração pode condicionar o direito de petição a requisitos financeiros para preservar a eficiência e reduzir demandas repetitivas.' },
      { id: 'B', texto: 'A situação é incompatível com a Constituição apenas por violar o acesso ao Poder Judiciário, já que contraditório e ampla defesa não se aplicam a processos administrativos.' },
      { id: 'C', texto: 'A exigência de taxa para certidões é incompatível com a Constituição, mas a exigência de advogado para acesso aos autos é plenamente constitucional, pois a defesa administrativa depende de capacidade postulatória.' },
      { id: 'D', texto: 'A situação é incompatível com a Constituição por configurar violação direta à liberdade de manifestação do pensamento, já que toda restrição a requerimentos administrativos é forma de censura estatal.' },
      { id: 'E', texto: 'A situação é incompatível com a Constituição, pois se assegura a todos o direito de petição e a obtenção de certidões para defesa de direitos, independentemente de taxa, além de se garantir contraditório e ampla defesa em processos administrativos, o que pressupõe acesso efetivo aos elementos que embasam a apuração.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A situação viola o art. 5º, XXXIV (gratuidade de petição e certidões) e o art. 5º, LV (contraditório e ampla defesa, que inclui acesso aos autos).',
      incorretas: {
        A: 'A taxa é inconstitucional.',
        B: 'O contraditório aplica-se ao processo administrativo.',
        C: 'A exigência de advogado para vista dos autos é ilegal.',
        D: 'Não se trata de censura.'
      },
      conceitoCobrado: 'Direito de petição, certidões e ampla defesa.',
      pegadinha: 'Achar que se pode exigir advogado para defesa administrativa.',
      comoApareceEmConcurso: 'Caso concreto.'
    },
    tags: ['petição', 'certidões', 'ampla defesa']
  },
  {
    id: 'Q-REAL-DC-0324',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Condução coercitiva e interceptação',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Em situações do dia a dia e do poder público, analise as afirmativas abaixo sobre direitos e garantias fundamentais. Assinale V, para verdadeiras, ou F, para falsas: (__) Um cidadão pode ser conduzido coercitivamente para depor em investigação policial sem ordem judicial, desde que seja para colaborar com a elucidação de um crime. (__) A interceptação de comunicações telefônicas só é válida se houver autorização judicial, em conformidade com o devido processo legal. (__) A liberdade de expressão garante ao jornalista publicar informações falsas sobre um servidor público, desde que não haja intenção de prejudicar sua reputação. (__) O direito à privacidade e à intimidade protege o cidadão de divulgação não autorizada de dados pessoais por órgãos públicos ou empresas privadas. (__) A liberdade de associação pode ser limitada em situações previstas em lei, para impedir que organizações promovam atividades ilícitas ou atentem contra a ordem pública. Assinale a alternativa que apresenta a sequência correta, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'F, V, F, V, V.' },
      { id: 'B', texto: 'F, F, V, V, F.' },
      { id: 'C', texto: 'V, F, V, V, F.' },
      { id: 'D', texto: 'V, V, F, F, V.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'F (a condução coercitiva exige ordem judicial), V (interceptação exige autorização judicial), F (a liberdade de expressão não protege informações falsas), V (privacidade protege dados pessoais), V (a liberdade de associação pode ser limitada para fins ilícitos).[reference:7]',
      incorretas: {
        B: 'A segunda é verdadeira.',
        C: 'A primeira é falsa.',
        D: 'A primeira e a segunda são, respectivamente, F e V.'
      },
      conceitoCobrado: 'Condução coercitiva, interceptação, expressão, privacidade e associação.',
      pegadinha: 'Achar que a condução coercitiva dispensa ordem judicial.',
      comoApareceEmConcurso: 'Questão V/F.'
    },
    tags: ['condução coercitiva', 'interceptação', 'privacidade']
  },
  {
    id: 'Q-REAL-DC-0325',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Proteção de dados pessoais',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Um cidadão brasileiro teve seus dados pessoais compartilhados por órgão público federal com empresa privada, sem consentimento, para fins estatísticos. Ao questionar administrativamente o fato, o órgão alegou que se tratava de informação de interesse coletivo e que, por essa razão, não haveria violação constitucional. De acordo com a Constituição Federal de 1988, considerando os direitos fundamentais expressamente positivados, a situação descrita:',
    alternativas: [
      { id: 'A', texto: 'é constitucional, pois o interesse coletivo prevalece sobre direitos individuais quando não houver finalidade econômica.' },
      { id: 'B', texto: 'é constitucional, desde que assegurado posterior direito de resposta ou indenização.' },
      { id: 'C', texto: 'revela violação constitucional, pois o direito à proteção de dados pessoais possui estatura de direito fundamental autônomo.' },
      { id: 'D', texto: 'revela violação constitucional apenas se demonstrado dano material concreto ao titular dos dados.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A EC 115/2022 incluiu a proteção de dados pessoais como direito fundamental autônomo (art. 5º, LXXIX).',
      incorretas: {
        A: 'O interesse coletivo não afasta a proteção de dados.',
        B: 'A indenização posterior não sana a violação.',
        D: 'A violação independe de dano material.'
      },
      conceitoCobrado: 'Proteção de dados pessoais (art. 5º, LXXIX).',
      pegadinha: 'Achar que só há violação com dano material.',
      comoApareceEmConcurso: 'Tema atual.'
    },
    tags: ['dados pessoais', 'art. 5º, LXXIX']
  },
  {
    id: 'Q-REAL-DC-0326',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Associação — dissolução compulsória',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'A associação não governamental Alfa tem por objeto o desenvolvimento de projetos culturais em prol de determinado grupo representativo da sociedade brasileira. A partir de provas colhidas em investigação criminal, constatou-se que Alfa vinha sendo sistematicamente utilizada para a prática de infrações penais. Em razão desse fato, instaurou-se um debate, junto aos poderes constituídos de distintos níveis federativos, em relação à possibilidade, ou não, de ser obstado o funcionamento de Alfa. Ao fim dos debates, concluiu-se corretamente que:',
    alternativas: [
      { id: 'A', texto: 'pode ser promovida a dissolução compulsória de Alfa, o que exige decisão judicial transitada em julgado;' },
      { id: 'B', texto: 'é vedada a dissolução de Alfa, por decisão judicial ou administrativa, considerando que a liberdade de associação é um direito fundamental;' },
      { id: 'C', texto: 'é possível a suspensão das atividades de Alfa por decisão judicial, até que seja regularizada a sua representatividade, mas não a sua dissolução;' },
      { id: 'D', texto: 'pode ser revogada a autorização de funcionamento concedida pelo município no qual Alfa está situada, por se tratar de matéria de interesse local;' },
      { id: 'E', texto: 'pode ser interrompida a atuação de Alfa, caso seja demonstrada a sua atividade ilícita, em processo administrativo no qual seja assegurada a ampla defesa.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 5º, XIX: a dissolução compulsória exige decisão judicial transitada em julgado.[reference:8]',
      incorretas: {
        B: 'A dissolução é possível, com decisão judicial.',
        C: 'A dissolução é possível.',
        D: 'A dissolução não pode ser por ato administrativo.',
        E: 'Não cabe interrupção por processo administrativo.'
      },
      conceitoCobrado: 'Dissolução de associação (art. 5º, XIX).',
      pegadinha: 'Achar que a dissolução pode ser administrativa.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['associação', 'dissolução', 'art. 5º, XIX']
  },
  {
    id: 'Q-REAL-DC-0327',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Acesso ao Judiciário e via administrativa',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'O processo administrativo federal integra o regime jurídico-administrativo e orienta a atuação da Administração por meio de garantias e limites normativos que asseguram regularidade procedimental e coerência decisória. A partir dessa informação e à luz da Lei nº 9.784/1999, julgue os itens seguintes. O acesso ao Poder Judiciário para questionar atos administrativos depende do esgotamento prévio da via administrativa.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Errado. O art. 5º, XXXV, assegura o acesso ao Judiciário independentemente do esgotamento da via administrativa.[reference:9]',
      incorretas: {
        A: 'A via administrativa não é condição para o acesso ao Judiciário.'
      },
      conceitoCobrado: 'Inafastabilidade da jurisdição (art. 5º, XXXV).',
      pegadinha: 'Achar que o esgotamento administrativo é obrigatório.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['acesso à justiça', 'art. 5º, XXXV']
  },
  {
    id: 'Q-REAL-DC-0328',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Direitos dos cidadãos (Guardas Municipais)',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'No que diz respeito aos direitos e deveres individuais e coletivos estabelecidos na Constituição Federal, analise as alternativas abaixo e assinale a única correta dos direitos dos cidadãos que devem ser estritamente observadas pelos servidores públicos, em especial os Guardas Civis Municipais.',
    alternativas: [
      { id: 'A', texto: 'Ninguém será submetido à tortura. No entanto, o tratamento degradante é admitido em determinadas circunstâncias.' },
      { id: 'B', texto: 'É assegurado o livre exercício dos cultos religiosos, excetuando-se a proteção aos locais de culto e às respectivas liturgias.' },
      { id: 'C', texto: 'A residência é asilo inviolável do indivíduo, sendo permitido o ingresso de agentes públicos sem o consentimento do morador apenas em caso de flagrante delito, desastre ou por determinação judicial, independentemente do horário, para fins de investigação.' },
      { id: 'D', texto: 'É admitida a submissão do indivíduo a tratamento desumano ou degradante quando necessária à preservação da ordem pública ou à obtenção de informações relevantes para a segurança coletiva, desde que praticada por autoridade competente.' },
      { id: 'E', texto: 'É vedada a privação de direitos em razão de crença religiosa, admitindo-se tal restrição quando o indivíduo invocar essa crença para eximir-se de obrigação legal imposta de forma geral e recusa-se a cumprir a prestação alternativa prevista em lei.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'Art. 5º, VIII: ninguém será privado de direitos por motivo de crença religiosa ou de convicção filosófica ou política, salvo se as invocar para eximir-se de obrigação legal a todos imposta e recusar-se a cumprir prestação alternativa.',
      incorretas: {
        A: 'O tratamento degradante é sempre vedado.',
        B: 'Os locais de culto e liturgias são protegidos.',
        C: 'A entrada por determinação judicial só pode ocorrer durante o dia.',
        D: 'O tratamento desumano é vedado.'
      },
      conceitoCobrado: 'Art. 5º, III, VI, VIII e XI.',
      pegadinha: 'Admitir tratamento degradante.',
      comoApareceEmConcurso: 'Cobrança combinada.'
    },
    tags: ['tortura', 'religião', 'domicílio']
  },
  {
    id: 'Q-REAL-DC-0329',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Direitos e garantias (manifestação, domicílio, trabalho, legalidade, locomoção)',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Em relação aos direitos e garantias fundamentais previstos na Constituição Federal, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'A manifestação do pensamento somente é permitida mediante identificação prévia e autorização da autoridade competente.' },
      { id: 'B', texto: 'É admitida a entrada na casa do indivíduo durante a noite, independentemente de ordem judicial, quando se tratar de investigação criminal.' },
      { id: 'C', texto: 'O exercício de qualquer trabalho depende de licença estatal, ainda que o indivíduo possua qualificação profissional adequada.' },
      { id: 'D', texto: 'Ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei.' },
      { id: 'E', texto: 'A liberdade de locomoção no território nacional pode ser restringida em tempo de paz sem necessidade de previsão legal.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Art. 5º, II: princípio da legalidade.',
      incorretas: {
        A: 'Não se exige autorização prévia.',
        B: 'A entrada à noite sem ordem judicial é vedada.',
        C: 'O exercício profissional é livre, atendidas as qualificações legais.',
        E: 'A locomoção é livre em tempo de paz.'
      },
      conceitoCobrado: 'Legalidade (art. 5º, II).',
      pegadinha: 'Achar que se exige autorização para manifestação.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['legalidade', 'art. 5º, II']
  },
  {
    id: 'Q-REAL-DC-0330',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Direitos assegurados (resposta, assistência religiosa, dados, expressão)',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'De acordo com as disposições do art. 5º do Capítulo I – Dos Direitos e Deveres Individuais e Coletivos, aos brasileiros e aos estrangeiros residentes no País são assegurados os seguintes direitos: I. O direito de resposta, proporcional ao agravo, além da indenização por dano material, moral ou à imagem. II. Nos termos da lei, a prestação de assistência religiosa nas entidades civis e militares de internação coletiva. III. Nos termos da lei, o direito à proteção dos dados pessoais, inclusive nos meios digitais. IV. A livre expressão da atividade intelectual, artística, científica e de comunicação, condicionada à devida licença. Quais estão corretos?',
    alternativas: [
      { id: 'A', texto: 'Apenas I e III.' },
      { id: 'B', texto: 'Apenas II e IV.' },
      { id: 'C', texto: 'Apenas I, II e III.' },
      { id: 'D', texto: 'Apenas II, III e IV.' },
      { id: 'E', texto: 'I, II, III e IV.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'I (art. 5º, V), II (art. 5º, VII) e III (art. 5º, LXXIX) estão corretos. IV é falso: a expressão é livre, independentemente de censura ou licença (art. 5º, IX).',
      incorretas: {
        A: 'II também está correto.',
        B: 'I e III estão corretos.',
        D: 'IV é falso.',
        E: 'IV é falso.'
      },
      conceitoCobrado: 'Art. 5º, V, VII, IX e LXXIX.',
      pegadinha: 'Exigir licença para expressão.',
      comoApareceEmConcurso: 'Cobrança combinada.'
    },
    tags: ['resposta', 'dados', 'expressão']
  },
  {
    id: 'Q-REAL-DC-0331',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Penas (morte, banimento, presidiárias)',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Analise a sentença abaixo com base no que dispõe a Constituição Federal vigente: No Brasil, não haverá pena de morte em nenhuma hipótese (1ª parte). A pena de banimento é vedada no Brasil, ainda que se esteja tratando de crime de traição à pátria (2ª parte). Às presidiárias serão asseguradas condições para que possam permanecer com seus filhos durante o período de amamentação (3ª parte). Quais partes estão corretas?',
    alternativas: [
      { id: 'A', texto: 'Apenas a 1ª parte.' },
      { id: 'B', texto: 'Apenas a 2ª parte.' },
      { id: 'C', texto: 'Apenas a 3ª parte.' },
      { id: 'D', texto: 'Apenas a 2ª e a 3ª partes.' },
      { id: 'E', texto: 'Todas as partes.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: '1ª parte é falsa: há exceção de pena de morte em caso de guerra declarada (art. 5º, XLVII, "a"). 2ª parte é verdadeira: o banimento é vedado. 3ª parte é verdadeira: art. 5º, L.',
      incorretas: {
        A: 'A 1ª parte é falsa.',
        B: 'A 3ª parte também é verdadeira.',
        C: 'A 2ª parte também é verdadeira.',
        E: 'A 1ª parte é falsa.'
      },
      conceitoCobrado: 'Penas (art. 5º, XLVII e L).',
      pegadinha: 'Achar que a pena de morte é vedada em absoluto.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['pena de morte', 'banimento', 'presidiárias']
  },
  {
    id: 'Q-REAL-DC-0332',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Ação popular, sucessão, crimes e extradição',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Com relação aos direitos e deveres individuais e coletivos, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'qualquer pessoa, física ou jurídica, é parte legítima para propor ação popular que vise a anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural, ficando o autor, salvo comprovada má-fé, isento de custas judiciais e do ônus da sucumbência.' },
      { id: 'B', texto: 'nenhuma pena passará da pessoa do condenado, mas a obrigação de reparar o dano e a decretação do perdimento de bens podem ser, nos termos da lei, estendidas aos sucessores e contra eles executadas, sem qualquer limitação.' },
      { id: 'C', texto: 'a sucessão de bens de estrangeiros situados no País será sempre regulada pela lei brasileira em benefício do cônjuge ou dos filhos brasileiros, independentemente do quanto previsto na lei pessoal do de cujus.' },
      { id: 'D', texto: 'a lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins, o terrorismo e os definidos como crimes hediondos, por eles respondendo os mandantes, os executores e os que, podendo evitá-los, se omitirem.' },
      { id: 'E', texto: 'nenhum brasileiro será extraditado, nem o nato nem o naturalizado, por expressa vedação prevista na Constituição Federal, podendo ser concedida extradição de estrangeiro por crime político ou de opinião.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'D reproduz o art. 5º, XLIII.',
      incorretas: {
        A: 'A ação popular é privativa do cidadão (pessoa física), não de pessoa jurídica.',
        B: 'A reparação e o perdimento estendem-se aos sucessores, mas há limitações legais.',
        C: 'A lei brasileira só prevalece se mais favorável.',
        E: 'O brasileiro naturalizado pode ser extraditado em casos de crime comum antes da naturalização ou tráfico.'
      },
      conceitoCobrado: 'Art. 5º, XLIII, LI, XXXI, LXXIII.',
      pegadinha: 'Achar que a pessoa jurídica pode propor ação popular.',
      comoApareceEmConcurso: 'Cobrança combinada.'
    },
    tags: ['ação popular', 'extradição', 'crimes hediondos']
  },
  {
    id: 'Q-REAL-DC-0333',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Liberdade religiosa no ambiente de trabalho',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Em um órgão público municipal, uma servidora percebeu que mensagens ofensivas sobre sua religião estavam sendo compartilhadas em um grupo de comunicação interna entre colegas de trabalho. Sentindo-se prejudicada, ela registrou a ocorrência junto à ouvidoria do órgão, solicitando providências administrativas. Considerando os direitos e garantias fundamentais previstos na Constituição Federal, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'Como se trata de ambiente público, a liberdade religiosa não se aplica, pois o servidor deve se adaptar às práticas internas da Administração.' },
      { id: 'B', texto: 'A Administração Pública não pode intervir em conflitos internos de servidores, pois sua atuação se limita a decisões administrativas formais.' },
      { id: 'C', texto: 'A liberdade de manifestação do pensamento permite que colegas ofendam crenças alheias sem consequências no âmbito da Administração Pública.' },
      { id: 'D', texto: 'A Constituição assegura a liberdade de consciência e de crença, garantindo proteção aos servidores contra qualquer tratamento discriminatório relacionado à religião, cabendo à Administração Pública adotar medidas corretivas.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Art. 5º, VI e VIII: a liberdade de consciência e de crença é inviolável, e a Administração deve coibir discriminações.',
      incorretas: {
        A: 'A liberdade religiosa aplica-se também no ambiente público.',
        B: 'A Administração deve intervir para coibir discriminação.',
        C: 'A liberdade de expressão não protege ofensas discriminatórias.'
      },
      conceitoCobrado: 'Liberdade religiosa (art. 5º, VI).',
      pegadinha: 'Achar que a liberdade de expressão autoriza ofensas.',
      comoApareceEmConcurso: 'Caso concreto.'
    },
    tags: ['religião', 'discriminação']
  },
  {
    id: 'Q-REAL-DC-0334',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Manifestação, anonimato, domicílio e sigilo',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Em relação aos direitos e garantias fundamentais previstos na Constituição Federal, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'É assegurado o direito de manifestação do pensamento, inclusive de forma anônima, cabendo ao Poder Público garantir a confidencialidade do autor em qualquer circunstância.' },
      { id: 'B', texto: 'É livre a manifestação do pensamento, sendo vedado o anonimato, assegurado ainda o direito de resposta proporcional ao agravo, além da indenização por dano material, moral ou à imagem.' },
      { id: 'C', texto: 'À casa é considerada asilo inviolável do indivíduo, sendo vedada a entrada de qualquer pessoa, mesmo em caso de flagrante delito ou desastre.' },
      { id: 'D', texto: 'O sigilo da correspondência e das comunicações telefônicas é absoluto, não admitindo qualquer hipótese de quebra por ordem judicial.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 5º, IV e V: é livre a manifestação do pensamento, vedado o anonimato, assegurado o direito de resposta e indenização.',
      incorretas: {
        A: 'O anonimato é vedado.',
        C: 'A casa pode ser acessada em flagrante, desastre ou ordem judicial.',
        D: 'O sigilo pode ser quebrado por ordem judicial (art. 5º, XII).'
      },
      conceitoCobrado: 'Manifestação, anonimato e direito de resposta.',
      pegadinha: 'Permitir o anonimato.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['manifestação', 'anonimato', 'resposta']
  },
  {
    id: 'Q-REAL-DC-0335',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'PL das Fake News e liberdade de expressão',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'O Brasil vem vivenciando importantes discussões e ações relacionadas ao combate à desinformação e ao uso ético das tecnologias digitais. Um dos focos centrais foi a tramitação do chamado Projeto de Lei das Fake News, que visa regulamentar as plataformas digitais e promover maior responsabilidade sobre os conteúdos veiculados online. Em meio a debates acalorados entre representantes da sociedade civil, empresas de tecnologia e membros dos Três Poderes, o projeto destaca-se por:',
    alternativas: [
      { id: 'A', texto: 'Estimular a auto-regulamentação das plataformas digitais, sem qualquer responsabilização legal sobre os conteúdos falsos compartilhados, para garantir a liberdade de expressão total.' },
      { id: 'B', texto: 'Determinar que as plataformas digitais sejam responsabilizadas por conteúdos impulsionados comercialmente e por práticas deliberadas de desinformação, além de exigir mais transparência nos algoritmos.' },
      { id: 'C', texto: 'Prever a criação de um órgão estatal de censura prévia sobre todo conteúdo digital publicado no país, com controle direto do Executivo.' },
      { id: 'D', texto: 'Obrigar as empresas de redes sociais e aplicativos de mensagens a removerem, sem necessidade de decisão judicial, qualquer conteúdo considerado ofensivo por usuários.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O PL das Fake News busca responsabilizar plataformas por conteúdos impulsionados e exigir transparência algorítmica, sem censura prévia.',
      incorretas: {
        A: 'O projeto prevê responsabilização.',
        C: 'Não se trata de censura prévia.',
        D: 'A remoção não é automática por qualquer usuário.'
      },
      conceitoCobrado: 'Liberdade de expressão e desinformação.',
      pegadinha: 'Achar que o projeto institui censura prévia.',
      comoApareceEmConcurso: 'Tema atual.'
    },
    tags: ['fake news', 'liberdade de expressão']
  },
  {
    id: 'Q-REAL-DC-0336',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Moralidade administrativa e ação popular',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'O texto da Constituição Federal nos traz oportunidades que impõem aos agentes públicos o dever da observância da moralidade. Assinalar a alternativa que apresenta o princípio da moralidade administrativa.',
    alternativas: [
      { id: 'A', texto: 'Não haverá prisão civil por dívida, salvo a do responsável pelo inadimplemento voluntário e inescusável de obrigação alimentícia e a do depositário infiel.' },
      { id: 'B', texto: 'Qualquer cidadão é parte legítima para propor ação popular que vise a anular ato lesivo ao patrimônio público ou de entidade de que o Estado participe, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural, ficando o autor, salvo comprovada má-fé, isento de custas judiciais e do ônus da sucumbência.' },
      { id: 'C', texto: 'Nenhum brasileiro será extraditado, salvo o naturalizado, em caso de crime comum, praticado antes da naturalização, ou de comprovado envolvimento em tráfico ilícito de entorpecentes e drogas afins, na forma da lei.' },
      { id: 'D', texto: 'A lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins, o terrorismo e os definidos como crimes hediondos, por eles respondendo os mandantes, os executores e os que, podendo evitá-los, se omitirem.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A ação popular é o instrumento que visa anular ato lesivo à moralidade administrativa (art. 5º, LXXIII).',
      incorretas: {
        A: 'Trata da prisão civil.',
        C: 'Trata de extradição.',
        D: 'Trata de crimes inafiançáveis.'
      },
      conceitoCobrado: 'Moralidade administrativa e ação popular.',
      pegadinha: 'Confundir com outros institutos.',
      comoApareceEmConcurso: 'Cobrança do art. 5º, LXXIII.'
    },
    tags: ['moralidade', 'ação popular']
  },
  {
    id: 'Q-REAL-DC-0337',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Direitos fundamentais (anonimato, domicílio, dados, informação)',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Considerando os direitos fundamentais previstos no Título II da Constituição Federal de 1988 e a respectiva regulamentação infraconstitucional, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'É livre a manifestação de pensamento, sendo permitida, conforme previsão expressa no texto da Constituição Federal de 1988, em casos excepcionais, o anonimato.' },
      { id: 'B', texto: 'Embora a casa seja asilo inviolável do indivíduo, é possível nela adentrar, sem o consentimento do morador, por ordem judicial, durante o dia ou à noite.' },
      { id: 'C', texto: 'O direito à proteção dos dados pessoais não é um direito fundamental, embora esteja regulamentado em lei infraconstitucional.' },
      { id: 'D', texto: 'A liberdade de informação é um direito fundamental, observando-se, quando do seu exercício, a publicidade como preceito geral e o sigilo como exceção.' },
      { id: 'E', texto: 'A liberdade de informação é um direito fundamental, regulamentado por lei infraconstitucional, a qual assegura a qualquer pessoa o direito a formular pedido de acesso à informação, que, para ser atendido, poderá ser tanto específico quanto genérico.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A liberdade de informação (art. 5º, XIV e XXXIII) rege-se pela publicidade como regra e sigilo como exceção.',
      incorretas: {
        A: 'O anonimato é vedado.',
        B: 'A ordem judicial só pode ser cumprida durante o dia.',
        C: 'A proteção de dados é direito fundamental (art. 5º, LXXIX).',
        E: 'O pedido de acesso à informação deve ser específico.'
      },
      conceitoCobrado: 'Direito à informação (art. 5º, XXXIII).',
      pegadinha: 'Achar que o pedido pode ser genérico.',
      comoApareceEmConcurso: 'Cobrança da Lei de Acesso à Informação.'
    },
    tags: ['informação', 'dados pessoais']
  },
  {
    id: 'Q-REAL-DC-0338',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Racismo, intimidade e associação paramilitar',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Com base no artigo 5° da Constituição da República Federativa do Brasil de 1988, julgue os itens seguintes: I. A prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de detenção, nos termos da lei. II. São invioláveis a intimidade, a vida privada, a honra e a imagem das pessoas, assegurado o direito a indenização pelo dano material ou moral decorrente de sua violação. III. É plena a liberdade de associação para fins lícitos, inclusive a de caráter paramilitar. Está(ão) CORRETO(S):',
    alternativas: [
      { id: 'A', texto: 'I, II e III.' },
      { id: 'B', texto: 'I, apenas.' },
      { id: 'C', texto: 'II, apenas.' },
      { id: 'D', texto: 'I e II, apenas.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'II está correto (art. 5º, X). I é falso: a pena do racismo é de reclusão, não detenção (art. 5º, XLII). III é falso: é vedada a associação de caráter paramilitar (art. 5º, XVII).',
      incorretas: {
        A: 'I e III são falsos.',
        B: 'I é falso.',
        D: 'I é falso.'
      },
      conceitoCobrado: 'Racismo, intimidade e associação (art. 5º, XLII, X, XVII).',
      pegadinha: 'Trocar reclusão por detenção.',
      comoApareceEmConcurso: 'Cobrança combinada.'
    },
    tags: ['racismo', 'intimidade', 'associação']
  },
  {
    id: 'Q-REAL-DC-0339',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Crime inafiançável e imprescritível',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Com base na Constituição Federal, constitui crime inafiançável e imprescritível, sujeito a pena de reclusão, a prática de:',
    alternativas: [
      { id: 'A', texto: 'Tortura.' },
      { id: 'B', texto: 'Terrorismo.' },
      { id: 'C', texto: 'Difamação.' },
      { id: 'D', texto: 'Racismo.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Art. 5º, XLII: a prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão.[reference:10]',
      incorretas: {
        A: 'A tortura é inafiançável, mas não imprescritível.',
        B: 'O terrorismo é inafiançável, mas não imprescritível.',
        C: 'A difamação não é inafiançável nem imprescritível.'
      },
      conceitoCobrado: 'Racismo (art. 5º, XLII).',
      pegadinha: 'Confundir com tortura e terrorismo.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['racismo', 'art. 5º, XLII']
  },
  {
    id: 'Q-REAL-DC-0340',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Crimes imprescritíveis',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Tendo em vista os direitos e deveres individuais e coletivos, presentes no Art 5º da Constituição Federal de 1988, assinale a afirmativa INCORRETA.',
    alternativas: [
      { id: 'A', texto: 'A lei punirá qualquer discriminação atentatória dos direitos e liberdades fundamentais.' },
      { id: 'B', texto: 'O ordenamento jurídico brasileiro considera que os crimes de racismo e os hediondos são imprescritíveis.' },
      { id: 'C', texto: 'Os mandados de criminalização constituem o dever de criminalizar determinadas condutas em razão de sua relevância.' },
      { id: 'D', texto: 'O princípio do juiz natural, de acordo com a Constituição Federal, prevê que não haverá juízo ou tribunal de exceção, não podendo ninguém ser sentenciado, senão pela autoridade competente.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'B é INCORRETA: apenas o racismo (e a ação de grupos armados) é imprescritível; os crimes hediondos não são, por si só, imprescritíveis.[reference:11]',
      incorretas: {
        A: 'Correta — art. 5º, XLI.',
        C: 'Correta — mandados de criminalização.',
        D: 'Correta — art. 5º, XXXVII e LIII.'
      },
      conceitoCobrado: 'Crimes imprescritíveis (art. 5º, XLII e XLIV).',
      pegadinha: 'Incluir crimes hediondos como imprescritíveis.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['imprescritibilidade', 'hediondos']
  },
  {
    id: 'Q-REAL-DC-0341',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Acesso à informação',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'A Constituição de 1988 prevê que a documentação governamental é patrimônio cultural brasileiro, e a administração pública tem a obrigação de franquear sua consulta a quantos dela necessitem. Considerando a regulamentação desse dispositivo, qual conduta é compatível com o direito fundamental de acesso à informação?',
    alternativas: [
      { id: 'A', texto: 'O fornecimento indireto de informação, quando a entidade pública comunica por escrito o sítio virtual consultável pelo requerente com acesso à internet.' },
      { id: 'B', texto: 'A dispensa, pelo órgão público, da identificação da pessoa que solicita acesso à informação e à especificação da informação requerida.' },
      { id: 'C', texto: 'A ordem de prestar informação dada a entidade privada sem fins lucrativos que realize ações de interesse público mediante financiamento coletivo.' },
      { id: 'D', texto: 'O fornecimento da informação em formato digital nesse mesmo formato, independentemente da anuência do requerente.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O fornecimento indireto (indicação de sítio virtual) é admitido pela Lei de Acesso à Informação.',
      incorretas: {
        B: 'O órgão deve identificar o requerente e a informação.',
        C: 'A LAI não impõe essa obrigação a entidades privadas sem fins lucrativos.',
        D: 'O formato deve observar a preferência do requerente.'
      },
      conceitoCobrado: 'Lei de Acesso à Informação.',
      pegadinha: 'Achar que o formato digital é imposto.',
      comoApareceEmConcurso: 'Cobrança da LAI.'
    },
    tags: ['acesso à informação', 'LAI']
  },
  {
    id: 'Q-REAL-DC-0342',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Participações individuais em obras coletivas',
    dificuldade: 2,
    prioridade: 'baixa',
    enunciado: 'À luz dos direitos e deveres individuais e coletivos e dos direitos sociais, estabelecidos na Constituição Federal de 1988, julgue os itens seguintes. A proteção às participações individuais em obras coletivas e à reprodução da imagem e voz humanas, inclusive nas atividades desportivas, é uma norma de aplicação imediata, independendo, portanto, de lei para torná-la exequível.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Errado. O art. 5º, XXVIII, "a", é norma de eficácia limitada, pois depende de lei para produzir seus efeitos (""nos termos da lei"").[reference:12]',
      incorretas: {
        A: 'A norma não é de aplicação imediata.'
      },
      conceitoCobrado: 'Eficácia da norma (art. 5º, XXVIII).',
      pegadinha: 'Achar que é autoaplicável.',
      comoApareceEmConcurso: 'Cobrança de classificação de normas.'
    },
    tags: ['eficácia limitada', 'art. 5º, XXVIII']
  },
  {
    id: 'Q-REAL-DC-0343',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'V/F — igualdade, anonimato, associações e resposta',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Os itens a seguir referem-se aos direitos e deveres individuais e coletivos previstos na Constituição Federal de 1988, analise-os e coloque V para verdadeiro e F para falso: ( ) Todos são iguais perante a lei, sem distinção de qualquer natureza. ( ) Homens e mulheres são iguais em direitos e obrigações. ( ) É livre a manifestação do pensamento, sendo permitido o anonimato. ( ) A criação de associações e, na forma da lei, a de cooperativas dependem de autorização, sendo obrigatória a interferência estatal em seu funcionamento. ( ) É assegurado o direito de resposta, proporcional ao agravo, além da indenização por dano material, moral ou à imagem. Os itens são, de cima para baixo, respectivamente:',
    alternativas: [
      { id: 'A', texto: 'V, V, V, F, F.' },
      { id: 'B', texto: 'V, V, F, F, V.' },
      { id: 'C', texto: 'V, V, F, V, V.' },
      { id: 'D', texto: 'V, V, F, F, F.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'V (art. 5º, caput), V (art. 5º, I), F (o anonimato é vedado — art. 5º, IV), F (a criação de associações independe de autorização — art. 5º, XVIII), V (art. 5º, V).[reference:13]',
      incorretas: {
        A: 'A terceira e a quarta são falsas.',
        C: 'A quarta é falsa.',
        D: 'A quinta é verdadeira.'
      },
      conceitoCobrado: 'Art. 5º, caput, I, IV, V e XVIII.',
      pegadinha: 'Permitir o anonimato.',
      comoApareceEmConcurso: 'Questão V/F.'
    },
    tags: ['igualdade', 'anonimato', 'associação']
  },
  {
    id: 'Q-REAL-DC-0344',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Acesso à Justiça (INCORRETA)',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Em consonância com a Constituição Federal, assinale a alternativa INCORRETA.',
    alternativas: [
      { id: 'A', texto: 'a lei excluirá da apreciação do Poder Judiciário lesão ou ameaça a direito.' },
      { id: 'B', texto: 'é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer.' },
      { id: 'C', texto: 'é assegurado a todos o acesso à informação e resguardado o sigilo da fonte, quando necessário ao exercício profissional.' },
      { id: 'D', texto: 'no caso de iminente perigo público, a autoridade competente poderá usar de propriedade particular, assegurada ao proprietário indenização ulterior, se houver dano.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A é INCORRETA: o art. 5º, XXXV, diz que a lei NÃO excluirá da apreciação do Judiciário lesão ou ameaça a direito.[reference:14]',
      incorretas: {
        B: 'Correta — art. 5º, XIII.',
        C: 'Correta — art. 5º, XIV.',
        D: 'Correta — art. 5º, XXV.'
      },
      conceitoCobrado: 'Inafastabilidade da jurisdição (art. 5º, XXXV).',
      pegadinha: 'Suprimir o "não".',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['acesso à justiça', 'art. 5º, XXXV']
  },
  {
    id: 'Q-REAL-DC-0345',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Pena de morte, estabelecimentos e provas ilícitas',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Com base nas disposições do texto constitucional, assinale com VERDADEIRO (V) ou FALSO (F) as afirmativas a seguir: ( ) Não há exceção no texto constitucional acerca da proibição da pena de morte no território brasileiro. ( ) A pena será cumprida em estabelecimentos distintos, de acordo com a natureza do delito, a idade e o sexo do apenado. ( ) São inadmissíveis, no processo, provas obtidas por meios ilícitos. Assinale a alternativa que completa de forma correta e adequadamente os parênteses, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'F-V-V' },
      { id: 'B', texto: 'F-F-V' },
      { id: 'C', texto: 'F-V-F' },
      { id: 'D', texto: 'V-V-F' },
      { id: 'E', texto: 'V-V-V' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'F (há exceção de pena de morte em guerra declarada — art. 5º, XLVII, "a"), V (art. 5º, XLVIII), V (art. 5º, LVI).[reference:15]',
      incorretas: {
        B: 'A segunda é verdadeira.',
        C: 'A terceira é verdadeira.',
        D: 'A primeira é falsa.',
        E: 'A primeira é falsa.'
      },
      conceitoCobrado: 'Art. 5º, XLVII, XLVIII e LVI.',
      pegadinha: 'Achar que a pena de morte é vedada sem exceção.',
      comoApareceEmConcurso: 'Questão V/F.'
    },
    tags: ['pena de morte', 'provas ilícitas']
  },
  {
    id: 'Q-REAL-DC-0346',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Direitos fundamentais basilares',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A Constituição Federal de 1988, em relação aos Direitos e Garantias Fundamentais – Direitos e Deveres Individuais e Coletivos, dispõe que: "Art. 5º Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no país a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade [...]." Considerando a temática, analise as afirmativas a seguir. I. A Constituição Federal de 1988, em seu Art. 5º, aponta como direitos fundamentais basilares o direito à vida, à liberdade, à igualdade, à segurança e à propriedade. II. Os direitos individuais e coletivos referem-se aos direitos fundamentais que toda a sociedade desfruta, como direito à educação, alimentação, segurança, trabalho, moradia e saúde. III. O direito à vida pressupõe a condição de viver de forma digna, considerando a preservação da integridade, física e moral de cada indivíduo. IV. O direito à liberdade abarca desde a liberdade de locomoção pelo país à liberdade de pensamento, de expressão, de consciência e de reunião. Está correto o que se afirma apenas em:',
    alternativas: [
      { id: 'A', texto: 'II.' },
      { id: 'B', texto: 'III e IV.' },
      { id: 'C', texto: 'I, II e IV.' },
      { id: 'D', texto: 'I, III e IV.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'I, III e IV estão corretos. II é falso: educação, alimentação, trabalho, moradia e saúde são direitos sociais (art. 6º), não individuais do art. 5º.',
      incorretas: {
        A: 'II é falso.',
        B: 'I também está correto.',
        C: 'II é falso.'
      },
      conceitoCobrado: 'Direitos individuais x direitos sociais.',
      pegadinha: 'Misturar direitos sociais com individuais.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['direitos individuais', 'direitos sociais']
  },

  /* ---------- DC-07 — Remédios Constitucionais ---------- */
  {
    id: 'Q-REAL-DC-0701',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-07',
    subtema: 'Mandado de injunção',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'João, brasileiro, constatou que a falta de norma regulamentadora está impedindo o exercício dos seus direitos e liberdades constitucionais inerentes à cidadania. Diante disso, o particular buscou analisar o texto constitucional em busca de opções para sanar a situação posta. Nesse cenário, considerando as disposições da Constituição Federal, é correto afirmar que João:',
    alternativas: [
      { id: 'A', texto: 'não poderá ingressar, em juízo, com ação judicial, devendo aguardar a edição, pelo Congresso Nacional, da norma regulamentadora, de forma a exercer seus direitos e liberdades constitucionais inerentes à cidadania;' },
      { id: 'B', texto: 'não poderá ingressar, em juízo, com ação judicial, devendo aguardar a edição, pelo Poder Executivo, da norma regulamentadora, de forma a exercer seus direitos e liberdades constitucionais inerentes à cidadania;' },
      { id: 'C', texto: 'poderá ingressar, em juízo, com um mandado de injunção, visando ao exercício de seus direitos e liberdades constitucionais inerentes à cidadania;' },
      { id: 'D', texto: 'poderá ingressar, em juízo, com um mandado de segurança, visando ao exercício de seus direitos e liberdades constitucionais inerentes à cidadania;' },
      { id: 'E', texto: 'poderá ingressar, em juízo, com uma ação popular, visando ao exercício de seus direitos e liberdades constitucionais inerentes à cidadania.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Art. 5º, LXXI: conceder-se-á mandado de injunção sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania.[reference:16]',
      incorretas: {
        A: 'O mandado de injunção é justamente o remédio para a falta de norma.',
        B: 'Idem.',
        D: 'O mandado de segurança não supre a falta de norma.',
        E: 'A ação popular tem outro objeto.'
      },
      conceitoCobrado: 'Mandado de injunção (art. 5º, LXXI).',
      pegadinha: 'Confundir com mandado de segurança.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['mandado de injunção', 'art. 5º, LXXI']
  },
  {
    id: 'Q-REAL-DC-0702',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-07',
    subtema: 'Gratuidade de remédios constitucionais',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'O estado de direito no Brasil é chamado de democrático, pois todo poder emana do povo e é por ele exercido, diretamente ou por meio de representantes eleitos. Considerando os instrumentos de democracia representativa e à luz dos direitos fundamentais expressos na Constituição Federal de 1988, julgue o item a seguir. A Constituição Federal de 1988 assegura gratuidade às ações de mandado de segurança, de habeas-corpus e de habeas-data.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Errado. A CF assegura gratuidade apenas ao habeas corpus e ao habeas data (art. 5º, LXXVII). O mandado de segurança não é gratuito.[reference:17]',
      incorretas: {
        A: 'O mandado de segurança não é gratuito.'
      },
      conceitoCobrado: 'Gratuidade dos remédios (art. 5º, LXXVII).',
      pegadinha: 'Incluir o mandado de segurança como gratuito.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['gratuidade', 'habeas corpus', 'habeas data']
  },
  {
    id: 'Q-REAL-DC-0703',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-07',
    subtema: 'Ação popular',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Determinado município firmou contrato para o aterramento de área de várzea às margens do Rio Claro, com supressão de vegetação nativa e sem a realização de estudo de impacto ambiental. Diante disso, um eleitor regularmente inscrito e morador da região pretende anular o ato administrativo por lesividade ao meio ambiente ecologicamente equilibrado, buscando a suspensão imediata do contrato. Nessa hipótese, a ação cabível é o(a):',
    alternativas: [
      { id: 'A', texto: 'mandado de injunção.' },
      { id: 'B', texto: 'ação popular.' },
      { id: 'C', texto: 'ação civil pública.' },
      { id: 'D', texto: 'mandado de segurança coletivo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A ação popular (art. 5º, LXXIII) é o remédio cabível para o cidadão anular ato lesivo ao meio ambiente.[reference:18]',
      incorretas: {
        A: 'O mandado de injunção não se aplica.',
        C: 'A ação civil pública é do Ministério Público.',
        D: 'O mandado de segurança coletivo tem outro objeto.'
      },
      conceitoCobrado: 'Ação popular (art. 5º, LXXIII).',
      pegadinha: 'Confundir com ação civil pública.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['ação popular', 'art. 5º, LXXIII']
  },
  {
    id: 'Q-REAL-DC-0704',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-07',
    subtema: 'Habeas data',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Um servidor público municipal recebeu requerimento de cidadão que pretendia obter informações de interesse particular constantes de banco de dados mantido por órgão governamental. Após a negativa administrativa de acesso, cogitou-se a utilização de instrumento constitucional destinado especificamente à obtenção ou retificação dessas informações. Considerando a Constituição Federal, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'O mandado de segurança é o instrumento constitucional cabível para obtenção de informações relativas à pessoa do impetrante constantes de registros governamentais.' },
      { id: 'B', texto: 'O habeas corpus é cabível sempre que houver recusa de fornecimento de informações por órgão público.' },
      { id: 'C', texto: 'O habeas data destina-se a assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais ou de caráter público.' },
      { id: 'D', texto: 'A ação popular é o instrumento adequado para retificação de dados pessoais mantidos pela Administração Pública.' },
      { id: 'E', texto: 'O direito de acesso a informações pessoais depende de prévia autorização judicial, ainda que não haja controvérsia administrativa.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Art. 5º, LXXII, "a": o habeas data assegura o conhecimento de informações relativas à pessoa do impetrante.[reference:19]',
      incorretas: {
        A: 'O mandado de segurança não é o instrumento específico.',
        B: 'O habeas corpus é para locomoção.',
        D: 'A ação popular não serve para retificação de dados.',
        E: 'Não se exige autorização judicial prévia.'
      },
      conceitoCobrado: 'Habeas data (art. 5º, LXXII).',
      pegadinha: 'Confundir com mandado de segurança.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['habeas data', 'art. 5º, LXXII']
  },
  {
    id: 'Q-REAL-DC-0705',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-07',
    subtema: 'Mandado de injunção (lacuna)',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Assinale a alternativa que preencha CORRETAMENTE a lacuna a seguir, extraído da Constituição da República Federativa do Brasil de 1988. "Art. 5º Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade, nos termos seguintes: LXXI - conceder-se-á _____ sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania."',
    alternativas: [
      { id: 'A', texto: 'Habeas data.' },
      { id: 'B', texto: 'Tutela de evidência.' },
      { id: 'C', texto: 'Tutela de urgência.' },
      { id: 'D', texto: 'Mandado de injunção.' },
      { id: 'E', texto: 'Habeas corpus.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A lacuna corresponde ao mandado de injunção (art. 5º, LXXI).[reference:20]',
      incorretas: {
        A: 'Habeas data é o LXXII.',
        B: 'Tutela de evidência não é remédio constitucional.',
        C: 'Tutela de urgência não é remédio constitucional.',
        E: 'Habeas corpus é o LXVIII.'
      },
      conceitoCobrado: 'Mandado de injunção (art. 5º, LXXI).',
      pegadinha: 'Confundir com habeas data.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['mandado de injunção', 'art. 5º, LXXI']
  },

  /* ---------- DC-01 — Teoria da Constituição ---------- */
  {
    id: 'Q-REAL-DC-0101',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-01',
    subtema: 'Classificação das normas constitucionais',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre a classificação das normas constitucionais quanto à sua eficácia e aplicabilidade, a doutrina clássica as divide em normas de eficácia plena, contida e limitada. Nesse contexto, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'As normas de eficácia limitada dividem-se em normas programáticas e normas de princípio institutivo, sendo que as primeiras estabelecem fins sociais a serem alcançados pelo Estado e as segundas possuem aplicabilidade direta e imediata, produzindo todos os seus efeitos desde a promulgação.' },
      { id: 'B', texto: 'As normas de eficácia plena e as de eficácia contida diferenciam-se apenas pelo prazo de produção de efeitos, sendo que as primeiras exigem lei regulamentadora imediata e as segundas produzem efeitos apenas após decorrido o prazo de 90 (noventa) dias da promulgação.' },
      { id: 'C', texto: 'As normas de eficácia contida produzem todos os seus efeitos de forma imediata, mas podem ter seu alcance restringido por legislação posterior, enquanto as normas de eficácia limitada dependem de regulamentação ou de complementação infraconstitucional para produzir seus efeitos essenciais.' },
      { id: 'D', texto: 'As normas de eficácia plena são aquelas que, embora possuam aplicabilidade direta e imediata, admitem redução de sua abrangência por outras normas infraconstitucionais, como o direito de greve nos serviços essenciais.' },
      { id: 'E', texto: 'As normas de eficácia limitada, por exigirem norma integrativa para gerar seus principais efeitos, não produzem qualquer tipo de eficácia jurídica no período anterior à sua regulamentação, sendo consideradas programáticas.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'C descreve corretamente as normas de eficácia contida (produzem efeitos imediatos, mas podem ser restringidas) e as de eficácia limitada (dependem de regulamentação).[reference:21]',
      incorretas: {
        A: 'As normas de princípio institutivo não têm aplicabilidade imediata.',
        B: 'Não há prazo de 90 dias.',
        D: 'As normas de eficácia plena não admitem redução por lei.',
        E: 'As normas de eficácia limitada produzem eficácia jurídica (negativa, etc.).'
      },
      conceitoCobrado: 'Classificação de José Afonso da Silva.',
      pegadinha: 'Achar que as normas limitadas não produzem nenhum efeito.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['eficácia', 'normas constitucionais']
  },

  /* ---------- DC-02 — Princípios Fundamentais ---------- */
  {
    id: 'Q-REAL-DC-0201',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-02',
    subtema: 'Fundamentos, objetivos e relações internacionais',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'A Constituição Federal de 1988, no contexto do processo de redemocratização, procurou estabelecer não somente novas regras constitucionais em relação ao regime jurídico anterior, mas também diversos princípios e objetivos que norteiam todo o ordenamento jurídico brasileiro. Sobre esse tema, assinale a alternativa incorreta.',
    alternativas: [
      { id: 'A', texto: 'A cidadania e a dignidade da pessoa humana são alguns dos fundamentos da República Federativa do Brasil.' },
      { id: 'B', texto: 'Promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação, é um dos objetivos fundamentais da República Federativa do Brasil.' },
      { id: 'C', texto: 'No campo das relações internacionais, o Brasil buscará a integração econômica, política, social e cultural dos povos da América Latina, visando à formação de uma comunidade latino-americana de nações.' },
      { id: 'D', texto: 'A redução das desigualdades sociais e regionais foi estabelecida como um dos objetivos fundamentais da República Federativa do Brasil.' },
      { id: 'E', texto: 'A prática do racismo constitui crime inalienável e imprescritível, sujeito à pena de reclusão, nos termos da lei.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'E é INCORRETA: o art. 5º, XLII, diz que o racismo é crime INAFIANÇÁVEL e imprescritível, não "inalienável".',
      incorretas: {
        A: 'Correta — art. 1º, II e III.',
        B: 'Correta — art. 3º, IV.',
        C: 'Correta — art. 4º, parágrafo único.',
        D: 'Correta — art. 3º, III.'
      },
      conceitoCobrado: 'Fundamentos, objetivos e racismo.',
      pegadinha: 'Trocar "inafiançável" por "inalienável".',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['fundamentos', 'racismo', 'art. 5º, XLII']
  },

  /* ---------- DC-04 — Direitos Sociais ---------- */
  {
    id: 'Q-REAL-DC-0401',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direito à moradia',
    dificuldade: 1,
    prioridade: 'media',
    enunciado: 'O direito fundamental que visa garantir que todos tenham a possibilidade de morar e subsistir dignamente é denominado:',
    alternativas: [
      { id: 'A', texto: 'direito à segurança.' },
      { id: 'B', texto: 'direito à vida.' },
      { id: 'C', texto: 'direito à propriedade.' },
      { id: 'D', texto: 'direito à liberdade.' },
      { id: 'E', texto: 'direito à igualdade.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A questão trata do direito à moradia, que é um direito social (art. 6º), mas entre as alternativas, o direito à vida (art. 5º, caput) é o que fundamenta a existência digna. Contudo, a doutrina associa a moradia digna ao mínimo existencial, ligado à vida. Gabarito oficial: B (direito à vida).',
      incorretas: {
        A: 'A segurança é um direito, mas não o que garante moradia.',
        C: 'A propriedade não é o direito à moradia.',
        D: 'A liberdade não é o direito à moradia.',
        E: 'A igualdade não é o direito à moradia.'
      },
      conceitoCobrado: 'Direito à moradia e mínimo existencial.',
      pegadinha: 'Achar que a resposta seria "moradia", que não está nas alternativas.',
      comoApareceEmConcurso: 'Questão conceitual.'
    },
    tags: ['moradia', 'direito à vida']
  },

  /* ---------- DC-06 — Direitos Políticos ---------- */
  {
    id: 'Q-REAL-DC-0601',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-06',
    subtema: 'Cidadania',
    dificuldade: 1,
    prioridade: 'media',
    enunciado: 'Sobre noções de cidadania, sabe-se da importância da participação do cidadão na comunidade e na sociedade em geral, assinale a única opção correta:',
    alternativas: [
      { id: 'A', texto: 'O direito exclusivo em participar das atividades esportivas e culturais do Brasil.' },
      { id: 'B', texto: 'Ter a condição de ser membro de uma comunidade política, com direitos e deveres garantidos pela lei.' },
      { id: 'C', texto: 'Ser reconhecido como residente no Brasil, sem os devidos direitos políticos e trabalhistas.' },
      { id: 'D', texto: 'O Direito do indivíduo de ter posse de propriedade e bens materiais.' },
      { id: 'E', texto: 'A ação do voto somente em eleições regionais, não havendo possibilidade de participar em ações a nível de Brasil.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Cidadania é a condição de membro de uma comunidade política, com direitos e deveres.[reference:22]',
      incorretas: {
        A: 'Não é exclusivo.',
        C: 'Cidadania envolve direitos políticos.',
        D: 'Propriedade não define cidadania.',
        E: 'O voto é nacional.'
      },
      conceitoCobrado: 'Conceito de cidadania.',
      pegadinha: 'Reduzir cidadania a direitos civis.',
      comoApareceEmConcurso: 'Questão conceitual.'
    },
    tags: ['cidadania']
  }   

];   
