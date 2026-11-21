# Quizz — Evaluators

**Capítulo:** 7 - Prompt Evaluation · **Aula:** 5
**Base:** material da aula

---

## 1. Um prompt deve devolver um JSON com os campos `categoria` e `prioridade`, e a equipe não tem respostas de referência gravadas. Um colega diz que, sem ground truth, não dá para usar um Code Evaluator. Pelo que a aula mostra, quem tem razão?
- A) A equipe: a referência é um campo opcional, e o código pode checar se o output respeita o schema.
- B) O colega: sem referência o código não tem com o que comparar, e o caminho passa a ser o LLM as Judge.
- C) A equipe, desde que o evaluator compare duas saídas do mesmo input e escolha a mais bem formada.
- D) O colega: sem ground truth a checagem vira subjetiva, e a validação do JSON passa a depender de rubrica.

## 2. A referência é "PostgreSQL", e o modelo respondeu "Postgres". Um Code Evaluator de Exact Match avalia essa saída. Qual resultado esperar, e o que ele significa?
- A) Um score perto de 0,9, porque o Exact Match mede o quanto a saída se aproxima da referência.
- B) Score 1, porque o evaluator compara o sentido das duas respostas, e os dois nomes indicam o mesmo banco.
- C) Score 0, e ele mostra que o modelo errou o fato: o evaluator confirmou que a resposta não é o banco certo.
- D) Score 0: o Exact Match não tem meio-termo, e uma métrica de proximidade daria crédito parcial.

## 3. Um assistente de suporte responde perguntas abertas, e não existe uma resposta "certa" gravada para cada uma. A equipe quer saber se as respostas atendem ao que foi perguntado. Qual evaluator da aula atende, e como ele decide?
- A) Code Evaluator: uma regra compara as palavras da resposta com as da pergunta e devolve True ou False.
- B) LLM as Judge: um prompt define o critério de relevância, e o modelo devolve uma nota e um comentário.
- C) Summary Evaluator: ele junta as respostas do dataset e calcula a relevância média a partir do pass rate.
- D) Pairwise Evaluator: ele compara cada resposta com a pergunta, e a preferida recebe a nota de relevância.

## 4. Uma equipe trocou o Exact Match (Code Evaluator) por um LLM as Judge de correctness, para aceitar respostas certas escritas de outro jeito. O que ela ganha e com o que precisa ter cuidado?
- A) Ganha determinismo, porque o juiz segue a rubrica, mas perde a capacidade de dar notas intermediárias.
- B) Ganha custo menor, porque o juiz dispensa referência, mas perde a nuance que o Exact Match oferecia.
- C) Ganha nuance com notas entre 0 e 1, mas o resultado passa a depender da clareza da rubrica e do juiz.
- D) Ganha nuance, mas perde a referência, porque um LLM como juiz não pode receber ground truth no prompt.

## 5. Para a pergunta "como pôr timeout numa requisição HTTP em Go?", o prompt v1 gerou uma resposta com `context.WithTimeout`, e o v2, uma com `time.Sleep`. O que um Pairwise Evaluator recebe e devolve nesse caso?
- A) Recebe as duas saídas do mesmo input e devolve uma preferência, aqui pela do v1, segundo o critério.
- B) Recebe cada saída separada e devolve uma nota para cada uma; a comparação fica para o Summary Evaluator.
- C) Recebe as duas saídas e devolve a média ponderada delas, com peso maior para a resposta mais correta.
- D) Recebe a saída do v2 e usa a do v1 como referência, devolvendo 0 ou 1 pelo Exact Match entre elas.

## 6. Ao ver "Summary Evaluator" numa lista de evaluators, um colega conclui que ele serve para medir se o modelo resume bem textos longos. Qual é a correção?
- A) Ele avalia resumos, sim, mas comparando o texto gerado com um resumo de referência por Exact Match.
- B) Ele resume a saída de cada exemplo em uma frase, para o time ler mais rápido que a resposta inteira.
- C) Ele escolhe, entre duas versões de um resumo, a melhor, e devolve a preferência como no pairwise.
- D) Ele agrega os resultados de vários exemplos do dataset em métricas finais, como pass rate e F1.

## 7. Num assistente de código, errar a solução é grave, e ser prolixo incomoda pouco. O time já tem notas de correctness, relevance e conciseness e quer um número único que reflita essa prioridade. Qual evaluator atende?
- A) Summary Evaluator, porque ele dá peso maior, por conta própria, às métricas que mais variam no dataset.
- B) Composite Evaluator, com uma fórmula definida pelo time em que a nota de acerto tem o maior peso.
- C) LLM as Judge, pedindo ao modelo que escolha, a cada resposta, qual das três métricas importa mais.
- D) Pairwise Evaluator, que compara as três métricas duas a duas e devolve a que deve prevalecer.

## 8. Um Composite Evaluator usa os pesos do exemplo da aula: 0,5 para correctness, 0,3 para relevance e 0,2 para conciseness. O prompt P1 tirou 0,9 / 0,7 / 0,8 nessas métricas, e o P2 tirou 0,7 / 0,8 / 1,0. Qual vence pelo score composto, e por quê?
- A) P1 (0,82 contra 0,79): a vantagem em correctness, a métrica de maior peso, supera a do P2 nas outras.
- B) P2 (0,83 contra 0,80): ele tem a maior média das três métricas, e o composite resume esses resultados.
- C) P2, porque vence em duas das três métricas, e o composite favorece quem ganha mais critérios.
- D) P2 (0,88 contra 0,79): a conciseness perfeita, com o maior peso, compensa a correctness mais baixa.

## 9. Sobre a divisão entre o que avaliar, como avaliar e quem avalia, qual afirmação está INCORRETA?
- A) O evaluator, também chamado de runner, é quem executa a avaliação definida por objetivos e métricas.
- B) Pairwise evaluation é o tipo de avaliação que compara duas saídas; o pairwise evaluator a executa.
- C) Como o LLM as Judge segue uma rubrica, seu score é binário como o do Exact Match, sem nota no meio.
- D) O Composite Evaluator também resume resultados, mas acrescenta uma camada com fórmula e pesos.

## 10. Uma equipe quer avaliar um chatbot cujas conversas com o usuário duram dezenas de turnos. Pelo comentário do professor no fim da aula, o que muda em relação aos exemplos do capítulo?
- A) Muda o volume: a conversa gera mais exemplos, e o Summary Evaluator dá conta de agregar os resultados.
- B) Muda o objeto: é a conversa inteira, com a interação contínua, e não um par isolado de um dataset.
- C) Muda o executor: conversas longas pedem pairwise, comparando cada resposta com a do turno anterior.
- D) Muda a fonte do contexto: o histórico vira documento recuperado, e o caso passa a ser avaliação de RAG.
