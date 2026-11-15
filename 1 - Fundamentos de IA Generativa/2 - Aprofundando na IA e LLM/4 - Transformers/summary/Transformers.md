# Transformers

## A ruptura arquitetural dos Transformers

Transformers surgem como resposta direta às limitações que permaneceram mesmo após LSTM e GRU: dificuldade em capturar dependências longas e baixa capacidade de paralelização. Retomando essas limitações já conhecidas, a mudança decisiva foi abandonar a recorrência como mecanismo central de processamento. O paper *Attention Is All You Need* consolida essa virada ao propor uma arquitetura baseada em atenção, capaz de tratar relações entre elementos distantes sem depender de uma passagem sequencial token por token.

## Attention e self-attention

Attention é o mecanismo que permite atribuir pesos diferentes às partes de uma sequência conforme o contexto. Em vez de tratar todas as palavras com a mesma relevância, o modelo calcula quais tokens mais influenciam a representação de cada token atual. Em self-attention, essa comparação acontece dentro da própria sequência de entrada: cada token observa todos os demais e estima a importância relativa de cada um. Isso permite conectar elementos semanticamente ligados mesmo quando estão longe na ordem do texto.

## Relações semânticas entre palavras distantes

Na frase “O livro que o João leu ontem era interessante”, a interpretação central depende da ligação entre “João”, “leu” e “livro”, embora existam termos intermediários. O mecanismo de atenção aumenta o peso dessas conexões e reduz a influência relativa de partes menos centrais para aquela relação. O mesmo vale para “O cachorro que o menino viu estava latindo”: mesmo com “menino” mais próximo de “latindo”, o modelo pode dar mais peso a “cachorro” para preservar a interpretação correta. O ganho prático é representar dependências sintáticas e semânticas sem ficar preso à proximidade linear.

## Camada de atenção no Transformer

A camada de atenção compara cada token com todos os outros tokens da sequência para calcular pesos de influência. Esses pesos passam a compor uma nova representação contextualizada de cada token, isto é, a representação deixa de refletir apenas o token isolado e passa a incorporar o contexto relevante ao redor dele. Esse é o núcleo da arquitetura, porque substitui a memória recorrente por um cálculo explícito de relações. O resultado é uma modelagem mais flexível de contexto, especialmente útil em linguagem natural.

## Camadas feedforward e MLP

Depois da atenção, cada token passa por camadas densas feedforward, descritas como MLPs. Essas camadas transformam a representação contextualizada de forma não linear, ampliando a capacidade do modelo de aprender padrões complexos além de simples combinações lineares. A atenção decide “com quem” cada token deve se relacionar; a MLP transforma “como” essa informação combinada será refinada internamente. Essa composição entre atenção e transformação densa é parte essencial do poder expressivo dos Transformers.

## Positional Encoding

Como a arquitetura não processa a sequência de forma recorrente, ela precisa receber explicitamente informação de ordem. Positional Encoding adiciona aos embeddings um sinal que indica a posição de cada token na sequência. Isso permite processar tudo em paralelo sem perder a noção de quem veio antes ou depois. Em termos práticos, é como anexar um identificador posicional a cada token para que a ordem continue disponível durante o cálculo.

## Paralelização e velocidade de treinamento

Retomando o gargalo das RNNs, o Transformer processa todos os tokens simultaneamente em vez de depender de uma cadeia temporal estrita. Essa mudança se alinha muito melhor ao hardware moderno, especialmente GPUs e TPUs, e acelera o treinamento em larga escala. O efeito não é apenas ganho de desempenho bruto: a arquitetura viabiliza experimentação, aumento de escala e ciclos mais rápidos de evolução de modelos. Foi esse encaixe entre arquitetura e infraestrutura que acelerou a IA generativa moderna.

## Dependências longas e estabilidade

Ao calcular relações diretamente entre tokens distantes, Transformers aprendem dependências de longo prazo com muito mais eficiência do que arquiteturas recorrentes. O modelo não precisa carregar contexto por uma cadeia longa de estados ocultos, o que reduz o impacto dos problemas clássicos de degradação do gradiente já discutidos anteriormente. Isso melhora a preservação de informação relevante ao longo da sequência e sustenta respostas mais coerentes. Em escala, essa propriedade contribui para maior estabilidade do treinamento e melhor qualidade de geração.

## Escalabilidade para bilhões de parâmetros

Transformers escalam bem para modelos muito grandes porque sua estrutura favorece paralelização e treinamento distribuído. Essa característica permitiu construir sistemas com bilhões de parâmetros mantendo desempenho e capacidade de generalização em tarefas complexas. A escalabilidade não é apenas quantitativa; ela muda qualitativamente o tipo de comportamento que o modelo consegue exibir, especialmente em geração, diálogo e multimodalidade. Por isso, a arquitetura se tornou a base dominante dos LLMs.

## Impacto em NLP, multimodalidade e outras áreas

BERT, GPT, T5, PaLM e Llama seguem essa linha arquitetural, aplicando Transformers a classificação, análise de sentimentos, geração de texto, tradução e agentes conversacionais. O mesmo princípio se expande para visão computacional com modelos como ViT e para sistemas multimodais capazes de combinar texto, imagem e áudio. Em vez de manter um modelo isolado por modalidade, a arquitetura favorece representações integradas entre diferentes tipos de dado. O impacto também alcança bioinformática, finanças e recomendação, mostrando que atenção não é apenas uma técnica de NLP, mas um padrão geral de modelagem de relações em sequências e estruturas complexas.
