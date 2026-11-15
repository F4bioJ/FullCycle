# Encoder-only

## Abertura
Nas últimas aulas, a gente mexeu nos controles da geração: temperatura, top-k, top-p. Todos eles decidem como um modelo escolhe a próxima palavra.

Hoje a pergunta muda. E quando a gente não quer gerar nada? Quando a gente só quer que o modelo leia um texto e entenda?

É aí que entra o encoder-only, o modelo que tem apenas o codificador. Esta aula não traz tanta novidade. Ela pega peças que você já viu, como a atenção, os tokens e o mascaramento, e coloca cada uma na sua caixinha.

Guarde a frase de hoje: o encoder-only lê, ele não escreve.

## Por que o Transformer foi dividido
A frase deste bloco é: o Transformer completo é pesado, e muitas tarefas precisam só de uma das metades.

Quando o Transformer apareceu, em dois mil e dezessete, ele trouxe duas metades juntas. O encoder lê a entrada. O decoder produz a saída. Com isso, o modelo já não dependia da ordem rígida das redes recorrentes, as RNNs.

Pense numa cozinha industrial completa. Se você só quer fatiar legumes, não precisa ligar o forno, a fritadeira e a lava-louças. Precisa de uma tábua e uma faca.

Foi essa a ideia. Em certas tarefas, dá para quebrar o modelo e ficar com um pedaço só. Daí saem três arquiteturas: só encoder, só decoder, e os dois juntos.

O que isso resolve é o custo. Você deixa de pagar por uma metade que não usa.

Onde isso quebra? Quando a tarefa pede justamente a metade que você tirou.

E isso leva à pergunta seguinte: o que sobra quando só o encoder fica?

## Compreender, não gerar
A frase é: o encoder-only lê, ele não escreve.

Ele foi feito para tarefas que não pedem um texto novo e longo, mas pedem que se entenda um texto longo. Classificar um documento. Extrair informações. Transformar uma frase em vetor.

Pense num revisor de uma editora. Ele lê o manuscrito inteiro e diz: isto é um romance, este outro é sobre medicina. Faz isso rápido e bem. Agora peça a ele o próximo capítulo do livro. Não é o trabalho dele.

O ganho é prático: nessas tarefas de leitura, o modelo sai mais leve, mais rápido e mais barato.

O limite está na fronteira entre ler e criar. Se você precisa classificar um texto e, com isso, escrever outro, ele não é a melhor escolha.

O encoder-only lê, ele não escreve. E o primeiro grande leitor dessa família tem nome.

## Bert, o leitor
A frase é: o Bert não quer o próximo token, ele quer entender a entrada inteira.

Bert é a sigla de Bidirectional Encoder Representations from Transformers. O Google lançou esse modelo em dois mil e dezoito, logo depois do Transformer. Foi o primeiro encoder-only.

Compare dois leitores de um romance policial. O primeiro lê uma frase e tenta adivinhar a seguinte. O segundo recebe a página inteira e depois explica o que está acontecendo nela. O Bert é o segundo.

Isso resolve uma limitação dos modelos geradores: eles estão sempre olhando para o que vem em seguida. O Bert pode se concentrar em entender.

O preço é que ele não foi treinado para continuar textos. É mais leitor do que criador.

Mas como ele consegue ler a página inteira de uma vez? Pela atenção.

## Atenção bidirecional
A frase é: cada token olha para os dois lados.

Na atenção bidirecional, o modelo vê a sentença inteira ao mesmo tempo. Cada token calcula quanto importam os tokens à esquerda e também os tokens à direita.

Pense na frase: o cabo da vassoura quebrou. Quando você chega em "cabo", ainda não sabe de que cabo se trata. Pode ser um cabo do exército ou um cabo de energia. É a palavra "vassoura", que vem depois, que resolve a dúvida. O Bert consegue usar essa pista porque olha para frente também.

