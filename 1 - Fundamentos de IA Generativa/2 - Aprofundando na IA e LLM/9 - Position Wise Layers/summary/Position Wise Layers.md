# Position Wise Layers

## Position-wise Feedforward Layers

As Position-wise Feedforward Layers são as camadas aplicadas após a atenção para transformar cada token individualmente. Retomando a atenção já vista anteriormente: ela mistura contexto entre tokens; o feedforward pega o vetor resultante de cada posição e o refina de forma independente. O mesmo bloco de rede é reutilizado para todas as posições da sequência, mas cada token passa por ele com seus próprios valores. Isso permite enriquecer a representação de cada token sem misturar novamente as posições nesse estágio.

## Intuição: conversa e reflexão

A atenção funciona como uma conversa entre tokens, na qual cada posição coleta informação relevante das demais. O feedforward corresponde à etapa de reflexão posterior: depois de receber contexto, cada token “processa internamente” o que fazer com aquilo. Dois tokens podem passar pela mesma rede e ainda assim produzir saídas diferentes, porque entram com vetores diferentes. A utilidade dessa etapa está em converter contexto recebido em uma representação mais útil para a próxima camada.

## Estrutura do cálculo

O bloco é composto por duas transformações lineares com uma não linearidade entre elas, tipicamente na forma `max(0, xW1 + b1)` seguida de uma segunda projeção com `W2` e `b2`. `W1` e `W2` são matrizes de peso que aprendem como transformar a representação do token, enquanto `b1` e `b2` são vetores de viés que ajustam essas transformações. A primeira projeção expande ou reorganiza a informação em um espaço intermediário; a segunda consolida o resultado em uma nova representação vetorial. O efeito combinado é mais expressivo do que uma única transformação linear.

## Papel de `W1` e `b1`

A expressão `xW1 + b1` produz a primeira transformação do token. `W1` atua como um conjunto de filtros aprendidos, mudando o ponto de vista sob o qual o vetor é interpretado; `b1` desloca esse resultado para ajustar a ativação de cada dimensão. Em termos práticos, essa etapa cria um vetor intermediário mais rico, ainda bruto, mas já reorganizado para destacar padrões úteis. É a preparação para a etapa seletiva seguinte.

## Função de ativação e não linearidade

O `max(0, ·)` introduz não linearidade, normalmente via ReLU. Essa operação zera valores negativos e preserva os positivos, funcionando como um filtro que descarta ativações sem contribuição útil naquele ponto do processamento. Sem essa não linearidade, empilhar transformações lineares continuaria equivalente a uma única transformação linear, limitando a capacidade do modelo de representar relações complexas. É essa quebra de linearidade que permite ao bloco aprender padrões mais profundos do que a atenção sozinha consegue expressar.

## Papel de `W2` e `b2`

Depois da ativação, a segunda transformação usa `W2` e `b2` para condensar o vetor intermediário em uma forma final refinada. Se a primeira projeção abre espaço para explorar características, a segunda reorganiza esse conteúdo para produzir uma saída compatível com a próxima camada do Transformer. O token resultante já não é igual ao vetor de entrada: ele carrega o contexto recebido pela atenção e a interpretação local feita pelo feedforward. Essa saída segue adiante como uma representação mais apurada.

## Processamento local por token

O termo position-wise indica que o bloco opera separadamente em cada posição da sequência. Isso não contradiz o uso de contexto global no Transformer, porque a mistura entre tokens já ocorreu na atenção; aqui o trabalho é local, sobre cada vetor individual. O ganho dessa separação é permitir que cada token reorganize internamente a informação contextual que recebeu. Depois, as camadas seguintes voltam a combinar essas representações refinadas no processamento global do modelo.

## Por que esse bloco é indispensável

A atenção identifica de onde vem a informação relevante; o feedforward decide como transformar essa informação dentro de cada token. Essa divisão de responsabilidades torna o Transformer mais expressivo: primeiro ele relaciona posições, depois aprofunda semanticamente cada representação. O resultado é uma sequência de vetores progressivamente mais úteis para tarefas como previsão do próximo token e modelagem de dependências complexas. Sem esse bloco, o modelo perderia capacidade de refinamento local e de aprendizado não linear.
