# Evaluators

## Quem executa a avaliação: o runner

Depois de ver os objetivos (o que avaliar) e as métricas e tipos de avaliação (como avaliar), falta definir **quem** executa a avaliação. Esse executor é o **runner**, também chamado de avaliador ou **evaluator**. A aula apresenta cinco tipos: Code Evaluator, LLM as Judge, Pairwise Evaluator, Summary Evaluator e Composite Evaluator.

## Code Evaluator

O Code Evaluator é um código, uma fórmula, que avalia a saída com base no que aconteceu na execução e devolve a resposta da avaliação. O professor destaca três pontos que ele costuma receber:

- **entrada:** o que se quer fazer, a pergunta avaliada;
- **saída:** o resultado gerado;
- **referência:** um campo normalmente **opcional**. Quando existe, permite comparar a saída com o esperado e ver se ela está dentro ou fora do que se espera.

O retorno costuma ser simples: um número, uma string ou um booleano (True/False).

## Exemplo: Exact Match

Pergunta: "Qual o banco de dados mais utilizado no mundo?". A referência, o ground truth, é PostgreSQL, e a saída do modelo também foi PostgreSQL. Como o dado bateu exatamente com a referência, o resultado pode vir como `key = exact match` e `score = 1`.

No Exact Match, o score é 0 ou 1, sem meio-termo. O professor avisa que, ao longo do curso, veremos avaliações que não são apenas binárias.

## LLM as Judge

No LLM as Judge, um LLM julga as saídas. O julgamento pode se basear em uma rubrica, em uma referência, no que o modelo aprendeu no treinamento ou em uma instrução específica. Quem monta a avaliação cria um prompt para o juiz e define nele os critérios, por exemplo relevância ou conciseness: é você quem escolhe o que ele vai julgar.

Exemplo: a pergunta é "como usar goroutines em Go?", e a saída fala de threads em Java, algo que não tem a ver com o pedido. Numa avaliação de relevância, o juiz devolve score 0,2 e um comentário dizendo que a resposta não fala de Go. Assim dá para ver o quão relevante a resposta é, e aqui a relevância é baixa. As várias métricas vistas antes vão aparecer em exemplos mais práticos adiante.

## Pairwise Evaluator

O professor pede para não confundir duas coisas:

- **pairwise evaluation** é o tipo de avaliação (a métrica) que compara duas saídas;
- **pairwise evaluator** é quem executa essa comparação para que se recebam aquelas métricas.

No pairwise evaluator há duas respostas para o **mesmo input**, e o objetivo é verificar qual delas é a melhor segundo um critério. Exemplo: "como trabalhar com timeout em uma HTTP request em Go?". A resposta A usa `context.WithTimeout`, e a resposta B usa `time.Sleep`. Avaliando o que está correto, o resultado é `pairwise preference = A`, porque a resposta A é a correta.

O professor reconhece que são muitas métricas e que isso pode dar um nó na cabeça, mas diz que vai trabalhar o tema de forma prática; aqui o importante é a visão geral.

## Summary Evaluator

O Summary Evaluator **agrega** métricas: gera, a partir dos scores de vários exemplos, métricas finais. Numa avaliação com um dataset de, por exemplo, dez registros, cada exemplo tem um resultado diferente. O summary pega o resultado de todos e compila, para que não seja preciso olhar informação por informação.

Exemplo: um dataset com dez exemplos de pergunta e resposta, com o pass rate (quantas respostas foram corretas), precision de 0,80, recall de 0,84 e F1 de 0,82. O professor pede para não se preocupar agora com o que são precision, recall e F1, que ele vai mostrar na prática: nesse momento, a ideia é a visão geral do objetivo, dos tipos de avaliação e de quem avalia.

## Composite Evaluator

O Composite Evaluator é um pouco mais complexo. Ele também faz um resumo, como o summary, mas com base em uma **fórmula que você define**, por exemplo uma média ponderada de diversos dados.

Exemplo: correctness 0,9, relevance 0,7 e conciseness 0,8, com pesos 0,5 para correctness, 0,3 para relevância e 0,2 para conciseness. O resultado é um tipo "qualidade ponderada", calculado pelos pesos; o professor mostra score de 0,83 (a conta com esses números dá 0,82). Ou seja, você cria sua própria fórmula sobre as métricas que já tem, para resumir o que considera importante.

A diferença entre os dois: o summary traz o resultado do que já existe; o composite pega o que já existe e cria mais uma camada de abstração em cima, normalmente com pesos, numa média ponderada.

## Por que avaliar é difícil e o foco do capítulo

O professor admite que é muita informação, e diz que é por isso que evaluation é algo extremamente difícil. Os exemplos do capítulo focam no prompt. Em outros momentos do curso, como arquitetura e RAG, aparecem avaliações específicas, como a de RAG e a de conversas multi-turn: uma conversa longa, com o chat e um humano interagindo o tempo inteiro, que não é apenas um simples dataset. Neste capítulo, o foco é olhar pelo prisma do prompt e entender as principais métricas.
