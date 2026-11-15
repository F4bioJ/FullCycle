# Revisitando conceitos

## Prompt Engineering como decisão de engenharia

Prompt Engineering não se limita a escrever instruções para um modelo; ele influencia o comportamento operacional de aplicações que usam LLMs em produção. Entender minimamente como o modelo funciona muda decisões de implementação, porque o desenho do prompt afeta velocidade, custo e utilidade da resposta. Isso vale tanto para ferramentas internas que aumentam produtividade quanto para sistemas mais complexos, como agentes de IA. Um prompt bem projetado deixa de ser tentativa e erro e passa a ser parte do design do sistema.

## Impacto em aplicações reais

Quando uma aplicação envia prompts a um modelo, cada escolha de contexto e formato tem consequência prática. Um prompt maior ou mal estruturado pode aumentar o tempo de resposta e elevar o custo de operação, enquanto um prompt mais enxuto e orientado ao objetivo tende a melhorar eficiência. Por isso, qualidade de resposta não pode ser analisada isoladamente: ela precisa ser equilibrada com latência e custo. Em produção, esse equilíbrio é uma restrição de engenharia, não um detalhe secundário.

## Janela de contexto e limite de tokens

Janela de contexto é o espaço disponível para o modelo processar instruções, histórico e dados de entrada em uma única chamada. Esse espaço é limitado por tokens, então cada palavra, trecho de histórico ou documento incluído consome parte de um orçamento finito. Quando esse limite é mal administrado, a aplicação perde eficiência e pode degradar a resposta ou exigir chamadas mais caras. Por isso, compreender contexto e tokens é base para qualquer estratégia séria de Prompt Engineering.

## Caching e batch prompting como alavancas de eficiência

Caching e batch prompting aparecem como técnicas importantes para reduzir desperdício operacional em sistemas baseados em LLM. Caching evita recomputar respostas ou partes de contexto que já foram processadas, enquanto batch prompting busca aproveitar melhor chamadas agrupando trabalho de forma eficiente. Essas técnicas não substituem um bom desenho de prompt, mas ampliam a capacidade de escalar com menor custo e melhor desempenho. Elas se tornam especialmente relevantes quando a aplicação faz muitas chamadas repetidas ou em alto volume.

## Base conceitual para os próximos tópicos

Janela de contexto, limite de tokens, caching e batch prompting formam um conjunto de conceitos que orienta decisões posteriores de implementação. Eles servem como base para discutir técnicas mais específicas de gerenciamento e otimização de contexto ao longo do capítulo. Sem esse enquadramento, Prompt Engineering vira apenas ajuste textual; com ele, passa a ser uma prática orientada por restrições reais de operação.
