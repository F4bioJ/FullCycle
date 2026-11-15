# Resultado — Minha IA produziu um lixo

## Tentativa 1 — 2026-11-15
**Pontuação:** 8/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | C | D | ❌ |
| 3 | C | A | ❌ |
| 4 | B | B | ✅ |
| 5 | A | A | ✅ |
| 6 | B | B | ✅ |
| 7 | C | C | ✅ |
| 8 | D | D | ✅ |
| 9 | B | B | ✅ |
| 10 | C | C | ✅ |

### Para refazer
- **Q2 — Few-shot + consulta à documentação:** marcou a barreira simples (informar a versão e proibir o resto); a guideline da aula soma o par import errado/certo (few-shot) à ordem de consultar a documentação.
- **Q3 — Limites como treinamento acumulativo:** marcou que os limites valem só no chat do erro, o contrário da aula; aqui eles saem do Code Review e viram guidelines que todo chat novo recebe.

### Pontos para revisar
- Guideline da biblioteca antiga: exemplo errado/certo + "pesquise as documentações" (resumo da aula, parte do Code Review).
- Diferença entre a barreira pontual da 2.3.2 e as guidelines acumuladas desta aula ("cada chat é um funcionário novo").
