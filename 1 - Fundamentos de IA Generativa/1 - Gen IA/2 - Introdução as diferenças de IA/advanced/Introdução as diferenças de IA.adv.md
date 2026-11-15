# Introdução às diferenças de IA — material avançado

**Capítulo:** 1 - Gen IA · **Aula:** 2

A aula separou a IA tradicional (supervisionada, que prevê) da generativa (que cria). Este material detalha como o aprendizado supervisionado funciona por dentro, as três formas clássicas de ele falhar e de onde vêm os "rótulos" de um modelo generativo, que a aula disse não existirem.

---

## 1. Anatomia do aprendizado supervisionado

No exemplo do Titanic, cada passageiro vira uma linha de tabela:

| Termo | No Titanic | Papel |
|---|---|---|
| **Features** (atributos) | idade, classe, posição da cabine | o que o modelo recebe |
| **Rótulo** (label) | sobreviveu ou não | o que ele deve acertar |
| **Função de perda** | quão longe a previsão ficou do rótulo | o que o treino minimiza |

O treino é um ciclo: o modelo prevê, a função de perda mede o erro, e os parâmetros são ajustados para errar um pouco menos. Repete-se isso milhares de vezes.

A parte que a aula não mostrou é a **avaliação**. O modelo é sempre testado em exemplos que **não viu no treino**. Sem essa separação entre treino e teste, não há como distinguir um modelo que aprendeu o padrão de um que decorou a tabela.

## 2. Classificação devolve uma nota, não uma decisão

A aula citou o *score* de fraude. Esse é o detalhe central: um classificador não responde "fraude" ou "normal". Ele devolve um número entre 0 e 1, e alguém escolhe o **limiar** (threshold) acima do qual o sistema age.

Mover o limiar troca um erro por outro:

| Limiar | Fraudes capturadas (recall) | Alarmes falsos | Efeito no negócio |
|---|---|---|---|
| Baixo (0,2) | quase todas | muitos | clientes bons bloqueados |
| Alto (0,9) | poucas | quase nenhum | fraude passando |

**Precisão** é a fração dos alertas que eram fraude de verdade. **Recall** é a fração das fraudes que geraram alerta. Subir uma costuma derrubar a outra, e o ponto certo é uma decisão de negócio.

### A armadilha da acurácia

Se 0,5% das transações são fraude, um "modelo" que responde **"normal" para tudo** acerta 99,5% das vezes e não captura nenhuma fraude. Em classes desbalanceadas, a acurácia não diz quase nada. Olhe para precisão e recall.

## 3. Três formas clássicas de falhar

**Rótulo errado.** É o caso do cachorro rotulado como humano. O ponto que vale reforçar: o modelo aprende o erro **com fidelidade**. Se o erro é sistemático, mais dados com o mesmo erro não corrigem nada, só dão mais confiança ao modelo errado.

**Vazamento de dados (data leakage).** Uma feature carrega, sem querer, a resposta. Exemplo: prever fraude usando o campo "houve estorno", que só é preenchido *depois* de a fraude ser confirmada. O modelo brilha na validação e fracassa em produção, onde esse campo ainda não existe no momento da decisão.

**Overfitting.** O modelo decora o treino em vez de aprender o padrão. O sintoma é a distância entre os dois números: 99% de acerto no treino e 70% no teste.

## 4. De onde vêm os rótulos da IA generativa

A aula disse que a IA generativa aprende "sem rótulos explícitos". É verdade que ninguém rotula nada à mão. Mas existe um rótulo, e ele vem **dos próprios dados**. O nome disso é **aprendizado autossupervisionado**.

Pegue a frase "o gato dorme no sofá":

| Entrada | Rótulo (o que vem depois) |
|---|---|
| o | gato |
| o gato | dorme |
| o gato dorme | no |
| o gato dorme no | sofá |

