# Role Prompting na prática

## Estrutura de mensagens: `system`, `user` e `assistant`

Em aplicações de chat, o papel vira implementação por meio da estrutura de mensagens. `system` carrega as instruções de mais alto nível, `user` representa a solicitação do usuário e `assistant` corresponde à resposta gerada pelo modelo. Retomando o role prompting já definido anteriormente, a novidade aqui é que ele deixa de ser uma ideia abstrata e passa a ser uma mensagem concreta dentro do array enviado ao modelo. Isso importa porque o comportamento observado depende não só do texto do prompt, mas também de onde essa instrução foi colocada.

## Codificando dois papéis para a mesma pergunta

A comparação mais útil é manter o `user prompt` fixo e variar apenas o `system prompt`. Um `system` pode instruir o modelo a agir como professor universitário de ciência da computação, com explicações conceituais, definições formais e pseudocódigo; outro pode pedir o comportamento de um estudante de high school, com linguagem simples e exemplos. Essa montagem isola a variável “papel” e permite observar com clareza o efeito da role sobre estilo, vocabulário e tipo de explicação. Se várias partes mudarem ao mesmo tempo, a comparação perde valor diagnóstico.

## Montagem dos `ChatPrompt`s no LangChain

No LangChain, a composição do prompt pode ser feita criando duas estruturas de chat: uma com `system + user` para o primeiro papel e outra com `system + user` para o segundo. Cada `ChatPrompt` representa uma versão controlada da mesma interação, pronta para ser formatada em mensagens antes da invocação do modelo. Essa separação é útil porque evita concatenar strings manualmente e torna explícita a hierarquia entre instrução de sistema e solicitação do usuário. Como alternativa, seria possível montar a lista de mensagens diretamente, mas o `ChatPrompt` melhora legibilidade e reutilização.

## Função utilitária para visualizar prompt e resposta

Uma função como `printLlmResult` não altera o comportamento do modelo, mas melhora muito a inspeção do experimento. Ela exibe o prompt enviado e a resposta recebida de forma organizada, inclusive com destaque visual, o que facilita comparar execuções lado a lado. Em prompt engineering, esse tipo de utilitário reduz atrito de análise e ajuda a detectar rapidamente se a diferença observada veio do papel, do modelo ou de algum erro na montagem das mensagens. É uma forma simples de observabilidade local antes de usar ferramentas mais completas.

## Invocação do modelo com mensagens formatadas

Depois de formatar as mensagens, a chamada ao modelo ocorre por invocação direta, passando a estrutura resultante para o chat model configurado. O ponto central não é o nome exato do modelo, mas o fato de que ele recebe uma sequência de mensagens com papéis distintos, e não um bloco único de texto sem estrutura. Isso afeta como a instrução é interpretada e torna o experimento mais próximo do padrão usado em aplicações reais. Trocar o modelo mantendo as mesmas mensagens também permite comparar sensibilidade a role prompting entre modelos diferentes.

## Diferença de comportamento conforme o papel

Quando a pergunta “explique recursão em 50 palavras” é enviada com o papel de professor universitário, a resposta tende a usar termos mais formais, como caso base, casos recursivos e terminação. Quando a mesma pergunta é enviada com o papel de estudante de high school, a resposta migra para linguagem mais simples e exemplos concretos, como a metáfora do espelho refletindo outro espelho. O conteúdo central continua sendo recursão, mas o enquadramento muda: vocabulário, densidade técnica e estratégia pedagógica passam a refletir o papel definido. Esse é o efeito prático que justifica usar role prompting quando estilo e postura importam.

## Papel não é só cargo; inclui comportamento operacional

Escrever apenas “você é um engenheiro de software” costuma produzir um efeito mais fraco do que especificar domínio, estilo e forma de resposta. Um papel mais operacional descreve também especialidade, linguagem, nível técnico, formato de explicação e critérios de comunicação. Isso torna a role menos decorativa e mais executável pelo modelo, porque reduz ambiguidade sobre como responder. A diferença entre “engenheiro de software” e “engenheiro de software que programa em determinada linguagem e explica tecnicamente” é justamente a diferença entre rótulo e instrução utilizável.

## Comparação prática de tokens

O experimento também pode registrar tokens de entrada, tokens de saída e total consumido em cada chamada. Como o custo de tokens já foi discutido anteriormente, o ponto novo aqui é usar essa medição para comparar o impacto de duas instruções de papel diferentes sobre a mesma tarefa. Mesmo quando a pergunta do usuário é idêntica, o `system prompt` altera o volume de contexto enviado e pode influenciar o tamanho e o estilo da resposta. Medir tokens junto com qualidade evita avaliar role prompting apenas por impressão subjetiva.

## Role prompting não precisa estar sempre no `system`

Embora seja comum colocar o papel no `system prompt`, role prompting não está limitado a essa posição. Um usuário também pode introduzir uma instrução de papel no meio da interação e induzir o modelo a mudar de comportamento a partir daquele ponto. A diferença é que a posição da instrução afeta prioridade e estabilidade ao longo da conversa, então escolher entre `system` e `user` não é apenas detalhe sintático. Em implementações reais, essa decisão interfere em previsibilidade e controle.

## Comparação entre modelos e mensagens

O mesmo conjunto de mensagens pode produzir respostas diferentes em modelos distintos, mesmo quando a técnica aplicada é a mesma. Alguns modelos seguem o papel com mais consistência; outros suavizam a diferença entre os dois `system prompts` e entregam respostas mais parecidas. Por isso, a unidade de teste não é só o prompt isolado, mas a combinação entre modelo, estrutura de mensagens e objetivo da tarefa. Role prompting deve ser validado empiricamente na stack que será usada em produção.
