# Pré treinamento — resumo

## Da arquitetura para o aprendizado

Até aqui o curso contou a história da IA, os desafios que foram surgindo e como cada um foi resolvido, até montar a arquitetura do Transformer: o "cérebro" da IA, como ele é organizado. A partir desta aula, a pergunta muda: **como esse modelo aprende**. A primeira etapa é o pré-treinamento.

## Pré-treinamento: exposição massiva a texto

No pré-treinamento, o modelo aprende pela **enorme exposição a dados**: precisa de muito texto. As fontes são livros, sites, artigos, código, fóruns e conversas na web. O objetivo não é ensinar uma tarefa específica, mas fazer o modelo absorver os padrões da linguagem em escala. O valor está no volume e na diversidade dos dados.

## Dados como recurso estratégico

O professor liga isso à disputa das big techs pelas redes sociais: elas concentram muito texto e muita interação humana, dados riquíssimos para treinar IA. Ele também observa que quase tudo o que existe na web já foi mapeado e transformado em tokens para treinar modelos. Dados ainda existem, mas a maior parte já foi usada, e por isso dado novo virou "ouro" para essas empresas. O resumo do professor conclui que a disputa deixa de ser só por poder computacional e passa a ser também por acesso a novas fontes de dados.

## Aprendizado sem rótulos

O ponto mais importante do pré-treinamento: o modelo **não precisa de dado rotulado**, isto é, de explicação humana sobre o que está lendo. O professor chama esse treinamento de não supervisionado. O modelo não precisa saber se o texto é um artigo de medicina, uma cláusula jurídica ou um código em Python. Basta ter texto. Dele, o modelo extrai padrões linguísticos (sintaxe, semântica, estilo e estrutura), e é com base neles que constrói sua capacidade de gerar texto e, depois, de conversar.

## Padrões em vez de compreensão

Daí vem a frase de que a IA seria "uma inteligência que não é inteligente". Para o professor, ela tem certo sentido: o modelo não sabe o que está lendo. Não sabe se está ensinando a fazer um foguete ou um bolo. O que ele domina é a estrutura do texto, como o português ou o inglês funcionam, talvez melhor do que muita gente. É esse domínio dos padrões que permite gerar frases plausíveis.

## Por que dispensar rótulos importa

Rotular é explicar ao modelo o que ele está lendo, e isso é feito à mão. Antigamente era assim, e o custo era muito alto. Sem rótulos, o aprendizado escala para **bilhões de tokens**: ninguém precisa preparar ou enriquecer os dados, que entram crus. O resultado é um modelo que aprende de forma **geral**, sem se limitar a uma tarefa, e que depois pode ser adaptado por **fine-tuning**, assunto que vem na sequência.

## O que é rotular um dado

Rotular é atribuir a cada exemplo uma informação específica, o rótulo, para que o modelo saiba o que aprender com ele. O professor compara com separar os dados em caixinhas de assunto.

O exemplo é um modelo para detectar sentimento. "Este produto é ótimo" recebe o rótulo positivo; "Esse produto foi péssimo" e "O atendimento foi horrível", o rótulo negativo. Com o tempo, o modelo associa palavras como "ótimo", "bom" e "legal" ao positivo, e "péssimo", "ruim" e "horrível" ao negativo. Só que alguém precisou marcar frase por frase. Dá para automatizar uma parte, mas o trabalho continua chato e caro. Além disso, a mesma frase pode receber rótulos diferentes conforme o que se quer treinar. O pré-treinamento atual dispensa essa marcação: o modelo associa padrões a partir da estrutura do próprio texto.

## Causal Language Modeling (CLM)

Das abordagens de pré-treinamento, o professor apresenta duas, começando pela **CLM**, Causal Language Modeling, usada nos GPT-2, GPT-3 e GPT-4. O modelo recebe uma sequência de palavras e aprende a **prever a próxima**. Para "O cachorro latiu ontem", ele tenta prever o que vem depois ("no meu bairro"). Para "O céu hoje está muito", pode prever "azul" ou "nublado".

A orientação lembra o bigrama, mas o professor frisa que não é tão simples: o mecanismo é o mesmo princípio, só que muito mais evoluído, com processamento em paralelo, muitas camadas e tudo o que foi visto nas aulas de arquitetura.

## O que significa "causal"

"Causal" indica uma relação de causa e efeito na sequência: a próxima palavra é causada pelas anteriores e sofre influência direta do que veio antes. Na prática, o modelo **só pode usar o contexto anterior**, o que está à esquerda, para prever o próximo token. Isso é imposto por uma **máscara causal**: o modelo olha só para trás, nunca para a frente.

## O ciclo de treino: prever, comparar, corrigir

Durante o treinamento, um texto completo é dividido em tokens. O modelo recebe uma sequência **incompleta**, e o token seguinte fica guardado. Depois que o modelo faz a previsão, ela é comparada com o token real. Se a frase era "O cachorro correu para o parque" e o modelo previu "portão", isso é um erro. O erro gera uma correção, propagada de volta por toda a rede pelo **backpropagation**, que ajusta pesos e vieses. O professor compara com uma criança que aprende errando e sendo avisada de que aquele não é o caminho.

## Cross Entropy Loss

Para medir o erro, usa-se uma função de perda, normalmente a **Cross Entropy Loss** (perda de entropia cruzada). Ela mede quão longe a distribuição prevista pelo modelo está da resposta correta, ou seja, quão distante a previsão ficou do token que realmente vinha. Essa distância, o "delta", é o sinal que orienta o ajuste. Sem uma função de perda desse tipo, treinar seria muito mais difícil e custoso.

## Quem usa a CLM

Além dos GPTs, usam a CLM o DeepSeek (segundo o professor, de forma ainda mais otimizada, por ter menos poder de processamento), o Mistral e o Llama. O resumo do professor cita também a família Phi. A abordagem dá fluidez e coerência a textos longos e generalistas, sem categorização, que é o que essas IAs produzem. A segunda abordagem de pré-treinamento fica para a sequência.
