# Datasets — resumo

## Dataset: o dado vem antes da avaliação

Depois da visão geral dada nas aulas anteriores, o professor passa à prática. O primeiro passo é o dataset: um conjunto de dados estruturados sobre o qual a avaliação vai rodar. A ideia central é que, para avaliar algo, é preciso ter o dado antes, e esse dado precisa estar estruturado.

## LangSmith como ferramenta

Para os exemplos do capítulo, o professor usa o LangSmith com uma conta de desenvolvedor: criar a conta (gratuita no momento da gravação), gerar uma API key e executar. Com muitas execuções, a ferramenta pode aplicar rate limit ou passar a cobrar, mas com poucos exemplos e fora de produção isso não é problema. Ele ressalta que há outras ferramentas e a forma manual; a ferramenta é detalhe.

## A parte que trava: um dataset expressivo

Na visão do professor, a parte mais chata do processo é conseguir um dataset expressivo, capaz de testar e validar os pressupostos da equipe. É o que trava a maioria das pessoas no início: elas querem medir, mas não têm os dados brutos, têm preguiça de montá-los ou não sabem em que formato colocá-los, e a avaliação nem começa.

## Duas formas de montar o dataset

- **Execuções reais de produção:** pegar o que o sistema já executou, normalizar esses dados e convertê-los na estrutura usada pela avaliação. Tende a refletir melhor o uso real, mas exige limpeza e organização.
- **Geração com IA:** escrever um bom prompt pedindo à IA um conjunto de exemplos com várias opções, cobrindo os detalhes que interessam. Acelera a montagem, especialmente quando ainda não há volume real suficiente.

As duas são válidas, desde que o resultado seja estruturado e útil para testar hipóteses.

## Estrutura do exemplo: input e output

O dataset da aula é um JSON simples, com cerca de 18 exemplos, para um prompt que analisa código e aponta problemas. Cada exemplo tem um `input` e um `output`:

- **input:** a linguagem (Go), a tarefa ("analise e retorne um JSON com os problemas encontrados em `findings` e um `summary` curto") e o trecho de código a ser analisado;
- **output:** a resposta esperada, com os `findings` (por exemplo, ausência de timeout, a linha 8, descrição e severidade) e o `summary` (adicionar timeout via contexto, checar erros de HTTP).

## Metadados

O exemplo também traz metadados: o tópico (`HTTP Client`) e a categoria (robustez). Segundo o resumo do professor, eles permitem filtrar e agrupar resultados por tipo de problema; se uma versão do prompt falha mais em uma categoria, ajudam a localizar a regressão.

## Do dataset ao evaluation

Esses exemplos são os dados brutos que serão passados à IA, que fará a análise. Para isso, é preciso um prompt no meio: o dataset não substitui o prompt, ele prepara entradas repetíveis para medir o efeito do prompt sobre os mesmos casos. O `output` esperado funciona como ground truth, a referência contra a qual a saída gerada será comparada. É a partir daí que começa o processo de evaluation.
