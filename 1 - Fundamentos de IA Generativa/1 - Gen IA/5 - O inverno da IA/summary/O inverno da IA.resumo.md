# Resumo: O inverno da IA

*MBA em Engenharia de Software com IA. Módulo: Fundamentos de IA Generativa. Aula 5*

---

## 1. O inverno da IA (anos 1970–1980)

Depois do otimismo dos anos 1950 e 1960, veio a **frustração**.

- Havia **expectativa muito alta**, muito **investimento** e muita gente apostando em redes neurais e em "máquinas que pensam".
- Os sistemas da época **não conseguiam resolver problemas complexos**. Os motivos:
  - **Pouco poder de processamento**, tanto para redes neurais simples quanto para sistemas baseados em regras;
  - Regras **"se... senão... então"** que não davam conta de problemas complexos;
  - **Falta de dados** para o aprendizado.
- Na prática, a IA era **"cega, surda e muda"**: não entendia **linguagem natural**, não reconhecia **imagem** nem **som** e **não conseguia aprender**.

**Resultado:** os **investimentos caíram drasticamente**, o interesse diminuiu e poucas pessoas continuaram atrás do sonho. Esse período ficou conhecido como o **primeiro inverno da IA**¹.

---

## 2. A luz no inverno: redes neurais recorrentes (1982)

Mesmo durante o inverno, houve avanços importantes.

**John Hopfield** propôs as **redes neurais recorrentes**²:
- **Antes:** a saída de um neurônio era a saída final. Era uma linha única de pergunta → resposta.
- **Agora:** a **saída de um neurônio pode ser a entrada de outro**, ou até **do próprio neurônio**. Forma-se uma **cadeia** de entradas e saídas, mais parecida com as conexões do cérebro humano.
- Isso permite simular a **memória associativa** humana: **lembrar padrões incompletos e completá-los** com o tempo.

> Foi um paradigma extremamente importante para a evolução da IA depois do inverno.

---

## 3. Fim do inverno: a virada para a probabilidade

No final do inverno, a IA troca a **lógica de sim/não** pelos **modelos probabilísticos**.

### O problema da incerteza
- **Antes:** a máquina trabalhava só com **certeza**, sim ou não.
- **Mas a mente humana lida com incerteza.** Exemplo da aula: "isso na tela é um boneco de neve?" Provavelmente sim, pelo contexto, mas poderia ser de algodão ou duas bolas de sorvete. Escolhemos a **resposta mais provável** dado o contexto.
- As máquinas passaram a fazer o mesmo, usando **estatística para lidar com a incerteza**. Para o professor, essa é a grande mudança deste momento.

### Novidades da época
- **Cadeias de Markov**
- **Reconhecimento de fala**
- **Classificação automática de dados**, que depois seriam usados para treinar IAs

---

## 4. Anos 1990–2000: a estatística toma conta

Com **mais dados**, **mais poder computacional** e **modelos estatísticos** para categorizar e usar esses dados, a IA volta ao jogo.

### Naive Bayes³ e o filtro de spam
- O **Naive Bayes** é um **classificador baseado em probabilidade condicional**: qual a probabilidade de um item pertencer a uma classe, dado o grau de certeza ou incerteza?
- **Problema real:** caixas de e-mail lotadas de lixo, que nem tinha nome no começo. Depois veio o termo **"spam"**.
- **Solução:** classificar automaticamente o que é spam.
- Para o professor, foi **o primeiro modelo de IA que trouxe benefício concreto para o dia a dia**. Hoje usamos sem perceber, e com acurácia cada vez maior.

> "Quando o problema aparece, a solução vem mais rápido."

### Cadeias de Markov e a previsão da próxima palavra
- Modelam **sequências** e permitem **prever o próximo elemento**, como a próxima palavra de um texto.
- **Por que isso importa:** sem prever a próxima palavra, a máquina até entende um texto, mas **não consegue conversar**, porque não gera uma nova cadeia de palavras a partir do que entendeu.
- Primeiras aplicações em **jogos e música** (sequências sendo criadas).
- Ainda "menos inteligente" que hoje, mas a estatística **começa a mostrar eficiência**.

---

## 5. 2010–2014: Deep Learning

- Surge com a popularização do **Big Data** e das **GPUs**, que trouxeram poder computacional gigante.
- Permite adicionar **várias camadas** às redes neurais. Técnicas que antes eram **limitadas pelos recursos computacionais** passam a ser aplicadas **em larga escala**.
- Aplicações: **reconhecimento de fala** e **tradução automática** (o Google Tradutor entra no dia a dia).

