# Resultado — Batch Prompting

## Tentativa 1 — 2026-11-08
**Pontuação:** 2/3

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | A | B | ❌ |
| 2 | D | D | ✅ |
| 3 | C | C | ✅ |

### Para refazer
- **Q1 — Limitação de homogeneidade no batch:** atribuiu a quebra de formato ao prompt de sistema aparecer uma vez só por lote, quando a causa é misturar tarefas com formatos de saída diferentes no mesmo lote.

### Refação
- **Q1 (2026-11-08):** pergunta nova (três tipos de requisição sobre avaliações; como organizar os lotes). Respondeu D, correta: um lote por tipo de tarefa. ✅

### Pontos para revisar
- Limitação de similaridade entre tarefas e "Redução de custo por requisição" (o prompt único é a economia, não um defeito): `summary/Batch Prompting.resumo.md`.
