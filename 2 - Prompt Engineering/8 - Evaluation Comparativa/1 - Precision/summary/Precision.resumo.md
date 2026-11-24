# Precision — resumo

O professor passa a tratar de precision, recall e F1, métricas que considera muito importantes, para mostrar como a mudança de prompt afeta cada uma. Ele as apresenta uma de cada vez (depois, na prática, no LangSmith e em código). Esta aula cobre só a precision.

## O que é precision

Precision responde: de tudo o que o modelo detectou como positivo, quanto estava correto? Na aula, o modelo classifica logs: "entre tudo o que o prompt chamou de bug, quanto era bug de verdade?". Ela mede a confiabilidade dos positivos devolvidos: um sistema pode "encontrar muitos problemas" e gerar pouco valor se boa parte dos alertas estiver errada.

## True positive e false positive

- **True positive:** o modelo marca um item como bug, e ele é mesmo um bug.
- **False positive:** o modelo marca como bug algo que não é bug, um alarme indevido.

Quanto mais falsos positivos o prompt produz, menor tende a ser a precision. Na prática, alertas falsos consomem tempo de triagem e reduzem a confiança da equipe na automação.

## A fórmula

`precision = true positives / (true positives + false positives)`

O denominador contém só o que o modelo devolveu como positivo: a métrica mede a qualidade dessas marcações, não quantos bugs existentes foram encontrados. No início da aula, o professor cita 10 bugs dos quais o modelo detecta 5 e diz que a precisão cairia; pela fórmula que ele mesmo apresenta, porém, bugs não detectados não entram na conta, e a precision só cai com falsos positivos.

## Exemplo com logs

Há 20 logs, e 10 deles são bugs de fato. O sistema acerta 8 bugs (8 true positives) e marca mais 5 logs normais como bug (5 false positives). A precision é `8 / (8 + 5) = 8 / 13 ≈ 0,61`, ou cerca de 61%: entre os itens acusados como bug, só 61% eram bugs. Os 2 bugs reais que ficaram sem detecção não aparecem na fórmula.

O professor não quer que o aluno fique preso à fórmula: o importante é entender a ideia e a relação entre precision e recall, que ele mostra em seguida.

## Como ler a precision

- **Precision alta:** poucos falsos positivos. Quando o modelo diz "é bug", em geral é.
- **Precision baixa:** muitos falsos positivos; o modelo está trazendo itens que não deveria classificar como positivos.

## Prompt e métrica

Mudar o prompt muda o comportamento do modelo e, com isso, as métricas. Um prompt agressivo, que sinaliza qualquer indício de erro, tende a devolver mais positivos, mas pode elevar os falsos positivos e derrubar a precision. Um prompt restritivo devolve menos alertas, porém mais confiáveis. Olhar só para a precision pode favorecer prompts conservadores demais, que deixam passar bugs reais. A avaliação comparativa serve para medir esse efeito, em vez de depender de impressão.
