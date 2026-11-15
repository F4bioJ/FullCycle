# Objetivos geração de respostas — resumo

## O objetivo do próximo bloco

Depois de ver as dificuldades das LLMs, o professor anuncia o próximo passo: ensinar **como funciona a geração de resposta**, ou seja, como se chega à resposta a partir de um prompt. A ideia é aprofundar o que já foi visto e levar o aluno a um nível mais avançado, para **parar de ser só usuário** e entender como o motor funciona.

## Geração token a token

O primeiro objetivo é compreender a inferência: o modelo **prediz um token por vez**, com base no contexto disponível e em probabilidades aprendidas no treinamento. A resposta final surge da **sequência de escolhas locais** do próximo token. Por isso, pequenas mudanças no prompt podem alterar bastante a saída.

## A aparência de resposta memorizada

Em alguns casos, o modelo parece ter **memorizado respostas prontas**. Mesmo assim, na operação ele continua fazendo predição token a token.

## O papel da tokenização e do contexto

Outro objetivo é entender como as palavras são quebradas e representadas dentro da LLM, e como o modelo usa o contexto para decidir o próximo token. Isso importa nos diálogos que ele forma com o usuário e em tarefas como a análise de redação.

## LLMs são ajustáveis

O professor compara a LLM a um motor que pode ser ajustado. O mesmo modelo pode ser preparado para dar resultados **factuais, criativos, resumidos ou não**, controlando estilo, comportamento e saída.

Esse controle combina **instruções no prompt e parâmetros de geração**, que deslocam a distribuição de probabilidade dos próximos tokens. Não é a troca de um "modo fixo": o comportamento muda **sem mudar os pesos** do modelo.

## Temperatura, Top-K e Top-P

Esses parâmetros serão vistos adiante e controlam o quanto a escolha do próximo token é conservadora ou diversa. Valores mais restritivos tendem a dar respostas mais previsíveis e consistentes; configurações mais abertas ampliam a variedade e a criatividade. Quem quiser preparar uma LLM para um negócio precisa saber fazer esse ajuste, e a configuração ideal **depende da tarefa**.

## O controle do tom

Também é possível influenciar o tom: respostas mais técnicas ou informais, mais empáticas ou mais diretas.

## A armadilha da alucinação

Mexer nos parâmetros **abre caminho para mais ou menos alucinação**. Ao aumentar a liberdade de geração, pode aumentar o risco de deriva e de alucinação. Por isso, é preciso se preparar para essa troca.

## O uso no dia a dia

O professor promete exemplos de aplicação em **resumos, código, e-mails, produção de conteúdo e chatbots**. Cada tarefa exige um perfil de saída diferente, e entender o mecanismo ajuda a obter esse perfil de forma mais confiável. Isso pode melhorar a produtividade ou até virar um negócio.

## Hands-on: o Tokenizer da OpenAI

A demonstração usa o **Tokenizer** (`platform.openai.com/tokenizer`), que funciona como uma calculadora: você escolhe o modelo, escreve uma frase e vê como ela é quebrada em tokens. Dá para testar sem fazer login.

## O que é um token, na prática

Um token **não coincide necessariamente com uma palavra**. Na frase do professor, "o" é um token de um único caractere, e o espaço seguido de "cachorro" é outro. Até certo ponto, a frase fica quase um para um: cada palavra (com seu espaço) vira um token.

## Palavras raras são fragmentadas

Ao escrever **"paralelepípedo"**, a palavra se quebra em vários pedaços, como *Par*, *Ale*, *Lep*, *Ip* e *Edo*. A probabilidade de a palavra inteira aparecer é muito baixa, e é mais fácil encontrar esses pedaços se repetindo do que o termo completo. O modelo compõe a palavra rara a partir de segmentos frequentes, sem precisar guardar uma unidade longa e rara no vocabulário.

## A quebra muda entre modelos

Ao trocar o modelo na ferramenta, a mesma frase é quebrada de outro jeito. Em um dos modelos, "paralelepípedo" já se divide de forma diferente, "cachorro" passa a ter dois tokens e "praça" se quebra mais. No **Legacy**, a fragmentação é ainda maior.

A explicação do professor é que o modelo com menos tokens no treinamento não chegou a considerar "cachorro" uma palavra tão forte, enquanto o treinamento mais forte, com mais tokens, mantém a palavra inteira. Vocabulários, estratégias de tokenização e dados diferentes levam a quebras diferentes.

## Token é custo

**Cada token vira um custo.** Uma frase mais fragmentada consome mais tokens, ocupa mais espaço da janela de contexto e custa mais, de modo que a mesma frase pode custar mais em um modelo do que em outro. Por isso, a tokenização não é só um detalhe interno. Ver a quebra na prática ajuda a antecipar o custo e a entender como o motor funciona por trás.
