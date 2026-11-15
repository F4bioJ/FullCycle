# Aula 03 — resumo

## O que é um quick win
Quick win é o que se aprende hoje e já se aplica amanhã. A aula não vai ensinar a criar agentes, a escrever prompts melhores nem truques de ferramenta. O objetivo é dar uma visão geral, sem aprofundar, de cinco pontos que funcionam em conjunto: ferramentas, documentos de contexto, servidores MCP, memória e sumarização. O professor liga isso ao context engineering: quanto mais contexto a IA recebe, melhores tendem a ser os resultados.

## Cada um tem o seu workflow
Workflow é o modo de trabalhar com a IA: a sequência de passos, o nível de automação e a ordem entre testes, arquivos, comandos e revisão. Os exemplos em vídeo, inclusive os do professor, refletem o fluxo de quem grava ou um fluxo básico montado para aquele exemplo, e copiá-los força a pessoa a trabalhar de um jeito que não é o dela. A ideia é partir de algum fluxo e ajustá-lo com a maturidade, apoiando-se nas fundações comuns a todos.

## IDEs que nasceram para a IA
Cursor e Windsurf são forks do VS Code, mas foram estruturados desde o início para um mundo baseado em IA. Além do auto-completion, começaram com um chat para tirar dúvidas e foram caminhando para agentes. Antes, o hábito era pedir o código no ChatGPT, copiar e colar na IDE; essas ferramentas trouxeram a conversa para dentro do editor.

## IDEs que vieram de antes da IA
O VS Code puro e a JetBrains vêm de um mundo sem IA, então os agentes entram neles como algo que se inclui, como o GitHub Copilot. O Copilot começou com chat e demorou um pouco mais que os outros a chegar aos agentes, mas se espalhou por todo o fluxo, da IDE até o GitHub. A conversa passa a ser mais sobre ecossistema do que sobre a ferramenta.

## O custo de trabalhar com agentes
Com agentes, cada pessoa passa raiva de um jeito: perde o controle do código, ora recebe algo bom, ora algo ruim, dá Ctrl-Z, vê um arquivo ser apagado. Ainda assim, isso já está virando padrão de mercado.

## CLIs agênticos e vibe coding
Codex, Claude Code e Gemini formam outra categoria, que no começo foi criticada, inclusive pelo professor. Por que investir tanto em um CLI, se Cursor e Windsurf já usam os modelos da Anthropic, do Google e da OpenAI, e se no CLI o desenvolvedor não programa junto? O vibe coding surgiu em paralelo e reforçou a crítica: parecia que o CLI existia para ninguém mais precisar programar. O professor discorda, porque a IA hoje não faz software de qualidade sem um desenvolvedor pilotando. Depois ficou claro que essas ferramentas podem ser colocadas dentro da IDE.

## Mesmo modelo, resultado diferente
Muitas vezes, os CLIs dão resultado melhor do que Cursor, Windsurf e Copilot usando o mesmo modelo. O professor avisa que essa opinião muda a cada mês, porque as ferramentas mudam. O resumo dele atribui a diferença a prompt interno, gerenciamento de contexto, ferramentas acopladas e forma de orquestração.

## Claude Code e Gemini CLI
O Claude Code é hoje a ferramenta padrão do professor, que paga 100 dólares por mês por ele. O Gemini CLI foi um lançamento disruptivo: é gratuito até um limite muito alto, mesmo com o modelo mais avançado.

## Duas categorias de ferramenta
De um lado, IDEs que usam modelos: nasceram como IDEs e foram virando agentes. De outro, agentes de CLI que usam os próprios modelos: nasceram como agentes e estão virando uma janela dentro da IDE.

## O que é um resultado melhor
Resultado melhor é o que atende ao objetivo da forma desejada, com ganho real. O professor compara desenvolvendo o mesmo software em ferramentas e modelos diferentes, com os mesmos prompts iniciais, para sentir a proatividade de cada uma.

## Qual ferramenta usar
Tudo o que ele mostra funciona em qualquer uma delas. Ele usa um misto de Cursor e Claude Code. Para quem não quer gastar, recomenda o VS Code com o GitHub Copilot, que tem versão gratuita, ou com o Gemini, a um custo muito baixo.

## Rules e memórias
As rules do Cursor, o `CLAUDE.md`, o `GEMINI.md` e o `.windsurf` guardam as regras do agente: funcionam como prompts iniciais e guiam o que ele constrói. No Cursor, por exemplo, um arquivo de rules pode valer sempre, só para arquivos JavaScript ou só em certa situação.

## Rules não dão garantia
Rules são um ponto de partida, com zero garantia de que serão seguidas. Isso não faz delas perda de tempo, mas, com o uso, parece que a IA começa a esquecê-las.

## Janela de contexto
A janela de contexto é o espaço que guarda a conversa com a IA, medido em tokens, que são pedaços de palavras; o exemplo da aula é de 200 mil tokens. Conforme ela enche, o que está no começo vai se perdendo.

## Esquecer antes de a janela encher
A pegadinha é que as memórias podem deixar de ser aplicadas sem a janela estar cheia. Se a memória diz para não comentar o código e, no meio da conversa, alguém pede um comentário em cada função, a IA substitui o que estava na memória. O arquivo continua igual, mas o comportamento muda.

## Desvio pelo raciocínio da IA
Nem é preciso alguém pedir. Ao desenvolver uma tela de login pensando passo a passo em como evitar CSRF (Cross-Site Request Forgery), a IA pode pôr um comentário como anotação para não esquecer um detalhe. Na interação seguinte, vendo que o código já tem comentário, acrescenta mais um. Memória e rules não garantem a qualidade do código; por isso, segundo o resumo do professor, revisão, checkpoints e reforço das instruções continuam necessários.

## Contexto, documentação, MCP e sumarização
Na transcrição, esses temas só são anunciados. O resumo do professor diz que contexto, documentação e MCP reduzem a ambiguidade e sustentam melhores decisões do agente, e que a sumarização condensa o histórico para preservar o que ainda importa quando a conversa cresce demais.
