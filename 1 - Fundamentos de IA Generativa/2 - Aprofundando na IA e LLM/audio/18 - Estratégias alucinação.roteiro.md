# Estratégias alucinação

## Abertura
Na aula passada, a gente viu que a LLM, o modelo de linguagem de grande porte, alucina. Ela gera um texto fluente, bem montado e confiante, e às vezes tem uma mentira dentro. Vimos os tipos: a alucinação factual, a de citação, a estrutural e a contextual. E vimos por quê: o modelo não confere fatos, ele calcula qual palavra tende a vir depois.

Hoje a conversa muda de lado. Sai a arquitetura e entra o uso. A pergunta é simples: na hora de escrever o prompt, o que eu faço para a alucinação aparecer menos?

O professor traz quatro técnicas que ele usa sempre, uma quinta que ele usa pouco, uma dica sobre o tempo de uso, e três casos reais de advogados que se deram mal. No fim, uma postura: tratar a IA como um estagiário.

Guarde uma ideia desde já. Nenhuma dessas técnicas elimina a alucinação. Todas diminuem. E várias delas servem menos para impedir o erro e mais para deixar o erro à vista.

## Pedir evidência e restringir as fontes
A primeira frase-âncora é esta: peça a prova e diga onde procurar.

Pense num colega que chega na reunião dizendo que o concorrente vai baixar o preço no mês que vem. A primeira coisa que você pergunta é: de onde você tirou isso? Se ele responde "li no jornal tal, na matéria de tal pessoa", você pode ir lá conferir. Se ele não sabe dizer, você já desconfia.

Com a LLM é igual. No prompt, você pede: liste as fontes confiáveis que sustentam sua resposta, cite os autores e os estudos. E pode ir além: busque só em revistas acadêmicas, ou só em jornais.

Isso tem dois efeitos. O primeiro é no modelo. Pedir a fonte força o modelo a buscar consistência no que ele tem. Quando ele vai buscar em dados externos, num lugar definido, ele passa por um enriquecimento com aquela informação, e a chance de inventar cai. Quanto mais nichado o lugar, e mais nova a informação, melhor ele costuma ir.

O segundo efeito é em você. Com a lista na mão, você vai atrás dos autores e confere se eles existem e se dizem aquilo mesmo.

Onde isso quebra? Lembre da aula passada: o modelo também inventa fontes. A lista não é a prova. A lista é o caminho para você conferir. Se você não for atrás, a técnica perde metade do valor.

Então, de novo: peça a prova e diga onde procurar. E depois confira a prova.

## Instrução de cautela
A segunda frase-âncora: dê ao modelo permissão para não saber.

Imagine um garçom novo, louco para agradar. Você pergunta se o prato tem amendoim. Ele não sabe, mas não quer decepcionar, e responde "não tem, pode ficar tranquilo". Agora imagine que o gerente disse a ele, no primeiro dia: se não souber, diga que vai perguntar na cozinha. A resposta muda.

A LLM tem esse jeito de garçom ansioso. Ela foi feita para parecer humana e agradável. Quando você conversa com ela como se fosse uma pessoa, ela tende a querer agradar, e agradar, para ela, é entregar uma resposta, qualquer resposta.

A instrução de cautela vai direto nisso. Você escreve no prompt: se você não tiver certeza, diga que não sabe. Evite inventar informação se os dados não forem conhecidos.

O que isso resolve? Tira a pressão de sempre responder. O modelo entende que não precisa completar a lacuna com criatividade. Você troca uma resposta confiante e errada por uma resposta mais conservadora, às vezes um simples "não sei".

Onde quebra? A instrução reduz a tendência, não apaga. O modelo continua sem conferir fatos. Por isso ela anda junto com as outras técnicas.

Dê ao modelo permissão para não saber. É a técnica que ataca a vontade de agradar.

## O raciocínio antes da conclusão
A terceira frase-âncora: peça o caminho, não só o destino.

O professor chama a técnica de Chain of Truth Proofing. O nome mais conhecido para essa ideia é Chain of Thought, cadeia de pensamento. A ideia é pedir ao modelo: explique o seu raciocínio, passo a passo, antes de chegar à conclusão.

Pense na aula de matemática da escola. A professora não aceitava só o resultado. Ela queria a conta armada. Não porque a conta armada garante o acerto, mas porque, se você errou, ela via exatamente em que linha.

Aqui é o mesmo. O ganho é duplo. Primeiro, o modelo ganha mais consistência lógica, porque precisa justificar o caminho. Segundo, e mais importante, você enxerga se ele deu um salto maluco.

