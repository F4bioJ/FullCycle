# Gabarito — Evolução dos modelos 2 gramas

## 1. Estatística simples x lógica de sim ou não
**Correta: D**
**Por quê:** "Eu ainda estou numa lógica de sim e não, mas com base em probabilidade e não com base em um critério firme." Continua havendo uma escolha, o que muda é o critério: "qual a maior probabilidade".
- **A:** Vetores são assunto de embeddings. O bigrama da aula trabalha com frequência de pares, não com vetores.
- **B:** A aula não descreve uma árvore aprendida. O que muda é o critério de escolha.
- **C:** O modelo continua indo por um caminho de cada vez, o mais provável.
**Conceito:** do critério firme à maior probabilidade

## 2. O exemplo "estou com frio?"
**Correta: B**
**Por quê:** "Você não sabe, você acha": a blusa e a luz são indícios, e a decisão sai do "achômetro", que o professor traduz como probabilidade. É assim que ele apresenta a saída do sim/não.
- **A:** O professor reaproveita esse mesmo exemplo na aula de cadeias de Markov para falar de estados ocultos. Nesta aula, o papel dele é outro.
- **C:** A dependência de longo prazo é ilustrada por outro exemplo: o começo da aula comparado com o tema atual.
- **D:** É o contrário do que o exemplo mostra: mesmo com indícios, não há critério firme.
**Conceito:** decisão por inferência e probabilidade

## 3. "Não ia chegar nem no dia"
**Correta: A**
**Por quê:** Depois de "bom" poderia vir "bombom", "bom ar" e várias outras. Uma lógica de sim/não não tem como escolher, e a probabilidade aponta "dia" porque é o que ocorre "a maior parte das vezes".
- **B:** A aula não discute o tipo de dado da árvore. O problema é a quantidade de continuações possíveis.
- **C:** O bigrama trata "bom" e "dia" como duas palavras e liga uma à outra pela frequência.
- **D:** O bigrama escolhe "dia" sem ver a frase inteira, só pela frequência do par.
**Conceito:** probabilidade resolve o que a regra rígida não resolve

## 4. Texto sobre um gato branco
**Correta: C**
**Por quê:** "Sempre que ele ver gato, ele vai colocar preto." O modelo "não tem noção do que foi dito antes", então o fato de o gato ser branco não chega até a escolha.
- **A:** Para evitar "preto", ele teria de lembrar o tema. O bigrama não guarda memória além do par.
- **B:** A aula descreve a escolha pela combinação mais frequente, não um sorteio entre pares.
- **D:** A aula descreve repetição e incoerência, não travamento.
**Conceito:** repetição por par frequente e falta de memória

## 5. A informação usada depois de "dorme"
**Correta: B**
**Por quê:** O modelo olha "primeira palavra, segunda palavra", sempre o par. Em "preto, dorme" ele "não vê mais o gato"; no passo seguinte, parte de "dorme".
- **A:** Três palavras de contexto já seriam um trigrama. O bigrama não acumula o trecho montado.
- **C:** O sujeito ficou para trás, e o modelo não distingue papéis gramaticais.
- **D:** "Ele não consegue olhar o todo": não há visão da frase inteira, nem ponderada.
**Conceito:** janela de duas palavras

## 6. Afirmação INCORRETA sobre o bigrama
**Correta: D**
**Por quê:** O bigrama não enxerga nenhum dos dois lados: "ela não sabe o que vem depois, mas ela também não sabe o que veio antes". Há "ausência de memória e ausência de projeção".
- **A:** Correta: "você não consegue ter uma memória além do n-grama atual".
- **B:** Correta: "ela tá só olhando padrão estatístico", sem compreender a semântica.
- **C:** Correta: o modelo repete blocos e "começa a não manter uma coerência global".
**Conceito:** ausência de memória e de projeção

## 7. A própria aula como exemplo de longo prazo
**Correta: A**
**Por quê:** O começo da aula "tem conexão com o que eu estou falando agora, mas é uma conexão tão leve que não consegue ser direcionada com uma regra simples de probabilidade estatística".
- **B:** O professor afirma que há conexão. O problema é ela ser fraca, não inexistente.
- **C:** Esse é o exemplo de alucinação da aula 3, não o desta aula.
- **D:** O looping é o sintoma do bigrama no exemplo do gato preto, não o argumento sobre longo prazo.
**Conceito:** dependência de longo prazo

## 8. A mudança conceitual
**Correta: C**
**Por quê:** "A gente para de entender essa tomada de decisão com representação de linguagem direta e começa a criar uma ideia de representação por contexto e criatividade mais do que uma base rígida."
- **A:** A previsão da próxima palavra continua sendo o centro dos modelos de linguagem.
- **B:** É o caminho inverso do descrito: a área saiu das regras rígidas.
- **D:** O professor usa texto por ser mais fácil de explicar. Não fala em trocar de modalidade.
**Conceito:** representação por contexto

## 9. Por que começar pelos bigramas
**Correta: A**
**Por quê:** "Antes da gente chegar nisso, eu preciso explicar como a gente chegou nisso, quais problemas a gente tinha pra ter que ir pra um LLM."
- **B:** A aula não diz isso. Os LLMs são apresentados como resposta às limitações do bigrama, não como soma de bigramas.
- **C:** O bigrama é estatística de pares. A primeira ideia de rede neural é o perceptron (aula 4).
- **D:** O bigrama gera "uma linguagem simples, mas não uma linguagem fluida".
**Conceito:** bigrama como ponto de partida didático

## 10. "Probabilidade muito local e isolada"
**Correta: C**
**Por quê:** O modelo gera "palavra com base na frequência de combinação" com a vizinha. Cada escolha considera só o par, sem relação com o resto do texto.
- **A:** A frequência que conta é a do par, não a da palavra sozinha no texto.
- **B:** O bigrama não avalia frases inteiras. A unidade dele é o par de palavras.
- **D:** A escolha segue a frequência observada, não o acaso.
**Conceito:** probabilidade local do par
