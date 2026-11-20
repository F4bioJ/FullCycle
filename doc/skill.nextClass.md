# Skill next-class

Skill para preparar as aulas do curso "MBA de Engenharia de Software com IA" (Faculdade Full Cycle). A definição executável está em `.claude/skills/next-class/` (`SKILL.md`, `references/quiz.md`, `references/revisao.md`); este documento descreve o que ela faz e por quê. O histórico das mudanças fica em `.claude/skills/CHANGELOG.md`.

Vale a partir da próxima execução. Capítulos e aulas anteriores estão fora de escopo e não são regerados, a não ser que o usuário peça uma aula específica.

## Artefatos de cada aula

Pasta: `<nº módulo> - <módulo>/<nº capítulo> - <capítulo>/<nº aula> - <título>/`. Os capítulos recomeçam em cada módulo. O id da aula é `módulo.capítulo.aula` (ex.: `2.1.1`), e o Fundamentos mantém os ids de duas partes (ex.: `2.4`).

| # | Artefato | Arquivo | Origem | Revisão |
|---|---|---|---|---|
| 1 | Cópia da transcrição | `transcription/<título>.txt` | site | não |
| 2 | Cópia do resumo do professor | `summary/<título>.md` | site | não |
| 3 | Resumo gerado (bsc) | `summary/<título>.resumo.md` | gerado | sim |
| 4 | Quizz da aula + gabarito | `quizz/quizz.<título>.md`, `.gabarito.md` | gerado | sim |
| 5 | Áudio da aula (só com `/audio`) | `<módulo>/<capítulo>/audio/<nº - título>.mp3` e `.roteiro.md` | skill `get-audio` | não |

O material avançado e o quizz avançado (`advanced/<título>.adv.md`, `quizz.<título>.adv.*`) saíram da `next-class` em 2026-10-26 e só são gerados pela skill `next-class-adv`, quando o usuário pedir.

## Tipos de aula

| Tipo | Como identificar | Artefatos |
|---|---|---|
| Conceitual | o padrão | 1 a 4 (e 5 com `/audio`) |
| Prática (desde 2026-11-01) | título com "Hands on -", "na prática", "Demonstração" ou "Executando"; na dúvida, a transcrição (a maior parte é demonstração numa ferramenta) | 1 a 3; o resumo foca no experimento: o que testar, o que observar e o que isso mostra |
| Abertura (desde 2026-11-08) | só abre o capítulo ou anuncia temas, em geral com menos de 5 min | 1 a 3 |

Em aulas práticas e de abertura, o quizz cobraria detalhes de tela ou temas só anunciados. Elas ganham quizz ou áudio só se o usuário pedir aquela aula.

**Tamanho pela duração do vídeo** (desde 2026-11-02, campo `duracao` do `list-lessons.js`):

| Vídeo | Perguntas | Resumo gerado |
|---|---|---|
| 10 min ou mais | 10 | 500 a 1.000 palavras |
| de 5 a menos de 10 min | 5 | 250 a 500 palavras |
| menos de 5 min | 3 | 100 a 250 palavras |

Nas faixas menores, o número de perguntas é um teto: se a aula não sustenta perguntas relevantes, faz menos e avisa.

## Parâmetros

| Parâmetro | Efeito |
|---|---|
| sem argumento | a próxima aula do capítulo atual; se o capítulo acabou, avisa e pergunta antes de seguir |
| `<n>` ou `<id>` | essa aula |
| `/audio` | gera o áudio (desde 2026-11-17; antes era o padrão, e `/noaudio` cortava) |
| `/noquizz` | não gera o quizz |

Os parâmetros valem só para a execução em que foram passados.

## Tarefas

1. **Capturar** (artefatos 1 e 2): login em `plataforma.fullcycle.com.br` com as credenciais do `.env`, navegação até a aula e gravação da transcrição e do resumo. Feito por scripts Playwright em `scripts/` (`login.js`, `list-lessons.js`, `capture.js`, `write-lesson.mjs`).
2. **Resumo gerado** (3): todos os conceitos da aula, na ordem do professor, sem acrescentar o que a aula não disse.
3. **Quizz da aula** (4): nível e formato em `references/quiz.md`.
4. **Áudio** (5): só com `/audio`; invoca a skill `get-audio`.

## Regras dos quizzes

