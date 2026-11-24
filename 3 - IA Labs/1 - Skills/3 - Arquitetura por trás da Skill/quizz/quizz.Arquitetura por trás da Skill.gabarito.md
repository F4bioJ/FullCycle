# Gabarito — Arquitetura por trás da Skill

## 1. Slash command funcionando logo na sessão nova
**Correta: C**
**Por quê:** a fase 0 é o startup com indexação, feita uma vez a cada nova sessão: o Claude Code varre a estrutura do projeto (a pasta `.claude`) e percebe que há skills. O professor usa justamente o `/team-code-review` digitado na sessão nova como prova de que a indexação já aconteceu.
- **A:** a decisão pela description é a fase 1, que roteia um pedido em linguagem natural; aqui o dev chamou a skill direto pelo slash command, e o que a tornou disponível foi a indexação.
- **B:** na abertura da sessão a skill é indexada, mas o corpo só é carregado na fase 2, depois da decisão de acionar a skill.
- **D:** a aula situa a indexação no startup, ao iniciar a sessão, e não no primeiro pedido.
**Conceito:** fase 0, startup e indexação

## 2. Skill com corpo bom que não dispara
**Correta: A**
**Por quê:** na fase 1 o corpo ainda não foi lido; o modelo decide com base na description, que o professor chama de feature classificadora. Por isso ele defende evals, para garantir que a skill dispare na hora certa e não dispare nas horas erradas.
- **B:** os steps estão no corpo, que só é carregado na fase 2, depois da decisão; eles não pesam no roteamento.
- **C:** o allowed tools aparece na aula ligado à leitura do corpo (fase 2), não à decisão de acionar a skill.
- **D:** quem decide é o modelo, e a aula aponta a description, não o name, como o que classifica o pedido.
**Conceito:** fase 1, description como feature classificadora

## 3. Ordem das fases na Team Code Review
**Correta: D**
**Por quê:** fase 0, indexação; fase 1, decisão pela description; fase 2, carga do corpo pela tool call de leitura; fase 3, leitura condicional das referências; fase 4, execução do script; fase 5, resultado da tarefa. No step 1 da skill, as referências vêm antes do script.
- **A:** põe a carga do corpo antes da decisão; na aula, o corpo ainda não foi lido quando o modelo decide.
- **B:** a indexação não lê as referências; elas só entram na leitura condicional, depois que o corpo é carregado.
- **C:** a indexação acontece no startup, antes de qualquer pedido, e a aula põe as referências antes do script.
**Conceito:** sequência das fases 0 a 5

## 4. Como o corpo chega ao contexto
**Correta: B**
**Por quê:** decidido o acionamento, o modelo emite uma tool call de leitura. O professor liga isso ao allowed tools do frontmatter (read, grep, bash): o harness usa essas tools para ler o corpo e carregar as instruções antes de executar.
- **A:** referências e scripts não entram junto com o corpo; as referências vêm na leitura condicional (fase 3) e os scripts rodam na fase 4.
- **C:** a indexação não carrega o corpo; ele só é lido na fase 2, depois da decisão.
- **D:** o script roda na fase 4, por ordem do corpo; ele não é o meio de carregar as instruções.
**Conceito:** fase 2, tool call de leitura do corpo

## 5. Referência condicionada e mudança só em README
**Correta: A**
**Por quê:** a fase 3 é uma leitura condicional que segue as instruções escritas. Se o corpo só manda ler o arquivo quando a alteração afeta input, autenticação, banco ou requests externas, uma correção de texto em README não atende à condição, e o arquivo não precisa entrar no contexto.
- **B:** as referências não entram todas com o corpo; o modelo decide trazê-las conforme as instruções.
- **C:** a indexação não lê referências; elas só são lidas na fase 3.
- **D:** o pedido é de revisão do que está em staged, que é o que a skill faz; e a fase 1 decide pela description, sem ler as condições do corpo.
**Conceito:** fase 3, leitura condicional

## 6. Steps do corpo (INCORRETA)
**Correta: C**
**Por quê:** a afirmação é falsa: o professor diz que o modelo interpreta os steps e está apto a decidir se vai seguir tudo ou não, e por isso entram os testes. Não há execução garantida pelo harness.
- **A:** verdadeira: "não que toda skill eu precise ter esse step".
- **B:** verdadeira: é o motivo que o professor dá para os testes.
- **D:** verdadeira: o corpo pode apontar para referências, e a cada leitura uma tool é chamada.
**Conceito:** o modelo decide seguir os steps; testes conferem

## 7. Script que coleta as diferenças em stage
**Correta: D**
**Por quê:** a fase 4 é a dos scripts: no step 1 a skill manda executar o script que está dentro dela para coletar as diferenças em stage. Na aula anterior, o professor pôs scripts e referências no nível 3 e disse que dados e análises determinísticas vão para scripts.
- **A:** a fase 2 só carrega o corpo; o script roda depois, quando as instruções mandam.
- **B:** a coleta das diferenças é um passo intermediário; a fase 5 é a entrega do resultado da revisão.
- **C:** a fase 3 é a leitura condicional de referências; executar o script é a fase 4.
**Conceito:** fase 4, scripts e nível 3

## 8. Associação entre fases e níveis (INCORRETA)
**Correta: B**
**Por quê:** a afirmação é falsa: as referências são citadas no corpo, mas lê-las é o nível 3, que o professor associa à leitura condicional e aos scripts. O nível 2 é só a leitura do corpo.
- **A:** verdadeira: a decisão usa o frontmatter (nível 1), e o corpo ainda não foi lido.
- **C:** verdadeira: o professor associa o carregamento do corpo ao nível 2.
- **D:** verdadeira: na aula anterior, o professor diz que o custo permanente é só o nível 1 e que os níveis 2 e 3 só pesam quando a skill é usada; nesta aula, o corpo é carregado na fase 2 e as referências na fase 3, as duas depois da decisão.
**Conceito:** fases e níveis do progressive disclosure

## 9. Ciclo de uma skill com referências e sem scripts
**Correta: C**
**Por quê:** a aula mostra ciclos diferentes conforme o que a skill tem: a simples vai da fase 0 à 1, à 2 e direto à 5; outra acrescenta a leitura (fase 3) antes da 5; a Team Code Review acrescenta ainda os scripts (fase 4). Com referências e sem script, o caminho é 0, 1, 2, 3 e 5.
- **A:** a fase 4 é a de scripts; as referências são lidas na fase 3, a leitura condicional.
- **B:** a aula mostra justamente que nem toda skill passa por todas as fases; sem script, a fase 4 não acontece.
- **D:** as instruções que mandam consultar as referências estão no corpo, que precisa ser carregado na fase 2.
**Conceito:** ciclos de fases

## 10. Arquivo condicionado que não foi lido
**Correta: A**
**Por quê:** a skill disparou e o corpo foi lido, então as fases 1 e 2 funcionaram. A leitura do arquivo condicionado é a fase 3, que segue as instruções do corpo, e o professor diz que o modelo pode decidir não seguir tudo; por isso ele recomenda testes para conferir se o resultado é o esperado.
- **B:** a description decide se a skill é acionada, e aqui ela foi; o arquivo condicionado não é roteado na fase 1, ele é lido conforme a instrução do corpo.
- **C:** a indexação descobre as skills; as referências não dependem dela, porque são lidas pelo modelo quando o corpo manda.
- **D:** na aula, o script coleta as diferenças em stage; a leitura das referências é outra fase, a 3.
**Conceito:** fase 3, leitura condicional e testes
