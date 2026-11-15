# Quizz — Tokens (avançado)

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 5
**Base:** material avançado

---

## 1. Um novo tokenizador gera o dobro de tokens para o mesmo texto em português. Mantido o resto do modelo, o que acontece com o custo da atenção por camada?
- A) Dobra: há o dobro de tokens para processar, e o custo cresce na mesma proporção, de forma linear.
- B) Quadruplica: cada token se compara com todos, então os pares crescem com o quadrado de n.
- C) Fica igual: a atenção opera sobre o conteúdo do texto, e o conteúdo em si não mudou.
- D) Cai pela metade: tokens menores carregam menos informação e pedem menos comparação entre si.

## 2. Uma equipe dobra o vocabulário do tokenizador, de 100 mil para 200 mil tokens. O que se ganha e o que se perde?
- A) Ganha embeddings mais ricos em cada token; perde em velocidade do tokenizador, que aplica mais merges.
- B) Ganha sequências mais curtas; perde com a tabela de embeddings maior, enquanto a saída mantém o tamanho.
- C) Ganha sequências mais curtas e atenção mais barata; perde com tabela de embeddings e saída maiores.
- D) Ganha embeddings mais ricos nos tokens comuns; perde porque a atenção fica mais cara por token.

## 3. O vocabulário de um modelo contém um fragmento que o tokenizador reconhece, mas que o modelo trata de forma errática. Qual é a explicação mais coerente?
- A) O tokenizador foi treinado antes, em outro corpus, e o modelo praticamente não viu esse fragmento.
- B) O fragmento entrou no vocabulário por engano na criação, e o modelo o trata como um token de erro.
- C) A atenção dá peso zero a fragmentos pouco usados, então ele some do cálculo e o modelo se perde.
- D) O tokenizador foi treinado junto com o modelo, mas o fragmento surgiu de uma merge calculada errado.

## 4. Uma equipe reordena a lista de merges de um tokenizador BPE já treinado, sem mexer no vocabulário. O que isso provoca?
- A) Nada muda: o vocabulário é o mesmo, e o resultado só depende de quais tokens existem nele.
- B) O modelo precisa ser treinado de novo, porque os IDs deixam de corresponder aos embeddings.
- C) Só a velocidade muda, pois a ordem define a rapidez com que o tokenizador busca cada par.
- D) Palavras podem ser segmentadas de outro modo, pois a ordem decide qual fusão ocorre primeiro.

## 5. Dois tokenizadores BPE são treinados no mesmo corpus, sem nenhum emoji raro. Um deles lê esse emoji sem problema, e o outro não. Qual é a diferença mais provável?
- A) Um deles tem vocabulário maior e, por isso, já inclui o emoji entre os seus tokens.
- B) Um deles usa uma etapa de pré-processamento que cria símbolos para os caracteres que faltam.
- C) Um começa dos 256 valores de byte, e o outro começa de caracteres, sem símbolo para o emoji.
- D) Um deles foi treinado depois do modelo e cria tokens na hora para o que não conhece.

## 6. No meio de uma frase, o GPT-4 tokeniza " é" (espaço mais "é") como um token só, apesar de o "é" ter mais de um byte. Qual é a explicação?
- A) O tokenizador converte o acento em letra simples antes de começar, e o byte extra deixa de existir.
- B) Os bytes do "é" e o espaço foram fundidos em merges, por essa sequência ser muito frequente.
- C) A pré-tokenização entrega o "é" como unidade pronta, e as merges só tratam o que sobra da frase.
- D) Os bytes do "é" viram um símbolo do vocabulário por regra do UTF-8, antes de qualquer contagem.

## 7. Um desenvolvedor mede o custo de um prompt e nota que a mesma palavra rende mais tokens no começo do texto, sem espaço antes, do que no meio de uma frase. Qual é a explicação mais coerente?
- A) O espaço vem colado à palavra, e a versão com espaço pode ser frequente a ponto de virar token único.
- B) Palavras no começo do texto são tratadas como nomes próprios pelo tokenizador e divididas em mais pedaços.
- C) O tokenizador ignora o espaço, e a diferença vem de a atenção tratar o começo do texto de outro jeito.
- D) A pré-tokenização apaga o espaço e o devolve depois, o que cria tokens extras no começo do texto.

## 8. Uma empresa vai trocar o modelo do seu chat em português por outro com tokenizador mais novo e quer manter a previsão de custo. O que é mais coerente?
- A) Manter a previsão, porque a cobrança é por token e o texto dos clientes continua sendo o mesmo.
- B) Aumentar a previsão, porque o tokenizador novo corta as palavras em pedaços menores e rende mais tokens.
- C) Recalcular pelas palavras, que são a medida estável entre os modelos e não mudam com o tokenizador.
- D) Reestimar com o novo tokenizador em amostras reais, pois a contagem de tokens muda entre modelos.

## 9. Um modelo afirma que 9.11 é maior que 9.9. Qual hipótese ligada à tokenização é mais coerente?
- A) Cada número vira um token próprio, e os embeddings de 9.11 e 9.9 ficaram próximos no treino.
- B) O número chega em pedaços, como 9, . e 11, e o modelo compara pedaços, e não o valor.
- C) A pré-tokenização separa números da pontuação e descarta o ponto, então o modelo compara 911 com 99.
- D) O modelo lê o número algarismo por algarismo, e 9.11 tem mais algarismos, então parece maior.

## 10. Uma empresa brasileira nota que termos jurídicos raros em português custam muito mais tokens do que palavras comuns do mesmo tamanho. Qual é a explicação mais coerente?
- A) Termos técnicos são divididos em prefixo, raiz e sufixo, e cada uma dessas partes gera um token a mais.
- B) O tokenizador parte em mais pedaços as palavras que o modelo viu pouco durante o próprio treino.
- C) As merges seguem a frequência no corpus do tokenizador, e um termo incomum ali se parte sem seguir a morfologia.
- D) O embedding desses termos é maior, então cada um ocupa mais de uma posição na janela de contexto.
