# Arquitetura RAG — resumo

## O que é RAG
RAG (Retrieval-Augmented Generation; na aula o professor disse "Alignment", mas o termo correto é *Augmented*) é uma estratégia que liga uma LLM a uma fonte externa de informação. O objetivo é obter respostas mais atualizadas, mais realistas e mais controláveis. Em vez de a LLM tentar lembrar tudo apenas com o que ficou nos pesos durante o treino, ela consulta informação nova antes de responder.

## O problema: a LLM pura fica defasada
Ao treinar uma LLM, jogam-se tokens de livros, artigos e internet na máquina. Quando o treino termina, o modelo já está defasado: tudo que chega depois não está nele. Mantê-lo sempre atualizado exigiria retreinar o tempo todo, um trabalho contínuo e extremamente caro, na prática inviável.

O exemplo do professor é o ChatGPT no começo: perguntado sobre o resultado do jogo do Palmeiras "de ontem", ele tinha a "foto" de um ou dois anos antes, quando foi treinado, e tendia a inventar ou dar uma resposta confusa para sair da situação. Uma LLM pura não acessa dados em tempo real, não tem memória viva, não aprende conforme as coisas acontecem e pode alucinar diante de uma pergunta específica do momento.

Hoje, versões pagas do ChatGPT já têm um mecanismo desse tipo: ao receber uma pergunta muito nova, o modelo busca na web. Ele continua sem saber o que veio depois do treino, mas consegue buscar dados em tempo real.

## A técnica
RAG combina um modelo de geração (tipo ChatGPT) com um mecanismo de busca em uma base de conhecimento externa. A geração continua sendo palavra a palavra, com base em tokens, mas soma-se a ela uma busca por similaridade, que é diferente de uma busca comum. O valor do RAG não está em fazer a LLM aprender em tempo real: os pesos não mudam, e ela responde com base em contexto recuperado em tempo real.

## Fontes de conhecimento
A web é uma fonte possível, mas dá para "nichar" e restringir a fontes específicas:
- documentos da empresa, por exemplo em um bucket S3;
- APIs e ferramentas internas;
- bases de artigos científicos e de faculdades;
- e-mails, chats, relatórios e ferramentas de mensagens como o Teams;
- FAQ de atendimento, que muda toda hora (uma reclamação nova causada por um deploy errado já pode ser encontrada pela busca).

Exemplo: se o modelo foi treinado no mês passado e você faz o fechamento contábil deste mês, ele não sabe nada sobre o fechamento; ligado aos documentos da empresa, consegue responder.

## Camada 1: query
O professor simplifica a arquitetura em cinco camadas. A primeira é a entrada do usuário, a pergunta textual, como "quais são as políticas de backup da empresa?" ou "o que diz a cláusula 7 do contrato de prestação de serviços?". Sozinha, ela não tem contexto suficiente, principalmente para fatos recentes que não estão no treinamento. Precisa ser enriquecida com a base de conhecimento antes da geração.

## Camada 2: conversão da query em embedding
Retomando embeddings: é a representação vetorial de uma palavra ou contexto. Os tokens da pergunta viram um vetor numérico, que representa o significado da frase mais do que as palavras individuais. Por isso a busca não é por similaridade de palavras (como o campo de busca que sugere conforme se digita, ou a busca de filmes na Netflix), e sim por proximidade de significado. Exemplo: "acesso remoto seguro" pode ficar próximo de "VPN corporativa", mesmo sem compartilhar nenhuma palavra.

## Camada 3: busca semântica na base vetorial (retriever)
O retriever usa o vetor da query para procurar na base vetorial de documentos. Os documentos já foram preparados antes: quebrados em pedaços e transformados em vetores. Há embeddings dos dois lados, e o cálculo de similaridade traz os trechos mais próximos da query. Não é busca por palavra-chave, é busca por significado, representado por um embedding.

## Camada 4: construção do prompt
Com os trechos recuperados e a pergunta original, monta-se o prompt. No exemplo, a busca devolve frases como "existe o uso de VPN", "o acesso deve ser registrado por log" e "os dispositivos móveis precisam estar atualizados". Tudo isso é juntado à base do prompt antes de a LLM trabalhar. A qualidade da resposta final depende diretamente da qualidade e da relevância desse contexto.

## Camada 5: geração da resposta
Com o prompt mais as evidências, a LLM gera a resposta de forma contextualizada. Ela buscou e organizou as informações e responde com base em trechos reais, o que reduz a chance de invenção, principalmente quando a base é recente e confiável.

## Custo e controle: restringir as fontes
RAG equilibra custo, atualização e previsibilidade sem exigir retreinamento constante. Quando precisa de informação precisa e atual (por exemplo, os lançamentos da semana), o professor "nicha" a busca ao pedir no prompt: buscar apenas em determinada revista digital, faculdade ou site, e não usar outras fontes. Se deixar aberto, o ChatGPT sai buscando em muitos lugares. Restringir reduz o ruído e o risco de falha ou alucinação. Em sistemas reais, controlar de onde vem o contexto costuma ser tão importante quanto escolher a LLM que vai gerar a resposta.
