# Quizz — Outras aplicabilidades

**Capítulo:** 1 - Iniciando com Prompt Engineering · **Aula:** 3
**Base:** material da aula

---

## 1. Um dev escreveu um prompt de várias páginas, com documentos de apoio, que funcionou muito bem no agente que o ajuda a programar. Ele decide reaproveitá-lo inteiro no chatbot de atendimento da empresa, acionado a cada mensagem dos clientes. Segundo a aula, qual é o problema dessa decisão?
- A) Prompts longos confundem os modelos usados em produto, que seguem bem instruções curtas e perdem qualidade diante desse volume de texto.
- B) O prompt já estava errado no agente de programação, porque prompts curtos são a recomendação da aula para os dois contextos de uso.
- C) O peso das coisas muda: dentro do produto, o tamanho do prompt se paga em custo e em latência, algo que era aceitável ao programar.
- D) O risco central é de privacidade: quanto maior o prompt, mais dados internos ficam expostos aos clientes, o que não ocorre ao programar.

## 2. O agente de uma loja pode abrir chamados de troca, e isso faz parte das funções dele. Um cliente só pergunta qual é o prazo de troca, e o agente já abre um chamado no nome dele. Qual leitura e qual ajuste seguem a aula?
- A) A ação estava dentro do permitido, mas o agente tomou iniciativa demais: o ajuste é reduzir, no prompt, o nível de proatividade dele.
- B) O agente passou do que podia fazer, um problema de escopo: o ajuste é retirar dele a função de abrir chamados de troca.
- C) O comportamento é efeito da natureza probabilística da IA, que o texto não controla: o ajuste é barrar a ação com um if no código.
- D) O modelo não captou a nuance da intenção do cliente: o ajuste é trocar por um modelo maior, que entende melhor esse tipo de pedido.

## 3. Um time troca o modelo grande de um agente por um bem pequeno, que faz uma única tarefa específica. Como a tarefa é simples, o líder conclui que qualquer pessoa já pode mexer no texto do prompt sem tomar cuidado. Qual avaliação é coerente com a aula?
- A) A conclusão é acertada, porque uma tarefa única deixa pouco espaço para erro, e o modelo acerta mesmo com variações na redação do prompt.
- B) A conclusão erra porque modelos pequenos dependem de prompts longos e ricos em contexto, e edições soltas tendem a reduzir essa informação.
- C) A conclusão erra porque toda edição solta abre uma via de exploit, e o risco aqui é de segurança, não de mudar o funcionamento do agente.
- D) A conclusão inverte o risco: com poucos parâmetros, o modelo tem pouca margem, e um ajuste mínimo na redação pode bastar para quebrar o agente.

## 4. Um banco quer trocar as regras de if e else que calculam a taxa de juros por um agente que decide com base nas compras anteriores do cliente e no histórico de pagamentos. Um dev argumenta: "prompt é a nova linguagem de programação, então um prompt bem escrito vai se comportar como o código de hoje". Onde o argumento falha?
- A) A analogia vale para o usuário final e a programação assistida; em um sistema crítico, quem define o comportamento segue sendo o código.
- B) O prompt define o comportamento, mas não muda a forma como a IA decide: a decisão fica probabilística, sem a garantia do "se isso, faz aquilo".
- C) A analogia trata o prompt como apoio ao desenvolvedor: ele gera o código das regras em Go, mas não decide nada enquanto o sistema está rodando.
- D) A analogia ignora o custo: decisões assim exigem um modelo pequeno e especializado, e modelos desse tipo não comportam o histórico do cliente.

## 5. Uma empresa liberou aos funcionários um assistente com conectores de CRM e de Drive. Sobre esse cenário, qual afirmação está INCORRETA segundo a aula?
- A) Os dados que o assistente traz dos conectores de CRM e de Drive acabam, no fim, compondo o prompt que o modelo recebe.
- B) Um pedido em linguagem natural pode virar via de exploit, levando o assistente a expor dados que aquela pessoa não poderia acessar.
- C) Como os modelos já captam as nuances da intenção, um prompt mal estruturado tende a render o mesmo que um bem estruturado.
- D) O formato do prompt deve variar conforme a tarefa e o escopo, seja tirar uma dúvida, gerar um documento ou analisar um code base.
