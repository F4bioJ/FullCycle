# Gabarito — Frontmatter e progressive discloure

## 1. 40 skills instaladas enchem o contexto?
**Correta: C**
**Por quê:** O professor diz que o progressive disclosure dá escala: dá para ter dezenas de skills instaladas porque o custo permanente é só o do nível 1 (name + description, os metadados, sempre carregados). Os níveis 2 e 3 só passam a pesar quando a skill é realmente usada.
- **A:** O corpo é o nível 2, lido só quando a tarefa casa com a description; ele não entra em toda sessão.
- **B:** Scripts são do nível 3 e rodam a partir das decisões tomadas no corpo, depois do disparo; não rodam ao abrir a sessão para decidir nada.
- **D:** Meia-verdade: o custo é baixo, mas name e description ficam sempre carregados, justamente para o modelo poder disparar a skill pelo contexto, sem slash command.
**Conceito:** Escala: custo permanente é só o nível 1

## 2. Skill não dispara pelo contexto
**Correta: A**
**Por quê:** Pelo contexto, o modelo interpreta o pedido e procura uma skill que bata com ele, e para isso a description precisa estar muito bem feita: ela é o classificador que decide se a skill é chamada. Como o frontmatter só tem name e description, não há DisableModelInvocation bloqueando o disparo; o ponto a revisar é a description.
- **B:** O corpo (nível 2) só é lido depois que a tarefa casa com a description; a escolha não é feita sobre as instruções de todas as skills.
- **C:** Allowed Tools diz quais tools o CLI pode usar sem pedir permissão; não tem relação com a skill ser encontrada pelo contexto.
- **D:** O name faz parte da identidade e do disparo, mas a aula atribui à description o papel de classificador no disparo pelo contexto; ela não serve só à lista do slash command.
**Conceito:** Description como classificador

## 3. Skill de deploy com decisão explícita de uma pessoa
**Correta: D**
**Por quê:** DisableModelInvocation impede o CLI de carregar a skill sozinho: ela só roda quando o usuário digita o slash command dela, ou seja, a pessoa decide cada execução. É o padrão "quem pode invocar" do frontmatter (e a aula anterior já o associava a ações com efeito colateral, como deploy).
- **A:** Disallowed Tools é do padrão de ferramentas (segurança): desabilita tools por padrão, mas não controla se a skill é invocada pelo modelo; e bloquear as tools de deploy quebraria a própria skill.
- **B:** Meia-verdade: sem estar em Allowed Tools, o uso das tools continua pedindo permissão, mas a skill seguiria sendo disparada pelo modelo pelo contexto; a aula põe o controle de quem invoca em DisableModelInvocation, não nas permissões de tools.
- **C:** Piorar de propósito o classificador é um contorno frágil, que a aula não propõe; o recurso feito para isso é DisableModelInvocation.
**Conceito:** DisableModelInvocation (quem pode invocar)

## 4. Corpo de 600 linhas e análise refeita de cabeça
**Correta: B**
**Por quê:** As boas práticas que a aula tira dos níveis são: corpo curto, empurrar o peso para a pasta de referências (nível 3) e colocar dados ou análises determinísticas em scripts.
- **A:** A description deve ser um texto curto, sempre carregado; encher o nível 1 aumenta o custo permanente e atrapalha a precisão de disparo, que depende desses textos curtos.
- **C:** Meia-verdade: o corpo de fato só é lido no disparo, mas a aula manda mantê-lo curto, e análise determinística vai para script, não para referência.
- **D:** O custo permanente é o do nível 1 (name e description), não o tamanho do corpo; várias skills pequenas aumentariam o nível 1, e o problema do corpo pesado se resolve com referências e scripts.
**Conceito:** Boas práticas: corpo curto, referências e scripts

## 5. Sequência do progressive disclosure num code review
**Correta: D**
**Por quê:** Nível 1 (name + description) está sempre carregado; a partir do contexto do prompt decide-se chamar a skill; o nível 2 (corpo) é lido quando a tarefa casa com a description; lido o corpo, ele leva a decisões de carregar mais contexto (referências) ou executar um script, o nível 3.
- **A:** Meia-verdade: a sequência está certa até o corpo, mas referência e script são o nível 3 e não passam a ficar carregados; o que fica sempre carregado é só o nível 1 (name e description), e os níveis 2 e 3 só pesam quando a skill é usada.
- **B:** Meia-verdade: o começo está certo, mas referências e scripts não vêm junto com o corpo nem fazem parte do nível 2; são o nível 3, usado conforme as decisões do corpo.
- **C:** O disparo pelo contexto é decidido pela description, e o script não roda para validar o disparo: ele é usado depois, a partir do corpo.
**Conceito:** Os três níveis e a ordem de carregamento

