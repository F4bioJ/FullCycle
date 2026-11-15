# Resultado — Redes neurais profundas (avançado)

## Tentativa 1 — 2026-10-16
**Pontuação:** 6/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | D | D | ✅ |
| 2 | B | B | ✅ |
| 3 | A | A | ✅ |
| 4 | C | C | ✅ |
| 5 | C | C | ✅ |
| 6 | D | A | ❌ |
| 7 | D | B | ❌ |
| 8 | D | D | ✅ |
| 9 | B | C | ❌ |
| 10 | C | A | ❌ |

### Para refazer
- **Q6 — janela não é memória:** marcou como falso o compartilhamento de pesos entre posições (RNN/Transformer), que é verdadeiro; não reconheceu que aumentar a janela fixa não cria memória.
- **Q7 — camada oculta como nova representação:** atribuiu a solução do XOR ao backprop ("pesos que ficavam fixos"); o perceptron também aprendia pesos, e o limite era só traçar uma reta.
- **Q9 — pesos por posição:** confundiu concatenar com somar; o defeito é que cada posição tem pesos próprios, e a ordem é preservada.
- **Q10 — embedding reflete os dados de treino:** escolheu "todos à mesma distância, como no one-hot"; termos raros têm vetores densos, só que mal posicionados.

### Pontos para revisar
- Compartilhamento de pesos como fio entre Q6 e Q9: seção "5. Somar × concatenar" e "6. Os três limites e para onde eles levam".
- XOR com camada oculta (tabela h1, h2): seção "1. Profundidade só vale com não linearidade".
- Embeddings prontos fora do domínio: seção "Implicações para quem constrói software com IA".

## Refação 1 — 2026-10-19
**Pontuação:** 3/4 (perguntas novas sobre os conceitos errados)

| Original | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| Q6 | janela não é memória (janela 5 → 50, nome fora da janela) | C | C | ✅ |
| Q7 | camada oculta como nova representação (XOR não é falta de backprop) | A | A | ✅ |
| Q9 | pesos por posição ("não" na posição 1 × 2) | B | D | ❌ |
| Q10 | embedding reflete os dados de treino (Apple em finanças × receitas) | B | B | ✅ |

### Para refazer
- **Q9 — pesos por posição:** achou que o embedding muda conforme a posição; o vetor da palavra é o mesmo em toda posição, e o que muda são os pesos (W₁, W₂, W₃) da camada oculta. Não confundir com positional encoding do Transformer.

> 2026-10-19: a R5 (Q9) foi descartada sem resposta. O material não mostrava os blocos W₁/W₂, e a seção 5 ganhou a subseção "O vetor é o mesmo; o peso muda por posição". A próxima refação da Q9 usa uma pergunta nova.

## Refação 2 — 2026-10-19
**Pontuação:** 1/1

| Original | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| Q9 | pesos por posição ("urgente" na posição 4 × 1; corrigir com pesos compartilhados) | B | B | ✅ |
