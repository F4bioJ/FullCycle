# Gabarito — Entendendo Pairwise Evaluator vs Evaluation

## 1. Pairwise evaluation vs Pairwise Evaluator
**Correta: A**
**Por quê:** O professor separa o tipo de avaliação (pairwise evaluation, a comparação de duas saídas) de quem a realiza (o Pairwise Evaluator, o "cara que avalia"). Ferramentas como o LangSmith expõem o evaluator.
- **B:** Os termos não são sinônimos: um nomeia o método e o outro o executor.
- **C:** Inverte os papéis: o evaluator é quem executa, não o tipo de avaliação.
- **D:** Mistura conceitos: a comparação em produção é o A/B testing, e o evaluator não compara prompts diferentes em produção.
**Conceito:** Pairwise evaluation vs Pairwise Evaluator

## 2. Fluxo de três requisições
**Correta: D**
**Por quê:** Executa-se a opção 1, depois a opção 2, e uma terceira rodada, do Pairwise Evaluator, junta as duas respostas e usa o critério para dizer quem ganhou. Rodar o evaluator por resposta impede a comparação direta.
- **A:** O fluxo tem três requisições, e o evaluator participa da terceira, recebendo as duas respostas.
- **B:** O evaluator roda uma única vez, na terceira requisição; as duas primeiras geram as respostas.
- **C:** Cada opção é executada em sua própria requisição; a comparação é feita depois, pelo evaluator.
**Conceito:** Fluxo de três requisições do pairwise

## 3. Pairwise vs A/B testing
**Correta: C**
**Por quê:** A pairwise evaluation compara duas saídas do mesmo input por meio de um juiz; o A/B testing é a forma comparativa que acontece online, em produção.
- **A:** A aula não diferencia as duas pelo input fixo ou variável; a rodada do evaluator é da pairwise, e o A/B testing é caracterizado por acontecer em produção.
- **B:** Inverte as características: online, em produção, é o A/B testing; o juiz é da pairwise.
- **D:** A aula trata o A/B testing como outra forma comparativa, não como tipo de Pairwise Evaluator, e não fala em mais de dois prompts.
**Conceito:** Pairwise evaluation vs A/B testing