## 6. Formas de execução e quem decide (INCORRETA)
**Correta: C**
**Por quê:** É a afirmação incorreta. O professor se corrige na aula: não é o Claude Code que decide, ele só dispara; quem toma a decisão de chamar a skill é o modelo, qualquer que seja o modelo em uso.
- **A:** Correta: é a primeira forma de execução, a lista que aparece ao digitar a barra.
- **B:** Correta: é a segunda forma, pelo contexto, e por isso a description precisa estar bem feita.
- **D:** Correta: DisableModelInvocation impede o CLI de carregar a skill sozinho, e ela passa a rodar pelo slash command.
**Conceito:** Duas formas de execução; o modelo decide

## 7. Description genérica com detalhes no corpo
**Correta: B**
**Por quê:** A precisão de disparo vem de a decisão acontecer sobre os textos curtos do nível 1. O corpo (nível 2) só é lido quando a tarefa casa com a description; explicar ali quando usar a skill não ajuda a decidir o disparo, porque nesse momento o corpo ainda não foi lido.
- **A:** A aula não prevê consulta ao corpo para decidir o disparo: a decisão acontece sobre o nível 1, e o corpo só é lido depois que a tarefa casa com a description.
- **C:** Inverte o mecanismo: o corpo não é lido a cada pedido; ele só pesa quando a skill é usada, e é justamente por isso que o detalhe ali não ajuda a disparar.
- **D:** Name e description formam o nível 1 de toda skill e ficam sempre carregados, genéricos ou não; o problema da description genérica é a precisão do disparo, não sair do nível 1.
**Conceito:** Precisão de disparo depende do nível 1

## 8. Permissões a cada comando e execução num subagente
**Correta: A**
**Por quê:** Allowed Tools diz quais tools o CLI pode usar sem pedir permissão (padrão de ferramentas). context é uma espécie de fork: a skill roda num subagente isolado e o corpo vira o prompt dele (padrão de execução).
- **B:** Meia-verdade: context resolve o subagente, mas Disallowed Tools desabilita tools por padrão; não faz as tools usadas rodarem sem pedir permissão, que é o papel de Allowed Tools.
- **C:** Meia-verdade: Allowed Tools resolve as permissões, mas model escolhe o modelo da execução; quem faz a skill rodar num subagente isolado é context.
- **D:** Meia-verdade: Allowed Tools resolve as permissões, mas effort define o nível de esforço de raciocínio; não cria o subagente, que é o papel de context.
**Conceito:** Propriedades de ferramenta e de execução

## 9. Skill que só formata mensagens de commit
**Correta: C**
**Por quê:** Nem toda skill passa por todos os níveis: o nível 1 toda skill tem, algumas param no nível 2 e outras chegam ao nível 3. Uma skill só com instruções, sem nada a consultar nem rodar, tem name, description e corpo, e pode parar no nível 2.
- **A:** A aula diz o contrário: algumas skills param no nível 2.
- **B:** O nível 1 (name e description) serve para decidir o disparo; as instruções ficam no corpo, que é a própria skill a executar.
- **D:** Scripts são para dados ou análises determinísticas (como os linters da aula anterior); pedir ao modelo um formato de texto é uma instrução do corpo, não uma verificação que precise virar script.
**Conceito:** Nem toda skill usa os três níveis

## 10. Regra que precisa valer em toda execução
**Correta: A**
**Por quê:** O corpo da skill (nível 2) só é lido quando a tarefa casa com a description; numa tarefa que não dispara a skill, a regra simplesmente não entra. A aula anterior já dizia que o que é sempre verdadeiro no projeto vai para o CLAUDE.md ou o AGENTS.md, que têm leitura garantida em toda execução.
- **B:** O corpo não é carregado em toda sessão; o que fica sempre carregado é o nível 1.
- **C:** Regras mecânicas da aula anterior são estilo, formatação e linters; "não commitar na main" é uma regra de projeto que precisa valer sempre, e a aula anterior a manda para o CLAUDE.md ou o AGENTS.md.
- **D:** DisableModelInvocation restringe a skill ao slash command, o que faria a regra valer ainda menos; não é o que garantiria a leitura em toda execução.
**Conceito:** Corpo só é lido no disparo; o sempre-válido vai para CLAUDE.md
