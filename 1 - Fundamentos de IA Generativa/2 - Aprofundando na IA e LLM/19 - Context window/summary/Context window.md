# Context window

## Janela de contexto

Janela de contexto é a quantidade máxima de tokens que o modelo consegue considerar ao mesmo tempo para produzir a próxima saída. Como o processo autoregressivo usa tokens anteriores para prever os próximos, essa janela define o alcance efetivo da informação disponível durante a inferência. Na prática, ela limita o tamanho combinado de instruções, histórico, documentos e resposta. Modelos com janelas maiores conseguem operar sobre entradas mais longas, mas isso não elimina os problemas de qualidade.

## Tamanho da janela e coerência

Uma janela maior tende a melhorar a coerência porque o modelo consegue enxergar mais partes relevantes do contexto de uma só vez. Isso ajuda em tarefas como leitura de documentos extensos, integração de múltiplas fontes e respostas que dependem de dependências espalhadas ao longo do texto. Ainda assim, “caber na janela” não significa que todas as partes receberão a mesma atenção. O ganho é de capacidade de alcance, não de uniformidade de processamento.

## Diluição de relevância

Quando a entrada contém muitos tokens, a relevância das informações pode se diluir e o modelo passa a distribuir sua atenção de forma menos precisa. Retomando o mecanismo de atenção já discutido, o problema aqui não é a existência da atenção, mas sua limitação prática diante de contexto excessivo. O efeito mais comum é uma resposta mais genérica, com perda de detalhes ou descumprimento parcial de instruções específicas. Quanto mais informação concorrendo por atenção, maior a chance de trechos importantes receberem pouco peso.

## Viés para o fim do contexto

Em modelos autoregressivos, existe uma tendência de os tokens mais recentes influenciarem mais a geração. Isso faz com que instruções colocadas no final do prompt frequentemente tenham mais peso do que informações equivalentes no início. A consequência prática é simples: em prompts muito longos, requisitos críticos devem aparecer perto do final ou ser reforçados explicitamente. Caso contrário, o modelo pode “esquecer” partes importantes do começo mesmo sem ultrapassar a janela.

## Custo computacional de contexto longo

Aumentar a janela de contexto encarece a inferência porque o mecanismo de atenção precisa processar mais relações entre tokens. O custo e o tempo de processamento crescem de forma quadrática em arquiteturas tradicionais de atenção, o que torna prompts longos significativamente mais caros e lentos. Existe, portanto, um trade-off direto entre alcance contextual e eficiência operacional. Janela grande melhora cobertura, mas cobra em latência e custo.

## Exemplo: PDF longo com instrução específica

Considere um PDF de 200 páginas enviado com a instrução: resumir a cláusula de confidencialidade da página 13. Mesmo que todo o documento caiba na janela, o modelo pode responder de forma vaga ou misturar informações de outras partes porque o foco se dispersa ao longo do documento inteiro. O problema não é apenas capacidade de leitura, mas priorização interna daquilo que realmente importa. Em outras palavras, o modelo viu tudo, mas não necessariamente concentrou atenção no trecho certo.

## Chunking e recuperação de trechos relevantes

Chunking divide o documento em partes lógicas, como capítulos, seções ou blocos menores, para reduzir a competição entre informações dentro do prompt. Isso melhora a precisão porque cada chamada trabalha com menos tokens e com contexto mais concentrado. Outra estratégia complementar é usar um sistema externo para recuperar apenas os trechos relevantes antes de enviar ao modelo. Em vez de pedir que a LLM encontre e resolva tudo sozinha, o pipeline separa busca e geração.

## Resumos hierárquicos

Resumos hierárquicos reduzem documentos longos em etapas sucessivas. Primeiro, resume-se cada parte; depois, usa-se esses resumos intermediários para produzir uma síntese mais específica ou executar outra tarefa. Esse método preserva cobertura sem exigir que todo o conteúdo bruto permaneça simultaneamente no contexto. Ele é útil quando o documento é grande demais ou quando a tarefa final depende de visão global, mas não de cada detalhe original.

## Prompts com instrução explícita de foco

Instruções de foco podem ser escritas de forma mais explícita para orientar a atenção do modelo dentro de um contexto longo. Em vez de apenas pedir “resuma a página 13”, vale restringir o escopo com comandos como ignorar a segunda metade do documento ou desconsiderar os últimos mil tokens. Isso não substitui um bom pré-processamento, mas ajuda a reduzir ambiguidade e a concentrar a geração no trecho desejado. É uma forma de cortar contexto via prompt quando o corte externo não foi feito.
