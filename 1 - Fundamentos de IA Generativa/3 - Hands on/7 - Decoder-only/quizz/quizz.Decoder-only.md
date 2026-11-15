# Quizz — Decoder-only

**Capítulo:** 3 - Hands on · **Aula:** 7
**Base:** material da aula

---

## 1. Uma equipe vai construir um assistente que continua rascunhos de texto e avalia usar o Transformer completo. Qual é o argumento da aula para preferir o decoder-only?
- A) O trabalho pede compreender o texto inteiro antes de escrever, e o decoder-only faz essa leitura nos dois sentidos.
- B) O trabalho é prever o próximo token pelo histórico, e dispensar a visão bidirecional deixa o modelo mais simples e barato.
- C) O modelo completo tem dificuldade para gerar texto, porque o encoder bloqueia o acesso do decoder aos tokens já escritos.
- D) O decoder-only dispensa a informação de ordem dos tokens, e sem ela a geração passo a passo fica mais rápida e mais barata.

## 2. Ao inspecionar a matriz com máscara causal de "a chuva molhou tudo", alguém vê check em todas as células da linha de "tudo" e suspeita de erro. O que concluir?
- A) Há erro: a linha deveria ter zero em "tudo", porque uma posição não pode enxergar a si mesma.
- B) Há erro: a linha deveria ter check só em "molhou", porque cada passo libera apenas o token anterior.
- C) Não há erro: a última linha fica fora da máscara, para o modelo poder revisar a frase inteira.
- D) Não há erro: tudo nessa linha é passado ou a própria posição, e não resta futuro a bloquear.

## 3. Alguém retira a máscara causal de um decoder-only e mantém o treino de prever o próximo token. O que esperar?
- A) O token a prever fica visível no treino, e ao gerar esse apoio some, porque o futuro ainda não existe.
- B) O modelo ganha atenção bidirecional como o BERT, e gera melhor por ter compreendido a frase inteira.
- C) O modelo perde a noção da ordem dos tokens, porque é a máscara que carrega a numeração das posições.
- D) O custo de treino cai, porque a matriz sem zeros é mais simples, e a qualidade da geração se mantém.

## 4. A aula explicou a máscara com uma matriz de palavras e avisou que simplificou. Como isso fica no modelo real?
- A) A matriz relaciona os vetores dos tokens, pode ser maior que a contagem de palavras, e a máscara segue a posição de cada um.
- B) A matriz relaciona os vetores dos tokens, e a máscara compara os significados deles para decidir quais bloquear no histórico.
- C) A matriz mantém uma linha por palavra, e os vetores dos tokens de cada palavra são somados antes de a máscara ser aplicada.
- D) A matriz relaciona os vetores dos tokens, e a máscara deixa de ser triangular, para os tokens de uma palavra se verem entre si.

## 5. Um colega conclui: "se a máscara libera um token por vez, o Transformer voltou a funcionar como uma RNN". O que a aula responde?
- A) Está certo na geração: o paralelismo vale para o encoder-only, e o decoder-only processa palavra por palavra.
- B) Está certo em parte: as camadas empilhadas guardam um estado que passa de token a token, como na RNN.
- C) Está errado: o processamento segue em paralelo, com a posição de cada elemento, e a máscara limita o que cada um vê.
- D) Está errado: o Transformer descarta a ordem das palavras, e a máscara apenas reduz o número de tokens calculados.

## 6. Em "O cachorro que mora na casa azul correu", ao prever "correu", o modelo dá mais peso a "cachorro" do que a "azul". Como as peças se dividem nesse resultado?
- A) A máscara bloqueia "azul" e os demais tokens irrelevantes, e a atenção calcula os pesos dos restantes.
- B) O feedforward position-wise compara as posições liberadas pela máscara e escolhe o token mais útil.
- C) A LayerNorm mantém os valores equilibrados e, com isso, reduz o peso dos tokens liberados menos úteis.
- D) Os dois passam pela máscara, e a atenção avalia quais dos anteriores ajudam a prever o próximo.

## 7. Para economizar, uma equipe troca as várias heads por uma só, ainda com a máscara causal. O que a aula indica que ela perde?
- A) A cobertura do histórico, porque cada head recebe um trecho diferente da sequência anterior.
- B) Os diferentes olhares sobre os mesmos vetores, porque cada head aprende uma relação própria.
- C) A rapidez do cálculo, porque as heads rodam ao mesmo tempo e dividem entre si a mesma conta.
- D) A visão do passado distante, porque uma head sozinha alcança os tokens mais próximos.

## 8. Alguém propõe tirar a etapa feedforward do bloco, argumentando que a atenção já juntou o contexto. O que se perderia?
- A) A troca de informação entre posições, porque é nessa etapa que um token recebe o contexto dos outros.
- B) A informação de ordem, porque é nessa etapa que cada token recebe a posição dele na sequência.
- C) A transformação individual de cada posição, que capta padrões não lineares e combina significados.
- D) O controle de escala, porque é nessa etapa que os valores são mantidos longe de explosões.

## 9. Em um modelo com muitas camadas, os valores explodem ou morrem durante o treino, e o que as primeiras camadas viram se perde no caminho. Qual peça cuida de cada sintoma?
- A) A LayerNorm equilibra os valores, e a conexão residual leva o resultado adiante e preserva a informação.
- B) A conexão residual equilibra os valores, e a LayerNorm leva o resultado adiante e preserva a informação.
- C) A LayerNorm cuida dos dois: ao equilibrar os valores, ela preserva o que as primeiras camadas viram.
- D) A conexão residual cuida dos dois: ao somar as saídas, ela equilibra os valores e preserva a informação.

## 10. Alguém diz que o mascaramento do BERT e a máscara do GPT são a mesma técnica. Por que não são?
- A) Os dois escondem tokens futuros, mas o BERT esconde menos deles porque também olha para a direita.
- B) O BERT usa a mesma matriz triangular, mas só nas camadas finais, depois de ler nos dois sentidos.
- C) O MLM atua na inferência, e a máscara causal atua no treino, para evitar que o modelo veja a saída.
- D) O MLM oculta palavras para o modelo deduzir pelos dois lados, e a causal bloqueia o que vem à frente.
