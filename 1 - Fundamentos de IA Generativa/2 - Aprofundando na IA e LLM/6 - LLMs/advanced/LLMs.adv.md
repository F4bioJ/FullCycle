# LLMs — material avançado

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 6

A aula juntou tudo o que veio antes (bigrama, redes profundas, Transformers, tokens) e chamou o resultado de LLM. Este material segue a ordem do professor e abre a caixa: o que muda de um LLM para outro, como os objetivos de treino GPT e BERT funcionam de fato, o que cada fase de treino entrega e onde a aula simplificou.

---

## 1. O que é um LLM, de fato

"LLM" é um rótulo de escala, não de arquitetura. Não há um limiar oficial de parâmetros, e o próprio BERT, usado como exemplo na aula, tem 110 milhões (BASE) e 340 milhões (LARGE) de parâmetros (Devlin et al., 2018), contra 175 bilhões do GPT-3 (Brown et al., 2020). O professor disse que o LLM é "uma estratégia" e não "uma coisa só", e isso está certo. O que muda de família para família é o **objetivo de treino** e **quais conexões de atenção são permitidas**.

## 2. Os blocos: o que a aula listou e o que faltou

A aula listou autoatenção, embeddings e camadas feedforward empilhadas. Na aula 4 vimos que o Transformer também depende de conexões residuais e normalização (`LayerNorm(x + Subcamada(x))`) e de positional encoding, sem os quais a pilha não treina nem enxerga ordem. Estes itens não são detalhe: são o que permite empilhar dezenas de camadas.

A conexão com a aula 5 é direta: o texto vira IDs de tokens, a tabela de embeddings (V × d) vira vetores, as camadas os refinam, e a saída é um softmax sobre os V tokens do vocabulário. **O LLM é, no fim, um classificador gigante que escolhe um token entre V.**

## 3. Pré-treinamento: dois objetivos diferentes

"Autossupervisão" significa que o rótulo vem do próprio texto. Existem duas receitas principais, e elas definem a família.

### 3.1 Próxima palavra (GPT) com máscara causal

O decoder recebe a sequência e, em cada posição, prevê o token seguinte. A **máscara causal** impede que uma posição veja o futuro: antes do softmax, as pontuações para posições à frente recebem −∞.

Exemplo à mão, três tokens, pontuações brutas de atenção da posição 2 (índices 1 a 3): `[1, 2, 3]`.

- **Sem máscara** (como no encoder): softmax = `[0,09; 0,24; 0,67]`. A posição 2 "espiaria" o token 3.
- **Com máscara causal**: o terceiro vira −∞, e o softmax sobre `[1, 2]` dá `[0,27; 0,73]`. O token 3 recebe peso zero.

Isso permite treinar **todas as posições de uma vez** (em cada uma, prever o próximo token sem trapacear), mas na geração o modelo continua emitindo **um token por vez**: o que ele gerou volta como entrada. A perda é a entropia cruzada entre a distribuição prevista e o token real.

### 3.2 Preencher lacunas (BERT) com atenção bidirecional

O BERT é um **encoder**: sem máscara causal, cada token enxerga os dois lados. Se fosse treinado para prever a próxima palavra, ele a leria na entrada e o treino seria trivial. Por isso o objetivo é outro, o **Masked Language Model (MLM)**: sorteia-se 15% dos tokens para predição; desses, 80% viram `[MASK]`, 10% viram um token aleatório e 10% ficam intactos (Devlin et al., 2018). O modelo prevê o original usando o contexto dos dois lados, e só as posições sorteadas entram na perda.

**Por que o BERT não gera texto livremente?** Porque nunca foi treinado para produzir uma sequência da esquerda para a direita. Ele devolve uma representação contextual de cada token (útil para classificar, extrair, buscar), não uma distribuição sobre o que vem depois. Dá para forçar geração com truques, mas o resultado é pior do que o de um decoder. O inverso também vale: o GPT, só olhando para a esquerda, tem representações mais pobres do contexto à direita.

| | GPT (decoder-only) | BERT (encoder-only) |
|---|---|---|
| Atenção | mascarada (só o passado) | bidirecional |
| Objetivo | próximo token | tokens mascarados |
| Saída natural | texto | representações |
| Uso típico | geração, assistentes | classificação, busca, extração |