Uma frase de cinco palavras gerou quatro exemplos rotulados, sem nenhum trabalho humano. Aplique isso a boa parte da internet e você tem trilhões de exemplos. É por isso que a IA generativa escala: o custo de rotular foi a zero.

Os quatro tipos de aprendizado, lado a lado:

| Tipo | De onde vem o sinal de acerto | Exemplo |
|---|---|---|
| Supervisionado | rótulo dado por uma pessoa | Titanic, spam |
| Não supervisionado | nenhum; o modelo acha estrutura | agrupar clientes parecidos |
| **Autossupervisionado** | dos próprios dados | prever a próxima palavra |
| Por reforço | recompensa após uma ação | jogos, ajuste por feedback humano |

O pré-treino de um LLM é do terceiro tipo. O mecanismo de ajuste é o mesmo do supervisionado: prever, medir o erro, corrigir os parâmetros.

## 5. A múltipla escolha dentro do escritor

A analogia da aula (aluno de múltipla escolha × escritor) é boa, mas esconde uma continuidade. A cada passo, o modelo generativo resolve uma **múltipla escolha**: qual dos tokens do vocabulário vem agora? São dezenas de milhares de alternativas em vez de quatro.

O "escritor" é essa múltipla escolha repetida centenas de vezes, com cada resposta entrando no enunciado da próxima. O espaço de saída não é fechado porque o número de combinações é astronômico, e não porque o mecanismo seja outro.

## 6. Quando cada uma é a ferramenta certa

| Situação | Melhor escolha | Por quê |
|---|---|---|
| Saída é uma classe ou um número | tradicional | mais barata, rápida e fácil de avaliar |
| Dados em tabela, com histórico rotulado | tradicional | é o caso para o qual ela foi feita |
| Decisão precisa ser explicada e auditada | tradicional | score e features são inspecionáveis |
| Saída é texto, imagem ou código | generativa | o espaço de resposta é aberto |
| Entrada é linguagem livre | generativa | lida com variação sem regras manuais |

Sistemas reais combinam as duas: um classificador decide *se* algo é suspeito, e um modelo generativo redige a explicação para o analista.

---

## O que a aula simplificou

- **"Sem necessidade de rótulos."** Sem rótulos *manuais*. O pré-treino usa como rótulo o próprio texto: o próximo token.
- **"Aprende por tentativa e erro, reforçado como positivo ou negativo, como uma criança."** Isso descreve aprendizado por reforço. O pré-treino de um LLM é autossupervisionado: minimiza o erro de previsão do próximo token. O reforço com feedback humano existe, mas é uma etapa posterior e bem menor, que o curso cobre na aula de RLHF.
- **"A tradicional não cria nada, só generaliza."** As duas generalizam a partir do que viram. A diferença está no tamanho do espaço de saída.
- **"Detecção de fraude é supervisionada."** Muitas vezes é. Mas "sinalizar comportamento muito diferente do usual" também é feito sem rótulos, por detecção de anomalia.

## Implicações para quem constrói software com IA

- **Não use um LLM para o que um classificador resolve.** Latência, custo e dificuldade de avaliação são piores, sem ganho de qualidade.
- **Defina o limiar junto com o negócio.** Qual erro custa mais: bloquear um cliente bom ou deixar passar uma fraude?
- **Desconfie de métricas boas demais.** O primeiro suspeito é vazamento de dados.
- **Audite os rótulos antes de buscar mais dados.** Quantidade não corrige erro sistemático.

## Armadilhas comuns

- Medir um problema desbalanceado por acurácia.
- Avaliar o modelo nos mesmos dados em que ele treinou.
- Usar no treino um campo que não existe no momento da decisão.
- Tratar "generativa" e "tradicional" como gerações (nova e velha), quando são ferramentas para problemas diferentes.

## Fontes

- Self-supervised learning (definição e comparação com os outros tipos) — https://en.wikipedia.org/wiki/Self-supervised_learning
