# Resultado — Introdução às diferenças de IA (avançado)

## Tentativa 1 — 2026-10-11
**Pontuação:** 6/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | D | A | ❌ |
| 3 | D | D | ✅ |
| 4 | B | B | ✅ |
| 5 | D | D | ✅ |
| 6 | D | B | ❌ |
| 7 | A | A | ✅ |
| 8 | C | C | ✅ |
| 9 | A | B | ❌ |
| 10 | D | C | ❌ |

### Para refazer
- **Q2 — armadilha da acurácia:** concluiu que o limiar estava alto a partir de um número que não permite avaliar o limiar (isso exige precisão e recall).
- **Q6 — geração como escolha repetida:** marcou que o escritor "dispensa o treino", confundindo dispensar rótulos manuais com dispensar treino.
- **Q9 — classificação x regressão:** tratou aprovar ou negar crédito como regressão, provavelmente pelo score numérico por trás da decisão.
- **Q10 — por que o espaço de saída é aberto:** aceitou que o mecanismo da generativa difere da múltipla escolha e rejeitou a detecção de anomalia sem rótulos.

### Pontos para revisar
- Seção 2 (classificação devolve uma nota, não uma decisão) e "A armadilha da acurácia": o que acurácia, precisão e recall medem, e a diferença entre o score e a classe de saída.
- Seção 5 (a múltipla escolha dentro do escritor): errada duas vezes, na Q6 e na Q10. É o ponto mais fraco.
- "O que a aula simplificou", último item: detecção de fraude sem rótulos, por detecção de anomalia.

## Tentativa 2 — 2026-10-11 (refazer as erradas)
**Pontuação:** 3/5

Perguntas novas sobre os conceitos errados na Tentativa 1 (não estão no arquivo do quizz).

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| 1 | armadilha da acurácia | B | B | ✅ |
| 2 | geração como escolha repetida | D | C | ❌ |
| 3 | classificação x regressão | A | A | ✅ |
| 4 | por que o espaço de saída é aberto | D | D | ✅ |
| 5 | detecção de anomalia sem rótulos | A | C | ❌ |

### Para refazer
- **R2 — geração como escolha repetida:** já entende que são N escolhas sobre o vocabulário, mas marcou que são independentes. Falta fixar que cada token escolhido entra no contexto da escolha seguinte.
- **R5 — detecção de anomalia sem rótulos:** segunda vez errada (Q10 da Tentativa 1). Ainda assume que sinalizar fraude exige exemplos rotulados de fraude.

### Pontos para revisar
- Seção 5 (a múltipla escolha dentro do escritor), frase "com cada resposta entrando no enunciado da próxima".
- Tabela dos quatro tipos de aprendizado na seção 4 (linha "não supervisionado") e o último item de "O que a aula simplificou".

## Tentativa 3 — 2026-10-11 (refazer as erradas)
**Pontuação:** 4/4

Perguntas novas sobre os dois conceitos errados na Tentativa 2 (não estão no arquivo do quizz).

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| 1 | geração como escolha repetida | C | C | ✅ |
| 2 | detecção de anomalia sem rótulos | D | D | ✅ |
| 3 | geração como escolha repetida | B | B | ✅ |
| 4 | detecção de anomalia sem rótulos | A | A | ✅ |

### Para refazer
- Nenhuma.

### Pontos para revisar
- Nenhum. Os quatro conceitos errados na Tentativa 1 foram acertados em perguntas novas.
