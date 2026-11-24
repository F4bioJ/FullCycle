# Executando Pairwise — resumo

Aula prática: o professor executa no LangSmith o experimento pairwise montado na aula anterior (prompt A contra prompt B, decidido por um juiz) e mostra como ler o resultado.

## O script de execução

- **Prompts A e B:** vêm do LangSmith com `pull prompt`. O professor quis mostrar que um prompt também pode ser criado por API no LangSmith, com versionamento (já visto antes). O prompt do juiz é carregado localmente, mas também poderia ser criado com `create prompt` e buscado online.
- **Uma função para cada prompt:** "rodar o prompt A" monta o chat prompt com os dados de input (o `code` e a linguagem, que vêm do dataset) e a conexão com o modelo; a função do prompt B é igual, só muda o prompt.
- **Pairwise judge:** um pairwise evaluator criado com o template do juiz e a conexão com a OpenAI (com o wrap do LangSmith).
- **Comparação:** a avaliação comparativa do LangSmith recebe os nomes dos experimentos A e B (que cada execução devolve), o pairwise judge como evaluator, um prefixo e a concorrência.

## Passo 1: conferir o dataset

- **O que observar:** no LangSmith, o dataset do pairwise já está lá, com 10 samples e nenhum experimento ainda.

## Passo 2: rodar

- **O que observar:** o terminal executa os exemplos do prompt A, depois os do prompt B e, por fim, uma terceira execução: a avaliação. No LangSmith, os experimentos vão aparecendo.
- **O que mostra:** os experimentos A e B não têm nenhuma outra métrica (correctness, helpfulness etc.). Como o objetivo era só comparar A com B, o professor não quis gastar tokens com outros tipos de avaliação.

## Passo 3: ler o placar

- **O que observar:** em pairwise experiments, a comparação mostra o A como vencedor, com 5,5 contra 4,5.
- **O que mostra:** o placar segue a regra dada ao juiz, que pede um ranqueamento para ver quem ganha e tem mais pontos.

## Passo 4: inspecionar cada registro

- **O que observar:** ao abrir o experimento, cada registro mostra quem ganhou: em verde, os que o A venceu; em vermelho, os que perdeu; os registros mostram valores como 1 e 0.
- **O que mostra:** clicando num resultado e no run, vê-se o input (a linguagem era Go), o output da versão A e o da versão B; por exemplo, um lado apontou `command injection` e o outro `missing output validation`.

## Passo 5: ver o que o juiz recebeu

- **O que observar:** na chamada ao modelo (chat OpenAI), aparece o prompt inteiro do juiz ("você é um juiz imparcial", as regras de julgamento, o código) e o output, que só diz qual opção venceu, no caso a A.
- **O que mostra:** dá para descer a esse nível de detalhe para entender o julgamento. O professor acrescenta que também é possível pedir à IA que justifique por que tomou a decisão.

## Próximo passo

O prompt A venceu com essa pontuação. Na sequência, o professor vai mudar o prompt e rodar de novo, para ver se o vencedor ou o placar mudam.
