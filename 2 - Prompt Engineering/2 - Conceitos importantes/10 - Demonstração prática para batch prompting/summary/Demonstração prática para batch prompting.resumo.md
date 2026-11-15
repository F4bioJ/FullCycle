# Demonstração prática para batch prompting — resumo

## Cenário operacional: logs virando issues no GitHub
O professor apresenta um sistema que monitora logs de erro em um servidor. Quando um erro é detectado, agentes de IA colaboram para abrir uma issue no GitHub. O fluxo envolve: um agente recebe o log, outro analisa se é um bug, outros fazem draft, revisão e refinamento da issue, um cria a issue no GitHub e outro notifica o autor do código. Logs de health check (sucesso) encerram o fluxo cedo; logs de erro seguem todo o pipeline.

## Solução ingênua: uma chamada por log
A abordagem inicial envia cada log individualmente para a LLM assim que chega. Funcionalmente resolve, mas operacionalmente gera problemas: cada item dispara uma nova request com o mesmo prompt, multiplicando overhead, repetição de instruções e latência total.

## Problema de sessão acumulando histórico
Se vários logs forem inseridos na mesma sessão (conversa), o histórico cresce a cada nova análise. Como a sessão preserva mensagens passadas, cada log novo faz o modelo reprocessar conteúdo já desnecessário, consumindo mais tokens de entrada e aumentando custo.

## Conversa por log versus conversa por lote
Criar uma conversa por log elimina o acúmulo indevido de histórico, mas mantém o custo de uma chamada por item. O redesenho eficiente cria uma nova sessão a cada X logs (não por evento individual). Esse corte por lote preserva isolamento suficiente para evitar crescimento descontrolado da conversa e reduz a repetição estrutural do prompt.

## Buffer de logs para disparo em batch
Um buffer acumula logs até atingir um limiar (ex.: 100 itens) e então dispara o processamento em lote. Isso desacopla a chegada contínua de eventos da frequência de chamadas ao modelo, transformando fluxo reativo item a item em operação controlada por volume, o que facilita previsibilidade de custo e aproveitamento do batch prompting.

## ID por log para rastreamento do workflow
Cada log do lote precisa carregar identificador próprio antes de ser enviado ao modelo. O ID permite mapear a resposta de volta ao item original e decidir qual ramo do workflow continua: encerrar, abrir draft, revisar ou notificar. Sem identificador, o lote perde rastreabilidade e a arquitetura de agentes não sabe qual saída pertence a qual entrada.

## Formato de saída em JSON ou JSONL
A resposta em lote deve vir em formato consumível sem ambiguidade: JSON estruturado ou JSONL. Campos mínimos úteis: `id`, classificação do log e conteúdo necessário para a próxima etapa. Excesso aumenta custo sem valor operacional. Em lotes grandes, JSONL simplifica parsing incremental, pois cada linha representa um item independente.

## Encadeamento de agentes após a classificação
Após a classificação inicial, o próximo agente consome apenas os resultados já estruturados e encaminha cada item conforme sua categoria. Log informativo encerra o fluxo; erro segue para draft, revisão, refinamento, criação de issue e notificação. A arquitetura fica mais previsível quando a primeira etapa devolve saída compacta e roteável, não texto livre.

## Reinício de conversa dentro do workflow
Mesmo após o batch inicial, pode ser útil abrir novas conversas nas etapas seguintes para impedir que JSONs anteriores contaminem o contexto das próximas decisões. Essa separação evita acúmulo artificial de histórico em agentes posteriores, especialmente quando itens seguem caminhos diferentes. Ganho operacional: menos contexto inútil reenviado e menor risco de respostas influenciadas por itens vizinhos.

## Análise crítica de um prompt excessivamente grande
O professor mostra um prompt longo para o agente analisador de bugs: papel, regras críticas, formato de saída JSON e muitos exemplos de formatos de log (JSON, linha única, warnings). Embora funcional, não é boa prática se usado log a log, pois cada classificação carrega todo esse bloco fixo, pagando repetidamente por instruções para tarefa simples (distinguir health check de erro real). A avaliação correta não é “funciona?”, mas “qual o menor prompt que preserva comportamento com custo aceitável?”.

## Menos exemplos pode ser melhor
Exemplos ajudam a estabilizar comportamento, mas em excesso aumentam tokens e podem confundir o modelo com variações desnecessárias. Critério técnico: utilidade marginal. Cada exemplo adicional deve justificar seu custo. Se remover exemplos ou regras redundantes mantém qualidade, o prompt anterior estava superdimensionado.

## Batch combinado com cache
Se o prefixo do prompt permanece estável e não pode ser reduzido sem perda de qualidade, combinar batch com prompt caching faz sentido. O batch reduz multiplicação de chamadas; o cache reduz reprocessamento do trecho fixo (desconto de 75% no Gemini, conforme mencionado). Cache só compensa com reutilização suficiente, pois criar e manter conteúdo cacheado também tem custo (primeira cacheada costuma ser mais cara).

## Controle explícito de tokens de saída
Não basta otimizar entrada; a saída do modelo precisa de limite explícito (ex.: “responda com no máximo 100 tokens”). Em muitos providers, tokens de saída custam mais que tokens de entrada, então resposta prolixa destrói economia do prompt. Restringir formato e tamanho da resposta é decisão de engenharia, não apenas estilo.

## Estimativa matemática de custo por volume
Quando lote tem tamanho conhecido e saída máxima por item está controlada, custo deixa de ser intuitivo e passa a ser estimável. Ex.: 10 logs por chamada × 100 tokens de saída máximos = teto de 1.000 tokens de saída por chamada. Multiplicando pelo volume diário de logs, a aplicação prevê gasto, compara arquiteturas e evita surpresas financeiras no fim do mês.

## Prompt Engineering como decisão arquitetural
Prompt Engineering não se limita a formular instruções corretas; define como sessões, lotes, agentes, formato de saída e reaproveitamento de contexto serão organizados. Um bom prompt é inseparável de boa arquitetura de execução. Objetivo simultâneo: classificar corretamente, gastar menos, responder mais rápido e manter workflow rastreável.
