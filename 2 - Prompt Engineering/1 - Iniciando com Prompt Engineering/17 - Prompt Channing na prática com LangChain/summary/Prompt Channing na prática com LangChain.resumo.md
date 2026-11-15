# Prompt Channing na prática com LangChain — resumo

## O conceito

É o último tipo de prompt da lista do professor, que avisa que outros tipos ainda vão aparecer no curso. Se o Chain of Thought encadeia pensamentos, o **prompt chaining** encadeia **tarefas sequenciais em que a saída de uma é a entrada da próxima**. Segundo o professor, esse é justamente o grande diferencial do LangChain.

**Onde usar:** converter um texto, traduzi-lo e resumi-lo; gerar um esquema, extrair os endpoints e gerar o código; analisar um log, fazer o parsing, classificar e responder; montar um fluxo de agente com passo a passo definido; organizar um raciocínio completo em uma pipeline.

**Limitações:**

- **Latência:** são várias etapas, cada uma com sua chamada.
- **Propagação de erro:** o erro de uma etapa vira entrada da seguinte, e um erro se soma ao outro.
- **Custo de tokens:** maior, por causa das múltiplas chamadas.
- **Dependência de parsing:** se uma etapa devolve o resultado em um formato e a seguinte espera outro, a pipeline quebra. É preciso garantir saídas padronizadas.
- **Complexidade de orquestração:** o fluxo vira uma pipeline a ser coordenada.

## O que testar

Um script em Python com LangChain que gera uma API de produtos em três etapas, cada uma com um modelo diferente, todos com **temperatura zero** para evitar criatividade.

A entrada é uma especificação em texto: uma API de produto com `id` (uuid), `name` (string, obrigatório), `description` (string), `price` (float, maior que zero) e `stock` (int, maior que zero), com suporte a paginação, criação, busca, atualização e remoção.

1. **Especificação → esquema JSON (GPT-3.5 Turbo).** O prompt diz: "você é um back-end sênior", siga a especificação, extraia um JSON mínimo com o esquema baseado nos campos e tipos e retorne **somente o JSON, sem comentários**, em Markdown. A especificação entra como variável injetada. Com o pipe, a saída do prompt vai para o modelo e depois para um parser de string, para virar a entrada da próxima etapa.
2. **Esquema → rotas e handlers (GPT-5 Mini).** "Você é um Go developer": a partir do esquema gerado na etapa 1, desenhe rotas REST idiomáticas em Go, com handlers de CRUD, de forma simples, concisa e voltada para produção, com code snippets em blocos de código Markdown.
3. **Esquema e rotas → mensagem de commit (GPT-4o Mini).** "Você é um desenvolvedor pragmático": escreva em uma única linha, no padrão Conventional Commits, uma mensagem que resuma a API e as rotas.

**Por que modelos diferentes:** um modelo mais fraco faz a tarefa simples (transformar campos em JSON) e um mais inteligente faz a complexa (o código em Go precisa ser bem feito). O professor ressalta que a escolha não é por custo: ele acha que o GPT-5 já é mais barato que o GPT-3.5 Turbo.

O resultado final vai para o arquivo `promptChainingResult.md`, para não despejar um texto enorme no terminal. Por isso todas as etapas pedem a saída em Markdown.

## O que observar

- **Demora:** são três chamadas a três modelos, e o GPT-5 Mini é um modelo de raciocínio, o que deixa a execução ainda mais lenta (o professor pausou o vídeo durante a espera).
- **Esquema:** o JSON saiu como pedido, conforme a especificação.
- **Rotas e handlers:** um CRUD REST idiomático em Go, com dados **em memória**. O modelo explica que o código é para colar em um `main.go` e que, para usar banco de dados, basta substituir o armazenamento. Traz também um resumo das rotas e notas. O professor não testou se o código funciona.
- **Commit:** como é uma funcionalidade nova, saiu algo como `feat(api): implement CRUD operations for products with validation and pagination support`.
- **Pipeline:** o arquivo termina listando o modelo usado em cada etapa.

## O que o experimento mostra

- **A saída de uma etapa é a entrada da outra:** cada prompt cuida de uma parte, e juntos formam uma pipeline.
- **Cada etapa pode usar o modelo adequado** ao seu tipo de tarefa.
- **Restringir o formato é o que conecta as etapas:** "somente o JSON" e Markdown com code blocks reduzem o risco de a etapa seguinte receber algo inesperado.
- **Agentes usam a mesma ideia:** em padrões de delegação, um agente passa a saída dele como entrada de outro, o que é, indiretamente, uma espécie de prompt chaining.

Para fechar, o professor reforça que conhecer os tipos de prompt permite olhar um prompt qualquer e perceber que há formas melhores de extrair resultados dele.
