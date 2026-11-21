# Quizz — Métricas e tipos de avaliação

**Capítulo:** 7 - Prompt Evaluation · **Aula:** 4
**Base:** material da aula

---

## 1. A referência de um caso de teste diz "O reembolso é feito em até 7 dias úteis." O modelo responde "Você recebe o dinheiro de volta em no máximo sete dias úteis." O time quer aceitar respostas que dizem a mesma coisa com outras palavras. Qual métrica atende melhor a esse caso?
- A) Exact Match, porque a referência define o resultado esperado e o desvio do texto dela indica erro de conteúdo.
- B) String distance, porque mede quão perto o texto gerado está da referência e tolera diferenças de escrita.
- C) Embedding similarity, porque transforma as duas frases em embeddings e mede a proximidade de sentido.
- D) Precision, porque conta quantas palavras da saída também aparecem na referência e ignora as demais.

## 2. Um time usa um LLM com uma rubrica para dar nota de 1 a 5 de faithfulness a cada resposta. Um colega diz que, como isso roda automatizado e em lote, a métrica passou a ser objetiva. Pela aula, por que a classificação dele está errada?
- A) A nota nasce do julgamento de outro modelo guiado por critérios, e não de uma fórmula que dá o resultado.
- B) Métrica subjetiva exige um avaliador humano; com um LLM no lugar, a avaliação deixa de valer como métrica.
- C) Faithfulness é uma métrica sistêmica, porque olha o comportamento da execução, e não o conteúdo gerado.
- D) A rubrica torna a métrica comparativa, porque cada resposta passa a ser julgada contra as outras do lote.

## 3. A saída de um prompt é um JSON lido por um backend, que precisa dos campos `cliente`, `valor` (numérico) e `vencimento`. Hoje o time pede a um LLM juiz que diga se "o formato parece certo". Pelo que a aula apresenta, que métrica serve melhor para esse ponto?
- A) Exact Match contra um JSON de referência, porque compara a saída inteira e falha se faltar algum campo.
- B) Embedding similarity contra um JSON de referência, porque mede o quanto a saída se aproxima da estrutura.
- C) O mesmo LLM juiz somado a um humano, porque formato depende de interpretação e pede duas opiniões.
- D) Validação de JSON e de schema, porque a regra dá passa ou falha sem depender da opinião de um avaliador.

## 4. Um time comparou, num dataset de 50 perguntas, as saídas do prompt A e do prompt B lado a lado, com um LLM juiz escolhendo a melhor de cada par. O gerente registrou isso como "teste A/B". Pela distinção feita pelo professor, qual comentário é o mais preciso?
- A) Está certo: comparar duas saídas é o que define um teste A/B, e pairwise é outro nome para a mesma coisa.
- B) É um pairwise; o A/B também compara duas versões, mas costuma rodar em produção, com a aceitação real.
- C) É um model comparison, feito para comparar modelos; para comparar dois prompts, o caminho é o A/B testing.
- D) Para ser A/B, faltou perguntar aos usuários de qual versão gostaram, que é o que esse tipo de teste mede.

## 5. Um time vai avaliar um assistente de perguntas abertas e ainda não tem nenhuma resposta conhecida como correta, ou seja, não tem ground truth. Qual destas avaliações pode rodar mesmo assim?
- A) Correctness com um LLM juiz, porque o próprio juiz decide o que está certo e dispensa uma referência.
- B) Embedding similarity, porque mede o sentido da saída no espaço vetorial em vez de comparar palavras.
- C) Latência e custo em tokens, porque olham a execução do prompt, e não se a resposta bate com algo.
- D) String distance, porque tolera diferenças de texto e por isso dispensa uma resposta de referência.
