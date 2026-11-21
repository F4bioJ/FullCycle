# Revisor verboso

## Prompt degradado por verbosidade

Um prompt pode degradar a resposta não por falta de conteúdo, mas por excesso de instruções irrelevantes. No caso `Bad Verbals`, a revisão de código é cercada por exigências como introdução histórica, reflexão filosófica, ética e agradecimento ao leitor. Isso desloca o modelo da tarefa principal: analisar o código. O problema não é escrever muito, e sim gastar tokens com texto que não melhora a decisão técnica.

## Muito texto não é detalhe útil

Detalhe útil é informação que aumenta a capacidade de agir sobre o código analisado. Quando a resposta adiciona história da linguagem, importância genérica de code review e comentários amplos sobre o futuro, ela parece rica, mas não fica mais específica nem mais útil. Retomando o cenário de revisão de código já usado antes, o evaluator penaliza justamente essa diferença entre volume textual e aderência à tarefa. Verbosidade sem foco reduz objetividade e compete com o espaço que deveria ser usado para apontamentos técnicos.

## Execução com evaluators sem referência

A execução mantém o mesmo padrão de avaliação sem referência já estabelecido anteriormente, mas agora o experimento isola um novo tipo de degradação: irrelevância por floreio. Os critérios observados são `consistency`, `coherence`, `helpfulness` e `detail`, suficientes para mostrar que a resposta pode parecer elaborada e ainda assim falhar funcionalmente. A escolha de não usar referência continua válida aqui porque o problema é visível na própria saída gerada. O experimento mede se o prompt produz uma revisão utilizável, não se ela coincide com um texto-alvo.

## Leitura dos resultados do caso `Bad Verbals`

Os scores baixos mostram degradação ampla: `coherence` 0.35, `consistency` 0.23 e `detail` 0.37. A queda em `consistency` é especialmente esperada, porque o prompt força uma resposta longa e dispersa em vez de direta e objetiva. O ponto importante é que o score de `detail` também cai, mesmo com muito texto. Isso evidencia que quantidade de texto e qualidade de detalhamento são dimensões diferentes.

## Feedback do evaluator como diagnóstico

O comentário do evaluator explica a falha com precisão: o usuário forneceu código em Go, mas a resposta não entregou feedback sobre o código. Em vez disso, desviou para discussão sobre code review e história do Go. Esse tipo de feedback é mais valioso do que olhar apenas a nota, porque mostra a causa operacional da penalização: perda de contexto da tarefa. Quando o reasoning aponta irrelevância, a correção não é “pedir mais detalhes”, e sim remover instruções que empurram o modelo para fora do escopo.

## Conclusão prática para engenharia de prompts

Prompts verbosos podem deixar o dashboard “vermelho” mesmo quando a saída parece sofisticada à primeira leitura. Em revisão de código, introduções filosóficas e contexto enciclopédico não compensam a ausência de observações acionáveis sobre o trecho analisado. A regra prática é simples: toda instrução extra precisa justificar sua presença pelo valor que agrega à tarefa. Se o texto adicional não melhora a análise do código, ele tende a prejudicar relevância, utilidade e aderência ao objetivo.
