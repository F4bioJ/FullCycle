# Gabarito — Entendendo estrutura dos exemplos

## 1. Formato JSONL
**Correta: C**
**Por quê:** O professor explica que o JSONL é um JSON in-line: cada linha é um JSON completo, formato muito usado para economizar espaço.
- **A:** O arquivo não é um JSON inteiro; cada linha é um registro completo.
- **B:** As linhas não são parciais: cada uma já é um JSON completo.
- **D:** O professor não diz que o formato compacta campos nem que o LangSmith o exige; a vantagem citada é economizar espaço.
**Conceito:** JSONL (um JSON completo por linha)

## 2. Tamanho do dataset
**Correta: A**
**Por quê:** O professor disse que não criou 100 entradas para não estourar a conta do LangSmith, onde os exemplos serão executados.
- **B:** Não há limite de linhas nem perda de estrutura citados na aula.
- **C:** A pasta tem vários prompts, mas a aula não fala de limite de casos por prompt.
- **D:** A conferência manual não é o motivo dado; precision e recall são calculados sobre vários exemplos.
**Conceito:** Dataset pequeno por limite de conta

## 3. Sequência das categorias
**Correta: D**
**Por quê:** A primeira categoria é básica e foca em métricas mais objetivas. Depois vêm recall, precision e F1, que exigem desenvolver fórmulas, e por último o pairwise, para comparar prompts.
- **A:** Não são simultâneas; o pairwise é o último passo, e as métricas de classificação vêm na segunda etapa.
- **B:** Recall, precision e F1 só entram na etapa seguinte.
- **C:** A comparação de prompts é o pairwise, o último passo; a categoria 1 não compara prompts.
**Conceito:** Sequência básico, métricas, pairwise
