# Position Wise Layers — resumo

## Onde esse bloco entra no Transformer

Depois que o modelo decidiu, via atenção multi-head, quais palavras devem prestar atenção umas nas outras, o resultado passa por um conjunto de camadas feedforward para chegar ao raciocínio final. Essas camadas processam cada posição da sequência individualmente, e por isso se chamam Position-wise Feedforward Layers. O mesmo bloco de rede é reutilizado em todas as posições, e cada token passa por ele com seus próprios valores.

## Intuição: conversa e reflexão

O professor usa uma analogia. A atenção é uma conversa, como um grupo de pessoas trocando informações. O feedforward é a reflexão depois da conversa: cada pessoa pensa sobre tudo o que ouviu e forma uma ideia nova. O que cada uma retém é diferente do que as outras retêm, porque cada uma entra com seu próprio vetor. Em outras palavras, a atenção responde "com quem preciso falar para entender melhor?", e o feedforward responde "o que faço com essa informação agora que ela está comigo?".

## A fórmula

Cada token (palavra representada por um vetor) passa pela mesma rede feedforward, posição por posição e de forma independente. O cálculo é:

**FFN(x) = max(0, xW1 + b1)W2 + b2**

- **W1 e W2** são matrizes de peso.
- **b1 e b2** são vetores de viés.
- **max(0, ·)** é a função que introduz a não linearidade (o resumo do professor a associa à ReLU).

## Passo 1: xW1 + b1

O professor imagina o token como um aluno, o vetor x, que acabou de receber a informação da aula anterior (a atenção). Como a conta está entre parênteses, ela é feita primeiro.

- **W1** funciona como uma lente, um conjunto de filtros que dá ao aluno um novo ponto de vista sobre o que ele já tinha e um espaço mais abstrato de compreensão.
- **b1** é o ajuste fino, como um conselho adicional: "depois dessa transformação, preste atenção nisto".

O resultado é um vetor intermediário, com ideias novas, mas ainda bruto.

## Passo 2: max(0, ·)

É a função de ativação. Na analogia, o aluno reflete sobre o que aprendeu e descarta o que é inútil, como a cor da roupa do professor ou a luz da sala. A função mantém os valores positivos e zera os negativos. Assim, nenhuma ideia inútil desvirtua a evolução do aprendizado, e só o que tem potencial positivo segue para a etapa seguinte.

## Passo 3: W2 e b2

A segunda transformação é uma lente adicional que consolida o que foi refletido, com um entendimento adicional.

- **W2** condensa o valor já calculado em uma forma final.
- **b2** dá o ajuste final.

Com as duas transformações juntas, o resultado fica mais apurado. O token sai com uma nova representação vetorial, refinada, que já não se parece com a de entrada e está pronta para a próxima camada do modelo.

## Por que a não linearidade importa

O professor diz que ela é essencial para representar relações mais complexas e cruzadas, o que ele considera a grande sacada da Gen AI. Sem uma não linearidade entre as duas transformações lineares do bloco, empilhá-las equivaleria a uma única transformação linear, o que limitaria a capacidade do modelo de representar relações complexas. O `max(0, ·)` quebra essa linearidade e permite aprender padrões mais profundos do que a atenção sozinha expressa. O efeito combinado das duas projeções com a não linearidade entre elas é mais expressivo do que uma única transformação linear.

## Raciocínio local

O feedforward age dentro de cada token, como um processamento individual. Cada token reorganiza a informação que recebeu da atenção e cria uma representação vetorial mais enriquecida, que segue para a próxima camada. Isso não contradiz o contexto global do Transformer: a mistura entre tokens já aconteceu na atenção, e o raciocínio local depois se transforma em global à medida que as camadas seguintes voltam a combinar as representações refinadas.

## Divisão de papéis

A atenção identifica de onde vem a informação relevante, e o feedforward decide como transformá-la dentro de cada token. Primeiro o modelo relaciona as posições, depois aprofunda cada representação. O professor fecha dizendo que é mais uma camada adicionada aos Transformers, e que o conteúdo começa a ficar mais complexo.
