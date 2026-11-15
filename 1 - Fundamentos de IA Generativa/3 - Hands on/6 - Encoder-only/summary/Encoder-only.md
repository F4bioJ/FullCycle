# Encoder-only

## Arquiteturas transformer e a separação por tarefa

Transformers deram origem a três famílias arquiteturais: encoder-only, decoder-only e encoder-decoder. Essa divisão existe porque o transformer completo combina codificação e decodificação, o que aumenta custo e complexidade. Em muitas tarefas, usar a arquitetura inteira é desnecessário; basta isolar a parte mais adequada ao problema. Quando o objetivo é entender texto, classificar conteúdo ou medir similaridade, a família encoder-only é a escolha natural.

## Encoder-only

Encoder-only é a versão do transformer que mantém apenas o bloco de codificação. Seu foco não é gerar texto token a token, mas construir uma representação contextualizada da entrada inteira. Isso o torna especialmente adequado para tarefas de compreensão, como classificação, extração de informação e transformação de frases em vetores. Em troca, ele tende a ser mais leve, mais rápido e mais barato do que arquiteturas voltadas à geração.

## BERT

BERT foi o marco inicial da família encoder-only e consolidou essa arquitetura como padrão para compreensão textual. O nome significa Bidirectional Encoder Representations from Transformers, destacando que o modelo lê o contexto em duas direções. Em vez de prever a continuação de uma sequência como um modelo gerativo, ele aprende a representar o significado do texto de forma rica e contextual. Essa diferença explica por que BERT se encaixa melhor em análise e entendimento do que em geração aberta.

## Atenção bidirecional

Atenção bidirecional significa que cada token pode considerar simultaneamente os tokens à esquerda e à direita. Isso muda a qualidade da representação porque o significado de uma palavra depende do contexto completo, não apenas do que veio antes. Em um encoder-only, o modelo calcula pesos de atenção para ambos os lados e produz embeddings contextualizados em cada camada. O resultado é uma leitura global da sentença, útil para identificar intenção, entidade, tema e relação semântica.

## Tokenização, vetores e representação contextual

O processamento começa com tokenização, seguida da conversão dos tokens em vetores com informação posicional. A partir daí, as camadas do encoder refinam essas representações ao relacionar cada token com os demais da sequência. No fim de cada camada, cada token deixa de ser apenas um símbolo isolado e passa a carregar contexto semântico. Essa base vetorial é o que viabiliza classificação, NER, embeddings e busca semântica.

## Masked Language Modeling

O treinamento clássico do BERT usa Masked Language Modeling, no qual algumas palavras da entrada são ocultadas e o modelo precisa inferi-las a partir do restante da frase. Esse objetivo força o encoder a aprender dependências contextuais completas, porque a resposta correta pode depender tanto do lado esquerdo quanto do direito. O ganho principal não é fluência gerativa, mas capacidade de compreensão. Por isso, encoder-only aprende a preencher lacunas com base no contexto global, e não a continuar texto livremente.

## Classificação de texto e sentimento

Classificação é uma das aplicações mais diretas de encoder-only. O modelo recebe um texto e produz uma representação suficiente para decidir, por exemplo, se o conteúdo trata de medicina, romance ou outro tema, ou se expressa sentimento positivo, negativo ou neutro. Retomando o cenário de análise textual já familiar em produtos digitais, isso permite ler feedbacks, atendimentos e comentários e transformá-los em categorias úteis para operação. A vantagem é que a arquitetura foi otimizada exatamente para entender o texto antes de rotulá-lo.

## Named Entity Recognition

Named Entity Recognition identifica trechos do texto que representam categorias como pessoa, organização e local. Em uma frase como “Steve Jobs fundou a Apple em Cupertino”, o modelo separa “Steve Jobs” como pessoa, “Apple” como organização e “Cupertino” como local. Esse tipo de saída é valioso para extração estruturada de informação, preenchimento automático e indexação de grandes volumes de texto. A tarefa depende de contexto fino, e por isso se beneficia da leitura bidirecional do encoder.

## Embeddings, similaridade e busca semântica

Encoder-only também é amplamente usado para gerar embeddings de sentenças e documentos. Nessa abordagem, textos semanticamente próximos tendem a produzir vetores próximos, mesmo quando não compartilham as mesmas palavras. O par “como fazer um bolo” e “receita para preparar um bolo” ilustra isso: a superfície lexical muda, mas o significado permanece semelhante. Essa propriedade sustenta busca semântica, em que a consulta e os documentos são comparados por similaridade vetorial em vez de simples coincidência de termos.

## Família BERT

A família BERT inclui variantes com compromissos diferentes entre custo, velocidade e qualidade. RoBERTa amplia treinamento e dados para obter representações mais fortes; DistilBERT compacta o modelo para reduzir latência e custo; ALBERT compartilha parâmetros para diminuir tamanho e acelerar inferência. Essas variantes preservam a lógica encoder-only, mas ajustam o ponto de equilíbrio operacional. A escolha entre elas depende da restrição dominante do sistema: qualidade máxima, orçamento ou tempo de resposta.
