# Aula 07 — resumo

Sessão de perguntas e respostas que fecha o encontro.

## IA em grandes empresas: contrato
Como vencer a resistência dos stakeholders quanto à privacidade do código? Nas grandes empresas que o professor conhece, a resposta é contrato com um grande fornecedor: um banco que fecha com a Microsoft para usar GitHub Copilot com modelos da OpenAI, outras que negociam com a Cursor ou contratam o Devin. O plano enterprise costuma trazer uma camada a mais de segurança: os dados não são usados para treinamento, há filtros e ofuscação, e tudo é protegido por contrato.

## Governança e o vazamento informal
A regra principal é de governança: escolher a ferramenta, fechar contrato e abolir qualquer outra na empresa, até em nível de firewall. Usar o ChatGPT pessoal para tirar uma dúvida já vaza dados da empresa. Os modelos trazem o que a web tem: os sistemas internos do Google, por exemplo, não estão no Gemini. A conta também importa: logar com o e-mail pessoal ou com o da empresa muda para onde o dado vai. Empresas na Europa têm ainda outras regras de privacidade. Essa decisão cabe a executivos e CTOs; ao desenvolvedor cabe garantir o uso da ferramenta contratada, com o login certo.

## Qual modelo usar para gerar documentação
Para o professor, todos os modelos já geram documentação muito boa, e o segredo está no prompt. A exceção é gerar documentação a partir de um repositório ou codebase muito grande: aí uma janela pequena limita o resultado, e ele fica mais confortável com o Gemini, de um milhão de tokens, do que com o Claude, de 200 mil. Fora isso, usa o modelo que já está usando.

## Quando a documentação é o produto
A escolha pesa mais quando a documentação é o resultado do software, como em uma ferramenta do tipo Context7. O professor também cita um agente que agenda passagens aéreas: ali, o prompt é muito bem feito, o menor possível, com o modelo mais adequado ao resultado.

## Ultrathink fora do CLI
Perguntado se o ultrathink funciona no Cursor ou só no CLI, o professor responde que ele é do modelo e funciona em todos os casos.

## Adaptar o repositório de PRP
Ele modifica o repositório: pega só o que precisa, porque cada projeto e cada workflow são diferentes. A pergunta veio de um aluno que usou templates para automatizar uma migração, iterando com a LLM: gerar, testar e ajustar o prompt.

## Metaprompts e avaliação
O professor tem prompt que gera prompt, tema que o curso aprofundará como metaprompt na disciplina de Prompt Engineering. Há também ferramentas que geram variações de um prompt para buscar resultados melhores, o que leva à avaliação de prompts. Prompt exige muito ajuste, mas também tem método e ferramentas.

## Prompt é o novo código
Prompts também são versionados, porque são tão importantes quanto o código: surgem o prompt 1, o 2, o 3 e, quando o modelo muda, um prompt que funcionava pode deixar de funcionar.

## CI/CD para prompts
O professor coloca prompts na esteira de CI/CD: ao mudar um, ele roda e verifica se o resultado mantém a qualidade anterior. Sem isso, é o prompt, não o código, que quebra a aplicação. Perguntado se isso é feito no LangSmith, responde que não: em código ou banco de dados.

## Cursor, Claude Code e VS Code
Quase todas as novas IDEs são forks do VS Code. O Claude Code pode ser usado no VS Code normal: o professor não usou nada específico do Cursor, que é só o editor padrão dele.

## PRP não depende do modelo
O PRP é um metaprompt, não um modelo, e não exige o Claude. O recurso de comandos só dá praticidade: um Markdown na pasta de comandos, chamado com barra, equivale a colar aquele texto mais o arquivo indicado. Copiar o mesmo conteúdo no Gemini ou no Cursor dá na mesma, porque no fim é tudo texto passado à IA.

## Quando a tarefa nasce no Jira
Em empresas em que as tarefas nascem no Jira, e não no terminal, o caminho é o MCP: o professor confirma que existe um servidor oficial do Jira e aposta que o Confluence também tenha. É preciso verificar até que ponto ele traz os dados.

## Context Engineering
Terá uma sessão específica. Ele engloba mais que a documentação: RAG, MCP e APIs externas, para que tudo caia dentro do contexto da aplicação, e não só arquivos gravados.

## Testes são questão de prompt
Um aluno contou que, ao gerar testes, a IA desmontou o código e foi preciso voltar commits no Git. Para o professor, a raiz é o prompt, antes de pensar em ferramentas como guardrails e avaliação de prompts, que virão no curso. Teste é uma tríade: desenvolvimento, execução e correção. Se falha, ou a IA escreveu o teste errado, ou o código tem bug de verdade. Por isso, o prompt deve dizer como desenvolver e executar os testes e até que ponto a IA pode alterar o código quando um falha. Basta escrever o seu passo a passo, ou pedir a um modelo que o transforme em prompt.

## Commits graduais
A dica vale além dos testes: avance aos poucos e coloque no workflow que, a cada critério de aceitação que passou, foi testado e recebeu seu ok, a IA faça o commit. Senão, ela gera muitos testes, estraga tudo e você sai caçando o erro. O padrão do commit fica nas guidelines: conventional commits, em inglês, com um limite de caracteres.

## TDD e a IA como espelho
Testes antes ou depois depende do projeto. Com uma história de usuário muito clara, às vezes vale fazer TDD com IA; em um projeto muito pequeno ou de vida curta, talvez não. A IA é o reflexo de quem você é como programador: se ela não se comporta como deveria, é porque não sabe tudo o que você sabe, e a saída é dar contexto.

## O quick win
O encontro serviu para, já no dia seguinte, trabalhar com IA de um jeito um pouco diferente.
