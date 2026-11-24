# Melhorando description — resumo

Na aula do framework de decisão, o professor mostrou um prompt de triagem de skills. Ele não é o único: dá para construir outros prompts que ajudam a criar skills, usados de forma isolada do uso do Claude em si. Nesta aula ele mostra mais dois, ambos voltados para a `description`. Lembra que são só auxílios: também é possível pedir direto à IA que gere a skill ou a description.

## O prompt gerador de description

O primeiro prompt gera uma description. Ele diz ao modelo que ele é o responsável por escrever a descrição de uma skill, fala em classificador e traz um espaço para as entradas. Com elas, gera a description usando a fórmula das quatro partes já apresentada na aula de frontmatter.

## Aplicando à skill de mensagens de commit

O professor usa a skill message commits como exemplo, em três passos:

1. Pede ao Claude Code que leia a skill e responda **o que ela faz e o que ela produz**.
2. Copia essa resposta para as entradas do prompt gerador (uma das entradas ele tira, porque não precisa dela nesse primeiro momento). O resultado é uma description, segundo ele, muito mais evoluída.
3. Pede que essa description seja aplicada à skill, traduzida para o inglês. É o que ele já tinha recomendado: trabalhar em português, onde nos sentimos mais confortáveis, e pedir a aplicação em inglês.

## O prompt de melhoria: testar, pontuar e reestruturar

Com a description aplicada, ele quer uma "batalha" para ver como melhorá-la ainda mais. Para isso há um segundo prompt, cujo objetivo é melhorar a description. Ele segue três passos essenciais e mais dois para pontuar:

1. Monta um **conjunto de teste**.
2. **Pontua** a description atual.
3. **Reestrutura** a description, mirando nos erros, com base na pontuação feita antes.
4. e 5. Pontua as **novas versões** e indica a **vencedora**.

O professor roda esse prompt na mesma sessão, ainda no contexto da mudança da description.

## O resultado da melhoria

Na saída, o passo 1 traz o dataset, incluindo casos **negativos**; o passo 2, o scoring; o passo 3, a reestruturação baseada no scoring; e o passo 5, as versões. O modelo já foi ao arquivo da skill e fez o update. Ele não reescreveu tudo: tirou um pedaço e acrescentou outro, porque, na análise da LLM, havia coisas boas, mas dava para melhorar dessa forma. O professor tenta mostrar a diferença pelo Git, mas ainda não há histórico para comparar. Comparando com o estado inicial, a description ficou bem mais assertiva, seguindo o formato mental visto antes. É uma forma um pouco mais automatizada de aprimorar a description.

## A LLM ajuda, mas a triagem é sua

Tudo isso pode ser feito em conjunto com a LLM, que pode até gerar esses prompts. Ainda assim, para o professor, o ideal é ter essas triagens na própria cabeça, para tomar a decisão correta e pedir que a criação das skills seja feita da melhor maneira possível.
