# Geração e revisão: gerente Opus + validador Sonnet

Todo artefato gerado passa por este fluxo antes de ser dado como pronto. O objetivo é que o usuário nunca estude com um material errado nem responda um quizz com gabarito errado.

Em 2026-10-31 o usuário pediu para economizar tokens: a conta é dividida entre o MBA e o trabalho. Por isso os dois artefatos de cada skill são validados juntos, o validador lê só as fontes necessárias e a 3ª validação só acontece para erro de gabarito ou de conteúdo. A segunda leitura por outro modelo continua obrigatória.

## Papéis

| Papel | Modelo | Como roda | Faz |
|---|---|---|---|
| **Gerente** | Opus 5.5 | A própria sessão que executa a skill | Cria e corrige os artefatos: o resumo gerado e o quizz da aula (`next-class`), o material avançado e o quizz avançado (`next-class-adv`). Decide o status de cada um. |
| **Validador** | Sonnet 5.5 | `Agent` com `model: "sonnet"` | Só lê e avalia. Devolve "OK" ou a lista de problemas. Nunca edita. |

**Verificação inicial:** o gerente precisa ser Opus. Se a sessão estiver em outro modelo, pare antes de gerar qualquer coisa e peça ao usuário para trocar com `/model` (Opus 5.5) e repetir o comando. Não use o gerente em outro modelo por conta própria.

## Contexto do validador

- O validador recebe, com caminhos absolutos, só o que precisa para julgar: transcrição, resumo do professor e `references/quiz.md`. Das aulas vizinhas, só o resumo gerado (`summary/*.resumo.md`) da aula anterior, para checar os distratores que vêm de outra aula; nada de transcrições vizinhas. Na `next-class-adv`, acrescente o material avançado em avaliação.
- Os critérios de avaliação vão no próprio pedido (copie a seção de critérios do artefato e o formato de retorno), para o validador não precisar ler este arquivo.
- É criado uma única vez por aula (`Agent` com `name`) e depois acionado com `SendMessage` nas rodadas seguintes, para lembrar do que já apontou e aprovou. Não crie um validador novo a cada rodada.
- O validador não recebe a opinião do gerente sobre o próprio trabalho, só os arquivos (e, nas rodadas seguintes, o que foi corrigido).

## Artefatos

| Artefato | Arquivos avaliados juntos |
|---|---|
| Resumo gerado (bsc) | `summary/<título>.resumo.md` |
| Material avançado (adv) | `advanced/<título>.adv.md` |
| Quizz da aula | `quizz.<título>.md` + `quizz.<título>.gabarito.md` |
| Quizz avançado | `quizz.<título>.adv.md` + `quizz.<título>.adv.gabarito.md` |

Os dois artefatos de cada skill são validados **juntos, na mesma rodada**: na `next-class`, o resumo gerado e o quizz da aula; na `next-class-adv`, o material avançado e o quizz avançado. Nas aulas práticas da `next-class` não há quizz, então o validador avalia só o resumo, focado no experimento e sem o mínimo de 500 palavras. O gerente escreve o primeiro, escreve o quizz em cima dele, faz a conferência própria dos dois e só então chama o validador. A cópia da transcrição, a cópia do resumo do professor e o áudio não passam por este fluxo. As refações de questões erradas também não: o gerente escreve e confere as perguntas novas sozinho (veja "Refazer as erradas" na `next-class`).

## Fluxo da validação

```
gerente cria os dois artefatos e faz a conferência própria
validação 1: Validador avalia os dois → "OK" ou lista de problemas por artefato
    artefato com OK: aprovado
se sobrou problema: gerente corrige só o apontado
validação 2: Validador avalia só o que foi corrigido
    artefato com OK: aprovado
se ainda sobrou problema:
    pontual (uma palavra, uma frase, uma letra): gerente corrige, confere e aprova sem nova validação
    erro de gabarito ou de conteúdo: gerente corrige e faz a validação 3
    outro (estilo, nível, distrator fraco): vai para "Quando o artefato fica Pendente"
validação 3 sem OK: vai para "Quando o artefato fica Pendente"
```

