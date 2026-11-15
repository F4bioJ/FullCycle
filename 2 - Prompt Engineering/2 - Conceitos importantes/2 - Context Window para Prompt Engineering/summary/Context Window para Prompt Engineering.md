# Context Window para Prompt Engineering

## Janela de contexto como limite operacional

Janela de contexto é a quantidade máxima de conversa, documento ou código que o modelo consegue considerar de uma vez para gerar a próxima resposta. Retomando a restrição já conhecida de tokens, o ponto novo aqui é tratá-la como limite concreto de projeto: tudo o que entra na chamada compete pelo mesmo espaço. Mensagem de sistema, mensagem do usuário, respostas anteriores e trechos adicionais de dados ocupam a mesma janela. Quando esse espaço é excedido, parte da informação deixa de ser considerada, e a aplicação passa a operar com perda de contexto.

## O que efetivamente entra na janela

A janela não contém apenas o prompt principal; ela inclui todo o conteúdo enviado naquela interação. Em uma conversa, isso significa instruções, histórico e a nova pergunta; em um fluxo com documentos, significa também os trechos recuperados; em código, entram arquivos, funções ou partes relevantes anexadas à solicitação. Esse detalhe muda o desenho do sistema porque o limite real não é o tamanho de uma única mensagem, mas a soma de tudo o que precisa caber junto. Quanto mais componentes a aplicação injeta no prompt, menos espaço sobra para o restante.

## Perda de informação ao ultrapassar o limite

Ultrapassar a janela de contexto não é apenas um problema de tamanho; é um problema de decisão sobre o que o modelo consegue usar. Se a conversa cresce demais, mensagens antigas podem ficar de fora; se um documento é grande demais, apenas uma parte dele cabe; se o código enviado é extenso, arquivos ou funções relevantes podem não entrar. O efeito prático é resposta menos consistente, porque o modelo passa a responder sem acesso a partes importantes do estado da interação. Por isso, o limite de contexto afeta diretamente a confiabilidade do comportamento do sistema.

## Variação histórica entre modelos

A capacidade de contexto mudou bastante ao longo do tempo, e isso altera o tipo de problema que cada modelo consegue atender. Um exemplo citado é o GPT-3 com 2.048 tokens, contraste forte com modelos mais recentes que trabalham com janelas muito maiores, chegando a ordens de grandeza muito superiores. Essa evolução amplia o volume processável por chamada, mas não elimina a necessidade de engenharia de contexto. Janela maior reduz pressão em alguns cenários, porém não torna irrelevante a seleção do que deve entrar.

## Escolha do modelo para o caso de uso

Uma janela de contexto maior não torna um modelo automaticamente melhor. A escolha correta depende do caso de uso, porque um modelo menor e mais barato pode ser suficiente quando a aplicação trabalha com interações curtas, contexto controlado ou execução local. Em sistemas reais, a decisão combina capacidade de contexto com restrições operacionais já conhecidas, como custo e latência. O critério útil não é “qual modelo é o mais poderoso”, mas “qual modelo atende o problema com o menor desperdício”.

## Impacto na arquitetura da aplicação

A janela de contexto influencia a arquitetura porque obriga o sistema a decidir continuamente o que enviar ao modelo e o que deixar de fora. Retomando o cenário da aplicação com LLM, a camada nova aqui é o encaixe do contexto: quais mensagens da conversa, quais partes do documento e quais trechos de código realmente cabem na chamada atual. Essa decisão não é cosmética; ela define se o modelo terá insumos suficientes para responder corretamente. Projetar a aplicação sem considerar esse limite costuma gerar fluxos frágeis, especialmente quando o volume de informação cresce.

## Estratégias de prompt orientadas pela janela

Prompt Engineering, nesse ponto, deixa de ser apenas escrita de instruções e passa a ser gerenciamento de espaço escasso. A estratégia precisa organizar o contexto para manter conversa e documentos dentro da janela disponível, preservando o que é mais relevante para a próxima resposta. Isso exige pensar em ordem, prioridade e volume do conteúdo enviado, em vez de simplesmente acumular informação no prompt. As técnicas específicas de controle desse contexto aparecem na sequência, mas a base é esta: cada token usado precisa justificar sua presença.
