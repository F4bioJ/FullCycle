# Arquitetura RAG

## Abertura
Esta é a aula sobre RAG, a sigla em inglês para geração aumentada por recuperação.

Na aula passada, vimos engenharia de prompt: como pedir melhor a uma LLM. Só que existe um limite que nenhum prompt resolve. Se o modelo não tem o fato, pedir com capricho não faz o fato aparecer.

É aí que entra o RAG. Hoje vamos ver por que ele existe, de onde ele pode buscar informação e quais são as cinco camadas do caminho entre a sua pergunta e a resposta.

Guarde uma ideia desde já. O RAG não ensina nada de novo ao modelo. Ele entrega a informação na hora de responder.

## A defasagem da LLM pura
A frase deste bloco é: toda LLM pura nasce defasada.

Pense numa enciclopédia impressa. No dia em que ela sai da gráfica, ela já não sabe o que aconteceu naquela manhã. O treino de uma LLM funciona parecido. Você alimenta a máquina com tokens de livros, artigos e internet. Quando o treino acaba, o conhecimento fica congelado ali.

A primeira ideia que vem à cabeça é retreinar sempre. Mas a informação nova não para de chegar, então esse treino também nunca pararia. Seria um trabalho contínuo e caríssimo. Na prática, inviável.

O exemplo da aula é o ChatGPT no começo. Você perguntava o resultado do jogo de ontem, e ele só tinha uma foto de um ou dois anos antes. O que acontecia? Em vez de ajudar, ele tendia a inventar, ou dava uma resposta confusa para sair da situação.

Resumindo o quadro: a LLM pura não acessa dados em tempo real, não tem memória viva, não aprende conforme as coisas acontecem e pode alucinar diante de uma pergunta do momento.

Toda LLM pura nasce defasada. E é esse o problema que o RAG ataca.

## O que o RAG faz
A frase deste bloco é: o RAG busca antes de responder.

Imagine um advogado experiente numa audiência. Ele sabe muito de direito, mas não decorou o contrato do seu cliente. Antes de falar, ele abre a pasta, acha a cláusula certa e só então responde. O conhecimento dele continua o mesmo, mas agora ele tem o documento na mão.

O RAG combina duas peças: um modelo de geração, como o ChatGPT, e um mecanismo de busca numa base de conhecimento externa. A geração continua igual, palavra a palavra. A novidade é a consulta que acontece antes dela.

Isso resolve o custo do retreino, porque os pesos do modelo não mudam. E aqui mora uma confusão comum: o RAG não faz a LLM aprender em tempo real. Ela responde com contexto recuperado em tempo real. São coisas bem diferentes.

Um exemplo atual são as versões pagas do ChatGPT. Quando a pergunta é sobre algo muito novo, ele vai buscar na web. O modelo continua sem saber o que aconteceu depois do treino. Mas consegue buscar e responder com base no que encontrou.

O RAG busca antes de responder. Agora, buscar onde?

## As fontes de conhecimento
A frase deste bloco é: a fonte é você quem escolhe.

A web é só uma das opções, e muitas vezes não é a mais valiosa. Você pode ligar o modelo a documentos da empresa guardados num bucket S3. Pode usar APIs e ferramentas internas. Pode consultar bases de artigos científicos e de faculdades. Pode incluir e-mails, chats, relatórios e ferramentas de mensagens como o Teams.

Uma fonte muito usada é o FAQ de atendimento, justamente porque ele muda o tempo todo. Alguém faz um deploy errado em produção, surgem reclamações novas, e essa informação já pode ser encontrada pela busca.

Outro exemplo: você treinou o modelo no mês passado e está fazendo o fechamento contábil deste mês. Sozinho, o modelo não sabe nada sobre esse fechamento. Ligado aos documentos da empresa, ele consegue responder.

A fonte é você quem escolhe. E com ela escolhida, vamos ao caminho completo, camada por camada.

## Camadas um e dois: a query e o embedding
A primeira camada é a query, que é a pergunta do usuário. Por exemplo: o que diz a cláusula sete do contrato de prestação de serviços?

A frase aqui é: a pergunta sozinha não basta. Ela diz o que você quer, mas não traz o texto do contrato. Sem esse contexto, o modelo não tem de onde tirar a resposta. Por isso a query é só o ponto de partida.

A segunda camada transforma a pergunta num embedding, que é uma representação vetorial, ou seja, uma lista de números. A frase aqui é: o vetor representa o significado, mais do que as palavras.

Um exemplo ajuda. Pense em procurar um filme na Netflix. Você digita, e a busca procura as letras e palavras parecidas com o que escreveu. Com embedding é diferente. Imagine um bibliotecário que entende o assunto. Você pede algo sobre acesso remoto seguro, e ele traz um documento sobre VPN corporativa. Nenhuma das três palavras aparece no título, mas o assunto é o mesmo.

A pergunta sozinha não basta, e o vetor representa o significado. Com esse vetor em mãos, dá para procurar.

## Camada três: o retriever
A frase deste bloco é: o retriever compara vetores, não palavras.

O retriever é o componente que faz a busca semântica. Só que tem um detalhe importante: o trabalho começa bem antes da pergunta. Os documentos já precisam ter sido preparados, quebrados em pedaços, e cada pedaço transformado em vetor.

