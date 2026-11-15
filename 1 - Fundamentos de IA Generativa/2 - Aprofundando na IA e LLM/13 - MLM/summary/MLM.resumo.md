# MLM — resumo

## Uma segunda estratégia de pré-treinamento

Depois da CLM (Causal Language Modeling), o professor apresenta a segunda abordagem de pré-treinamento: a **MLM**, Masked Language Modeling. A aula é curta porque as duas são parecidas: o ciclo de treino é o mesmo, e o que muda é a **estratégia** usada para criar a tarefa que o modelo precisa resolver.

## Da próxima palavra para as lacunas

Na CLM, o modelo olha da esquerda para a direita e tenta prever a **próxima** palavra. Na MLM, algumas palavras são escondidas por uma **máscara**, e as lacunas podem estar **no meio** da frase, não só no final. A tarefa passa a ser **preencher as lacunas**: em vez de continuar uma sequência, o modelo aprende a inferir as palavras que faltam a partir do contexto ao redor.

O exemplo do professor parte da frase "O céu hoje está muito azul". Ela pode virar "O [MASK] hoje está muito azul", ou ainda "O [MASK] hoje está [MASK] azul". Para descobrir o que está escondido, o modelo precisa considerar o que vem antes e o que vem depois de cada máscara.

## Contexto bidirecional

Esse é o ponto central da MLM: o modelo olha **bidirecionalmente**, para trás e para frente. Como a informação mascarada está no meio do texto, ele é obrigado a usar os dois lados. O professor destaca a diferença em relação à CLM, que calcula só para frente, usando apenas o que veio antes. A MLM tem um cálculo bidirecional, e isso faz o modelo "pensar" de um jeito diferente.

O exemplo de modelo que usa essa abordagem é o **BERT**.

## Quanto mascarar

Não se mascara a frase inteira, nem metade dela. O exemplo com duas máscaras em uma frase curta era hipotético. Durante o treinamento, uma fração pequena das palavras é mascarada **aleatoriamente** (o professor fala em cerca de 20%), e o modelo vai atrás delas. Mascarar pouco preserva contexto suficiente para que a palavra escondida possa ser inferida e, ao mesmo tempo, dá ao modelo um desafio que o obriga a aprender relações entre as palavras.

## O ciclo de treino é o mesmo

Depois de escolher as máscaras, o processo é muito parecido com o da CLM. O valor esperado (a palavra original que foi escondida) fica guardado, o modelo processa a frase e faz sua previsão, e a previsão é comparada com o esperado. A diferença entre os dois gera o ajuste de pesos e vieses por **backpropagation**, e assim o modelo melhora. A mecânica de otimização não muda; o que muda é a tarefa de treinamento.

## Ótimo para compreensão, fraco para geração

Por considerar o que vem antes e o que vem depois, a MLM é ótima para **compreensão de texto**: entender contexto, pegar o que está faltando e perceber aonde o texto quer chegar. O resumo do professor cita tarefas como classificação e busca semântica, em que interpretar importa mais do que produzir uma resposta longa.

Em compensação, a MLM **não é tão boa para gerar texto**. Uma conversa tem uma relação muito forte com a palavra anterior, e ninguém monta uma frase escrevendo palavras e depois tampando algumas delas. Gerar é construir a frase linearmente, para frente, e esse é o jeito que a CLM treina. O objetivo da MLM, preencher lacunas olhando os dois lados, não coincide com esse fluxo. Por isso modelos como o BERT se destacam em entendimento de linguagem, mas não são a escolha natural para um chatbot.

## A analogia da leitura de documentos

Para aproximar a ideia do dia a dia, o professor compara a MLM com a busca de documentos sobre um assunto. Ao procurar, o olho bate em algumas palavras-chave espalhadas no meio do texto para saber se aquele é o assunto; depois, a leitura com calma confirma. A MLM faz algo parecido: pega frases, fecha as lacunas e, com base nesse fechamento, consegue compreender se o texto trata do assunto A ou do assunto B.

## Sem supervisão nos dois casos

Tanto a CLM quanto a MLM são treinamentos **sem supervisão**. O próprio texto prepara a tarefa: na CLM, remove-se a palavra seguinte e o modelo a prevê; na MLM, uma máscara tampa algumas palavras e o modelo tenta adivinhá-las. Nenhum dos dois precisa de **rótulo externo** nem de uma pessoa acompanhando: dá para deixar o treino rodando, e o aprendizado é auto-organizado. Por isso essas abordagens costumam aparecer com o nome **unsupervised**, não supervisionadas por um humano.

## Fechamento

CLM e MLM são as duas principais abordagens de pré-treinamento apresentadas na aula. O próximo assunto é o **fine-tuning**.