---

## 6. 2014: GANs (Generative Adversarial Networks)

São **dois modelos que competem** para gerar dados realistas:

| Gerador | Discriminador |
|---|---|
| **Cria** o conteúdo (rostos, imagens, ambientes fictícios) | **Avalia** se está certo ou errado, real ou falso |

- Os dois **aprendem juntos**: um cria e o outro julga, repetidamente.
- A grande sacada vai além de a máquina aprender: é **um novo modelo de como ensinar a máquina a aprender**.

---

## 7. 2017: a revolução dos Transformers

- Apresentados no artigo **"Attention Is All You Need"**⁴, muito bem recebido pela comunidade.
- **Mudam todo o processamento de linguagem natural (PLN).**
- Usam o **mecanismo de atenção** para focar nas **partes mais importantes da entrada** e entender **o contexto inteiro**, com mais eficiência que as **redes neurais recorrentes**.
- Abrem caminho para o **BERT (2018)** e para o **ChatGPT**, o boom que conhecemos.

---

## 8. 2020 em diante: o boom generativo

Impulsionados principalmente pelos **Transformers**:

| Tipo | Exemplos |
|---|---|
| Texto | **GPT-3, GPT-4** |
| Imagem | **DALL-E** |
| Vídeo | **Sora**, **Veo 3** |

A IA passa a falar, gerar imagens e vídeos e fazer de tudo com muito mais eficiência. É por isso que o curso existe.

---

## 🗓️ Linha do tempo completa (aulas 4 + 5)

| Período | Marco |
|---|---|
| Antiguidade | Autômatos na mitologia grega |
| 1950 | Turing: "as máquinas podem pensar?" e o Teste de Turing |
| 1956 | Conferência de Dartmouth |
| 1957/58 | Perceptron (Rosenblatt) |
| Anos 1960 | IA baseada em regras "se... então" |
| **1970–1980** | ❄️ **Inverno da IA** |
| 1982 | Redes neurais recorrentes (Hopfield) |
| Fim dos anos 1980 | Modelos probabilísticos, cadeias de Markov |
| 1990–2000 | Estatística, Naive Bayes, filtro de spam |
| 2010–2014 | Deep Learning (Big Data + GPUs) |
| 2014 | GANs (gerador × discriminador) |
| 2017 | Transformers ("Attention Is All You Need") |
| 2018 | BERT |
| 2020+ | GPT-3/4, DALL-E, Sora, Veo 3 e o boom generativo |

---

## 🎯 Para levar da aula

1. **Inverno da IA:** expectativa alta, entrega baixa. Sem processamento e sem dados, a IA era "cega, surda e muda", e o investimento secou.
2. **Hopfield (1982):** com as redes recorrentes, a saída de um neurônio vira entrada de outro, simulando **memória associativa**.
3. **Virada probabilística:** da certeza (sim/não) para a **probabilidade**, que permite lidar com incerteza (o boneco de neve).
4. **Naive Bayes e filtro de spam:** a primeira IA com benefício concreto no dia a dia.
5. **Markov:** prever a próxima palavra, a base para "conversar".
6. **Deep Learning** (Big Data + GPUs), depois **GANs** (gerador × discriminador), depois **Transformers** (atenção). Daí veio o boom generativo.
7. Reaparecem os **3 pilares da aula 1**: **dados**, **GPUs** e **Transformers**.

---

### Notas
1. A transcrição fala em "primeiro inverno". A literatura costuma situá-lo entre **1974 e 1980** e registra um **segundo inverno** no fim dos anos 1980 e início dos 1990, depois do colapso do mercado de sistemas especialistas.
2. A transcrição registrou "redes neurais frequentes" em um trecho. O termo correto é **recorrentes**. A rede de Hopfield rendeu a John Hopfield o **Prêmio Nobel de Física de 2024**, dividido com Geoffrey Hinton.
3. A transcrição registrou "Knife Banes". O nome correto é **Naive Bayes**, baseado no teorema de Bayes.
4. Publicado em 2017 por pesquisadores do **Google** (Vaswani et al.). O **BERT** também é do Google, e o **ChatGPT** foi lançado pela OpenAI em **novembro de 2022**. "Viu 3" na transcrição é o **Veo 3**, do Google.
