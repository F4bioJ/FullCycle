# Contas de probabilidade para o MBA

Guia para quem quer **entender** as contas, e não decorar fórmulas. Cobre tudo o que aparece no curso até agora: o básico de probabilidade, probabilidade condicional, Bayes, bigramas, HMM (forward e Viterbi), perda de entropia cruzada e similaridade de cosseno.

Uma ideia atravessa o guia inteiro: **toda conta de probabilidade pode ser feita contando casos.** Em vez de "0,4 × 0,8", pense em "de 1.000 dias, 400 têm chuva; desses 400, 320 têm guarda-chuva". As fórmulas são só um atalho para essa contagem. Quando se perder, volte a contar.

Os exercícios estão em [contas-de-probabilidade.exercicios.md](contas-de-probabilidade.exercicios.md), com o gabarito em arquivo separado.

**Como ler:** na ordem. Cada seção usa a anterior. A seção 0 parece óbvia, mas é a base de tudo; se a seção 5 (HMM) parecer confusa, o motivo quase sempre está na seção 0.

| Seção | Assunto | Onde aparece no curso |
|---|---|---|
| 0 | O básico: o que é probabilidade, quando multiplicar, quando somar | tudo |
| 1 | Probabilidade condicional | tudo |
| 2 | Teorema de Bayes | filtro de spam (capítulo 1) |
| 3 | Bigrama | modelos de linguagem estatísticos (capítulo 1) |
| 4 | Árvore de probabilidades | prepara a seção 5 |
| 5 | HMM: forward e Viterbi | Cadeias de Markov (capítulo 2, aula 1) |
| 6 | Perda de entropia cruzada | treino de redes neurais |
| 7 | Similaridade de cosseno | embeddings e busca semântica |

---

## 0. O básico

### 0.1 O que é uma probabilidade

Probabilidade é uma **fração**: quantos casos têm o que você procura, dividido pelo total de casos.

```
probabilidade = casos que interessam / total de casos
```

Em um ano de 365 dias, 73 tiveram chuva. A probabilidade de um dia qualquer ter chuva é 73 / 365 = 0,2.

O mesmo número aparece escrito de três jeitos. São só formas diferentes de dizer a mesma coisa:

| Fração | Decimal | Porcentagem | Em palavras |
|---|---|---|---|
| 1/2 | 0,5 | 50% | metade |
| 1/4 | 0,25 | 25% | um em cada quatro |
| 4/10 | 0,4 | 40% | quatro em cada dez |
| 8/10 | 0,8 | 80% | oito em cada dez |
| 1/10 | 0,1 | 10% | um em cada dez |

Toda probabilidade fica entre **0** (nunca acontece) e **1** (sempre acontece). Se uma conta sua deu 1,2 ou −0,3, tem erro em algum lugar.

### 0.2 O complemento: "não acontecer"

Se a chance de chover é 0,2, a de **não** chover é 1 − 0,2 = **0,8**. Os dois juntos cobrem todos os casos, então somam 1.

```
P(não A) = 1 − P(A)
```

Isso aparece o tempo todo em tabelas. Se a pessoa sai com guarda-chuva em 0,9 dos dias de chuva, então em 0,1 dos dias de chuva ela sai **sem**.

### 0.3 Regra do "E": multiplicar

Quando um evento acontece **e depois** outro acontece, **dentro do grupo do primeiro**, as probabilidades se multiplicam.

**Por que multiplicar?** Veja com contagem.

> 30% dos dias têm chuva. Nos dias de chuva, a pessoa sai com guarda-chuva em 90% deles. Em que fração de **todos** os dias acontece "chuva E guarda-chuva"?

Imagine 1.000 dias:

| Passo | Conta | Dias |
|---|---|---|
| Dias com chuva | 30% de 1.000 | 300 |
| Desses 300, com guarda-chuva | 90% de 300 | 270 |
| Fração do total | 270 / 1.000 | **0,27** |

O segundo passo pega 90% **de 300**, e não de 1.000. É por isso que se multiplica: o segundo percentual vale só dentro do grupo que sobrou do primeiro.

```
0,3 × 0,9 = 0,27
```

**Multiplicar decimais à mão.** Multiplique como se não houvesse vírgula e depois conte as casas decimais:

