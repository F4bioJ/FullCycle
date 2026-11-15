# Quizz — Encoder-only

**Capítulo:** 3 - Hands on · **Aula:** 6
**Base:** material da aula

---

## 1. Um time só precisa classificar chamados de suporte por assunto e avalia usar um Transformer completo (encoder e decoder). Qual é o principal argumento da aula contra essa escolha?
- A) O decoder gera token a token, e por isso a saída do modelo completo não pode virar um rótulo de assunto.
- B) O modelo completo é pesado, e a tarefa pede só compreensão, então basta o encoder, que sai mais barato.
- C) O modelo completo mantém a ordem rígida das RNNs, e por isso lê textos longos com mais lentidão.
- D) O modelo completo só prevê o próximo token, e a compreensão do texto inteiro fica fora do que ele faz.

## 2. Uma empresa quer um único modelo encoder-only para ler cada reclamação, classificá-la e redigir uma resposta longa ao cliente. O que a aula indica?
- A) Atende bem às duas etapas, porque quem compreende o texto inteiro também redige melhor a resposta.
- B) Atende às duas etapas se treinado por mascaramento, porque preencher lacunas já é gerar texto.
- C) Pede o modelo completo nas duas etapas, porque a classificação depende do decoder para gerar o rótulo.
- D) Atende à classificação, mas não é o melhor para redigir, porque foi feito para ler, não para criar.

## 3. Em "O banco fechou cedo porque o caixa quebrou", as palavras que esclarecem o sentido de "banco" vêm depois dela. Por que um modelo como o BERT lida bem com isso?
- A) Cada token pondera também os tokens à direita, e assim "caixa" pesa na representação de "banco".
- B) A informação de posição indica que "banco" abre a frase, e a abertura costuma definir o sentido dela.
- C) A leitura ocorre da direita para a esquerda, e assim o modelo deixa de depender do que veio antes.
- D) O modelo prevê os tokens seguintes a "banco" e corrige o sentido quando a previsão não se confirma.

## 4. Alguém pergunta por que um modelo gerador como o GPT não olha também para a direita, como faz o BERT. Qual resposta é coerente com a aula?
- A) Porque a atenção para os dois lados custa caro, e o GPT abre mão dela para reduzir o custo.
- B) Porque ele processa um token por vez como as RNNs, e essa ordem rígida impede ver a sequência.
- C) Porque ele gera o futuro a partir do passado, e o que está à direita é o que ele ainda vai produzir.
- D) Porque a tokenização dele remove os tokens à direita, e eles só voltam na etapa de treinamento.

## 5. A palavra "manga" aparece em "suco de manga" e em "manga da camisa". O que a aula leva a esperar das representações de "manga" na saída do encoder?
- A) Serão iguais, porque token igual mantém o mesmo vetor, e a atenção ajusta o rótulo final.
- B) Serão iguais a menos da posição, porque o embedding posicional é o que difere entre as frases.
- C) Serão diferentes, porque o tokenizador divide a palavra de um jeito próprio em cada frase.
- D) Serão diferentes, porque cada camada incorpora a importância relativa das palavras em volta.

## 6. No treino do BERT, "O ___ latiu para o carteiro" tem uma palavra oculta. Por que esse tipo de tarefa desenvolve compreensão?
- A) Para acertar a lacuna, o modelo precisa usar o contexto dos dois lados da palavra que foi oculta.
- B) Para acertar a lacuna, o modelo aprende a continuar a frase a partir do último token que ela tem.
- C) Ao ocultar palavras, o vocabulário do treino diminui, e o modelo concentra a atenção no que restou.
- D) Ao ocultar palavras, a posição da lacuna fica marcada, e o modelo aprende a ordem correta da frase.

## 7. Um time quer preencher os campos pessoa, organização e local a partir de e-mails. Usou classificação de texto e recebeu só um rótulo por e-mail, como "comercial". O que o sintoma indica?
- A) Faltou busca semântica, porque comparar os e-mails por similaridade já traria os três campos.
- B) Faltou um modelo gerador, porque encoder-only entrega rótulos gerais e não separa esses trechos.
- C) A tarefa certa é NER, porque o objetivo é separar trechos em categorias, não rotular o texto todo.
- D) O máximo de tokens ficou baixo, porque o modelo cortou a resposta antes de listar os três campos.

## 8. Um time monta uma busca semântica: converteu a consulta em vetor e planeja compará-la com o texto puro dos documentos. O que falta?
- A) Extrair as entidades dos documentos com NER, para comparar a consulta com os nomes encontrados.
- B) Converter também os documentos em vetores, porque a comparação se faz por similaridade entre vetores.
- C) Trocar por um modelo gerador, para ele escrever um documento que responda à consulta do usuário.
- D) Classificar os documentos por assunto, para a consulta ser comparada com os rótulos que eles têm.

## 9. Uma busca por vetores com a consulta "como fazer um bolo" trouxe "receita para preparar um bolo" antes de "como fazer um barco". Um colega chama isso de bug, porque o segundo texto repete mais palavras da consulta. Qual avaliação segue a aula?
- A) É bug: embeddings são calculados palavra a palavra, então o par com mais termos iguais deveria liderar.
- B) Não é bug: a busca compara o significado dos textos, e palavras em comum não garantem proximidade.
- C) Não é bug: a atenção bidirecional dá mais peso ao último token, e "bolo" fecha a consulta e a receita.
- D) Não é bug, mas a ordem varia: a busca sorteia entre os vetores próximos, como o top-p faz na geração.

## 10. Um sistema classifica milhões de comentários por dia, com orçamento e tempo de resposta apertados. Qual escolha e motivo seguem a aula?
- A) ALBERT, porque abre mão do compartilhamento de parâmetros para rodar em máquinas menores.
- B) RoBERTa, porque o treino mais intenso o torna mais eficiente, e isso compensa o peso em produção.
- C) DistilBERT, porque a versão compacta sacrifica um pouco do resultado por velocidade e custo.
- D) BERT original, porque as variantes acrescentam camadas a ele, e a base é a que custa menos.
