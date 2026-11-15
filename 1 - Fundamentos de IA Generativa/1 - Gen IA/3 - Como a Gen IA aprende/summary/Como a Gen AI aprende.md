# Como a Gen AI aprende

## Da previsão de saída ao mapa probabilístico

A IA tradicional, já definida anteriormente, aprende um mapeamento entre entrada e saída esperada. A IA generativa muda o foco: em vez de procurar apenas a resposta correta para um input, ela aprende distribuições de probabilidade sobre padrões, sequências e combinações possíveis. Esse aprendizado permite construir um mapa probabilístico do que tende a fazer sentido em determinado contexto. O resultado não é uma escolha entre rótulos conhecidos, mas a navegação por caminhos plausíveis para produzir uma saída nova e coerente.

## Padrões subjacentes e geração coerente

O treinamento em grandes volumes de dados serve para capturar estruturas implícitas que organizam a informação, mesmo quando elas não estão rotuladas explicitamente. O modelo aprende regularidades de linguagem, estilo, associação e continuidade, o que aumenta sua capacidade de distinguir sequências prováveis de sequências estranhas ao contexto. Essa é a base da geração coerente: a saída parece fazer sentido porque respeita padrões recorrentes aprendidos durante o treinamento. Quanto melhor o treinamento, maior a chance de o modelo produzir algo consistente e menor a chance de desviar para uma alucinação.

## A analogia do artista

A analogia do artista reduz a abstração do processo. Um artista observa muitas obras, internaliza estilos, composições e relações, e depois produz algo novo sem copiar literalmente uma peça específica. O modelo generativo opera de forma parecida: ele usa repertório estatístico aprendido para compor uma saída original condicionada ao contexto recebido. A originalidade surge da recombinação coerente de padrões, não de criação a partir do nada.

## A analogia do cartógrafo

O cartógrafo não apenas registra montanhas, rios e florestas já vistos; ele aprende a lógica do terreno e passa a inferir onde novos elementos poderiam existir. Essa imagem ajuda a entender o mapa probabilístico: o modelo não memoriza apenas exemplos, ele aprende a estrutura do espaço de possibilidades. Quando recebe um pedido para gerar algo parecido com o que conhece, ele projeta uma nova configuração compatível com as regularidades observadas. Por isso consegue criar uma “cidade ilusória” coerente com cidades anteriores, mesmo que aquela cidade específica nunca tenha existido.

## Modelos autoregressivos

Modelos autoregressivos geram conteúdo token a token, escolhendo cada próximo elemento com base nos anteriores. Em texto, isso significa que cada palavra produzida altera o contexto disponível para a próxima decisão, formando uma cadeia de dependências locais. Retomando o cenário de geração de um livro parecido com Harry Potter, o modelo usa o repertório aprendido de estilo e estrutura, mas a construção concreta acontece passo a passo durante a geração. A coerência emerge porque cada nova escolha precisa ser compatível com o que já foi escrito.

## Autoregressão como processo de escrita

A analogia do escritor mostra por que a autoregressão funciona bem para linguagem. Um escritor não materializa o texto inteiro de uma vez; ele escreve uma frase, usa essa frase para orientar a seguinte e ajusta o rumo conforme a narrativa avança. O modelo faz o mesmo em escala estatística: ele se autocompleta continuamente até concluir a sequência. Esse mecanismo explica tanto a fluidez da geração quanto a possibilidade de desvio quando a cadeia começa a seguir um caminho plausível, mas incorreto.

## Self-attention e manutenção de contexto

Atenção e contexto já foram introduzidos antes; aqui o ponto novo é o mecanismo de self-attention como forma de preservar relações relevantes ao longo da sequência. Self-attention permite ponderar quais partes anteriores do texto importam mais para interpretar ou gerar o próximo token. Em um texto longo, isso ajuda o modelo a manter vínculos entre elementos distantes, como um personagem apresentado no início e retomado muitos parágrafos depois. Sem esse mecanismo, a geração perderia continuidade com muito mais facilidade.

## Self-attention em sequências longas

Em termos práticos, self-attention funciona como um sistema de foco seletivo sobre o histórico disponível. O modelo não trata todos os tokens anteriores como igualmente importantes; ele atribui pesos maiores às relações mais úteis para a decisão atual. Retomando o exemplo do livro, isso permite sustentar a identidade do personagem principal e a lógica da narrativa mesmo quando há muitos eventos intermediários. Essa capacidade é decisiva para geração de textos longos com consistência temática.

## Embeddings e representação vetorial

Antes de operar sobre palavras, imagens ou código, o modelo converte esses elementos em vetores numéricos chamados embeddings. Essa representação vetorial transforma itens simbólicos em pontos de um espaço matemático onde relações podem ser medidas computacionalmente. O modelo não “lê português” ou “lê inglês” como um humano; ele processa padrões numéricos que codificam propriedades semânticas e contextuais. Isso torna possível comparar significado por proximidade geométrica entre vetores.

## Similaridade semântica por vetores

Quando dois termos aparecem em contextos parecidos, seus vetores tendem a ficar próximos no espaço semântico; quando aparecem em contextos muito diferentes, tendem a ficar distantes. Por isso, pares como “rei” e “rainha” ocupam regiões próximas, enquanto “rei” e “cachorro” normalmente ficam mais afastados. A analogia com coordenadas geográficas ajuda: proximidade vetorial funciona como proximidade de localização, mas em um espaço de significado. Essa estrutura é uma das bases para o modelo reconhecer relações, manter contexto e escolher continuações mais plausíveis.
