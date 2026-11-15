# Gabarito — Aprofundando em LLM

## 1. Como "ele" obtém contexto
**Correta: C**
**Por quê:** Na analogia, a query é a pergunta da palavra ("quem é ele?") e a key é o crachá de cada palavra. A pergunta é confrontada com os crachás para achar a correspondência.
- **A:** Inverte os papéis: quem pergunta é a query da palavra que precisa de contexto.
- **B:** Troca key por value: o value não é comparado, só entrega a informação depois da correspondência.
- **D:** A aula não descreve soma de key com query.
**Conceito:** Query e key

## 2. Por que começar pela single-head
**Correta: B**
**Por quê:** O professor diz que, para entender a multi-head, começa pelo cálculo mais simples, com Q, K e V, que é a base do que cada head faz.
- **A:** A aula diz que os LLMs modernos trabalham com multi-head; ela não é um complemento para casos difíceis.
- **C:** As heads dividem o cálculo em paralelo; não usam o resultado de uma single-head como entrada.
- **D:** Cada head usa Q, K e V; o value não entra só no final.
**Conceito:** Single-head como base

## 3. Segurança textual da multi-head
**Correta: A**
**Por quê:** Segundo o professor, as relações cruzadas são trabalhadas juntas, em vez de olhar uma coisa, depois outra e tentar conectar tudo; isso dá mais segurança textual. É a explicação didática dele.
- **B:** A aula não fala em heads conferindo ou corrigindo umas às outras.
- **C:** A aula não fala em votação entre heads.
- **D:** As heads dividem os vetores em espaços menores; não guardam mais vetores.
**Conceito:** Relações em paralelo

## 4. As cinco heads do exemplo
**Correta: D**
**Por quê:** O professor diz que são exemplos para entender a construção. O que a aula afirma é que cada head foca uma coisa, sem garantir essas cinco funções.
- **A:** Trata o exemplo como regra que se mantém com mais heads.
- **B:** O professor não apresenta a lista como regra geral.
- **C:** A aula não restringe a divisão em heads a um idioma.
**Conceito:** Heads como ilustração

## 5. O que se perderia sem a junção das heads
**Correta: C**
**Por quê:** O resultado de todas as heads é concatenado e alimenta a feed-forward. Com a saída de uma só, as outras relações não entrariam no resultado.
- **A:** Query e key são comparadas dentro da atenção, antes da feed-forward.
- **B:** As heads rodam em paralelo; escolher uma saída depois não muda isso.
- **D:** A aula não diz que a feed-forward exige uma soma.
**Conceito:** Concatenação e feed-forward

## 6. Sintoma: pronomes errados
**Correta: D**
**Por quê:** Cada head foca uma coisa. Se as heads aprenderam relações distintas, o sintoma sugere que a relação dos pronomes pode estar menos coberta. É uma hipótese de diagnóstico, não uma garantia: o professor deu as cinco heads só como exemplo.
- **A:** A feed-forward trabalha o resultado das heads; a aula não lhe atribui a concordância e os pronomes.
- **B:** A divisão dos vetores cria uma head por espaço; a aula não diz que ela leve todas à mesma relação.
- **C:** O sintoma não indica troca da atenção por leitura em sequência.
**Conceito:** Heads e relações

## 7. Ligação com Transformers
**Correta: A**
**Por quê:** Na aula de Transformers, a self-attention dá mais peso a "cachorro" por causa da relação, e a proximidade deixa de decidir a relação.
- **B:** Usa a proximidade como critério, que a aula descarta.
- **C:** A aula fala em dar mais peso ao que importa para a relação, não em empate.
- **D:** O modelo olha para toda a sequência, não só para as anteriores.
**Conceito:** Atenção além da proximidade

## 8. Uma única head (explicação simplificada)
**Correta: B**
**Por quê:** Na explicação simplificada do professor, a single-head resolve uma pergunta de contexto, como "quem é ela?", mas foca uma relação por vez. Na prática, uma cabeça só já olha todas as palavras do contexto; a explicação é didática.
- **A:** A aula mostra que a single-head resolve "quem é ela?".
- **C:** A aula aponta o foco em uma relação por vez, não lentidão.
- **D:** A atenção serve justamente para manter coerência em longos espaços de texto.
**Conceito:** Limite da single-head

## 9. "Ela" → Maria e "ele" → carro: o que os dois exemplos reforçam
**Correta: A**
**Por quê:** O professor acrescenta o exemplo do carro para dizer que a resposta "não precisa ser sempre pessoa, pode ser objeto". A key funciona como o crachá de qualquer palavra do contexto, e a correspondência se dá pela relação, não pelo tipo da palavra.
- **B:** Generaliza a partir de dois exemplos. A aula não liga gênero do pronome a pessoa ou objeto; os exemplos só mostram que a referência pode ser de qualquer tipo.
- **C:** Na aula, cada palavra tem query, key e value. Os exemplos usam pronomes porque são o caso mais visível, não porque só eles perguntam.
- **D:** A aula não dá peso maior a objetos. O carro é a resposta porque é a palavra que corresponde à pergunta naquele contexto.
**Conceito:** Papel da key

## 10. Referência certa, informação ruim: onde está o problema
**Correta: C**
**Por quê:** Na analogia, a query pergunta e a key (o crachá) permite achar a palavra certa. Como a referência foi identificada corretamente, query e key funcionaram. O que entrega a informação usada para chegar ao significado é o value, então é nele que está o problema.
- **A:** Se a query tivesse formulado mal a pergunta, a palavra encontrada seria outra, e o enunciado diz que "Maria" foi achada corretamente.
- **B:** O crachá (key) serve para a correspondência, que deu certo. A key não é o que repassa a informação.
- **D:** A concatenação junta as leituras das heads depois da atenção. Ela não explica uma informação ruim vinda de uma palavra que foi encontrada corretamente.
**Conceito:** Papel do value
