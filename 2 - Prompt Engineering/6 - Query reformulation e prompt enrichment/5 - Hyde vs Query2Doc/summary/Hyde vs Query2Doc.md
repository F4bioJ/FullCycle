# Hyde vs Query2Doc

Agora vamos falar sobre uma técnica que é bem similar ao Query-to-Doc, mas que possui algumas diferenças sutis que mudam completamente a categoria dessas abordagens. Essa técnica é chamada de HyDE, que significa Hypothetical Document Embedding. Somente pelo nome já é possível perceber que o tipo de busca é diferente.

A ideia é gerar um documento com a intenção de representar a resposta final, o que é diferente da geração de um documento que apenas explica a consulta. Vou mostrar a diferença de prompts para que isso fique mais claro. A proposta é criar um prompt bem elaborado para que, mesmo que a pergunta seja um pouco vaga, possamos gerar um documento bem estruturado.

Uma vez que você tem esse documento estruturado, ele pode ser utilizado para realizar a busca. O passo a passo é parecido com o que vimos anteriormente, mas com algumas diferenças importantes. Primeiro, recebemos a query do usuário. Em seguida, criamos um prompt para gerar um documento. Depois concatenamos esse documento com a query original e então geramos os embeddings.

Os embeddings, no final das contas, são a representação desse documento e da pergunta em formato vetorial. Depois disso realizamos a busca semântica. Ou seja, cruzamos o vetor gerado a partir do documento e da pergunta do usuário com os vetores armazenados no banco de dados.

Esse banco de dados pode ser, por exemplo, um Pinecone ou um PostgreSQL utilizando pgVector. O ponto principal é que realizamos a busca vetorial e recuperamos os trechos mais relevantes. Esses trechos são então utilizados para gerar a resposta final.

Se você perceber, o HyDE já nasce com a ideia de trabalhar com busca semântica utilizando embeddings. O Query-to-Doc surge antes disso, pois o principal foco dele está na busca léxica. Embora seja possível utilizar embeddings com Query-to-Doc, nesse caso você tende a se aproximar do estilo de abordagem utilizado no HyDE.

Para deixar isso mais claro, eu criei algumas comparações e exemplos de prompts para mostrar a diferença entre os dois. No Query-to-Doc pedimos um mini-artigo explicativo e neutro para enriquecer o vocabulário. Ou seja, o foco está em sinônimos, termos alternativos e variações de linguagem.

Essas informações ajudam no ranqueamento de palavras dentro de mecanismos de busca como Elastic utilizando algoritmos como BM25. Já no caso do HyDE, pedimos um documento que se pareça com uma resposta real para capturar melhor a semântica e o contexto relevante.

Uma coisa é ter mais palavras para melhorar a busca. Outra coisa é trazer mais contexto e compreender melhor as nuances da pergunta para realizar uma busca semântica no banco de dados.

O Query-to-Doc surgiu voltado para quem já utiliza BM25 ou Elastic e deseja enriquecer suas queries. Essa técnica não é algo totalmente novo, já existe há bastante tempo. O HyDE, por outro lado, surgiu para quem utiliza bancos vetoriais e precisa melhorar o Dense Retrieval em cenários de zero-shot.

Isso significa melhorar a capacidade de recuperar informações relevantes a partir da pergunta do usuário sem fornecer exemplos adicionais. Quando alguém faz uma pergunta em um sistema, normalmente não temos a oportunidade de fornecer exemplos ou trabalhar com few-shot.

Então a pergunta que recebemos precisa ser densa o suficiente para permitir a recuperação de informações relevantes em um cenário zero-shot. No final das contas, essa é a principal ideia.

Essas duas técnicas são similares, mas o estilo de texto que você pede para o LLM gerar é a grande diferença entre elas. O Query-to-Doc trabalha de uma forma mais neutra, pedindo descrições adicionais sobre o tema. O HyDE busca gerar uma resposta hipotética.

Vou mostrar um exemplo para deixar isso mais claro. Um prompt básico de Query-to-Doc poderia ser algo como: escreva um texto informativo e neutro, de 100 a 150 palavras, que explique o tópico abaixo. Inclua definições, termos técnicos, sinônimos e contexto relacionado, mas não forneça uma resposta direta caso seja uma pergunta.

Se você observar, nesse prompt de Query-to-Doc o objetivo é gerar conteúdo informativo. Não queremos a resposta final da pergunta, queremos apenas expandir o vocabulário relacionado ao tema.

