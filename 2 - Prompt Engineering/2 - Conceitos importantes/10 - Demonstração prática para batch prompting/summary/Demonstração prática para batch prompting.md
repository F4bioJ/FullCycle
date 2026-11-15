# Demonstração prática para batch prompting

## Cenário operacional: logs virando issues no GitHub

Retomando o cenário da aplicação, os logs do servidor deixam de ser apenas entradas isoladas e passam a alimentar um workflow com agentes: um recebe o log, outro classifica, outros refinam a issue e um agente final publica no GitHub. O ponto novo aqui não é a existência de múltiplos agentes, mas o impacto arquitetural de processar logs continuamente em alto volume. Quando o sistema trata cada log como uma conversa independente sem estratégia de agrupamento, o fluxo funciona, mas escala mal em custo e latência.

## Solução ingênua: uma chamada por log

A implementação mais direta envia cada log recebido para a LLM assim que ele chega. Isso resolve o problema funcional: logs de health check encerram o fluxo cedo, enquanto logs de erro seguem para geração e revisão de issue. O problema é operacional: cada item dispara uma nova request com o mesmo conjunto de instruções, multiplicando overhead, repetição de prompt e tempo total de processamento.

## Problema de sessão acumulando histórico

Se vários logs forem inseridos na mesma sessão, a conversa passa a carregar o histórico anterior a cada nova análise. Como a sessão preserva mensagens passadas, cada log novo faz o modelo reprocessar conteúdo que já não é necessário para aquela decisão específica. Nesse caso, a janela de contexto deixa de ser apenas um limite técnico e vira uma fonte direta de desperdício de tokens.

## Conversa por log versus conversa por lote

Uma conversa por log elimina o acúmulo indevido de histórico, mas ainda mantém o custo de uma chamada por item. O redesenho mais eficiente cria uma nova sessão a cada X logs, não a cada evento individual. Esse corte por lote preserva isolamento suficiente para evitar crescimento descontrolado da conversa e, ao mesmo tempo, reduz a repetição estrutural do prompt.

## Buffer de logs para disparo em batch

O buffer é a estrutura que acumula logs até atingir um limiar, como 100 itens, e então dispara o processamento em lote. Ele existe para desacoplar a chegada contínua dos eventos da frequência de chamadas ao modelo. Esse desenho transforma um fluxo reativo item a item em uma operação controlada por volume, o que facilita previsibilidade de custo e melhor aproveitamento do batch prompting já definido anteriormente.

## ID por log para rastreamento do workflow

Cada log do lote precisa carregar um identificador próprio antes de ser enviado ao modelo. Esse ID permite mapear a resposta de volta ao item original e decidir qual ramo do workflow deve continuar: encerrar, abrir draft, revisar ou notificar. Sem esse identificador, o lote perde rastreabilidade e a arquitetura de agentes deixa de saber qual saída pertence a qual entrada.

## Formato de saída em JSON ou JSONL

A resposta em lote precisa vir em um formato que a aplicação consiga consumir sem ambiguidade, por isso JSON estruturado ou JSONL são escolhas naturais. O campo mínimo útil tende a ser algo como `id`, classificação do log e conteúdo necessário para a próxima etapa; qualquer excesso aumenta custo sem agregar valor operacional. Em lotes grandes, JSONL simplifica parsing incremental e reduz atrito quando cada linha representa um item independente.

## Encadeamento de agentes após a classificação

Depois da classificação inicial, o próximo agente não precisa reinterpretar o lote inteiro; ele só consome os resultados já estruturados e encaminha cada item conforme sua categoria. Um log informativo encerra o fluxo imediatamente, enquanto um erro segue para draft, revisão, refinamento, criação de issue e notificação. A arquitetura de agentes fica mais previsível quando a primeira etapa devolve uma saída compacta e roteável, em vez de texto livre.

## Reinício de conversa dentro do workflow

Mesmo após o batch inicial, pode ser útil abrir novas conversas nas etapas seguintes para impedir que JSONs anteriores contaminem o contexto das próximas decisões. Essa separação evita que o histórico do lote se acumule artificialmente em agentes posteriores, especialmente quando cada item passa a seguir caminhos diferentes. O ganho não é conceitual, mas operacional: menos contexto inútil sendo reenviado e menor risco de respostas influenciadas por itens vizinhos.

## Análise crítica de um prompt excessivamente grande

Um prompt longo demais pode conter papel do agente, regras, formato de saída e muitos exemplos, mas isso não o torna automaticamente melhor. Quando cada log precisa carregar esse bloco inteiro, o sistema paga repetidamente por instruções fixas para classificar algo simples, como distinguir health check de erro real. A avaliação correta não é “o prompt funciona?”, mas “qual é o menor prompt que preserva o mesmo comportamento com custo aceitável?”.

## Menos exemplos pode ser melhor

Exemplos ajudam a estabilizar comportamento, mas em excesso podem aumentar tokens e até confundir o modelo com variações desnecessárias. O critério técnico não é quantidade, e sim utilidade marginal: cada exemplo adicional precisa justificar seu custo. Se remover exemplos ou regras redundantes mantém a qualidade, o prompt anterior estava superdimensionado.

## Batch combinado com cache

Se o prefixo do prompt permanece estável e não pode ser reduzido sem perda de qualidade, a combinação entre batch e prompt caching passa a fazer sentido. O batch reduz a multiplicação de chamadas; o cache reduz o reprocessamento do trecho fixo, conforme já discutido anteriormente. Ainda assim, cache só compensa quando há reutilização suficiente, porque criar e manter conteúdo cacheado também tem custo.

## Controle explícito de tokens de saída

Não basta otimizar a entrada; a saída do modelo também precisa de limite explícito, como “responda com no máximo 100 tokens”. Em muitos providers, tokens de saída custam mais do que tokens de entrada, então uma resposta prolixa destrói parte da economia obtida no prompt. Restringir formato e tamanho da resposta é uma decisão de engenharia, não apenas de estilo.

## Estimativa matemática de custo por volume

Quando o lote tem tamanho conhecido e a saída máxima por item está controlada, o custo deixa de ser intuitivo e passa a ser estimável. Se o sistema processa 10 logs por chamada e cada item pode consumir até 100 tokens de saída, já existe um teto operacional para aquela etapa. Multiplicando isso pelo volume diário de logs, a aplicação consegue prever gasto, comparar arquiteturas e evitar surpresas financeiras no fim do mês.

## Prompt Engineering como decisão arquitetural

Prompt Engineering não se limita a formular instruções corretas para o modelo; ele define como sessões, lotes, agentes, formato de saída e reaproveitamento de contexto serão organizados. Nesse cenário, um bom prompt é inseparável de uma boa arquitetura de execução. O resultado desejado é simultaneamente semântico e operacional: classificar corretamente, gastar menos, responder mais rápido e manter o workflow rastreável.
