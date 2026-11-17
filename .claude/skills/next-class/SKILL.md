---
name: next-class
description: Prepara a próxima aula do MBA em Engenharia de Software com IA (Full Cycle) - entra na plataforma, captura a transcrição e o resumo do professor, gera um resumo próprio (básico) e o quizz da aula, e depois aplica o quizz uma pergunta por vez. O áudio só é gerado com /audio; /noquizz pula o quizz. O material e o quizz avançados ficam na skill next-class-adv. Use sempre que o usuário pedir "próxima aula", "next class", "captura a aula", "prepara a aula N", "quero estudar a próxima", "faz o quizz da aula", "refazer as que errei" ou mencionar aulas, transcrições, resumos ou quizzes do MBA / Full Cycle, mesmo sem citar a skill pelo nome.
---

# next-class

Transforma uma aula da plataforma Full Cycle em material de estudo: captura o conteúdo, resume e testa. Converse sempre em português (pt-BR).

Esta skill cobre só o conteúdo **básico**, o que a aula ensina. Desde 2026-10-26, o material avançado e o quizz avançado ficam na skill `next-class-adv`, que só roda quando o usuário pedir. O usuário estava atrasado no curso, e o avançado cobrava o que as aulas não cobram. Não gere nada do avançado aqui e não ofereça o avançado ao final.

## Contexto atual

| | |
|---|---|
| Curso | MBA em Engenharia de Software com IA |
| Página do curso | `https://plataforma.fullcycle.com.br/courses/a091b0fe-a5c6-4287-a3d3-1ec61defcfd3/463/224` |
| Módulo em estudo | Prompt Engineering |
| Pasta do módulo | `2 - Prompt Engineering` |
| Conteúdos do módulo | `https://plataforma.fullcycle.com.br/courses/a091b0fe-a5c6-4287-a3d3-1ec61defcfd3/463/224/267/conteudos` |
| Módulo concluído | Fundamentos de IA Generativa, em 2026-11-05, na pasta `1 - Fundamentos de IA Generativa` (`.../463/224/263/conteudos`) |

A hierarquia da plataforma é curso → módulo → capítulo → aula. As pastas locais começam no módulo.

O Prompt Engineering começa na aula `2.1.1`, em `2 - Prompt Engineering/1 - Iniciando com Prompt Engineering/1 - Introdução e overview da disciplina/`. Quando o usuário disser que mudou de módulo, abra a página do curso, clique no card pelo nome do módulo, anote a nova URL de conteúdos e atualize esta tabela.

## Estrutura de arquivos

Tudo fica em `<nº do módulo> - <módulo>/<nº do capítulo> - <capítulo>/<nº da aula> - <título>/`, a partir da raiz do projeto:

```
1 - Fundamentos de IA Generativa/
└── 2 - Aprofundando na IA e LLM/
    └── 4 - Transformers/
        ├── transcription/Transformers.txt        transcrição do vídeo, sem horários
        ├── summary/Transformers.md               resumo do professor (cópia do site)
        ├── summary/Transformers.resumo.md        resumo gerado sobre o conteúdo da aula (bsc, Tarefa 2)
        └── quizz/
            ├── quizz.Transformers.md             10 perguntas sobre a aula (Tarefa 3)
            ├── quizz.Transformers.gabarito.md
            └── quizz.Transformers.resultado.md   criado ao aplicar o quizz
```

O id da aula é `<módulo>.<capítulo>.<aula>` (ex.: `2.1.1`). O Fundamentos mantém os ids de duas partes, `<capítulo>.<aula>` (ex.: `2.4`), porque eles já estão no `acompanhamento.md`: um id de duas partes é sempre do módulo 1. Os números de capítulo se repetem entre os módulos, então vá primeiro à pasta do módulo e nunca procure um capítulo em todos eles (`*/<capítulo> - */`).

A pasta `advanced/` e os arquivos `quizz.<título>.adv.*` só aparecem se o usuário rodar a `next-class-adv` para a aula.

O áudio fica fora da pasta da aula, em `<módulo>/<capítulo>/audio/<nº - título>.mp3` (mais o `.roteiro.md`), como define a skill `get-audio` (Tarefa 4).

