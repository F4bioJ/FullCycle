# Orquestração de Skills e subskills — resumo

O professor retoma a granularidade e as sub-skills e mostra, num caso de uso de código, como fazer skills se orquestrarem usando só skills. O produto gerado não é o foco; o foco é a orquestração e como as skills conversam entre si.

## A skill orquestradora: implement-feature

A primeira skill pedida ao Claude Code se chama `implement-feature` e é um **orquestrador** da implementação de uma feature completa. Ela **não escreve código**: delega cada camada a uma **subskill** específica.

O pedido também fixa a ordem das camadas, **bottom-up**: domínio, adapter (se existir), serviço, repositório e, no fim, a rota. É uma arquitetura em camadas comum: o domínio tem a lógica de negócio, o serviço orquestra os repositórios com o domínio e a rota chama o serviço.

Outras instruções do pedido:

- para cada arquivo, planejar e executar, invocando primeiro a subskill da camada em que se está trabalhando;
- a subskill produz o arquivo garantindo os testes dele;
- aplicar as referências, se existirem;
- diante de um item de decisão, parar e perguntar ao usuário, com a ferramenta de perguntas (o nome sai truncado na transcrição).

## O que o orquestrador ganhou

O Claude Code gerou duas referências:

- **Mapa de camadas:** a subskill de cada camada (domínio, adapter, serviço, repositório, rota e também a geração de testes), quando cada uma deve rodar, o que fazer quando ela não existir e a passagem de contexto para ela.
- **Pipeline:** o que se espera de cada camada e o fluxo que deve, ou pelo menos deveria, ser seguido. O professor lembra que são itens **não determinísticos**. O fluxo vai do domínio à rota, o **inverso** do caminho de quem usa a aplicação, que entra pela rota e passa pelo serviço até chegar ao domínio.

O corpo traz description, allowed tools e os passos: mapear a feature em camadas, carregar o contrato da camada, um **ciclo por arquivo** (invocar a subskill, produzir o resultado, aplicar as referências e passar pela **porta de decisão**, o "gate de qualidade") e o fechamento.

## As subskills e o pré-check de convenções

Numa nova sessão (a original fica para o orquestrador), o professor gera as subskills de todas as camadas, focando na de domínio. Cada subskill deve, antes de criar qualquer item, fazer um **pré-check**: procurar a pasta `architecture` do projeto e, se existir, carregar os arquivos de convenção no padrão `convention-<camada>.md`, aplicando-os na implementação **como fonte da verdade**.

É a granularidade: um orquestrador e várias subskills, cada uma lendo a convenção da sua camada. A subskill pode ter critérios próprios (a de domínio pode exigir domínio rico e value objects), e a convenção acrescenta o jeito do projeto, como seguir um framework customizando a forma de trabalhar.

De passagem, ele cita uma propriedade do frontmatter ("disable model") para que as subskills não fossem chamadas por slash command, só pelo orquestrador. Atenção: na aula 3.1.2, a `DisableModelInvocation` teve o efeito contrário (impede o carregamento automático e deixa só o slash command).

A subskill de domínio ficou com pré-check da `convention-domain`, implementação, testes, porta de decisão e o que se espera no fim. Como o professor deu pouca instrução, o modelo **inferiu** essas etapas do mapa de camadas, que fala em entidades, value objects e regras de negócio, isto é, domínio rico. Ele poderia ir além, com um checklist e um script que verificasse o formato esperado, mas fica só com instruções na skill.

## Convenções e bibliotecas

A convenção de domínio, tirada de um projeto em uso, segundo ele, traz a estrutura, como criar, exemplos (value object, repositório, erros) e o que é permitido e proibido. O seu jeito de usar bibliotecas como o Zod também pode virar convenção, em `architecture` ou em outro local; na aula, em `docs/conventions`.

## A demonstração

O pedido: uma feature de produto com `name`, `description` e `price`, nome e preço obrigatórios, preço diferente de zero, criar e listar, em memória com um array. Como na primeira tentativa esqueceu de chamar a skill, o professor abriu nova sessão e invocou a `implement-feature`.

- O mapa de camadas saiu sem adapter, com repositório em memória e ordem bottom-up.
- A porta de decisão perguntou a stack: ele escolheu TypeScript com um scaffold mínimo (o `src` estava vazio) e rota exposta via HTTP com o Hono (na transcrição, "Rono").
- O domínio saiu com erro de domínio, value objects, a entidade, a interface do repositório e os testes, que passaram.
- Na camada de serviço, o agente avisou que faltavam as convenções de serviço, repositório e rota. O professor copiou os arquivos para `architecture`, e as convenções foram identificadas e carregadas.
- Seguiram serviço, repositório, rotas e o `main.ts`; no fim, 28 testes passando, type check sem erros, um smoke test e o relatório do orquestrador. Testado com `curl`, um nome nulo devolveu "validation failed".

## O código gerado

A autovalidação que ele esperava na entidade estava nos value objects de nome e preço, como ele também faria. O domínio guarda a interface do repositório; o serviço é um caso de uso que cria no domínio e persiste; a rota valida a entrada contra um schema (o DTO); o repositório implementa a interface com um array. Para ele, o código é coerente com projetos reais de hoje.

## Por que funcionou e o que falta

O professor atribui o código "não macarrão" à construção das skills e ao contexto passado ao modelo, tudo só com arquivos `.md`, por inferência, sem scripts. Uma camada de **script determinístico** deixaria o resultado melhor: se algo saísse do molde, o script apontaria, e haveria autocorreção (**self-healing**).

## Fundamentos e três camadas de customização

As convenções são arquitetura, padrões de projeto e design de código: fundamentos que, para ele, o engenheiro precisa saber usar, e que distinguem quem está acima da média. Na visão do professor, a orquestração não é tão complexa: basta dar o contexto e aplicar os fundamentos. A demonstração é um ponto de partida com **três camadas de customização**: os fundamentos, a documentação dos frameworks e, por cima, as convenções do desenvolvedor, por projeto ou por time. A granularidade vem quando é necessária.
