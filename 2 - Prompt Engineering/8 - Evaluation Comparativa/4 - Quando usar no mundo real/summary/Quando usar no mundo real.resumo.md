# Quando usar no mundo real

## Métricas objetivas

Precision, recall e F1 são métricas objetivas: têm fórmula, e o resultado não depende de opinião. Servem quando a situação pode ser medida de forma objetiva, o que normalmente acontece quando é preciso classificar algo (por exemplo, decidir se é cachorro, gato ou coelho). Segundo o professor, essas métricas existem há muito tempo e não nasceram com prompts nem com IA generativa.

## Onde elas não servem

Medir o quanto um conteúdo é tóxico, o quanto ajudou alguém ou o quanto o código de um desenvolvedor é bom é subjetivo, sem conta exata. Para a parte qualitativa, o professor diz que essas métricas nem fazem sentido no dataset.

## Por que trazê-las para prompts

O prompt influencia a classificação. Exemplo: numa conversa com o usuário final, queremos saber se ele está bravo, e uma palavra específica funciona como indicador. O LLM varre um dataset grande, e as métricas mostram quanto acertou e quanto errou, ou seja, se o prompt traz mais acertos do que erros.

## Leitura do F1

F1 alto indica bom equilíbrio: no caso dos bugs, encontra bugs sem muitos falsos positivos. F1 baixo indica desequilíbrio: o prompt perde muitos bugs ou inventa bugs.

## Evaluation como teste

O professor compara evaluation a testes de software: sem testes, não há como garantir o software ao longo do tempo, e o mesmo vale para o prompt, que é muito sensível. A prática vem na próxima parte, no código.
