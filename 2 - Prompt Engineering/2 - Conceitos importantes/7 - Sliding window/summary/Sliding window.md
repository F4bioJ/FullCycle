# Sliding window

## Sliding Window como janela móvel

Sliding window é o padrão de tratar o histórico como uma janela móvel que avança ao longo do tempo. Retomando a restrição de janela de contexto já conhecida, a aplicação mantém dentro dela apenas a parte mais recente da conversa e deixa o conteúdo antigo para fora. A ideia central não nasceu em LLMs: ela já aparece em vários problemas de computação, como algoritmos clássicos e rate limiting. O valor desse padrão está em organizar crescimento contínuo sem tentar manter todo o passado ativo ao mesmo tempo.

## Comportamento temporal do histórico

Quando novas mensagens entram, a janela se desloca e empurra mensagens antigas para fora da área ativa. Isso cria um comportamento temporal explícito: o sistema privilegia o presente da interação, não o histórico completo. Retomando o cenário da conversa longa, o que o modelo consegue considerar é apenas o que ainda está dentro dessa faixa móvel. Sliding window, portanto, não é só um corte; é uma política contínua de atualização do contexto recente.

## Descartar versus arquivar

Quando uma mensagem sai da janela, a aplicação precisa decidir se ela será descartada ou arquivada. Descartar é aceitável quando o histórico antigo perdeu valor operacional para a próxima resposta. Arquivar faz sentido quando aquele conteúdo ainda pode ser útil depois, seja para sumarização futura, seja para auditoria, retomada de sessão ou revisão de decisões anteriores. Essa escolha define se o sistema apenas limita contexto ou também preserva memória externa.

## Arquivamento fora da janela ativa

Arquivar histórico fora da janela permite manter o prompt enxuto sem perder definitivamente o passado da interação. Esse armazenamento pode ser de curto prazo, quando o objetivo é resumir depois, ou de longo prazo, quando a conversa é salva integralmente para possível reutilização futura. O ponto importante não é o provedor de storage, mas a separação entre contexto ativo e histórico persistido. A janela continua pequena, enquanto o histórico completo fica disponível fora dela a baixo custo.

## Relação com truncamento e sumarização

Sliding window convive com truncamento e sumarização, mas não é a mesma coisa. O truncamento define o corte do que sai; a sumarização pode reaproveitar parte do que saiu em forma comprimida; sliding window descreve o movimento contínuo da faixa de contexto ao longo da conversa. Em uma aplicação real, os três mecanismos podem aparecer juntos: a janela anda, o excedente sai, e parte dele pode ser arquivada ou resumida. Essa combinação transforma o gerenciamento de histórico em uma decisão arquitetural, não apenas em um ajuste de prompt.

## Intuição operacional e analogia algorítmica

A forma mais simples de visualizar o padrão é imaginar uma moldura fixa deslizando sobre uma sequência crescente de mensagens. Só o que está visível dentro da moldura entra na chamada atual do modelo; o restante fica fora do processamento imediato. A referência a problemas de LeetCode ajuda porque a lógica é a mesma de uma janela que anda sobre dados, preservando apenas um intervalo relevante por vez. Em sistemas conversacionais, esse intervalo relevante costuma ser o histórico mais recente.
