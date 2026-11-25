# Quizz — Orquestração de Skills e subskills

**Capítulo:** 1 - Skills · **Aula:** 11
**Base:** material da aula

---

## 1. Um time copia a `implement-feature` da aula, mas, para poupar passos, deixa o orquestrador escrever o código de domínio direto e delega às subskills só as outras camadas. Pelo desenho do professor, o que esse atalho quebra?
- A) A ordem bottom-up: com o domínio escrito pelo orquestrador, ele passaria a ser gerado por último, depois da rota.
- B) O mapa de camadas, que deixaria de listar o domínio, e as camadas de cima ficariam sem a interface do repositório.
- C) O papel do orquestrador, que só coordena: o domínio sairia sem a subskill que carrega a convenção da camada.
- D) A passagem de contexto, porque a subskill de domínio é a que recebe o pedido do usuário direto, sem o orquestrador.

## 2. Lendo o pipeline gerado na aula, um colega estranha a ordem: "o usuário entra pela rota, então a geração deveria começar pela rota". Qual descrição corresponde ao que a aula mostra?
- A) A geração começa pela rota, que chama o serviço, e termina no domínio, na mesma ordem em que a requisição percorre a aplicação.
- B) A geração vai do domínio até a rota (bottom-up), o inverso do caminho da requisição, que começa na rota e desce até o domínio.
- C) A geração segue o caminho da requisição, mas o adapter vem antes do domínio, para que o domínio já nasça usando os providers.
- D) A ordem fica a cargo do modelo em cada execução, porque o pipeline lista as camadas sem sequência, já que é não determinístico.

## 3. Uma empresa quer usar a mesma subskill de domínio em vários projetos, e cada projeto tem seu jeito de nomear erros e de montar value objects. Pelo desenho da aula, onde fica cada coisa?
- A) Na subskill, os critérios da camada (ex.: domínio rico); em `architecture/convention-domain.md`, o jeito de cada projeto.
- B) Tudo no corpo da subskill de domínio, numa seção por projeto, porque o pré-check lê a convenção do próprio `skill.md`.
- C) Na subskill, o jeito de cada projeto; em `architecture/`, os critérios gerais do domínio, que valem igual entre os projetos.
- D) No mapa de camadas do orquestrador, que faz a passagem de contexto e entrega à subskill de domínio o jeito do projeto.

## 4. Num projeto com o `src` vazio, alguém invoca a `implement-feature` com: "produto com name, description e price; criar e listar, em memória". O pedido não diz a stack. Pelo que a aula mostra, o que acontece nesse ponto?
- A) A subskill de domínio escolhe a stack mais comum para o tipo de projeto e registra a escolha no fechamento, sem interromper a pipeline.
- B) O orquestrador encerra a execução com erro, porque o pedido não traz tudo o que o mapa de camadas exige para começar.
- C) A porta de decisão para a execução e pergunta ao usuário (na aula, a stack e a exposição via HTTP), registra as respostas e segue.
- D) A falta de stack aparece no fechamento, quando o type check falha, e então o orquestrador pede para rodar a feature de novo.

## 5. Na demonstração, ao chegar à camada de serviço, o agente avisou que não havia convenções de serviço, repositório e rota. O professor copiou esses arquivos para `architecture/`, e as convenções foram carregadas. O que esse episódio mostra sobre o desenho?
- A) Que convenções novas passam antes pela porta de decisão, onde o usuário confirma se a subskill deve aplicá-las à camada.
- B) Que, sem convenção, a subskill não tem como gerar a camada, e por isso cada camada exige um arquivo próprio em `architecture/`.
- C) Que as convenções ficam no corpo das subskills, e copiar os arquivos para a pasta serviu para que o agente as atualizasse.
- D) Que as convenções moram no projeto, fora da skill: a subskill as procura no pré-check, sem precisar ser editada para cada projeto.

## 6. Um tech lead quer explicar ao time o que o professor chama, no fim da aula, de "três camadas de customização". Qual lista corresponde a elas?
- A) O orquestrador, as subskills de cada camada e os scripts determinísticos que validam o formato de cada arquivo gerado.
- B) Os fundamentos de engenharia, a documentação dos frameworks e, por cima, as convenções do desenvolvedor, por projeto ou time.
- C) O nível 1 (frontmatter), o nível 2 (corpo da skill) e o nível 3 (referências e scripts) da progressive disclosure.
- D) As convenções do time, as convenções do projeto e as convenções de cada camada, guardadas juntas em `architecture/`.

## 7. Numa execução futura, a subskill de domínio gera uma entidade fora do molde da convenção. Com a pipeline como a aula a deixou, o que se pode esperar e o que, segundo o professor, mudaria isso?
- A) Pode passar despercebido, porque a pipeline é só `.md` e inferência; um script que checasse o formato apontaria o desvio e levaria à autocorreção.
- B) A porta de decisão compara o arquivo com a convenção e barra o desvio; por isso o professor considera o script uma camada redundante.
- C) O type check do fechamento barra o desvio, porque fugir da convenção quebra a compilação; o script serviria para acelerar a checagem.
- D) O orquestrador refaz a camada por conta própria, porque o self-healing já vem do ciclo por arquivo descrito no pipeline da skill.

## 8. No fim da aula, o professor explica por que o código gerado não saiu "macarrão". Qual afirmação NÃO corresponde à explicação dele?
- A) Pesou a forma como as skills foram construídas, com um orquestrador e uma subskill para cada camada da feature.
- B) Pesaram as informações de contexto passadas ao modelo, como as convenções lidas antes de cada camada ser gerada.
- C) Pesaram os scripts que validaram o formato de cada arquivo antes de a pipeline seguir para a próxima camada.
- D) Pesaram os fundamentos de arquitetura e de design de código que estão por trás das convenções usadas.

## 9. Depois da aula, um dev propõe quebrar a subskill de domínio em várias: uma para entidades, uma para value objects e uma para erros. Pelo que esta aula e a anterior ensinam sobre granularidade, qual é a melhor leitura?
- A) Deve quebrar, porque quanto maior a granularidade, mais curto fica o corpo, e o corpo curto foi a regra principal da aula anterior.
- B) Não deve quebrar, porque uma subskill não pode chamar outra, e quem invoca as subskills da pipeline é o orquestrador.
- C) Deve quebrar até chegar a uma subskill por arquivo, porque o ciclo do orquestrador na aula roda uma vez para cada arquivo.
- D) Depende do projeto: a granularidade é particular e vem quando é necessária; parte-se da responsabilidade, e na aula foi uma por camada.

## 10. Na demonstração, os testes da camada de domínio já tinham passado antes de a camada de serviço começar. O que, no desenho da `implement-feature`, explica esse comportamento?
- A) A instrução de que, a cada arquivo, a subskill da camada produz o arquivo garantindo os testes dele, dentro do ciclo por arquivo.
- B) A parte de geração de testes do mapa de camadas, que roda uma vez ao fim da pipeline, depois que a rota fica pronta.
- C) O type check do TypeScript, que o orquestrador roda ao fim de cada camada e que executa os testes junto da checagem de tipos.
- D) A convenção de domínio em `architecture/`, que já trazia os testes prontos para a subskill copiar ao gerar a entidade.
