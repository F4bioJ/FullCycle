# Identificando bugs na prática com ReAct

## Prompt de debugging com ReAct

Retomando o loop Thought/Action/Observation já definido anteriormente, o ganho aqui está em transformá-lo em um prompt de depuração operacional. O prompt precisa fixar o papel do modelo como desenvolvedor back-end Go, delimitar o alvo do debug — o handler `POST /products` — e exigir uma saída em etapas até chegar a uma recomendação final de correção. Essa estrutura evita respostas genéricas porque força o modelo a inspecionar o fluxo real do código: decode do body, preparação da query, execução no banco e resposta HTTP.

## Restrição contra alucinação durante o debug

Em debugging com IA, a restrição mais importante é impedir que o modelo use evidências que não existem no contexto. A instrução “do not fabricate information that is not provided in the context” reduz o risco de o raciocínio se apoiar em logs, traces ou comportamentos não fornecidos, o que contaminaria todo o diagnóstico. No caso de handlers com erro 500, isso é decisivo porque o modelo tende a inventar mensagens de erro plausíveis; ao proibir explicitamente logs inexistentes, o diagnóstico precisa se sustentar apenas no código disponível.

## Leitura do handler Go como sequência de pontos de falha

O handler apresentado recebe a requisição, faz o decode do JSON para uma struct `Product`, prepara um `INSERT`, executa a operação no banco e retorna `HTTP 201 Created` quando tudo funciona. Cada uma dessas etapas é um ponto potencial de falha, mas nem todas explicam um erro 500 recorrente. O raciocínio útil começa eliminando causas incompatíveis com o sintoma observado, como erro de parsing do body, que normalmente produziria 400 em vez de 500.

## Eliminação de hipóteses pelo código de status

A primeira checagem relevante é separar falhas de entrada de falhas internas do servidor. Se o decode do JSON já retorna `Bad Request` quando o payload é inválido, essa etapa deixa de ser a principal suspeita para um 500 consistente. Esse filtro é valioso porque reduz o espaço de busca e desloca a investigação para a camada de persistência, onde erros de preparação ou execução de query são mais compatíveis com o sintoma.

## Diagnóstico de mismatch entre struct e banco

O bug está no desalinhamento entre a struct Go e o tipo esperado pelo banco de dados para `price`. Quando `price` é declarado como `string`, mas o `INSERT` e o schema esperam um valor numérico como `float64` ou `decimal`, a chamada de execução pode falhar por incompatibilidade de tipo. Esse é um erro típico de integração entre aplicação e banco: o código compila, o fluxo parece correto, mas a persistência quebra no momento em que os valores concretos são enviados.

## Correção do campo `price`

A correção consiste em alterar `price` na struct `Product` de `string` para `float64`, alinhando o tipo da aplicação ao tipo esperado na persistência. Isso faz o decode do JSON produzir um valor numérico já compatível com a execução da query, em vez de empurrar uma string para uma coluna numérica. Se o banco usar precisão monetária mais rígida, outra alternativa seria modelar explicitamente um tipo compatível com a estratégia financeira adotada, mas o ponto central aqui é eliminar o mismatch.

## Interpretação da saída do ReAct no debugging

A utilidade do ReAct não está apenas em acertar a resposta final, mas em mostrar por que certas hipóteses foram descartadas e por que outra se tornou mais provável. Quando a sequência passa por decode, preparação de statement e revisão dos argumentos do `Exec`, o desenvolvedor consegue auditar a trilha de decisão em vez de aceitar um palpite isolado. Isso torna a técnica especialmente útil para bugs de backend em que a causa real está em uma nuance de contrato entre camadas.

## Controle maior do que o uso genérico da IDE

Ferramentas de IDE já ajudam a detectar erros, mas um prompt específico de debugging permite orientar a investigação segundo o contexto exato do problema. Ao informar endpoint, sintoma, trecho de código e restrições de evidência, o desenvolvedor controla melhor o tipo de análise produzida e consegue reutilizar esse padrão em outros bugs semelhantes. O valor prático está em transformar a IA em um apoio de depuração guiada, e não em um gerador de suposições soltas.
