# Fluxo basico e considerações importantes

## O fluxo básico do enriquecimento

A solicitação do usuário não vai direto para o modelo que dá a resposta final. Primeiro, ela passa por um LLM responsável por **enriquecer** a pergunta. A versão enriquecida segue para o modelo que de fato responde, e a resposta volta ao usuário.

## Por que dois modelos

Quem enriquece costuma ser um **modelo menor, mais barato e mais rápido**, usado só para esse processamento. Quem gera a resposta final costuma ser um **modelo mais robusto**, que precisa de mais dados ou de informações externas.

## Atalho: cache por palavras-chave

Perguntas feitas com frequência podem ser guardadas em **cache** para economizar. Nesse caso, a reformulação pode ser baseada em **palavras-chave**: ao detectar certas palavras na pergunta, o sistema busca no cache um contexto ligado a elas e o concatena, montando uma instrução mais completa **sem chamar um modelo** para enriquecer. O resultado é menos refinado do que o enriquecimento feito por um LLM, mas economiza bastante custo e tempo. Para perguntas frequentes, dá até para devolver uma resposta já pronta do cache, sem processar tudo de novo. Qual caminho escolher depende do contexto.

## Quantas chamadas ao modelo

A primeira coisa em que o professor pensa ao criar algo com IA é **quantas chamadas** vai fazer ao modelo: cada chamada deixa o processo mais caro e mais lento. Em APIs tradicionais, respostas levam dezenas de milissegundos. Com IA, só o enriquecimento pode levar alguns segundos, e a resposta final pode chegar a um minuto. Por isso, quanto menos camadas, mais rápido e barato o sistema. Não é obrigatório usar um LLM para enriquecer em todos os casos, e chamar o modelo a todo momento é uma abordagem ingênua.

## Por que, ainda assim, enriquecer vale a pena

O enriquecimento ajuda a obter a resposta certa **na primeira pergunta**. Se o usuário precisa perguntar de novo, ou se o sistema precisa repetir a busca ou fazer um *retry* por falta de informação, isso significa mais tokens e mais custo. Por isso esse processo costuma ser subestimado. O "usuário" aqui pode ser uma pessoa, outra IA ou um sistema integrado que consome a API.

## Outras interceptações

Esse não é o único tipo de interceptação. Também existem as de segurança, as feitas antes e depois da execução de uma ferramenta e as feitas antes e depois da chamada ao modelo. O tema não é simples, mas tudo começa com esse tipo de abordagem.
