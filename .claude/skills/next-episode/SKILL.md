---
name: next-episode
description: Processa várias aulas do MBA Full Cycle de uma vez (o resto do capítulo, ou um intervalo como "até a 2.7.8") com um agente Opus por aula conceitual, para gastar menos tokens que a next-class em lote. A sessão principal captura todas as aulas na plataforma, lança os agentes (resumo, quizz, lint e ciclo com o validador Sonnet) e só consolida os relatórios. Use quando o usuário digitar "/next-episode", "/next-episode até <id>", "/next-episode <id>..<id>" ou pedir "o capítulo inteiro", "todas as aulas do capítulo", "faz até a aula X" ou "várias aulas de uma vez". Para uma ou duas aulas, use a next-class.
---

# next-episode

Mesmo resultado da `next-class` (os mesmos artefatos, as mesmas regras e a mesma revisão), mas para um lote de aulas. Converse em português (pt-BR). **Esta skill não altera a `next-class`**, que continua valendo para uma aula por vez.

**Por que existe (2026-11-20):** no lote 2.6.3 a 2.6.10, feito pela `next-class` numa sessão só, cada chamada de ferramenta reenviava todo o contexto acumulado: transcrições, resumos do professor, quizzes, respostas dos validadores e as saídas grandes do Playwright. Na oitava aula, cada passo ainda carregava as sete anteriores, e o custo crescia de forma quadrática com o número de aulas. Com um agente por aula, cada contexto fica pequeno e o custo total cresce de forma linear. O custo fixo de cada agente (reler a skill, as referências e as fontes da aula) compensa a partir de umas 3 ou 4 aulas conceituais. Para 1 ou 2 aulas, use a `next-class`.

## Fonte única das regras

Não duplique regras. Tudo o que define **o que** gerar está em `.claude/skills/next-class/SKILL.md` e nas referências dela (`references/quiz.md`, `references/revisao.md`): Contexto atual, Estrutura de arquivos, Aulas práticas, Aulas curtas, Aulas de abertura, Escopo do conteúdo, Parâmetros (`/audio`, `/noquizz`), Quizz já tentado, Tarefas 1 a 4 e o fluxo de revisão. Esta skill define só **como** dividir o trabalho.

Os scripts (`login.js`, `list-lessons.js`, `capture.js`, `write-lesson.mjs`, `lint-quizz.mjs`) ficam em `.claude/skills/next-class/scripts/`.

## Papéis

| Papel | Modelo | Faz |
|---|---|---|
| **Sessão principal** (orquestrador) | qualquer um | Lista as aulas, classifica, captura todas, lança os agentes, atualiza o `acompanhamento.md` só para Pendentes, roda o áudio se houver `/audio` e consolida o relatório. **Não lê transcrição nem resumo do professor, e não escreve resumo nem quizz.** |
| **Agente por aula conceitual** | Opus (`model: "opus"`); Sonnet (`model: "sonnet"`) se o vídeo tiver menos de 5 min | É o gerente da `revisao.md` para uma aula: escreve o resumo e o quizz, roda o lint e conduz o validador Sonnet. |
| **Agente das aulas leves** | Opus (`model: "opus"`) | Um único agente para todas as aulas práticas e de abertura do lote: escreve cada resumo e conduz o validador de cada um. São aulas baratas (só o resumo), por isso não ganham um agente cada. |
| **Validador** | Sonnet | Criado pelo agente da aula, como define a `revisao.md`. |

O gerente é Opus, por isso esses agentes rodam em Opus, mesmo que a sessão principal esteja em outro modelo. **Exceção (2026-11-20):** a aula conceitual com vídeo abaixo de 5 minutos (3 perguntas) roda com gerente Sonnet, como permite a `revisao.md`. O usuário pediu isso para poupar a cota semanal, que divide com o trabalho; são aulas com pouco conteúdo, em que o Opus faz pouca diferença.

## Qual intervalo processar

