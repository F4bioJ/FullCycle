# Resultado — Revisão - Aulas 1 a 3 (avançado)

## Tentativa 1 — 2026-10-21
**Pontuação:** 9/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | D | A | ❌ |
| 3 | D | D | ✅ |
| 4 | B | B | ✅ |
| 5 | D | D | ✅ |
| 6 | A | A | ✅ |
| 7 | C | C | ✅ |
| 8 | B | B | ✅ |
| 9 | D | D | ✅ |
| 10 | C | C | ✅ |

### Para refazer
- **Q2 — programação dinâmica na geração:** marcou a propriedade de Markov (a suposição que torna o Viterbi viável) em vez da técnica de guardar só os melhores caminhos parciais, que é o que a busca com k candidatos reaproveita.

### Pontos para revisar
- Aula 2.1 avançado, "Implicações para quem constrói software com IA": Viterbi (máximo no lugar da soma, guardar os melhores caminhos parciais) reaparece nas buscas de geração de texto. Não confundir a ideia com a propriedade de Markov, que só a viabiliza.

## Refação Q2 (1ª) — 2026-10-21
**Conceito:** programação dinâmica na geração
**Pergunta nova:** por que o Viterbi é exato no HMM, mas manter só k candidatos na geração com modelo neural pode perder a melhor frase.
**Resposta:** C ✅ (correta: C)
