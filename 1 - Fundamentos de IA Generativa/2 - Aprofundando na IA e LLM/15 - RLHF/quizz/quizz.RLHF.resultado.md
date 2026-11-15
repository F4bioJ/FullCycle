# Resultado — RLHF

## Tentativa 1 — 2026-10-31
**Pontuação:** 7/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | A | A | ✅ |
| 3 | D | D | ✅ |
| 4 | A | B | ❌ |
| 5 | B | B | ✅ |
| 6 | D | D | ✅ |
| 7 | D | C | ❌ |
| 8 | A | A | ✅ |
| 9 | B | C | ❌ |
| 10 | B | B | ✅ |

### Para refazer
- **Q4 — PPO maximiza a recompensa prevista pelo Reward Model:** achou que um avaliador humano dá nota a cada resposta durante a etapa 3; o humano só entra na etapa 2, ao treinar o Reward Model.
- **Q7 — pequenas mudanças no alinhamento mudam muito o comportamento percebido:** atribuiu o "puxa-saco" à troca do algoritmo PPO; o tom vem do que o ajuste passou a recompensar.
- **Q9 — Instruction Tuning = variedade de tarefas para um modelo generalista:** colocou o Instruction Tuning depois do PPO; ele vem antes ou junto do RLHF e não é um retoque final.

### Pontos para revisar
- Etapas 2 e 3 do RLHF: quem entra em cada uma (humano no ranking, Reward Model no PPO). Ver `summary/RLHF.resumo.md`.
- Instruction Tuning: onde se encaixa na sequência e o contraste com o fine tuning especializado da aula 14.

## Refação das erradas — 2026-10-31
**Pontuação:** 1/3 (perguntas novas, sem arquivo próprio)

| Questão | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| Q4 | PPO maximiza a recompensa do Reward Model | C | D | ❌ |
| Q7 | Alinhamento muda o comportamento, não o conhecimento | A | A | ✅ |
| Q9 | Instruction Tuning = tarefas variadas, antes ou junto do RLHF | D | B | ❌ |

### Para refazer
- **Q4:** marcou que o PPO reforça a palavra mais provável (objetivo do pré-treino); a nota na etapa 3 vem do Reward Model.
- **Q9:** repetiu a confusão de colocar o Instruction Tuning depois do PPO como retoque final.

## 2ª refação das erradas — 2026-10-31
**Pontuação:** 2/2

| Questão | Formato | Resultado |
|---|---|---|
| Q4 | Tabela das três etapas (sinal × treinado) | ✅ 2x |
| Q9 | Cenário de dois times (generalista × especializado) | ✅ 2x |
