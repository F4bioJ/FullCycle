# Gabarito — Evaluators

## 1. Code Evaluator para JSON sem ground truth
**Correta: A**
**Por quê:** O professor diz que o Code Evaluator trabalha com entrada, saída e um campo de referência que normalmente é opcional: ela permite comparar com o esperado quando existe, mas não é obrigatória. Checar se o output segue o schema é uma regra explícita, e a aula anterior colocou a validação de JSON e de schema entre as métricas determinísticas, que passam ou falham segundo regras de estrutura. O código devolve, por exemplo, True ou False.
- **B:** A referência é opcional. Sem ela não há comparação com ground truth, mas o código ainda pode aplicar uma regra à saída; não é preciso recorrer a um juiz.
- **C:** Comparar duas saídas do mesmo input é o trabalho do Pairwise Evaluator, não uma condição para usar o Code Evaluator.
- **D:** A validação de JSON/schema é determinística (aula anterior): falta de ground truth não a torna subjetiva.
**Conceito:** Code Evaluator — entrada, saída e referência opcional

## 2. Exact Match com "Postgres" contra "PostgreSQL"
**Correta: D**
**Por quê:** O Exact Match verifica se a saída bate exatamente com a referência; o professor diz que o score é 0 ou 1, sem meio do caminho. "Postgres" não é idêntico a "PostgreSQL", então o score é 0. A aula anterior mostrou que métricas como string distance (proximidade textual) ou embedding similarity (proximidade de sentido) relaxam essa rigidez, e o professor avisa que veremos avaliações que não são só binárias.
- **A:** Medir o quanto a string se aproxima da referência é o que faz a string distance, não o Exact Match.
- **B:** Comparar o sentido é o papel da embedding similarity; o Exact Match compara a forma literal.
- **C:** O score 0 está certo, mas a leitura não: o Exact Match só verifica se a forma literal coincide, não se o fato está certo. "Postgres" é o nome curto do mesmo PostgreSQL; o 0 mostra que as strings diferem, não que o modelo errou o banco. É por isso que a aula anterior apresenta métricas que relaxam essa rigidez.
**Conceito:** Exact Match — score binário, sem meio-termo

## 3. Relevância de respostas abertas sem resposta de referência
**Correta: B**
**Por quê:** No LLM as Judge, cria-se um prompt para o juiz com o critério escolhido (relevância, conciseness), e ele pode julgar com base em rubrica, referência, no que aprendeu no treinamento ou numa instrução, então não depende de uma resposta gravada. No exemplo da aula, ele devolve score 0,2 e um comentário quando a pergunta é sobre goroutines em Go e a saída fala de threads em Java.
- **A:** Uma regra de coincidência de palavras não diz se a resposta atende ao pedido: uma resposta pode repetir os termos da pergunta e não resolver nada. Relevância é critério subjetivo, julgado por rubrica.
- **C:** O Summary Evaluator agrega resultados que já foram avaliados; ele não julga a relevância de cada resposta, e pass rate não é medida de relevância.
- **D:** O Pairwise Evaluator compara duas saídas para o mesmo input, não uma resposta com a pergunta.
**Conceito:** LLM as Judge — critério definido no prompt, nota e comentário

## 4. Trocar Exact Match por LLM as Judge
**Correta: C**
**Por quê:** O Exact Match só dá 0 ou 1; o juiz pode dar notas intermediárias (como o 0,2 do exemplo de relevância) e aceitar respostas certas com outras palavras. Em troca, como a aula anterior mostrou, a avaliação passa a ser subjetiva: a consistência depende da clareza dos critérios da rubrica e da estabilidade do evaluator escolhido.
- **A:** Inverte as coisas: o determinismo é do Code Evaluator, e o juiz é que permite notas intermediárias.
- **B:** A aula não diz que o juiz custa menos; e quem oferece nuance é o juiz, não o Exact Match, que é binário.
- **D:** O professor diz que o juiz pode julgar com base em uma referência, então ele pode receber ground truth.
**Conceito:** Code Evaluator x LLM as Judge — nuance x consistência

## 5. Pairwise Evaluator no exemplo do timeout em Go
**Correta: A**
**Por quê:** O Pairwise Evaluator recebe duas respostas para o mesmo input e verifica, segundo um critério, qual é a melhor. No exemplo da aula, avaliando o que está correto, o resultado é `pairwise preference = A`, a resposta com `context.WithTimeout` (aqui, a do v1).
- **B:** Dar uma nota a cada saída separada é o que fazem o Code Evaluator e o LLM as Judge; o Summary Evaluator agrega resultados de vários exemplos, não escolhe entre duas saídas.
- **C:** Média ponderada com pesos é o que faz o Composite Evaluator, sobre métricas, não sobre duas respostas.
- **D:** Usar uma saída como referência do Exact Match não é pairwise: o pairwise devolve uma preferência, não um 0 ou 1 de igualdade.
**Conceito:** Pairwise Evaluator — duas saídas do mesmo input, uma preferência

