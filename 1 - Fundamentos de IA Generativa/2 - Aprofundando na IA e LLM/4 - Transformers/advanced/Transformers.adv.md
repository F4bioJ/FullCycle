# Transformers — material avançado

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 4

A aula apresentou o Transformer como a ruptura que resolveu dependência de longo prazo e paralelização. Este material segue a mesma ordem, mas abre a caixa: o que a atenção calcula de fato, de onde vem o paralelismo, o que ele custa e onde a explicação da aula simplificou demais.

---

## 1. De onde veio: a atenção não nasceu em 2017

O professor comentou que "tinha mais gente falando na academia". O ponto exato é este: a atenção já existia três anos antes do Transformer.

Em setembro de 2014, Bahdanau, Cho e Bengio atacaram o gargalo do seq2seq que vimos no fim da aula de RNNs. O encoder comprimia a frase inteira em **um único vetor de tamanho fixo**, e frases longas não cabiam nele. A proposta foi deixar o decoder, a cada palavra gerada, consultar todas as posições da frase de entrada com pesos diferentes. Isso é atenção, mas ainda **em cima de uma RNN**.

O que o paper *Attention Is All You Need* (Vaswani e outros sete autores, junho de 2017) fez de novo está no título: mostrou que dava para **jogar fora a recorrência** e ficar só com a atenção. A contribuição foi a remoção da RNN, não a invenção da atenção.

Dois detalhes do paper que a aula não mencionou:

- **O problema era tradução**, não chat. O modelo foi avaliado em inglês→alemão (28,4 BLEU) e inglês→francês (41,8 BLEU).
- **O argumento de venda era custo de treino.** O modelo grande treinou em 3,5 dias em 8 GPUs, uma fração do custo dos melhores modelos da época. O modelo base treinou em cerca de 12 horas.

## 2. O que a self-attention calcula

A aula disse que cada palavra "olha para todas as outras e calcula a importância relativa". O cálculo é este:

```
Attention(Q, K, V) = softmax(Q·Kᵀ / √d_k) · V
```

Cada token gera três vetores a partir do seu embedding, por três matrizes de pesos aprendidas:

| Vetor | Papel | Pergunta que representa |
|---|---|---|
| **Q** (query) | o que este token procura | "de quem eu preciso?" |
| **K** (key) | como este token se anuncia | "sobre o que eu sou?" |
| **V** (value) | o conteúdo que este token entrega | "o que eu passo adiante?" |

O **produto escalar** entre a query de um token e a key de outro mede a afinidade entre os dois. O **softmax** transforma as afinidades em pesos que somam 1. A saída é a **média ponderada dos values**.

### Um exemplo feito à mão

Frase da aula: "o **cachorro** que o **menino** viu estava **latindo**". Vamos calcular a nova representação de "latindo" com vetores de 2 dimensões (d_k = 2).

| Token | Key | q · k | ÷ √2 | exp | Peso |
|---|---|---|---|---|---|
| cachorro | [2, 0] | 2,0 | 1,414 | 4,113 | **0,54** |
| menino | [0,5, 1] | 0,5 | 0,354 | 1,424 | **0,19** |
| latindo | [1, 0] | 1,0 | 0,707 | 2,028 | **0,27** |

Query de "latindo": q = [1, 0]. A soma dos exponenciais é 7,565, e cada peso é o exponencial dividido por essa soma.

A nova representação de "latindo" é `0,54·V(cachorro) + 0,19·V(menino) + 0,27·V(latindo)`.

Três coisas aparecem nesse exemplo:

1. **A distância não entrou na conta.** "Cachorro" ganhou porque a key dele combina com a query, não por estar perto ou longe.
2. **"Menino" não foi ignorado.** Ele ficou com 19% do peso. A atenção é uma mistura suave, não um filtro.
3. **Um token presta atenção em si mesmo** (27%), o que preserva a identidade dele na nova representação.

### Por que dividir por √d_k

Com vetores grandes, os produtos escalares crescem em magnitude. Um softmax alimentado com números muito grandes satura: um peso vai para quase 1, os outros para quase 0, e o gradiente nessas regiões fica extremamente pequeno. Dividir por √d_k mantém os valores em uma faixa em que o modelo ainda aprende. É o desvanecimento de gradiente da aula de RNNs aparecendo em outro lugar, com um remédio barato.

### Em código

