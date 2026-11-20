# Necessidades para reformulação e enriquecimento de prompts

## Quando reformular e enriquecer

Na aula anterior, o professor mostrou o caso mais comum: o usuário faz uma pergunta mal feita. Nesta aula, ele lista as situações em que vale interceptar a pergunta do usuário e reescrevê-la antes de mandá-la ao modelo. Cada situação vem com um exemplo de pergunta original e de reformulação.

## Consulta vaga ou ambígua

O usuário escreve algo tão curto ou ambíguo que a IA não consegue lidar bem e devolve um resultado incompleto. Exemplo: o usuário digita só **"Python e LangChain"**. Uma reformulação possível: **"Crie um guia completo explicando como trabalhar com LangChain com Python, do básico ao avançado."**

O que a reformulação fez foi **inferir a intenção** do usuário a partir de poucas palavras. O professor admite que o exemplo é extrapolado, porque em geral o usuário dá um pouco mais de contexto. Ainda assim, entender a intenção já melhora bastante o resultado.

## Falta de contexto relevante

Às vezes a pergunta é clara, mas falta o contexto que permitiria uma resposta assertiva. É o caso do clássico "depende": "o que é melhor, Go ou Python?" só tem resposta quando se conhece o contexto por trás.

Exemplo: **"Como criar uma API em Go?"** A pergunta é clara, mas genérica. Reformulação: **"Explique como desenvolver um CRUD com Golang e disponibilizar endpoints REST utilizando o framework Gin."** (No slide, a pergunta original estava em Python e a reformulação em Go; o professor corrigiu na hora para que as duas ficassem em Go.)

Cada acréscimo tem uma razão:

- **CRUD:** indica que a API terá o conjunto completo de endpoints.
- **REST:** APIs podem usar outros protocolos, então o protocolo precisa ser dito.
- **Framework:** citar um framework comum direciona a resposta.

Dar contexto ajuda muito a IA, e esse contexto pode ser acrescentado na reformulação.

## Alinhar o formato da resposta

Quando a resposta precisa seguir um formato ou padrão, também dá para interceptar a pergunta e reformulá-la para incluir esse formato. Exemplo: **"Explique as regras de negócio desse sistema"** vira **"Faça um resumo das regras de negócio, módulo a módulo, desse sistema, e retorne o resultado em Markdown no formato: Regras de negócio, depois a regra X, depois o conteúdo do resumo."**

A reformulação melhora a pergunta e, ao mesmo tempo, define o formato. O professor observa que, embora Markdown seja muito usado, **JSON** e outras notações de integração entre sistemas vão ser essenciais. O motivo: nem todo sistema que não trabalha com IA entende Markdown, mas JSON, por exemplo, ele consegue processar.

## Minimizar o risco de respostas incorretas

Às vezes é a própria pergunta que induz a IA ao erro. Exemplo: **"Quem criou a linguagem Python em 2012?"** A pergunta parte de uma premissa falsa (Python não foi criado em 2012), "dá um nó na cabeça" da IA e pode fazê-la alucinar.

A reformulação tira a premissa embutida e torna a pergunta específica: **"Quem foi o criador da linguagem Python e em que ano ela foi lançada?"** Assim, o ano passa a ser algo que o modelo precisa responder, e não uma premissa já assumida.

## Buscas semânticas

O professor considera este um dos aspectos mais importantes. Muitas vezes a informação que se quer não está no treinamento da IA: ela está em um **banco de dados**, e é preciso consultá-lo. Essa busca procura relevância nas palavras da pergunta, então, quanto mais informação a pergunta tiver, mais documentos relacionados ela tende a trazer.

Por isso a reformulação, nesse caso, pode:

- acrescentar detalhes à pergunta ou instrução inicial;
- corrigir erros de ortografia;
- expandir sinônimos;
- incluir os termos em inglês junto dos termos em português.

Exemplo: **"esse código está serto em Go"** (com "certo" escrito com S) vira **"Revise o seguinte código na linguagem Go, identifique possíveis bugs, problemas de performance, segurança ou violação, e forneça sugestões de melhoria com exemplos."** A versão nova deixa claro que Go é uma linguagem e cita bugs, performance, segurança e exemplos. Essa riqueza de palavras faz a busca no banco de dados trazer, normalmente, documentos melhores.

## Personalização

O último caso é quando se conhece o contexto, o perfil ou o público do usuário. Exemplo: **"Explique como desenvolver aplicações com IA e Python"** vira **"Explique como desenvolver aplicações com Python para quem nunca teve contato com a linguagem e, a cada exemplo, mostre um comparativo com TypeScript."**

A reformulação só é possível porque o sistema **tem informações do usuário**: sabe que ele nunca trabalhou com Python e que a especialidade dele é TypeScript. Com isso, direciona a IA a fazer um "de-para" entre as duas linguagens.

O professor lembra o que acontece no ChatGPT e em sistemas parecidos: com o tempo, a IA muda o tom, passa a usar nos exemplos a linguagem que você mais pergunta e, em perguntas de localização, responde com base na cidade onde você mora, às vezes até usando o seu nome. Ela faz isso com o que guarda na **memória de longo prazo**, reformulando a pergunta para personalizar a resposta.

## Conclusão: não é só consertar perguntas ruins

Reformular e enriquecer prompts não serve apenas para dar contexto a perguntas mal feitas. Serve também para **personalizar a experiência do usuário**. As situações da aula (consulta vaga, falta de contexto, formato, premissa errada, busca semântica e personalização) indicam quando vale fazer isso.
