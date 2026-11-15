# Gabarito — Role Prompting

## 1. Role em modelo pequeno vs modelo de reasoning
**Correta: C**
**Por quê:** A aula diz que o role tem pouco contraste em modelos avançados (de reasoning, com mais parâmetros), que entendem melhor as nuances. Já os modelos menores, mais rápidos e baratos, têm mais limitações, e neles o role pode ter impacto e contraste maiores.
- **A:** Inverte a relação: entender melhor as nuances é justamente o motivo de o role mudar pouco no modelo de reasoning.
- **B:** O papel dá contexto ao próximo token nos dois, mas a aula diz que o efeito depende da sofisticação do modelo.
- **D:** A janela de contexto entra na aula só ao falar de conversas longas; a persona consistente é um dos usos que a aula indica para o role.
**Conceito:** O contraste do role depende do tamanho e da sofisticação do modelo

## 2. Agente formal que fica animado numa conversa longa
**Correta: A**
**Por quê:** Em conversas longas, as frases trazem ambiguidades e o tom do usuário influencia. A aula diz que o modelo não esquece o papel (a não ser que a janela acabe), mas muda o comportamento conforme a conversa anda, como no exemplo do usuário que começa a falar como adolescente.
- **B:** Jailbreaking é uma instrução que tenta substituir o papel, como "ignore as instruções anteriores". O cliente nunca pediu a troca.
- **C:** A aula diz que o modelo não esquece o papel, a não ser que a janela de contexto acabe, e ela não acabou.
- **D:** Escopo e comportamento tornam o role mais útil, mas a aula não diz que eles impedem a mudança de tom em conversas longas.
**Conceito:** Deriva do papel em conversas longas

## 3. Por que o papel "desenvolvedor Go" ajuda
**Correta: D**
**Por quê:** Dizer a função faz o modelo gerar uma contextualização que orienta para que lado ele busca o próximo token. "Go" pode ser o verbo ou a linguagem; o papel deixa claro que o contexto é desenvolvimento de software na linguagem Go.
- **A:** A aula diz o contrário: nem sempre o role é seguido fielmente, e o tom do usuário ao longo da conversa pode mudar o comportamento do modelo.
- **B:** O papel não acrescenta conhecimento ao modelo; ele só direciona qual contexto o modelo usa.
- **C:** A aula diz que role prompting não é só nomear a função: normalmente se descreve também o escopo e o comportamento, então o papel não diminui essa necessidade.
**Conceito:** O papel dá contexto e desfaz ambiguidade

## 4. Afirmação INCORRETA sobre o uso do role
**Correta: B**
**Por quê:** A aula diz que escrever "você é um especialista em inglês" não vai, por si só, dar respostas melhores em inglês: tudo depende do escopo. O role funciona quando descreve também o que o modelo faz e como deve se comportar.
- **A:** Correta: simular papéis diferentes numa revisão de arquitetura é um dos usos listados para o role não ser um gasto de tokens à toa.
- **C:** Correta: a aula cita o método em Go como exemplo de tarefa simples em que é difícil medir o impacto do role.
- **D:** Correta: agente de suporte com persona e estilo consistentes é um dos usos listados.
**Conceito:** O papel precisa de escopo e comportamento, não só do cargo

## 5. O professor que vira galinha
**Correta: C**
**Por quê:** É o exemplo da aula para a limitação "o role pode ser sobrescrito pela instrução do usuário". O professor chama isso de jailbreaking e diz que existem técnicas de prompt para evitá-lo.
- **A:** A aula não diz que um papel com mais escopo impede a sobrescrita; ela aponta técnicas específicas contra jailbreaking.
- **B:** O pouco contraste em modelos avançados é outra limitação, sobre o ganho do role, não sobre o usuário trocar o papel.
- **D:** A saída da janela de contexto aparece no trecho sobre conversas longas; aqui o papel foi trocado por uma instrução explícita.
**Conceito:** Sobrescrita do papel e jailbreaking
