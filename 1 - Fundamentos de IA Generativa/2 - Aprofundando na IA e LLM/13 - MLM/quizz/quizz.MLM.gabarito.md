# Gabarito — MLM

## 1. Classificar tickets por assunto: CLM ou MLM?
**Correta: C**
**Por quê:** a MLM treina preenchendo lacunas com o contexto dos dois lados, e o professor diz que isso a torna ótima para compreensão de texto: perceber de que assunto o texto trata (assunto A ou assunto B). Classificar tickets é uma tarefa de compreensão.
- **A:** a máscara causal da CLM faz o contrário: deixa o modelo olhar só para trás, nunca para frente.
- **B:** prever a próxima palavra é o treino que favorece a geração de texto; para compreensão a aula aponta a MLM.
- **D:** o pré-treinamento com MLM não usa rótulos; o alvo é a própria palavra escondida.
**Conceito:** MLM é forte em compreensão (escolha prática)

## 2. Por que MLM não é a escolha natural para chatbot
**Correta: A**
**Por quê:** uma conversa tem relação forte com a palavra anterior; gerar é construir a frase linearmente, para frente. A MLM foi treinada para fechar lacunas com acesso aos dois lados, objetivo que não coincide com esse fluxo.
- **B:** a máscara causal é da CLM, não da MLM, e ela esconde o que vem depois, não o que vem antes.
- **C:** mascara-se só uma fração pequena justamente para sobrar contexto; o modelo aprende bem a língua, só que voltado a compreensão.
- **D:** a MLM é não supervisionada e dispensa rótulos humanos.
**Conceito:** limitação da MLM para geração

## 3. Por que mascarar só uma fração pequena
**Correta: D**
**Por quê:** o professor insiste que não se mascara metade da frase, só uma parte das palavras, de forma aleatória. Com contexto suficiente o modelo consegue inferir o que falta, e as lacunas ainda o obrigam a aprender relações entre as palavras.
- **A:** o backpropagation não tem esse limite; o motivo é preservar contexto, não restrição do ajuste de pesos.
- **B:** o treino continua não supervisionado com qualquer quantidade de máscaras: o alvo sempre vem do próprio texto.
- **C:** a quantidade de máscaras não muda o tipo de tarefa; o que torna a MLM voltada a compreensão é o preenchimento bidirecional.
**Conceito:** taxa de mascaramento e contexto

## 4. Afirmação INCORRETA sobre MLM
**Correta: B**
**Por quê:** as palavras são mascaradas aleatoriamente; ninguém escolhe quais são importantes. Se fosse preciso alguém indicar, o treino perderia a vantagem de rodar sozinho sobre o texto cru.
- **A:** verdadeira: o professor fala em mascarar palavras aleatoriamente durante o treinamento.
- **C:** verdadeira: a previsão é comparada com a palavra original escondida, e a diferença gera o ajuste.
- **D:** verdadeira: na MLM a máscara vem no meio do texto, não só no final.
**Conceito:** como as máscaras são escolhidas

## 5. Corpus cru e sem marcação: dá para treinar com MLM?
**Correta: A**
**Por quê:** CLM e MLM são não supervisionados: o próprio texto prepara a tarefa. Na MLM, esconde-se uma palavra e ela mesma é o valor esperado; não há rótulo externo nem pessoa acompanhando.
- **B:** inverte a ordem: o pré-treinamento vem primeiro, sobre texto cru, e o fine-tuning vem depois (assunto da próxima aula).
- **C:** é o contrário: dispensar rótulos é o que permite o aprendizado geral, sem se limitar a uma tarefa, como visto na aula de pré-treinamento.
- **D:** a aula diz que as duas abordagens dispensam rótulos; a palavra certa é a que foi escondida.
**Conceito:** MLM é não supervisionada

## 6. A analogia da busca de documentos
**Correta: D**
**Por quê:** ao procurar documentos sobre um assunto, o olho bate em palavras-chave no meio do texto para saber se aquele é o tema. A MLM faz algo parecido: usa pistas distribuídas pela sequência, fecha as lacunas e com isso entende de que assunto o texto trata.
- **A:** ler da esquerda para a direita é o jeito da CLM, a abordagem com que a analogia contrasta.
- **B:** separar em caixinhas é a ideia de rotular, que o pré-treinamento dispensa.
- **C:** a analogia é sobre interpretar um texto existente, não sobre gerar um novo; gerar é o ponto fraco da MLM.
**Conceito:** analogia da leitura de documentos

## 7. "O [MASK] hoje está muito azul": que contexto cada uma usa
**Correta: C**
**Por quê:** a MLM é bidirecional: usa o que vem antes ("O") e o que vem depois ("hoje está muito azul"). A CLM, ao prever a palavra seguinte a "O", só pode usar o que está à esquerda.
- **A:** o processamento em paralelo não libera o contexto futuro na CLM; a máscara causal o esconde.
- **B:** inverte as duas: quem vê o lado direito é a MLM, e a CLM nunca usa o que vem depois.
- **D:** vale só para a CLM; na MLM a frase inteira está disponível, com lacunas, e não está sendo gerada.
**Conceito:** contexto bidirecional x causal

## 8. "Máscara" na CLM e na MLM
**Correta: B**
**Por quê:** na CLM, a máscara causal faz o modelo olhar só para trás, nunca para frente. Na MLM, a máscara tampa algumas palavras no meio da frase, e o modelo usa os dois lados para adivinhá-las.
- **A:** inverte os papéis das duas máscaras.
- **C:** a CLM não tampa palavras aleatórias; a diferença é de direção do contexto, não só de quantidade.
- **D:** nenhuma das máscaras marca rótulo ou palavra-chave; a palavra-chave aparece só na analogia da busca de documentos.
**Conceito:** máscara causal x máscara da MLM (ligação com a aula de pré-treinamento)

## 9. O sentido de "banco" definido por palavras à direita
**Correta: D**
**Por quê:** a pista que resolve o sentido ("olhando o rio") vem depois de "banco". A MLM aprendeu a considerar o que vem antes e o que vem depois; a CLM, só o que veio antes.
- **A:** a CLM usada nos modelos atuais tem processamento em paralelo, como lembrado na aula de pré-treinamento; o limite dela é a direção do contexto.
- **B:** o pré-treinamento com MLM não usa rótulos de sentido.
- **C:** as máscaras são aleatórias, não escolhidas por serem palavras ambíguas.
**Conceito:** contexto bidirecional na compreensão

## 10. A MLM troca o método de ajuste dos pesos?
**Correta: A**
**Por quê:** o professor diz que, depois de mascarar, o processo é muito parecido: compara-se o previsto com o esperado e ajustam-se pesos e vieses por backpropagation. O que muda entre CLM e MLM é só a estratégia de criar a tarefa.
- **B:** o erro vem só das posições mascaradas, mas os pesos e vieses são da rede inteira, não de uma posição; o backpropagation ajusta a rede toda.
- **C:** a aula não restringe o backpropagation a camadas de atenção; o ajuste vale para os pesos e vieses da rede.
- **D:** o ajuste é igual, mas o valor esperado muda: na MLM é a palavra escondida no meio da frase, não a palavra seguinte.
**Conceito:** o ciclo de treino é o mesmo da CLM
