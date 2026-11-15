# Truncamento

## Truncamento como corte literal de mensagens

Truncamento é o corte direto de partes do contexto para que a entrada caiba no limite disponível. Ele não reorganiza nem reinterpreta o conteúdo: apenas remove trechos. Essa técnica surge quando o histórico, as instruções e os dados enviados juntos excedem o espaço útil da chamada. Como a janela é finita, truncar é uma forma operacional simples de decidir o que fica e o que sai.

## Por que truncamento existe

Retomando o cenário da aplicação, o sistema precisa continuar enviando conversa e instruções sem ultrapassar o limite de tokens já discutido. Quando o contexto cresce demais, alguma parte precisa ser descartada, e truncamento é a resposta mais direta para isso. A vantagem é simplicidade de implementação e previsibilidade de custo. O problema é que simplicidade não preserva significado automaticamente.

## Onde cortar não é uma decisão fixa

O caso mais comum é remover mensagens mais antigas para preservar o que acabou de acontecer na conversa. Ainda assim, truncamento não significa obrigatoriamente apagar o início do histórico. Se o prompt começa com instruções críticas, políticas de comportamento ou restrições que não podem sumir, esses trechos podem ser preservados de forma fixa enquanto o corte acontece em outra região. Isso transforma truncamento em estratégia de seleção, não apenas em descarte cronológico.

## Preservação fixa de trechos iniciais críticos

Alguns sistemas reservam uma faixa inicial do prompt que nunca é removida, como os primeiros mil tokens de instruções essenciais. O restante do espaço é disputado pelo histórico variável, que pode ser encurtado conforme a conversa cresce. Essa abordagem protege regras fundamentais do sistema, mesmo quando o histórico precisa ser comprimido à força. O efeito prático é manter estabilidade comportamental, ainda que parte da conversa seja sacrificada.

## Corte parcial e perda de continuidade

Truncamento pode remover mensagens inteiras ou cortar no meio de um bloco de texto, dependendo da implementação. Quando isso acontece, o modelo passa a enxergar apenas o trecho remanescente e perde a cadeia causal anterior. Se uma decisão atual dependia de contexto que ficou para trás, a resposta pode parecer incoerente, repetitiva ou sem noção do estado da interação. A perda de contexto é o principal trade-off dessa técnica.

## Truncamento não é solução universal

Cortar contexto resolve o problema de caber na janela, mas não resolve automaticamente o problema de manter relevância. Em tarefas nas quais o histórico antigo contém dependências importantes, truncar pode degradar a resposta de forma significativa. Por isso, a escolha do ponto de corte precisa acompanhar o objetivo da aplicação e o tipo de informação que não pode ser perdido. Nas próximas estratégias, como sumarização e Sliding Window, a comparação central será exatamente entre simplicidade de corte e preservação de contexto.
