# Evaluators binarios

## Avaliação binária explícita

Avaliação binária explícita transforma um critério subjetivo em uma decisão de aprovação ou reprovação: `yes/no`, `pass/fail`, `1/0`. Esse formato é útil quando a decisão de engenharia não precisa de gradação intermediária e o objetivo é saber se a saída atende ou não a um requisito. Em vez de interpretar um score contínuo, o experimento passa a contar quantos casos passaram em cada critério. Isso simplifica leitura de resultado e facilita comparar versões de prompt por taxa de aprovação.

## Preparação dos dados com e sem referência

Retomando o experimento de revisão de código, a nova camada está em como os dados são entregues ao evaluator. Uma função como `prepareDataNoRef` envia apenas o necessário para o julgamento sem ground truth, enquanto `prepareDataWithRef` inclui também a referência do exemplo, como `exampleOutputs`. A escolha altera a base do julgamento: sem referência, o evaluator decide apenas pela resposta gerada e pelo critério; com referência, ele pode confrontar a saída com um alvo conhecido. Isso não garante resultado melhor automaticamente, mas muda o tipo de evidência disponível para a decisão.

## Criteria evaluators built-in

Os criteria evaluators built-in do LangSmith evitam implementar manualmente a lógica de julgamento para critérios já suportados pela ferramenta. No cenário mostrado, `conciseness` e `helpfulness` são usados diretamente como evaluators prontos, o que reduz código operacional e acelera o experimento. A vantagem prática é padronizar critérios recorrentes sem escrever prompts de julgamento do zero. O cuidado necessário é lembrar que o evaluator continua sendo uma camada de julgamento e deve ser interpretado à luz do critério escolhido.

## Labeled criteria com referência

`Labeled Criteria` é a variação em que o critério é avaliado com apoio explícito de uma referência. Em vez de julgar apenas se a resposta parece adequada, o evaluator recebe também o valor esperado e usa esse contexto para decidir `yes` ou `no`. Isso é especialmente útil quando o critério depende de aderência ao conteúdo correto, como no caso de `correctness`. O rótulo existe porque o julgamento passa a ser ancorado em um alvo fornecido pelo dataset.

## Lista de evaluators no experimento

Cada critério entra no experimento como um evaluator independente dentro da lista passada para a execução. Na prática, isso permite avaliar a mesma saída sob múltiplas perspectivas no mesmo run: por exemplo, concisão sem referência, utilidade sem referência e correção com referência. O resultado não é um único veredito global, mas um conjunto de decisões binárias por critério. Essa separação melhora o diagnóstico porque mostra exatamente em qual dimensão o prompt falhou.

## Leitura de yes/no por critério

A leitura do experimento muda quando o score é binário: o painel passa a mostrar contagens de `yes` e `no` por evaluator, em vez de médias ou faixas numéricas. Se `conciseness` retorna 18 `yes`, o prompt passou em todos os exemplos para esse critério; se `correctness` retorna 14 `yes` e 3 `no`, existe falha localizada que precisa ser inspecionada. Esse formato é direto para decisões rápidas, porque a pergunta deixa de ser “quão bom foi?” e vira “passou ou não passou?”. Em datasets pequenos, essa visualização já permite identificar rapidamente se o problema está concentrado em um critério específico.

## LangSmith tracing para inspeção do julgamento

LangSmith tracing permite abrir cada execução e inspecionar o caminho completo do julgamento. Ao clicar em um item, é possível ver o exemplo recebido, o output gerado, o reasoning do evaluator, o score binário e o critério usado para justificar a decisão. Isso transforma o evaluator em algo auditável, não em uma caixa-preta que apenas devolve `yes` ou `no`. Quando um caso falha em `correctness`, o tracing mostra por que falhou e orienta a próxima iteração do prompt.

## Diagnóstico iterativo com feedback

O valor operacional do evaluator binário aparece quando um caso não passa e a equipe precisa agir. Em vez de apenas registrar a falha, o fluxo correto é abrir o tracing, verificar metadados, entender o reasoning e decidir se o problema está no prompt, no critério ou na própria referência. Depois disso, o experimento pode ser executado novamente com o mesmo dataset para validar a correção. O ciclo fica objetivo: falhou, inspecionou, ajustou, reexecutou.

## Contadores binários em vez de range

Quando o evaluator é binário, o resultado agregado aparece como contador de aprovações e reprovações, não como range contínuo. Isso é adequado para critérios em que a equipe quer uma fronteira clara de aceitação, sem discutir se `0.7` já seria suficiente. A principal consequência é a perda de nuance intermediária em troca de clareza decisória. Para etapas iniciais de validação prática, essa troca costuma ser vantajosa.
