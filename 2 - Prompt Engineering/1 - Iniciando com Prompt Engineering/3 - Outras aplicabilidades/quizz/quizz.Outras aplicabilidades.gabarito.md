# Gabarito — Outras aplicabilidades

## 1. Reaproveitar um prompt enorme de programação em um chatbot
**Correta: C**
**Por quê:** A aula separa os dois contextos: ao programar, cabem prompts gigantes e muitos documentos; no software que usa prompts, quanto menor melhor, por causa do custo para a empresa e da latência. A decisão ignora essa mudança de peso.
- **A:** A aula não diz que prompts longos confundem os modelos de produto. O problema apontado é operacional (custo e latência), não de qualidade da resposta.
- **B:** O prompt longo é aceitável ao programar. Tratar prompt curto como regra para os dois contextos é a generalização que o professor critica ("8 a 80").
- **D:** Segurança e privacidade são outra aplicabilidade da aula, e ela não liga o tamanho do prompt à exposição de dados internos.
**Conceito:** Peso do tamanho do prompt ao programar e dentro do produto

## 2. Agente que abre um chamado quando o cliente só tirou uma dúvida
**Correta: A**
**Por quê:** A aula separa escopo (até onde o sistema pode ir) de proatividade (quanto ele se antecipa). Abrir chamados estava entre as funções do agente; o problema é agir sem que tenham pedido, como no exemplo do professor da IA que sai programando quando só se queria tirar uma dúvida. Esse nível, diz ele, se reduz ou aumenta com o prompt.
- **B:** O enunciado diz que abrir chamados é função do agente, então ele não passou do escopo. Retirar a função também tira dele o que deveria fazer quando o cliente pedisse a troca.
- **C:** O comportamento é probabilístico, mas a aula afirma o contrário sobre o controle: é o prompt que "põe a coleira" no agente.
- **D:** A aula diz que os modelos entendem cada vez melhor a intenção, mas não propõe trocar de modelo para isso. O ajuste indicado é no prompt.
**Conceito:** Escopo e nível de proatividade regulados pelo prompt

## 3. Modelo pequeno em tarefa simples: dá para mexer no prompt sem cuidado?
**Correta: D**
**Por quê:** Segundo a aula, um modelo pequeno, voltado a uma tarefa específica, tem tão poucos parâmetros que mudar uma palavra do prompt pode quebrar o agente. O resumo do professor explica que há menos margem para compensar ambiguidades. Tarefa simples em modelo pequeno pede mais cuidado com o texto, e não menos.
- **A:** É a leitura intuitiva, mas a aula diz o oposto: a especificidade da tarefa em modelo pequeno não protege contra variações, e o agente pode quebrar com uma palavra.
- **B:** A aula não diz que modelos pequenos dependem de prompts longos. O problema apontado é a sensibilidade à redação, não a falta de informação.
- **C:** Exploit é o uso do prompt para atacar ou extrair dados. O risco de quem edita o texto sem cuidado é justamente mudar o funcionamento do agente.
**Conceito:** Fragilidade de modelos pequenos a mudanças no prompt

## 4. "Prompt é linguagem de programação" aplicado aos juros de um empréstimo
**Correta: B**
**Por quê:** O professor mantém a analogia porque o prompt define o comportamento, mas ressalva que as decisões que substituem os ifs e elses muitas vezes funcionam por probabilidade, e não de forma determinística. O argumento do dev confunde essas duas coisas ao esperar o mesmo comportamento do código.
- **A:** O cálculo de juros é justamente o exemplo da aula de transação crítica em que o prompt define o comportamento do sistema. A analogia não fica restrita ao usuário final ou à programação assistida.
- **C:** A frase sobre programar em português e gerar código em Go existe na aula, mas ela também diz que as decisões em tempo de execução são tomadas pela IA a partir do prompt.
- **D:** A aula cita modelos pequenos para tarefas específicas, mas não diz que transações críticas os exigem nem que eles não comportam o histórico do cliente.
**Conceito:** Decisão probabilística e decisão determinística

## 5. Assistente corporativo com conectores (qual está INCORRETA)
**Correta: C**
**Por quê:** C é a afirmação falsa. A aula reconhece que os modelos entendem melhor as nuances da intenção, mesmo sem um bom prompt, mas diz que o jogo muda completamente para quem sabe estruturar o pedido, e que o resultado muda conforme a forma de pedir e a técnica usada.
- **A:** Verdadeira. A aula diz que o sistema muitas vezes acessa dados e bancos externos, mas que tudo isso vai compor o prompt no final do dia.
- **B:** Verdadeira. A aula diz que o prompt pode ser a nova forma de fazer um exploit em uma aplicação e de vazar dados privados que a pessoa não poderia acessar.
- **D:** Verdadeira. A aula recomenda usar cada tipo de prompt para cada situação e cada escopo, e cita dúvidas, geração de documentos e análise de code base.
**Conceito:** Prompt para o usuário final e prompt como risco de segurança
