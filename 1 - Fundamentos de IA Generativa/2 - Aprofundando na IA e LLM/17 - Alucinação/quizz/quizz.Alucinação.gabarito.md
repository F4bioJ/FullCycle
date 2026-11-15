# Gabarito — Alucinação

## 1. Tema conhecido e tema obscuro com respostas igualmente seguras
**Correta: B**
**Por quê:** a aula diz que a LLM transforma tokens em vetores e calcula a probabilidade de cada novo token, sem entender o assunto. A estratégia é a mesma para física quântica e para bolo de cenoura. Como fluência e confiança vêm desse mecanismo, elas aparecem igual num tema que o modelo "conhece" bem e num tema em que não tem base.
- **A:** o professor diz o contrário: o modelo não tem uma base factual para voltar e confirmar o que é real, só uma intuição estatística.
- **C:** é a ideia que a aula critica com a analogia do banco de dados: ter muita informação não é entender, e a LLM desconhece o assunto tratado.
- **D:** o modelo não detecta a própria falta de conhecimento; a aula mostra que, justamente quando falta conhecimento no treino, ele tende a alucinar com o mesmo tom confiante.
**Conceito:** mecanismo único de previsão de tokens, sem compreensão do assunto

## 2. Por que confiar nas respostas bem estruturadas falha
**Correta: D**
**Por quê:** como o modelo não sabe o que está respondendo, ele gera respostas naturais, bem estruturadas e confiantes também quando erra ("mente com categoria"). A ilusão "se parece certo, está certo" é o perigo que a aula aponta.
- **A:** inverte a relação: o modelo não confere fatos, então hesitação não indica checagem e fluência não indica erro.
- **B:** o prompt direto reduz o risco de erro, mas a aula não diz que o modelo só soa confiante com prompt direto; a confiança aparece em qualquer resposta.
- **C:** a alucinação contextual é a deriva em textos longos; não há relação entre texto bem estruturado e esse tipo específico.
**Conceito:** fluência e confiança não indicam verdade

## 3. Associação INCORRETA entre caso e tipo
**Correta: A**
**Por quê:** uma conversa longa que, no fim, contradiz o começo é alucinação **contextual**: a resposta começa coerente e, quanto maior a conversa, mais difícil manter a correlação. Alucinação estrutural é fórmula, código ou instrução que não existe.
- **B:** correta. Código com função inexistente é o exemplo típico de alucinação estrutural.
- **C:** correta. Frase e fonte inventadas são alucinação de citação ou fonte, como no exemplo do Steve Jobs.
- **D:** correta. É o exemplo de alucinação factual da aula: Marie Curie ganhou dois prêmios Nobel, não três.
**Conceito:** tipos de alucinação (factual, citação, estrutural, contextual)

## 4. Por que o modelo lista artigos terraplanistas que não existem
**Correta: C**
**Por quê:** o professor diz que, nesse pedido, o modelo lista artigos "porque eu induzi ela". O pedido pressupõe que as fontes existem, e o modelo completa o formato da resposta esperada, sem verificar a existência delas. É a alucinação de citação agravada por prompt indutivo.
- **A:** a aula não atribui o caso a textos terraplanistas do treino, e sim à indução do pedido: o modelo fabricou os artigos, que não existem, em vez de reproduzir algo que leu.
- **B:** a busca na internet aparece na aula como fonte de erro para informações muito recentes, não como explicação para este caso, em que os artigos nunca existiram.
- **D:** a inferência combinada é outra causa citada na aula (cruzar teorias que o modelo não aprendeu). Aqui não há duas teorias a combinar; o que pesa é a premissa embutida no pedido.
**Conceito:** prompt indutivo e alucinação de citação

## 5. Fator que NÃO favorece a alucinação
**Correta: B**
**Por quê:** a aula recomenda o oposto: dar exemplos da resposta esperada é uma forma de **reduzir** a alucinação, porque deixa menos lacunas a preencher com suposições.
- **A:** é causa citada: falta de conhecimento específico no treinamento.
- **C:** é causa citada: perguntas que exigem inferência combinada com algo que o modelo não aprendeu.
- **D:** é causa citada: o modelo quer parecer humano e agradar para o usuário continuar usando, e isso aumenta a chance de convencer com algo falso.
**Conceito:** causas da alucinação

