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
    objetivo: 'Compreender o conceito de bem público, sua classificação (art. 99 do CC: bens de uso comum do povo, bens de uso especial e bens dominicais), as características do regime jurídico-administrativo (inalienabilidade, imprescritibilidade, impenhorabilidade e não oneração — arts. 100 a 102 do CC), as formas de utilização por particulares e as regras de alienação.',
    prerequisitos: ['DA-15', 'DA-16'],
    introducao: 'Os bens públicos são o patrimônio do Estado — e estão sujeitos a um regime jurídico próprio. A base legal está nos **arts. 99 a 102 do Código Civil**. Entender essa disciplina é fundamental: ela explica por que um bem público não pode ser usucapido, por que não pode ser penhorado e por que sua venda exige procedimentos específicos. O art. 99 classifica; os arts. 100 a 102 estabelecem o regime.',
    explicacaoSimples: 'Bem público é todo bem que pertence a uma pessoa jurídica de direito público (União, Estados, DF, Municípios, autarquias e fundações públicas). Não é só prédio de repartição: uma praça, uma rua, um rio, uma escola, um terreno sem uso — tudo isso é bem público. O Código Civil, no **art. 99**, classifica em três espécies: uso comum do povo, uso especial e dominicais. E nos **arts. 100 a 102** estabelece as regras: os afetados não podem ser alienados; os dominicais podem; e nenhum deles pode ser adquirido por usucapião.',
    explicacaoTecnica: 'BENS PÚBLICOS são todos os bens que, por sua natureza ou destinação, pertencem às pessoas jurídicas de direito público (União, Estados, DF, Municípios, autarquias e fundações públicas). CLASSIFICAÇÃO (**art. 99 do Código Civil**): BENS DE USO COMUM DO POVO (rios, mares, estradas, ruas, praças — destinados ao uso da coletividade em geral); BENS DE USO ESPECIAL (edifícios ou terrenos destinados a serviço ou estabelecimento da administração — escolas, hospitais, repartições — inclusive os de autarquias); BENS DOMINICAIS (patrimônio das pessoas jurídicas de direito público, sem destinação pública específica — terrenos sem uso, prédios desativados). REGIME JURÍDICO: **Art. 100**: os bens de uso comum e de uso especial são **inalienáveis enquanto conservarem essa qualificação**. **Art. 101**: os bens dominicais **podem ser alienados**, observadas as exigências da lei (autorização legislativa, avaliação, licitação — leilão, na forma da Lei 14.133/2021). **Art. 102**: os bens públicos **não são adquiridos por usucapião** (imprescritibilidade). CARACTERÍSTICAS: INALIENABILIDADE (em regra, para os afetados); IMPRESCRITIBILIDADE (art. 102; Súmula 340 do STF); IMPENHORABILIDADE (execução por precatórios — art. 100, CF); NÃO ONERAÇÃO (em regra). USO POR PARTICULARES: AUTORIZAÇÃO DE USO (ato precário, interesse do particular); PERMISSÃO DE USO (ato precário, prazo indeterminado); CONCESSÃO DE USO (contrato, prazo determinado, licitação). AFETAÇÃO x DESAFETAÇÃO: com ou sem destinação pública. Bens desafetados (dominicais) podem ser alienados, cumpridos os requisitos.',
    exemplos: [
      'Art. 99, I: praça, rua, rio — uso comum do povo.',
      'Art. 99, II: escola, hospital, repartição — uso especial.',
      'Art. 99, III: terreno sem uso, prédio desativado — dominical.',
      'Art. 100: bem afetado a serviço público não pode ser alienado enquanto mantida a afetação.',
      'Art. 101: bem dominical pode ser alienado, com autorização legislativa, avaliação e leilão.',
      'Art. 102: bem público não pode ser adquirido por usucapião (imprescritibilidade).',
      'Impenhorabilidade: bem público não pode ser penhorado — execução por precatórios.',
      'Autorização de uso: evento em praça pública, por prazo curto.',
      'Permissão de uso: quiosque em praça, por prazo indeterminado.',
      'Concessão de uso: restaurante em prédio público, mediante contrato e licitação.'
    ],
    comparacoes: [
      { termoA: 'Bens de uso comum do povo', termoB: 'Bens de uso especial', diferenca: 'USO COMUM: destinados à COLETIVIDADE em geral (rios, mares, estradas, ruas, praças) — art. 99, I. USO ESPECIAL: destinados a SERVIÇO ou estabelecimento público (escolas, hospitais, repartições) — art. 99, II. Ambos são bens AFETADOS e, enquanto mantida a qualificação, **inalienáveis** (art. 100).' },
      { termoA: 'Bens de uso especial', termoB: 'Bens dominicais', diferenca: 'USO ESPECIAL: têm destinação pública específica (art. 99, II). DOMINICAIS: NÃO têm destinação pública específica (art. 99, III) — são bens que pertencem ao Estado, mas sem afetação. Por isso, os dominicais **podem ser alienados** (art. 101); os de uso especial, em regra, não (art. 100).' },
      { termoA: 'Art. 100', termoB: 'Art. 101', diferenca: '**Art. 100**: bens de uso comum e de uso especial são **inalienáveis enquanto conservarem a qualificação**. **Art. 101**: bens dominicais **podem ser alienados**, observadas as exigências da lei. Um trata da inalienabilidade dos afetados; o outro, da alienabilidade dos dominicais.' },
      { termoA: 'Inalienabilidade', termoB: 'Imprescritibilidade', diferenca: 'INALIENABILIDADE (art. 100): os bens afetados não podem ser alienados enquanto mantida a afetação. IMPRESCRITIBILIDADE (art. 102): os bens públicos não são adquiridos por **usucapião**. A primeira limita a venda; a segunda impede a aquisição pelo decurso do tempo.' },
      { termoA: 'Autorização de uso', termoB: 'Concessão de uso', diferenca: 'AUTORIZAÇÃO: ato unilateral, precário, para interesse do PARTICULAR (evento em praça). CONCESSÃO: CONTRATO administrativo, prazo determinado, precedido de licitação (restaurante em prédio público). A primeira é ato; a segunda, contrato.' }
    ],
    aplicacaoEmConcurso: 'Cobrança: classificação do **art. 99** (uso comum, uso especial, dominical); características (**arts. 100 a 102** — inalienabilidade, alienabilidade dos dominicais, imprescritibilidade); formas de uso por particulares (autorização, permissão, concessão); requisitos de alienação. A banca ama: **atribuir a classificação ao art. 20** (ERRADO — é o art. 99); dizer que bem público pode ser adquirido por usucapião (não pode — art. 102); confundir uso comum com uso especial; confundir autorização/permissão/concessão de uso.',
    pegadinhas: [
      '**Atribuir a classificação dos bens públicos ao art. 20 do Código Civil**. ERRADO. É o **art. 99**.',
      'Dizer que bens públicos podem ser adquiridos por usucapião. NÃO — **art. 102** (imprescritibilidade).',
      'Dizer que bens públicos podem ser penhorados. NÃO — são impenhoráveis (execução por precatórios).',
      'Achar que todo bem público é inalienável. Em regra, os afetados são (art. 100); os **dominicais podem ser alienados** (art. 101).',
      'Confundir bens de uso comum (praça, rua) com bens de uso especial (escola, hospital).',
      'Confundir autorização (ato precário, interesse do particular) com concessão (contrato, prazo determinado).',
      'Dizer que a alienação de bem público dispensa licitação. Em regra, exige (leilão).',
      'Achar que a afetação é permanente. Pode haver DESAFETAÇÃO.'
    ],
    errosComuns: [
      '**Citar o art. 20 em vez do art. 99**.',
      'Decorar a classificação sem exemplos.',
      'Confundir as formas de uso por particulares.',
      'Ignorar os requisitos de alienação.',
      'Não distinguir bens afetados de desafetados.'
    ],
    resumo: [
      'Bem público: pertence a pessoa jurídica de direito público, afetado a serviço ou uso coletivo.',
      '**Classificação: art. 99 do CC** — uso comum (praça, rua), uso especial (escola, hospital), dominical (terreno sem uso).',
      '**Art. 100**: bens de uso comum e especial são inalienáveis enquanto mantida a qualificação.',
      '**Art. 101**: bens dominicais podem ser alienados, cumpridos os requisitos.',
      '**Art. 102**: bens públicos não são adquiridos por usucapião.',
      'Características: inalienabilidade (afetados), imprescritibilidade, impenhorabilidade, não oneração.',
      'Formas de uso: autorização, permissão e concessão de uso.',
      'Bens afetados x desafetados.'
    ],
    modoProfessor: {
      explicarMaisSimples: 'Bem público é o patrimônio do Estado. O **art. 99 do Código Civil** classifica em três tipos: uso comum (praça, rua), uso especial (escola, hospital) e dominical (terreno sem uso). O **art. 100** diz que os afetados não podem ser vendidos; o **art. 101** diz que os dominicais podem; o **art. 102** diz que nenhum pode ser adquirido por usucapião.',
      outroExemplo: 'Uma praça é bem de uso comum (art. 99, I). Uma escola é de uso especial (art. 99, II). Um terreno sem uso é dominical (art. 99, III). Se o município quiser vender o terreno, pode (art. 101), com autorização legislativa, avaliação e leilão. Se alguém ocupar a praça por 20 anos, não adquire — art. 102 (imprescritibilidade).',
      compararConceitos: 'Uso comum x uso especial x dominical. **Art. 100 (inalienabilidade dos afetados) x art. 101 (alienabilidade dos dominicais) x art. 102 (imprescritibilidade)**. Autorização x permissão x concessão de uso.',
      mostrarPegadinha: 'Cuidado: "A classificação dos bens públicos está no art. 20 do CC". ERRADO. É o **art. 99**. E "bens públicos podem ser usucapidos" também está ERRADO — art. 102.',
      comoApareceEmConcurso: 'Classificação (art. 99), características (arts. 100 a 102), formas de uso por particulares.',
      fazerPergunta: {
        pergunta: 'Qual é o dispositivo do Código Civil que classifica os bens públicos?',
        resposta: 'O **art. 99** do Código Civil. Ele os classifica em: I — uso comum do povo; II — uso especial; III — dominicais. Os **arts. 100 a 102** tratam, respectivamente, da inalienabilidade dos afetados, da alienabilidade dos dominicais e da imprescritibilidade.'
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
