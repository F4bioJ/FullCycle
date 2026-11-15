# Context Window para Prompt Engineering — resumo

## Definição de janela de contexto
Janela de contexto é a quantidade máxima de mensagens, documentos ou código que o modelo consegue utilizar de uma vez para gerar a próxima resposta. É o espaço de processamento onde entram a mensagem do sistema, a do usuário e a resposta do LLM, tudo convertido em tokens (palavras ou pedaços de palavras).

## Limite de tokens e perda de informação
Se o conteúdo ultrapassa esse limite, a informação começa a ser perdida. O modelo deixa de considerar partes da conversa ou dos dados enviados, o que afeta diretamente a qualidade da resposta.

## Importância para arquitetura e estratégias de prompt
Entender esse limite muda a forma de arquitetar aplicações e escolher estratégias de prompt para processar múltiplas mensagens. É uma "flag" constante: como encaixar tudo o que a aplicação precisa sem estourar a janela.

## Variação entre modelos e evolução histórica
Cada modelo tem seu tamanho de janela (*context window*). Exemplo: GPT-3 tinha 2.048 tokens; modelos atuais (GPT-4, Claude, Gemini) chegam a milhões de tokens. A capacidade vem aumentando ao longo do tempo.

## Escolha do modelo pelo caso de uso
Janela maior não significa modelo melhor. A escolha depende do caso de uso: modelos menores e mais baratos, até rodáveis localmente, podem ser ideais para contextos controlados. O critério é custo-benefício, não apenas capacidade máxima.

## Base para técnicas de Prompt Engineering
Gerenciar esse espaço escasso é a base da engenharia de prompt: organizar prioridades, ordem e volume do conteúdo para manter conversa e documentos dentro do limite disponível.