- **Relevância (desde 2026-10-15):** cada pergunta precisa mudar como alguém entende, escolhe ou depura um sistema de IA. Ficam de fora contas à mão, datas, autores e constantes de paper.
- **Nível:** um aluno atento deve acertar entre 5 e 8 de 10. Para isso, as perguntas usam cenários, "por quê", trocas entre abordagens e "qual está INCORRETA", com distratores que são meias-verdades.
- **Escopo (desde 2026-11-08):** pergunta, alternativas e gabarito usam só o que a aula e as anteriores ensinaram, nunca o tema de uma aula posterior, nem como comparação.
- **Vícios proibidos:** correta mais longa, absolutos ("só", "sempre", "nunca") só nas erradas, letra correta concentrada numa posição, alternativa absurda e enunciado que repete palavras só da correta.

## Geração e revisão (artefatos 3 e 4)

Dois papéis, detalhados em `references/revisao.md`:

- **Gerente (Opus 5.5):** a própria sessão. Escreve e corrige os artefatos e decide o status de cada um. A skill exige Opus e pede `/model` se a sessão estiver em outro modelo.
- **Validador (Sonnet 5.5):** só avalia; responde "OK" ou lista (artefato/questão, problema, evidência, sugestão). Um por aula, acionado com `SendMessage` nas rodadas seguintes.

Fluxo (desde 2026-10-31, para economizar tokens):

1. O gerente escreve o resumo e o quizz.
2. **Lint obrigatório (desde 2026-11-16):** antes do validador, o gerente roda `scripts/lint-quizz.mjs`, que acusa os vícios mecânicos (tamanhos, absolutos, letras, palavras do enunciado), e corrige ou justifica cada alerta.
3. O resumo e o quizz vão juntos ao validador, que lê só a transcrição, o resumo do professor, `quiz.md` e o resumo gerado da aula anterior.
4. São 2 validações; a 3ª só acontece para erro de gabarito ou de conteúdo. Problema pontual depois da última validação é corrigido pelo gerente e aprovado sem nova validação.
5. Se sobrar outro problema, o artefato fica **Pendente** (linha `> **Status:** Pendente — <problema>` no topo, registro no `acompanhamento.md`).

O relatório final traz a tabela de validações e o resultado de cada artefato, as correções pontuais, os Pendentes e o que não foi gerado, com o motivo.

## Aplicar o quizz

O quizz é aplicado numa sessão limpa, com Sonnet: `/clear`, `/model sonnet` e `/init <id da aula>` (ou `/init-adv`). Uma pergunta por vez, com explicação das certas e erradas, resultado em `quizz.<título>.resultado.md` e atualização do `acompanhamento.md`.

- **Quizz já tentado:** antes de aplicar, o `acompanhamento.md` decide. Sem tentativa, aplica do início. Com incorretas pendentes, reaplica só elas. Sem pendentes, pergunta se o usuário quer refazer do início, e a nova tentativa é acrescentada ao `resultado.md`.
- **Refazer as erradas (desde 2026-11-07):** quando o quizz termina com erros, a refação começa logo em seguida, com perguntas novas sobre os mesmos conceitos (repetir o texto mediria memória, não entendimento).

## Áudio e artefatos Pendentes

O áudio só é gerado com `/audio` e se o resumo gerado foi criado e aprovado. Se não, o relatório lista o áudio entre o que não pôde ser criado, com o motivo.

## Skill get-audio

Um MP3 por aula, todos em `<módulo>/<capítulo>/audio/`, voz `pt-BR-FranciscaNeural`, com cerca de 1,5 vez a duração do vídeo e no máximo 15 minutos (desde 2026-10-31), com marcadores de capítulo. Pensado para ouvir caminhando, com a tela bloqueada: o MP3 sai com tags ID3 (título, artista, álbum = capítulo, faixa = nº da aula, gênero Podcast) para o player de música do Android mantê-lo tocando. No WhatsApp, enviar como Documento.

## Skills relacionadas

| Skill | Quando usar |
|---|---|
| `next-episode` (desde 2026-11-20) | Várias aulas de uma vez (o resto do capítulo ou um intervalo). A sessão principal captura tudo e lança um agente Opus por aula conceitual, para o custo crescer de forma linear e não quadrática. Recomendada a partir de 3 aulas conceituais. |
| `next-class-free` | Versão econômica: resumo e quizz gerados por modelos grátis do OpenRouter, com revisão programada (código + outro modelo grátis), e quizz aplicado no terminal com `or-aplicar.mjs`. |
| `next-class-adv` | Material e quizz avançados de uma aula já capturada, só a pedido. |
| `init` / `init-adv` | Aplicam o quizz padrão ou o avançado. |
| `upd-dashboard` | Atualiza os dados do dashboard (`doc/dashboard.html`). |

Plano de estudo e ritmo: `doc/plano-de-estudo.md`.
