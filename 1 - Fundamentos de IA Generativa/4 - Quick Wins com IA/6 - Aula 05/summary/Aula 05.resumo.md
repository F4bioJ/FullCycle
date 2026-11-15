# Aula 05 — resumo

## Do raciocínio à prática
A linha de raciocínio do professor é: o que preciso ter para abrir um novo chat sem receio? Agora o professor mostra como fazer parte disso, sem cobrir todos os documentos, começando por stack, libs e frameworks. Em um projeto dele, a pasta de docs tem uma subpasta de libs com a documentação de cada biblioteca usada, como Google API Client, LangChain, OpenAI, Pinecone e PyTest.

## Context7
O Context7 é como um repositório de documentação de quase tudo: linguagens e frameworks como Next, Nest, React, Go e GORM. Como não dá para ficar entrando nele e copiando tanta coisa, ele oferece um servidor MCP, pelo qual a própria IA consulta essa documentação.

## O que é MCP
MCP (Model Context Protocol) é um protocolo criado pela Anthropic que permite ao modelo consultar o mundo externo, por meio de ferramentas, resources e prompts. As ferramentas podem rodar localmente ou via HTTP. A IA tem os dados do seu treinamento; com MCP, pode acessar o que não tem, como dados da empresa, uma tabela de preços ou a documentação de algo. O curso terá aulas específicas sobre o tema.

## Configurar o servidor MCP
No Claude Code, o CLI que o professor mais tem usado, adiciona-se o servidor com o comando `claude mcp add`, e o Context7 passa a aparecer entre os servidores cadastrados. O comando exato foi prometido em uma nota no Notion. Daria para ter resultados parecidos de graça com o VS Code e o Gemini, e o MCP funciona da mesma forma pelo Cursor.

## Prompt para gerar a documentação das libs
O prompt pede que a IA analise o codebase, focando na pasta `src` e no `requirements.txt`, identifique as bibliotecas de terceiros, use o Context7 para buscar a documentação de cada uma e crie arquivos `.md` em `docs-libs`, como `langchain.md` e `pinecone.md`. Para forçar o uso do MCP, vale reforçar no prompt: "garanta que você utilizará o Context7 MCP". Esses reforços, e até usar letras maiúsculas, fazem diferença.

## Trabalhar em português
O professor escreve tudo em português, porque fala, escreve e lê mais rápido assim, e coloca isso como guideline ("escreva em português comigo"). Só o código e os comentários dentro dele saem em inglês. A documentação de frameworks pode vir em inglês, tanto faz.

## Edição automática e Plan Mode
No Claude Code, Shift+Tab alterna os modos. Com a edição automática ligada, ele planeja e já sai fazendo. No Plan Mode, ele entende o problema, diz como pretende resolver e só começa se você aceitar; senão, vocês iteram até chegar a um plano bom. O resumo do professor acrescenta que a escolha depende do risco da operação e da confiança no prompt. O erro de "overloaded" que apareceu na demonstração costuma ser problema na API da Anthropic.

## Não economizar tokens em desenvolvimento
Perguntado se português não gasta mais tokens, o professor separa as coisas: ele fala de desenvolvimento, não de prompts que a aplicação roda o tempo todo em produção. Em desenvolvimento, sua opinião é não se preocupar com isso, porque o maior problema hoje não é economizar tokens; o Gemini, por exemplo, tem janela de um milhão. Quanto mais se descreve o problema e mais documentação há, melhor o resultado. O importante é não usar o mesmo chat o tempo inteiro, porque aí se perde contexto.

## Quando o Context7 não basta
O Google ADK (Agent Development Kit) é atualizado com frequência, e o Context7 não consegue trazer a documentação atualizada dele nem de qualquer outro projeto cuja documentação esteja defasada. Outro exemplo é criar um servidor MCP no padrão Streamable HTTP: com ou sem IA, sofre-se do mesmo jeito, porque a documentação não é adequada e os dados não batem.

## Clonar o repositório oficial
Nesses casos, o professor clona o repositório oficial, na versão que está usando, e pede à IA, com um prompt simples, que descreva a necessidade do projeto, vasculhe o repositório e gere a documentação, os snippets e os pontos principais. A IA lê o código, entende e documenta. Pode parecer estranho clonar um repositório inteiro, mas faz muita diferença, porque documentação defasada sempre vai existir, e um modelo com janela de um milhão de tokens dá conta de ler tudo.

## Atualizar uma dependência
A mesma ideia serve para atualizar versões. No exemplo, o `package.json` mostra a lib do Model Context Protocol na 1.12.3, a última é a 1.17, e o professor espera que algo quebre. O pedido à IA é: entenda a diferença entre as versões, veja o que quebra no meu código, crie um plano de ação e, depois, crie um novo branch e faça a atualização.

## Firecrawl
Documentações como a do LangChain têm páginas e mais páginas, e a ferramenta de fetch da IA não vai ler tudo isso. O Firecrawl é uma ferramenta de scraping que entra no site e baixa as informações, e dá, segundo o professor, sem certeza do número, 500 créditos por dia. Configurado como servidor MCP, permite pedir: entre nessa página, navegue por todos os links e condense e organize a documentação. Ele percorre a árvore do site de forma recursiva, com recursos muito melhores que as ferramentas de fetch do Claude e do Cursor.

## Playwright como alternativa
Quando o Firecrawl não consegue, por exemplo em páginas que pedem autenticação, o professor indica o Playwright, sem mostrá-lo na aula. O resumo dele acrescenta o critério: usar a ferramenta menos complexa que acesse o conteúdo com confiabilidade. O objetivo da aula é mostrar possibilidades.
