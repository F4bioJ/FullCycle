# System vs User Prompt

## System Prompt como camada de controle global

System Prompt é a camada que define as regras permanentes da interação. Ele estabelece comportamento do modelo, tom de resposta e restrições gerais, funcionando como um manual de instrução do agente. Retomando a ideia de limites de comportamento já vista antes, a diferença aqui é de posicionamento: essas regras ficam na camada global da conversa, não no pedido pontual. Por isso, o System Prompt tende a mudar pouco e serve como base estável para múltiplas interações.

## User Prompt como pedido específico da vez

User Prompt é a instrução variável que descreve o que o usuário quer naquele momento. Esse usuário pode ser uma pessoa, outro software ou até outro agente de IA, desde que esteja enviando a solicitação operacional da vez. A função dessa camada não é redefinir a identidade do agente, mas acionar uma tarefa concreta dentro das regras já estabelecidas. Em termos práticos, o User Prompt carrega a intenção imediata; o System Prompt define como essa intenção deve ser executada.

## Prioridade entre camadas de instrução

Muitos modelos tratam o System Prompt com prioridade maior do que o User Prompt. Isso significa que, em condições normais, o pedido específico é interpretado à luz das regras globais já definidas, em vez de substituí-las livremente. Essa hierarquia existe para dar consistência ao comportamento do modelo ao longo da conversa. Sem ela, cada nova mensagem poderia reconfigurar completamente o agente e reduzir previsibilidade.

## Comportamento do modelo e obediência imperfeita

O comportamento do modelo resulta da combinação entre instruções globais e pedidos locais, mas essa combinação não é mecanicamente garantida. Mesmo com uma separação clara entre System e User, a execução continua sujeita à natureza probabilística do modelo, algo já discutido anteriormente. Isso explica por que a arquitetura do prompt melhora consistência sem garantir obediência absoluta. A utilidade da separação está em reduzir ambiguidade e tornar o desvio mais controlável.

## Jailbreak como tentativa de quebrar a camada global

Jailbreak é a tentativa de fazer o modelo abandonar ou contornar instruções que deveriam permanecer válidas, como regras de comportamento definidas no System Prompt. Um exemplo típico é ordenar explicitamente que o modelo ignore suas instruções anteriores e passe a responder de outra forma. O ponto central não é o comando em si, mas o fato de ele atacar a hierarquia entre camadas. Quando isso funciona, o pedido local deixa de operar dentro da política global e passa a corroer essa política.

## Prompt Injection como manipulação indireta das instruções

Prompt Injection é uma forma de induzir o modelo a reinterpretar ou ignorar instruções por meio de conteúdo inserido na interação. Diferentemente de uma configuração legítima do agente, a injeção tenta introduzir comandos concorrentes que desviam o comportamento esperado ao longo do fluxo. Isso contextualiza por que separar System e User é necessário, mas insuficiente como defesa completa. A estrutura ajuda a organizar autoridade, porém ainda existe fragilidade quando entradas maliciosas tentam reescrever essa autoridade.

## Regra prática para estruturar prompts

A distinção operacional é simples: coloque no System Prompt o que deve valer de forma ampla e duradoura; coloque no User Prompt o que muda conforme a tarefa. Regras de comportamento, tom e restrições gerais pertencem à camada global, enquanto perguntas, tarefas e solicitações do momento pertencem à camada específica. Essa separação prepara a próxima etapa de estruturação do prompt, na qual seções internas podem ser organizadas dentro de cada camada. Primeiro define-se quem o agente é e como deve agir; depois define-se o que ele precisa fazer agora.
