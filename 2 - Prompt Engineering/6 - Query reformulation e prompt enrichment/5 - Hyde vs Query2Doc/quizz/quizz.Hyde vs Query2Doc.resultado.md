# Resultado — Hyde vs Query2Doc

## Tentativa 1 — 2026-11-20
**Pontuação:** 9/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | B | B | ✅ |
| 2 | C | D | ❌ |
| 3 | A | A | ✅ |
| 4 | C | C | ✅ |
| 5 | B | B | ✅ |
| 6 | A | A | ✅ |
| 7 | C | C | ✅ |
| 8 | D | D | ✅ |
| 9 | A | A | ✅ |
| 10 | C | C | ✅ |

### Para refazer
- **Q2 — documento "fake": banco como fonte da verdade:** atribuiu a segurança à vetorização "apagar" os fatos errados; o motivo é que o documento hipotético só serve para a busca e não entra na resposta, que vem dos trechos do banco.

### Pontos para revisar
- Papel do documento hipotético no HyDE: usado só para gerar o vetor da busca; o prompt final leva a pergunta original e os trechos recuperados (resumo da aula, fluxo do HyDE).

### Refação 1 — 2026-11-20
- **Q2 — documento "fake": banco como fonte da verdade:** ✅ (cenário novo: documento hipotético diz 30 dias de férias e a política no banco diz 20; o funcionário recebe 20, porque a resposta usa a pergunta original e os trechos recuperados).
