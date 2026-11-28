# Quizz — Skill com MCP

**Capítulo:** 1 - Skills · **Aula:** 16
**Base:** material da aula

---

## 1. Um time quer uma skill que gere toda segunda-feira um relatório dos pedidos atrasados, lidos de um banco de dados que tem servidor MCP. Pela divisão que a aula faz entre skill e MCP, qual desenho segue a proposta?
- A) A skill guarda o critério de atraso e uma cópia dos pedidos numa referência, atualizada toda semana e lida no nível 3.
- B) O MCP guarda o critério de atraso e o formato do relatório, e a skill fica com o acesso ao banco e com as credenciais.
- C) O MCP dá acesso aos pedidos na hora da execução, e a skill guarda o critério de atraso e o formato do relatório.
- D) Um script determinístico da skill consulta o banco, e o MCP entra para os dados estáveis, como a tabela de status.

## 2. Uma equipe já tem o MCP do seu sistema de chamados conectado ao agente. Um colega propõe dispensar a skill de fechamento semanal dos chamados: "é só pedir que ele liste os chamados abertos". O que a aula indica sobre essa troca?
- A) O MCP resolve o acesso aos chamados, mas não traz o procedimento reutilizável de classificar, agrupar e relatar.
- B) A troca funciona, porque as tools do MCP, como listar e buscar chamados, já trazem embutido o critério de prioridade.
- C) A troca falha, porque as tools do MCP dependem de uma skill que as liste no allowed-tools para serem chamadas.
- D) A skill continua necessária, porque é nela que fica a credencial que dá ao MCP o acesso ao sistema de chamados.

## 3. Uma skill de fechamento de caixa diz "consulte as vendas do dia no banco", sem mencionar o MCP. Na máquina de uma dev que tem o cliente de linha de comando do banco instalado, o agente faz a consulta por esse cliente, e não pelo MCP. Qual é a explicação da aula e a correção?
- A) O cliente local responde mais rápido que o MCP, e o modelo prefere a via de menor latência; é preciso desinstalar o cliente.
- B) O MCP foi registrado no projeto, e ferramentas da máquina têm prioridade sobre ele; é preciso registrá-lo de forma global.
- C) O servidor MCP estava fora do ar, e o agente recorreu ao cliente como plano B; é preciso subir o servidor antes da sessão.
- D) Há outras vias de acesso aos dados, e o modelo pode escolher qualquer uma delas; a instrução precisa citar o MCP.

## 4. Uma skill de relatório de clientes vai usar o MCP de um CRM, que oferece dezenas de tools de leitura e de escrita. Ao montar o frontmatter, o que a aula põe no allowed-tools?
- A) Os comandos de terminal do cliente do CRM, porque o servidor MCP roda como um processo iniciado por linha de comando.
- B) As tools do MCP que o procedimento usa, como as de busca e de listagem, porque comandos de MCP nada mais são que tools.
- C) As tools de escrita do MCP, porque as de leitura já vêm liberadas por padrão e não precisam ser listadas.
- D) Nada, porque as tools ficam declaradas no registro do servidor MCP no projeto, e a skill as herda automaticamente.

## 5. Uma skill de triagem de chamados busca os abertos, classifica a prioridade, acha duplicados e gera um relatório. O time quer que os chamados também ganhem a etiqueta de prioridade no sistema. O MCP tem a tool de escrita, e a credencial tem permissão. Pelo que a aula mostra, o que falta?
- A) Trocar o MCP pelo cliente de linha de comando do sistema, porque o MCP expõe tools de leitura, e a escrita fica fora dele.
- B) Pedir uma vez na conversa que ela aplique as etiquetas; a partir daí, a skill passa a fazer isso em toda execução seguinte.
- C) Acrescentar a etapa de etiquetar ao procedimento da skill e a tool de escrita ao allowed-tools; hoje o fluxo para antes disso.
- D) Nada na skill: com a permissão de escrita, o modelo aplica as etiquetas por conta própria assim que define as prioridades.

## 6. A skill de pendências da aula "Conectando skill ao mundo externo" cria a issue com comandos gh escritos no próprio skill.md. O time quer que ela passe a usar o MCP do GitHub. Pelo que esta aula mostra, o que precisa mudar?
- A) Registrar o MCP no projeto, pôr as tools dele no allowed-tools e trocar os comandos gh por instrução que cite o MCP.
- B) Trocar os comandos gh por chamadas à API com o personal token, já que o MCP do GitHub é uma camada sobre ela.
- C) Nada no skill.md: com o MCP conectado no projeto, o modelo deixa o gh e passa a usar o MCP por conta própria.
- D) Mover os comandos gh para um script determinístico da skill, que o servidor MCP passa a executar no container.
