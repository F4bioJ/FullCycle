# Langsmith Prompt Hub

## Prompt Hub como repositório remoto

O Prompt Hub do LangSmith funciona como uma vitrine e um repositório remoto de prompts, com uma experiência próxima à de um GitHub voltado a artefatos de prompt. Ele centraliza publicação, descoberta, documentação, histórico e download, o que permite que um prompt exista fora do repositório da aplicação sem deixar de ser consumível em runtime. Retomando a gestão remota já estabelecida, a novidade aqui é a interface de hub: o prompt passa a viver em um catálogo navegável, com identidade própria e possibilidade de reutilização por outras pessoas e projetos.

## Chat prompt versus string prompt

`Chat prompt` e `string prompt` representam dois formatos diferentes de artefato dentro do hub. O `chat prompt` organiza a instrução em mensagens, normalmente incluindo papéis como system e user, o que o torna adequado para fluxos conversacionais e para prompts que dependem explicitamente dessa estrutura. Já o `string prompt` é o conteúdo textual direto do prompt, tratado como uma única instrução; é o formato mais próximo daquele prompt simples que já vinha sendo usado no exemplo anterior.

## README e documentação do prompt

Cada prompt pode trazer um `README` com instruções de uso, contexto e orientação de integração. Isso transforma o prompt em um artefato publicável e compreensível por terceiros, porque não basta disponibilizar o texto: é preciso explicar como usar, quais entradas esperar e qual problema ele resolve. Quando um prompt remoto tem documentação acoplada, a descoberta e o reuso deixam de depender de conhecimento tácito da equipe que o criou.

## Download e consumo via SDK

O hub não serve apenas para navegação manual; ele também expõe um caminho de consumo programático por SDK. Retomando o uso de SDK já visto como ponte entre gestão externa e aplicação, o ponto novo é que o prompt pode ser baixado diretamente do hub, em vez de ser lido de um arquivo local versionado no projeto. Em sistemas de maior escala, esse consumo remoto costuma ser combinado com cache para evitar chamadas de API contínuas a cada execução.

## Commits e histórico do prompt

O histórico de commits aparece no hub como parte do ciclo de vida do prompt publicado. Essa visualização aproxima o prompt de um artefato de software convencional: mudanças ficam registradas, podem ser inspecionadas e ajudam a entender evolução e manutenção. Aqui, o valor prático não está em redefinir commits, mas em perceber que o repositório remoto expõe esse histórico como parte da governança do prompt.

## Prompt tags para busca

`Prompt tags` são metadados usados para classificar e localizar prompts dentro do LangSmith. Elas melhoram busca e descoberta no hub, especialmente quando o acervo cresce e passa a conter muitos prompts publicados por equipes diferentes. Essas tags não devem ser confundidas com mecanismos de versionamento ou com tags associadas a commits, porque sua função principal aqui é indexação e organização para pesquisa.

## Fork de prompts

O fork permite partir de um prompt existente no hub e criar uma derivação própria para adaptação ou experimentação. Isso é útil quando um prompt público resolve parte do problema, mas precisa de ajustes para o contexto específico da sua aplicação, sem alterar o original. O modelo incentiva reaproveitamento com isolamento: você herda uma base útil, mas mantém autonomia para evoluir sua variante.

## Repositórios públicos e privados

O Prompt Hub suporta repositórios públicos e privados, reproduzindo uma distinção operacional essencial. Repositórios públicos favorecem compartilhamento, descoberta e reutilização por qualquer pessoa com acesso ao hub; repositórios privados restringem visibilidade e consumo, o que é necessário quando o prompt faz parte do comportamento interno de uma aplicação. Nesse cenário, o acesso programático normalmente depende de autenticação por API key, de modo que apenas clientes autorizados consigam carregar o artefato remoto.

## Aplicação prática no fluxo do projeto

Retomando o prompt que antes vivia no projeto local, ele agora ganha uma camada de publicação: passa a ter página própria, documentação, histórico, tipo declarado e possibilidade de download. O desenvolvedor pode navegar pelo hub, identificar se o artefato é `chat prompt` ou `string prompt`, ler o `README`, inspecionar commits, aplicar filtros por `prompt tags` e decidir entre consumir, fazer fork ou manter uma versão privada. Essa camada não substitui os princípios anteriores de organização e integração; ela desloca o ponto de gestão para uma plataforma remota com descoberta e governança mais visíveis.
