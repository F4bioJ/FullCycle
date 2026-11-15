# Gabarito — Context window

## 1. O que a janela de 128 mil tokens significa
**Correta: B**
**Por quê:** a aula define a janela como o número máximo de tokens que o modelo consegue considerar de uma vez só. Ele usa os tokens anteriores para prever o próximo, e a janela limita quantos desses tokens ele enxerga. Isso diz respeito ao uso (inferência), não ao tamanho dos dados de treino, que são muito maiores.
- **A:** a janela limita o que o modelo enxerga do contexto, que inclui o prompt. Não é um limite só da resposta, e o prompt não pode ter qualquer tamanho.
- **C:** confunde a janela com o vocabulário do tokenizador (aula de Tokens). São coisas diferentes: o vocabulário é o conjunto de tokens possíveis; a janela é quantos tokens cabem no contexto.
- **D:** a janela é o que o modelo enxerga na chamada atual, não uma memória que passa de uma sessão para outra.
**Conceito:** definição de janela de contexto

## 2. "Coube na janela, então tudo recebe a mesma atenção"
**Correta: D**
**Por quê:** o professor insiste que, mesmo com uma janela grande, a qualidade não é uniforme. O Claude com 200 mil tokens enxerga tudo, mas o mecanismo de atenção não é perfeito: com muitos tokens, a relevância se dilui, e partes do texto recebem menos peso. Caber na janela dá alcance, não tratamento igual.
- **A:** é a conclusão que a aula derruba. Dentro da janela, os trechos não recebem o mesmo peso (diluição de relevância e viés para o fim).
- **B:** é um limite inventado. A aula não fala de nenhuma proporção da janela abaixo da qual a atenção fica uniforme; a diluição cresce com a quantidade de tokens, sem um corte na metade.
- **C:** exagera o viés para o fim. Os últimos tokens tendem a ter mais peso, mas o começo não sai do contexto; ele só pode perder acurácia.
**Conceito:** janela grande não significa atenção uniforme

## 3. "Responda em JSON" no começo de um prompt de 100 mil tokens
**Correta: A**
**Por quê:** o prompt cabe na janela (100 mil de 128 mil), então nada foi cortado. Modelos autoregressivos tendem a dar mais peso aos tokens do final do contexto, e a instrução, posta no começo, perdeu força diante do documento longo. A dica do professor é deixar o que é crítico para o final.
- **B:** a instrução de cautela (aula anterior) serve para reduzir invenção de fatos. Aqui o problema não é alucinação, e pôr mais uma instrução no começo repete o erro de posição.
- **C:** 100 mil tokens cabem numa janela de 128 mil. Não houve corte, e trocar de modelo não muda a tendência de pesar mais o final.
- **D:** few-shot (aula anterior) é uma técnica contra alucinação, e a aula não diz que instruções de formato exigem exemplos. Não explica por que a instrução, que estava lá, foi ignorada.
**Conceito:** viés para o fim do contexto

## 4. Dobrar o tamanho do prompt
**Correta: C**
**Por quê:** a aula diz que o custo e o tempo de processamento da atenção crescem de forma quadrática. Com o dobro de tokens, os dois ficam cerca de 2² = 4 vezes maiores.
- **A:** seria um crescimento linear. A aula diz que é quadrático, porque a atenção trabalha as relações entre os tokens, e o número de relações cresce mais rápido que o de tokens.
- **B:** a aula diz que crescem de forma quadrática o custo **e** o tempo de processamento, não só o custo.
- **D:** cada token se relacionar com todos os outros é justamente o que dá o crescimento quadrático: dobrar os tokens dá 2² = 4, não 2³ = 8.
**Conceito:** custo quadrático da atenção

## 5. Qual afirmação sobre janelas maiores está INCORRETA
**Correta: B**
**Por quê:** é a incorreta. Ver as duas pontas do prompt não faz com que elas tenham o mesmo peso: modelos autoregressivos tendem a dar mais peso ao final, e o começo pode perder acurácia, mesmo dentro da janela.
- **A:** correta. A aula diz que uma janela maior ajuda a raciocinar sobre documentos longos e a integrar várias fontes.
- **C:** correta. Prompts maiores deixam a atenção mais cara e mais lenta (custo quadrático).
- **D:** correta. É a diluição de relevância: com muitos tokens, a resposta pode ficar mais genérica.
**Conceito:** benefícios e limites de janelas maiores