| Conta | Sem vírgula | Casas decimais | Resultado |
|---|---|---|---|
| 0,3 × 0,9 | 3 × 9 = 27 | 1 + 1 = 2 | 0,27 |
| 0,4 × 0,5 | 4 × 5 = 20 | 1 + 1 = 2 | 0,20 |
| 0,27 × 0,5 | 27 × 5 = 135 | 2 + 1 = 3 | 0,135 |
| 0,14 × 0,8 | 14 × 8 = 112 | 2 + 1 = 3 | 0,112 |

**Uma checagem rápida:** multiplicar duas probabilidades sempre dá um número **menor ou igual** a cada uma delas. Faz sentido: "A e B" é mais raro que "A" sozinho. Se a sua multiplicação deu um número maior, errou a vírgula.

### 0.4 Regra do "OU": somar

Quando um resultado pode acontecer por **caminhos diferentes que não se sobrepõem**, as probabilidades dos caminhos se somam.

> Em 1.000 dias, 270 são "chuva com guarda-chuva" e 140 são "sol com guarda-chuva". Em quantos a pessoa saiu com guarda-chuva?

270 + 140 = 410 dias, ou seja, **0,41**. Os dois grupos não se misturam (um dia não é de sol e de chuva ao mesmo tempo), então basta somar.

### 0.5 O resumo que resolve quase tudo

| Palavra na pergunta | Operação | Por quê |
|---|---|---|
| "**e** depois", "**e** também", uma coisa dentro da outra | **multiplicar** | o segundo percentual vale só dentro do grupo do primeiro |
| "**ou**", "por qualquer caminho", "no total" | **somar** | caminhos separados que levam ao mesmo lugar |
| "**não**" | **1 − p** | o que sobra |
| "**entre** os que…", "**dado** que…" | **dividir** | você encolheu o grupo (seção 1) |

---

## 1. Probabilidade condicional: P(A | B)

### O conceito

P(A | B) se lê "a probabilidade de A **dado** B". Na prática:

> **Entre os casos de B, que fração é A?**

O que vem **depois da barra** define o grupo que você está olhando. O que vem **antes** é o que você conta dentro desse grupo.

| Notação | Leitura | Grupo | O que se conta |
|---|---|---|---|
| P(chuva) | chance de chover | todos os dias | dias com chuva |
| P(guarda-chuva \| chuva) | entre os dias de chuva, quantos têm guarda-chuva | dias de chuva | dias com guarda-chuva |
| P(chuva \| guarda-chuva) | entre os dias com guarda-chuva, quantos têm chuva | dias com guarda-chuva | dias com chuva |
| P(chuva **e** guarda-chuva) | entre **todos** os dias, quantos têm as duas coisas | todos os dias | dias com as duas coisas |

Repare nas duas últimas linhas: P(chuva | guarda-chuva) e P(chuva e guarda-chuva) parecem iguais, mas o grupo muda. A primeira divide pelos dias com guarda-chuva; a segunda, por todos os dias.

### O passo a passo

1. Escreva a pergunta em palavras: "entre os ___, quantos são ___?".
2. Encontre o tamanho do grupo (o que vem depois da barra).
3. Conte, dentro desse grupo, quantos têm a característica (o que vem antes da barra).
4. Divida o passo 3 pelo passo 2.

### Exemplo resolvido 1: tabela de dupla entrada

Uma turma tem 100 alunos:

| | Usa IA no trabalho | Não usa | Total |
|---|---|---|---|
| Programa | 40 | 20 | 60 |
| Não programa | 10 | 30 | 40 |
| **Total** | 50 | 50 | 100 |

**P(usa IA | programa)**
1. Em palavras: "entre os que programam, quantos usam IA?"
2. Grupo: os que programam, **60** (a linha "Programa").
3. Dentro dele, os que usam IA: **40**.
4. 40 / 60 = **2/3**.

**P(programa | usa IA)**
1. Em palavras: "entre os que usam IA, quantos programam?"
2. Grupo: os que usam IA, **50** (a coluna "Usa IA").
3. Dentro dele, os que programam: **40**.
4. 40 / 50 = **4/5**.

**P(programa e usa IA)**
1. Em palavras: "entre todos os alunos, quantos programam e usam IA?"
2. Grupo: todos, **100**.
3. Os que têm as duas coisas: **40**.
4. 40 / 100 = **0,4**.

