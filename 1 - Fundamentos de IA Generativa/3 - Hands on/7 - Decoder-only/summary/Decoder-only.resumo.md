# Decoder-only — resumo

## Separar o Transformer para gerar texto

O Transformer trouxe encoder e decoder juntos, e a aula anterior separou o primeiro. Esta aula trata do segundo, com a mesma lógica: focar em um tipo de atividade reduz a complexidade da arquitetura. Aqui a atividade é a geração textual, prever o próximo token com base no histórico.

Sem gastar atenção olhando para os dois lados, o modelo fica mais eficiente, mais barato e mais rápido do que se olhasse para o todo. Por isso, as tarefas autoregressivas têm mais facilidade com o decoder-only: geração de storytelling, complemento de texto e geração de respostas.

## Causal self-attention

É a estrutura interna que define o decoder-only, a atenção autoregressiva. Cada token só vê o que tem para trás: foca em entender o passado para descobrir a próxima palavra e não vê o futuro. Isso faz sentido porque, na geração, o próximo token precisa sair do contexto já produzido, e o que vem depois ainda não existe no momento da previsão.

## Máscara triangular inferior

É a estratégia matemática que aplica essa regra a uma matriz. Na frase "o cachorro correu rápido", as palavras viram as colunas e também as linhas:

- **Sem máscara:** todas as células têm check, e todas as posições se enxergam.
- **Com máscara:** as células formam um triângulo de zeros e checks. Zero significa que a posição não está vendo aquela palavra; check significa que está.

## A matriz lida no tempo

Linha a linha, cada passo libera mais um pedaço do histórico:

| Linha | O que enxerga | O que fica em zero |
|---|---|---|
| o | o | cachorro, correu, rápido |
| cachorro | o, cachorro | correu, rápido |
| correu | o, cachorro, correu | rápido |
| rápido | o, cachorro, correu, rápido | nada |

Cada linha enxerga a si mesma e o passado. O contexto cresce a cada passo, mas nunca inclui o futuro.

## Por que a máscara importa

O professor ilustra de forma simplificada: sem máscara, com apenas "o" pronto, o modelo poderia tentar prever "rápido", com probabilidade muito baixa de acerto, e o resultado seria um erro, possivelmente uma alucinação. O motivo central está no resumo escrito dele: a máscara foca o modelo na próxima palavra e impede que ele "trapaceie" olhando para o futuro, informação que ainda não existe no momento da previsão.

## De palavras a tokens e vetores

A matriz com palavras é uma simplificação. Na prática, ela seria de tokens, e portanto um pouco maior, já que as palavras são quebradas em tokens. E o computador nem vê tokens: vê vetores, o que torna a matriz gigante. O mascaramento acontece sobre esses vetores, para focar o cálculo probabilístico no próximo vetor. A regra segue a posição na sequência, não o significado do texto.

## A analogia da prova

Imagine uma prova de 10 perguntas em que você já respondeu até a 5. Você pode olhar as respostas de 1 a 5 e a pergunta 6, a que está respondendo agora. Não lê a 8, a 9 nem a 10, porque perderia o foco, e também não olha para o colega do lado. A máscara faz o mesmo: bloqueia a atenção para o futuro e foca no presente, com base no que veio antes.

## Um tampão visual

Modelos autoregressivos, como o GPT, usam essa estratégia. Ela garante consistência entre o treino e a inferência, porque nas duas fases o modelo trabalha com a mesma regra de visão. Funciona como um tampão visual, para o LLM focar no que está fazendo naquele momento.

## Ordem sem RNN

A explicação passo a passo pareceu a de uma RNN, palavra por palavra, mas foi uma simplificação. O Transformer não trabalha assim: abre o processamento em paralelo (o professor fala em "multi-thread"), e cada elemento leva a numeração da sua posição, como uma senha A1, A2, A3. A máscara triangular continua fazendo o mesmo trabalho nesse formato: garante que cada posição olhe só para o passado e preserva a orientação da esquerda para a direita, a nossa noção de tempo de leitura. Assim, as camadas empilhadas também funcionam desse jeito.

## Multi-head attention com máscara causal

É a primeira das três partes das camadas. O modelo olha para os tokens anteriores e decide quais são importantes para prever o próximo. "Multi-head" significa fazer isso com diferentes olhares ao mesmo tempo: cada head vê os mesmos vetores de um jeito próprio e aprende uma relação diferente, sempre sem acessar o futuro.

## Feedforward position-wise

É a segunda parte, descrita como um "mini cérebro" aplicado a cada posição de forma individual, sem misturar uma posição com outra. Ele refina a informação já contextualizada, ajuda a captar padrões não lineares e combina significados quando o assunto é mais abstrato.

## LayerNorm e conexões residuais

É a terceira parte. A LayerNorm mantém os valores equilibrados e impede que algum vetor exploda ou morra durante o treino. A conexão residual leva o resultado para a camada seguinte, o que ajuda a informação a seguir adiante e evita esquecer, no caminho, o que veio das camadas anteriores.

Na fala, os resíduos aparecem ligados aos outliers. O resumo escrito do professor não repete essa ligação: nele, a parte residual é a que preserva informação ao somá-la à saída transformada.