**Os 5 artefatos de cada aula:** 1) cópia da transcrição, 2) cópia do resumo do professor, 3) resumo gerado (bsc), 4) quizz da aula, 5) áudio (só com `/audio`, veja "Parâmetros"). Os artefatos 1 e 2 são cópias do site; 3 e 4 são gerados e passam pela revisão de `references/revisao.md`.

**Aulas práticas:** têm só os artefatos 1, 2 e 3, sem quizz e sem áudio. Em 2026-11-01 o usuário concordou que, nessas aulas, o que importa é mexer na ferramenta: um quizz cobraria detalhes de tela ou repetiria a aula conceitual anterior, e o áudio depende da tela. Além disso, os quizzes não contam para a aprovação.

- **Como identificar:** o título começa com "Hands on -" ou, no Prompt Engineering, indica demonstração ("na prática", "Demonstração", "Executando"); na dúvida, vale a transcrição. O nome do capítulo não basta: em "Hands on", aulas como "Top_K & Top_P" e "Arquitetura RAG" são conceituais e seguem o fluxo completo. Se o título não for claro (por exemplo, "Explorando soluções"), decida pela transcrição: é prática quando a maior parte é a demonstração em uma ferramenta.
- **Resumo gerado:** foca no experimento: o que testar, o que observar e o que isso mostra. Valem as regras da Tarefa 2, menos o mínimo de 500 palavras.
- **Revisão:** o validador avalia só o resumo.
- **Relatório:** pule as Tarefas 3 e 4, diga que a aula é prática e não oriente rodar a `/init`. Não crie linhas em `acompanhamento.md`.
- **Exceção:** gere o quizz ou o áudio só se o usuário pedir para aquela aula.

**Aulas curtas:** em 2026-11-02 o usuário pediu quizz e resumo menores nas aulas com vídeo abaixo de 10 minutos, mantendo um quizz por aula. Ele testou a ideia de um quizz por capítulo e a descartou, porque acumula conceitos demais. A duração vem do campo `duracao` de `list-lessons.js`.

| Vídeo | Perguntas | Resumo gerado |
|---|---|---|
| 10 min ou mais | 10 | 500 a 1.000 palavras |
| de 5 a menos de 10 min | 5 | 250 a 500 palavras |
| menos de 5 min | 3 | 100 a 250 palavras |

**Aulas de abertura:** em 2026-11-08 o usuário apontou que o quizz da `2.2.1` ("Revisitando conceitos", 01:36) cobrava caching, batch prompting e janela de contexto, temas que o professor só anunciou e ensina nas aulas seguintes; o modelo completou com conhecimento próprio. Aula que só abre o capítulo, se apresenta ou anuncia temas (em geral abaixo de 5 minutos) é tratada como a aula prática: só artefatos 1, 2 e 3, sem quizz e sem áudio. Pergunta só vale se a aula **ensina** a resposta; tema mencionado ou prometido não conta. O `or-gerar.mjs` aplica isso: o N é teto, e se nada sustenta perguntas ele devolve `SEM QUIZZ` e gera só o resumo. No relatório, diga que a aula é de abertura e não oriente rodar o `or-aplicar.mjs` nem a `/init`.

O número de perguntas é um teto nas duas faixas menores: se a aula não sustenta perguntas que passem pelo filtro de relevância, faça menos e avise no relatório, nunca encha. A regra vale para as aulas ainda não processadas, de qualquer módulo. Aula prática continua sem quizz.

**Escopo do conteúdo:** pergunta, alternativa e gabarito só podem usar o que a aula ensina e o que as aulas **anteriores** ensinaram; nunca o tema de aula posterior, nem como comparação ou "próxima aula" (pedido do usuário em 2026-11-08, depois de uma pergunta da `2.2.5` comparar truncamento com sumarização). Quando a skill for usar aulas vizinhas como base, use só as anteriores. A regra completa está em `references/quiz.md`, seção "Escopo", e vale para o gerador, o validador, a correção e a refação do `or-gerar.mjs` e do `or-aplicar.mjs`.

**Fora de escopo:** capítulos e aulas anteriores. A skill vale a partir da próxima execução: não gere nem complete artefatos de aulas já existentes, a menos que o usuário peça uma aula específica.

