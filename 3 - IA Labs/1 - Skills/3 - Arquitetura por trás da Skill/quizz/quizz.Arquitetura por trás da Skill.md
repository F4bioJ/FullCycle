# Quizz — Arquitetura por trás da Skill

**Capítulo:** 1 - Skills · **Aula:** 3
**Base:** material da aula

---

## 1. Um dev cria a pasta da Team Code Review em `.claude`, abre uma sessão nova do Claude Code e, sem pedir nada antes, digita `/team-code-review`. A skill roda na hora. Segundo a aula, o que tornou isso possível?
- A) Na fase de roteamento, o modelo comparou o comando digitado com a description e decidiu acionar a skill.
- B) O corpo das skills do projeto é carregado no início da sessão, e por isso as instruções da skill já estavam prontas.
- C) Ao iniciar a sessão, o harness fez o startup e indexou a estrutura do projeto, e assim já sabia que a skill existia.
- D) A indexação acontece no primeiro pedido da sessão, e o slash command funciona como esse primeiro pedido.

## 2. Uma equipe escreveu um corpo detalhado e correto para a Team Code Review, mas a skill não é acionada quando alguém pede "revise as minhas mudanças em staged". Pelo que a aula explica, onde está a causa mais provável e como conferir a correção?
- A) Na description, que é o que o modelo usa para decidir o roteamento; evals mostram se ela passa a disparar na hora certa.
- B) Nos steps do corpo, que o modelo avalia na fase de decisão; testes mostram se os passos ficaram claros para ele.
- C) No allowed tools, que o harness confere antes de decidir; evals mostram se a skill ganhou permissão para ser lida.
- D) No name, que o harness compara com as palavras do pedido; testes mostram se o nome cobre os termos usados pela equipe.

## 3. Na Team Code Review, alguém pede uma revisão do que está em staged. Qual sequência descreve o caminho que a aula apresenta, da sessão aberta até o resultado?
- A) Indexação; carga do corpo; decisão pela description; leitura condicional das referências; execução do script; resultado da tarefa.
- B) Indexação com leitura das referências; decisão pela description; carga do corpo; execução do script; resultado da tarefa.
- C) Decisão pela description; indexação da pasta da skill; carga do corpo; execução do script; leitura das referências; resultado.
- D) Indexação; decisão pela description; carga do corpo; leitura condicional das referências; execução do script; resultado da tarefa.

## 4. Depois que o modelo decide acionar a skill, como as instruções do corpo chegam ao contexto, segundo a aula?
- A) O harness injeta o corpo junto com as referências e os scripts da pasta, para o modelo ter tudo antes do primeiro step.
- B) O modelo emite uma tool call de leitura, e o harness usa tools como as do allowed tools para ler o corpo e carregar as instruções.
- C) O corpo já estava no contexto desde a indexação, e a decisão libera o modelo para seguir as instruções que ele já tinha lido.
- D) O script da skill roda primeiro e devolve o corpo como saída, e é essa saída que o modelo passa a seguir como instrução.

## 5. A Team Code Review manda ler um arquivo de referência se a alteração afetar input, autenticação, consultas ao banco ou requests externas. O dev pede a revisão de uma mudança em staged que só corrige textos de um README. O que a aula leva a esperar?
- A) O arquivo condicionado não precisa entrar no contexto, porque a leitura da fase 3 depende do que as instruções pedem para aquele caso.
- B) O arquivo é lido mesmo assim, porque tudo o que está na pasta de referências entra no contexto assim que o corpo é carregado.
- C) O arquivo já foi lido na indexação, e a condição do corpo decide se o modelo vai citá-lo no resultado da revisão.
- D) A skill nem é acionada, porque a decisão da fase 1 confere as condições do corpo antes de rotear o pedido para ela.

## 6. Sobre os steps do corpo de uma skill, qual afirmação está INCORRETA de acordo com a aula?
- A) Nem toda skill precisa ter steps; a Team Code Review os usa, mas isso é uma escolha de quem escreve a skill.
- B) Mesmo com os steps escritos, o modelo pode decidir pular alguns, e por isso entram os testes para conferir o resultado.
- C) Escritos em ordem na skill, os steps são executados um a um pelo harness, e assim o resultado não depende de decisão do modelo.
- D) Os steps podem mandar ler arquivos de referência, e cada uma dessas leituras é feita com uma tool chamada pelo modelo.

## 7. No step 1 da Team Code Review, a skill manda executar um script que está dentro dela para coletar as diferenças em stage. Juntando esta aula e a anterior, o que esse passo representa?
- A) A fase 2, de carga do corpo, porque o script faz parte da pasta da skill e roda junto com a leitura das instruções.
- B) A fase 5, de execução da tarefa, porque coletar as diferenças já é o resultado que a skill devolve para o usuário.
- C) A fase 3, de leitura condicional, porque o script traz um arquivo de referência para o contexto quando o corpo pede.
- D) A fase 4, de scripts, que fica no nível 3, onde o professor já tinha posto os dados e as análises determinísticas.

## 8. Um aluno tentou associar as fases desta aula aos níveis do progressive disclosure. Qual associação está INCORRETA?
- A) A decisão da fase 1 se apoia no que está no nível 1, o frontmatter, já que o corpo ainda não foi lido nesse momento.
- B) A leitura condicional da fase 3 é parte do nível 2, porque os arquivos de referência são citados dentro do corpo da skill.
- C) A tool call de leitura da fase 2 é o momento em que o nível 2, o corpo com as instruções, passa a ser usado.
- D) Antes de um pedido chegar, o que pesa é o nível 1; corpo e referências entram no contexto depois da decisão.

## 9. Uma skill tem o `skill.md` e uma pasta de referências que o corpo manda consultar, mas nenhum script. Pelos ciclos que a aula mostra, qual caminho de fases se espera quando ela é acionada?
- A) Fase 0, fase 1, fase 2, fase 4 e fase 5, porque o material extra da pasta é tratado na fase de execução.
- B) Fase 0, fase 1, fase 2, fase 3, fase 4 e fase 5, porque as fases correm em sequência mesmo quando vazias.
- C) Fase 0, fase 1, fase 2, fase 3 e fase 5, porque a leitura das referências entra e não há o que rodar na fase 4.
- D) Fase 0, fase 1, fase 3 e fase 5, porque as referências substituem o corpo como fonte das instruções.

## 10. A Team Code Review dispara no pedido certo e o corpo é lido, mas, numa revisão de mudança que mexe em autenticação, o resultado sai sem as convenções do arquivo de referência condicionado. Pelo que a aula explica, onde olhar primeiro?
- A) Na fase 3: a leitura condicional depende de o modelo seguir a instrução da skill, e testes conferem esse caso.
- B) Na fase 1: a description não classificou o pedido como de segurança, e por isso o arquivo de referência não foi roteado.
- C) Na fase 0: o arquivo de referência ficou fora da indexação do startup, e o modelo não tinha como saber que ele existia.
- D) Na fase 4: o script de coleta deveria trazer o arquivo de segurança junto com as diferenças que estão em stage.
