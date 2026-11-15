# Aula 03

## Workflow com IA

Workflow é o modo operacional de desenvolver com apoio de IA: sequência de passos, nível de automação, ordem entre testes, arquivos, comandos e revisão. Ele importa porque a mesma ferramenta produz resultados muito diferentes quando entra em rotinas diferentes de trabalho. Cada desenvolvedor terá um workflow próprio, mas isso não elimina a existência de fundações comuns; o ganho real vem de adaptar a IA ao seu processo, e não de copiar exatamente o fluxo de outra pessoa.

## Quick wins em desenvolvimento assistido por IA

Quick win é uma mudança pequena o suficiente para ser aplicada imediatamente e relevante o suficiente para melhorar o trabalho já no dia seguinte. Em vez de depender de agentes complexos, pipelines completos ou refinamento avançado de prompts, o foco inicial fica em práticas que aumentam a efetividade operacional com baixo atrito. O critério não é sofisticação técnica, mas redução rápida de fricção no desenvolvimento cotidiano.

## Ferramentas que nasceram como IDEs com IA

Cursor e Windsurf representam uma categoria de IDEs estruturadas desde o início para um mundo centrado em IA. Elas evoluíram do chat embutido e do auto-completion para comportamentos mais agênticos, em que a ferramenta passa a editar, navegar e executar ações com mais autonomia. Essa origem faz diferença porque a experiência foi desenhada para integrar conversa, contexto do projeto e ação direta sobre o código no mesmo ambiente.

## Ferramentas tradicionais que incorporaram agentes

VS Code e JetBrains vieram de um ecossistema anterior à centralidade da IA e, por isso, tendem a incorporar agentes como extensões ou camadas adicionais. GitHub Copilot exemplifica essa transição: começou como assistência pontual e avançou para uma presença mais ampla no fluxo de desenvolvimento, inclusive fora da IDE. O efeito prático é que a escolha deixa de ser apenas entre “qual modelo usar” e passa a incluir ecossistema, integração e grau de controle sobre o ambiente.

## Evolução de chat para agentes

O uso inicial de IA para programar seguia o padrão “perguntar no chat, copiar a resposta e colar na IDE”. A evolução para agentes muda a natureza da interação: a IA deixa de apenas sugerir código e passa a operar sobre o workspace, o que aumenta velocidade, mas também amplia risco de perda de controle. Por isso, trabalhar com agentes exige um workflow mais disciplinado, porque a autonomia que acelera também pode introduzir alterações indesejadas.

## CLIs agênticos como nova categoria

Cloud Code, Gemini CLI e ferramentas semelhantes introduzem uma lógica diferente: em vez de uma IDE que ganhou IA, são agentes acessados por CLI que depois passam a ser embutidos na IDE como uma janela operacional. Essa arquitetura parece contraintuitiva à primeira vista, porque CLI não é o ambiente natural de edição rica, mas ela oferece portabilidade e integração com diferentes editores. O resultado é uma nova categoria de ferramenta: agentes centrados no próprio modelo, acoplados ao ambiente de desenvolvimento por embedding ou integração lateral.

## Comparação prática entre Cursor, Windsurf, GitHub Copilot, Cloud Code e Gemini CLI

Cursor e Windsurf tendem a oferecer uma experiência mais nativa de IDE agêntica, com forte integração entre chat, edição e contexto local. GitHub Copilot ganha força quando o ecossistema Microsoft e GitHub pesa na operação, porque a assistência se espalha pelo fluxo além do editor. Cloud Code se destaca quando o agente em CLI entrega melhor execução prática mesmo usando modelos semelhantes aos de outras ferramentas, enquanto Gemini CLI chama atenção pelo custo muito baixo ou quase nulo em relação ao volume de uso disponível.

## Resultado melhor não é sinônimo de modelo melhor

Resultado melhor significa atender ao objetivo desejado com mais precisão, menos retrabalho e melhor comportamento durante a execução. Duas ferramentas podem usar o mesmo modelo base e ainda assim produzir resultados diferentes por causa de prompt interno, gerenciamento de contexto, ferramentas acopladas e forma de orquestração. Por isso, a comparação útil é empírica: mesmo software, mesmos prompts iniciais, ambientes diferentes e observação de proatividade, controle e aderência ao objetivo.

## Regras, memórias e guidelines

Rules, memórias e arquivos como `cloud.md`, `gemini.md` ou configurações equivalentes funcionam como instruções iniciais para orientar o comportamento do agente. Eles existem para dar consistência mínima ao estilo de código, às restrições e às preferências do projeto, mas não devem ser tratados como mecanismo de garantia. O papel correto dessas instruções é servir como ponto de partida operacional, não como contrato rígido que a IA sempre obedecerá.

## Janela de contexto como limite operacional

Janela de contexto é o espaço finito em que a IA mantém a conversa, instruções recentes e partes relevantes do estado textual da interação. Quando esse espaço cresce, informações antigas perdem prioridade ou deixam de influenciar o comportamento com a mesma força, mesmo antes de o limite máximo ser atingido. Na prática, isso explica por que uma diretriz válida no início da sessão pode enfraquecer ao longo da execução, especialmente quando novas instruções e raciocínios intermediários competem com ela.

## Memória não garante obediência contínua

Mesmo sem uma instrução explícita do usuário para contrariar uma rule, a própria cadeia de raciocínio da IA pode levá-la a produzir algo incompatível com a guideline inicial. Se o agente conclui que um comentário intermediário ajuda a organizar a solução, ele pode introduzir esse comentário mesmo quando a regra original dizia para não comentar. Isso mostra que memória é influência, não garantia; por isso, revisão, checkpoints e reancoragem de instruções continuam necessários.

## Contexto, documentação, MCP e sumarização na prática

Contexto, documentação e MCP, já estabelecidos anteriormente, ganham aqui uma função operacional: reduzir ambiguidade e sustentar melhores decisões do agente ao longo do trabalho. Sumarização entra como mecanismo para condensar histórico e preservar o que ainda precisa influenciar a execução quando a conversa cresce demais. Retomando o cenário de programar melhor com IA no dia a dia, o ganho aparece quando o sistema recebe contexto suficiente para agir com menos improviso e menos deriva ao longo das interações.
