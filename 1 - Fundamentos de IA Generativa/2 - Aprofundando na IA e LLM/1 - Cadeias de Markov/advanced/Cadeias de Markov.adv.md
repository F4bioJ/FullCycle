# Cadeias de Markov — material avançado

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 1

A aula apresentou os HMMs: estados ocultos, observações, as matrizes de transição e de emissão e três algoritmos. Este material calcula um HMM à mão, mostra a diferença entre os algoritmos em uma única conta e explica por que um estado discreto é uma memória fraca, o ponto que prepara as RNNs.

---

## 1. Cadeia de Markov e HMM não são a mesma coisa

A aula usa os dois nomes quase como sinônimos. A diferença é o que se enxerga:

| | Cadeia de Markov | HMM |
|---|---|---|
| Estados | visíveis | ocultos |
| O que se observa | o próprio estado | um sinal emitido pelo estado |
| Exemplo | bigrama: o estado é a palavra | clima oculto, guarda-chuva visível |
| Tabelas | transição | transição + emissão |

O **bigrama da aula anterior já é uma cadeia de Markov**: a próxima palavra depende só da atual. O HMM acrescenta uma camada: existe algo que não vemos (a categoria gramatical, o fonema) gerando o que vemos (a palavra, o som).

Andrei Markov publicou o primeiro artigo sobre o tema em 1906. Mais tarde aplicou as cadeias a um texto literário: estudou a distribuição de vogais no *Eugênio Onegin*, de Púchkin. A ligação entre Markov e linguagem vem da origem.

## 2. Um HMM completo cabe em três tabelas

Dois estados ocultos (Sol, Chuva) e uma observação (a pessoa saiu com guarda-chuva ou não).

**Início:** P(Sol) = 0,6 · P(Chuva) = 0,4

**Transição** (cada linha soma 1, pois de cada estado o sistema tem de ir para algum):

| De \ Para | Sol | Chuva |
|---|---|---|
| Sol | 0,7 | 0,3 |
| Chuva | 0,4 | 0,6 |

**Emissão:** P(guarda-chuva | Sol) = 0,1 · P(guarda-chuva | Chuva) = 0,8

Observamos guarda-chuva em dois dias seguidos. Duas perguntas diferentes podem ser feitas.

### Pergunta 1: qual a probabilidade de observar isso? (forward)

Dia 1: probabilidade inicial × emissão.

```
Sol:   0,6 × 0,1 = 0,06
Chuva: 0,4 × 0,8 = 0,32
```

Dia 2: **soma** dos caminhos que chegam a cada estado, vezes a emissão.

```
Sol:   (0,06 × 0,7 + 0,32 × 0,4) × 0,1 = 0,170 × 0,1 = 0,017
Chuva: (0,06 × 0,3 + 0,32 × 0,6) × 0,8 = 0,210 × 0,8 = 0,168
```

Probabilidade da sequência observada: 0,017 + 0,168 = **0,185**.

### Pergunta 2: qual a sequência de estados mais provável? (Viterbi)

O dia 1 é igual. No dia 2, troca-se a soma pelo **máximo**: fica só o melhor caminho até cada estado.

```
Sol:   max(0,06 × 0,7 ; 0,32 × 0,4) × 0,1 = 0,128 × 0,1 = 0,0128  (veio de Chuva)
Chuva: max(0,06 × 0,3 ; 0,32 × 0,6) × 0,8 = 0,192 × 0,8 = 0,1536  (veio de Chuva)
```

Resposta: **Chuva, Chuva**.

A diferença entre os dois algoritmos é uma única operação: o forward **soma** todos os caminhos, o Viterbi guarda **o melhor**.

## 3. Por que esses algoritmos são engenhosos

A forma ingênua seria listar todas as sequências de estados possíveis. Com N estados e T passos, existem Nᵀ sequências.

| N estados | T passos | Sequências possíveis | Operações com programação dinâmica (≈ N² × T) |
|---|---|---|---|
| 2 | 2 | 4 | 8 |
| 3 | 20 | cerca de 3,5 bilhões | 180 |

O truque é a **programação dinâmica**: a cada passo, guarda-se um único número por estado (a soma ou o máximo) e descarta-se o resto. Isso só é possível por causa da propriedade de Markov: como o futuro depende apenas do estado atual, não importa por qual caminho se chegou até ele.

A mesma suposição que limita o modelo é a que o torna calculável.

## 4. Os três problemas e os três algoritmos

