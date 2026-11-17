# Analisando prompt de analise de componentes

## Análise em profundidade por componente

A análise em nível de componente desce uma camada em relação ao relatório arquitetural: em vez de mapear a forma geral do sistema, ela explica como cada componente funciona por dentro. O ponto de partida continua sendo a lista de componentes já identificada anteriormente, mas agora cada item vira alvo de um prompt especializado e de um relatório próprio. Essa mudança de granularidade permite sair de “quais partes existem” para “quais regras, fluxos e integrações cada parte executa”.

## Agente de análise de componentes

Um agente de análise de componentes precisa ler código, mas também inferir comportamento funcional e de negócio a partir da implementação. Por isso, o escopo inclui extração de regras de negócio, lógicas de validação, use cases, regras de domínio, algoritmos e data flow. O resultado esperado não é apenas um inventário técnico do diretório, e sim uma compreensão operacional do componente como unidade funcional do sistema.

## Leitura mais agressiva dentro do escopo do componente

Retomando o mapeamento arquitetural, a leitura seletiva continua válida, mas o recorte menor permite ser mais agressivo na inspeção dos arquivos daquele componente. Como o volume de código é menor do que o projeto inteiro, o prompt pode exigir cobertura mais profunda de implementações, interfaces, testes, configurações, fixtures, mocks, imports e declarações. Esse ajuste melhora a densidade do diagnóstico sem tentar ler toda a codebase com o mesmo nível de detalhe.

## Granularidade variável e subcomponentes

Nem todo componente tem o mesmo tamanho ou a mesma coesão interna, então um único prompt por componente nem sempre produz o melhor relatório. Quando um componente é grande demais, o caminho correto é quebrá-lo em subcomponentes e aplicar novos prompts em um nível mais baixo. A análise, portanto, é hierárquica: alto nível para localizar fronteiras, baixo nível para explicar comportamento interno.

## Extração de regras de negócio

Extrair regras de negócio significa identificar decisões que controlam o comportamento do componente, como validações, restrições, critérios de processamento e condições de domínio. Essas regras precisam aparecer separadamente porque um mesmo componente pode concentrar várias decisões relevantes, e um resumo único tende a esconder diferenças importantes entre elas. Uma tabela com tipo da regra, descrição, arquivo e linha transforma lógica implícita em artefato auditável.

## Detalhamento individual de cada regra

Listar regras não basta quando o objetivo é entender a aplicação; cada regra também precisa de uma explicação textual própria. O detalhamento útil inclui nome da regra, visão geral, descrição expandida e um workflow básico do seu funcionamento, para mostrar em que ponto ela entra e quais efeitos produz. Esse formato ajuda a distinguir regra de negócio de simples detalhe de implementação.

## Fluxo de dados do componente

O data flow descreve o caminho percorrido por uma solicitação ou dado dentro do componente, desde a entrada até a resposta ou efeito colateral. Um fluxo como `controller -> validação -> processamento -> Stripe -> banco -> mensageria -> Response Builder` mostra ordem, dependências e pontos de decisão sem exigir leitura direta do código. Esse mapa é valioso porque revela onde a lógica realmente acontece e onde estão os acoplamentos mais sensíveis.

## Dependências, integrações e limites arquiteturais

A análise profunda do componente precisa distinguir dependências internas, dependências externas e integrações efetivas, porque esses grupos têm impactos diferentes na evolução do sistema. Dependências internas mostram como o componente se organiza; externas revelam sensibilidade a outros módulos; integrações expõem contato com serviços, APIs ou infraestrutura. Coesão, acoplamento, relações aferentes e eferentes e limites arquiteturais entram aqui como critérios para julgar se o componente está bem delimitado ou se acumula responsabilidades demais.

## Endpoints do componente

Endpoints só devem aparecer quando o componente realmente os expõe. O prompt precisa deixar isso explícito para evitar seções inventadas e para adaptar o formato ao tipo de interface, como REST, GraphQL ou gRPC. Quando o endpoint é REST, uma estrutura com rota, método e descrição já fornece um inventário operacional suficiente para conectar interface externa e lógica interna.

## Cobertura de testes e riscos técnicos

A cobertura de testes do componente não é apenas uma contagem de arquivos de teste; ela indica quais comportamentos críticos estão protegidos e quais áreas permanecem frágeis. Quando essa leitura é combinada com tratamento de erro, segurança, resiliência, dívidas técnicas e code smells, o relatório deixa de ser descritivo e passa a apontar risco operacional real. Isso é especialmente útil para priorizar investigação ou modernização sem misturar diagnóstico com refatoração imediata.

## Inputs e output do prompt

Os inputs do prompt incluem o componente, seus diretórios e os caminhos já identificados no relatório arquitetural, além de artefatos como implementações, interfaces, documentação, testes e configurações. O output precisa consolidar sumário executivo, fluxo de dados, regras de negócio, dependências, endpoints, integrações, patterns, riscos e testes em um relatório estruturado. Retomando o uso de critérios, ambiguidades, instruções negativas e tratamento de erro já definidos antes, o diferencial aqui é aplicar essas peças para produzir um retrato profundo e específico de cada componente.

## Workflow resumido como reforço operacional

Quando o prompt acumula muitas instruções, um workflow resumido no final funciona como trilho de execução para a IA. Ele não substitui a especificação detalhada, mas reforça a ordem esperada: ler o escopo, mapear estrutura, extrair regras, reconstruir fluxo, identificar dependências, listar endpoints, avaliar testes e salvar o relatório. Em tarefas longas ou densas, esse resumo reduz a chance de o agente ignorar etapas importantes.
