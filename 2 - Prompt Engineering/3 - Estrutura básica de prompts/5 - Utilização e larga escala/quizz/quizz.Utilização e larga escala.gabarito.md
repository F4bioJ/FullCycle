# Gabarito — Utilização e larga escala

## 1. Por que o prompt longo vira problema em escala
**Correta: A**
**Por quê:** "Quando há ou pretende-se escalar uma aplicação, economize ao máximo, porque aí cada token vale": na API key o custo é por milhão de tokens de entrada e de saída, e o excesso pode "inviabilizar um projeto de IA na empresa".
- **B:** A janela de contexto não muda com o volume de chamadas; truncamento é outro assunto.
- **C:** A latência também pesa, mas o custo não se dilui: cada chamada paga seus tokens, e o volume multiplica a conta. É esse o argumento central da aula.
- **D:** O prompt caching, de aula anterior, serve para reduzir o reprocessamento de prefixos repetidos; não é o motivo do problema aqui. O argumento da aula é o custo por token multiplicado pelo volume.
**Conceito:** Economia de tokens como requisito de escala

## 2. Efeito de pedir passo a passo em produção
**Correta: B**
**Por quê:** "Mais regras de negócio ou cadeias de pensamento, maior a latência": pedir para pensar passo a passo ou rever etapas anteriores faz a IA demorar mais para responder.
- **A:** Na API, o custo é por token (por milhão de tokens de entrada e de saída), não por chamada; a aula liga mais tokens a mais custo.
- **C:** Inverte o efeito descrito na aula: a latência sobe.
- **D:** A aula fala desse efeito justamente para quem vai escalar: em produção a latência pesa em cada chamada, e "isso acaba sendo inviável".
**Conceito:** Cadeias de pensamento aumentam a latência

## 3. Decidir entre 90% e 91% com mil dólares a mais
**Correta: D**
**Por quê:** "Os trade-offs são sempre aquela história: custo, latência e qualidade do resultado. Será que vale a pena, com 90% de assertividade, pagar mil dólares a mais por mês para ter 91%?" A resposta depende do peso das três variáveis no caso.
- **A:** A aula questiona justamente se um ganho pequeno de qualidade compensa um custo grande; não põe a qualidade acima do custo.
- **B:** A aula não fala de margem de erro; ela deixa a pergunta em aberto, para ser respondida com a conta.
- **C:** Olha só a latência e trata o custo como resolvido; a aula pede que as três variáveis sejam pesadas juntas.
**Conceito:** Trade-off entre custo, latência e qualidade
