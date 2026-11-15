# Gabarito — Batch Prompting

## 1. Misturar tarefas com formatos de saída diferentes no mesmo lote causa respostas inválidas.
**Correta: B**
**Por quê:** A aula aponta como limitação do batch que os itens precisam ser parecidos no formato de resposta e no objetivo. Misturar uma classificação sim/não com um resumo em texto livre põe tarefas incompatíveis na mesma estrutura de saída, e o modelo fica sem saber qual formato seguir em cada item: é a ambiguidade e a perda de qualidade que a aula descreve.
- **A:** O prompt de sistema aparecer uma vez só é justamente a economia do batch, não um defeito; a aula não fala em itens do fim "perdendo" a instrução.
- **C:** O tamanho do lote não é a limitação apresentada; a aula indica o batch exatamente para volume grande de itens homogêneos.
- **D:** Temperatura aumenta a variação do texto, mas não explica uma falha estrutural de formato; e itens com o mesmo contexto tendem a ficar mais consistentes, não menos.
**Conceito:** Limitação de homogeneidade no batch

## 2. A economia direta do batch é não repetir a instrução fixa em cada item.
**Correta: D**
**Por quê:** Na chamada individual, o prefixo fixo ("você é um especialista... responda em JSON") viaja em todas as requisições e consome tokens de entrada toda vez. No batch ele aparece uma vez para o lote inteiro. Em milhares ou milhões de itens, essa repetição eliminada é a economia significativa que a aula destaca.
- **A:** Esse desconto de cerca de 50% é o do prompt caching automático da OpenAI (aula 8), que vale entre chamadas com o mesmo prefixo; não é o mecanismo do batch.
- **B:** O modelo continua gerando resposta para cada item; o ganho apontado não é dividir uma passagem, é deixar de pagar tokens repetidos.
- **C:** A aula não diz que o batch encurta as respostas; o contexto comum ajuda a consistência, não o tamanho da saída.
**Conceito:** Economia de tokens pela instrução compartilhada

## 3. Mapear por posição quebra quando o modelo omite um item; ID explícito resolve.
**Correta: C**
**Por quê:** Se o pipeline usa a posição como chave e o modelo pula um item, todas as respostas depois da lacuna "sobem" uma posição e são gravadas no registro errado, sem erro aparente. A aula pede para manter a associação de cada resposta ao item de origem com identificadores; com um ID em cada item, repetido na resposta, a gravação não depende da ordem nem da contagem.
- **A:** O problema não fica restrito ao item omitido: com a posição como chave, as respostas seguintes também ficam desalinhadas, e reenviar um item não corrige o que já foi gravado errado.
- **B:** Lotes menores só reduzem a frequência; uma omissão num lote de 5 desalinha os itens seguintes do mesmo jeito.
- **D:** O próprio cenário mostra que o modelo pode omitir um item; confiar na posição é exatamente o que causa o desalinhamento.
**Conceito:** Mapeamento confiável de respostas em batch
