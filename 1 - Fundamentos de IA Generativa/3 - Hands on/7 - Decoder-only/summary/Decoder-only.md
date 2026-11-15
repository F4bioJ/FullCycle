# Decoder-only

## Decoder-only e geração autoregressiva

Decoder-only é a variação do Transformer especializada em geração textual passo a passo. Em vez de processar a sequência inteira com visão bidirecional, ele restringe o cálculo ao histórico disponível para prever o próximo token. Essa escolha reduz complexidade para tarefas generativas e alinha a arquitetura ao problema central de completar texto, responder e continuar sequências de forma coerente.

## Causal self-attention

A causal self-attention é o mecanismo que impede cada posição de acessar tokens futuros. Cada token pode atender apenas a si mesmo e aos tokens anteriores, o que força o modelo a construir a saída da esquerda para a direita. Essa restrição existe porque, na geração, o próximo token precisa ser inferido apenas a partir do contexto já produzido, não de informação que ainda não existe no momento da predição.

## Máscara triangular inferior

A máscara triangular inferior implementa essa restrição diretamente na matriz de atenção. Em uma sequência como “o cachorro correu rápido”, a posição de “correu” pode usar “o” e “cachorro”, mas não pode acessar “rápido”; a posição de “rápido” já pode usar todo o histórico anterior. O triângulo de zeros e permissões garante que o modelo libere contexto gradualmente e não “trapaceie” olhando para o futuro durante treino ou inferência.

## Leitura temporal da matriz

A matriz de atenção pode ser lida como uma tabela de visibilidade entre posições da sequência. Sem máscara, todas as posições poderiam se enxergar; com máscara causal, cada linha só enxerga a diagonal e o passado. Isso transforma a previsão do próximo token em um processo temporal consistente: a cada passo, o contexto cresce, mas nunca inclui informação futura.

## Tokens, vetores e abstração da matriz

A explicação com palavras serve como simplificação visual, mas o cálculo real acontece sobre tokens e, mais profundamente, sobre vetores. Na prática, a matriz de atenção relaciona representações vetoriais das posições da sequência, não palavras literais. A máscara continua válida nesse nível: ela não depende do significado textual explícito, e sim da posição relativa entre elementos da sequência.

## Ordem posicional sem RNN

Retomando a diferença para RNNs, o Transformer não precisa processar token por token de forma sequencial para respeitar ordem. A noção de posição continua presente por meio da ordenação da sequência, e a máscara causal impõe a direção temporal mesmo com processamento paralelo das camadas. O resultado é combinar paralelismo computacional com comportamento autoregressivo controlado.

## Multi-head attention com máscara causal

A multi-head attention com máscara causal faz duas coisas ao mesmo tempo: restringe o acesso ao passado e permite múltiplas leituras do mesmo contexto. Cada head aprende relações diferentes entre os tokens anteriores, como dependências sintáticas, semânticas ou padrões locais de continuação. Isso aumenta a capacidade do modelo de decidir quais partes do histórico realmente importam para prever o próximo token sem violar a causalidade.

## Feedforward position-wise

O feedforward position-wise é uma transformação aplicada individualmente à representação de cada posição após a atenção. Ele não mistura posições entre si; em vez disso, refina localmente a informação já contextualizada e ajuda a modelar padrões não lineares. Essa etapa amplia a capacidade expressiva do bloco decoder e melhora a combinação de significado em contextos mais abstratos.

## Layer norm e conexões residuais

Layer norm estabiliza os valores internos do modelo para evitar escalas descontroladas durante o treinamento e a inferência. As conexões residuais preservam informação das camadas anteriores ao somá-la à saída transformada, o que facilita o fluxo de gradiente e reduz perda de informação ao empilhar muitos blocos. Juntas, essas duas peças tornam o decoder-only treinável em profundidade e mais estável numericamente.

## Exemplo intuitivo de foco no passado

Uma forma útil de visualizar a máscara causal é pensar em uma prova em que a resposta atual só pode usar o que já foi resolvido antes. Ao responder a questão 6, faz sentido consultar as questões 1 a 5, mas não a 8, 9 ou 10. O decoder-only opera com a mesma disciplina: usa o passado disponível, bloqueia o futuro e, por isso, consegue gerar texto de maneira consistente token a token.
