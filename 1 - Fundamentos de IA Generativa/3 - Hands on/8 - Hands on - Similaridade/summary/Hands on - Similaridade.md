# Hands on - Similaridade

## Similaridade semântica como medida vetorial

Similaridade semântica é a comparação entre textos pelo significado aproximado, não apenas por palavras idênticas. Retomando embeddings já vistos anteriormente, a aplicação prática aqui é transformar cada frase em um vetor e medir o quanto esses vetores ficam próximos no espaço vetorial. Essa abordagem permite detectar relação entre frases formuladas de modo diferente, embora o resultado continue sendo uma aproximação numérica, não uma compreensão humana do texto.

## Cálculo de similaridade com cosseno

A similaridade por cosseno mede o alinhamento entre dois vetores, produzindo um score que indica o quanto eles apontam para direções parecidas. Ela é útil porque compara a orientação semântica das representações, mesmo quando os valores absolutos dos vetores diferem. No app, o fluxo é direto: gerar `emb1` e `emb2` a partir de duas frases, calcular o cosseno entre eles e retornar esse valor como saída da interface.

## Criação de um Space próprio

Um Space próprio é uma aplicação hospedada no Hugging Face sob sua conta, com interface, código e configuração versionados. Isso importa porque permite testar ideias rapidamente sem depender do ambiente local nem impactar sistemas da empresa. O processo básico consiste em abrir `Spaces`, criar um `New Space`, definir nome, descrição, licença, visibilidade e escolher a infraestrutura gratuita de CPU quando o objetivo for apenas prototipação.

## Escolha do SDK e estrutura inicial

Ao criar o Space, a escolha do Gradio define que a interface será construída como uma aplicação web simples baseada em componentes de entrada e saída. Em vez de editar apenas o arquivo padrão gerado automaticamente, é possível criar o próprio `app file` e controlar explicitamente o código da aplicação. Essa decisão deixa o experimento mais claro: um arquivo concentra o modelo, a função de cálculo e a definição da interface.

## Interface com Gradio

Gradio é a camada de interface que expõe a função Python como um formulário interativo. Aqui, a interface precisa de dois campos de texto como entrada e um campo numérico de saída para exibir o score de similaridade, além de título e descrição para orientar o uso. O valor do Gradio está em reduzir o esforço de front-end: com poucos componentes, o experimento já fica publicável e testável no navegador.

## Implementação da função de similaridade

A função central recebe duas frases, converte ambas em embeddings com um modelo Transformer já disponível e calcula a similaridade entre os vetores resultantes. O passo importante não é apenas “usar um modelo”, mas encadear corretamente as etapas: entrada textual, geração dos vetores, cálculo do cosseno e retorno do score. Esse pipeline materializa a ideia abstrata de proximidade semântica em uma medição observável.

## `requirements.txt` no Space

O `requirements.txt` declara as dependências que o ambiente remoto precisa instalar antes de iniciar a aplicação. Quando esse arquivo não existe ou está incompleto, o build pode falhar mesmo que o código esteja correto, porque o runtime não sabe quais bibliotecas instalar. Neste caso, o erro após o primeiro deploy é resolvido criando o `requirements.txt` e adicionando as dependências usadas pelo app.

## Build, start e depuração básica

Depois do commit na `main`, o Space entra em etapas de build e start, que podem ser lentas na infraestrutura gratuita. Essa lentidão não significa travamento; significa apenas que o ambiente remoto está instalando dependências e inicializando a aplicação. Quando ocorre erro logo após a publicação inicial, a primeira verificação prática deve ser a presença dos arquivos essenciais, especialmente o `requirements.txt`.

## Leitura dos testes com frases

Frases mais longas tendem a produzir resultados mais informativos do que palavras isoladas, porque oferecem mais contexto para a representação vetorial. No experimento, trocar “gato” por “cachorro” aumenta a similaridade, enquanto substituir a frase por algo sobre “avião” reduz o score, o que confirma que o modelo está capturando parte da semântica. Ainda assim, o resultado não é perfeito: elementos genéricos como tempo, estrutura frasal e temas vagamente relacionados podem manter alguma proximidade residual.

## Limitações observadas no experimento

O score de similaridade não equivale a entendimento completo do contexto. Duas frases quase idênticas, mas com uma negação ou mudança sutil de sentido, ainda podem aparecer como muito próximas porque a estrutura textual e grande parte dos termos permanecem semelhantes. Além disso, o app usa uma configuração simples e infraestrutura modesta, então o objetivo aqui é demonstrar o mecanismo de embeddings em ação, não entregar uma avaliação semântica de alta precisão.
