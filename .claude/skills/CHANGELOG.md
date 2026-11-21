# Registro de alterações das skills

Histórico das mudanças em `.claude/skills/`, da mais recente para a mais antiga. A primeira parte vem do histórico do Git, que começa em 2026-11-15. A segunda reúne as mudanças anteriores, registradas com data no texto das próprias skills.

Ao alterar uma skill, acrescente uma entrada aqui com a data, o motivo e os arquivos tocados.

## Pelo histórico do Git

### 2026-11-20 · next-episode: agente espera o validador

**`next-episode`** (`next-episode/SKILL.md`)

- O modelo de prompt ganhou o passo 5: o agente cria o validador em primeiro plano, espera a resposta de cada validação e não entrega relatório com validação em aberto. Se precisar esperar uma resposta de SendMessage, encerra o turno só com "AGUARDANDO VALIDAÇÃO <n>". A sessão principal não trata essa linha como relatório.
- **Motivo:** no lote 2.7.1 a 2.7.6, os agentes da 2.7.5 e da 2.7.6 entregaram o relatório com a 2ª validação sem resposta e mandaram outro quando o OK chegou. Isso gerou relatórios duplicados e quase levou a sessão principal a acionar o validador de novo.

### 2026-11-20 · capture.js mais curto

**`next-class`** (`scripts/capture.js`, novo `scripts/capture.md`)

- Os comentários do `capture.js` foram para o `capture.md`, e o código ficou mais compacto (de 4,5 KB para cerca de 3 KB), sem mudar o comportamento. Testado na 2.7.6: as mesmas contagens de antes.
- **Motivo:** o Playwright MCP devolve o arquivo inteiro na saída de cada `browser_run_code_unsafe`. Na captura em lote da `next-episode`, esse texto se repete a cada aula e é reenviado em todos os passos seguintes da sessão principal.

### 2026-11-20 · Gerente Sonnet nas aulas abaixo de 5 minutos

**`next-episode`, `next-class`, `revisao.md`** (e `doc/skill.nextEpisode.md`, `doc/skill.nextClass.md`)

- A aula conceitual com vídeo abaixo de 5 minutos (3 perguntas) passa a ter gerente Sonnet: na `next-episode`, o agente da aula roda com `model: "sonnet"`; na `next-class`, a sessão pode estar em Sonnet. O validador continua sendo um agente Sonnet separado. As demais aulas e a `next-class-adv` seguem com gerente Opus.
- **Motivo:** o usuário estava com 26% da cota semanal no segundo dia, e a cota é dividida com o trabalho. As aulas curtas têm pouco conteúdo, e o Opus faz pouca diferença nelas.

### 2026-11-20 · get-audio alinhada e documentação das skills

**`get-audio`** (`get-audio/SKILL.md`)

- Aulas práticas e de abertura passam a ser identificadas pelas regras da `next-class`: título com "Hands on -", "na prática", "Demonstração" ou "Executando", ou aula que só abre o capítulo. Na dúvida, uma aula com resumo mas sem quizz costuma ser desse tipo.
- **Motivo:** só "Hands on -" contava, e um `/get-audio 2.6.*` geraria áudio das demonstrações em código 2.6.7 a 2.6.10.

**Documentação** (`doc/skill.<nome>.md`)

- `doc/skill.nextClass.md` foi atualizado com o estado atual: tipos de aula, tamanhos pela duração, parâmetros, regras dos quizzes, lint, quizz já tentado e skills relacionadas.
- Criados os documentos das demais skills: `skill.nextEpisode.md`, `skill.nextClassFree.md`, `skill.nextClassAdv.md`, `skill.init.md`, `skill.initAdv.md`, `skill.getAudio.md` e `skill.updDashboard.md`.

### 2026-11-20 · `cbd1b49` Cria a skill next-episode e o registro de alterações das skills

**Nova skill `next-episode`** (`next-episode/SKILL.md`)

