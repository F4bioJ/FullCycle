# Tokens — material avançado

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 5

A aula apresentou o token como a unidade que o modelo processa no lugar da palavra e explicou, em linhas gerais, como o Byte Pair Encoding (BPE) decide o que vira token. Este material abre a caixa: o algoritmo, o que o tokenizador faz antes do modelo existir, o que a aula simplificou e o que isso muda para quem cobra e depura sistemas de IA.

As contagens de tokens abaixo foram medidas com a biblioteca `tiktoken` em 2026-10-21.

---

## 1. Por que nem palavra, nem letra

A aula deu os motivos contra a palavra (palavras novas, erros de escrita, muitos idiomas). Faltou o outro lado da balança. Há três opções para a unidade do texto:

| Unidade | Vocabulário | Comprimento da sequência | Problema |
|---|---|---|---|
| Palavra | enorme e aberto | curto | palavra nova ou errada não tem representação (fora do vocabulário) |
| Caractere (ou byte) | minúsculo e fechado | muito longo | cada frase vira centenas de passos, e o modelo precisa montar o sentido letra por letra |
| Subpalavra (token) | médio, fixo (dezenas a centenas de milhares) | intermediário | a divisão não segue a lógica humana |

O comprimento da sequência não é um detalhe. Na aula de Transformers, o custo da atenção cresce com o quadrado do número de tokens. Letras multiplicariam o `n` e o custo; palavras inteiras exigiriam um vocabulário que nunca fecha. O token é o meio-termo. Sennrich, Haddow e Birch (2016) defenderam isso para tradução automática: vocabulário compacto e representação curta ao mesmo tempo.

## 2. O algoritmo do BPE, passo a passo

A ideia da aula (agrupar por incidência) está certa, mas o algoritmo é mais mecânico do que a explicação sugere.

O BPE nasceu como compressão de dados (Gage, 1994): substituir repetidamente o par de bytes mais frequente por um símbolo novo. Sennrich e colegas o adaptaram para segmentar palavras em 2016.

1. Comece com um vocabulário contendo só os caracteres e escreva cada palavra do corpus como uma sequência deles (com um marcador de fim de palavra, aqui `</w>`).
2. Conte todos os pares de símbolos adjacentes, ponderando pela frequência de cada palavra.
3. Escolha o par **mais frequente** e substitua todas as ocorrências por um símbolo novo, que passa a fazer parte do vocabulário. Isso é uma *merge*.
4. Repita os passos 2 e 3 até atingir o número de merges desejado.

O vocabulário final tem o alfabeto inicial mais o número de merges, que é o único hiperparâmetro do algoritmo.

### Um exemplo feito à mão

Corpus de brinquedo, com frequências: `cachorro` (5), `cacho` (3), `cachecol` (2), `choro` (4). Executei o algoritmo para conferir os passos:

| Merge | Par escolhido | Ocorrências | Efeito |
|---|---|---|---|
| 1 | `c` + `h` | 14 | `ch` vira símbolo (está em todas as palavras) |
| 2 | `o` + `</w>` | 12 | o `o` final vira `o</w>` |
| 3 | `c` + `a` | 10 | `ca` vira símbolo |
| 4 | `ca` + `ch` | 10 | surge `cach` |
| 5 | `r` + `o</w>` | 9 | surge `ro</w>` |

(Nos passos 2, 3 e 5 há empate, como `ch+o` e `o+</w>` no passo 2; o resultado depende do critério de desempate.)

O que esse exemplo mostra:

1. **A ordem das merges importa e é gravada.** O resultado do treino é uma lista ordenada de merges. Para tokenizar um texto novo, o tokenizador separa em caracteres e aplica as merges na mesma ordem.
2. **`cach` surge antes de `cachorro`.** É a ideia da aula sobre o pedaço ser mais forte que a palavra inteira: um pedaço que aparece em várias palavras é fundido antes de uma palavra inteira. A palavra só vira token único se continuar frequente depois de todas as merges anteriores.
3. **Palavras nunca vistas funcionam.** Um texto novo como `cachorrão` é quebrado nos pedaços que o vocabulário conhece.

Dois pontos de precisão. O BPE funde **pares**, um por vez e de forma gulosa, sem descobrir de uma vez que um pedaço como `cache` é forte. E a frequência que importa é a do par no corpus de treino do tokenizador.

## 3. Do caractere ao byte: o BPE dos modelos GPT

O BPE original começa em caracteres, e um caractere ausente do corpus de treino (um emoji, um ideograma raro) fica sem símbolo. A solução dos modelos GPT-2 em diante foi começar de **bytes**.

