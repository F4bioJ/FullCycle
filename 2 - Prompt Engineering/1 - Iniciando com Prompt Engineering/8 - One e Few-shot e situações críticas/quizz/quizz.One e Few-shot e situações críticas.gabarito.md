# Gabarito — One e Few-shot e situações críticas

## 1. Zero-shot × one-shot para resumos no estilo da casa
**Correta: A**
**Por quê:** a aula diz que os exemplos dão controle sobre a forma da saída (padronizar estilo, resumir uma notícia como o exemplo), mas acrescentam tokens ao prompt e fazem o resultado depender muito da qualidade do exemplo.
- **B:** o resumo do professor da aula 2.1.7 diz que pedir um formato explícito ajuda, mas não tem a estabilidade de mostrar exemplos quando a saída precisa ser muito padronizada. O ganho de forma do exemplo é justamente o que a instrução sozinha não dá.
- **C:** os exemplos não "treinam" o modelo; eles só condicionam a resposta naquele contexto. Cada chamada precisa levá-los de novo e paga por eles.
- **D:** é o contrário: copiar um estilo pronto é a fonte do viés. Exemplos rígidos fazem o modelo imitar demais e ficar menos criativo.
**Conceito:** troca do one-shot (controle da forma × custo e dependência do exemplo)

## 2. One-shot da capital × one-shot de logs
**Correta: C**
**Por quê:** na capital, o exemplo ensinou a forma (só o nome, sem explicação), e o conteúdo era óbvio. Na classificação, o exemplo precisava transmitir o critério que separa error de warning, e um caso só não delimita isso. O modelo preencheu a lacuna com uma inferência própria e devolveu `status`. A aula conclui que é preciso ter cuidado com exemplos de menos no one-shot.
- **A:** a aula não atribui a falha ao treino. Com mais exemplos, no mesmo modelo, a classificação funcionou (mensagem 3 deu `warning`).
- **B:** a mensagem 1 também não pedia formato, e o one-shot restringiu a saída a "Brasília". O exemplo ensina o formato sem instrução; o que faltou no log foi o critério entre os rótulos.
- **D:** a aula não fala de temperatura nesse caso, e a temperatura não resolve a falta de critério: o problema era o modelo não saber a regra.
**Conceito:** one-shot ensina formato, mas um exemplo pode não delimitar o critério

## 3. Por que a mensagem 3 deu `warning`
**Correta: D**
**Por quê:** o professor diz que o modelo provavelmente olhou o exemplo do tempo de resposta do banco acima do threshold (`warning`) e trouxe o mesmo rótulo para a API acima do threshold: analogia direta com um exemplo.
- **A:** a aula não descreve nenhuma regra de seguir o rótulo mais frequente. Ela atribui o `warning` à analogia com o exemplo do threshold. Na mensagem 4 o modelo também deu `error` para CPU, então a frequência não explica o comportamento.
- **B:** a aula atribui a resposta justamente aos exemplos, não a um conhecimento prévio que os ignora.
- **C:** a aula fala de GPT-3.5 Turbo, sem reasoning, e não diz que o número de exemplos ativa raciocínio.
**Conceito:** few-shot funciona por analogia com os exemplos

## 4. Oscilação na mensagem 4
**Correta: B**
**Por quê:** o professor colocou ambiguidades de propósito (disco em 85% → warning, em 90% → error; disco baixo → warning, com 5% livres → error). Com exemplos parecidos e rótulos diferentes, a IA ganha margem de interpretação, perde a linha de raciocínio e dá cada hora uma resposta.
- **A:** a aula não fala em limite de contexto nem em corte de exemplos.
- **C:** segundo o professor, nas mensagens com menos exemplos a resposta volta sempre `warning`. A oscilação veio dos exemplos conflitantes, não de uma variação igual em toda execução.
- **D:** imitar demais é o viés de exemplos rígidos, que gera repetição, não oscilação. A aula não fala em repetir o rótulo do fim do prompt.
**Conceito:** excesso de exemplos conflitantes gera ambiguidade e instabilidade

## 5. Custo de 15 exemplos em alto volume
**Correta: D**
**Por quê:** a aula diz que os exemplos aumentam o custo em tokens, porque entram no prompt. O resumo do professor acrescenta que eles ocupam a janela de contexto e podem aumentar a latência. Em milhões de chamadas, cada uma paga os exemplos.
- **A:** os exemplos aumentam a entrada, não a saída. No one-shot da capital, o exemplo deixou a saída mais curta ("Brasília" puro).
- **B:** o modelo não guarda os exemplos entre chamadas; eles condicionam só aquele contexto e precisam ir em toda chamada.
- **C:** o custo dos exemplos (tokens de entrada) vale para qualquer modelo. O reasoning é outro custo, de saída, visto na aula 2.1.7.
**Conceito:** custo de tokens do few-shot em escala

