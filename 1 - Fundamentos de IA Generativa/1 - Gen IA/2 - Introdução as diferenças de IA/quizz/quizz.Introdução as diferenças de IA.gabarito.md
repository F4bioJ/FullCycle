# Gabarito — Introdução as diferenças de IA

## 1. Aplicativo que reconhece a música pelo áudio
**Correta: B**
**Por quê:** O professor cita o reconhecimento de música junto com o de imagem como tarefa tradicional: o modelo identifica "a coisa que você está procurando" porque os dados de entrada já eram conhecidos no treino. Nada é criado.
- **A:** O som é citado como formato de **saída** da generativa. Aqui o som é a entrada, e a saída é um nome que já existia.
- **C:** "A resposta é definida na hora da entrada" é a característica da generativa, mas ali a saída é composta. Aqui ela é escolhida entre músicas conhecidas.
- **D:** A aula fala em modelo treinado com dados conhecidos, não em regras escritas à mão para cada caso.
**Conceito:** identificar x criar

## 2. Para que treinar com um desfecho já conhecido
**Correta: D**
**Por quê:** O passado rotulado não é o objetivo, é a referência. O professor fala em usar os dados para prever o "Titanic 2", ou seja, casos novos com a mesma estrutura.
- **A:** O desfecho já é dado ao modelo. Ele não confirma nada, aprende a partir disso.
- **B:** O modelo associa atributos dos passageiros ao desfecho. Ele não explica por que o navio afundou.
- **C:** Na IA tradicional da aula, sem a saída conhecida não há treino. O desfecho não é um acelerador, é a condição.
**Conceito:** papel do histórico rotulado

## 3. "Primeira classe" é rótulo a prever?
**Correta: A**
**Por quê:** Idade, cabine e classe são os dados de entrada que alimentam o modelo. O que ele precisa entregar, nas palavras do professor, é "quem vai viver e quem vai morrer".
- **B:** A classe do bilhete é de fato uma categoria, mas é um atributo do passageiro, não a saída do modelo.
- **C:** A aula não descreve previsões intermediárias. A classe entra pronta, junto com os outros atributos.
- **D:** O professor chama justamente esses atributos de "dados classificados e rotulados". A entrada também é conhecida e categorizada.
**Conceito:** entradas x saída no aprendizado supervisionado

## 4. Por que o modelo não corrige o rótulo errado
**Correta: C**
**Por quê:** O modelo aprende a mapear entrada para saída a partir do rótulo. Se o rótulo diz "humano", é isso que ele toma como verdade: ele não tem outra fonte para questionar.
- **A:** Em produção ele repete o que aprendeu. Imagens novas não revelam o erro, apenas o reproduzem.
- **B:** O problema não é a semelhança entre os dois. Com rótulos certos, o modelo separaria um do outro.
- **D:** Separar categorias é uma das duas tarefas da IA tradicional citadas na aula (classificação e regressão).
**Conceito:** dependência de rótulos consistentes

## 5. Titanic x praia no fim de semana
**Correta: D**
**Por quê:** O Titanic tem duas saídas possíveis, viver ou morrer: é classificação. O da praia pergunta "quantas pessoas vão": é uma quantidade, ou seja, regressão.
- **A:** Os dois usam histórico conhecido. O da praia se apoia no que aconteceu nos últimos fins de semana e feriados.
- **B:** Os dois preveem. O exemplo da praia estima o próximo fim de semana a partir do passado.
- **C:** O professor diz que é a análise estatística de sempre, "mas aqui com IA trazendo por trás um modelo de previsão".
**Conceito:** classificação x regressão

## 6. O que dispara a suspeita de fraude
**Correta: A**
**Por quê:** O modelo aprende as ações comuns do cliente e prevê o que é esperado dele. Uma ação muito diferente "não está no que eu consegui prever" e vira alerta, com um score.
- **B:** A aula descreve aprendizado do comportamento do cliente, não uma lista de golpes cadastrados.
- **C:** O score aparece na aula, mas como medida do desvio em relação ao padrão, não como regra de valor acima do limite.
- **D:** É uma técnica plausível, mas a aula compara o cliente com o histórico dele mesmo, não com o de outros.
**Conceito:** fraude como desvio do padrão previsto

## 7. Afirmação INCORRETA sobre a IA generativa
**Correta: C**
**Por quê:** A generativa é treinada com muito dado. O que se define na hora do prompt é a **saída**, não o aprendizado. A fala do professor ("ele tem que aprender na hora que eu mando") se refere a determinar a resposta.
- **A:** Correta: "ela é treinada com muito dado, a outra também era".
- **B:** Correta: "a saída pode ser em texto, imagem, som e assim por diante. A ideia vai ser a mesma".
- **D:** Correta: "sem necessidade de rótulos explícitos no dado".
**Conceito:** saída definida na entrada x treino

## 8. Recomendação de produto nunca comprado
**Correta: B**
**Por quê:** O marketplace "tenta prever o seu comportamento de compra" com base nas compras passadas. O produto sugerido já existe no catálogo: o modelo direciona, não cria.
- **A:** O professor diz que por trás dessas sugestões há algoritmos de IA, não regras fixas.
- **C:** O enunciado diz que o produto nunca foi comprado. Prever não é repetir o histórico, é generalizar a partir dele.
- **D:** A aula diz que a generativa não **precisa** de rótulos explícitos, não que seja incapaz de usar dados rotulados.
**Conceito:** limitação da IA tradicional (não cria)

## 9. O que a aula atribui ao Transformer
**Correta: A**
**Por quê:** O slide lido pelo professor fala em "capacidade de lidar com o contexto longo e criar coerência, graças à arquitetura como Transformer".
- **B:** É uma característica do treino da generativa citada na aula, mas não foi ligada ao Transformer.
- **C:** Também é característica da generativa, apresentada antes e sem relação com a arquitetura.
- **D:** É a descrição do aprendizado por tentativa e erro, outro ponto da aula.
**Conceito:** Transformer e contexto longo

## 10. Diferença central na analogia do aluno e do escritor
**Correta: D**
**Por quê:** O aluno "já sabe a saída, ou seja, quais são as múltiplas escolhas". O escritor lê muitos livros sem saber o que vai sair e só depois decide o que criar.
- **A:** A quantidade de leitura aparece na analogia, mas não é o contraste. A tradicional também é treinada com muito dado.
- **B:** A analogia não trata de acerto e erro, e sim de a saída ser conhecida ou não de antemão.
- **C:** O professor diz o contrário: a história nova "não é uma cópia do anterior".
**Conceito:** saída conhecida x saída composta
