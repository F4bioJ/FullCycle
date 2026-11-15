# Conhecimento em tempo real

## Abertura
Esta aula trata do último ponto de atenção sobre as LLMs, os grandes modelos de linguagem. E o professor guardou para o fim o que considera o mais importante: o conhecimento.

Na aula passada, vimos que a LLM escreve bem, mas tropeça em raciocínio lógico. A solução foi chamar ajuda de fora para fazer a conta. Hoje o problema é outro. O modelo pode raciocinar bem e, mesmo assim, não saber o que aconteceu ontem.

Vamos separar quatro coisas que parecem iguais e não são: o que o modelo aprendeu no treino, o que ele vê na conversa, o que ele anota numa memória e o que ele lê na hora de responder.

## Conhecimento congelado
A frase-âncora é esta: terminou o treino, o conhecimento congelou.

Pense numa enciclopédia impressa. Ela pode ser excelente, mas parou de mudar no dia em que foi para a gráfica. Se você procurar nela o resultado do jogo de ontem, não vai achar.

Com a LLM é igual. Depois do pré-treinamento e do fine-tuning, o modelo está pronto, e nada novo entra sozinho. Ele não tem uma memória ativa do mundo e não atualiza a própria base de treinamento.

Isso resolve um problema de engenharia: o modelo vira algo estável, que dá para colocar em produção.

E onde quebra? Na pergunta sobre o que é recente. Só que a enciclopédia fica em silêncio quando não tem a resposta, e o modelo não necessariamente. Ele pode inventar alguma coisa só para responder. Aqui o congelamento encontra a alucinação, que você já conhece.

Terminou o treino, o conhecimento congelou. A pergunta seguinte é natural: mas ele não aprende com o uso?

## O modelo não aprende com a conversa
A frase-âncora: conversar usa o modelo, não treina o modelo.

Existe um mito de que todo mundo que usa o GPT está alimentando um cérebro coletivo. Imagine uma calculadora. Milhões de pessoas apertam os botões dela e ela não fica mais esperta. Ela só faz a conta. Quando você conversa, o modelo está sendo usado, e os pesos, aqueles números que guardam o que ele aprendeu, ficam parados.

São dois obstáculos diferentes, e vale separar.

O primeiro é que você provavelmente nem fala com a mesma cópia que outra pessoa. O processamento roda em GPUs, em servidores diferentes, e essas instâncias não se comunicam. O que acontece na sua conversa não chega à conversa do seu colega.

O segundo pesa mais. Mudar os pesos significa refazer toda aquela conta estatística. Fazer isso a cada conversa seria extremamente caro e não daria tempo. Por isso, mesmo que todos estivessem na mesma máquina, nada mudaria.

E se o provedor guardar as conversas num banco de dados? Pode guardar. Mas guardar não é treinar. Aquilo só faria efeito se um dia ele treinasse o modelo de novo com esse material.

Conversar usa o modelo, não treina o modelo. Mas então por que parece que ele lembra de você?

## Contexto de conversa
A frase-âncora: contexto é o que está na mesa agora.

Imagine que você está estudando numa mesa com vários papéis abertos. Tudo o que está ali, você consulta sem esforço. Mas a mesa tem tamanho limitado e, quando você muda de mesa, os papéis ficam para trás.

A janela de conversa funciona assim. O modelo responde como se lembrasse do seu nome porque a conversa inteira continua sendo retroalimentada para ele a cada resposta.

Isso resolve a continuidade: você não precisa repetir tudo a cada mensagem.

Onde quebra? No limite. Quando você pergunta demais na mesma janela, a conversa estoura e o produto pede para abrir outra. Na nova conversa, o contexto se perdeu.

Contexto é o que está na mesa agora. E se o modelo sabe seu nome numa conversa nova? Aí é outra coisa.

## Memória ativada
A frase-âncora: memória é um caderninho, não um aprendizado.

Pense num atendente de padaria que anota num caderninho: o seu João gosta do pão mais assado. Ele não virou um padeiro melhor. Ele só consulta a anotação quando o seu João chega.

A memória ativada, no exemplo do professor o GPT-4 na conta paga, faz isso. Ela guarda algumas informações: seu nome, se você prefere conteúdo profundo ou exemplo prático, os assuntos de que mais fala.

Isso resolve a personalização entre conversas, melhorando a experiência.

Onde quebra? Ela não reprograma pesos e vieses. Ela acompanha a LLM, e não é um retreinamento. E guarda só algumas coisas, então não serve de base de fatos que mudam o tempo todo.

Memória é um caderninho, não um aprendizado. E isso nos leva a quem mais sofre com tudo isso.

## Onde o problema pesa
A frase-âncora: quanto mais o dado muda, menos dá para confiar só no treino.

Pense no médico, com novidades chegando sempre. No advogado, em que cada julgamento traz informação nova. Na loja, com o preço do produto. Na empresa, com um financeiro que muda a toda hora. Em todos esses casos, o modelo não vai saber o que mudou, a não ser que alguém crie uma base de conhecimento e a mantenha atualizada, o que é caro.

