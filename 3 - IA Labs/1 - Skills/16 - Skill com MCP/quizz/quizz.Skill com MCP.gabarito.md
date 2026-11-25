# Gabarito — Skill com MCP

## 1. Relatório semanal de pedidos atrasados: o que fica na skill e o que vem do MCP?
**Correta: C**
**Por quê:** na fórmula do professor, a skill é o "como" e o MCP é a "porta". Dado que muda a toda hora, como as issues abertas da aula (ou os pedidos atrasados), não entra na skill: chega pelo MCP em tempo de execução. A skill carrega só o procedimento, aqui o critério de atraso e o formato do relatório.
- **A:** guardar o critério na skill está certo, mas a cópia dos pedidos numa referência envelhece entre uma atualização e outra. Progressive disclosure resolve quando ler, não deixa vivo o dado copiado; a aula põe o dado vivo no MCP.
- **B:** inverte os papéis: o procedimento é da skill, e o acesso é do MCP. Além disso, credenciais não devem ficar na skill (aula "O que é uma skill"); na aula, o token fica no `.env`.
- **D:** script determinístico serve a passos exatos, como linters; aqui ele faria o papel de porta, que a aula dá ao MCP, e deixaria o MCP justamente com o dado que não muda.
**Conceito:** skill como procedimento e MCP como acesso ao dado vivo

## 2. MCP com 41 tools conectado: a skill de triagem ainda faz falta?
**Correta: A**
**Por quê:** o MCP é a porta de acesso às issues. O que a skill acrescenta é o procedimento que se quer reutilizar: classificar de P0 a P3, detectar duplicidade e gerar o relatório com próximos passos. Sem a skill, esse procedimento teria de ser reescrito a cada pedido.
- **B:** list, get e search issues buscam e leem issues; o critério de prioridade P0 a P3 está escrito na skill, não nas tools.
- **C:** na aula, o Claude usa as tools do MCP para criar as 10 issues de teste sem que a triagem rode, e criar issue nem está entre as tools que a skill lista. As tools do MCP ficam disponíveis na sessão; o `allowed-tools` diz quais a skill deve usar.
- **D:** o token fica no `.env`, lido pelo container do MCP. Segredo dentro da skill é o que a aula "O que é uma skill" manda vetar.
**Conceito:** o que o MCP resolve e o que só a skill traz

## 3. Skill sem citar o MCP e Claude usando o gh: por quê?
**Correta: D**
**Por quê:** o professor considera importantíssimo citar o MCP na instrução, porque existem o CLI do GitHub e a API, e o modelo pode simplesmente escolher outra forma de acesso. Com a skill pedindo o MCP, sem referência à API ou a outro acesso, ele tende a procurar o MCP primeiro.
- **A:** a aula não fala de latência nem manda desinstalar ferramentas. A correção que ela dá é na instrução da skill, e o gh pode continuar instalado.
- **B:** a aula registra o MCP em escopo de projeto e ele funciona; ela não fala de escopo global vencendo o de projeto. A causa da escolha pelo gh é a instrução que não cita o MCP.
- **C:** o professor nem usa `-d` (roda o compose em primeiro plano para ver o que acontece), e o MCP é registrado com `docker compose run`, que executa o servidor. O sintoma é de escolha de via, não de servidor fora do ar.
**Conceito:** citar o MCP na instrução para ele ser a via primária

## 4. O que vai no allowed-tools de uma skill que usa MCP?
**Correta: B**
**Por quê:** no frontmatter, o professor não usa comandos bash, e sim comandos de MCP, que "nada mais são que tools" entre as 41 disponíveis. A skill lista list issues, get issue e search issues, e, segundo ele, deve usar só essas.
- **A:** é verdade que o MCP roda via `docker compose run`, mas quem o executa é o Claude Code, pelo registro do `claude mcp add`; a skill não chama esse comando, e o campo passa a listar as tools do MCP.
- **C:** a aula lista tools específicas, e não o servidor inteiro. O ponto do campo, na fala do professor, é restringir a skill a essas tools.
- **D:** o `.mcp.json` registra o servidor (tipo, comando, environment), não as tools que a skill deve usar. A aula preenche o `allowed-tools`.
**Conceito:** tools de MCP no allowed-tools

## 5. Configuração do MCP do GitHub: qual afirmação está INCORRETA?
**Correta: C**
**Por quê:** é a afirmação falsa. O catálogo de MCP do Docker só foi mostrado por curiosidade; o professor diz que não vai usá-lo, para configurar passo a passo. Depois do erro do token, ele cria o personal access token, põe no `.env` e recria o container. E, no catálogo, as chaves também são informadas pelo usuário quando há necessidade.
- **A:** verdadeira. Ele diz que poderia pegar o compose pronto da internet, onde há muitos exemplos, mas usa a LLM.
- **B:** verdadeira. Ele pede `stdin_open` como `true`, acrescenta uma opção porque não usa terminal e a comunicação vem em formato de pipeline, e define o comando com stdio.
- **D:** verdadeira. No `claude mcp add`, ele usa `docker compose run` com o serviço `gh-mcp`, "o formato onde eu quero executar esse MCP server".
**Conceito:** configuração passo a passo do MCP via Docker Compose

