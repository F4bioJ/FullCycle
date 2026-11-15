---
name: next-class-free
description: Versão econômica da next-class. Captura a próxima aula do MBA Full Cycle na plataforma (transcrição e resumo do professor) e gera o resumo próprio, o quizz e o gabarito com modelos grátis do OpenRouter, sem gastar tokens do Claude nessa parte; o quizz é aplicado no terminal pelo usuário. Use quando o usuário digitar "/next-class-free", "/next-class-free <id>" ou pedir a próxima aula "no openrouter", "versão free", "grátis" ou "economizando tokens". Não substitui a next-class, que continua funcionando como sempre.
---

# next-class-free

Mesmo objetivo da `next-class` (capturar a aula e gerar resumo e quizz), mas o texto gerado vem de modelos grátis do OpenRouter, para poupar os tokens do usuário (a conta é dividida com o trabalho). Converse em português (pt-BR). **Esta skill não altera a `next-class`**: se o usuário chamar `/next-class`, tudo acontece como antes.

Aqui você é só o orquestrador: abre a plataforma, captura, grava e roda scripts. **Não escreva resumo, quizz, gabarito nem validação você mesmo**, e não leia a transcrição: quem lê é o script. Qualquer modelo serve (Sonnet basta).

## Fonte única das regras

Não duplique regras. Leia só estas seções de `.claude/skills/next-class/SKILL.md` e siga-as como estão:

- **Contexto atual** (URLs, módulo em estudo, pasta do módulo);
- **Estrutura de arquivos** (pastas, id da aula, numeração de módulo, capítulo e aula);
- **Qual aula processar** (sem argumento = próxima aula; com número ou id; `/noquizz`; `/noaudio`, que aqui é o padrão, veja abaixo);
- **Quizz já tentado** (antes de gerar ou aplicar, confira o `acompanhamento.md`: sem tentativa, aplica do início; com incorretas pendentes, reaplica só as incorretas; sem pendentes, pergunta se quer refazer do início);
- **Tarefa 1: capturar** (login, listar, abrir, capturar, salvar e gravar com os scripts do Playwright).

Os scripts de captura (`login.js`, `list-lessons.js`, `capture.js`, `write-lesson.mjs`) ficam em `.claude/skills/next-class/scripts/` e são os mesmos.

## O que muda em relação à next-class

| | next-class | next-class-free |
|---|---|---|
| Captura | você | você (igual) |
| Resumo gerado | você + validador Sonnet | `or-gerar.mjs` (OpenRouter) |
| Quizz e gabarito | você + validador Sonnet | `or-gerar.mjs` (OpenRouter, com a revisão programada: código + outro modelo grátis) |
| Áudio | `get-audio` | **não gera** (só se o usuário pedir) |
| Aplicar o quizz | `/init` | `or-aplicar.mjs`, no terminal do usuário |
| Gerente precisa ser Opus | sim | **não** |

## Fluxo

0. **Conferir tentativa anterior** (seção "Quizz já tentado" da `next-class`). Se a aula já existe e o quizz já foi respondido, não recapture nem gere de novo o que existe: pule direto para o passo 4. Com incorretas pendentes, avise que o `or-aplicar.mjs` vai reaplicar só elas; sem pendentes, avise que ele vai perguntar se o usuário quer refazer do início.
1. **Capturar** (Tarefa 1 da `next-class`). Se a aula for prática (regra de "Aulas práticas" da `next-class`), gere só o resumo: use `--so-resumo`.
2. **Gerar** com o script, na raiz do projeto:
   ```
   node .claude/skills/next-class/scripts/or-gerar.mjs <id da aula> --duracao <mm:ss>
   ```
   Passe sempre `--duracao` com o campo `duracao` que o `list-lessons.js` devolveu para a aula. Sem ele, o script estima a duração pelo tamanho da transcrição, e a estimativa erra perto dos cortes (a 2.3.2, de 10:56, foi estimada em 9,8 min e saiu com 5 perguntas em vez de 10). A primeira linha da saída mostra a duração usada.
   Ele lê a transcrição e o resumo do professor, escolhe o número de perguntas pela duração (10, 5 ou 3), gera `summary/<título>.resumo.md`, `quizz/quizz.<título>.md` e `quizz/quizz.<título>.gabarito.md`, passa o quizz pela **revisão programada** (abaixo) e embaralha as alternativas para distribuir a letra correta. Nunca sobrescreve arquivo existente (`--force` só se o usuário pedir). Os modelos usados, cada rodada da revisão e a lista de pendências aparecem na saída.
