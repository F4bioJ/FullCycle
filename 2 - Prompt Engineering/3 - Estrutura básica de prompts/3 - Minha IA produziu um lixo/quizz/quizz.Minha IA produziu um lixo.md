# Quizz — Minha IA produziu um lixo

**Capítulo:** 3 - Estrutura básica de prompts · **Aula:** 3
**Base:** material da aula

---

## 1. No meio de um arquivo, você manda no chat "não faz assim, é dessa forma". A IA ajusta o que você pediu e larga o arquivo anterior pela metade. Qual regra a aula propõe para esse caso?
- A) "Antes de alterar qualquer arquivo, apresente o plano completo e aguarde a minha aprovação."
- B) "Não crie arquivos com mais de 100 linhas; divida o trabalho em arquivos e interfaces menores."
- C) "Ao receber uma correção, faça o ajuste pedido e depois retome o trabalho de onde tinha parado."
- D) "Mantenha cada pedido num chat separado, para que uma correção não corte o arquivo em andamento."

## 2. A IA mistura APIs de versões diferentes do mesmo framework front-end. Qual guideline segue o que o professor monta para esse tipo de erro?
- A) Pedir três versões do trecho e manter a forma de import que aparecer com mais frequência entre elas.
- B) Encadear dois prompts: um lista as versões usadas no projeto e o outro gera o código com essa lista.
- C) Informar a versão do framework no prompt e proibir qualquer API que não pertença a essa versão.
- D) Mostrar o trecho errado e o certo e pedir consulta à documentação antes de usar aquela família.

## 3. A aula anterior usou barreiras de comportamento para uma única tarefa. O que muda no uso de limites nesta aula?
- A) Os limites nascem dos erros mapeados no Code Review e se acumulam para os chats seguintes.
- B) Os limites dão lugar aos exemplos few-shot, que mostram o que deve ser feito em vez de proibir.
- C) Os limites passam a valer dentro do chat em que o erro aconteceu, e não nos chats seguintes.
- D) Os limites passam a ser escritos pela própria IA, a partir das correções que você fez no chat.

## 4. A IA entende a tarefa, mas cada resposta chega num formato diferente e difícil de revisar. Qual ajuste vai na direção do que o professor chamou de skeleton of thoughts?
- A) Pedir que a IA pense passo a passo antes de responder, expondo o raciocínio de cada etapa.
- B) Trazer no few-shot a própria saída esperada, deixando mais específico o formato da resposta.
- C) Pedir três respostas independentes e manter a que mais se repete entre as três geradas.
- D) Encadear dois prompts: o primeiro gera o conteúdo e o segundo reformata essa resposta.

## 5. Uma equipe acumulou meses de guidelines, exemplos e restrições num único arquivo, sem organização, e as respostas da IA pioraram. Qual explicação a aula dá?
- A) A informação desorganizada gera ambiguidade, e a IA passa a fazer pior do que com menos instruções.
- B) As guidelines viram barreiras demais e, somadas, deixam a IA sem margem para resolver a tarefa.
- C) Os exemplos em excesso fazem a IA copiar os casos do arquivo em vez de aplicar a regra ao problema.
- D) Cada regra nova soma latência ao prompt, e a IA passa a pular etapas para responder mais rápido.

## 6. Durante um chat inteiro você corrigiu a IA e ela passou a acertar. No dia seguinte, num chat novo, os mesmos erros voltam. O que a aula recomenda?
- A) Retomar o chat antigo, que já tem as correções, em vez de abrir um chat novo para cada tarefa.
- B) Transformar as correções em guidelines documentadas, que todo chat novo recebe desde o início.
- C) Pedir à IA um resumo da conversa anterior ao fim de cada chat e colar esse resumo no próximo.
- D) Repetir as mesmas correções no chat novo, com mais ênfase, até a IA voltar a acertar como antes.

## 7. Ao longo da aula, qual expectativa o professor firma sobre o efeito de documentar o import certo e a regra de consultar a documentação?
- A) Que o erro desapareça de vez, já que agora a IA tem a regra e o exemplo corretos daquela família.
- B) Que o erro diminua no chat atual, mas volte no próximo, que começa sem essas regras registradas.
- C) Que o erro provavelmente não se repita e que, se voltar, dá para restringir ainda mais a regra.
- D) Que o erro diminua enquanto o chat for curto e volte quando a janela de contexto começar a encher.

## 8. Um colega diz que tentou várias vezes e o código da IA continua "um lixo". Qual é a resposta proposta pelo professor?
- A) Trocar de modelo, já que o comportamento muda entre versões e outro modelo pode acertar.
- B) Reescrever o prompt com barreiras de comportamento e saída definida, como na correção de bug.
- C) Pedir que a própria IA revise o código e liste o que fez de errado antes de tentar outra vez.
- D) Fazer ele mesmo o Code Review da saída e mapear cada falha concreta para virar instrução.

## 9. Qual afirmação NÃO corresponde ao que a aula defende?
- A) Quando a IA entrega algo inesperado, é porque faltaram os limites e o comportamento esperado.
- B) Com a estrutura de prompt certa para o caso, os erros da IA no projeto deixam de aparecer.
- C) Estruturar prompts vale além do desenvolvimento: também em agentes, exploração e documentos.
- D) Uma base de prompts cresce como uma suíte de testes e precisa ser legível para ser mantida.

## 10. No Code Review, você nota que a IA duplicou um helper de formatação de datas que o projeto tinha em `utils`. Qual guideline da aula ataca esse problema?
- A) "Antes de criar uma função, pergunte se o projeto tem algo parecido e espere a minha resposta."
- B) "Não crie arquivos com mais de 100 linhas; trabalhe com funções limpas e crie interfaces."
- C) "Após criar qualquer função, revisite e veja se ela é necessária ou se já existe algo similar."
- D) "Siga os padrões já usados nos arquivos do projeto e não mude as convenções existentes."
