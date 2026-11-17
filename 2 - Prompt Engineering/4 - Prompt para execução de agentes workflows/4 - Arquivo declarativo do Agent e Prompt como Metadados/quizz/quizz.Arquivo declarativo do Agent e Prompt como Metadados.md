# Quizz — Arquivo declarativo do Agent e Prompt como Metadados

**Capítulo:** 4 - Prompt para execução de agentes workflows · **Aula:** 4
**Base:** material da aula

---

## 1. Você registrou o auditor de dependências como subagente no Claude Code. Um colega pede ao agente principal "dá uma olhada se as libs do projeto estão velhas ou com falha de segurança", e o agente principal responde sozinho, sem chamar o auditor. Segundo a aula, qual é o primeiro ajuste a fazer?
- A) Reescrever os inputs e outputs do prompt no corpo do arquivo, que é onde o agente aprende quando deve agir.
- B) Traduzir o prompt para o inglês, já que a IA teve mais treinamento nesse idioma e entende melhor o pedido.
- C) Pegar a frase usada nesse pedido e incluí-la como exemplo na descrição, onde ficam os casos de uso do agente.
- D) Trocar o modelo nos metadados por um mais capaz, que percebe por conta própria quando o especialista ajuda.

## 2. Por que o professor guardou o prompt do auditor como subagente, em vez de colá-lo no chat a cada auditoria?
- A) O agente principal olha a lista de agentes e, quando o pedido combina, delega ao especialista, que gera o relatório no formato definido.
- B) Registrado como agente, o prompt é carregado em todo pedido feito ao Claude Code, e a auditoria passa a acompanhar as tarefas de código.
- C) O subagente roda com o modelo do cabeçalho, e esse é o motivo da separação: auditar com um modelo diferente do que o agente principal usa.
- D) Assim o usuário chama o auditor pelo comando `/agents` a cada auditoria, sem depender de o agente principal decidir quando ele é útil.

## 3. Sobre o arquivo do agente em `.claude/agents/`, qual afirmação está INCORRETA?
- A) O nome e a descrição, entre os três tracinhos, são o que o agente principal lê para saber que o especialista existe e para que serve.
- B) A escolha do modelo fica no cabeçalho de metadados, ao lado do nome, da descrição e da cor com que o agente aparece na ferramenta.
- C) Os inputs, outputs e o workflow vistos na aula do auditor ficam no corpo do arquivo, logo abaixo do bloco de metadados.
- D) Os exemplos da descrição ensinam ao subagente como executar a auditoria passo a passo, o que torna redundante o workflow do corpo.

## 4. Num exemplo da descrição, o bloco de comentário diz: "como o usuário está pedindo análise de dependências, use o Dependency Auditor para revisar saúde e segurança dos pacotes". Que papel esse trecho cumpre?
- A) É uma anotação para quem mantém o arquivo; por estar marcada como comentário, o modelo a ignora ao decidir quem chamar.
- B) Dá a razão da delegação: liga o tipo de pedido do usuário à decisão de chamar o auditor naquela situação simulada.
- C) É o texto que o subagente devolve ao usuário ao final da auditoria, antes de anexar o relatório com os achados.
- D) Define o formato da frase que o agente principal usa para anunciar ao usuário que vai delegar a tarefa ao auditor.

## 5. O professor avisa que o recurso de agentes do Claude Code pode mudar de formato e que a parte dos metadados tem mais a ver com o Claude do que com o prompt. Qual é a conclusão dele sobre o arquivo do agente?
- A) Mesmo com um cabeçalho de metadados próprio da ferramenta, o corpo continua sendo um prompt estruturado, com inputs, outputs e workflow.
- B) Como os metadados são da ferramenta, o que vale cuidar é o prompt do corpo; a descrição e os exemplos podem ficar genéricos sem prejuízo.
- C) O que mais importa é dominar os campos do cabeçalho, porque é por eles que o agente recebe as instruções de como fazer a auditoria.
- D) O cabeçalho em XML é a parte que mais importa, porque a Anthropic usa XML para o modelo entender o trabalho que o agente deve fazer.
