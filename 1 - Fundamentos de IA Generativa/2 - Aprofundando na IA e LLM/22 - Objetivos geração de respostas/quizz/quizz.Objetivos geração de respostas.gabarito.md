# Gabarito — Objetivos geração de respostas

## 1. Trocar uma palavra do prompt muda toda a resposta
**Correta: C**
**Por quê:** a resposta surge de uma sequência de escolhas locais do próximo token, cada uma feita com base no contexto. Mudar uma palavra no início muda esse contexto desde a primeira escolha, e o efeito se propaga pelas seguintes.
- **A:** os pesos não mudam durante a conversa: o modelo está congelado, como visto na aula anterior.
- **B:** a aula diz que o modelo pode parecer ter respostas prontas, mas segue predizendo token a token. Não há busca em um estoque de respostas.
- **D:** uma palavra a mais quase não pesa na janela, e o cenário não fala em limite atingido. A causa apontada na aula é a mudança de contexto.
**Conceito:** geração como sequência de escolhas locais

## 2. Definição conhecida devolvida quase igual
**Correta: A**
**Por quê:** a aula reconhece que o modelo pode parecer memorizar respostas prontas, mas diz que, na operação, ele continua fazendo predição token a token.
- **B:** não existe a troca da predição por uma consulta à memória: a geração é a mesma, mesmo quando o texto sai igual.
- **C:** a aula não descreve nenhuma divisão entre início copiado e final previsto. O modo de operar é o mesmo do primeiro ao último token.
- **D:** colocar um texto no meio do prompt é o que o RAG faz, mas o cenário não tem nada disso, e a aula explica o caso pelo próprio modelo.
**Conceito:** memorização aparente e predição token a token

## 3. Duas palavras do mesmo tamanho, uma comum e outra rara
**Correta: D**
**Por quê:** a quebra acompanha a frequência, não o tamanho. Palavras comuns tendem a ficar compactas; nas raras, como "paralelepípedo", é mais fácil encontrar os pedaços se repetindo do que a palavra inteira.
- **A:** "paralelepípedo" quebra por ser rara, não por ter muitas letras. O critério apresentado na aula é a frequência.
- **B:** os pedaços do exemplo (*Par*, *Ale*, *Lep*, *Ip*, *Edo*) não seguem as sílabas da palavra, e a aula não fala em divisão gramatical.
- **C:** é o oposto: a palavra rara não recebe uma unidade própria, porque isso exigiria guardar um token longo e raro no vocabulário.
**Conceito:** frequência e quebra de palavras raras

## 4. Laudo técnico chega mais perto do limite da janela
**Correta: B**
**Por quê:** a janela é consumida em tokens. Com o mesmo número de palavras, o texto de termos raros se fragmenta em mais tokens e ocupa mais espaço.
- **A:** o raciocínio simbólico é outro tema, e a aula não fala em uma parte da janela reservada para ele. A diferença vem da quantidade de tokens.
- **C:** a memória ativada guarda informações sobre o usuário e não tem relação com palavras raras, que são compostas a partir de pedaços conhecidos.
- **D:** a alucinação é um risco real, mas não ocupa a janela com "correções internas", que não existem nesta explicação.
**Conceito:** tokenização, custo e janela de contexto

## 5. Usar a contagem do modelo A para prever o custo no modelo B
**Correta: D**
**Por quê:** cada modelo tem seu vocabulário e sua forma de tokenizar, então o mesmo texto pode virar outra quantidade de tokens. Como cada token é custo, a previsão feita em A pode não valer em B.
- **A:** no hands-on, a mesma frase, no mesmo idioma, quebra de forma diferente ao trocar o modelo.
- **B:** a primeira parte está certa, mas a conclusão não: o custo acompanha os tokens, não as palavras.
- **C:** o problema apontado está na premissa: a quebra não é igual entre modelos, e a aula mostra isso já no texto de entrada.
**Conceito:** diferenças de tokenização entre modelos

