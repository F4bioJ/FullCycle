# Skill next-episode

Skill para processar várias aulas de uma vez: o resto de um capítulo ou um intervalo de aulas. A definição executável está em `.claude/skills/next-episode/SKILL.md`; este documento descreve o que ela faz e por quê. O histórico fica em `.claude/skills/CHANGELOG.md`.

Gera os mesmos artefatos da `next-class`, com as mesmas regras e a mesma revisão (veja `doc/skill.nextClass.md`). Muda só a forma de dividir o trabalho.

## Por que existe

Criada em 2026-11-20, depois do lote 2.6.3 a 2.6.10, que foi feito pela `next-class` numa sessão só. A cada chamada de ferramenta, todo o contexto acumulado é reenviado ao modelo: transcrições, resumos do professor, quizzes, respostas dos validadores e as saídas grandes do Playwright. Na oitava aula, cada passo ainda carregava as sete anteriores, e o custo crescia de forma quadrática com o número de aulas.

Com um agente por aula, cada contexto fica pequeno, e o custo total cresce de forma linear. O custo fixo de cada agente (reler a skill, as referências e as fontes da aula) compensa a partir de umas 3 ou 4 aulas conceituais. Para 1 ou 2 aulas, a `next-class` continua sendo a escolha.

## Como chamar

| Comando | Efeito |
|---|---|
| `/next-episode` | da próxima aula até o fim do capítulo atual |
| `/next-episode até <id>` | da próxima aula até essa |
| `/next-episode <id>..<id>` | esse intervalo |
| `/audio`, `/noquizz` | como na `next-class`, para todas as aulas do lote |

A skill não atravessa capítulos: processa até o fim do capítulo, avisa e pergunta antes de começar o seguinte.

## Papéis

| Papel | Modelo | Faz |
|---|---|---|
| Sessão principal | qualquer um | Lista e classifica as aulas, captura todas, lança os agentes, registra os Pendentes, gera os áudios com `/audio` e consolida o relatório. Não lê transcrições nem escreve resumo ou quizz. |
| Agente por aula conceitual | Opus | É o gerente da revisão para uma aula: resumo, quizz, lint e ciclo com o validador. |
| Agente das aulas leves | Opus | Um só agente para todas as aulas práticas e de abertura do lote (só o resumo de cada uma). |
| Validador | Sonnet | Criado pelo agente da aula, como na `next-class`. |

## Fluxo

1. **Listar e classificar:** a sessão principal monta a tabela do lote (id, título, duração, tipo e número de perguntas) e a mostra ao usuário.
2. **Capturar:** em sequência, porque o navegador é um só e o `capture.json` é sobrescrito a cada aula. Para gastar pouco, a captura de uma aula vai na mesma mensagem que a gravação da anterior, e a saída dos scripts é filtrada.
3. **Lançar os agentes:** em paralelo e em segundo plano, em ondas de até 5. Paralelo e sequencial gastam os mesmos tokens; o paralelo só ganha tempo. Cada agente recebe um prompt autossuficiente e devolve um relatório de no máximo 15 linhas.
4. **Depois dos agentes:** a sessão principal registra os Pendentes no `acompanhamento.md` e gera os áudios, se houver `/audio`. Os agentes não editam `acompanhamento.md`, `dados/` nem `doc/`, para não haver conflito entre edições paralelas.
5. **Relatório final:** tabela por aula, correções pontuais, Pendentes, o que não foi gerado, reclassificações e a orientação para aplicar os quizzes com `/init <id>`.

Como os agentes rodam ao mesmo tempo, o resumo gerado da aula anterior pode ainda não existir. Nesse caso, o agente usa o resumo do professor dessa aula para conferir o escopo e os distratores.

## Cuidados embutidos no prompt dos agentes

Vêm do retrabalho no lote 2.6.3 a 2.6.10:

- distratores devem ser meias-verdades desde o início, e as perguntas devem usar cenários, porque o validador recusa alternativas absurdas;
- arquivos em LF, porque o Python no Windows grava CRLF e o lint passa a ler "0 perguntas";
- trocas em lote por um arquivo JSON, porque heredoc com aspas e crases quebra o bash;
- nada de absolutos só nas alternativas erradas, e a correta com tamanho parecido com as outras;
- opinião do professor atribuída a ele, e contagens inconsistentes da fala dele não viram fato.
