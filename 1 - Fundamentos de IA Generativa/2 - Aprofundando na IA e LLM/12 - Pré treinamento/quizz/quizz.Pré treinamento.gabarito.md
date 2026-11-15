# Gabarito — Pré treinamento

## 1. A "resposta certa" no pré-treino sem anotação
**Correta: B**
**Por quê:** na CLM, o texto é tokenizado, o modelo recebe uma sequência incompleta e o token seguinte fica guardado. Depois da previsão, ela é comparada com esse token real. A resposta vem do próprio texto, por isso não há rótulo humano.
- **A:** o modelo recebe uma sequência incompleta; o token seguinte fica guardado até a comparação, então ele não vê a frase inteira.
- **C:** contar a palavra mais frequente é a lógica do bigrama; na CLM o alvo é o token real daquele texto.
- **D:** se o alvo fosse a própria previsão, nunca haveria erro para corrigir; a previsão é comparada com o token real.
**Conceito:** aprendizado sem rótulos (o próximo token como alvo)

## 2. Rotular bilhões de tokens
**Correta: D**
**Por quê:** a aula diz que rotular é feito à mão (ou com automação parcial), que o custo disso é muito alto, e que é justamente por dispensar rótulos que o pré-treino escala para bilhões de tokens.
- **A:** a aula não diz que rótulos tirariam a fluência; o problema apontado é o custo de rotular.
- **B:** o professor diz que a mesma frase pode receber rótulos de várias coisas, conforme o objetivo; sentimento é só o exemplo.
- **C:** meia-verdade: a mesma frase pode receber rótulos diferentes conforme o objetivo, mas isso não impede o aprendizado; o obstáculo citado é o custo.
**Conceito:** por que dispensar rótulos permite escalar

## 3. Texto fluente sobre tema técnico
**Correta: A**
**Por quê:** é a "inteligência que não é inteligente" da aula: o modelo não sabe se está ensinando a fazer um foguete ou um bolo; domina a estrutura da língua e gera frases plausíveis a partir dos padrões.
- **B:** meia-verdade: muito texto sobre o tema ajuda a aprender os padrões dele, mas a aula diz que o modelo não sabe o que está lendo.
- **C:** é o oposto da aula: o modelo domina a estrutura sem entender o conteúdo, como no exemplo do foguete e do bolo.
- **D:** a máscara causal faz o contrário: impede o modelo de olhar para a frente.
**Conceito:** padrões textuais em vez de compreensão

## 4. Quais palavras o modelo pode usar para prever "para"
**Correta: C**
**Por quê:** "causal" quer dizer que o modelo só usa o contexto anterior, à esquerda, para prever o próximo token. A máscara causal impede que ele olhe para a frente.
- **A:** usar a frase inteira menos o alvo seria olhar também para a direita, o que a máscara causal bloqueia.
- **B:** "o parque" está à direita do ponto previsto; o modelo nunca olha para a frente.
- **D:** o bigrama olhava só a palavra anterior; a CLM é muito mais evoluída e usa todo o contexto à esquerda.
**Conceito:** causalidade e máscara causal

## 5. Por que treinar só com o contexto à esquerda
**Correta: D**
**Por quê:** ao gerar, cada token novo depende só do que já foi produzido, porque o resto ainda não existe. Treinar com a mesma restrição, a máscara causal, alinha o treino com a geração real.
- **A:** a aula não justifica a máscara por economia; ela existe para que a previsão use só o que veio antes.
- **B:** as palavras da direita fazem parte do sentido; a questão é que, na geração, elas ainda não existem.
- **C:** o positional encoding marca a posição de todos os tokens; não é ele que impede olhar para a frente.
**Conceito:** por que a causalidade combina com a geração

## 6. Depois de prever "portão" no lugar de "parque"
**Correta: A**
**Por quê:** a previsão é comparada com o token real, a função de perda mede o erro, e o backpropagation leva a correção de volta por toda a rede, ajustando pesos e vieses.
- **B:** nada sai do vocabulário; o modelo ajusta pesos para que "parque" fique mais provável naquele contexto.
- **C:** o pré-treino não usa anotador; a resposta certa vem do próprio texto.
- **D:** o professor diz que a correção é propagada para toda a rede, não só para a última camada.
**Conceito:** o ciclo prever, comparar, corrigir

## 7. 40% contra 2% na palavra certa
**Correta: C**
**Por quê:** a aula diz que a Cross Entropy Loss mede quão longe a distribuição prevista pelo modelo está da resposta correta, e o resumo do professor acrescenta que ela não avalia apenas acerto ou erro binário: quantifica quão mal calibrada estava a previsão. A previsão que deu 2% ao token certo está mais longe da resposta correta do que a que deu 40%, então a perda dela é maior.
- **A:** a perda não é binária; ela mede a distância, e não só se o token escolhido acertou.
- **B:** a primeira chegou mais perto da resposta correta, então a perda dela é menor.
- **D:** inverte a lógica: dar menos probabilidade ao token certo aumenta a perda.
**Conceito:** Cross Entropy Loss mede distância, não acerto ou erro

## 8. Dado como "ouro"
**Correta: B**
**Por quê:** o pré-treino depende de grande exposição a texto, e o professor observa que quase toda a web já foi mapeada e usada como token. Fontes novas ficaram escassas e valiosas, o que explica também a disputa pelas redes sociais.
- **A:** a aula não diz que o chat consulta o corpus ao responder; o dado vale porque o pré-treino precisa dele, e a maior parte já foi usada.
- **C:** meia-verdade: as redes sociais valem pelo volume de texto e de interação humana, não porque tragam rótulos.
- **D:** o resumo do professor diz que a disputa deixa de ser apenas por compute e passa a ser também por dados; não que dependa só deles.
**Conceito:** dados como recurso estratégico

## 9. CLM × bigrama
**Correta: A**
**Por quê:** o professor diz que a orientação da CLM lembra o bigrama, prever a próxima palavra a partir das anteriores, mas muito mais evoluída: usa o contexto à esquerda com todas as camadas, o processamento em paralelo e o resto da arquitetura do Transformer.
- **B:** nenhum dos dois olha a palavra seguinte; na CLM a máscara causal bloqueia o que vem depois.
- **C:** contar pares é o bigrama; a CLM aprende ajustando pesos de uma rede neural, não montando uma tabela.
- **D:** nenhum dos dois exige rótulos humanos; a CLM aprende com o texto cru.
**Conceito:** CLM como evolução da previsão do bigrama

## 10. Modelo de atendimento para um banco
**Correta: D**
**Por quê:** o pré-treino faz o modelo aprender de forma geral, com enorme volume de texto, sem se limitar a uma tarefa. A aula diz que isso permite usar o modelo depois numa adaptação por fine-tuning. As conversas de um banco sozinhas não dão a exposição massiva que o pré-treino exige.
- **A:** o pré-treino não usa rótulos, nem de assunto bancário.
- **B:** treinar do zero com CLM também dispensaria rótulos; o problema é o volume de dados, não a rotulação.
- **C:** a aula não apresenta o pré-treino como forma de conhecer os produtos de uma empresa, e sim de aprender os padrões gerais da língua.
**Conceito:** modelo generalista como base para o fine-tuning
