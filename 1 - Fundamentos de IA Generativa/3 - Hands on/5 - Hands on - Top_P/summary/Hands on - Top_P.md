# Hands on - Top_P

## Efeito sutil do top-p na geração

Top-p já foi definido anteriormente; aqui o ponto central é observar que seu efeito costuma ser mais sutil do que o da temperatura. Em vez de produzir mudanças muito evidentes em estilo ou criatividade, ele refina o conjunto probabilístico de candidatos elegíveis para a próxima escolha. Por isso, a diferença entre duas execuções pode ser pequena e, em alguns casos, quase imperceptível. Essa característica exige testes mais controlados para que a comparação tenha valor técnico.

## Leitura prática do limiar probabilístico

Retomando o exemplo de continuação de frase, o valor de top-p funciona como um corte por massa acumulada de probabilidade. Se os tokens mais prováveis somam 90% ao alcançar o terceiro candidato, o modelo passa a amostrar apenas dentro desse subconjunto e ignora o restante. Com `top_p = 0.9`, o conjunto pode incluir várias opções; com um valor mais baixo, como `0.6`, o corte pode ficar tão restrito que sobra apenas o token dominante. O efeito prático é reduzir ou ampliar a variedade possível sem fixar uma quantidade rígida de candidatos.

## Controle do experimento no Playground

O máximo de tokens, já visto antes, precisa estar configurado corretamente para não contaminar o teste. Se esse valor estiver em zero ou muito baixo, a execução falha ou a saída é truncada, e a comparação deixa de medir top-p para medir limitação de geração. Antes de comparar respostas, ajuste esse parâmetro para um valor suficiente para a tarefa. Sem esse cuidado, qualquer conclusão sobre top-p fica tecnicamente fraca.

## Comparação com múltiplas mensagens

Usar múltiplas mensagens no Playground é a forma mais prática de comparar saídas lado a lado sem perder a execução anterior. Ao criar uma nova mensagem, a resposta anterior permanece visível acima, o que facilita inspecionar diferenças de escolha lexical, continuidade e grau de variação. Esse procedimento é melhor do que sobrescrever a mesma execução, porque preserva o contexto da comparação. Quando o efeito é sutil, a inspeção visual simultânea passa a ser parte do método.

## Procedimento de teste

Mantenha o mesmo prompt e altere apenas o valor de `top_p`. Primeiro, execute com um valor mais restritivo, como `0.1`, e confirme que o máximo de tokens não está impedindo a geração; depois rode novamente com um valor mais amplo, como `0.9`, em uma nova mensagem. Compare as duas saídas observando se a continuação ficou mais fechada nas opções mais prováveis ou se ganhou alguma flexibilidade adicional. Se a diferença parecer pequena, isso não invalida o teste: faz parte do comportamento esperado desse parâmetro.

## O que observar nas respostas

A comparação não deve buscar apenas mudanças grandes de conteúdo, porque top-p frequentemente atua em nuances. Observe se a resposta repete caminhos mais previsíveis, se escolhe palavras mais conservadoras ou se admite pequenas alternativas de formulação quando o limiar aumenta. Em muitos casos, a estrutura geral permanece parecida e a diferença aparece apenas na seleção de termos ou na abertura para variações locais. Ler o resultado com esse critério evita a falsa impressão de que o parâmetro “não fez nada”.
