# Gabarito — Score com range

## 1. O que o ScoreString acrescenta quando duas versões passam no binário
**Correta: C**
**Por quê:** no binário, as duas versões caem na mesma classe (`yes`) e não há como saber qual é mais concisa. O `ScoreString` dá uma nota em faixa (normalizada de 0 a 1) a cada saída, e os números mais granulares mostram a diferença entre versões que o binário juntava.
- **A:** o score em range não depende de referência. Na aula, conciseness, coherence, detail e depth rodam em `ScoreString` sem referência; só relevance usa referência.
- **B:** contagem de `yes` e `no` é a leitura do binário. Se as duas versões passam em todos os exemplos, mais exemplos aprovados não as separam.
- **D:** o critério continua o mesmo; o que muda é a resolução da medida (quão concisa, em vez de concisa ou não).
**Conceito:** granularidade do score com range

## 2. Configuração de relevance em faixa com referência
**Correta: A**
**Por quê:** o professor mostra a regra: quando o critério precisa dos dados de referência, a configuração é `labeled ScoreString`; sem referência, basta `ScoreString`. Foi assim que ele configurou relevance no exemplo.
- **B:** `Labeled Criteria` recebe a referência, mas é o evaluator binário da aula anterior: devolve `yes` ou `no`, não uma nota em faixa.
- **C:** a normalização por 10 só converte a nota de 0 a 10 para 0 a 1. Ela não leva a referência ao evaluator.
- **D:** preparar os dados com a referência é necessário, mas não basta: o professor diz que, quando o critério precisa dos dados de referência, ele tem de ser configurado como `labeled ScoreString`. O `ScoreString` simples é a configuração dos critérios sem referência.
**Conceito:** labeled ScoreString (score em range com referência)

## 3. Por que 0.78 em conciseness não significa 22% de reprovadas
**Correta: D**
**Por quê:** com a normalização por 10, a nota dada numa escala de 0 a 10 é convertida para 0 a 1. O 0.78 indica 78% da escala máxima de concisão, não uma proporção de aprovações como a contagem de `yes` do binário. No range não existe "reprovada": cada saída recebe uma nota, e o colega está lendo o score como se fosse o binário.
- **A:** o professor só supõe que o binário tenha um ponto de corte interno, sem dizer qual; o 0.5 é inventado. Além disso, a média 0.78 não garante que cada revisão tenha ficado acima de um corte.
- **B:** inverte o sentido da nota: quanto mais perto de 1, mais concisa a resposta. E 0.78 continua sendo uma nota, não uma proporção de revisões.
- **C:** conciseness, coherence, detail e depth rodam sem referência e ainda assim dão notas com significado, porque julgam a qualidade interna da resposta.
**Conceito:** ScoreString normalizado por 10

## 4. Revisão cheia de detalhes corretos, mas sem nada além do óbvio
**Correta: B**
**Por quê:** detail mede se há detalhamento suficiente; depth mede se a análise vai além do óbvio. Uma revisão com muitos detalhes corretos, mas que só descreve o que uma leitura rápida já mostra, pode pontuar em detalhamento e ainda assim ter pouca profundidade. É o exemplo do resumo do professor: uma resposta pode ser cheia de detalhes superficiais sem aprofundar nada, e separar os dois evita confundir volume com qualidade analítica.
- **A:** inverte os critérios. Muito detalhe sem nada além do óbvio é o perfil de detail alto com depth baixo, não o contrário.
- **C:** detail e depth são dimensões distintas, e o caso descrito é justamente o que faz os dois divergirem.
- **D:** relevance usa referência, mas isso não faz detail e depth ficarem altos; o problema descrito (nada além do óbvio) é o que depth mede.
**Conceito:** detail e depth como dimensões distintas

## 5. Afirmação INCORRETA sobre score com range
**Correta: C**
**Por quê:** a afirmação é falsa. O professor repete conciseness porque no exemplo binário ele só existia como 0 ou 1; em range, é o mesmo critério medido com mais resolução (quão concisa a resposta é).
- **A:** correta. Pelo resumo do professor, a triagem rápida favorece o binário, e a comparação fina favorece o range.
- **B:** correta. O professor diz que o binário "provavelmente" tem um critério interno ("a partir de tanto vai yes"); por isso respostas aprovadas com qualidades diferentes ficam iguais.
- **D:** correta. No exemplo, conciseness, coherence, detail e depth rodam sem referência e relevance com referência, cada um como um evaluator da lista.
**Conceito:** binário x range: mesmo critério, outra resolução
