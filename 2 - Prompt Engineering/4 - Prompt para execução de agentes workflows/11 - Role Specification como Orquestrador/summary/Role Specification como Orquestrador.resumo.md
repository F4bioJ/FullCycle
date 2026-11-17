# Role Specification como Orquestrador

A aula fecha o capítulo com o último prompt do workflow: o do **agente orquestrador**, escrito no formato Role Specification.

## Estruturas são recomendações

As seções usadas (papel, responsabilidades, framework operacional, princípios de decisão e padrões de comunicação) são **sugestões** para agentes desse tipo. Dá para fazer o mesmo orquestrador com outra estrutura do capítulo; elas servem para não partir do zero.

## O papel

Como sempre, o prompt começa dizendo quem o agente é: um orquestrador de tarefas num ambiente em que o Claude Code, o **master coordinator**, controla os agentes e os chama em paralelo. A função do orquestrador é garantir a **estrutura, os caminhos e a auditabilidade** desse trabalho multiagente, mantendo o `manifesto.md` como **fonte única da verdade**: tudo o que o projeto gerar fica registrado ali, para no fim o comando montar o índice com todos os relatórios.

## Responsabilidades core

Essa seção não diz passo a passo o que o agente faz, e sim os **pontos inegociáveis** dele. É diferente de um objetivo, que dá uma visão de mais curto prazo do que vai ser feito. As responsabilidades são:

- inicializar a estrutura do projeto criando o manifesto;
- registrar o output de cada tarefa concluída, com o nome do relatório e o agente que o produziu;
- aplicar as políticas de nome e caminho com base nos argumentos passados ao comando;
- comparar os componentes com a lista do relatório de arquitetura, para que todos fiquem registrados;
- prevenir duplicações, já que ele mantém o tracking de tudo;
- validar e finalizar o manifesto.

O professor diz que conseguiria portar o orquestrador para outra estrutura, mas que ele não é complexo o bastante para precisar de tanta coisa. Um prompt mais leve é melhor: **quanto maior o prompt, maior a ambiguidade** e a chance de algo dar errado; o prompt deve ser o mais assertivo possível.

## Framework operacional

É o workflow do orquestrador:

- **Fonte da verdade:** o caminho do manifesto, onde fica registrado o que os outros agentes produzem. **Só o orquestrador escreve no `manifesto.md`.** Ele não inventa nomes de pasta nem cria pastas como `reports` ou `outputs`.
- **Registro:** quando o master coordinator conclui um artefato, o orquestrador o grava imediatamente no manifesto, com título, caminho absoluto, nome do agente e timestamp. **Antes de gravar, verifica se o caminho existe.**
- **Controle de cobertura por componente:** lê o relatório de arquitetura e grava no manifesto de um jeito que permita acompanhar as tarefas pendentes de cada componente. Se faltar relatório para algum componente, passa o gap ao coordenador, que chama outros agentes para completá-lo.
- **Finalização da integridade:** confirma que todas as seções estão no manifesto, valida cada caminho registrado e remove duplicações.

## Princípios de decisão

Servem para remover a ambiguidade na hora de decidir:

- **Separation of concerns:** o master coordinator decide qual agente roda e quando; o orquestrador só garante estrutura, cobertura e registro.
- **Parallel-safe recording:** registrar os outputs o quanto antes, para evitar race conditions, já que vários agentes podem mexer no mesmo arquivo ao mesmo tempo. Um arquivo não é um banco de dados com isolamento. O professor nunca teve esse problema: percebeu que o Claude nota arquivos abertos e altera por diff.
- **Estado mínimo necessário:** notas operacionais mínimas e factuais, sem recomendações nem sumarização.
- **Caminhos determinísticos:** para saber com certeza onde cada relatório vai estar.
- **Safety over convenience:** o orquestrador recusa registrar item com caminho inválido ou duplicado; ele tem que verificar.

O resultado depende do modelo e do projeto; os bons testes do professor não são garantia, e o prompt evolui, principalmente com modelos novos.

## Padrões de comunicação

O orquestrador fala com o coordenador, então a comunicação precisa ser bem definida. Ele **nunca fala direto com os especialistas** e traz as atualizações de forma clara e estruturada. Quando perguntado sobre o status, devolve a lista de reports (arquivo, caminho absoluto, agente, timestamp) e o checklist dos componentes que faltam.

O prompt traz também **instruções e formato para o master coordinator**: indicar ao especialista o diretório de saída no padrão combinado e, quando o especialista terminar, devolver o resultado ao orquestrador para registro. Assim os dois criam um **protocolo de comunicação** em linguagem natural: o Claude Code recebe respostas precisas, e o orquestrador recebe informações precisas.

## Disciplina do manifesto e ações proibidas

Só o orquestrador edita o manifesto, que fica limitado ao tracking dos reports, ao workflow mínimo e a notas curtas. Ele não pode gerar agentes nem sequências de agentes, prescrever mudanças de código, criar sumário executivo, recomendações ou listas de vulnerabilidades no manifesto, estimar horas nem usar linguagem vaga. Muitas dessas regras já estão em outros prompts; aqui elas **reforçam** o comportamento do orquestrador.

## O template do manifesto

O prompt inclui um `manifesto.template.md`: nome do projeto, gerador, caminho do orquestrador, reports, componentes, tasks do workflow, timestamp de cada report, status (completo, pendente ou falhou) e notas mínimas. É o arquivo que **mantém o estado do workflow** quando muitos agentes rodam, para saber de onde se parou.

## Trade-off: um orquestrador por tarefa

Dava para ser mais enfático no comando e mandar subir um orquestrador novo a cada agente que termina, só para registrar. O tracking fica mais próximo do tempo real, mas o resultado **demora mais**, porque cada vez é preciso subir um orquestrador e dar baixa no arquivo. Do jeito atual, em geral o Claude registra os dois primeiros relatórios, espera os relatórios de componentes da fase 3 terminarem em paralelo e só então atualiza o manifesto. O risco: se a sessão cair no meio e o orquestrador não tiver anotado, **é preciso refazer o processo todo**. A escolha depende do tamanho da tarefa e do tempo do projeto.

## Um prompt simples e adaptável

O orquestrador é simples: responsabilidades, tracking, princípios de decisão e comunicação. Por isso não usou estruturas mais complexas, que também não precisam ser seguidas à risca. Prompt se testa e melhora sem fim, e os prompts do capítulo estarão no repositório.
