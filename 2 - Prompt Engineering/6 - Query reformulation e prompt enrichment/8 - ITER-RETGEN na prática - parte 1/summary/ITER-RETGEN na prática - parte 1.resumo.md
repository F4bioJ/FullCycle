# ITER-RETGEN na prática - parte 1

## O que se vai testar

Depois da resposta simples do GPT sobre LangChain e LangGraph, o professor abre o arquivo do ITER-RETGEN, que ficou um pouco grande, mas enriquece a resposta num fluxo interessante. Os quatro elementos do diagrama, que a aula de ITER-RETGEN chamou de Draft, Query, Fill e Expansion, viram **quatro tipos de prompt**. Esta aula mostra os prompts; o professor para antes de executar e continua na próxima aula.

## Prompt 1: Draft (rascunho com lacunas)

- Recebe a variável de input `question`.
- Coloca o modelo como um assistente especialista **com conhecimento inicial limitado**, que deve responder marcando com **[MISSING]** os pontos e detalhes específicos que faltam.
- Exemplos do que marcar: versões específicas, datas de lançamento, especificações técnicas, parâmetros, performance, comparação de dados, implementação, casos de uso reais, limitações e roadmap.
- Pede para ser detalhista, mas com **no máximo cinco missing markers**, para não passar horas iterando.
- Saída: um draft com lacunas.

## Prompt 2: Query (geração de perguntas)

Recebe o draft com as lacunas e transforma **cada item faltante numa pergunta**, com **no máximo cinco itens**. Também pede para trazer a informação mais real possível sobre cada lacuna, com exemplos já respondidos (como "for missing version numbers, LangChain at 0.1.0"). O objetivo é gerar as queries, junto da informação, que vão preencher o que falta.

## Prompt 3: Fill (preenchimento)

Recebe a **pergunta original**, o **draft atual** (que pode ser da primeira ou da segunda iteração) e as **informações coletadas**. Instruções:

- substituir **um ou dois** missing markers por informação concreta, usando o que foi coletado;
- **não criar novos** missing markers;
- trocar o texto [MISSING] por conteúdo real, com exemplos do que fazer e do que não fazer;
- devolver a resposta inteira, com os marcadores substituídos.

A ideia é manter o progresso a cada lacuna preenchida.

## Prompt 4: Expansion (expansão)

O professor acrescentou esta etapa porque, muitas vezes, o modelo é muito inteligente: respondia todas as lacunas de uma vez, e quase não havia iteração. Nesse caso, o prompt pega o draft e procura informações ainda mais específicas, **gerando novas lacunas** para mais uma rodada de enriquecimento.

## O que observar

Cada prompt tem um papel e um limite claros: o Draft limita as lacunas a cinco, o Query lista no máximo cinco itens, o Fill preenche só uma ou duas por vez e não cria novas, e a Expansion força mais rodadas quando o modelo resolve tudo cedo demais. São esses limites que fazem o loop avançar de forma controlada.
