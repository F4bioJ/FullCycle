# Arquitetura RAG

## O problema que o RAG resolve

RAG combina uma LLM com uma fonte externa de conhecimento para reduzir a dependência exclusiva do que ficou armazenado nos pesos do modelo. Uma LLM pura responde com base no que aprendeu no treinamento e, por isso, nasce defasada assim que o mundo muda. Atualizar o modelo por novo treinamento contínuo é caro e operacionalmente inviável em muitos cenários. A consequência prática é simples: sem recuperação externa, perguntas sobre fatos recentes ou dados internos da empresa tendem a gerar lacunas ou alucinações.

## Fonte externa de conhecimento

A fonte externa pode ser a web, mas o ganho mais valioso costuma aparecer quando ela é restrita a bases confiáveis e específicas. Documentos corporativos em S3, APIs internas, e-mails, chats, relatórios, FAQs de atendimento e bases acadêmicas são exemplos de repositórios que podem alimentar a recuperação. Isso permite responder com informação atualizada sem alterar os pesos da LLM. Também aumenta controle, porque a resposta passa a depender de fontes escolhidas pela aplicação, e não de um universo aberto e imprevisível.

## Camada 1: query do usuário

A primeira camada do pipeline é a query, isto é, a pergunta textual enviada pelo usuário. Sozinha, essa entrada ainda não carrega o contexto factual necessário para responder perguntas recentes ou específicas de um domínio. Por isso, a query funciona como ponto de partida da recuperação, não como contexto suficiente para a geração final. Perguntas como “quais são as políticas de backup da empresa?” ou “o que diz a cláusula 7 do contrato?” exigem enriquecimento antes de chegar à LLM.

## Camada 2: conversão da query em embedding

Retomando embeddings, a query deixa de ser tratada apenas como texto literal e passa a ser representada como vetor numérico. Esse vetor captura o significado da frase e viabiliza comparação semântica com a base indexada. O objetivo não é procurar coincidência exata de palavras, mas proximidade de sentido. Por isso, uma consulta como “acesso remoto seguro” pode recuperar conteúdo sobre “VPN corporativa” mesmo sem compartilhar os mesmos termos.

## Camada 3: retriever e busca semântica

O retriever é o componente que usa o embedding da query para procurar, em uma base vetorial, os trechos mais semanticamente próximos. Para isso funcionar, os documentos já precisam ter sido previamente quebrados em partes e convertidos em embeddings. A recuperação compara vetores da consulta e dos trechos indexados e retorna os fragmentos mais relevantes. Esse passo substitui a lógica de palavra-chave por uma lógica de significado, o que melhora a recuperação em linguagem natural real.

## Camada 4: construção do prompt com trechos recuperados

Depois da recuperação, a aplicação monta um novo prompt contendo a pergunta original e os trechos encontrados. Esse é o ponto de integração entre busca e geração: a LLM não responde só com a memória do treinamento, mas com evidências recuperadas imediatamente antes da inferência. Se os trechos retornados incluem regras como uso obrigatório de VPN, registro por log e atualização de dispositivos móveis, essas informações entram no contexto fornecido ao modelo. A qualidade da resposta final depende diretamente da qualidade e da relevância desse contexto montado.

## Camada 5: geração da resposta

Com o prompt enriquecido, a LLM gera a resposta final de forma mais contextualizada. Ela continua sendo um modelo gerador, mas agora opera sobre evidências externas recuperadas para aquela pergunta específica. Isso reduz a chance de invenção e melhora aderência factual, especialmente quando a base consultada é recente e confiável. O valor do RAG não está em fazer a LLM “aprender em tempo real”, e sim em fazê-la responder com base em contexto recuperado em tempo real.

## Custo e controle

RAG é uma estratégia de arquitetura para equilibrar custo, atualização e previsibilidade sem recorrer a retreinamento constante. Retomando prompt engineering, o controle aumenta quando a recuperação é delimitada a fontes específicas, em vez de deixar a busca aberta na internet inteira. Restringir a consulta a sites, revistas, faculdades ou bases internas reduz ruído e melhora a confiabilidade operacional. Em sistemas reais, controlar de onde vem o contexto costuma ser tão importante quanto escolher qual LLM vai gerar a resposta.
