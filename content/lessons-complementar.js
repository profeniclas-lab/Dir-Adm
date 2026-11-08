/* ============================================================
   AULAS — Módulos de prioridade BAIXA (complementar)
   Administração + Direito Administrativo
   Entregues: DA-26, DA-27
   Fase 7 — fechamento das aulas (28/28)
   ============================================================ */

window.LESSONS_COMPLEMENTAR = {

  /* ============================================================
     DA-26 — Bens Públicos
  ============================================================ */
  'DA-26': {
    id: 'L-DA-26',
    moduloId: 'DA-26',
    objetivo: 'Compreender o conceito de bem público, sua classificação (bens de uso comum do povo, bens de uso especial e bens dominicais), as características do regime jurídico-administrativo (inalienabilidade, imprescritibilidade, impenhorabilidade e não oneração), as formas de utilização por particulares e as regras de alienação.',
    prerequisitos: ['DA-15', 'DA-16'],
    introducao: 'Os bens públicos são o patrimônio do Estado — e estão sujeitos a um regime jurídico próprio, diferente dos bens privados. Entender essa diferença é fundamental: ela explica por que um bem público não pode ser usucapido, por que não pode ser penhorado e por que sua venda exige procedimentos específicos.',
    explicacaoSimples: 'Bem público é todo bem que pertence a uma pessoa jurídica de direito público (União, Estados, DF, Municípios, autarquias e fundações públicas). Não é só prédio de repartição: uma praça, uma rua, um rio, uma escola, um terreno sem uso, tudo isso é bem público. E, por pertencer ao Estado, tem regras próprias — não se aplicam as mesmas regras dos bens particulares.',
    explicacaoTecnica: 'BENS PÚBLICOS são todos os bens que, por sua natureza ou destinação, pertencem às pessoas jurídicas de direito público (União, Estados, DF, Municípios, autarquias e fundações públicas) e estão afetados à prestação de serviço público ou ao uso da coletividade. CLASSIFICAÇÃO (art. 20 do Código Civil): BENS DE USO COMUM DO POVO (destinados ao uso da coletividade em geral, sem necessidade de inscrição — ex.: ruas, praças, rios, mares, estradas); BENS DE USO ESPECIAL (destinados a serviço ou estabelecimento público — ex.: escolas, hospitais, repartições, veículos oficiais); BENS DOMINICAIS (bens públicos por natureza, mas sem destinação pública específica — ex.: terrenos sem uso, prédios desativados, semoventes). CARACTERÍSTICAS: INALIENABILIDADE (em regra, os bens públicos não podem ser alienados — a alienação só é possível com autorização legislativa e, nos casos de bens dominicais, mediante licitação); IMPRESCRITIBILIDADE (não são adquiridos por usucapião); IMPENHORABILIDADE (não podem ser penhorados — a execução contra o Estado segue o regime de precatórios); NÃO ONERAÇÃO (não podem ser gravados com ônus real, salvo exceções legais). CLASSIFICAÇÃO QUANTO À DISPONIBILIDADE: BENS AFETADOS (destinados a uma finalidade pública — não podem ser alienados enquanto mantida a afetação) x BENS DESAFETADOS (sem destinação pública — podem ser alienados, cumpridos os requisitos legais). USO POR PARTICULARES: AUTORIZAÇÃO DE USO (ato unilateral, precário, para interesse do particular — ex.: uso de espaço público para evento); PERMISSÃO DE USO (ato unilateral, precário, para uso de bem público — ex.: quiosque em praça); CONCESSÃO DE USO (contrato administrativo, prazo determinado — ex.: exploração de restaurante em prédio público); CONCESSÃO DE DIREITO REAL DE USO (para fins de moradia, regularização fundiária). ALIENAÇÃO: exige AUTORIZAÇÃO LEGISLATIVA e, em regra, LICITAÇÃO (leilão, na modalidade prevista na Lei 14.133/2021), além de AVALIAÇÃO PRÉVIA. Bens de uso comum e de uso especial não podem ser alienados enquanto mantida a destinação; os dominicais podem ser alienados, cumpridos os requisitos.',
    exemplos: [
      'Bem de uso comum: praça pública, rua, estrada, rio.',
      'Bem de uso especial: escola, hospital, repartição, veículo oficial.',
      'Bem dominical: terreno sem uso, prédio desativado, semovente.',
      'Inalienabilidade: bem afetado a serviço público não pode ser vendido enquanto mantida a afetação.',
      'Imprescritibilidade: particular não pode adquirir praça pública por usucapião.',
      'Impenhorabilidade: bem público não pode ser penhorado; execução segue precatórios.',
      'Autorização de uso: prefeitura autoriza uso de praça para evento.',
      'Permissão de uso: quiosque em praça, por prazo indeterminado.',
      'Concessão de uso: restaurante em prédio público, mediante contrato e licitação.',
      'Alienação de bem dominical: terreno sem uso é alienado após autorização legislativa, avaliação e leilão.'
    ],
    comparacoes: [
      { termoA: 'Bens de uso comum do povo', termoB: 'Bens de uso especial', diferenca: 'USO COMUM: destinados à COLETIVIDADE em geral, sem necessidade de inscrição (ruas, praças, rios). USO ESPECIAL: destinados a SERVIÇO ou estabelecimento público (escolas, hospitais, repartições). Os primeiros servem à população; os segundos, à Administração. Ambos são bens AFETADOS — não podem ser alienados enquanto mantida a destinação.' },
      { termoA: 'Bens de uso especial', termoB: 'Bens dominicais', diferenca: 'USO ESPECIAL: têm destinação pública específica (serviço ou estabelecimento). DOMINICAIS: NÃO têm destinação pública específica — são bens que pertencem ao Estado, mas sem afetação. Por isso, os dominicais podem ser alienados, cumpridos os requisitos legais; os de uso especial, em regra, não (enquanto afetados).' },
      { termoA: 'Inalienabilidade', termoB: 'Imprescritibilidade', diferenca: 'INALIENABILIDADE: os bens públicos, em regra, não podem ser alienados (dependem de autorização legislativa, licitação e avaliação). IMPRESCRITIBILIDADE: os bens públicos não são adquiríveis por usucapião. A primeira limita a venda; a segunda impede a aquisição pelo decurso do tempo.' },
      { termoA: 'Autorização de uso', termoB: 'Concessão de uso', diferenca: 'AUTORIZAÇÃO: ato unilateral, precário, para interesse do PARTICULAR (ex.: evento em praça). CONCESSÃO: CONTRATO administrativo, prazo determinado, precedida de licitação, para uso de bem público em atividade de interesse coletivo (ex.: restaurante em prédio público). A primeira é ato; a segunda, contrato.' },
      { termoA: 'Permissão de uso', termoB: 'Concessão de uso', diferenca: 'PERMISSÃO: ATO unilateral, precário, prazo INDETERMINADO, para uso de bem público (ex.: quiosque em praça). CONCESSÃO: CONTRATO, prazo DETERMINADO, precedida de licitação. A permissão é mais precária (pode ser revogada a qualquer tempo); a concessão tem mais estabilidade.' }
    ],
    aplicacaoEmConcurso: 'Cobrança: classificação dos bens públicos (uso comum, uso especial, dominical); características (inalienabilidade, imprescritibilidade, impenhorabilidade, não oneração); formas de uso por particulares (autorização, permissão, concessão); requisitos de alienação. A banca ama: dizer que bem público pode ser adquirido por usucapião; confundir uso comum com uso especial; confundir autorização/permissão/concessão de uso.',
    pegadinhas: [
      'Dizer que bens públicos podem ser adquiridos por usucapião. NÃO — são IMPRESCRITÍVEIS.',
      'Dizer que bens públicos podem ser penhorados. NÃO — são IMPENHORÁVEIS (execução por precatórios).',
      'Achar que todo bem público é inalienável. Em regra, sim — mas os bens DOMINICAIS podem ser alienados, cumpridos os requisitos.',
      'Confundir bens de uso comum (praça, rua) com bens de uso especial (escola, hospital).',
      'Confundir AUTORIZAÇÃO (ato precário, interesse do particular) com CONCESSÃO (contrato, prazo determinado).',
      'Dizer que a alienação de bem público dispensa licitação. Em regra, EXIGE (leilão) — salvo hipóteses legais específicas.',
      'Achar que a afetação é permanente. Pode haver DESAFETAÇÃO — quando o bem perde a destinação pública.'
    ],
    errosComuns: [
      'Decorar a classificação sem exemplos.',
      'Confundir as formas de uso por particulares (autorização, permissão, concessão).',
      'Ignorar os requisitos de alienação.',
      'Não distinguir bens afetados de desafetados.'
    ],
    resumo: [
      'Bem público: pertence a pessoa jurídica de direito público, afetado a serviço ou uso coletivo.',
      'Classificação: uso comum (praça, rua), uso especial (escola, hospital), dominical (terreno sem uso).',
      'Características: inalienabilidade, imprescritibilidade, impenhorabilidade e não oneração.',
      'Formas de uso: autorização, permissão e concessão de uso.',
      'Alienação: exige autorização legislativa, avaliação e, em regra, licitação (leilão).',
      'Bens afetados x desafetados.',
      'Imprescritibilidade: não se adquire bem público por usucapião.'
    ],
    modoProfessor: {
      explicarMaisSimples: 'Bem público é o patrimônio do Estado — não só prédio de repartição, mas também praça, rua, rio, escola. Por pertencer à coletividade, tem regras próprias: não pode ser vendido sem autorização, não pode ser adquirido por usucapião, não pode ser penhorado.',
      outroExemplo: 'Uma praça pública é bem de USO COMUM. Uma escola é bem de USO ESPECIAL. Um terreno sem uso do município é bem DOMINICAL. Se o município quiser vender o terreno, precisa de autorização legislativa, avaliação e leilão. Se alguém ocupar a praça por 20 anos, não adquire a propriedade — bens públicos são IMPRESCRITÍVEIS.',
      compararConceitos: 'Uso comum x uso especial x dominical = coletividade x serviço público x sem destinação. Inalienabilidade x imprescritibilidade x impenhorabilidade = não vende x não usucape x não penhora. Autorização x permissão x concessão de uso = ato precário interesse particular x ato precário prazo indeterminado x contrato prazo determinado.',
      mostrarPegadinha: 'Cuidado: "Bens públicos podem ser adquiridos por usucapião". ERRADO. São IMPRESCRITÍVEIS — não se adquire bem público por decurso de prazo.',
      comoApareceEmConcurso: 'Questões pedem classificação (uso comum, uso especial, dominical), características (especialmente imprescritibilidade e impenhorabilidade) e formas de uso por particulares.',
      fazerPergunta: {
        pergunta: 'Um quiosque instalado em praça pública, por prazo indeterminado, sem contrato, configura autorização, permissão ou concessão de uso?',
        resposta: 'PERMISSÃO DE USO — ato unilateral, precário, prazo indeterminado, sem contrato. A CONCESSÃO exigiria contrato, prazo determinado e licitação. A AUTORIZAÇÃO seria para interesse do particular (ex.: evento), não para exploração comercial contínua.'
      }
    }
  },

  /* ============================================================
     DA-27 — Intervenção do Estado e restrições administrativas
  ============================================================ */
  'DA-27': {
    id: 'L-DA-27',
    moduloId: 'DA-27',
    objetivo: 'Compreender as formas de intervenção do Estado na propriedade privada — desapropriação, servidão administrativa, requisição, ocupação temporária, limitações administrativas e tombamento —, suas diferenças, requisitos e efeitos.',
    prerequisitos: ['DA-15', 'DA-26'],
    introducao: 'O direito de propriedade é garantido pela Constituição, mas não é absoluto: ele convive com a função social. Quando o interesse público exige, o Estado pode intervir na propriedade privada — de formas mais suaves (limitações, tombamento) até mais drásticas (desapropriação). Este módulo é o mapa dessas intervenções.',
    explicacaoSimples: 'Pense que o Estado pode "mexer" na sua propriedade de várias formas. Ele pode impor restrições ao uso (limitações administrativas — ex.: não construir acima de X metros). Pode proteger um prédio histórico (tombamento). Pode usar temporariamente um imóvel para uma obra pública (ocupação temporária). Pode usar um bem em situação de perigo (requisição). Pode passar uma rede de energia sobre o seu terreno (servidão administrativa). E pode até tomar a propriedade definitivamente, com indenização (desapropriação).',
    explicacaoTecnica: 'INTERVENÇÃO DO ESTADO NA PROPRIEDADE é o conjunto de mecanismos pelos quais o Estado restringe, ocupa ou transfere a propriedade privada, em razão do interesse público. FORMAS: (1) DESAPROPRIAÇÃO: transferência da propriedade ao Estado, mediante indenização PRÉVIA, JUSTA e EM DINHEIRO (regra — art. 5º, XXIV, CF). Pode ser por NECESSIDADE PÚBLICA, UTILIDADE PÚBLICA ou INTERESSE SOCIAL. Formas: ORDINÁRIA (indenização prévia e em dinheiro); EXTRAORDINÁRIA (ou SANCIONATÓRIA — para cultivo ilegal de plantas psicotrópicas, com indenização só das benfeitorias úteis — art. 243 da CF); INDIRETA (ou CONFISCO — por descumprimento da função social da propriedade urbana ou rural, com indenização em títulos da dívida). A desapropriação exige DECLARAÇÃO DE UTILIDADE PÚBLICA (por decreto) e, em regra, AÇÃO JUDICIAL, se não houver acordo. (2) SERVIDÃO ADMINISTRATIVA: ônus REAL sobre imóvel (de caráter permanente) para instalação de serviços públicos (ex.: passagem de rede elétrica). Não há transferência da propriedade; há restrição ao uso. (3) REQUISIÇÃO ADMINISTRATIVA: uso TEMPORÁRIO de bem particular em caso de IMINENTE PERIGO PÚBLICO, com indenização ULTERIOR se houver dano (art. 5º, XXV, CF). Não há transferência da propriedade. (4) OCUPAÇÃO TEMPORÁRIA: uso TEMPORÁRIO de imóvel para obras ou serviços públicos (ex.: uso de terreno vizinho como canteiro de obras). Em regra, com indenização. (5) LIMITAÇÕES ADMINISTRATIVAS: restrições GERAIS e ABSTRATAS ao uso da propriedade, sem indenização (ex.: gabarito, zoneamento, distância de construções). Não atingem o direito de propriedade em si; apenas seu exercício. (6) TOMBAMENTO: proteção de bem de valor histórico, cultural, arquitetônico, paisagístico, mediante restrição total ou parcial ao uso. Pode ser PROVISÓRIO ou DEFINITIVO, VOLUNTÁRIO ou COMPULSÓRIO. Não gera, em regra, indenização (salvo se esvaziar o valor econômico do bem).',
    exemplos: [
      'Desapropriação: imóvel adquirido para construção de hospital público.',
      'Desapropriação ordinária: indenização prévia, justa e em dinheiro.',
      'Desapropriação extraordinária (sancionatória): cultivo ilegal de plantas psicotrópicas — art. 243 da CF.',
      'Desapropriação indireta (confisco): descumprimento da função social — indenização em títulos.',
      'Servidão administrativa: passagem de rede de energia sobre terreno particular.',
      'Requisição: uso de veículo particular em caso de calamidade pública (iminente perigo).',
      'Ocupação temporária: uso de imóvel vizinho como canteiro de obras.',
      'Limitação administrativa: restrição de altura de construções em determinado bairro.',
      'Tombamento: preservação de casarão histórico.',
      'Tombamento provisório: proteção imediata até decisão final.',
      'Tombamento compulsório: imposto pelo Poder Público, contra a vontade do proprietário.'
    ],
    comparacoes: [
      { termoA: 'Desapropriação', termoB: 'Servidão administrativa', diferenca: 'DESAPROPRIAÇÃO: TRANSFERE a propriedade ao Estado, com indenização prévia, justa e em dinheiro. SERVIDÃO: NÃO transfere a propriedade — apenas impõe um ônus real de caráter permanente ao imóvel (ex.: passagem de rede). A primeira tira o bem; a segunda restringe seu uso, com indenização (em regra).' },
      { termoA: 'Desapropriação', termoB: 'Requisição administrativa', diferenca: 'DESAPROPRIAÇÃO: transferência DEFINITIVA da propriedade, com indenização prévia. REQUISIÇÃO: uso TEMPORÁRIO de bem particular em caso de IMINENTE PERIGO PÚBLICO, com indenização ULTERIOR se houver dano. A primeira é definitiva; a segunda é temporária.' },
      { termoA: 'Requisição', termoB: 'Ocupação temporária', diferenca: 'REQUISIÇÃO: uso de bem particular em caso de IMINENTE PERIGO PÚBLICO (ex.: calamidade). OCUPAÇÃO TEMPORÁRIA: uso de imóvel para obras ou serviços públicos (ex.: canteiro de obras). Ambas são temporárias e geram indenização — a diferença está no fundamento (perigo público x execução de obra).' },
      { termoA: 'Limitações administrativas', termoB: 'Tombamento', diferenca: 'LIMITAÇÕES: restrições GERAIS e ABSTRATAS ao uso da propriedade (zoneamento, gabarito), sem indenização, porque atingem toda a coletividade de forma impessoal. TOMBAMENTO: restrição INDIVIDUAL a bem específico de valor cultural (casarão histórico), podendo ser total ou parcial. As limitações são gerais; o tombamento é individual.' },
      { termoA: 'Limitações administrativas', termoB: 'Desapropriação', diferenca: 'LIMITAÇÕES: restringem o USO da propriedade, sem transferi-la — não geram indenização (salvo se esvaziarem o valor econômico). DESAPROPRIAÇÃO: TRANSFEREM a propriedade ao Estado, com indenização prévia, justa e em dinheiro. A primeira restringe; a segunda tira.' },
      { termoA: 'Tombamento', termoB: 'Desapropriação', diferenca: 'TOMBAMENTO: NÃO transfere a propriedade; apenas impõe restrições à conservação e ao uso, para preservar o bem. DESAPROPRIAÇÃO: transfere a propriedade ao Estado. O tombamento preserva; a desapropriação retira.' }
    ],
    aplicacaoEmConcurso: 'Cobrança: diferença entre as formas de intervenção; desapropriação ordinária, extraordinária e indireta; servidão x requisição x ocupação temporária; limitações administrativas x tombamento. A banca ama: confundir desapropriação com servidão; dizer que limitações geram indenização (não geram, em regra); dizer que tombamento transfere propriedade (não transfere); confundir requisição com ocupação temporária.',
    pegadinhas: [
      'Dizer que servidão administrativa transfere a propriedade. NÃO transfere — apenas impõe ônus.',
      'Dizer que limitações administrativas geram indenização, em regra. NÃO geram (salvo se esvaziarem o valor econômico do bem).',
      'Dizer que o tombamento transfere a propriedade. NÃO transfere — apenas preserva.',
      'Confundir requisição (perigo público) com ocupação temporária (obras e serviços).',
      'Dizer que a desapropriação extraordinária (art. 243) é a mesma que a indireta (confisco por descumprimento da função social). São hipóteses distintas.',
      'Achar que a desapropriação pode ser feita sem indenização prévia. A regra é indenização PRÉVIA, JUSTA e EM DINHEIRO (art. 5º, XXIV).',
      'Confundir tombamento provisório com definitivo. O provisório é medida imediata, com prazo, até a decisão final.'
    ],
    errosComuns: [
      'Decorar as formas sem exemplos.',
      'Confundir servidão com desapropriação.',
      'Confundir limitações com tombamento.',
      'Confundir requisição com ocupação temporária.',
      'Não saber diferenciar desapropriação ordinária, extraordinária e indireta.'
    ],
    resumo: [
      'Intervenção do Estado na propriedade: restrição, ocupação ou transferência.',
      'Desapropriação: transfere a propriedade — indenização prévia, justa e em dinheiro (regra).',
      'Formas: ordinária, extraordinária (art. 243) e indireta/confisco (função social).',
      'Servidão administrativa: ônus real, sem transferência.',
      'Requisição: uso temporário em iminente perigo público — indenização ulterior.',
      'Ocupação temporária: uso temporário para obras/serviços.',
      'Limitações administrativas: restrições gerais e abstratas, em regra sem indenização.',
      'Tombamento: preservação do bem — não transfere propriedade.'
    ],
    modoProfessor: {
      explicarMaisSimples: 'O Estado pode "mexer" na sua propriedade de várias formas. Pode restringir o uso (limitações), proteger um prédio histórico (tombamento), usar temporariamente um imóvel (ocupação), usar um bem em perigo (requisição), impor um ônus (servidão) ou até tirar a propriedade, com indenização (desapropriação). Cada uma tem sua lógica.',
      outroExemplo: 'Se a prefeitura precisa construir um hospital, pode desapropriar o imóvel (transferência, com indenização prévia). Se precisa passar uma rede elétrica sobre o terreno, pode instituir servidão administrativa (ônus, sem transferência). Se precisa usar o terreno vizinho como canteiro de obras, pode usar ocupação temporária. Se um casarão histórico precisa ser preservado, pode tombá-lo. Se, em uma enchente, precisa usar um barco particular, pode requisitar.',
      compararConceitos: 'Desapropriação x servidão = transfere x onera. Requisição x ocupação = perigo público x obras/serviços. Limitações x tombamento = gerais x individuais. Tombamento x desapropriação = preserva x transfere.',
      mostrarPegadinha: 'Cuidado: "Servidão administrativa transfere a propriedade ao Estado". ERRADO. A servidão apenas impõe um ônus real (ex.: passagem de rede), sem transferir a propriedade.',
      comoApareceEmConcurso: 'Questões pedem a classificação de uma intervenção (qual forma), as diferenças entre elas e a necessidade (ou não) de indenização.',
      fazerPergunta: {
        pergunta: 'Em uma calamidade pública, o Estado usa um caminhão particular para transportar mantimentos. Que forma de intervenção é essa e há indenização?',
        resposta: 'REQUISIÇÃO ADMINISTRATIVA (art. 5º, XXV, CF) — uso temporário de bem particular em caso de IMINENTE PERIGO PÚBLICO, com indenização ULTERIOR se houver dano. Não há transferência de propriedade.'
      }
    }
  }

};
