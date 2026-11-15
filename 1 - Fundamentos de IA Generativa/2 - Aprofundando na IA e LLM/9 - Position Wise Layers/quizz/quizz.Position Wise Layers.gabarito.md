# Gabarito — Position Wise Layers

## 1. Estado do vetor depois de xW1 + b1
**Correta: C**
**Por quê:** O primeiro passo é a primeira transformação: W1 dá um novo ponto de vista e b1 o ajuste fino. O resultado é um vetor intermediário, com ideias novas, mas ainda bruto, porque o descarte (max) e a segunda transformação ainda não aconteceram.
- **A:** A representação final só sai depois de max(0, ·), W2 e b2.
- **B:** Quem zera os negativos é o max(0, ·), no passo seguinte; W1 apenas transforma.
- **D:** Quem condensa o valor em forma final é W2, não W1; a aula não diz que W1 reduz o vetor.
**Conceito:** Primeira transformação (W1 e b1)

## 2. Alterar um token e recalcular o feedforward
**Correta: A**
**Por quê:** O feedforward aplica a mesma rede posição por posição, de forma independente. A saída de cada token depende só do vetor daquele token, então mudar um não afeta os outros nesse estágio (a mistura entre tokens é feita pela atenção).
- **B:** Consultar os vizinhos é papel da atenção, não do feedforward.
- **C:** W1 e W2 são os mesmos pesos da rede, não são recalculados a partir da sequência.
- **D:** A dependência entre uma posição e a anterior seria sequencial; o feedforward trata cada posição de forma independente.
**Conceito:** Position-wise (mesma rede, posições independentes)

## 3. Empilhar transformações lineares sem ativação
**Correta: D**
**Por quê:** Sem não linearidade, empilhar transformações lineares equivale a uma única transformação linear. Por isso a ativação entre as duas transformações é o que dá expressividade para relações complexas.
- **A:** Empilhar sem ativação não soma capacidade: colapsa em uma transformação só.
- **B:** O colapso vale para o empilhamento todo, não só para as camadas iniciais.
- **C:** O problema não é velocidade, e a capacidade é menor, não igual à de um FFN com ativação.
**Conceito:** Não linearidade como fonte de expressividade

## 4. Afirmação incorreta sobre a fórmula
**Correta: B**
**Por quê:** Na fórmula, b2 é somado no final, depois de W2: é o ajuste final. Não vem antes de W2.
- **A:** Correta: b1 é somado depois de xW1, como o conselho adicional.
- **C:** Correta: W2 condensa o valor já calculado em uma forma final.
- **D:** Correta: W são matrizes de peso e b são vetores de viés.
**Conceito:** Ordem e papel dos termos da fórmula FFN

## 5. Por que duas transformações
**Correta: A**
**Por quê:** A primeira (W1, b1) cria o vetor intermediário, que passa pela ativação; a segunda (W2, b2) condensa o resultado em forma final. As duas transformações com a ativação no meio dão um resultado mais apurado.
- **B:** Não há duplicação de tokens; o bloco processa um vetor por posição.
- **C:** A aula não atribui a W2 a função de recolocar tamanho ou ordem das posições.
- **D:** Ler o contexto dos vizinhos é papel da atenção; as duas transformações atuam só no vetor do próprio token.
**Conceito:** Duas transformações com ativação entre elas

## 6. Aluno sem descartar nada
**Correta: D**
**Por quê:** O descarte do inútil evita que alguma ideia sem valor desvirtue a evolução do aprendizado. Sem ele, o ruído seguiria adiante.
- **A:** Guardar tudo não acelera; permite que o inútil atrapalhe.
- **B:** O problema não é quantas lentes existem, e sim o que se mantém.
- **C:** W2 consolida o que recebeu; não é ela que remove o ruído.
**Conceito:** Papel da função de ativação (descartar o inútil)

## 7. Por que não dispensar o feedforward
**Correta: B**
**Por quê:** A atenção responde "com quem preciso falar?" e traz a informação; o feedforward responde "o que faço com ela agora que está comigo?", reorganizando e enriquecendo o vetor de cada token. São papéis complementares.
- **A:** O feedforward não serve para reduzir o vetor; ele enriquece a representação.
- **C:** Misturar tokens é papel da atenção; o feedforward trabalha em cada posição.
- **D:** Ele é aplicado depois da atenção, em cada camada, não só na final.
**Conceito:** Divisão de papéis atenção x feedforward

## 8. Local x global
**Correta: C**
**Por quê:** O contexto entre tokens já foi trazido pela atenção. O feedforward faz o raciocínio local, e as camadas seguintes voltam a combinar as representações refinadas, transformando o local em global.
- **A:** O bloco é aplicado a cada posição de forma independente, não à sequência concatenada.
- **B:** As posições não compartilham cálculo entre si dentro do bloco; é isso que significa position-wise.
- **D:** Ele vem depois da atenção, não antes.
**Conceito:** Raciocínio local do feedforward

## 9. Saída diferente da entrada
**Correta: A**
**Por quê:** O vetor passa por duas transformações (W1/b1 e W2/b2), com o descarte do max entre elas. A saída carrega o contexto da atenção reinterpretado e refinado, pronta para a próxima camada.
- **B:** A segunda transformação atua no próprio vetor; não troca por contexto dos vizinhos (isso é da atenção).
- **C:** A ativação zera os negativos, não inverte o sinal.
- **D:** W1 e W2 são justamente quem transforma o vetor; os viéses só ajustam.
**Conceito:** Representação refinada na saída do bloco

## 10. Todos os valores negativos antes da ativação
**Correta: C**
**Por quê:** O max(0, ·) zera todos os valores negativos, então W2 recebe um vetor de zeros e sua contribuição some. Resta o b2, somado depois de W2, como ajuste final.
- **A:** A saída não copia x; ela vem de W2 e b2.
- **B:** W2 não inverte sinal; ela recebe zeros.
- **D:** A ativação age só sobre xW1 + b1; o b2 é somado depois e permanece.
**Conceito:** Efeito da ativação e papel do b2