| Problema | Pergunta | Algoritmo |
|---|---|---|
| Avaliação | Quão provável é esta sequência de observações? | forward |
| Decodificação | Quais estados ocultos melhor a explicam? | Viterbi |
| Aprendizado | Quais tabelas melhor explicam os dados? | Baum–Welch |

Dois ajustes em relação à aula:

- A probabilidade da sequência é calculada pelo **forward**. O **forward-backward** vai além: dá a distribuição dos estados em cada instante, usando também as observações posteriores.
- O **Baum–Welch** é um caso particular do algoritmo EM e **não precisa de rótulos**. Ele parte de tabelas chutadas, estima os estados ocultos, reajusta as tabelas e repete. Chega a um máximo **local**, que depende do chute inicial.

Com dados rotulados, o treino nem precisa do Baum–Welch: basta contar transições e emissões, como no bigrama.

## 5. Onde os HMMs foram usados

Os HMMs foram descritos por Leonard Baum e colegas em artigos da segunda metade dos anos 1960. O reconhecimento de fala foi uma das primeiras aplicações, a partir de meados dos anos 1970. Na segunda metade dos anos 1980, passaram a ser aplicados a sequências biológicas, em especial DNA.

Um uso prático do forward: para identificar o idioma de um áudio, calcula-se a probabilidade do áudio sob um HMM de português e sob um de inglês. Ganha o modelo que der a maior probabilidade.

## 6. O limite que importa: o estado é uma categoria

A aula apontou a propriedade de Markov como limitação. O motivo profundo está no **tipo** de estado.

O estado de um HMM é uma **categoria discreta**: "Chuva". Ele não carrega nada sobre o caminho até ali. Não diz se chove há um dia ou há uma semana, nem o que veio antes.

Para "lembrar" mais, é preciso criar mais estados, e o custo é exponencial: distinguir k fatos independentes de sim ou não exige 2ᵏ estados. Lembrar 20 fatos sobre a frase já pediria mais de um milhão de estados, e o custo dos algoritmos cresce com N².

A saída, na próxima etapa do curso, é trocar a categoria por um **vetor de números contínuos**. Um vetor de algumas centenas de posições guarda um resumo rico do histórico sem multiplicar estados. É a diferença entre o estado do HMM e o estado de uma RNN.

## 7. Por que o HMM não gera bom texto

Um HMM gera texto sorteando um estado, emitindo uma palavra, sorteando o próximo estado e assim por diante. Cada palavra depende só do estado atual, que é uma categoria como "verbo". O resultado respeita a gramática local e não mantém assunto: a sequência "artigo, substantivo, verbo" sai correta, mas o substantivo e o verbo não têm relação entre si.

---

## O que a aula simplificou

- **"Cadeias de Markov" como nome dos HMMs.** Na cadeia os estados são visíveis. No HMM são ocultos. O bigrama é uma cadeia de Markov.
- **"O forward-backward calcula a probabilidade da sequência observada."** Quem faz isso é o forward. O forward-backward calcula a distribuição dos estados em cada instante.
- **"Exige dados rotulados."** O Baum–Welch treina sem rótulos, a partir das observações.
- **"É linear e por isso limitado."** O limite está em o estado ser uma categoria sem histórico. A linearidade, sozinha, não é o problema: RNNs também avançam passo a passo.

## Implicações para quem constrói software com IA

- **Para sequências com estrutura clara e poucos dados, um HMM ainda é uma boa escolha.** É barato, treina com pouco e as tabelas são legíveis.
- **Programação dinâmica aparece em toda parte.** A ideia do Viterbi (guardar os melhores caminhos parciais em vez de enumerar todos) reaparece nas buscas usadas para gerar texto.
- **Suposições simplificadoras compram eficiência.** A propriedade de Markov troca capacidade por cálculo viável. O Transformer faz a troca oposta: enxerga tudo e paga caro.
- **Verifique as linhas das suas matrizes.** Uma linha de transição que não soma 1 é um erro de modelagem.

## Armadilhas comuns

- Confundir a matriz de transição (estado → estado) com a de emissão (estado → observação).
- Achar que o Viterbi calcula a probabilidade total (ele acha o melhor caminho).
- Achar que HMM e cadeia de Markov são sinônimos.
- Esquecer que o Baum–Welch pode parar em um máximo local.

## Fontes

- Hidden Markov model (definição, algoritmos, Baum–Welch como caso de EM, histórico, aplicações) — https://en.wikipedia.org/wiki/Hidden_Markov_model
- Markov chain (Markov, 1906, *Eugênio Onegin*, propriedade de Markov, matriz de transição) — https://en.wikipedia.org/wiki/Markov_chain
