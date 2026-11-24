# Pairwise com justificativa do LLM-as-Judge

## Justificativa auditável em pairwise

Uma decisão pairwise fica muito mais útil quando o juiz não retorna apenas A, B ou `tie`, mas também explica por que escolheu aquele vencedor. Essa justificativa transforma a comparação em evidência auditável, porque permite inspecionar a linha de raciocínio do judge em vez de aceitar um placar opaco. Em tarefas mais subjetivas, como documentação long-form, isso é essencial para revisar decisões, contestar julgamentos e ajustar critérios sem perder rastreabilidade.

## Categorias de julgamento por documentação

A comparação pode ser decomposta em categorias como `conciseness`, `reference alignment`, `clarity`, `utility`, `technical precision` e `structural completeness`. Cada categoria isola uma dimensão de qualidade que, sozinha, não resolve a decisão final, mas ajuda a explicar onde uma saída supera a outra. Essa decomposição evita um julgamento genérico de “melhor resposta” e produz uma leitura mais estável sobre trade-offs entre brevidade, completude, precisão técnica e aderência à referência.

## Pairwise em documentação long-form

Retomando a comparação controlada entre duas saídas para o mesmo input, o cenário agora deixa de ser uma resposta curta e passa a ser uma documentação gerada a partir de vários arquivos de código. Nesse contexto, o prompt mais forte pede documentação high-level, factual, concisa e estruturada em Markdown, enquanto a variante mais fraca reduz exigência técnica e profundidade. O objetivo não é só descobrir qual documentação parece melhor, mas qual entrega melhor equilíbrio entre estrutura, precisão e utilidade para desenvolvedores.

## Métricas isoladas não resolvem a arbitragem

Scores auxiliares como cobertura, terminologia e nível de detalhe continuam úteis, mas não bastam quando cada saída vence em dimensões diferentes. Uma documentação pode ser mais concisa, enquanto a outra é mais completa ou tecnicamente mais precisa; sem uma regra de arbitragem, a decisão fica ambígua. O judge pairwise resolve esse conflito ao consolidar múltiplos critérios em uma preferência final, preservando a explicação por categoria.

## Estrutura do judge com referência e regras explícitas

O judge recebe o código, a referência disponível, as documentações A e B e um conjunto de regras de pontuação por categoria. Essa estrutura permite comparar as saídas com base em critérios explícitos e ainda ancorar a decisão em um material de referência complementar, como um ground truth de documentação. O resultado deixa de ser uma preferência intuitiva e passa a ser uma decisão guiada por uma rubrica verificável.

## Leitura prática do resultado no trace

Na execução, primeiro são geradas as duas documentações e só depois ocorre o julgamento comparativo, como já estabelecido no fluxo pairwise. O ponto novo está na inspeção do output do judge: o trace mostra a pontuação por categoria e a justificativa textual correspondente. Quando o judge afirma, por exemplo, que a documentação A venceu em `structural completeness` e `technical precision`, ele explicita se isso ocorreu por melhor visão geral do projeto, uso mais correto de nomes, funções, contexto e fluxo de dados.

## Anotações humanas como referência complementar

Anotações humanas podem ser incorporadas ao processo como fonte adicional de avaliação, especialmente quando a qualidade desejada não cabe totalmente em uma regra automática. Elas funcionam como referência complementar para validar, calibrar ou contestar o comportamento do judge em casos difíceis. Isso é particularmente valioso quando a tarefa envolve documentação, utilidade prática e julgamento editorial, onde a preferência do modelo precisa ser confrontada com critérios humanos.

## Custo e latência em geração de documentação

Documentação long-form tende a consumir muitos `output tokens`, o que aumenta tempo de execução e custo operacional. Mesmo com poucos exemplos, cada iteração pode ser lenta porque a geração é extensa e o julgamento ainda adiciona uma chamada extra. Por isso, a avaliação precisa equilibrar profundidade analítica com orçamento, principalmente quando o experimento for escalado para datasets maiores.

## Evaluation contínua por mudança de modelo

A validade de um experimento não é permanente, porque o comportamento muda quando o modelo muda. Um prompt que vence com `ChatGPT-4o mini` pode perder, empatar ou justificar de outro modo com GPT-5, Claude ou Gemini. Evaluation contínua existe para revalidar decisões sempre que mudam modelo, tarefa, critérios ou contexto operacional.

## Prompt Engineering exige comparação revalidável

Em Prompt Engineering, comparar saídas lado a lado é parte do trabalho de engenharia, não um detalhe periférico. A utilidade real da avaliação aparece quando os objetivos de medição estão claros e o experimento produz evidência discutível por outras pessoas da equipe. Uma comparação com justificativa auditável permite defender escolhas, revisar critérios e iterar prompts com muito mais segurança metodológica.
