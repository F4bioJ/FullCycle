# Hyde vs Query2Doc

## HyDE: Hypothetical Document Embedding

O **HyDE** (*Hypothetical Document Embedding*) é parecido com o Query2Doc, mas tem diferenças sutis que mudam a categoria da técnica. O próprio nome já indica que o tipo de busca é outro: entram em cena os **embeddings**. A ideia é gerar um documento que **represente a resposta final**, e não um documento que apenas explique a consulta. Com um prompt bem elaborado, mesmo uma pergunta um pouco vaga pode gerar um documento bem estruturado, que depois é usado na busca.

## O fluxo do HyDE

No fluxo apresentado pelo professor, o passo a passo lembra o do Query2Doc, com diferenças importantes:

1. Recebe a query do usuário.
2. Um prompt gera o documento hipotético.
3. O documento é **concatenado à query original**.
4. São gerados os **embeddings** dessa combinação, ou seja, sua representação vetorial.
5. Faz-se a **busca semântica**: o vetor é cruzado com os vetores guardados num banco vetorial, como **Pinecone** ou **PostgreSQL com pgVector**.
6. Os trechos mais relevantes recuperados são usados para gerar a resposta final.

## Léxica versus semântica

O HyDE já nasce pensado para a **busca semântica com embeddings**. O Query2Doc veio antes e tem foco na **busca léxica**. Dá para usar embeddings com o Query2Doc, mas aí a abordagem tende a se aproximar do estilo do HyDE.

No Query2Doc, pede-se um **mini-artigo explicativo e neutro** para enriquecer o vocabulário, com sinônimos, termos alternativos e variações de linguagem. Isso ajuda o ranqueamento de palavras em mecanismos como o Elastic com BM25. No HyDE, pede-se um documento que **se pareça com uma resposta real**, para capturar a semântica e o contexto. Uma coisa é ter mais palavras para a busca; outra é trazer mais contexto e entender as nuances da pergunta para uma busca semântica.

## Para quem cada técnica surgiu

O **Query2Doc** surgiu para quem já usa BM25 ou Elastic e quer enriquecer as queries; não é algo novo. O **HyDE** surgiu para quem usa bancos vetoriais e precisa melhorar o **Dense Retrieval** em cenários **zero-shot**: recuperar informação relevante a partir da pergunta do usuário, **sem exemplos adicionais**. Num sistema real, em geral não há como fornecer exemplos ou usar few-shot, então a consulta precisa ser densa o bastante para a recuperação funcionar assim.

## A grande diferença: o estilo do texto gerado

As técnicas são parecidas; o que muda é **o estilo de texto pedido ao LLM**. O Query2Doc pede descrições neutras sobre o tema; o HyDE pede uma **resposta hipotética**.

- **Prompt de Query2Doc (exemplo):** escreva um texto informativo e neutro, de 100 a 150 palavras, que explique o tópico; inclua definições, termos técnicos, sinônimos e contexto relacionado, mas **não dê uma resposta direta** se for uma pergunta. O objetivo é expandir o vocabulário, que é o principal fator da busca léxica.
- **Prompt de HyDE (exemplo):** escreva um parágrafo conciso que **responda claramente** à pergunta; ele deve parecer um documento real, com datas, fatos ou descrições plausíveis, mesmo que hipotéticas; **sem linguagem especulativa**, sem "talvez" ou "possivelmente". Aqui se pede diretamente uma resposta, mesmo que não seja 100% correta.

## Por que um documento "fake" funciona

O documento hipotético pode conter informações erradas, e tudo bem: ele serve **apenas para gerar embeddings** e melhorar a busca, e **não é mostrado ao usuário**. Suas palavras, contexto e nuances, combinados com a pergunta e transformados em vetores, permitem consultar o banco, que é a **fonte da verdade**. O documento acrescenta o contexto que uma pergunta genérica não tem.

Exemplo: a pergunta "o que é a linguagem Go?" tem pouco contexto. Um documento gerado sobre Go pode falar de documentação, versões, APIs e biblioteca padrão. Mesmo que parte disso não esteja correta, esses termos e esse contexto fazem a busca trazer os chunks com **maior proximidade semântica** do que o usuário procura.

## A resposta final

No prompt final ficam a **pergunta original** do usuário e o **contexto** com os trechos recuperados do banco. O documento hipotético **não é usado** na resposta, porque contém dados não necessariamente corretos. Ele é um elemento temporário, que ajudou a recuperar informações reais e mais precisas.

## Resumo da comparação

- **HyDE:** gera algo parecido com uma resposta, mesmo que não totalmente correta; foco em semântica, vetores e busca vetorial.
- **Query2Doc:** foco em palavras, vocabulário expandido e repetição de termos para o ranqueamento da busca léxica.

Em nenhum dos dois casos a ideia é entregar informação incorreta ao usuário. A informação hipotética só enriquece a busca, para o banco devolver as informações corretas com mais chance de trazer trechos relevantes.
