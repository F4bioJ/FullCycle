# Pré treinamento

## Pré-treinamento com grandes volumes de texto

Pré-treinamento é a fase em que o modelo aprende a partir de exposição massiva a texto bruto. O objetivo não é ensinar uma tarefa específica, mas fazer o modelo absorver regularidades de linguagem em escala: sintaxe, semântica, estilo e estrutura. Como LLMs já foram apresentados como modelos treinados com grandes corpora, o ponto novo aqui é a lógica operacional dessa etapa: o valor está no volume e na diversidade dos dados. Livros, sites, artigos, código, fóruns e interações na web funcionam como fonte porque ampliam a cobertura de padrões linguísticos que o modelo consegue internalizar.

## Dados como recurso estratégico

Dados textuais em larga escala viraram um ativo estratégico porque o pré-treinamento depende diretamente deles. Plataformas com grande volume de interação humana concentram linguagem natural em uso real, o que aumenta a utilidade desses dados para treinar modelos. Quando grande parte da web já foi convertida em tokens e reutilizada em treinamento, a disputa deixa de ser apenas por compute e passa a ser também por acesso a novas fontes de dados. Isso explica por que dados passam a ter valor econômico comparável a infraestrutura.

## Aprendizado sem rótulos

No pré-treinamento, o modelo não precisa receber explicações humanas sobre cada trecho lido. Em vez de depender de classes como “jurídico”, “médico” ou “código Python”, ele aprende diretamente dos padrões presentes no texto. Isso reduz drasticamente o custo de preparação dos dados e permite escalar o treinamento para bilhões de tokens. A consequência prática é um modelo generalista, que aprende regularidades amplas antes de qualquer especialização posterior por fine-tuning.

## O que significa rotular dados

Rotular dados é associar exemplos a categorias explícitas para orientar o que o modelo deve aprender. Em classificação de sentimento, por exemplo, frases como “Este produto é ótimo” recebem rótulo positivo, enquanto “O atendimento foi horrível” recebe rótulo negativo. Esse processo ensina a máquina por supervisão, mas exige trabalho manual ou pipelines de anotação, o que encarece a operação. A diferença central para o pré-treinamento moderno é que aqui o modelo aprende sem essa marcação explícita.

## Padrões textuais em vez de compreensão explícita

O modelo não precisa “saber” se está falando sobre foguetes ou bolos para gerar texto plausível. O que ele aprende é a continuidade estatística e estrutural da linguagem, isto é, quais sequências tendem a ocorrer juntas e em que forma. Isso ajuda a entender por que a expressão “inteligência” em IA é controversa: o sistema pode dominar a forma textual sem possuir entendimento humano do conteúdo. Ainda assim, esse domínio estrutural já é suficiente para produzir respostas fluentemente conversacionais.

## Causal Language Modeling

Retomando a previsão do próximo token, já conectada à ideia de modelos autoregressivos vista antes, CLM é o mecanismo de treinamento em que o modelo recebe uma sequência e tenta prever o próximo elemento. GPT-2, GPT-3, GPT-4, Llama, Mistral e modelos da família Phi usam essa lógica causal. Se a entrada for “O cachorro latiu ontem”, o treinamento consiste em estimar qual continuação é mais provável. O modelo aprende repetindo esse processo em escala massiva, ajustando seus parâmetros a cada erro.

## Causalidade e máscara causal

“Causal” significa que a previsão só pode usar o contexto anterior da sequência. O modelo olha apenas para os tokens à esquerda para prever o próximo token, sem acessar o futuro da frase. Essa restrição é implementada por uma máscara causal, que bloqueia a atenção para posições posteriores. O efeito é alinhar o treinamento com o comportamento de geração real, em que cada novo token depende apenas do que já foi produzido.

## Comparação entre previsão e token real

Durante o treinamento, o texto completo é tokenizado, mas o modelo recebe apenas uma parte da sequência para fazer a previsão. O token correto fica oculto até o momento da comparação. Se o modelo prever “portão” quando o esperado era “parque”, esse erro vira sinal de ajuste. Esse mecanismo transforma geração em aprendizado iterativo: prever, comparar, medir erro e corrigir parâmetros.

## Backpropagation no pré-treinamento

Depois de comparar a saída prevista com o token real, o erro é propagado de volta pela rede por backpropagation. Como LayerNorm, conexões residuais e estabilidade de treinamento já foram discutidos antes, o ponto relevante aqui é a função desse passo dentro do pré-treinamento: redistribuir o erro para ajustar pesos e vieses em toda a arquitetura. Cada atualização torna o modelo um pouco melhor em prever continuações plausíveis. Em escala, esse processo produz a fluência observada em LLMs.

## Cross Entropy Loss

Cross Entropy Loss mede a distância entre a distribuição prevista pelo modelo e a resposta correta. Em vez de avaliar apenas acerto ou erro binário, ela quantifica quão mal calibrada estava a previsão para o próximo token. Esse valor funciona como sinal numérico para otimização, permitindo que o treinamento aproxime gradualmente a distribuição prevista da distribuição desejada. Sem uma função de perda desse tipo, o ajuste dos parâmetros seria muito menos eficiente e muito mais custoso.
