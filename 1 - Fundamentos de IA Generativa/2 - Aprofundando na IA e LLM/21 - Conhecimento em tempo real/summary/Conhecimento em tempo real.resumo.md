# Conhecimento em tempo real — resumo

## O último ponto de atenção: conhecimento

O professor deixou para o fim o que considera a dificuldade mais importante das LLMs: **conhecimento**. Fora as brincadeiras, a IA generativa é muito usada como **base de conhecimento**, para buscar informação, responder perguntas e resolver problemas do dia a dia. É justamente nisso que a limitação aparece.

## O conhecimento fica congelado

Depois da estrutura de Transformers, do pré-treinamento e do fine-tuning, o treinamento acaba e o modelo **fica congelado**. Não há evolução desse conhecimento depois do treino: ele **não tem memória ativa e não atualiza sua base de treinamento automaticamente**.

Se você perguntar se o Palmeiras ganhou ontem, ele não vai saber. Uma notícia que está saindo agora também não é algo que ele foi treinado para responder. Pior: diante dessa pergunta, ele **pode inventar ou alucinar** só para dar uma resposta.

## As interações individuais não ensinam o modelo

É um **mito** que o GPT aprende com todo mundo que o usa e forma uma rede de conhecimento. O GPT-4, por exemplo, **não aprende com as interações individuais**.

## Instâncias diferentes não se comunicam

O GPT que você usa possivelmente não é o mesmo que outra pessoa usa. O processamento acontece em GPUs, e dificilmente duas pessoas estão no mesmo servidor. As **instâncias não se comunicam**: o que acontece na sua conversa não chega à conversa de outra pessoa.

## Guardar não é treinar

O provedor pode guardar as conversas em um banco de dados para usar depois, mas **teria de treinar o modelo depois** para isso fazer efeito. Enquanto você conversa, o modelo **não atualiza o que tem por dentro nem ajusta pesos**. Atualizar o modelo significa refazer toda aquela conta estatística, e fazer isso a cada conversa seria **extremamente caro**, não daria tempo e possivelmente nem funcionaria.

## Contexto de conversa explica a "lembrança"

Às vezes parece que o modelo aprende: o seu Gemini sabe seu nome, o seu Perplexity sabe que você prefere verde a azul. Isso acontece porque há **contexto de conversa**. Ao abrir uma janela, o modelo guarda o que foi dito nela, porque precisa retroalimentar aquele conteúdo para continuar respondendo.

Esse espaço tem limite. Quando você pergunta demais na mesma janela, a conversa estoura e é preciso abrir outra. Ao mudar de conversa, o contexto se perde.

## Memória ativada: o caderninho

Mesmo assim, às vezes o modelo sabe seu nome em uma conversa nova. O exemplo do professor é a **memória ativada** do GPT-4 na conta paga. Ela guarda informações importantes, como seu nome, se você gosta de conteúdo mais profundo ou de exemplos práticos, e os assuntos de que mais fala, para melhorar a experiência.

Essa informação **não reprograma pesos e vieses**. É algo que **acompanha a LLM, e não um retreinamento**: ele não aprendeu, só anotou em um **caderninho** para buscar quando precisar.

## Onde o problema pesa mais

Fica mais difícil para o modelo em tudo o que muda o tempo todo:

- **atendimento médico**, com novidades chegando sempre;
- **jurídico**, em que cada julgamento traz informação nova;
- **busca de produto e preço**;
- **dados de uma empresa**, como o financeiro, que muda a toda hora.

O modelo não vai saber disso, a não ser que você crie uma base de conhecimento (KB) e a atualize, o que é caro.

## Retreinar é caro e demorado

Se um modelo foi treinado em 2026, ele está com a memória de 2025. Em 2027, continua com a memória de 2025, **a não ser que seja retreinado**, o que é caro e demorado.

## Primeiro complemento: prompt com fontes

Quando precisa de informação atualizada, o professor costuma resolver **por prompt, não por RAG**. Para saber o que está acontecendo em tecnologia, ele pede ao modelo que busque em fontes indicadas, como as revistas digitais do MIT e de Stanford, e passa toda a base em que quer a busca. O modelo busca na internet, que é uma base de dados importante, e responde com base nisso.

## Segundo complemento: RAG

O **RAG** faz algo parecido, mas em uma **arquitetura já organizada**. Quando você faz a pergunta, ele busca documentos atualizados e os **coloca no meio do seu prompt**. A partir daí, o modelo faz o que já está acostumado a fazer desde o treinamento, agora com o prompt guiando o caminho.

O generativo **não muda pesos, vieses nem vetores**, mas tem a informação que direciona para onde você quer chegar, e por isso fica mais fácil chegar ao resultado.

## A analogia do livro

É como uma pessoa que sabe ler e não conhece a resposta do que você perguntou. Ela pega um livro, encontra o trecho e passa a resposta para você. Ela **não sabia antes e talvez continue sem saber: só leu**.

## Um problema ainda em aberto

Esse problema é muito conhecido e ainda não foi resolvido. Ao usar sua IA, pense em como vai trabalhar com dados mais atualizados, normalmente com o **prompt** ou com estratégias como o **RAG**.
