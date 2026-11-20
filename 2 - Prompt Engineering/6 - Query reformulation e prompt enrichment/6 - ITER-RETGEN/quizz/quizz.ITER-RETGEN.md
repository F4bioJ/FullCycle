# Quizz — ITER-RETGEN

**Capítulo:** 6 - Query reformulation e prompt enrichment · **Aula:** 6
**Base:** material da aula

---

## 1. No ITER-RETGEN, o prompt do rascunho manda o modelo escrever [MISSING] onde não tiver certeza, em vez de completar com o que acha. Por que isso é importante para a técnica?
- A) Porque o rascunho com lacunas basta para gerar os embeddings, como o documento hipotético do HyDE.
- B) Porque os marcadores reduzem os tokens do rascunho e deixam a etapa de geração mais barata.
- C) Porque cada lacuna vira uma pergunta para a busca, e a informação passa a vir da recuperação.
- D) Porque os marcadores aparecem para o usuário, que completa as lacunas com o que ele sabe.

## 2. Depois do primeiro ciclo de busca, o rascunho reescrito ainda tem trechos marcados como [MISSING]. O que o ITER-RETGEN faz em seguida?
- A) Volta a iterar: gera perguntas para o que ficou pendente, busca as respostas e reescreve o texto.
- B) Encerra o loop e entrega o texto, porque o Fill desse ciclo já preencheu o que a busca permitia.
- C) Descarta o rascunho e gera um documento hipotético completo para fazer uma busca vetorial.
- D) Passa direto para a Expansion, que cria lacunas novas no lugar das que ficaram pendentes.

## 3. Numa execução, o modelo já sabia quase tudo: o rascunho veio com poucas lacunas, o loop acabou na primeira rodada e a resposta ficou rasa. O que a técnica prevê para esse caso?
- A) Repetir o Fill com as mesmas perguntas, juntando mais trechos à resposta já preenchida.
- B) Na etapa Query, dividir cada pergunta em várias perguntas menores antes da busca.
- C) Gerar um novo Draft do zero, com as mesmas lacunas, e recomeçar o loop desde o início.
- D) Fazer uma Expansion: criar mais Missing Markers, gerar mais perguntas e buscar mais.

## 4. O HyDE e o ITER-RETGEN geram texto antes de buscar. Qual diferença entre eles a comparação das duas aulas evidencia?
- A) Os dois marcam lacunas, mas o ITER-RETGEN é o que as transforma em perguntas para a busca.
- B) O HyDE preenche tudo, mesmo com dados hipotéticos; o ITER-RETGEN marca lacunas e itera.
- C) O HyDE usa o texto gerado na resposta final, e o ITER-RETGEN o descarta depois da primeira busca.
- D) Os dois iteram, mas o HyDE refaz a busca vetorial a cada nova versão do documento hipotético.

## 5. Um usuário pede "me fala sobre Python" e espera um panorama completo. Por que o ITER-RETGEN se encaixa nesse pedido, e qual o preço disso?
- A) Encaixa porque o rascunho já sai completo; o preço é uma busca extra para confirmar os dados.
- B) Encaixa porque o loop traz muita informação; o preço é a resposta final trazer dados hipotéticos.
- C) Encaixa porque o loop traz muita informação relevante; o preço são mais chamadas ao modelo.
- D) Encaixa porque usa um banco vetorial; o preço é ter de gerar embeddings de cada rascunho novo.
