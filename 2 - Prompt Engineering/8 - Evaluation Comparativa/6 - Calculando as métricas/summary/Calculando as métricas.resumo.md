# Calculando as métricas — resumo

## Por que calcular por conta própria

O LangSmith não faz automaticamente a conta de precision, recall e F1. O fluxo é: rodar a evaluation, pegar o resultado da IA, aplicar as fórmulas e devolver os scores prontos ao LangSmith.

## A função e seus parâmetros

A aula mostra uma função que calcula as três métricas. Ela recebe:

- **outputs:** a lista do que o modelo devolveu;
- **examples:** os exemplos do dataset, que são a referência do que é correto;
- **extract_predict:** extrai do output do modelo só a parte comparável (os findings previstos);
- **extract_expected:** faz o mesmo com o dataset, para os dois lados ficarem no mesmo formato e poderem ser comparados.

O retorno é um dicionário com três entradas, precision, recall e F1, cada uma com um **score** (o valor calculado) e um **comment** (contexto para leitura e depuração no LangSmith).

## Pareamento com zip

Um loop percorre os outputs e os exemplos juntos com `zip`: o primeiro output é comparado com o primeiro exemplo, o segundo com o segundo, e assim por diante. O pareamento é pela posição, então as duas listas precisam estar na mesma ordem; se ficarem desalinhadas, cada output passa a ser comparado com o exemplo de outro item e os scores deixam de representar o prompt.

## TP, FP e FN por operações de conjunto

Com true positive (TP), false positive (FP) e false negative (FN) já dá para calcular as três métricas. O exemplo da aula: a IA trouxe `bug` e `error`; o dataset esperava `bug` e `crash`.

- **TP = interseção** entre previsto e esperado: o que a IA acertou. Aqui, `bug`.
- **FP = previsto menos esperado:** o que o modelo trouxe a mais, sem estar no dataset. Aqui, `error`.
- **FN = esperado menos previsto:** o que o dataset tinha e o modelo não trouxe. Aqui, `crash`.

O professor avisa que essa parte "às vezes dá um nó na cabeça", e a própria fala dele se embaralha: num momento chama a interseção de "falso positivo" e, ao explicar o falso negativo, inverte o que a IA trouxe e o que o dataset esperava. Pelas definições, com previsto {`bug`, `error`} e esperado {`bug`, `crash`}, o FP é `error` e o FN é `crash`.

## As fórmulas e o denominador zero

As fórmulas são as das aulas anteriores: precision = TP / (TP + FP), recall = TP / (TP + FN) e F1 = 2 × precision × recall / (precision + recall). A função só divide quando o denominador é maior que zero; caso contrário, devolve 0. Isso evita erro em itens sem nenhum finding, e a evaluation segue rodando no lote inteiro.

## O que importa entender

O professor diz que o código de extração em si "não vem ao caso": o importante é entender como TP, FP e FN são contados. Se a extração, o pareamento ou a comparação estiverem errados, a fórmula continua certa, mas o score deixa de refletir o comportamento real do prompt.
