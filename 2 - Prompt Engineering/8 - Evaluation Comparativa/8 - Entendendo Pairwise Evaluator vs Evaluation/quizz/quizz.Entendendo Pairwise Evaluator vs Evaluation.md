# Quizz — Entendendo Pairwise Evaluator vs Evaluation

**Capítulo:** 2.8 - Evaluation Comparativa · **Aula:** 2.8.8
**Base:** material da aula

---

## 1. Uma equipe diz: "usamos pairwise evaluation, então precisamos configurar um Pairwise Evaluator no LangSmith". Qual leitura descreve melhor a relação entre os dois termos?
- A) A evaluation é o tipo de avaliação, que compara duas saídas; o evaluator é o componente que executa a avaliação desse tipo.
- B) São sinônimos: o nome muda conforme a ferramenta, mas método e executor são a mesma coisa.
- C) A evaluator é o tipo de avaliação, que compara duas saídas; a evaluation é o componente que a executa dentro da ferramenta.
- D) A evaluation compara respostas do mesmo input, enquanto o evaluator compara prompts diferentes em produção.

## 2. Um colega propõe rodar o pairwise executando o evaluator uma vez para cada resposta, em vez de uma única vez para as duas. Segundo o fluxo da aula, o que está errado nessa proposta?
- A) Nada: o fluxo da aula já prevê duas requisições, uma por resposta, e o evaluator lê o resultado de cada uma.
- B) O evaluator precisa rodar três vezes, uma para a opção 1, outra para a opção 2 e outra para repetir a melhor.
- C) As respostas A e B devem ser geradas na mesma requisição, para o evaluator receber as duas já comparadas.
- D) O evaluator deve receber as duas respostas juntas, na terceira requisição, depois de executadas as opções 1 e 2.

## 3. Qual afirmação sobre pairwise evaluation e A/B testing está correta, segundo a aula?
- A) Ambas exigem a rodada final de um evaluator; o que muda é se o input é fixo ou varia a cada usuário.
- B) Ambas são comparativas, mas a pairwise acontece online, em produção, enquanto o A/B testing usa um juiz para julgar duas saídas do mesmo input.
- C) Ambas são comparativas: a pairwise julga duas saídas do mesmo input por meio de um juiz, e o A/B testing acontece online, em produção.
- D) O A/B testing é um tipo de Pairwise Evaluator, usado quando se comparam mais de dois prompts em produção.
