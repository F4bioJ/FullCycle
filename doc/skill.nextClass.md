# Skill next-class

Skill para preparar as aulas do curso "MBA de Engenharia de Software com IA" (Faculdade Full Cycle). A definição executável está em `.claude/skills/next-class/` (`SKILL.md`, `references/quiz.md`, `references/revisao.md`); este documento descreve o que ela faz e por quê.

Vale a partir da próxima execução. Capítulos e aulas anteriores estão fora de escopo e não são regerados.

## Artefatos de cada aula

Pasta: `<nº módulo> - <módulo>/<nº capítulo> - <capítulo>/<nº aula> - <título>/`. Os capítulos recomeçam em cada módulo. O id da aula é `módulo.capítulo.aula` (ex.: `2.1.1`), e o Fundamentos mantém os ids de duas partes (ex.: `2.4`).

| # | Artefato | Arquivo | Origem | Revisão |
|---|---|---|---|---|
| 1 | Cópia da transcrição | `transcription/<título>.txt` | site | não |
| 2 | Cópia do resumo do professor | `summary/<título>.md` | site | não |
| 3 | Resumo gerado (bsc) | `summary/<título>.resumo.md` | gerado | sim |
| 4 | Material avançado (adv): conceitos da aula + o que faltou, nível médio | `advanced/<título>.adv.md` | gerado | sim |
| 5 | Quizz bsc (10 perguntas sobre a aula) + gabarito | `quizz/quizz.<título>.md`, `.gabarito.md` | gerado | sim |
| 6 | Quizz adv (10 perguntas sobre o material avançado) + gabarito | `quizz/quizz.<título>.adv.md`, `.adv.gabarito.md` | gerado | sim |
| 7 | Áudio da aula | `<módulo>/<capítulo>/audio/<nº - título>.mp3` e `.roteiro.md` | skill `get-audio` | não |

bsc = básico, adv = avançado.

## Tarefas

1. **Capturar** (artefatos 1 e 2): login em `plataforma.fullcycle.com.br` com as credenciais do `.env`, navegação até a aula e gravação da transcrição e do resumo. Feito por scripts Playwright em `scripts/`.
2. **Resumo gerado** (3).
3. **Quizz bsc** (5): nível e formato em `references/quiz.md`.
4. **Áudio** (7): invoca a skill `get-audio`.

Desde 2026-10-26, o material avançado (4) e o quizz adv (6) só são gerados pela skill `next-class-adv`, quando o usuário pedir.

O quizz é aplicado numa sessão limpa, com Sonnet: `/clear`, `/model sonnet` e `/init <id da aula>` (ou `/init-adv`). Uma pergunta por vez, com explicação das certas e erradas, resultado em arquivo e atualização do `acompanhamento.md`.

## Geração e revisão (artefatos 3 a 6)

Dois papéis, detalhados em `references/revisao.md`:

- **Gerente (Opus 5.5):** a própria sessão. Escreve e corrige os artefatos e decide o status de cada um. A skill exige Opus e pede `/model` se a sessão estiver em outro modelo.
- **Validador (Sonnet 5.5):** só avalia; responde "OK" ou lista (artefato/questão, problema, evidência, sugestão). Um por aula, acionado com `SendMessage` nas rodadas seguintes.

Fluxo (desde 2026-10-31, para economizar tokens): o gerente escreve o resumo e o quizz e manda os dois juntos ao validador, que lê só a transcrição, o resumo do professor e o resumo gerado da aula anterior. São 2 validações; a 3ª só acontece para erro de gabarito ou de conteúdo. Problema pontual depois da última validação é corrigido pelo gerente e aprovado. Se sobrar outro problema, o artefato fica **Pendente** (linha `> **Status:** Pendente — <problema>` no topo, registro no `acompanhamento.md`).

## Áudio e artefatos Pendentes

O áudio só é gerado se o resumo gerado foi criado e aprovado. Se não, o relatório final lista o que não pôde ser criado e o motivo. O relatório sempre traz a tabela de validações e o resultado de cada artefato.

## Skill get-audio

Um MP3 por aula, todos em `<módulo>/<capítulo>/audio/`, voz `pt-BR-FranciscaNeural`, com cerca de 1,5 vez a duração do vídeo e no máximo 15 minutos (desde 2026-10-31), com marcadores de capítulo. Pensado para ouvir caminhando, com a tela bloqueada: o MP3 sai com tags ID3 (título, artista, álbum = capítulo, faixa = nº da aula, gênero Podcast) para o player de música do Android mantê-lo tocando. No WhatsApp, enviar como Documento.

Plano de estudo e ritmo: `doc/plano-de-estudo.md`.
