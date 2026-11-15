# Resultado — Arquitetura RAG

## Tentativa 1 — 2026-11-03
**Pontuação:** 6/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | A | A | ✅ |
| 3 | A | D | ❌ |
| 4 | B | B | ✅ |
| 5 | B | B | ✅ |
| 6 | D | D | ✅ |
| 7 | D | A | ❌ |
| 8 | B | C | ❌ |
| 9 | A | D | ❌ |
| 10 | A | A | ✅ |

### Para refazer
- **Q3 — Busca semântica por embedding:** achou que o embedding guarda sinônimos e troca termos; na verdade consulta e trecho viram vetores de significado e a busca compara a proximidade.
- **Q7 — Controle das fontes de contexto:** achou que pedir citação das fontes resolve; o professor restringe no prompt onde o modelo pode buscar, para reduzir ruído e alucinação.
- **Q8 — Limitação da LLM pura e alucinação:** atribuiu o placar inventado a um trecho recuperado, mas sem RAG não há retriever; o fato simplesmente não está nos pesos.
- **Q9 — Atualização via fonte externa:** achou que o FAQ inteiro vai no prompt; o retriever traz só os trechos próximos da consulta, e o conteúdo novo entra na base sem mexer nos pesos.

### Pontos para revisar
- Busca por embedding × busca por palavra-chave — resumo da aula.
- Onde o RAG entra na arquitetura (base vetorial, retriever, prompt, geração) e o que ele não muda (os pesos) — resumo da aula.
- Nichar as fontes de busca no prompt — resumo da aula.

## Refação 1 das erradas — 2026-11-03
**Pontuação:** 2/4 (perguntas novas sobre os mesmos conceitos)

| Questão | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| q3 | Busca semântica por embedding (folga por casamento × "licença-gala") | C | C | ✅ |
| q7 | Controle das fontes (analista, regulamentação, só fontes oficiais) | B | B | ✅ |
| q8 | Limitação da LLM pura (cotação do dólar sem RAG) | A | D | ❌ |
| q9 | Atualização via fonte externa (boletim semanal de incidentes) | D | A | ❌ |

### Para refazer
- **q8 — Limitação da LLM pura:** voltou a atribuir a resposta inventada a um trecho recuperado, mesmo com "sem RAG" no enunciado; sem retriever não há base para trazer trecho nenhum, o número sai do padrão do treino.
- **q9 — Atualização via fonte externa:** achou que o texto mudar toda semana faz o RAG trocar para busca por palavra-chave; a busca segue semântica e basta indexar o documento novo na base.

## Refação 2 das erradas — 2026-11-03
**Pontuação:** 2/2 (perguntas novas sobre os mesmos conceitos)

| Questão | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| q8 | Limitação da LLM pura (política de reembolso mudada ontem, sem RAG) | B | B | ✅ |
| q9 | Atualização via fonte externa (política de senhas, reindexar o PDF) | C | C | ✅ |