O número de cima (40) é o mesmo nas três contas. **O que muda é o denominador**, porque o grupo mudou. Trocar P(A | B) por P(B | A) é o erro mais comum de probabilidade.

### A ponte com a regra do "E"

A regra do "E" da seção 0 é uma probabilidade condicional disfarçada:

```
P(programa e usa IA) = P(programa) × P(usa IA | programa)
                     =    60/100   ×       40/60
                     =        0,6  ×       2/3       = 0,4
```

Em palavras: "60% programam; desses, 2/3 usam IA; então 40% do total fazem as duas coisas". Esta linha é a base do Bayes e do HMM.

---

## 2. Teorema de Bayes, contando casos

### O conceito

O teorema de Bayes serve para **inverter** uma probabilidade condicional. Você sabe P(evidência | causa) e quer P(causa | evidência).

No filtro de spam:
- você sabe com que frequência "grátis" aparece nos spams e nos legítimos: P("grátis" | spam) e P("grátis" | legítimo);
- você quer saber a chance de um e-mail com "grátis" ser spam: P(spam | "grátis").

A fórmula é:

```
P(spam | palavra) = P(palavra | spam) × P(spam) / P(palavra)
```

Mas não é preciso decorar a fórmula. **Conte e-mails.**

### O passo a passo (frequências naturais)

Imagine 1.000 e-mails (ou 10.000, se algum número sair com vírgula).

1. **Separe pela taxa de base.** Quantos são spam e quantos são legítimos?
2. **Em cada grupo, aplique a frequência da palavra.** Quantos spams têm a palavra? Quantos legítimos têm a palavra? (Regra do "E".)
3. **Junte só os que têm a palavra.** Some os dois números do passo 2. (Regra do "OU".)
4. **Divida.** Spams com a palavra / total com a palavra. (Você encolheu o grupo: é uma condicional.)

A ordem importa: **primeiro os grupos, depois a palavra dentro de cada grupo.** As porcentagens "30% dos spams" e "2% dos legítimos" valem para cada grupo, nunca para o total de e-mails.

```
1.000 e-mails
├── 400 spam ────────→ 30% têm "grátis" → 120
└── 600 legítimos ───→  2% têm "grátis" →  12
                                           ───
                       com "grátis":       132   → spam entre eles: 120 / 132
```

### Exemplo resolvido 2: o spam do material

40% dos e-mails são spam. "Grátis" aparece em 30% dos spams e em 2% dos legítimos.

| Passo | Conta | Resultado |
|---|---|---|
| 1. Separar | 40% de 1.000 / o resto | 400 spams, 600 legítimos |
| 2. Palavra em cada grupo | 30% de 400 / 2% de 600 | 120 spams, 12 legítimos |
| 3. Total com a palavra | 120 + 12 | 132 |
| 4. Dividir | 120 / 132 | **≈ 0,91** |

### Exemplo resolvido 3: a mesma palavra, outra caixa

Agora só 4% dos e-mails são spam. A palavra continua igual: 30% dos spams e 2% dos legítimos. Use 10.000 e-mails.

| Passo | Conta | Resultado |
|---|---|---|
| 1. Separar | 4% de 10.000 / o resto | 400 spams, 9.600 legítimos |
| 2. Palavra em cada grupo | 30% de 400 / 2% de 9.600 | 120 spams, 192 legítimos |
| 3. Total com a palavra | 120 + 192 | 312 |
| 4. Dividir | 120 / 312 | **≈ 0,38** |

O resultado **não** caiu dez vezes (de 91% para 9%), embora a taxa de spam tenha caído dez vezes. O número de spams com a palavra caiu, mas o de legítimos com a palavra **subiu** (de 12 para 192 em 10.000), porque agora há muito mais legítimos. A taxa de base mexe nos dois lados da divisão.

### De onde vem a fórmula

A contagem e a fórmula são a mesma coisa:

| Na contagem | Na fórmula |
|---|---|
| 120 spams com a palavra (em 1.000) | P(palavra \| spam) × P(spam) = 0,30 × 0,40 = 0,120 |
| 12 legítimos com a palavra | P(palavra \| legítimo) × P(legítimo) = 0,02 × 0,60 = 0,012 |
| 132 com a palavra | P(palavra) = 0,120 + 0,012 = 0,132 |
| 120 / 132 | 0,120 / 0,132 ≈ 0,91 |

### Várias palavras: o Naive Bayes

