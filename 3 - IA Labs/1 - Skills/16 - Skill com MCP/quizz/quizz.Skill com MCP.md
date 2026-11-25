# Quizz — Skill com MCP

**Capítulo:** 1 - Skills · **Aula:** 16
**Base:** material da aula

---

## 1. Um time quer uma skill que gere toda segunda-feira um relatório dos pedidos atrasados, lidos de um banco de dados que tem servidor MCP. Pela divisão que a aula faz entre skill e MCP, qual desenho segue a proposta?
- A) A skill guarda o critério de atraso e uma cópia dos pedidos numa referência, atualizada toda semana e lida no nível 3.
- B) O MCP guarda o critério de atraso e o formato do relatório, e a skill fica com o acesso ao banco e com as credenciais.
- C) O MCP dá acesso aos pedidos na hora da execução, e a skill guarda o critério de atraso e o formato do relatório.
- D) Um script determinístico da skill consulta o banco, e o MCP entra para os dados estáveis, como a tabela de status.

## 2. Num projeto, o MCP do GitHub já está conectado ao Claude Code, com 41 tools. Um colega propõe dispensar a skill de triagem: "é só pedir que ele liste as issues". O que a aula indica sobre essa troca?
- A) O MCP resolve o acesso às issues, mas não traz o procedimento reutilizável de classificar, achar duplicadas e relatar.
- B) A troca funciona, porque as tools do MCP, como list e search issues, já trazem embutido o critério de prioridade.
- C) A troca falha, porque as tools do MCP dependem de uma skill que as liste no allowed-tools para serem chamadas.
- D) A skill continua necessária, porque é nela que fica o personal token que dá ao MCP o acesso ao repositório.

## 3. A skill de triagem diz "busque as issues abertas do repositório", sem mencionar o MCP. Na máquina de um dev que tem o GitHub CLI instalado, o Claude faz a busca pelo gh, e não pelo MCP. Qual é a explicação da aula e a correção?
- A) O gh responde mais rápido que o MCP em container, e o modelo prefere a via de menor latência; é preciso desinstalar o gh.
- B) O MCP estava em escopo de projeto, que perde para ferramentas globais como o gh; é preciso registrá-lo em escopo global.
- C) O container do MCP não estava rodando em segundo plano, com -d; é preciso subi-lo antes de abrir o Claude Code.
- D) Há outras vias de acesso, como o CLI e a API, e o modelo pode escolher qualquer uma; a instrução precisa citar o MCP.

## 4. Ao montar o frontmatter da skill de triagem, um dev copia o allowed-tools de uma skill anterior, que listava comandos bash. O que a aula faz nesse campo?
- A) Mantém os comandos bash, porque o MCP é executado por um docker compose run, que é um comando de terminal.
- B) Troca os comandos bash por tools do MCP, como list, get e search issue, já que comandos de MCP são tools.
- C) Põe o nome do servidor, github, e com isso as 41 tools do servidor ficam liberadas para a skill em bloco.
- D) Deixa o campo vazio, porque as tools do MCP ficam declaradas no .mcp.json e a skill as herda de lá.

## 5. Sobre a configuração do MCP do GitHub mostrada na aula, qual afirmação está INCORRETA?
- A) O Docker Compose foi gerado com ajuda de uma LLM, mas também poderia vir de um dos muitos exemplos prontos da internet.
- B) O serviço gh-mcp recebeu stdin aberto e o comando stdio, porque o servidor roda sem terminal, num formato de pipeline.
- C) Como o primeiro up falhou por falta do token, o professor passou ao catálogo do Docker, que já traz as chaves prontas.
- D) No claude mcp add, o servidor foi registrado com docker compose run, como a forma de executar o MCP server.

## 6. Um time quer reproduzir a aula: usar o MCP para criar issues de teste e depois rodar a triagem, tudo com um mesmo personal access token. Qual configuração segue o que a aula mostra?
- A) Fine-grained, com expiração curta, permissão de issues em leitura e escrita, e o valor guardado no .env local.
- B) Fine-grained, com a permissão de issues em read-only, porque a triagem lê as issues sem alterá-las.
- C) Fine-grained, com issues em leitura e escrita, mais a permissão de acesso ao repositório, concedida à parte.
- D) Fine-grained, com issues em leitura e escrita, e o valor na seção env do .mcp.json, versionado no projeto.

## 7. Com o container do MCP já funcionando, um dev roda o claude mcp add num outro terminal, enquanto uma sessão do Claude Code continua aberta. Nessa sessão, o /mcp não mostra o GitHub. O que a aula indica?
- A) O container precisa ser recriado com docker compose up, para que o token do .env chegue até o Claude Code.
- B) O escopo de projeto passa a valer quando o .mcp.json gerado é commitado no repositório local.
- C) O servidor precisa estar rodando em segundo plano, com -d, porque sem isso o Claude Code não acha o processo.
- D) O MCP novo é lido quando o Claude Code inicia; o professor sai dele para adicioná-lo e depois o abre de novo.

## 8. Um dev pede: "analise as categorias da skill de triagem e gere 10 issues no repositório, usando o MCP do GitHub". O Claude lê a skill, cria as issues pelo MCP e para ali, sem relatório de triagem. O dev quer agora a triagem dessas issues. O que a aula indica?
- A) Reiniciar o container do MCP, porque as issues recém-criadas ainda não aparecem para as tools de busca.
- B) Fazer um novo pedido que acione a skill: o primeiro pediu issues, e ela entrou como mera referência.
- C) Abrir uma nova sessão, porque uma skill já lida no contexto não volta a ser acionada na mesma sessão.
- D) Pôr a tool de criar issue no allowed-tools, porque a skill parou ao ver uma ação fora da lista dela.

## 9. Depois da triagem, as prioridades aparecem no relatório, mas nenhuma issue ganhou label no GitHub, embora o token usado tenha permissão de escrita. O que explica isso, pelo que a aula mostra?
- A) O MCP do GitHub expõe tools de leitura, e a escrita de labels exige trocar o MCP pelo GitHub CLI.
- B) As labels foram aplicadas, mas aparecem no navegador depois que o container do MCP é recriado.
- C) A skill foi feita para classificar, achar duplicadas e relatar próximos passos; rotular seria uma extensão.
- D) A deduplicação marcou as issues repetidas, e a skill pula a etapa de rotular quando acha duplicadas.

## 10. A skill de pendências da aula "Conectando skill ao mundo externo" cria a issue com comandos gh escritos no próprio skill.md. O time quer que ela passe a usar o MCP do GitHub. Pelo que esta aula mostra, o que precisa mudar?
- A) Registrar o MCP no projeto, pôr as tools dele no allowed-tools e trocar os comandos gh por instrução que cite o MCP.
- B) Trocar os comandos gh por chamadas à API com o personal token, já que o MCP do GitHub é uma camada sobre ela.
- C) Nada no skill.md: com o MCP conectado no projeto, o modelo deixa o gh e passa a usar o MCP por conta própria.
- D) Mover os comandos gh para um script determinístico da skill, que o servidor MCP passa a executar no container.
