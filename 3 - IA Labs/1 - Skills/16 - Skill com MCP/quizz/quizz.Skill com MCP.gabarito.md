# Gabarito — Skill com MCP

## 1. Relatório semanal de pedidos atrasados: o que fica na skill e o que vem do MCP?
**Correta: C**
**Por quê:** na fórmula do professor, a skill é o "como" e o MCP é a "porta". Dado que muda a toda hora, como as issues abertas da aula (ou os pedidos atrasados), não entra na skill: chega pelo MCP em tempo de execução. A skill carrega só o procedimento, aqui o critério de atraso e o formato do relatório.
- **A:** guardar o critério na skill está certo, mas a cópia dos pedidos numa referência envelhece entre uma atualização e outra. Progressive disclosure resolve quando ler, não deixa vivo o dado copiado; a aula põe o dado vivo no MCP.
- **B:** inverte os papéis: o procedimento é da skill, e o acesso é do MCP. Além disso, credenciais não devem ficar na skill (aula "O que é uma skill"); na aula, o token fica no `.env`.
- **D:** script determinístico serve a passos exatos, como linters; aqui ele faria o papel de porta, que a aula dá ao MCP, e deixaria o MCP justamente com o dado que não muda.
**Conceito:** skill como procedimento e MCP como acesso ao dado vivo

## 2. MCP de chamados conectado: a skill de fechamento ainda faz falta?
**Correta: A**
**Por quê:** o MCP é a porta de acesso aos dados. O que a skill acrescenta é o procedimento que se quer separar e reutilizar: na aula, classificar de P0 a P3, detectar duplicidade e gerar o relatório com próximos passos. Sem a skill, esse procedimento teria de ser reescrito a cada pedido.
- **B:** as tools do MCP buscam e leem os dados (na aula, list, get e search issues); o critério de prioridade está escrito na skill, não nas tools.
- **C:** na aula, o Claude usa as tools do MCP para criar issues de teste sem que a skill de triagem rode, e criar issue nem está entre as tools que a skill lista. As tools do MCP ficam disponíveis na sessão; o `allowed-tools` diz quais a skill deve usar.
- **D:** a credencial fica fora da skill (na aula, o token vai no `.env`, lido pelo servidor MCP). Segredo dentro da skill é o que a aula "O que é uma skill" manda vetar.
**Conceito:** o que o MCP resolve e o que só a skill traz

## 3. Skill sem citar o MCP e agente usando outra via: por quê?
**Correta: D**
**Por quê:** o professor considera importantíssimo citar o MCP na instrução, porque existem outras formas de acesso (no caso do GitHub, o CLI e a API), e o modelo pode simplesmente escolher uma delas. Com a skill pedindo o MCP, sem referência a outro acesso, ele tende a procurar o MCP primeiro. Usar um MCP dentro da skill é, basicamente, instrução.
- **A:** a aula não fala de latência nem manda desinstalar ferramentas. A correção que ela dá é na instrução da skill, e o cliente pode continuar instalado.
- **B:** na aula, o MCP é registrado em escopo de projeto e funciona; ela não fala de ferramenta da máquina vencendo o escopo de projeto. A causa da escolha é a instrução que não cita o MCP.
- **C:** nada no cenário indica servidor fora do ar; o sintoma é de escolha de via. A aula explica esse comportamento pela existência de outras vias e uma instrução que não aponta o MCP.
**Conceito:** citar o MCP na instrução para ele ser a via primária

## 4. O que vai no allowed-tools de uma skill que usa MCP?
**Correta: B**
**Por quê:** no frontmatter, o professor não usa comandos bash, e sim comandos de MCP, que "nada mais são que tools" do servidor. A skill da aula lista só as que o procedimento usa (list issues, get issue e search issues), e, segundo ele, deve usar só essas.
- **A:** o servidor MCP é executado pelo agente a partir do registro do MCP; a skill não chama esse processo, e o campo passa a listar as tools do MCP em vez de comandos de terminal.
- **C:** a aula lista justamente tools de leitura (list issues, get issue e search issues) no `allowed-tools`, e diz que a skill deve usar só essas. O campo lista as tools que o procedimento usa, sejam de leitura ou de escrita; a aula não mostra liberação das de leitura por padrão.
- **D:** o registro do servidor (na aula, o `.mcp.json`) guarda tipo, comando e environment, não as tools que a skill deve usar. A aula preenche o `allowed-tools`.
**Conceito:** tools de MCP no allowed-tools

## 5. Prioridades no relatório e nenhuma etiqueta aplicada: o que falta?
**Correta: C**
**Por quê:** a skill faz o procedimento que está escrito nela. Na aula, os passos são buscar as issues, classificar de P0 a P3, detectar duplicidade e gerar o relatório; o resultado traz as prioridades e os próximos passos, sem labels. O professor diz que poderia pedir para adicionar labels, mas isso é uma extensão: entra como etapa do procedimento, com a tool correspondente no `allowed-tools`.
- **A:** o MCP do GitHub não é só leitura: na própria aula ele cria as issues de teste. O limite está no que a skill foi feita para fazer, não no MCP.
- **B:** um pedido avulso vale para aquela conversa; o que se reutiliza a cada execução é o procedimento escrito na skill. Para virar parte do fluxo, a etapa precisa entrar no `skill.md`.
- **D:** a permissão da credencial libera a ação, mas não a pede; e o `allowed-tools` da skill lista só as tools de leitura. Sem a etapa escrita, a skill termina no relatório, como na aula.
**Conceito:** a skill faz o procedimento escrito nela; estender é mudar a skill

## 6. Levar a skill de pendências do gh para o MCP: o que muda?
**Correta: A**
**Por quê:** juntando o que a aula mostra: o MCP precisa estar registrado no projeto (`claude mcp add`, que gera o `.mcp.json`), o `allowed-tools` passa a listar tools do MCP em vez de comandos bash, e a instrução precisa citar o MCP, porque o modelo pode escolher o CLI ou a API se a skill não pedir o MCP.
- **B:** chamar a API com o token troca uma via por outra, mas continua fora do MCP; a aula trata a API como uma alternativa que o modelo pode escolher, não como o caminho do MCP.
- **C:** é o oposto do que o professor alerta: com outras vias disponíveis, o modelo pode continuar no gh se a instrução não citar o MCP, e aqui os comandos gh ainda estão escritos no `skill.md`.
- **D:** script determinístico é para passos exatos; a aula não manda o servidor MCP executar scripts da skill. O uso do MCP na skill é, basicamente, instrução.
**Conceito:** o que muda numa skill para usar MCP
