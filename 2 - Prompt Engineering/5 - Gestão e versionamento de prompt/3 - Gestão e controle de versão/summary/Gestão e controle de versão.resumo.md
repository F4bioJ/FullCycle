# Gestão e controle de versão

## Controle de versão para todo prompt

Prompt é como software e precisa de histórico, seja ele da equipe ou só seu. A diferença é o rito: no repositório pessoal, em que só você mexe, não faz sentido abrir pull request e code review para o seu próprio prompt. Em equipe, essa mentalidade de revisão é importante.

## Repositório de prompts de uso geral

A recomendação é ter um repositório de prompts para uso geral, onde ficam guardados todos os prompts da equipe. Como existem muitos tipos de prompt (para TypeScript, Go, Python, testes em várias linguagens), as pastas precisam ser bem estruturadas para que seja fácil encontrar cada um. E ninguém vai usar todos eles ao mesmo tempo.

## Não colocar o repositório inteiro dentro do projeto

O professor alerta: não clone a pasta inteira de prompts dentro do projeto em que você trabalha. Em algum momento, a IA vai ler essa pasta e encontrar guidelines e contextos completamente diferentes entre si, o que gera um grande nível de ambiguidade.

## Links simbólicos e `.gitignore`

A solução é clonar o repositório fora do projeto e, dentro do projeto, criar uma pasta (por exemplo, `.prompts`) com links simbólicos só para os prompts que interessam. Assim o projeto não fica com uma pasta gigante e a IA só vê o que é relevante. A pasta entra no `.gitignore`, para não cair no controle de versão do projeto.

## Prompts não são só textos

Prompt não é só um texto de instruções. O `AGENTS.md`, que está virando padrão (Codex, Gemini e Claude o procuram), também é prompt, assim como um `CLAUDE.md` com instruções sobre a tecnologia usada ou os comandos do Claude, que são o que de fato será executado.

## Um único repositório, sem prompts espalhados

A lógica principal é manter o projeto isolado do repositório clonado. O professor prefere links simbólicos porque traz para o projeto só os arquivos que fazem sentido naquele momento; quem preferir copiar e colar no editor pode fazê-lo. O essencial é que os prompts não fiquem espalhados pelos projetos da máquina: ele já se perdeu sem saber onde guardou um prompt ou qual `CLAUDE.md` era o melhor. Foque em um único repositório e reaproveite por links.

## Uso geral versus específico do projeto

Tudo isso vale para prompts de uso geral, os "coringas" que ajudam no dia a dia sem pertencer a um projeto. Conforme o projeto ganha forma, ele passa a precisar de prompts próprios: um `AGENTS.md` ou `CLAUDE.md` do projeto, comandos e workflows específicos. Esses, sim, são salvos dentro do projeto, porque fazem parte dele.
