# Gabarito — Visão geral com prompt.yaml

## 1. O que garante um teste com `inputs` e `expectContains`
**Correta: A**
**Por quê:** O caso de teste injeta as inputs e confere, pelo `expectContains`, se certas palavras existem quando o teste roda. O professor deixa claro que não está preocupado se o prompt é bom ou ruim: o teste verifica se ele está de acordo com a estrutura, se "compila".
- **B:** Achar palavras esperadas não prova que a revisão está correta; medir qualidade não é o objetivo desse teste.
- **C:** O teste vale para aquela entrada; o professor fala justamente em ter vários casos com inputs diferentes.
- **D:** O teste não compara modelos; ele confere a saída daquele caso específico.
**Conceito:** o que o teste estrutural garante

## 2. Por que declarar `input_variables` separado do template
**Correta: C**
**Por quê:** O campo `input_variables` lista todas as variáveis que o prompt vai ter, e o professor mostra que todas elas são usadas no template. Separar a lista torna explícito o que o prompt precisa receber e permite testar, por exemplo, se cada variável declarada aparece no template (o teste de compilação da aula 2.5.5).
- **A:** A aula não diz que a lista muda o peso das variáveis para o modelo; ela organiza a estrutura do arquivo.
- **B:** O template precisa conter as variáveis; a lista não as substitui.
- **D:** Mudar o template muda o prompt, e a aula trata a versão como campo próprio do arquivo; a lista de variáveis não dispensa o versionamento.
**Conceito:** `input_variables` como contrato de entrada

## 3. Afirmação INCORRETA sobre o `prompt.tests.yml`
**Correta: D**
**Por quê:** O `expectContains` só confere se certas palavras aparecem na saída. A aula diz que esses testes não avaliam se o prompt é bom ou ruim; medir a qualidade da revisão seria evaluation.
- **A:** Correta: o professor diz que dá para ter diversos casos de teste, inclusive com input diferente.
- **B:** Correta: "eu não estou preocupado se ele é um prompt bom ou se é um prompt ruim".
- **C:** Correta: ele diz que esses testes automatizados podem cair na esteira de CI/CD para garantir que os prompts estejam compilando.
**Conceito:** limite do `expectContains`
