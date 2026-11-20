# Fazendo push de um prompt

## O que a demonstração mostra

Se o prompt está no LangSmith, como a aplicação o usa? Para isso existe o SDK. Nesta aula, o professor publica (faz push de) um prompt por código, com um script `langsmith_push`, que depende das variáveis de ambiente do LangSmith.

## De onde vem o prompt publicado

O script carrega o prompt do repositório local, usando o `registry.get_prompt` e o caminho do prompt. É só para o exemplo: normalmente não faz sentido manter o prompt no projeto se ele vai ficar no LangSmith. A exceção é um esquema de sincronização, comum para não chamar o LangSmith toda hora, e nesse caso é preciso escolher qual lado é a fonte da verdade.

## O `push_prompt`

Com o client do LangSmith, o `push_prompt` recebe:

- **o ID do prompt (o nome):** funciona como um repositório do GitHub; não pode haver dois com o mesmo nome;
- **o prompt template:** o conteúdo do prompt, que poderia ser simplesmente uma string, no padrão de prompt template já usado no YAML;
- **as tags:** são prompt tags, metadados à vontade. No exemplo: a versão do registry com um "v" na frente, o modelo e a descrição.

## O experimento

1. Com o prompt `agent-pull-request-creator` na versão 1.0.0 do registry, rodar o push. O prompt aparece no LangSmith com um hash: é um string prompt template, com um commit e as prompt tags 1.0.0 e o modelo (gpt-5 nano). Como no hub, dá para ver o template, as tags, o tipo e o autor do commit, e comentar.
2. Rodar o push de novo, sem mudar nada: dá erro. Não é por causa do nome, e sim porque o LangSmith usa um hash do conteúdo, e não aceita subir o mesmo prompt com o mesmo hash. Para fazer push, o prompt precisa ter mudado.
3. Mudar para a versão 1.0.1 e fazer o push: agora há dois commits no histórico, e a prompt tag mostra 1.0.1.

## O que isso mostra (a pegadinha)

Dá para ver a última versão e o histórico, mas a prompt tag é só um metadado para buscar e organizar. Ela não é uma tag de versão que a aplicação use para escolher o prompt. O próximo vídeo mostra isso ao baixar o prompt.
