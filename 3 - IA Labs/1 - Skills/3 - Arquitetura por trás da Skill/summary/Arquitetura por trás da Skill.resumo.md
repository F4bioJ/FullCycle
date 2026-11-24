# Arquitetura por trás da Skill

A aula usa uma skill pronta, a **Team Code Review**, para mostrar o que acontece por dentro quando o Claude Code lê, decide e executa uma skill. Ela retoma o frontmatter e os níveis de progressive disclosure da aula anterior e os liga a uma sequência de fases.

## A skill de exemplo

A pasta da Team Code Review tem o arquivo `skill.md` e as pastas citadas na aula anterior: **scripts**, **referências** e **avaliação** (eval), esta última para saber se a skill está funcionando como se espera.

## O frontmatter, de novo

O frontmatter é o bloco YAML do topo do `skill.md`, com metadados como `name`, `description` e `allowed tools`. O professor cita outros campos possíveis, como um `path`, que diz onde a skill deve ou não rodar, e avisa que esses parâmetros serão aprofundados mais adiante.

## As fases da execução

O professor organiza a leitura e a execução de uma skill em fases, tomando o Claude Code como referência. Ele começa falando em três fases, corrige para quatro e, ao longo da aula, chega a seis, numeradas de 0 a 5. Cada fase é responsável por uma coisa específica.

## Fase 0: startup e indexação

Ao iniciar o Claude Code, ele faz o startup e um processo de **indexação**, uma vez a cada nova sessão. Nessa fase, o Claude Code varre a estrutura do projeto, em especial a pasta `.claude`, e percebe que existem skills. Por isso, logo na sessão nova, já é possível digitar `/team-code-review` e usar a skill.

## Fase 1: roteamento e decisão

Na fase 1, o usuário faz um pedido, por exemplo "revise as minhas mudanças que estão em staged". O Claude Code, que o professor chama de **harness** (o que encapsula a LLM), olha a skill para ver se a `description` classifica aquele pedido para execução.

- A decisão de executar ou não é **do próprio modelo**.
- Por isso a `description` é, nas palavras do professor, a **feature classificadora**: é ela que faz o roteamento.
- Por isso também importa ter **evals**, para garantir que a skill dispare na hora certa e não dispare nas horas erradas.

Nesse momento o corpo da skill ainda **não foi lido**: só houve o pedido, e a decisão se baseia no frontmatter.

## Fase 2: carregar o corpo

Decidido o acionamento, o modelo emite uma **tool call de leitura**, que carrega o corpo, ou seja, as instruções da skill. O professor liga isso ao campo `allowed tools` do frontmatter (no exemplo, read, grep e bash): assim como a skill declara as tools que pode usar, o harness usa essas tools para ler o corpo e carregar as instruções antes de começar a execução.

## Fase 3: leitura condicional

A fase 3 é uma leitura **condicional**, que segue o que foi escrito nas instruções. A cada leitura, uma tool é chamada.

- A skill do exemplo tem **steps**, mas nem toda skill precisa deles.
- O modelo interpreta os steps, carrega o contexto e segue para os próximos, mas **pode decidir** não seguir tudo. Por isso, de novo, entram os testes para conferir se o resultado é o esperado.
- O corpo pode apontar para arquivos de referência, e o modelo decide se vai trazê-los para o contexto.

No exemplo, um passo inicial exige a leitura de um arquivo de convenções. Outro só manda ler um arquivo de referência se a alteração afetar input, autenticação, consultas ao banco de dados ou requests externas. Os arquivos trazem convenções de segurança (OWASP) e convenções do time: arquitetura, naming, erros e testes.

## O modelo mental e os níveis

O professor resume o fluxo como um modelo mental: indexar, decidir, carregar o que for necessário e, a partir disso, ler e capturar os resultados. Isso bate com os níveis do progressive disclosure:

| Nível | O que é lido | Fases |
|---|---|---|
| 1 | Só o frontmatter | Indexação e decisão |
| 2 | O corpo | Carga do corpo |
| 3 | Referências, scripts e o resto | Leitura condicional e scripts |

## Fase 4: scripts e execução

A fase 4 trata dos **scripts**. No step 1 do corpo da Team Code Review, a skill primeiro usa as referências e depois manda executar o script que está dentro da própria skill, para coletar as diferenças em stage. Nesta fase, é esse script que roda.

## Fase 5: a execução da tarefa

Por fim, a fase 5 é a execução de fato da tarefa: depois de passar pelas etapas anteriores, a skill devolve o resultado do que ela resolve.

## Os ciclos de fases

Nem toda skill passa por todas as fases. O professor dá exemplos de ciclos:

- uma skill simples, só com a pasta e o `skill.md`, vai da fase 0 para a 1, depois para a 2 e direto para a 5;
- outra skill acrescenta a leitura de referências (fase 3) antes da fase 5;
- a Team Code Review acrescenta ainda os scripts (fase 4).

Assim é possível criar vários cenários e habilidades com skills.

## Por que entender a arquitetura

Para o professor, entender essa arquitetura é o que permite saber como a skill vai funcionar. Ele usou o harness do Claude Code como referência, mas diz que o processo é muito parecido nos outros. A partir daqui, o curso passa para a criação da skill.
