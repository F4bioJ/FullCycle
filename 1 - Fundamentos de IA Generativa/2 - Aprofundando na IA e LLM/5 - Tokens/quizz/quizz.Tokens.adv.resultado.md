# Resultado — Tokens (avançado)

## Tentativa 1 — 2026-10-26
**Pontuação:** 6/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | B | B | ✅ |
| 2 | D | C | ❌ |
| 3 | C | A | ❌ |
| 4 | B | D | ❌ |
| 5 | C | C | ✅ |
| 6 | B | B | ✅ |
| 7 | A | A | ✅ |
| 8 | D | D | ✅ |
| 9 | B | B | ✅ |
| 10 | D | C | ❌ |

### Para refazer
- **Q2 — troca no tamanho do vocabulário:** achou que vocabulário maior encarece a atenção; o custo da atenção depende do comprimento da sequência (que encurta), e o preço vem das matrizes V × d e d × V.
- **Q3 — tokenizador treinado à parte do modelo:** atribuiu o comportamento errático à atenção zerar tokens raros; o problema é o embedding mal treinado de um token que o modelo quase não viu (glitch tokens).
- **Q4 — merges aplicadas em ordem:** achou que reordenar as merges quebra a ligação ID → embedding; os IDs não mudam, o que muda é a segmentação, porque a ordem decide qual fusão acontece primeiro.
- **Q10 — a divisão não é morfológica e depende do corpus do tokenizador:** achou que termos raros têm embedding maior e ocupam várias posições; todo token tem a mesma dimensão d e ocupa uma posição, e o termo raro custa mais por se partir em mais tokens.

### Pontos para revisar
- Tamanho do vocabulário e custo nos dois lados (atenção x matrizes de embedding e saída): seção 5 do material avançado.
- Tokenizador treinado antes e à parte, e glitch tokens: seções 4.1 e 5.
- Lista ordenada de merges e como ela é aplicada a texto novo: seção 2.
- Embedding com dimensão fixa por token; custo vem do número de tokens: seções 4.5 e 5.

### Refação das erradas — 2026-10-26
Perguntas novas sobre os mesmos conceitos: 3/4.

| Original | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| Q2 | troca no tamanho do vocabulário | B | B | ✅ |
| Q3 | tokenizador treinado à parte do modelo | D | D | ✅ |
| Q4 | merges aplicadas em ordem | B | C | ❌ |
| Q10 | a divisão não é morfológica e depende do corpus do tokenizador | A | A | ✅ |

### Para refazer
- **Q4 — merges aplicadas em ordem:** acertou a nova segmentação, mas de novo achou que os IDs se trocam; o vocabulário (token → ID → embedding) é uma tabela fixa e separada da lista de merges, que só diz como montar os tokens. Muda quais IDs a palavra vira, não o que cada ID significa.

### Refação das erradas — 2026-10-30
Pergunta nova sobre o conceito que faltava: 0/1.

| Original | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| Q4 | merges aplicadas em ordem | D | B | ❌ |

### Para refazer
- **Q4 — merges aplicadas em ordem:** desta vez achou que, ao sumir de `cachorro`, o token `cach` (ID 812) saiu do vocabulário. A tabela token → ID → embedding é fixa e separada da lista de merges. Reordenar as merges muda só quais IDs uma palavra vira; o 812 continua sendo `cach`, com o mesmo embedding, disponível para outras palavras.

### Refação das erradas — 2026-10-30 (2ª do dia)
Pergunta nova sobre o mesmo conceito: 1/1.

| Original | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| Q4 | merges aplicadas em ordem | C | C | ✅ |

Sem pendências no quizz avançado de Tokens.
