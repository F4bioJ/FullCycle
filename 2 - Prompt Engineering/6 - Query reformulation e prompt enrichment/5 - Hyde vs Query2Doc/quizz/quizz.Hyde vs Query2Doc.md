# Quizz — Hyde vs Query2Doc

**Capítulo:** 6 - Query reformulation e prompt enrichment · **Aula:** 5
**Base:** material da aula

---

## 1. O prompt de HyDE da aula pede um parágrafo que responda claramente à pergunta, com cara de documento real e sem "talvez" ou "possivelmente". O que esse pedido mostra sobre a técnica?
- A) Que o texto precisa estar correto, porque ele será a base da resposta mostrada ao usuário.
- B) Que se quer uma resposta direta, mesmo hipotética, ao contrário do Query2Doc, que evita responder.
- C) Que se quer o mesmo texto neutro do Query2Doc, porém mais curto e com menos termos técnicos.
- D) Que, com um texto assertivo o bastante, a consulta ao banco vetorial deixa de ser necessária.

## 2. O documento gerado pelo HyDE pode conter fatos errados. Por que isso não compromete a resposta entregue ao usuário?
- A) O modelo da resposta final confere cada fato do documento hipotético e corrige os que estiverem errados.
- B) O prompt pede fatos plausíveis, o que torna os erros raros a ponto de não afetarem o resultado.
- C) Ao virar vetor, o documento perde os detalhes factuais e mantém o sentido geral da pergunta.
- D) O documento serve para a busca; a resposta usa os trechos recuperados do banco, que é a fonte da verdade.

## 3. Um time implementa o HyDE e, para aproveitar o documento hipotético, passa a incluí-lo no contexto da resposta final, junto dos trechos do banco. Qual o risco, pelo que a aula explica?
- A) Dados hipotéticos e possivelmente errados entram na resposta, que deveria vir da fonte da verdade.
- B) A busca vetorial fica menos precisa, porque o documento passa a ocupar o lugar dos trechos.
- C) É baixo, porque o modelo dá prioridade aos trechos do banco e ignora o documento gerado.
- D) A resposta fica neutra demais, como o mini-artigo do Query2Doc, e perde a cara de resposta.

## 4. Uma empresa já tem uma base indexada no Elastic com BM25 e quer melhorar a recuperação a partir das perguntas dos usuários, sem mudar a infraestrutura. Qual técnica combina melhor com esse cenário e por quê?
- A) HyDE, porque a resposta hipotética melhora o ranqueamento por termos tanto quanto a busca vetorial.
- B) HyDE, porque gerar embeddings da pergunta concatenada dispensa a necessidade de um banco vetorial.
- C) Query2Doc, porque o vocabulário expandido favorece o ranqueamento por termos da busca léxica.
- D) Query2Doc, porque o mini-artigo responde à pergunta e o BM25 se limita a confirmar essa resposta.

## 5. Um sistema guarda a documentação no pgVector e recebe perguntas curtas, como "o que é Go?", sem exemplos de apoio. Por que o HyDE é indicado aqui?
- A) Porque converte a pergunta em palavras-chave e as repete até o ranqueamento léxico achar os trechos.
- B) Porque gera uma resposta hipotética rica em contexto, que aproxima o vetor da consulta dos trechos relevantes.
- C) Porque fornece ao banco vetorial exemplos few-shot de perguntas e respostas sobre a linguagem Go.
- D) Porque substitui a consulta ao pgVector por uma resposta gerada diretamente pelo modelo.

## 6. Num chatbot aberto ao público, cada usuário manda só a própria pergunta, sem exemplos. Por que o professor liga o HyDE a esse cenário zero-shot?
- A) Sem exemplos, a consulta precisa ser densa por si, e o documento hipotético dá a ela o contexto que falta.
- B) Sem exemplos, o modelo não sabe o formato da resposta, e o documento hipotético serve de modelo a ele.
- C) Sem exemplos, o banco vetorial não consegue indexar, e o documento hipotético preenche esse índice.
- D) Sem exemplos, o BM25 não consegue ranquear, e o documento hipotético troca a busca léxica pela vetorial.

## 7. Uma equipe que usa Query2Doc passa a gerar embeddings da consulta expandida e a buscar num banco vetorial. Segundo o professor, como fica essa abordagem?
- A) Deixa de funcionar, porque o Query2Doc depende do ranqueamento por termos do BM25.
- B) Vira HyDE na hora, porque o mini-artigo neutro passa a ser tratado como uma resposta.
- C) É possível, mas o resultado tende a se aproximar do estilo usado no HyDE.
- D) Dispensa o mini-artigo, porque os embeddings já expandem o vocabulário da pergunta.

## 8. Sobre a comparação entre Query2Doc e HyDE, qual afirmação está INCORRETA?
- A) O prompt de Query2Doc pede um texto informativo e neutro, sem dar resposta direta à pergunta.
- B) O prompt de HyDE pede um texto que pareça uma resposta real, ainda que com dados hipotéticos.
- C) Nas duas técnicas, o texto gerado pelo LLM não é entregue ao usuário como resposta final.
- D) A principal diferença é o tamanho do texto: o Query2Doc pede um mini-artigo e o HyDE, um parágrafo.

## 9. No exemplo "o que é a linguagem Go?", o documento hipotético fala de documentação, versões, APIs e biblioteca padrão, mesmo com dados imprecisos. Por que isso melhora a recuperação?
- A) Esses termos e esse contexto, que a pergunta genérica não tem, aproximam a busca dos trechos relevantes.
- B) O banco vetorial compara cada fato do documento com os seus registros e descarta os incorretos.
- C) O documento maior gera mais vetores, e o banco devolve mais trechos, sem importar a proximidade.
- D) Os termos repetidos no documento sobem no ranqueamento de palavras e puxam os trechos que os citam.

## 10. No fluxo do HyDE apresentado na aula, de onde vem o vetor que é cruzado com os vetores do banco?
- A) Do documento hipotético isolado, porque ele já foi escrito a partir da pergunta e a contém.
- B) Da pergunta original isolada, porque o documento hipotético serve para a resposta final.
- C) Da concatenação do documento hipotético com a pergunta original, transformada em embeddings.
- D) Da pergunta e do documento em vetores separados, cruzados com o banco um de cada vez.
