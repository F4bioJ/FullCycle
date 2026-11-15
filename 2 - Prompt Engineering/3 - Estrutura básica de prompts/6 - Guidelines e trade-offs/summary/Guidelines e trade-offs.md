# Guidelines e trade-offs

## Zero-shot em tarefas simples e de alto volume

Zero-shot é a escolha padrão quando a tarefa é simples, genérica e não depende de um domínio muito específico. Casos como validar JSON, identificar elementos de uma frase ou resumir um texto curto costumam funcionar sem exemplos, porque o modelo já reconhece esse padrão com pouca instrução. Em cenários de alto volume, essa escolha ganha importância econômica: menos tokens por requisição significam menor custo agregado e menor latência.

## Quando few-shot passa a valer a pena

Few-shot se justifica quando o domínio tem muitas especificidades ou quando o formato esperado precisa ser moldado com precisão. Retomando a ideia de saída esperada já estabelecida, os exemplos funcionam como demonstrações concretas do comportamento desejado: dado X, retorne Y. Isso aumenta a chance de aderência ao padrão correto, mas cobra um preço operacional em tokens, tempo de resposta e processamento.

## Exemplos como mecanismo de controle de saída

Um exemplo não serve apenas para “ajudar” o modelo; ele codifica explicitamente o padrão de resposta que deve ser reproduzido. Por isso, few-shot é uma forma prática de controlar formato, estrutura e nível de adequação da saída em domínios sensíveis ou altamente específicos. O ganho de qualidade vem justamente do fato de o modelo não precisar inferir sozinho qual resposta seria considerada correta naquele contexto.

## Trade-off quantitativo entre qualidade e custo

A decisão entre zero-shot e few-shot precisa ser tratada como conta, não como preferência. Se zero-shot entrega 86% de assertividade com custo base e few-shot entrega 90% com custo 20% maior, a pergunta correta não é “qual é melhor?”, mas “quanto custa cada ponto percentual adicional de acerto?”. Essa formulação transforma prompt engineering em decisão mensurável de produto e operação.

## Cálculo do custo por ponto de assertividade

Considere um sistema que custa 10 mil dólares por mês com zero-shot e 12 mil dólares por mês com few-shot. O ganho foi de 4 pontos percentuais de assertividade ao custo adicional de 2 mil dólares, então cada 1% extra custa 500 dólares. Esse cálculo permite discutir o prompt em termos de retorno marginal: pagar mais só faz sentido se o impacto do erro evitado justificar esse valor.

## Decisão de prompt como decisão entre áreas

A escolha do prompt nem sempre pertence apenas ao desenvolvedor, porque ela afeta orçamento, experiência do usuário e risco operacional. Em vez de decidir isoladamente, a engenharia precisa traduzir a escolha em linguagem de negócio: pagar mais para reduzir erro ou aceitar mais erro com processos de mitigação. Isso conecta prompt engineering a produto, finanças e operação, e amplia o problema para além da escrita do prompt.

## Mitigação e criticidade da tarefa

Nem todo erro tem o mesmo peso, então a assertividade necessária depende da criticidade da tarefa. Se o processo tolera falhas e possui mecanismos de mitigação, pode ser racional aceitar uma taxa de erro maior para economizar custo e latência. Em tarefas mais sensíveis, o ganho de assertividade pode justificar prompts mais caros, e até 90% pode continuar insuficiente.

## Prompt engineering como decisão estratégica

Prompt engineering não se limita à formulação textual da instrução; ele também envolve escolher o nível de contexto e exemplificação compatível com a escala de uso. Zero-shot e few-shot são instrumentos com efeitos econômicos e operacionais diferentes, e a escolha entre eles altera a viabilidade do sistema. Projetar prompts, portanto, inclui raciocinar sobre custo recorrente, tempo de resposta e valor de negócio do ganho de qualidade.
