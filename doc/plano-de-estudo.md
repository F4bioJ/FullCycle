# Plano de estudo do MBA

Levantado em 2026-10-31 e recalculado em 2026-11-05 e em 2026-11-09 (nivelamento atualizado em 2026-11-13), a partir da plataforma, do calendário acadêmico da Turma 8 e do histórico local de quizzes. Atualize as seções "Onde estou" e "Plano de novembro" conforme avançar.

## Regras do curso

| | |
|---|---|
| Turma | 8 |
| Início | 05/10/2026 |
| Término oficial | **30/10/2027** |
| Extensão gratuita | até 28/04/2028 (depois, até 2 extensões de 3 meses, R$ 500 cada) |
| Calendário | Notion, link em "Comece por aqui" → Calendário Acadêmico |

**Para ser aprovado:**

1. Passar em todos os desafios práticos. Dá para refazer cada um quantas vezes for preciso.
2. Ter pelo menos **90% das videoaulas registradas como vistas na plataforma**. Ouvir os MP3 locais não conta.

Aulas ao vivo são recomendadas, mas não obrigatórias. Quizzes não contam.

As datas do calendário são de **liberação**, não de entrega. O único prazo que vale é o término oficial.

## Calendário de liberações

| Data | O quê |
|---|---|
| 05/10/2026 | Fundamentos de IA Generativa |
| 12/10/2026 | Bônus de nivelamento: GitHub Copilot, Claude Code, Introdução ao LangChain |
| 02/11/2026 | Prompt Engineering |
| 09/11/2026 | Lab Skills; desafio "Pull, Otimização e Avaliação de Prompts com LangChain/Smith"; desafio "Ingestão e Busca Semântica com LangChain e Postgres" |
| 04/01/2027 | Design Docs com IA |
| 11/01/2027 | Desafio "Da Reunião ao Documento: Design Docs Gerados por IA" |
| 01/02/2027 | Desenvolvimento de Software e Aplicações com IA |
| 08/02/2027 | Desafio "Continuando o StreamTube com IA" |
| 01/03/2027 | Desenvolvimento em Modo Agente |
| 05/04/2027 | Protocolos de Comunicação |
| 12/04/2027 | Desafio "A Ponte: um agente A2A com MCP por dentro" |
| 03/05/2027 | Arquitetura na Era da IA |
| 10/05/2027 | Desafio "Skill de Auditoria e Refatoração Arquitetural" |
| 07/06/2027 | Desenvolvimento de Agentes |
| 14/06/2027 | Desafio "Regra é regra: o assistente virtual do Residencial Aurora" |
| 02/08/2027 | DevOps e SRE com IA |
| 06/09/2027 | Marketing Pessoal, Trabalho em Equipe e Empreendedorismo |
| 30/10/2027 | Término oficial |

O calendário avisa que as datas podem mudar.

## Onde estou (2026-11-05)

O Fundamentos de IA Generativa está concluído. Durações reais lidas da plataforma em 05/11.

### Módulo Fundamentos de IA Generativa

**Concluído em 05/11/2026, 12 dias antes do previsto (17/11).** O módulo tem 53 aulas e **12h24 de vídeo**. A plataforma mostra **100%** (55 de 55 itens, contando os slides e o material), então todas as aulas contam para os 90%. Há quizz em 35 aulas, mais a revisão de 2.1 a 2.3, e nenhuma questão ficou pendente.

| Bloco | Aulas | Vídeo | Situação |
|---|---|---|---|
| Introdução | 2 | 24 min | vista, sem quizz |
| Cap. 1 · Gen IA | 6 | 1h26 | estudada (resumos, áudio, quizz) |
| Cap. 2 · aulas 2.1 a 2.22 | 22 | 4h42 | estudada (resumos, áudio, quizz) |
| Hands on · 3.1 a 3.11 | 11 | 2h45 | vista; quizz em 3.1, 3.4, 3.6, 3.7, 3.9, 3.10 e 3.11 |
| Quick Wins com IA | 7 + material | 2h31 | vista, com resumo, sem quizz |
| Revisando | 5 | 36 min | vista, sem material local; sem quizz por decisão de 05/11 |

### Módulo Prompt Engineering

