---
name: upd-dashboard
description: Atualiza os dados do dashboard do MBA (doc/dashboard.html) de acordo com o andamento das aulas e dos quizzes. Use quando o usuário digitar "/upd-dashboard", ou pedir "atualiza o dashboard", "atualizar o painel", "atualiza os dados do dashboard" ou "o dashboard está desatualizado". Também é invocada automaticamente no final de toda sessão da init ou da init-adv.
---

# upd-dashboard

Sincroniza o dashboard com o que o usuário já estudou. Converse sempre em português (pt-BR).

## Como funciona (determinístico)

`doc/dashboard.html` é um template fixo. Todos os dados ficam em `doc/dados.js`, **gerado** por `scripts/update.mjs` como função pura de duas entradas:

| Entrada | Quem edita | O que traz |
|---|---|---|
| `acompanhamento.md` | `next-class` / sessões de quizz | notas por questão (`QUIZ`) e a data "Atualizado em AAAA-MM-DD" (`ATUALIZADO`) |
| `dados/plataforma.json` | snapshot da plataforma (passo 2) | por conteúdo: id, título, duração real em segundos, visto; daí saem durações, `PLATAFORMA` (feitos ÷ itens) e aula só ouvida (`o`) |
| `dados/plataforma-pe.json` (opcional) | snapshot da página de conteúdos do Prompt Engineering | `visto` das aulas práticas (sem quizz), casado pelo título com `peAulas` |
| `dados/plano.json` | o usuário (decisões do plano) | datas, `liberacoes`, `novembro`, agenda, `peAulas`, grupos de `BLOCOS`, `vistas`, `plataforma`, `passos` |

Derivado, nunca digitado: `BLOCOS` (aula com quizz registrado, ou em `vistas`/`feitasExtra` = estudada `e`; só vista na plataforma = `o`; senão `n`), `PLATAFORMA`, `FUND_TOTAL_MIN` (soma dos blocos, durações reais), `RITMO_MEDIDO` (min estudados ÷ dias do `inicio` até `ATUALIZADO`), `AGENDA`, o feito/não feito de cada passo (condição em `plano.json`), o módulo de cada quizz (`m`: `pe` se o id está em `peAulas`, senão `fund`) e `PE_FEITAS` (aulas do Prompt Engineering feitas: quizz registrado; sem quizz, `visto` em `plataforma-pe.json` ou id em `vistas`; sem snapshot que ache a prática, ela conta como feita se uma aula posterior tem quizz, e o relatório avisa). `PE_FEITAS` alimenta o card "Hoje no plano" (aulas feitas × planejadas até hoje, última feita, próxima), o % estudado do módulo atual e os blocos do Prompt Engineering.

Mesma entrada, mesmo `dados.js`, byte a byte. Rodar duas vezes não muda nada.

## Passos

1. Confirme que `acompanhamento.md` está atualizado (inclusive a linha "Atualizado em …"). O dashboard não lê `quizz.*.resultado.md`.
2. **Snapshot da plataforma** (só leitura; pule se o usuário não viu nada novo no Fundamentos desde a última captura; o módulo foi concluído em 2026-11-05, com 55 de 55 itens, então este passo fica parado até o dashboard passar a acompanhar o Prompt Engineering). Faça o login da `next-class` (`browser_run_code_unsafe` com `.claude/skills/next-class/scripts/login.js`), abra `.../263/conteudos` (URL na `next-class`) e rode `browser_evaluate` com a função de `scripts/scrape-plataforma.js` e `filename: dados/plataforma.json`. Se outra sessão estiver usando o navegador, espere. Feche o navegador ao terminar (`browser_close`). Se a plataforma ganhou aulas, o passo 3 abortará listando-as: acrescente-as em `fundGrupos`. **Prompt Engineering:** para que as aulas práticas (sem quizz) contem pelo vídeo assistido, abra a página de conteúdos do Prompt Engineering e rode a mesma função com `filename: dados/plataforma-pe.json` (o campo `modulo` do arquivo é só rótulo).
3. Rode da raiz do projeto:
   ```
   node .claude/skills/upd-dashboard/scripts/update.mjs
   ```
   Opções: `--dry-run` (só relatório), `--check` (sai com erro se `doc/dados.js` estiver desatualizado), `--date AAAA-MM-DD` (força a data). O script aborta com erro se encontrar célula desconhecida ou minutos que não fecham.
4. **Não edite `doc/dados.js` nem decida valores.** Se algo no relatório parecer errado, o conserto é em `acompanhamento.md` ou em `dados/plano.json`, e só por pedido ou relato do usuário:
   - aula assistida sem quizz → acrescente o id a `vistas` (ou o nome da aula "Revisando · aula N" a `feitasExtra`);
   - `plataforma` (% da plataforma, itens, aulas vistas, data `_em`): só com o número que o usuário informar;
   - `passos`: texto e condição (`{quiz:[ids ou "a..b"]}`, `{vistas:[ids]}`, `{manual:bool}`); quando o último passo cumprido tiver mudado, proponha o próximo passo ao usuário;
   - datas, `agendaBase` (títulos das aulas capturadas), `peAulas`, `liberacoes`, `novembro`, `referenciaFund`: só se o plano mudou.
5. Mudou de módulo ou capítulo? Acrescente o grupo em `fundGrupos` (`ids`, `min` total, `reais` com as durações conhecidas); aulas novas não entram sozinhas. Avise o usuário.
6. Verificação opcional: o Playwright bloqueia `file:`; sirva a pasta (`npx serve doc`) e confira `browser_console_messages` sem erros.
7. Resuma em poucas linhas: aulas novas, pendências, estudado do total, ritmo e o que ficou para o usuário decidir. Não crie commits nem publique o dashboard.

## Limites

- Não invente notas: tudo vem de `acompanhamento.md`.
- Não edite `acompanhamento.md` aqui, só leia.
- Ainda manual: o snapshot da plataforma (`plataforma` e durações reais das aulas).