Para um e-mail com duas palavras, o Naive Bayes multiplica as frequências de cada palavra dentro de cada grupo, supondo que elas sejam independentes:

```
peso do spam      = P(spam)      × P(palavra1 | spam)      × P(palavra2 | spam)
peso do legítimo  = P(legítimo)  × P(palavra1 | legítimo)  × P(palavra2 | legítimo)

P(spam | as duas palavras) = peso do spam / (peso do spam + peso do legítimo)
```

É o mesmo passo a passo, com uma multiplicação a mais no passo 2.

---

## 3. Bigrama: a probabilidade de uma frase

### O conceito

O bigrama prevê cada palavra olhando **só a anterior**. Cada fator da conta é uma probabilidade condicional:

```
P(palavra | anterior) = (vezes em que "anterior palavra" aparece) / (vezes em que "anterior" aparece seguida de alguma palavra)
```

Em palavras: **das vezes em que vi a palavra anterior, em quantas veio esta a seguir?** O grupo (depois da barra) é "as ocorrências da palavra anterior".

A probabilidade da frase é o produto dos fatores. É a regra do "E" aplicada em sequência: a segunda palavra **e** a terceira **e** a quarta.

```
P(w1 w2 w3 w4) = P(w2 | w1) × P(w3 | w2) × P(w4 | w3)
```

(Como no material, a primeira palavra é dada; a conta começa no segundo termo.)

### O passo a passo

1. Quebre a frase em pares vizinhos.
2. Para **cada** par, ache **todas** as ocorrências da palavra anterior no corpus.
3. Liste o que vem depois de cada ocorrência.
4. O fator é: quantas vezes veio a palavra que você quer / quantas ocorrências da anterior.
5. Multiplique todos os fatores.

Monte sempre a tabela. Pular um fator é o erro mais comum.

### Exemplo resolvido 4

Corpus:

```
o gato preto dorme
o gato branco come
o cão preto come
```

Frase: **"o cão preto dorme"** (nunca aparece inteira no corpus).

Pares: (o, cão), (cão, preto), (preto, dorme). Três pares, três fatores.

| Fator | A anterior aparece… | …seguida de quê? | Probabilidade |
|---|---|---|---|
| P(cão \| o) | "o" 3 vezes | gato, gato, cão | 1/3 |
| P(preto \| cão) | "cão" 1 vez | preto | 1/1 = 1 |
| P(dorme \| preto) | "preto" 2 vezes | dorme, come | 1/2 |

P = 1/3 × 1 × 1/2 = **1/6**.

### Três armadilhas

**1. Frase nunca vista não significa zero.** O bigrama só exige que cada **par** tenha sido visto. "O cão preto dorme" junta pares de frases diferentes e recebe 1/6.

**2. Ter certeza da palavra anterior não faz o fator valer 1.** O que faz o fator valer 1 é a palavra **seguinte** ser sempre a mesma. Em P(cão | o), toda frase começa com "o", mas depois de "o" vêm "gato", "gato" e "cão": o fator vale 1/3.

**3. Um par nunca visto zera a frase inteira.** "O cão branco come": "cão" só aparece seguido de "preto", então P(branco | cão) = 0. Como a frase é um produto, o resultado é **0**, mesmo que os outros fatores sejam altos.

### Suavização de Laplace

Para não zerar frases possíveis, a suavização de Laplace soma 1 a todas as contagens. Com V palavras no vocabulário:

```
P_Laplace(palavra | anterior) = (contagem do par + 1) / (contagem da anterior + V)
```

O "+ V" no denominador existe porque cada uma das V palavras possíveis ganhou +1 na linha da anterior.

**Exemplo resolvido 5.** No corpus acima, o vocabulário tem V = 7 palavras: o, gato, preto, dorme, branco, come, cão.

| Fator | Sem suavização | Com Laplace |
|---|---|---|
| P(branco \| cão) | 0 / 1 = **0** | (0 + 1) / (1 + 7) = **1/8** |
| P(preto \| cão) | 1 / 1 = **1** | (1 + 1) / (1 + 7) = **2/8 = 1/4** |

O par não visto ganhou 1/8, e o par visto caiu de 1 para 1/4. **A probabilidade dada aos não vistos sai dos vistos**, porque cada linha continua somando 1.

### Trigrama e dados esparsos

