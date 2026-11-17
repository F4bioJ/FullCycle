# Gabarito — Analisando prompt de analise de componentes

## 1. Por que a leitura passa a ser mais agressiva no prompt de componentes
**Correta: C**
**Por quê:** o professor diz que, como o agente analisa especificamente um componente, que tem com certeza menos arquivos que o projeto como um todo, ele pode ser mais preciso e mais agressivo na leitura dos arquivos desse componente. A leitura seletiva da arquitetura existia porque o projeto inteiro é grande demais; com o recorte menor, cabe ler mais a fundo.
- **A:** meia-verdade. O relatório de arquitetura traz os caminhos (são input deste prompt), mas o motivo da leitura agressiva é o tamanho do recorte, e a aula não diz que a leitura seletiva perde a função em qualquer análise.
- **B:** a aula não diz que a janela de contexto deixa de importar; o argumento é justamente que o componente tem menos arquivos, ou seja, o limite continua existindo.
- **D:** meia-verdade. Testes, fixtures e mocks são de fato inputs deste prompt, mas a aula não diz que precisam ser lidos por inteiro; o motivo da leitura agressiva é o recorte menor, que vale para todos os arquivos do componente.
**Conceito:** leitura mais agressiva em escopo menor

## 2. Componente enorme gera relatório raso
**Correta: D**
**Por quê:** a aula diz que, se o componente for muito grande, dá para rodar outro prompt ou outra chamada para gerar subcomponentes e ter relatórios mais precisos: ir do alto nível baixando o nível, com um prompt diferente em cada nível, conforme o tamanho do projeto.
- **A:** o workflow final ajuda o agente a seguir as etapas quando há muitas instruções, mas não resolve o problema de um recorte grande demais.
- **B:** cortar objetivos faria o relatório perder o resto da análise (dependências, riscos, testes) e não resolve o problema, que é o tamanho do recorte; a aula propõe descer a granularidade, não estreitar o escopo do prompt.
- **C:** pedir mais texto sobre o mesmo recorte não aumenta a precisão da análise; a aula propõe mudar a granularidade, não o volume de escrita.
**Conceito:** granularidade e subcomponentes

## 3. Tabela de regras + detalhamento por regra
**Correta: A**
**Por quê:** o professor explica que cada componente tem suas regras de negócio e pode ter várias; para entender a aplicação, vale ter um resumo delas. Por isso ele quebra as regras: uma tabela com tipo, descrição e arquivo/linha (onde está cada uma) e, depois, o detalhamento de cada regra (nome, visão geral, descrição detalhada e workflow básico).
- **B:** a tabela tem tipo, descrição, arquivo e linha, sem coluna de criticidade, e o detalhamento é pedido para cada regra encontrada. Criticidade aparece em outro ponto: no input opcional, para ver quais componentes são mais críticos.
- **C:** o data flow é outra seção do output, pedida antes das regras; nada na aula diz que as regras o substituem.
- **D:** os testes são um dos inputs, mas as regras vêm do código do componente em geral (o arquivo e a linha apontam onde a regra está implementada), não só dos testes.
**Conceito:** extração de regras de negócio (overview + detalhamento)

## 4. Placeholder em XML no formato de saída
**Correta: B**
**Por quê:** o professor diz que usa XML, como um placeholder, para a IA entender onde deve escrever, porque está dando a definição do relatório em Markdown e ela poderia confundir a definição com o conteúdo.
- **A:** o relatório continua em Markdown; o XML só marca o lugar do conteúdo no modelo de saída.
- **C:** o caráter opcional de uma seção (como a de endpoints) é dado por uma instrução condicional em texto ("se não expuser endpoints, não inclua a seção"), não pelo placeholder.
- **D:** a separação entre system prompt e user prompt (aula 2.3.7) é sobre o papel das mensagens, não sobre marcar onde escrever dentro do formato de saída.
**Conceito:** placeholders em XML no formato de saída

## 5. Afirmação INCORRETA sobre o workflow final
**Correta: D**
**Por quê:** a aula apresenta o workflow como um resumo de tudo o que foi colocado acima, para a IA seguir o passo a passo; ele reforça a especificação detalhada, não a substitui. Cortar as seções detalhadas tiraria do agente as instruções que o resumo só aponta.
- **A:** correta. O professor diz que o workflow é como um resumo de tudo o que ele colocou antes.
- **B:** correta. Ele diz que o workflow é interessante quando há muita informação e muita instrução.
- **C:** correta. Ele vai adicionar o workflow como opcional no formato de prompts, porque depende de a tarefa ser complexa ou longa.
**Conceito:** workflow final como resumo opcional
