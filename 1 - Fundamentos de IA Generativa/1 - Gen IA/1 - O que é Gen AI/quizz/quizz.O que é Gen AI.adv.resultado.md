# Resultado — O que é Gen AI (avançado)

## Tentativa 1 — 2026-10-11
**Pontuação:** 9/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | A | A | ✅ |
| 2 | C | C | ✅ |
| 3 | B | B | ✅ |
| 4 | D | D | ✅ |
| 5 | B | B | ✅ |
| 6 | A | A | ✅ |
| 7 | C | D | ❌ |
| 8 | C | C | ✅ |
| 9 | A | A | ✅ |
| 10 | B | B | ✅ |

### Para refazer
- **Q7 — plausível x verdadeiro:** atribuiu fluência e correção a controles separados (prompt e temperatura), em vez de ao objetivo de treino, que otimiza o plausível.

### Pontos para revisar
- Seção 6 do material avançado, "Por que a saída 'parece certa' e está errada": a temperatura só regula o sorteio; com temperatura zero o modelo continua errando com fluência quando a continuação mais provável é falsa.

## Refação da Q7 — rodada 1 — 2026-10-13
**Pontuação:** 0/1

*Pergunta nova sobre o mesmo conceito: efeito de fixar a temperatura em zero em um chatbot que inventa prazos de garantia.*

| # | Resposta | Correta | |
|---|---|---|---|
| 7 | D | B | ❌ |

### Para refazer
- **Q7 — plausível x verdadeiro:** tratou fluência e correção como forças opostas reguladas pela temperatura (menos sorteio = menos erro e menos fluência); as duas vêm do mesmo objetivo de treino e a temperatura não separa uma da outra.

### Pontos para revisar
- Seção 6 do material avançado: fluente e errado tem a mesma "cara" estatística de fluente e correto. Seção 3: a temperatura só controla o quanto o sorteio se arrisca; em zero, sai sempre o token mais provável, que é fluente e pode ser falso.

## Refação da Q7 — rodada 2 — 2026-10-13
**Pontuação:** 1/1

*Pergunta nova sobre o mesmo conceito: por que falha uma triagem que manda para revisão só as respostas mal escritas.*

| # | Resposta | Correta | |
|---|---|---|---|
| 7 | A | A | ✅ |

### Para refazer
- Nenhuma.

### Pontos para revisar
- Nenhum.
