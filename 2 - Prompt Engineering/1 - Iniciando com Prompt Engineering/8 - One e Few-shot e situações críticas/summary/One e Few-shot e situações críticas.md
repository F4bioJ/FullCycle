# One e Few-shot e situações críticas

## One-shot e Few-shot

One-shot e few-shot orientam o modelo por demonstração: em vez de apenas descrever a tarefa, você mostra um ou poucos pares de entrada e saída para induzir um padrão de resposta. A utilidade principal está em tarefas nas quais o formato importa tanto quanto o conteúdo, como padronizar e-mails, gerar casos de teste semelhantes, resumir textos no mesmo estilo ou manter consistência em documentação de API. Em contraste com zero-shot, a instrução deixa de ser apenas declarativa e passa a incluir exemplos que funcionam como referência operacional. O ganho é mais controle sobre a forma da saída; o custo é maior dependência da qualidade e da clareza dos exemplos.

## Formato de saída guiado por exemplos

Quando o prompt mostra uma pergunta e uma resposta curta, o modelo tende a repetir esse mesmo formato na próxima resposta. Se o exemplo for “Qual é a capital da França? Paris”, a continuação “Qual é a capital do Brasil?” induz uma saída enxuta como “Brasília”, sem explicações extras. Esse comportamento é útil quando a aplicação precisa de respostas compactas, previsíveis e fáceis de consumir por código. O exemplo não apenas ensina o conteúdo esperado, mas também a estrutura exata da resposta.

## Aplicações práticas de demonstração por padrão

Ensinar por exemplos funciona bem quando a tarefa depende de imitação controlada de estilo ou estrutura. Isso inclui formatar um e-mail com um padrão específico, criar um novo caso de teste a partir de um caso já mostrado, gerar um resumo semelhante ao exemplo fornecido ou produzir perguntas no estilo de quiz. Nesses cenários, o modelo não precisa apenas “entender o pedido”; ele precisa reproduzir uma transformação observada. A qualidade do resultado depende diretamente de quão representativo é o exemplo usado como referência.

## Limitação central: qualidade e viés dos exemplos

Few-shot não cobre automaticamente todas as variações possíveis da tarefa. Se os exemplos forem rígidos, estreitos ou pouco representativos, o modelo aprende um padrão enviesado e passa a responder sempre na mesma linha, mesmo quando o caso novo exigiria adaptação. Isso reduz criatividade, empobrece a generalização e pode contaminar até o tipo de comentário ou classificação que o modelo produz. Mais exemplos só ajudam quando aumentam clareza; quando aumentam ruído, eles degradam a resposta.

## Custo de tokens e trade-off operacional

Retomando o custo de tokens já discutido, one-shot e few-shot encarecem o prompt porque cada exemplo ocupa contexto adicional. Esse custo não é apenas financeiro: ele também compete por espaço na janela de contexto e pode aumentar latência. A decisão de usar exemplos precisa considerar se o ganho de previsibilidade compensa o volume extra de entrada. Em aplicações de alto tráfego, esse trade-off afeta diretamente a viabilidade da solução.

## Exemplo prático: classificação com um único exemplo

Um prompt com `DatabaseConnectionLost at 10h34 -> error` seguido de `DiskUsage at 85%` tenta ensinar uma regra de classificação a partir de uma única demonstração. O problema é que um exemplo isolado pode ser insuficiente para delimitar o critério real, e o modelo pode responder com algo inesperado, como `status`, em vez de `warning` ou `error`. Isso mostra que one-shot não garante entendimento semântico da tarefa; ele apenas oferece um indício de padrão. Quando o exemplo é pouco informativo, o modelo preenche as lacunas com inferência própria.

## Exemplo prático: poucos exemplos podem estabilizar a decisão

Quando a classificação inclui exemplos como `Database Connection Lost -> error`, `Disk Usage at 85% -> warning` e `Response Time above threshold -> warning`, o modelo passa a ter um padrão mais claro para mapear novos logs. Nesse cenário, `API Response Time is above the threshold` tende a ser classificado como `warning` porque há analogia direta com um exemplo anterior. O few-shot funciona melhor quando os exemplos são coerentes entre si e delimitam bem a fronteira de decisão. A técnica não “treina” o modelo no sentido tradicional, mas condiciona fortemente a resposta naquele contexto.

## Risco de ambiguidade por excesso de exemplos

Adicionar muitos exemplos não significa aumentar qualidade de forma monotônica. Quando o conjunto inclui casos parecidos rotulados de formas diferentes, como `Disk Usage at 90% -> error` e outros sinais de threshold tratados como `warning`, o prompt passa a carregar conflitos internos. O modelo deixa de enxergar uma regra nítida e começa a arbitrar entre padrões concorrentes. Esse excesso de demonstrações pode introduzir mais ambiguidade do que clareza.

## Instabilidade em classificação crítica com exemplos conflitantes

Em tarefas críticas, a consequência do conflito entre exemplos é variação de resposta para a mesma entrada. Um caso como `CPU usage at 95%` pode sair como `warning` em uma execução e como `error` em outra se o prompt contiver sinais contraditórios sobre thresholds, severidade e contexto operacional. Essa oscilação é especialmente perigosa quando a classificação aciona automações, como abrir uma issue no GitHub apenas em caso de erro. Se a saída muda entre execuções, o sistema deixa de ser confiável para decisões operacionais.

## Variação de resposta e perda de linha de raciocínio

Quando o prompt acumula exemplos demais, o modelo pode perder a regularidade do critério que deveria seguir. Em vez de aplicar uma regra estável, ele passa a navegar por múltiplas pistas parciais e responde de forma inconsistente ao longo das execuções. O efeito observado não é apenas erro pontual, mas instabilidade estrutural: a mesma entrada produz respostas diferentes sem mudança real na tarefa. Em Prompt Engineering, isso é sinal de que o prompt está superespecificado de forma ambígua, não de que está bem calibrado.

## Critério de uso em cenários sensíveis

One-shot e few-shot são úteis para ensinar padrão de saída, mas exigem curadoria rigorosa dos exemplos. Em cenários sensíveis, o objetivo não é maximizar quantidade de demonstrações, e sim reduzir conflito semântico entre elas. Um conjunto pequeno, claro e consistente costuma ser mais seguro do que uma coleção extensa com rótulos ambíguos. A técnica deve ser escolhida com base em previsibilidade observável, não na intuição de que “mais contexto sempre ajuda”.