Liberado em 02/11, com 0% concluído (conferido em 05/11). **Começa hoje, 05/11, pela aula 2.1.1**, 13 dias antes da data anterior (18/11). Tem **103 aulas e 13h06 de vídeo**, mais código-fonte e material. É maior que o Fundamentos, com aulas curtas (7,6 min em média). URL de conteúdos: `.../463/224/267/conteudos`.

Os capítulos recomeçam em cada módulo. A pasta da primeira aula é `2 - Prompt Engineering/1 - Iniciando com Prompt Engineering/1 - Introdução e overview da disciplina`, e o id dela é `2.1.1` (módulo.capítulo.aula). O Fundamentos mantém os ids de duas partes.

| Nº | Capítulo | Aulas | Vídeo |
|---|---|---|---|
| 1 | Iniciando com Prompt Engineering | 18 | 2h27 |
| 2 | Conceitos importantes | 10 | 1h04 |
| 3 | Estrutura básica de prompts | 9 | 1h06 |
| 4 | Prompt para execução de agentes workflows | 11 | 2h25 |
| 5 | Gestão e versionamento de prompt | 17 | 1h40 |
| 6 | Query reformulation e prompt enrichment | 10 | 1h23 |
| 7 | Prompt Evaluation | 16 | 1h44 |
| 8 | Evaluation Comparativa | 12 | 1h16 |

### Nivelamento · Introdução ao LangChain

Curso à parte ("Nivelamento - MBA IA" → "Dev de aplicações com IA"), com **33 aulas e 4h50 de vídeo**, feito antes dos dois desafios de 09/11 (o de ingestão é "referente ao módulo Introdução ao LangChain"). É prático: acompanhar o código no computador, sem resumo, áudio nem quizz.

- **09/11/2026:** começou. Feitas a introdução e os primeiros passos: venv, dependências (`langchain` 1.4, `langchain-openai`, `langchain-google-genai`), chaves da OpenAI e do Google no `.env` e os 4 scripts de `1-Fundamentos` (hello world, `init_chat_model`, `PromptTemplate`, `ChatPromptTemplate`). Código em `0 - Nivelamento - MBA IA/Introdução ao LangChain`.
- **10/11/2026:** Chains e processamento, aulas 1 a 4 (Iniciando com Chains, Chains como decorators, Runnable Lambdas e Criando Pipeline com mais etapas), 28 min de vídeo. Scripts em `2-Chains-e-processamento`.
- **11/11/2026:** Chains e processamento concluído: aulas 5 a 9 (sumarização, map-reduce e pipeline de sumarização), 44 min de vídeo. Por conta própria, para fixar, o usuário criou dois scripts que não estão nas aulas: `5.1-sumarizacao-com-traducao.py` e `5.2-sumarizacao-com-traducao-sem-splitter.py`. Pelos horários dos arquivos, das 16h45 às 19h56, menos 1h fora e 40 min de configuração do Antigravity, segundo o usuário: cerca de **1h30, ou 2 vezes o vídeo**, já com os dois scripts extras.
- **12/11/2026:** Desenvolvimento de agentes e ReAct concluído: 4 aulas, 48 min de vídeo. Scripts em `3-Agentes-e-tools` (`1-agentes-react-e-tools.py` e `2-agentes-react-usando-prompt-hub.py`, gravados entre 19h28 e 20h10). O usuário passou boa parte do tempo testando variações por conta própria (o `5-sumarizacao.py` também foi mexido de manhã) e achou que rendeu pouco. Mas o plano previa Agentes nas noites de 12 e 13/11: **ficou um dia adiantado**. Tempo informado pelo usuário: **2h, ou 2,5 vezes o vídeo**, já com os testes.
- **13/11/2026:** Gerenciamento de memória concluído: 3 aulas, 44 min de vídeo. Scripts em `4-gerenciamento-de-memoria` (`1-armazenamento-de-historico.py` e `2-historico-baseado-em-sliding-window.py`; pasta criada às 17h13, último script gravado às 18h52). Tempo confirmado pelo usuário: **1h40, ou cerca de 2,3 vezes o vídeo**, dentro da conta de 2,5 vezes. O plano previa começar em 13/11 e terminar no sábado: **ficou um dia adiantado**.