- Por padrão, **2 validações**. A 3ª só existe para **erro de gabarito ou de conteúdo**: gabarito errado, mais de uma alternativa defensável, afirmação falsa ou inventada no resumo ou no material.
- Na correção, o gerente altera **apenas** o que foi apontado. Reescrever o resto pode introduzir erros novos em trechos já aprovados.
- Se uma correção do resumo ou do material muda algo que o quizz cobra, o gerente ajusta o quizz na mesma correção e avisa o validador na rodada seguinte.
- Se o gerente discordar de um item, não o ignore: na rodada seguinte, responda ao validador com a evidência. Se o validador mantiver o problema, trate como problema.

## Conferência própria do gerente

Antes de mandar o artefato ao validador, o gerente confere por conta própria: refaz as contas, confere as fontes que levantam suspeita e resolve as questões sem olhar o gabarito. O validador é a segunda leitura, não a única.

**Lint obrigatório (2026-11-16):** os vícios mecânicos de `references/quiz.md` (correta mais longa, absolutos só nas erradas, letras concentradas, enunciado que repete palavra só da correta) passavam pelo gerente e pelo validador, porque lidos "a olho" parecem conteúdo (ex.: "sempre" ou "únicos" numa errada da 2.4.3). Por isso, antes de chamar o validador, rode:

```
node .claude/skills/next-class/scripts/lint-quizz.mjs "<quizz.título.md>" "<quizz.título.gabarito.md>"
```

- Cada alerta deve ser corrigido ou justificado: o absoluto pode ficar se também aparecer na correta, ou se a palavra for conteúdo e não ênfase (ex.: "só" no sentido de "apenas depois de X" pode ser legítimo, mas então ponha um absoluto equivalente em outra alternativa).
- Rode de novo depois de corrigir. Só chame o validador com o lint limpo, ou com os alertas restantes justificados no pedido.
- Isso vale também para o quizz avançado e para as perguntas novas da refação.
- O validador deixa de contar absolutos, tamanhos e letras (critério 5 abaixo): ele confere o que exige leitura, ou seja, gabarito, escopo e relevância.

## Formato do retorno de problemas

Peça ao Validador exatamente isto:

```
Responda só com uma destas formas:

OK

ou, se houver problemas, uma lista em que cada item tem:
- Artefato/questão: <arquivo e seção, ou "Q7 do quizz avançado">
- Problema: <o que está errado, em uma ou duas frases>
- Evidência: <de onde vem: trecho da transcrição, fonte, conta refeita>
- Sugestão: <como corrigir, opcional>

Não reescreva o artefato. Não aponte preferência de estilo, só problemas que se enquadrem nos critérios. Se tiver dúvida real sobre um item, liste como problema e diga que é dúvida.
```

## Critérios: resumo gerado (bsc)

1. **Fidelidade:** todo conceito do resumo está na transcrição ou no resumo do professor; nada inventado ou acrescentado.
2. **Cobertura:** nenhum conceito apresentado na aula ficou de fora, e a ordem é a do professor.
3. **Correção:** as afirmações estão certas (se o professor errou, o resumo não repete o erro como fato).
4. **Forma:** português claro, um título por conceito, no tamanho da faixa da aula ("Aulas curtas" na `SKILL.md`: de 500 a 1.000 palavras em aulas de 10 minutos ou mais).

## Critérios: material avançado (adv)

