# Quizz — Introdução às diferenças de IA (avançado)

**Capítulo:** 1 - Gen IA · **Aula:** 2
**Base:** material avançado

---

## 1. No pré-treino de um LLM, de onde vem o "rótulo" que diz se o modelo acertou?
- A) De anotadores humanos que marcam a resposta correta de cada frase.
- B) De nenhum lugar: o modelo acha estrutura nos dados sem sinal de acerto.
- C) Do próprio texto: o token seguinte é a resposta de cada exemplo.
- D) De uma recompensa dada pelos usuários depois de cada resposta.

## 2. Um modelo de fraude tem 99,5% de acurácia em uma base em que 0,5% das transações são fraude. O que esse número permite concluir?
- A) Quase nada: responder "normal" para tudo daria o mesmo resultado.
- B) Que o modelo captura praticamente todas as fraudes da base.
- C) Que o modelo sofre de overfitting e precisa de mais dados.
- D) Que o limiar de decisão está alto demais para o negócio.

## 3. A equipe baixa o limiar de fraude de 0,9 para 0,2. O que tende a acontecer?
- A) Precisão e recall sobem juntos, pois o modelo fica mais sensível.
- B) O recall cai, pois menos transações passam do novo limiar.
- C) Nada muda, pois o limiar não altera o score que o modelo calcula.
- D) O recall sobe e os alarmes falsos também, derrubando a precisão.

## 4. Um modelo de fraude vai muito bem na validação e muito mal em produção. Entre as features está "houve estorno". Qual é o diagnóstico mais provável?
- A) Overfitting, pois o modelo decorou os exemplos do treino.
- B) Vazamento de dados, pois o campo só existe depois de a fraude ser confirmada.
- C) Rótulos errados, pois o estorno foi marcado de forma inconsistente.
- D) Classes desbalanceadas, pois há poucos estornos na base.

## 5. A aula disse que a IA generativa aprende "por tentativa e erro, com reforço". O que o material avançado corrige?
- A) O reforço é a etapa principal, mas vem de máquinas e não de pessoas.
- B) O pré-treino é supervisionado por rótulos escritos por especialistas.
- C) O modelo não passa por treino: ele aprende no momento do prompt.
- D) O pré-treino minimiza o erro do próximo token; o reforço é etapa posterior.

## 6. Como o material relaciona o "aluno de múltipla escolha" e o "escritor"?
- A) O escritor usa regras de gramática; o aluno usa probabilidade.
- B) O escritor é uma múltipla escolha sobre o vocabulário, repetida a cada token.
- C) O escritor escolhe entre textos prontos; o aluno compõe a resposta.
- D) O escritor dispensa o treino; o aluno depende de exemplos rotulados.

## 7. Em uma base de imagens, 10% dos cachorros foram rotulados como "humano", sempre do mesmo jeito. A equipe decide dobrar a base mantendo o processo de rotulagem. O que esperar?
- A) O modelo aprende o erro com mais confiança, pois o erro é sistemático.
- B) O erro se dilui, pois mais dados compensam os rótulos ruins.
- C) O modelo passa a ignorar os rótulos e a agrupar por semelhança.
- D) O treino falha, pois a função de perda não converge com ruído.

## 8. Um modelo acerta 99% no treino e 70% no teste. Qual é a leitura correta?
- A) Há vazamento de dados entre o treino e o teste.
- B) O limiar de decisão foi calibrado para o conjunto errado.
- C) O modelo decorou o treino em vez de aprender o padrão geral.
- D) O conjunto de teste é desbalanceado em relação ao de treino.

## 9. Qual destas tarefas é de regressão?
- A) Decidir se um pedido de crédito é aprovado ou negado.
- B) Estimar em quantos minutos uma entrega vai chegar.
- C) Identificar o idioma em que uma mensagem foi escrita.
- D) Separar e-mails legítimos de e-mails de spam.

## 10. Qual afirmação está INCORRETA segundo o material?
- A) Quando a decisão precisa ser auditada, a IA tradicional leva vantagem sobre a generativa.
- B) A tradicional e a generativa generalizam, as duas, a partir do que viram no treino.
- C) O espaço de saída da generativa é aberto porque seu mecanismo difere da múltipla escolha.
- D) Sinalizar um comportamento fora do usual pode ser feito sem exemplos rotulados.
