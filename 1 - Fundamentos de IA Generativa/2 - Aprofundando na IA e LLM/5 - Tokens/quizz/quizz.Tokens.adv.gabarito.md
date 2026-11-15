# Gabarito — Tokens (avançado)

## 1. Dobro de tokens e custo da atenção
**Correta: B**
**Por quê:** Na atenção, cada token se compara com todos os outros, então o custo cresce com o quadrado do número de tokens. O dobro de tokens dá quatro vezes mais pares.
- **A:** Seria verdade para partes do modelo cujo custo é linear em n, mas não para a atenção.
- **C:** A atenção opera sobre tokens, não sobre o conteúdo em palavras. Mais tokens, mais pares.
- **D:** O que cada token carrega não reduz o número de comparações.
**Seção:** 1. Por que nem palavra, nem letra
**Conceito:** tokens e custo quadrático da atenção

## 2. Dobrar o vocabulário
**Correta: C**
**Por quê:** Um vocabulário maior encurta as sequências, o que reduz o custo da atenção. Em troca, a tabela de embeddings (V × d) e a camada de saída crescem.
- **A:** O ganho não é de embeddings mais ricos em cada token, e o preço principal não está no tokenizador, e sim nas duas matrizes que dependem de V.
- **B:** Meia-verdade: a tabela de embeddings cresce, mas a matriz de saída (d × V) cresce junto, porque as duas dependem de V.
- **D:** Com sequências mais curtas, a atenção fica mais barata, e não mais cara.
**Seção:** 5. Do token ao embedding (e ao softmax)
**Conceito:** troca no tamanho do vocabulário

## 3. Fragmento errático no vocabulário
**Correta: A**
**Por quê:** O tokenizador é treinado antes e à parte, por um algoritmo próprio, sobre um corpus que pode ser diferente do corpus do modelo. Um fragmento pode entrar no vocabulário e ter pouquíssimos exemplos no treino do modelo, ficando com embedding mal treinado (os glitch tokens).
- **B:** Não existe token de erro nem entrada por engano. O fragmento é válido para o tokenizador, e o problema está no pouco que o modelo o viu.
- **C:** A atenção não zera tokens por raridade. O problema está no embedding mal treinado.
- **D:** É o contrário: o tokenizador é treinado à parte, e é essa distância que gera o defeito. A aula simplificou isso ao falar de formação junto com o treino.
**Seção:** 4. O que a aula simplificou (4.1) e 5. Do token ao embedding
**Conceito:** tokenizador treinado à parte do modelo

## 4. Reordenar as merges
**Correta: D**
**Por quê:** O resultado do treino do tokenizador é uma lista ordenada de merges. Para um texto novo, ele aplica as merges na mesma ordem, então a ordem decide qual fusão acontece primeiro e pode mudar a segmentação.
- **A:** O vocabulário é o mesmo, mas a ordem das fusões determina como cada palavra é montada.
- **B:** Os IDs dos tokens continuam apontando para os mesmos embeddings. Mudar a ordem não os altera.
- **C:** O efeito não é de velocidade, e sim de segmentação.
**Seção:** 2. O algoritmo do BPE, passo a passo
**Conceito:** merges aplicadas em ordem

## 5. Emoji raro e símbolo inicial
**Correta: C**
**Por quê:** O BPE original começa em caracteres, e um emoji ausente do corpus fica sem símbolo. O BPE dos modelos GPT começa de bytes: qualquer texto em UTF-8 pode ser escrito com eles, então não existe entrada desconhecida.
- **A:** O vocabulário só tem o que veio do corpus e das merges. Um emoji ausente do corpus não entra por o vocabulário ser maior.
- **B:** Não há etapa que crie símbolos para o que falta. A solução é começar de bytes.
- **D:** Um tokenizador não cria tokens em uso. O vocabulário é fixo depois de treinado.
**Seção:** 3. Do caractere ao byte: o BPE dos modelos GPT
**Conceito:** BPE em nível de byte

