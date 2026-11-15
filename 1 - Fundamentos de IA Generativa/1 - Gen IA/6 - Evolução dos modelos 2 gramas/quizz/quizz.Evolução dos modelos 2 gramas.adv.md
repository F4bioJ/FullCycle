# Quizz — Evolução dos modelos 2 gramas (avançado)

**Capítulo:** 1 - Gen IA · **Aula:** 6
**Base:** material avançado

---

As perguntas 1 a 3 usam o corpus do material:

```
o gato preto dorme
o gato branco come
o cão preto come
```

## 1. Qual é a probabilidade que o bigrama treinado nesse corpus dá à frase "o cão preto dorme"?
- A) Zero, pois a frase inteira nunca apareceu no treino.
- B) 1/18, pois cada um dos três pares vale 1/3 nesse corpus.
- C) 1/3, pois só o primeiro par muda em relação às frases vistas.
- D) 1/6, a mesma de "o gato preto dorme", embora nunca tenha sido vista.

## 2. Nesse mesmo bigrama, "o cão branco come" recebe probabilidade zero. Qual é a causa exata?
- A) A frase nunca apareceu inteira no treino, e o bigrama só pontua frases vistas.
- B) O par "cão branco" nunca foi visto, e um único fator zero anula o produto.
- C) A palavra "branco" é rara no corpus, e palavras raras recebem probabilidade zero.
- D) O par "branco come" nunca foi visto, e o último par decide a frase inteira.

## 3. Aplicando a suavização de Laplace (somar 1 a todas as contagens), o que acontece com "o cão branco come"?
- A) Continua com zero, pois a suavização só atua sobre palavras fora do vocabulário.
- B) Passa a ter a mesma probabilidade de "o gato branco come", que foi vista.
- C) Ganha uma probabilidade pequena, e as frases vistas perdem um pouco da sua.
- D) Ganha probabilidade, e as frases vistas mantêm exatamente a mesma de antes.

## 4. Um time troca o bigrama por um 5-grama, treinado no mesmo corpus de tamanho médio. O que tende a acontecer?
- A) Mais frases corretas recebem zero, pois sequências longas raramente estão no treino.
- B) Menos frases recebem zero, pois o modelo passa a enxergar mais contexto.
- C) O resultado fica igual, pois a suposição de Markov vale para qualquer valor de n.
- D) A tabela de contagens encolhe, pois sequências longas são menos numerosas que pares.

## 5. Um modelo viu "o gato dorme" mil vezes e nunca viu "o cão dorme". O que muda se ele representar as palavras como embeddings, em vez de símbolos isolados?
- A) Nada, pois a frase com "cão" continua sem nenhuma ocorrência no treino.
- B) "O cão dorme" fica exatamente tão provável quanto "o gato dorme", pois os vetores coincidem.
- C) Parte do que foi aprendido sobre "gato" passa a valer para "cão", se os vetores forem próximos.
- D) O modelo passa a trocar "gato" por "cão" ao gerar, por serem palavras próximas.

## 6. Um LLM moderno, configurado com temperatura zero e sem penalidade de repetição, começa a repetir o mesmo parágrafo. Pelo material, qual é o diagnóstico mais provável?
- A) Alucinação: o modelo afirma com fluência algo que não está nos dados.
- B) Contexto curto, como o do bigrama, que esquece o que acabou de escrever.
- C) Frequência zero: o modelo não encontra continuações vistas no treino.
- D) Configuração de geração: escolher sempre o máximo pode fechar um ciclo.

## 7. Com um vocabulário de 50 mil palavras, um trigrama tem 125 trilhões de combinações possíveis. O que isso implica, segundo o material?
- A) Que a maioria das combinações nunca terá contagem, e os dados ficam esparsos.
- B) Que o treino passa a exigir GPUs, pois contar trilhões de pares equivale a treinar redes.
- C) Que o modelo precisa de 125 trilhões de frases de treino para funcionar bem.
- D) Que o trigrama deixa de seguir a suposição de Markov, por excesso de estados.

## 8. Um colega diz: "o bigrama só faz estatística; o LLM entende o significado". O que o material corrige nessa frase?
- A) Nada: a diferença de natureza entre os dois é justamente o salto da área.
- B) Os dois são estatísticos; a diferença está no contexto e na representação.
- C) O LLM não usa estatística, e sim regras de significado aprendidas dos vetores.
- D) O bigrama também entende significado, mas só o de uma palavra por vez.

## 9. Na conta P(o gato preto dorme) = P(gato|o) × P(preto|gato) × P(dorme|preto), o que o último fator mostra?
- A) Que o modelo pondera todas as palavras anteriores, com peso maior na última.
- B) Que "gato" entra no último fator, pois a regra da cadeia condiciona a tudo o que veio antes.
- C) Que "dorme" foi escolhido por ser a palavra mais frequente do corpus.
- D) Que a escolha entre "dorme" e "come" ignora se o animal era gato ou cão.

## 10. Qual afirmação está INCORRETA segundo o material?
- A) Treinar um bigrama é contar pares e dividir pela contagem da palavra anterior.
- B) Com sorteio, uma palavra nem sempre é seguida do seu par mais frequente.
- C) Mais processamento resolveria a limitação do bigrama sem mudar a representação.
- D) Palavras fora do vocabulário costumam ser trocadas por um token especial, `<unk>`.