3. **Relatório** curto: o que foi capturado, o que foi gerado, os modelos que responderam, a distribuição das letras e as pendências da revisão (linha `PENDENTE`). Se o script falhar com "Todos os modelos falharam" (limite diário dos modelos grátis), diga isso e sugira tentar mais tarde ou usar `/next-class`. Não gere o material por conta própria como alternativa.
4. **Aplicar o quizz:** diga ao usuário para rodar no terminal dele, fora do Claude Code:
   ```
   node .claude/skills/next-class/scripts/or-aplicar.mjs <id da aula>
   ```
   O script confere o `acompanhamento.md` e decide sozinho: sem tentativa, aplica do início; com incorretas pendentes, reaplica só elas com perguntas novas; sem pendentes, pergunta se quer refazer do início (`--reiniciar` força o início). Ele faz uma pergunta por vez, corrige pelo gabarito, grava `quizz.<título>.resultado.md`, atualiza o `acompanhamento.md` e refaz as erradas com perguntas novas geradas no OpenRouter. Isso não gasta tokens do Claude. No fim ele lembra do dashboard: o `/upd-dashboard` é opcional e só precisa rodar quando o usuário quiser o painel atualizado.

## Revisão programada

Os modelos grátis repetem os "Vícios que entregam a resposta" de `references/quiz.md` (correta mais longa, alternativa descartável, palavra absoluta só nas erradas); a 2.3.2 saiu com 9 de 10 perguntas assim e foi respondida 10/10. Por isso todo quizz desta skill passa por `or-revisao.mjs`, sem tokens do Claude:

1. **Checagem por código** (`checarQuizz`): correta mais de 25% maior que a média das erradas (ou 15% maior que a maior errada); alternativa com menos de 55% do tamanho da maior; palavra absoluta só nas erradas (numa pergunta, quando 2 ou mais erradas a têm; no quizz todo, quando 3 ou mais perguntas a têm e nenhuma correta); 2 ou mais palavras do enunciado que só aparecem na correta.
2. **Revisão por outro modelo grátis** (diferente do gerador), pergunta por pergunta: gabarito errado, outra alternativa defensável, algo fora da aula ou de aula posterior, alternativas erradas descartáveis e se o enunciado entrega a resposta.
3. **Correção** das perguntas apontadas, com a faixa de tamanho que as 4 alternativas devem seguir, e nova checagem. São até 3 checagens (`--rodadas N` muda); o que sobrar sai como `PENDENTE`.

A refação das erradas no `or-aplicar.mjs` passa pela checagem por código e, se houver vício, por uma correção antes de ser mostrada.

**Quizz já gravado** (gerado antes da revisão, ou para conferir de novo):
```
node .claude/skills/next-class/scripts/or-revisar.mjs <id> [<id> ...] --checar   # só código, sem modelo, não grava
node .claude/skills/next-class/scripts/or-revisar.mjs <id>                       # revisão completa e regrava
```
A revisão completa mantém a numeração, o conceito e a letra correta de cada pergunta, e guarda os originais em `*.bak`. Ela se recusa a revisar um quizz já respondido (`resultado.md` ou ✅/❌ no `acompanhamento.md`), porque o resultado registrado deixaria de bater; `--force` só se o usuário pedir.

## Regras

- Não use a skill `get-audio` nem o validador Sonnet, a menos que o usuário peça.
- Se o usuário pedir o áudio, a `get-audio` usa o resumo gerado como fonte: avise que esse resumo veio de um modelo grátis e não passou pela revisão Opus + Sonnet.
- O resumo e o quizz desta skill **não** passam pelo fluxo de `references/revisao.md`. Avise isso no relatório e, se o usuário desconfiar de uma pergunta, ofereça corrigi-la (aí sim com você).
- Quizz com `PENDENTE` no relatório: mostre as perguntas apontadas e o problema, e pergunte se ele quer ajustar antes de aplicar (rodar `or-revisar.mjs <id>` de novo ou corrigir com você).
- Modelos grátis mudam. A lista fica em `.claude/skills/next-class/scripts/or-lib.mjs` (`MODELOS`) e pode ser trocada pela variável `OPENROUTER_MODELS`, separada por vírgulas.
