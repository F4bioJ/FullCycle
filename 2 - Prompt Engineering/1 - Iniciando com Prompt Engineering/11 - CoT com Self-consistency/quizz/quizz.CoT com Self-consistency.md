# Quizz — CoT com Self-consistency

**Capítulo:** 1 - Iniciando com Prompt Engineering · **Aula:** 11
**Base:** material da aula

---

## 1. Na terceira execução do GPT-3.5 Turbo, os caminhos deram N, N e N+1, e o modelo respondeu N. O que esse resultado mostra sobre o self-consistency?
- A) A votação foi mal aplicada: a técnica deveria ficar com o caminho mais detalhado, não com o mais frequente.
- B) A votação fez o que promete, mas consistência não é prova: um erro que se repete na maioria vence.
- C) O modelo deveria ter seguido a condição do prompt e respondido que não havia resposta consistente.
- D) O caminho N+1 era o outlier, e o modelo errou ao não dar peso extra à resposta que divergia.

## 2. Na primeira execução do GPT-3.5 Turbo, os três caminhos deram N, N+1 e duas queries, e a resposta final foi N. O que deu errado, segundo a aula?
- A) N era a resposta da maioria, então a escolha seguiu a técnica, embora o resultado estivesse errado.
- B) O modelo descartou N+1 e "duas queries" como outliers, como o prompt pedia, e ficou com o caminho restante.
- C) O terceiro caminho estava certo, porque as funções podem otimizar a busca, e a resposta deveria ser duas.
- D) Com as três respostas diferentes, o prompt pedia para admitir que não havia consenso, e o modelo não seguiu.

## 3. Uma equipe tem dois casos: um classificador de sentimento simples, de alto volume, que já acerta bem; e uma decisão de arquitetura em que o time está em dúvida. Onde o self-consistency faz mais sentido, pela aula?
- A) Na decisão de arquitetura, onde há dúvida; no classificador, o custo extra agrega pouco.
- B) No classificador: com alto volume, vários caminhos por mensagem tendem a elevar a precisão.
- C) Na decisão de arquitetura, mas só pedindo 10 ou 20 caminhos; com três, a votação não vale.
- D) Nos dois, porque, quando a maioria dos caminhos concorda, a votação chega à resposta certa.

## 4. A aula parte de um problema do Chain of Thought: um único raciocínio pode estar errado e levar a uma resposta errada. Como o self-consistency ataca esse problema?
- A) Confere cada passo contra o código ou a fonte e corrige os passos inventados antes de responder.
- B) Pede ao modelo que revise uma vez o próprio raciocínio e corrija o que julgar que está errado.
- C) Gera vários caminhos para a mesma pergunta e fica com a conclusão que mais se repete entre eles.
- D) Gera um caminho mais longo e detalhado, para que o erro de um passo seja compensado pelos outros.

## 5. Com o mesmo prompt, o GPT-3.5 Turbo variou entre execuções e chegou a escolher a resposta errada por maioria, enquanto o GPT-4o deu N+1 em todos os caminhos. Que conclusão a aula sustenta?
- A) O self-consistency iguala os modelos, então um modelo mais barato tende a bastar quando há votação.
- B) A técnica organiza a decisão sobre o que o modelo gera, e o modelo base continua mudando o resultado.
- C) O GPT-4o acertou porque usa reasoning por padrão, e o self-consistency só funciona bem nesses modelos.
- D) O GPT-4o acertou porque descartou o caminho outlier, enquanto o 3.5 Turbo deu o mesmo peso a todos.