- **Sem argumento:** da próxima aula (regra de "Qual aula processar" da `next-class`) até o fim do capítulo atual.
- **`até <id>`** ou **`<id>..<id>`:** esse intervalo, dentro de um só capítulo.
- **Parâmetros** (`/audio`, `/noquizz`) como na `next-class`, valendo para todas as aulas do lote.
- **Não atravesse capítulos.** Se o intervalo passar do fim do capítulo, processe até a última aula dele, avise e pergunte se deve seguir para o próximo. Isso vale também quando o capítulo atual já acabou: pergunte antes de começar o seguinte, como na `next-class`.
- **Aula já existente:** aplique "Quizz já tentado" e a regra de "crie só o que falta". Não recapture nem regenere o que existe. O agente da aula recebe a lista do que falta.

## Fluxo

### 1. Listar e classificar (sessão principal)

Faça o login, liste as aulas (`list-lessons.js`) e monte a tabela do lote: id, título, duração, tipo e número de perguntas.

- **Tipo:** conceitual, prática ou abertura, pelas regras da `next-class` (título e duração). Na dúvida, marque como conceitual: o agente da aula confirma pela transcrição e pode reclassificar (veja o relatório do agente).
- **Perguntas e palavras:** pela tabela de "Aulas curtas".

Mostre a tabela ao usuário numa mensagem curta e siga sem esperar resposta, a menos que algo esteja ambíguo.

### 2. Capturar todas as aulas (sessão principal)

A captura é **sequencial** e fica na sessão principal: o navegador é um só, e o `.playwright-mcp/capture.json` é sobrescrito a cada aula. Para gastar pouco:

- Mande numa mesma mensagem, em ordem: `browser_navigate` da aula, `capture.js` e `browser_evaluate` com `filename`. Na mensagem seguinte, mande o `write-lesson.mjs` dessa aula junto com o navigate, o capture e o evaluate da próxima. As ferramentas rodam na ordem em que são enviadas.
- Filtre a saída do `write-lesson.mjs` (por exemplo, `| grep -c 'txt\|\.md'` deve dar 2). Confira só o título e as contagens que o `capture.js` devolve.
- **Não leia** a transcrição nem o resumo do professor: quem lê é o agente da aula.

Se uma aula vier com contagem zero, siga a regra da `next-class` (avise; sem transcrição nem resumo, pergunte).

### 3. Lançar os agentes (sessão principal)

Lance, **em paralelo e em segundo plano** (`run_in_background: true`), um agente por aula conceitual (Opus, ou Sonnet abaixo de 5 min) e um agente Opus para todas as aulas leves. Paralelo e sequencial gastam os mesmos tokens; o paralelo só ganha tempo. Se o lote tiver mais de 5 agentes, lance em ondas de até 5, por causa do limite de taxa.

Use o modelo de prompt abaixo, preenchendo os campos. O agente começa do zero, então o prompt precisa ser autossuficiente.

