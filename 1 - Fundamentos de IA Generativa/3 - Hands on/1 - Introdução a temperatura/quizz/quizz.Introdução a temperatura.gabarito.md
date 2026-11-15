# Gabarito — Introdução a temperatura

## 1. Efeito de subir a temperatura em uma distribuição
**Correta: C**
**Por quê:** A temperatura atua achatando ou acentuando a distribuição antes da escolha. Ao subir, os tokens improváveis ganham chance de sair e o mais provável perde folga, mas a distribuição continua refletindo o que o modelo estimou.
- **A:** A temperatura alta dá abertura aos improváveis, sem transformá-los nos mais prováveis. Essa é a confusão entre "mais chance" e "ordem invertida".
- **B:** A temperatura atua sobre as opções que o modelo já estimou. Ela não amplia o vocabulário.
- **D:** A distribuição muda antes da escolha. Não há sorteios repetidos até aparecer um token diferente.
**Conceito:** temperatura achata ou acentua a distribuição

## 2. Temperatura não é treinamento
**Correta: A**
**Por quê:** A temperatura é um parâmetro de geração: age na escolha do próximo token. Como visto na aula 2.22, o comportamento muda sem mudar os pesos do modelo.
- **B:** A quebra em tokens depende do tokenizador do modelo, como mostrou a aula 2.22, e não da temperatura.
- **C:** Temperatura e janela de contexto são controles diferentes. A temperatura muda a escolha entre tokens, não quantos cabem no contexto.
- **D:** Isso descreveria uma instrução no prompt, que é outro meio de controle. A temperatura não acrescenta nada ao contexto.
**Conceito:** temperatura é parâmetro de geração, não muda os pesos

## 3. Texto banal com temperatura baixa
**Correta: B**
**Por quê:** Com temperatura baixa, o modelo fica nos tokens de maior probabilidade, o que dá consistência e tira a variedade. A aula usa esse exemplo: tarefa criativa com 0,1 sai ruim, e a faixa indicada é de 0,7 a 1,0.
- **A:** Instruções no prompt também influenciam a saída, mas a temperatura age por conta própria na escolha dos tokens, com ou sem um tom instruído.
- **C:** A causa está certa e o ajuste está errado. Em temperatura baixa as tentativas saem parecidas, então repetir o prompt não traz a variedade que falta.
- **D:** É o inverso: temperatura baixa concentra a escolha nos tokens prováveis, e baixar mais deixaria o texto ainda mais previsível.
**Conceito:** temperatura baixa troca variedade por consistência

## 4. Temperatura alta não ensina nada ao modelo
**Correta: D**
**Por quê:** O especialista é o mesmo com qualquer temperatura: com a baixa, vai direto ao Vade Mecum; com a alta, pode voltar com outro livro. A temperatura não acrescenta conhecimento, só muda o quanto o modelo se afasta do caminho mais provável.
- **A:** A temperatura não acrescenta nem retira conhecimento. Ao baixá-la, o romance só volta a ter pouca chance de sair.
- **B:** A primeira parte está certa, mas a temperatura não busca nada fora do modelo. Ela age sobre as opções que ele já estima.
- **C:** A temperatura influi justamente na escolha. O desvio é o efeito esperado da temperatura alta, sem precisar de nada no prompt.
**Conceito:** temperatura não acrescenta conhecimento

## 5. Baixar a temperatura não corrige um fato errado
**Correta: A**
**Por quê:** Se a informação falsa é o caminho mais provável para o modelo, reduzir a aleatoriedade o mantém nesse caminho. A temperatura não acrescenta conhecimento, então baixá-la dá consistência, mas não correção.
- **B:** A temperatura baixa não faz o modelo recusar nada. Ela só o concentra nos tokens de maior probabilidade.
- **C:** Temperatura não é mecanismo de checagem. O modelo continua escolhendo tokens por probabilidade.
- **D:** É o inverso: temperatura baixa privilegia os tokens mais prováveis, não os improváveis.
**Conceito:** consistência não é correção

