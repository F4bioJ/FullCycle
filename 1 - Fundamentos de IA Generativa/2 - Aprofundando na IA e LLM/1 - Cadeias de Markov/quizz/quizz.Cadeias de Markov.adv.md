# Quizz — Cadeias de Markov (avançado)

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 1
**Base:** material avançado

---

## 1. Qual é a diferença entre uma cadeia de Markov e um HMM?
- A) A cadeia olha vários estados para trás; o HMM olha apenas um.
- B) Na cadeia os estados são visíveis; no HMM são ocultos e emitem observações.
- C) A cadeia usa probabilidades; o HMM usa regras determinísticas.
- D) A cadeia modela texto; o HMM modela apenas áudio e sequências de DNA.

## 2. Qual é a diferença de cálculo entre o forward e o Viterbi?
- A) O forward usa a matriz de emissão; o Viterbi usa só a de transição.
- B) O forward percorre a sequência do fim para o começo; o Viterbi, do começo para o fim.
- C) O forward soma os caminhos que chegam a cada estado; o Viterbi guarda só o melhor.
- D) O forward exige dados rotulados; o Viterbi funciona sem rótulos.

## 3. Com 3 estados e 20 passos, há cerca de 3,5 bilhões de sequências possíveis, mas o Viterbi resolve com cerca de 180 operações. O que torna isso possível?
- A) O futuro depende só do estado atual, então basta um valor por estado a cada passo.
- B) O algoritmo sorteia uma amostra pequena das sequências e avalia apenas essas.
- C) As sequências de baixa probabilidade são descartadas antes de o cálculo começar.
- D) A matriz de emissão elimina os estados incompatíveis com a observação.

## 4. Uma equipe tem milhares de horas de áudio sem transcrição fonética e quer treinar um HMM. O que o material diz sobre isso?
- A) É inviável, pois o HMM depende de estados rotulados para ser treinado.
- B) É viável só para o cálculo da emissão, pois a transição exige rótulos.
- C) É viável com o Viterbi, que ajusta as tabelas enquanto decodifica.
- D) É viável com o Baum–Welch, que estima as tabelas a partir das observações.

## 5. Por que o estado de um HMM é uma memória fraca?
- A) Porque é uma categoria que não carrega nada sobre o caminho até ela.
- B) Porque é apagado sempre que uma nova observação é emitida.
- C) Porque só pode assumir dois valores, como ligado e desligado.
- D) Porque é recalculado a partir do início da sequência a cada passo.

## 6. Um sistema tem dois HMMs treinados, um de português e um de inglês, e precisa dizer em que idioma está um áudio novo. Como o material sugere resolver?
- A) Rodar o Viterbi em cada modelo e escolher o que chegar ao caminho mais curto.
- B) Rodar o Baum–Welch no áudio e ver qual dos dois modelos converge mais rápido.
- C) Rodar o forward em cada modelo e escolher o que der maior probabilidade ao áudio.
- D) Rodar o forward-backward e escolher o modelo com os estados mais concentrados.

## 7. Uma equipe treina o mesmo HMM com Baum–Welch duas vezes, partindo de tabelas iniciais diferentes, e obtém tabelas finais diferentes. Qual é a explicação?
- A) Há um erro na implementação, pois o algoritmo exato chega sempre às mesmas tabelas.
- B) O algoritmo converge para um máximo local, que depende do chute inicial das tabelas.
- C) Sem rótulos o problema não tem solução, então qualquer resultado é aleatório.
- D) O Viterbi usado dentro do algoritmo sorteia caminhos diferentes a cada execução.

## 8. Uma equipe tem um corpus de frases em que cada palavra já vem marcada com sua categoria gramatical. Qual é o jeito mais direto de obter as tabelas do HMM?
- A) Rodar o Baum–Welch, que é o algoritmo de aprendizado próprio do HMM.
- B) Rodar o Viterbi sobre o corpus e ler as tabelas dos melhores caminhos.
- C) Rodar o forward-backward para estimar a distribuição dos estados em cada palavra.
- D) Contar transições e emissões no corpus e dividir pelos totais, como no bigrama.

## 9. Um HMM de categorias gramaticais gera a frase "o carro comeu a nuvem". Por que ela sai gramatical e sem sentido?
- A) Cada palavra depende só da categoria atual, que não carrega o assunto da frase.
- B) A matriz de emissão tem linhas que não somam 1 e distorce a escolha das palavras.
- C) O Viterbi escolheu a melhor sequência de categorias e ignorou o significado.
- D) O modelo tem poucas categorias, e com algumas centenas o problema desapareceria.

## 10. Qual afirmação está INCORRETA?
- A) Distinguir 20 fatos de sim ou não no estado de um HMM pediria mais de um milhão de estados.
- B) O bigrama é uma cadeia de Markov em que o estado visível é a própria palavra.
- C) O limite principal do HMM é processar a sequência de forma linear, um passo por vez.
- D) A propriedade de Markov que limita o modelo é a mesma que torna o Viterbi viável.
