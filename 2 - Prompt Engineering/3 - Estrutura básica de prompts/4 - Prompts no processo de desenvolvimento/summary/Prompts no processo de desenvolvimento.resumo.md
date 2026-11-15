# Prompts no processo de desenvolvimento — resumo

## Não economize tokens no desenvolvimento

Uma objeção comum a prompts grandes é a janela de contexto e a quantidade de tokens. A visão do professor, que ele diz não ser verdade absoluta, é que codificação é algo muito complexo, e economizar contexto aumenta a chance de a IA errar. Muitas vezes se usa um prompt gigante para resolver um problema pequeno, sem chegar perto do limite: os modelos atuais têm janelas de centenas de milhares a milhões de tokens.

## Cobrança por uso, não por token

Hoje grande parte dos planos e IDEs cobra pela utilização, não por token visível. Antes, com uma API key, cada token contava e a conta era clara. O exemplo do professor: usar a API key da Anthropic no Claude Code o dia todo custaria muito, enquanto um plano mensal fixo (não barato) permite trabalhar quase sem limite e sem surpresa no fim do mês. Modelos de reasoning dão resultados melhores, mas consomem mais do limite do plano. Para ele, o custo se paga pela produtividade.

## Comparar ferramentas e manter a mente aberta

Comparando Gemini CLI, Claude Code e Codex, o professor viu resultados parecidos; o Gemini tinha menos recursos no CLI, mas, no momento da gravação, oferecia um limite gratuito alto. Dá para começar sem gastar nada. Vale buscar as soluções mais baratas com resultado similar, mesmo que um pouco inferior, para economizar para você ou para a empresa. Planos e preços mudam rápido.

## Branches e leafs: não ler o codebase inteiro

Não economizar tokens não significa fazer a IA ler um codebase com 100 mil arquivos. O projeto pode ser visto como uma árvore: ele começa num ponto e se ramifica em componentes (branches) até as pontas (leafs). Ao pedir uma correção, indique de onde a IA deve partir e qual fluxo seguir, e mande ignorar o restante.

## Modularização e instruções por módulo

Isso depende de como a aplicação é estruturada. Se ela é modular e os componentes são desacoplados o suficiente, a IA entende o contexto de um pedaço sem internalizar o resto. Também é possível criar documentação e instruções em cada pedaço, para que a IA não saia da sua "bolha" e entre em outras partes do sistema.

## Conclusão

Independentemente da ferramenta, não economize tokens para explorar, gerar documentos e processar informação, principalmente no workflow de desenvolvimento.
