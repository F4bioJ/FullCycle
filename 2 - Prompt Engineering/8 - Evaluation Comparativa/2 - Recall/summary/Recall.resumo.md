# Recall — resumo

## Recall: de tudo o que devia ser achado, quanto foi achado

Na aula anterior, a precision mediu a confiabilidade do que o modelo marcou como bug, penalizando os falsos positivos. O recall pergunta outra coisa: entre todos os bugs que realmente existem, quantos o sistema encontrou? Ele mede cobertura dos positivos reais, não a qualidade dos alertas.

## Falso negativo

O erro que o recall penaliza é o falso negativo: um caso realmente positivo que o modelo não identificou. Se há 10 bugs e o sistema encontra 7, sobram 3 falsos negativos. O problema existe, mas não chega à análise.

## Falso positivo × falso negativo

O professor admite que essa distinção o confundia quando começou a estudar, por isso a repete:

- **Falso positivo:** o modelo acha algo e está errado ("acha errado"). Derruba a precision.
- **Falso negativo:** o modelo não acha o que deveria ("não acha"). Derruba o recall.

Separar os dois evita julgar bom um sistema "cuidadoso" que acusa pouco, mas deixa muitos casos passarem.

## Fórmula

`recall = TP / (TP + FN)`

O numerador são os bugs reais encontrados; o denominador, todos os bugs reais, encontrados ou perdidos. Em relação à precision, `TP / (TP + FP)`, muda só o termo de erro: FN no lugar de FP. Por isso alarmes falsos não alteram o recall.

## Leitura da métrica

Recall alto significa que poucos casos escaparam: de 10 problemas, encontrar 9 deixa só 1 para trás. Quanto menor o recall, mais coisas o sistema deixa passar. O resumo do professor acrescenta que, quando perder um bug custa mais do que investigar um alerta extra, o recall ganha prioridade.

## Sensibilidade e trade-off com a precision

As duas métricas olham lados diferentes do mesmo sistema. O professor compara isso a um nível de sensibilidade:

- **Sistema mais sensível (menos restritivo):** abre o leque, marca mais itens como bug e acha a maioria dos bugs reais. O recall sobe, mas entram também itens que não eram bugs, e a precision cai.
- **Sistema mais restritivo:** marca menos, e o que marca tende a estar certo. A precision sobe, mas bugs reais deixam de ser encontrados, e o recall cai.

Na fala, o professor troca os termos em alguns trechos (diz "alta precisão" ao descrever achar quase tudo e liga "mais sensível" a "mais restritivo"); a leitura acima é a coerente com as fórmulas e com o resumo dele.

Segundo o professor, normalmente não dá para ter precision e recall extremamente altos ao mesmo tempo: elas medem coisas diferentes e às vezes chegam a se mover em sentidos opostos. O resumo dele liga isso ao prompt: um prompt mais fechado tende a acusar menos bugs indevidos e a perder bugs reais; um mais agressivo amplia a cobertura com mais falsos alarmes.

## A recomendação do professor

Mais do que decorar fórmulas, entender a ideia de sensibilidade: o que se ganha em cobertura costuma custar confiabilidade, e vice-versa. Se não ficou claro, ele sugere rever os dois vídeos juntos.
