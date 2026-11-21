# Quizz — Entendendo estrutura dos exemplos

**Capítulo:** 7 - Prompt Evaluation · **Aula:** 7
**Base:** material da aula

---

## 1. Um colega abre o dataset do laboratório e estranha que o arquivo termina em .jsonl, e não em .json. O que explica esse formato?
- A) O arquivo é um JSON inteiro e compacto, e o "L" indica que ele foi reduzido para economizar espaço.
- B) Cada linha é um trecho parcial de JSON, e o upload junta as linhas num JSON completo antes de enviar.
- C) Cada linha é um JSON completo, formato usado com frequência para economizar espaço.
- D) O formato compacta os campos de cada exemplo, e por isso o LangSmith exige que o upload seja feito nele.

## 2. Uma colega propõe ampliar o dataset de 18 para 100 registros antes de começar as avaliações. Pela explicação do professor para ter parado em 18, qual é o principal obstáculo?
- A) Cada exemplo será executado na ferramenta, e muitos exemplos poderiam estourar a conta do LangSmith.
- B) Datasets acima de algumas dezenas de linhas perdem a estrutura de entrada e saída e deixam de ser versionáveis.
- C) A pasta de prompts tem várias variações, e cada uma aceita um número limitado de casos de teste.
- D) Para calcular precision e recall, o dataset precisa ser pequeno o bastante para conferir cada resposta à mão.

## 3. Um aluno quer, já no primeiro exemplo, calcular o F1 de um prompt e decidir qual de duas versões vence. Como a sequência do professor trata isso?
- A) Métricas de classificação e pairwise convivem desde a categoria 1, e o que muda entre as etapas é a quantidade de exemplos.
- B) A categoria 1 já traz recall, precision e F1, e a comparação entre prompts vem junto, nesse exemplo.
- C) A categoria 1 já compara prompts de forma objetiva, e a segunda etapa acrescenta o F1 para pontuar essa comparação.
- D) A categoria 1 é a básica; F1 exige fórmulas e vem na etapa seguinte, e a comparação de prompts fica por último.