Voltando à biblioteca. O bibliotecário só consegue achar rápido porque alguém já catalogou os livros antes de você chegar. Se você apenas despeja cinco mil PDFs numa pasta, sem esse preparo, não existe nenhum vetor para comparar.

Quando tudo está pronto, há um embedding de cada lado: o da pergunta e o de cada trecho. Um cálculo de similaridade aponta quais trechos estão mais perto da pergunta, e são eles que voltam.

Isso resolve o problema da linguagem natural, porque a pessoa não precisa acertar as palavras exatas do documento. Mas é aqui também que muita coisa pode quebrar. Se a busca traz trechos errados, tudo o que vem depois sofre com isso.

O retriever compara vetores, não palavras. E o que ele encontra vai para a próxima camada.

## Camadas quatro e cinco: o prompt e a geração
A frase deste bloco é: a resposta só é tão boa quanto o contexto.

Na quarta camada, a aplicação monta o prompt, juntando a pergunta original com os trechos recuperados. No exemplo da aula, a busca traz frases como: existe o uso de VPN, o acesso deve ser registrado por log, os dispositivos móveis precisam estar atualizados. Tudo isso entra no prompt antes de a LLM começar a trabalhar.

Na quinta camada, a LLM gera a resposta, agora com a pergunta e as evidências na frente dela. É como fazer uma prova com consulta. Você ainda precisa escrever a resposta com as suas palavras, mas tem o texto aberto ao lado.

Isso reduz bastante a chance de invenção, principalmente quando a base é recente e confiável. Reduz, mas não zera. E repare no sintoma prático: se um assistente com RAG responde fora do assunto, olhe primeiro os trechos que entraram no prompt. Trocar a LLM por uma maior não adianta se o contexto chega errado.

A resposta só é tão boa quanto o contexto.

## Restringir as fontes
A frase deste bloco é: controlar a fonte vale tanto quanto escolher o modelo.

O professor dá uma dica prática. Quando precisa de uma informação atual e precisa, como os lançamentos da semana, ele não deixa a busca aberta. Se deixar, o ChatGPT sai procurando em muitos lugares, bons e ruins.

Então ele já pede no prompt: busque nesta revista digital, nesta faculdade, neste site, e não use outras fontes. É como pedir uma indicação de médico só a quem você confia, em vez de perguntar para a rua inteira.

Isso diminui o ruído e o risco de falha ou alucinação, e dá previsibilidade. Em sistemas reais, saber de onde vem o contexto costuma pesar tanto quanto saber qual LLM vai gerar a resposta.

Controlar a fonte vale tanto quanto escolher o modelo.

## Comparando com os vizinhos
Vamos separar o que costuma se misturar.

Engenharia de prompt e RAG. A engenharia de prompt melhora como você pede. O RAG muda o que o modelo tem em mãos para responder. Um prompt excelente, sem a informação, continua sem a informação. E os dois se encontram quando você restringe as fontes no próprio prompt, ou quando o prompt recebe os trechos recuperados.

Retreino e RAG. O retreino muda os pesos, e por isso é caro. O RAG não muda os pesos: ele acrescenta contexto só àquela resposta. Na pergunta seguinte, o modelo não lembra de nada do que foi buscado. Ele busca de novo.

Busca por palavra e busca semântica. A busca por palavra procura termos parecidos. A busca semântica procura significado. Foi o que você viu na aula prática de similaridade: frases sem palavras em comum podem ficar próximas.

E por fim, alucinação e defasagem. A defasagem é não ter o dado. A alucinação é o que pode acontecer quando o modelo responde mesmo assim. O RAG ataca a falta do dado, e é por isso que a alucinação diminui.

## Revisão
Vamos às frases do dia.

Toda LLM pura nasce defasada.

O RAG busca antes de responder.

A fonte é você quem escolhe.

A pergunta sozinha não basta, e o vetor representa o significado.

O retriever compara vetores, não palavras.

A resposta só é tão boa quanto o contexto.

Controlar a fonte vale tanto quanto escolher o modelo.

Agora, quatro perguntas.

Primeira pergunta: por que não basta retreinar o modelo sempre que surge um documento novo?

[pausa 5]

Resposta: porque a informação nova nunca para de chegar. O treino teria de ser contínuo, e o custo seria altíssimo.

Segunda pergunta: depois de responder com ajuda do RAG, o modelo passou a saber aquele fato?

[pausa 5]

Resposta: não. Os pesos não mudam. O trecho recuperado entrou só no contexto daquela resposta.

Terceira pergunta: um time copiou cinco mil PDFs para uma pasta e ligou o retriever. Por que a busca não funciona?

[pausa 5]

Resposta: porque os documentos não foram quebrados em pedaços nem convertidos em embeddings. Não há vetores para comparar com o da pergunta.

Quarta pergunta: um assistente responde fora do assunto, e os trechos no prompt falam de outra coisa. Onde está o problema?

[pausa 5]

Resposta: na recuperação. A LLM só está gerando a partir do contexto ruim que recebeu, então trocar o modelo não resolve.

Até a próxima aula.
