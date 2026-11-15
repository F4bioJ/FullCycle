# CoT com Self-consistency

## Abertura

Nas últimas aulas, vimos o Chain of Thought: pedir ao modelo que pense em etapas antes de responder. Vimos também que pensar em etapas não garante a resposta certa. Um único raciocínio pode tomar um caminho errado e chegar a uma conclusão errada.

Hoje vem uma técnica que ataca justamente esse ponto: o self-consistency, ou autoconsistência. A ideia é simples. Em vez de confiar num raciocínio só, peça vários e fique com a resposta que mais se repete.

Vamos ver como funciona, quando compensa, e um experimento que mostra o lado bom e o lado perigoso da técnica.

## O que é self-consistency

A frase-âncora é: self-consistency é raciocinar várias vezes e ficar com a resposta da maioria.

Pense em três amigos que fazem a mesma conta de cabeça para dividir a conta do restaurante. Dois chegam em oitenta reais por pessoa, um chega em noventa e cinco. Você provavelmente fica com oitenta. Não porque provou que está certo, mas porque dois caminhos independentes chegaram no mesmo lugar.

O professor dá o exemplo de uma prova de múltipla escolha. Você pergunta ao modelo e ele marca A. Pergunta de novo e ele marca B. Com self-consistency, ele elabora a linha de raciocínio várias vezes e escolhe a resposta mais consistente entre as que ele mesmo gerou. Se as respostas forem diferentes, fica a da maioria.

Serve para confirmar um cálculo, validar hipóteses diferentes, classificar sentimento, revisar a interpretação de um texto e decidir numa questão de múltipla escolha. Para o professor, brilha principalmente quando você está em dúvida sobre uma decisão técnica, um cálculo ou um algoritmo.

Repetindo: self-consistency é raciocinar várias vezes e ficar com a resposta da maioria.

## Limitações

A frase-âncora aqui é: consistência não é prova de verdade.

Primeiro, gasta mais tokens. Se você pede três linhas de raciocínio, o modelo escreve três vezes. Segundo, pode ser mais lento. Terceiro, nem sempre converge para a resposta certa. Quarto, em tarefas fáceis, agrega pouco valor: se uma resposta direta já acerta, votar entre três respostas certas só custa mais. E quinto, pode repetir respostas redundantes.

Voltando aos amigos do restaurante. Se dois deles esquecerem a gorjeta do mesmo jeito, os dois chegam no mesmo número errado, e a maioria vence com o erro. Votação mostra estabilidade. Não mostra que a resposta está certa.

De novo: consistência não é prova de verdade.

## O experimento

O professor usa um problema clássico de programação. Um endpoint de uma API busca todos os usuários no banco. Depois, num laço, busca os posts de cada usuário, um por um. Pergunta: para N usuários, quantas consultas ao banco são feitas?

A resposta certa é N mais um. Uma consulta para trazer a lista de usuários, e mais uma para cada usuário. É o famoso problema do N mais um.

O prompt pede três linhas de raciocínio diferentes, passo a passo. No fim, o modelo deve resumir as respostas e escolher a mais consistente, ignorando outliers, ou seja, respostas espúrias, muito diferentes das outras. Dá para pedir mais caminhos, dez ou vinte, se quiser.

E há uma condição: se as três respostas forem diferentes, o modelo deve dizer apenas que não encontrou uma resposta consistente. O professor admite que quase nunca conseguiu fazer essa condição funcionar.

## Os resultados

No GPT-três-ponto-cinco Turbo, primeira execução. O primeiro caminho disse N: esqueceu a consulta da lista. O segundo disse N mais um, a resposta certa. O terceiro imaginou uma otimização que o código não tinha e chegou a duas consultas. Três respostas diferentes. Pela regra do prompt, o modelo devia admitir que não havia consenso. Não admitiu. Respondeu N, que está errado, mesmo tendo gerado a resposta certa num dos caminhos.

Segunda execução: os três caminhos deram N mais um, e a resposta final foi N mais um. Certo.

Terceira execução: N, N e N mais um. O modelo escolheu N, pela maioria. Ele foi consistente, como o professor observa, mas consistente com o erro.

No GPT-quatro-o, duas execuções. Nas duas, os três caminhos deram N mais um.

## O que o experimento ensina

A frase-âncora deste bloco é: a técnica organiza a decisão, mas o modelo continua mandando no resultado.

O self-consistency só escolhe entre o que o modelo consegue gerar. Se o modelo tende a errar do mesmo jeito, a votação consolida o erro. Foi o que o três-ponto-cinco fez na terceira execução. Um modelo mais forte, como o quatro-o, gera caminhos melhores, e a votação tem material melhor para escolher.

Por isso, a técnica não transforma um modelo fraco num modelo forte. Ela reduz a dependência de um único raciocínio defeituoso, o que já é muito, mas não corrige um viés que se repete.

Então: a técnica organiza a decisão, mas o modelo continua mandando no resultado.

## Comparando com o que já vimos

O Chain of Thought pede um raciocínio em etapas. Você ganha um caminho que pode auditar, mas é um caminho só, e ele pode estar errado.

O self-consistency pede vários raciocínios e compara as conclusões. Você ganha robustez contra um erro isolado, mas paga várias vezes o custo de raciocinar.

E lembre do few-shot com exemplos conflitantes. Lá, o modelo oscilava entre respostas a cada execução, e isso era um problema. Aqui, a variação entre caminhos é aproveitada de propósito: é justamente comparando caminhos diferentes que a técnica escolhe.

## Revisão

As âncoras. Self-consistency é raciocinar várias vezes e ficar com a resposta da maioria. Consistência não é prova de verdade. A técnica organiza a decisão, mas o modelo continua mandando no resultado.

Três perguntas.

Primeira pergunta: os caminhos deram N, N e N mais um, e o modelo respondeu N. A técnica falhou?

[pausa 5]

Resposta: a técnica fez o que promete, escolheu a maioria. O problema é que a maioria estava errada. Consistência não é prova de verdade.

Segunda pergunta: os três caminhos deram respostas diferentes, e o prompt mandava admitir que não havia consenso. O que o três-ponto-cinco fez?

[pausa 5]

Resposta: ignorou a condição e respondeu N, que estava errado, mesmo tendo gerado a resposta certa num dos caminhos.

Terceira pergunta: vale usar self-consistency num classificador simples, de alto volume, que já acerta bem?

[pausa 5]

Resposta: pouco. Em tarefas fáceis, a técnica agrega pouco valor e multiplica o custo em tokens e o tempo. Ela compensa mais numa decisão técnica em que há dúvida.
