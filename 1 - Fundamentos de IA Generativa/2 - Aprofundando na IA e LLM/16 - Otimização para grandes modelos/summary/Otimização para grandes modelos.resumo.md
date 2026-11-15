# Otimização para grandes modelos — resumo

## Por que otimizar

As LLMs cresceram muito: mais dados, mais tokens, estruturas neurais cada vez mais complexas. Treinar e ajustar esses modelos ficou caro. O fine tuning, que serve para adaptar um modelo a uma empresa ou a um domínio, trouxe junto o problema de poder computacional e custo. Nesta aula o professor repassa, de forma rápida, **quatro técnicas de otimização** para grandes modelos: LoRA, quantização, Mixture of Experts e P-Tuning/Prefix Tuning. Cada uma ataca um gargalo diferente.

## LoRA: fine tuning parcial

LoRA significa **Low-Rank Adaptation**. Em vez de refazer o fine tuning completo, que atualiza todos os pesos do modelo, o LoRA:

- **congela os pesos originais**;
- **adiciona camadas mais leves, de baixa complexidade**, chamadas *low rank*;
- **treina só essas camadas novas**, sem treinar de novo toda a estrutura de parâmetros que já existia.

O resultado é um fine tuning parcial que ainda gera o resultado desejado, com menos tempo, menos uso de memória e **menor risco de sobreajuste** (overfitting). É uma forma eficiente de especializar uma LLM.

Exemplo: preparar um **Llama 2 para atendimento jurídico em português**. Um fine tuning completo seria caro demais para uma empresa brasileira, que não tem dinheiro para "refazer um Llama 2". Com LoRA, o modelo especializado sai mais rápido e bem mais barato. O professor avisa, porém, que **não sai de graça**: ainda há algum custo, só que o processo fica muito mais simples.

## Quantização: INT8 e INT4

O contexto aqui é outro: a LLM exige muita GPU e muita memória, e não roda numa máquina pessoal ou num ambiente com recursos limitados.

A quantização **compacta o modelo mantendo uma boa performance**. O professor compara com "zipar" o modelo, com uma diferença: o zip serve para guardar, e a quantização serve para o modelo **processar** usando menos GPU e menos memória.

Os pesos de um modelo costumam estar em **ponto flutuante** (FP32 ou FP16). A quantização converte esses pesos para uma **representação mais leve**, de menor precisão, como **INT8** ou **INT4**. (Na transcrição, a frase sobre "converter os pesos em ponto flutuante" pode soar ao contrário; o sentido é sair do ponto flutuante para os inteiros de menos bits, como diz o resumo do professor.) O professor não entra na matemática, mas resume: é usar cálculo a favor para deixar o modelo mais leve. Os ganhos:

- **menos uso de memória**;
- **processamento e execução mais rápidos**;
- **perda de precisão minimizada**, mas real.

Com isso dá para rodar o modelo **em CPU ou em GPU de pequeno porte, localmente**, sem depender de uma GPU externa.

Exemplo: um **Mistral 7B** quantizado para INT4 cai de uns **13 GB para cerca de 4 GB** e passa a rodar num notebook comum, em ferramentas como **Ollama** ou **LM Studio**. A qualidade fica aceitável, mas **piora**. A técnica serve para quem tem restrição computacional ou precisa rodar o modelo localmente: é achar o meio-termo entre qualidade e eficiência.

## Mixture of Experts (MoE)

Ao treinar um modelo muito grande, percebe-se que **nem todas as partes precisam ser ativadas para todas as entradas**. O MoE aproveita isso especializando o modelo internamente:

- o modelo é dividido em **múltiplos experts** (submodelos, como se fosse modularizado em micro modelos), cada um responsável por uma parte do conhecimento;
- uma **rede roteadora**, parecida com uma estratégia de roteamento e balanceamento de carga, decide **quais experts ativar para cada entrada**;
- só a parte escolhida faz a inferência, e não o modelo inteiro.

Isso **reduz o custo** de cada inferência e **permite uma escala maior**: o modelo pode ter muitos parâmetros no total sem pagar o custo de ativar todos eles a cada pedido.

Exemplo: o **Switch Transformer**, do Google, tem mais de um trilhão de parâmetros, mas cada entrada aciona só uma pequena fração dos especialistas (o professor ilustra com dois de 64). Ele diz que a resposta é "mais inteligente" e de baixo custo, porque o roteador inferiu por onde ela deveria passar. Aplicações citadas: tradução e geração de texto técnico.

## P-Tuning e Prefix Tuning

O contexto é uma LLM que precisa fazer **tarefas específicas sem alterar seus pesos**. Até aqui, quase tudo mexia no modelo original por fine tuning. Estas duas técnicas **adaptam o comportamento sem modificar o modelo**: inserem, na entrada, condições ou contextos aprendidos, de forma leve e eficiente.

- **P-Tuning:** mostra ao modelo **vetores de entrada**, uma espécie de prompt aprendido, que orientam o modelo sem mexer nos seus pesos. O professor compara a um **sidecar**, que fica ao lado do modelo e indica para onde a coisa deve ir. Outra analogia: num jantar elegante, a pessoa usa os talheres conforme a etiqueta sem mudar o jeito de comer no dia a dia. O modelo não muda seus parâmetros; ele recebe uma "receita pronta" de como agir dada a entrada, como um filtro de entrada.
- **Prefix Tuning:** faz algo parecido, mas com **tokens treinados posicionados no início da sequência**. Esses tokens pré-aprendidos direcionam a saída do modelo. A diferença, para o professor, é que em vez de ser por prompt, é por tokens pré-treinados.

As duas fazem o LLM se especializar usando a lógica da **engenharia de prompt em vez do fine tuning propriamente dito**: nada muda no modelo, e vetores adicionais dão o contexto.

## Como escolher

As quatro técnicas resolvem problemas diferentes:

| Técnica | Gargalo que ataca |
|---|---|
| LoRA | custo do fine tuning |
| Quantização | memória e custo da inferência, hardware limitado |
| MoE | custo de rodar um modelo muito grande |
| P-Tuning / Prefix Tuning | adaptar o comportamento sem alterar pesos |

A escolha depende do gargalo dominante: orçamento de treinamento, limitação de hardware, escala do modelo ou necessidade de uma adaptação leve. Em ambientes reais, as técnicas podem ser **combinadas**.
