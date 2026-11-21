# Entendendo Objetivos

## Checklist de objetivos como ponto de partida

Objetivo de avaliação é a definição explícita do que deve ser medido em um prompt. Sem isso, métricas e comparações ficam soltas, porque a equipe não sabe se está julgando exatidão, utilidade, formato, segurança ou custo. No mercado, esses objetivos aparecem com nomes relativamente padronizados em ferramentas, APIs e documentações. Essa checklist funciona como vocabulário operacional para transformar “quero melhorar o prompt” em “quero medir exatamente esta propriedade”.

## Correctness

Correctness mede se a saída bate com uma referência considerada correta para aquele caso. A lógica é comparar a resposta gerada com um fato, gabarito ou exemplo de referência e verificar se o conteúdo está certo. Esse objetivo é apropriado quando existe uma resposta verificável, como fatos, cálculos, classificações ou campos esperados. Se a pergunta admite validação objetiva, correctness é o critério que ancora a avaliação.

## Relevance

Relevance mede se a resposta realmente atende à pergunta ou à solicitação feita. Uma saída pode até parecer bem formada, mas ainda assim falhar por responder outra coisa, desviar do pedido ou trazer conteúdo fora do escopo. No exemplo “qual é a capital do Brasil?”, uma resposta sobre outro país não é relevante para a tarefa. Esse objetivo existe para separar aderência ao pedido de outras dimensões de qualidade.

## Faithfulness e groundedness

Faithfulness verifica se a resposta permanece fiel ao contexto fornecido e não inventa informações além do que deveria afirmar. Groundedness adiciona a ideia de base explícita: a resposta precisa estar sustentada por uma fonte, evidência ou contexto rastreável. Uma resposta pode ser fiel ao contexto sem necessariamente ser exata em sentido absoluto, porque fidelidade e exatidão não são a mesma coisa. Essa distinção é central quando a saída depende de documentos, contexto recuperado ou links usados como base da resposta.

## Grounding com fonte ou link

Quando um sistema apresenta um link, documento ou trecho como suporte da resposta, esse artefato funciona como grounding. O ponto não é apenas dizer algo plausível, mas mostrar de onde aquilo veio. Retomando a lógica de comparação entre critérios, a mesma resposta pode parecer boa em tom e estrutura, mas falhar se não estiver ancorada na fonte esperada. Em sistemas com RAG, busca ou documentação interna, grounding vira um objetivo de primeira classe.

## Conciseness

Conciseness mede se a resposta é direta e evita excesso de texto desnecessário. Respostas longas não são automaticamente melhores; em muitos casos, elas aumentam custo, tempo de leitura e ruído sem melhorar a decisão do usuário. Esse objetivo é útil quando o sistema precisa ser objetivo, como em assistentes operacionais, extração estruturada ou respostas rápidas. Concisão não significa omitir informação essencial, e sim entregar o necessário sem enrolação.

## Helpfulness

Helpfulness mede se a resposta foi realmente útil e clara para quem vai usá-la. Uma saída pode ser correta, relevante e curta, mas ainda assim não ajudar o usuário a agir, entender ou decidir. Por isso, utilidade não se reduz a exatidão nem a concisão: ela depende de a resposta fazer sentido no contexto de uso. Esse objetivo captura valor prático percebido, não apenas conformidade técnica.

## Bias, harmfulness e toxicity

Bias verifica se a resposta está enviesada de forma inadequada, especialmente em temas nos quais a formulação pode induzir preferência injustificada. Harmfulness cobre saídas potencialmente prejudiciais ao usuário ou a terceiros. Toxicity foca em conteúdo ofensivo, agressivo, degradante ou inadequado, incluindo insultos e linguagem abusiva. Esses objetivos são indispensáveis quando segurança e comportamento aceitável fazem parte da qualidade esperada do sistema.

## Format adherence

Format adherence mede se a saída respeita o formato exigido pela aplicação consumidora. Isso inclui gerar JSON válido, obedecer a um schema, preencher campos esperados ou produzir texto compatível com uma regex. Esse objetivo é especialmente importante quando a resposta será processada por software, e não apenas lida por humanos. Uma saída semanticamente boa ainda pode falhar operacionalmente se vier no formato errado.

## Efficiency

Efficiency trata do custo operacional do prompt em execução. Aqui entram latência, consumo de tokens, throughput e capacidade de sustentar requisições por segundo sob carga. Retomando o que já foi estabelecido sobre avaliação contínua, qualidade de saída não é a única variável relevante: um prompt pode melhorar a resposta e piorar drasticamente o custo. Eficiência vira objetivo quando a aplicação precisa equilibrar qualidade com viabilidade técnica e econômica.

## Pairwise como objetivo de comparação

Pairwise é a comparação direta entre duas versões de saída ou entre dois prompts executados sob a mesma base de teste. A técnica só faz sentido quando existe um critério de vitória definido antes: mais correto, mais útil, mais conciso, mais fiel ou qualquer outro objetivo explícito. Retomando a comparação entre prompts já conhecida, pairwise não substitui o objetivo; ele operacionaliza a decisão entre alternativas. Dizer que “o prompt A ganhou do prompt B” só é informativo quando se sabe em qual dimensão ele ganhou.

## O mesmo output sob objetivos diferentes

A mesma resposta pode receber julgamentos diferentes dependendo do objetivo escolhido. Uma saída pode ser correta, mas pouco relevante para o pedido específico; pode ser fiel ao contexto, mas longa demais; pode ser concisa, mas pouco útil; pode seguir o formato, mas ainda ser tóxica. Esse é o ponto central da definição de objetivos: qualidade não é uma propriedade única do prompt. Cada objetivo recorta uma dimensão distinta do comportamento que será medida depois por métricas e evaluators.