- **Número do módulo:** só os módulos com pasta são numerados, na ordem em que são estudados. O "Bônus de nivelamento" fica de fora: em 2026-11-04 o usuário disse que não pretende capturá-lo, por isso o Prompt Engineering é o módulo 2.
- **Número do capítulo:** é uma convenção do usuário, a plataforma não numera. A numeração recomeça em cada módulo, a pedido do usuário em 2026-11-05. Se já existe uma pasta com o nome do capítulo, use o número dela. Senão, use o maior número existente naquele módulo + 1, ou 1 se for o primeiro. Os capítulos "Materiais", "Material e código-fonte" e "Introdução" não entram na contagem.
- **Número da aula:** a posição da aula dentro do capítulo, como a plataforma lista.
- **Título:** o da plataforma. O script de gravação remove os caracteres que o Windows proíbe.

## Qual aula processar

- Sem argumento: a próxima aula. Na pasta do módulo em estudo, no capítulo de maior número, pegue a maior aula já existente e some 1. Se o módulo ainda não tem pasta, é a aula 1 do capítulo 1.
- Com um número (`/next-class 7`): essa aula do capítulo atual. Com o id (`/next-class 2.1.3`, ou `/next-class 1.3` para o Fundamentos): essa aula.
- Com `quizz`: não captura nada, só aplica um quizz pendente (veja "Aplicar o quizz").

**Parâmetros** (podem vir sozinhos ou junto de uma aula, em qualquer ordem; ex.: `/next-class /audio`, `/next-class 4.4 /noquizz`):

Desde 2026-11-17, o áudio é opcional: sem `/audio`, a skill **não** gera áudio. Antes era o contrário (gerava sempre, e `/noaudio` cortava); o usuário pediu a inversão.

| Parâmetro | Efeito |
|---|---|
| `/audio` | Roda a Tarefa 4: invoca a `get-audio` para a aula. Sem ele, a Tarefa 4 é pulada. |
| `/noquizz` | Pula a Tarefa 3: não gera quizz, gabarito nem `acompanhamento.md`. O validador avalia só o resumo. No relatório, não oriente rodar a `/init`. |

- Sem parâmetros, a aula conceitual fica com os artefatos 1 a 4. Com `/noquizz`, fica só com 1, 2 e 3 (o mesmo que uma aula prática, sem a regra de identificar pela transcrição).
- `/noaudio` deixou de ser necessário: se o usuário o passar, só confirme que o áudio não será gerado (já é o padrão).
- Os parâmetros valem só para a execução em que foram passados, em todas as aulas dessa execução. Não os guarde como preferência.
- Aula prática e aula de abertura ficam sem quizz e sem áudio mesmo com `/audio`, a menos que o usuário peça aquela aula especificamente.
- O que não foi gerado não é "Pendente": no relatório, diga "áudio não gerado (use `/audio` ou `/get-audio <id>` se quiser)" e, se for o caso, "quizz não gerado a pedido (`/noquizz`)". Se o usuário pedir depois, gere só o que falta (regra de "crie só o que falta").

Se a próxima posição não existe no capítulo, o capítulo acabou: avise e pergunte se deve seguir para o próximo, sem avançar por conta própria.

Nunca sobrescreva um arquivo existente sem perguntar. Se a pasta da aula já existe com parte dos arquivos, crie só o que falta dos 5 artefatos.

## Quizz já tentado

Vale para a `next-class` e para a `next-class-free`. Sempre que uma aula for processada (inclusive quando o usuário pede uma aula que já existe), antes de gerar ou de orientar a aplicação do quizz, verifique se já houve tentativa de responder o quizz padrão. A fonte é o `acompanhamento.md`, coluna **Padrão** das linhas da aula (e o `quizz.<título>.resultado.md`). Tentativa = alguma célula com ✅ ou ❌; "—" é quizz ainda não feito.

| Situação | O que fazer |
|---|---|
| Nenhuma tentativa | Aplica o quizz do início. |
| Já houve tentativa e há incorretas pendentes (células ❌) | Reaplica só as incorretas, com perguntas novas sobre os mesmos conceitos (regra de "Refazer as erradas"). Não refaz as que já estão certas. |
| Já houve tentativa e não há incorretas pendentes | Pergunte ao usuário se deseja refazer o quizz do início. Só refaça se ele disser que sim; nova tentativa é acrescentada ao `resultado.md`, nunca substitui. |

