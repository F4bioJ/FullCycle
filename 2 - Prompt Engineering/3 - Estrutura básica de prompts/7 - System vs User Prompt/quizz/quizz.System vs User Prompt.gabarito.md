# Gabarito — System vs User Prompt

## 1. Onde fica uma regra nova que vale dali em diante
**Correta: B**
**Por quê:** O System Prompt "vai definir o comportamento da IA, o tom que ela vai responder, as restrições", como "um manual de instrução permanente" e uma regra global. O User Prompt é o pedido do momento, que muda a cada interação. Uma restrição que deve valer daqui para a frente é configuração global.
- **A:** O user prompt é a descrição do que o usuário quer naquele momento; uma regra posta só na próxima mensagem não fica como configuração da conversa.
- **C:** A aula diz o contrário: muitos modelos tendem a ler o system com mais prioridade que o user.
- **D:** O system "não muda muito", mas a aula não diz que não pode mudar; espalhar a regra em cada pedido mistura configuração global com pedido específico.
**Conceito:** System global, User específico

## 2. A mensagem de um agente para outro
**Correta: C**
**Por quê:** "Esse usuário pode ser um humano, ou pode ser um outro software, ou pode ser um outro agente de IA" que pede uma tarefa ou faz uma pergunta. O que define o user prompt é o papel de pedido da vez, não quem o envia.
- **A:** Quem define as regras de B é o system prompt de B; a mensagem de A é a tarefa da vez, que B executa dentro dessas regras.
- **B:** A aula não condiciona o user prompt a haver uma pessoa na origem; software e agentes também são usuários.
- **D:** A aula não trata mensagens de outros agentes como injeção; injeção é enganar o modelo para que ele perca as regras do system.
**Conceito:** Quem pode ser o usuário

## 3. "Ignore suas instruções anteriores"
**Correta: A**
**Por quê:** "Muitos modelos tendem a ler esse system prompt de uma forma mais prioritária", mas, "ao longo da conversa, você começa a conseguir quebrar esse System Prompt, falando, por exemplo, ignore o System Prompt [...] uma tentativa de jailbreak".
- **B:** A aula diz que a tendência é a contrária: o system costuma ter prioridade sobre o user.
- **C:** A prioridade é uma tendência, não um bloqueio garantido; a aula diz que o system pode ser quebrado ("tudo isso é na teoria").
- **D:** A aula chama esse pedido explícito de jailbreak; o exemplo é justamente um usuário no chat.
**Conceito:** Prioridade do system e jailbreak
