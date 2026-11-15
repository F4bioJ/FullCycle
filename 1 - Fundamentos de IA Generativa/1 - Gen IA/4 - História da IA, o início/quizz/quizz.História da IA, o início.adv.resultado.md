# Resultado — História da IA, o início (avançado)

## Tentativa 1 — 2026-10-12
**Pontuação:** 9/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | D | D | ✅ |
| 2 | B | B | ✅ |
| 3 | A | A | ✅ |
| 4 | C | C | ✅ |
| 5 | B | B | ✅ |
| 6 | D | D | ✅ |
| 7 | B | A | ❌ |
| 8 | C | C | ✅ |
| 9 | D | D | ✅ |
| 10 | B | B | ✅ |

### Para refazer
- **Q7 — regra de aprendizado do perceptron:** supôs que um acerto reforça os pesos; na regra, o ajuste é proporcional a (resposta certa − saída), então um acerto não muda nada.

### Pontos para revisar
- Regra de aprendizado do perceptron: seção 4, "Como ele decide e como aprende", do material avançado. Diferenciar da regra de Hebb (reforço de acertos) e de weight decay (redução preventiva de pesos).

## Refação das erradas — 2026-10-12
**Pontuação:** 0/1

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| Q7 (nova) | regra de aprendizado do perceptron | B | C | ❌ |

Pergunta nova: exemplo com sol = 1 e amigo = 0, saída 0 e resposta certa 1; o que acontece com os pesos.

### Para refazer
- **Q7 — regra de aprendizado do perceptron:** supôs que o peso da entrada ausente (zero) é o que sobe; o ajuste é multiplicado pelo valor da entrada, então só muda o peso de quem estava ativo.

## Refação das erradas (2ª rodada) — 2026-10-12
**Pontuação:** 0/1

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| Q7 (nova 2) | regra de aprendizado do perceptron | C | D | ❌ |

Pergunta nova: exemplo com sol = 0 e amigo = 1, saída 1 e resposta certa 0; o que acontece com os pesos.

### Para refazer
- **Q7 — regra de aprendizado do perceptron:** mesma confusão da rodada anterior: mexeu no peso da entrada ausente (sol = 0) e deixou parado o da entrada ativa. Reforçar que peso de entrada zero não muda e que a direção do ajuste segue o sinal do erro.

## Refação das erradas (3ª rodada) — 2026-10-12
**Pontuação:** 1/1

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| Q7 (nova 3) | regra de aprendizado do perceptron | A | A | ✅ |

Pergunta nova: exemplo com sol = 1 e amigo = 0, saída 1 e resposta certa 0; o que acontece com os pesos. Acertou depois da explicação com números (só muda o peso de quem valia 1; a direção segue o erro).

## Refação das erradas (4ª rodada) — 2026-10-12
**Pontuação:** 0/1

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| Q7 (nova 4) | regra de aprendizado do perceptron | A | B | ❌ |

Pergunta nova: exemplo com sol = 1 e amigo = 1, saída 0 e resposta certa 1; o que acontece com os pesos.

### Para refazer
- **Q7 — regra de aprendizado do perceptron:** acertou a direção (subir), mas ajustou só um peso quando as duas entradas valiam 1. Toda entrada ativa tem o peso ajustado, não apenas uma.

## Refação das erradas (5ª rodada) — 2026-10-12
**Pontuação:** 1/1

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| Q7 (nova 5) | regra de aprendizado do perceptron | D | D | ✅ |

Pergunta nova: exemplo com sol = 1 e amigo = 1, saída 1 e resposta certa 0; o que acontece com os pesos. Aplicou as duas regras juntas (todas as entradas ativas mudam; a direção segue o erro).

## Refação das erradas (6ª rodada) — 2026-10-12
**Pontuação:** 0/1

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| Q7 (nova 6) | regra de aprendizado do perceptron | A | C | ❌ |

Pergunta nova: exemplo com sol = 0 e amigo = 1, saída 0 e resposta certa 1; o que acontece com os pesos.

### Para refazer
- **Q7 — regra de aprendizado do perceptron:** acertou a direção (subir), mas aumentou também o peso da entrada que valia 0. A direção já está firme; o ponto instável é checar, entrada por entrada, quem valia 1 antes de decidir quais pesos mudam.

## Refação das erradas (7ª rodada) — 2026-10-16
**Pontuação:** 1/1

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| Q7 (nova 7) | regra de aprendizado do perceptron | tabela completa | tabela completa | ✅ |

Formato trocado para pergunta aberta com tabela de passos, depois de seis rodadas de múltipla escolha. Exemplo com três entradas: sol = 1, amigo = 0, folga = 1, saída 0, resposta certa 1. Preencheu x, erro, Δw e direção para cada entrada sem errar: sol e folga sobem (+1), amigo fica igual (x = 0 zera o ajuste).