O professor também lembrou que o texto de treino virou polêmica: houve discussão sobre o uso de livros e outros textos protegidos por direitos autorais. Isso mostra que o dado é um insumo central do LLM, e não um detalhe jurídico à parte.

## 4. Fine-tuning e RLHF

O fine-tuning supervisionado continua o treino com pares (entrada, saída desejada) menores e curados. O RLHF, na descrição do paper InstructGPT (Ouyang et al., 2022), tem três etapas depois do pré-treino: (1) demonstrações escritas por rotuladores ajustam o modelo por fine-tuning supervisionado; (2) **rankings** de respostas feitos por humanos treinam um **modelo de recompensa**, que prevê a resposta que as pessoas preferem; (3) o modelo é otimizado por aprendizado por reforço (PPO) usando a nota desse modelo de recompensa. Ou seja, os rankings não entram direto no aprendizado por reforço: passam pelo modelo de recompensa. O resultado mais citado: respostas do InstructGPT de 1,3 bilhão de parâmetros foram preferidas às do GPT-3 de 175 bilhões, com 100 vezes menos parâmetros.

Dois pontos que a aula deixou de fora. Primeiro, o RLHF alinha o modelo às preferências humanas (utilidade, tom, aderência à instrução), mas não ensina o idioma: isso vem do pré-treino. Segundo, é uma **fase de treino com data de término**: o professor disse que o reforço "ajuda a evoluir ao longo do tempo", mas o modelo publicado não continua aprendendo com as suas conversas.

## 5. Few-shot, zero-shot e o que "emerge"

Brown et al. (2020) definem os regimes em termos do que vai no **prompt**, sem atualizar pesos:

- **Few-shot:** a descrição da tarefa mais algumas demonstrações.
- **One-shot:** uma demonstração mais a descrição.
- **Zero-shot:** nenhuma demonstração, apenas uma instrução em linguagem natural.

Exemplo de few-shot: `Texto: "adorei" → positivo / Texto: "péssimo" → negativo / Texto: "mais ou menos" →`. O modelo continua o padrão. No zero-shot, só `Classifique o sentimento: "mais ou menos"`. Em nenhum dos dois há re-treino; chama-se *in-context learning*.

"Emergente" é um termo descritivo: certas habilidades só aparecem de forma útil em modelos maiores. Ele não explica o mecanismo, e aqui a aula (corretamente) não se aprofundou.

## 6. Escala e desempenho

A frase "mais tokens, mais desempenho" tem base empírica: Kaplan et al. (2020) mostraram que a perda de linguagem cai como uma **lei de potência** com o tamanho do modelo, o volume de dados e a computação de treino. O que melhora é a **perda**, isto é, a qualidade da previsão do próximo token. Isso não equivale a veracidade: um modelo mais bem calibrado em estatística da língua continua capaz de produzir uma frase fluente e falsa.

## 7. Famílias e licenças

- **GPT:** decoder-only, autoregressivo.
- **BERT:** encoder-only, bidirecional.
- **Gemini:** segundo o relatório técnico, os modelos "constroem sobre decoders Transformer" e aceitam entrada textual intercalada com áudio e imagem, podendo gerar texto e imagem (Gemini Team, 2023). Multimodal descreve **o que entra e sai**, não o objetivo de treino.
- **LLaMA:** a primeira versão tem de 7 a 65 bilhões de parâmetros, treinada apenas com dados públicos (Touvron et al., 2023). Os pesos são publicados, mas sob **licença própria**. A Llama 2, por exemplo, exige autorização da Meta para produtos com mais de 700 milhões de usuários ativos mensais. "Pesos abertos" é mais exato que "open source".

## 8. Conexões com as aulas anteriores

- **Aula 4 (Transformers):** o encoder (bidirecional) e o decoder (mascarado) da tabela daquela aula viraram, respectivamente, BERT e GPT. O custo quadrático da atenção segue valendo para os dois.
- **Aula 5 (Tokens):** o vocabulário é fixo e a saída é uma distribuição sobre ele. A tokenização explica por que o modelo "vê" pedaços e não palavras.
- **Em aberto:** a aula não explica como se escolhe o token a partir da distribuição (temperatura, Top-K, Top-P) nem por que o modelo alucina. A alucinação é tema deste capítulo (aulas 17, "Alucinação", e 18, "Estratégias alucinação"); temperatura e Top-K/Top-P ficam no próximo capítulo, "Hands on".