## 6. PDF de 200 páginas com resposta vaga
**Correta: A**
**Por quê:** a causa é a diluição do foco: o modelo viu as 200 páginas e espalhou a atenção. A ação mais direta é separar o trabalho: primeiro recortar o trecho relevante (à mão ou com um sistema externo de busca) e depois mandar o modelo agir sobre ele, num prompt curto e direcionado.
- **B:** o PDF já cabia na janela, e o problema não era espaço. Uma janela maior não impede que a atenção se dilua quando o prompt continua cheio de páginas irrelevantes.
- **C:** pedir fontes (aula anterior) ajuda a verificar e reduz invenção, mas o modelo continua lendo as 200 páginas com o foco diluído.
- **D:** o raciocínio passo a passo (aula anterior) ajuda a ver saltos de inferência, mas não reduz a quantidade de tokens disputando a atenção.
**Conceito:** chunking e recuperação de trechos relevantes

## 7. Síntese de um livro inteiro
**Correta: D**
**Por quê:** a tarefa depende do livro todo, então não dá para descartar partes. O resumo hierárquico resume cada capítulo e depois trabalha em cima dos resumos: cobre o livro inteiro sem pôr todo o texto bruto no mesmo prompt.
- **A:** enviar só um capítulo deixa de fora o resto do livro, e a síntese depende de todos.
- **B:** ignorar a metade final descarta metade do conteúdo que a síntese precisa cobrir.
- **C:** buscar trechos relevantes funciona para uma pergunta específica (como a cláusula da página 13). Para uma síntese do livro inteiro, a busca traz pedaços soltos e perde a visão do todo.
**Conceito:** resumos hierárquicos

## 8. Tornar a instrução de foco explícita
**Correta: C**
**Por quê:** é o exemplo da aula. A instrução explícita de foco diz ao modelo que trechos ignorar (a metade final, os mil tokens finais) e onde se concentrar. É um corte feito pelo prompt.
- **A:** é a técnica de persona (aula anterior). Define quem o modelo é, mas não delimita a parte do documento que ele deve usar.
- **B:** é a instrução de cautela (aula anterior). Reduz invenção, mas não restringe a atenção a um trecho.
- **D:** dá ênfase, mas continua sendo o foco implícito ("página 13"). Não diz ao modelo o que ignorar.
**Conceito:** instrução explícita de foco

## 9. Qual limitação a instrução explícita de foco deixa intacta
**Correta: A**
**Por quê:** o professor descreve a técnica como cortar "com prompt" em vez de cortar à mão: o modelo é orientado a ignorar trechos, mas o PDF inteiro continua sendo enviado. Como a aula liga o custo e o tempo da atenção à quantidade de tokens no contexto, esse custo continua o mesmo. Só o recorte feito antes de enviar (chunking, busca de trechos) reduz os tokens processados.
- **B:** o motivo é o contrário do que a aula diz. A instrução de foco não espalha a atenção: ela tenta concentrá-la no trecho pedido, atacando a diluição. Ela pode não eliminar a diluição por completo, mas não é por espalhar a atenção.
- **C:** a aula não diz que a instrução precisa vir antes do documento. Pelo viés para o fim, o que é crítico tende a funcionar melhor no final do prompt, não no começo.
- **D:** confunde o corte pelo prompt com o corte à mão. Os tokens "ignorados" continuam no prompt, ocupando a janela e sendo processados; a instrução atua sobre o foco, não sobre o que é enviado.
**Conceito:** instrução de foco versus recorte prévio

## 10. Mandar o repositório inteiro em cada pergunta
**Correta: D**
**Por quê:** é o "não existe almoço grátis" da aula. Usar 100 mil tokens dá alcance (o modelo enxerga mais e pode integrar mais informação), mas o custo e o tempo crescem de forma quadrática, e, com tanto contexto, a relevância se dilui e o trecho que importa para cada pergunta pode receber pouco peso. Recortar o que é relevante tende a ser melhor.
- **A:** junta um benefício real (mais coerência com mais contexto) a um custo errado. A aula diz que o custo cresce de forma quadrática, não na mesma proporção dos tokens, e ignora a diluição.
- **B:** acerta o custo, mas erra a qualidade. Pela diluição de relevância, um prompt enorme tende a dar respostas mais genéricas que um prompt só com o trecho certo, mesmo dentro da janela.
- **C:** inverte o viés para o fim. Modelos autoregressivos tendem a pesar mais o final do prompt; a dica do professor é deixar o que é crítico no final.
**Conceito:** troca entre janela grande, custo e diluição
