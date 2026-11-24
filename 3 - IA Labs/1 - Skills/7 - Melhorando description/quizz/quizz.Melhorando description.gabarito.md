# Gabarito — Melhorando description

## 1. Como preparar as entradas do prompt gerador
**Correta: C**
**Por quê:** Na demonstração, o professor pediu ao Claude Code: "leia a skill message commit e me responda o que a skill faz e o que a skill produz". Depois copiou essa resposta para as entradas do prompt gerador, que montou a description com a fórmula das quatro partes. Numa skill cujo corpo você já não lembra, é o mesmo caminho: o modelo lê a skill e resume o que ela faz e produz.
- **A:** Ele não colou o corpo inteiro no gerador; usou como entrada a resposta curta sobre o que a skill faz e produz. Quem lê a skill é o modelo, no passo anterior.
- **B:** Inverte a ordem da aula: o prompt de melhoria veio depois, com a description já gerada e aplicada, e é ele que monta o conjunto de teste.
- **D:** Quem monta as quatro partes é o gerador. A tradução para o inglês foi um pedido separado, feito depois, ao aplicar a description na skill.
**Conceito:** entradas do prompt gerador de description

## 2. Papel da pontuação antes da reestruturação
**Correta: A**
**Por quê:** O prompt de melhoria monta um conjunto de teste (passo 1), pontua a description atual (passo 2) e reestrutura "mirando nos erros baseados na pontuação feita acima" (passo 3). A pontuação mostra onde a versão atual falha, e a nova versão é escrita para corrigir essas falhas.
- **B:** Decidir se algo vira skill é papel do prompt de triagem da aula anterior. O prompt de melhoria parte de uma skill que já existe e trabalha só a description dela.
- **C:** O conjunto de teste é o passo 1 e é sobre ele que a pontuação acontece; ela não o substitui.
- **D:** As versões novas são pontuadas, sim: os passos 4 e 5 pontuam as novas versões e indicam a vencedora.
**Conceito:** ciclo testar, pontuar e reestruturar

## 3. Para que servem os casos negativos
**Correta: D**
**Por quê:** As aulas de frontmatter mostraram que a description é um classificador: decide se a skill dispara ou não. Por isso a fórmula das quatro partes inclui o "quando não usar". Um conjunto de teste só com casos positivos mediria metade disso; os negativos conferem se a description também evita o disparo em pedidos que não são da skill.
- **A:** O formato da saída depende do corpo (nível 2), que só é lido depois do disparo. O prompt da aula testa e melhora a description, não o corpo.
- **B:** Casos negativos são pedidos que não são da skill. Um pedido de mensagem de commit em português é da skill, então não é um caso negativo. A tradução para o inglês foi uma escolha de padrão de escrita (aula da primeira skill), não algo que o teste precise barrar.
- **C:** O corpo (nível 2) só é carregado quando a tarefa casa com a description; o que fica sempre carregado é o nível 1. Além disso, os casos negativos são pedidos que não deveriam disparar a skill, e não uma contagem de termos-chave.
**Conceito:** casos negativos no teste da description

## 4. O que o prompt de melhoria acrescenta ao gerador
**Correta: B**
**Por quê:** O gerador escreve uma description a partir do que a skill faz e produz, com a fórmula das quatro partes, mas não a põe à prova. O prompt de melhoria é o que faz a "batalha": monta um conjunto de teste, pontua a versão atual, reestrutura mirando nos erros, pontua as novas versões e indica a vencedora. Na aula, isso rendeu uma description mais assertiva que a gerada.
- **A:** A tradução foi um pedido à parte, feito pelo professor ao aplicar a description gerada na skill, antes de rodar o prompt de melhoria.
- **C:** O gerador já usa a fórmula das quatro partes, que inclui o "quando não usar". O que a skill faz e produz são as entradas dele, não o limite do que ele escreve.
- **D:** O gerador foi usado justamente numa skill já existente, a de commits, depois de o modelo ler a skill e dizer o que ela faz e produz.
**Conceito:** gerador versus prompt de melhoria

## 5. A LLM aplicou a vencedora: o que fazer?
**Correta: C**
**Por quê:** No fechamento, o professor diz que tudo o que mostrou pode ser feito em conjunto com a LLM, inclusive pedir que ela gere esses prompts. Mas acha ideal ter essas triagens "dentro da nossa cabeça", para tomar a decisão correta e pedir que a criação das skills seja feita da melhor maneira. Ele mesmo, depois do update, comparou a nova description com o estado inicial e a julgou pelo formato mental visto antes.
- **A:** É uma meia-verdade: a pontuação é uma ajuda real, mas a aula não ensina que ela basta como decisão. O fechamento pede ter a triagem na cabeça justamente para tomar a decisão correta.
- **B:** O professor diz o contrário: dá para pedir que a LLM gere esses prompts. O que ele recomenda é ter a triagem na cabeça, não escrever os prompts à mão.
- **D:** O prompt de triagem da aula anterior dá o veredito sobre um candidato a skill (vira ou não vira), não sobre a qualidade de uma description.
**Conceito:** a LLM ajuda, mas a triagem é do desenvolvedor