## 6. O que o Summary Evaluator resume
**Correta: D**
**Por quê:** O "summary" é um resumo dos resultados da avaliação, não dos textos. Num dataset de dez exemplos, cada um tem seu resultado, e o Summary Evaluator compila todos em métricas finais (pass rate, precision, recall, F1), para não ser preciso olhar informação por informação.
- **A:** Ele não avalia a capacidade de resumir textos, nem usa Exact Match: trabalha sobre resultados já obtidos.
- **B:** Ele não reescreve a saída de cada exemplo; ele junta os resultados de todos em poucas métricas.
- **C:** Escolher entre duas versões é o papel do Pairwise Evaluator.
**Conceito:** Summary Evaluator — agrega resultados em métricas finais

## 7. Um número único que reflita a prioridade do time
**Correta: B**
**Por quê:** O Composite Evaluator cria uma fórmula própria sobre as métricas que já existem, normalmente uma média ponderada. No exemplo da aula, correctness tem peso 0,5, relevância 0,3 e conciseness 0,2: o time escolhe os pesos conforme o que considera importante.
- **A:** O Summary Evaluator traz o resultado do que já existe, sem fórmula de pesos; e a aula não diz que ele pondera pelas métricas que mais variam.
- **C:** O LLM as Judge julga saídas segundo critérios; não é ele que combina as métricas num score ponderado definido pelo time.
- **D:** O Pairwise Evaluator compara duas saídas do mesmo input, não métricas entre si.
**Conceito:** Composite Evaluator — fórmula e pesos definidos pelo time

## 8. Média ponderada do Composite Evaluator
**Correta: A**
**Por quê:** O composite aplica a fórmula definida pelo time, aqui a média ponderada da aula. P1 = 0,5 × 0,9 + 0,3 × 0,7 + 0,2 × 0,8 = 0,45 + 0,21 + 0,16 = 0,82. P2 = 0,5 × 0,7 + 0,3 × 0,8 + 0,2 × 1,0 = 0,35 + 0,24 + 0,20 = 0,79. O P2 é melhor em relevance e conciseness, mas a correctness, com metade do peso, decide a favor do P1.
- **B:** 0,83 e 0,80 são as médias simples (2,5 ÷ 3 e 2,4 ÷ 3). Sem pesos, o P2 venceria; o composite existe justamente para aplicar a fórmula com os pesos do time, e não só resumir.
- **C:** Vencer em mais métricas não decide nada na média ponderada: o peso de cada métrica conta, e a correctness sozinha pesa o mesmo que as outras duas juntas.
- **D:** A conta usa os pesos trocados (0,5 para conciseness e 0,2 para correctness). No cenário, o maior peso é o de correctness.
**Conceito:** Composite Evaluator — média ponderada com os pesos do time

## 9. Divisão entre o que, como e quem avalia (INCORRETA)
**Correta: C**
**Por quê:** O binário (0 ou 1) é característico do Exact Match. O LLM as Judge devolve notas como o 0,2 de relevância do exemplo, junto de um comentário. Seguir uma rubrica não torna o resultado binário.
- **A:** Correta: depois de objetivos (o que) e métricas (como), o runner ou evaluator é quem executa a avaliação.
- **B:** Correta: é a distinção que o professor pede para não confundir; uma é o tipo de avaliação, o outro é quem roda.
- **D:** Correta: o composite também resume, mas cria mais uma camada de abstração, normalmente uma média ponderada.
**Conceito:** Visão geral — objetivo, métrica e evaluator

## 10. Chatbot com conversas longas
**Correta: B**
**Por quê:** No fim da aula, o professor diz que existem avaliações específicas além das de prompt, como a de RAG e a de conversas multi-turn: uma conversa longa, com o chat e um humano interagindo o tempo inteiro, que não é apenas um simples dataset. O que se avalia passa a ser a conversa extensa, não um par isolado de pergunta e resposta. O foco do capítulo é o prompt.
- **A:** Não é questão de volume: o professor diferencia a conversa multi-turn justamente por ela não se reduzir a um dataset de exemplos, e agregar mais exemplos com o Summary Evaluator não muda isso.
- **C:** O pairwise compara duas saídas para o mesmo input, não respostas sucessivas da conversa.
- **D:** O professor cita RAG e multi-turn como avaliações distintas; o histórico da conversa não é contexto recuperado de uma fonte externa.
**Conceito:** Contextos de avaliação além do prompt — multi-turn e RAG
