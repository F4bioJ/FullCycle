# Fine Tuning supervisionado — resumo

## Do genérico para o especializado

Depois do treino sem supervisão (CLM e MLM), o professor apresenta o **fine tuning supervisionado**. O ponto de partida é um modelo de linguagem que **já foi pré-treinado**. Em vez de alimentá-lo com mais texto genérico, o fine tuning usa texto **especializado em uma tarefa**. O objetivo é "nichar": sair de uma IA generalista para uma IA específica para alguma coisa, enchendo a memória dela com respostas certas e erradas que você já conhece. Para isso é preciso uma base de dados grande.

## A analogia do hospital

No pré-treinamento, você aprendeu português lendo cartas, livros e tudo o mais. Depois, faz um curso intensivo para ser atendente de hospital: não vira médico, mas aprende a linguagem do hospital e como as coisas se relacionam ali, e passa a fazer a pré-triagem das ligações. Esse conhecimento de hospital não serve numa borracharia, mas o português continua servindo. A base generalista segue apoiando o modelo, e a especialização faz com que ele vá muito melhor naquela tarefa do que se tivesse só o português.

## Como funciona

1. **Escolher a tarefa específica:** responder dúvidas médicas, traduzir texto, escrever código, resumir notícias.
2. **Montar um dataset supervisionado:** os dados são organizados **em pares de entrada e saída**, como pergunta e resposta, ou código incompleto e código completo. O rótulo de cada exemplo indica qual é a resposta certa para aquela entrada e guia o aprendizado.
3. **Treinamento adicional:** o modelo recebe esses exemplos e ajusta seus **pesos e vieses** por **backpropagation**, como no treino anterior. Também se usa uma função de perda, como a **cross entropy loss** vista na aula anterior, para comparar o que o modelo respondeu com a resposta correta e medir a diferença.

## Usos práticos

Os exemplos da aula são chatbot médico, geração de código, sumarização automática, pergunta e resposta e **tom de voz**. Uma empresa pode exigir que o modelo fale sempre no tom do seu atendimento, sem respostas grosseiras e sem citar outras empresas: não faz sentido o chatbot do Nubank sugerir que o cliente contrate um empréstimo no Bradesco. Há outros jeitos de controlar isso, como **guardrails**, mas o fine tuning permite colocar essa regra no próprio treinamento, ensinando que aquela resposta está errada e qual deve ser dada no lugar.

## Quando faz sentido

- **Desempenho alto numa tarefa específica:** o chatbot da Magalu precisa responder muito bem sobre os artigos de venda, o funcionamento da empresa e o tom de voz dela, mas não precisa saber física quântica.
- **Quando o prompt sozinho não basta:** quem escreve um bom prompt diz onde buscar e o que não quer, e isso já guia o modelo. Um cliente que só pergunta "como está o tempo?" não dá esse contexto (o modelo poderia buscar nos episódios do Chapolin). Se quem usa não escreve o prompt, o direcionamento precisa estar no modelo. O professor avisa que aqui misturou base de dados e fine tuning.
- **Domínio com linguagem técnica:** medicina, jurídico, tecnologia.
- **Dados sensíveis ou internos:** documentos internos, informação de clientes, a linguagem da empresa, que não estão na internet. Vinte anos de conversas de atendentes dizem o que funciona e o que gera atrito, e com isso a IA fica muito mais preparada do que colocar um ChatGPT direto no atendimento.

## Limitações e cuidados

- **Overfitting:** se o dataset é pequeno ou tem muita informação repetida (sempre a mesma pergunta com a mesma resposta), o modelo decora em vez de gerar. As respostas ficam mecânicas, e aumenta a chance de ele alucinar ou responder besteira. A base precisa ter tamanho considerável e pouca repetição.
- **Vieses nos dados:** ao rotular os exemplos, pode-se errar. O backpropagation ajusta os pesos seguindo o rótulo errado, e o modelo passa a entender como certo o que foi treinado errado.
- **Custo:** o fine tuning exige muito recurso computacional, principalmente com modelo grande, muitos dados e muitos tokens.
- **Atualização constante:** quando o domínio muda (na medicina sempre chega coisa nova), é preciso retreinar de tempos em tempos, e isso sai caro.

## Recursos que tornam o fine tuning mais leve

O professor cita a biblioteca **Hugging Face Transformers**, a técnica **LoRA** e o **PEFT** (Parameter Efficient Fine Tuning, família de técnicas que treinam poucos parâmetros, da qual o LoRA faz parte). Com eles o fine tuning fica mais acessível, com menos dados e recursos. Exemplo: depois de um fine tuning médico pesado com 20 anos de dados, para incorporar os últimos seis meses basta uma base reduzida e um **fine tuning incremental** com algo como o LoRA, já que o modelo está preparado.

## O que é alterado

Como no treino sem supervisão, os **pesos e vieses** da rede são ajustados por backpropagation. Mas os dados são direcionados e têm rótulos específicos, então o ajuste é mais refinado: melhora a chance de o modelo achar a palavra certa que vem na sequência naquele contexto.

## Fine tuning completo e parcial

- **Completo:** todos os parâmetros são atualizados. Exige muito poder computacional, demora e custa caro. Costuma ser usado num domínio novo ou quando o comportamento desejado é muito diferente do pré-treinamento.
- **Parcial:** com LoRA ou adapter tuning, só uma parte é treinada, e não o modelo inteiro. É mais leve, mais barato e não perde o conhecimento já aprendido. Exemplo: um modelo feito em inglês que precisa atender contratos jurídicos em português recebe um fine tuning parcial e aprende esse linguajar sem esquecer o inglês.

## LoRA

LoRA significa **Low Rank Adaptation**. Ele insere matrizes nas camadas do modelo, o que deixa o fine tuning mais leve e eficiente. É uma técnica padrão do PEFT e do ecossistema Hugging Face.

## Prefix Tuning e Prompt Tuning

Em vez de moldar o modelo, essas duas técnicas treinam um **prefixo**, um prompt interno que acompanha o modelo e guia seu comportamento. Não há um backpropagation atualizando os pesos do modelo: o prefixo funciona como um guia que leva a resposta para o lugar certo. É uma boa opção para modelos muito grandes, porque gasta menos.
