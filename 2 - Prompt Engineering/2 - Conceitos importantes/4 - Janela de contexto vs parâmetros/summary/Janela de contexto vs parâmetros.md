# Janela de contexto vs parâmetros

## Parâmetros como pesos do modelo

Parâmetros são os pesos internos do modelo, ajustados durante o treinamento para representar padrões aprendidos. Eles funcionam como a memória adquirida pelo modelo: é neles que ficam codificadas correlações entre palavras, estruturas de texto, código, imagens e outras regularidades dos dados. Quando o modelo reconhece nuances como diferentes sentidos de “go”, essa capacidade vem dos parâmetros, não da janela de contexto. Por isso, parâmetros estão ligados ao que o modelo sabe, e não ao quanto ele consegue ler de uma vez.

## Modelo estático fora do treinamento

Depois que o treinamento termina, o modelo permanece estático em uso normal. Isso significa que os parâmetros não ficam mudando a cada prompt; eles só são alterados em novo treinamento ou ajuste fino. Em inferência, o modelo apenas aplica o que já aprendeu para processar a entrada atual. Essa distinção evita confundir uso do modelo com aprendizado contínuo.

## Capacidade do modelo e número de parâmetros

Em termos gerais, mais parâmetros aumentam a capacidade do modelo de representar padrões complexos e capturar mais nuances. Isso pode melhorar a inferência porque o modelo passa a ter mais possibilidades internas para relacionar contexto e prever a próxima saída. Esse ganho, porém, vem com custo maior de memória, treinamento e operação. Mais parâmetros significam mais capacidade potencial, não garantia automática de melhor resultado em qualquer cenário.

## Janela de contexto não cresce com os parâmetros

Retomando a janela de contexto, ela continua sendo apenas o espaço de tokens disponível em uma chamada, enquanto os parâmetros representam conhecimento aprendido. Essas duas dimensões são independentes: um modelo pode ter muitos parâmetros e pouca janela, ou pouca quantidade de parâmetros e uma janela grande. O exemplo clássico é o GPT-3, com 175 bilhões de parâmetros e apenas 2.048 tokens de contexto. Isso mostra que “saber muito” e “conseguir considerar muito contexto de uma vez” são propriedades diferentes.

## Qualidade depende também do treinamento

Um modelo com muitos parâmetros pode continuar ruim se tiver sido mal treinado. Nesse caso, o sistema apenas terá muitos pesos armazenando padrões inadequados, incompletos ou mal ajustados. O efeito prático é simples: aumentar a escala do modelo não corrige automaticamente problemas de qualidade. Para Prompt Engineering, isso importa porque nem toda limitação percebida na resposta vem do prompt ou da janela; parte pode vir da capacidade aprendida e da qualidade do treinamento.
