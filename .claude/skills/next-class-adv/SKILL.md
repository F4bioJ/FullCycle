---
name: next-class-adv
description: Gera o material avançado e o quizz avançado de uma aula do MBA Full Cycle que já foi capturada pela next-class. Use só quando o usuário pedir explicitamente o conteúdo avançado, por exemplo "/next-class-adv <id da aula>" (ex.: "/next-class-adv 2.1.1" ou "/next-class-adv 2.6"), "gera o avançado da aula", "material avançado" ou "quizz avançado da aula N". Não use para preparar a próxima aula (isso é a next-class) nem para aplicar um quizz avançado que já existe (isso é a init-adv).
argument-hint: <módulo.capítulo.aula | capítulo.aula>
---

# next-class-adv

Gera o conteúdo **avançado** de uma aula: o material avançado e o quizz avançado. Converse sempre em português (pt-BR).

Até 2026-10-26 isso fazia parte da `next-class`. Foi separado porque as aulas não cobram esse conteúdo e o usuário estava atrasado no curso. Rode só quando ele pedir: não ofereça esta skill ao fim da `next-class` nem de um quizz básico.

## Referências compartilhadas

Esta skill usa os mesmos arquivos da `next-class`, sem cópia:

- `.claude/skills/next-class/references/revisao.md`: fluxo gerente → validador, critérios do material avançado e dos quizzes, Pendente, relatório.
- `.claude/skills/next-class/references/quiz.md`: nível, filtro de relevância, vícios e formato dos arquivos (com o sufixo `.adv`).
- `.claude/skills/next-class/SKILL.md`, seções "Estrutura de arquivos" e "Aplicar o quizz".

## Qual aula

O argumento é o id da aula: `<módulo>.<capítulo>.<aula>` (ex.: `2.1.1`) fica em `<módulo> - */<capítulo> - */<aula> - */`; `<capítulo>.<aula>` (ex.: `2.4`) é sempre do Fundamentos e fica em `1 - Fundamentos de IA Generativa/<capítulo> - */<aula> - */`. Os números de capítulo se repetem entre os módulos, então nunca procure o capítulo em todos eles.

- Sem argumento: liste as aulas que têm `summary/<título>.resumo.md` mas não têm `advanced/<título>.adv.md`, e pergunte qual.
- A aula precisa já ter sido preparada pela `next-class`: transcrição ou resumo do professor, resumo gerado e quizz da aula. Se faltar algo, diga o que falta e ofereça rodar a `next-class` para a aula antes. Não capture nada aqui.
- Nunca sobrescreva um arquivo existente sem perguntar. Se a aula já tem parte do avançado, crie só o que falta.

## Tarefa 1: material avançado

Leia a transcrição e o resumo do professor e escreva `advanced/<título>.adv.md` (crie a pasta `advanced/` se não existir). O material é uma segunda aula, com os conceitos da aula e o que ficou faltando, em nível **médio** de aprofundamento: vai além do professor, mas sem virar tratado.

O objetivo é levar o usuário do "o que é" para o "por que funciona e onde quebra". Um bom teste: depois de ler, ele consegue explicar o mecanismo a um colega e prever o comportamento em um caso que a aula não mostrou?

- **Parta da aula.** Siga os temas na ordem em que o professor os apresentou, para o material servir de segunda leitura da aula e não de texto paralelo.
- **Aprofunde o mecanismo.** Onde o professor usou analogia, mostre o que acontece de fato: a fórmula, as dimensões, um exemplo numérico pequeno feito à mão, pseudocódigo ou código curto.
- **Corrija simplificações.** Quando a aula simplificar a ponto de ficar imprecisa ou errada, diga isso com clareza em um bloco "O que a aula simplificou". O usuário valoriza muito esses pontos.
- **Amarre com as aulas anteriores.** Leia os materiais das aulas vizinhas na pasta do capítulo e conecte: que problema anterior este assunto resolve, o que ele deixa em aberto.
- **Pesquise e cite.** Use WebSearch/WebFetch para confirmar datas, autores, números e resultados, e liste as fontes no final (papers originais e documentação, de preferência). Não cite de memória o que não conferiu.
- **Feche com prática.** Termine com as implicações para quem constrói software com IA e com uma lista curta de "armadilhas comuns".

Escreva em português, mantendo em inglês os termos técnicos consagrados (attention, embedding, fine-tuning). Tamanho de referência: de 1.000 a 2.000 palavras. Menos que isso costuma ser só um resumo melhorado.

**Geração e revisão:** você (gerente, precisa ser Opus 5.5) escreve e corrige o material, e um agente Sonnet 5.5 validador o avalia. Não chame o validador ainda: escreva o quizz avançado (Tarefa 2) em cima do material e mande os dois juntos, na mesma rodada, como define `revisao.md` (2 validações; a 3ª só para erro de gabarito ou de conteúdo; se não passar, fica "Pendente").

## Tarefa 2: quizz avançado

Escreva depois do material e antes da primeira validação. Se o material terminar Pendente, o quizz avançado também fica Pendente: avise o usuário com o problema que restou.

Leia `quiz.md` antes de escrever qualquer pergunta. **Quizz avançado** (`quizz.<título>.adv.md` + `quizz.<título>.adv.gabarito.md`): 10 perguntas baseadas no material avançado, sem repetir as do quizz da aula, com `**Seção:**` em cada questão do gabarito. Só entra pergunta que passa no filtro de relevância.

**Geração e revisão:** vai ao validador junto com o material, na mesma rodada, conforme `revisao.md`. Um só validador por aula, acionado com `SendMessage` nas rodadas seguintes.

## Ao terminar

1. Mostre o que foi criado e a tabela de revisão de `revisao.md`, com os problemas de cada artefato Pendente.
2. Se o quizz avançado foi aprovado e as linhas da aula já existem no `acompanhamento.md`, deixe a coluna Avançado com `—` (quizz ainda não feito). Se as linhas não existem, crie uma por questão, com `—` nas duas colunas.
3. Diga que o quizz pode ser aplicado numa sessão limpa: `/clear`, `/model sonnet` e `/init-adv <id da aula>`. Não comece a aplicar sem o usuário pedir.
4. O áudio da aula não é regenerado. Se o usuário quiser um áudio que inclua o avançado, ofereça regenerar com a `get-audio`, que lê o material avançado quando ele existe.
