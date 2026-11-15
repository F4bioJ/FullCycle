# Encoder-only — resumo

## Três arquiteturas, uma escolha por tarefa

A partir daqui, a ideia é colocar na caixinha certa os conceitos vistos até agora. Dos Transformers surgiram três arquiteturas: **encoder-only** (apenas codificador), **decoder-only** e **encoder-decoder**. Para cada uma, o professor quer que você saiba quando usar, como se organiza e como é treinada, para escolher a ferramenta certa para cada tarefa. Esta aula trata da primeira.

## Por que o encoder-only surgiu

O paper *Attention Is All You Need*, lançado pelo Google em 2017, apresentou os Transformers: uma maneira de lidar com sequências sem depender da ordem rígida das RNNs. O problema é que o modelo completo junta encoder e decoder e fica muito pesado. Daí veio a ideia de que algumas atividades não precisam dos dois lados, e o modelo pode ser quebrado para usar só um deles.

## Compreender, não gerar

O encoder-only usa só a parte de codificação do Transformer. É uma simplificação para tarefas que não pedem a criação de um texto extenso, mas pedem a compreensão de um. Sua função principal é a compreensão, não a geração.

Ele funciona bem para classificar texto, extrair informações e transformar frases em vetores, e nessas tarefas é mais leve, mais rápido e mais barato. Para classificar se um texto é um romance ou trata de medicina, é uma boa escolha. Para classificar um texto e usá-lo para criar outro, não é o melhor.

## BERT

O primeiro modelo encoder-only foi o BERT, lançado pelo Google em 2018. O nome significa *Bidirectional Encoder Representations from Transformers* (na fala, sai "Encounter").

Diferente dos modelos geradores, ele não tenta descobrir o próximo token. Quer entender toda a entrada ao mesmo tempo: é mais um leitor do que um criador.

## Atenção bidirecional

No BERT e em modelos similares, a atenção olha para os dois lados. O modelo vê a sentença inteira, o que vem antes e o que vem depois de cada token, e calcula pesos de atenção para ambos os lados.

O GPT é diferente: considera só o que veio antes para gerar o que vem depois. Na aula, o professor resume isso como "olhar só para frente", mas a explicação dele é essa: olha o passado e gera o futuro.

## Da entrada à saída contextualizada

1. **Tokenização:** o texto é dividido em tokens, como em qualquer LLM.
2. **Vetores:** os tokens são convertidos em vetores, com os embeddings posicionais, que marcam a posição de cada um.
3. **Atenção bidirecional:** cada token olha para os outros, à esquerda e à direita, e o modelo calcula a importância relativa entre as palavras.
4. **Saída contextualizada:** ao final de cada camada do encoder, cada token tem uma representação vetorial que já carrega essa importância relativa e reflete o significado no texto.

## Treinamento: Masked Language Modeling

O BERT é treinado por mascaramento (MLM): algumas palavras são ocultadas, e o modelo precisa prevê-las com base no contexto completo. Acertar mostra que ele compreendeu o todo, olhando para os dois lados para tapar os buracos. O resultado é uma capacidade maior de compreender texto do que de criar um texto inteiro.

## Classificação de sentimentos

Um uso direto é classificar sentimentos a partir de textos, por exemplo:

- no atendimento telefônico de uma empresa, saber se o cliente está atritado;
- em uma análise de NPS mais inteligente, saber se as pessoas acham o produto bom ou ruim;
- nas redes sociais, entender como o produto está sendo falado.

## Named Entity Recognition (NER)

O NER separa partes do texto em categorias. Em "Steve Jobs fundou a Apple em Cupertino", identifica a pessoa (Steve Jobs), a organização (Apple) e o local (Cupertino). Isso ajuda, por exemplo, no preenchimento automático de texto e na categorização de grandes volumes de dados.

## Busca semântica

Em vez de procurar a palavra, você converte o texto em um vetor de significado, faz o mesmo com os textos de todos os documentos e compara os vetores. Quando dois vetores são similares, os textos estão falando do mesmo assunto.

## Embeddings para similaridade

O professor os distingue dos outros embeddings vistos até aqui. "Como fazer um bolo" e "receita para preparar um bolo" têm embeddings similares porque têm semânticas parecidas, mesmo com palavras diferentes.

## A família BERT

O professor cita os nomes para você reconhecê-los, sem exigir mais do que isso:

| Modelo | O que muda | Efeito |
|---|---|---|
| **BERT** | O original: bidirecional, treinado com MLM e um segundo método que a aula não detalha (na transcrição, "INSP") | Referência da família |
| **RoBERTa** | Treinado com mais dados e mais processamento em batch | Mais pesado e mais eficiente |
| **DistilBERT** | Versão compacta e simplificada do BERT | Resultado um pouco pior, mais veloz e mais barato |
| **ALBERT** | Usa parâmetros compartilhados | Menor, com inferência mais rápida e mais eficiente que o BERT |

Na fala, o ALBERT também aparece como "mais caro", o que não combina com a redução de tamanho e a inferência mais rápida. O resumo escrito do professor não repete essa parte.

A próxima aula trata da arquitetura decoder-only.