- Processa várias aulas de uma vez: o resto do capítulo (`/next-episode`), `até <id>` ou `<id>..<id>`, com `/audio` e `/noquizz` como na `next-class`.
- Divide o trabalho assim: a sessão principal captura todas as aulas em sequência; um agente Opus por aula conceitual escreve o resumo e o quizz, roda o lint e conduz o validador Sonnet; um único agente Opus cuida das aulas práticas e de abertura; a sessão principal só consolida os relatórios e registra os Pendentes.
- Usa as regras de conteúdo da `next-class`, sem duplicá-las, como a `next-class-free`.
- O modelo de prompt dos agentes inclui o que causou retrabalho no lote 2.6.3 a 2.6.10: distratores implausíveis, arquivos gravados com CRLF pelo Python no Windows (o lint passa a ler "0 perguntas"), heredoc com aspas quebrando o bash e absolutos só nas alternativas erradas.
- **Motivo:** no lote 2.6.3 a 2.6.10, feito pela `next-class` numa sessão só, cada chamada reenviava todo o contexto acumulado (transcrições, quizzes, respostas dos validadores e saídas do Playwright), e o custo crescia de forma quadrática com o número de aulas. Com um agente por aula, o custo cresce de forma linear. Vale a partir de 3 ou 4 aulas conceituais.

**`next-class`** (`next-class/SKILL.md`)

- Novo parágrafo "Lotes de várias aulas": para 3 ou mais aulas conceituais, sugerir a `next-episode` antes de começar.

**Este registro** (`CHANGELOG.md`): criado.

### 2026-11-17 · `c496083` Estuda o capítulo 4 do Prompt Engineering até a aula 2.4.11

**Áudio passa a ser opcional** (`next-class/SKILL.md`)

- Antes, a `next-class` gerava o áudio sempre, e `/noaudio` cortava. Agora só gera com `/audio`. O parâmetro `/noaudio` ficou desnecessário.
- A seção "Parâmetros de corte" virou "Parâmetros", e a descrição da skill foi atualizada.
- **Motivo:** pedido do usuário.

**Lint obrigatório dos quizzes** (novo `next-class/scripts/lint-quizz.mjs`; `next-class/references/revisao.md`; `next-class/SKILL.md`; `next-class-adv/SKILL.md`; `next-class-free/SKILL.md`)

- O script confere os vícios mecânicos de `references/quiz.md`: correta mais longa, absolutos só nas erradas, letras concentradas e enunciado que repete palavra só da correta.
- O gerente roda o lint antes de chamar o validador, e cada alerta precisa ser corrigido ou justificado.
- O critério 5 do validador passou a cobrir só o que o script não vê: distrator absurdo e absoluto justificado de forma fraca. O gerente deixou de contar letras e tamanhos "a olho".
- **Motivo (2026-11-16):** esses vícios passavam pelo gerente e pelo validador porque, lidos a olho, parecem conteúdo (por exemplo, "sempre" e "únicos" numa alternativa errada da 2.4.3).

### 2026-11-15 · `530f8fd` Conclui o nivelamento de LangChain e o capítulo 3 do Prompt Engineering

**Revisão programada na `next-class-free`** (novos `next-class/scripts/or-revisao.mjs` e `or-revisar.mjs`; `or-gerar.mjs`, `or-aplicar.mjs`, `or-lib.mjs`; `next-class-free/SKILL.md`)

- A validação por um segundo modelo grátis virou uma revisão em três etapas: checagem por código (`checarQuizz`), revisão pergunta a pergunta por outro modelo grátis e correção das perguntas apontadas, em até 3 rodadas. O que sobra sai como `PENDENTE`.
- `or-gerar.mjs` passou a aceitar `--duracao mm:ss` (o campo `duracao` do `list-lessons.js`) e a embaralhar as alternativas para distribuir a letra correta.
- `or-aplicar.mjs`: as perguntas novas da refação passam pela checagem por código e, se houver vício, por uma correção antes de serem mostradas.
- Novo `or-revisar.mjs`: revisa um quizz já gravado (`--checar` só roda o código). Mantém numeração, conceito e letra correta, guarda os originais em `*.bak` e se recusa a revisar um quizz já respondido, a não ser com `--force`.
- **Motivo:** os modelos grátis repetiam os vícios que entregam a resposta. A 2.3.2 saiu com 9 de 10 perguntas assim e foi respondida com 10/10. Além disso, sem a duração real, a estimativa pelo tamanho da transcrição errava perto dos cortes: a 2.3.2, de 10:56, foi estimada em 9,8 min e saiu com 5 perguntas em vez de 10.

