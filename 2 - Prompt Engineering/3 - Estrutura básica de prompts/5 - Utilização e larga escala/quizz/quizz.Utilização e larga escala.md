# Quizz — Utilização e larga escala

**Capítulo:** 3 - Estrutura básica de prompts · **Aula:** 5
**Base:** material da aula

---

## 1. Um prompt longo funciona bem quando você o usa para desenvolver. Por que o mesmo prompt pode virar problema numa aplicação em larga escala?
- A) Na API, o custo é por token e se multiplica a cada chamada, o que pode inviabilizar o projeto.
- B) Em escala, a janela de cada chamada encolhe, e os prompts longos passam a ser truncados.
- C) Em escala, o que pesa é a latência de cada chamada; o custo se dilui entre os muitos usuários.
- D) Em escala, prompts longos deixam de caber no cache e são reprocessados do zero a cada chamada.

## 2. Num chatbot em produção, você acrescenta ao prompt "pense passo a passo e revise as etapas anteriores antes de responder". Qual efeito a aula aponta?
- A) A latência sobe, mas o custo não muda, porque na API o preço é cobrado por chamada feita.
- B) A latência aumenta, porque mais regras e cadeias de pensamento fazem o modelo demorar mais.
- C) A qualidade sobe e a latência cai, porque o modelo erra menos e refaz menos respostas.
- D) O efeito aparece no uso pontual; em produção, o volume dilui o tempo extra de cada chamada.

## 3. Um prompt mais elaborado sobe a assertividade de 90% para 91% numa aplicação em escala, mas acrescenta mil dólares por mês na API. Como a aula orienta essa decisão?
- A) Adotar o prompt, porque em produção a qualidade da resposta pesa mais que o custo da API.
- B) Descartar o prompt, porque 91% fica dentro da margem de erro e não muda a experiência.
- C) Adotar o prompt desde que a latência não piore, já que o custo da API é previsível por mês.
- D) Pesar sempre custo, latência e qualidade e decidir se o ponto a mais justifica a conta.
