# Gabarito — Query2Doc

## 1. Pergunta sobre N+1 numa base que usa outros termos
**Correta: C**
**Por quê:** A busca léxica (BM25, Elastic, Lucene) ranqueia os documentos pelas palavras-chave e termos que mais aparecem. Se a pergunta usa termos diferentes dos artigos, a busca volta fraca. O mini-documento sobre o tema, concatenado à pergunta, tende a trazer termos relacionados (como os usados nos artigos), e a busca passa a considerá-los.
- **A:** O professor diz que o Query2Doc ainda não é busca semântica baseada em vetores. Ele mira a busca léxica.
- **B:** O mini-documento não é a resposta final, e por isso deve ser neutro. A resposta vem depois, a partir dos trechos recuperados.
- **D:** O modelo só gera o mini-documento. Quem consulta o índice é o sistema, com a pergunta concatenada ao texto gerado.
**Conceito:** Query2Doc + busca léxica — mais termos na consulta

## 2. Prompt que pede a resposta no lugar do mini-documento
**Correta: A**
**Por quê:** O professor diz que o texto gerado deve ser o mais neutro possível porque não representa a resposta final. O objetivo é trazer informações relevantes que facilitem a busca, e não responder à pergunta.
- **B:** A aula liga o ganho do BM25 à riqueza de termos do texto neutro e explicativo, e não ao texto ser parecido com uma resposta.
- **C:** No Query2Doc, a resposta final vem dos trechos recuperados. A busca continua necessária.
- **D:** A aula fala em um mini-documento ou pequeno artigo. O problema do prompt é pedir uma resposta, e não o tamanho.
**Conceito:** mini-documento neutro — não é a resposta

## 3. Sequência do fluxo do Query2Doc
**Correta: D**
**Por quê:** O LLM gera o mini-documento, que é concatenado à pergunta. A consulta expandida vai à busca, que devolve trechos de documentos. A resposta final é gerada com a pergunta original mais um `context` com esses trechos.
- **A:** Inverte a ordem: a expansão vem antes da busca. E o mini-documento não é a resposta.
- **B:** O mini-documento é somado à pergunta (não a substitui), e a resposta usa os trechos recuperados, não só o texto gerado.
- **C:** O mini-documento não é entregue como resposta. A busca faz parte do fluxo normal.
**Conceito:** fluxo do Query2Doc

## 4. Diferença entre Query2Doc e RAG
**Correta: B**
**Por quê:** O professor diz que o processo é muito parecido com RAG. A grande diferença é que, aqui, a principal função da IA não é gerar a resposta final, e sim gerar conteúdo adicional que melhore a busca.
- **A:** A resposta final usa, sim, os trechos recuperados, no `context`, junto da pergunta original.
- **C:** O Query2Doc foi apresentado ligado à busca léxica, e não à vetorial.
- **D:** Inverte a ordem: a busca vem antes da resposta e serve para recuperar os trechos do `context`, e não para conferir o que o modelo escreveu.
**Conceito:** Query2Doc × RAG — papel da IA

## 5. Afirmação INCORRETA sobre o Query2Doc
**Correta: C**
**Por quê:** O professor diz que o Query2Doc, a princípio, gera textos neutros para facilitar uma busca léxica, e que ainda não se trata de busca semântica baseada em vetores.
- **A:** Correta. O texto gerado é concatenado à pergunta (por exemplo, em `question` mais as informações adicionais) antes da busca.
- **B:** Correta. A aula cita o Few-Shot Prompting com exemplos de perguntas e de mini-documentos objetivos.
- **D:** Correta. O professor diz que é preciso ajustar bem o prompt que gera o documento.
**Conceito:** Query2Doc é voltado à busca léxica
