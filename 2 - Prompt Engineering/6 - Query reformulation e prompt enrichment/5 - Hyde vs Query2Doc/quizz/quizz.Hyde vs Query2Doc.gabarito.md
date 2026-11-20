# Gabarito — Hyde vs Query2Doc

## 1. O que o prompt de HyDE mostra sobre a técnica
**Correta: B**
**Por quê:** O professor diz que, no HyDE, "já estamos pedindo diretamente uma resposta", com informações diretas, mesmo que não sejam 100% corretas. Já o prompt de Query2Doc pede um texto informativo e neutro e proíbe a resposta direta.
- **A:** O documento hipotético pode conter erros e não entra na resposta mostrada ao usuário, que vem dos trechos do banco.
- **C:** O texto neutro é o do Query2Doc. A diferença central da aula é justamente o estilo: neutro × resposta hipotética.
- **D:** O documento serve para melhorar a busca no banco vetorial, e não para substituí-la.
**Conceito:** HyDE — texto com cara de resposta real

## 2. Por que fatos errados no documento hipotético não comprometem a resposta
**Correta: D**
**Por quê:** O documento hipotético serve apenas para gerar embeddings e melhorar a busca. A resposta final é baseada nos trechos recuperados do banco, que é a fonte da verdade, e não no documento hipotético.
- **A:** O modelo da resposta final nem recebe o documento hipotético. Recebe a pergunta e os trechos.
- **B:** A aula admite que o documento pode conter informações incorretas. A segurança vem de ele não ser usado na resposta.
- **C:** A aula não diz que a vetorização apaga fatos. O documento não compromete a resposta porque não entra nela.
**Conceito:** documento "fake" — banco como fonte da verdade

## 3. Incluir o documento hipotético no contexto da resposta
**Correta: A**
**Por quê:** O professor diz que, na resposta final, o documento hipotético não é usado, porque contém dados hipotéticos e não necessariamente corretos. O prompt final deve ter a pergunta original e os trechos do banco, que é a fonte da verdade.
- **B:** A busca já aconteceu antes. Incluir o documento na resposta não muda a precisão da busca, e sim o que chega ao usuário.
- **C:** Nada garante que o modelo ignore o documento, então o risco não é baixo. Por isso a aula o deixa de fora da resposta final.
- **D:** O documento do HyDE tem cara de resposta, e não de texto neutro. O risco é o conteúdo errado, e não o tom.
**Conceito:** documento hipotético fora da resposta final

## 4. Base no Elastic com BM25, sem mudar a infraestrutura
**Correta: C**
**Por quê:** O professor diz que o Query2Doc surgiu para quem já usa BM25 ou Elastic e quer enriquecer as queries. O vocabulário expandido (sinônimos, termos alternativos) favorece o ranqueamento de palavras da busca léxica.
- **A:** O HyDE é voltado à busca semântica com embeddings. A aula separa as duas categorias.
- **B:** O HyDE depende de um banco vetorial para cruzar os vetores. Ele não dispensa esse banco.
- **D:** O mini-artigo do Query2Doc é neutro e não deve responder à pergunta.
**Conceito:** quando usar Query2Doc — busca léxica

## 5. pgVector e perguntas curtas sem exemplos
**Correta: B**
**Por quê:** O HyDE surgiu para quem usa bancos vetoriais e precisa melhorar o Dense Retrieval em cenários zero-shot. A resposta hipotética acrescenta contexto que a pergunta curta não tem, e o vetor resultante fica semanticamente mais próximo dos trechos relevantes.
- **A:** Repetir palavras-chave para o ranqueamento descreve a lógica léxica do Query2Doc, e não o HyDE.
- **C:** O HyDE não fornece exemplos few-shot ao banco. O cenário é justamente sem exemplos.
- **D:** A consulta ao pgVector continua. O documento hipotético só melhora essa busca.
**Conceito:** quando usar HyDE — banco vetorial e zero-shot

## 6. Por que o HyDE serve ao cenário zero-shot
**Correta: A**
**Por quê:** O professor explica que, num sistema real, em geral não há como fornecer exemplos ou usar few-shot, então a consulta precisa ser densa o bastante para recuperar informação relevante a partir da pergunta. O documento hipotético acrescenta o contexto que a pergunta sozinha não tem.
- **B:** O documento hipotético serve para a busca. Ele não orienta o formato da resposta nem é mostrado ao usuário.
- **C:** A indexação do banco não depende dos exemplos. O zero-shot se refere à recuperação a partir da pergunta.
- **D:** O HyDE já parte da busca vetorial (Dense Retrieval). Não há BM25 sendo substituído.
**Conceito:** Dense Retrieval zero-shot

## 7. Query2Doc com embeddings e banco vetorial
**Correta: C**
**Por quê:** O professor diz que é possível usar embeddings com o Query2Doc, mas que, nesse caso, a abordagem tende a se aproximar do estilo do HyDE.
- **A:** A aula diz que é possível, e não que deixa de funcionar.
- **B:** O texto continua neutro. O que se aproxima do HyDE é o tipo de busca, e não o texto virar uma resposta.
- **D:** A aula não diz que embeddings expandem o vocabulário nem que o mini-artigo fica desnecessário.
**Conceito:** Query2Doc com embeddings se aproxima do HyDE

## 8. Afirmação INCORRETA sobre Query2Doc × HyDE
**Correta: D**
**Por quê:** O professor diz que a grande diferença entre as duas técnicas é justamente o estilo de texto pedido ao LLM: no Query2Doc, uma descrição neutra; no HyDE, uma resposta hipotética.
- **A:** Correta. O prompt de exemplo pede um texto informativo e neutro e proíbe a resposta direta.
- **B:** Correta. O prompt de HyDE pede um texto que pareça um documento real, com fatos plausíveis, mesmo hipotéticos.
- **C:** Correta. Nas duas técnicas, a resposta final vem do contexto recuperado na busca.
**Conceito:** diferença central — estilo do texto gerado

## 9. Por que o documento sobre Go melhora a recuperação
**Correta: A**
**Por quê:** O documento acrescenta termos e contexto (documentação, versões, APIs, biblioteca padrão) que a pergunta genérica não tem. Mesmo com imprecisões, isso faz a busca trazer os chunks com maior proximidade semântica do que o usuário procura.
- **B:** O banco não confere fatos. Ele devolve os trechos mais próximos semanticamente.
- **C:** O critério é a proximidade semântica, e não a quantidade de vetores.
- **D:** Ranquear por termos repetidos é a lógica léxica do Query2Doc. No HyDE, a busca é vetorial, e o ganho vem da proximidade semântica.
**Conceito:** contexto adicional aproxima a busca

## 10. De onde vem o vetor da busca
**Correta: C**
**Por quê:** No passo a passo da aula, o documento hipotético é concatenado à query original e só então são gerados os embeddings, que representam documento e pergunta em formato vetorial e são cruzados com os vetores do banco.
- **A:** O documento é uma resposta hipotética e não necessariamente reproduz a pergunta. A aula concatena os dois antes de gerar os embeddings.
- **B:** O documento hipotético é usado na busca, e não na resposta final.
- **D:** Não há dois vetores cruzados em separado. Documento e pergunta são concatenados e viram embeddings juntos.
**Conceito:** fluxo do HyDE — concatenar e gerar embeddings
