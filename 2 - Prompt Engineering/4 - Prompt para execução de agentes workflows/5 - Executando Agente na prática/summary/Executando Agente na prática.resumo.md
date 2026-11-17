# Executando Agente na prática

Aula prática: o professor mostra o prompt de um comando que chama diretamente o agente auditor de dependências e depois o executa num repositório. Não é preciso ter o Claude Code para acompanhar o módulo; o objetivo é ver o prompt aplicado. O que interessa é como escrever esse prompt para que o agente não faça nada a mais nem a menos do que o combinado: quando um prompt compõe outro, é fácil as coisas se misturarem.

## O comando: um Markdown que se executa

Na pasta `.claude`, além de `agents/` (onde está o Dependency Auditor), há a pasta `commands/`. Cada arquivo dela vira um comando chamado com `/nome-do-arquivo` no Claude Code. O comando não é um executável, é um Markdown: "o Markdown é o novo arquivo executável". O comando do professor se chama algo como "running dependency audit" e diz: use o Dependency Auditor Agent para rodar a auditoria de dependências no projeto.

## A pasta como variável

O comando recebe `Project Folder to Audit` como variável (no Claude Code, com `$`; poderia ser um placeholder). Isso atende a um input do prompt do agente: em que pasta auditar. O comando repete a regra: se o usuário não informar a pasta, audite o projeto inteiro; senão, audite só a pasta informada.

## Redundância de propósito

Num texto para pessoas, evitamos repetir palavras. Com IA, quanto mais claro, melhor, e o professor não se importa de ser redundante: repete "project" e "folder" na mesma regra em vez de escrever de forma mais enxuta.

## Prompt de comando que chama outro prompt

Não existe um único prompt que resolva tudo. Este é um prompt de comando: ele aciona um agente que tem o próprio prompt. Por isso é preciso evitar ambiguidade, para o modelo não misturar os dois e fazer só o que o comando pede. A primeira instrução é seguir a especificação do agente.

## Ultrathink

Muitas IAs têm níveis de pensamento, isto é, de esforço para montar uma cadeia de raciocínio antes de responder. No Claude, a palavra-chave `ultrathink` faz o modelo pensar com mais força. O comando pede um ultrathink de cada passo da especificação do agente (`dependencyauditor.md`) e só então a auditoria, "estritamente" pelas instruções do agente. O professor já tinha tentado sem isso, e o modelo misturou as especificações. O workflow do prompt do agente, passo a passo, também ajuda.

## Ênfase e reforço do que já está no agente

Muitos LLMs entendem o tom de maiúsculas, negrito e exclamação, e vale usar esse recurso. O comando tem um "DO NOT FORGET": depois de produzir o relatório, se o usuário não deu o nome do arquivo, pergunte explicitamente se quer salvá-lo. O prompt do agente já pede isso, mas, como o comando continua rodando depois que o agente termina, a pergunta poderia se perder. Pelo mesmo motivo, o professor copiou para o comando as instruções negativas do agente. A estrutura do comando é outra: ela serve mais para reforçar o que o outro prompt já tem.

## O que observar na execução

O professor roda o comando passando como pasta o repositório do Google ADK em Python. Vale observar:

- **o raciocínio inicial:** o modelo separa o pedido em usar o agente na pasta, seguir as instruções dele e, no fim, perguntar se deve salvar; depois cria uma to-do list;
- **a delegação:** o agente aparece sendo chamado e diz o que está fazendo;
- **a troca de ferramenta:** tentou o Firecrawl (um MCP para navegar em páginas) e, provavelmente por estouro de tokens ou falha de leitura, passou ao WebSearch para consultar a base de vulnerabilidades;
- **a pergunta final:** veio o pedido para salvar o relatório, que foi gravado como `report-adk.md`.

## O resultado

O relatório saiu no template do agente: sumário (Google ADK em Python, 25 dependências diretas), achados principais, vulnerabilidades críticas (no FastAPI), dependências ok e não ok, análise de risco, arquivos críticos, notas de integração e plano de ação. É um caso de prompt sobre prompt: o comando reforça e dispara, e o agente faz a auditoria no formato combinado.
