# Context Window vs memória, custo e latência

## Reprocessamento iterativo dos tokens

A janela de contexto já foi definida anteriormente; o ponto novo aqui é o custo interno de usar esse espaço. Durante a geração, o modelo não olha apenas para o último token isoladamente: ele reconsidera a sequência disponível para prever o próximo token. Retomando a frase "Go é...", ao gerar "rápida" e depois "eficiente", o modelo passa a trabalhar com um contexto que cresce a cada iteração. Isso faz cada novo token depender de um processamento sobre o histórico acumulado, e não apenas sobre a última palavra gerada.

## Ordem de complexidade O(n²)

Esse comportamento leva a um custo computacional que pode crescer na ordem de O(n²) em relação ao tamanho do contexto considerado. A intuição é simples: quanto mais tokens existem, mais relações entre eles o modelo precisa avaliar, e esse trabalho se repete ao longo da geração. Por isso, aumentar contexto não afeta apenas o limite máximo suportado; afeta também o volume de computação necessário para produzir cada resposta. Janela grande amplia capacidade, mas também amplia o custo operacional de usá-la.

## Memória, custo e latência como consequência direta

Mais contexto implica mais memória consumida durante o processamento, porque o modelo precisa manter e manipular mais informação ao longo da inferência. Esse aumento de memória se converte em custo de infraestrutura e, em serviços pagos por uso, também pressiona o custo por chamada. Ao mesmo tempo, o processamento de mais tokens aumenta o tempo até a resposta, elevando a latência do sistema. Retomando o cenário da aplicação, adicionar contexto sem critério faz o sistema gastar mais, demorar mais e escalar pior.

## Cache interno e cache miss

Caching já foi apresentado antes; aqui importa entender seu limite dentro do próprio processamento do modelo. Quando uma sequência de tokens já foi processada e pode ser reaproveitada, parte do trabalho é evitada, reduzindo reprocessamento desnecessário. Isso não resolve o problema por completo, porque muitas sequências novas ou ligeiramente diferentes geram cache miss e exigem computação adicional. Em aplicações reais, pequenas variações no prompt, no histórico ou na geração já bastam para diminuir bastante o reaproveitamento.

## Cada token conta no desenho do prompt

A consequência prática é que token não é apenas espaço ocupado na janela: ele também representa trabalho computacional recorrente durante a geração. Por isso, o objetivo de Prompt Engineering não é simplesmente colocar o máximo de contexto possível, mas obter a melhor resposta com a menor quantidade de tokens necessária. Essa lógica explica por que técnicas como truncamento, sumarização, caching e batch prompting existem: elas atacam diretamente memória, custo e latência. Eficiência de prompt é, portanto, uma decisão de engenharia, não apenas de redação.

## Modelo certo para a tarefa certa

Retomando a escolha de modelo já discutida antes, o critério não é usar sempre o modelo com maior capacidade, mas o mais adequado ao problema. Se a tarefa é simples, usar um modelo maior ou com contexto excessivo pode introduzir custo e latência desnecessários sem ganho proporcional de qualidade. A decisão correta equilibra complexidade da tarefa, volume de contexto exigido e restrições operacionais do sistema. Em engenharia de software, isso significa evitar superdimensionamento do modelo da mesma forma que se evita superdimensionar infraestrutura.
