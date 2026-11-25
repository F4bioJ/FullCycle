# Skill com MCP — resumo

O professor mostra como criar uma skill que consome um MCP, integrando as duas coisas para chegar ao resultado esperado. O exemplo usa o **MCP do GitHub** e uma skill de **triagem das issues abertas** de um repositório. As issues de teste são fictícias, geradas com o próprio MCP.

## Skill é o como, MCP é a porta

O primeiro ponto é a diferença entre os dois. Para o professor, a **skill** é uma habilidade que se quer separar e reutilizar sempre que necessário. O **MCP** é uma porta para entrar em alguma coisa: aqui, a porta do GitHub, para acessar os dados e fazer interações externas; mas poderia ser um banco de dados ou qualquer ferramenta que dê suporte a MCP. Na fórmula dele: a skill é o **como**, e o MCP é a **porta**, o acesso.

## O dado vivo entra em tempo de execução

No desafio da aula, a issue está aberta e pode mudar a toda hora. Por isso ela nunca entra dentro da skill: chega pelo MCP, em tempo de execução, inclusive quando uma issue é criada ou atualizada. A skill só carrega o procedimento necessário para dar o resultado; aqui, o procedimento de triagem, que devolve um relatório do que está em aberto no momento.

## Docker e o catálogo de MCP

A aula usa o Docker, que precisa estar instalado (pelo site docker.com ou por linha de comando). O professor mostra, só por curiosidade, que o próprio Docker tem um **catálogo de MCP servers** e age como um gateway: em Settings, ativa-se o MCP; no MCP Toolkit, escolhe-se um item do catálogo, informam-se as chaves quando preciso, e o MCP fica pronto no Docker. Ele não usa esse caminho: prefere configurar passo a passo, para que se entenda de fato como se usa um MCP.

## O Docker Compose do MCP do GitHub

O primeiro passo é o arquivo Docker Compose. Ele pode vir pronto da internet, onde há muitos exemplos; o professor o gera com a LLM. Pede um serviço chamado **gh-mcp**, com `stdin_open` como `true` e o personal token vindo do ambiente. Acrescenta uma opção porque, como não se usa terminal, a comunicação vem num formato de pipeline, e define o comando com **stdio**.

Ao rodar `docker compose up` (sem `-d`, para ver o que acontece), vem o erro esperado: falta o token do GitHub.

## O personal access token

Com uma conta no GitHub, o caminho é Settings, depois Developer Settings, e então a criação de um personal access token **fine-grained**. O professor dá um nome, põe expiração de sete dias e escolhe o acesso: todos os repositórios ou só um. Nas permissões, a aula só precisa da parte de **issues**, em read-only ou em read and write. Ele observa que antes era preciso dar acesso ao repositório à parte, e que isso não existe mais.

O token vai num arquivo `.env`, e o professor não mostra essa parte porque o token é de uso pessoal. Com o token configurado, o container é recriado e o MCP do GitHub aparece funcionando no Docker.

## Registrando o MCP no Claude Code

Numa sessão aberta, o `/mcp` não mostra nenhum MCP do GitHub, só alguns que ele já usava. O professor sai da sessão para adicionar o novo MCP com o comando `claude mcp`:

- `claude mcp list` lista os MCPs já adicionados;
- `claude mcp add` adiciona um novo: ele o chama de `github`, define o **escopo de projeto** e usa `docker compose run` com o serviço `gh-mcp` como forma de executar o MCP server.

O comando gera um **`.mcp.json`** com o tipo, o comando e o environment; ele tira o environment, que não tem utilidade naquele momento. Numa nova sessão, o GitHub MCP aparece em nível de projeto (há outros MCPs em nível global), conectado e com **41 tools** disponíveis.

## A skill de triagem

Com o MCP pronto, falta só a skill, criada em `.claude/skills`. O professor traz uma pronta e simples. O frontmatter segue a mesma metodologia das aulas anteriores, com uma diferença: no `allowed-tools` não entram comandos bash, e sim **comandos de MCP**, que nada mais são que tools (das 41 disponíveis). A skill lista list issues, get issue e search issues, e o professor diz que ela deve usar só essas tools.

## Citar o MCP na instrução

O professor considera importantíssimo citar o uso do MCP na instrução, para garantir que ele seja usado: como também existem o CLI e a API do GitHub, o modelo pode escolher outra forma de acesso. Com a skill pedindo o MCP e sem referência à API ou a outro acesso, ele tende a procurar o MCP primeiro. Usar um MCP dentro da skill é, basicamente, instrução ("use o GitHub MCP").

## Os passos da skill

Depois de buscar as issues, a skill classifica cada uma em P0 a P3, numa escala que vai do que quebra produção, passando pelo bug sério e pelo bug de impacto, até o P3, simplesmente cosmético. Em seguida detecta issues em duplicidade e, por fim, gera um relatório.

## Testando: gerar issues e fazer a triagem

O professor pede ao Claude Code que analise as categorias da skill de triagem e, com base nelas, gere 10 issues no repositório, usando o MCP do GitHub. O Claude lê a skill e usa as tools do MCP: primeiro vê o perfil, depois lista as issues, e as cria. Como a triagem não foi pedida, ele só gerou as issues.

Depois ele pede a triagem de issues, passando o repositório. A skill usa o GitHub MCP e devolve o resultado: as prioridades definidas, ainda sem nenhuma label nas issues, e os próximos passos pedidos no relatório.

## Até onde dá para ir

O professor lembra que poderia pedir para adicionar labels, definir as prioridades e completar descrição e autores, ou até criar skills que automatizem todo o processo junto com outros MCPs. A intenção, porém, era mostrar como chamar um MCP a partir de uma skill e como configurá-lo.