- Isso não gera quizz novo: se o quizz da aula já existe, não o sobrescreva (regra de "crie só o que falta"). Se não existe, gere como de costume e aplique do início.
- No relatório, diga em qual das três situações a aula está. Na `next-class`, oriente `/init <id>` (que já segue essa tabela); na `next-class-free`, o `or-aplicar.mjs` já decide sozinho (`--reiniciar` força o início).
- Perguntas novas da refação só podem usar o que a aula ensina: termo ou mecanismo que não está na transcrição ou no resumo não entra (incidente da 2.2.3, em 2026-11-08).

## Tarefa 1: capturar

Usa as ferramentas do plugin Playwright (`mcp__plugin_playwright_playwright__*`). Se não estiverem carregadas, busque-as com ToolSearch. Os scripts ficam em `.claude/skills/next-class/scripts/` e os caminhos abaixo são relativos à raiz do projeto.

1. **Login:** `browser_run_code_unsafe` com `filename: .claude/skills/next-class/scripts/login.js`. Devolve `logado` ou `ja-logado`. O script lê `USR` e `PWD` do `.env` por dentro do navegador. Não leia o `.env` com outras ferramentas: a senha não precisa aparecer na conversa.
2. **Listar aulas:** `browser_navigate` para a URL de conteúdos do módulo, depois `browser_run_code_unsafe` com `filename: .claude/skills/next-class/scripts/list-lessons.js`. Devolve os capítulos e as aulas com `posicao`, `id` e `titulo`. Decida a aula-alvo com isso e com as pastas locais.
3. **Abrir a aula:** `browser_navigate` para `<URL de conteúdos>?capitulo=<N>&conteudo=<id da aula>`, em que `<N>` é o último número do caminho da URL (hoje `267`). Se a URL direta não abrir a aula certa, clique em `#list-content-<id>`.
4. **Capturar:** `browser_run_code_unsafe` com `filename: .claude/skills/next-class/scripts/capture.js`. Devolve o título e a contagem de caracteres da transcrição e do resumo. Confira se o título é o da aula-alvo.
5. **Salvar a captura:** `browser_evaluate` com `function: () => window.__fcCapture` e `filename: .playwright-mcp/capture.json`. O texto vai direto para o disco, sem passar pela conversa.
6. **Gravar na estrutura:**
   ```
   node .claude/skills/next-class/scripts/write-lesson.mjs --modulo "<pasta do módulo>" --capitulo "<nº - capítulo>" --numero <n> --titulo "<título>"
   ```
   Cria as subpastas `transcription/`, `summary/` e `quizz/`, grava `transcription/` e `summary/`, e informa o que gravou, o que já existia e o que veio vazio.

Uma contagem zero significa que a aula não tem aquele conteúdo (material em PDF, exercício, live). Siga com o que existir e avise o que faltou. Se não houver nem transcrição nem resumo, pare e pergunte como seguir.

Abrir a aula pode marcá-la como vista na plataforma. O usuário já aceitou isso.

**Se a página mudou** e um script falhar, tire um `browser_snapshot` e localize os elementos pelo texto visível, que é mais estável que as classes CSS geradas: botão "Mostrar Transcrição" (o texto aparece no bloco irmão do botão), título "Resumo da Aula" (dentro de `#transcricao`, que apesar do nome é o resumo), capítulos em `#chapter-<id>` e aulas em `#list-content-<id>`. Corrija o script para as próximas execuções.

## Tarefa 2: resumo gerado (bsc)

Leia a transcrição e o resumo do professor e escreva `summary/<título>.resumo.md`: um resumo próprio do conteúdo da aula, em português, que cubra todos os conceitos que o professor apresentou, na ordem dele, sem acrescentar o que a aula não disse. Tamanho de referência: a faixa da duração em "Aulas curtas", com um título `##` por conceito. É a base do quizz da aula e da leitura rápida antes do áudio.

**Geração e revisão:** você (gerente, precisa ser Opus 5.5) escreve e corrige o resumo, e um agente Sonnet 5.5 validador o avalia. Não chame o validador ainda: escreva o quizz (Tarefa 3) em cima do resumo e mande os dois juntos, na mesma rodada, como define `references/revisao.md` (2 validações; a 3ª só para erro de gabarito ou de conteúdo; se não passar, fica "Pendente").

