# Quizz — Pré treinamento

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 12
**Base:** material da aula

---

## 1. Uma equipe tem dez bilhões de tokens de texto da web, sem nenhuma anotação humana, e vai fazer pré-treinamento com CLM. O que faz o papel de "resposta certa" em cada passo do treino?
- A) A frase inteira, que o modelo vê de uma vez e depois reconstrói palavra por palavra.
- B) O próximo token do próprio texto, guardado e comparado com a previsão depois dela.
- C) A palavra que mais aparece depois do token atual no corpus, contada como no bigrama.
- D) O token que o próprio modelo julga mais provável, que vai se reforçando a cada passo.

## 2. Uma empresa quer treinar um modelo geral com bilhões de tokens, rotulando cada trecho por assunto antes do treino. Qual é o principal obstáculo, segundo a aula?
- A) Com rótulos, o modelo aprenderia o assunto em vez dos padrões e perderia a fluência.
- B) Rótulos servem a tarefas como a de sentimento do exemplo, e não a classificar assunto.
- C) A mesma frase aceita rótulos diferentes, e o modelo não aprende com rótulos divergentes.
- D) Rotular cada exemplo à mão tem custo muito alto, o que impede escalar a bilhões de tokens.

## 3. Um modelo recém-saído do pré-treinamento escreve um texto fluente e bem estruturado sobre um tema técnico. Pelo que a aula diz, o que isso indica?
- A) Que ele domina os padrões da língua, o que não quer dizer que entenda o assunto do texto.
- B) Que o tema apareceu muito no corpus, e por isso o modelo passou a entender o assunto.
- C) Que ele aprendeu o conteúdo técnico, porque reproduzir a estrutura exige entender o tema.
- D) Que a máscara causal o deixou consultar o fim do texto antes de começar a escrevê-lo.

## 4. No treino com CLM sobre a frase "O cachorro correu para o parque", o modelo vai prever a palavra "para". Quais palavras ele pode usar?
- A) A frase inteira menos "para", já que só o token-alvo fica escondido durante o treino.
- B) "O parque", que vem depois e ajuda a deduzir qual preposição cabe naquele ponto.
- C) Só "O cachorro correu", as palavras à esquerda do ponto que está sendo previsto.
- D) Apenas "correu", o token imediatamente anterior, como acontecia no bigrama.

## 5. Por que faz sentido um modelo que vai gerar texto ser treinado olhando só o contexto à esquerda?
- A) Porque olhar para a direita custaria mais processamento, e a máscara economiza memória.
- B) Porque as palavras da direita não influenciam o sentido de uma frase em português.
- C) Porque o positional encoding só registra as posições anteriores ao token atual.
- D) Porque, ao gerar, ele só tem o que já escreveu: o resto da frase ainda não existe.

## 6. No treino, o modelo previu "portão" onde o texto tinha "parque". O que acontece em seguida?
- A) A perda mede a distância da previsão ao token real, e o backpropagation ajusta os pesos.
- B) O token "portão" sai do vocabulário do modelo, para não ser previsto de novo naquele contexto.
- C) Um anotador marca a resposta como errada, e esse rótulo entra no próximo lote de treino.
- D) A última camada é ajustada sozinha, porque foi ela que escolheu o token errado na saída.

## 7. Duas previsões erraram o mesmo token. A primeira deu 40% de chance à palavra certa; a segunda, 2%. Como a Cross Entropy Loss trata as duas?
- A) Iguais, porque as duas trocaram o token e a perda registra apenas se houve erro.
- B) A primeira tem perda maior, porque espalhou a probabilidade em vez de decidir.
- C) A segunda tem perda maior, porque deu menos probabilidade ao token que vinha.
- D) A segunda tem perda menor, porque errou com pouca confiança e o ajuste é suave.

## 8. Por que, segundo a aula, dado de texto virou "ouro" para as big techs?
- A) Porque cada resposta de um chat precisa consultar o corpus de treino na hora de gerar.
- B) Porque o pré-treino depende de volume, e a maior parte da web já virou token de treino.
- C) Porque dados de redes sociais já vêm rotulados pelos usuários, com curtidas e reações.
- D) Porque compute ficou barato, e a qualidade do modelo passou a depender só dos dados.

## 9. A aula compara a CLM com o bigrama. Qual é a semelhança e qual é a diferença?
- A) Os dois preveem a próxima palavra pelas anteriores; a CLM faz isso com toda a arquitetura do Transformer.
- B) Os dois olham a palavra anterior e a seguinte; a CLM faz isso em paralelo, com várias camadas de atenção.
- C) Os dois contam a frequência de pares de palavras; a CLM usa uma tabela de pares muito maior e mais variada.
- D) Os dois exigem dados rotulados por humanos; a CLM gera esses rótulos de forma automática durante o treino.

## 10. Uma equipe quer um modelo de atendimento para um banco. Por que partir de um modelo pré-treinado genérico em vez de treinar do zero só com as conversas do banco?
- A) Porque o modelo genérico já recebeu rótulos com os assuntos bancários durante o pré-treino.
- B) Porque treinar do zero exigiria rotular as conversas, e o pré-treino é a única etapa sem rótulo.
- C) Porque o modelo genérico já conhece os produtos do banco, que aprendeu nos textos da web.
- D) Porque o pré-treino já deu os padrões gerais da língua, e o fine-tuning adapta o modelo à tarefa.
