# Quizz — Como a Gen AI aprende (avançado)

**Capítulo:** 1 - Gen IA · **Aula:** 3
**Base:** material avançado

---

## 1. O material diz que a regra da cadeia torna o problema do "mapa" tratável. O que ela troca pelo quê?
- A) Troca a previsão de tokens pela previsão de frases, que são menos numerosas.
- B) Troca o texto real por uma amostra dele, reduzindo o que precisa ser visto.
- C) Troca dar probabilidade a cada texto por aprender uma função do próximo token.
- D) Troca o produto das probabilidades por uma soma, mais estável de calcular.

## 2. Em dois exemplos de treino, o modelo A dá 0,50 ao token correto em ambos. O modelo B dá 0,90 em um e 0,10 no outro. Sabendo que −log vale 0,11 para 0,90, 0,69 para 0,50 e 2,30 para 0,10, qual tem a menor perda média, e o que isso mostra?
- A) O A, com 0,69 contra 1,20: o erro confiante custa mais do que o acerto confiante rende.
- B) O B, graças ao 0,11: a perda premia quem chega mais perto de 1,0 em algum exemplo.
- C) Empatam, pois a probabilidade média dada ao token correto é 0,50 nos dois modelos.
- D) O B, com 1,20 contra 1,38: somadas as perdas, sai na frente quem acerta um exemplo.

## 3. O material liga a forma da curva de perda ao fato de o modelo "não saber que não sabe". Qual é a ligação?
- A) A perda só é calculada nos tokens que o modelo acerta, então os erros não o corrigem.
- B) A perda cresce com o tamanho do texto, então o modelo aprende a encurtar respostas.
- C) A perda pune a indecisão mais do que o erro, então o modelo aprende a ser taxativo.
- D) A perda pune caro descartar o que era plausível, então o modelo aprende a mantê-lo.

## 4. Um modelo tem perda muito baixa no treino, mas descarrila em gerações longas. Um engenheiro propõe treinar por mais tempo nos mesmos dados. Pelo material, por que isso ataca pouco o problema?
- A) Porque perda baixa indica memorização, e um modelo que memoriza gera textos curtos.
- B) Porque no treino o começo é sempre o texto real, e o desvio nasce do texto do próprio modelo.
- C) Porque o desvio vem dos embeddings, que não são ajustados durante esse tipo de treino.
- D) Porque a perda mede só o primeiro token de cada trecho, e não os que vêm depois dele.

## 5. Com 99% de chance por token de manter o rumo, o material chega a ≈37% de nenhum desvio em 100 tokens. Um time divide a tarefa em 10 etapas de 10 tokens, com verificação e correção entre elas. O que muda?
- A) Nada: 0,90¹⁰ dá praticamente os mesmos 37%, e verificar não altera essa conta.
- B) A chance por token sobe acima de 99%, pois prompts curtos geram tokens melhores.
- C) A chance total passa a 90%, pois o que conta é só a última etapa, de 10 tokens.
- D) O ganho está na verificação: sem ela, 0,90¹⁰ praticamente repete os 37% do texto único.

## 6. Num corpus, "café" e "chá" quase nunca aparecem na mesma frase, mas ambos surgem em "tomei um ___ quente" e "uma xícara de ___". Já "café" e "xícara" aparecem juntos o tempo todo. Pelo material, o que esperar do word2vec?
- A) "Café" fica mais perto de "chá", pois o que aproxima é ocupar as mesmas lacunas.
- B) "Café" fica mais perto de "xícara", pois o que aproxima é a frequência lado a lado.
- C) Os três ficam equidistantes, pois o modelo guarda um único vetor para cada palavra.
- D) "Café" e "chá" ficam em direções opostas, pois disputam as mesmas posições na frase.

## 7. Um banco vetorial usa similaridade de cosseno. O documento X tem vetor [3, 4], o documento Y tem [30, 40] e a consulta é [4, 3]. Como X e Y são ranqueados?
- A) Y vem antes, pois o produto escalar dele com a consulta é dez vezes maior.
- B) X vem antes, pois está a uma distância em linha reta bem menor da consulta.
- C) Empatam em 0,96, pois têm a mesma direção e o cosseno desconta o tamanho.
- D) Empatam em 1,0, pois os três vetores são positivos e usam os mesmos números.

## 8. O que o resultado rei − homem + mulher ≈ rainha mostra, segundo o material?
- A) Que o modelo armazena pares de palavras relacionadas e os recupera por consulta.
- B) Que direções no espaço carregam relações, e não só a vizinhança entre palavras.
- C) Que palavras de sentido oposto recebem vetores com cosseno próximo de −1,0.
- D) Que a soma de dois vetores devolve sempre o vetor de uma palavra existente.

## 9. Para desambiguar "banco" nas buscas, um time troca o word2vec por representações contextuais de um Transformer. Que custo o material associa a essa troca?
- A) Cada vetor deixa de ser uma consulta a uma tabela e passa a exigir rodar o modelo.
- B) Os vetores deixam de aceitar o cosseno, e a busca precisa de uma nova medida.
- C) O vocabulário precisa ser anotado à mão com os sentidos de cada palavra.
- D) Cada palavra ganha um vetor fixo por sentido, guardado em uma tabela maior.

## 10. Qual afirmação está INCORRETA segundo o material?
- A) Trocar o modelo de embedding de uma busca semântica obriga a reindexar os documentos.
- B) A self-attention dá pesos menores aos elementos pouco relevantes, sem descartá-los.
- C) No word2vec, os rótulos do treino saem do próprio texto, sem anotação manual.
- D) Dois vetores com cosseno 0,0 apontam em direções opostas no espaço de vetores.
