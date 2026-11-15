# Resultado — Guidelines e trade-offs

## Tentativa 1 — 2026-11-15
**Pontuação:** 4/5

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | A | ❌ |
| 2 | B | B | ✅ |
| 3 | C | C | ✅ |
| 4 | D | D | ✅ |
| 5 | B | B | ✅ |

### Para refazer
- **Q1 — Zero-shot em tarefa simples e alto volume:** escolheu few-shot para fixar o formato numa classificação genérica de três categorias; few-shot é para domínio específico ou formato com muitas especificidades, e em volume alto o custo extra por chamada pesa.

### Pontos para revisar
- Guidelines de escolha (zero-shot × few-shot): quando a tarefa é de senso comum e o volume é alto, o zero-shot é o padrão; o few-shot só se paga em domínio específico ou formato de saída rígido.

### Refação — 2026-11-15
- **Q1 (zero-shot em tarefa simples e alto volume):** acertou na 1ª refação (comentários ofensivos em volume alto → zero-shot; contratos com JSON próprio → few-shot).
