# Sumarização

## Sumarização como alternativa ao truncamento

Sumarização é a compressão semântica de interações anteriores para liberar espaço na janela de contexto sem simplesmente descartar conteúdo. Retomando o cenário em que o histórico crescia até exigir corte, a mudança aqui é substituir remoção literal por um resumo que preserva os pontos principais. Isso reduz a perda bruta de contexto em comparação com truncamento, embora não preserve todos os detalhes. O ganho prático é manter continuidade com menos tokens.

## O que o resumo preserva — e o que ele perde

Um resumo mantém a estrutura geral do que já foi dito, o que ajuda o modelo a continuar a conversa com mais coerência do que teria após um corte seco. Ainda assim, resumir implica compressão, e compressão remove nuances, exceções e detalhes finos. Por isso, a sumarização diminui o risco de respostas desconectadas, mas não elimina risco de alucinação. Ela troca detalhe por capacidade de continuidade operacional.

## Geração do resumo por prompt

A sumarização depende de um prompt explícito que instrui o modelo a condensar o histórico anterior em uma forma reutilizável. Um comando como “pegue todo o histórico até este ponto e crie um resumo” já expressa a ideia central, mas a qualidade do resultado depende de como o pedido é formulado. Prompt, aqui, deixa de ser apenas instrução textual e vira estratégia de compressão de contexto. O objetivo não é produzir um texto bonito, e sim um estado compacto que continue útil nas próximas chamadas.

## Reinjeção do resumo no início da conversa

Depois de gerado, o resumo pode ser reinjetado no início das próximas interações para substituir a parte antiga do histórico. Essa reinjeção transforma o resumo em contexto ativo: o sistema deixa de reenviar todas as mensagens anteriores e passa a reenviar uma versão condensada delas. O efeito operacional é liberar espaço para novas mensagens sem perder completamente a memória da conversa. Essa técnica é especialmente útil em fluxos longos, nos quais o histórico cresce continuamente.

## Uso de outro modelo mais barato para resumir

A tarefa de resumir nem sempre exige o mesmo modelo usado para responder à tarefa principal. Se o modelo principal é caro e foi escolhido por capacidades mais sofisticadas, pode ser economicamente melhor enviar o histórico para um segundo modelo mais barato especializado ou suficientemente bom em sumarização. A lógica é simples: resumir informação já existente costuma exigir menos capacidade do que resolver o problema principal. Isso transforma a sumarização em uma decisão arquitetural de custo, não apenas em uma decisão de prompt.

## Rotina de monitoramento para disparar a sumarização

A sumarização normalmente é acionada por uma rotina interna que monitora o crescimento da conversa e dispara a compressão quando um limite é atingido. Esse limite pode ser definido por quantidade de tokens, tamanho do histórico ou outra regra operacional da aplicação. Quando o gatilho ocorre, o sistema gera o resumo e pode armazená-lo para reutilização posterior. A técnica deixa de ser um evento manual e passa a fazer parte do ciclo normal de gerenciamento de contexto.

## Armazenamento e reutilização do resumo

Uma implementação comum é persistir o resumo no banco de dados e, em interações futuras, verificar se já existe uma versão sumarizada daquela conversa. Se existir, o sistema ignora a parte antiga já condensada e injeta o resumo correspondente. Isso evita recomputar o mesmo contexto repetidamente e simplifica a reconstrução do estado conversacional. Retomando a arquitetura já conhecida, a novidade aqui é a camada de compressão inteligente entre histórico bruto e prompt final.

## O prompt de sumarização varia conforme o conteúdo

Não existe um único prompt de sumarização que funcione igualmente bem para qualquer domínio. Resumir um livro e resumir o histórico de codificação de uma aplicação são tarefas semanticamente diferentes, com critérios distintos de relevância, granularidade e fidelidade. Por isso, o prompt precisa refletir o tipo de conteúdo que está sendo comprimido. O conceito de sumarização permanece o mesmo, mas a estratégia de prompt muda conforme o objetivo do resumo.

## Prompt como estratégia de engenharia

Em Prompt Engineering, sumarizar não significa apenas pedir “resuma isso”, mas decidir o que precisa sobreviver à compressão para a próxima etapa do sistema. Essa decisão afeta custo, continuidade e qualidade da resposta, porque define quais sinais permanecem disponíveis após a redução de tokens. O prompt de sumarização, portanto, funciona como uma política de retenção semântica. Ele determina quais partes do passado continuam influenciando o comportamento futuro do modelo.
