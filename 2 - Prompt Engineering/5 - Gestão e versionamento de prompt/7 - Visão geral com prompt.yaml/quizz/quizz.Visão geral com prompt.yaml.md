# Quizz — Visão geral com prompt.yaml

**Capítulo:** 5 - Gestão e versionamento de prompt · **Aula:** 7
**Base:** material da aula

---

## 1. Um caso de teste do `prompt.tests.yml` passa um diff em `inputs` e lista algumas palavras em `expectContains`. Se o teste passa, o que ele garante?
- A) Que, com aquela entrada, a execução gerou as palavras esperadas, sem dizer se a revisão ficou boa.
- B) Que a revisão gerada está correta, já que as palavras esperadas cobrem os problemas do diff.
- C) Que o prompt vai produzir as mesmas palavras com outros diffs, o que dispensa novos casos de teste.
- D) Que o modelo indicado no registry é o mais adequado para o prompt, já que a execução não falhou.

## 2. No `prompt.yml`, as variáveis aparecem em `input_variables` e também dentro do `template`. O que se ganha ao declarar as variáveis num campo separado?
- A) O modelo recebe primeiro a lista de variáveis e passa a dar mais peso a elas na resposta.
- B) O prompt fica mais curto, porque o template pode omitir as variáveis já listadas no campo.
- C) O contrato de entrada fica explícito, e um teste confere se cada variável está no template.
- D) O template pode mudar sem nova versão, desde que a lista de variáveis continue a mesma.

## 3. Sobre os testes no `prompt.tests.yml`, qual afirmação está INCORRETA?
- A) O arquivo pode ter vários casos de teste, por exemplo com inputs diferentes para o mesmo prompt.
- B) Os testes não buscam saber se o prompt é bom ou ruim, e sim se ele segue a estrutura definida.
- C) Esses testes podem rodar na esteira de CI/CD para garantir que os prompts continuem compilando.
- D) O `expectContains` mede a qualidade da revisão, conferindo se os comentários gerados estão certos.