O exemplo do professor: você pede um artigo sobre a Amazônia. O modelo começa bem, citando livros. De repente, afirma que a Amazônia vai acabar no ano que vem. E no passo a passo não aparece nenhuma busca, nenhuma fonte que sustente isso. Ali está a alucinação, à vista. Ele não foi a lugar nenhum buscar aquilo. Inventou.

Algumas ferramentas, como o Manus, já mostram o que estão processando. Se você tiver paciência, dá para acompanhar. Mas pedir a explicação é o jeito melhorado, e funciona em qualquer ferramenta.

Onde quebra? Um raciocínio bem explicado não é um raciocínio verdadeiro. O modelo pode montar um caminho bonito até uma conclusão errada. A técnica não impede o erro. Ela mostra onde o erro está, desde que você leia.

Peça o caminho, não só o destino.

## Persona e escopo declarados
A quarta frase-âncora: diga ao modelo quem ele é e até onde ele vai, uma vez só.

Pense no primeiro dia de um funcionário novo. Você não repete as regras da empresa a cada tarefa. Você entrega um crachá, diz qual é a função dele, o que ele pode e o que não pode fazer. A partir daí, ele trabalha dentro daquilo.

Com a LLM, isso é criar uma persona ou um escopo. Quase toda ferramenta permite, cada uma de um jeito. No ChatGPT você cria uma pasta de conversa e escreve em cima o comportamento esperado. No Copilot você cria algo como se fosse um agente, numa janelinha própria, mesmo que nem sempre seja um agente de verdade. No Gemini também dá, e no Manus, pelo que o professor lembra, é parecido com o ChatGPT.

O exemplo do professor: declarar que o assistente foi treinado só com dados até dois mil e vinte e três e não tenta prever o futuro. Você mostra ao modelo o que ele é e marca o limite. Do limite para frente, ele não inventa.

E não precisa ser sobre datas. Você pode declarar qualquer jeito de atuar. O pulo do gato é este: dentro do escopo você coloca tudo das técnicas anteriores. Peça fontes, diga quando não sabe, explique o raciocínio. Escreve uma vez, e vale para todas as conversas daquela pasta.

O que isso resolve? A repetição, e as respostas fora do domínio.

Onde quebra? O escopo é uma instrução, não um treinamento. Ele não muda o que o modelo aprendeu. Ele só orienta o comportamento.

Essas são as quatro que o professor usa sempre. Diga ao modelo quem ele é e até onde ele vai, uma vez só.

## Few-shot e o tempo de uso
A quinta técnica tem uma frase-âncora curta: mostre o certo e o errado.

É o Few-shot Prompting. Em vez de explicar em palavras o que você quer, você dá exemplos. Isto aqui eu considero correto. Isto aqui eu considero errado. É como ensinar uma criança a separar o lixo: em vez de dar a definição de reciclável, você mostra a garrafa, mostra a casca de banana, e ela pega o jeito.

Com o tempo, o modelo entende até onde pode responder inferindo e até onde não pode. Você vai afinando o modelo para você.

O que resolve? A ambiguidade das instruções abstratas. Onde quebra? No trabalho. Preparar bons exemplos dá muito trabalho, e por isso o professor, sendo honesto, diz que não gosta muito dela.

E aqui entra uma dica pessoal dele. A conta que ele usa há anos falha menos. Na experiência dele, o ChatGPT é mais afinado que o Gemini, que é mais afinado que o Manus, e o Llama, que ele usou pouquíssimo, talvez seja o menos afinado. A dica: não ficar pulando de uma ferramenta para outra. Testar todas é interessante, mas quem fica numa só tende a ter um assistente que responde melhor.

Mostre o certo e o errado. E fique tempo bastante numa ferramenta para ela se acostumar com você.

## Casos reais nos tribunais
A frase-âncora dos casos: um fato plausível e inventado custa caro.

O professor traz três casos dos Estados Unidos, todos jurídicos. O direito é o tipo de lugar onde um detalhe vale muito: alguém pode ser preso ou absolvido, e tem um juiz lendo cada linha. Havia casos médicos também, mas as fontes saíram do ar.

No primeiro caso, de Utah, o advogado usou a IA para gerar uma peça e incluiu uma citação de um caso que não existia. O tribunal procurou e não achou registro nenhum. Ele teve de se retratar formalmente, e o tribunal criou regras mais duras para o uso de IA. O professor faz questão de dizer qual é o ponto: não foi um argumento incoerente. Foi um fato inventado. Um fato que até poderia ser coerente, mas que brotou do nada.

