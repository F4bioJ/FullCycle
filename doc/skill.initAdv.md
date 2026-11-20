# Skill init-adv

Skill que aplica o quizz avançado (o do material avançado) de uma aula, uma pergunta por vez. A definição executável está em `.claude/skills/init-adv/SKILL.md`; este documento descreve o que ela faz e por quê. O histórico fica em `.claude/skills/CHANGELOG.md`.

É a irmã da `init` (veja `doc/skill.init.md`), com as diferenças abaixo. Também roda em Sonnet. Os quizzes avançados estão pausados desde 2026-10-26, então a skill só roda quando o usuário pedir.

## Como chamar

`/init-adv <id da aula>`, com a mesma numeração da `init`. O quizz usado é o `quizz/quizz.<título>.adv.md`, com o gabarito `quizz.<título>.adv.gabarito.md`. Se ele não existir, a skill oferece gerá-lo com a `next-class-adv`.

## Diferenças em relação à init

| | init | init-adv |
|---|---|---|
| Quizz | `quizz.<título>.md` | `quizz.<título>.adv.md` |
| Explicação dos erros | pelo gabarito | pelo gabarito, citando a **Seção** do material avançado |
| Resultado | `quizz.<título>.resultado.md` | `quizz.<título>.adv.resultado.md` |
| Coluna no `acompanhamento.md` | Padrão | Avançado |
| Tentativa anterior | segue "Quizz já tentado" (pode refazer só as pendentes) | avisa quantas tentativas há e a última nota e confirma a nova tentativa |
| Quizz inexistente | oferece a `next-class` | oferece a `next-class-adv` |

## O que é igual

- Confere as alternativas contra `references/quiz.md` antes de aplicar e oferece reescrever se houver vício (reescrever pede o Opus).
- Uma pergunta por vez, com explicação da correta e de cada errada.
- Nota no fim, tentativa acrescentada ao arquivo de resultado, sem substituir as anteriores, e `acompanhamento.md` atualizado na hora.
- Refação das erradas logo em seguida, com perguntas novas (desde 2026-11-07).
- Invoca a `upd-dashboard` no fim.