## 6. Modelo antigo quebra "cachorro", modelo novo mantém inteiro
**Correta: A**
**Por quê:** o professor explica que o modelo com menos tokens no treinamento não chegou a considerar "cachorro" uma palavra tão forte, ao contrário do treinamento mais forte, com mais tokens.
- **B:** a aula liga a fragmentação ao consumo da janela, não o contrário: o tamanho da janela não é o que divide a palavra.
- **C:** o fine-tuning e a avaliação humana ajustam o comportamento das respostas. A aula atribui a diferença de quebra ao treinamento e ao vocabulário.
- **D:** é o mito tratado na aula anterior: o modelo não aprende com as conversas depois do treino.
**Conceito:** por que modelos quebram diferente

## 7. Mesmo modelo com tom empático e tom direto
**Correta: C**
**Por quê:** instruções no prompt e parâmetros de geração deslocam a distribuição de probabilidade dos próximos tokens. O mesmo modelo muda de comportamento sem mudar os pesos.
- **A:** o prompt ajusta mais que o formato: a aula inclui o tom entre o que se controla com instruções e parâmetros, sem exigir novo treino.
- **B:** os parâmetros têm papel, mas controlam quão conservadora ou diversa é a escolha, não um tom específico. E o prompt faz mais do que definir o assunto: as instruções também orientam o estilo.
- **D:** o prompt tem papel, mas os parâmetros não tratam do tamanho da resposta: eles agem sobre a escolha do próximo token, assim como as instruções, que também deslocam as probabilidades.
**Conceito:** ajuste do comportamento da saída

## 8. Parâmetros mais abertos trazem afirmações sem base
**Correta: B**
**Por quê:** temperatura e Top-P controlam o quanto a escolha do próximo token é conservadora ou diversa. Mais liberdade amplia a variedade, mas pode aumentar o risco de deriva e de alucinação.
- **A:** a distribuição dos próximos tokens muda, mas os pesos não: os parâmetros agem na hora de escolher o token, sem alterar o que foi aprendido no treino.
- **C:** tokens consomem a janela, mas o cenário não fala em respostas longas nem em limite atingido, e a aula liga o risco à liberdade de geração, não ao tamanho.
- **D:** a variedade aparece de fato, mas a aula diz que a liberdade maior pode aumentar o risco de alucinação, não só revelar um problema que já existia no mesmo nível.
**Conceito:** parâmetros de geração e o risco de alucinação

## 9. Slogans previsíveis com a configuração do contrato
**Correta: A**
**Por quê:** a configuração ideal depende da tarefa. Valores restritivos dão a consistência que o contrato pede, mas explicam slogans previsíveis. Abrir os parâmetros só ali amplia a variedade, com a troca que a aula aponta: mais risco de deriva.
- **B:** a configuração única ignora que cada tarefa pede um perfil, e abrir o contrato aumentaria o risco de deriva onde a consistência importa. Previsibilidade também não vem de abrir os parâmetros.
- **C:** a falta de variedade é explicada pela configuração de geração, e o comportamento pode mudar sem novo treino. O fine-tuning é um caminho mais caro para o que os parâmetros já resolvem.
- **D:** o prompt ajuda, mas a aula combina prompt e parâmetros, e manter a geração restritiva preserva a causa do problema. O risco de alucinação é a troca a aceitar, não um impedimento nesta tarefa.
**Conceito:** escolha da configuração pela tarefa

## 10. Afirmação incorreta sobre o Tokenizer
**Correta: D**
**Por quê:** no hands-on, a troca de modelo muda a quebra da mesma frase: "paralelepípedo" se divide de outro jeito, "cachorro" passa a ter dois tokens e, no Legacy, a fragmentação aumenta. Logo, a quebra não é igual entre modelos.
- **A:** correta: o professor troca de modelo na ferramenta e destaca que não fez login.
- **B:** correta: cada token vira custo, e a ferramenta permite ver quantos tokens o texto gera em cada modelo.
- **C:** correta: "o" apareceu como um token de um caractere, e o espaço seguido de "cachorro" como outro.
**Conceito:** o que o Tokenizer mostra
