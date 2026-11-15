# Prompt Caching — resumo

## O que é Prompt Caching
Prompt caching evita que o modelo reprocesse partes do prompt que se repetem entre chamadas. Sem cache, o provider processa token a token a cada requisição, o que aumenta custo e latência. O reaproveitamento de trechos fixos reduz esse retrabalho computacional.

## Diferença entre cache de aplicação e cache do provider
O cache discutido não é o da aplicação (ex.: Redis) que armazena respostas ou estados do sistema. No prompt caching, é o próprio provider ou mecanismo associado ao modelo que reaproveita tokens repetidos durante a inferência. A distinção muda a arquitetura: cache de aplicação evita recomputação no backend; cache do provider evita reprocessamento de contexto no lado do modelo.

## OpenAI: cache automático e transparente
Na OpenAI, o caching ocorre de forma automática e transparente. O provider decide o que entra em cache e por quanto tempo fica disponível. Se vários prompts começam com o mesmo texto fixo, paga-se valor cheio apenas na primeira vez; nas seguintes, há desconto de cerca de 50%.

## Estratégia de Prompt Engineering para OpenAI
Mesmo com cache automático, a engenharia de prompt deve maximizar a repetição útil. Estabilizar instruções, estrutura e prefixos faz os mesmos tokens reaparecerem entre chamadas, capturando a economia. Se cada chamada varia demais, o reaproveitamento cai e o desconto desaparece.

## Gemini: cache explícito via API
O Gemini permite criar cache explicitamente por API. A aplicação informa qual conteúdo deve ser cacheado (ex.: upload de PDF) e recebe um identificador. Em chamadas futuras, referencia-se esse ID em vez de reenviar o conteúdo completo, dando mais controle sobre o que é reaproveitado.

## Identificador de conteúdo cacheado (Cache ID)
Quando um conteúdo é cacheado explicitamente, ele recebe um ID reutilizável. A chamada futura envia a nova pergunta junto com o ID do conteúdo armazenado. Isso elimina o reenvio do documento inteiro, útil quando o mesmo artefato é consultado repetidamente.

## Exemplo prático: PDF recorrente
Se um PDF será consultado muitas vezes, reenviá-lo a cada pergunta faz o provider reprocessá-lo integralmente. A alternativa: fazer upload uma vez, criar o cache do documento, guardar o ID retornado. Perguntas subsequentes usam o ID, reduzindo custo e evitando reprocessamento desnecessário.

## TTL e custos de retenção
TTL (Time To Live) define por quanto tempo o conteúdo cacheado permanece disponível. Cache não é gratuito: além do custo de criação, o provider pode cobrar pelo armazenamento e pelo tempo de retenção. O valor aparece quando a reutilização compensa o custo inicial e o período configurado.

## Quando vale a pena criar cache explícito
Cache explícito não deve ser criado para conteúdo descartável ou de uso único, pois há custo para materializar e manter o estado. Faz sentido quando o mesmo documento, bloco fixo ou contexto recorrente será consultado várias vezes no fluxo da aplicação. A decisão depende da frequência de reuso, tamanho do conteúdo e mecanismo do provider.

## Prompt Engineering como otimização operacional
Prompt Engineering também é escrever de forma intencional para reaproveitamento, não apenas aplicar técnicas como one-shot, few-shot ou chain of thought. O desenho do prompt muda conforme o provider: na OpenAI, maximiza-se repetição útil; no Gemini, separa-se conteúdos recorrentes e referencia-se por ID. Essa visão conecta prompt, custo, latência e escolha de provider como decisões de engenharia.
