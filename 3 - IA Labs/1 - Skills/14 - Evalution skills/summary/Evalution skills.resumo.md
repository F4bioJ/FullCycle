# Evalution skills — resumo

A aula fecha a parte de skills com a **evaluation**, a avaliação: saber se a skill performa como deveria, onde melhorar e, principalmente, se ela dispara quando deve. Como a skill passou a ser código, é preciso voltar a ela de tempos em tempos, dar manutenção, testar e conferir se ainda é válida.

## O Skill Creator

Para isso existe o **Skill Creator**, da Anthropic. Segue o padrão aberto, então roda com qualquer skill. É uma skill feita para avaliar skills e envolve também processos determinísticos.

## Instalação

As fontes são o site skills.sh e o GitHub da Anthropic. Dá para instalar pelo Claude Code, com `/plugins`, ou colando num terminal o comando copiado do site. O professor escolhe a CLI, a instalação no projeto e a cópia para a pasta de agents; o resultado é a pasta do Skill Creator mais um link simbólico para o Claude Code.

Por dentro, o Skill Creator tem agents, assets, um eval viewer, referências e scripts, além do `skill.md`. É, nas palavras do professor, uma skill de nível 3.

## Uma skill ruim de propósito

Para ser didático, o professor cria a **Bad Query Optimizer**, propositalmente ruim, com um `skill.md` simplificado, só com o "como usar".

## O princípio base da avaliação

Para trabalhar com eval, é preciso adicionar um arquivo JSON na parte de evals da skill. Segundo o professor, isso faz parte das boas práticas, e os nomes devem permanecer como foram escritos.

O princípio tem dois elementos: **uma skill** e **um dataset** com itens, entre aspas, "bons" e "ruins". Com isso, o Skill Creator roda a avaliação e identifica o que deveria ter acontecido e o que não aconteceu. Há duas formas de avaliar:

- **Nível de trigger:** a skill foi chamada quando deveria ser chamada?
- **Qualidade do resultado:** o que ela produziu era o esperado?

A demonstração começa pelo trigger, com um dataset de nove itens, cada um marcado como deve disparar (true) ou não (false). Numa skill real, lembra o professor, os datasets têm muitos dados.

## Rodando o teste de trigger

O Skill Creator pode ser chamado por slash command ou em linguagem natural ("gere o teste de disparo da skill Bad Query Optimizer"). Por baixo, roda vários scripts Python que avaliam se houve disparo. Ele copia a skill para um workspace próprio e ali roda o **baseline**.

## O resultado do baseline: under-trigger

Os pedidos que deveriam disparar a skill falharam quase todos, como "melhore a performance desse select" e "sugere índice para acelerar a query". Os casos que não deveriam disparar estavam certos. O diagnóstico do Skill Creator: a expectativa era over-trigger, mas na verdade era **under-trigger**, a skill deixou de disparar quando deveria.

Ele oferece próximos passos e um relatório. Por padrão, mostra os resultados em HTML, mas, segundo o professor, quando a skill é muito ruim nem oferece essa opção.

## O loop de otimização da description

Em seguida, o Skill Creator oferece duas opções: expandir o dataset e medir de novo, ou entrar num **loop contínuo** de melhoria, o que o professor chama de autocorreção automática. Ele gera um dataset novo e o abre no browser para revisão. O professor a pula na demo, mas diz que, na realidade, é muito importante conferir se o proposto faz sentido.

O resultado continuou zerado. O Skill Creator apontou como causa raiz uma **descrição genérica** e pediu que ela fosse reescrita. Para definir o escopo real (otimização, performance e leitura de banco de dados), o professor manda lembrar das aulas iniciais: o que é uma skill e se algo deve ou não ser uma. O dataset expandido manteve os itens originais, e o loop rodou em subagentes, por cinco iterações.

## O gargalo não era a descrição

A melhor descrição do loop foi a **original**. Nenhuma candidata bateu o baseline; segundo o relatório, todas empataram em cerca de 50% de acurácia. A conclusão do Skill Creator: o gargalo não é a descrição, pelo menos por enquanto, e sim a **skill**.

## Reescrevendo o corpo da skill

O professor pede a reescrita do conteúdo conforme os achados. A nova versão traz uma metodologia, um catálogo de antipadrões e um fluxo de trabalho definido: com a query em mãos, ler o plano de execução, diagnosticar pelo checklist de antipadrões, propor a correção, confirmar medindo de novo e seguir certos princípios. Para consultar os antipadrões, foi acrescentado um template de referências, com o que é bom e o que é ruim.

## A avaliação de qualidade

Num terminal novo, o professor chama o Skill Creator só com o nome da skill e pede para rodar o eval e iterar, sem mexer mais na descrição. Ele gera os evals, roda sete agentes e, após uns seis minutos, entrega o resultado e um relatório HTML local. No viewer:

- **Output:** item a item, o prompt e a resposta, primeiro **com a skill** e depois **sem a skill**, com as mesmas perguntas, para comparar. Dá para deixar feedback em cada item.
- **Benchmark:** o detalhamento dos evals, o pass rate e o **delta**, a diferença entre os dois.

## Faz sentido ter essa skill?

O professor pergunta se a skill funciona, se faz sentido tê-la e quão bom foi o resultado:

- **Funciona:** faz o que o `skill.md` promete e conduz o diagnóstico por evidência. Nenhum run com a skill alucinou, ignorou o EXPLAIN ou chutou índice no escuro.
- **O benefício é menor do que parece**, como o professor já esperava: o modelo sozinho (o Opus) acertou 88%, contra 100% com a skill. A skill não ensina o modelo a otimizar, porque ele já é treinado para isso, mas garante a **consistência** do troubleshooting, o método passo a passo.
- **Bom, não excelente:** é confiável, mas o delta sobre o baseline é estreito. O problema de fundo está nos testes: os três inputs são fáceis demais, cada um com um EXPLAIN limpo e o gargalo quase na cara.

Para o professor, é o momento de parar, analisar o que se está construindo e como, e ver se a direção é a desejada.