No segundo, um escritório grande apresentou uma peça com seis citações inexistentes, geradas por IA. O juiz viu negligência, e veio uma multa de trinta e um mil dólares. Para o professor, o pior nem é o dinheiro. É a reputação. Você contrataria um escritório conhecido por usar IA errado?

No terceiro, do Alabama, o escritório Butler Snow foi contratado pelo estado para defender o sistema prisional num processo sobre direitos humanos. Usou IA para gerar argumentos e entraram citações falsas. Segundo o professor, o prejuízo envolveu milhões de dólares, a imagem do estado, e abriu outra discussão: dinheiro público pagando uma defesa feita com IA.

Repare que os três são o mesmo tipo de alucinação da aula passada: a de citação. Referências com cara de legítimas que não existem. Num ambiente onde cada citação é conferida, ela aparece, e cobra o preço.

Um fato plausível e inventado custa caro.

## A IA como estagiário
A última frase-âncora: a IA é o seu estagiário, e você assina embaixo.

O professor é claro: a empolgação com a IA precisa existir. A gente precisa querer usar. Mas ela não é o gênio da lâmpada que resolve a vida.

Pense num estagiário esperto. Ele faz o rascunho rápido, levanta material, sugere caminhos. Você não manda o trabalho dele direto para o cliente. Você lê, confere, corrige. Quem responde é você.

Com a IA é o mesmo. Ela acelera, mas você valida antes de passar adiante como verdade.

A IA é o seu estagiário, e você assina embaixo.

## Comparando as técnicas
Agora vamos separar as técnicas, porque elas se parecem e é fácil misturar. A pergunta que separa é: o que cada uma ataca?

Pedir fontes ataca a falta de âncora. O modelo é forçado a se apoiar em algo, e você ganha uma lista para conferir.

A instrução de cautela ataca a vontade de agradar. Ela dá permissão para dizer não sei.

O raciocínio passo a passo não impede o erro. Ele expõe o erro. O valor está em você ver o salto.

A persona ou escopo não é uma técnica nova de conteúdo. É o lugar onde você guarda as outras, para não repetir, e onde marca o limite do modelo.

O Few-shot ensina por exemplo, em vez de por regra. Funciona, mas custa trabalho.

E repare na ligação com a aula passada. A alucinação nasce porque o modelo calcula a próxima palavra sem conferir fatos, e porque quer parecer humano e agradável. Cada técnica mexe numa dessas pontas: ou dá ao modelo uma âncora, ou tira a pressão de agradar, ou deixa o erro visível para você. Nenhuma faz o modelo passar a conferir fatos sozinho. Essa parte continua sendo sua.

## Revisão
Vamos às frases-âncora, em sequência.

Peça a prova e diga onde procurar.

Dê ao modelo permissão para não saber.

Peça o caminho, não só o destino.

Diga ao modelo quem ele é e até onde ele vai, uma vez só.

Mostre o certo e o errado.

Um fato plausível e inventado custa caro.

A IA é o seu estagiário, e você assina embaixo.

Agora, quatro perguntas.

Primeira pergunta: você pediu ao modelo a lista de fontes, e ele entregou cinco artigos com autor e título. Por que isso ainda não basta?

[pausa 5]

Resposta: porque o modelo também inventa fontes. A lista é o caminho para a verificação, não a verificação. Você ainda precisa ir atrás dos autores e conferir.

Segunda pergunta: qual comportamento do modelo a instrução "se não tiver certeza, diga que não sabe" ataca?

[pausa 5]

Resposta: a tendência de agradar. O modelo quer entregar uma resposta, e a instrução mostra que ele não precisa, o que reduz o preenchimento da lacuna com criatividade.

Terceira pergunta: se o modelo explicou o raciocínio passo a passo, a conclusão está garantida?

[pausa 5]

Resposta: não. O passo a passo dá mais consistência e, principalmente, deixa você ver onde houve um salto sem base, como a Amazônia que acaba no ano que vem sem fonte nenhuma. A técnica mostra o erro, não o impede.

Quarta pergunta: nos três casos dos tribunais, qual tipo de alucinação apareceu, e qual foi o ponto que o professor destacou?

[pausa 5]

Resposta: alucinação de citação. Precedentes e citações que não existiam. O ponto é que não era um argumento incoerente: era um fato inventado, que até soava plausível, e plausível não quer dizer real.
