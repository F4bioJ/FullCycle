# Evaluation trigger — resumo

A aula continua a trilha de avaliações e volta à avaliação da description, também chamada de **trigger**, que tinha ficado pela metade na aula anterior. No fim, o professor explica como funciona por dentro o processo de teste que o Skill Creator faz.

## Onde a trilha parou

A skill de partida era super simples e muito mal feita. A avaliação começou pela description, mas o resultado mostrou que a skill precisava ser reescrita por inteiro. O processo de avaliação da description chegou a acontecer, mas foi pausado para a reescrita. A versão nova já tem as referências de antipatterns e rodou na avaliação de **qualidade**, para a qual foram gerados alguns inputs com queries SQL. Agora o professor retoma rapidamente a avaliação da description para ver qual será o resultado.

## Um workspace novo e o pedido ao Skill Creator

O professor excluiu o workspace usado antes, só para gerar um novo e trabalhar em cima do trigger. Ao rodar o Skill Creator, a tool AskUser pergunta o que se deseja fazer. Ele responde que quer **otimizar a descrição**, e o Skill Creator inicia o processo de avaliação voltado especificamente para otimizar o trigger.

## A revisão das queries no browser

O Skill Creator abre uma página web com os itens, para escolher o que testar ou não. Dá para incluir e excluir itens como achar que deve ser feito; o botão Add Query faz as inclusões. Nesse primeiro momento o professor não mexe em nada nas queries: mantém o que já está lá e pede para o processo continuar.

## O loop em background e a autocorreção

O loop roda em background, e dá para acompanhar o andamento expandindo a saída no VS Code. Depois de cerca de dois minutos sai o resultado. No caminho, o Skill Creator identificou um erro da versão do Claude Code que o professor usa: ao gerar o teste, acrescentava um hash ao nome da skill, e assim ela não era encontrada. Ele se autocorrigiu e conseguiu medir.

## O resultado: 100% nas três métricas

A medição deu **accuracy**, **recall** e **precision** de 100%. Para o professor, isso quer dizer que a descrição está muito boa. A decisão registrada pelo Skill Creator foi que a descrição já estava ótima e nada foi alterado.

## O relatório HTML do trigger

Assim como fez na avaliação de qualidade, o Skill Creator gera um HTML, agora focado no trigger e na otimização da descrição. O professor pediu duas versões para facilitar a explicação:

- **Versão padrão:** mostra a description original, que está na skill hoje, e a versão do processo de auto-otimização. Nesse caso, as duas são praticamente iguais. Abaixo vêm os dados de teste.
- **Versão remodelada**, pedida para visualizar melhor os testes: a medição, a description e uma legenda, com verde para **should trigger** (deve disparar) e vermelho para **should not trigger** (não deve disparar). Os itens aparecem separados em treino e teste, com o resultado esperado de cada item do dataset, o que foi executado, como e qual foi o resultado.

## Dois caminhos para usar o Skill Creator

O professor tira daí que dá para fazer bastante coisa com o Skill Creator:

- **Caminho mais padrão:** usar a skill para aquilo que ela foi feita, que é avaliar, testar e viabilizar versões novas da sua skill a partir do que você já produziu.
- **Bússola:** usar a evaluation para entender os pontos de melhoria e saber aonde se quer chegar. É o caso de "tenho essa skill e não sei se ela está indo de acordo com o que eu quero": com base no resultado, você vai corrigindo junto, com os comandos que passa para a CLI.

## Como funciona o teste: treino e holdout

Primeiro vem o dataset, e o Skill Creator o separa em dois grupos. Ao longo do processo aparece o termo **holdout**, que o professor descreve como um termo de metodologia de validação técnica, usado no desenvolvimento e na validação das skills:

- **Conjunto de treinamento:** cerca de 60% dos dados.
- **Conjunto de teste (holdout):** os outros 40%, guardados de forma totalmente separada. Num primeiro momento não são usados nem vistos.

O holdout entra num segundo momento, para testar se as alterações aplicadas no loop de avaliação fazem sentido. Com isso se confere que o agente realmente compreendeu a habilidade testada e consegue lidar com situações novas com a devida precisão.

Para o professor, é um sistema bem inteligente: faz o teste com base no que já existe, roda a otimização, pega o restante do dataset e faz uma nova rodada de teste, e assim sucessivamente, até concluir que há um match melhor entre trigger e description.

## Quando parar o loop

Dá para ficar nesse loop eternamente. Por isso a ideia é manter algumas **métricas básicas** e buscar atingi-las.

## O resultado depende do modelo e do harness

Tudo o que foi mostrado usa um harness, o Claude Code, e um modelo da Anthropic. O professor recomenda fazer os testes de acordo com a CLI e o modelo que você usa, porque modelos diferentes têm respostas e atuações diferentes. Para ele, a avaliação é um mundo totalmente novo: o resultado muda muito conforme o modelo, a versão e o harness, e isso deve ser levado em conta ao criar as skills.
