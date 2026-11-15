# MLM

## MLM e predição por lacunas

Masked Language Modeling substitui parte dos tokens de uma sequência por máscaras e treina o modelo para reconstruir os termos ausentes. Diferentemente do CLM, já referenciado anteriormente, a previsão não acontece apenas no próximo token, mas em posições internas da frase. Isso muda o objetivo do treinamento: em vez de continuar uma sequência, o modelo aprende a inferir palavras faltantes a partir do contexto ao redor.

## Contexto bidirecional

O ponto central do MLM é o uso de contexto bidirecional. Como a palavra mascarada fica no meio da sequência, o modelo pode usar tanto os tokens anteriores quanto os posteriores para fazer a predição. Em uma frase como `O [MASK] hoje está muito azul`, a inferência depende do que vem antes e depois da máscara, o que favorece tarefas em que entender o sentido global importa mais do que gerar texto token a token.

## Máscaras parciais no treinamento

O mascaramento não cobre a frase inteira, porque o modelo ainda precisa de contexto suficiente para inferir o conteúdo ausente. Um procedimento típico é mascarar cerca de 20% das palavras de forma aleatória durante o pré-treinamento. Esse equilíbrio preserva informação contextual e, ao mesmo tempo, cria dificuldade suficiente para que o modelo aprenda relações semânticas e sintáticas úteis.

## Aprendizado por comparação com o alvo

Depois de prever os tokens mascarados, o modelo compara sua saída com os valores esperados e ajusta pesos e vieses por backpropagation. A mecânica de otimização é a mesma já usada em outras redes neurais profundas; o que muda aqui é a tarefa de treinamento. O sinal de erro vem da diferença entre a palavra prevista e a palavra original escondida pela máscara.

## Por que MLM é forte em compreensão

Retomando a distinção entre modelos voltados a continuação de sequência e modelos voltados a inferência contextual, o MLM tende a ser melhor em compreensão de texto do que em geração livre. Ele aprende a detectar pistas distribuídas ao longo da frase e a reconstruir significado mesmo com partes faltando. Isso o torna especialmente adequado para classificação, busca semântica e outras tarefas em que interpretar contexto é mais importante do que produzir uma resposta longa token por token.

## Limitação para geração de texto

Gerar texto fluentemente exige modelar a dependência causal entre os tokens já produzidos e o próximo token a ser emitido. Como o MLM foi treinado para preencher lacunas com acesso aos dois lados da sequência, seu objetivo não coincide com o fluxo natural de geração autoregressiva. Por isso, arquiteturas como BERT, que usam MLM, se destacam em entendimento de linguagem, mas não são a escolha natural para chatbots gerativos.

## Intuição prática de leitura

Uma boa intuição é pensar em leitura seletiva de documentos. Ao procurar textos sobre um assunto, o leitor costuma bater o olho em palavras-chave espalhadas no meio do conteúdo para decidir rapidamente se aquele documento trata do tema desejado. O MLM aprende um comportamento análogo: usa fragmentos contextuais distribuídos na sequência para inferir significado e identificar de que assunto o texto trata.

## Pré-treinamento sem supervisão externa

Tanto o CLM quanto o MLM se encaixam em pré-treinamento sem supervisão externa, ou unsupervised, porque o próprio texto fornece o alvo de aprendizado. No CLM, remove-se o próximo token esperado; no MLM, escondem-se alguns tokens internos com máscaras. Em ambos os casos, não é necessário um anotador humano rotulando exemplos manualmente, porque o corpus já contém a informação que o modelo precisa para aprender.
