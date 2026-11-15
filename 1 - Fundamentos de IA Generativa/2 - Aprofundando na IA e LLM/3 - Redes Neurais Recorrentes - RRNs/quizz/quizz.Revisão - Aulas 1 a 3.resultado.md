# Resultado — Revisão - Aulas 1 a 3

## Histórico (migrado do formato antigo)

**Data:** 2026-10-09
**Pontuação:** 6/10
**Formato:** cenários práticos, perguntas de "por quê", alternativas de tamanho similar, conteúdo misturado das aulas 2.1, 2.2 e 2.3, algumas questões além da aula.

### Respostas registradas

- **Q1:** D ✅ (correta: D)
- **Q2:** B ❌ (correta: A)
- **Q3:** A ❌ (correta: C)
- **Q4:** D ❌ (correta: B)
- **Q5:** D ✅ (correta: D)
- **Q6:** C ✅ (correta: C)
- **Q7:** B ❌ (sabia o conceito, caiu na alternativa "fato histórico plausível") (correta: A)
- **Q8:** D ✅ (correta: D)
- **Q9:** B ✅ (correta: B)
- **Q10:** C ✅ (correta: C)

## Pontos para revisar
- **Propriedade de Markov:** o estado depende **só do anterior** (Q2).
- **Soma × concatenação** de embeddings (Q3).
- **HMM resolve ambiguidade** via transição + emissão + Viterbi (Q4).

Em 2026-10-15, Q3 e Q4 foram cortadas pelo filtro de relevância e não serão refeitas.

## Refação — 2026-10-15

| # | Conceito | Pergunta nova | Resposta | Correta | |
|---|---|---|---|---|---|
| 2 | estado do HMM x estado da RNN | colega diz que a RNN "olha todas as palavras anteriores" | C | C | ✅ |
| 7 | RNN não paraleliza na GPU | GPU com o dobro de núcleos não acelera a frase | B | B | ✅ |

## Tentativa 2 (q3 e q4 novas) — 2026-10-20
**Pontuação:** 1/2

| # | Resposta | Correta | |
|---|---|---|---|
| 3 | C | B | ❌ |
| 4 | B | B | ✅ |

### Para refazer
- **Q3 — ganhos e limite da janela fixa:** marcou "estados ocultos que emitem palavras" (HMM) como ganho da Feedforward; misturou o modelo da aula 2.1 com o da 2.2.

### Pontos para revisar
- O que cada modelo do capítulo traz: bigrama (1 palavra), HMM (estado oculto que emite), Feedforward (janela fixa + embeddings), RNN (memória sem janela).

## Refação Q3 (1ª) — 2026-10-20
**Conceito:** ganhos e limite da janela fixa
**Pergunta nova:** Feedforward janela 3 + embeddings com "o cão bebeu ___" (nunca visto) e concordância com "meninas" fora da janela.
**Resposta:** D ❌ (correta: C) — atribuiu à Feedforward um estado oculto que guarda o sujeito (isso é HMM/RNN) e achou que ela não generaliza para "cão" (isso é o bigrama).

## Refação Q3 (2ª) — 2026-10-20
**Conceito:** ganhos e limite da janela fixa
**Pergunta nova:** qual afirmação sobre Feedforward janela 5 + embeddings está INCORRETA (reaproveitar cálculo anterior × paralelismo × generalização × custo de aumentar a janela).
**Resposta:** B ❌ (correta: A) — achou falso que janelas da mesma frase rodem em paralelo; não ligou "sem memória" a "janelas independentes, logo paralelizáveis". Terceiro erro seguido no conceito: atribui à Feedforward dependência entre passos, que é da RNN.

## Refação Q3 (3ª) — 2026-10-20
**Conceito:** ganhos e limite da janela fixa
**Pergunta nova:** Feedforward janela 3 lendo "a casa azul fica longe": o que entra na rede ao prever "longe"?
**Resposta:** B ❌ (correta: D) — achou que a janela só existe no treino e que no uso entra só a última palavra (bigrama).

## Refação Q3 (4ª) — 2026-10-20
**Conceito:** ganhos e limite da janela fixa
**Pergunta nova:** relação entre as janelas sucessivas de "o menino que eu vi ontem correu".
**Resposta:** C ❌ (correta: B) — achou que as janelas seguintes atualizam um resumo vindo da primeira (comportamento da RNN).

## Refação Q3 (5ª) — 2026-10-20
**Conceito:** ganhos e limite da janela fixa
**Pergunta nova:** qual linha de um resumo comparativo descreve a Feedforward com janela (N palavras, sem estado, paralela × RNN × bigrama × atenção).
**Resposta:** A ✅