Um modelo gerador como o G P T faz diferente. Ele parte do passado para gerar o futuro. E faz sentido: o que estaria à direita ainda não existe, é o que ele está tentando escrever.

Aí está o limite da bidirecionalidade. Ela exige que o texto já esteja pronto. Serve para ler, não para criar.

Cada token olha para os dois lados. Agora vamos seguir o caminho completo de um texto dentro do modelo.

## Da entrada à saída contextualizada
A frase é: ao final de cada camada, cada token já carrega o contexto.

O começo é igual ao de qualquer modelo de linguagem. O texto vira tokens. Os tokens viram vetores. E cada um recebe uma marca de posição, como uma senha numa fila, porque a ordem importa.

Depois vem a atenção bidirecional. Cada token consulta os outros e o modelo calcula a importância relativa entre eles. Ao final de cada camada, o vetor de cada token já tem dentro de si essa importância.

Imagine uma reunião. Cada pessoa chega com a própria opinião. Depois de ouvir as outras, ainda é a mesma pessoa, mas a opinião já absorveu o que ouviu. É o que acontece com cada token: ele sai da camada carregando o significado que tem naquele texto.

Isso resolve um problema antigo: a mesma palavra pode valer coisas diferentes em frases diferentes.

Essa saída, porém, é uma representação. Não é um texto pronto. Alguma tarefa precisa usá-la, e veremos quais são. Antes, falta saber como esse leitor é treinado.

## O treinamento por mascaramento
A frase é: mascarar é tapar buracos usando os dois lados.

No treino do Bert, algumas palavras são escondidas, e o modelo precisa descobrir quais eram, olhando para o contexto completo. O nome disso é Masked Language Modeling. Você já viu essa ideia em outra aula.

Pense num exercício de escola: a criança, lacuna, o sorvete no chão. Para preencher, você usa "criança", que vem antes, e também "sorvete no chão", que vem depois. Sem os dois lados, fica muito mais difícil.

O que isso resolve é o treino da compreensão. Ninguém precisa dizer ao modelo o que cada frase significa. Ele aprende tentando tapar os buracos.

Onde isso quebra? Tapar um buraco não é escrever um texto inteiro. Por isso, o resultado é um modelo que entende mais do que cria.

Com o leitor treinado, vamos ao que ele faz no dia a dia.

## Sentimentos e entidades
A frase é: sentimento rotula o texto, entidades separam pedaços dele.

Primeiro, a classificação de sentimentos. Imagine as ligações do atendimento de uma empresa, já convertidas em texto. O modelo pode dizer se o cliente está atritado. O mesmo vale para uma análise de satisfação mais inteligente, ou para saber como as redes sociais falam do seu produto. Em todos esses casos, a saída é uma avaliação sobre o texto.

Agora, o reconhecimento de entidades nomeadas. Pegue a frase: Steve Jobs fundou a Apple em Cupertino. O modelo marca Steve Jobs como pessoa, Apple como organização e Cupertino como local. Aqui, a saída não é sobre o texto inteiro, é sobre pedaços dele. Isso ajuda no preenchimento automático e na organização de grandes volumes de dados.

O cuidado é escolher a tarefa certa. Se você quer os nomes que estão dentro de um contrato, um rótulo geral sobre o contrato não vai ajudar.

Sentimento rotula o texto, entidades separam pedaços dele. Mas há um terceiro uso, talvez o mais importante para o resto do curso.

## Busca semântica e similaridade
A frase é: a busca semântica compara significado, não palavra.

O encoder transforma um texto em um vetor de significado. Na busca, a consulta vira vetor, os textos dos documentos também viram vetores, e o sistema procura os mais parecidos.

Pense em duas frases: como trocar a senha, e como recuperar o acesso à minha conta. Elas têm poucas palavras em comum, mas falam de assuntos muito próximos. Uma busca por palavra pode não ligar uma à outra. Uma busca por vetor pode.

É esse o papel dos embeddings para similaridade: textos de sentido parecido ganham vetores parecidos, mesmo escritos de formas diferentes.

