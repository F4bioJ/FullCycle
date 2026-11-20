# Quizz — Query2Doc

**Capítulo:** 6 - Query reformulation e prompt enrichment · **Aula:** 4
**Base:** material da aula

---

## 1. Uma base de artigos indexada com BM25 fala em "eager loading" e "carregamento antecipado". O usuário pergunta "como resolver o problema N+1 no ORM?", e a busca com a pergunta original volta fraca. Como o Query2Doc ajuda nesse caso?
- A) Converte a pergunta em vetores, e a busca passa a comparar o significado dela com o dos artigos.
- B) Gera a resposta completa, e a consulta ao índice passa a servir para confirmar o que o modelo escreveu.
- C) O mini-documento sobre o tema tende a trazer termos como esses, aumentando a coincidência com os artigos.
- D) O LLM que gera o mini-documento consulta o índice por conta própria e escolhe os artigos mais úteis.

## 2. Ao implementar o Query2Doc, um dev usa o prompt "responda à pergunta do usuário em um parágrafo" e concatena essa resposta à query antes da busca. Pelo que a aula recomenda, o que está errado?
- A) O texto deveria ser neutro e informativo: ele não é a resposta, serve para trazer termos à busca.
- B) Nada: quanto mais o texto se parecer com a resposta, mais termos certos o BM25 vai encontrar.
- C) A resposta deveria ir direto ao usuário, porque com ela pronta a busca deixa de ser necessária.
- D) Um parágrafo é curto demais: o mini-documento precisa ter o tamanho de um artigo completo.

## 3. Qual sequência descreve o fluxo do Query2Doc apresentado na aula?
- A) Buscar com a pergunta original, gerar um mini-documento com os trechos achados e entregá-lo como resposta.
- B) Gerar o mini-documento, trocá-lo pela pergunta original e responder com base nesse texto gerado.
- C) Gerar o mini-documento, entregá-lo como resposta e buscar trechos quando o usuário pedir mais detalhes.
- D) Gerar o mini-documento, juntá-lo à pergunta, buscar os trechos e responder com pergunta e contexto.

## 4. O professor diz que o Query2Doc é muito parecido com RAG. Qual é a diferença que ele destaca?
- A) No Query2Doc, a resposta final é gerada sem os trechos recuperados, a partir da pergunta enriquecida.
- B) No Query2Doc, a função principal da IA é gerar conteúdo que melhore a busca, e não a resposta final.
- C) No Query2Doc, a busca é vetorial, enquanto no RAG ela é léxica, feita por ranqueamento de termos.
- D) No Query2Doc, a busca no banco acontece depois da resposta, para conferir o que o modelo escreveu.

## 5. Sobre o Query2Doc, qual afirmação está INCORRETA?
- A) O mini-documento é concatenado à pergunta original antes de a consulta ir ao mecanismo de busca.
- B) O Few-Shot Prompting pode mostrar ao modelo como gerar um mini-documento objetivo sobre o tema.
- C) Como apresentada na aula, a técnica foi pensada principalmente para a busca vetorial por embeddings.
- D) O prompt que gera o mini-documento precisa ser bem ajustado para que o texto ajude a busca.
