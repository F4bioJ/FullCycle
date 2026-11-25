# Gabarito — Evalution com promptfoo

## 1. Skill em várias CLIs e modelos: por que levar a avaliação para o promptfoo?
**Correta: B**
**Por quê:** para o professor, o Skill Creator funciona e é aconselhável, mas o mais importante é a skill funcionar em vários modelos. Pelo Skill Creator, isso exigiria repetir configurações em várias CLIs; o promptfoo simplifica a avaliação e atende a vários modelos, com os providers declarados no mesmo config.
- **A:** o Skill Creator também avalia a qualidade do resultado; a aula 14 mostrou o viewer com a rodada com e sem a skill e o delta do benchmark.
- **C:** o professor diz o contrário: a skill é hoje um padrão adotado de forma geral pelas CLIs. O problema é o trabalho de configurar a avaliação em cada uma, não a skill deixar de ser lida.
- **D:** ser open source torna o promptfoo gratuito, mas ele avalia saídas de LLM: precisa de uma chave de API e chama o modelo, e a tela de resultado mostra justamente o custo e os tokens.
**Conceito:** motivo do promptfoo: avaliação multimodelo

## 2. Configuração do `promptfooconfig.yaml`: qual está INCORRETA?
**Correta: D**
**Por quê:** o professor diz que o dataset colado é a mesma coisa que o `evals.json` da avaliação com o Skill Creator, só que em YAML, "nada muito diferente daquilo que a gente já tinha". Não houve uma lógica de teste nova que obrigasse a repensar os casos.
- **A:** correta. O provider foi trocado pelo Claude Agent SDK, e o `config` traz o modelo Claude Sonnet 4.6.
- **B:** correta. A chave é exportada no terminal, e o promptfoo encontra a variável de ambiente.
- **C:** correta. Ele usa só a tool de Read, e o permission mode é `acceptEdits`, a permissão do próprio modelo.
**Conceito:** configuração do provider e do dataset no promptfoo

## 3. Provider reconhecido, mas o eval não chama o SDK: qual a causa?
**Correta: A**
**Por quê:** foi o segundo erro da demo. O eval rodou, mas não conseguiu chamar o SDK, porque quem nunca usou o Claude Agent SDK na máquina precisa instalar o pacote; o professor rodou o `npm i` e o teste passou a executar.
- **B:** a falta dos dois-pontos no id foi o primeiro erro da demo, mas o sintoma era outro: o promptfoo não conseguia identificar o provider. No cenário, o provider já é reconhecido.
- **C:** a lista de modelos serve para achar o nome certo a pôr no config, mas a aula não mostrou nenhuma falha de nome de modelo; o erro de "não chamar o SDK" veio do pacote ausente.
- **D:** o `acceptEdits` é a permissão do modelo na sessão e não impede a chamada ao SDK; a combinação com a tool de Read foi a usada na demo que funcionou.
**Conceito:** erros ao rodar o eval: id do provider x pacote do SDK

## 4. Três asserções, uma falhou: como o caso aparece nas métricas agregadas?
**Correta: C**
**Por quê:** pela descrição do professor, o pass rate é o percentual dos casos que passaram em todas as asserções; sem threshold, um caso com uma asserção falhando não entra como aprovado. O pass/fail, por sua vez, mostra individualmente se cada asserção passou ou não, o que aponta qual delas falhou.
- **A:** contar 2/3 é olhar asserção por asserção, que é o papel do pass/fail e do score, não do pass rate, que conta casos.
- **B:** o peso padrão 1 entra no score ponderado, não no pass rate; e a maioria passar não basta, porque o pass rate exige todas.
- **D:** o threshold é um corte opcional de nota mínima; o pass rate existe sem ele e conta os casos que passaram em todas as asserções.
**Conceito:** pass rate x pass/fail

## 5. Aceitar o caso com média ≥ 0,8: qual métrica fixa esse corte?
**Correta: A**
**Por quê:** o threshold é, nas palavras do professor, a nota mínima da média que se considera para o caso ser aceito ou não. É ele que transforma a média num critério de aceite.
- **B:** o score ponderado é a média ponderada das asserções (peso padrão 1), ou seja, é a nota que será comparada; ele mede, mas não define o corte de aceite.
- **C:** o pass rate é o resultado agregado sobre os casos; ele reflete o critério de aceite, mas não é onde se fixa a nota mínima de cada caso.
- **D:** o select-best é uma asserção model-graded que compara saídas de vários providers ou prompts; não define uma nota mínima.
**Conceito:** threshold e score ponderado

