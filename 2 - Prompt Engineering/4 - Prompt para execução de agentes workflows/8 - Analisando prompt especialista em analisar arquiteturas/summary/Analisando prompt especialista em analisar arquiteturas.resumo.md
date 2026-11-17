# Analisando prompt especialista em analisar arquiteturas

A aula revisa a estrutura de prompt especializado já vista no Auditor de Dependências (saídas, instruções negativas, tratamento de erro) num segundo especialista do workflow: o **Architectural Analyzer**. O exemplo roda no Claude Code, mas o que importa é entender o prompt, que vale para qualquer ferramenta, mesmo que cada uma se comporte de um jeito.

## Metadados e núcleo do prompt

O arquivo do agente começa com metadados do Claude Code (modelo, cor na tela, exemplos de quando acioná-lo), que o professor deixa de lado. O que importa é o núcleo: **Persona, Objetivo, Inputs e Outputs**, seguidos de critérios, ambiguidades, instruções negativas e workflow.

## Persona e escopo

A persona é um arquiteto de software com expertise em análise de código, padrões arquiteturais, system design e boas práticas de engenharia. Quanto mais informação nesse papel, mais "filtros" a IA recebe para entrar no contexto certo. O escopo restringe a ação: o papel é **estritamente analisar e reportar**. O agente não modifica o projeto, não refatora e não altera a codebase; ele gera um relatório.

## Objetivo claro em vez de leitura exaustiva

O desafio é analisar projetos com centenas de milhares de linhas sem estourar a janela de contexto (no Claude, segundo o professor, cerca de 200 mil tokens). A saída é dar **objetivos claros**: entendendo o objetivo, a ferramenta decide como ler a codebase, e ninguém precisa ler 100% do código para entender a arquitetura. O professor também não dita como usar as ferramentas: cada agente (Claude, Gemini etc.) tem as suas e a própria "manha".

Os objetivos pedem: mapear a arquitetura, os componentes e suas relações; identificar componentes críticos, módulos principais e acoplamento; analisar o acoplamento **aferente** (as dependências que chegam a um componente, quantos apontam para ele) e **eferente** (as dependências que o componente tem em relação aos outros); entender documentação, integrações externas e bancos; apontar riscos, pontos únicos de falha, infraestrutura e deploy, dívidas técnicas e riscos de segurança em alto nível. Se o resultado não agradar, dá para rodar o prompt em outra ferramenta, como o GPT-5 ou o Gemini (de janela grande); nos testes do professor, o Claude foi bem mesmo em sistemas grandes.

## Inputs: o que vale a pena ler

Os inputs dizem o que o agente tem para ler: código-fonte, Dockerfile, docker-compose, arquivos de Kubernetes, variáveis de ambiente, automações como makefiles, gerenciamento de pacotes e dependências, schemas de banco e migrações. Esses arquivos revelam muito sem leitura completa: pelo gerenciador de pacotes, por exemplo, o agente vê que uma biblioteca está desatualizada.

## Output: a parte que dá mais trabalho

O output é sempre o que dá mais trabalho num prompt. Aqui ele é um relatório em Markdown com seções definidas:

- **Sumário executivo:** visão high level da arquitetura, stack e principais achados. Ficou genérico de propósito, o que dá menos controle sobre a resposta; se os testes não satisfizerem, basta detalhá-lo.
- **System Overview:** estrutura do projeto, diretórios principais e padrões identificados.
- **Análise crítica de componentes:** uma tabela. As tabelas do prompt mostram como o resultado deve sair: o relatório servirá de base para outros e não pode vir no formato que a IA quiser.
- **Dependency Mapping:** dependências de alto nível (controller → service → repositório → banco; controller chamando API externa; service chamando message queue), pontos de integração e pontos únicos de falha que podem parar o projeto inteiro.
- Tecnologias e stack, e pontos críticos de segurança.
- **Infraestrutura:** com a condição "only if files/documentation present, otherwise do not include this section". Sem arquivos que sustentem, a seção nem existe.

## Componente como conceito flexível

Componente é abstrato e depende da linguagem e da arquitetura (Java, .NET, Go, PHP e JavaScript organizam de jeitos diferentes). Por isso a própria IA define o que é um componente, guiada por exemplos (User Service e Billing como serviços, Database Manager como infraestrutura, Message como mensageria, tipo RabbitMQ). Ela procura módulos, features, bundles (Symfony), packages (Go), domínios e subdomínios (DDD); num software só de classes, pode usar as classes. A tabela traz o nome, o arquivo principal, as ligações (quantos usam o componente e quantos ele usa) e o papel dele na arquitetura.

## Salvar e avisar

Ao final, o agente salva o relatório como `ArchitectureReport` com data e hora (até os segundos) numa pasta dos agentes, em `docs`; uma instrução posterior pode trocá-la. Depois, informa o orquestrador ou o agente principal (depende de como o LLM trabalhar) que o relatório foi salvo. Esse passo não deve aparecer no relatório.

## Critérios de qualidade

Percorrer os diretórios; identificar os padrões principais; focar no que é significativo para a arquitetura em vez de olhar todo arquivo; calcular as métricas aferentes e eferentes; mapear o fluxo de dados, a infraestrutura, os limites dos componentes e as integrações; ver escalabilidade e gargalos, antipatterns e débitos técnicos; priorizar componentes pela importância arquitetural e pelo impacto no negócio; analisar o gerenciamento de configuração e as bibliotecas compartilhadas; usar sempre **caminho relativo**, para não expor a pasta home da máquina; e explicar aferente e eferente num parágrafo antes de apresentar o acoplamento.

## Ambiguidades e pressupostos

Se houver vários padrões arquiteturais presentes, documentar cada um separadamente. Se faltarem arquivos de infraestrutura, registrar isso como limitação.

## Instruções negativas

Nunca modificar arquivos; não criar diagramas; não assumir padrão sem evidência; nada de otimizações, sugestões de performance ou estimativas de tempo ("na primeira semana melhore isto, tarefa de duas horas"); sem estilização nem emojis; não fabricar informação, e dizer quando ela faltar; não dar recomendações de melhoria. O relatório é um **snapshot**, não uma consultoria. Se não conseguir fazer a análise, o agente deve trazer isso como resultado.

## Workflow resumido

No fim, um passo a passo funciona como **reforço**: é quase um resumo de cada item do relatório. Depois que a IA entendeu o que se quer, ele diz como trabalhar. Inclui um detalhe: se o usuário der o caminho e o nome do arquivo, gerar o relatório com eles, sem pedir confirmação.

## Ponto de partida e cuidados

O prompt foi rodado várias vezes até ficar como o professor queria e ainda pode crescer, mas é um bom ponto de partida. Na empresa, respeite privacidade e políticas: nada de dados sensíveis em IAs não homologadas.
