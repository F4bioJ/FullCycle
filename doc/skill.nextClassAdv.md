# Skill next-class-adv

Skill que gera o conteúdo avançado de uma aula já capturada: o material avançado e o quizz avançado. A definição executável está em `.claude/skills/next-class-adv/SKILL.md`; este documento descreve o que ela faz e por quê. O histórico fica em `.claude/skills/CHANGELOG.md`.

Até 2026-10-26, isso fazia parte da `next-class`. Foi separado porque as aulas não cobram esse conteúdo e o usuário estava atrasado no curso. Desde então, os quizzes avançados estão pausados: a skill só roda quando o usuário pedir, e não é oferecida ao fim da `next-class` nem de um quizz básico.

## Como chamar

`/next-class-adv <id da aula>` (ex.: `2.1.1`, ou `2.4` para o Fundamentos). Sem argumento, lista as aulas que têm resumo gerado mas não têm material avançado e pergunta qual.

A aula precisa já ter sido preparada pela `next-class` (transcrição ou resumo do professor, resumo gerado e quizz da aula). Se faltar algo, a skill oferece rodar a `next-class` antes. Ela não captura nada e não sobrescreve arquivo existente sem perguntar.

## Artefatos

| Artefato | Arquivo | Revisão |
|---|---|---|
| Material avançado | `advanced/<título>.adv.md` | sim |
| Quizz avançado + gabarito | `quizz/quizz.<título>.adv.md`, `.adv.gabarito.md` | sim |

## Material avançado

Uma segunda aula, com os conceitos da aula e o que ficou faltando, em nível médio: vai além do professor, sem virar tratado. O objetivo é levar o usuário do "o que é" ao "por que funciona e onde quebra". O teste: depois de ler, ele consegue explicar o mecanismo a um colega e prever o comportamento num caso que a aula não mostrou?

- segue os temas na ordem do professor;
- mostra o mecanismo onde a aula usou analogia (fórmula, dimensões, exemplo numérico pequeno, pseudocódigo ou código curto);
- corrige as simplificações num bloco "O que a aula simplificou", ponto que o usuário valoriza muito;
- amarra com as aulas anteriores;
- confere datas, autores, números e resultados na web e lista as fontes, de preferência papers e documentação;
- fecha com as implicações para quem constrói software com IA e uma lista de armadilhas comuns.

Tamanho de referência: de 1.000 a 2.000 palavras.

## Quizz avançado

São 10 perguntas sobre o material avançado, sem repetir as do quizz da aula, com a **Seção** do material indicada em cada questão do gabarito. Valem o nível, o filtro de relevância e os vícios de `references/quiz.md`.

## Geração e revisão

Mesmo fluxo da `next-class` (`references/revisao.md`): o gerente Opus escreve o material e o quizz, roda o `lint-quizz.mjs` (desde 2026-11-16) e manda os dois juntos ao validador Sonnet. São 2 validações; a 3ª só para erro de gabarito ou de conteúdo. Se o material ficar Pendente, o quizz avançado também fica, porque foi escrito em cima dele.

## Ao terminar

- Mostra o que foi criado e a tabela de revisão.
- Prepara o `acompanhamento.md`: coluna Avançado com `—` (quizz ainda não feito).
- Orienta a aplicar numa sessão limpa: `/clear`, `/model sonnet` e `/init-adv <id>`.
- Não regenera o áudio. Se o usuário quiser um áudio que inclua o avançado, oferece a `get-audio`, que lê o material avançado quando ele existe.
