# CoT na prática e seus conflitos

## Comparação controlada entre prompt direto e prompt com CoT

Retomando o padrão de comparação entre prompts, a forma correta de testar Chain of Thought é manter a tarefa fixa e mudar apenas a instrução de raciocínio. No caso da classificação do log `Disk Usage at 85%`, um prompt pede apenas `Info`, `Warning` ou `Error`, enquanto o outro exige justificativa passo a passo e resposta final após `answer`. Esse desenho isola o efeito operacional do CoT: ele não muda o problema, muda a forma como o modelo processa e expõe a decisão. Sem esse controle, fica difícil atribuir diferença de acerto, custo ou auditabilidade à técnica em si.

## CoT explícito aumenta auditabilidade, mas também custo

Quando o modelo recebe a instrução para pensar passo a passo, ele passa a externalizar a justificativa da classificação. Isso permite inspecionar por que `Disk Usage at 85%` foi tratado como `info` ou `warning`, o que é útil para depuração e validação de critério. O ganho vem acompanhado de mais tokens e, portanto, maior custo e latência; no experimento, a versão com raciocínio explícito consumiu bem mais que a resposta direta. A utilidade do CoT, portanto, não está em “sempre melhorar”, mas em tornar o processo observável quando isso compensa operacionalmente.

## Contagem de letras como teste de raciocínio explícito

A pergunta sobre quantos `R's` existem em `strawberry` funciona como um teste simples, mas eficaz, para observar mudança de comportamento. Sem CoT, um modelo retornou `2`, errando uma contagem elementar; com a instrução para quebrar a palavra em bullet points e apontar cada letra, o mesmo tipo de tarefa passou a produzir `3`. O ponto importante não é a palavra em si, mas o mecanismo: decompor a entrada reduz o risco de resposta impulsiva e força uma verificação intermediária. Esse tipo de experimento mostra empiricamente quando o raciocínio explícito melhora acurácia.

## Resposta correta com CoT não implica estabilidade total

Pedir passo a passo pode corrigir um erro em uma execução e ainda assim não garantir comportamento idêntico em todas as rodadas. O modelo pode variar a forma da explicação, o detalhamento e até a linha de raciocínio, mesmo quando mantém a resposta final correta. Isso significa que CoT melhora observabilidade e pode melhorar acurácia, mas não transforma o sistema em um mecanismo determinístico. Em aplicações críticas, a técnica precisa ser validada por repetição e comparação entre execuções.

## Conflito entre CoT explícito e modelos que já raciocinam por padrão

O comportamento muda bastante quando o modelo já possui reasoning embutido, como no caso do GPT-5 Nano. Mesmo sem pedir passo a passo, ele acertou a contagem de `strawberry`, mas consumiu muitos tokens porque já executa raciocínio interno por padrão. Quando o prompt ainda adiciona um CoT explícito, o custo pode escalar de forma desproporcional, chegando a centenas ou milhares de tokens para uma resposta trivial. O conflito prático é este: instruir explicitamente um modelo que já raciocina pode redundar em sobrecusto sem ganho proporcional de qualidade.

## Nem todo modelo reasoning expõe o passo a passo pedido

Um ponto importante do experimento é que o modelo com reasoning não necessariamente devolve a cadeia de raciocínio visível, mesmo quando o prompt pede isso. Na classificação do log, ele respondeu apenas `warning`, sem mostrar as etapas intermediárias solicitadas. Isso indica que “raciocinar” e “exibir o raciocínio” não são a mesma coisa: alguns modelos usam processamento interno mais elaborado, mas não materializam esse processo na saída. Para quem depende de auditabilidade explícita, essa diferença afeta diretamente a escolha do modelo.

## Mudança de modelo altera não só custo, mas também critério de decisão

No mesmo log de disco a 85%, um modelo classificou como `info` e outro como `warning`. A divergência não é ruído superficial; ela revela que modelos diferentes aplicam heurísticas e contextos operacionais distintos ao mesmo input. Um modelo pode tratar 85% como estado ainda informativo, enquanto outro interpreta esse valor como sinal preventivo de risco de capacidade. Em Prompt Engineering, trocar de modelo sem revalidar o prompt significa aceitar mudança potencial no próprio critério de classificação.

## GPT-4o como meio-termo entre custo, velocidade e qualidade observável

Ao trocar para o GPT-4o, o experimento mostrou um comportamento intermediário: menos custo que o modelo reasoning e mais capacidade de detalhamento que o modelo mais antigo. Ele acertou `strawberry` e produziu uma justificativa mais elaborada para classificar o log como `warning`, contextualizando a necessidade de gerenciar capacidade de storage antes de um estado crítico. Esse resultado ilustra uma decisão comum de engenharia: nem o modelo mais barato nem o mais sofisticado é automaticamente a melhor escolha. O ponto ótimo depende da combinação entre acurácia suficiente, explicabilidade necessária e orçamento de tokens.

## CoT é uma alavanca de qualidade que afeta arquitetura de uso

Lembra da referência anterior a custo, latência e auditabilidade: aqui esses fatores aparecem de forma mensurável no comportamento do sistema. Adicionar CoT pode melhorar a resposta, revelar o caminho lógico e facilitar troubleshooting, mas também aumenta tempo de resposta e consumo de tokens. Em modelos reasoning, o mesmo comando pode ser redundante ou até contraproducente em tarefas simples. A decisão correta é contextual: usar CoT quando o processo importa, e evitar quando a resposta direta já atende com custo menor.
