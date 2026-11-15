# Resultado — CoT com Self-consistency

## Tentativa 1 — 2026-11-07
**Pontuação:** 4/5

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | B | B | ✅ |
| 2 | A | D | ❌ |
| 3 | A | A | ✅ |
| 4 | C | C | ✅ |
| 5 | B | B | ✅ |

### Para refazer
- **Q2 — condição para quando não há consenso:** confundiu a execução 1 (três respostas diferentes, sem maioria) com a execução 3 (duas iguais); com três respostas diferentes o prompt mandava admitir falta de consenso.

### Pontos para revisar
- Condição de "sem resposta consistente" do prompt e as três execuções do GPT-3.5 Turbo (resumo da aula).

### Refação — 2026-11-07
- **Q2 — condição para quando não há consenso:** ✅ na 1ª refação (✅ 1x), com cenário novo (escolha de cache, três conclusões diferentes).
