# Resultado — Transformers

## Tentativa 1 — 2026-10-20
**Pontuação:** 6/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | A | A | ✅ |
| 3 | D | D | ✅ |
| 4 | D | B | ❌ |
| 5 | A | B | ❌ |
| 6 | A | A | ✅ |
| 7 | D | D | ✅ |
| 8 | C | C | ✅ |
| 9 | A | B | ❌ |
| 10 | C | D | ❌ |

### Para refazer
- **Q4 — divisão de trabalho no bloco do Transformer:** atribuiu ao Transformer "guardar histórico / esquecer", que é o vocabulário das portas da LSTM; o Transformer não tem estado acumulado.
- **Q5 — definição de self-attention:** achou que a diferença era peso fixo × aprendido; o "self" é a sequência atendendo a si mesma (a attention geral pode ligar duas sequências).
- **Q9 — representações integradas entre modalidades:** aceitou "um Transformer por modalidade + roteador", que ainda é o cenário multimodelo antigo; o ganho é arquitetura e espaço de representação compartilhados.
- **Q10 — atenção e MLP são complementares:** marcou como incorreta a afirmação verdadeira sobre o positional encoding; não identificou que a MLP continua necessária, pois é ela que dá a não linearidade.

### Pontos para revisar
- Papel da atenção × MLP × positional encoding dentro do bloco (resumo do professor, parte "com quem" × "como"). Q4 e Q10 erram o mesmo ponto.
- Self-attention × attention entre sequências (encoder-decoder na tradução).
- Multimodalidade: tokens de imagem/áudio no mesmo espaço do texto.

## Refação 1 — 2026-10-20
Perguntas novas sobre os mesmos conceitos.

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| R4 | atenção mistura tokens; MLP transforma cada token sozinho ("banco da praça") | A | C | ❌ |
| R5 | self-attention × cross-attention no encoder-decoder | D | D | ✅ |
| R9 | patches de imagem como tokens na mesma atenção | A | A | ✅ |
| R10 | remover a MLP tira a transformação não linear | C | C | ✅ |

### Para refazer
- **Q4 — divisão de trabalho no bloco:** atribuiu à MLP olhar para outro token ("praça") e à atenção só repassar o embedding. A MLP é aplicada a cada token separadamente; só a atenção mistura informação entre tokens.

## Refação 2 — 2026-10-20

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| R4 | só a atenção leva informação de um token a outro ("João" → "ele") | B | B | ✅ |
