# ITER-RETGEN

Antes de partirmos para a prática e eu mostrar alguns exemplos interessantes, quero falar sobre uma técnica chamada Iter-RetGen. Basicamente, esta é uma técnica extremamente interessante que você pode usar para expandir o contexto da pergunta do usuário. É uma técnica bem utilizada, e vou mostrar isso na prática. Acredito que vale a pena entender este tipo de exemplo.

A ideia é ter um loop iterativo que alterna entre geração e recuperação. Ou seja, eu gero um rascunho e, depois, uso esse rascunho para buscar, de forma mais específica, as informações que vão me ajudar.

O passo a passo funciona assim:

Primeiramente, eu gero um rascunho com Missing Markers. Missing Markers são como lacunas dentro do texto. Vamos imaginar que eu vou fazer uma pergunta sobre a linguagem Python. Eu posso colocar: "A última versão da linguagem Python é [MISSING]". Em vez de colocar a versão, coloco um marcador indicando que está faltando. Depois, posso colocar: "Python foi criado por [MISSING]".

Quando eu gero esse documento com partes faltando, posso avançar para a próxima etapa: gerar perguntas baseadas no contexto do que está faltando. A partir dessas perguntas, posso buscar respostas e, com essas respostas, substituir os marcadores pelas informações corretas ou expandidas.

Sei que pode parecer confuso, mas vai fazer sentido. Basicamente, eu gero um rascunho com marcadores indicando informações faltantes. Depois, pego essas informações faltantes e as transformo em perguntas para realizar uma busca. Com a lista de perguntas, faço a pesquisa e obtenho as respostas. Com essas respostas, reescrevo o rascunho inicial e verifico se ainda há algo pendente. Se houver, repito o processo: faço novas perguntas, busco respostas e, ao obtê-las, gero a versão final, substituindo as partes importantes que precisavam ser expandidas.

A ideia principal é criar um rascunho com pedaços de informação faltando, gerar perguntas para obter essas informações e, com as respostas, substituir as lacunas. Isso é muito interessante porque, às vezes, temos uma pergunta extremamente vaga e queremos uma resposta extremamente completa, o que é difícil para a IA fazer. Com este loop, a quantidade de informação relevante que você pode trazer é impressionante.

Separo isso em quatro categorias: Draft, Query, Fill e Expansion. O processo funciona assim:

- Tenho o input do usuário, que pode ser uma pergunta aberta ou ruim.
- Pego essa pergunta e gero um draft de resposta, mas neste draft o prompt será provocativo, instruindo a verificar especialidades, trazer informações específicas, e onde não houver certeza, substituir por [MISSING].
- Em seguida, tudo que está marcado como [MISSING] é usado para gerar perguntas.
- Com as perguntas, faço uma busca, obtenho as respostas e gero a resposta completa para o usuário final.
- Se houver pouca interação, ou seja, se apenas algumas perguntas foram geradas, posso fazer uma expansão adicional, criando mais Missing Markers, gerando mais perguntas, obtendo mais informações e produzindo uma resposta final ainda mais completa.

Essa é a ideia principal ao trabalhar com Iter-RetGen. Nos próximos vídeos, veremos exemplos práticos de código para entender como criar esse tipo de comportamento na IA.
