---
name: init
description: Aplica o quizz básico (o da aula) de uma aula do MBA Full Cycle, uma pergunta por vez. Use quando o usuário digitar "/init <id da aula>" (ex.: "/init 2.1.1" ou "/init 2.4") ou pedir para iniciar/fazer o quizz básico, padrão ou da aula de uma aula específica.
argument-hint: <módulo.capítulo.aula | capítulo.aula>
model: sonnet
---

# init

Aplica o quizz **básico** da aula `$ARGUMENTS`. Converse em português (pt-BR).

## 1. Localizar o quizz

O argumento é o id da aula, na mesma numeração das pastas locais e do `acompanhamento.md`.

1. Ache a pasta da aula pelo id: `<módulo>.<capítulo>.<aula>` (ex.: `2.1.1`) fica em `<módulo> - */<capítulo> - */<aula> - */`; `<capítulo>.<aula>` (ex.: `2.4`) é sempre do Fundamentos e fica em `1 - Fundamentos de IA Generativa/<capítulo> - */<aula> - */`. Os números de capítulo se repetem entre os módulos, então nunca procure o capítulo em todos eles.
2. Em `quizz/`, o quizz básico é o `quizz.<título>.md` **sem** `.adv` (o gabarito é `quizz.<título>.gabarito.md`).

Se o argumento faltar ou estiver mal formado, liste as aulas que têm quizz (`<id> - <título>`) e pergunte qual. Se a pasta ou o arquivo não existir, diga o que encontrou e ofereça gerar com a skill `next-class`. Não invente um quizz por conta própria.

## 2. Antes de aplicar

- Leia o quizz e o gabarito inteiros, sem mostrar o gabarito.
- Confira as alternativas contra `.claude/skills/next-class/references/quiz.md` (nível, filtro de relevância e "Vícios que entregam a resposta"). Se houver alternativa descartável ou outro vício, diga quais questões têm problema e ofereça reescrever **antes** de aplicar. Reescrever pede o Opus: se a sessão estiver em Sonnet, peça ao usuário para trocar com `/model opus` antes.
- Confira a tentativa anterior pela seção "Quizz já tentado" de `.claude/skills/next-class/SKILL.md` (coluna Padrão do `acompanhamento.md`): sem tentativa, aplica do início; com incorretas pendentes (❌), pule a aplicação completa e vá direto à seção 3.1, refazendo só as pendentes com perguntas novas; sem pendentes, avise quantas tentativas há e a última pontuação, e pergunte se quer refazer do início antes de aplicar.

## 3. Aplicar

Siga a seção "Aplicar o quizz" de `.claude/skills/next-class/SKILL.md`:

- Uma pergunta por vez; espere a resposta antes da próxima. Mostre o enunciado e as quatro alternativas como no arquivo, sem pistas nem comentários sobre dificuldade.
- Depois de cada resposta, diga se acertou. Se errou, explique a correta e por que **cada uma** das erradas está errada (base: o gabarito). Se acertou, uma linha com o ponto-chave.
- No fim, mostre a pontuação e grave/acrescente a tentativa em `quizz.<título>.resultado.md` no formato de `references/quiz.md` (nova seção "Tentativa N — <data>", nunca substitua as anteriores).
- Atualize `acompanhamento.md` na hora: as células da coluna **Padrão** daquela aula, seguindo a legenda, e a data no topo.

## 3.1. Refazer as erradas

Se o quizz terminou com alguma questão errada, **inicie a refação logo em seguida**, sem esperar pedido: siga "Refazer as erradas" em `.claude/skills/next-class/SKILL.md` (perguntas novas sobre os mesmos conceitos, uma por vez, e `acompanhamento.md` atualizado a cada refação). Se acertou tudo, pule este passo.

## 4. Atualizar o dashboard

Por último, invoque a skill `upd-dashboard` (`Skill`) para sincronizar `doc/dashboard.html` com o `acompanhamento.md` recém-atualizado.
