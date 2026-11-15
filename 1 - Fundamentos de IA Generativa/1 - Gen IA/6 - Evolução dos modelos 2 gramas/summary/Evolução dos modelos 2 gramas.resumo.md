# Resumo: Evolução dos modelos (2-gramas)

*MBA em Engenharia de Software com IA. Módulo: Fundamentos de IA Generativa. Aula 6*

---

## 1. Combinado da aula: abstrair primeiro, complicar depois

A partir desta aula o conteúdo fica **mais técnico**. Para não despejar de uma vez frameworks, algoritmos e álgebra, o professor (Nathan) adota uma estratégia:

- Começa com uma **abstração simplificada** e vai **acrescentando complexidade** ao longo das aulas.
- É **proposital**. Quem já conhece IA vai achar que "faltou coisa", e quem revisitar esta aula no fim do curso vai perceber que a realidade é bem mais complexa.
- **Objetivo final:** chegar ao conceito de **LLMs** (*Large Language Models*), os modelos por trás do **ChatGPT**¹, do **DeepSeek** e dos principais geradores atuais. Antes disso, é preciso entender **de onde viemos** e **quais problemas** levaram até eles.

---

## 2. Do sim/não à probabilidade

### A lógica clássica da computação
- Tudo começa no **binário**: ligado/desligado, **0 ou 1**, sim ou não.
- Essa lógica é ótima para **raciocínio lógico e contas**. A computação começou como uma **calculadora** e evoluiu para linguagens e automações.
- Por trás, é uma **árvore de decisões**: um caminho leva a outro, que leva a outro, e assim por diante.

### Como o humano realmente decide
- Não decidimos com sim/não rígidos. Decidimos com base em **estatística e probabilidade**, o famoso **"achômetro"**²: "acho que é mais pra cá do que pra lá".
- **Exemplo da aula:** "o professor está com frio?" Você **infere** pela blusa de manga comprida e pela luz da janela, mas **não sabe**. Escolhe o mais provável.
- Foi essa forma de pensar que começou a movimentar as IAs.

### Primeiro passo: estatística simples
- A IA sai do sim/não básico e passa para **"qual a maior probabilidade?"**.
- Ainda é, no fundo, uma lógica de escolha, mas **guiada por probabilidade**, não por um critério fixo.
- **Resultado:** a máquina já **gera** (texto, imagem), mas gera coisas **simples**, com **regras rígidas e limitadas** e uma **linguagem pouco fluida**, com pouca coerência e criatividade. "É como se a gente estivesse começando a criar um cérebro."

### O próximo passo (adiantado na aula)
Com **mais poder de processamento** e uma **mudança conceitual**, a IA deixa de representar a linguagem de forma direta e rígida e passa a representá-la por **contexto e criatividade**, mais perto do que o ser humano faz.

---

## 3. O modelo de bigrama (2-grama)

**Bigrama** (escrito também como **2-grama**) é a estratégia de **prever a próxima palavra olhando apenas para pares de palavras**³.

### Exemplo 1: "bom" → "dia"
- No treino, o modelo percebe que depois de **"bom"** quase sempre vem **"dia"** (às vezes "bombom", "bom ar"...).
- Então, ao ver "bom", ele prevê "dia". Na próxima rodada, tenta ligar **"dia"** à palavra seguinte, e assim por diante.
- É simples, mas **já é uma quebra de paradigma**: numa árvore de sim/não, o sistema nem chegaria em "dia", porque há muitas continuações possíveis para "bom".

### Exemplo 2: "O gato preto dorme no sofá"
- **"gato preto"** vira um **bigrama forte**: as duas palavras aparecem juntas com frequência.
- O modelo passa a **sempre** colocar "preto" depois de "gato" e pode gerar algo como:
  > "o gato preto dorme no sofá **gato preto** dorme no sofá..."
- Ele **entra em loop**, repete blocos e produz frases desconexas. O professor chama isso de "uma certa alucinação".
- **Foco limitado:** ao processar "preto → dorme", o modelo **já não vê mais "gato"**. Ele enxerga só duas palavras por vez, **não sabe o que veio antes nem o que vem depois**. A construção semântica tem "chance zero de dar certo".

---

## 4. Limitações do bigrama (e da estatística simples)

| Limitação | O que significa |
|---|---|
| **Dependências de longo prazo** | Não liga o que foi dito lá atrás ao que está sendo dito agora. Ex.: o começo da aula (avisar que ficaria técnica) tem uma ligação tão leve com o trecho sobre dependências que nenhuma regra estatística simples conseguiria prever. |
| **Texto fragmentado, repetitivo ou incoerente** | Gera texto, mas sem fluidez e com frases soltas. |
| **Sem compreensão semântica** | Olha só **padrões estatísticos** (frequência de combinação), não o significado. Ainda é "uma visão de exatas" sobre algo que não é 0 ou 1. |
| **Probabilidade local e isolada** | Não mantém **coerência global** do assunto. |
| **Loops repetitivos** | Bigramas fortes ("gato preto") são repetidos sem parar. |
| **Ausência de memória e de projeção** | Não lembra nada além do **n-grama atual**⁴: não olha para trás nem para frente. |

> **Esse era o grande problema.** E é a partir dele que surge o próximo conceito (próxima aula).

---

## 🔗 Ligação com as aulas anteriores

- **Aula 5:** a virada do **sim/não para a probabilidade** (exemplo do boneco de neve) e as **cadeias de Markov** prevendo a próxima palavra. O bigrama é exatamente essa ideia aplicada a texto: um modelo de Markov que olha só a palavra anterior.
- **Aula 5:** o **Transformer** usa o **mecanismo de atenção** para enxergar o **contexto inteiro**, justamente o que falta ao bigrama.

---

## 🎯 Para levar da aula

1. O professor vai **simplificar de propósito** e complicar aos poucos, até chegar nos **LLMs**.
2. A computação nasceu no **sim/não (binário)**, mas o humano decide por **probabilidade** (o "achômetro").
3. A primeira IA generativa usava **estatística simples**: gerava, mas com **regras rígidas e linguagem pouco fluida**.
4. **Bigrama (2-grama):** prevê a próxima palavra olhando **só pares de palavras** ("bom" → "dia").
5. Problemas: **sem dependências de longo prazo**, **sem semântica**, **loops** ("gato preto gato preto..."), **sem memória** além do n-grama atual.
6. Essas limitações motivam a **próxima evolução** dos modelos.

---

### Notas
1. A transcrição registrou "chart GPT-4". O correto é **ChatGPT** (GPT-4).
2. A transcrição registrou "axômetro". A expressão é **"achômetro"**.
3. Tecnicamente, num bigrama a probabilidade da próxima palavra depende **apenas da palavra imediatamente anterior**: P(palavraₙ | palavraₙ₋₁). Num **trigrama** (3-grama) dependeria das duas anteriores, e assim por diante (**n-grama**). A transcrição também registrou "Bigama" em um trecho.
4. A transcrição registrou "enigrama". O termo correto é **n-grama** (*n-gram*), a generalização do bigrama para sequências de *n* palavras.
