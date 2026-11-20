# Fazendo push de um prompt

## Push programático com o SDK

Publicar um prompt no LangSmith por código conecta o repositório local ao hub remoto sem depender da interface. O fluxo central é simples: carregar o template local, instanciar o client autenticado por variáveis de ambiente e chamar `push_prompt`. Retomando o exemplo do agente de pull request, a novidade aqui não é o ID nem o template em si, mas o empacotamento desse artefato para publicação remota. Esse passo transforma o prompt local em um item versionado no hub com histórico de commits.

## Variáveis de ambiente e autenticação

As variáveis de ambiente sustentam a autenticação e a configuração do client antes do push. Sem elas, o script não consegue se conectar à conta ou ao workspace corretos, então o problema não é apenas conveniência, mas viabilidade operacional. Como a autenticação já foi preparada anteriormente, o ponto novo aqui é que o script de publicação depende desse contexto para funcionar fora da interface. Em troubleshooting, falhas de push costumam começar por credenciais ausentes, inválidas ou carregadas no ambiente errado.

## Carregando o prompt local antes de publicar

O script usa algo como `registry.getPrompt` para localizar um prompt no projeto e obter seu conteúdo antes do envio. Isso serve como fonte de entrada para o push, não como exigência arquitetural: o template também poderia vir de uma string em memória ou de outra origem. A escolha por carregar do registry é útil para reaproveitar a organização já existente no projeto e demonstrar que o mesmo artefato local pode ser promovido ao hub. Se houver sincronização entre local e remoto, a equipe precisa decidir explicitamente qual lado é a fonte da verdade.

## `push_prompt`: ID, template e metadados

A chamada `push_prompt` envia ao LangSmith pelo menos três elementos relevantes neste contexto: o ID do prompt, o template e as tags. O ID identifica o artefato remoto de forma única dentro do hub; na prática, ele funciona como um nome reservado que não pode colidir com outro prompt no mesmo espaço. O template é o conteúdo efetivo publicado, e as tags entram como metadados auxiliares, como versão textual, modelo associado e descrição. Separar esses papéis evita confundir identificação do artefato, conteúdo publicado e informação de catalogação.

## Prompt tags não são a versão operacional

`Prompt tags` servem para busca, filtro e organização, não para representar o mecanismo real de versionamento consumível. Colocar `v1.0.0`, `model:gpt-5-nano` ou uma descrição nas tags ajuda a catalogar o prompt, mas isso não transforma essas tags em identificadores de commit. Essa distinção é crítica porque a aparência de “versão” nas tags pode induzir a equipe a tratá-las como referência operacional estável. Elas são metadados úteis, mas não substituem o identificador real gerado pela plataforma.

## Hash como identificador do commit

O push gera um hash que representa o estado publicado do prompt naquele commit. Esse hash é o identificador efetivo da revisão criada no hub e é ele que diferencia uma publicação nova de uma tentativa de reenviar exatamente o mesmo conteúdo. Quando o mesmo prompt é enviado novamente sem alteração, o sistema detecta que o estado já existe e retorna erro em vez de criar um commit redundante. Em outras palavras, o versionamento real está ancorado no conteúdo publicado, não na tag textual que você anexou.

## Reenvio do mesmo conteúdo e erro de duplicidade

Executar o mesmo script duas vezes sem mudar o prompt falha porque o segundo envio produz o mesmo hash do primeiro. Isso mostra que o controle de commits não depende apenas do nome do prompt: o nome identifica o artefato lógico, mas o hash identifica o estado exato daquele artefato. Para gerar um novo commit, é necessário alterar o conteúdo publicado e então executar o push novamente. Mudar apenas a intenção sem mudar o template não cria uma nova revisão real.

## Evolução do exemplo: de `1.0.0` para `1.0.1`

Retomando o prompt de `pull request creator`, alterar o registro local de `1.0.0` para `1.0.1` e publicar novamente só produz um novo commit se o estado enviado for diferente. Quando isso acontece, o hub passa a exibir dois commits, o template publicado e as `prompt tags` associadas a cada envio. O histórico visível facilita inspeção e auditoria, mas a leitura correta continua sendo: tags ajudam a organizar, enquanto o commit é identificado pelo hash. Essa separação prepara o consumo remoto correto nas próximas etapas do fluxo.

## Inspeção no hub após o push

Depois da publicação, o prompt aparece no hub com tipo, template, commits, autor e campos auxiliares como comentários. Essa visualização confirma que o push não apenas armazenou texto, mas registrou uma revisão navegável dentro da infraestrutura remota já usada para gestão de prompts. O valor prático disso está em permitir publicação programática sem perder histórico nem governança. O hub vira o ponto de consulta do estado publicado, enquanto o script vira o mecanismo de promoção desse estado.
