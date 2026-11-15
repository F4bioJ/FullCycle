# Resumo: Como a Gen IA aprende

*MBA em Engenharia de Software com IA. Módulo: Fundamentos de IA Generativa. Aula 3*

---

## 1. Recapitulando: tradicional × generativa

| IA tradicional | IA generativa |
|---|---|
| Recebe dados de entrada **categorizados e catalogados** | Recebe um **volume gigantesco** de dados |
| Um algoritmo **mapeia diretamente** a entrada para uma saída esperada | Trabalha com **probabilidades** para entender o contexto da entrada e **montar um novo contexto de saída** |
| Prevê com base em modelos matemáticos | Cria com base em "inspiração", como um **artista que estudou milhares de obras** |

> Para se inspirar, em algum momento a IA também precisa de uma base de probabilidade de repetição. A diferença está no que ela faz com isso: criar em vez de só repetir.

---

## 2. Como a IA generativa aprende

1. É treinada com um **volume gigantesco de dados**.
2. Captura os **padrões subjacentes** e as **estruturas "invisíveis"** que organizam a informação.
3. Desenvolve uma capacidade **quase intuitiva** de prever quais elementos fazem sentido juntos e quais não fazem. Exemplo: "encadeamento" pode ser de palavras ou de uma pessoa presa ("cadeia"), e o contexto decide.
4. Monta um **mapa probabilístico** do universo que conhece.
5. Percorre esse mapa por **caminhos que ninguém conhecia antes**, nem ela mesma, e produz **exemplos coerentes com o que aprendeu, mas diferentes do que aprendeu**.

**Conexões neurais:** como as sinapses humanas, as conexões se formam a partir do **treinamento inicial** e do **contexto de entrada**. Quanto mais dados no treino, mais calibrada a assertividade e **menor a chance de alucinação**.

### 🗺️ Analogia do cartógrafo
Um cartógrafo observa montanhas, rios e árvores e aprende as **regras do terreno**. Em vez de apenas marcar o que já existe ("aqui é o Everest, ali é a praia de Santos"), ele consegue:
- prever **onde poderia surgir uma nova montanha** ou para onde um rio poderia virar;
- desenhar o **mapa original de uma cidade que não existe**, parecida com a que ele estudou.

É isso que a IA generativa faz: aprende as regras e cria algo novo e coerente.

---

## 3. Modelos autorregressivos (ex.: ChatGPT)

- Geram o conteúdo **palavra por palavra**.
- A **próxima palavra é escolhida com base nas palavras anteriores**: cada escolha influencia a seguinte.
- O modelo vai **se autocompletando** até o conteúdo terminar, o que garante **coerência de contexto**.

**Exemplo:** "Com base nos livros do Harry Potter, crie um livro parecido."
1. O modelo consulta a base de conhecimento e extrai **estilo e regras**.
2. Estrutura essa regra, "como se o algoritmo estivesse se montando".
3. Gera o texto. Cada palavra gerada passa a orientar a próxima.

**Analogia com a fala humana:** quando falamos, a frase atual vai preparando a seguinte. Às vezes nos perdemos no meio da explicação e pensamos "por que eu vim parar nesse assunto?". O professor compara isso a uma **alucinação**, que também acontece com a IA.

---

## 4. Self-attention (autoatenção)

- Mantém o **foco nas relações importantes** dentro de uma **sequência longa**, deixando de lado elementos pouco relevantes.
- **Analogia do livro:** o modelo "lembra" do personagem principal apresentado no capítulo 1 e mantém a continuidade da história ao longo de todos os capítulos, mesmo com muita coisa desconexa no caminho.
- É essencial para gerar **textos longos**, porque mantém a ligação com o pedido inicial até o fim.

> O professor avisou que o tema é complexo e será aprofundado nas próximas aulas. Não tem problema se ainda não ficou claro.

---

## 5. Embeddings e representação vetorial

- Antes de processar palavras, imagens ou código, a IA **transforma tudo em vetores matemáticos**.
- Ela não "lê" português ou inglês: trabalha com **cálculo**, e a representação numérica funciona como uma **linguagem universal**.
- Os vetores são como **coordenadas em um espaço semântico** (de significado, e não geográfico).
- **Proximidade entre vetores = similaridade de significado.**

### Exemplo
| Par de palavras | Distância no espaço semântico | Analogia geográfica |
|---|---|---|
| **Rei e rainha** | Próximos | São Paulo e Osasco |
| **Rei e cachorro** | Distantes (raramente aparecem no mesmo contexto) | São Paulo e Nova York |

Quanto mais distante, menor a probabilidade de a IA seguir aquele caminho na geração.

---

## 🎯 Para levar da aula

1. A IA generativa não mapeia entrada para saída: ela aprende **padrões invisíveis** e monta um **mapa probabilístico** para criar.
2. **Cartógrafo:** aprende as regras do terreno e desenha mapas novos.
3. **Autorregressivo:** gera palavra por palavra, e cada palavra define a próxima. É o caso do ChatGPT.
4. **Self-attention:** mantém o foco no que importa em textos longos (o personagem do capítulo 1).
5. **Embeddings:** tudo vira vetor, e vetores próximos têm significados parecidos (rei ↔ rainha).
6. Mais dados de treino significam mais assertividade e menos **alucinação**.
