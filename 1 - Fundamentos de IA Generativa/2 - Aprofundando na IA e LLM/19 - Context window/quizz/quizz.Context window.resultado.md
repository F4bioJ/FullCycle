# Resultado — Context window

## Tentativa 1 — 2026-11-01
**Pontuação:** 6/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | A | B | ❌ |
| 2 | D | D | ✅ |
| 3 | A | A | ✅ |
| 4 | C | C | ✅ |
| 5 | B | B | ✅ |
| 6 | A | A | ✅ |
| 7 | A | D | ❌ |
| 8 | C | C | ✅ |
| 9 | B | A | ❌ |
| 10 | B | D | ❌ |

### Para refazer
- **Q1 — definição de janela de contexto:** marcou que a janela é só o limite da resposta gerada; ela limita o contexto que o modelo considera de uma vez, prompt incluído.
- **Q7 — resumos hierárquicos:** escolheu chunking de um capítulo para uma síntese que depende do livro todo; o resumo hierárquico cobre tudo sem pôr o texto bruto num só prompt.
- **Q9 — instrução de foco versus recorte prévio:** achou que a instrução de foco espalha a atenção; ela concentra a atenção, mas o PDF inteiro continua no prompt, então o custo não cai.
- **Q10 — troca entre janela grande, custo e diluição:** achou que, dentro da janela, a qualidade é igual à de um prompt com o trecho certo; a diluição de relevância e o custo quadrático pesam.

### Pontos para revisar
- Janela de contexto: o que cabe numa chamada, não o volume de treino nem memória entre sessões.
- Instrução explícita de foco corta "com prompt" e não reduz tokens processados; só o recorte prévio (chunking, busca) reduz.
- Janela grande dá alcance, mas custo quadrático e diluição de relevância cobram o preço.

## Refação das erradas da Tentativa 1 — 2026-11-01
**Pontuação:** 4/4 (perguntas novas sobre os mesmos conceitos)

| Refação | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| Q1 | definição de janela de contexto | C | C | ✅ |
| Q7 | resumos hierárquicos | B | B | ✅ |
| Q9 | instrução de foco versus recorte prévio | C | C | ✅ |
| Q10 | troca entre janela grande, custo e diluição | A | A | ✅ |
