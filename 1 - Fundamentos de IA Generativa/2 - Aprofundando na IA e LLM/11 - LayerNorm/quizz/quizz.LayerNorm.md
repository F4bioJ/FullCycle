# Quizz — LayerNorm

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 11
**Base:** material da aula

---

## 1. Uma equipe empilha muito mais camadas em um Transformer. Segundo a aula, que problema da arquitetura a LayerNorm e as conexões residuais vêm resolver?
- A) Os tokens perdem a ordem da frase, porque cada camada processa todos eles em paralelo.
- B) Cada camada passa a enxergar só o próprio token, sem considerar os vizinhos da frase.
- C) O treino fica difícil pelos gradientes, e a informação entre as camadas circula instável.
- D) O modelo passa a decorar os dados de treino, porque ganha parâmetros demais para o volume.

## 2. Em certo ponto da rede, o processamento de uma camada quase não contribui (f(x) fica próximo de zero). Com a conexão residual, o que chega à camada seguinte?
- A) Praticamente a própria entrada x, já que ela é somada a um resultado quase nulo da camada.
- B) Um sinal quase nulo, que a camada seguinte terá de reconstruir a partir dos próprios pesos.
- C) A entrada original do modelo, porque o atalho leva o dado da primeira camada até a última.
- D) Um sinal quase nulo na ida, mas o atalho ainda leva o gradiente de volta no backpropagation.

## 3. Compare uma camada sem conexão residual com uma camada com ela. O que muda no que a camada precisa aprender?
- A) Com o residual, os pesos da camada mudam pouco, e o ajuste principal passa a ser feito no atalho.
- B) Sem o residual, a camada tende a copiar a entrada, por não ter outro caminho para levá-la adiante.
- C) Com o residual, a camada aprende a controlar a escala de x, e a LayerNorm cuida do conteúdo.
- D) Com o residual, ela aprende ajustes sobre x, que já chega à saída; sem ele, refaz o sinal todo.

## 4. Por que a conexão residual ajuda no backpropagation?
- A) Porque impede o gradiente de crescer, já que a soma com x limita o tamanho da atualização.
- B) Porque o atalho aditivo dá ao gradiente um caminho de volta além da cadeia de camadas.
- C) Porque normaliza a escala dos gradientes em cada camada, mantendo-os em uma faixa fixa.
- D) Porque reduz o número de camadas que o dado atravessa na ida, deixando a rede mais rasa.

## 5. Uma equipe nota que os valores ao longo da rede ficam ora muito grandes, ora muito pequenos, e o treino fica numericamente instável. Qual peça ataca isso diretamente, e como?
- A) A LayerNorm, estabilizando a distribuição dos valores que passam de uma camada para a outra.
- B) A conexão residual, porque somar x à saída da camada mantém os valores perto dos da entrada.
- C) A LayerNorm, mudando o cálculo da atenção para que as cabeças produzam valores menores.
- D) A conexão residual, descartando f(x) quando o valor sai muito maior do que o da entrada.

## 6. Sobre conexões residuais e LayerNorm, qual afirmação está INCORRETA?
- A) A conexão residual preserva e transporta a informação ao longo da profundidade da rede.
- B) A LayerNorm estabiliza a forma como a informação chega à próxima etapa do processamento.
- C) Juntas, as duas tornam viável escalar o Transformer para LLMs com muitas camadas.
- D) A LayerNorm cria um atalho para a entrada atravessar a camada, somando x ao resultado dela.

## 7. O positional encoding (aula anterior) e a conexão residual são, os dois, uma soma. Qual é a diferença entre eles?
- A) Os dois somam a posição do token: o positional encoding na entrada e o residual em cada camada.
- B) O positional encoding soma para preservar o significado do token; o residual, para guardar a posição.
- C) O positional encoding soma a posição ao embedding; o residual soma a entrada à saída da camada.
- D) O residual soma um vetor fixo de fórmula; o positional encoding soma a entrada à saída da camada.

## 8. O professor diz que, como x entra sempre na conta, ele vira um dado "forte". O que isso significa para as informações que não precisam ser transformadas?
- A) Elas ficam retidas na camada e chegam à saída apenas quando a camada decide reescrevê-las.
- B) Elas seguem propagadas pela rede, e a camada ainda tem espaço para modificá-las se for útil.
- C) Elas saem da saída da camada, porque ela já as processou e não precisa repassá-las adiante.
- D) Elas passam a ser normalizadas pelo atalho, que corrige a escala de x antes de somar.

## 9. Uma equipe acabou de montar um Transformer com atenção, feedforward, positional encoding, LayerNorm e conexões residuais. O que ela tem em mãos?
- A) Um modelo pré-treinado, que já conhece a linguagem e precisa só do fine-tuning para virar chat.
- B) Um modelo que pode ir direto ao fine-tuning, sem precisar passar pelo pré-treinamento.
- C) Um modelo treinado, faltando apenas ajustar a LayerNorm para estabilizar as respostas finais.
- D) Uma arquitetura preparada, que ainda não aprendeu nada: falta o pré-treinamento e o fine-tuning.

## 10. Uma equipe remove as conexões residuais de um Transformer muito profundo e mantém a LayerNorm. Pelo que a aula explica, o que se espera?
- A) Treino mais difícil e lento, porque o gradiente perde o atalho e x deixa de seguir adiante.
- B) Pouca mudança, porque a LayerNorm já cumpre a função de preservar a informação de entrada.
- C) Treino igual, mas o modelo perde a noção da ordem dos tokens ao passar pelas camadas.
- D) Treino estável, porque a LayerNorm segura os valores, mas com respostas de pior qualidade.
