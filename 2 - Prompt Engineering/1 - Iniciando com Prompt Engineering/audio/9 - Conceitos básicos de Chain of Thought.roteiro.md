# Conceitos básicos de Chain of Thought

## Abertura

Na aula passada, o jogo era mostrar exemplos para o modelo imitar. Um exemplo, no one-shot. Alguns, no few-shot. E vimos que exemplo demais e conflitante deixa o modelo indeciso.

Hoje a ideia é outra. Em vez de mostrar o que a resposta deve parecer, pedimos ao modelo que pense em etapas antes de responder. É o Chain of Thought, cadeia de pensamento, ou CoT.

Vamos ver para que serve, como uma frase simples muda até o modo de funcionamento do modelo, onde a técnica falha e o uso mais esperto dela: descobrir por que uma IA está errando.

## O que é Chain of Thought

A frase-âncora é: Chain of Thought é pedir ao modelo que pense em etapas antes da resposta final.

Pense num mecânico. Um diz só: "é a bomba de combustível". Outro diz: "o carro liga e morre, a bateria está boa, a faísca está boa, então o combustível não está chegando, então é a bomba". Os dois podem estar certos. Mas só o segundo mostra o caminho.

O CoT serve para tudo que se pensa passo a passo. Resolver um cálculo. Explicar a lógica de um algoritmo. Listar as etapas para corrigir um bug. Mostrar como se chegou a uma conclusão num debate. Montar o plano de um projeto.

O professor sugere um teste. Faça uma pergunta a uma IA. Depois, faça a mesma pergunta com "pense passo a passo" no fim. A resposta muda completamente.

De novo: Chain of Thought é pedir ao modelo que pense em etapas antes da resposta final.

## O roteador

A frase-âncora deste bloco é: o prompt pode mudar o modo como o modelo trabalha, não só o texto da resposta.

No ChatGPT, o GPT-5 tem um roteador. Ele lê a sua pergunta e decide: respondo direto ou mando para o modelo de reasoning, aquele que monta uma linha de raciocínio antes de responder?

É como a triagem de um pronto-socorro. Um corte pequeno vai para o curativo rápido. Um caso complicado vai para o especialista, que demora mais e custa mais.

Agora, o detalhe importante. Se você escreve "pense passo a passo antes de responder", o roteador manda a pergunta para o reasoning, mesmo que ela seja simples. Uma frase no fim do prompt muda o caminho inteiro. É como chegar na triagem dizendo "quero o especialista": você vai para lá, mesmo com um arranhão.

Ou seja: o prompt pode mudar o modo como o modelo trabalha, não só o texto da resposta.

## Onde o CoT falha

A frase-âncora é: mostrar os passos não garante a resposta certa.

Primeiro, a resposta fica longa. O modelo pensa em etapas e mostra as etapas.

Segundo, ele pode inventar passos que não aconteceram. E isso acontece até nos modelos mais avançados.

Terceiro, o raciocínio pode não bater com a conclusão. O professor dá um exemplo caricato: "pego um, pego outro um, somo e tenho dois". E logo depois: "resposta final, três". Os passos estavam certos. A conclusão não combina com eles.

Quarto, o modelo pode errar a conta dentro de um dos passos.

E quinto, o custo. Numa tarefa simples, pedir passo a passo gasta mais tokens, demora mais e, muitas vezes, entrega a mesma qualidade da resposta direta. Num agente ou num sistema que roda o tempo todo, uma instrução dessas mal colocada consome tokens sem parar. O conselho do professor é pensar dez vezes antes de usar.

Então: mostrar os passos não garante a resposta certa.

## Auditar e depurar

A frase-âncora deste bloco é: o grande valor do CoT é poder auditar a resposta.

Lembra da prova na escola? A questão terminava com "justifique". Não bastava escrever vinte e dois. Era preciso mostrar como chegou ao vinte e dois. O CoT é esse "justifique".

E isso tem um uso prático muito bom. Imagine um sistema que você fez e que está respondendo errado. Você mexe no prompt, mexe de novo, e não descobre a causa. Então ative o CoT por um tempo. O modelo mostra o passo a passo, e você vê exatamente em que ponto o raciocínio dele desvia. Aí você corrige o prompt naquele ponto.

É como pedir ao mecânico que explique o diagnóstico. Se ele disser "a bateria está boa" e você souber que não está, achou o erro.

Depois de corrigir, vale perguntar se o passo a passo precisa continuar em produção, já que ele custa caro.

De novo: o grande valor do CoT é poder auditar a resposta.

## Comparando com o few-shot

Few-shot e CoT resolvem problemas diferentes.

No few-shot, você mostra exemplos e o modelo imita o padrão. O ganho é controle sobre a forma da saída.

No CoT, você pede que o modelo pense em etapas e mostre como chegou à resposta. O ganho é poder ver o caminho.

As duas técnicas cobram em tokens, mas de jeitos diferentes. No few-shot, você paga pelos exemplos que entram no prompt. No CoT, você paga pela resposta longa e, às vezes, pelo reasoning que a frase aciona.

E as duas podem trabalhar juntas. Os exemplos fixam o formato do diagnóstico, e o CoT mostra como o modelo chegou a ele.

## Revisão

As âncoras. Chain of Thought é pedir ao modelo que pense em etapas antes da resposta final. O prompt pode mudar o modo como o modelo trabalha, não só o texto da resposta. Mostrar os passos não garante a resposta certa. O grande valor do CoT é poder auditar a resposta.

Três perguntas.

Primeira pergunta: por que escrever "pense passo a passo" numa pergunta simples ao GPT-5 deixa a resposta mais lenta e mais cara?

[pausa 5]

Resposta: porque a frase leva o roteador a mandar a pergunta para o modelo de reasoning, mesmo sem a tarefa precisar.

Segunda pergunta: o modelo mostrou passos corretos e concluiu outra coisa. O que isso ensina?

[pausa 5]

Resposta: que os passos ajudam a inspecionar, mas não garantem a resposta. O raciocínio exibido pode nem combinar com a conclusão.

Terceira pergunta: seu sistema responde errado e você não sabe por quê. Como o CoT ajuda?

[pausa 5]

Resposta: ative o CoT por um tempo, veja em que passo o raciocínio desvia e corrija o prompt nesse ponto. Depois, avalie se vale manter o passo a passo em produção.
