# Skills e subagents — resumo

O professor mostra como uma skill pode disparar subagentes. A demonstração usa um projeto JavaScript um pouco maior que os anteriores, com testes, uma migration, a conexão com o banco de dados e uma pipeline simples. A skill criada mapeia esse projeto dividindo o trabalho entre vários subagentes.

## Depende do harness

Antes de tudo, o professor avisa que o assunto depende muito da CLI, do harness, que você usa. Há harnesses com agentes que fazem exatamente o que ele vai mostrar, mas com outros nomes, e há CLIs que não têm nenhum tipo de agente. Ele fala do Claude Code em particular, mas diz que a explicação serve de forma geral para os outros harnesses que trabalham com esse tipo de agente.

## Os três tipos de agente do Claude Code

No Claude Code, há três tipos: o de exploração (o professor o chama de "Explorer"; na skill ele escreve "Explore"), o Plan e o general purpose. Os nomes podem mudar de acordo com a CLI.

- **Explore:** um agente super rápido. Em geral usa o modelo mais barato e mais rápido, para ser eficiente, e trabalha bastante com ferramentas de leitura. O propósito é fazer o mapeamento ou a busca de forma muito rápida para o usuário.
- **Plan:** tem acesso a itens externos e, por isso, funciona como um agente de pesquisa. Diferente do Explore, herda o modelo da conversa: o professor estava usando um Opus, então o Plan também usaria. As ferramentas são só de leitura, e as de edição são negadas por padrão. É o agente usado quando se vai planejar algo, inclusive no modo plan do próprio Claude Code.
- **General purpose:** um agente generalista, capaz de executar tarefas variadas com múltiplas etapas, que em geral envolvem exploração e alguma ação, seja edição, seja escrita. Segundo o professor, é inteligente o bastante para começar uma tarefa de várias etapas e concluí-la sem problema ou com poucos problemas. É o que se usa no dia a dia.

## O foco: subagentes dentro da skill

O Claude Code consegue disparar subagentes por padrão, mas o foco da aula não é ensinar a usar subagentes em geral. O foco é a skill: dentro dela também se pode usar subagentes e disparar subagentes específicos para colher determinadas informações e trabalhar com elas.

## A skill de mapeamento do projeto

O professor cria, pelo Claude Code, uma skill chamada **mapping project**, no diretório de skills do projeto. Ela mapeia o diretório e diz o que há em cada camada. Ele a sugere para o onboarding de um novo projeto e para criar ou manter documentações atualizadas, com as customizações que cada projeto pedir.

### Passo 1: quebrar o projeto em frentes independentes

O primeiro passo é dividir o projeto em frentes **independentes**, e o professor marca isso como obrigatório. O motivo vem logo em seguida: os subagentes não compartilham o mesmo contexto. Como exemplo de divisão, ele lista:

- **arquitetura:** entry point, camadas, módulos e como o fluxo de dados funciona;
- **dados:** models, esquemas, conexão com o banco e onde o estado mora;
- **testes:** qual o framework, onde ficam, qual a cobertura atual e o que está coberto ou não;
- **build e CI:** o GitHub, scripts de build, pipeline e deploy, se existir;
- **segurança:** autenticação, autorização, segredos, middlewares específicos e permissões.

### Passo 2: lançar um subagente por frente

O segundo passo lança um subagente do tipo Explore para cada frente, todos na mesma mensagem, ou seja, várias chamadas que rodam de forma concorrente. Cada subagente recebe um prompt e devolve a sua conclusão. O prompt pede que ele explore o diretório da frente e a mapeie, liste os arquivos com caminho e linha, escreva de forma enxuta o que faz e como funciona, aponte um ou dois riscos ou pontos de atenção, fique só naquela frente e devolva apenas o resumo. O professor observa que poderia definir um formato de resultado mais estruturado, mas, para entender a ideia, isso basta.

### Passo 3: juntar tudo num mapa

O terceiro passo é o fechamento: juntar os resumos das frentes analisadas e, com base neles, gerar um mapa do repositório com visão geral, uma seção por frente, por onde começar, riscos e prioridades. Ele diz que poderia descrever melhor o que espera de cada parte do relatório, mas que, por ora, não é necessário.

## A execução

A skill fica pronta em cerca de 50 segundos. O professor recarrega as skills e confere o resultado: quebrar em frentes, lançar os subagentes em paralelo e sintetizar. Como o subagente é o Explore, a exploração usa o modelo mais leve, o Haiku. Na execução, os subagentes são disparados todos ao mesmo tempo, e ele consegue abrir cada um para ver o que está fazendo e voltar à conversa principal.

O mapa final descreve uma API REST de loja em Node e Express com Postgres, com o fluxo da requisição passando pelo middleware, pela rota de pedidos e pelo serviço até a conexão com o banco. Por frente, aparecem o entry point e as camadas HTTP com dois endpoints, a conexão e a migration, um único teste, o workflow de build e a parte de segurança. Há ainda a seção de por onde começar, uma pré-classificação dos riscos por prioridade (crítica, alta ou média) e, no fim, uma ordem de ataque que começa pelo build quebrado e pelos segredos e termina na qualidade da pipeline.

## Para que serve

Com a customização necessária, tanto do que se quer exibir quanto do projeto, a mesma ideia se aplica em vários lugares: manter a documentação atualizada, fazer o onboarding de novas pessoas ou o próprio onboarding em projetos novos.
