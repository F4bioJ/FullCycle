# Evalution com promptfoo — resumo

A aula apresenta outra forma de fazer a evaluation de skills: a ferramenta **promptfoo**, que o professor configura para avaliar a skill de triagem de issues da aula anterior.

## Por que outra ferramenta, se já existe o Skill Creator

Segundo o professor, a avaliação pelo Skill Creator funciona e é aconselhável, mas o mais importante é que a skill funcione em **vários modelos**. Usar o Skill Creator em outros modelos provavelmente traz dificuldades e, mesmo com a skill sendo hoje um padrão adotado pelas CLIs em geral, obrigaria a repetir configurações em cada CLI. O promptfoo simplifica a avaliação e atende a vários modelos.

## O que é o promptfoo

O site é promptfoo.dev, e a ferramenta é um pacote npm. Na essência, é um **avaliador de saídas de LLM**: você informa o prompt, e ele avalia a resposta pelas métricas que escolher, em vários modelos.

Hoje ele vai além da avaliação (code scanning, segurança, guardrails, um MCP próprio), mas o foco da aula é avaliar. É **open source** e gratuito, com uma versão cloud paga.

## Iniciando o projeto

Na pasta do projeto da aula anterior, o comando é `npx promptfoo@latest init`. Ele faz algumas perguntas: o que você quer fazer (o professor escolhe comparar prompts e modelos) e o modo de uso, que pode ser escolhido agora ou depois.

O setup gera o arquivo **`promptfooconfig.yaml`**, simples de trabalhar: a descrição, o prompt a ser testado, os **providers** (os modelos a testar) e o dataset de testes.

## Skill é, no fundo, um conjunto de prompts

O promptfoo não fala muito de skill. Mas uma skill é uma habilidade com instruções específicas: tem referências e scripts, mas, de forma geral, é um **conjunto de prompts**, e por isso pode ser avaliada assim.

## Configurando o provider

Primeiro, é preciso uma **chave de API** (Anthropic, OpenAI ou outra), exportada como variável de ambiente no terminal; o promptfoo a encontra por lá.

No `promptfooconfig.yaml`, o professor troca o provider pelo **Claude Agent SDK** e, no `config`, informa:

- a chave de API, lida da variável exportada;
- o modelo, o Claude Sonnet 4.6 (os nomes estão na lista de modelos de cada provedor, a "model list");
- o working dir (`.`) e os setting sources como `project`;
- a skill, `triagem-issue`;
- as tools permitidas, só a de leitura (Read);
- o permission mode `acceptEdits`, que é a permissão do próprio modelo.

O dataset que ele cola é, nas palavras dele, a mesma coisa que o `evals.json` da avaliação com o Skill Creator, só que em YAML.

## Rodando e lendo o resultado

O teste roda com `npx promptfoo eval`. Na demo, apareceram dois erros: o provider não foi identificado porque faltavam **dois-pontos** no id, e depois o eval rodou mas não conseguiu chamar o SDK, porque o **pacote do Agent SDK** não estava instalado na máquina; a correção foi instalá-lo com `npm i`.

Com `npx promptfoo view`, o resultado abre no browser: no topo, as métricas definidas no config, o **custo**, o total e a média de tokens, a **latência** e os tokens por segundo; abaixo, o que passou e o que falhou. Dois casos falharam porque, segundo o professor, ele esqueceu de apontar para o repositório correto.

## Métricas agregadas

Para organizar as métricas, o professor as separa em dois mundos. O primeiro é o das **métricas agregadas**:

- **pass rate:** percentual dos casos que passaram em todas as asserções;
- **pass/fail:** se cada asserção, individualmente, passou ou não;
- **custo, latência e tokens** gastos;
- **threshold:** a nota mínima da média para o caso ser aceito;
- **score ponderado:** a média ponderada das asserções, em que cada uma tem **peso padrão 1**.

## Tipos de asserção: determinísticas

O segundo mundo, mais analítico e o que mais importa para o professor, é o dos tipos de asserção, em dois grupos. As **determinísticas** são as mais exatas:

- **texto:** contém, não contém, contém tudo, contém uma parte;
- **estrutura:** validação de esquema e lógica booleana;
- **código e lógica:** verificações arbitrárias sobre o output;
- **similaridade de texto**, por fórmulas como Levenshtein, ROUGE e METEOR;
- **formato**, de forma geral.

## Tipos de asserção: model-graded

O outro grupo é o **model-graded**, em que um LLM avalia a saída; é o usado no exemplo da aula. O primeiro e talvez mais usado é a **rubrica de LLM** (`llm-rubric`), que avalia a resposta pelo critério que você escrever.

No exemplo, o teste é uma pergunta genérica de Git que não toca na skill: "qual a diferença entre git merge e git rebase". A asserção tem o tipo rubrica, a métrica "não dispara" e o valor: aprovado se responde conceitualmente sobre merge e rebase e não produz triagem de issue nem chama o GitHub MCP. Um LLM lê a resposta e confere se ela bate com a rubrica.

Cada teste do dataset segue a mesma estrutura: a **descrição**, as **variáveis** e as **asserções**, cada uma com o tipo, a métrica e o valor.

Além da rubrica, há outros model-graded:

- **G-Eval:** parecido com a rubrica, mas com raciocínio estruturado, uma espécie de chain of thought;
- **factuality:** mede a resposta contra uma resposta de referência;
- **similar:** similaridade semântica, baseada em embeddings;
- **select-best:** compara as saídas de vários providers ou prompts e escolhe a melhor;
- **moderation:** verifica conteúdo tóxico ou inadequado.

Existem também métricas para RAG, que o professor não cobre porque o foco é skill.

## Quais usar para skills

Para skills, a tendência é usar bastante a **rubrica**, que é o que mais faz sentido para testar o resultado da habilidade. O professor também gosta do **select-best**: ao testar em vários modelos, ele já aponta a melhor resposta entre eles.

## Fechamento: multimodelo e CI/CD

O promptfoo é mais uma alternativa para avaliar se o que a skill produz faz sentido em vários modelos, e serve também para prompts e outros usos. A dica final é colocar essa avaliação numa **pipeline de CI/CD**: toda vez que a skill for alterada, atualizada ou passar por manutenção, as asserções rodam de novo para garantir que ela continua viável para uso.
