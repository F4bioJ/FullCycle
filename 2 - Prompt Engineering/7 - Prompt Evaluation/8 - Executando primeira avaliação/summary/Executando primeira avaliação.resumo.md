# Executando primeira avaliação — resumo

Aula prática: o professor roda o primeiro experimento de avaliação no LangSmith, sobre um dataset de exemplos de código para revisão (`dataset.json`).

## O ambiente do experimento

Os exemplos usam bibliotecas Python do LangSmith e a OpenAI. O professor usa recursos bem básicos do LangChain, de propósito, para evitar problemas de compatibilidade e manter o código menos amarrado a ele ao longo do tempo. O repositório tem dez exemplos que seguem praticamente a mesma estrutura; ele os separou só para ficar mais didático, e por isso detalha mais este primeiro. Ele também avisa que o foco é entender os formatos de evaluation, não cada linha de código.

## Passo 1: subir o dataset

- **O que fazer:** rodar o script de upload, que lê o `dataset.json`, itera pelos exemplos e os envia ao LangSmith com o nome do dataset usado em todos os exemplos (algo como "Evaluation Basic Dataset").
- **O que observar:** a execução sobe 18 exemplos. No LangSmith, no menu **Datasets & Experiments**, aparece o dataset; clicando nele, veem-se os exemplos e a aba de experimentos, ainda vazia, porque nada foi executado.
- **O que mostra:** dataset e experimento são coisas diferentes. **Experimento** é quando se faz de fato uma avaliação baseada naquele dataset.

A interface pode estar diferente quando o aluno assistir, mas os conceitos continuam os mesmos.

## Por que API e não a interface

O LangSmith tem uma área de **Evaluators**, que permite criar avaliadores a partir dos templates da própria plataforma. O professor preferiu fazer tudo por chamadas de API, para que a avaliação não parecesse "mágica" e desse para entender o que está por trás; a plataforma fica para ver o resultado dos experimentos.

## O prompt avaliado

O prompt está em um arquivo YAML (`format_eval`), formato de que o professor gosta. A variável é `code`, e o template diz, em resumo: você é um revisor de código que sempre responde em JSON; revise o código abaixo, descreva os problemas e responda apenas o JSON no formato pedido. O formato traz `findings` (com tipo, descrição e nível de criticidade) e um resumo final. O `code` é preenchido com o código que vem do dataset.

## A chamada ao modelo

O prompt carregado é formatado com o código do exemplo e enviado pelo **SDK da OpenAI**, não pela abstração de LLM do LangChain. O cliente da OpenAI é "embrulhado" (wrap) pela ferramenta do LangSmith para manter o tracing das chamadas. A mensagem vai com papel `user`, e o modelo escolhido é um modelo mini sem raciocínio avançado, para executar rápido, com **temperatura zero**, para deixar a resposta sem criatividade. A função devolve como `output` o conteúdo da última mensagem.

## Duas funções de preparação

- **`prepareJSONData`:** pega a `prediction` (o resultado da execução) e deixa o `output` de referência em branco. Isso porque, dependendo da situação, não há ground truth: nenhum exemplo de como se espera a resposta.
- **`prepareSchemaData`:** prepara os dados para conferir o schema do JSON retornado, e já traz `reference` com os `outputs`.

Ou seja, uma preparação tem a referência e a outra não.

## Dois evaluators

1. **Validade do JSON (built-in):** um evaluator pronto do LangChain (`LangChainStringEvaluator`) configurado para o tipo **validade de JSON**, recebendo a função `prepareJSONData`. É uma avaliação por **código**, não por LLM as a Judge, e já existe por padrão.
2. **`validateJSONSchema` (customizado):** o professor escreveu o schema do JSON esperado (um objeto com `findings` do tipo array etc.) e uma função que executa o runner, carrega os outputs e valida o schema. O retorno vai ao LangSmith como nota:
   - schema bate: `score` 1;
   - erro de formatação ou codificação do JSON: `score` 0, com "JSON inválido" e o erro;
   - schema inválido: `score` 0, com o motivo.

## Passo 2: rodar o evaluate

A chamada `evaluate` recebe o prompt (a função que executa), o nome do dataset e a lista de evaluators (os dois acima). Ela também define quantas execuções faz de uma vez e um **prefixo** para o experimento, para facilitar achar o resultado no LangSmith. Ao rodar o script `1-basic1-formatEval` (avaliação de formato), cada evaluator faz sua análise sobre os exemplos já enviados.

- **O que observar:** o terminal itera pelos itens (até os 18), e o LangSmith já mostra os resultados **em tempo real**, enquanto a execução ainda roda. No experimento aparecem duas colunas de resultado, uma para cada evaluator, com o mesmo nome que foi dado no código: a validade do JSON e o `validateJSONSchema`.
- **O que mostra:** todos os casos tiveram score 1, ou seja, todos os JSONs foram válidos e seguiram o schema, e o experimento foi bom.

## Experimentos ao longo do tempo

A cada nova execução, inclusive com outros formatos, o LangSmith acumula os experimentos e gera gráficos comparativos com o que foi rodado ao longo do tempo. Os próximos exemplos repetem essa mesma estrutura: dataset, prompt, runner, preparação dos dados e evaluators passados ao `evaluate`.
