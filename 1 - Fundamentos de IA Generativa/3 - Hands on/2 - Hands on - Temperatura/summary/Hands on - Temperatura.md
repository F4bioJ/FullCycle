# Hands on - Temperatura

## Leitura comparativa no Playground

Retomando o cenário de explicar buracos negros, o experimento útil é manter a mesma pergunta e variar apenas a temperatura ou o modelo. Isso isola o efeito de cada mudança e evita confundir diferença de prompt com diferença de geração. No Playground, o campo de mensagem concentra o prompt e o painel lateral reúne modelo, provider e parâmetros de geração. A comparação só faz sentido quando a variação é controlada.

## Temperatura baixa: previsibilidade e organização

Com temperatura em 0,1, a resposta tende a seguir caminhos mais estáveis e a errar menos palavras. No exemplo, o modelo produziu analogias consistentes, como ralo de pia cósmico e cachoeira para horizonte de eventos, mantendo boa coerência entre as seções. O resultado fica mais previsível, mais organizado e mais próximo de uma explicação técnica guiada. Para tarefas explicativas, esse comportamento reduz desvios desnecessários.

## Temperatura intermediária: equilíbrio entre clareza e criatividade

Em 0,5, a saída ainda preserva estrutura, mas ganha mais flexibilidade lexical e analogias um pouco mais variadas. No mesmo prompt, a resposta continuou compreensível, com menos rigidez do que em 0,1 e sem a dispersão observada em valores extremos. Esse ponto intermediário costuma ser útil quando se quer didatismo com alguma riqueza de formulação. A escolha é prática: clareza suficiente sem engessar demais a resposta.

## Temperatura em 1: expansão criativa com mais risco

Quando a temperatura sobe para 1, o modelo começa a introduzir elementos não solicitados explicitamente, como curiosidades, metáforas mais ousadas e associações menos previsíveis. No exemplo, surgiram formulações como “pipoca queimada” e explicações adicionais sobre dilatação do tempo, mesmo sem pedido direto. Isso pode enriquecer a resposta em tarefas abertas, mas também aumenta a chance de exagero, imprecisão ou perda de foco. O ganho de criatividade vem junto com menor controle.

## Temperatura acima de 1: degradação observável da saída

Valores como 2 não apenas deixam a resposta mais criativa; eles podem degradar a geração a ponto de torná-la incoerente. No experimento, apareceram mistura de idiomas, trechos desconexos e raciocínio textual quebrado, sinal de que a amostragem ficou aberta demais. O efeito prático é perda de qualidade, não apenas aumento de variedade. Por isso, em uso normal, faz sentido restringir a faixa operacional a algo entre 0,1 e 1.

## Campo Thinking: o que observar quando ele aparece

Alguns modelos exibem um campo `Thinking`, que revela uma etapa intermediária de planejamento da resposta. Esse campo mostra intenções como simplificar termos técnicos, escolher analogias e organizar tópicos antes da saída final. Ele é útil para inspeção qualitativa do comportamento do modelo, porque permite comparar o plano interno com o texto entregue. Nem todo modelo ou provider expõe esse campo, então sua ausência não significa ausência de raciocínio, apenas ausência de visibilidade.

## Comparação entre modelos e providers

Trocar apenas a temperatura mostra como um mesmo modelo varia; trocar o modelo mostra diferenças de capacidade, estilo e cobertura linguística. No experimento, DeepSeek gerou respostas mais longas e com `Thinking`, Minimax respondeu em inglês, Gemini produziu saídas mais curtas e Mistral não expôs o planejamento interno. Além do modelo, o provider também interfere na execução: alguns endpoints funcionam melhor, outros falham mais ou exigem plano pago. Comparar modelo sem fixar prompt e contexto de execução produz conclusões fracas.

## Modelos gratuitos, pagos e sinais de limitação

No Playground, alguns modelos ou rotas de execução podem exigir upgrade de plano. O comportamento típico é exibir um pop-up de cobrança ou bloquear a execução daquele endpoint específico. Isso não invalida o experimento; basta trocar para outro modelo ou provider disponível. Em ambiente exploratório, a estratégia prática é priorizar opções gratuitas estáveis antes de comparar alternativas pagas.

## Tratamento de erros de execução

Falhas no botão de execução são comuns em Playground, especialmente quando o provider está instável ou o endpoint está sobrecarregado. O procedimento operacional é simples: fechar a tentativa com erro e executar novamente, ou trocar o provider quando houver opção. Esse tipo de erro não deve ser confundido com problema conceitual no prompt ou no parâmetro de temperatura. Separar erro de infraestrutura de comportamento do modelo evita diagnósticos errados.

## Procedimento recomendado de experimento

O experimento mais informativo usa a mesma pergunta, fixa um modelo e varia a temperatura em pontos como 0,1, 0,5, 1 e 2. Depois, mantém a temperatura e troca o modelo para observar profundidade, idioma, estilo, presença de `Thinking` e robustez da resposta. No cenário dos buracos negros, isso permite perceber quando a resposta é precisa, quando fica criativa e quando degrada. Esse método transforma impressão subjetiva em comparação técnica reproduzível.