O trigrama olha **duas** palavras para trás: P(palavra | as duas anteriores). O passo a passo é o mesmo, mas a "anterior" agora é um par. Como pares aparecem menos que palavras soltas, mais combinações ficam com contagem zero. É por isso que aumentar o n piora a esparsidade.

---

## 4. Árvore de probabilidades

Antes do HMM, uma ferramenta que organiza as regras do "E" e do "OU" num desenho. Ela é o HMM em miniatura.

### Como montar

- Cada **galho** é uma escolha. Em cima do galho vai a probabilidade dela, **dentro do grupo de onde ele sai**.
- Para chegar a uma **ponta**, multiplique os galhos do caminho (regra do "E").
- Para juntar pontas diferentes que levam ao mesmo resultado, some (regra do "OU").

### Exemplo resolvido 6: o clima e o guarda-chuva

- 70% dos dias são de sol e 30% de chuva.
- No sol, a pessoa leva guarda-chuva em 20% dos dias. Na chuva, em 90%.

Com 1.000 dias:

```
1.000 dias
├── Sol (0,7) ──── 700 dias
│     ├── com guarda-chuva (0,2) ──── 140 dias   ← 0,7 × 0,2 = 0,14
│     └── sem guarda-chuva (0,8) ──── 560 dias   ← 0,7 × 0,8 = 0,56
└── Chuva (0,3) ── 300 dias
      ├── com guarda-chuva (0,9) ──── 270 dias   ← 0,3 × 0,9 = 0,27
      └── sem guarda-chuva (0,1) ────  30 dias   ← 0,3 × 0,1 = 0,03
```

As quatro pontas somam 1.000 dias (ou 1,00). Isso é uma ótima checagem.

Três perguntas diferentes sobre a mesma árvore:

| Pergunta | Em palavras | Conta | Resultado |
|---|---|---|---|
| P(chuva **e** guarda-chuva) | entre todos os dias, quantos têm chuva e guarda-chuva | uma ponta: 270 / 1.000 | **0,27** |
| P(guarda-chuva) | entre todos os dias, quantos têm guarda-chuva, por qualquer caminho | soma de pontas: (140 + 270) / 1.000 | **0,41** |
| P(chuva \| guarda-chuva) | entre os dias com guarda-chuva, quantos têm chuva | 270 / (140 + 270) | **≈ 0,66** |

A terceira é o Bayes da seção 2: separou pela taxa de base, aplicou a evidência em cada grupo, juntou e dividiu.

**Guarde a diferença entre a primeira e a terceira.** "Chuva e guarda-chuva" é uma ponta da árvore (0,27). "Chuva dado guarda-chuva" é essa ponta dividida pelo total de pontas com guarda-chuva (0,66). A seção 5 usa a primeira.

---

## 5. HMM: forward e Viterbi

### O que é um HMM, em uma frase

Um HMM (modelo oculto de Markov) é uma árvore de probabilidades que **se repete dia após dia**. Existe algo que você **não vê** (o clima, chamado de **estado oculto**) e algo que você **vê** (se a pessoa levou guarda-chuva, chamado de **observação**).

Você está numa sala sem janela. Não sabe se lá fora faz sol ou chuva. Só vê se o colega chegou com guarda-chuva. A partir disso, quer raciocinar sobre o clima.

### As três tabelas

Um HMM fica completamente definido por três tabelas. Vamos usar estes números em toda a seção:

**1. Início:** como está o clima no primeiro dia, antes de ver qualquer coisa.

| Sol | Chuva |
|---|---|
| 0,7 | 0,3 |

**2. Transição:** se hoje está X, qual a chance de amanhã estar Y. É uma condicional: P(amanhã | hoje).

| Hoje \ Amanhã | Sol | Chuva |
|---|---|---|
| **Sol** | 0,8 | 0,2 |
| **Chuva** | 0,5 | 0,5 |

Leia a linha "Sol": se hoje faz sol, amanhã faz sol em 80% dos casos e chove em 20%. **Cada linha soma 1**, porque amanhã o clima tem de ser alguma coisa.

**3. Emissão:** em cada clima, qual a chance de ver cada observação. Também é uma condicional: P(observação | clima).

| Clima \ Observação | com guarda-chuva | sem guarda-chuva |
|---|---|---|
| **Sol** | 0,2 | 0,8 |
| **Chuva** | 0,9 | 0,1 |

