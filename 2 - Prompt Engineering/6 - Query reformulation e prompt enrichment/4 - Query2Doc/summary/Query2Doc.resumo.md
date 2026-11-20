# Query2Doc

## Técnicas para buscar dados externos

Depois do fluxo básico, o professor passa às técnicas de enriquecimento. Elas têm papel importante quando a resposta depende de dados externos, como um banco de dados.

## A ideia do Query2Doc

No **Query2Doc** (Query-to-Doc), a instrução do usuário não vai direto para a busca. Primeiro, um LLM gera um texto que explica melhor o que a consulta quer dizer, uma espécie de **mini-documento** ou pequeno artigo sobre o tema da pergunta. Esse texto **expande a query** antes da busca e traz mais informação sobre o assunto, o que permite recuperar dados mais precisos.

## Ligação com a busca léxica

O Query2Doc tem relação forte com a **busca léxica**, feita por algoritmos como o **BM25** e por ferramentas como **Elastic** e **Apache Lucene**. Esses mecanismos ranqueiam os documentos pelas **palavras-chave e termos que mais aparecem**. Por isso, quanto mais termos relacionados a consulta tiver, maior a chance de achar documentos relevantes.

## Como montar a consulta expandida

Para gerar o mini-documento, pode-se usar **Few-Shot Prompting**: dar exemplos de perguntas e mostrar como gerar um mini-documento objetivo sobre cada uma. Depois, o texto gerado é **concatenado à pergunta** do usuário (por exemplo, um campo `question` com a pergunta seguido das informações geradas pelo modelo). Ao buscar no Elastic, o mecanismo passa a considerar também todas as palavras do mini-documento, e não só a pergunta original.

## Cuidados com o texto gerado

O prompt que gera o mini-documento precisa ser bem ajustado. O texto deve ser **o mais neutro possível**, porque **não é a resposta final**: serve só para trazer informações que facilitem a busca. Nessa etapa, o modelo não é responsável pela resposta.

O Query2Doc, como apresentado, mira a busca léxica, e não a busca semântica baseada em vetores. O professor diz que a busca vetorial virá mais adiante, com técnicas parecidas.

## Da busca à resposta final

A busca enriquecida devolve vários **trechos de documentos**, cada vez mais relevantes para a pergunta. Na hora da resposta, o prompt traz a **pergunta original** do usuário e um **context** com esses trechos, e a IA responde com base nesse contexto. É uma forma de estruturar melhor o prompt.

## Diferença em relação ao RAG

O processo é muito parecido com as técnicas de **RAG**, e a IA também gera a resposta final com a pergunta e o `context`. Segundo o professor, a diferença é onde está a "grande sacada": no Query2Doc, ela não está em a IA gerar a resposta final, e sim em a IA **gerar conteúdo adicional que melhore a busca**. Só depois, com os documentos mais relevantes recuperados, vem a resposta.
