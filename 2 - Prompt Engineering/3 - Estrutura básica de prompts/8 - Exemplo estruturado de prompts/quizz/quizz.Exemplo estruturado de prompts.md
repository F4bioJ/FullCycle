# Quizz — Exemplo estruturado de prompts

**Capítulo:** 3 - Estrutura básica de prompts · **Aula:** 8
**Base:** material da aula

---

## 1. O prompt já pede "responda apenas com um objeto JSON", mas a IA abre com "Claro! Aqui estão seus testes:" e fecha com um parágrafo de explicação, quebrando o parser. Qual seção da aula ataca esse sintoma?
- A) Instruções negativas: não incluir explicações nem comentários fora do JSON da resposta.
- B) Formato de saída: repetir no fim do prompt o pedido de responder apenas com o objeto JSON.
- C) Critérios de qualidade: exigir que o arquivo de teste rode com npm test sem ajustes.
- D) Persona e escopo: definir a IA como especialista em Jest que não faz refatorações no código.

## 2. No exemplo, "o teste deve rodar com npm test sem ajustes" aparece na seção de critérios de qualidade, e não na de formato de saída. Qual é a diferença entre as duas seções?
- A) Os critérios valem para o código gerado, e o formato vale para o texto que acompanha o código.
- B) Os critérios dizem o que torna a resposta boa; o formato diz a forma em que ela é entregue.
- C) O formato é opcional no prompt, e os critérios são a parte que a IA não pode deixar de seguir.
- D) Os critérios são lidos pela IA antes do formato e, por isso, têm prioridade quando conflitam.

## 3. Você escreve o objetivo e cola a função no meio da mesma frase: "passe esse teste, cubra isso aqui: <função>". Qual risco a aula aponta?
- A) A função ocupa tokens demais e empurra o objetivo para fora da janela de contexto do modelo.
- B) A IA trata a função como um exemplo few-shot e copia o estilo dela nos testes que gerar.
- C) A IA passa a refatorar a função, porque a entende como parte do que deve devolver pronto.
- D) A IA confunde o objetivo com o material de trabalho, e a resposta fica menos sistemática.

## 4. Por que o professor pede que a IA liste no campo assumptions o que assumiu, em vez de só mandar assumir Node 18?
- A) Para a IA poder recusar a tarefa quando faltar informação, devolvendo a lista do que faltou.
- B) Para economizar tokens, já que a lista substitui a explicação que a IA daria fora do JSON.
- C) Para você saber em que premissas a resposta se apoia, já que a IA preencheu lacunas sozinha.
- D) Para a IA comparar as versões listadas e escolher a mais recente antes de escrever o teste.

## 5. O prompt exige resposta só em JSON. Se a IA não conseguir cumprir a tarefa, como o prompt da aula a deixa explicar a falha sem sair do formato?
- A) Com a seção de tratamento de erro, que define um JSON de falha com o motivo dentro dele.
- B) Abrindo uma exceção na instrução negativa para texto livre nos casos em que houver falha.
- C) Com a seção de pressupostos, em que a IA anota o que faltou para cumprir os critérios.
- D) Com os critérios de qualidade, que obrigam a IA a ajustar o teste até passar no npm test.

## 6. Por que o professor diz que pôr "não faça refatorações no código original" logo na persona deixa o colega do Code Review mais feliz?
- A) Porque a persona de especialista faz a IA escrever testes com mais cobertura e menos falhas.
- B) Porque, sem refatorar, a IA gasta menos tokens, e a revisão da PR sai mais barata para o time.
- C) Porque limita a IA à tarefa pedida, e a PR chega sem mudanças fora do escopo para revisar.
- D) Porque a proibição faz a IA justificar cada mudança feita, o que acelera a leitura da PR.

## 7. Qual destes objetivos segue o que a aula pede para a seção de objetivo?
- A) "Escreva testes para o código abaixo, com a melhor cobertura possível e boas práticas de mercado."
- B) "Escreva testes unitários com Jest para a função abaixo, cobrindo entradas válidas e inválidas."
- C) "Analise a função abaixo e escreva os testes que julgar necessários para assegurar a qualidade."
- D) "Gere testes para este trecho com base em todos os testes que já existem nestes arquivos."

## 8. Por que o professor diz que JSON, ou outro formato bem definido, ganha peso quando agentes de IA se comunicam?
- A) Porque JSON gasta menos tokens que texto livre, o que barateia a troca entre agentes em escala.
- B) Porque agentes não interpretam texto livre, e qualquer outro formato exigiria um parser próprio.
- C) Porque o próprio formato impede texto extra, e as instruções negativas deixam de ser necessárias.
- D) Porque regras claras de formato mitigam muitos problemas na troca, inclusive riscos de segurança.

## 9. A empresa quer rodar esse gerador de testes em 500 mil chamadas por dia. O que a aula sugere sobre prompts tão elaborados nesse cenário?
- A) Manter o prompt completo, porque a estrutura por seções compensa o custo extra de tokens.
- B) Avaliar trocar um prompt enorme por várias chamadas com prompts menores, decidindo caso a caso.
- C) Passar para zero-shot puro, porque em escala as seções de critérios e de erro perdem utilidade.
- D) Cortar critérios e tratamento de erro e manter persona e objetivo, o essencial para a escala.

## 10. Além da qualidade da resposta, que ganho o professor destaca ao organizar o prompt por seções?
- A) O prompt fica mais curto, porque cada seção troca frases longas por tópicos bem objetivos.
- B) O prompt pode ir inteiro para o system prompt, porque as seções já separam papel e pedido.
- C) O prompt fica fácil de entender e de reaproveitar, e vira um ativo como testes e documentação.
- D) A IA lê as seções em paralelo, o que reduz o tempo de resposta quando o prompt é muito grande.
