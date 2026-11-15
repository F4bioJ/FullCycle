# Quizz — RLHF

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 15
**Base:** material da aula (Q1, Q2, Q5 e Q9 ligam com as aulas 12 e 14)

---

## 1. Uma equipe já fez o fine tuning supervisionado da aula 14, com pares de pergunta e resposta. O que o RLHF acrescenta a esse processo?
- A) Mais pares escritos por especialistas, agora cobrindo um domínio técnico mais estreito.
- B) Um treino só de parte dos parâmetros, o que deixa o ajuste mais leve e mais barato.
- C) Preferências humanas entre respostas do próprio modelo, usadas para guiar o ajuste.
- D) Um novo pré-treino com textos revisados por humanos, para limpar os vieses da base.

## 2. O chatbot de uma empresa, feito sobre um modelo só pré-treinado, às vezes ofende minorias. Pela aula, de onde vem isso e o que ajuda?
- A) Vem de conteúdo ofensivo nas bases de treino; um ajuste com feedback humano ajuda a evitá-lo.
- B) Vem do acaso ao prever a próxima palavra; mais texto da internet no pré-treino ajuda a diluí-lo.
- C) Vem de overfitting em poucos exemplos ofensivos; um fine tuning parcial com LoRA ajuda a corrigi-lo.
- D) Vem da janela de contexto curta, que perde a regra de ser educado; um prompt maior ajuda a mantê-la.

## 3. Por que a etapa 2 pede ao humano que compare respostas, em vez de escrever a resposta certa como na etapa 1?
- A) Comparar deixa a escolha objetiva, porque lado a lado fica claro qual resposta vence.
- B) Comparar sai mais barato, e por isso a etapa 2 substitui o SFT nos modelos atuais.
- C) Escrever respostas causava overfitting, e o ranking aumenta a variedade dos exemplos.
- D) Tarefas abertas costumam ter várias respostas aceitáveis, umas melhores que outras.

## 4. Na etapa 3, o PPO ajusta o modelo gerador a partir de respostas novas. O que diz ao PPO se cada resposta está boa?
- A) Um avaliador humano, que dá nota a cada resposta nova enquanto o treino acontece.
- B) O modelo de recompensa da etapa 2, que prevê quanto os humanos aprovariam a resposta.
- C) A cross entropy entre a resposta gerada e os pares escritos por humanos na etapa 1.
- D) A probabilidade da próxima palavra, que o PPO tenta deixar a mais alta possível.

## 5. Um modelo só pré-treinado com CLM escreve com fluência, mas se repete e se estende demais, como o ChatGPT do lançamento. Qual a causa, segundo a aula?
- A) O tokenizer quebrou palavras raras, e o modelo perdeu a noção do sentido das frases.
- B) Prever a próxima palavra gera texto plausível, mas não garante concisão nem rumo claro.
- C) A janela de contexto curta faz o modelo esquecer o que já disse e repetir as ideias.
- D) O pré-treino teve dados de menos, e o modelo decorou as frases mais frequentes.

## 6. Sobre os efeitos de alinhar um LLM com RLHF, qual afirmação está INCORRETA?
- A) O modelo passa a dizer que não sabe algo, quando apropriado, em vez de só agradar.
- B) O modelo tende a seguir melhor as instruções do usuário, em vez de inventar.
- C) O modelo tende a alucinar menos, porque recebeu mais instrução sobre como responder.
- D) O modelo tende a saber mais sobre os assuntos, porque recebe respostas melhores de humanos.

## 7. Uma atualização do GPT o deixou "puxa-saco", e a seguinte o deixou mais comum. O que esse episódio mostra?
- A) O pré-treino foi refeito com outra base, e isso mudou o tom do modelo nas versões.
- B) A versão paga recebeu mais parâmetros, e modelos maiores tendem a agradar mais.
- C) Mudar o ajuste do alinhamento altera bastante o comportamento percebido do modelo.
- D) O algoritmo PPO foi trocado na atualização, e é o algoritmo que define o tom do modelo.

## 8. O professor sugere pedir de forma direta, como quem fala com uma máquina, em vez de cheio de cortesia e rodeios. Por que isso tenderia a dar respostas melhores?
- A) O pedido sinaliza que não é para priorizar agradar, e o modelo se estende e inventa menos.
- B) O prompt curto gasta menos tokens, e sobra mais espaço para o modelo pensar na resposta.
- C) O pedido direto aciona o modelo de recompensa durante a conversa, que pune respostas longas.
- D) Um pedido educado lembra os pares do SFT, e o modelo copia o formato longo daqueles exemplos.

## 9. Que diferença a aula aponta entre o Instruction Tuning e o fine tuning da aula 14?
- A) O Instruction Tuning usa instruções geradas pelo pré-treino, em vez de instruções humanas.
- B) O Instruction Tuning vem depois do PPO, como um retoque final no comportamento do modelo.
- C) O Instruction Tuning usa instruções de tarefas variadas para deixar o modelo generalista.
- D) O Instruction Tuning troca os pares por rankings, ocupando o lugar da etapa de SFT.

## 10. Avaliadores recebem três respostas muito parecidas sobre a teoria da relatividade e escolhem cada um uma diferente. Qual leitura está de acordo com a aula?
- A) Isso se resolve com mais avaliadores, porque o RLHF compensa o viés de cada um.
- B) A escolha reflete preferências subjetivas, que o professor não vê como algo ruim.
- C) O Reward Model descarta empates, então só as respostas alucinadas pesam no treino.
- D) Isso indica falha do SFT, que deveria ter deixado só uma resposta possível por pergunta.
