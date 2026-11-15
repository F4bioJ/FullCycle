# RLHF — resumo

## Fine tuning com feedback humano

RLHF é mais uma estratégia de fine tuning. A sigla vem de *Reinforcement Learning from Human Feedback*: um **aprendizado por reforço guiado pelo feedback humano**. Parte-se do fine tuning supervisionado que já existe, mas agora o ajuste não depende só da massa de dados preparada: ele incorpora a interação humana, com pessoas dizendo quais respostas preferem. Com isso dá para ajustar **como** o modelo responde (estilo, aderência a instruções, comportamento) e ensinar o modelo a seguir instruções humanas.

O professor usa o treinamento do GPT-4 como referência. Outros modelos mudam detalhes, mas as **três etapas** aparecem em quase todos os que usam RLHF.

## Etapa 1: SFT (Supervised Fine Tuning)

Humanos escrevem **pares de pergunta e resposta de qualidade**, e o modelo é treinado com esses exemplos. Exemplo: a entrada "me explique a teoria da relatividade como se eu fosse uma criança" e, como saída, uma explicação simples e clara escrita por uma pessoa. O modelo aprende que, quando vier esse tipo de pergunta, esse formato de resposta é o esperado. Ele aprende com dados que um humano gerou para aquela especificidade, a melhor resposta que alguém criaria. Nessa etapa o modelo só imita exemplos bons; ainda não compara respostas concorrentes.

## Etapa 2: Reward Model (modelo de recompensa)

A ideia é **recompensar quando o modelo vai pelo caminho certo**. Para a mesma pergunta, o modelo gera várias respostas (A, B e C), e um humano dá uma nota a cada uma: A = 10, B = 5, C = 7. Disso sai um **ranking**: A, depois C, depois B. Isso não quer dizer que B esteja errada; quer dizer que, comparada às outras duas, foi para um caminho pior. O modelo de recompensa aprende a transformar essas preferências humanas em um **sinal numérico de qualidade** e passa a reconhecer padrões do que recebe nota alta, como clareza, utilidade e segurança. Comparar faz sentido porque muitas tarefas abertas não têm uma única resposta certa, e sim várias respostas de qualidades diferentes.

## Etapa 3: RL com PPO

Na última etapa entra o **Reinforcement Learning** propriamente dito. O modelo gerador é ajustado usando o modelo de recompensa da etapa 2, com o algoritmo **PPO (Proximal Policy Optimization)**. A meta do PPO é **gerar respostas que maximizem a recompensa prevista**, atualizando a política de geração sem mudar o modelo de forma instável. Na prática, o modelo passa a favorecer as respostas que o Reward Model considera mais úteis, seguras e claras. É assim que as preferências humanas viram atualização efetiva dos parâmetros, e o fine tuning fica melhorado.

## Por que esse ajuste é necessário

Um LLM aprende prevendo a próxima palavra, e depois a próxima, e a próxima. Isso produz texto fluente, mas **não garante consistência lógica**: o modelo pode não ter clareza do caminho que está tomando. Sem ajuste, ele pode:

- **reproduzir vieses dos dados** e dizer uma grande besteira;
- **ser prolixo e impreciso**, repetindo as mesmas informações, como o ChatGPT fazia quando foi lançado;
- **gerar conteúdo inseguro ou ofensivo**, como os casos na mídia de IAs que reproduziram racismo ou ofensas a minorias, porque isso estava nas bases de dados usadas no treino.

O fine tuning limpa esse comportamento. O professor descreve o RLHF como uma **bússola ética**, que guia o modelo a ser mais educado, respeitoso e assertivo.

## Efeitos que dá para perceber

Modelos diferentes (ChatGPT, DeepSeek) tratam o usuário com níveis diferentes de educação e respeito, e até versões do mesmo produto mudam. Uma atualização do GPT o deixou **"puxa-saco"**: quem fez o ajuste "errou a mão pra cima". A atualização seguinte o deixou mais comum, menos inclinado a agradar e mais disposto a dizer que não sabe um assunto, embora ainda responda coisas só para agradar. Com esse tipo de treinamento é possível fazer o modelo:

- dizer **o que não sabe**, quando for apropriado;
- **seguir melhor as instruções** do usuário, em vez de inventar;
- **alucinar menos**, porque recebeu mais instrução.

## Dica do professor: prompt direto

O professor deixa claro que é "achômetro", fruto dos testes dele. Quando ele trata o chat de forma muito educada, com "por favor" e rodeios, a resposta vem de um jeito. Quando fala de forma **direta**, como quem fala com uma máquina, pedindo dados reais e direcionados, **sem tentar convencer nem agradar**, ele sente que o modelo responde melhor: viaja menos, fica menos prolixo e inventa menos. O pedido direto dá a direção de que o modelo não deve entrar nas camadas de agradar o usuário.

## Instruction Tuning

É um passo complementar, que pode vir **antes ou junto do RLHF**. O modelo é treinado com **muitas instruções humanas para tarefas diversas**, para ficar mais **generalista e fácil de usar**, como pedir "escreva uma carta de demissão em tom amigável" ou "crie um roteiro para um podcast de IA". Faz sentido para um modelo generalista como o GPT-4; para um fine tuning que deixa a IA especialista em um assunto, talvez não seja o caso.

## Limitações do RLHF

- **Depende do ser humano, e o ser humano é falho.** Há **subjetividade** na escolha da melhor resposta. Uma resposta alucinada (explicar a relatividade com a casa da Barbie e o Ken saindo de carro) é fácil de descartar, mas três respostas muito parecidas não: cada avaliador pode preferir uma por causa do tom, de uma palavra que conhece ou do jeito. Para o professor isso não é necessariamente ruim, já que a linguagem humana também é subjetiva.
- **Custa caro**, porque exige trabalho humano de avaliação.
- **Tem viés**, porque quem avalia tem viés e o transmite ao modelo.
