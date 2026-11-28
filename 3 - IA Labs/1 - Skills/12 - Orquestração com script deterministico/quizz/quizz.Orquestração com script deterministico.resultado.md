# Resultado — Orquestração com script deterministico

## Tentativa 1 — 2026-11-28
**Pontuação:** 6/9

Quizz reescrito antes desta tentativa: o original, de 10 questões, cobrava detalhes da demonstração (paths, números, regras ditadas); a versão aplicada tem 9 questões conceituais.

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | B | B | ✅ |
| 2 | D | D | ✅ |
| 3 | B | A | ❌ |
| 4 | C | C | ✅ |
| 5 | D | D | ✅ |
| 6 | A | A | ✅ |
| 7 | D | C | ❌ |
| 8 | C | B | ❌ |
| 9 | A | A | ✅ |

### Para refazer
- **Q3 — saída do script feita para o agente se autocorrigir:** achou que o exit diferente de zero basta; sem o bloco com regra, arquivo e como consertar, o agente adivinha.
- **Q7 — o que o gate confere (fronteiras, não regras de negócio):** na pergunta "NÃO sustenta", marcou a conclusão sobre pronto (D), que o gate sustenta; não separou fronteira de regra de negócio.
- **Q8 — regra do gate no CLAUDE.md, lido sempre:** achou que a description, no contexto desde o início, faz o gate rodar; ela só decide o acionamento da skill.

### Pontos para revisar
- Resumo da aula: seções "O pedido do script check-layers", "A regra no CLAUDE.md e no AGENTS.md" e "Exit 0 e exit 2".