Durações lidas da plataforma em 09/11:

| Capítulo | Aulas | Vídeo | Situação |
|---|---|---|---|
| Introdução | 4 | 32 min | vista em 09/11 |
| Primeiros passos | 4 | 29 min | vista em 09/11 |
| Chains e processamento | 9 | 1h12 | aulas 1 a 4 vistas em 10/11 e 5 a 9 em 11/11: concluído |
| Desenvolvimento de agentes e ReAct | 4 | 48 min | concluído em 12/11 |
| Gerenciamento de memória | 3 | 44 min | concluído em 13/11 |
| Data loading e RAG | 9 | 1h05 | — |

**Em 13/11, falta só o RAG: 9 aulas e 1h05 de vídeo, cerca de 2h45 de estudo a 2,5 vezes o vídeo, no fim de semana.** Sobram de 4h15 a 5h15 do fim de semana para o Prompt Engineering 2.3.1 a 2.4.2.

Histórico: **Em 12/11, faltam 12 aulas e 1h49 de vídeo:** Memória (3 aulas, 44 min) e RAG (9 aulas, 1h05). **Testar e explorar fora do roteiro é o jeito de estudar do usuário**, e ele disse em 12/11 que sempre vai tender a isso. Então, nas aulas práticas, a conta passa a usar **2,5 vezes o vídeo**, medido em 12/11, em vez de 2: o resto do nivelamento dá **cerca de 4h30 de estudo**. Memória pede cerca de 1h50, mais do que 1 noite: começa em 13/11 (1h) e termina no sábado. RAG pede cerca de 2h45 no fim de semana. Somando, o fim de semana leva cerca de 3h35 de nivelamento e sobram de 3h30 a 4h30 para o Prompt Engineering. Se o RAG puxar mais testes, o Prompt Engineering 2.3.1 a 2.4.2 desliza para as noites de 16 a 20/11, sem mexer no desafio de ingestão (21–22/11), para o qual o RAG é a base.

Histórico: **Em 11/11, faltam 16 aulas e 2h37 de vídeo, tudo prático:** Agentes, Memória e RAG (em 09/11 eram 25 aulas e 3h49; em 10/11, 21 aulas e 3h21). Em 09/11, os 29 min de "Primeiros passos" levaram cerca de 1h15 no computador: das 17h22 às 19h38, pelos horários dos arquivos, menos pelo menos 1h fora de casa, segundo o usuário. Isso dá cerca de 2,6 vezes o vídeo, já com a instalação e a criação das chaves, que não se repetem. Sem essa parte, a estimativa era de 2 a 2,5 vezes o vídeo. **Medido em 11/11:** os 44 min do fim de Chains levaram cerca de 1h30, ou 2 vezes o vídeo, sem instalação nem configuração. Com 2 vezes, o resto do nivelamento (2h37) dá **cerca de 5h15 de estudo**: Agentes, cerca de 1h40; Memória e RAG, cerca de 3h40.

Com o ritmo novo (veja "Minha rotina"), o nivelamento inteiro cabe em **10–15/11**: Chains e Agentes nas noites de 10 a 13/11 (cerca de 4h20 de estudo) e Memória e RAG no fim de semana (cerca de 4h). Pela medição de 11/11 (2 vezes o vídeo), Agentes pede cerca de 50 min por noite em 12 e 13/11, e Memória e RAG ocupam cerca de 3h40 das 7 a 8h do fim de semana, sobrando de 3h20 a 4h20 para o Prompt Engineering 2.3.1 a 2.4.2. Se apertar, a prioridade é Chains e RAG, que são a base do desafio de ingestão; Agentes e Memória podem ficar para depois de 22/11.

### Conta até a meta (recalculada em 09/11)

Situação em 09/11: Prompt Engineering feito até a 2.2.10, fim do capítulo 2. **Faltam 75 aulas e 9h35 de vídeo no Prompt Engineering.** Desde 05/11 foram 3h31 de vídeo do PE em 5 dias, mais 1h01 do nivelamento em 09/11.

Estimativa de estudo, contando o vídeo assistido com atenção e o quizz logo em seguida:

| O quê | Vídeo | Estudo estimado |
|---|---|---|
| Nivelamento LangChain | 3h49 | ~8h30 (2 a 2,5 vezes o vídeo) |
| Prompt Engineering | 9h35 | ~19h (2 vezes o vídeo, suposição a conferir) |
| Desafio de ingestão | — | ~8h (um fim de semana; tamanho real desconhecido) |
| Desafio de prompts | — | ~12h (uma semana; tamanho real desconhecido) |
| IA Labs · Skills (opcional, sem desafio) | 4h46 | ~9h |

Total: **cerca de 48h sem o Lab Skills, ou 57h com ele.** A cerca de 12h30 por semana, isso dá umas 4 semanas, ou 5 com o Lab Skills. Tudo termina em **13/12**, com 3 semanas de folga antes de 04/01/2027.

### Achados

- **As 53 aulas do Fundamentos aparecem como vistas na plataforma** e contam para os 90%.
- **O entendimento está bom.** Os números atualizados dos quizzes estão no dashboard.
- **Um quizz por aula, menor nas aulas curtas (decisão de 02/11).** Quizz por capítulo acumularia conceitos demais. Abaixo de 10 minutos, o quizz e o resumo encolhem. No Prompt Engineering, pelos títulos, são cerca de 80 aulas teóricas com quizz: cerca de 420 perguntas e 10h de quizz, contra 20h com 10 perguntas em todas.
- **Nas aulas 3.2 a 3.4, só a 3.4 terá quizz.** As aulas 3.2 e 3.3 são práticas.
- **O desafio de prompts depende do fim do Prompt Engineering.** Pelo título (Pull, Otimização e Avaliação com LangChain/Smith), ele usa os capítulos de Gestão e Evaluation. O enunciado só abre em 09/11: confirmar nessa data.

## Minha rotina

- Trabalho das 6h15–6h45 até 17h–17h30, cerca de 10 horas por dia.
- À noite a concentração é difícil: cachorros, banho, jantar, família. Na cama antes das 22h.
- Desde o começo de novembro (informado em 09/11): **no mínimo 1 hora por dia útil** e **7 a 8 horas no fim de semana**, somando sábado e domingo. São cerca de **12h30 de estudo por semana**.
- Os áudios quase não são mais usados: serviram para a teoria do Fundamentos. Agora o estudo é o vídeo assistido com atenção e o quizz logo em seguida.

## Como estudar

| Tipo de aula | Como |
|---|---|
| **Teórica** (teoria do Prompt Engineering e dos próximos módulos) | Assistir ao vídeo com atenção e fazer o quizz logo em seguida. O áudio é opcional, para revisar o que errou no quizz. |
| **Prática** (Hands on, Quick Wins, labs, nivelamento) | No computador, acompanhando o código e testando variações por conta própria. Sem áudio nem quizz. Contar 2,5 vezes o vídeo (medido em 12/11). |
| **Aulas curtas** | Vídeo de 10 min ou mais: 10 perguntas e resumo de 500 a 1.000 palavras. De 5 a menos de 10 min: 5 perguntas e 250 a 500 palavras. Menos de 5 min: 3 perguntas e 100 a 250 palavras. |
| **Desafios** | No fim de semana. São o que vale nota. O bônus "Nivelamento - Introdução ao LangChain" ajuda nos dois desafios de 09/11. |

**Semana típica:** de segunda a sexta, 1h por noite, cerca de 30 min de vídeo com o quizz. No fim de semana, 7 a 8h no total: as aulas práticas, os desafios e a teoria seguinte.

## Plano até 04/01/2027 (refeito em 09/11)

Capacidade: 1h por noite nos dias úteis (cerca de 30 min de vídeo com o quizz) e 7 a 8h no fim de semana. Na conta, o estudo do Prompt Engineering leva cerca de 2 vezes o vídeo; essa proporção é uma suposição e vale conferir nas próximas semanas.