## 6. Um token para criar issues de teste e fazer a triagem: qual configuração?
**Correta: A**
**Por quê:** a aula cria um token fine-grained, com expiração de sete dias e só a permissão de issues, em read-only ou read and write. Como o mesmo token vai criar as issues de teste, precisa de escrita. O valor vai no `.env`, e o professor não o mostra porque é de uso pessoal.
- **B:** read-only basta para a triagem, mas não para criar as issues de teste pelo MCP, que também faz parte do cenário.
- **C:** o professor observa que a permissão separada de acesso ao repositório não existe mais: o acesso ao repositório já é escolhido no topo do formulário.
- **D:** o `.mcp.json` tem uma seção de environment, mas o professor a tira, e o token fica no `.env`. Versionar no projeto um token de uso pessoal o expõe a quem tem acesso ao repositório.
**Conceito:** personal access token com permissão mínima e fora do versionamento

## 7. MCP adicionado em outro terminal e /mcp da sessão aberta sem o GitHub: o que fazer?
**Correta: D**
**Por quê:** o professor sai da sessão para adicionar o novo MCP e, depois do `claude mcp add`, abre uma nova sessão; só nela o GitHub MCP aparece, conectado e com 41 tools. É o mesmo efeito da aula "Frontmatter", em que um repositório criado em outro Bash só foi reconhecido depois de fechar e abrir o Claude Code.
- **A:** o container já está funcionando, com o token lido. O que falta é a sessão do Claude Code carregar o registro novo.
- **B:** o `.mcp.json` é gerado no projeto pelo próprio comando, e a nova sessão já o reconhece; a aula não faz commit nenhum.
- **C:** a aula registra o MCP com `docker compose run`, que executa o servidor quando o Claude Code precisa; rodar em segundo plano não é o que faz o MCP aparecer.
**Conceito:** MCP novo exige uma nova sessão do Claude Code

## 8. Issues geradas sem triagem: o que fazer para obter o relatório?
**Correta: B**
**Por quê:** o pedido foi gerar issues com base nas categorias da skill; o Claude leu a skill para entender as categorias e usou as tools do MCP para criar as issues. Nas palavras do professor, como ele não pediu para usar a skill (a triagem), "ele só gerou de fato". Na sequência, ele pede a triagem de issues passando o repositório, e a skill devolve o relatório.
- **A:** na triagem seguinte, a skill encontrou as issues recém-criadas sem nenhuma reinicialização do container.
- **C:** a aula faz a triagem logo em seguida, só com um novo pedido, e não mostra sessão nova nesse ponto. Sessão nova foi preciso para carregar o MCP recém-adicionado, não para acionar de novo uma skill.
- **D:** a triagem não parou por bloqueio: ela não foi pedida. E a skill funciona com as tools de leitura que lista (list, get e search issues), sem precisar da tool de criar issue.
**Conceito:** a skill roda o que foi pedido

## 9. Prioridades no relatório e nenhuma label no GitHub: por quê?
**Correta: C**
**Por quê:** os passos da skill são buscar as issues, classificar de P0 a P3, detectar duplicidade e gerar o relatório. O resultado mostrado traz as prioridades e os próximos passos, sem labels. O professor diz que poderia pedir para adicionar labels ou criar skills para automatizar o processo, mas isso fica como extensão.
- **A:** o MCP do GitHub não é só leitura: na própria aula ele cria as 10 issues de teste. O limite está no que a skill foi feita para fazer.
- **B:** a aula não mostra atraso de exibição; o relatório já diz que não há labels, porque a skill não as aplica.
- **D:** detectar duplicidade é um passo da skill, mas ela não tem etapa de rotular para pular; o relatório é o produto final.
**Conceito:** escopo da skill de triagem: classificar e relatar

## 10. Levar a skill de pendências do gh para o MCP: o que muda?
**Correta: A**
**Por quê:** juntando o que a aula mostra: o MCP precisa estar registrado no projeto (`claude mcp add`, que gera o `.mcp.json`), o `allowed-tools` passa a listar tools do MCP em vez de comandos bash, e a instrução precisa citar o MCP, porque o modelo pode escolher o CLI ou a API se a skill não pedir o MCP.
- **B:** chamar a API com o token troca uma via por outra, mas continua fora do MCP; a aula trata a API como uma alternativa que o modelo pode escolher, não como o caminho do MCP.
- **C:** é o oposto do que o professor alerta: com outras vias disponíveis, o modelo pode continuar no gh se a instrução não citar o MCP, e aqui os comandos gh ainda estão escritos no `skill.md`.
- **D:** script determinístico é para passos exatos; a aula não manda o servidor MCP executar scripts da skill. O uso do MCP na skill é, basicamente, instrução.
**Conceito:** o que muda numa skill para usar MCP
