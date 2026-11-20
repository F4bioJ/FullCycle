# Necessidades para reformulação e enriquecimento de prompts

Como eu falei no vídeo anterior, a nossa ideia aqui é entender quais são as estratégias que precisamos para trabalhar de uma forma melhor quando temos algumas situações com os usuários. No vídeo anterior eu mencionei uma situação que é muito comum, mas existem outros aspectos que também podem influenciar a forma como vamos trabalhar.

Então, o primeiro ponto é exatamente o que eu mencionei. O usuário faz uma consulta muito vaga ou ambígua, onde a IA não consegue lidar bem com isso e acaba não trazendo os resultados que queremos, completos e adequados. Vamos imaginar que o usuário escreve apenas: Python e LangChain. O que isso vai representar no final das contas quando você coloca isso em um LLM?

Eu poderia fazer uma reformulação dessa pergunta como algo do tipo: crie um guia completo explicando como trabalhar com LangChain utilizando Python, do básico ao avançado. Se você perceber, eu peguei Python e LangChain e tentei inferir o que o usuário estava querendo saber. Esse é um exemplo mais extrapolado, porque normalmente conseguimos receber um pouco mais de contexto.

Ainda assim, se você consegue entender a intenção do usuário, já é possível melhorar bastante esse tipo de situação. Outra situação que também acontece é quando temos falta de contexto relevante. Às vezes o usuário quer perguntar algo, mas sabe quando surge aquele clássico depende? Por exemplo, o que é melhor, Go ou Python? A resposta normalmente será depende, porque precisamos entender o contexto por trás.

Muitas vezes acontece a mesma coisa. O usuário não adiciona no prompt as informações ou os contextos importantes para que o modelo consiga responder de forma mais assertiva. Um exemplo seria: como criar uma API em Python? Apesar de parecer uma pergunta clara, ainda é algo genérico, porque não sabemos exatamente o motivo ou o contexto da criação dessa API.

Então podemos melhorar essa pergunta. Por exemplo: explique como desenvolver um CRUD em Golang e disponibilizar endpoints REST utilizando o framework Gin. Se você perceber, eu melhorei a pergunta. Ao falar de criação de API, já inseri o conceito de CRUD para indicar que a API terá todos os endpoints necessários.

Também especifiquei que a API utilizará REST, porque APIs podem ser criadas utilizando outros protocolos. Além disso, mencionei um framework muito comum utilizado nesse contexto. Ou seja, adicionar contexto ajuda muito para que a IA consiga trabalhar melhor, e você pode realizar esse tipo de reformulação.

Outra coisa interessante é alinhar o formato da resposta. Muitas vezes precisamos que a resposta venha em um determinado formato ou padrão. Nesse caso, também podemos interceptar a pergunta do usuário e reformulá-la para garantir que a resposta venha estruturada da forma desejada.

Por exemplo: explique as regras de negócio desse sistema. Uma reformulação possível seria: faça um resumo das regras de negócio, módulo a módulo desse sistema, e retorne o resultado utilizando Markdown no seguinte formato: regras de negócio, depois a regra X, e em seguida o conteúdo do resumo.

Se você perceber, o que eu fiz foi reformular a pergunta e, ao mesmo tempo, definir o formato da resposta. Com o tempo você vai perceber que, apesar de gostarmos muito de Markdown, trabalhar com JSON ou outras notações estruturadas que usamos para integração entre sistemas acaba sendo essencial. Isso acontece porque nem todo sistema que não trabalha com IA consegue entender Markdown, mas JSON, por exemplo, consegue.

Então, nós temos esses tipos de situação. Outro ponto importante também é conseguir minimizar riscos de respostas incorretas. Como assim? Às vezes acabamos induzindo a IA a responder de forma errada. Por exemplo: quem criou a linguagem Python em 2012? Aqui temos, na realidade, uma pergunta que pode dar um nó na cabeça da IA e muitas vezes fazê-la alucinar.

