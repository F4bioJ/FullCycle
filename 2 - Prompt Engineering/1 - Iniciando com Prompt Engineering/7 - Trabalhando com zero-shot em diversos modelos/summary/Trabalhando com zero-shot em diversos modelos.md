# Trabalhando com zero-shot em diversos modelos

## Zero-shot como instrução sem exemplos

Zero-shot é a técnica em que o modelo recebe apenas a tarefa, sem exemplos de entrada e saída. O ponto central não é o tamanho do prompt, mas a ausência de demonstrações do tipo “se entrar isso, responda aquilo”. Por isso, uma pergunta curta como “Qual é a capital do Brasil?” e uma instrução longa sem exemplos continuam sendo zero-shot. Essa técnica explora a capacidade base de generalização do modelo e costuma ser a forma mais frequente de uso em interações simples.

## Quando zero-shot funciona bem

Zero-shot é adequado para tarefas diretas, como resumir um parágrafo, traduzir uma frase curta, responder uma pergunta factual ou gerar um esqueleto inicial de API. Ele também é útil em sistemas com alto volume de chamadas, porque tende a exigir menos tokens de entrada do que técnicas com exemplos. Essa economia importa quando a aplicação faz milhões de requisições e o custo acumulado do contexto vira restrição arquitetural. A simplicidade do prompt, nesse caso, não é só conveniência: é uma decisão de eficiência.

## Limitações do zero-shot

A técnica perde força quando a tarefa exige raciocínio mais elaborado, maior precisão procedural ou forte padronização de resposta. Sem exemplos, o modelo tem mais liberdade para escolher estrutura, vocabulário e nível de detalhe, o que reduz controle sobre o formato de saída. Pequenas mudanças no wording do prompt também podem alterar bastante o resultado, especialmente em modelos mais sensíveis. Além disso, zero-shot não elimina alucinação; ele apenas reduz a complexidade da instrução.

## Formato de saída em zero-shot

Retomando a estrutura de mensagens já usada antes, o comportamento aqui depende mais da instrução explícita do que de exemplos. Se o prompt for apenas “Qual é a capital do Brasil?”, o modelo pode responder só “Brasília” ou produzir uma frase completa, como “A capital do Brasil é Brasília”. Quando a instrução inclui uma restrição como “responda apenas com o nome da cidade”, o formato tende a ficar mais controlado, mas ainda sem a rigidez de um few-shot ou de um esquema formal. Em zero-shot, pedir formato ajuda, mas não substitui demonstração quando a saída precisa ser altamente estável.

## Zero-shot para detecção de intenção

Detecção de intenção consiste em inferir o objetivo implícito do usuário a partir do texto enviado. Um prompt como “Descubra a intenção do usuário do seguinte texto” seguido de “Estou procurando um restaurante perto de São Paulo que tenha uma boa classificação para comida japonesa” já permite ao modelo extrair algo como busca por restaurante japonês bem avaliado na região de São Paulo. Isso é útil em aplicações que precisam decidir filtros, rotas ou consultas antes de responder. Em fluxos com RAG, por exemplo, a intenção pode orientar quais dados recuperar e como restringir a busca.

## Comparação prática entre prompts simples

Três prompts ilustram bem o comportamento do zero-shot: uma pergunta factual, uma tarefa de detecção de intenção e uma pergunta factual com restrição de formato. O primeiro mede resposta direta; o segundo mostra inferência sem exemplos; o terceiro testa quanto uma instrução curta já consegue moldar a saída. Essa comparação é valiosa porque isola a técnica e permite observar o efeito do modelo sem adicionar outras variáveis. O experimento continua simples, mas já revela diferenças de aderência, estilo e custo.

## Execução prática com modelos diferentes

Retomando a comparação prática entre modelos, o mesmo conjunto de prompts pode ser executado em um modelo mais antigo, como GPT-3.5 Turbo, e depois em um modelo mais recente, como GPT-4 ou GPT-5 nano. No GPT-3.5 Turbo, a resposta para “Qual é a capital do Brasil?” tende a ser mínima, como “Brasília”; no GPT-4, a mesma pergunta pode virar uma frase completa. A tarefa de intenção também muda de redação entre modelos, mesmo preservando o sentido geral. Isso mostra que zero-shot não é apenas “perguntar e receber”: o modelo escolhido altera concisão, estilo e quantidade de tokens consumidos.

## Custo oculto de modelos com reasoning

Alguns modelos usam reasoning interno mesmo em prompts extremamente simples. Nesses casos, a resposta visível pode ser curta, mas o consumo de tokens cresce porque o modelo gera etapas intermediárias de raciocínio que não aparecem integralmente para o usuário. Foi isso que ocorreu ao comparar uma resposta como “Brasília” com custos muito diferentes entre modelos: um respondeu de forma direta, enquanto outro consumiu mais de uma centena de tokens para entregar praticamente a mesma saída. Em produção, esse comportamento muda custo e latência de forma relevante, mesmo quando o prompt parece barato.

## Leitura técnica do experimento

A análise correta não é apenas “qual modelo respondeu certo”, porque todos podem acertar uma pergunta simples. O que importa é observar aderência ao formato pedido, variação de estilo, tempo de resposta e custo total de tokens. Um modelo com reasoning pode parecer mais sofisticado, mas ser economicamente inadequado para tarefas triviais e massivas. A escolha do modelo, portanto, precisa considerar a complexidade real da tarefa, e não apenas a capacidade máxima do sistema.
