# Query2Doc

Agora que entendemos um pouco desse fluxo básico, quero trazer algumas técnicas utilizadas nesse processo. Essas técnicas normalmente possuem um contexto muito importante quando falamos de obtenção de dados externos, acesso a banco de dados e coisas desse tipo.

Vamos começar com a primeira técnica, chamada Query-to-Doc. A ideia desse Query-to-Doc é bastante interessante. Quando recebemos uma instrução do usuário, pedimos para que seja gerado algo como um documento que explique melhor o que aquela consulta realmente quer dizer.

Ou seja, será gerado um texto para expandir a query antes de executarmos a busca. É como se o usuário fizesse uma pergunta e, antes de utilizá-la diretamente, pedíssemos algo como: gere um pequeno artigo sobre esse tema considerando a pergunta do usuário. Esse é apenas um exemplo simples.

Quando você recebe esse texto gerado, percebe que passa a ter mais informações sobre aquele assunto. Isso faz com que, no momento em que realizamos a busca sobre aqueles termos, possamos receber dados muito mais precisos.

Digo isso porque o Query-to-Doc tem uma relação muito forte com um tipo de busca chamado busca léxica. Normalmente temos funções ou algoritmos como o BM25, ou mecanismos utilizados por ferramentas como Elastic e Apache Lucene.

Esses mecanismos funcionam, basicamente, realizando um ranqueamento de palavras-chave e termos que mais aparecem para encontrar documentos relacionados àquela consulta. Então, quando recebemos a instrução do usuário, podemos pedir a geração de alguns exemplos.

Também podemos trabalhar com Few-Shot Prompting, onde fornecemos exemplos de perguntas e demonstramos como gerar um mini-documento objetivo sobre aquele tema. Depois que temos a resposta do LLM, o que fazemos é concatenar esse conteúdo com a pergunta do usuário.

Podemos estruturar algo mais ou menos dessa forma: question, onde colocamos a pergunta do usuário. Em seguida, adicionamos informações adicionais geradas pelo modelo. Quando enviamos isso para realizar uma busca em um Elastic, por exemplo, o mecanismo não utiliza apenas a pergunta original.

Ele também passa a considerar todas as outras palavras presentes nesse mini-documento gerado, o que aumenta o contexto da busca e melhora as chances de encontrar resultados mais relevantes. Obviamente, é necessário ajustar bem o prompt utilizado para gerar esse documento.

Além disso, é importante que o texto gerado seja o mais neutro possível, pois ele não representa a resposta final. O objetivo é apenas trazer informações relevantes que facilitem o processo de busca.

Então, inicialmente, o Query-to-Doc tem a ideia de gerar textos neutros que ampliem o contexto da consulta para facilitar uma busca léxica. Não estamos falando ainda de busca semântica baseada em vetores.

Mais adiante falaremos sobre busca vetorial. Existem outras técnicas que são mais direcionadas a esse tipo de abordagem, embora tenham algumas semelhanças.

A grande ideia aqui é ter uma estratégia para fazer com que a pergunta do usuário ou as informações necessárias possuam mais contextualização durante o processo de busca. Esse é o ponto principal.

Outro ponto importante é entender que, nesse cenário, o modelo não é o responsável direto pela resposta final. Na realidade, o modelo é utilizado apenas para gerar esse mini-documento.

O resultado final desse processo será a recuperação de diversos trechos de documentos. Imagine que você está consultando um banco de dados e recebe vários trechos desses documentos, cada vez mais relevantes para aquela pergunta.

Quando chega o momento de gerar a resposta final, teremos primeiro a pergunta original do usuário. Em seguida, teremos algo chamado context.

Nesse contexto, incluímos os trechos de documentos que foram encontrados no banco de dados com base naquela busca enriquecida. A partir disso, podemos pedir para a IA responder à pergunta.

Ela irá analisar o contexto fornecido e gerar a resposta baseada nessas informações. Ou seja, tudo isso é uma forma de manipular e estruturar melhor o prompt.

Esse processo é muito parecido com técnicas de RAG, que funcionam exatamente dessa maneira. A grande diferença é que a principal função da IA aqui não é gerar a resposta final.

A principal função é gerar conteúdo adicional que melhore o processo de busca, permitindo recuperar documentos mais relevantes e, somente depois, produzir a resposta final. Então vamos continuar, porque ainda temos mais uma técnica para analisar.
