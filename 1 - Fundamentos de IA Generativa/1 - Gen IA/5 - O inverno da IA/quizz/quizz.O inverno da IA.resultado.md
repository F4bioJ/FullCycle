# Resultado — O inverno da IA

## Histórico (migrado do formato antigo)

*MBA em Engenharia de Software com IA. Módulo: Fundamentos de IA Generativa. Aula 5*

Nível: **difícil** (alternativas plausíveis, conceitos de marcos diferentes misturados e meias-verdades)

| Rodada | Resultado | Erros |
|---|---|---|
| 1ª (06/10/2026) | 5/9 (interrompida na 10) | Q3 (boneco de neve), Q4 (Naive Bayes), Q7 (GANs), Q9 (cronologia) |
| 2ª (06/10/2026) | **8/10** | Q4 (Naive Bayes), Q9 (cronologia: GANs × Deep Learning) |
| Revisão dos erros (06/10/2026) | 1/2 | Q9 de novo (GANs antes do Deep Learning). Fixado depois com a pergunta aberta: "Deep Learning vem primeiro, pois as GANs são formadas por duas redes neurais" ✅ |

> 📌 **Pontos para revisar:** o Naive Bayes é um **modelo estatístico de classificação** (não é rede neural nem modelo de sequência). Na cronologia, o **Deep Learning vem antes das GANs**.

## Tentativa 3 — 2026-10-12
**Pontuação:** 6/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | A | A | ✅ |
| 2 | C | C | ✅ |
| 3 | B | B | ✅ |
| 4 | A | D | ❌ |
| 5 | C | C | ✅ |
| 6 | A | A | ✅ |
| 7 | B | D | ❌ |
| 8 | B | B | ✅ |
| 9 | A | C | ❌ |
| 10 | C | A | ❌ |

### Para refazer
- **Q4 — memória associativa (completar padrões):** atribuiu a Hopfield a previsão da próxima palavra, que é das cadeias de Markov. Hopfield restaura um padrão conhecido, Markov avança numa sequência.
- **Q7 — modelos de sequência (Markov) e geração:** confundiu prever a próxima palavra com representar a palavra como vetor (embeddings, aula 3).
- **Q9 — GAN (treino conjunto de gerador e discriminador):** marcou como incorreta a afirmação verdadeira sobre 2014 e os dois modelos que competem; a incorreta era o discriminador entrar só no uso final.
- **Q10 — linha do tempo 1982–2018:** escolheu 1972 para Hopfield e inverteu Transformers (2017) e BERT (2018).

### Pontos para revisar
- Quem faz o quê: Hopfield (completar padrão), Markov (próxima palavra), Naive Bayes (classificar), embeddings (vetor). Rever a transcrição e o resumo da aula 5 e os embeddings da aula 3.
- GANs: ano (2014) e o papel do discriminador durante o treino.
- Datas: Hopfield 1982 → GANs 2014 → Transformers 2017 → BERT 2018. O BERT é construído sobre o Transformer, então não pode vir antes.

## Refação da Q4 — rodada 1 — 2026-10-13
**Pontuação:** 0/1

*Pergunta nova sobre o mesmo conceito: qual situação corresponde à memória associativa de Hopfield.*

| # | Resposta | Correta | |
|---|---|---|---|
| 4 | A | B | ❌ |

### Para refazer
- **Q4 — memória associativa (completar padrões):** repetiu a troca da tentativa 3: escolheu a sugestão da próxima palavra (cadeias de Markov) em vez da restauração de um padrão conhecido a partir de um pedaço.

### Pontos para revisar
- Transcrição: Hopfield = "lembrar padrões incompletos para conseguir completá-los"; Markov = "modelar as sequências [...] para permitir a próxima palavra de um texto". Hopfield devolve algo que já conhecia; Markov produz o item seguinte.

## Refação da Q4 — rodada 2 — 2026-10-13
**Pontuação:** 1/1

*Pergunta nova sobre o mesmo conceito: o que uma rede de Hopfield treinada com dez melodias faz ao receber um trecho com notas erradas.*

| # | Resposta | Correta | |
|---|---|---|---|
| 4 | D | D | ✅ |

### Para refazer
- Nenhuma.

### Pontos para revisar
- Nenhum.

## Refação da Q7 — rodada 1 — 2026-10-13
**Pontuação:** 1/1

*Pergunta nova sobre o mesmo conceito: o que os modelos de sequência acrescentam a um sistema que entende a pergunta mas não responde.*

| # | Resposta | Correta | |
|---|---|---|---|
| 7 | C | C | ✅ |

### Para refazer
- Nenhuma.

### Pontos para revisar
- Nenhum.

## Refação da Q9 — rodada 1 — 2026-10-13
**Pontuação:** 1/1

*Pergunta nova sobre o mesmo conceito: o problema de treinar uma GAN com o discriminador desligado.*

| # | Resposta | Correta | |
|---|---|---|---|
| 9 | A | A | ✅ |

### Para refazer
- Nenhuma.

### Pontos para revisar
- Nenhum.

## Refação da Q10 — rodada 1 — 2026-10-13
**Pontuação:** 1/1

*Pergunta nova sobre o mesmo conceito: qual afirmação sobre a ordem dos marcos (Hopfield, Naive Bayes, GANs, Transformers, BERT) está de acordo com a aula.*

| # | Resposta | Correta | |
|---|---|---|---|
| 10 | D | D | ✅ |

### Para refazer
- Nenhuma.

### Pontos para revisar
- Nenhum.
