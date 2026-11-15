# Quizz — Transformers (avançado)

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 4
**Base:** material avançado

---

## 1. De onde vem, de fato, a capacidade de paralelizar do Transformer?
- A) Da atenção não ter recorrência: todos os pares saem de multiplicações de matrizes.
- B) Da MLP, que junta todos os tokens em uma única camada densa compartilhada.
- C) Do positional encoding, que permite processar fora de ordem e reordenar depois.
- D) Das várias heads, que dividem a sequência em trechos processados em separado.

## 2. Um sistema passa a enviar 8.000 tokens de contexto em vez de 4.000. O que acontece com o custo da self-attention em cada camada?
- A) Dobra, pois cada token novo é comparado uma vez com o contexto.
- B) Quadruplica, pois o número de pares de tokens cresce com o quadrado.
- C) Fica igual, pois a GPU processa todos os tokens em paralelo.
- D) Cresce oito vezes, pois há oito heads repetindo cada comparação.

## 3. Um chat com LLM demora para entregar respostas longas, e dobrar o número de GPUs quase não ajuda. Qual é a explicação mais provável?
- A) O encoder relê a entrada inteira a cada novo token que é produzido.
- B) A camada feedforward processa as posições uma depois da outra.
- C) A geração é autorregressiva: cada token depende dos que já saíram.
- D) O positional encoding é recalculado para toda a sequência a cada passo.

## 4. Para que serve a máscara na self-attention do decoder?
- A) Impedir que o encoder tenha acesso aos tokens que o decoder já gerou.
- B) Evitar que um token atribua peso de atenção a ele mesmo.
- C) Descartar da conta os tokens que receberam pouco peso de atenção.
- D) Fazer cada posição ver só as anteriores, permitindo treinar todas em paralelo.

## 5. É preciso classificar dois milhões de chamados de suporte por categoria, com o menor custo possível. Qual família de modelo é a escolha mais adequada?
- A) Decoder-only, pois a categoria é um texto que precisa ser gerado.
- B) Encoder-only, pois lê os dois lados do texto e dispensa a geração.
- C) Encoder-decoder, pois a tarefa converte um texto em outro texto.
- D) ViT, pois trata cada chamado como uma sequência de pedaços.

## 6. Um prompt de 30 mil tokens tem uma instrução importante no meio, e o modelo não a segue. A equipe argumenta: "ele leu tudo". Qual é a explicação mais coerente com o material?
- A) O positional encoding perde precisão no meio da sequência e apaga aqueles tokens.
- B) Para conter o custo quadrático, o modelo descarta o meio e lê o começo e o fim.
- C) Ler tudo não é pesar tudo igual: a instrução pode ter recebido pouco peso.
- D) A camada feedforward sobrescreve os tokens antigos com o conteúdo dos mais recentes.

## 7. Um colega diz: "Como o Transformer não tem degradação do gradiente, dá para empilhar 48 camadas sem nada especial". O que o material responde?
- A) Vale entre tokens, mas na profundidade o gradiente depende de residual e LayerNorm.
- B) Está certo: o caminho curto entre tokens também vale entre a primeira e a última camada.
- C) Está errado: a atenção reintroduz recorrência entre as camadas e o gradiente se multiplica.
- D) Está errado: cada camada precisa do próprio positional encoding para o gradiente não sumir.

## 8. Para justificar a um auditor "por que o modelo decidiu isso", uma equipe mostra o mapa de pesos de atenção de uma head. Qual é o problema dessa evidência?
- A) Os pesos de atenção mudam de forma aleatória a cada execução do mesmo prompt.
- B) Os pesos de atenção só existem durante o treino e não podem ser lidos em uso.
- C) A head exibida mostra só o positional encoding, e não as relações entre tokens.
- D) É um sinal entre muitos, espalhado por heads e camadas, e não explica o raciocínio.

## 9. Por que o Transformer usa várias heads em vez de uma única atenção do mesmo tamanho total?
- A) Para que cada head atenda a um idioma diferente durante a tradução.
- B) Para que cada head, com Q, K e V próprios, capture um tipo diferente de relação.
- C) Para que as heads votem e o token mais citado entre elas seja o escolhido.
- D) Para que cada head amplie a janela de contexto com um trecho a mais de texto.

## 10. Um fornecedor afirma: "Nosso sistema usa Transformer, então as respostas são factualmente confiáveis". Qual leitura é a correta?
- A) Procede: sem degradação do gradiente, a informação do treino é preservada sem perdas.
- B) Procede para modelos encoder-only, que leem a entrada nos dois sentidos.
- C) Não procede: a arquitetura melhora a coerência do texto, não garante a verdade.
- D) Não procede: o custo quadrático obriga o modelo a cortar fatos do contexto longo.
