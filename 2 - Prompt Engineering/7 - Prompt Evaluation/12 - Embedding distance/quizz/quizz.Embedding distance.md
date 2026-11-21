# Quizz — Embedding distance

**Capítulo:** 7 - Prompt Evaluation · **Aula:** 12
**Base:** material da aula

---

## 1. Na revisão de código, uma equipe avalia a resposta do modelo com Embedding Distance, usando como referência uma listinha de exemplos. O score destoa, embora a revisão pareça boa. Qual é a leitura mais adequada?
- A) O dataset não traz o texto final esperado, e o score reflete esse desencontro, sem provar que o prompt piorou.
- B) O score destoante prova que o prompt piorou, então o passo seguinte é reescrevê-lo até o score se aproximar.
- C) Como o evaluator usa embedding e não um LLM, o score não serve como sinal para esse tipo de aplicação.
- D) O score serve como diagnóstico, e o passo seguinte é ler o reasoning do evaluator para ver o que corrigir.

## 2. A equipe agora tem um dataset com a resposta final esperada de cada revisão e quer checar se as saídas seguem o contrato de formato (JSON válido, sem texto extra). Um colega propõe usar Embedding Distance. Qual é a avaliação mais correta?
- A) Serve, porque com uma referência completa a métrica passa a medir também a conformidade de formato da saída.
- B) Serve melhor que um critério de format adherence, pois o embedding captura a estrutura do JSON além do sentido.
- C) Não é o critério adequado, pois mede proximidade de sentido, e uma saída equivalente pode violar o formato sem mudar a distância.
- D) Serve se o dataset for ampliado, pois a qualidade da referência é o que define se a métrica mede o objetivo de formato.

## 3. Sobre como o Embedding Distance avalia uma resposta, qual afirmação está INCORRETA?
- A) Ele compara a resposta com a referência calculando a distância entre vetores, por exemplo pelo cosseno ou pela L2.
- B) Na aula, a comparação usou o embedding da OpenAI, e não um LLM, para calcular a proximidade com a referência.
- C) A qualidade do score depende do par resposta-referência, e uma referência fraca deixa o score pouco informativo.
- D) Com a referência certa, o score passa a apontar o que mudar no prompt, dispensando outra análise do caso.
