# Skill N3 — resumo

O professor parte para a criação de uma skill de nível 3. A demonstração é uma skill com script, mas o objetivo maior, nas palavras dele, é mostrar a lógica por trás da skill, o como e o porquê, e principalmente a questão do determinismo e do não determinismo.

## O que é uma skill N3

Relembrando: a skill de nível 3 é a que utiliza **referências e scripts**, um ou outro, ou os dois em conjunto. Para demonstrar, o professor escolhe fazer uma skill com scripts.

## A necessidade: triagem dos marcadores de pendência

O cenário é um projeto com vários comentários de pendência, como TODO e FIXME. É preciso varrer o projeto, descobrir onde esses comentários estão e, a partir disso, produzir um pequeno relatório, uma espécie de mapeamento.

O professor reconhece que é algo relativamente fácil de produzir, mas diz que cabe bem numa skill porque é **repetitivo**, do dia a dia, e **totalmente executável**.

## Um projeto de exemplo

Para simplificar, ele pede à própria IA que gere um pequeno projeto fake: funções da rotina de um e-commerce padrão em arquivos como `src/auth.js` e `src/report.js`, com marcadores espalhados pelo código, TODO para itens a fazer e FIXME para o que precisa de refactor. O projeto só serve de base para o exercício.

## Criando a skill com a IA

Numa nova sessão, o professor pede uma skill que faça a triagem dos marcadores de pendência do projeto e pede que, antes de criá-la, o modelo **confirme o seu entendimento**. O modelo descreve o plano: uma nova skill na pasta de skills do Claude que varre o projeto em busca dos marcadores, coleta os dados de cada ocorrência, classifica e faz a triagem e reporta de forma agrupada e acionável. Segundo o padrão do repositório, criaria o `skill.md` e, opcionalmente, um script de scan para fazer o grep.

O modelo também pergunta o que o professor quer, e ele responde:

- os marcadores são TODO e FIXME;
- por enquanto, o relatório sai no chat;
- a skill não deve só catalogar, mas também priorizar e sugerir;
- quanto à estrutura (script de scan ou só a skill), como o modelo já ofereceu o script, ele segue com o script.

## Determinístico e não determinístico

Enquanto a skill é criada, o professor explica a escolha. Como já foi dito antes no curso, algumas tarefas são de cunho determinístico, e a inteligência artificial é não determinística.

- **Não determinístico:** a mesma pergunta recebe respostas diferentes dentro do mesmo contexto. Para mostrar, ele manda "oi" duas vezes e recebe duas respostas diferentes. O modelo segue o mesmo padrão de inferência dentro do mesmo contexto, mas a resposta vem de forma diferente.
- **Determinístico:** o script, os linters, os formatadores e outras ferramentas da engenharia. Há a certeza de que vai ser executado e de que sempre devolve a mesma resposta.

## Por que atrelar a skill a um script

Quando a skill se apoia em algo determinístico, ela entrega o resultado à IA, e com isso há a **garantia de que a busca vai acontecer**. Se depender só da IA, ela pode buscar, pode dizer que buscou, ou pode buscar só 20%, 30% ou 50%, porque quem decide é ela: a inferência é dela. Com o script isso não acontece, porque, sendo determinístico, ele traz 100% do que existe.

O ganho é **maior confiança**. Para o professor, é de novo o **quality gate** colocado dentro da skill, para garantir que ela execute aquilo que tem que ser executado.

## O script de scan

O script gerado é simples: um script bash que define o padrão a ser procurado (o pattern) e exclui alguns diretórios e tipos de arquivo. Ele lê todos os diretórios, incluindo os arquivos que estão dentro deles, em busca do padrão; o que encontra, ele salva e depois mostra.

## O corpo da skill: script primeiro, classificação depois

O modelo escreveu a skill em português, como vinha sendo feito no curso. O foco não é analisar cada detalhe, mas a ordem dos passos:

1. O primeiro passo é executar o script, o arquivo determinístico, que vai ser executado 100%.
2. Depois, com base na resposta dele, ocorre a classificação.

A classificação segue um critério de prioridade:

| Prioridade | O que entra |
|---|---|
| Alta | Corrigir comportamento |
| Média | Melhorias relativamente importantes, como de performance e de validação |
| Baixa | Nice to have, polimentos |

Por fim, a skill produz um pequeno relatório.

## A execução

O professor roda a skill de triagem de pendências e recebe o que queria: o relatório agrupado por prioridade, com as recomendações. Para conferir, ele abre o registro da execução do shell (o "run shell") e mostra que o Bash rodou o script de scan.

## Referências como alternativa

A skill recém-criada é de nível 3 usando um script como exemplo, mas poderia usar uma referência, ou referência e script. Nesse caso, poderia ter dentro dela referências com listas de classificação, que dizem o que realmente é alto, médio ou baixo.

A skill também pode evoluir: por exemplo, abrir os itens no GitHub e centralizá-los para que sejam corrigidos depois.
