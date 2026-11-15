# Sliding window — resumo

## Definição de Sliding Window
Sliding window (janela deslizante) é tratar o histórico de mensagens como uma janela móvel que desliza sobre o conteúdo conforme ele cresce. A janela mantém sempre a versão mais recente do texto dentro do limite.

## Origem do conceito
Não foi criado para IA ou Prompt Engineering. É um padrão antigo da computação, usado em rate limiters, algoritmos clássicos e problemas de LeetCode.

## Comportamento prático
Conforme a interação avança, o conteúdo antigo sai da janela (fica para trás) e o novo entra. O que está dentro da janela é o que vai para o contexto da IA; o que está fora é descartado ou arquivado.

## Descartar versus arquivar
Muita gente esquece de decidir: se o conteúdo antigo sai da janela e não é salvo, perde-se o histórico completamente. Descartar serve quando o passado não tem mais valor operacional. Arquivar serve para sumarizar depois, revisitar, auditar ou retomar sessões.

## Tipos de arquivamento
- **Curto prazo**: guarda para sumarizar em seguida.  
- **Longo prazo**: salva a conversa integral em armazenamento barato (ex.: S3, Google Cloud Storage) para reuso futuro.

## Relação com a janela de contexto da IA
A janela de contexto do modelo recebe apenas o que está dentro da sliding window. O resto fica fora do processamento imediato, mas pode persistir arquivado.
