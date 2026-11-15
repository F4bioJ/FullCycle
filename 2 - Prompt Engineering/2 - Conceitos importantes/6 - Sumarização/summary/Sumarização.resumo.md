# Sumarização — resumo

## Sumarização como alternativa ao truncamento
O professor apresenta a sumarização como técnica inteligente e amplamente usada — inclusive de forma automática em IDEs modernas — para substituir o truncamento. Em vez de cortar e perder informações do histórico, cria-se um resumo dos conteúdos anteriores, liberando espaço na janela de contexto sem descartar o essencial.

## Preservação de pontos principais e redução de alucinação
Ao pedir que o modelo resuma o histórico até determinado ponto, mantêm-se os pontos-chave da conversa. Isso evita a perda bruta de contexto do truncamento e minimiza o risco de a IA alucinar por falta de referência, embora o resumo, por ser compressão, ainda omita detalhes e não elimine totalmente a chance de alucinação.

## Geração do resumo via prompt
A sumarização depende de um prompt explícito: "pegue todo o histórico até aqui e crie um resumo". A qualidade do resultado varia conforme a formulação do prompt, que deixa de ser apenas instrução textual para se tornar estratégia de compressão de contexto. O objetivo não é um texto bonito, mas um estado compacto útil nas chamadas seguintes.

## Reinjeção do resumo no início da conversa
Após gerado, o resumo pode ser reinjetado no começo das interações subsequentes, substituindo a parte antiga do histórico. O sistema passa a reenviar apenas a versão condensada, liberando tokens para novas mensagens sem perder completamente a memória da conversa — útil em fluxos longos.

## Uso de modelo mais barato para resumir
Não é necessário usar o mesmo modelo da tarefa principal para sumarizar. Pode-se empregar um modelo mais barato, especializado ou apenas suficiente para resumir, enquanto o modelo caro foca na resolução do problema principal. Resumir informação já existente costuma exigir menos capacidade, transformando a sumarização em decisão arquitetural de custo.

## Rotina de monitoramento e disparo automático
Na prática, uma rotina interna monitora o crescimento da conversa (tokens, tamanho do histórico) e dispara a sumarização ao atingir um limite. O resumo gerado pode ser armazenado para reutilização, tornando a compressão parte do ciclo normal de gerenciamento de contexto, não um evento manual.

## Armazenamento e reutilização do resumo
Implementação comum: persistir o resumo no banco de dados. Em interações futuras, verifica-se se já existe sumarização daquela conversa; se sim, ignora-se a parte antiga já condensada e injeta-se o resumo correspondente. Evita recomputar o mesmo contexto repetidamente e simplifica a reconstrução do estado conversacional.

## Prompt de sumarização varia conforme o conteúdo
Não existe prompt único que sirva para tudo. Resumir um livro e resumir histórico de codificação são tarefas semanticamente diferentes, com critérios distintos de relevância, granularidade e fidelidade. O conceito de sumarização permanece, mas a estratégia de prompt deve refletir o tipo de conteúdo comprimido.
