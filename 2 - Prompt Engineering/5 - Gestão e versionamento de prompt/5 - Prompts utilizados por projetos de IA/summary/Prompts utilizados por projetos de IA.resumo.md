# Prompts utilizados por projetos de IA

## A outra perspectiva: prompts de aplicação

Depois dos prompts de produtividade, o professor passa à segunda perspectiva do capítulo: os prompts que as aplicações e os agentes que você desenvolve vão carregar. Não são prompts para você programar mais rápido, e sim parte do software.

Esses prompts são "ultracríticos", porque mudam o comportamento do sistema que vai para produção. Num workflow de desenvolvimento, se um prompt dá errado enquanto você programa, você pode parar, entender e corrigir. Quando o prompt vai para o ar, consumido por uma IA rodando em produção, "o buraco é mais embaixo". Por isso o nível de responsabilidade é muito maior do que com os prompts do dia a dia.

## Registry: o índice dos prompts

A primeira peça é um registro (registry) que contém todos os prompts da aplicação e as versões que serão usadas. Ele é, basicamente, um índice. O professor apresenta isso como uma abordagem que faz sentido e que está sendo muito usada hoje.

Os arquivos de prompt podem ficar no controle de versão do próprio projeto. Há também uma flexibilidade para que outras áreas que gerenciam a aplicação trabalhem com os prompts, assunto que ele promete retomar.

O registry pode ser gerenciado como o time quiser, em banco de dados, arquivos etc. O importante é que exista. Cada entrada traz o prompt, a versão, se ela está em produção e metadados, como o modelo que aquele prompt vai usar.

## Categorização segundo o projeto

Um dos pontos mais importantes é como organizar os prompts dentro do projeto. A categorização não é simples, porque depende do projeto. Exemplos:

- **Por agentes:** uma pasta para cada agente, com um ou mais prompts dele (`agente/nome-do-prompt`).
- **Por casos de uso:** um use case de pagamento (`payment`) com o prompt especializado que a aplicação injeta naquele fluxo.
- **Por componentes:** cada componente da aplicação com o seu prompt.
- **Por subdomínios**, com Domain Driven Design, ou **por feature**.

Qualquer uma serve, desde que a categorização tenha lógica, porque é a partir dela que o software faz as chamadas aos prompts.

## Semantic versioning

Os prompts precisam estar bem versionados, com semantic versioning (por exemplo, `v1.1.0`): major, minor e patch. O professor recomenda estudar semver para quem não conhece. No resumo dele, a lógica fica assim:

- **patch:** corrige um detalhe sem mudar a intenção central;
- **minor:** acrescenta ou ajusta comportamento de forma compatível;
- **major:** indica uma ruptura no contrato esperado.

## Arquivo do prompt: Markdown ou YAML

Cada prompt tem o seu arquivo. O `prompt.md` é muito comum e facilita a leitura, mas Markdown não tem um padrão, e uma aplicação precisa de padronização. Não é proibido usar Markdown, mas há formatos mais estruturados, como o `prompt.yml`. O YAML facilita a gestão do prompt e ajuda a seguir convenções como as que o pessoal da LangChain e do LangSmith (observabilidade) usa no gerenciamento de prompts. A regra do professor: se precisa de algo mais estruturado, use YAML; se não tem essa necessidade, Markdown também funciona. O importante é ter o arquivo do prompt.

## Metadados

O prompt também precisa de metadados, que definem, por exemplo:

- a entrada esperada;
- a saída pretendida;
- como testar o prompt;
- a versão;
- o modelo usado;
- uma descrição.

Essas informações ajudam a organizar os prompts. Em YAML elas ficam bem acomodadas; em Markdown, podem gerar confusão. A escolha depende de como você quer estruturar o software.

## Testes de compilação do prompt

Para o professor, este é o ponto mais importante: ter casos de teste que validem a **compilação** do prompt. Isso não é evaluation. Não se trata de medir se o prompt é bom ou ruim, e sim de garantir que ele "compila". Por exemplo, o teste verifica se todas as inputs passadas são usadas dentro do prompt. Se o prompt declara uma input `name` e o campo `name` não aparece no texto, ou você colocou um campo desnecessário, ou esqueceu de usá-lo. Prompt é software e precisa de testes automatizados, e o professor promete mostrar isso na prática.

Por isso, compilação e evaluation se complementam: um prompt pode passar na compilação e ainda ter respostas ruins, e a evaluation não pega um erro de variável.

## README e changelog

Ele recomenda, "mais do que nunca", um `README.md` com o contexto do prompt e onde ele é usado, além de um changelog para manter o rastro das mudanças. Num prompt que afeta a produção, isso encurta o diagnóstico quando algo dá errado depois de uma troca de versão.
