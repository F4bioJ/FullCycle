# LayerNorm

## Abertura
Na aula passada, vimos o positional encoding. Era a soma que diz ao Transformer onde cada token está na frase.

Hoje fechamos a parte da arquitetura. São duas peças pequenas, mas sem elas um Transformer grande quase não aprende. A primeira é a conexão residual. A segunda é a LayerNorm, abreviação de Layer Normalization, ou normalização de camada.

Depois desta aula, o curso sai da montagem do modelo e entra no treinamento: pré-treinamento e fine-tuning. Então pense nesta aula como o último aperto de parafuso antes de ligar a máquina.

## O problema das muitas camadas
Frase-âncora: quanto mais camadas empilhadas, mais difícil treinar e mais instável fica a informação que passa entre elas.

Pense na brincadeira do telefone sem fio. Uma pessoa cochicha uma frase para a próxima, que cochicha para a seguinte. Com cinco pessoas, a frase ainda chega parecida. Com cinquenta, chega irreconhecível. Cada pessoa mexeu um pouquinho, e os pouquinhos se acumularam.

Um Transformer de verdade tem muitas camadas, uma depois da outra. Cada camada recebe a informação, transforma e passa adiante. O professor aponta dois sintomas. O primeiro é a dificuldade de treinar por causa da explosão de gradientes, um problema que já apareceu em aulas anteriores. O segundo é que o fluxo de informação entre as camadas perde estabilidade, porque há muita informação trafegando entre elas.

As duas peças de hoje existem para isso. Cada uma cuida de um lado do problema. A conexão residual facilita o fluxo da informação. A LayerNorm estabiliza a distribuição dos dados entre as camadas.

Repetindo a frase-âncora: quanto mais camadas empilhadas, mais difícil treinar e mais instável fica a informação que passa entre elas.

## Conexão residual
Frase-âncora: a conexão residual soma a entrada da camada à saída dela, para que o original nunca se perca.

Volte ao telefone sem fio, agora com uma regra nova. Cada pessoa recebe um papel com a frase original escrita e acrescenta seu comentário embaixo. Ninguém pode apagar o que está escrito. Na pessoa número cinquenta, a frase original continua lá, legível, com os comentários de todo mundo em volta.

A conexão residual faz isso dentro da rede. A informação de entrada pega um atalho e pula a camada. Do outro lado, ela é somada ao que a camada produziu. A conta é simples: a saída é igual à entrada mais o resultado da camada. Em voz alta: saída igual a xis mais efe de xis. Xis é o que entrou. Efe de xis é o que a camada fez com ele.

A intuição do professor é: eu passo a informação original direto para a saída, mas também deixo a camada modificar. A camada continua livre para trabalhar. Só que agora ela não precisa reconstruir tudo do zero. Ela aprende ajustes por cima do original.

E se a camada não ajudar em nada? Se o resultado dela for quase zero, a saída é praticamente a própria entrada. O sinal principal segue para as próximas camadas sem estrago.

O professor chama isso de deixar a entrada perene. Como xis entra sempre na conta, ele vira um dado forte, que não fica mudando a cada camada.

Repetindo: a conexão residual soma a entrada da camada à saída dela, para que o original nunca se perca.

## O efeito no treinamento
Frase-âncora: o atalho também serve na volta, e deixa o gradiente fluir pelo backpropagation.

Lembre como a rede aprende. Primeiro a informação vai para a frente, camada por camada, até a resposta. Depois o erro volta, do fim para o começo, ajustando os pesos de cada camada. Essa volta é o backpropagation, ou retropropagação.

Numa rede muito funda, essa volta é longa. O sinal do erro atravessa camada atrás de camada. Imagine uma escada enorme em que o recado tem de descer degrau por degrau. Com o atalho da conexão residual, existe também um corrimão que leva o recado mais direto. O gradiente não depende só da longa cadeia de transformações.

O professor cita dois ganhos. O primeiro: a rede preserva as informações importantes, aquelas que não precisam ser transformadas, sem tirar da camada o espaço para transformá-las se valer a pena. O segundo: a convergência do treinamento acelera muito. Treinar uma LLM fica bem mais fácil do que sem essa estratégia.

Repetindo: o atalho também serve na volta, e deixa o gradiente fluir pelo backpropagation.

## LayerNorm
Frase-âncora: a LayerNorm não muda o que a camada faz; ela mantém os valores numa faixa estável entre uma camada e outra.

Pense numa playlist misturada. Uma música foi gravada baixinho, a seguinte estoura no ouvido, a outra volta a sussurrar. Você passa o passeio mexendo no volume. O player tem uma opção de normalizar o volume. Ela não muda as músicas. Só deixa todas num nível parecido.