## 6. Afirmação INCORRETA sobre as limitações
**Correta: C**
**Por quê:** a aula mostra o contrário: na mensagem 4, 15 exemplos do mesmo domínio (logs), com rótulos de fronteira ambíguos, fizeram a classificação de CPU oscilar entre `warning` e `error`. O professor conclui que mais exemplos não dão necessariamente a melhor resposta e podem gerar mais ambiguidade. É a única afirmação falsa.
- **A:** correta: os exemplos aumentam o custo em tokens, e o resumo do professor acrescenta que ocupam a janela de contexto.
- **B:** correta: exemplos rígidos geram muita repetição, e o professor diz que isso atrapalha quando se quer saída menos uniforme, como numa redação.
- **D:** correta: o resumo do professor diz que a técnica não treina o modelo no sentido tradicional, só condiciona a resposta naquele contexto.
**Conceito:** mais exemplos não garantem estabilidade

## 7. Papel + formato + um par de exemplo
**Correta: B**
**Por quê:** a aula define one-shot como dar um exemplo de entrada e saída. O papel (role prompting) e a instrução de formato (a lista de rótulos) dão contexto, mas não são pares "de → para". O prompt tem um par, então é one-shot. As técnicas se combinam.
- **A:** few-shot é ter poucos pares de entrada e saída. A lista de rótulos permitidos é instrução de formato, não um par "de → para", então não conta como exemplo.
- **C:** o zero-shot é definido pela ausência de exemplos (aula 2.1.7). Com um par de entrada e saída, deixa de ser zero-shot.
- **D:** role prompting se combina com as outras técnicas; definir um papel não impede classificar o prompt pelos exemplos.
**Conceito:** o que conta como exemplo (one-shot × zero-shot × role)

## 8. Casos de teste que só repetem o exemplo
**Correta: A**
**Por quê:** a aula diz que exemplos rígidos enviesam a resposta: o modelo segue o exemplo à risca, fica menos criativo, imita demais e não inova, gerando muita repetição. Além disso, o exemplo não cobre todas as variações.
- **B:** alucinação é inventar informação falsa (aula 2.1.7). Testes parecidos e válidos não são informação inventada.
- **C:** conflito entre exemplos exige vários exemplos com rótulos diferentes. Aqui há um exemplo só.
- **D:** a aula diz que exemplos encarecem e ocupam contexto, não que um exemplo impede o modelo de variar por falta de espaço.
**Conceito:** viés por exemplos rígidos (imitação, pouca inovação)

## 9. Automação de issues com classificação oscilante
**Correta: D**
**Por quê:** a aula conclui que muitos exemplos não garantem a melhor resposta e que, em cenários sensíveis, o objetivo é tirar o conflito entre exemplos. Um conjunto pequeno, claro e consistente é mais seguro do que um grande com rótulos ambíguos.
- **A:** mais exemplos foi o que gerou a ambiguidade na mensagem 4. Acrescentar faixas de CPU aumenta a margem de interpretação em vez de fixar a regra.
- **B:** a instrução de formato não resolve o problema, porque a saída já era um rótulo válido. O que oscila é a escolha entre `warning` e `error`, causada pelos exemplos conflitantes, que continuam lá.
- **C:** a aula não diz que o zero-shot estabiliza a saída. Pela aula 2.1.7, o zero-shot tem pouco controle de formato e é sensível ao texto do prompt.
**Conceito:** curadoria de exemplos em cenário crítico

## 10. Diagnóstico de dois prompts que falham
**Correta: C**
**Por quê:** a aula mostra duas falhas diferentes. Exemplos rígidos enviesam a resposta: o modelo segue o exemplo à risca e gera muita repetição (P1). Muitos exemplos parecidos com rótulos diferentes geram ambiguidade, e o modelo dá cada hora uma resposta (P2, como a mensagem 4, enquanto a versão com menos exemplos dava sempre `warning`).
- **A:** inverte os diagnósticos. Conflito entre exemplos exige vários exemplos com rótulos diferentes, e P1 tem um exemplo só; o sintoma de imitação é a repetição, não a oscilação.
- **B:** P1 não falha por falta de exemplo, e sim por imitar o que tem. Em P2, a versão com 4 exemplos não oscila nas mesmas condições, então a causa está nos 15 exemplos, não na temperatura.
- **D:** viés por imitação produz repetição e estabilidade demais, não respostas diferentes para a mesma entrada. A aula atribui a oscilação à ambiguidade entre os exemplos.
**Conceito:** viés (repetição) × exemplos conflitantes (oscilação)
