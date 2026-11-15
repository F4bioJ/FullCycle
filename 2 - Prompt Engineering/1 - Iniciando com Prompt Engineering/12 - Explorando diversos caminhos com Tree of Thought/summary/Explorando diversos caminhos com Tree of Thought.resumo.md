# Explorando diversos caminhos com Tree of Thought — resumo

## O que é Tree of Thought

Depois do Chain of Thought, a aula apresenta o Tree of Thought (ToT, "árvore de pensamentos"). A ideia é que o modelo explore diferentes caminhos de raciocínio, compare esses caminhos e escolha o melhor. Em vez de uma linha só, o raciocínio vira uma árvore com camadas e subcamadas: o modelo pode gerar o raciocínio do raciocínio do raciocínio. Cada ramo (branch) é uma hipótese ou direção, e os sub-ramos detalham como ela se sustenta e como pode ser testada.

## Diferença para o self-consistency

O professor antecipa a dúvida mais comum. No self-consistency, o modelo repete o mesmo raciocínio várias vezes e fica com a resposta mais consistente entre as que gerou (na aula anterior, a da maioria). No Tree of Thought, os caminhos são alternativas diferentes, organizadas em ramos e sub-ramos, e a escolha final segue um **critério** declarado. Segundo o professor, esse é o ponto: no ToT, normalmente você coloca no prompt o critério do que é melhor. O resumo do professor acrescenta que, sem critério explícito, a árvore vira apenas verbosidade organizada. O critério pode ser plausibilidade, custo, escalabilidade, risco ou simplicidade.

## Quando usar

- fazer brainstorming;
- pedir diversas soluções para um problema;
- planejar algo considerando alternativas;
- decidir entre diferentes estratégias (o exemplo do professor são estratégias de estudo);
- avaliar prós e contras, levantar hipóteses e tomar uma decisão final.

O professor diz que usa muito a técnica para brainstorming, para escolher arquitetura e para descobrir opções que nem sabia que existiam. Ao longo da disciplina, esses tipos de prompt serão combinados num único assistente.

## Limitações

- a resposta fica longa e complexa;
- gasta mais tokens;
- é difícil garantir que os ramos sejam realmente distintos: às vezes o modelo segue linhas de raciocínio bem parecidas, e a resposta fica repetitiva;
- precisa de instruções bem claras para funcionar bem. Pelo resumo do professor, prompts vagos geram árvores pobres ou redundantes, e definir o número de opções, os critérios e o formato da comparação melhora o resultado.

## Os três prompts do experimento

**Prompt 1, latência de endpoint.** Papel de engenheiro de software sênior. O endpoint `/user` leva 5 segundos para responder. O prompt pede pelo menos três causas possíveis da latência. Para cada causa, pede uma linha de raciocínio passo a passo, explicando como chegou nela e como verificá-la. Depois, pede para comparar os branches, escolher a hipótese mais plausível e recomendar a próxima ação para depurar e resolver. O professor escreveu "pense como um Tree of Thought" só para deixar registrado no exemplo: segundo ele, não é preciso dizer isso explicitamente, porque a estrutura pedida já faz o trabalho.

**Prompt 2, processamento de imagens.** Um serviço processa milhões de imagens por dia. O prompt pede pelo menos três opções de arquitetura. Para cada uma, pede raciocínio passo a passo sobre escalabilidade, custo e complexidade. Em seguida, pede para comparar as opções, escolher o melhor trade-off, explicar por que uma é superior e terminar com uma resposta final (final answer).

**Prompt 3.** É igual ao prompt 2, mas pede que a saída traga apenas a resposta final, sem nenhum outro texto. Pelo resumo do professor, a escolha da saída depende do uso. A comparação completa é mais auditável e mais longa, e serve para depuração e brainstorming, que pedem visibilidade. Só a resposta final deixa a saída enxuta e atende quem precisa apenas da decisão consolidada, como uma integração em produção. Na aula, o professor descreve esse prompt, mas não o executa.

O professor executa uma mensagem de cada vez, porque as respostas são muito verbosas.

## Resultado do prompt 1 no GPT-3.5 Turbo

O modelo levantou três causas:

- **Banco de dados:** queries lentas. Para verificar, monitorar o tempo de execução, analisar o plano de execução das queries e otimizar com índices ou reescrita.
- **Rede:** verificar com traceroute, ping e o equipamento de rede; considerar uma CDN (content delivery network).
- **Código:** ineficiências, como no mecanismo de cache.

Na comparação, escolheu o banco de dados como a hipótese mais plausível, por ser uma causa comum de lentidão em endpoints. Recomendou começar a investigação por ele. O professor não rodou o prompt nos outros modelos para o vídeo não ficar grande e repetitivo.

## Resultado do prompt 2 no GPT-4o

O modelo avaliou três arquiteturas pelos mesmos critérios:

- **Serverless:** funções como Lambda, object storage e filas de mensagens. Escala automaticamente, mas tem limites de cota e de duração. Paga-se pela execução, e o custo pode crescer bastante em picos de volume. Simplifica a infraestrutura, mas exige lógica extra para as tarefas nesse ambiente.
- **Microsserviços com containers:** com a escalabilidade, o custo e a complexidade próprios dessa opção.
- **Monólito escalável em cloud:** também justificado pelos três critérios.

Depois, montou a comparação e deu como resposta final a arquitetura serverless, pelo melhor trade-off. O professor diz que concorda, mas que "depende": falta muita informação no prompt para uma decisão real. O valor está em ver por que uma alternativa foi preferida, não em a resposta ser sempre a certa.

## O que fica

Um prompt curto pode gerar uma quantidade enorme de informação: o prompt 2 tinha só 94 tokens de entrada. Daria para pedir dez arquiteturas em vez de três e receber dez comparações. A técnica serve para montar um plano de desenvolvimento, desenhar uma arquitetura, tirar dúvidas, estudar e descobrir possibilidades que você não conhecia. Pequenos ajustes no prompt mudam completamente a resposta. Pelo resumo do professor, o custo não depende só do tamanho da entrada, mas da estrutura de raciocínio pedida e do volume de saída. Por isso, o ToT vale mais quando o ganho de explorar e decidir compensa o gasto extra de tokens e o tempo de resposta.
