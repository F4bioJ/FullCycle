# Skill init

Skill que aplica o quizz básico (o da aula) de uma aula, uma pergunta por vez. A definição executável está em `.claude/skills/init/SKILL.md`; este documento descreve o que ela faz e por quê. O histórico fica em `.claude/skills/CHANGELOG.md`.

Roda em Sonnet (`model: sonnet` na definição). A aplicação não precisa do Opus, e a conta do usuário é dividida com o trabalho. O uso recomendado é numa sessão limpa, depois de preparar a aula: `/clear`, `/model sonnet` e `/init <id>`.

## Como chamar

`/init <id da aula>`: `2.1.1` (módulo.capítulo.aula) ou `2.4` (capítulo.aula, sempre do Fundamentos). O quizz usado é o `quizz/quizz.<título>.md`, sem `.adv`.

Sem argumento, ou com um argumento mal formado, a skill lista as aulas que têm quizz e pergunta qual. Se o quizz não existir, oferece gerá-lo com a `next-class`, sem inventar um.

## Fluxo

1. **Antes de aplicar:**
   - lê o quizz e o gabarito inteiros, sem mostrar o gabarito;
   - confere as alternativas contra `references/quiz.md`. Se houver alternativa descartável ou outro vício, aponta as questões e oferece reescrever antes (reescrever pede o Opus);
   - confere a tentativa anterior no `acompanhamento.md`. Sem tentativa, aplica do início. Com incorretas pendentes (❌), pula a aplicação completa e refaz só as pendentes. Sem pendentes, avisa quantas tentativas há e a última nota, e pergunta se o usuário quer refazer do início.
2. **Aplicar:**
   - uma pergunta por vez, sem pistas nem comentários sobre dificuldade;
   - depois de cada resposta, diz se acertou. Se errou, explica a correta e por que cada uma das erradas está errada; se acertou, dá uma linha com o ponto-chave;
   - no fim, mostra a nota e acrescenta a tentativa em `quizz.<título>.resultado.md`, sem substituir as anteriores;
   - atualiza na hora a coluna **Padrão** do `acompanhamento.md` e a data no topo.
3. **Refazer as erradas (desde 2026-11-07):** se houve erro, a refação começa logo em seguida, sem esperar pedido, com perguntas novas sobre os mesmos conceitos. Repetir o texto original mediria memória, e não entendimento. Cada refação atualiza a célula da questão (`✅ Nx` ou `❌ Nx`).
4. **Dashboard:** por último, invoca a `upd-dashboard` para sincronizar o `doc/dashboard.html`.

A skill `init-adv` faz o mesmo para o quizz avançado (veja `doc/skill.initAdv.md`).
