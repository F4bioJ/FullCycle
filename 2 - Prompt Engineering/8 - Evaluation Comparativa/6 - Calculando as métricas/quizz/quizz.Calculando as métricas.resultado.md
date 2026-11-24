# Resultado — Calculando as métricas

## Tentativa 1 — 2026-11-23
**Pontuação:** 4/5

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | A | A | ✅ |
| 3 | D | D | ✅ |
| 4 | B | B | ✅ |
| 5 | B | C | ❌ |

### Para refazer
- **Q5 — retorno das métricas ao LangSmith:** achou que bastava devolver o F1 para o LangSmith derivar precision e recall; o LangSmith não calcula nada, e a função devolve as três métricas prontas, cada uma com score e comment.

### Pontos para revisar
- Retorno em dicionário com `score` e `comment`: seção homônima do resumo da aula (2.8.6).

> Antes da aplicação, o enunciado da Q3 trocou "sem extração" por "diretamente", que entregava a resposta.

## Refação Q5 (1ª) — 2026-11-23
**Conceito:** retorno das métricas ao LangSmith
**Pergunta nova:** função que conta TP, FP e FN certo mas termina em `print`, sem `return`; o painel não mostra nada.
**Resposta:** D · **Correta:** D · ✅