Retreinar, então? Esse é o caminho que põe o dado nos pesos. Só que é caro e demorado. E há uma armadilha: um modelo treinado em 2026 está com a memória de 2025, e em 2027 continua com a memória de 2025. Quando o novo treino terminar, ele congela de novo.

Quanto mais o dado muda, menos dá para confiar só no treino. Precisamos levar a informação até o modelo na hora da pergunta.

## Prompt com fontes
A frase-âncora: no prompt, você diz onde procurar.

Imagine pedir a um estagiário: não me responda de cabeça, vá ler estas três revistas e volte com a resposta.

É assim que o professor costuma resolver quando precisa de algo atual. Para saber as novidades de tecnologia, ele indica no prompt as fontes, como as revistas digitais do MIT e de Stanford. O modelo busca na internet e responde com base nisso.

Isso resolve o problema sem retreinar nada, e na hora.

O limite é que quem escreve o pedido é você, a cada vez, e é você quem precisa saber onde procurar.

No prompt, você diz onde procurar. E quando isso precisa acontecer sozinho, entra o RAG.

## RAG
A frase-âncora: o RAG busca antes e coloca no prompt.

RAG é a sigla em inglês para geração aumentada por recuperação. Em vez do estagiário de antes, pense num assistente que já tem a rotina montada: chegou a pergunta, ele vai ao arquivo, separa os documentos atualizados e coloca tudo sobre a sua mesa antes de você responder.

A ordem importa. Primeiro, a pergunta dispara a busca. Depois, os documentos entram no meio do prompt. Só então o modelo gera, fazendo o que aprendeu no treino, agora guiado por aquele texto. O RAG faz, em uma arquitetura já organizada, algo parecido com o que o professor faz à mão.

Isso resolve o dado atual sem mudar pesos, vieses nem vetores.

E onde quebra? No que ele não muda. É a analogia do livro. Alguém pergunta algo que você não sabe. Você abre um livro, acha o trecho e responde certo. Você sabia? Não. E talvez continue sem saber: você só leu. Tire o documento na próxima pergunta, e o modelo volta para o que estava congelado.

O RAG busca antes e coloca no prompt. E esse problema, avisa o professor, continua em aberto.

## Comparando os vizinhos
Vamos colocar lado a lado, porque é aqui que a confusão costuma aparecer.

A diferença entre contexto e memória é o alcance. O contexto vive naquela janela e some com ela. A memória atravessa conversas, mas guarda só algumas anotações.

A diferença entre memória e RAG é o que se guarda e para quê. A memória anota coisas sobre você. O RAG busca documentos sobre o assunto da pergunta.

A diferença entre RAG e retreino é a mais importante. O retreino põe o dado nos pesos, é caro e congela de novo. O RAG traz o dado atual na hora da pergunta, mas não ensina nada ao modelo.

E a diferença entre o RAG e o raciocínio híbrido da aula passada? Os dois buscam ajuda fora do modelo, sem mudar os pesos. O raciocínio híbrido delega o cálculo, porque o modelo erra a conta. O RAG traz o fato, porque o modelo não conhece a novidade. Um cobre o que ele não sabe fazer. O outro, o que ele não sabe.

## Revisão
Agora as frases-âncora, em sequência.

Terminou o treino, o conhecimento congelou.

Conversar usa o modelo, não treina o modelo.

Contexto é o que está na mesa agora.

Memória é um caderninho, não um aprendizado.

Quanto mais o dado muda, menos dá para confiar só no treino.

No prompt, você diz onde procurar.

O RAG busca antes e coloca no prompt.

Agora quatro perguntas. Tente responder antes de eu falar.

Primeira pergunta: se todas as conversas rodassem na mesma máquina, o modelo passaria a aprender com elas?

[pausa 5]

Resposta: não. Instâncias separadas são só um obstáculo. O outro é que ajustar os pesos a cada conversa seria caro demais, e conversar não é treinar.

Segunda pergunta: você abre uma conversa nova e o modelo já sabe seu nome. Foi o contexto ou a memória?

[pausa 5]

Resposta: a memória. O contexto ficou na conversa anterior. O nome estava anotado à parte, no caderninho, sem mudar nenhum peso.

Terceira pergunta: um escritório precisa de respostas sobre julgamentos publicados ontem. Por que o fine-tuning toda semana não é a melhor saída?

[pausa 5]

Resposta: porque é caro e demorado, e o modelo congela de novo a cada versão. O RAG leva o documento atual até o modelo na hora da pergunta.

Quarta pergunta: com o RAG ligado, o assistente acerta uma pergunta. Você desliga o RAG, abre outra conversa e repete. O que esperar?

[pausa 5]

Resposta: ele volta a não saber e pode até inventar. O modelo só leu aquele trecho naquela consulta. Nada mudou por dentro.

É isso. Da próxima vez que um modelo responder algo recente com muita segurança, pergunte: de onde veio essa informação?
