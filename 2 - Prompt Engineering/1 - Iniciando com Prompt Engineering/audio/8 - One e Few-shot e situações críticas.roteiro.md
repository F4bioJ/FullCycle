# One e Few-shot e situações críticas

## Abertura

Na aula passada, vimos o zero-shot: você dá a tarefa e nenhum exemplo. O modelo se vira com o que já sabe.

Hoje damos um passo ao lado. Em vez de só descrever o que queremos, vamos mostrar. Um exemplo, no one-shot. Alguns exemplos, no few-shot.

Parece simples: quanto mais exemplos, melhor. A aula mostra que não é bem assim. Exemplo de menos confunde. Exemplo demais, e mal escolhido, também confunde, e de um jeito mais perigoso: o modelo passa a responder cada hora uma coisa.

Vamos ver por quê. E vamos ver o caso em que isso vira problema de verdade: quando a resposta do modelo dispara uma ação automática.

## One-shot e few-shot

A frase-âncora é esta: one-shot e few-shot ensinam o padrão mostrando pares de entrada e saída.

Pense num estagiário no primeiro dia. Você pode dizer a ele: "escreva os e-mails para clientes de um jeito cordial e curto". Isso é zero-shot. Ou você pode mostrar um e-mail que você mesmo escreveu e dizer: "faça assim". Isso é one-shot. Se mostrar três e-mails, é few-shot.

O estagiário que viu o e-mail pronto acerta o tom, o tamanho e até a forma de despedida, coisas que a sua descrição nunca deixaria tão claras.

É isso que a técnica resolve: controle sobre a forma da saída. Ela brilha quando o formato importa tanto quanto o conteúdo. Formatar um e-mail. Criar um caso de teste novo a partir de um que já existe. Resumir uma notícia no mesmo estilo de outro resumo. Padronizar a documentação de uma API. Criar perguntas no estilo de um quizz de estudo.

Um detalhe importante: o modelo não aprende nada de forma permanente. Os exemplos não treinam o modelo. Eles só valem para aquela conversa, para aquele contexto. Na próxima chamada, se você não mandar os exemplos de novo, é como se nunca tivessem existido.

Repetindo a âncora: one-shot e few-shot ensinam o padrão mostrando pares de entrada e saída. A partir daqui, a pergunta é: o que pode dar errado?

## As limitações

A frase-âncora deste bloco é: o exemplo manda, para o bem e para o mal.

Primeiro, você depende da qualidade do exemplo. Se o e-mail que você mostrou ao estagiário tinha um erro, ele vai copiar o erro com toda a confiança.

Segundo, os exemplos nunca cobrem todas as variações. Você mostrou um e-mail de agradecimento. Amanhã chega uma reclamação furiosa, e o estagiário responde com o mesmo tom alegre.

Terceiro, custo. Cada exemplo é texto a mais no prompt, e texto a mais é token a mais. E como o modelo não guarda nada entre chamadas, você paga esses tokens em toda chamada. Num sistema que roda milhões de vezes por dia, isso pesa. Os exemplos também ocupam espaço na janela de contexto e podem deixar a resposta mais lenta.

Quarto, e este é sutil, o viés. Se os exemplos são rígidos demais, o modelo segue à risca. Imita demais e não inova. Imagine pedir dez casos de teste a partir de um exemplo e receber dez cópias com outros números, todas com a mesma estrutura, nenhuma cobrindo um caso de borda. Ou pedir redações e receber textos que parecem saídos da mesma forma. O modelo copia até o tipo de comentário que o exemplo fazia.

Ou seja: o exemplo manda, para o bem e para o mal. Agora vamos ver isso acontecendo.

## O experimento

O professor monta um script com quatro mensagens e roda tudo no GPT-três-ponto-cinco Turbo, um modelo antigo, sem linha de raciocínio.

Primeira mensagem: um exemplo. "Qual é a capital da França? Paris." Depois: "Qual é a capital do Brasil?". O modelo responde só "Brasília". Sem frase, sem explicação. O exemplo ensinou não só o conteúdo, mas a forma: resposta de uma palavra.

Segunda mensagem: também um exemplo só, mas agora de classificação de logs. "Conexão com o banco de dados perdida, às dez e trinta e quatro", com o rótulo error. E depois: "classifique: uso de disco em oitenta e cinco por cento". A resposta foi... "status". Uma palavra que nem é rótulo. Não faz sentido.

Por que a capital funcionou e o log não? Na capital, a tarefa é óbvia, e o exemplo só precisava mostrar o formato. No log, o exemplo precisava transmitir um critério: o que separa um erro de um alerta? Com um caso só, o modelo não tem como saber onde fica essa fronteira. Então preenche o buraco com um palpite próprio.

Terceira mensagem: quatro exemplos. Conexão com o banco perdida é error. Disco em oitenta e cinco por cento é warning. Tempo de resposta do banco acima do limite, o tal threshold, é warning. Usuário logado com sucesso é info. Pergunta: tempo de resposta da API acima do threshold. Resposta: warning.

Aqui o modelo fez uma analogia direta. Tinha um exemplo quase igual, tempo de resposta acima do limite, e repetiu o rótulo. Poucos exemplos, coerentes entre si, e a decisão ficou estável.

## Exemplos demais

A frase-âncora deste bloco é: mais exemplos não é melhor resposta.

