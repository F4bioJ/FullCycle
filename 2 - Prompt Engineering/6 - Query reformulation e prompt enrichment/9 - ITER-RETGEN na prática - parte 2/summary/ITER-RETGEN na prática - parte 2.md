# ITER-RETGEN na prática - parte 2

No vídeo anterior, nós conseguimos ter uma ideia geral dos prompts — no final das contas, tudo é prompt. Agora eu vou mostrar para você o programa, como ele funciona. Não quero me aprofundar na linguagem Python; você terá acesso ao repositório e poderá analisar com calma depois. Basicamente, o que fiz aqui foi criar uma chain para cada prompt. Tenho o draft, que pega o prompt, chama o LLM e traz o resultado para mim. Fiz isso para cada um, e agora temos a parte interessante.

Tenho a minha função que vai fazer a iteração, onde recebo a pergunta, o número máximo de iterações (porque não quero que ele fique infinitamente) e o quanto quero que ele considere o trabalho completo. Mas essa informação não vamos usar de forma tão intensa; vamos acompanhar as iterações e quando completamos.

Basicamente, a ideia é a seguinte. Primeiro passo: vou pegar o draft e gerar um draft baseado na pergunta do usuário. Esse draft já contém aqueles missing markers. Vou imprimir para podermos visualizar.

Depois disso, vou contar esses missings para saber quantos existem. Iniciei a quantidade de interações e o progresso como zero, e agora entro em um loop. No loop, na primeira iteração, vou pegar os gaps, ou seja, todas as informações faltantes. Verifico o seguinte: se não houver nenhum gap, significa que o trabalho terminou. Se não houver nenhum gap e eu tiver menos de duas interações, vou pedir para ele expandir. É basicamente isso que estou fazendo para evitar que ele execute tudo de uma vez. Quero algo mais expandido. Expandir significa gerar um novo draft para ter mais gaps faltantes e continuar as iterações.

Quando chegamos na situação onde não há mais gaps, mas apenas uma iteração foi realizada, gero mais gaps para a próxima etapa. Aqui ele trouxe o número da iteração e quais são os gaps que preciso responder agora.

O que farei agora? Vou executar o prompt, pegando o draft e, baseado nas partes que estão com missing, transformar isso em uma pergunta, já com a resposta. Se você observar, peguei o draft com as perguntas e fiz um loop, limitando a no máximo 10. No prompt depois mudei para no máximo 5, para não exagerar. Ele vai enumerar apenas para visualização — isso é um debug. Na realidade, estou gerando as perguntas que preciso.

Por último, o que vou fazer? Vou pegar a pergunta inicial, o draft que foi gerado, as perguntas que criei para resolver os gaps e o número da iteração atual. O fill chain consolida tudo: ele pega as perguntas com as respostas, o draft, a pergunta original e a iteração, e completa os buracos no draft, gerando um novo draft.

Em seguida, verifico se ainda existem gaps. Se houver, mostro o resultado e quantos faltam para concluir. Isso é apenas um debugging para visualização na tela. Não seria necessário todo esse código — eu poderia apenas chamar a função, verificar a iteração e fazer a expansão. O arquivo poderia ser cinco vezes menor. Grande parte das informações serve para manter o tracking e visualizar linha a linha o que está acontecendo.

Aqui está a execução principal. Coloquei a pergunta "explain about LangChain and LangGraph?" — a mesma do exemplo anterior, sem expansão. Ele fará o processo e pedi para trazer estatísticas de tamanho e outras informações.

Essa é a ideia. É complexo? Quando você entende o conceito, não é complexo. O objetivo é "fill in the blanks", tapar os buracos. Grande parte do código está “verboso” para facilitar o tracking, mas não é algo extremamente complexo.

Vamos executar o programa. Vou rodar o Python neste arquivo, e ele vai demorar um pouco porque chamaremos o modelo várias vezes. Obviamente, estamos pagando o custo por isso. Vou deixar rodando enquanto isso.

Ele está processando, mas vou começar do zero com vocês. A pergunta é: "explain about LangChain and LangGraph". Ele trouxe um draft inicial, provavelmente a mesma resposta do exemplo sem expansão: LangChain é um framework, etc. Quando precisamos de detalhes, ele inseriu missing markers: versão específica e data de release, especificações técnicas e parâmetros, métricas de performance benchmark. Ele encontrou cinco gaps de informações faltantes.

Solicitei que ele gerasse perguntas para responder a esses missing markers. Para "Missing Specific Version", ele respondeu que LangChain está na versão 0.12 — valor desatualizado, pois o modelo foi treinado há algum tempo. O importante é entender o fluxo. Para "Missing Technical Specification", ele trouxe a resposta correspondente. Ele itera por todas as perguntas geradas a partir dos dados faltantes.

Ele então gerou uma versão refinada do draft. Observem que, por exemplo, LangChain, na versão 0.12, foi lançado em 15 de 2023 — ele substituiu o missing marker pela resposta. Limitei a quantidade de caracteres para o texto não ficar muito extenso.

Nesta iteração, dos três gaps, ele conseguiu resolver apenas um, provavelmente o da versão. Restaram dois gaps. Ele pega as perguntas restantes, gera respostas e cruza com o draft novamente, verificando se consegue substituir as partes missing. Ele trouxe as informações e gerou outra versão refinada, conseguindo fechar os outros gaps.

Após três iterações, chegamos à versão final do documento. Agora, o documento tem muito mais informações e detalhes do que a versão sem expansão. Se eu pedir 10 missing points, o texto crescerá ainda mais, expandindo cada vez mais as informações.

Baseado na expansão, ele aumentou em quase 100% o tamanho original da resposta. Isso demonstra como, utilizando técnicas de prompt — pois no final, tudo é prompt — podemos encadear resultados: um prompt gera um resultado, que alimenta o próximo, e assim sucessivamente, até chegar à versão final de forma iterativa. Prompt é o que comanda, é o poder quando interagimos com IA, permitindo resultados fantásticos com esses detalhes.

No próximo vídeo, falaremos sobre como enriquecer as perguntas do usuário, diferente deste exemplo que focou em obter uma boa resposta.
