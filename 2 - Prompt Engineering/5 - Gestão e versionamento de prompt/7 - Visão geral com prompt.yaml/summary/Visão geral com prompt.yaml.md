# Visão geral com prompt.yaml

## Estrutura declarativa do `prompt.yml`

`prompt.yml` transforma o prompt em um artefato estruturado, com campos explícitos em vez de texto solto. Isso permite separar o contrato do prompt em partes como identificação, versão, variáveis de entrada e template final. Retomando a organização já estabelecida com registry, README e versionamento por pasta, a novidade aqui é que o comportamento esperado do prompt começa a ser descrito em um formato legível por humanos e ferramentas. YAML ajuda justamente porque mantém boa legibilidade e, ao mesmo tempo, facilita validação e automação.

## Campo `type: prompt`

O campo `type: prompt` explicita a natureza do arquivo e funciona como convenção de interoperabilidade. Ele não serve apenas para leitura humana: também alinha o artefato a padrões usados por ferramentas de gestão, como o LangSmith. Essa convenção reduz ambiguidade quando o mesmo ecossistema pode conter outros tipos de arquivos estruturados. Em um pipeline automatizado, esse campo ajuda a identificar rapidamente como o documento deve ser tratado.

## `id` e `version` como identidade operacional

`id` identifica o prompt de forma estável, enquanto `version` indica qual variante daquele prompt está sendo usada naquela pasta. Esses campos conectam o arquivo ao restante da governança já definida no projeto, sem depender apenas do nome do diretório. Quando o carregamento, a auditoria ou os testes precisam apontar exatamente qual prompt foi executado, essa identidade explícita evita inferências frágeis. O arquivo deixa de ser apenas conteúdo textual e passa a carregar sua própria identificação operacional.

## `input variables` como contrato de entrada

`input variables` lista todas as variáveis que o template espera receber. Isso formaliza o contrato de entrada do prompt e torna visível, antes da execução, quais dados precisam existir para que a montagem seja válida. A consequência prática é simples: se uma variável foi declarada, ela precisa aparecer de forma coerente no template e nos testes. Esse campo também prepara o terreno para validações automáticas e para integração segura com código.

## `template` como corpo parametrizado do prompt

O campo `template` contém o texto efetivo do prompt, mas agora dentro de uma estrutura que declara seu contexto de uso. A vantagem não está em mudar o conteúdo em si, e sim em torná-lo parametrizável e verificável junto com as variáveis que ele consome. Quando as `input variables` aparecem dentro do template, o prompt passa a ter um contrato mais claro entre definição e execução. Isso é o que viabiliza testes estruturais sem depender ainda de julgamento subjetivo da qualidade da resposta.

## Por que YAML amplia a testabilidade

Markdown continua válido para prompts, mas YAML oferece mais potencial quando o objetivo inclui automação. Como os campos ficam separados e nomeados, fica mais fácil inspecionar variáveis, validar presença de metadados e acoplar testes ao artefato. A diferença prática não é “texto bom versus texto ruim”, e sim “estrutura livre versus estrutura verificável”. Em projetos com pipeline, essa verificabilidade pesa mais do que a conveniência de edição pura.

## `prompt.tests.yml` e testes estruturais de prompt

`prompt.tests.yml` descreve casos de teste declarativos para verificar se o prompt está montando e respondendo dentro de um contrato mínimo esperado. O foco aqui não é decidir se o prompt é excelente, mediano ou ruim; isso pertence a evaluation, já diferenciada anteriormente. O objetivo é confirmar que, dado um conjunto de entradas, o prompt gera uma saída compatível com a estrutura esperada. Em outras palavras, trata-se de um teste de integridade comportamental básica, próximo da ideia de “compilar” o prompt com segurança.

## Casos de teste com `inputs`

Cada caso de teste define um cenário concreto de execução, como um `basic code review`, e injeta valores nas variáveis declaradas pelo prompt. Se o prompt espera algo como `code.diff`, o teste precisa fornecer esse valor explicitamente em `inputs`. Isso conecta o contrato do `prompt.yml` ao uso real: as variáveis deixam de ser apenas nomes declarados e passam a receber dados de exemplo reproduzíveis. O resultado é um teste repetível, adequado para automação local ou em pipeline.

## `expectContains` como asserção mínima de saída

`expectContains` define palavras ou trechos que obrigatoriamente devem aparecer na saída gerada durante o teste. Essa estratégia não mede qualidade profunda, mas verifica se o comportamento básico esperado emergiu da execução. Em um cenário de code review, por exemplo, exigir certos termos ajuda a confirmar que o prompt respondeu dentro do domínio e da intenção definidos. É uma asserção simples, porém útil para detectar regressões grosseiras quando o template ou as variáveis mudam.

## Fluxo prático de implementação

A implementação segue uma sequência direta: criar a pasta da versão do prompt, definir o `prompt.yml` com `type`, `id`, `version`, `input variables` e `template`, e depois escrever um `prompt.tests.yml` com cenários nomeados, `inputs` e expectativas como `expectContains`. Retomando o prompt já organizado no projeto, a nova camada é o contrato executável: o que antes era apenas texto versionado agora também declara como deve ser testado. Quando esses testes entram na esteira de CI/CD, o projeto ganha uma verificação automática de que o prompt continua “compilando” após mudanças. Isso prepara o próximo passo, que é executar esses testes de forma prática.
