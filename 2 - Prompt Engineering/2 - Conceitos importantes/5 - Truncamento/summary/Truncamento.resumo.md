# Truncamento — resumo

## Introdução ao truncamento em Prompt Engineering
Técnica fundamental para desenvolvimento com IA: remover partes menos relevantes do contexto quando este excede a janela disponível, evitando perda de informação por estouro de limite.

## Definição e mecanismo básico
Truncar é cortar mensagens literalmente. O padrão comum remove as mensagens mais antigas do início da conversa para preservar o histórico recente.

## Estratégias de corte não são fixas
Não se resume a descartar o início. Instruções críticas iniciais (ex.: primeiros mil tokens) podem ser preservadas permanentemente, enquanto o corte ocorre em região variável do histórico.

## Sliding Window como variante
Mencionado como um tipo de truncamento que será detalhado adiante.

## Corte parcial e perda de continuidade
O corte pode ocorrer no meio de uma mensagem. O modelo passa a enxergar apenas o trecho remanescente, perdendo a cadeia causal anterior — o que pode gerar respostas incoerentes ou repetitivas.

## Trade-offs e limitações
Truncamento resolve o problema de espaço, mas não garante preservação de relevância. Em tarefas com dependências no histórico antigo, pode degradar significativamente a resposta.

## Conceito preciso para alinhamento
Truncar não é apenas "jogar fora mensagens antigas" nem "colocar reticências". Existem múltiplas estratégias; compreender o termo evita confusão nas próximas aulas (sumarização, Sliding Window).
