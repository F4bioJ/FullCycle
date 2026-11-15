# Quizz — Position Wise Layers

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 9
**Base:** material da aula

---

## 1. Na analogia do aluno, o token entra no bloco como o vetor x. Logo depois de calcular xW1 + b1 (antes de qualquer descarte), como está esse vetor?
- A) Já é a representação final do token, pronta para a próxima camada do modelo.
- B) Já contém apenas valores positivos, porque W1 foi treinada para eliminar o inútil.
- C) É um vetor intermediário, com ideias novas em relação a x, mas ainda bruto.
- D) É menor que x, porque W1 condensa a informação na sua forma compacta.

## 2. Um engenheiro altera apenas o vetor de um token da sequência e recalcula só o feedforward position-wise. O que acontece com as saídas dos outros tokens?
- A) Continuam iguais, porque cada posição é processada de forma independente pela mesma rede.
- B) Mudam um pouco, porque o feedforward consulta os vizinhos de cada token ao calcular.
- C) Mudam, porque W1 e W2 são recalculados a partir da sequência inteira a cada vez.
- D) Muda só a do token seguinte, que depende do resultado da posição anterior.

## 3. Um engenheiro empilha várias transformações do tipo xW + b, sem nenhuma função de ativação entre elas, esperando ganhar capacidade. O que a aula sugere sobre esse plano?
- A) A capacidade cresce com o número de camadas, pois cada uma aprende seus próprios pesos.
- B) A capacidade cresce só nas primeiras camadas, que ficam mais perto da entrada.
- C) O treino fica mais lento, mas a capacidade é a mesma de um FFN com ativação.
- D) Não ganha capacidade: tudo equivale a uma única transformação linear, sem as relações complexas.

## 4. Qual das afirmações sobre a fórmula FFN(x) = max(0, xW1 + b1)W2 + b2 está INCORRETA?
- A) b1 é somado depois da lente W1, como um conselho adicional ao aluno.
- B) b2 é somado antes da segunda lente W2, preparando o vetor para ela.
- C) W2 condensa o valor já calculado em uma forma final.
- D) W1 e W2 são matrizes de peso, e b1 e b2 são vetores de viés.

## 5. Por que a fórmula tem duas transformações (W1 e W2) em vez de uma só?
- A) A primeira cria o vetor intermediário que a ativação filtra, e a segunda produz a forma final.
- B) Duas transformações duplicam o número de tokens processados em cada posição.
- C) A segunda devolve ao vetor o tamanho e a ordem das posições originais da sequência.
- D) A primeira lê o contexto dos vizinhos e a segunda aplica esse contexto ao próprio token.

## 6. Na analogia, imagine que o aluno guardasse tudo o que ouviu, inclusive a cor da roupa do professor, sem descartar nada depois de W1 e b1. O que aconteceria?
- A) Aprenderia mais rápido, pois nenhuma ideia seria perdida pelo caminho.
- B) Aprenderia o mesmo, só que usando mais lentes (matrizes W) no percurso.
- C) Aprenderia o mesmo, pois W2 reordenaria as ideias e removeria o ruído sozinha.
- D) Ideias inúteis poderiam desvirtuar a evolução do aprendizado, pois nada seria barrado.

## 7. Um colega propõe dispensar o feedforward, argumentando que a atenção já entrega o contexto de cada token. Qual é a melhor resposta?
- A) A atenção já refina cada token sozinha; o feedforward existe para reduzir o tamanho do vetor.
- B) A atenção traz informação de outros tokens; o feedforward decide, só dentro de cada token, o que fazer com ela.
- C) O feedforward é quem mistura os tokens da sequência, algo que a atenção não consegue fazer.
- D) O feedforward só é necessário na última camada, na hora de gerar a resposta final.

## 8. O feedforward trabalha em cada posição de forma independente. Por que isso não contradiz o uso de contexto global no Transformer?
- A) Porque o feedforward roda uma vez só, sobre a sequência inteira concatenada.
- B) Porque cada posição consegue ler os pesos usados nas posições vizinhas.
- C) Porque o contexto entre tokens já foi trazido antes; o feedforward só refina cada vetor.
- D) Porque o feedforward é aplicado antes da atenção, com os tokens ainda separados.

## 9. O token que sai do bloco já não tem "nada a ver" com o vetor que entrou. Qual é a melhor explicação?
- A) Passou por duas transformações, com descarte entre elas, e traz o contexto reinterpretado.
- B) Passou por duas transformações, e a segunda trocou o vetor pelo contexto dos vizinhos.
- C) A ativação inverteu o sinal dos valores negativos, e W2 reorganizou o vetor para a próxima camada.
- D) Os viéses b1 e b2 acumularam o contexto, e W1 e W2 apenas repassaram o vetor.

## 10. Num teste, todos os valores de xW1 + b1 de um token saem negativos. O que se espera da saída do bloco para esse token?
- A) Sai igual ao vetor x de entrada, já que nada foi aproveitado pelo bloco.
- B) Sai com valores negativos, pois W2 inverte o sinal do que recebe.
- C) Sai apenas com o ajuste final b2, pois nada passa pelo filtro para chegar a W2.
- D) Sai zerado por completo, incluindo o b2, pois a ativação alcança a saída.