```python
import numpy as np

def self_attention(X, Wq, Wk, Wv):
    Q, K, V = X @ Wq, X @ Wk, X @ Wv           # (n, d_k) cada
    scores = Q @ K.T / np.sqrt(K.shape[-1])    # (n, n): todos contra todos
    w = np.exp(scores - scores.max(-1, keepdims=True))
    w = w / w.sum(-1, keepdims=True)           # softmax linha a linha
    return w @ V                               # (n, d_k): nova representação
```

Repare que não há laço sobre os tokens. Tudo é multiplicação de matrizes, e é isso que a GPU faz bem.

## 3. Multi-head: várias perguntas ao mesmo tempo

Uma única atenção responde uma pergunta por token. Mas "latindo" precisa saber quem late (sujeito) e também o tempo verbal ("estava"). O Transformer roda várias atenções em paralelo, as **heads**, cada uma com as próprias matrizes Q, K e V, e concatena os resultados.

No modelo base do paper: d_model = 512 dividido em h = 8 heads de d_k = 64 cada (8 × 64 = 512). O custo fica parecido com o de uma atenção única de 512 dimensões, mas o modelo ganha oito "pontos de vista".

## 4. A camada feedforward e de onde vem o paralelismo

Depois da atenção, cada token passa por uma MLP de duas camadas (512 → 2048 → 512 no modelo base). Ela é aplicada **a cada posição separadamente, com os mesmos pesos**.

A divisão de trabalho, como o resumo do professor coloca bem: a atenção decide *com quem* cada token se relaciona; a MLP transforma *como* a informação combinada é refinada. A atenção é o único ponto em que os tokens trocam informação entre si.

## 5. Positional encoding: somado, não anexado

Sem recorrência, a self-attention não enxerga ordem: embaralhe os tokens e os pesos são os mesmos, só embaralhados. É o problema de "cachorro mordeu homem" de volta.

A solução do paper é **somar** ao embedding de cada token um vetor que depende só da posição:

```
PE(pos, 2i)   = sin(pos / 10000^(2i/d_model))
PE(pos, 2i+1) = cos(pos / 10000^(2i/d_model))
```

Cada dimensão é uma onda de frequência diferente: as primeiras oscilam rápido (distinguem posições vizinhas), as últimas devagar (distinguem regiões do texto). Funciona como os ponteiros de um relógio: segundos, minutos e horas juntos identificam um instante.

Os autores também testaram vetores de posição **aprendidos** e obtiveram resultados quase idênticos. Escolheram os senos porque talvez permitissem extrapolar para sequências mais longas que as vistas no treino.

## 6. O que segura o treino: residual e LayerNorm

A aula disse que não há mais degradação do gradiente. O que o Transformer muda é o **caminho** que o sinal percorre entre dois tokens distantes:

| Camada | Custo por camada | Operações sequenciais | Caminho máximo entre dois tokens |
|---|---|---|---|
| Self-attention | O(n² · d) | O(1) | **O(1)** |
| Recorrente (RNN) | O(n · d²) | O(n) | **O(n)** |

Na RNN, a informação do token 1 atravessa n passos para chegar ao token n, e o gradiente é multiplicado em cada um. Na atenção, qualquer par de tokens está a **um passo** de distância.

Isso resolve o desvanecimento *ao longo da sequência*. Mas o modelo empilha camadas (6 no encoder e 6 no decoder, no paper), e o gradiente também precisa atravessar a profundidade. Para isso, cada subcamada é embrulhada assim:

```
saída = LayerNorm(x + Subcamada(x))
```

O `x +` é a **conexão residual**: um atalho pelo qual o gradiente passa sem ser multiplicado, a mesma ideia do estado de célula da LSTM. A **LayerNorm** mantém as ativações em escala estável. São as duas que tornam viável treinar a pilha de camadas.

## 7. O preço: custo quadrático

A tabela acima mostra a conta que a aula não fez. Comparar todos os tokens com todos custa **O(n²)**:

- 1.000 tokens → 1 milhão de pares por head, por camada;
- 2.000 tokens → 4 milhões. **Dobrar o texto quadruplica o custo** de atenção.

É por isso que a janela de contexto é limitada e cara. O Transformer trocou o problema "não consigo lembrar o que está longe" por "consigo, mas pago por cada par".

## 8. Encoder, decoder e o que cada família usa

