# Gabarito — Additional criteria

## 1. Detectar problemas inventados sem outputs esperados
**Correta: C**
**Por quê:** O que se quer saber é se a resposta é fiel ao código recebido, não se ela bate com um alvo. No exemplo 5, o professor escreveu um Faithfulness próprio, com a descrição "grounded, sem inventar problema ou contexto que não existe no código, sem assumir o que não foi mostrado", e o rodou sem referência (não labeled). A descrição guia o julgamento a partir do input, o que serve a um dataset sem outputs esperados.
- **A:** O correctness com referência compara a saída com a resposta esperada do dataset, e essa equipe não tem esse alvo.
- **B:** O professor justamente não usou a opção built-in: ele detalhou o critério na descrição para o evaluator saber o que verificar no caso dele.
- **D:** O labeled `ScoreString` serve quando há referência (como no relevance com referência). O faithfulness da aula rodou sem referência, e nem era labeled.
**Conceito:** faithfulness customizado sem referência

## 2. Ganho de customizar o Format Adherence
**Correta: A**
**Por quê:** A descrição do professor diz exatamente o que conta como formato certo: seguir as instruções e retornar somente um JSON válido, sem texto antes ou depois, sem markdown e sem explicação extra. Com isso, o evaluator julga pelo contrato de saída da aplicação, e não por uma ideia vaga de formato.
- **B:** A customização muda a descrição do critério, não a escala. Na aula anterior, o score em range já aparecia em critérios como conciseness e coherence, sem esse tipo de descrição própria.
- **C:** O critério continua sendo julgado pelo evaluator, que lê as instruções passadas na descrição; a aula não troca o julgamento por código.
- **D:** É o inverso: a descrição detalhada dá ao evaluator base para penalizar desvios pequenos. No resultado, o formato perdeu nota mesmo com o JSON válido e sem texto fora dele.
**Conceito:** format adherence customizado

## 3. Format adherence 0,98 com parser sem erro
**Correta: D**
**Por quê:** O professor abriu o reasoning para entender por que a nota não foi máxima. O evaluator registrou que a resposta era um JSON válido, sem texto antes ou depois, mas que não estava em inglês, como se esperava, e por isso não aderiu completamente às instruções. Um parser leria esse JSON sem erro; só o reasoning mostra o desvio.
- **A:** A normalização por 10 só converte a nota para a faixa de 0 a 1; ela não explica a perda. No exemplo, a perda tinha um motivo concreto, apontado no reasoning.
- **B:** O reasoning disse o contrário: a resposta não tinha texto antes nem depois do JSON. O desvio estava no idioma.
- **C:** O markdown é proibido pela descrição, mas não foi o motivo apontado no exemplo; o reasoning citou o idioma da resposta.
**Conceito:** leitura do reasoning do evaluator

## 4. Leitura conjunta de specificity, faithfulness e formato
**Correta: B**
**Por quê:** Cada critério mede uma dimensão. A especificidade alta mostra que a análise aponta linhas, termos técnicos e dados; o formato quase máximo mostra que o JSON segue o contrato. O faithfulness, o mais baixo dos três, mede justamente se a resposta vem do código e não assume o que não foi mostrado: é aí que o prompt precisa ser investigado.
- **A:** Ser específico não garante fidelidade: uma revisão pode citar uma linha e termos técnicos e ainda assim apontar um problema que o código não tem. Por isso os dois critérios são separados.
- **C:** O faithfulness da aula foi desenhado para rodar sem referência, julgando a resposta contra o código do input. A nota baixa fala da resposta, não da falta de outputs esperados.
- **D:** A média esconde a dimensão mais fraca. Avaliar critérios separados serve para ver qual aspecto do prompt precisa de ajuste.
**Conceito:** interpretação conjunta de múltiplos critérios

## 5. Afirmação INCORRETA sobre os evaluators da aula
**Correta: A**
**Por quê:** É falsa. O faithfulness customizado do exemplo 5 rodou com dados sem referência, e o professor destaca que ele nem é labeled. A descrição do critério é a instrução para o evaluator, não uma referência.
- **B:** Verdadeira. O professor resume que dá para usar os built-ins do LangSmith ou customizar e, nos dois casos, trabalhar com ou sem referência.
- **C:** Verdadeira. No LangSmith, o correctness inicial aparecia como true ou false, e o correctness com referência do exemplo 4 saiu com nota graduada (0,75).
- **D:** Verdadeira. O professor mostra latência, tokens e custo, e comenta que isso depende muito do tamanho do prompt.
**Conceito:** built-in e customizado, com ou sem referência
