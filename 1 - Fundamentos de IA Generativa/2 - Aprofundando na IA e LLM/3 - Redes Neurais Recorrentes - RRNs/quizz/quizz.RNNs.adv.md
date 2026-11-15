# Quizz — RNNs (avançado)

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 3
**Base:** material avançado

---

## 1. A RNN usa os mesmos pesos em todos os passos. Qual é a consequência disso?
- A) Ela lê sequências de qualquer tamanho com poucos parâmetros, mas repete o mesmo fator no gradiente.
- B) Ela perde a noção de ordem, pois todas as posições ficam equivalentes.
- C) Ela processa todos os passos em paralelo, pois os pesos não mudam.
- D) Ela precisa de uma janela fixa para saber onde a sequência termina.

## 2. O que o estado de uma RNN guarda?
- A) Os gradientes calculados nos passos anteriores da sequência.
- B) As últimas palavras lidas, em uma fila de tamanho fixo.
- C) Um vetor de ativações que resume o que foi lido até ali.
- D) A categoria gramatical mais provável da palavra atual.

## 3. Em que momento o desvanecimento de gradiente atua?
- A) No uso do modelo, quando o estado perde precisão a cada palavra lida.
- B) No treino, quando o sinal de erro chega fraco demais aos passos distantes.
- C) No uso do modelo, quando os embeddings das palavras antigas são apagados.
- D) No treino, quando os pesos crescem até ultrapassar o limite da GPU.

## 4. Durante o treino de uma RNN, a perda dá saltos enormes e depois vira NaN. Qual é o diagnóstico e o primeiro remédio?
- A) Desvanecimento de gradiente; trocar a RNN por uma LSTM.
- B) Overfitting; reduzir o número de exemplos de treino.
- C) Explosão de gradiente; aplicar o corte da norma do gradiente.
- D) Vetor de estado pequeno; aumentar o tamanho do estado.

## 5. Por que o estado de célula da LSTM atenua o desvanecimento?
- A) Porque ele é recalculado do zero a cada passo, sem acumular erro.
- B) Porque ele guarda as palavras originais, e não um resumo delas.
- C) Porque ele usa pesos diferentes em cada passo da sequência.
- D) Porque ele é atualizado por soma, e com a porta perto de 1 o gradiente passa quase intacto.

## 6. Qual gargalo do seq2seq com RNNs levou ao mecanismo de atenção?
- A) O decoder gerava a saída em paralelo e perdia a ordem das palavras.
- B) A frase inteira era comprimida em um único vetor de tamanho fixo.
- C) O encoder usava portas demais e ficava lento em frases curtas.
- D) O vocabulário de saída era pequeno para os idiomas traduzidos.

## 7. Uma equipe treina uma LSTM e tira o corte de gradiente, "porque a LSTM já resolveu os problemas de gradiente". A perda passa a dar saltos e vira NaN. O que aconteceu?
- A) A porta de esquecimento travou em 0 e zerou o estado de célula a cada passo.
- B) O estado de célula guardou palavras demais e estourou a memória da GPU.
- C) A LSTM atenua o desvanecimento, mas ainda pode sofrer explosão de gradiente.
- D) A LSTM sofre mais desvanecimento que a RNN simples, por ter três portas.

## 8. Qual descrição de uma porta da LSTM está correta?
- A) Um vetor de valores entre 0 e 1, aprendido, que regula quanto de cada posição passa.
- B) Um interruptor que liga ou desliga cada posição da memória a cada palavra lida.
- C) Uma regra definida pelo projetista que diz quais palavras devem ser lembradas.
- D) Um contador que apaga o estado de célula depois de um número fixo de palavras.

## 9. É preciso prever consumo de energia a partir de séries curtas de sensores, rodando em um dispositivo com pouca memória. Qual escolha segue o material?
- A) Um Transformer grande, que aplica atenção sobre a série inteira de uma vez.
- B) Uma GRU, com menos parâmetros que a LSTM e desempenho em geral parecido.
- C) Uma RNN simples, pois séries curtas não têm problema algum de gradiente.
- D) Um HMM, pois as leituras do sensor cabem bem em poucas categorias discretas.

## 10. Qual afirmação está INCORRETA?
- A) A conexão residual do Transformer usa a ideia do estado de célula: somar para o gradiente passar.
- B) Na RNN, a informação de um token pode precisar atravessar n passos para alcançar outro.
- C) Resumir um documento longo em um único embedding traz o mesmo gargalo do seq2seq.
- D) A LSTM processa os passos em paralelo, pois o estado de célula é atualizado por soma.
