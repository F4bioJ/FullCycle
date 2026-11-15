# Gabarito — Redes neurais profundas

## 1. Por que bigramas e Markov não deram o "boom"
**Correta: B**
**Por quê:** Esses modelos eram usados "muito para algumas aplicações muito específicas", e, ao pensar em aplicações maiores, havia "dificuldade em escalar tanto esses modelos quanto a criação de novos".
- **A:** Bigramas e Markov são estatística leve. As GPUs entram na história como motor das redes profundas.
- **C:** Esses modelos não usam embeddings: trabalham com contagens e probabilidades.
- **D:** As aulas anteriores mostram o oposto: o texto gerado era fragmentado e pouco fluido.
**Conceito:** limite de escala dos modelos estatísticos

## 2. O efeito colateral da profundidade
**Correta: D**
**Por quê:** Antes "estavam mais claros quais eram os passos"; nas redes profundas "você começa a se perder nisso, são tantos passos" e tantos lugares por onde a decisão passou.
- **A:** É o desvanecimento de gradiente, assunto da aula de RNNs. Aqui o professor não fala em instabilidade de treino.
- **B:** A aula não diz isso. Os rótulos, quando existem, referem-se à saída.
- **C:** O problema de ordem vem de como os vetores são combinados, não da quantidade de camadas.
**Conceito:** profundidade e perda de rastreabilidade

## 3. Bits x embedding
**Correta: C**
**Por quê:** Em bits, representa-se "R sendo alguma coisa, E outra coisa", letra a letra. No embedding, a palavra vira um vetor e "palavras com significados semelhantes" ficam com "um valor próximo".
- **A:** A aula não trata de compressão ou de espaço ocupado.
- **B:** Está invertido: quem carrega a relação de significado é o embedding.
- **D:** O vetor não é uma versão imprecisa dos bits. É outra forma de representar, voltada à semelhança.
**Conceito:** embedding como representação por similaridade

## 4. Afirmação INCORRETA sobre a retomada
**Correta: A**
**Por quê:** A aula diz apenas que a GPU "mostrou que tinha um poder muito grande" para algoritmos de IA. Não diz que ela foi criada para isso, e não foi: as GPUs nasceram para processamento gráfico e depois foram aproveitadas no treino de redes.
- **B:** Correta: o crescimento dos dados "vem muito com internet, redes sociais, sensores e sistemas digitais".
- **C:** Correta: "dado, no final das contas, é a matéria-prima para uma IA funcionar".
- **D:** Correta: "o mercado começa a olhar pra isso com um pouco mais de interesse".
**Conceito:** dados + poder computacional

## 5. O caminho na feedforward
**Correta: C**
**Por quê:** "Você recebe uma entrada, transforma essa sequência de palavras em embeddings, e depois você propaga isso pra frente, camada por camada, até chegar numa saída", como a previsão da próxima palavra.
- **A:** Os embeddings vêm antes das camadas, e a saída descrita é a previsão da próxima palavra.
- **B:** Não há retorno: o fluxo é unidirecional, "você não tem dados que vão e voltam".
- **D:** Estados ocultos e emissão são o vocabulário do HMM, da aula anterior.
**Conceito:** fluxo unidirecional da feedforward

## 6. O que a janela de 4 palavras usa
**Correta: A**
**Por quê:** "Essa rede vai combinar os vetores das quatro palavras para conseguir chegar na quinta palavra." O que veio antes da janela não entra.
- **B:** Não existe visão da frase toda: a janela é um corte fixo.
- **C:** Olhar só a palavra vizinha é o bigrama.
- **D:** Um resumo do que veio antes é o estado de uma RNN. A feedforward não o tem.
**Conceito:** janela de contexto fixa

## 7. Janela fixa x bigrama
**Correta: D**
**Por quê:** A janela é "uma evolução do que a gente falou lá atrás da construção de duas palavras", mas o contexto continua limitado a "um número fixo" de palavras anteriores, e a dependência que atravessa um parágrafo se perde.
- **A:** Ela não olha a frase inteira, só o trecho que cabe na janela.
- **B:** A previsão é aprendida a partir dos vetores, sem regras escritas à mão.
- **C:** Ela não guarda memória. Lentidão por processar em sequência é o problema das RNNs.
**Conceito:** contexto limitado da janela fixa

## 8. Por que as duas frases se confundem
**Correta: B**
**Por quê:** "A correlação de palavras vai ser muito próxima": ao somar ou concatenar os embeddings, a rede chega a "um resultado muito aproximado" nos dois casos, segundo a aula.
- **A:** As duas frases cabem na janela. O problema é a combinação dos vetores, não um corte.
- **C:** A confusão não vem de "cachorro" e "homem" serem parecidos, e sim de as duas frases terem as mesmas palavras.
- **D:** A falta de memória é outra limitação, citada à parte. O problema de ordem acontece dentro da própria janela.
**Conceito:** a ordem das palavras se perde na combinação

## 9. "E quanto custa?" na terceira mensagem
**Correta: D**
**Por quê:** O modelo "só sabe o que você está falando com ele ali naquele momento" e "não consegue ver o que ele processou anteriormente". O produto citado antes ficou fora da janela.
- **A:** Embeddings representam palavras. Não guardam o histórico da conversa.
- **B:** Quatro palavras não alcançam uma mensagem anterior, e a janela não vira memória.
- **C:** "Custa" e "produto" tendem a ser próximos. O problema é o produto nem estar na entrada.
**Conceito:** falta de memória

## 10. Tarefas difíceis para o modelo
**Correta: A**
**Por quê:** O professor cita que, sem memória, fica difícil usar o modelo "onde você precisa de coerência ao longo de uma conversa ou de uma tradução", um diálogo ou um resumo.
- **B:** A aula não cita essas tarefas como dificuldade da feedforward.
- **C:** Prever a próxima palavra dentro da janela é exatamente o que o modelo faz.
- **D:** A similaridade entre vetores é apresentada como um ganho dos embeddings.
**Conceito:** limites da feedforward em tarefas de contexto longo
