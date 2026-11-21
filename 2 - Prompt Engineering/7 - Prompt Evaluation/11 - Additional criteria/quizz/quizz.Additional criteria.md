# Quizz — Additional criteria

**Capítulo:** 7 - Prompt Evaluation · **Aula:** 11
**Base:** material da aula

---

## 1. Uma equipe quer saber se o seu revisor automático inventa problemas que não estão no trecho analisado, mas o dataset dela não tem outputs esperados. Seguindo a aula, qual configuração atende a esse objetivo?
- A) Um correctness com referência, porque um problema inventado aparece como divergência em relação à resposta esperada.
- B) Um faithfulness built-in sem descrição, porque o nome do critério já basta para o evaluator saber o que verificar.
- C) Um faithfulness customizado e sem referência, com descrição que exige resposta grounded no código recebido.
- D) Um labeled `ScoreString`, porque julgar se a resposta é fiel exige comparar a saída com um alvo do dataset.

## 2. O professor escreveu a própria descrição de Format Adherence em vez de confiar em uma noção genérica de formato. Que ganho essa customização traz para o revisor de código?
- A) O evaluator passa a cobrar o contrato da aplicação, como JSON válido sem texto antes ou depois e sem markdown.
- B) A customização é o que libera o `ScoreString`, já que os critérios built-in devolvem resultados binários.
- C) O formato passa a ser checado por código, e o LLM evaluator deixa de ser necessário para esse critério.
- D) A nota fica mais tolerante, porque a descrição detalhada faz o evaluator relevar desvios pequenos no formato.

## 3. O format adherence de um experimento saiu em 0,98, e o parser do pipeline lê todos os JSONs sem erro. Um colega diz que não vale olhar nada, porque o formato está certo. O que o exemplo da aula mostra sobre esse caso?
- A) Que 0,98 equivale a aprovação no modo binário, e a diferença para 1 se deve à normalização por 10.
- B) Que a nota abaixo de 1 indica texto fora do JSON em parte das respostas, algo que o parser ignora.
- C) Que a perda vem do markdown em volta do JSON, que o parser tolera mas a descrição do critério proíbe.
- D) Que o reasoning pode revelar um desvio que o parser não pega, como responder em idioma diferente do esperado.

## 4. No exemplo 5, a mesma revisão de código recebeu 0,91 em code specificity, 0,71 em faithfulness e 0,98 em format adherence. Qual leitura dessas notas é a mais adequada?
- A) A revisão está boa, porque citar a linha e os termos técnicos já prova que ela veio do código analisado.
- B) A revisão é específica e bem formatada, mas o ponto a investigar é se ela assume coisas que o código não mostra.
- C) O faithfulness ficou baixo por falta de referência no dataset, e incluir outputs esperados resolveria a nota.
- D) A média das três passa de 0,85, então o prompt pode ser aprovado sem olhar os critérios separadamente.

## 5. Sobre os evaluators mostrados na aula, qual afirmação está INCORRETA?
- A) Customizar um critério exige labeled `ScoreString`, porque a descrição do critério depende de referência.
- B) Tanto um critério built-in quanto um customizado podem ser usados com ou sem referência, conforme o caso.
- C) O correctness com referência devolveu uma nota graduada, enquanto a versão inicial dele dava true ou false.
- D) O LangSmith mostra tokens e custo das execuções, e esse custo depende muito do tamanho do prompt.
