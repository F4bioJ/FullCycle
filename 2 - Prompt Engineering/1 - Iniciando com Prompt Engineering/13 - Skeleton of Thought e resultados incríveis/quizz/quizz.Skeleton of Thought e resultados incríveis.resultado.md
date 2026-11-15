# Resultado — Skeleton of Thought e resultados incríveis

## Tentativa 1 — 2026-11-07
**Pontuação:** 5/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | B | A | ❌ |
| 3 | A | D | ❌ |
| 4 | B | B | ✅ |
| 5 | C | C | ✅ |
| 6 | C | A | ❌ |
| 7 | A | D | ❌ |
| 8 | B | B | ✅ |
| 9 | D | A | ❌ |
| 10 | C | C | ✅ |

### Para refazer
- **Q2 — esqueleto ruim leva a expansão ruim / perda de contexto entre etapas:** atribuiu a mistura de seções a falta de critério de escolha (coisa do ToT), em vez de nomes ambíguos e perda de contexto.
- **Q3 — esqueleto impresso e cálculo do next token:** imaginou uma segunda chamada de revisão; a aula descreve uma única saída em que os tokens impressos ajudam a gerar os seguintes.
- **Q6 — documentação técnica com estrutura antes do texto:** ligou documentação a comparar alternativas (ToT); o ponto é que documentação falha por desorganização.
- **Q7 — combinação de CoT/ToT com SoT como plano de ação:** inverteu a ordem; explorar alternativas vem antes, e o esqueleto estrutura o plano depois.
- **Q9 — esqueleto como plano da implementação:** confundiu com few-shot; o prompt de Go definiu o que o esqueleto cobre e separou as fases (passo 1 sem expandir, passo 2 expande).

### Pontos para revisar
- Diferença entre SoT (impõe estrutura) e ToT (explora e compara alternativas): Q2, Q6 e Q7.
- Por que imprimir o esqueleto ajuda (next token) e o fluxo em duas fases: Q3 e Q9.

### Refação — 2026-11-07
Perguntas novas sobre os mesmos conceitos. **Resultado: 5/5** (Q2 ✅, Q3 ✅, Q6 ✅, Q7 ✅, Q9 ✅), todas de primeira.