O que acontece nesse caso é que a pergunta já traz uma premissa incorreta, pois Python não foi criado em 2012. Então, para evitar esse tipo de ambiguidade, podemos reformular a pergunta para algo como: quem foi o criador da linguagem Python e em que ano ela foi lançada? Dessa forma conseguimos deixar a pergunta muito mais específica.

Também temos situações relacionadas à realização de buscas semânticas. Esse é um dos aspectos mais importantes. Muitas vezes as perguntas que queremos fazer não estão treinadas diretamente na IA. Elas precisam estar em um determinado banco de dados e, para fazer essa consulta, quanto mais informação tivermos, mais documentos relacionados àquela pergunta conseguiremos recuperar.

Nesse caso podemos fazer com que a pergunta ou a instrução inicial do usuário traga mais detalhes. Podemos corrigir erros de ortografia, expandir sinônimos e enriquecer o texto. Isso acontece porque normalmente esses tipos de pesquisa vão consultar um banco de dados tentando encontrar relevância nas informações presentes na pergunta.

Então, quando reformulamos a pergunta incluindo mais sinônimos, às vezes adicionando termos em inglês, utilizando os mesmos termos em português e corrigindo detalhes de escrita, aumentamos a chance de recuperar documentos muito mais relevantes. Imagine, por exemplo, que alguém escreve: esse código está certo em Go, ainda com a palavra “certo” escrita com S.

Nesse caso podemos reformular para algo como: revise o seguinte código na linguagem Go, identifique possíveis bugs, problemas de performance, segurança ou violações, e forneça sugestões de melhoria com exemplos. Se você perceber, nessa reformulação eu já mencionei que Go é uma linguagem, falei de bugs, performance, segurança e pedi exemplos.

Tudo isso faz com que, ao buscar informações em um banco de dados, a quantidade e a riqueza de palavras presentes no prompt aumentem, trazendo normalmente documentos muito mais relevantes. O último ponto que quero abordar neste vídeo, para não deixá-lo muito longo, é a personalização.

Ou seja, quando existe conhecimento sobre contexto, perfil, público e outros detalhes que podem ajudar no resultado da pergunta. Por exemplo: explique como desenvolver aplicações com IA e Python. Podemos reformular para algo como: explique como desenvolver aplicações com Python para quem nunca teve contato com a linguagem e, a cada exemplo, mostre um comparativo com TypeScript.

Por que inserir essas informações? Porque podemos imaginar que, nesse momento, temos dados sobre o usuário. Sabemos que ele nunca trabalhou com Python e sabemos que sua especialidade é TypeScript. Tendo essas informações, conseguimos reformular o prompt para direcionar a IA a fazer um paralelo entre Python e TypeScript.

Provavelmente você utiliza o ChatGPT ou algum outro sistema de IA no dia a dia. Se perceber, cada vez mais o tom da IA ao conversar com você muda. Ela passa a saber mais sobre sua rotina, entende onde você mora e quais linguagens de programação você costuma utilizar como exemplo.

Naturalmente, os resultados que você começa a receber da IA passam a refletir essas informações. Quando você pergunta sobre programação, normalmente as respostas passam a usar a linguagem que você mais consulta. Quando pergunta sobre localização, as respostas podem trazer informações relacionadas à cidade onde você mora.

Ou seja, a IA consegue personalizar as informações que vai retornar. Ela faz isso utilizando dados que possui em sua memória de longo prazo e, com isso, consegue reformular as perguntas para que você receba respostas extremamente personalizadas, muitas vezes até utilizando o nome da pessoa ou outras informações contextuais.

Então perceba que não se trata apenas de dar contexto para perguntas mal formuladas, mas também de adicionar contexto para personalizar a experiência do usuário. Esses são alguns pontos importantes para entendermos quando devemos reformular e enriquecer prompts.
