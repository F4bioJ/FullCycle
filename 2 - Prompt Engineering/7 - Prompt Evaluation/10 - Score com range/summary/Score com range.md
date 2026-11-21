# Score com range

## Transição de binário para score contínuo

Avaliação binária continua útil quando a decisão precisa ser operacional, mas ela perde nuance ao reduzir tudo a `yes/no` ou `0/1`. Em critérios subjetivos como concisão, coerência, detalhe e profundidade, duas respostas podem ser aprovadas e ainda assim ter qualidades bem diferentes. O uso de `ScoreString` resolve isso ao permitir notas em range, que depois podem ser normalizadas para a faixa de `0` a `1`. Essa mudança transforma a leitura do experimento: em vez de apenas contar aprovações, você passa a comparar intensidade e qualidade relativa entre saídas.

## ScoreString e normalização por 10

`ScoreString` é o formato usado para pedir ao evaluator uma nota textual estruturada que pode ser convertida em score numérico. A configuração normalizada por 10 faz o evaluator produzir algo equivalente a uma escala de `0` a `10`, mas o resultado final é convertido para `0` a `1`, o que facilita agregação e comparação entre critérios. Isso padroniza a interpretação no dashboard e evita misturar escalas diferentes no mesmo experimento. Quando um critério aparece como `0.78`, a leitura prática é “78% da escala máxima definida para esse julgamento”, não apenas “passou”.

## Reaproveitando critérios já usados em modo binário

Retomando o cenário de revisão de código, `conciseness` já existia como critério binário e agora ganha uma camada de nuance. Em vez de perguntar apenas se a resposta é concisa o suficiente, o evaluator passa a medir quão concisa ela é dentro de uma escala contínua. Esse reaproveitamento é valioso porque mantém o mesmo critério conceitual, mas muda a resolução da medição. A escolha entre binário e range depende do tipo de decisão: triagem rápida favorece binário; comparação fina entre versões favorece score contínuo.

## Coherence como critério graduado

`Coherence` mede se a análise está logicamente organizada, consistente e bem estruturada como texto técnico. Esse critério faz mais sentido em escala contínua porque coerência raramente falha de forma absoluta; com frequência, a resposta é parcialmente clara, mas tem trechos confusos, saltos de raciocínio ou organização irregular. Uma nota como `0.85` comunica que a estrutura geral está boa, mesmo sem ser perfeita. Isso ajuda a diferenciar respostas aceitáveis de respostas realmente bem construídas.

## Detail e depth como dimensões distintas

`Detail` avalia se a resposta traz detalhamento suficiente para sustentar a análise; `depth` mede se ela vai além do óbvio e apresenta profundidade real. Os dois critérios parecem próximos, mas não são equivalentes: uma resposta pode ser longa e cheia de detalhes superficiais, sem aprofundar nada, ou pode ser profunda em poucos pontos, mas insuficiente em cobertura. Separar essas dimensões evita confundir volume com qualidade analítica. No experimento, isso permite identificar se o prompt precisa incentivar mais explicação, mais profundidade ou ambos.

## Quando usar referência com score em range

Os critérios de `coherence`, `detail` e `depth` podem ser avaliados sem referência porque dependem principalmente da qualidade interna da resposta. Já `relevance`, retomando o critério já conhecido, pode ser mais bem sustentado com referência quando existe um alvo esperado no dataset. Nessa situação, a configuração muda de `ScoreString` para `labeled ScoreString`, porque o evaluator precisa comparar a saída com dados de referência. A presença da referência não muda a ideia de score contínuo; ela muda a evidência usada para atribuir a nota.

## Leitura dos resultados no LangSmith

No LangSmith, os critérios aparecem agregados com valores como `0.85` para coerência, `0.78` para concisão, `0.79` para profundidade, `0.81` para detalhe e `0.82` para relevância. Esses números convivem com métricas operacionais como P50, P99, latência, erro e quantidade de execuções, mas o foco analítico está no score dos critérios. A vantagem é imediata: você deixa de enxergar apenas aprovação ou reprovação e passa a ver onde a resposta está melhor ou pior. Isso torna a iteração do prompt mais orientada, porque a correção pode mirar exatamente a dimensão degradada.

## Granularidade de avaliação no experimento

Granularidade é a capacidade de distinguir diferenças pequenas, mas relevantes, entre saídas que antes cairiam na mesma classe binária. Se duas respostas receberiam `yes` em `conciseness`, um score contínuo pode mostrar `0.62` para uma e `0.91` para outra, revelando que ambas passam, mas com qualidade bem diferente. Essa leitura é especialmente útil quando o prompt já atingiu um nível razoável e o objetivo deixa de ser “fazer funcionar” para passar a ser “otimizar comportamento”. Em engenharia de prompts, essa etapa reduz subjetividade sem forçar simplificações excessivas.
