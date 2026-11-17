# Analisando prompt de analise de componentes

## Do nível de arquitetura para o nível de componente

O prompt tem a mesma estrutura do anterior (persona e escopo de quem analisa código), mas o foco agora é **extrair lógica de negócio**. O relatório de arquitetura deu a visão geral e listou os componentes; este prompt pega **cada componente** da lista e gera um **relatório específico** para ele.

## Objetivos do prompt

Mapear a estrutura e a organização do componente; extrair regras de negócio, validações, use cases e regras de domínio; analisar implementações, algoritmos e o **data flow**; identificar dependências internas e externas e integrações; documentar design patterns, decisões arquiteturais e atributos de qualidade; entender acoplamento, coesão e limites arquiteturais; avaliar segurança, tratamento de erros, resiliência, dívidas técnicas e code smells.

## Leitura mais agressiva

Como o agente analisa um componente só, com bem menos arquivos que o projeto inteiro, o prompt pode pedir uma leitura **mais agressiva** desses arquivos.

## Granularidade: subcomponentes

Se um componente for muito grande, outro prompt (ou outra chamada) pode dividi-lo em **subcomponentes** para relatórios mais precisos: desce-se de nível, com um prompt diferente em cada nível, conforme o tamanho do projeto. Não há regra geral: o mesmo prompt pode trazer de menos ou de mais, então é preciso saber ajustá-lo.

## Inputs

O componente, seus serviços e diretórios apontados no relatório de arquitetura; implementações, interfaces, testes (com fixtures e mocks), documentação, configuração, dependências, declarações e imports. Opcional: os componentes mais críticos, pelo relatório de arquitetura, e análises extras do usuário.

## Output: sumário e fluxo de dados

O output começa com o sumário executivo e o data flow passo a passo. Exemplo: a requisição chega ao controller, passa pela validação, cai na regra de negócio, chama o Stripe, persiste no banco, envia uma mensagem e volta por um Response Builder.

## Regras de negócio quebradas uma a uma

Um componente pode ter várias regras. O prompt pede:

- uma **tabela** em Markdown com tipo (ex.: validação), descrição (ex.: pagamento mínimo de um dólar), arquivo e linha;
- um **detalhamento** por regra: nome, visão geral, descrição (pelo menos três parágrafos, fácil de entender) e um workflow básico.

## Placeholders em XML

Como o formato de saída está em Markdown, o professor marca com XML, como placeholder, onde a IA deve escrever, para ela não confundir a definição do formato com o conteúdo.

## Estrutura, dependências e endpoints

Vêm a estrutura do componente e as dependências em nível mais baixo, com componentes aferentes e eferentes. **Endpoints** (REST, GraphQL, gRPC) só entram se o componente os expuser; senão, a seção é omitida. Para REST: endpoint, método e descrição.

## Demais seções e workflow final

Seguem integrações, patterns, riscos técnicos, cobertura de testes, salvar o relatório e o passo final, além de critérios, ambiguidades, instruções negativas e tratamento de erro. No fim, um **workflow** resume tudo para a IA seguir passo a passo. O professor vai incluí-lo como **opcional** no formato de prompts, pois depende de a tarefa ser complexa ou longa.
