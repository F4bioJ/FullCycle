# Skill next-class-free

Versão econômica da `next-class`. A definição executável está em `.claude/skills/next-class-free/SKILL.md`, e os scripts ficam em `.claude/skills/next-class/scripts/` (`or-*.mjs`); este documento descreve o que ela faz e por quê. O histórico fica em `.claude/skills/CHANGELOG.md`.

Captura a aula como a `next-class`, mas o resumo, o quizz e o gabarito são gerados por modelos grátis do OpenRouter, sem gastar tokens do Claude nessa parte. A conta do usuário é dividida com o trabalho. A skill não altera a `next-class`, que continua funcionando como sempre.

## Diferenças em relação à next-class

| | next-class | next-class-free |
|---|---|---|
| Captura | a sessão | a sessão (igual) |
| Resumo gerado | Opus + validador Sonnet | `or-gerar.mjs` (OpenRouter) |
| Quizz e gabarito | Opus + validador Sonnet | `or-gerar.mjs`, com a revisão programada |
| Áudio | `get-audio` com `/audio` | não gera, a não ser que o usuário peça |
| Aplicar o quizz | `/init` | `or-aplicar.mjs`, no terminal do usuário |
| Gerente precisa ser Opus | sim | não (Sonnet basta) |

A sessão é só o orquestrador: abre a plataforma, captura, grava e roda scripts. Não escreve resumo, quizz, gabarito nem validação, e não lê a transcrição.

## Fluxo

1. **Conferir tentativa anterior** (regra "Quizz já tentado" da `next-class`). Se o quizz já foi respondido, não recaptura nem regera: vai direto à aplicação.
2. **Capturar** com os mesmos scripts da `next-class`. Em aula prática, gera só o resumo (`--so-resumo`).
3. **Gerar:** `node .claude/skills/next-class/scripts/or-gerar.mjs <id> --duracao <mm:ss>`. Escolhe 10, 5 ou 3 perguntas pela duração, grava o resumo, o quizz e o gabarito, passa o quizz pela revisão programada e embaralha as alternativas. Nunca sobrescreve arquivo existente (`--force` só a pedido).
4. **Relatório:** o que foi capturado e gerado, os modelos que responderam, a distribuição das letras e as pendências (`PENDENTE`). Se os modelos grátis atingirem o limite diário, a sessão avisa e sugere tentar mais tarde ou usar a `next-class`, sem gerar o material por conta própria.
5. **Aplicar:** o usuário roda `node .claude/skills/next-class/scripts/or-aplicar.mjs <id>` no terminal dele, fora do Claude Code. O script decide sozinho se aplica do início ou só as incorretas (`--reiniciar` força o início), corrige pelo gabarito, grava o resultado, atualiza o `acompanhamento.md` e refaz as erradas com perguntas novas.

O `--duracao` é obrigatório desde 2026-11-15: sem ele, a duração é estimada pelo tamanho da transcrição, o que erra perto dos cortes. A 2.3.2, de 10:56, foi estimada em 9,8 min e saiu com 5 perguntas em vez de 10.

## Revisão programada (desde 2026-11-15)

Os modelos grátis repetiam os vícios que entregam a resposta: a 2.3.2 saiu com 9 de 10 perguntas assim e foi respondida com 10/10. Por isso todo quizz passa por `or-revisao.mjs`, sem tokens do Claude:

1. **Checagem por código:** correta muito maior que as erradas, alternativa curta demais, absolutos só nas erradas e palavras do enunciado que só aparecem na correta.
2. **Revisão por outro modelo grátis,** diferente do gerador, pergunta por pergunta: gabarito errado, outra alternativa defensável, conteúdo fora da aula, alternativas descartáveis e enunciado que entrega a resposta.
3. **Correção** das perguntas apontadas e nova checagem, em até 3 rodadas (`--rodadas N`). O que sobra sai como `PENDENTE`.

As perguntas novas da refação, no `or-aplicar.mjs`, também passam pela checagem por código.

Para um quizz já gravado, `or-revisar.mjs <id> --checar` roda só o código, e `or-revisar.mjs <id>` faz a revisão completa e regrava. Ela mantém a numeração, o conceito e a letra correta, guarda os originais em `*.bak` e se recusa a revisar um quizz já respondido (`--force` só a pedido).

## Regras

- Não usa a `get-audio` nem o validador Sonnet, a menos que o usuário peça. Se ele pedir o áudio, a sessão avisa que o resumo veio de um modelo grátis e não passou pela revisão Opus + Sonnet.
- Quizz com `PENDENTE`: a sessão mostra as perguntas e o problema e pergunta se o usuário quer ajustar antes de aplicar.
- A lista de modelos fica em `or-lib.mjs` (`MODELOS`) e pode ser trocada pela variável `OPENROUTER_MODELS`.
