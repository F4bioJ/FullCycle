# Langsmith Prompt Hub

## Prompts fora do projeto, mas com cache

Com ferramentas de gestão, os prompts não precisam ficar no projeto nem no Git. Mas, rodando em larga escala, é preciso fazer cache, para não chamar a API o tempo inteiro.

## Um "GitHub de prompts"

O hub do LangSmith é um repositório de prompts (hoje, de outras coisas também), parecido com um GitHub: várias pessoas publicam prompts, e você pode usá-los nos seus projetos. Cada prompt mostra curtidas, visualizações e downloads; um prompt de RAG, por exemplo, tem milhões de downloads.

## Chat prompt e string prompt

O hub indica o tipo do prompt. O **chat prompt** tem instruções de sistema e mensagens de conversa. O **string prompt** é o conteúdo do prompt numa única chamada. O prompt usado nos exemplos anteriores do curso é desse segundo tipo.

## O que cada prompt traz

Cada prompt traz:

- um README com tutorial de uso, como baixá-lo pelo SDK e como chamá-lo;
- a lista de commits do prompt;
- as prompt tags, que ajudam na busca. Há uma confusão comum entre elas e as tags dos commits, que o professor promete esclarecer.

Também dá para fazer fork de um prompt.

## Públicos e privados

Como no GitHub, há repositórios públicos e privados. Os prompts privados não ficam visíveis, e só a sua aplicação consegue chamá-los, com uma API key.
