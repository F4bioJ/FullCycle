# Positional encoding

## Por que o Transformer precisa de posição

Transformers processam tokens em paralelo, então a ordem da sequência não vem embutida no mecanismo de processamento. Retomando o ponto já estabelecido sobre atenção e embeddings, o modelo sabe quais tokens existem, mas não sabe naturalmente quem vem antes ou depois. Sem informação posicional, uma sequência como “eu comi antes de dormir” pode perder sua estrutura e produzir combinações semanticamente estranhas. Positional Encoding existe para injetar ordem na representação vetorial sem abrir mão do paralelismo.

## Soma entre embedding e posição

A informação de posição entra como um vetor adicional somado ao embedding do token. Isso significa que a representação final de cada token combina conteúdo semântico com localização na sequência. A ideia central não é substituir o embedding, mas enriquecê-lo com contexto posicional. O resultado é um vetor que carrega ao mesmo tempo “o que é” o token e “onde ele está”.

## Positional Encoding fixo com seno e cosseno

Na formulação clássica do paper Attention Is All You Need, cada posição recebe um padrão ondulatório calculado por funções seno e cosseno. Esse padrão não é aprendido durante o treinamento; ele é gerado diretamente por uma regra matemática. A vantagem é que cada posição ganha uma assinatura numérica consistente, permitindo ao modelo distinguir posições e comparar distâncias relativas. Isso torna a codificação posicional generalista e útil em sequências variadas.

## Papel de `pos`, `i` e `d_model`

Na fórmula, `pos` representa a posição do token na sequência, como 0, 1, 2 e assim por diante. O índice `i` identifica a dimensão do vetor em que o cálculo está sendo aplicado, enquanto `d_model` define o tamanho total do embedding, como 512 ou 768. Essa estrutura distribui a informação posicional por várias dimensões do vetor, em vez de concentrá-la em um único valor. O efeito prático é uma codificação rica o suficiente para ser combinada com a representação semântica do token.

## Frequências altas e baixas nas dimensões

O termo central da fórmula cria frequências diferentes para dimensões diferentes do vetor. Nas primeiras dimensões, a variação é mais rápida, produzindo padrões de alta frequência; nas últimas, a mudança é mais lenta, gerando padrões de baixa frequência. Essa mistura funciona como um conjunto de ondas complementares que descrevem a posição em múltiplas escalas. Com isso, o modelo consegue comparar não apenas posições absolutas, mas também relações de distância entre tokens.

## Por que usar seno e cosseno

Seno e cosseno produzem valores periódicos suaves no intervalo entre -1 e 1, o que permite gerar padrões repetitivos estáveis ao longo da sequência. Como essas funções oscilam de forma previsível, diferenças entre posições aparecem como diferenças estruturadas nos vetores. Isso ajuda o modelo a inferir relações relativas, como proximidade e deslocamento entre tokens, sem precisar memorizar explicitamente cada posição. A codificação passa a ter uma geometria útil para a atenção.

## Embeddings posicionais aprendidos

Uma alternativa ao esquema fixo é aprender os vetores posicionais durante o treinamento. Nesse caso, o modelo ajusta essas representações por tentativa e erro, do mesmo modo que aprende outros parâmetros internos. A vantagem é adaptar a noção de posição ao domínio e à tarefa, em vez de impor uma estrutura matemática pré-definida. O custo é depender mais de dados, parâmetros e treinamento para obter uma boa codificação.

## Quando usar cada abordagem

A codificação fixa tende a funcionar melhor em cenários generalistas, com maior variedade de dados e necessidade de extrapolar para sequências longas. Por isso, ela se encaixa bem em tarefas amplas como tradução e geração textual aberta, além de arquiteturas como GPT e BERT. Já embeddings posicionais aprendidos costumam ser vantajosos em domínios mais fechados, com padrões recorrentes, como documentos jurídicos ou geração de código. Nesses casos, o modelo pode capturar regularidades específicas do domínio com mais precisão.

## Sequências longas continuam sendo difíceis

Mesmo com codificação posicional, manter coerência em sequências longas continua sendo um desafio central em IA generativa. Frases curtas são mais fáceis de sustentar do que parágrafos, livros ou vídeos longos, porque o modelo precisa preservar relações entre muitos elementos ao longo do tempo. O Positional Encoding ajuda justamente a reduzir essa perda de estrutura, oferecendo um sinal consistente de ordenação. Ele não elimina sozinho o problema de longo alcance, mas é uma peça essencial para torná-lo tratável.
