# Executando primeira avaliação

## Fluxo completo da primeira avaliação

A primeira execução de evaluation conecta quatro peças em sequência: dataset já enviado ao LangSmith, prompt carregado do arquivo, chamada ao modelo e evaluators aplicados sobre cada saída. O experimento nasce quando o prompt é executado sobre todos os exemplos do dataset e cada resposta recebe uma ou mais avaliações. Retomando o cenário de revisão de código, o objetivo aqui não é medir qualidade semântica profunda, mas verificar se a saída respeita o contrato estrutural exigido pela aplicação. Isso transforma um teste manual de “parece certo” em um experimento rastreável dentro da ferramenta.

## Upload do dataset e leitura no LangSmith

O upload apenas publica o conjunto de exemplos locais para que eles possam ser usados em execuções reproduzíveis no LangSmith. Depois dessa etapa, a interface passa a mostrar o dataset e, separadamente, os experimentos associados a ele; se nada foi executado ainda, a área de experimentos permanece vazia. Essa separação importa porque dataset é base de casos, enquanto experimento é uma execução concreta sobre essa base. O fluxo correto é sempre subir ou atualizar os exemplos antes de rodar a avaliação.

## Prompt em YAML no exemplo

O prompt foi externalizado em YAML e recebe a variável `code`, que é preenchida com o conteúdo vindo do dataset. Esse formato ajuda a manter instrução, placeholders e contrato de saída separados do código Python, o que facilita versionamento e comparação entre variações de prompt. Aqui, a instrução força o modelo a atuar como revisor de código e responder apenas em JSON com campos como `findings`, `type`, `description`, criticidade e `summary`. A vantagem prática é que o prompt vira um artefato editável e testável sem acoplar a lógica de avaliação ao texto da instrução.

## Execução do modelo com OpenAI e tracing no LangSmith

A chamada ao modelo usa o SDK da OpenAI com um wrap para manter tracing no LangSmith, evitando dependência forte de abstrações do LangChain. Essa escolha reduz acoplamento e tende a preservar compatibilidade ao longo do tempo, porque a execução continua próxima da API base do provedor. O modelo configurado com temperatura zero privilegia estabilidade de saída, o que é desejável quando o foco da avaliação é conformidade de formato. Em avaliações estruturais, mais determinismo geralmente produz sinais mais confiáveis do que criatividade.

## Preparação dos dados para avaliação

A etapa de `prepareJSONData` organiza o que o evaluator built-in precisa receber para validar a saída gerada. Nesse caso, o `output` de referência pode ficar vazio porque JSON validity não depende de ground truth semântico; basta inspecionar a resposta produzida. Já `prepareSchemaData` prepara os dados para a validação do schema e pode incluir `reference` quando a função customizada precisar acessar `outputs` esperados ou metadados do exemplo. A preparação existe para adaptar o formato bruto da execução ao contrato esperado por cada evaluator.

## JSON validity com evaluator built-in

`JsonEvalLangChainStringEvaluator` é usado aqui como evaluator pronto para checar se a resposta é um JSON válido. Ele não verifica se os campos corretos existem nem se a estrutura está de acordo com o contrato da aplicação; ele apenas confirma se a string pode ser interpretada como JSON bem formado. Essa distinção é importante porque um JSON pode ser sintaticamente válido e ainda assim ser inútil para consumo por código. Por isso, JSON validity costuma ser a primeira barreira, não a última.

## Validador customizado de schema JSON

`validateJSONSchema` adiciona a segunda barreira: além de ser JSON válido, a resposta precisa obedecer ao schema esperado. A função tenta interpretar a saída, aplica a validação estrutural e retorna um resultado com `score` e `value`, diferenciando erro de parsing de erro de schema. Quando o schema bate, o score é 1; quando o JSON é inválido ou a estrutura não corresponde ao contrato, o score é 0 com uma justificativa explícita. Esse evaluator customizado existe porque o contrato da aplicação raramente cabe integralmente em um validador genérico pronto.

## Built-in e evaluator customizado na mesma execução

A chamada de `evaluate` recebe o prompt, o nome do dataset e uma lista de evaluators, permitindo combinar validadores prontos e funções customizadas no mesmo experimento. Isso produz duas leituras complementares sobre cada saída: uma para validade sintática do JSON e outra para aderência ao schema definido pela equipe. A combinação é superior a usar apenas um dos lados, porque separa falha de serialização de falha de contrato estrutural. Em engenharia de prompts, essa decomposição ajuda a localizar rapidamente onde o output degrada.

## Interpretação do experimento no LangSmith

Durante a execução, o LangSmith já exibe resultados em tempo real, o que permite acompanhar progresso e inspecionar falhas sem esperar o lote inteiro terminar. Ao final, cada evaluator aparece como uma métrica separada no experimento, com nomes como `json validity` e `validateJSONSchema`. Quando todos os casos recebem score 1, o prompt passou tanto na validade do JSON quanto na conformidade com o schema. Esse checkpoint confirma que o cenário de revisão de código já está operacionalmente consumível por software, não apenas legível para humanos.

## Decisões técnicas e armadilhas comuns

Usar API diretamente em vez de depender da interface evita esconder detalhes importantes do fluxo de evaluation, como preparação de dados, retorno de score e composição de evaluators. A armadilha mais comum é assumir que JSON válido já resolve o problema; na prática, muitos outputs passam no parser e falham no contrato esperado pela aplicação. Outra fonte de erro é misturar criatividade alta com avaliação estrutural, o que aumenta variação desnecessária e dificulta reproduzir resultados. Para troubleshooting, a primeira inspeção deve separar três causas: resposta não parseável, resposta parseável com schema errado e resposta correta estruturalmente.
