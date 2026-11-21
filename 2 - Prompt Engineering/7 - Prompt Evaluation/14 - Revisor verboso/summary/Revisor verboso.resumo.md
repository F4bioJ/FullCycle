# Revisor verboso

## O prompt degradado Bad Verbals

Neste segundo caso degradado, o professor cria um prompt que pede um professor de programação extremamente detalhista e filosófico. Antes de analisar o código, o modelo deve escrever uma introdução sobre a importância da revisão, a história da linguagem, princípios de programação e filosofia. Depois, deve analisar o código brevemente e fechar com reflexões sobre o futuro, ética e agradecimento ao leitor. Para o professor, é o revisor mais verboso possível.

## O que se avalia

Os evaluators são consistency, coherence, helpfulness e detail, sem referência. O professor usa consistency para medir o quanto a resposta é direta e objetiva, coherence para medir se o texto é coerente com o que foi escrito na saída, helpfulness para medir se ajuda o usuário e detail para o nível de detalhe.

## Os resultados

Os scores foram baixos: coherence 0.35, consistency 0.23 e detail 0.37. O professor considera a consistency baixa esperada, porque o modelo escreveu muito além do pedido. Sobre o detail, ele supõe que, apesar do volume, o texto não teve a relevância desejada.

## O feedback do evaluator

Ao abrir o feedback do detail, o evaluator explica que o usuário enviou um código em Go, mas o assistente não deu nenhum retorno sobre ele. Em vez disso, discutiu a importância do code review e a história do Go, saindo do contexto.

## Conclusão

Um prompt pode deixar o dashboard completamente vermelho. Métricas claras fazem diferença ao trabalhar com prompts.
