# Context Window vs memória, custo e latência — resumo

## Janela de contexto e limite de tokens
O professor retoma o conceito de janela de contexto e limite de tokens, esclarecendo que uma janela maior não significa necessariamente um modelo maior ou menor. O foco é entender como o modelo opera internamente.

## Variáveis associadas: memória, custo e tempo de processamento
Ao preencher a janela de contexto — mesmo sem excedê-la —, o modelo demanda mais memória. Mais memória exige mais placas e infraestrutura, elevando o custo. Simultaneamente, maior contexto aumenta o tempo de processamento, impactando a latência.

## Custo computacional O(n²) e reprocessamento iterativo
Internamente, o modelo avalia a relação entre todos os tokens, gerando custo computacional na ordem de O(n²). A cada novo token gerado, o modelo reprocessa toda a sequência acumulada: para prever "rápida", usa "Go é"; para prever "e", usa "Go é rápida"; para prever "eficiente", usa "Go é rápida e". Esse crescimento exponencial torna cada token adicional progressivamente mais caro.

## Cache interno e cache miss
O modelo utiliza cache para evitar reprocessamento de sequências já vistas (ex.: "Go é rápida e eficiente"). No entanto, muitas variações de prompt, histórico ou geração causam *cache miss*, forçando computação adicional. O cache não elimina o problema; apenas o atenua parcialmente.

## Regra de Prompt Engineering: melhor resposta com menos tokens
A consequência prática é que cada token conta não só no espaço da janela, mas no trabalho recorrente durante a geração. O objetivo deixa de ser maximizar o contexto e passa a ser obter a melhor resposta com a menor quantidade de tokens necessária. Técnicas como truncamento, sumarização, *caching* e *batch prompting* visam atacar diretamente memória, custo e latência.

## Impacto no sistema: custo, latência e escalabilidade
Ignorar essa relação faz a aplicação gastar mais, responder mais devagar e escalar pior. O custo operacional e a latência são consequências diretas do volume de tokens processados.

## Modelo certo para a tarefa certa
Não se deve usar sempre o modelo de maior capacidade. Para tarefas simples, modelos menores ou com contexto reduzido evitam custo e latência desnecessários sem perda proporcional de qualidade. A decisão equilibra complexidade da tarefa, volume de contexto exigido e restrições operacionais — evitando superdimensionamento, assim como na infraestrutura tradicional.
