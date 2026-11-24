# Quizz — Frontmatter e progressive discloure

**Capítulo:** 1 - Skills · **Aula:** 2
**Base:** material da aula

---

## 1. Um time tem 40 skills instaladas no CLI, e um colega teme que elas encham o contexto de toda conversa, mesmo quando nenhuma é acionada. Segundo a aula, o que acontece?
- A) O receio procede: o corpo de cada skill instalada entra no contexto de toda sessão, por isso convém manter poucas skills ativas.
- B) O receio procede para as skills com scripts, porque os scripts rodam ao abrir a sessão para checar se a skill se aplica.
- C) O custo permanente é o do nível 1, com name e description; o corpo e as referências pesam quando a skill é usada.
- D) O receio não procede, porque nada da skill fica no contexto até alguém digitar o slash command, e aí o name e a description são lidos.

## 2. O frontmatter de uma skill de code review tem só name e description. Ela roda bem com o slash command, mas não dispara quando o usuário escreve "revise meu PR". Onde mexer primeiro?
- A) Na description, porque é ela que o modelo usa como classificador para decidir, pelo contexto do prompt, se chama a skill.
- B) No corpo, porque o modelo lê as instruções das skills instaladas para escolher a que melhor resolve o pedido.
- C) No Allowed Tools, porque, sem permissão prévia para as tools, o CLI não consegue carregar a skill pelo contexto.
- D) No name, porque o disparo pelo contexto compara o pedido com o nome da pasta, e a description serve à lista do slash command.

## 3. Uma skill faz deploy. O time quer que uma pessoa tome, de forma explícita, a decisão de cada execução, em vez de o modelo concluir que um pedido combinava com a skill. Que recurso do frontmatter a aula indica?
- A) Disallowed Tools com as tools de deploy, para que o modelo não consiga acioná-las por conta própria.
- B) Allowed Tools sem as tools de deploy, para o CLI pedir permissão a cada passo e a pessoa aprovar a skill.
- C) Uma description vaga de propósito, para o classificador não casar os pedidos e sobrar o slash command.
- D) DisableModelInvocation, que impede o CLI de carregar a skill sozinho e deixa o disparo para o slash command.

## 4. Uma skill tem um corpo de 600 linhas, com checklist, exemplos e tabelas de convenções do time, e o modelo refaz "de cabeça", a cada execução, uma análise de cobertura com regras fixas. Pelas boas práticas da aula, qual reorganização faz sentido?
- A) Levar o checklist e as convenções para a description, para que o modelo já tenha tudo no nível 1 e decida melhor quando disparar.
- B) Deixar o corpo curto, levar o material pesado para a pasta de referências e transformar a análise de cobertura num script.
- C) Manter tudo no corpo, que é lido quando a skill dispara, e levar a análise de cobertura para um arquivo da pasta de referências.
- D) Dividir o corpo em várias skills pequenas, cada uma com o seu name, já que o custo permanente cresce com o tamanho do corpo.

## 5. O usuário pede "faça um code review deste módulo". A skill de code review dispara, segue o passo a passo e, no meio, abre um arquivo de referência e roda um script. Qual sequência descreve o progressive disclosure nesse caso?
- A) Name e description já estavam carregados; o pedido casou com a description, e o corpo trouxe a referência e o script, que ficam no nível 1 para os próximos pedidos.
- B) Name e description estavam carregados; ao casar o pedido, o CLI trouxe de uma vez o corpo, as referências e os scripts, que juntos formam o nível 2.
- C) O pedido casou com o nome da pasta, o script rodou para validar o disparo e, com o resultado dele, o corpo e a referência foram lidos.
- D) Name e description já estavam carregados; o pedido casou com a description, o corpo foi lido e, a partir dele, vieram a referência e o script.

## 6. Sobre as formas de executar uma skill, qual afirmação está INCORRETA?
- A) Pelo slash command, o usuário digita a barra no CLI e escolhe a skill na lista de skills e comandos disponíveis.
- B) Pelo contexto, o modelo interpreta o pedido do usuário e procura uma skill cuja description bata com ele.
- C) No disparo pelo contexto, quem decide chamar a skill é o Claude Code, e o modelo entra depois para seguir o corpo.
- D) Com DisableModelInvocation, a skill deixa de ser carregada sozinha pelo CLI e passa a rodar pelo slash command.

## 7. Um colega propõe deixar a description curta e genérica ("ajuda com código") e explicar no corpo, em detalhes, quando a skill deve ser usada. Qual é o problema, segundo a aula?
- A) Funciona em parte: o modelo decide pela description, mas, na dúvida entre duas skills parecidas, lê o corpo delas para desempatar.
- B) A decisão de disparar acontece sobre os textos curtos do nível 1; o corpo é lido depois que a tarefa casa com a description.
- C) O problema é de custo: o corpo detalhado passa a ser lido a cada pedido, para o modelo saber se a skill se aplica a ele.
- D) O problema é de escala: com a description genérica, a skill sai do nível 1 e deixa de ficar carregada entre os pedidos.

## 8. Uma skill de auditoria roda vários comandos Bash, e o CLI pede permissão a cada um. O time também quer que ela rode num subagente isolado, com o corpo da skill como prompt dele. Que combinação de propriedades do frontmatter atende às duas coisas?
- A) Allowed Tools para as tools que a skill usa, e context para a execução no subagente isolado.
- B) Disallowed Tools para as tools que a skill não usa, e context para a execução no subagente isolado.
- C) Allowed Tools para as tools que a skill usa, e model para escolher o modelo do subagente isolado.
- D) Allowed Tools para as tools que a skill usa, e effort para definir o esforço do subagente isolado.

## 9. Uma skill só pede ao modelo que escreva mensagens de commit num formato fixo de três linhas, sem consultar arquivo nenhum nem rodar comando. Como ela fica nos níveis do progressive disclosure?
- A) Precisa dos três níveis, porque o progressive disclosure depende de haver referências para carregar sob demanda.
- B) Pode ficar no nível 1, com o formato descrito na description, porque o corpo é dispensável quando a skill é curta.
- C) Pode parar no nível 2: tem name e description e um corpo com as instruções, sem referências nem scripts.
- D) Precisa de um script no nível 3, porque um formato fixo de saída é um passo determinístico, como os linters.

## 10. Uma regra do time precisa valer em toda execução ("não commitar direto na main"), e um dev sugere colocá-la no corpo de uma skill. Com base nesta aula e na anterior, por que isso é arriscado?
- A) O corpo é lido quando a tarefa casa com a description; o que vale sempre, a aula anterior põe no CLAUDE.md ou no AGENTS.md.
- B) O corpo de toda skill instalada é carregado em cada sessão, e uma regra a mais aumentaria o custo permanente de cada conversa.
- C) Regras de time são regras mecânicas e, pela aula anterior, deveriam virar um linter rodado fora da skill, e não uma instrução.
- D) A skill precisaria de DisableModelInvocation para a regra valer, e aí ela seria aplicada quando alguém digitasse o slash command.
