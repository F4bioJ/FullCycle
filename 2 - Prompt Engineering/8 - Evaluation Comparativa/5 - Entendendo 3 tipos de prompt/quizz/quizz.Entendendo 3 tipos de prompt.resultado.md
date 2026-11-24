# Resultado — Entendendo 3 tipos de prompt

## Tentativa 1 — 2026-11-23
**Pontuação:** 4/5

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | B | B | ✅ |
| 2 | B | D | ❌ |
| 3 | A | A | ✅ |
| 4 | C | C | ✅ |
| 5 | B | B | ✅ |

### Para refazer
- **Q2 — prompt conservador favorece precision:** escolheu o balanceado num cenário que pede priorizar um lado (alerta indevido caro, bug menor tolerável); o conservador, que só reporta com 100% de certeza, corta falsos positivos e por isso favorece precision, à custa de recall.

### Refação
- **Q2 (1ª refação, 2026-11-23):** ✅ — cenário de poucos findings quase todos confirmados e vários bugs de fora; identificou o conservador com precision alta.

### Pontos para revisar
- Ligação entre o comportamento de cada prompt e a métrica: agressivo (reporta tudo) → recall; conservador (só com certeza total) → precision; balanceado → meio-termo. Atenção: na fala, o professor troca os rótulos; vale o comportamento descrito (resumo da aula 2.8.5 e aulas 2.8.1 e 2.8.2).