## 6. Pedidos com rodeios e respostas com floreio sem base
**Correta: A**
**Por quê:** a aula diz que a maioria das LLMs foi feita para parecer humana e agradável, para o usuário continuar usando, e por isso tende a entregar uma resposta que convence mesmo sendo falsa. Ela acrescenta que o modelo interage do jeito que o usuário interage com ele: quanto mais direto o pedido, menor a chance de erro. Com rodeios e cordialidade, ele responde no mesmo tom e com mais espaço para inventar.
- **B:** a alucinação contextual é a deriva ao longo de uma conversa ou resposta longa, que perde a correlação com o começo. O caso descrito é um único pedido em tom cordial, e o problema são detalhes inventados para agradar, não a perda do fio.
- **C:** a aula diz que a alucinação acontece sem intenção de errar: o modelo não sabe o que está respondendo, então não "percebe" que não sabe nem decide disfarçar.
- **D:** a aula não fala de aprendizado durante a conversa. O treino acontece antes do uso; no uso, o modelo só prevê tokens.
**Conceito:** modelo feito para agradar e espelhar o usuário

## 7. Mesma LLM em posts internos e em pareceres jurídicos
**Correta: C**
**Por quê:** a aula mostra que o impacto depende do uso: o erro sobre Marie Curie não pesa numa conversa, mas pesa numa cirurgia, e contextos jurídicos aparecem entre os críticos. O mesmo erro custa mais no parecer, então ali a validação precisa ser maior, e a aula insiste que quem usa o conteúdo precisa ter conhecimento do assunto.
- **A:** a taxa de erro não mede o risco sozinha; a aula mostra que o mesmo erro pode ser inofensivo num uso e grave em outro.
- **B:** o professor diz que a LLM possivelmente não serve para algo que não admite nenhum erro, mas logo emenda: "Isso significa que você não pode usar? Não." A conclusão é tomar cuidado, não excluir o domínio jurídico.
- **D:** a aula diz que alguns modelos alucinam menos, mas não que isso dispense validação nos usos críticos; ela insiste em validar.
**Conceito:** impacto da alucinação depende da criticidade do uso

## 8. Ligação entre alucinação e inverno da IA
**Correta: D**
**Por quê:** o professor diz que, ao perceber erros, o usuário perde confiança e para de usar. Isso esfria o boom da IA e traz o medo de um novo inverno, como os períodos de desinteresse vistos na aula 1.5 (O inverno da IA).
- **A:** a aula não fala em retreinar modelos por causa de alucinação nem em custo de retreino como causa de inverno.
- **B:** proibição por governos é um fato histórico inventado; a aula não menciona isso.
- **C:** usa uma ideia do inverno da IA (o limite do perceptron) como causa, mas a aula liga o risco atual à perda de confiança dos usuários, não a um limite técnico.
**Conceito:** perda de confiança e risco de novo inverno da IA

## 9. Ressalva sobre checar tudo depois
**Correta: A**
**Por quê:** a aula diz que é muito difícil validar tudo, porque as respostas são muitas, rápidas e fluentes; por isso quem usa o conteúdo gerado precisa ter conhecimento do assunto, e não repetir o que a IA "cuspiu". Validar continua necessário (o professor pede isso no fim da aula), mas não substitui conhecer o tema.
- **B:** pedir fontes não resolve: a aula mostra que o modelo inventa citações e artigos que não existem.
- **C:** o modelo não sabe o que está respondendo nem tem base factual para conferir; pedir que ele revise não garante nada.
- **D:** informações recentes são uma fonte de erro, mas não a única: o erro sobre Marie Curie é sobre um fato antigo.
**Conceito:** limite da validação e necessidade de domínio do assunto

## 10. Por que a alucinação contextual aparece no fim
**Correta: C**
**Por quê:** a aula explica que, quanto maior a conversa, mais difícil manter a correlação, e como a construção é feita token a token, o fim deriva para trechos que não combinam com o começo. O mesmo vale para imagens, que começam bem e se perdem no final.
- **A:** o modelo não tem base factual para consultar, nem no começo nem no fim.
- **B:** a aula não fala de treino com textos curtos; a explicação dela é a dificuldade de manter a correlação ao longo da geração.
- **D:** a vontade de agradar é uma causa citada para respostas convincentes e falsas, não a explicação da deriva no fim de textos longos.
**Conceito:** alucinação contextual e perda de correlação em textos longos