## 6. Três providers passam em tudo: qual asserção aponta a melhor saída?
**Correta: C**
**Por quê:** o select-best compara as saídas de vários providers ou prompts e escolhe a melhor. O professor diz que gosta dele justamente ao testar em vários modelos, porque já aponta a melhor resposta entre eles. A rubrica só diz se cada saída atende ao critério, e aqui todas atendem.
- **A:** o G-Eval é parecido com a rubrica, com raciocínio estruturado, mas julga cada saída contra um critério; não compara providers entre si para escolher uma.
- **B:** o similar mede similaridade semântica por embeddings, em geral contra um valor esperado; saídas parecidas entre si não dizem qual é a melhor.
- **D:** o factuality mede a resposta contra uma referência; o cenário não tem referência, e o objetivo é comparar as saídas entre si.
**Conceito:** select-best na comparação multimodelo

## 7. Necessidade x tipo de asserção: qual pareamento está INCORRETO?
**Correta: B**
**Por quê:** similaridade de texto por fórmulas como Levenshtein, ROUGE e METEOR está no grupo **determinístico**: é um cálculo exato sobre o texto, sem um LLM julgando. O que fica no model-graded é o similar, que usa embeddings e similaridade semântica.
- **A:** correto. Validação de esquema é uma métrica determinística de estrutura.
- **C:** correto. Conferir se a resposta contém um termo é uma métrica determinística de texto.
- **D:** correto. O moderation é model-graded e verifica conteúdo tóxico ou inadequado.
**Conceito:** determinísticas x model-graded

## 8. Teste do merge e rebase com rubrica: como decide se passou?
**Correta: D**
**Por quê:** a rubrica de LLM avalia a resposta pelo critério escrito. O valor do teste diz: aprovado se responde conceitualmente sobre merge e rebase e não produz triagem de issue nem chama o GitHub MCP. Um LLM lê a resposta e confere se ela bate com essa rubrica; se o resultado não é o da skill, está aprovado.
- **A:** a aula não mostrou o promptfoo lendo log de carregamento da skill; o "não dispara" é julgado pelo conteúdo da resposta, via rubrica.
- **B:** conferir termos com "não contém" seria uma asserção determinística de texto. É possível, mas não é o que o teste da aula usa: ali o tipo é rubrica de LLM.
- **C:** a comparação com e sem a skill é o que o viewer do Skill Creator mostrou na avaliação de qualidade (aula 14), não o mecanismo deste teste.
**Conceito:** llm-rubric para testar que a skill não dispara

## 9. Textos parecidos que discordam num fato: qual model-graded mira isso?
**Correta: B**
**Por quê:** o factuality mede a resposta contra uma resposta de referência. No cenário, o problema é a resposta estar certa ou errada em relação à referência (P0 ou P1), e não o quanto o texto se parece com ela.
- **A:** o similar compara com a referência por similaridade semântica; duas saídas quase iguais no texto teriam similaridade alta mesmo divergindo na prioridade.
- **C:** o G-Eval é uma rubrica com raciocínio estruturado; ajuda a julgar um critério, mas não é o tipo que a aula descreve como medida contra a referência.
- **D:** o moderation verifica conteúdo tóxico ou inadequado; uma prioridade errada é erro de fato, não conteúdo impróprio.
**Conceito:** factuality x similar

## 10. Avaliação do promptfoo em CI/CD: qual o ganho?
**Correta: A**
**Por quê:** a dica final do professor é pôr a avaliação numa pipeline de CI/CD que roda a cada alteração, atualização ou manutenção da skill, refazendo as asserções para garantir que ela continua viável para uso. Conversa com a ideia da aula 14: a skill virou código e precisa de manutenção e testes.
- **B:** o promptfoo avalia; a aula não mostrou ele reescrevendo a description. Esse loop de otimização é do Skill Creator (aulas 14 e 15).
- **C:** a separação em treino e holdout foi mostrada no loop de trigger do Skill Creator (aula 15), não na pipeline do promptfoo; e os casos continuam precisando de revisão.
- **D:** a pipeline testa os providers declarados no config naquele momento. Modelos diferentes respondem de forma diferente (aula 15), então não há garantia para modelos futuros.
**Conceito:** promptfoo em CI/CD como teste de regressão da skill