Isso resolve o problema de depender do termo exato usado por quem escreveu o documento.

O limite é que os dois lados precisam estar em vetores. Se só a consulta foi convertida, não há com o que comparar.

A busca semântica compara significado, não palavra. Para fechar a parte técnica, vamos conhecer os parentes do Bert.

## A família Bert
A frase é: Roberta treina mais, Distil Bert encolhe, Albert compartilha.

O professor cita esses nomes para você os reconhecer. É só para conhecimento, mas mostra bem as trocas possíveis.

O Bert é o original. A Roberta, que o professor brinca que parece nome de mulher, foi treinada com mais dados e mais processamento: é mais pesada e mais eficiente. O Distil Bert é compacto e simplificado: dá um resultado um pouco pior, mas é mais veloz e mais barato. O Albert usa parâmetros compartilhados, o que reduz o tamanho e acelera a resposta.

Pense em carros de uma mesma marca: o modelo original, o mais potente e o compacto econômico. Fazem o mesmo trabalho, mas com custos diferentes.

Nenhum deles deixa de ser leitor. Todos seguem encoder-only. Escolher entre eles é decidir o que aperta mais: qualidade, custo ou velocidade.

## Comparando com os vizinhos
Vamos separar o que costuma se misturar.

Encoder-only contra o Transformer completo: o completo tem as duas metades e é mais pesado. O encoder-only fica só com a parte de leitura.

Bert contra G P T: o Bert olha para os dois lados e quer entender. O G P T parte do passado para gerar o que vem depois. Um é leitor, o outro é criador.

Bert contra as redes recorrentes: a RNN segue uma ordem rígida. O Bert vê a sentença inteira ao mesmo tempo.

Mascaramento contra previsão do próximo token: no mascaramento, o buraco fica no meio e os dois lados ajudam. Na geração, só existe o que já veio antes.

E os controles das aulas passadas? Temperatura, top-k e top-p decidem como escolher a próxima palavra. Por isso, eles não são o centro de um modelo cuja missão é ler.

## Fechamento
Vamos repetir as frases de hoje.

O Transformer completo é pesado, e muitas tarefas precisam só de uma das metades.

O encoder-only lê, ele não escreve.

O Bert não quer o próximo token, ele quer entender a entrada inteira.

Cada token olha para os dois lados.

Ao final de cada camada, cada token já carrega o contexto.

Mascarar é tapar buracos usando os dois lados.

Sentimento rotula o texto, entidades separam pedaços dele.

A busca semântica compara significado, não palavra.

Roberta treina mais, Distil Bert encolhe, Albert compartilha.

## Revisão
Primeira pergunta: por que o Bert usa os dois lados da frase, e um modelo gerador não?

[pausa 5]

Resposta: porque o Bert lê um texto que já existe. Já o modelo gerador está escrevendo: o que viria à direita é justamente o que ele ainda precisa produzir.

Segunda pergunta: uma equipe quer um único modelo encoder-only para ler um pedido e escrever uma carta longa em resposta. Qual é o problema?

[pausa 5]

Resposta: ler é com ele, escrever a carta não. A função dele é compreender, não gerar.

Terceira pergunta: por que esconder palavras ajuda o modelo a compreender?

[pausa 5]

Resposta: porque, para acertar a palavra oculta, ele precisa usar o contexto completo, o que vem antes e o que vem depois.

Quarta pergunta: qual é a diferença entre um rótulo de sentimento e o reconhecimento de entidades?

[pausa 5]

Resposta: o sentimento é uma avaliação sobre o texto. As entidades são pedaços do texto separados em categorias, como pessoa, organização e local.

Quinta pergunta: você precisa do modelo mais veloz e barato da família, e aceita um resultado um pouco pior. Qual é?

[pausa 5]

Resposta: o Distil Bert.

Na próxima aula, vem a outra metade: o decoder-only. Até lá.
