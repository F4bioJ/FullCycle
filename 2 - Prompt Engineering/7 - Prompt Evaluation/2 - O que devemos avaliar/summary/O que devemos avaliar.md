# O que devemos avaliar

## Avaliar prompt não é o mesmo que avaliar modelo

Evaluation pode medir duas coisas diferentes: o comportamento do modelo sob o mesmo prompt ou o comportamento de prompts diferentes sobre um mesmo modelo. Na avaliação de modelo, a variável principal é o modelo; na avaliação de prompt, a variável principal é a instrução. Essa distinção importa porque muda o experimento inteiro: o que fica fixo, o que varia e o que a equipe pode concluir com segurança. Neste contexto, o foco está em isolar o efeito do prompt para entender como a instrução altera qualidade, custo e performance da execução.

## Sensibilidade do prompt no sistema

O prompt é um ponto sensível porque pequenas alterações de redação podem melhorar ou degradar o resultado gerado pela LLM. Retomando o cenário já conhecido de comparação entre versões, a diferença entre duas instruções aparentemente parecidas pode produzir comportamentos bem distintos. Por isso, a avaliação não serve apenas para validar uma versão atual, mas para detectar regressões e ganhos reais quando o prompt evolui. Em sistemas voltados a produtividade ou aplicações em produção, essa sensibilidade torna o prompt um componente que precisa de controle técnico.

## A estrutura mental: por que, como e quem

Qualquer processo de avaliação de prompt começa com três perguntas-guia: por que avaliar, como avaliar e quem vai avaliar. O “por que” define o objetivo da avaliação, isto é, qual propriedade do prompt precisa ser medida ou comparada. O “como” determina o tipo de avaliação, os testes e a forma de medir o resultado de acordo com esse objetivo. O “quem” define o evaluator, isto é, a entidade responsável por julgar a saída, o que influencia custo, consistência e escalabilidade do processo.

## Objetivo da avaliação

Definir o objetivo é a etapa mais difícil porque obriga a explicitar o que realmente se quer melhorar ou verificar. Sem isso, a equipe até consegue testar prompts, mas não consegue escolher métricas, tipos de avaliação nem evaluators de forma coerente. O objetivo funciona como a restrição de projeto do experimento: ele delimita o que conta como sucesso e evita avaliações genéricas demais. Quando o objetivo muda, o restante do processo de evaluation também muda.

## Tipos de avaliação

Os tipos de avaliação respondem à pergunta “como medir” depois que o objetivo já está claro. Como existem várias formas de testar prompts, a escolha do método precisa ser compatível com o que se quer observar, por exemplo comparação entre versões, comportamento em produção ou análise de qualidade sob um critério específico. Essa camada operacionaliza o objetivo em procedimentos concretos. Sem essa ponte, a avaliação fica conceitual demais para orientar decisões de engenharia.

## Evaluators

Evaluators são os agentes que executam o julgamento da saída produzida pelo prompt. Como há várias possibilidades de avaliação, também há várias formas de definir quem avalia, e essa escolha afeta a confiabilidade do processo. Um evaluator adequado precisa ser compatível com o objetivo e com o tipo de avaliação escolhido. Em outras palavras, não basta saber o que medir; é preciso decidir quem aplica o critério de forma consistente.

## Dataset como base de comparação

Para comparar prompts de forma justa, é necessário usar um dataset comum, isto é, o mesmo conjunto de entradas para todas as versões avaliadas. Isso reduz a confusão entre diferença de prompt e diferença de caso testado, porque a comparação passa a ocorrer sob condições equivalentes. O dataset cria uma base reproduzível para observar quais saídas são melhores ou piores diante da mesma entrada. Sem essa base compartilhada, a comparação entre prompts perde validade técnica.

## Critério e análise na comparação entre prompts

Lembra da comparação estruturada entre prompts já estabelecida: ela só vira processo de engenharia quando dataset, critério e análise aparecem juntos. O critério define o que conta como melhor ou pior; a análise interpreta os resultados obtidos a partir desse critério. Essa combinação permite acompanhar, ao longo do tempo, como cada prompt está performando e se uma nova versão realmente representa melhoria. Comparar sem análise explícita produz observações soltas, não evidência utilizável.

## Avaliação como processo contínuo

A avaliação de prompt continua ao longo do ciclo de vida do sistema, inclusive com testes em produção quando isso fizer sentido. Retomando a ideia já conhecida de avaliação contínua, o ponto novo aqui é que essa continuidade precisa ser organizada por objetivo, tipo de avaliação, evaluator e dataset. Isso transforma testes isolados em um processo repetível de evolução. O resultado é uma base mais sólida para decidir quando um prompt melhorou, piorou ou apenas mudou de comportamento.
