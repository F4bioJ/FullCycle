# Datasets

## Dataset como insumo da avaliação

Avaliação de prompt depende de um conjunto de casos estruturados antes de qualquer execução. Sem esse insumo, não existe base comum para medir comportamento, comparar versões nem validar pressupostos com consistência. O ponto que costuma travar equipes não é a ideia de avaliar, mas a preparação dos dados brutos em um formato reutilizável. Por isso, o dataset deixa de ser detalhe operacional e vira parte central do experimento.

## Duas formas de obter um dataset

Um dataset pode nascer de execuções reais de produção ou de geração sintética com IA. No primeiro caminho, a equipe coleta casos reais, normaliza os dados e os transforma em uma estrutura comparável; isso tende a refletir melhor o uso do sistema, mas exige limpeza e organização. No segundo, um prompt bem construído pede à IA múltiplos exemplos cobrindo variações específicas; isso acelera a montagem inicial, especialmente quando ainda não há volume real suficiente. As duas estratégias são válidas, desde que o resultado final seja estruturado e útil para testar hipóteses.

## LangSmith como ferramenta de organização

LangSmith funciona aqui como a ferramenta usada para cadastrar, armazenar e executar os exemplos do dataset. A conta de desenvolvedor permite começar com baixo atrito: criar conta, gerar API key e rodar experimentos pequenos sem necessidade de infraestrutura própria. Em cenários não produtivos e com poucos exemplos, isso é suficiente para preparar a base de testes do capítulo. O detalhe importante não é a ferramenta específica, mas o fato de ela impor uma organização explícita dos casos.

## Estrutura input/output do dataset

Retomando o cenário de revisão de código, cada exemplo do dataset é representado como um JSON com pelo menos `input` e `output`. O `input` descreve a tarefa que a IA deve executar, incluindo linguagem, instrução e o trecho de código a ser analisado. O `output` registra a resposta esperada para aquele caso, servindo como referência para a avaliação posterior. Essa estrutura transforma um teste informal em um caso reproduzível.

## Metadados para segmentar os casos

Além de `input` e `output`, o dataset inclui metadados como tópico e categoria. No exemplo, o tópico identifica o domínio técnico do caso, como `HTTP Client`, enquanto a categoria classifica uma dimensão relevante, como robustez. Esses campos não são ornamentais: eles permitem filtrar, agrupar e interpretar resultados por tipo de problema. Quando uma versão do prompt falha mais em uma categoria específica, os metadados ajudam a localizar a regressão.

## Exemplo concreto com análise de código Go

O caso prático usa código Go como entrada e pede que o sistema analise o trecho e retorne um JSON com `findings` e um `summary` curto. Os `findings` descrevem problemas encontrados, como ausência de timeout, linha afetada, descrição e severidade; o `summary` consolida as principais correções sugeridas. Com cerca de 18 exemplos desse tipo, o dataset já fornece uma base inicial para testar se o prompt identifica problemas de forma consistente. O valor do exemplo não está apenas no código Go, mas no fato de cada caso já nascer com entrada, saída esperada e contexto classificatório.

## Conexão entre dataset e evaluation

O dataset não substitui o prompt; ele prepara o terreno para medir o efeito do prompt sobre os mesmos casos. Retomando a referência já estabelecida de ground truth, o `output` esperado de cada exemplo passa a ser a base contra a qual a saída gerada será comparada. A partir daí, o processo de evaluation deixa de ser improvisado e passa a operar sobre entradas repetíveis. Em outras palavras, o prompt só pode ser avaliado de forma técnica quando existe um conjunto de exemplos pronto para alimentá-lo.
