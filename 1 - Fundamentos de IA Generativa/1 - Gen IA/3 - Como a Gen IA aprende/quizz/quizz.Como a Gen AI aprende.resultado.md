# Resultado — Como a Gen AI aprende

## Histórico (migrado do formato antigo)

*MBA em Engenharia de Software com IA. Módulo: Fundamentos de IA Generativa. Aula 3*

Resultado: **10/10** (05/10/2026)

## Tentativa 2 — 2026-10-11
**Pontuação:** 8/10

Primeira tentativa com o quizz reescrito no nível atual (as perguntas da tentativa anterior eram outras).

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | A | A | ✅ |
| 3 | D | D | ✅ |
| 4 | B | B | ✅ |
| 5 | A | A | ✅ |
| 6 | A | D | ❌ |
| 7 | D | B | ❌ |
| 8 | C | C | ✅ |
| 9 | D | D | ✅ |
| 10 | B | B | ✅ |

### Para refazer
- **Q6 — modelo autorregressivo:** tratou o estilo e as regras como fixados antes da escrita, sem contar que as palavras já geradas entram na escolha de cada próxima palavra.
- **Q7 — alucinação como desvio na geração:** confundiu o desvio para um caminho relacionado, sem volta à ideia inicial, com o looping de repetição do bigrama (aula 6).

### Refeitas — 2026-10-11
Perguntas novas sobre os mesmos conceitos, depois da revisão: **2/2**.
- **Q6 — modelo autorregressivo:** ✅ (uma palavra diferente no início faz o resto do texto divergir)
- **Q7 — alucinação como desvio na geração:** ✅ (trechos fluentes que se afastam do pedido, sem repetição)

### Pontos para revisar
- Autorregressão: a saída vira entrada do passo seguinte. Transcrição, trecho do Harry Potter e da analogia do escritor; resumo, seções "Modelos autoregressivos" e "Autoregressão como processo de escrita".
- Diferença entre os dois modos de falha: desvio plausível que não reconecta (aula 3) x repetição por par frequente (aula 6).