- O alfabeto inicial tem 256 símbolos, um por valor de byte. Qualquer texto em UTF-8 pode ser escrito com eles, então **nunca existe entrada desconhecida**. A aula tratou "byte" e "letra" como sinônimos, mas um `é` ocupa dois bytes.
- O vocabulário do GPT-2 tem 50.257 entradas: 256 bytes, cerca de 50 mil merges e o token especial de fim de texto (`<|endoftext|>`, de número 50.256).
- Antes das merges, a **pré-tokenização** divide o texto com uma expressão regular (letras, números, pontuação e espaços em grupos separados), e as merges nunca cruzam essas fronteiras. É por isso que o espaço vem **colado no início da palavra** (`" artificial"`) e que números e letras não se misturam num token.

O `cl100k_base`, da família GPT-3.5/GPT-4, tem cerca de 100 mil tokens (100.277 contando os especiais), e o `o200k_base`, mais novo, cerca de 200 mil. Por isso **o mesmo texto gera contagens diferentes em modelos diferentes**.

## 4. O que a aula simplificou

**4.1. O tokenizador se forma junto com o treino?** O professor sugeriu que os tokens se formam quando a máquina é treinada. Na prática, o tokenizador é treinado **antes e à parte**, por um algoritmo próprio (as merges da seção 2), sobre um corpus que pode ser diferente do corpus do modelo. Depois ele é congelado. O modelo recebe IDs de uma tabela fixa.

**4.2. O exemplo `GPT-4 é poderoso`.** O professor apostou em `GPT`, `4`, `é`, `poder` e `oso`, como suposições. Medido:

| Tokenizador | Divisão de `GPT-4 é poderoso` | Tokens |
|---|---|---|
| `cl100k_base` (GPT-3.5/4) | `G` · `PT` · `-` · `4` · `␣é` · `␣poder` · `oso` | 7 |
| `o200k_base` (GPT-4o) | `GPT` · `-` · `4` · `␣é` · `␣poderoso` | 5 |

Duas lições. O palpite `poder` + `oso` é o do `cl100k`, mas `GPT` ficou **partido** em `G` + `PT` lá, e no `o200k` vira um token só: depende do corpus do tokenizador. E o `4` fica isolado porque a pré-tokenização separa letras de números.

**4.3. O exemplo `cachorro`.** A aula sugeriu `cache` + `orro`. Medido: `c` + `ach` + `orro` (3 tokens) no `cl100k` e no `o200k`, e `c` + `ach` + `or` + `ro` (4 tokens) no GPT-2. O `o200k` tem `␣cachorro` (com espaço) como **token único** no meio de uma frase: o espaço inicial muda a tokenização.

**4.4. O "é" sozinho é forte?** O professor sugeriu que o `é` isolado vira token por aparecer muito, e a intuição se sustenta: em UTF-8 o `é` ocupa dois bytes e só vira um símbolo por uma **fusão**, que acontece por ele ser frequente (na 4.2 ele aparece até com o espaço colado, `␣é`). Já uma letra sem acento está no alfabeto inicial e não depende de frequência para existir.

**4.5. O token não carrega significado.** A divisão é estatística e **não respeita sílabas nem morfemas**. `interessante` virou `inter` + `ess` + `ante` no `cl100k`. Quem dá significado ao token é o embedding, aprendido depois (seção 5).

## 5. Do token ao embedding (e ao softmax)

O caminho completo, depois do embedding e da atenção da aula, é:

```
texto  →  tokenizador  →  IDs inteiros  →  tabela de embeddings (V × d)
       →  camadas do Transformer  →  vetor final  →  matriz de saída (d × V)  →  softmax sobre V tokens
```

`V` é o tamanho do vocabulário e `d` a dimensão do embedding. Duas consequências:

1. **A saída é uma distribuição sobre todos os tokens.** O modelo não escolhe "a próxima palavra", mas um dos `V` tokens. É a mesma lógica das cadeias de Markov da aula 2.1, com tokens no lugar de palavras.
2. **`V` é uma decisão de projeto com custo nos dois lados.** Ilustração (números inventados): com `V = 100.000` e `d = 4.096`, a tabela de embeddings tem ≈ 410 milhões de números, e a camada de saída é do mesmo tamanho. Um vocabulário maior encurta as sequências (menos custo de atenção), mas aumenta essas matrizes e deixa tokens raros com poucos exemplos para aprender o seu embedding.