### 2026-11-15 · `3fae8e3` Adiciona material do MBA, skills e .gitignore

Primeiro commit das skills, que já existiam antes do repositório. Entraram:

| Skill | O que faz |
|---|---|
| `next-class` | Captura a aula, gera o resumo e o quizz, conduz a revisão (gerente Opus + validador Sonnet) e gera o áudio. Inclui `references/quiz.md`, `references/revisao.md` e os scripts de captura (`login.js`, `list-lessons.js`, `capture.js`, `write-lesson.mjs`). |
| `next-class-adv` | Material avançado e quizz avançado de uma aula já capturada, só quando pedido. |
| `next-class-free` | Versão econômica: resumo e quizz gerados por modelos grátis do OpenRouter (`or-gerar.mjs`, `or-aplicar.mjs`, `or-lib.mjs`). |
| `init` e `init-adv` | Aplicam o quizz padrão ou o avançado, uma pergunta por vez. |
| `get-audio` | Gera o MP3 da aula a partir do resumo gerado (`gerar_audio.py`). |
| `upd-dashboard` | Atualiza os dados do dashboard (`update.mjs`, `scrape-plataforma.js`). |

## Antes do Git (datas registradas nas skills)

| Data | Skill ou arquivo | Mudança |
|---|---|---|
| 2026-11-08 | `next-class`, `quiz.md` | **Escopo do conteúdo:** pergunta, alternativa e gabarito só usam o que a aula e as anteriores ensinaram, depois que uma pergunta da 2.2.5 comparou truncamento com sumarização, tema da aula seguinte. |
| 2026-11-08 | `next-class` | **Aulas de abertura** passam a ficar sem quizz e sem áudio, depois que o quizz da 2.2.1 cobrou temas só anunciados. A refação também ficou restrita ao que a aula ensina (incidente da 2.2.3). |
| 2026-11-07 | `next-class`, `init`, `init-adv` | **Refazer as erradas** logo depois do quizz, sem esperar o pedido do usuário. |
| 2026-11-05 | `next-class` | A numeração dos capítulos recomeça em cada módulo, e o id passa a ser `módulo.capítulo.aula` a partir do módulo 2. O Fundamentos foi concluído e o Prompt Engineering virou o módulo em estudo. |
| 2026-11-04 | `next-class` | O "Bônus de nivelamento" fica fora da numeração dos módulos. |
| 2026-11-02 | `next-class`, `quiz.md` | **Aulas curtas:** 5 perguntas para vídeos de 5 a 10 min e 3 abaixo disso, com resumo menor. O quizz por capítulo foi testado e descartado. |
| 2026-11-01 | `next-class` | **Aulas práticas** ficam só com transcrição, resumo do professor e resumo gerado, sem quizz e sem áudio. |
| 2026-10-31 | `revisao.md`, `get-audio` | Economia de tokens: o resumo e o quizz vão juntos ao validador, que lê só as fontes necessárias, e a 3ª validação fica só para erro de gabarito ou de conteúdo. O roteiro do áudio passa a ter cerca de 1,5 vez a duração do vídeo, com teto de 15 minutos (é o texto mais longo que o Opus escreve por aula, e o usuário ouve cada aula duas vezes em caminhadas de cerca de 35 minutos). |
| 2026-10-26 | `next-class`, `next-class-adv` | O avançado sai da `next-class` e vira a skill `next-class-adv`, que só roda a pedido. |
| 2026-10-16 | `quiz.md` | Volta a 10 perguntas por quizz, ainda com o filtro de relevância. |
| 2026-10-15 | `quiz.md` | **Filtro de relevância:** saem contas à mão, datas, autores e constantes de paper. |
| 2026-10-14 | `quiz.md` | Toda conta é refeita fator por fator antes de mostrar a pergunta, depois de uma refação com gabarito errado. |
| 2026-10-11 | `next-class` | A skill é criada, substituindo o fluxo improvisado por aula. |