Na quarta mensagem, o professor colocou quinze exemplos. E de propósito plantou ambiguidades. Disco em oitenta e cinco por cento é warning, mas disco em noventa por cento é error. Disco baixo é warning, mas disco com cinco por cento livres é error. Memória em setenta e cinco por cento e latência acima do limite são warning. Tem até um "tempo esgotado, tentando de novo", que pode ser lido como alerta ou como erro, dependendo da aplicação.

A pergunta: uso de CPU em noventa e cinco por cento.

Primeira execução: warning. Roda de novo: error. De novo: error. De novo: warning. O mesmo prompt, a mesma entrada, e a resposta muda.

Por quê? Porque o modelo tem pistas para os dois lados. Uso alto de recurso aparece rotulado como warning em alguns exemplos e como error em outros. Não existe uma regra clara ali dentro. O modelo arbitra entre padrões que competem, e cada execução cai para um lado.

Compare com a mensagem de quatro exemplos. Lá havia uma regra limpa: passou do threshold, é warning. Segundo o professor, com menos exemplos a resposta volta sempre warning.

Pense numa cozinha. Você ensina um ajudante a separar frutas maduras das verdes mostrando três bananas. Ele aprende rápido. Agora você mostra quinze frutas, e algumas quase iguais você classificou de jeitos diferentes, porque naquele dia estava com pressa. O ajudante não sabe mais qual é a regra. Cada fruta nova vira um cara ou coroa.

O professor diz que aprendeu isso na dor, e só depois descobriu que quem estuda o assunto já sabia.

Então os dois extremos falham. Exemplo de menos, e o modelo inventa "status". Exemplo demais e conflitante, e o modelo oscila. Mais exemplos não é melhor resposta.

## Situações críticas

A frase-âncora aqui é: em cenário sensível, o que importa é exemplo consistente, não quantidade.

Imagine que esse classificador alimenta uma automação. Se o log for error, o sistema abre uma issue no GitHub. Se não for, não abre.

Com a resposta oscilando entre warning e error para o mesmo log, o sistema abre issue ao acaso. Hoje abre, amanhã não, para o mesmíssimo evento. Ninguém confia num sistema assim. E o pior: a causa foi justamente o esforço de dar mais exemplos para "ajudar".

Num chat, uma resposta que muda é um incômodo. Numa automação, sem uma pessoa revisando, vira uma decisão errada executada sozinha.

O caminho que a aula aponta é curadoria. Um conjunto pequeno, claro e consistente costuma ser mais seguro do que uma coleção grande com rótulos ambíguos. Tire os pares em que entradas parecidas recebem rótulos diferentes. Escolha os exemplos pela previsibilidade que eles produzem, não pela intuição de que mais contexto sempre ajuda.

De novo: em cenário sensível, o que importa é exemplo consistente, não quantidade.

## Comparando com o que já vimos

Vale separar três coisas que se confundem.

Zero-shot é a tarefa sem exemplo. É barato e funciona bem em perguntas simples, mas dá pouco controle sobre o formato da saída.

One-shot e few-shot acrescentam pares de entrada e saída. Ganham controle sobre a forma, mas pagam em tokens e herdam os defeitos dos exemplos.

Role prompting é definir um papel, como "você é um engenheiro de confiabilidade". O papel muda o estilo, mas não é exemplo. Uma lista de rótulos permitidos, como "responda error, warning ou info", também não é exemplo: é instrução de formato. O que conta como exemplo é o par: "se entrar isto, responda aquilo". Um prompt com papel, lista de rótulos e um único par continua sendo one-shot. As técnicas se combinam.

E dois defeitos que parecem iguais, mas não são. Viés por exemplo rígido gera repetição: o modelo responde sempre igual, mesmo quando você queria variedade. Exemplos conflitantes geram oscilação: o modelo responde diferente para a mesma entrada. Um é estabilidade demais. O outro é estabilidade de menos.

## Revisão

Primeiro, as âncoras. One-shot e few-shot ensinam o padrão mostrando pares de entrada e saída. O exemplo manda, para o bem e para o mal. Mais exemplos não é melhor resposta. Em cenário sensível, o que importa é exemplo consistente, não quantidade.

Agora, quatro perguntas.

Primeira pergunta: no mesmo modelo, por que o one-shot da capital funcionou e o one-shot de logs respondeu "status"?

[pausa 5]

Resposta: na capital, o exemplo só precisava mostrar o formato. No log, precisava transmitir o critério entre os rótulos, e um caso só não delimita essa fronteira.

Segunda pergunta: se você manda os exemplos na primeira chamada, precisa mandá-los de novo na segunda?

[pausa 5]

Resposta: precisa. Os exemplos não treinam o modelo, só valem para aquele contexto. Por isso o custo em tokens se repete em toda chamada.

Terceira pergunta: com quinze exemplos, por que o log de CPU em noventa e cinco por cento saía às vezes warning e às vezes error?

[pausa 5]

Resposta: porque havia exemplos parecidos com rótulos diferentes, como disco em oitenta e cinco por cento como warning e em noventa como error. O modelo tinha pistas para os dois lados e escolhia entre padrões que competiam.

Quarta pergunta: um prompt gera textos sempre com a mesma estrutura, mesmo quando você quer variedade. É viés ou conflito entre exemplos?

[pausa 5]

Resposta: é viés por exemplo rígido. Conflito entre exemplos gera o contrário: respostas diferentes para a mesma entrada.
