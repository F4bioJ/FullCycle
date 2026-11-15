# Resultado — LLMs

## Tentativa 1 — 2026-10-26
**Pontuação:** 7/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | B | B | ✅ |
| 2 | A | A | ✅ |
| 3 | B | D | ❌ |
| 4 | C | C | ✅ |
| 5 | D | A | ❌ |
| 6 | C | C | ✅ |
| 7 | D | D | ✅ |
| 8 | C | B | ❌ |
| 9 | C | C | ✅ |
| 10 | A | A | ✅ |

### Para refazer
- **Q3 — RLHF:** escolheu fine-tuning supervisionado para um problema que nasce da comparação entre respostas; o fine-tuning aprende a reproduzir exemplos certos, o RLHF aprende a preferir a melhor resposta entre várias.
- **Q5 — Pré-treinamento × fine-tuning:** escolheu RLHF para ensinar uma tarefa de classificação com exemplos rotulados; inverteu a ordem das fases (pré-treino → fine-tuning → RLHF) e o papel de cada uma.
- **Q8 — Embeddings:** atribuiu à autoatenção a semelhança entre dois textos separados; a atenção relaciona tokens dentro da mesma sequência, e são os embeddings que põem significados parecidos perto no espaço vetorial.

### Pontos para revisar
- As três fases de treino e o que cada uma usa como sinal (texto cru, exemplos rotulados, preferências humanas): seção sobre pré-treinamento, fine-tuning e RLHF no resumo da aula.
- Papel de cada bloco do Transformer (embeddings × autoatenção × feedforward): seção sobre a arquitetura no resumo da aula.

## Refação 1 — 2026-10-26
Perguntas novas sobre os mesmos conceitos.

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| R3 | assistente seco e fora do formato, sem redação única certa: RLHF, não fine-tuning | B | B | ✅ |
| R5 | associação dado × fase INCORRETA: exemplos rotulados vão ao fine-tuning, não ao RLHF | D | D | ✅ |
| R8 | vetores coerentes, mas pronome não liga ao nome: suspeita na autoatenção, não nos embeddings | A | A | ✅ |
