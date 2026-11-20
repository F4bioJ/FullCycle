# Soluções de terceiros para gestão

## Repositórios e CMSs de prompts

Até aqui, o professor mostrou uma forma básica de organizar os prompts dentro do projeto, com controle de versão. Mas muitos projetos passam a usar repositórios de prompts, ou "CMSs de prompts", porque algumas situações são mais complexas.

## Dois mundos

No primeiro mundo estão os desenvolvedores: criam as aplicações, gerenciam os prompts e, muitas vezes, eles mesmos escreveram os prompts. Aí está tudo certo. No segundo, cada vez mais comum, quem mexe nos prompts são pessoas de produto ou de prompt engineering (que virou cargo), e não mais os desenvolvedores.

## Dar acesso ao Git nem sempre faz sentido

Um caminho é dar acesso ao Git para essas pessoas clonarem o repositório e alterarem os prompts. Em muitos contextos, isso não funciona nem faz sentido, porque elas querem outra coisa: entender como o prompt funciona, melhorá-lo, avaliá-lo, garantir que não está gastando dinheiro demais, que gera o resultado certo e que funciona para determinado modelo.

## Gestão remota, como um CMS

Há soluções de mercado em que os prompts não ficam no repositório Git, e os desenvolvedores muitas vezes nem têm permissão para acessá-los. Essas ferramentas de terceiros ou na nuvem fazem versionamento e funcionam como um CMS (um "WordPress" de prompts): uma pessoa edita, outra revisa, outra roda testes para ver se o prompt melhorou. O prompt passa por desenvolvimento, homologação e produção, e dá para fazer teste A/B entre versões. É todo um ecossistema controlado de gestão de prompts que não faz parte da função do desenvolvedor.

## Ferramentas

Exemplos: LangSmith, do ecossistema LangChain, proprietária (será a usada no curso); LangFuse, open source, "se não me engano"; e PromptLayer, que também cobre evaluation e colaboração. O que importa é a ideia, não a ferramenta. O LangSmith, por exemplo, não serve só para gestão de prompts: também faz observabilidade e tracing, importantes para o próprio desenvolvedor ver performance.

## Consumo via SDK

Essas ferramentas têm SDK. Com ele, o sistema baixa o prompt e o usa dentro da aplicação.
