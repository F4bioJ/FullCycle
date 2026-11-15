# CoT com Self-consistency

## Self-consistency sobre múltiplos raciocínios

Self-consistency é uma estratégia em que o modelo gera vários caminhos de raciocínio para a mesma pergunta e, ao final, escolhe a resposta que aparece com maior consistência entre eles. A técnica se apoia no Chain of Thought já conhecido, mas adiciona uma camada de robustez: em vez de confiar em uma única decomposição do problema, compara várias. Isso importa quando uma execução isolada pode conter um erro local de interpretação, cálculo ou inferência. O ganho esperado não é “pensar mais”, e sim reduzir a dependência de um único caminho possivelmente defeituoso.

## Escolha da resposta mais consistente

A resposta final é escolhida por convergência entre os caminhos gerados, normalmente por maioria ou por agrupamento das conclusões equivalentes. Quando dois ou mais raciocínios chegam ao mesmo resultado e um terceiro diverge, a resposta divergente pode ser tratada como menos confiável. Esse mecanismo funciona como uma votação entre hipóteses produzidas pelo próprio modelo. Ele é útil em decisões técnicas, cálculos, interpretação de texto e questões de múltipla escolha, desde que o custo extra compense.

## Ignorar outliers entre caminhos

Outlier, nesse contexto, é um caminho de raciocínio cuja conclusão foge do padrão dominante entre as demais execuções. Ignorar outliers evita que uma resposta espúria, gerada por um desvio pontual, tenha o mesmo peso de respostas que convergiram entre si. Isso fica ainda mais relevante quando o prompt pede muitos caminhos, como 10 ou 20, porque a dispersão tende a aumentar. O critério, porém, depende de haver convergência suficiente; se todas as respostas divergirem, o sistema deveria assumir incerteza em vez de forçar uma conclusão.

## Limitações operacionais

Self-consistency aumenta custo de tokens e latência porque a mesma tarefa é resolvida várias vezes antes da consolidação final. Em tarefas simples, esse overhead costuma gerar pouco valor, já que uma única resposta direta tende a ser suficiente. A técnica também não garante correção: se o modelo errar de forma parecida em múltiplos caminhos, a votação apenas consolida o erro. Por isso, consistência é um sinal de estabilidade, não uma prova de verdade.

## Aplicação prática no problema N+1

Retomando o cenário do endpoint que busca usuários e, em seguida, busca posts dentro de um loop, o ponto novo não é redefinir N+1, mas usar múltiplos raciocínios para validar a contagem de queries. O prompt pede três linhas de raciocínio passo a passo e, ao final, solicita um sumário com a resposta mais consistente, ignorando outliers. A estrutura prática é: gerar caminhos independentes, comparar as conclusões e escolher a maioria. Opcionalmente, o prompt ainda pode declarar que, se todas as respostas forem diferentes, a saída deve assumir que não há resposta consistente.

## Leitura do resultado no exemplo

No experimento, um dos caminhos identificou corretamente N+1, enquanto outros caminhos erraram ao esquecer a query inicial ou ao imaginar uma otimização que não existia no código mostrado. Quando a maioria dos caminhos convergiu para N, o sistema escolheu N, mesmo sendo a resposta errada. Isso mostra o ponto pedagógico central da técnica: ela melhora robustez contra desvios isolados, mas não corrige um viés dominante do modelo. Se o erro for consistente, a consolidação também será.

## Diferença entre modelos na mesma estratégia

Usando o mesmo prompt, modelos diferentes podem produzir distribuições diferentes de caminhos e, por consequência, resultados finais diferentes. No caso testado, o GPT-3.5 Turbo variou entre execuções e chegou a consolidar a resposta errada por maioria, enquanto o GPT-4o convergiu repetidamente para N+1. A técnica, portanto, não elimina a influência do modelo base; ela apenas organiza melhor a decisão a partir das saídas que esse modelo consegue gerar. Isso reforça a necessidade de avaliar qualidade, custo e estabilidade em conjunto.

## Quando usar

Self-consistency vale a pena quando o custo de uma resposta errada é relevante e existe benefício em comparar múltiplos caminhos antes de decidir. Ele é especialmente útil em problemas com ambiguidade local, etapas de cálculo ou análise técnica em que um único raciocínio pode falhar por descuido. Em contrapartida, não faz sentido transformá-lo em padrão para toda requisição, porque o ganho depende da natureza da tarefa. A escolha deve ser intencional: mais robustez em troca de mais processamento.
