# ITER-RETGEN na prática - parte 1

Agora que entendemos a ideia básica, pedi para ele explicar sobre LangChain e LangGraph, com uma resposta simples do GPT. O que farei agora? Vou abrir outro arquivo e tentar explicar a ideia principal dele, executando-o. Ele ficou um pouco grande, mas consegue enriquecer as coisas em um fluxo bem interessante. Achei que ficou bacana como exemplo.

Preciso da sua atenção agora. Vamos nessa. Criei o chat, e você perceberá que tenho alguns prompts aqui. Se voltarmos ao diagrama, esses quatro elementos vão se comportar como quatro tipos de prompt.

Primeiro prompt (draft):

Tenho uma variável de input "question". Este prompt inicial gera um rascunho. Instruo que ele é um expert assistente com conhecimento inicial limitado, e que deve responder à pergunta, mas marcando pontos e detalhes específicos que estejam faltando. Uso [MISSING] como marcador para coisas como: versões específicas, datas de lançamento, especificações técnicas, parâmetros, performance, comparação de dados, implementação, casos de uso reais, limitações, roadmap, etc. Peço para ser detalhista, mas sem gerar mais de cinco missing markers para não ficarmos horas iterando. A resposta gerada aqui é um draft com lacunas.

Segundo prompt (geração de perguntas): Este prompt recebe o draft com os gaps e, para cada item faltante, formata como uma pergunta. Instruo para trazer os dados mais reais possíveis, com exemplos como "for missing version numbers, LangChain at 0.1.0". O objetivo é gerar queries para obter as informações faltantes.

Terceiro prompt (fill): Recebe a questão original, o draft atual (que pode ser de primeira ou segunda interação) e as informações coletadas. Instruo para substituir entre um e dois missing markers com informações concretas, usando as informações fornecidas. É importante não adicionar novos missing markers e substituir o texto [MISSING] por conteúdo real. Dou exemplos do que fazer e do que não fazer. A ideia é manter o progresso conforme preenchemos as lacunas. Ao final, deve escrever toda a resposta com os missing markers substituídos.

Quarto prompt (expansão): Adicionei este porque, muitas vezes, o modelo é muito inteligente. Ao fazer uma pergunta, todas as lacunas já eram respondidas de uma vez, e quase não havia interação. Quando isso acontece, peço para ele pegar o draft e buscar informações ainda mais específicas, gerando mais partes faltantes para enriquecer o documento com mais uma rodada.

Para o vídeo não ficar muito longo, vou parar aqui e continuo em seguida.
