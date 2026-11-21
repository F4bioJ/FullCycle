# Métricas e tipos de avaliação

## Categorias de métricas e tipos de avaliação

Objetivos de avaliação dizem o que importa medir; métricas e tipos de avaliação definem como isso será observado. A mesma tarefa pode exigir mecanismos diferentes de medição, porque nem todo critério produz um resultado verificável por fórmula. Por isso, a avaliação de prompts se organiza em grupos distintos: métricas objetivas, subjetivas, sistêmicas e comparativas. Essa taxonomia evita misturar qualidade semântica, conformidade estrutural, desempenho operacional e comparação entre versões como se fossem a mesma coisa.

## Métricas objetivas ou determinísticas

Métricas objetivas produzem um resultado calculável a partir de uma regra explícita, normalmente por fórmula, validação ou comparação exata. Elas são úteis quando existe um critério observável sem depender de interpretação humana, o que aumenta reprodutibilidade e reduz ambiguidade. Precision, Recall e F1 entram nesse grupo e serão aprofundadas depois; aqui, o ponto central é que elas ajudam a quantificar acertos, falsos positivos e falsos negativos. Retomando o cenário de classificação de bugs, dizer que “tudo tem bug” pode capturar muitos casos reais, mas ainda degradar a avaliação por marcar como erro itens que não eram erro.

## Exact Match e String Distance

Exact Match verifica se a saída gerada coincide exatamente com a referência esperada. Esse tipo de métrica é apropriado quando a resposta correta precisa ser idêntica ao gabarito, como em labels, valores fechados ou respostas canônicas. String distance relaxa essa rigidez e mede o quão próxima a string gerada está da referência, o que ajuda quando pequenas diferenças textuais não devem ser tratadas como erro absoluto. As duas métricas dependem de uma referência conhecida e, por isso, se apoiam diretamente em ground truth.

## Embedding Similarity

Embedding similarity mede proximidade semântica, não igualdade textual. A referência e a saída são convertidas em embeddings, e a comparação ocorre no espaço vetorial para estimar se os dois textos expressam sentidos próximos. Isso é útil quando duas respostas podem usar palavras diferentes e ainda assim transmitir a mesma ideia, algo que Exact Match não captura. O custo dessa flexibilidade é que a métrica deixa de validar forma literal e passa a depender da qualidade da representação semântica.

## Validação estrutural: JSON e schema validation

Quando a saída será consumida por código, a primeira pergunta não é se ela está elegante, mas se ela respeita o contrato esperado. Validação de JSON e schema validation verificam se o output está estruturado corretamente, com campos, tipos e formato compatíveis com a aplicação. Esse grupo é determinístico porque a resposta passa ou falha segundo regras explícitas de estrutura. Retomando os objetivos já vistos, isso operacionaliza format adherence sem depender de julgamento subjetivo.

## Métricas subjetivas e LLM as Judge

Métricas subjetivas dependem de julgamento, porque o critério não se resolve apenas com fórmula ou comparação exata. Nesse grupo entram avaliações aplicadas por humanos ou por outra LLM atuando como juiz, prática conhecida como LLM as Judge. A lógica é delegar a um evaluator a tarefa de analisar aspectos como adequação, utilidade ou fidelidade da resposta segundo uma rubrica. Mesmo quando automatizadas com LLM, essas avaliações continuam sendo subjetivas porque o resultado nasce de interpretação guiada por critérios.

## Rubricas e critérios subjetivos

Termos como Criteria Evaluators, Custom Rubric e LLM Judge Rating Criteria costumam apontar para o mesmo padrão: uma avaliação baseada em critérios descritivos. Em vez de perguntar apenas “passou ou falhou?”, a rubrica define dimensões de julgamento e orienta como atribuir nota, preferência ou classificação. Isso permite avaliar correctness, relevance, faithfulness, conciseness, helpfulness, harmfulness, bias e toxicity com mais nuance do que uma regra binária. A consistência do processo depende da clareza dos critérios e da estabilidade do evaluator escolhido.

## Métricas sistêmicas

Métricas sistêmicas observam o comportamento operacional da execução, não o conteúdo semântico da resposta. Latência, custo em tokens, preço, throughput e pass rate mostram como o prompt afeta o sistema em termos de performance e viabilidade operacional. Esse grupo é essencial porque um prompt pode melhorar a resposta e, ao mesmo tempo, piorar custo ou capacidade sob carga. Retomando efficiency e custo, a diferença aqui é a camada de medição: agora esses objetivos ganham indicadores concretos de execução.

## Avaliação comparativa: pairwise e model comparison

Avaliação comparativa responde qual saída vence quando duas alternativas são colocadas lado a lado. Em pairwise evaluation ou model comparison, compara-se a saída A com a saída B, geralmente produzidas por prompts diferentes, para decidir qual atende melhor ao critério definido. Esse formato é útil quando a pergunta prática não é “a saída está boa em absoluto?”, mas “qual versão é melhor para este conjunto de casos?”. A comparação continua dependente do critério de vitória, que já foi estabelecido anteriormente.

## A/B testing em produção

A/B testing é uma forma comparativa aplicada em produção, usando comportamento real do sistema como evidência. Embora também compare duas variantes, o diferencial está no ambiente: a decisão passa a considerar aceitação, performance observada e resposta do uso real, e não apenas julgamento offline sobre exemplos controlados. Por isso, todo A/B testing é comparativo e se aproxima de pairwise, mas nem toda comparação pairwise é A/B testing. A distinção importa porque produção introduz variáveis de uso, escala e impacto operacional que não aparecem em testes locais.

## Ground Truth

Ground truth é a referência considerada correta para comparar a saída do sistema. Ele funciona como fonte da verdade do experimento: se um dataset contém casos cujo resultado esperado já é conhecido, esse conjunto fornece a base para medir acerto, erro e proximidade. Sem ground truth, várias métricas objetivas perdem sustentação, porque deixam de ter um alvo confiável para comparação. Ao longo de toda a avaliação de prompts, esse conceito serve como âncora para interpretar resultados de forma técnica e reproduzível.
