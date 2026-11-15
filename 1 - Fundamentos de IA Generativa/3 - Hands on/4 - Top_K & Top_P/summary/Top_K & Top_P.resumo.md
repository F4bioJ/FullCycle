# Top_K & Top_P — resumo

## A escolha do próximo token não é fixa

O modelo gera texto prevendo o próximo token, mas não entrega simplesmente o de maior probabilidade. Em "O céu hoje estava...", mesmo que "limpo" tenha 60% e todos os outros fiquem abaixo disso, ele não decide por "limpo" e pronto: existe um grau de aleatoriedade na escolha. Esse grau é ajustado por parâmetros, como a temperatura, vista antes, e o top-k.

## Por que deixar essa abertura

Sem abertura, o modelo escolhe sempre as mesmas opções, e o professor aponta três problemas:

- **Repetição:** ele tem dificuldade de ser criativo e de criar palavras e contextos novos.
- **Frases sem sentido:** indo sempre pelo caminho mais direto, ele pode acabar gerando frases que não fazem sentido.
- **Previsibilidade excessiva:** a conversa fica mecânica, parecida com a de um chatbot de árvore de decisão.

A abertura aproxima o texto da linguagem humana. Mas ela também precisa de limite, porque abrir demais dá espaço a opções improváveis. Top-k e top-p definem até onde a escolha pode ir.

## Top-k sampling

Top-k é uma técnica estatística, não exclusiva das LLMs. O modelo considera apenas os **K tokens de maior probabilidade** para decidir o próximo token da sequência. K é uma variável que você define.

## Como o corte por K funciona

1. O modelo calcula a probabilidade de todos os tokens possíveis. O professor fala em "palavras", mas, como visto na aula de Tokens, um token nem sempre é uma palavra inteira.
2. Ordena do mais provável para o menos provável.
3. Fica com os K primeiros e despreza os demais naquele passo, mesmo que ainda tenham alguma probabilidade.
4. Escolhe um token dentro desse conjunto, com certo grau de aleatoriedade.

Com K = 10, ficam dez tokens; com K = 2, só os dois primeiros; com K = 3, os três primeiros. Na prática, a lista completa costuma ter muito mais do que dez candidatos. O corte é um limite rígido de quantidade: não importa quanto da probabilidade total esses candidatos representam.

## Exemplo de top-k

Em "O sol está brilhando no...", com K = 5:

| Token | Probabilidade |
|---|---|
| céu | 0,35 |
| horizonte | 0,25 |
| mar | 0,15 |
| campo | 0,10 |
| deserto | 0,08 |

Do sexto token em diante, tudo é descartado. O modelo escolhe entre esses cinco e nem sempre entrega "céu": a escolha depende do grau de abertura, inclusive da temperatura.

## Top-p sampling

Top-p, também chamado de *nucleus sampling*, segue outra estratégia. Em vez de fixar um número de tokens, ele olha a distribuição e fixa uma **probabilidade acumulada**: entram os tokens mais prováveis até que a soma seja maior ou igual a P.

Por isso, o tamanho do conjunto muda. Com P = 60%, se os dois primeiros tokens já somam 60%, ficam dois; se forem precisos três, ficam três. Pode dar dois, cinco, seis ou sete, conforme o peso de cada token.

## Massa acumulada de probabilidade

É a soma progressiva das probabilidades, dos tokens mais prováveis para os menos prováveis. O top-p não pergunta quantos candidatos entram, e sim quanta probabilidade total se quer cobrir antes de parar. Se poucos tokens concentram quase tudo, o conjunto é pequeno; se a distribuição está espalhada, ele cresce. Assim, o top-p acompanha a incerteza do modelo em cada contexto.

## Exemplo de top-p

Com P = 0,9, o professor soma, nos valores que usa neste exemplo:

| Token | Probabilidade | Soma acumulada |
|---|---|---|
| céu | 0,35 | 0,35 |
| horizonte | 0,25 | 0,60 |
| mar | 0,15 | 0,75 |
| campo | 0,08 | 0,83 |
| deserto | 0,07 | 0,90 |
| luz | 0,04 | fora |

A soma atinge 90% em "deserto", então "luz" e os seguintes ficam de fora. A escolha acontece entre os cinco primeiros.

Os valores de "campo" e "deserto" não são os mesmos do exemplo de top-k (lá, 0,10 e 0,08), embora o resumo escrito do professor fale em "mesmos candidatos". Com os valores anteriores, a soma chegaria a 0,93, e o corte continuaria em "deserto".

## Diferença entre corte por K e corte por P

| | Top-k | Top-p |
|---|---|---|
| O que é fixo | a quantidade de tokens | a probabilidade coberta |
| O que varia | a probabilidade coberta | a quantidade de tokens |
| Ponto forte | mais simples de prever | se adapta à distribuição |

## Relação com a temperatura

Temperatura e top-k/top-p atuam em camadas diferentes. A temperatura altera a distribuição, deixando-a mais concentrada ou mais espalhada; top-k e top-p definem quais tokens continuam elegíveis. Combinados, ajustam tanto o formato da distribuição quanto o tamanho do espaço de escolha. Ao ler resultados no Hugging Face, misturar essas duas funções leva a conclusões erradas sobre a "criatividade" do modelo. A próxima aula mostra a variação do top-p na prática.
