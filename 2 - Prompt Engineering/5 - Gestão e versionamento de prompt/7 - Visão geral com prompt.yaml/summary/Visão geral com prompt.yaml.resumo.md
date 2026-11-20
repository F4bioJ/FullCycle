# Visão geral com prompt.yaml

## Os arquivos da versão

Dentro da pasta de cada versão do prompt, o professor tem dois arquivos: `prompt.yml` e `prompt.tests.yml`.

## Estrutura do `prompt.yml`

O prompt está em YAML, não em Markdown. Não há certo ou errado, mas o YAML ajuda a estruturar as informações. Os campos são:

- `type: prompt`: segue um padrão usado pelo LangSmith, que aparecerá adiante na gestão de prompts;
- `id`: o nome do prompt;
- `version`: a versão do prompt;
- `input_variables`: todas as variáveis que o prompt vai ter;
- `template`: o conteúdo do prompt.

Todas as variáveis declaradas são usadas dentro do template. Essa estrutura segue uma convenção e abre bastante potencial para testes.

## Testes no `prompt.tests.yml`

A pergunta é: como saber se o prompt está compilando? O `prompt.tests.yml` reúne casos de teste, por exemplo para verificar um code review ou o comportamento com uma input diferente. O foco é ver se o prompt está de acordo com a estrutura, não se ele é bom ou ruim. No caso `basic code review`, há as `inputs` (como o `code.diff`) e o `expectContains`: as palavras que precisam aparecer quando o teste roda. Esses testes podem entrar na esteira de CI/CD para garantir que os prompts, "entre aspas", estejam compilando.
