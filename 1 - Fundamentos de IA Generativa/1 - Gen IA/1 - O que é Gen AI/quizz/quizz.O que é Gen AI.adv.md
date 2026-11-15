# Quizz — O que é Gen AI (avançado)

**Capítulo:** 1 - Gen IA · **Aula:** 1
**Base:** material avançado

---

## 1. Em termos técnicos, o que um LLM faz a cada passo da geração de um texto?
- A) Calcula a probabilidade de cada token possível vir em seguida e sorteia um deles.
- B) Busca nos dados de treino o trecho mais parecido com o prompt e o adapta.
- C) Monta o texto inteiro de uma vez e depois o revisa palavra por palavra.
- D) Classifica o prompt em uma categoria e devolve a resposta associada a ela.

## 2. Qual é a diferença entre um modelo discriminativo e um generativo?
- A) O discriminativo usa redes neurais; o generativo usa estatística clássica.
- B) O discriminativo aprende sem rótulos; o generativo exige dados rotulados.
- C) O discriminativo aprende p(y|x); o generativo aprende a distribuição dos próprios dados.
- D) O discriminativo produz texto; o generativo produz apenas imagens e áudio.

## 3. Uma empresa faz fine-tuning de um modelo com chamados de suporte que contêm CPFs e telefones de clientes. Pelo estudo de Carlini e colegas, qual é o risco?
- A) Nenhum, pois o modelo guarda padrões estatísticos e não os textos originais.
- B) O modelo pode reproduzir trechos literais desses dados em resposta a consultas.
- C) O modelo passa a recusar perguntas que mencionem dados pessoais.
- D) O risco existe só em modelos pequenos, que memorizam mais do que os grandes.

## 4. O mesmo prompt, enviado duas vezes, gera respostas diferentes. Qual é a causa?
- A) O modelo é retreinado entre uma consulta e outra.
- B) O prompt é interpretado de forma diferente a cada leitura.
- C) Os pesos do modelo mudam um pouco a cada execução.
- D) O próximo token é sorteado da distribuição, e não fixado no mais provável.

## 5. Por que um prompt vago tende a produzir uma resposta genérica?
- A) Porque o modelo penaliza prompts curtos com respostas de menor qualidade.
- B) Porque ele restringe pouco a distribuição, e o sorteio cai no mais comum.
- C) Porque o modelo precisa de exemplos rotulados para ser específico.
- D) Porque prompts curtos ativam menos camadas da rede neural.

## 6. O que a AlexNet (2012) ilustra sobre os pilares citados na aula?
- A) Que GPUs comuns e um grande conjunto rotulado bastaram para um salto de desempenho.
- B) Que o Transformer já era necessário para vencer competições de imagem.
- C) Que modelos pequenos, treinados em CPU, superavam as redes profundas.
- D) Que a quantidade de dados importava pouco diante do poder computacional.

## 7. Por que a fluência de um texto gerado não indica que ele está correto?
- A) Porque o modelo insere erros de propósito para parecer mais humano.
- B) Porque textos longos acumulam erros de arredondamento nos cálculos.
- C) Porque a fluência depende do prompt, e a correção depende da temperatura.
- D) Porque o modelo é treinado para o plausível, que não equivale ao verdadeiro.

## 8. Qual afirmação descreve melhor a "mudança de paradigma" entre IA preditiva e generativa?
- A) A generativa abandonou a probabilidade e passou a operar com regras de criação.
- B) A generativa deixou de usar dados de treino e passou a criar a partir do prompt.
- C) A generativa prevê pedaços do próprio dado e realimenta cada previsão como entrada.
- D) A generativa prevê rótulos mais complexos, com milhares de classes possíveis.

## 9. Um time precisa classificar transações como fraude ou não fraude, com baixo custo e avaliação simples. Qual é a escolha mais adequada?
- A) Um modelo discriminativo, que aprende só a fronteira entre as classes.
- B) Um LLM generativo, que entende melhor o contexto de cada transação.
- C) Um modelo de imagens, que converte as transações em gráficos.
- D) Um LLM com temperatura alta, para explorar mais hipóteses de fraude.

## 10. Qual afirmação está INCORRETA?
- A) O Transformer foi adotado, em parte, por aproveitar bem o paralelismo das GPUs.
- B) O prompt funciona como uma ordem que o modelo executa, e não como texto a continuar.
- C) Modelos maiores tendem a memorizar mais dados de treino que modelos menores.
- D) A AlexNet precisou ser dividida entre duas placas por não caber em uma.
