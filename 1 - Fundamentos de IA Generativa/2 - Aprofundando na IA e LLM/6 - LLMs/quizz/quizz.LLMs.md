# Quizz — LLMs

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 6
**Base:** material da aula

---

## 1. Qual afirmação sobre LLMs está INCORRETA?
- A) Costumam se basear no Transformer, combinando autoatenção, embeddings e camadas feedforward.
- B) GPT e BERT têm o mesmo objetivo de treino e, por isso, servem bem às mesmas tarefas.
- C) São treinados com bilhões de parâmetros e muito texto, o que dá fluência, coerência e adaptação.
- D) Existem vários, e cada um pode ter um objetivo diferente, como gerar texto ou compreender e classificar.

## 2. Um app de atendimento adotou o BERT para redigir as respostas ao cliente e o resultado ficou fraco. Qual é a explicação mais coerente com a aula?
- A) Ele foi treinado para preencher lacunas usando o contexto antes e depois da palavra, e não para redigir texto.
- B) Ele lê da esquerda para a direita, então perde o contexto que vem depois e não consegue redigir a resposta.
- C) Ele não usa a arquitetura Transformer, e sim uma estratégia anterior baseada em bigramas, pouco fluente.
- D) Ele foi pré-treinado com menos texto que o GPT, e é a escala de dados que define a capacidade de gerar.

## 3. Um modelo pré-treinado produz respostas corretas e fluentes, mas, quando várias respostas suas são comparadas lado a lado, muitas são consideradas pouco proveitosas por quem as usa. Qual fase de treino ataca mais diretamente esse problema?
- A) Mais pré-treinamento com textos de melhor qualidade, para que o modelo aprenda respostas mais completas.
- B) Fine-tuning supervisionado para uma tarefa específica, como classificação ou resposta, com exemplos já corrigidos.
- C) Few-shot, que mostra ao modelo alguns exemplos de boas respostas durante o uso.
- D) RLHF, que usa preferências humanas entre respostas para orientar quais são mais úteis e adequadas.

## 4. Uma equipe tem bilhões de tokens de livros, sites e código. Como o pré-treinamento extrai sinal de treino desse material?
- A) Uma amostra pequena é rotulada à mão, e o modelo generaliza para o resto do material.
- B) Pessoas marcam cada trecho com a tarefa que ele representa, e o modelo aprende a classificar.
- C) O modelo prevê a próxima palavra ou uma lacuna e confere com o texto original.
- D) Um modelo menor escreve rótulos para cada trecho, e o modelo grande aprende a reproduzi-los depois.

## 5. Uma empresa quer um modelo para classificar chamados de suporte e já tem exemplos classificados. Qual caminho faz mais sentido e por quê?
- A) Partir de um modelo generalista e ajustá-lo com os exemplos, em vez de treinar um sistema novo para cada problema.
- B) Treinar do zero um modelo próprio com os chamados, porque modelos grandes entendem pouco do vocabulário de uma empresa.
- C) Repetir o pré-treinamento com os chamados, porque o ajuste supervisionado serve para mudar o estilo das respostas.
- D) Aplicar RLHF direto, porque as preferências humanas ensinam a linguagem antes de qualquer pré-treinamento.

## 6. Qual associação entre modelo e foco, segundo a aula, está INCORRETA?
- A) GPT: foco em geração textual e assistente, com previsão da próxima palavra a partir do histórico.
- B) Gemini: pensado para gerar texto, imagem e código, com uma pegada multimodal desde o início.
- C) LLaMA: foco em compreensão e classificação, porque olha o contexto dos dois lados do texto.
- D) BERT: forte em sentimento e perguntas e respostas, por considerar a esquerda e a direita de cada palavra.

## 7. Uma equipe precisa extrair campos de notas fiscais, mas só tem três amostras prontas. Qual característica dos LLMs viabiliza uma solução?
- A) O RLHF, que adapta o modelo às preferências da equipe a cada conversa feita com ele.
- B) A autossupervisão, que gera novos rótulos a partir das três amostras antes de o modelo responder.
- C) O fine-tuning supervisionado, que com três amostras já especializa o modelo em notas fiscais.
- D) A capacidade emergente de executar tarefas novas com poucos exemplos, o chamado few-shot.

## 8. Uma busca interna recebe "não consigo entrar na conta" e devolve o artigo "erro de login", embora os dois textos não tenham nenhuma palavra em comum. Que parte do LLM torna isso possível?
- A) A tokenização, que quebra as frases em fragmentos menores e acha os pedaços que se repetem nos dois textos.
- B) Os embeddings, que levam os tokens a um espaço numérico em que significados parecidos ficam próximos.
- C) A autoatenção, que relaciona cada token com os demais da sequência e liga "entrar" a "login" pelo contexto.
- D) O RLHF, que ensinou o modelo a tratar como equivalentes as respostas que as pessoas preferiram.

## 9. Um texto de entrada tem uma palavra rara que o tokenizador dividiu em três fragmentos. O que a aula leva a concluir sobre o processamento desse trecho?
- A) A palavra é reagrupada antes da autoatenção, que então compara apenas palavras completas entre si.
- B) O fragmento final concentra a atenção das demais posições, porque carrega o sentido da palavra.
- C) Cada fragmento é um token e se relaciona com todos os outros da sequência.
- D) Os fragmentos raros ganham embeddings próprios, mas a atenção só compara tokens vizinhos na sequência.

## 10. Um aluno afirma: "o ChatGPT apenas decorou textos". Qual resposta está mais de acordo com a aula?
- A) Não só memorizam padrões: aprendem a representar contexto, o que sustenta fluência, coerência e adaptação a tarefas.
- B) Em parte: o treino busca padrões frequentes, então o desempenho vem de recombinar trechos já vistos.
- C) Vale para o pré-treinamento; depois do RLHF o modelo deixa de depender dos padrões aprendidos do texto.
- D) Vale para modelos menores; a partir de certa escala o modelo passa a ignorar os padrões estatísticos do texto.