## 9. Por que os LLMs importam

O professor fechou com a mudança de paradigma: um modelo generalista substitui vários modelos específicos, aprende por representação semântica (e não só por frequência de palavras) e se adapta a novas tarefas com poucos exemplos. É a união das seções anteriores: o pré-treino dá a base geral, o fine-tuning e o few-shot a direcionam para cada uso.

---

## O que a aula simplificou

- **Gemini "multimodal, diferente do autoregressivo".** Multimodal e autoregressivo não se excluem: o relatório do Gemini descreve decoders Transformer que geram saída em sequência.
- **Zero-shot como "pouquíssimo exemplo, pouquíssima instrução".** Zero-shot é nenhum exemplo, mas com a instrução da tarefa.
- **"Feedforward empilhado permitiu processamento em paralelo".** O paralelismo do Transformer vem de a atenção substituir a recorrência da RNN. As camadas feedforward dão profundidade e não linearidade.
- **"Três grandes blocos".** Faltam conexões residuais, normalização e positional encoding (já vistos na aula 4).
- **RLHF "ajuda a evoluir ao longo do tempo".** É uma fase de treino, e o modelo implantado não aprende continuamente com o uso.
- **BERT como LLM "com bilhões de parâmetros".** BERT tem 110M/340M. Entra no rótulo por ser Transformer pré-treinado em texto, mas está muito abaixo da escala do GPT-3.
- **"Mais texto, mais fiel à realidade".** Escala melhora a modelagem estatística (a perda), não garante veracidade.
- **LLaMA "open source".** Pesos abertos com licença própria e restrições.
- **GPT × BERT como "unidirecional × bidirecional".** É correto, mas a causa é a máscara de atenção e o objetivo de treino (próxima palavra × MLM), como visto na seção 3.

## Implicações para quem constrói software com IA

- **Escolha pela tarefa.** Classificar, extrair ou buscar por similaridade costuma pedir um modelo encoder pequeno e barato. Gerar texto pede um decoder.
- **Few-shot no prompt é a primeira alavanca**, antes de fine-tuning: não exige treino e é fácil de iterar.
- **Fine-tuning ajusta comportamento, não garante fatos novos.** Para conhecimento atualizado, o caminho costuma ser fornecer o contexto no prompt.
- **O modelo implantado é estático.** Não espere que ele aprenda com os usuários sem um novo ciclo de treino.
- **Leia a licença** antes de embutir um modelo "aberto" em produto comercial.

## Armadilhas comuns

- Tratar "LLM" como sinônimo de ChatGPT ou de "gera texto".
- Achar que zero-shot é "sem instrução".
- Achar que o RLHF mantém o modelo aprendendo em produção.
- Confundir escala com veracidade.
- Esperar de um BERT o que só um decoder entrega (e vice-versa).
- Dizer "open source" para qualquer modelo com pesos publicados.

## Fontes

- Devlin et al., *BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding*, 2018: https://arxiv.org/abs/1810.04805 (tamanhos 110M/340M, MLM 15% e 80/10/10, consultado na versão HTML https://ar5iv.labs.arxiv.org/html/1810.04805)
- Brown et al., *Language Models are Few-Shot Learners* (GPT-3), 2020: https://arxiv.org/abs/2005.14165 (175B; definições de few-, one- e zero-shot na seção 2)
- Ouyang et al., *Training language models to follow instructions with human feedback* (InstructGPT), 2022: https://arxiv.org/abs/2203.02155
- Kaplan et al., *Scaling Laws for Neural Language Models*, 2020: https://arxiv.org/abs/2001.08361
- Gemini Team, *Gemini: A Family of Highly Capable Multimodal Models*, 2023: https://arxiv.org/abs/2312.11805 (seção 2, arquitetura)
- Touvron et al., *LLaMA: Open and Efficient Foundation Language Models*, 2023: https://arxiv.org/abs/2302.13971
- Meta, *Llama 2 Community License Agreement*: https://raw.githubusercontent.com/meta-llama/llama/main/LICENSE (cláusula dos 700 milhões de usuários)
