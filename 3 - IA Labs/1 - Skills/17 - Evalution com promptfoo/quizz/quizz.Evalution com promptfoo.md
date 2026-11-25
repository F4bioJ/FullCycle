# Quizz — Evalution com promptfoo

**Capítulo:** 1 - Skills · **Aula:** 17
**Base:** material da aula

---

## 1. Sua equipe usa a skill de triagem de issues no Claude Code e em outras duas CLIs, cada uma com um modelo diferente. A skill já foi avaliada com o Skill Creator no Claude Code. Que motivo da aula justifica levar a avaliação para o promptfoo?
- A) O Skill Creator mede o trigger, e a avaliação de qualidade da saída pede uma ferramenta externa.
- B) Pelo Skill Creator, cada CLI pediria configuração; o promptfoo roda os mesmos testes em vários providers.
- C) Fora do Claude Code a skill deixa de seguir o padrão aberto, então o Skill Creator não consegue lê-la.
- D) O promptfoo, por ser open source, roda os testes sem chamar modelo, o que tira o custo das várias CLIs.

## 2. Sobre a configuração que o professor montou no `promptfooconfig.yaml` para avaliar a skill `triagem-issue`, qual afirmação está INCORRETA?
- A) O provider passou a ser o Claude Agent SDK, com o modelo Claude Sonnet 4.6 indicado no `config`.
- B) A chave de API foi exportada como variável de ambiente no terminal, e o promptfoo a encontra por lá.
- C) As tools ficaram limitadas à de leitura, e o permission mode foi definido como `acceptEdits`.
- D) Os casos do `evals.json` tiveram de ser repensados, porque o YAML do promptfoo usa outra lógica de teste.

## 3. Você roda `npx promptfoo eval` pela primeira vez com o provider do Claude Agent SDK. A chave está exportada e o provider é reconhecido, mas o eval termina sem conseguir chamar o SDK. Qual é a causa mais provável, pelo que a aula mostrou?
- A) O pacote do SDK ainda não foi instalado na máquina, e falta rodar o `npm i` dele.
- B) O id do provider está sem os dois-pontos, e por isso o promptfoo não o associa ao SDK.
- C) O nome do modelo não está na lista do provedor, e o SDK recusa a chamada antes de executar.
- D) O permission mode `acceptEdits` bloqueia a chamada, porque a skill está limitada à tool de leitura.

## 4. Um caso do dataset tem três asserções: duas passam e uma falha, e não há threshold configurado. Como esse caso aparece nas métricas agregadas que a aula descreveu?
- A) Entra no pass rate como 2/3 de acerto, porque o pass rate é calculado asserção por asserção.
- B) Entra como aprovado no pass rate, porque a maioria das asserções passou e o peso padrão é 1.
- C) Não conta como aprovado no pass rate, e o pass/fail mostra qual das três asserções falhou.
- D) Fica fora do pass rate até que um threshold seja definido, já que sem ele não há nota mínima.

## 5. Você quer aceitar um caso quando a média das asserções chegar a pelo menos 0,8, mesmo que uma rubrica secundária falhe. Qual métrica da aula serve para fixar esse corte?
- A) O threshold, que define a nota mínima da média para o caso ser aceito.
- B) O score ponderado, porque ele já é a média das asserções de cada caso.
- C) O pass rate, porque ele mede o percentual dos casos que foram aprovados.
- D) A asserção select-best, porque ela escolhe a melhor saída e descarta as fracas.

## 6. Você roda a skill em três providers e os três passam em todas as rubricas. Ainda falta saber qual saída ficou melhor em cada caso. Qual tipo de asserção da aula atende a isso?
- A) G-Eval, porque o raciocínio estruturado dá uma nota mais fina a cada saída isolada.
- B) Similar, porque a similaridade semântica entre as saídas mostra qual delas se destaca.
- C) Select-best, porque compara as saídas dos providers e escolhe a melhor entre elas.
- D) Factuality, porque a saída mais próxima da referência é a melhor entre os providers.

## 7. Qual pareamento entre a necessidade e o tipo de asserção está INCORRETO?
- A) Conferir que a saída da triagem segue o esquema JSON combinado: determinística, de estrutura.
- B) Medir se a resposta se parece com um texto de referência por Levenshtein ou ROUGE: model-graded.
- C) Conferir que a resposta traz o rótulo "P0" numa issue de produção quebrada: determinística, de texto.
- D) Barrar respostas com conteúdo tóxico ou inadequado: moderation, do grupo model-graded.

## 8. No teste "qual a diferença entre git merge e git rebase", a métrica é "não dispara" e a asserção é uma rubrica de LLM. Como esse teste decide se passou?
- A) O promptfoo lê o log da sessão e aprova se a skill `triagem-issue` não foi carregada.
- B) Uma asserção de texto confere que a resposta não contém termos da triagem, como "P0".
- C) A saída com a skill é comparada à saída sem a skill, e passa se as duas forem iguais.
- D) Um LLM julga se a resposta trata da pergunta conceitual sem triar issue nem chamar o MCP.

## 9. Você tem uma resposta de referência para cada caso. Duas saídas podem ser quase iguais no texto e discordar num fato, como classificar a issue como P0 ou P1. Qual tipo model-graded mira esse problema?
- A) Similar, porque compara a saída com a referência por similaridade semântica de embeddings.
- B) Factuality, porque mede a saída contra a referência, e não a semelhança entre os textos.
- C) G-Eval, porque o raciocínio estruturado obriga o modelo a justificar a prioridade escolhida.
- D) Moderation, porque uma prioridade errada numa issue de produção é tratada como inadequada.

## 10. A equipe passa a mexer com frequência no corpo da skill de triagem. Que ganho o professor aponta ao colocar a avaliação do promptfoo numa pipeline de CI/CD?
- A) A cada alteração ou manutenção, as asserções rodam de novo e mostram se a skill continua viável.
- B) A pipeline reescreve a description quando o pass rate cai, como o loop de otimização do Skill Creator.
- C) A pipeline separa o dataset em treino e holdout, o que dispensa revisar os casos a cada mudança.
- D) A pipeline cobre também os modelos que vierem depois, já que os providers ficam declarados no YAML.