## Tarefa 3: quizz da aula

Pule esta tarefa se o usuário passou `/noquizz` (veja "Parâmetros").

Leia `references/quiz.md` antes de escrever qualquer pergunta. O arquivo traz o nível exigido, os vícios a evitar e o formato dos três arquivos de cada quizz.

**Quizz da aula** (`quizz.<título>.md`): o número de perguntas da faixa em "Aulas curtas" (10 nas aulas de 10 minutos ou mais), baseadas na transcrição e no resumo do professor. Só entra pergunta que passa no filtro de relevância de `references/quiz.md`.

O quizz tem o arquivo de perguntas (sem respostas, para poder ser refeito) e o gabarito em arquivo separado.

**Geração e revisão:** rode antes o `scripts/lint-quizz.mjs` (veja "Conferência própria" em `revisao.md`) e corrija os alertas. O quizz (perguntas + gabarito) vai ao validador junto com o resumo, na mesma rodada, conforme `references/revisao.md`. O validador devolve "OK" ou aponta a questão e o problema, você corrige só o apontado, e o ciclo se repete no limite de validações de `revisao.md`. Quizz que não passar fica "Pendente".

## Tarefa 4: áudio

Só rode esta tarefa se o usuário passou `/audio` (veja "Parâmetros"). Sem o parâmetro, pule-a.

Depois do quizz (ou do resumo, com `/noquizz`), invoque a skill `get-audio` (`Skill`) para a aula recém-processada (pelo id). Ela escreve o roteiro e gera o MP3 em `<módulo>/<capítulo>/audio/`, usando o resumo gerado como fonte principal. O roteiro e o MP3 não passam pelo fluxo de revisão.

**O áudio só é gerado se o resumo gerado foi criado e aprovado.** Se ele ficou Pendente ou não pôde ser criado, não invoque a `get-audio`. No relatório final, liste o áudio entre o que não pôde ser criado, com o motivo (por exemplo, "áudio não gerado: o resumo gerado ficou Pendente — <problema>").

## Aplicar o quizz

Ao terminar as quatro tarefas, mostre o que foi criado, a tabela de revisão de `references/revisao.md` (validações e resultado de cada artefato) e os problemas de cada artefato Pendente. Para aplicar o quizz, não continue nesta sessão, que já está pesada com a transcrição e a revisão: diga ao usuário para rodar `/clear`, depois `/model sonnet` e `/init <id da aula>`. A conta é dividida com o trabalho dele, e aplicar o quizz não precisa do Opus. Só aplique aqui se ele insistir.

Esta seção também vale para o quizz avançado, quando o usuário o aplica pela `init-adv`.

- Uma pergunta por vez. Espere a resposta antes de mostrar a próxima.
- Depois de cada resposta, diga se acertou. Se errou, explique a alternativa correta e por que **cada uma** das erradas está errada. Se acertou, uma linha de confirmação com o ponto-chave basta.
- Não dê pistas no enunciado nem comente a dificuldade antes da resposta.
- Ao final, mostre a pontuação e grave `quizz.<título>[.adv].resultado.md` no formato de `references/quiz.md`. Se o arquivo já existe, acrescente uma nova tentativa em vez de substituir.
- Na mesma hora, atualize `acompanhamento.md` na raiz do projeto: a célula de cada questão na coluna Padrão ou Avançado, seguindo a legenda do arquivo, e a data no topo. Quizz novo ganha uma linha por questão.

**Refazer as erradas:** sempre que o quizz terminar com questões erradas, inicie a refação logo em seguida, sem esperar pedido (regra do usuário, 2026-11-07); ela também roda quando o usuário pedir. Leia o arquivo de resultado e crie perguntas **novas** sobre os mesmos conceitos. Ele já viu o gabarito das originais, então repetir o texto mediria memória e não entendimento. Escreva as perguntas novas e o gabarito você mesmo, sem validador (para poupar tokens), e confira antes de aplicar: resolva sem olhar o gabarito, não ecoe o texto das originais, distribua as letras corretas e mantenha as alternativas com tamanhos parecidos. Depois de cada refação, atualize a célula em `acompanhamento.md` (`✅ Nx` ou `❌ Nx`).
