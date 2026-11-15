# Conceitos básicos do ReAct

## ReAct como técnica de prompt

ReAct conecta raciocínio a execução observável. Em vez de apenas produzir uma resposta após pensar, o modelo alterna entre pensar sobre o problema, executar uma ação e incorporar o resultado dessa ação no próximo passo. Essa estrutura mudou o uso de LLMs porque aproxima o prompt de um ciclo operacional, não apenas de uma resposta textual. Por isso, a técnica aparece com frequência em agentes e frameworks que orquestram ferramentas externas.

## Loop de Thought/Action/Observation

O núcleo do ReAct é um loop de Thought/Action/Observation. O modelo primeiro formula um passo de raciocínio, depois escolhe uma ação concreta e, em seguida, recebe uma observação que representa o resultado dessa ação. A observação não encerra o processo; ela vira entrada para o próximo raciocínio, que pode gerar outra ação. O comportamento emergente é iterativo: o modelo avança por verificação sucessiva, não por uma única inferência linear como no Chain of Thought.

## Relação com agentes com IA

Agentes com IA usam esse loop para decidir o próximo passo com base no estado atual da tarefa. O agente deixa de ser apenas um gerador de texto e passa a operar como um controlador que escolhe quando consultar, buscar, executar ou interromper. Em frameworks como LangChain, o tipo de agente ReAct formaliza exatamente esse padrão. A utilidade prática está em permitir decisão e execução encadeadas dentro de um fluxo controlado.

## Integração com ferramentas

O ganho mais importante do ReAct aparece quando o modelo tem acesso a ferramentas. Se a tarefa exige buscar repositórios públicos e existe uma integração com GitHub, a ação pode ser chamar essa ferramenta em vez de apenas descrever o que deveria ser feito. Isso transforma o raciocínio em operação verificável, porque o próximo passo depende do retorno real da ferramenta. Retomando a lógica de prompts analíticos já vista, a novidade aqui é que o modelo não só analisa: ele age sobre o ambiente disponível.

## Ponto de stop e controle do agente

Um agente ReAct precisa de um critério explícito de parada. Sem esse controle, o loop pode continuar gerando novas ações e observações indefinidamente, elevando custo e latência sem ganho proporcional. O ponto de stop pode ser uma condição de sucesso, um limite de iterações, uma regra de confiança ou um orçamento de tokens. Esse mecanismo não é detalhe de implementação; ele é parte da segurança operacional do agente.

## Casos de uso

ReAct é especialmente útil quando a tarefa exige decidir e executar, não apenas responder. Isso inclui depuração de erros, busca de informação interna, automação de tarefas com decisão intermediária, troubleshooting de sistemas e integração com ferramentas externas. Nesses cenários, o valor está em permitir que cada passo seja guiado pelo resultado do passo anterior. A técnica também ajuda a localizar falhas em aplicações porque o processo fica mais inspecionável.

## Custo, latência e uso em escala

Como o loop produz múltiplos passos intermediários, ReAct tende a ser mais longo e mais verboso. Isso aumenta consumo de tokens e tempo de resposta, então o uso em alta escala costuma ser caro e lento. A técnica faz mais sentido em exploração, desenvolvimento, depuração e fluxos de maior valor por requisição. Em muitos casos, o próprio modelo já executa padrões semelhantes internamente, mas o prompt ainda pode forçar esse comportamento de forma mais explícita.

## Risco de simular ações e observações inexistentes

O principal risco operacional do ReAct é o modelo afirmar que executou uma ação que não executou ou inventar uma observação que nunca foi retornada por ferramenta alguma. Esse problema é grave porque quebra a confiabilidade do loop: o raciocínio seguinte passa a se apoiar em um estado falso. Embora esse tipo de alucinação não seja exclusivo do ReAct, ele se torna mais sensível aqui porque a técnica depende justamente da transição entre ação real e observação real. Em produção, isso exige validação externa das chamadas e das respostas recebidas.

## Complexidade de produção

Usar ReAct em produção é mais difícil do que usar prompts puramente analíticos. Além do prompt, é preciso controlar ferramentas, estados, critérios de parada, orçamento de execução e validação das observações. Isso torna a técnica poderosa, mas também mais arriscada em ambientes de alta escala. A escolha correta depende de quanto a aplicação realmente precisa de raciocínio acoplado a ação observável.
