# Skill upd-dashboard

Skill que sincroniza o dashboard do MBA (`doc/dashboard.html`) com o que o usuário já estudou. A definição executável está em `.claude/skills/upd-dashboard/` (`SKILL.md`, `scripts/update.mjs`, `scripts/scrape-plataforma.js`); este documento descreve o que ela faz e por quê. O histórico fica em `.claude/skills/CHANGELOG.md`.

Roda com `/upd-dashboard` e é invocada automaticamente no fim de toda sessão da `init` ou da `init-adv`.

## Como funciona

`doc/dashboard.html` é um template fixo. Os dados ficam em `doc/dados.js`, **gerado** pelo `update.mjs` a partir destas entradas:

| Entrada | Quem edita | O que traz |
|---|---|---|
| `acompanhamento.md` | as sessões de quizz | notas por questão e a data "Atualizado em" |
| `dados/plataforma.json` | snapshot da plataforma | por conteúdo: id, título, duração real e se foi visto |
| `dados/plataforma-pe.json` (opcional) | snapshot do Prompt Engineering | se as aulas práticas (sem quizz) foram vistas |
| `dados/plano.json` | o usuário | datas, liberações, agenda, aulas do Prompt Engineering, grupos de blocos, aulas vistas, % da plataforma e passos do plano |

Tudo o mais é derivado, nunca digitado: os blocos de aulas (estudada, só ouvida ou não feita), o % da plataforma, os minutos totais, o ritmo medido, a agenda, os passos cumpridos e as aulas feitas do Prompt Engineering, que alimentam o card "Hoje no plano".

O processo é determinístico: a mesma entrada gera o mesmo `dados.js`, byte a byte.

## Passos

1. Confere se o `acompanhamento.md` está atualizado. O dashboard não lê os arquivos `resultado.md`.
2. **Snapshot da plataforma** (só leitura): login, página de conteúdos e `scrape-plataforma.js` gravando em `dados/plataforma.json`. Fica parado desde que o Fundamentos foi concluído, em 2026-11-05. No Prompt Engineering, o mesmo snapshot em `dados/plataforma-pe.json` faz as aulas práticas contarem pelo vídeo assistido.
3. Roda `node .claude/skills/upd-dashboard/scripts/update.mjs`. Opções: `--dry-run` (só o relatório), `--check` (erro se o `dados.js` estiver desatualizado) e `--date AAAA-MM-DD`. O script aborta se achar célula desconhecida ou minutos que não fecham.
4. Resume em poucas linhas: aulas novas, pendências, estudado do total, ritmo e o que ficou para o usuário decidir.

## Limites

- Nunca edita `doc/dados.js` à mão nem decide valores. Correções vão para o `acompanhamento.md` ou o `dados/plano.json`, e só por pedido ou relato do usuário (aula vista sem quizz, % da plataforma informado, passos e datas do plano).
- Não inventa notas e não edita o `acompanhamento.md`: só o lê.
- Ao mudar de módulo ou capítulo, o grupo novo precisa ser acrescentado em `fundGrupos`; aulas novas não entram sozinhas.
- Não cria commits nem publica o dashboard.