Isso explica um defeito real: tokens que entraram no vocabulário mas quase não aparecem no treino do modelo ficam com embeddings mal treinados, os **glitch tokens**, como o caso conhecido de ` SolidGoldMagikarp` (Rumbelow e Watkins, 2023, em posts no LessWrong). O trabalho "Fishing for Magikarp" (Land e Bartolo, 2024) os trata como consequência da distância entre a criação do tokenizador e o treino do modelo (seção 4.1).

## 6. O que muda na prática

**6.1. Contexto e custo são medidos em token, e o token varia por idioma.** O mesmo conteúdo ocupa quantidades diferentes de tokens conforme o idioma. Medi a frase `O cachorro é interessante` e o equivalente em inglês, `The dog is interesting` (4 tokens em todos):

| Tokenizador | `O cachorro é interessante` | `The dog is interesting` |
|---|---|---|
| GPT-2 (`gpt2`) | 10 | 4 |
| `cl100k_base` | 6 | 4 |
| `o200k_base` | 4 | 4 |

Os mais antigos penalizavam o português com mais do dobro de tokens: contexto menor e conta maior. Nos mais novos a diferença caiu (o vocabulário do `o200k_base` é o dobro do `cl100k_base`). Petrov e colegas (NeurIPS 2023) mediram diferenças de até 15 vezes entre idiomas para o mesmo texto. Por isso, **estime custo com o tokenizador do modelo escolhido, em amostras reais do idioma do produto**, e não por contagem de palavras; e reestime ao trocar de modelo.

**6.2. Pequenas mudanças no texto mudam os tokens.** Com o `cl100k_base`, `strawberry` (sem espaço) vira 3 tokens (`str` · `aw` · `berry`), enquanto ` strawberry` (com espaço) vira **1**.

**6.3. Por que modelos erram contagem de letras e aritmética.** O modelo não enxerga letras: ele enxerga IDs de tokens como `str`, `aw`, `berry`. Contar os "r" de uma palavra exige informação que ele só tem indiretamente. O mesmo vale para números: `12345678` vira `123` · `456` · `78` no `cl100k`, e `9.11` vira `9` · `.` · `11`, o que ajuda a explicar tropeços em comparações como 9.11 contra 9.9. Ao depurar erros de contagem, ortografia, aritmética ou formatação, olhe a tokenização da entrada antes de culpar o raciocínio do modelo.

**6.4. A janela de contexto é um orçamento em tokens.** A entrada, a instrução do sistema e a resposta saem do mesmo orçamento; reserve parte dele para a resposta.

---

## Como isso conversa com as outras aulas

- **2.1 e 2.2:** o bigrama vale com tokens; o one-hot teria `V` posições, e o embedding o comprime em `d`.
- **2.4 Transformers:** o custo quadrático da atenção é em número de **tokens**.
- **Próxima aula (LLMs):** a saída é uma distribuição sobre o vocabulário, de onde saem a temperatura e o Top-K/Top-P.

## Armadilhas comuns

1. **"1 token = 1 palavra."** Falso em qualquer idioma, e pior fora do inglês.
2. **"O modelo cria tokens novos durante a conversa."** Falso: o vocabulário é fixo e foi definido antes do treino do modelo.
3. **"Mais tokens no vocabulário é sempre melhor."** Encurta sequências, mas aumenta as matrizes e cria tokens raros mal treinados.

## Fontes

- Gage, P. (1994). *A New Algorithm for Data Compression*. The C Users Journal, 12(2), 23–38.
- Sennrich, R., Haddow, B., Birch, A. (2016). *Neural Machine Translation of Rare Words with Subword Units*. ACL 2016. https://arxiv.org/abs/1508.07909
- Radford, A. et al. (2019). *Language Models are Unsupervised Multitask Learners* (GPT-2; vocabulário de 50.257 tokens, BPE em nível de byte). Ficha do modelo: https://huggingface.co/openai-community/gpt2
- OpenAI, `tiktoken`: definição das codificações `gpt2`, `r50k_base`, `p50k_base`, `cl100k_base` e `o200k_base`. https://github.com/openai/tiktoken/blob/main/tiktoken_ext/openai_public.py
- Petrov, A., La Malfa, E., Torr, P., Bibi, A. (2023). *Language Model Tokenizers Introduce Unfairness Between Languages*. NeurIPS 2023. https://arxiv.org/abs/2305.15425
- Land, S., Bartolo, M. (2024). *Fishing for Magikarp: Automatically Detecting Under-trained Tokens in Large Language Models*. arXiv 2405.05417. https://arxiv.org/abs/2405.05417
