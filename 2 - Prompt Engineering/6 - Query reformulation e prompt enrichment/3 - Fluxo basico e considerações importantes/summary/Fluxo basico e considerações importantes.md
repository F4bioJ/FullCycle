# Fluxo basico e considerações importantes

Então vamos entender agora, rapidamente, o fluxo bem básico que acontece nesse processo. Caso você não tenha captado totalmente a ideia do que eu acabei de explicar, isso aqui ajuda a tangibilizar um pouco melhor. Vamos imaginar que o usuário faz uma solicitação para a LLM, mas essa solicitação não vai diretamente para a LLM que dará a resposta final.

Ela primeiro vai para uma LLM responsável por enriquecer a solicitação. Uma vez que essa solicitação foi enriquecida, ela será enviada para o modelo que realmente vai responder à pergunta. Depois disso, a resposta final é retornada novamente para o usuário. Esse é apenas um fluxo básico para facilitar o entendimento.

Agora, por que estou falando de dois LLMs aqui? Porque, normalmente, quem enriquece a pergunta é um modelo menor, mais barato e mais rápido, utilizado apenas para realizar esse tipo de processamento. Já o modelo que vai gerar a resposta final costuma ser um modelo mais robusto, que precisa ter acesso a mais dados ou a informações externas.

Então temos essas duas etapas principais que formam esse fluxo. Um ponto importante para você entender é que, dependendo da situação, existem casos em que é possível armazenar em cache perguntas que são frequentemente feitas pelos usuários. Muitas pessoas fazem isso para economizar custos, o que pode fazer bastante sentido dependendo do contexto.

Nesse caso, a reformulação pode ser baseada em palavras-chave. Quando você percebe que o usuário fez determinadas perguntas contendo algumas palavras-chave específicas, você pode buscar essas informações em um cache. Se essas palavras existirem, é possível concatenar algum contexto baseado nelas e gerar uma instrução mais completa para a IA.

Dessa forma, você elimina a necessidade de chamar um modelo para fazer o enriquecimento. Obviamente, o resultado não será tão refinado quanto quando utilizamos um LLM para enriquecer a pergunta, mas você economiza bastante em custo e tempo de processamento. Por isso, tudo depende do contexto em que você está trabalhando.

Sempre que eu vou criar qualquer coisa utilizando IA, a primeira coisa em que penso é quantas chamadas eu vou fazer ao modelo. Quanto mais chamadas forem feitas, mais caro o processo ficará e também mais lento ele será. No desenvolvimento tradicional de APIs, estamos acostumados com respostas em 10, 20, 50 ou 150 milissegundos.

No entanto, quando trabalhamos com IA, somente a etapa de enriquecimento já pode levar três, quatro ou cinco segundos. A geração da resposta final pode levar até 60 segundos. Ou seja, a arquitetura e a forma de trabalhar mudam completamente quando utilizamos IA.

Quanto menos camadas você tiver nesse processo, melhor, porque o sistema tende a ficar mais rápido e mais barato. Isso significa que você não precisa necessariamente utilizar um LLM para fazer enriquecimento em todos os casos. Também não precisa chamar um LLM sempre que tiver perguntas frequentes.

Você pode capturar determinados padrões de pergunta ou palavras-chave e buscar respostas em um cache já preparado, retornando esse resultado diretamente em vez de processar tudo novamente. Essa é uma das estratégias mais importantes para evitar uma abordagem ingênua de chamar o modelo a todo momento.

Toda vez que você chama um modelo, existe mais latência e mais custo. Por isso, é importante pensar cuidadosamente na arquitetura da solução. O enriquecimento é importante porque muitas vezes ele ajuda o usuário a fazer apenas uma pergunta para obter a resposta correta.

Se o usuário precisar perguntar novamente, isso significa mais tokens e mais custo. Muitas vezes vale mais a pena investir no enriquecimento da pergunta para garantir que a resposta seja adequada logo na primeira tentativa. E quando falo usuário, isso pode ser outra IA, uma integração entre sistemas ou qualquer outro tipo de consumidor da API.

O que precisamos, muitas vezes, são informações suficientes para responder corretamente. Quando não temos essas informações, precisamos repetir a busca ou executar um retry, e isso acaba gerando mais consumo de tokens e mais custo. Por isso, esse processo costuma ser subestimado.

Também é importante entender que não existe apenas esse tipo de interceptação. Existem interceptações de segurança, interceptações antes da execução de uma ferramenta, depois da execução de uma ferramenta, antes de chamar o modelo e depois de chamar o modelo. Ou seja, não é algo simples, mas tudo começa com esse tipo de abordagem.
