# Resultado — Analisando prompt de analise de componentes

## Tentativa 1 — 2026-11-17
**Pontuação:** 4/5

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | A | D | ❌ |
| 3 | A | A | ✅ |
| 4 | B | B | ✅ |
| 5 | D | D | ✅ |

### Para refazer
- **Q2 — granularidade e subcomponentes:** marcou acrescentar um workflow final ao prompt; o relatório raso vem de um recorte grande demais, e a aula propõe rodar outro prompt que divide o componente em subcomponentes e analisar cada um em nível mais baixo.

### Pontos para revisar
- Granularidade da análise: do alto nível para subcomponentes, com um prompt por nível conforme o tamanho do projeto (resumo da aula, trecho sobre componentes muito grandes).

### Refação 1 — 2026-11-17
- **Q2 — granularidade e subcomponentes:** ✅ (pergunta nova: num monorepo com componentes de centenas de arquivos, descer de nível com prompts diferentes, quebrando o componente em subcomponentes e analisando cada um à parte).
