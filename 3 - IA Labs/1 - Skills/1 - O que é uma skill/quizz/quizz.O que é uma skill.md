# Quizz — O que é uma skill

**Capítulo:** 1 - Skills · **Aula:** 1
**Base:** material da aula

---

## 1. Numa conversa do time, um dev resume: "skill é basicamente uma função que o agente chama, igual a um endpoint interno". Qual descrição corrige essa ideia de acordo com a aula?
- A) Uma skill é um script versionado no repositório, que o CLI executa direto, sem precisar interpretar instruções em texto.
- B) Uma skill é um endpoint que o harness expõe ao modelo, e por isso ela consegue consumir sistemas externos ao projeto.
- C) Uma skill é uma pasta com instruções em Markdown lida sob demanda; ela pode rodar código ou chamar um endpoint.
- D) Uma skill é uma função registrada no harness, que o modelo invoca com parâmetros a cada vez que repete uma tarefa.

## 2. Um time escreve uma skill no Claude Code e quer reaproveitá-la em outro CLI. Um dev reorganiza as instruções em Markdown numa estrutura de pasta própria, que acha mais intuitiva. Pelo que a aula diz, o que acontece com esse reaproveitamento?
- A) Fica comprometida, porque a portabilidade vem de todos os CLIs lerem a mesma convenção de arquivos, que deve ser seguida.
- B) Fica preservada, porque o conteúdo continua em Markdown, e um CLI que lê Markdown entende as instruções da pasta.
- C) Fica preservada, porque o Agent Skills é um padrão aberto, e um padrão aberto deixa cada time adaptar a estrutura.
- D) Fica comprometida, porque o Agent Skills é um recurso do Claude, e o outro CLI lê skills num formato próprio dele.

## 3. Só o tech lead sabe a sequência de checagens antes de liberar uma release; quando ele falta, os novatos ficam perguntando aos colegas. O que transformar esse procedimento em skill traz, segundo a aula?
- A) O procedimento passa a valer em toda interação, porque o CLI lê a skill em cada execução do projeto.
- B) As checagens ficam determinísticas, porque a skill faz o modelo repeti-las com a mesma saída a cada vez.
- C) O conhecimento sai da cabeça do tech lead, mas, por envolver liberar releases, deve ficar fora de skills.
- D) O conhecimento sai da cabeça de uma pessoa para o Git, pode ser revisado em PR e orienta quem chega.

## 4. Depois de criar uma skill que padroniza a descrição de PRs, o time nota que duas execuções com o mesmo pedido ainda geram textos com redação um pouco diferente. Qual leitura é coerente com a aula?
- A) A skill falhou, porque padronizar com skill serve justamente para a LLM devolver a mesma redação a cada execução.
- B) É esperado: a LLM não é determinística, e a skill tende a deixar os resultados consistentes, sem fixar a redação.
- C) É esperado: a skill padroniza o jeito de cada pessoa pedir, mas não interfere na resposta, que segue o prompt dela.
- D) A variação vem de o CLI ler a skill sob demanda; levando o padrão para o CLAUDE.md, a redação ficaria igual.

## 5. O time quer que a skill de revisão confira se os arquivos seguem as regras de formatação, com saída idêntica a cada execução. Qual abordagem segue a recomendação da aula?
- A) Pôr o passo exato num script, ou numa ferramenta como o ESLint, que a skill roda por bash e cujo resultado guia o que fazer.
- B) Descrever cada regra de formatação em detalhe no Markdown da skill, para o modelo aplicá-las uma a uma durante a revisão.
- C) Colocar as regras de formatação no CLAUDE.md, que tem leitura garantida, para que o modelo as confira em toda execução.
- D) Expor as regras por um MCP, já que a formatação é um dado que o modelo precisa consultar em um sistema fora do projeto.

## 6. Pelos critérios da aula para decidir quando criar uma skill, qual destes casos é o candidato MAIS FRACO?
- A) O checklist de revisão de PR que o time segue há meses e que o modelo, sem orientação, costuma aplicar fora de ordem.
- B) A ordem de passos para criar uma migração de banco, que o time repete em vários projetos e que não é óbvia para o modelo.
- C) A lista de prioridades da sprint, que o PO redefine toda manhã e que o time consulta antes de escolher a próxima tarefa.
- D) A convenção de nomes de branch adotada há um ano, que se repete nos repositórios do time e que o modelo não segue sozinho.

## 7. Um dev cria uma skill de publicação de pacotes. Para não expor o token do registry, ele não o escreve no Markdown: põe na pasta da skill um script com o token embutido, que faz a publicação. Como a aula avalia essa solução?
- A) Resolve, porque as instruções em Markdown, que são o que o CLI lê sob demanda, ficam sem a credencial.
- B) Resolve, desde que a skill use DisableModelInvocation no front matter, como a aula indica para o deploy.
- C) Não resolve por outro motivo: publicar pacote é ação mecânica, então o script deveria ficar fora da skill.
- D) Não resolve: o script faz parte da skill, e credenciais e segredos não devem ir para uma skill de modo algum.

## 8. A regra "toda rota nova usa o prefixo /api/v2" se repete em vários prompts e projetos do time, mas também tem de valer em toda interação. Um dev defende que, por ser repetitiva, ela vire skill. O que decide a escolha, pela aula?
- A) Vira skill, porque a reutilização em vários prompts, dias e projetos é o primeiro critério que a aula dá para criar uma.
- B) Vai para o CLAUDE.md ou o AGENTS.md, porque a skill é lida sob demanda, e a regra precisa de leitura garantida.
- C) Vira skill, mas com DisableModelInvocation no front matter, para que a regra seja aplicada em cada execução do projeto.
- D) Vai para um MCP, porque a regra é um dado do sistema que o modelo consulta a cada vez que cria uma rota nova.

## 9. O time cria uma skill que monta planos de atualização de dependências e pensa em escrever no Markdown dela as versões atuais de cada biblioteca. Qual ajuste segue a aula?
- A) Manter as versões na skill e atualizá-las por PR, já que a skill é versionada no Git e o time revisa cada mudança.
- B) Mover as versões para o CLAUDE.md, que tem leitura garantida, e deixar na skill o passo a passo do plano.
- C) Deixar na skill o procedimento e buscar as versões na hora, com uma tool de web search que a skill consegue usar.
- D) Fazer a skill criar o próprio mecanismo de consulta ao registry, no lugar de depender de tools ou de um MCP pronto.

## 10. O deploy do time tem um passo a passo de instruções, trechos mecânicos e acesso a sistemas externos. Um dev sugere tratar tudo como MCP; outro, pôr no CLAUDE.md. Pela classificação da aula, qual desenho é o indicado?
- A) Uma skill como uso principal, com DisableModelInvocation no front matter e as etapas mecânicas em outras ferramentas.
- B) O CLAUDE.md, porque o deploy segue um padrão imposto pelo time e precisa ser lido em toda execução do projeto.
- C) Um MCP no lugar da skill, porque o deploy acessa sistemas, e para acesso a sistemas já existe um protocolo pronto.
- D) Uma skill que embute no Markdown os dados atuais dos sistemas acessados, para o deploy não precisar consultá-los.
