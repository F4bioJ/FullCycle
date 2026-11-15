# Quizz — Aprofundando em LLM

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 8
**Base:** material da aula

---

## 1. A palavra "ele" chega e precisa de contexto. Na analogia da aula, como ela o obtém?
- A) Cada key pergunta às demais quem é ela, e a query de "ele" responde com a informação dele.
- B) A query de "ele" é comparada com o value de cada palavra, e a key da que casa traz a informação.
- C) A query de "ele" é confrontada com a key de cada palavra, em busca de correspondência.
- D) A key de "ele" é somada à query de cada palavra, e o resultado dá o peso de cada uma delas.

## 2. Por que a aula parte do single-head attention antes de chegar à multi-head?
- A) Porque a single-head ainda é a base dos LLMs de hoje, e a multi-head é um complemento para casos difíceis.
- B) Porque o cálculo mais simples, com Q, K e V, ajuda a entender o que cada head repete depois.
- C) Porque a multi-head é calculada depois da single-head, usando o resultado dela como entrada de cada head.
- D) Porque a single-head guarda a query e a key, e a multi-head acrescenta o value só no final.

## 3. Segundo o professor, por que usar várias heads dá mais "segurança textual"?
- A) Porque as relações cruzadas são tratadas juntas, e não lidas uma a uma e depois ligadas.
- B) Porque cada head confere o resultado das outras e corrige o que estiver divergente entre elas.
- C) Porque o modelo vota entre as heads e fica com a relação mais repetida entre todas elas.
- D) Porque cada head tem mais vetores do que a single-head e guarda um contexto bem maior.

## 4. Um colega afirma que concordância, semântica, tempo, pronome e sintaxe são as cinco funções que toda multi-head terá. Como corrigir, segundo a aula?
- A) A lista vale para cinco heads; com mais heads, as funções mudam, mas essas cinco continuam presentes.
- B) A lista é a divisão padrão dos LLMs, e o professor a apresenta como regra geral das heads.
- C) A lista vale para o português; em outros idiomas, as funções das heads são outras e diferentes.
- D) A lista é só um exemplo do professor para ilustrar; as heads podem acompanhar relações distintas.

## 5. Suponha que, numa multi-head, só a saída de uma head chegasse à camada feed-forward. O que se perderia, pelo funcionamento da aula?
- A) A comparação entre query e key, que passaria a ser feita só depois da feed-forward.
- B) A capacidade de trabalhar em paralelo, já que as demais heads ficariam esperando a escolhida.
- C) As leituras das outras heads, ou seja, as demais relações do contexto, não seriam aproveitadas.
- D) A própria feed-forward, que só consegue funcionar quando recebe a soma de todas as heads.

## 6. Suponha que as heads de um LLM aprenderam relações distintas. Ele mantém bem a concordância e o tempo verbal, mas erra a quem os pronomes se referem. O que o sintoma sugere?
- A) Que a camada feed-forward está com defeito, pois é ela que resolve concordância e pronomes juntos.
- B) Que a divisão dos vetores falhou, e todas as heads passaram a olhar a mesma relação.
- C) Que o modelo trocou a atenção por uma leitura em sequência e perdeu relações entre palavras distantes.
- D) Que a relação dos pronomes pode estar menos coberta que as demais, pois cada head foca uma coisa.

## 7. Na aula de Transformers, a frase "O cachorro que o menino viu estava latindo" serviu de exemplo. Como a atenção trata a palavra "latindo"?
- A) Dá mais peso a quem tem a relação mais forte com ela, e a distância deixa de decidir.
- B) Dá mais peso à palavra mais próxima, e só corrige se a feed-forward notar o erro depois.
- C) Dá peso igual a "cachorro" e "menino", e deixa a camada seguinte desfazer o empate.
- D) Olha só as palavras anteriores, na ordem da frase, e fica com a última que apareceu.

## 8. Pela explicação simplificada do professor, o que um modelo com uma única head conseguiria fazer?
- A) Nada seria resolvido, pois a pergunta de contexto da query só é respondida quando há várias heads.
- B) Resolveria uma pergunta de contexto, como saber quem é "ela", sem outras relações junto.
- C) Resolveria todas as relações, só que com resposta mais lenta por exigir várias passadas.
- D) Resolveria as perguntas de contexto, mas só entre palavras vizinhas, perdendo as mais distantes.

## 9. Na aula, "quem é ela?" é respondido com "a Maria", e "quem é ele?" com "o carro". Que ideia esses dois exemplos, juntos, reforçam?
- A) Qualquer palavra do contexto pode ser a referência buscada, seja pessoa ou objeto.
- B) Pronomes masculinos tendem a apontar para objetos, e os femininos para pessoas.
- C) Só pronomes fazem a pergunta de contexto; substantivos como "carro" apenas respondem.
- D) Objetos recebem mais peso que pessoas, e por isso o carro vence as outras palavras.

## 10. Um modelo identifica corretamente que "ela" se refere a "Maria", mas a informação que chega sobre Maria para formar o significado está ruim. Na analogia da aula, onde está o problema?
- A) Na query de "ela", que formulou mal a pergunta feita ao contexto.
- B) Na key de "Maria", cujo crachá identificou mal a palavra no texto.
- C) No value de "Maria", que repassa a informação usada no significado.
- D) Na concatenação das heads, que misturou respostas de várias palavras.
