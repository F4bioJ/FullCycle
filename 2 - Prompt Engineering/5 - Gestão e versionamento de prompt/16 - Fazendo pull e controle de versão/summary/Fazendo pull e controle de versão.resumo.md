# Fazendo pull e controle de versão

## O que a demonstração mostra

Agora a aplicação usa o prompt publicado. O script `langsmith_client` faz:

1. `pull_prompt("agent-pull-request-creator")`: baixa o prompt do hub do LangSmith;
2. cria o modelo da OpenAI e monta a chain com o prompt e o modelo;
3. chama `invoke` com o dicionário das informações de que o prompt precisa.

Rodando o script, ele baixa o prompt, executa a LLM e funciona.

## Responsabilidades isoladas

O desenvolvedor deixa de se preocupar com o conteúdo do prompt: ele só faz o pull, e quem mexe no LangSmith responde pela qualidade do prompt.

## O experimento com versões

1. Sem indicar versão, o pull pega a última versão, o commit mais recente.
2. Pedir `:1.0.0`, a prompt tag da primeira versão, dá erro de "commit não encontrado". O LangSmith identifica o prompt pelo hash do commit; a prompt tag serve só para buscar e organizar, e não tem relação nenhuma com o pull.
3. Para usar uma versão antiga, o caminho (até a gravação) é manual: no histórico de commits, você cria uma **commit tag**, que é a tag usada no download. Sem commit tag, é preciso passar o hash do commit. A tag `latest` existe por padrão. Dá para criar tags como `v1-0-1` (não se pode usar ponto), `prod` ou `dev`.
4. Marcando o primeiro commit como `dev` e o último como `prod`, o pull com `:dev` baixa o primeiro commit, e com `:prod` baixa o último.

## O que isso mostra

Com o SDK, a aplicação baixa um prompt que outra pessoa criou tendo só o ID e a versão a usar. Duas considerações:

- Com LangSmith, PromptLayer, Langfuse ou qualquer outra ferramenta, baixe o prompt e guarde-o num cache, para não fazer chamadas de API o tempo todo.
- O código é detalhe e independe da linguagem; o importante é o conceito, que a conclusão do capítulo vai amarrar.
