# Resultado — Fine Tuning supervisionado

## Tentativa 1 — 2026-10-31
**Pontuação:** 7/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | C | A | ❌ |
| 3 | D | D | ✅ |
| 4 | B | B | ✅ |
| 5 | B | A | ❌ |
| 6 | C | D | ❌ |
| 7 | B | B | ✅ |
| 8 | C | C | ✅ |
| 9 | D | D | ✅ |
| 10 | A | A | ✅ |

### Para refazer
- **Q2 — a especialização se soma à base generalista:** achou que o fine tuning "toma o lugar" do pré-treino e deixa o modelo pior fora do domínio; a base generalista (o português) continua servindo, só o contexto especializado não ajuda.
- **Q5 — overfitting (dados repetitivos):** confundiu repetição de respostas corretas com viés nos dados; viés é rótulo errado, repetição causa overfitting (decorar).
- **Q6 — viés nos dados (rótulo errado vira comportamento):** achou que o fine tuning tem pouco efeito sobre o que veio do pré-treino; ele muda o comportamento justamente ajustando os pesos, e aqui seguiu os rótulos errados.

### Pontos para revisar
- Analogia do hospital e da borracharia (base generalista preservada): resumo gerado, seção "A analogia do hospital".
- Overfitting × viés nos dados (decorar demais × aprender a coisa errada): resumo gerado, seção "Limitações e cuidados".

### Refação
- **Q2 — a especialização se soma à base generalista (2026-10-31, 1ª refação):** não passou. Cenário novo (modelo do catálogo de eletrodomésticos redigindo e-mail à transportadora); marcou C, que a especialização vale para qualquer pedido. Na original tinha marcado o oposto (especialização tira capacidade fora do domínio). Ponto a fixar: fora do domínio treinado vale só a base do pré-treino, nem pior nem melhor.
- **Q5 — overfitting (dados repetitivos) (2026-10-31, 1ª refação):** passou. Cenário novo (300 contratos, 250 iguais, rótulos corretos); respondeu C, overfitting, corrigido com base maior e variada.
- **Q6 — viés nos dados (rótulo errado vira comportamento) (2026-10-31, 1ª refação):** passou. Cenário novo (gírias rotuladas como adequadas num chatbot formal); respondeu A, o backpropagation seguiu os rótulos e o fine tuning mudou o tom.
- **Q2 — a especialização se soma à base generalista (2026-10-31, 2ª refação):** passou. Cenário novo (modelo só pré-treinado × mesmo modelo com fine tuning em código Python, ambos resumindo uma notícia); respondeu D, fora do domínio treinado os dois contam com a mesma base.