## 6. Afirmação incorreta sobre o próximo token
**Correta: D**
**Por quê:** A incorreta é D. Ao mudar a temperatura, o assunto do modelo não muda: o que muda é a política de escolha entre tokens prováveis e improváveis, e é daí que vem a variedade.
- **A:** Verdadeira: o próximo token pode ser palavra inteira, pedaço de palavra ou símbolo.
- **B:** Verdadeira: o professor diz que o modelo não é matemática exata, e sim probabilístico, com qualquer temperatura.
- **C:** Verdadeira: a temperatura alta deixa o modelo mais propenso a escolher palavras improváveis, e não acrescenta conhecimento.
**Conceito:** temperatura muda a política de escolha, não o assunto

## 7. A troca de subir a temperatura em uma tarefa sensível
**Correta: C**
**Por quê:** Temperatura alta amplia a diversidade, mas reduz a previsibilidade e aumenta a chance de escolhas pouco adequadas. Em aplicações sensíveis, como regras de reembolso, pode degradar a qualidade factual. A aula 2.22 já avisava que mais liberdade traz mais risco de deriva e de alucinação.
- **A:** A temperatura interfere justamente na escolha dos tokens, e isso traz o custo de menos previsibilidade.
- **B:** A premissa é verdadeira e a conclusão é falsa. O conhecimento não muda, mas o modelo fica mais propenso a escolher tokens que se afastam das regras.
- **D:** A temperatura não muda o espaço da janela. O efeito está na escolha dos tokens, não no contexto disponível.
**Conceito:** temperatura alta troca previsibilidade por variedade

## 8. Como testar a temperatura
**Correta: B**
**Por quê:** O teste útil, segundo a aula, repete o mesmo prompt em valores diferentes, como 0,1 e 1,0. Se o prompt também muda, a diferença pode vir do pedido, e não da temperatura.
- **A:** A aula sugere justamente comparar 0,1 com 1,0, e o modelo é o mesmo nos dois valores.
- **C:** A temperatura não acrescenta conhecimento nem palavras novas. O que ficou sem controle no teste foi o prompt.
- **D:** O prompt influencia a saída, mas a temperatura também. O teste não permite separar um efeito do outro, o que é diferente de dizer que o dela foi desprezível.
**Conceito:** repetir o mesmo prompt ao comparar temperaturas

## 9. Por que um token improvável muda o resto do texto
**Correta: D**
**Por quê:** A resposta é uma sequência de escolhas locais, como visto na aula 2.22. O token escolhido passa a fazer parte do contexto da decisão seguinte, então um desvio no início altera as probabilidades dos próximos.
- **A:** Os pesos não mudam durante a geração.
- **B:** Um único token não esgota a janela de contexto, e o efeito descrito aparece logo no início da resposta.
- **C:** A temperatura é um valor configurado, que não sobe sozinho ao longo do texto.
**Conceito:** escolhas locais encadeadas

## 10. Uma temperatura única para tarefas diferentes
**Correta: B**
**Por quê:** A resposta do professor à escolha de perfil é "depende do que você vai fazer". Texto jurídico pede saída técnica e conservadora, própria da temperatura baixa. Tarefas criativas pedem surpresa, que a temperatura 0,1 prejudica.
- **A:** Instruções no prompt ajudam a controlar o estilo, mas a temperatura 0,1 continua favorecendo os tokens mais prováveis. Para tarefas criativas, a aula indica subir a temperatura.
- **C:** Metade está errada: a aula indica temperatura baixa e conservadora justamente para texto jurídico.
- **D:** É o inverso: texto jurídico fica no caminho mais provável, e a tarefa criativa precisa de abertura. A aula não usa o tamanho do texto como critério.
**Conceito:** a temperatura ideal depende da tarefa
