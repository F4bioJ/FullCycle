# LLMs — resumo

## O que é um LLM

LLM é o Large Language Model, o termo usado para descrever os modelos de linguagem de larga escala que vemos hoje. Esses modelos são treinados com bilhões de parâmetros e um grande volume de dados, principalmente texto. Segundo o professor, eles não apenas memorizam padrões: também aprendem a representar contexto, o que permite tarefas que exigem fluência, coerência e adaptabilidade textual. Por trás de ferramentas como o ChatGPT estão LLMs, e é esse tipo de treinamento que dá a capacidade generativa. Os LLMs costumam se basear na arquitetura Transformer, mas cada um pode ter um objetivo diferente. LLM não é uma coisa só: é uma estratégia de arquitetura e treinamento, e existem vários LLMs.

## Base técnica: três blocos do Transformer

O LLM junta o que foi visto nas aulas anteriores (bigrama, evolução da IA, Transformers). Ele opera com três grandes blocos:

- **Autoatenção:** cada token presta atenção em todos os outros tokens da sequência, ou seja, em tudo o que aconteceu na conversa. A aula lembra que a unidade é o token, não a palavra.
- **Embeddings:** representação dos tokens em vetores, num espaço de muitas dimensões, útil para buscar proximidade.
- **Camadas feedforward empilhadas:** várias camadas que refinam a representação de cada token.

## Pré-treinamento

O modelo é treinado com muito texto em larga escala antes de interagir com o usuário, como aconteceu com o ChatGPT antes de ser aberto ao público. Ele é exposto a bilhões de tokens de livros, sites, fóruns, código-fonte e outros textos, para aprender padrões de linguagem e de escrita. Há autossupervisão: o modelo prevê a próxima palavra e preenche lacunas. O professor lembra que houve muita polêmica sobre o uso de textos e livros nesse treinamento por questões de direitos autorais, e que o dado textual é essencial para treinar esses modelos.

## Fine-tuning e instrução

Depois do pré-treinamento, o modelo pode ser refinado. Um fine-tuning supervisionado o deixa ajustado para tarefas específicas, como classificação e resposta, ou para certo tipo de aplicação do dia a dia.

## RLHF

RLHF é Reinforcement Learning with Human Feedback, o reforço de aprendizado com feedback humano. O modelo aprende com as preferências humanas. O ChatGPT faz isso, e o professor diz que esse reforço o ajuda a evoluir ao longo do tempo.

## Capacidades dos LLMs

- **Geração de texto:** conversação fluente e coerente, escrita de livros, respostas contextualizadas e imitação de estilos de escrita, de vocabulário e de comportamento textual.
- **Compreensão semântica:** resumo automático, análise de sentimento, tradução, perguntas e respostas.
- **Capacidade emergente de raciocínio e generalização:** modelos como o GPT-4 resolvem problemas de lógica e raciocinam em várias etapas sequenciais sem muito direcionamento. Também executam tarefas com poucos exemplos (few-shot) ou nenhum exemplo, só com a instrução (zero-shot).

## Escala de dados e desempenho

Quanto mais tokens, mais fácil é armazenar, criar e conectar relações e padrões. Na analogia do professor, os parâmetros agem como "nós de aprendizado" que dependem do conjunto de textos recebido. Os tokens são fragmentos de texto (partes de palavras, palavras, pontuação), e, segundo ele, quanto mais texto, mais fiel à realidade o modelo fica. Mais escala significa maior desempenho, e por isso o GPT-3, o 3.5 e o 4 evoluíram com cada vez mais treinamento.

## Principais LLMs e seus focos

O professor cita GPT (OpenAI), BERT (Google), LLaMA (Meta) e Gemini (Google), cada um melhor em coisas diferentes:

- **GPT-3, 3.5 e 4:** foco em geração textual e assistente, com modelo autoregressivo. Também geram imagens, mas o professor tem a impressão de que o forte é o texto.
- **Gemini:** pegada de geração de texto, imagem e código, pensado para multimodalidade (texto, imagem e código) e, segundo o professor, menos usado como assistente, embora possa ser.
- **BERT:** visão bidirecional, bom em compreensão, classificação e comparação.
- **LLaMA (Meta):** aberto, com pegada open source, melhor para pesquisa e desenvolvimento.

## GPT em detalhe

GPT é Generative Pre-trained Transformer, um modelo autoregressivo da OpenAI. A parte generativa foca na geração de texto. Ele é pré-treinado para tarefas gerais, principalmente prever a próxima palavra, e usa a arquitetura Transformer de "Attention Is All You Need". Com base no histórico do que já construiu, faz as conexões entre tokens e evolui o texto. É unidirecional, da esquerda para a direita como a leitura, e ideal para texto, resposta, criação e storytelling. ChatGPT, GitHub Copilot e Jasper usam essa mesma estratégia.

## BERT em detalhe

BERT é Bidirectional Encoder Representations from Transformers, do Google. Ele busca compreender texto, não gerar. O professor supõe que isso veio dos problemas de busca que o Google tinha de resolver. É treinado para preencher lacunas em frases, olhando o que vem antes e o que vem depois da palavra faltante, o que dá uma compreensão mais assertiva do trecho. O GPT é melhor para gerar texto, e o BERT foi feito para busca e compreensão profunda. É ideal para análise de sentimento, classificação de texto, perguntas e respostas e extração de informação, e é usado em mecanismos de busca, análise de documentos e resumo automático.

## Por que os LLMs são importantes

Os LLMs trazem uma mudança profunda:

- Substituem vários modelos específicos por um modelo generalista, que depois se treina para o objetivo desejado.
- Aprendem por representação semântica e vão além da frequência de palavras.
- Adaptam-se a novos contextos e tarefas com pouco exemplo.
- Geram conteúdo mais fluente, coerente e criativo, mais próximo do ser humano.
