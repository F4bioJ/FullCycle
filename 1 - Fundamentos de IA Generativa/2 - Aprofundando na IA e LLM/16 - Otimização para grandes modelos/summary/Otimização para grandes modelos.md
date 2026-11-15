# Otimização para grandes modelos

## LoRA: adaptação parcial com baixo custo

LoRA é uma técnica de fine-tuning eficiente que evita atualizar todos os pesos de uma LLM. Em vez disso, os pesos originais ficam congelados e o treinamento recai sobre camadas adicionais de baixa dimensão, chamadas de low-rank. Isso reduz custo computacional, uso de memória e risco de sobreajuste, mantendo a capacidade de especializar o modelo para um domínio específico. Retomando o cenário de especialização já discutido, um Llama 2 pode ser adaptado para atendimento jurídico em português sem o custo de refazer o ajuste completo do modelo.

## Quantização: menos memória para inferência local

Quantização reduz o tamanho e o custo operacional de um modelo ao representar seus pesos com formatos numéricos mais leves, como INT8 ou INT4, em vez de representações mais pesadas. O ganho principal aparece em memória e velocidade de execução, o que viabiliza rodar modelos em hardware mais modesto. Essa redução cobra um preço: parte da precisão se perde, então a escolha do nível de quantização é sempre um compromisso entre qualidade e eficiência. Um Mistral 7B quantizado para INT4, por exemplo, pode cair de algo como 13 GB para cerca de 4 GB e passar a rodar localmente em ferramentas como Ollama ou LM Studio.

## Mixture of Experts: ativação seletiva de submodelos

Mixture of Experts, ou MoE, organiza um modelo grande em vários especialistas internos e ativa apenas alguns deles para cada entrada. Em vez de mobilizar toda a rede a cada inferência, um componente roteador decide quais experts são mais adequados para processar aquela solicitação. Isso permite aumentar a escala total do modelo sem pagar o custo completo de ativação em todas as requisições. No caso do Switch Transformer, a ideia é justamente essa: mesmo com um número gigantesco de parâmetros, apenas uma fração dos especialistas entra em ação por entrada.

## P-Tuning e Prefix Tuning: especialização sem alterar pesos

P-Tuning e Prefix Tuning adaptam o comportamento da LLM sem modificar seus pesos internos. A estratégia consiste em injetar contexto aprendido na entrada, seja como vetores que orientam o processamento, seja como tokens pré-treinados posicionados no início da sequência. O efeito prático é semelhante ao de fornecer instruções persistentes que moldam a resposta do modelo para uma tarefa específica. Retomando a noção de engenharia de prompt já conhecida, aqui ela deixa de ser apenas texto manual e passa a incorporar estruturas aprendidas para guiar o modelo de forma mais estável.

## Trade-offs entre as técnicas

Essas técnicas resolvem problemas diferentes dentro da otimização de grandes modelos. LoRA ataca o custo do ajuste fino, quantização ataca o custo de memória e inferência, MoE melhora a eficiência estrutural em modelos muito grandes, e P-Tuning evita alterar pesos ao especializar comportamento. A escolha depende do gargalo dominante: orçamento de treinamento, limitação de hardware, escala do modelo ou necessidade de adaptação leve. Em ambientes reais, essas abordagens podem ser combinadas para equilibrar desempenho, custo e viabilidade operacional.