| Período | O que fazer | Vídeo novo |
|---|---|---|
| até 05/11 | **Fundamentos concluído em 05/11** | 4h45 |
| 05–09/11 | Prompt Engineering: 2.1.1 a 2.2.10 (capítulos 1 e 2). Nivelamento: Introdução e Primeiros passos | 4h32 |
| 10–13/11, à noite | Nivelamento: Chains (concluído em 11/11), Agentes (concluído em 12/11) e Memória (concluído em 13/11) | 2h44 |
| 14–15/11 | Nivelamento: RAG (**nivelamento concluído**). Depois, Prompt Engineering 2.3.1 a 2.4.2 | 2h37 |
| 16–20/11, à noite | Prompt Engineering: 2.4.3 a 2.5.4 | 2h23 |
| 21–22/11 | **Desafio de ingestão e busca semântica** | — |
| 23–27/11, à noite | Prompt Engineering: 2.5.5 a 2.6.10 | 2h40 |
| 28–29/11 | Prompt Engineering: capítulos 7 e 8. **Prompt Engineering concluído em 29/11** | 3h00 |
| 30/11–06/12 | **Desafio de prompts com LangChain/LangSmith** | — |
| 07–13/12 | IA Labs · Skills (17 aulas, opcional, sem desafio) | 4h46 |
| 14/12–03/01 | Folga para atrasos | — |

As datas de cada aula estão no dashboard. Se o desafio de ingestão não couber em 21–22/11, ele continua nas noites seguintes e empurra o resto do Prompt Engineering alguns dias, sem afetar a meta.

**Meta:** chegar a **04/01/2027** (Design Docs) com o Fundamentos, o Prompt Engineering, o nivelamento de LangChain e os 2 desafios de 09/11 concluídos. Pela agenda, o Prompt Engineering termina em 29/11 (antes era 12/12), o desafio de prompts sai de 13–20/12 para 30/11–06/12, e o Lab Skills cabe antes do Natal.

**Depois disso:** de 14/12 a 04/01 não há conteúdo novo liberado. A folga serve para atrasos, para refazer as questões erradas e para descansar.

## O que vem pela frente

Esta é uma leitura baseada só nos títulos e nas descrições. O conteúdo dos próximos módulos ainda não foi liberado.

- **Módulos de 2027:** engenharia aplicada (design docs, Claude Code e Cursor, agentes, MCP, arquitetura, DevOps), mais perto do trabalho do dia a dia do que o Fundamentos. O último módulo é de habilidades comportamentais.
- **O peso real está nos desafios:** quase um por mês, e valem para a aprovação.

## Economia de tokens

A conta do Claude é dividida entre o MBA e o trabalho. Mudanças feitas em 2026-10-31:

| Mudança | Onde |
|---|---|
| Aplicar quizz com Sonnet: `/clear`, `/model sonnet`, `/init <capítulo.aula>` | `init`, `init-adv`, `next-class` |
| Áudio com ~1,5 vez a duração do vídeo, no máximo 15 min (antes eram 20) | `get-audio` |
| Resumo e quizz validados juntos, numa rodada; validador lê só as fontes necessárias; 2 validações, a 3ª só para erro de gabarito ou de conteúdo | `next-class/references/revisao.md` |
| Plugins que o MBA não usa desligados neste projeto (ficaram Playwright e skill-creator) | `.claude/settings.json` |

**Hábitos:**

- Uma tarefa por sessão: `/clear` antes de cada `/next-class` e de cada `/init`.
- Uma aula por sessão na `next-class`.
- Para medir o efeito: rodar `/usage` antes e depois de uma aula.

## Próximos passos

- [x] Abrir e assistir à aula 2.10 na plataforma.
- [x] Rodar `/next-class` de 2.12 a 2.22.
- [x] Anotar o número de aulas e o tempo de vídeo do Prompt Engineering e recalcular a meta.
- [x] Decidir como serão os quizzes do Prompt Engineering e montar a agenda dele: um por aula, menor nas aulas curtas.
- [x] Rodar `/next-class 3.4` e fazer o quizz (3.2 e 3.3 ficam sem quizz).
- [x] Rodar `/next-class 3.6` (Encoder-only).
- [x] Concluir as aulas do Fundamentos (55 de 55 itens na plataforma, em 05/11).
- [ ] Rodar `/next-class 2.1.1` (Introdução e overview da disciplina) e começar o Prompt Engineering.
- [ ] Em 09/11, ver o tamanho do Lab Skills e dos 2 desafios.
- [ ] Revisar o ritmo no fim de novembro.