A LayerNorm é essa normalização dentro do Transformer. Ela não mexe na lógica da atenção nem do feedforward. Ela controla a escala e o comportamento estatístico dos valores que saem de uma camada, para que a próxima receba algo previsível. O ganho é estabilidade numérica e menos bagunça no sinal que circula pela rede. O professor resume dizendo que ela diminui um pouco a entropia gerada, no sentido informal de desordem.

Onde a LayerNorm sozinha não basta? Ela arruma o volume, mas não cria atalho nenhum. Se você tirar a conexão residual e deixar só a LayerNorm, os valores ficam comportados, mas o original deixa de seguir adiante e o gradiente perde o caminho direto. O treino volta a ficar difícil.

Repetindo: a LayerNorm não muda o que a camada faz; ela mantém os valores numa faixa estável entre uma camada e outra.

## As duas juntas e o próximo passo
Frase-âncora: o residual transporta a informação; a LayerNorm estabiliza como ela chega.

As duas peças são complementares. A conexão residual preserva e carrega a informação através da profundidade da rede. A LayerNorm cuida para que essa informação chegue à próxima etapa num formato estável. Juntas, elas tornam possível empilhar muitas camadas e escalar o Transformer até virar uma LLM.

E aqui termina a montagem. Atenção, feedforward, positional encoding, conexão residual e LayerNorm formam a arquitetura. Mas uma arquitetura recém-montada ainda não sabe nada. É uma estrutura vazia. O conhecimento vem do treinamento, e esse é o assunto da próxima aula: o pré-treinamento. Depois, o fine-tuning.

## Comparando com os vizinhos
Três somas parecidas podem confundir. Vale separar.

Primeira comparação: positional encoding contra conexão residual. As duas são somas. O positional encoding soma ao embedding do token um vetor de posição, na entrada do modelo, para dizer onde o token está. A conexão residual soma a entrada de cada camada à saída dela, para não perder o original no caminho. Uma informa a posição. A outra preserva o sinal.

Segunda comparação: conexão residual contra LayerNorm. O residual é um atalho, uma soma. A LayerNorm é um ajuste de escala. Uma não substitui a outra. Se você trocar os papéis na cabeça, lembre do papel com a frase original e da playlist com o volume normalizado.

Terceira comparação: o problema de gradiente nas RNNs, as redes neurais recorrentes, contra o problema de hoje. Na RNN, o sinal atravessava muitos passos no tempo, um token depois do outro. No Transformer, o processamento é em paralelo, mas o sinal atravessa muitas camadas empilhadas. A dificuldade de levar o gradiente de volta reaparece, agora na profundidade. É ela que a conexão residual ataca.

## Revisão
Primeiro, as frases-âncora em sequência.

Quanto mais camadas empilhadas, mais difícil treinar e mais instável fica a informação que passa entre elas.

A conexão residual soma a entrada da camada à saída dela, para que o original nunca se perca.

O atalho também serve na volta, e deixa o gradiente fluir pelo backpropagation.

A LayerNorm não muda o que a camada faz; ela mantém os valores numa faixa estável entre uma camada e outra.

O residual transporta a informação; a LayerNorm estabiliza como ela chega.

Agora, algumas perguntas.

Primeira pergunta: se uma camada quase não contribui, e o resultado dela fica perto de zero, o que chega à camada seguinte quando existe conexão residual?

[pausa 5]

Resposta: praticamente a própria entrada. A saída é a entrada mais o resultado da camada. Se o resultado é quase zero, sobra a entrada.

Segunda pergunta: por que a conexão residual ajuda no backpropagation?

[pausa 5]

Resposta: porque o atalho dá ao gradiente um caminho de volta que não depende só da longa cadeia de camadas. O fluxo fica mais fluido e o treino converge mais rápido.

Terceira pergunta: os valores ficam ora muito grandes, ora muito pequenos ao longo da rede. Qual das duas peças ataca isso?

[pausa 5]

Resposta: a LayerNorm. Ela estabiliza a distribuição dos valores, como a normalização de volume de uma playlist.

Quarta pergunta: qual a diferença entre a soma do positional encoding e a soma da conexão residual?

[pausa 5]

Resposta: o positional encoding soma a posição ao embedding, na entrada. A conexão residual soma a entrada de cada camada à saída dela, para preservar o sinal.

Quinta pergunta: um Transformer com todas essas camadas montadas já sabe responder perguntas?

[pausa 5]

Resposta: não. É só a arquitetura. Ainda faltam o pré-treinamento e o fine-tuning, que começam na próxima aula.