O Transformer original tem duas pilhas:

- **Encoder:** lê a frase de entrada. Cada token enxerga todos os outros, à esquerda e à direita.
- **Decoder:** gera a saída. A self-attention dele é **mascarada**: cada posição só enxerga as anteriores (as conexões para o futuro recebem −∞ antes do softmax). Uma terceira subcamada faz atenção sobre a saída do encoder.

Os modelos que a aula listou são recortes dessa arquitetura:

| Modelo | Usa | Enxerga | Bom para |
|---|---|---|---|
| BERT (out/2018) | só encoder | os dois lados | classificar, extrair, buscar |
| GPT | só decoder | só o passado | gerar texto |
| T5 | encoder + decoder | entrada inteira, saída mascarada | traduzir, resumir |

BERT significa *Bidirectional Encoder Representations from Transformers*. O capítulo "Hands on" tem aulas dedicadas a encoder-only e decoder-only.

O **ViT** (outubro de 2020) leva a ideia para imagens sem mudar o mecanismo: corta a imagem em pedaços e trata cada pedaço como um token. O título do paper resume: *An Image is Worth 16x16 Words*.

---

## O que a aula simplificou

- **"Processa todos os tokens simultaneamente."** Vale para o treino e para a leitura da entrada. Na **geração**, o decoder continua produzindo um token por vez, cada um dependendo dos anteriores. A máscara é o que permite treinar todas as posições em paralelo, simulando essa geração passo a passo.
- **"O MLP faz a gente processar em paralelo."** O paralelismo vem de a atenção **não ter recorrência**. A MLP contribui com a não linearidade, e roda em paralelo justamente por tratar cada posição de forma independente.
- **"Positional encoding é um ticket; processa e depois junta na ordem."** Não existe etapa de reordenação. A posição é um vetor **somado** ao embedding antes da primeira camada, e a informação de ordem viaja misturada ao conteúdo.
- **"Ignora o menino."** Nada é ignorado: os pesos são suaves e somam 1. E há várias heads, cada uma com uma distribuição de pesos diferente.
- **"Não tem mais degradação do gradiente."** O caminho entre tokens distantes caiu de O(n) para O(1). O gradiente ao longo da profundidade ainda depende de residual e LayerNorm.
- **"Alucina muito pouco."** Estabilidade de treino não é precisão factual. Transformers alucinam, e o próprio curso tem duas aulas sobre isso mais adiante neste capítulo. A arquitetura melhora a coerência do texto, não garante que ele seja verdadeiro.
- **"Extremamente eficientes."** Eficientes em paralelizar, não em custo total: a conta é quadrática no tamanho do texto.

## Implicações para quem constrói software com IA

- **Tokens de entrada custam, e o custo cresce mais que linearmente** dentro do modelo. Contexto enxuto é decisão de arquitetura, não só de economia.
- **Escolha a família pelo problema.** Para classificar ou buscar por similaridade, um modelo encoder-only pequeno costuma ser melhor e muito mais barato que um LLM generativo.
- **A latência de geração é sequencial.** A entrada é processada em paralelo, mas a resposta sai token a token. Respostas longas demoram, por mais GPUs que existam.
- **"O modelo leu tudo" não significa "pesou tudo igual".** A atenção distribui peso, e instruções enterradas no meio de um contexto longo podem receber pouco.

## Armadilhas comuns

- Achar que o Transformer inventou a atenção (foi Bahdanau, 2014; o Transformer removeu a RNN).
- Achar que atenção e janela de contexto são coisas separadas: a janela é limitada *por causa* do custo da atenção.
- Confundir paralelismo de treino com paralelismo de geração.
- Tratar os pesos de atenção como "explicação" do raciocínio do modelo: são um sinal entre muitos, em muitas heads e camadas.

## Fontes

- Vaswani et al., *Attention Is All You Need*, 2017 — https://arxiv.org/abs/1706.03762 (fórmulas, hiperparâmetros, Tabela 1, tempos de treino)
- Bahdanau, Cho, Bengio, *Neural Machine Translation by Jointly Learning to Align and Translate*, 2014 — https://arxiv.org/abs/1409.0473
- Devlin et al., *BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding*, 2018 — https://arxiv.org/abs/1810.04805
- Dosovitskiy et al., *An Image is Worth 16x16 Words*, 2020 — https://arxiv.org/abs/2010.11929
