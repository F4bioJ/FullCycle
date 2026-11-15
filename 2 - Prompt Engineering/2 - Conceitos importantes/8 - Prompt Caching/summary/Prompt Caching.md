# Prompt Caching

## Prompt caching e reaproveitamento de tokens

Prompt caching é o reaproveitamento de partes repetidas do prompt para evitar que o provider reprocese os mesmos tokens em toda chamada. Isso importa porque custo e latência já crescem com o contexto, então repetir blocos fixos sem reaproveitamento desperdiça processamento. A consequência prática é direta: quando um prefixo, instrução fixa ou documento recorrente aparece muitas vezes, vale desenhar o prompt para maximizar repetição útil.

## Cache do provider não é Redis da aplicação

O cache discutido aqui não é o cache da aplicação, como Redis, usado para guardar respostas, objetos ou estados do sistema. No prompt caching, quem reaproveita o conteúdo é o provider ou o mecanismo associado ao modelo, reduzindo o trabalho de inferência sobre tokens repetidos. Essa distinção muda a arquitetura da solução: um cache de aplicação evita recomputar no seu backend; o cache do provider evita reprocessar contexto no lado do modelo.

## OpenAI: caching automático e transparente

Na OpenAI, o caching ocorre de forma automática e transparente: o provider decide o que entra em cache e por quanto tempo permanece disponível. Isso não elimina a necessidade de engenharia; apenas desloca o esforço para o desenho do prompt, que deve manter o máximo possível de texto fixo no início das interações. Se cada chamada muda demais, o reaproveitamento cai e o desconto desaparece, mesmo sem nenhuma mudança na lógica da aplicação.

## Escrever para repetição na OpenAI

Retomando o cenário da aplicação, a camada nova agora é a reutilização: partes fixas do prompt deixam de ser apenas contexto e passam a ser candidatas a reaproveitamento. Em um provider com cache automático, a estratégia é estabilizar instruções, estrutura e prefixos para que os mesmos tokens reapareçam entre chamadas. Prompt Engineering, nesse caso, não busca só qualidade de resposta; busca também previsibilidade de repetição para capturar economia operacional.

## Gemini: cache explícito por API

No Gemini, o cache pode ser criado explicitamente por API, o que dá mais controle sobre o que será reaproveitado. Em vez de depender apenas da detecção automática de repetição, a aplicação informa que determinado conteúdo deve ser cacheado e depois o referencia em chamadas futuras. Esse modelo muda o desenho do prompt porque parte do contexto deixa de ser reenviada como texto bruto e passa a ser reutilizada por referência.

## ID de conteúdo cacheado

Quando um conteúdo é cacheado explicitamente, ele recebe um identificador que funciona como referência reutilizável. A chamada futura não precisa reenviar o documento inteiro; basta enviar a nova pergunta junto com o ID do conteúdo já armazenado. Isso é especialmente útil quando o mesmo artefato, como um PDF, será consultado repetidamente em várias perguntas independentes.

## Exemplo prático com PDF recorrente

Se um PDF será consultado muitas vezes, reenviá-lo inteiro em cada pergunta faz o provider reprocessar o mesmo conteúdo repetidamente. A alternativa é fazer o upload uma vez, criar o cache desse documento e guardar o ID retornado. Depois, perguntas como “qual é o assunto principal deste PDF?” passam a usar o ID do cache, reduzindo custo e evitando reprocessamento desnecessário do arquivo completo.

## TTL e custo de retenção

TTL, ou Time To Live, define por quanto tempo o conteúdo cacheado permanece disponível para reutilização. Esse parâmetro importa porque cache não é gratuito: além do eventual custo de criação, o provider pode cobrar pelo armazenamento e pelo tempo de retenção. O valor do cache aparece quando o conteúdo será reutilizado o suficiente para compensar esse custo inicial e o período configurado.

## Quando vale criar cache

Cache explícito não deve ser criado para conteúdo descartável ou de uso único, porque há um custo para materializar e manter esse estado. Ele faz sentido quando o mesmo documento, bloco fixo ou contexto recorrente será consultado várias vezes ao longo do fluxo da aplicação. A decisão correta depende da frequência de reutilização, do tamanho do conteúdo e do mecanismo oferecido pelo provider.

## Prompt Engineering como otimização operacional

Prompt Engineering também é escrever de forma intencional para reaproveitamento, não apenas escolher técnicas como one-shot, few-shot ou chain of thought. O desenho do prompt muda conforme o provider: na OpenAI, a meta é maximizar repetição útil; no Gemini, além disso, é possível separar conteúdos recorrentes e referenciá-los por ID. Essa visão conecta prompt, custo, latência e escolha de provider como decisões de engenharia, não apenas de redação.