Muitas vezes o enunciado dá só a coluna "com guarda-chuva". A outra sai pelo complemento: 1 − 0,2 = 0,8 e 1 − 0,9 = 0,1.

**Não confunda as tabelas:** a transição liga **clima a clima** (de um dia para o outro). A emissão liga **clima à observação** (no mesmo dia).

### O que vamos observar

- Dia 1: o colega chegou **com** guarda-chuva.
- Dia 2: o colega chegou **sem** guarda-chuva.

Duas perguntas diferentes podem ser feitas sobre isso:

| Pergunta | Algoritmo |
|---|---|
| Qual a probabilidade de observar exatamente "com, sem"? | **forward** |
| Qual a sequência de climas que melhor explica "com, sem"? | **Viterbi** |

### Passo 1: o primeiro dia (igual nos dois algoritmos)

O primeiro dia é **exatamente** a árvore da seção 4. Para cada clima, a pergunta é:

> Em que fração de todos os mundos possíveis o dia 1 tem **este clima E** a observação que vimos?

É a regra do "E": **início × emissão**.

| Clima | Início | × Emissão de "com guarda-chuva" | = Valor do dia 1 |
|---|---|---|---|
| Sol | 0,7 | × 0,2 | **0,14** |
| Chuva | 0,3 | × 0,9 | **0,27** |

Em contagem, com 10.000 mundos possíveis: 7.000 começam com sol, e em 1.400 deles o colega levou guarda-chuva; 3.000 começam com chuva, e em 2.700 deles ele levou guarda-chuva.

**O que esse número significa (e o que ele não significa).** O valor 0,27 é P(chuva **e** guarda-chuva no dia 1): a ponta da árvore, dividida por **todos** os mundos. Ele **não** é P(chuva | guarda-chuva), que seria 0,27 / (0,14 + 0,27) ≈ 0,66 (seção 4). O forward trabalha com pontas da árvore e não divide nada.

**Erros comuns no primeiro dia:**

| Erro | Conta errada | Por que está errado |
|---|---|---|
| Usar só a emissão | 0,9 | Ignora que só 30% dos dias começam com chuva |
| Usar só o início | 0,3 | Ignora o que você observou |
| Somar | 0,3 + 0,9 = 1,2 | "E" multiplica; e uma probabilidade não passa de 1 |
| Dividir (confundir com Bayes) | 0,27 / 0,41 ≈ 0,66 | Isso é P(chuva \| guarda-chuva), outra pergunta |

### Passo 2 do jeito ingênuo: listar todos os caminhos

Com 2 climas e 2 dias, há 4 sequências possíveis de clima. Para cada uma, multiplique tudo o que acontece no caminho (regra do "E"):

```
início × emissão do dia 1 × transição para o dia 2 × emissão do dia 2
```

| Caminho | Início | × Emissão dia 1 (com) | × Transição | × Emissão dia 2 (sem) | = Probabilidade |
|---|---|---|---|---|---|
| Sol → Sol | 0,7 | × 0,2 | × 0,8 | × 0,8 | **0,0896** |
| Sol → Chuva | 0,7 | × 0,2 | × 0,2 | × 0,1 | **0,0028** |
| Chuva → Sol | 0,3 | × 0,9 | × 0,5 | × 0,8 | **0,1080** |
| Chuva → Chuva | 0,3 | × 0,9 | × 0,5 | × 0,1 | **0,0135** |

Conferindo a primeira linha passo a passo: 0,7 × 0,2 = 0,14; 0,14 × 0,8 = 0,112; 0,112 × 0,8 = 0,0896.

Agora as duas perguntas são fáceis:

- **Forward (probabilidade de ver "com, sem"):** o resultado pode vir de qualquer um dos 4 caminhos, então **some** todos (regra do "OU"):
  0,0896 + 0,0028 + 0,1080 + 0,0135 = **0,2139**.
- **Viterbi (melhor explicação):** escolha o caminho de **maior** valor: **Chuva → Sol** (0,1080).

Faz sentido: no dia 1 o guarda-chuva sugere chuva; no dia 2 a falta dele sugere sol.

**Essa é toda a diferença entre os dois algoritmos: o forward soma os caminhos, o Viterbi fica com o maior.**

### Passo 2 do jeito esperto: um número por clima

