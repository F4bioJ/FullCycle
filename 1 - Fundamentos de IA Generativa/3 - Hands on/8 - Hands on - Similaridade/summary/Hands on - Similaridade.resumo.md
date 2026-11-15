# Hands on - Similaridade — resumo

## O que a aula testa

O alvo são os **embeddings**: o professor monta um app em que você digita duas frases e recebe um número que diz o quanto elas são próximas. O objetivo é ver como a máquina compara textos, não construir uma ferramenta boa.

## O que é um embedding

Os modelos não trabalham com o texto em si, só com números. Um embedding é uma representação vetorial densa: um único vetor reúne significados, relações e contexto, em vez de uma informação isolada. Cada palavra ou frase vira um vetor de centenas ou milhares de dimensões.

Nesse espaço, o vetor "gato" deve ficar mais perto de "cachorro" do que de "avião". A distância costuma ser medida por uma função de cosseno ou euclidiana. O cosseno, usado no app, mede o quanto dois vetores apontam para direções parecidas, mesmo que seus valores absolutos sejam diferentes.

## Como montar o experimento

**Criar o Space:** no Hugging Face, entre em Spaces e clique em New Space. Preencha nome, descrição e licença (o professor usa MIT), escolha o Gradio como SDK e a opção gratuita de CPU, que é a mais lenta. Marque como privado se for só para brincar.

**Criar o arquivo do app:** em vez de editar o arquivo padrão, o professor cria o próprio, com um código já pronto:

- um modelo Transformer já disponível;
- uma função que recebe duas frases, gera `emb1` e `emb2`, calcula o cosseno e devolve o score;
- uma interface Gradio com dois campos de texto, uma saída numérica, um título e uma descrição.

**Publicar:** faça o commit direto na `main`. O Space passa por build e start, e isso demora na opção gratuita. Se estiver lento, não travou.

**Corrigir o primeiro erro:** o professor já espera o erro, porque falta o `requirements.txt`. Em vez de abrir o log, ele vai aos arquivos do Space, cria esse arquivo com as dependências e faz outro commit. Ele diz que deixou os textos dos dois arquivos prontos para copiar, mas o conteúdo não aparece na transcrição nem no resumo dele.

## Por que usar um Space

Dá para testar uma estratégia e ver o que funciona sem quebrar nada na empresa nem no seu notebook, em um ambiente colaborativo.

## Os testes

A frase 1 é "Hoje cedo meu cachorro passou mal pois comeu algo que não deveria." Nos testes 3 e 6, a transcrição não deixa claro o que foi digitado.

| # | Frase 2 | O que aconteceu |
|---|---|---|
| 1 | Hoje cedo meu gato comeu algo estragado, por isso não está bem | 0,69 |
| 2 | A mesma, trocando "gato" por "cachorro" | Subiu |
| 3 | Mais um ajuste na mesma frase | Muito similar |
| 4 | Durante a tarde, meu rinoceronte correu pela savana, por isso está machucado | Caiu um pouco |
| 5 | Meu avião precisa de um mecânico novo, pois está com problemas no trem de pouso | Caiu, mas não zerou |
| 6 | Um teste com menos texto | Caiu muito |
| 7 | Cópia exata da frase 1 | Similaridade máxima |
| 8 | Hoje cedo meu cachorro passou mal pois comeu algo que deveria | Continuou muito alta |

O professor lê o resultado do teste 1 como "0,69%". Como a saída é um cosseno, leia como 0,69 em uma escala cujo máximo é 1, não como menos de 1%.

## O que observar

- **A queda é gradual:** o score diminui conforme o tema se afasta, mas sobra alguma similaridade. No rinoceronte, o professor supõe que pesem o tempo, o animal e alguém que não está bem.
- **O tamanho do texto pesa:** segundo ele, palavras soltas dão pouca variação, e frases mais longas variam mais. No teste curto, ele atribui a queda ao menor volume de texto. A transcrição não mostra um teste com uma palavra só, então vale fazer esse.
- **A frase idêntica:** ele esperava que talvez não desse o máximo, mas deu.

## O que isso mostra

O teste 8 é o principal. Ao tirar o "não", o sentido muda: antes o cachorro comeu o que não devia; agora, comeu o que devia e ainda assim passou mal. Mesmo assim, o score continua alto. Como diz o professor, o modelo não entende o que você está falando, ele faz um cálculo.

Ele também avisa que o app é simples e que podem surgir distorções, porque o modelo é fraco. Ele cita ainda a máquina ruim, mas ela explica a lentidão: quem define o score é o modelo. Portanto, use o app para ver o mecanismo, não como medida confiável de sentido.

## O que fazer por conta própria

1. Procure "Aula Emb2" em Spaces ou monte o seu seguindo os passos acima.
2. Compare duas palavras soltas e depois duas frases longas sobre os mesmos temas.
3. Mude só o animal e veja o quanto o score sobe ou desce.
4. Tire um "não" de uma frase e compare com a mudança de animal. O teste mostra se o score acompanha a inversão de sentido.