1. **Correção técnica:** fórmulas, dimensões, exemplos numéricos (refazer a conta), pseudocódigo e código.
2. **Fatos e fontes:** datas, autores, números e resultados conferem com as fontes citadas; toda fonte listada existe e sustenta o que se diz dela. Pode usar WebSearch/WebFetch.
3. **Fidelidade à aula:** os temas seguem a ordem do professor e nada da aula foi omitido ou distorcido.
4. **"O que a aula simplificou":** cada correção ao professor está realmente certa (corrigir o professor onde ele estava certo é erro grave).
5. **Profundidade e estrutura:** vai além de um resumo melhorado em nível médio, cobre o que a aula deixou faltando, conecta com aulas anteriores, fecha com implicações e armadilhas; de 1.000 a 2.000 palavras.

## Critérios: quizzes

1. **Gabarito correto:** resolver cada pergunta sem olhar o gabarito e comparar. Refazer toda conta, fator por fator. Verificar que há **uma única** alternativa correta (nas perguntas "qual está INCORRETA", uma única errada).
2. **Explicações:** a justificativa da correta e de cada errada está certa e coerente com a base.
3. **Base:** cada pergunta é sustentada pela base certa (aula ou material avançado); o quizz avançado indica `**Seção:**` válida em cada questão e não repete o quizz da aula.
4. **Filtro de relevância e nível** de `references/quiz.md`: nada de datas, autores, constantes ou contas longas; no máximo uma conta; perguntas que um aluno atento acertaria entre 5 e 8 de 10, não definições triviais.
5. **Vícios que entregam a resposta:** o gerente já rodou o `lint-quizz.mjs` (correta mais longa, absolutos só nas erradas, letras concentradas, enunciado que repete a correta). O validador confere só o que o script não vê: distrator absurdo ou implausível, e absoluto que o lint justificou mas que ainda denuncia a errada. Um alerta do lint justificado de forma fraca conta como problema.
6. **Formato:** 10 perguntas (ou menos em aula curta, conforme "Aulas curtas" na `SKILL.md`), quatro alternativas, arquivo de perguntas sem marca de resposta, campos do gabarito completos.

## Quando o artefato fica Pendente

Depois da última validação sem "OK" (a 2ª, ou a 3ª quando houve), se os problemas restantes forem pontuais (uma palavra no enunciado, uma frase no gabarito, uma letra trocada), o gerente os corrige, refaz a conferência própria e o artefato é aprovado sem nova validação. Registre essa correção no relatório. Se não forem pontuais:

1. O gerente grava no topo do arquivo principal do artefato (material, ou arquivo de perguntas do quizz), logo abaixo do título:
   ```markdown
   > **Status:** Pendente — <uma linha com o problema que restou>
   ```
2. O artefato não é apagado: continua na pasta, marcado.
3. Registre em `acompanhamento.md`, na linha da aula, que o artefato está Pendente.
4. Se o artefato é o resumo gerado, o áudio da aula **não é gerado**; ele entra no relatório como não criado, com este motivo. Se é o material avançado, o quizz avançado também fica Pendente, porque foi escrito em cima dele.
5. Avise o usuário **na mesma resposta** em que mostra o que foi criado, com: qual artefato, qual questão/seção, o último problema apontado e o que já foi tentado. Não aplique um quizz Pendente sem o usuário concordar.

Se depois o gerente resolver o problema de um artefato Pendente, ele remove a linha de status, atualiza o `acompanhamento.md` e o artefato conta como aprovado.

Artefato aprovado não recebe nenhuma marca de status.

## Relatório ao usuário

Ao final das tarefas de cada skill, junto da lista de arquivos criados, mostre uma tabela curta com os artefatos que ela gerou:

| Artefato | Validações | Resultado |
|---|---|---|
| Resumo gerado | 1 | Aprovado |
| Material avançado | 2 | Aprovado |
| Quizz da aula | 2 | Aprovado (correção pontual após a 2ª) |
| Quizz avançado | 3 | **Pendente** |

Liste cada correção pontual feita depois da 3ª validação (artefato, o que mudou, por quê). Para cada Pendente, descreva o problema como no item 5 acima. Feche o relatório com a lista do que **não pôde ser criado** (artefato e motivo), incluindo o áudio quando bloqueado.
