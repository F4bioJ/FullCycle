# Gabarito — O que é Gen AI (avançado)

## 1. O que um LLM faz a cada passo
**Correta: A**
**Por quê:** O modelo faz uma única coisa: calcula a distribuição de probabilidade do próximo token. A geração é um laço de previsão, sorteio e realimentação.
- **B:** O modelo não consulta os dados de treino. Ele guarda padrões nos pesos.
- **C:** Não há etapa de montagem completa nem de revisão. O texto sai token a token.
- **D:** Isso descreve um classificador com respostas prontas, o modelo discriminativo.
**Seção:** 3. Gerar ainda é prever
**Conceito:** geração como previsão do próximo token

## 2. Discriminativo x generativo
**Correta: C**
**Por quê:** O discriminativo aprende a probabilidade do rótulo dado o exemplo. O generativo aprende como os dados são, e por isso consegue sortear exemplos novos.
- **A:** Os dois tipos podem usar redes neurais ou estatística clássica.
- **B:** É o inverso do usual: o discriminativo precisa de rótulos.
- **D:** A distinção não tem relação com a mídia. LLMs são generativos e produzem texto.
**Seção:** 2. Preditiva × generativa, em termos precisos
**Conceito:** p(y|x) x p(x)

## 3. Fine-tuning com dados pessoais
**Correta: B**
**Por quê:** O estudo extraiu do GPT-2 centenas de trechos literais do treino, incluindo nomes, telefones e e-mails, apenas com consultas ao modelo.
- **A:** É a crença que o estudo derrubou: o modelo guarda padrões e também memoriza.
- **C:** Nada no treino produz esse comportamento de recusa.
- **D:** O estudo concluiu o contrário: modelos maiores vazam mais.
**Seção:** 4. "Geração não é cópia", com uma ressalva importante
**Conceito:** memorização de dados de treino

## 4. Respostas diferentes para o mesmo prompt
**Correta: D**
**Por quê:** O modelo sorteia o próximo token conforme as probabilidades. Sorteios diferentes levam a caminhos diferentes.
- **A:** O modelo não é retreinado entre consultas.
- **B:** A distribuição calculada para um mesmo texto é a mesma. O que varia é o sorteio.
- **C:** Os pesos ficam fixos depois do treino.
**Seção:** 3. Gerar ainda é prever
**Conceito:** amostragem

## 5. Prompt vago, resposta genérica
**Correta: B**
**Por quê:** O prompt é a condição da distribuição. Pouca informação deixa a distribuição larga, e o mais provável dentro dela é o mais comum.
- **A:** Não existe penalidade por tamanho. Um prompt curto e específico funciona bem.
- **C:** Rótulos são do treino supervisionado, não do uso do modelo.
- **D:** Todas as camadas processam qualquer prompt.
**Seção:** 5. O prompt como condição
**Conceito:** prompt como condicionamento

## 6. O que a AlexNet ilustra
**Correta: A**
**Por quê:** Duas placas de videogame e 1,2 milhão de imagens rotuladas renderam uma vitória com mais de 10,8 pontos de vantagem. São os pilares de computação e dados juntos.
- **B:** O Transformer só surgiu em 2017. A AlexNet é uma rede convolucional.
- **C:** Foi a rede profunda treinada em GPU que venceu.
- **D:** O conjunto de dados rotulado foi condição para o resultado.
**Seção:** 1. Os três pilares, com números
**Conceito:** GPUs e dados como pilares

## 7. Fluência não é correção
**Correta: D**
**Por quê:** O objetivo do treino é a continuação mais plausível. Um texto errado e um correto podem ser igualmente plausíveis.
- **A:** Não há inserção deliberada de erros.
- **B:** O problema não é numérico. Respostas curtas também podem estar erradas.
- **C:** Prompt e temperatura influenciam as duas coisas, sem essa separação.
**Seção:** 6. Por que a saída "parece certa" e está errada
**Conceito:** plausível x verdadeiro

## 8. A mudança de paradigma
**Correta: C**
**Por quê:** A geração continua sendo previsão. Mudou o alvo (um pedaço do próprio dado) e a realimentação de cada previsão como entrada da seguinte.
- **A:** A geração é inteiramente probabilística.
- **B:** O modelo depende do que aprendeu no treino. O prompt só condiciona.
- **D:** O vocabulário é grande, mas o essencial é a realimentação, que essa alternativa ignora.
**Seção:** 3. Gerar ainda é prever
**Conceito:** alvo da previsão e realimentação

## 9. Classificação de fraude
**Correta: A**
**Por quê:** Para classificar, basta aprender a fronteira entre as classes. Um modelo discriminativo é mais barato, mais rápido e mais fácil de avaliar.
- **B:** Funciona, mas custa mais e é mais difícil de avaliar, sem ganho claro na tarefa.
- **C:** Não há motivo para converter dados tabulares em imagem.
- **D:** Temperatura alta aumenta a variação, o oposto do desejado em uma decisão de risco.
**Seção:** Armadilhas comuns
**Conceito:** quando usar modelo discriminativo

## 10. Afirmação INCORRETA
**Correta: B**
**Por quê:** O prompt é o começo do texto que o modelo continua. O que se obtém é a continuação provável dado o prompt.
- **A:** Correta: o processamento paralelo é o que casa o Transformer com as GPUs.
- **C:** Correta: é uma das conclusões de Carlini e colegas.
- **D:** Correta: cada placa tinha 3 GB e a rede não cabia em uma só.
**Seção:** 5. O prompt como condição
**Conceito:** prompt como texto a continuar
