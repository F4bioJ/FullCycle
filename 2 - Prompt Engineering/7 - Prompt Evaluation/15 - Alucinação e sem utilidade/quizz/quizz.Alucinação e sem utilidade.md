# Quizz — Alucinação e sem utilidade

**Capítulo:** 2.7 - Prompt Evaluation · **Aula:** 2.7.15
**Base:** material da aula

---

## 1. Uma equipe suspeita que o prompt de revisão está apontando SQL Injection em código que nem acessa banco de dados. Sem montar um dataset com respostas-alvo, qual evaluator usado na aula ataca esse problema mais diretamente?
- A) Coherence sem referência, porque achados inventados contradizem o resto da resposta e o evaluator mede essa contradição interna.
- B) Faithfulness sem referência, porque ele confere se cada achado está apoiado no trecho que chegou no input da avaliação.
- C) Detail sem referência, porque achados inventados costumam vir genéricos e a nota de detalhe cai junto com eles na revisão.
- D) Helpfulness sem referência, porque uma revisão com achados falsos deixa de ajudar, e é esse critério que mede a invenção.

## 2. Dois prompts de revisão foram avaliados. O prompt X teve faithfulness 0.14, helpfulness 0.21, coherence 0.32 e detail 0.33. O prompt Y teve helpfulness, detail e depth em 0.12, conciseness 0.13 e coherence 0.4. Qual diagnóstico os números sustentam?
- A) X inventa conteúdo, já que a pior nota está no critério que cobra base no código; Y quase não entrega análise nenhuma.
- B) Y inventa conteúdo, já que a sua coherence é a mais alta; X falha por ficar longo demais e fugir do código analisado.
- C) Os dois têm a mesma falha, já que todas as notas ficaram abaixo de 0.5, e o padrão entre os critérios pesa pouco.
- D) Y é o caso menos grave, já que tem a coherence mais alta dos dois e poderia seguir para produção com poucos ajustes.

## 3. No Bad Hallucination, a resposta vem cheia de findings, mas helpfulness, coherence e detail também caem, e não só o faithfulness. Qual leitura é compatível com a aula?
- A) Sem referência, os evaluators não sabem quais vulnerabilidades são reais e, na dúvida, dão notas baixas em todos os critérios.
- B) O summary dramático deixa a resposta longa, e esses critérios punem o tamanho, como aconteceu com o revisor verboso.
- C) Os findings inventados vêm sem detalhe técnico, e é a falta de detalhe, e não a invenção, que derruba as outras notas.
- D) Os findings não correspondem ao código enviado, então a revisão não orienta nenhuma correção e perde o valor prático.

## 4. No Bad Not Helpful, a resposta é algo como "Código analisado. Parece ok", e a coherence (0.4) fica acima das outras notas, que ficam perto de 0.12. Como o resumo do professor explica essa diferença?
- A) Coherence mede se a resposta ajuda o usuário, e uma frase curta ajuda mais do que uma revisão longa e dispersa.
- B) Uma frase genérica pode ser consistente em si, mesmo sem análise, e coherence olha essa consistência interna.
- C) Coherence foi avaliada com referência, e a frase genérica coincide em parte com o texto-alvo previsto no dataset.
- D) Coherence premia respostas objetivas, e por isso a nota sobe quando o summary tem no máximo três palavras.

## 5. Uma equipe usa outra ferramenta e outro provider e quer saber se os seus evaluators de revisão de código detectam alucinação antes de confiar neles. Seguindo o método da aula, qual é o melhor próximo passo?
- A) Rodar o prompt de produção várias vezes e aceitar os evaluators se as notas ficarem estáveis entre as execuções.
- B) Montar um dataset labeled com as vulnerabilidades reais e trocar os critérios sem referência por correctness com referência.
- C) Criar uma versão do prompt que force a invenção, rodar com os mesmos evaluators e ver se o faithfulness despenca.
- D) Aumentar a temperatura do prompt de produção para estimular invenção e comparar as notas com as do professor.