Listar caminhos funciona com 4. Com 3 climas e 20 dias, seriam 3²⁰ ≈ 3,5 bilhões. O forward e o Viterbi evitam isso guardando **um único número por clima a cada dia**.

A ideia: para calcular o dia 2, você não precisa saber o caminho inteiro até o dia 1. Precisa só do valor de cada clima no dia 1 (0,14 e 0,27). O amanhã depende só do hoje; essa é a propriedade de Markov.

#### Forward, dia 2

Para cada clima do dia 2, pergunte: **de onde se pode chegar aqui?** Do sol ou da chuva de ontem. Some as duas chegadas e multiplique pela emissão de hoje.

```
valor(clima hoje) = [ soma, para cada clima de ontem, de: valor(ontem) × transição(ontem → hoje) ] × emissão(hoje)
```

**Sol no dia 2:**

| Vindo de | Valor do dia 1 | × Transição para Sol | = Chegada |
|---|---|---|---|
| Sol | 0,14 | × 0,8 | 0,112 |
| Chuva | 0,27 | × 0,5 | 0,135 |
| **Soma das chegadas** | | | **0,247** |

× emissão de "sem guarda-chuva" no sol (0,8) = **0,1976**

**Chuva no dia 2:**

| Vindo de | Valor do dia 1 | × Transição para Chuva | = Chegada |
|---|---|---|---|
| Sol | 0,14 | × 0,2 | 0,028 |
| Chuva | 0,27 | × 0,5 | 0,135 |
| **Soma das chegadas** | | | **0,163** |

× emissão de "sem guarda-chuva" na chuva (0,1) = **0,0163**

**Probabilidade de observar "com, sem":** some os climas do último dia: 0,1976 + 0,0163 = **0,2139**. É o mesmo número da lista de caminhos.

Compare com a tabela de caminhos: 0,1976 é a soma dos dois caminhos que terminam em Sol (0,0896 + 0,1080), e 0,0163 a dos dois que terminam em Chuva (0,0028 + 0,0135). O forward só agrupou os caminhos pelo clima final antes de somar.

#### Viterbi, dia 2

Mesmo esquema, mas em vez de somar as chegadas, **fique com a maior** e anote de onde ela veio.

| Clima no dia 2 | Chegada vindo de Sol | Chegada vindo de Chuva | Maior | × Emissão (sem) | Valor | Veio de |
|---|---|---|---|---|---|---|
| Sol | 0,14 × 0,8 = 0,112 | 0,27 × 0,5 = 0,135 | 0,135 | × 0,8 | **0,108** | Chuva |
| Chuva | 0,14 × 0,2 = 0,028 | 0,27 × 0,5 = 0,135 | 0,135 | × 0,1 | **0,0135** | Chuva |

**Lendo a resposta de trás para a frente:** no último dia, o maior valor é Sol (0,108). Ele veio de Chuva. Então a sequência mais provável é **Chuva → Sol**, a mesma da lista de caminhos.

### Com 3 dias ou mais

Repita o passo 2 quantas vezes forem necessárias, sempre usando os valores do dia anterior:

1. Dia 1: início × emissão.
2. Cada dia seguinte: para cada clima, calcule as chegadas (valor de ontem × transição), **some** (forward) ou pegue a **maior** (Viterbi), e multiplique pela emissão de hoje.
3. No fim: forward soma os valores do último dia; Viterbi pega o maior e volta pelas anotações de "veio de".

### Resumo da seção

| | Forward | Viterbi |
|---|---|---|
| Pergunta | Qual a probabilidade das observações? | Qual a sequência de estados mais provável? |
| Primeiro dia | início × emissão | início × emissão (igual) |
| Dias seguintes | **soma** das chegadas × emissão | **maior** chegada × emissão, anotando de onde veio |
| Resultado final | soma dos valores do último dia | maior valor do último dia + caminho de volta |

---

## 6. Perda de entropia cruzada

### O conceito

No treino, o modelo dá uma probabilidade ao token correto. A perda de cada exemplo é:

```
perda = −log(probabilidade dada ao token correto)
```

**O que é esse −log, sem matemática:** é uma função que transforma "probabilidade alta" em "perda perto de zero" e "probabilidade baixa" em "perda grande". Não é preciso calcular log à mão; os exercícios trazem os valores. O que importa é a forma da curva:

| Probabilidade do token correto | Perda (−log) |
|---|---|
| 0,90 | 0,105 |
| 0,50 | 0,693 |
| 0,25 | 1,386 |
| 0,10 | 2,303 |
| 0,01 | 4,605 |

Perto de 1, a perda é quase zero. Perto de 0, ela dispara. Repare: ir de 0,90 para 0,50 aumenta a perda em 0,59, mas ir de 0,10 para 0,01 aumenta em 2,30. **Errar com confiança custa caro.**

### O passo a passo (perda de um lote)

1. Converta **cada** probabilidade em perda, exemplo por exemplo.
2. Some todas as perdas.
3. Divida pelo número de exemplos.

### A regra de ouro

> **Aplique o −log em cada exemplo primeiro e tire a média depois.**

Tirar a média das probabilidades e aplicar o −log no fim dá outro número, porque o −log é uma curva.

### Exemplo resolvido 7

Modelo A: 0,50 e 0,50. Modelo B: 0,90 e 0,10.

| | Modelo A | Modelo B |
|---|---|---|
| 1. Perdas | 0,693 e 0,693 | 0,105 e 2,303 |
| 2. Soma | 1,386 | 2,408 |
| 3. Média | **0,693** | **1,204** |

Os dois têm probabilidade média de 0,50, mas B tem perda bem maior: o erro confiante (2,303) pesa mais do que o acerto confiante (0,105) economiza.

O atalho errado daria o mesmo valor para os dois: média das probabilidades = 0,50 → −log(0,50) = 0,693. É o erro que a regra de ouro evita.

---

## 7. Similaridade de cosseno

### O conceito

O cosseno mede o **ângulo** entre dois vetores, e não a distância entre eles. Pense em duas setas saindo do mesmo ponto: o cosseno diz se apontam para o mesmo lado, não se uma é mais comprida.

```
cos(a, b) = (a · b) / (|a| × |b|)
```

- **a · b** (produto escalar): multiplique as coordenadas uma a uma e some. [1, 2] · [3, 4] = 1×3 + 2×4 = 3 + 8 = 11.
- **|a|** (tamanho): raiz da soma dos quadrados. |[3, 4]| = √(3² + 4²) = √(9 + 16) = √25 = 5.

| Cosseno | Leitura |
|---|---|
| 1 | mesma direção |
| 0 | perpendiculares, sem relação |
| −1 | direções opostas |

### O passo a passo

1. Calcule o produto escalar.
2. Calcule o tamanho de cada vetor.
3. Divida o produto escalar pela multiplicação dos tamanhos.

### Exemplo resolvido 8

Consulta [4, 3]. Documentos X = [3, 4] e Y = [30, 40].

| | X = [3, 4] | Y = [30, 40] |
|---|---|---|
| 1. Produto com a consulta | 4×3 + 3×4 = 24 | 4×30 + 3×40 = 240 |
| 2. Tamanhos | \|X\| = 5, \|consulta\| = 5 | \|Y\| = 50, \|consulta\| = 5 |
| 3. Cosseno | 24 / (5 × 5) = 24 / 25 = **0,96** | 240 / (50 × 5) = 240 / 250 = **0,96** |

Y é X multiplicado por 10: mesma direção, mesmo cosseno. **O tamanho do vetor não importa.**

---

## Checklist antes de responder

- [ ] Identifiquei se a pergunta pede "E" (multiplicar), "OU" (somar), "não" (1 − p) ou "entre os…" (dividir)?
- [ ] O resultado ficou entre 0 e 1? Uma multiplicação deu um número menor que os fatores?
- [ ] Escrevi a probabilidade condicional em palavras ("entre os ___, quantos ___")?
- [ ] No Bayes, separei pela taxa de base **antes** de aplicar a frequência da evidência?
- [ ] No bigrama, montei a tabela com **todos** os fatores e listei **todas** as ocorrências da palavra anterior?
- [ ] Alguma frase deu zero? Conferi qual **par** nunca foi visto?
- [ ] No HMM, usei a transição entre dias e a emissão dentro do mesmo dia, sem trocar as tabelas?
- [ ] No HMM, a pergunta é sobre a probabilidade das observações (forward, **soma**) ou sobre a melhor sequência de estados (Viterbi, **máximo**)?
- [ ] Na perda, apliquei o −log em cada exemplo **antes** de tirar a média?
- [ ] No cosseno, lembrei que só a direção conta?
