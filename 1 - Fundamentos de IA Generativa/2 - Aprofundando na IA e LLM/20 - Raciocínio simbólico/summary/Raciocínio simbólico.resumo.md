# Raciocínio simbólico — resumo

## Mais um problema das LLMs

Conhecer as dificuldades das LLMs evita "endeusar" a tecnologia e mostra o que dá mesmo para fazer com ela. A dificuldade desta aula é o **raciocínio simbólico**, ou **raciocínio lógico**.

## Fluência textual não é raciocínio

Modelos como GPT, Gemini, Claude e Llama têm **fluência textual**: sabem reproduzir texto e fazer construção gramatical. Já o raciocínio simbólico e o lógico estruturado, que são o modo de pensar típico de desenvolvedores, eles não fazem muito bem.

Essas habilidades são essenciais em **matemática, cálculo e desenvolvimento de sistemas**. Quando é preciso decidir com base em **múltiplas condições** e raciocinar por **etapas interdependentes**, fica mais difícil. A LLM até consegue, com muito mais dificuldade que uma pessoa, porque normalmente **associa padrões de linguagem**.

## A base continua estatística

Tudo o que o curso mostrou até aqui (n-gramas, cadeias de Markov, redes neurais) é **base estatística para decidir o próximo token**. Matemática não é previsibilidade estatística. Essas tarefas pedem mais do que padrões linguísticos: **estruturas formais, sequência lógica e compreensão simbólica**. Nisso as LLMs não são boas nem muito confiáveis.

## O que é raciocínio simbólico e lógico

Raciocínio simbólico é **manipular símbolos com base em regras formais**. É o que acontece numa função matemática que só tem símbolos, como `x` e `y`, sem números. Ele aparece em **lógica matemática, álgebra e programação**, em que há variáveis o tempo todo e um raciocínio lógico por trás. Na álgebra, `x` é uma variável que, no fim do cálculo, recebe um número. Na programação, você atribui valores a uma variável.

Esse raciocínio permite **inferir consequências a partir de premissas** e **seguir múltiplas etapas encadeadas**, o que é muito difícil para a LLM. Também são difíceis para ela **negação, quantificadores, contradições e implicações**.

## O exemplo "todos os A são B"

Se todos os A são B e X é A, então X é B. O professor fez esse teste no ChatGPT, e ele respondeu certo e explicou a correlação. Só que faz isso com **estatística sobre vetores**: regras assim aparecem aos milhões na internet, em livros e até em brincadeiras no Instagram. Por isso o modelo consegue construir a resposta token a token.

Em resumo: **consegue fazer? Consegue. Compreende? Não.** Ele reproduz o que já viu. Diante de um cálculo que ainda não mapeou, possivelmente vai entregar uma resposta errada.

## Base probabilística, não simbólica

As LLMs são treinadas para **prever a próxima palavra** com base em padrões estatísticos. A explicação do exemplo acima é fruto dessa previsão, e não de um raciocínio sobre as premissas. O modelo nem vê a estrutura lógica como nós: tudo vira **vetor**, e os vetores entram num **cálculo probabilístico**. Ele imita o que vem em seguida, sem compreender o que está sendo feito. Isso é **ótimo para linguagem natural e muito frágil para lógica formal**.

## Falta de consistência entre etapas

Processar **várias etapas** é difícil para a LLM, embora os agentes façam isso um pouco melhor. Em um problema de álgebra ou em um código com várias dependências, **um erro na primeira etapa compromete tudo o que vem depois**.

Além disso, o modelo tende a gerar **respostas plausíveis**: se errar, pode convencer você de que está certo. Raciocínio lógico não é a habilidade principal dele, por isso é preciso ficar atento.

## Sem memória explícita nem verificação

A computação normal guarda valores em memória, busca e continua o processamento. A LLM não tem essa estrutura: ela guarda **vetores e correlações**, porque está tentando **construir uma frase**, e não resolver um problema matemático. Os Transformers **não têm memória simbólica persistente**, nada parecido com uma pessoa que anota cada passo e depois volta a ele.

Também **não há verificação interna**, como um **compilador** ou um **provador lógico** que diga se aquilo faz sentido. A resposta pode parecer certa sem estar.

## Exemplo prático: o problema das idades

"João tem o dobro da idade de Maria e, daqui a 5 anos, a soma das idades será 45. Qual a idade de cada um?" Para resolver, é preciso **representar as variáveis** (`J = 2M`) e fazer as operações. Essa passagem do enunciado para a álgebra é a parte difícil para o modelo.

Ele pode explicar o problema e errar os cálculos no meio. Pode também **chegar ao resultado, mas errar ao expandir os passos intermediários**. Se viu algo parecido no treino, tende a responder de forma satisfatória.

## Chain of Thought (CoT)

O primeiro caminho de solução é o **Chain of Thought**: estimular o modelo a "**pensar em voz alta**", contando o primeiro passo, o segundo, o terceiro. Isso **organiza o raciocínio**, **melhora as chances de acerto** e permite **dar feedback** para melhorar a interação. Por exemplo: "vamos resolver passo a passo", começando por "João tem o dobro da idade de Maria" e passando depois à soma das idades daqui a 5 anos.

## Raciocínio híbrido

Outra saída é **combinar a LLM com ferramentas externas**: a LLM é boa em texto, e outra coisa é boa em cálculo, como **Python, um motor simbólico ou uma API**. O modelo gera o raciocínio em linguagem natural e **delega o cálculo** a quem sabe fazê-lo. **LangChain e AutoGPT** fazem isso, encadeando o processamento e o raciocínio.

## Modelos híbridos neurossimbólicos

Aqui se une **Deep Learning a um sistema de lógica simbólica**, para ter a desenvoltura da LLM com a precisão do sistema simbólico. A ideia vai além do cálculo: o sistema também **prova que o cálculo está no caminho certo**. Há avanços, mas o professor ainda não viu isso funcionando.

## Limitações que continuam

- **Negação:** "ninguém que é rico é feliz" é fácil de entender; "ninguém que não é rico é feliz" é difícil até para nós. O conselho: **não trabalhem na negativa**.
- **Inversão de quantificadores:** "todo X é Y" é diferente de "todo Y é X", e o modelo pode trocar um pelo outro.
- **Álgebra simbólica e lógica proposicional e de predicados:** também podem dar errado.

Modelos como o GPT-4 fazem isso melhor, mas não é perfeito. Nesses cenários, é preciso **mais atenção e mais validações**, ou usar uma das estratégias acima. O professor cita o LangChain como muito usado pelas grandes empresas.
