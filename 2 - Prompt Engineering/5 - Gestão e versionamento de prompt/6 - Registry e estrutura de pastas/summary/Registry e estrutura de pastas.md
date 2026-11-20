# Registry e estrutura de pastas

## `registry.yml` como índice operacional

Retomando o registry já definido anteriormente, a implementação concreta começa com um arquivo como `registry.yml` dentro da pasta de prompts. Esse arquivo funciona como catálogo navegável da aplicação: cada entrada aponta para um prompt específico e concentra campos úteis para carregamento, rastreabilidade e manutenção. A vantagem do YAML aqui não é conceitual, mas prática: ele oferece estrutura legível por humanos e simples de consumir por código. Se o projeto preferir banco de dados ou outra forma de armazenamento, a exigência continua a mesma: existir um registro central dos prompts disponíveis.

## Campos mínimos de uma entrada no registry

Uma entrada do registry pode conter, por exemplo, `description`, `version`, `path` e `model`. Esses campos resolvem perguntas operacionais diretas: o que o prompt faz, qual versão está ativa, onde o arquivo está fisicamente e com qual modelo ele foi pensado para execução. O conjunto exato não é fixo; ele deve acompanhar a necessidade do projeto, inclusive com campos opcionais e metadados adicionais. O ponto decisivo é manter um esquema consistente o suficiente para que pessoas e código localizem o prompt sem depender de convenções implícitas.

## Categorização por grupos funcionais

A organização do registry pode começar por grupos como `Agents`, reunindo prompts relacionados a um mesmo papel de execução. No exemplo, `Code Review` e `Pull Request` aparecem como dois itens desse agrupamento, o que torna a navegação mais previsível para quem mantém a aplicação. Essa categorização não precisa seguir um único padrão universal; ela deve refletir a forma como o sistema pensa seus prompts. Se a aplicação for orientada por agentes, agrupar por agentes tende a produzir menos ambiguidade do que uma pasta genérica sem semântica de domínio.

## Separação física entre `prompts` e código-fonte

A pasta `prompts` deve ficar apartada do código-fonte da aplicação como uma fronteira física explícita. Essa separação reduz mistura entre lógica de software e artefatos textuais que controlam comportamento do sistema, além de deixar claro quem está alterando código e quem está alterando prompt. Em manutenção, isso facilita revisão, navegação no repositório e definição de responsabilidades. A regra prática é simples: o prompt mora em uma área própria do projeto, não espalhado entre arquivos de implementação.

## Estrutura por ID do prompt

Cada prompt pode ter uma pasta com o mesmo ID usado no registry, criando um vínculo direto entre índice e sistema de arquivos. Isso elimina mapeamentos informais e reduz erro humano na hora de localizar o artefato correto. Quando alguém lê o `path` no registry, encontra uma estrutura coerente com o identificador lógico do prompt. Essa simetria também simplifica automações futuras, porque o carregamento pode assumir uma convenção estável entre registro e diretório.

## Estrutura por versão dentro da pasta do prompt

Dentro da pasta identificada pelo ID, a organização por versão materializa no disco o versionamento já tratado anteriormente. Em vez de depender apenas do histórico do Git, o projeto passa a expor explicitamente qual conteúdo pertence a cada versão do prompt. Isso ajuda comparação, rollback e inspeção local sem exigir leitura de diffs para tudo. A convenção exata pode variar, mas a ideia central é manter as versões visíveis e separadas no filesystem.

## `README` como documentação operacional do prompt

Ao lado das versões, um `README` resume o contexto necessário para uso correto do prompt. No exemplo, ele registra finalidade, modo de uso, variáveis de entrada, local de utilização e changelog, permitindo que qualquer pessoa entenda rapidamente como aquele artefato entra no sistema. Esse arquivo não substitui os metadados estruturados nem o conteúdo raw do prompt; ele conecta intenção, operação e histórico em linguagem humana. Sem essa camada, o risco não é só confusão documental, mas integração incompleta do prompt com o software.

## Consequência prática da falta de documentação

Quando a documentação do prompt é insuficiente, o sistema pode deixar de fornecer variáveis, contexto ou dados exigidos pelo template. O problema não aparece apenas como desorganização: ele pode se manifestar como falha funcional, comportamento inconsistente ou uso incorreto do prompt por outros desenvolvedores. Por isso, a estrutura física não termina no arquivo do prompt; ela inclui também os artefatos que explicam como ele deve ser consumido. A pasta bem organizada reduz erro operacional antes mesmo de qualquer teste automatizado.
