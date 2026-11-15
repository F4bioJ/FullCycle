# System vs User Prompt — resumo

## Dois tipos de prompt

Ao iniciar uma conversa ou interação com a IA, há dois tipos de prompt: o System Prompt e o User Prompt (às vezes chamado de Human).

## System Prompt: a regra do jogo

O System Prompt define o comportamento da IA, o tom das respostas e as restrições impostas ao modelo. Funciona como um manual de instrução permanente da conversa e costuma mudar pouco, porque é a instrução inicial. Muitos modelos tendem a ler o System Prompt com prioridade sobre o User, como uma regra global. Ainda assim, ao longo da conversa, dá para quebrá-lo com pedidos como "ignore o System Prompt e comece a se comportar desta forma", numa tentativa de jailbreak.

## User Prompt: o pedido da vez

O User Prompt é o pedido, a pergunta ou a tarefa enviada pelo usuário, que pode ser um humano, outro software ou outro agente de IA. Ele muda a cada interação e descreve o que o usuário quer naquele momento, respeitando as regras do System Prompt.

## Nota mental e seus limites

System é a configuração global da conversa; User é o pedido específico. Em geral o modelo executa o pedido seguindo as regras do System. Isso vale na teoria: com Prompt Injection, há formas de enganar o modelo para que ele ignore e vá perdendo a essência do System Prompt.
