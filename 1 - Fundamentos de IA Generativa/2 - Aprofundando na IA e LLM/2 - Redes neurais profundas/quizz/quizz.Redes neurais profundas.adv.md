# Quizz — Redes neurais profundas (avançado)

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 2
**Base:** material avançado

---

## 1. Uma equipe empilha dez camadas em uma rede, mas esquece de pôr funções de ativação entre elas. O que essa rede consegue calcular?
- A) Padrões dez vezes mais complexos que os de uma rede de uma camada.
- B) Nada, pois sem ativação o gradiente não chega às primeiras camadas.
- C) Apenas funções como o XOR, que exigem várias camadas lineares.
- D) O mesmo que uma única camada linear, pois as matrizes se combinam em uma.

## 2. O que o backpropagation calcula?
- A) A saída da rede para cada exemplo do conjunto de treino.
- B) O quanto cada peso contribuiu para o erro, de trás para frente.
- C) O número ideal de camadas e de neurônios para o problema.
- D) A distância entre os embeddings de duas palavras.

## 3. Qual é o defeito da representação one-hot que os embeddings corrigem?
- A) Todas as palavras ficam à mesma distância, sem noção de semelhança.
- B) Palavras longas ocupam mais posições do vetor que palavras curtas.
- C) O vetor muda de tamanho conforme a frase em que a palavra aparece.
- D) Palavras frequentes recebem valores maiores que palavras raras.

## 4. Na prática, o que é a camada de embedding de um modelo?
- A) Um dicionário de sinônimos montado por linguistas antes do treino.
- B) Uma função fixa que converte as letras da palavra em números.
- C) Uma tabela aprendida no treino, com uma linha de números por palavra.
- D) Uma camada que comprime o vetor one-hot removendo os zeros.

## 5. O modelo neural de 2003 nunca viu "o cão está no jardim", mas viu "o gato está no jardim". Por que ele se sai melhor que um n-grama nesse caso?
- A) Porque guarda todas as frases do treino e busca a mais parecida.
- B) Porque usa uma janela maior que a de qualquer modelo de n-gramas.
- C) Porque "gato" e "cão" têm vetores próximos, e o aprendido se transfere.
- D) Porque atribui probabilidade igual a todas as frases não vistas.

## 6. Qual afirmação está INCORRETA?
- A) Aumentar a janela fixa dá à rede memória do que veio antes dela.
- B) O gradiente é multiplicado a cada camada que atravessa no caminho de volta.
- C) Os vetores de embedding se aproximam porque isso ajuda a prever a próxima palavra.
- D) A RNN e o Transformer compartilham os mesmos pesos entre as posições.

## 7. Por que uma camada oculta com ReLU resolve o XOR, que o perceptron de uma camada não resolvia?
- A) A ReLU arredonda as saídas para 0 ou 1, o que elimina o erro nos quatro casos.
- B) A camada oculta cria uma nova representação em que uma reta separa os pontos.
- C) A rede maior consegue memorizar a tabela, já que o XOR tem só quatro casos.
- D) O backpropagation ajusta pesos que no perceptron ficavam fixos desde o início.

## 8. Uma busca usa embeddings GloVe, e "banco" recebe o mesmo vetor em "sentei no banco da praça" e em "o banco aprovou o empréstimo". O que explica isso e o que resolveria?
- A) Os vetores têm poucas dimensões; passar de 300 para 1.000 separaria os sentidos.
- B) A palavra é rara no treino; mais exemplos de cada sentido corrigiriam o vetor.
- C) O vocabulário une palavras iguais; quebrar "banco" em pedaços distinguiria os usos.
- D) O GloVe dá um vetor fixo por palavra; um modelo contextual muda o vetor conforme a frase.

## 9. A feedforward da aula concatena os embeddings da janela, e a concatenação preserva a ordem. Por que essa rede ainda generaliza mal?
- A) A camada oculta embaralha as faixas do vetor e desfaz a ordem que a concatenação criou.
- B) A concatenação soma os vetores por dentro e perde a ordem, como a soma faria.
- C) Cada posição da janela tem pesos próprios, e o aprendido em uma não vale nas outras.
- D) Os embeddings da janela ficam congelados e não são ajustados pelo backpropagation.

## 10. Uma empresa usa um modelo de embeddings pronto, treinado em texto da web, para buscar em laudos médicos cheios de jargão, e os resultados são ruins. Qual é a explicação mais provável?
- A) Os vetores refletem os dados de treino, e termos raros neles ganham vetores pobres.
- B) Os embeddings comparam bem só frases curtas, e laudos são documentos longos.
- C) Termos técnicos ficam todos à mesma distância entre si, como no one-hot.
- D) A busca precisa de mais camadas ocultas para entender vocabulário especializado.
