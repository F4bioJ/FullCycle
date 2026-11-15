# Fine Tuning supervisionado

## Classificação da tarefa

Fine tuning supervisionado é um processo mixed: combina conceito de treinamento com decisões práticas sobre dataset, custo computacional e escolha de técnica de adaptação.

## Especialização a partir de um modelo pré-treinado

Fine tuning supervisionado pega um modelo já pré-treinado e o adapta para uma tarefa específica usando exemplos rotulados. Em vez de expor o modelo a texto genérico, o treinamento passa a usar dados alinhados a um objetivo concreto, como responder dúvidas médicas, traduzir texto, escrever código ou resumir notícias. O efeito principal é sair de um comportamento generalista para um comportamento especializado em um domínio ou fluxo de trabalho. A analogia útil é a de alguém que já sabe português e depois aprende a linguagem operacional de um hospital para atuar melhor naquele contexto.

## Dataset supervisionado em pares de entrada e saída

O núcleo desse treinamento é um dataset com pares explícitos de entrada e saída. Esses pares podem ser pergunta e resposta, código incompleto e código completo, ou qualquer estrutura em que exista um resultado esperado conhecido. O rótulo informa ao treinamento qual resposta está correta e qual está errada, guiando o ajuste do modelo. Sem esse pareamento, o processo deixa de ser supervisionado e perde o sinal direto de correção.

## Ajuste de pesos com backpropagation e loss

Retomando o ajuste de pesos já visto no pré-treinamento e em outros regimes de fine tuning, o mecanismo continua sendo backpropagation sobre a função de perda. Aqui, a diferença prática é que a perda compara a saída do modelo com uma resposta-alvo rotulada para a tarefa específica. A cross entropy loss, mencionada anteriormente, continua útil para medir a distância entre a previsão e a resposta correta. Esse sinal de erro atualiza pesos e vieses internos para aumentar a probabilidade de respostas adequadas naquele domínio.

## Quando o fine tuning supervisionado faz sentido

Essa abordagem é indicada quando a aplicação exige desempenho alto em uma tarefa estreita, e não conhecimento amplo sobre qualquer assunto. Um chatbot corporativo da Magalu, por exemplo, precisa responder bem sobre catálogo, atendimento e tom de voz da empresa, mas não precisa dominar física quântica. O mesmo raciocínio vale para domínios com linguagem técnica, como medicina, jurídico e tecnologia. Também faz sentido quando os prompts sozinhos não conseguem carregar todo o contexto necessário de forma confiável.

## Tom de voz, restrições e comportamento corporativo

Fine tuning supervisionado também serve para moldar estilo de resposta e regras de comunicação. Se a empresa exige um tom específico, proíbe respostas grosseiras ou não quer menções a concorrentes, essas preferências podem aparecer no dataset como exemplos corretos e incorretos. O caso do chatbot do Nubank ilustra isso: responder sugerindo um empréstimo no Bradesco é um comportamento desalinhado, então esse tipo de saída deve ser marcado como inadequado no treinamento. Guardrails continuam sendo outra camada possível, mas aqui o alinhamento já entra no próprio ajuste do modelo.

## Dados sensíveis e conhecimento interno

Quando o diferencial está em dados privados, o fine tuning supervisionado ganha valor porque o modelo passa a aprender padrões que não existem na internet pública. Conversas históricas de atendentes, documentos internos e linguagem própria da empresa podem formar um conjunto rico de exemplos sobre o que funciona, o que gera atrito e como responder melhor. Isso permite construir uma IA mais preparada para atendimento real do que simplesmente usar um modelo genérico sem adaptação. O ganho vem menos de “saber mais fatos” e mais de internalizar comportamento, vocabulário e critérios de resposta do domínio.

## Limitações: overfitting, viés e custo

Overfitting acontece quando o dataset é pequeno, pouco diverso ou repetitivo demais, fazendo o modelo decorar padrões em vez de generalizar. O resultado tende a ser uma saída mecânica, com repetição excessiva e maior risco de respostas ruins fora dos exemplos vistos. Outro risco está nos rótulos errados: se o dado foi classificado incorretamente, o treinamento reforça um comportamento inadequado como se fosse correto. Além disso, modelos grandes com muitos dados e tokens exigem bastante computação, o que torna o processo caro.

## Atualização contínua do domínio

Domínios que mudam com frequência, como medicina, exigem retreinamentos recorrentes para incorporar informação nova. Isso cria um custo operacional contínuo, porque a especialização envelhece à medida que o conhecimento do domínio evolui. Nesses cenários, a estratégia de atualização precisa ser pensada junto com a estratégia de treinamento inicial. Sem isso, o modelo fica caro para manter ou rapidamente desatualizado.

## Fine tuning completo e parcial

Fine tuning completo atualiza todos os parâmetros do modelo e costuma ser reservado para casos em que o novo domínio está muito distante do pré-treinamento original. O ganho potencial é alto, mas o custo computacional e financeiro também cresce bastante. Fine tuning parcial atualiza apenas parte da arquitetura, preservando mais do conhecimento anterior e reduzindo custo. O exemplo de um modelo treinado em inglês que precisa aprender contratos jurídicos em português mostra bem esse cenário: não é necessário reconstruir tudo para adicionar essa capacidade.

## LoRA e PEFT

LoRA, sigla para Low-Rank Adaptation, insere matrizes adicionais em camadas do modelo para adaptar seu comportamento sem reescrever todos os parâmetros. Isso reduz o custo do treinamento e torna viável fazer ajustes incrementais, como atualizar um modelo médico com apenas os últimos seis meses de informação. PEFT, ou Parameter-Efficient Fine-Tuning, reúne técnicas com essa mesma filosofia de adaptar menos parâmetros para obter bom resultado. Em ecossistemas como Hugging Face, essas abordagens tornam a especialização mais acessível em infraestrutura real.

## Prefix Tuning e Prompt Tuning

Prefix Tuning e Prompt Tuning seguem outro caminho: em vez de alterar amplamente os pesos do modelo, treinam um prefixo ou prompt interno que passa a orientar o comportamento da inferência. O efeito é parecido com manter uma instrução persistente acoplada ao modelo, funcionando como guia estrutural do que ele deve fazer. Isso pode ser vantajoso em modelos muito grandes, quando atualizar parâmetros é caro demais. A troca é que o controle vem mais da orientação aprendida do que de uma reconfiguração profunda da rede.
