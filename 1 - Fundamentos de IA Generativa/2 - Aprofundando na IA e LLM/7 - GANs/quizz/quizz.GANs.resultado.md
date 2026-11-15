# Resultado — GANs

## Tentativa 1 — 2026-10-27
**Pontuação:** 8/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | A | A | ✅ |
| 3 | D | D | ✅ |
| 4 | B | B | ✅ |
| 5 | A | A | ✅ |
| 6 | B | D | ❌ |
| 7 | C | C | ✅ |
| 8 | B | B | ✅ |
| 9 | D | D | ✅ |
| 10 | D | A | ❌ |

### Para refazer
- **Q6 — Encoder, decoder e espaço latente:** marcou "o decoder gera do zero e o encoder confere se parece real", misturando o VAE com a GAN (papel de discriminador dado ao encoder) e invertendo a ordem: no VAE o encoder comprime primeiro e o decoder reconstrói a partir dessa representação.
- **Q10 — Analogia falsificador e policial:** marcou como incorreta a ressalva do professor de que a analogia é aproximada (que é verdadeira) e deixou passar "o policial só age depois do treino"; o retorno do discriminador acontece durante todo o treino.

### Pontos para revisar
- Encoder × decoder no VAE e a diferença para gerador × discriminador da GAN: resumo gerado, seções "Encoder e decoder" e "Gerador e discriminador"; áudio, bloco "VAE: controlar o que se gera".
- O ciclo de retorno do discriminador durante o treino: resumo gerado, seção "Exemplo da nota de 10 reais".

## Refação 1 — 2026-10-27
Perguntas novas sobre os mesmos conceitos.

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| R6 | fluxo do VAE: primeiro bloco (encoder) comprime, segundo (decoder) reconstrói; nenhum julga se parece real | C | C | ✅ |
| R10 | o retorno do discriminador atua durante todo o treino, não só no início, no fim ou em etapas separadas | B | B | ✅ |
