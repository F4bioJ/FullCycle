# Gabarito — Introdução às diferenças de IA (avançado)

## 1. Origem do rótulo no pré-treino
**Correta: C**
**Por quê:** No aprendizado autossupervisionado, o sinal vem dos próprios dados. Para cada trecho de texto, a resposta correta é o token que vem em seguida.
- **A:** É o supervisionado clássico, inviável na escala de um LLM.
- **B:** Achar estrutura sem sinal de acerto é o não supervisionado. No pré-treino o rótulo existe, só não é manual.
- **D:** Isso é aprendizado por reforço, usado em uma etapa posterior.
**Seção:** 4. De onde vêm os rótulos da IA generativa
**Conceito:** aprendizado autossupervisionado

## 2. Acurácia em base desbalanceada
**Correta: A**
**Por quê:** Com 0,5% de fraude, responder "normal" sempre acerta 99,5% e não captura nenhuma fraude. A acurácia não distingue esse caso de um modelo bom.
- **B:** A acurácia não mede fraudes capturadas. Isso é recall.
- **C:** Overfitting se vê na diferença entre treino e teste, que não foi informada.
- **D:** Não dá para avaliar o limiar sem precisão e recall.
**Seção:** 2. Classificação devolve uma nota, não uma decisão
**Conceito:** armadilha da acurácia

## 3. Baixar o limiar
**Correta: D**
**Por quê:** Com o limiar menor, mais transações viram alerta. Capturam-se mais fraudes (recall sobe) e mais clientes bons são sinalizados (precisão cai).
- **A:** Os dois raramente sobem juntos ao mover o limiar. Um é trocado pelo outro.
- **B:** É o contrário: mais transações passam de um limiar menor.
- **C:** O score não muda, mas a decisão tomada a partir dele muda.
**Seção:** 2. Classificação devolve uma nota, não uma decisão
**Conceito:** troca entre precisão e recall

## 4. Bom na validação, ruim em produção
**Correta: B**
**Por quê:** "Houve estorno" só é preenchido depois da confirmação da fraude. Na validação o campo entrega a resposta, e em produção ele ainda não existe.
- **A:** Overfitting apareceria já na validação, que usa dados fora do treino.
- **C:** Rótulos inconsistentes piorariam também a validação.
- **D:** O desbalanceamento distorce a acurácia, mas não explica a queda em produção.
**Seção:** 3. Três formas clássicas de falhar
**Conceito:** vazamento de dados

## 5. Correção sobre "tentativa e erro com reforço"
**Correta: D**
**Por quê:** O pré-treino é autossupervisionado: prever o próximo token, medir o erro e ajustar. O reforço com feedback humano é uma etapa posterior e menor.
- **A:** O reforço não é a etapa principal.
- **B:** Ninguém escreve rótulos. Eles vêm do próprio texto.
- **C:** O modelo é treinado antes. O prompt só condiciona a saída.
**Seção:** O que a aula simplificou
**Conceito:** pré-treino x reforço

## 6. Múltipla escolha x escritor
**Correta: B**
**Por quê:** A cada passo o modelo escolhe um token entre dezenas de milhares. O texto é essa escolha repetida, com cada resposta entrando no contexto da próxima.
- **A:** O modelo generativo não aplica regras de gramática. Ele é probabilístico.
- **C:** Inverte a analogia.
- **D:** O modelo generativo depende de um treino enorme.
**Seção:** 5. A múltipla escolha dentro do escritor
**Conceito:** geração como escolha repetida

## 7. Rótulos errados e mais dados
**Correta: A**
**Por quê:** O modelo aprende o que os rótulos dizem. Um erro sistemático repetido em mais exemplos só reforça a associação errada.
- **B:** Mais dados diluem ruído aleatório, não erro sistemático.
- **C:** O treino supervisionado não abandona os rótulos por conta própria.
- **D:** O treino converge normalmente, para o padrão errado.
**Seção:** 3. Três formas clássicas de falhar
**Conceito:** erro sistemático de rótulo

## 8. 99% no treino, 70% no teste
**Correta: C**
**Por quê:** A distância entre os dois números é o sintoma do overfitting: o modelo decorou os exemplos e não generaliza.
- **A:** Vazamento entre treino e teste inflaria o teste, em vez de derrubá-lo.
- **B:** O limiar afeta precisão e recall, não cria essa diferença.
- **D:** Possível, mas não é a leitura padrão para esse sintoma.
**Seção:** 3. Três formas clássicas de falhar
**Conceito:** overfitting

## 9. Tarefa de regressão
**Correta: B**
**Por quê:** Regressão estima um valor numérico contínuo, como o tempo em minutos.
- **A:** Aprovado ou negado são duas classes.
- **C:** Idioma é uma classe entre várias.
- **D:** Spam ou legítimo são duas classes.
**Seção:** 1. Anatomia do aprendizado supervisionado
**Conceito:** classificação x regressão

## 10. Afirmação INCORRETA
**Correta: C**
**Por quê:** O material diz o contrário: a cada token o modelo resolve uma múltipla escolha sobre o vocabulário. O espaço de saída é aberto porque o número de combinações é astronômico, e não porque o mecanismo seja outro.
- **A:** Correta: score e features são inspecionáveis, o que facilita explicar e auditar a decisão.
- **B:** Correta: as duas generalizam; a diferença está no tamanho do espaço de saída.
- **D:** Correta: é a detecção de anomalia, que não depende de rótulos.
**Seção:** 5. A múltipla escolha dentro do escritor
**Conceito:** por que o espaço de saída é aberto