Isso acontece porque, nesse cenário, o vocabulário é o principal fator que influencia a busca léxica em mecanismos baseados em ranking de palavras. Ou seja, o objetivo é enriquecer a consulta com mais termos relevantes.

Agora veja um exemplo de prompt para HyDE. Escreva um parágrafo conciso que responda de forma clara à pergunta abaixo. A resposta deve parecer um documento real, contendo datas, fatos ou descrições plausíveis, mesmo que hipotéticas. Não utilize linguagem especulativa e não use expressões como talvez ou possivelmente.

Se você observar, nesse caso já estamos pedindo diretamente uma resposta. Queremos gerar informações mais diretas, mesmo que não sejam necessariamente 100% corretas.

Isso acontece porque estamos criando um documento hipotético que será utilizado apenas para gerar embeddings e melhorar a busca semântica. Nesse contexto, sabemos que o documento pode conter informações que não são necessariamente corretas.

E nesse caso específico não estamos preocupados com a exatidão absoluta do conteúdo, porque ele não será apresentado diretamente ao usuário como resposta final. O objetivo principal é apenas gerar um documento suficientemente rico em contexto para melhorar o processo de recuperação de informações.

Para mim, uma resposta hipotética já é suficiente para ajudar na busca no banco de dados. Quando eu fizer a busca no banco de dados vetorial, baseado nessas palavras, nesse contexto, na semântica e nas nuances dessa resposta, eu vou recuperar as informações do banco de dados. E as informações do banco de dados, sim, contêm os dados corretos.

A resposta final será baseada nos trechos que vieram do banco de dados, e não nos trechos ou no documento hipotético gerado anteriormente. Uma coisa, e é muito importante que você entenda isso, é ter um documento hipotético, que podemos chamar aqui de documento “fake”, apenas para facilitar o entendimento.

Esse documento possui diversas palavras, contexto e nuances que, quando combinadas com a pergunta do usuário e transformadas em vetores, permitem realizar a consulta no banco de dados. Nesse banco de dados é onde está a fonte da verdade.

Mesmo sendo um documento hipotético, ele ajuda a recuperar trechos muito mais precisos da fonte de verdade presente no banco de dados. Isso acontece porque ele adiciona contexto que uma pergunta genérica normalmente não possui.

Por exemplo, se a pergunta for apenas “o que é Go?” ou “o que é a linguagem Go?”, a consulta possui pouco contexto. Agora, quando eu gero um documento sobre a linguagem Go, posso falar sobre documentação, versão, APIs, biblioteca padrão e diversos outros aspectos.

Mesmo que parte dessas informações não esteja 100% correta, o simples fato de termos esses termos e esse contexto permite que, ao consultar o banco de dados, ele traga documentos ou trechos de documentos muito mais próximos do que o usuário realmente procura.

Ou seja, ele recupera os chunks de documentos que possuem maior proximidade semântica com o contexto da pergunta. No resultado final, o que teremos no prompt é a pergunta original do usuário.

Em seguida teremos o contexto, que são os trechos recuperados do banco de dados. No momento de gerar a resposta final para o usuário, o documento hipotético não é utilizado diretamente.

Isso acontece porque ele contém dados hipotéticos e não necessariamente corretos. No entanto, esses dados hipotéticos ajudaram a enriquecer a busca no banco de dados para recuperar informações reais, corretas e mais precisas.

Portanto, esse documento funciona apenas como um elemento temporário que ajuda a melhorar a recuperação de dados. É importante perceber também a diferença em relação ao Query-to-Doc.

No caso do HyDE, estamos mais interessados em gerar algo que se pareça com uma resposta à pergunta do usuário, mesmo que ela não esteja totalmente correta. Ainda assim, as palavras, o contexto e as ideias presentes nesse texto ajudam a expandir a busca.

Isso aumenta as chances de recuperar documentos mais relevantes. Nesse cenário estamos falando muito mais de semântica, vetores e busca vetorial.

Já no Query-to-Doc estamos muito mais focados em palavras, vocabulário expandido e repetição de termos que ajudam no ranqueamento de documentos em mecanismos de busca léxica.

Por isso é importante entender que a ideia não é pegar informação incorreta e entregá-la ao usuário final. A ideia é usar uma informação hipotética para enriquecer a busca no banco de dados.

Assim, o banco de dados consegue trazer as informações corretas para o usuário, mas com uma probabilidade muito maior de recuperar trechos realmente relevantes. Essa é a ideia principal.

Espero que tenha ficado clara a diferença entre Query-to-Doc e HyDE.