## 6. " é" com mais de um byte vira um token
**Correta: B**
**Por quê:** Em UTF-8, o "é" ocupa mais de um byte e só vira um símbolo por uma fusão. Ela acontece porque a sequência aparece com muita frequência (no tokenizador, até com o espaço colado, "␣é"), o que confirma a intuição do professor sobre o "é" ser forte.
- **A:** Não há conversão do acento para letra simples. O "é" é preservado.
- **C:** A pré-tokenização apenas separa o texto em grupos (letras, números, pontuação, espaços). Quem junta bytes em tokens são as merges.
- **D:** Nenhuma regra do UTF-8 cria tokens. Os bytes só se juntam por merges, que dependem de frequência.
**Seção:** 4. O que a aula simplificou (4.4)
**Conceito:** o "é" com mais de um byte e uma fusão

## 7. Palavra com e sem espaço antes
**Correta: A**
**Por quê:** A pré-tokenização deixa o espaço colado ao início da palavra, e as merges formam tokens com o espaço. A versão com espaço antes pode ser uma sequência frequente que virou token único, enquanto a sem espaço se divide em mais pedaços (como "strawberry" em 3 tokens contra " strawberry" em 1).
- **B:** O tokenizador não distingue nomes próprios nem posição no texto.
- **C:** O espaço não é ignorado, é parte do token. A diferença está na tokenização, e não na atenção.
- **D:** Não há apagar e devolver o espaço. Ele permanece no token.
**Seção:** 6. O que muda na prática (6.2) e 3. Do caractere ao byte
**Conceito:** pré-tokenização e espaço no token

## 8. Trocar de tokenizador e custo
**Correta: D**
**Por quê:** A contagem de tokens para o mesmo texto muda de um modelo para outro, porque cada um traz o seu vocabulário. Por isso a estimativa deve ser refeita com o tokenizador do modelo escolhido, em amostras reais.
- **A:** A cobrança é por token, e é justamente o número de tokens do mesmo texto que muda.
- **B:** Não há regra de que o tokenizador novo renda mais tokens. Mudar de modelo pode aumentar ou reduzir a contagem, e só medindo se sabe.
- **C:** Palavras não medem o custo nem o contexto. Elas são o que se evita usar como estimativa.
**Seção:** 3. Do caractere ao byte: o BPE dos modelos GPT e 6. O que muda na prática (6.1)
**Conceito:** contagem de tokens muda entre modelos

## 9. 9.11 contra 9.9
**Correta: B**
**Por quê:** O modelo não vê o número, vê IDs de tokens. Um número como 9.11 chega em pedaços (9 · . · 11), e a comparação pode acabar sendo feita entre pedaços, e não entre valores.
- **A:** 9.11 não vira um token próprio: chega como 9, . e 11. Não há um embedding do número inteiro para ficar perto do de 9.9.
- **C:** Meia-verdade: a pré-tokenização separa números da pontuação, mas não descarta nada. O ponto vira um token como os outros.
- **D:** O número não chega algarismo por algarismo: o 11 é um token só, e números longos viram blocos (12345678 → 123 · 456 · 78).
**Seção:** 6. O que muda na prática (6.3) e 3. Do caractere ao byte
**Conceito:** o modelo vê tokens, não valores nem letras

## 10. Termos raros em português custam mais tokens
**Correta: C**
**Por quê:** A divisão em tokens é estatística e não respeita sílabas nem morfemas. As merges saem da frequência no corpus do tokenizador: um termo que ali aparece pouco não tem fusões próprias e se parte em muitos pedaços sem relação com a morfologia, o que aumenta a contagem de tokens e o custo.
- **A:** A divisão não segue prefixo, raiz e sufixo. Os cortes são estatísticos.
- **B:** Quem decide a divisão é o tokenizador, treinado antes e à parte do modelo. A frequência que conta é a do corpus do tokenizador, e não o que o modelo viu no próprio treino.
- **D:** O embedding tem a mesma dimensão para todos os tokens, e cada token ocupa uma posição na janela.
**Seção:** 4. O que a aula simplificou (4.1 e 4.5) e 2. O algoritmo do BPE
**Conceito:** a divisão não é morfológica e depende do corpus do tokenizador
