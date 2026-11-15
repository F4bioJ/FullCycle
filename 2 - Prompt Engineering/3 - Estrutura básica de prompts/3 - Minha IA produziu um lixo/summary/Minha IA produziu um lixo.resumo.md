# Minha IA produziu um lixo — resumo

## A frustração: "o código que a IA gerou é um lixo"

O professor parte de uma conversa com desenvolvedores frustrados com a IA. Um colega trabalhava numa aplicação front-end com muitas versões da mesma tecnologia: a IA misturava APIs de versões novas e antigas, as mudanças de interface eram sensíveis, e o resultado, nas palavras dele, era "um lixo". Ele tentou várias vezes e o código continuou ruim. O professor reconhece a frustração como legítima: há um problema de expectativa, porque se pede algo e a IA não entrega do jeito esperado.

## Code Review de um lixo

A resposta do professor foi outra pergunta: se o código é mesmo um lixo, vamos fazer o Code Review desse lixo. Em vez de repetir a tentativa, mapeiam-se as falhas concretas:

- usou bibliotecas e funções antigas;
- criou arquivos muito grandes;
- gerou funções desnecessárias;
- ao ser interrompida no meio de um arquivo para corrigir o rumo, ajustou o que foi pedido e largou o arquivo anterior pela metade, deixando um bug;
- mudou padrões dos arquivos do projeto.

Diante disso há duas posturas. A primeira é xingar, refazer do seu jeito ou tentar de novo, gastando tempo sem melhorar o resultado. A segunda é tratar a IA como um colega de trabalho que está fazendo o melhor que pode e precisa de orientação.

## Cada falha vira uma guideline

O Code Review vira instrução para a IA:

- **Biblioteca antiga:** mostrar o import errado (`from x import y`) e o certo (`from x import j`) e explicar que, em casos parecidos, ela deve fazer essa correspondência. Somar uma instrução: antes de importar um pacote daquela família ou versão, pesquisar a documentação (na web, no Context 7 ou onde for) e garantir a versão mais recente. Isso não garante que o erro nunca volte, mas a IA passa a ter uma informação que não tinha; se o erro reaparecer, dá para restringir ainda mais.
- **Arquivos grandes:** uma guideline como "não crie arquivos com mais de 100 linhas; trabalhe com funções limpas e, se necessário, crie arquivos e interfaces para melhorar a compreensão".
- **Funções desnecessárias:** "após criar qualquer função, revisite e veja se ela é realmente necessária ou se já existe algo similar implementado".
- **Arquivo abandonado ao ser interrompida:** duas opções de regra: "termine a implementação do arquivo atual e depois siga as minhas instruções" ou "corrija isso e não esqueça de voltar e continuar de onde parou". Algumas IDEs já colocam as mensagens numa fila para evitar o problema, mas ainda assim ele pode acontecer.

## A IA como funcionário novo

A recomendação é documentar para a IA, em vez de passar raiva, sempre que ela gerar algo que não agrade. A IA é como um funcionário no primeiro dia, que ainda não conhece a empresa; e cada chat novo é um funcionário que acabou de chegar. Se as regras estiverem documentadas, o funcionário seguinte já chega sabendo delas, e os erros diminuem. O professor é explícito: ele nunca vai dizer que esses erros não voltam mais, porque não é assim que funciona, mas eles são minimizados. Ao longo do projeto, esse conjunto de regras vira um ativo.

## As técnicas de prompt que aparecem no dia a dia

Mesmo nesses ajustes do cotidiano, várias técnicas já estudadas aparecem:

- **Few-shot:** o par de imports errado e certo é um conjunto de exemplos que a IA pode copiar e transpor para outro trabalho.
- **Chain of thought:** "após criar qualquer função, revisite se ela foi necessária" gera uma linha de pensamento que encadeia o próximo passo.
- **Skeleton of thoughts:** quando o few-shot traz como exemplo a própria saída desejada, o prompt fica mais específico sobre o formato da saída.

## Estrutura para não virar bagunça

O problema é criar esses arquivos e prompts de forma desestruturada. O professor compara com testes automatizados: eles precisam ser claros e legíveis porque crescem com o tempo. A base de conhecimento passada à IA também cresce; sem uma estrutura clara e sem entender com intenção o tipo de prompt necessário, o arquivo fica insustentável e gera mais ambiguidade. Às vezes, mais informação gera mais ambiguidade, e a IA passa a fazer coisas piores do que com menos informação.

## Limites e comportamento

A conclusão dos dois exemplos (a correção de bug da aula anterior e este) é que, quando a IA gera algo inesperado, é porque não foram definidos os limites e o comportamento. A saída ruim é a de um funcionário no dia 1, que fez do jeito que imaginava e precisa ser treinado.

## Além do workflow de desenvolvimento

A estruturação de prompts não serve só para o desenvolvimento: também vale para agentes que processam informação para um cliente final, para explorar novas possibilidades e para gerar documentos. Sem uma estrutura clara, o resultado não vem. Ainda assim, nenhuma estratégia de estruturação resolve todos os problemas; as próximas aulas apresentam várias, para testar e praticar.