```
Você é o gerente (<Opus | Sonnet>) da aula <id> "<título>" do MBA Full Cycle, na skill next-episode. Responda em português.

Pasta da aula: <caminho absoluto>
Tipo: <conceitual | prática | abertura> · Vídeo: <mm:ss> · Perguntas: <N> · Resumo: <faixa de palavras>
O que falta criar: <resumo gerado, quizz e gabarito | só o resumo | ...>
Base da aula anterior, para escopo e distratores: <caminho do .resumo.md da aula anterior; se ele ainda não existir (agentes em paralelo), o resumo do professor dela, summary/<título>.md>

Leia antes de escrever:
- d:\FullCycle\.claude\skills\next-class\SKILL.md: seções "Aulas práticas", "Aulas curtas", "Aulas de abertura", "Escopo do conteúdo", "Tarefa 2" e "Tarefa 3";
- d:\FullCycle\.claude\skills\next-class\references\quiz.md e references\revisao.md;
- a transcrição (transcription/) e o resumo do professor (summary/<título>.md) da aula.

Faça:
1. Confirme o tipo pela transcrição. Se a aula for prática ou de abertura, gere só o resumo e diga isso no relatório.
2. Escreva summary/<título>.resumo.md (Tarefa 2) e, se for conceitual, quizz/quizz.<título>.md e quizz/quizz.<título>.gabarito.md (Tarefa 3, formato de quiz.md).
3. Rode o lint até ficar limpo: node d:/FullCycle/.claude/skills/next-class/scripts/lint-quizz.mjs "<quizz>" "<gabarito>".
4. Conduza o validador Sonnet como define a revisao.md (Agent com model "sonnet", criado uma vez e acionado depois com SendMessage; 2 validações; a 3ª só para erro de gabarito ou de conteúdo; Pendente se não passar).
5. Espere a resposta de cada validação antes de seguir. Crie o validador em primeiro plano (run_in_background: false), para o veredito vir no próprio resultado. A resposta a um SendMessage chega depois, como mensagem: enquanto houver validação sem resposta, não escreva o relatório. Se precisar esperar, encerre o turno só com a linha "AGUARDANDO VALIDAÇÃO <n>" e escreva o relatório quando a resposta chegar. Nunca entregue um relatório com "resultado não recebido" ou "sem status".
6. Não edite acompanhamento.md, dados/ nem doc/: quem atualiza é a sessão principal.

Cuidados que já custaram retrabalho:
- Escreva distratores que sejam meias-verdades desde o início, e faça perguntas de cenário. O validador recusa alternativas absurdas e perguntas que são só uma frase do professor repetida.
- Arquivos em LF. O Python no Windows grava CRLF em modo texto, e o lint passa a ler "0 perguntas". Use open(..., newline='') ou edite com Edit/Write.
- Para trocas em lote, grave o JSON de substituições com Write num arquivo e passe o caminho ao script. Heredoc com aspas e crases quebra o bash.
- Não use absolutos ("só", "apenas", "nenhum", "única", "sempre") só nas erradas, e mantenha a correta com tamanho parecido com as outras.
- Atribua ao professor o que é opinião dele, e não transforme uma contagem inconsistente da fala dele em fato.

Responda só com este relatório (no máximo 15 linhas):
AULA <id> · tipo final: <tipo> (<"reclassificada: motivo" se mudou>)
Resumo gerado: <n> validações · <Aprovado | Pendente — problema>
Quizz: <n> validações · <Aprovado | Pendente — problema | não gerado — motivo> · <N> perguntas · letras <A:x B:y C:z D:w>
Correções pontuais depois da última validação: <lista curta ou "nenhuma">
O que mudou por causa da revisão: <1 ou 2 linhas>
```

Para o agente das aulas leves, use o mesmo modelo, com uma linha "Pasta, tipo e duração" por aula, e peça um bloco de relatório por aula.

Enquanto os agentes rodam, não leia os arquivos deles nem os acompanhe pela saída: espere as notificações. Uma linha "AGUARDANDO VALIDAÇÃO" não é relatório: o agente retoma sozinho quando o validador responde, então não mande mensagem a ele nem ao validador. Isso acontecia antes desta regra (2026-11-20): na 2.7.5 e na 2.7.6, o agente entregou o relatório antes da 2ª validação e precisou mandar outro quando a resposta chegou.

### 4. Depois dos agentes (sessão principal)

- **Pendentes:** registre no `acompanhamento.md` cada artefato Pendente, como manda a `revisao.md`. Aprovados não ganham linha (o quizz ganha linhas quando for aplicado pela `/init`).
- **Áudio:** só com `/audio`. Invoque a `get-audio` em sequência para cada aula conceitual com o resumo aprovado. Aulas práticas e de abertura ficam sem áudio.
- **Commit:** só se o usuário pedir.

### 5. Relatório final (sessão principal)

Uma tabela por aula (id, tipo, resumo gerado, quizz, validações), as correções pontuais, os Pendentes com o problema, o que não foi gerado (áudio sem `/audio`, quizz de aula prática ou de abertura) e as reclassificações. Feche com:

- a orientação para os quizzes: `/clear`, `/model sonnet` e `/init <id>` para cada aula conceitual, dizendo em qual situação de "Quizz já tentado" cada uma está;
- o próximo passo: o capítulo acabou (pergunte se deve seguir) ou qual é a próxima aula.
