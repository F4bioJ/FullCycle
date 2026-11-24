# Gabarito — Contexto do nosso experimento

## 1. O que a vitória de B sustenta
**Correta: A**
**Por quê:** o professor avisa que "A, B" aqui são só os rótulos prompt A e prompt B, e que isso não é um teste A/B, que normalmente acontece em produção. O experimento roda as duas variantes sobre o dataset e o juiz diz qual saída prefere segundo o critério dele. No prompt do juiz, a resposta B é o review do Performance Expert. Nada disso mede o efeito em usuários reais.
- **B:** juiz imparcial e entradas iguais tornam a comparação justa, mas ela continua offline: não diz qual impacto a troca teria em produção, que é o que um teste A/B mediria.
- **C:** a origem dos exemplos não muda a natureza da comparação; ela continua offline, julgada por um juiz, sem tráfego real.
- **D:** o pairwise serve justamente para comparar sem ground truth absoluto; a preferência do juiz segundo um critério explícito é evidência válida (aula anterior), só não é evidência de impacto em produção.
**Conceito:** prompt A/B não é teste A/B

## 2. Dar um código diferente a cada prompt
**Correta: C**
**Por quê:** no experimento, os dois prompts recebem o mesmo código, e o juiz recebe esse código mais as respostas A e B. Com a entrada fixa, a diferença entre os reviews vem da instrução de cada prompt, que é o que se quer comparar. Com códigos diferentes, um review pode vencer só porque recebeu um código com problema mais grave.
- **A:** o foco diferente é exatamente o que se quer comparar, e para isso a entrada precisa ser a mesma: o pairwise compara duas respostas para o mesmo input (aula anterior).
- **B:** o problema não é o empate, que continua previsto nas regras; é que a comparação deixa de ser sobre o mesmo input, e o juiz nem teria um código-fonte único para conferir os achados.
- **D:** o juiz continuaria recebendo as duas respostas numa chamada por exemplo; o que se perde não é custo, é a comparabilidade.
**Conceito:** entrada fixa isola o efeito do prompt

## 3. Juiz sem o código-fonte
**Correta: D**
**Por quê:** o pairwise judge recebe três entradas: o código-fonte, a resposta A e a resposta B. As regras mandam fazer uma verificação objetiva, olhar o código real e verificar o impacto. Sem o código, o juiz só compara os textos e não tem como saber se um finding existe ou é grave.
- **A:** é meia-verdade: o pairwise compara duas saídas, mas para o mesmo input, e aqui o julgamento depende de conferir os achados no código.
- **B:** o empate não depende de contar findings, e sim de os dois lados trazerem pontos críticos reais em peso igual; tirar o código prejudica todas as decisões, não só o tie.
- **C:** o código-fonte não é ground truth; é a entrada que os dois reviews analisaram. O experimento continua sendo comparativo.
**Conceito:** as três entradas do juiz

## 4. Falha de segurança e N+1 igualmente graves
**Correta: B**
**Por quê:** o prompt do juiz diz: pontos críticos reais de vulnerabilidade, escolhe A; pontos críticos reais de performance, escolhe B; se os dois forem encontrados igualmente, declara empate. A resposta pode ser A, B ou empate, e aqui os dois lados acertaram problemas de peso igual.
- **A:** a ordem em que as regras aparecem no prompt não cria prioridade; o empate existe justamente para o caso de peso igual.
- **C:** a ordem em que o professor apresentou os prompts não muda nada no julgamento, e no juiz a resposta B é o review do Performance Expert, sem papel de referência.
- **D:** o empate é um resultado previsto nas regras, não sinal de critério ruim; o juiz decide pelo impacto dos problemas, não pelo tamanho do texto.
**Conceito:** regras de decisão do juiz e empate

## 5. Segunda rodada com o prompt alterado
**Correta: C**
**Por quê:** o plano do professor é rodar A contra B, alterar um dos prompts (o `update prompt` versão 2) e rodar de novo para ver se a mudança melhorou. Para o antes e depois serem comparáveis, só o prompt alterado pode mudar: mesmo dataset, mesmo juiz.
- **A:** mudar o juiz junto com o prompt mistura duas mudanças; não dá para saber se o resultado mudou por causa da versão 2 ou da régua nova.
- **B:** testar em casos novos pode ser útil, mas com outro dataset a segunda rodada deixa de ser comparável com a primeira.
- **D:** trocar o modelo junto com o prompt também mistura duas mudanças; uma melhora poderia vir do modelo, e não da versão 2.
**Conceito:** iterar o prompt mudando uma coisa só
