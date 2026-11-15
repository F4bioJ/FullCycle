# Prompt Channing na prática com LangChain

## Prompt chaining como pipeline de transformação

Prompt chaining organiza uma tarefa grande como uma sequência de etapas especializadas em que a saída de uma vira a entrada da próxima. Isso é útil quando uma única chamada ao modelo mistura responsabilidades demais, como interpretar requisitos, gerar estrutura técnica e produzir artefatos finais. Em vez de pedir tudo de uma vez, o fluxo separa extração de esquema, geração de código e síntese final. O ganho principal é controle sobre a orquestração e sobre o tipo de modelo usado em cada etapa.

## Encadeamento com LangChain e operadores de pipe

No fluxo encadeado, cada prompt template recebe variáveis de entrada, passa sua saída para uma LLM e depois para um parser que normaliza o formato para a próxima etapa. O pipe representa exatamente essa composição: prompt → modelo → parsing → próxima etapa. Retomando o uso de LangChain já conhecido, o ponto novo aqui não é o framework em si, mas a montagem explícita de uma pipeline em que cada bloco tem contrato de entrada e saída. Sem esse contrato, a integração entre etapas fica frágil e difícil de depurar.

## Etapa 1: transformar especificação textual em esquema JSON

A primeira etapa recebe uma especificação de produto em linguagem natural e extrai um JSON mínimo com campos e tipos. Esse passo existe para converter um texto ambíguo em uma estrutura intermediária mais previsível, que pode ser consumida por outras etapas sem reinterpretar o requisito inteiro. No exemplo, a especificação descreve campos como `id`, `name`, `description`, `price` e `stock`, além de restrições como obrigatoriedade e valores maiores que zero. Pedir “somente o JSON” reduz ruído e facilita o parsing posterior.

## Etapa 2: usar o esquema como entrada para gerar rotas e handlers

Depois que o esquema foi estabilizado, ele passa a ser o contexto da geração de código. O prompt pede rotas REST idiomáticas em Go, com handlers de CRUD e saída em Markdown com code blocks, o que ajuda tanto na leitura quanto na persistência do resultado. Essa separação evita que o modelo precise inferir simultaneamente os requisitos de domínio e a implementação HTTP. O efeito prático é um código mais alinhado ao esquema produzido na etapa anterior.

## Etapa 3: sintetizar o resultado em uma mensagem de commit

A terceira etapa não gera código novo; ela resume o que o pipeline produziu em uma mensagem de commit no padrão Conventional Commits. Esse tipo de síntese é útil porque transforma artefatos técnicos já gerados em documentação operacional curta e padronizada. No exemplo, a mensagem resume a criação da API de produtos com operações CRUD, validação e paginação. Isso mostra que prompt chaining não serve apenas para expandir conteúdo, mas também para condensá-lo em formatos específicos.

## Escolha de modelos diferentes por etapa

Um pipeline pode usar modelos distintos conforme a complexidade de cada tarefa. Extrair campos e tipos para JSON é uma tarefa mais mecânica, enquanto gerar código idiomático em Go exige mais qualidade de raciocínio e de síntese estrutural. Por isso, faz sentido usar um modelo mais simples na etapa de estruturação e um modelo mais forte na etapa de geração de código. Retomando a comparação entre modelos já conhecida, a decisão aqui é arquitetural: distribuir custo, latência e capacidade conforme a função de cada bloco.

## Parsing como dependência crítica entre etapas

O encadeamento só funciona bem quando a saída de uma etapa respeita exatamente o formato esperado pela próxima. Se o primeiro modelo devolve comentário extra, texto fora do JSON ou Markdown inesperado, a etapa seguinte pode falhar ou interpretar dados errados. Esse é um ponto central do prompt chaining: erros pequenos de formatação se propagam pelo pipeline e contaminam os resultados posteriores. Por isso, prompts com restrições explícitas de formato e uso de parsers são parte da implementação, não detalhe opcional.

## Persistência do resultado em arquivo Markdown

Quando o pipeline gera muito conteúdo, imprimir tudo no terminal piora a leitura e dificulta reaproveitamento. Gravar o `result_content` em um arquivo como `promptChainingResult.md` transforma a execução em um artefato consultável, versionável e fácil de revisar. O pedido recorrente para que cada etapa escreva em Markdown existe justamente para padronizar a composição final do arquivo. O resultado deixa de ser apenas uma resposta efêmera do modelo e passa a ser documentação técnica gerada pela pipeline.

## Latência, propagação de erro e custo operacional

Toda etapa adicional aumenta o tempo total de execução, porque cada chamada ao modelo adiciona latência própria e espera de rede. Se uma etapa inicial errar o esquema, as seguintes podem produzir código e commit coerentes com um estado incorreto, o que torna o erro mais difícil de perceber. Além disso, múltiplas chamadas elevam o consumo total de tokens, mesmo quando cada prompt individual é curto. Prompt chaining compensa quando a decomposição melhora qualidade, auditabilidade ou automação mais do que aumenta o overhead.

## Agentes, delegação e composição de responsabilidades

Retomando a ideia de agentes já conhecida, delegação entre agentes frequentemente implementa o mesmo princípio estrutural do prompt chaining: um componente produz algo que outro consome. A diferença é que, em fluxos com agentes, essa passagem pode aparecer como decisão operacional entre papéis especializados. No exemplo, a lógica é equivalente: um bloco extrai estrutura, outro gera implementação e outro sintetiza o resultado final. Isso aproxima o pipeline de arquiteturas reais com múltiplas responsabilidades coordenadas.
