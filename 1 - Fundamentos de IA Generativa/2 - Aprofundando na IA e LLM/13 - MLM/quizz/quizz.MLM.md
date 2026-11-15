# Quizz — MLM

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 13
**Base:** material da aula (Q8 liga com a máscara causal da aula 12 - Pré treinamento)

---

## 1. Uma empresa quer um modelo que leia tickets de suporte e diga de que assunto cada um trata. Entre um modelo pré-treinado com CLM e um com MLM, qual se encaixa melhor e por quê?
- A) CLM, porque a máscara causal permite que ele veja o ticket inteiro de uma vez antes de decidir.
- B) CLM, porque prever a próxima palavra é o treino que mais ensina a separar textos por assunto.
- C) MLM, porque aprendeu a usar pistas dos dois lados de cada palavra, o que favorece entender o texto.
- D) MLM, porque foi treinado com tickets rotulados por assunto e já conhece essas categorias.

## 2. Por que um modelo pré-treinado só com MLM não é a escolha natural para um chatbot?
- A) Gerar é montar a frase para frente, a partir da anterior, e ele treinou fechando lacunas vendo os dois lados.
- B) A máscara causal aplicada na MLM esconde o contexto anterior, e sem ele o modelo não consegue continuar a frase.
- C) Mascarar parte das palavras destrói tanta informação que o modelo não aprende a estrutura da língua.
- D) O treino com MLM depende de rótulos humanos, e quase não há conversas rotuladas para treinar um chatbot.

## 3. Por que, no pré-treinamento com MLM, se mascara só uma fração pequena das palavras, e não metade da frase?
- A) Porque o backpropagation só consegue corrigir os pesos quando poucas posições geram erro ao mesmo tempo.
- B) Porque mascarar muito transformaria o treino em supervisionado, já que alguém teria de conferir as lacunas.
- C) Porque com muitas máscaras o modelo passaria a aprender geração de texto em vez de compreensão.
- D) Porque é preciso sobrar contexto para inferir o que foi escondido, mantendo ainda um desafio a resolver.

## 4. Sobre o pré-treinamento com MLM, qual afirmação está INCORRETA?
- A) As palavras mascaradas são escolhidas aleatoriamente ao longo do treinamento.
- B) Alguém precisa indicar quais palavras de cada frase são as importantes de esconder.
- C) A palavra original que foi escondida serve de valor esperado na hora de medir o erro.
- D) As lacunas podem ficar no meio da frase, e não apenas na última posição.

## 5. Uma equipe tem um corpus enorme de texto cru da web, sem nenhuma marcação. Dá para pré-treinar um modelo com MLM nesse material?
- A) Sim: a própria frase fornece o alvo, porque a palavra escondida é a resposta esperada, sem rótulo externo.
- B) Não direto: antes é preciso um fine-tuning com exemplos rotulados, e só depois vem o pré-treino.
- C) Sim, mas sairá um modelo preso a uma tarefa, porque texto sem rótulo não dá aprendizado geral.
- D) Não: só a CLM dispensa rótulos, porque na MLM alguém precisa dizer qual palavra é a certa.

## 6. O professor compara a MLM com procurar documentos sobre um assunto. O que a analogia quer mostrar?
- A) Que o modelo lê o texto da esquerda para a direita, palavra por palavra, até chegar ao fim.
- B) Que o modelo só decide o assunto depois que alguém classifica os documentos em caixinhas.
- C) Que o modelo aprende a escrever um documento novo a partir das palavras-chave de outro.
- D) Que o modelo usa pistas espalhadas pelo texto, inclusive no meio, para inferir o assunto.

## 7. Na frase "O [MASK] hoje está muito azul", que informação cada abordagem usa para chegar à palavra dessa posição?
- A) As duas usam a frase inteira, porque o Transformer processa todos os tokens em paralelo.
- B) A MLM usa só "O"; a CLM usa "hoje está muito azul", que vem depois da posição.
- C) A MLM usa "O" e também "hoje está muito azul"; a CLM, prevendo a próxima palavra, só tem "O".
- D) As duas usam só "O", porque a palavra seguinte ainda não foi gerada em nenhum dos casos.

## 8. Tanto a CLM quanto a MLM falam em "máscara". Qual é a diferença entre as duas?
- A) Na CLM a máscara esconde palavras aleatórias do meio; na MLM ela esconde o futuro do modelo.
- B) Na CLM a máscara impede o modelo de olhar para frente; na MLM ela tampa palavras e ele vê os dois lados.
- C) Nas duas a máscara tampa palavras aleatórias; muda apenas a fração de palavras escondidas.
- D) Na CLM a máscara marca o rótulo da frase; na MLM ela marca as palavras-chave do documento.

## 9. Em "Ele sentou no banco e ficou olhando o rio", o sentido de "banco" depende de palavras que vêm depois dele. Por que um modelo pré-treinado com MLM tende a captar esse sentido melhor que um treinado com CLM?
- A) Porque a CLM processa as palavras uma de cada vez, sem paralelismo, e perde o contexto inicial.
- B) Porque a MLM recebe um rótulo indicando qual dos sentidos de "banco" está sendo usado.
- C) Porque a MLM sempre mascara as palavras ambíguas, forçando o modelo a estudá-las mais.
- D) Porque no treino a MLM aprendeu a usar também o contexto à direita de cada posição.

## 10. Um colega diz: "Passar da CLM para a MLM exige trocar o método de ajuste dos pesos, porque prever lacunas não usa backpropagation." Qual é a avaliação correta?
- A) Errado: prever, comparar e ajustar por backpropagation é igual; muda a tarefa, isto é, o que fica escondido.
- B) Certo em parte: a MLM usa backpropagation, mas só ajusta os pesos ligados às posições mascaradas.
- C) Errado, mas só em parte: a MLM usa backpropagation, embora apenas nas camadas de atenção.
- D) Errado: o ajuste é igual, e o valor esperado também, já que as duas comparam com a palavra seguinte.
