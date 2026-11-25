# Quizz — Orquestração com script deterministico

**Capítulo:** 1 - Skills · **Aula:** 12
**Base:** material da aula

---

## 1. Na aula 3.1.11, a pipeline da implement feature gerou um código limpo, com 28 testes passando, usando só arquivos Markdown. Por que, mesmo assim, o professor acrescenta o script check-layers?
- A) Porque as subskills só leem as convenções da pasta architecture quando um script as obriga a fazer o pré-check.
- B) Porque o script passa a escrever o código de cada camada, e com isso a geração do código fica determinística.
- C) Porque a pipeline depende só da inferência e pode fugir do fluxo; o script confere o fluxo igual em toda execução.
- D) Porque os testes de cada camada só rodam no fim da pipeline se houver um script que os chame pelo Bash.

## 2. O gate devolve exit 2: um código de src/domain importa uma função de src/services. Pelo passo 5 que o professor escreveu na implement feature, quem deve fazer a correção?
- A) A subskill de domínio, porque a violação está no arquivo de domínio, a camada ofensora que fez o import proibido.
- B) A subskill de serviço, porque é a camada que foi importada, e a correção começa pela origem da dependência.
- C) A própria implement feature, porque é ela que roda o gate no passo 5 e por isso recebe o bloco de erro inteiro.
- D) A subskill de rota, porque o gate roda no fim da pipeline bottom to up, e a rota é a última camada implementada.

## 3. Pelas regras que o professor ditou ao pedir o check-layers, qual destes imports passaria pelo gate?
- A) Um arquivo de domínio que importa um helper de src/shared para formatar o preço do produto na entidade.
- B) Uma rota que importa o repositório em memória para listar os produtos sem precisar passar pelo serviço.
- C) Uma rota que importa a entidade de produto de src/domain para tipar a resposta da listagem de produtos.
- D) Um serviço que importa a entidade de produto do domínio para criá-la e depois mandá-la ao repositório.

## 4. Ao fim da pipeline, o check-layers devolve exit 0. Qual destas conclusões o gate NÃO sustenta?
- A) Os imports do código respeitam as fronteiras proibidas que estão definidas dentro do script check-layers.
- B) As regras de negócio do produto estão corretas, como o nome obrigatório e o preço que não pode ser zero.
- C) O loop de autocorreção do passo 5 pode parar, porque o exit que ele esperava para encerrar já veio.
- D) Pela definição da skill, a feature pode ser dada como pronta, já que o gate de arquitetura está verde.

## 5. Uma violação volta a aparecer depois de cada correção, e o gate continua vermelho. Pelo passo 5 que o professor escreveu, o que deve acontecer?
- A) Depois de 10 tentativas, a feature é entregue como pronta, com as violações restantes listadas no relatório.
- B) O loop repete sem limite, porque o professor trocou o max retry pela regra de repetir até o exit ser zero.
- C) O loop repete até o exit ser zero, mas, se passar de 10 tentativas, o agente consulta o usuário pela AskUserQuestion.
- D) Depois de algumas falhas, o agente corrige a violação por conta própria, sem a subskill, que já não resolveu.

## 6. Um dev pede ao Claude Code só para renomear uma variável num arquivo de src/routes, sem chamar a implement feature. Mesmo assim, o check-layers roda no fim. Por quê?
- A) Porque o passo 5 da implement feature vale para qualquer edição, já que a skill inteira é carregada no startup.
- B) Porque o ESLint, configurado com as regras customizadas, dispara o gate sozinho a cada arquivo que é salvo.
- C) Porque o AGENTS.md traz uma cópia própria da regra, e o Claude Code lê esse arquivo antes do CLAUDE.md.
- D) Porque a regra está no CLAUDE.md, lido sempre, e manda rodar o gate ao terminar de editar qualquer arquivo de src.

## 7. Um time usa o Claude Code e outra ferramenta de agente que lê o AGENTS.md. Quer que a regra do gate valha nas duas, sem manter duas cópias. Qual saída segue o que foi feito na aula?
- A) Escrever a regra no CLAUDE.md e deixar o AGENTS.md só como um link para ele, o que, segundo o professor, funciona.
- B) Escrever a regra no passo 5 da implement feature, porque skills seguem um padrão aberto e são portáteis.
- C) Escrever a regra na description da implement feature, porque o nível 1 fica no contexto e garante o gate.
- D) Copiar a regra inteira nos dois arquivos, porque um AGENTS.md que só aponta para o CLAUDE.md não é lido.

## 8. Por que o professor pede que cada violação saia num bloco com a regra, o arquivo e a linha, o import ofensor, o porquê e como consertar?
- A) Para que o usuário revise cada bloco e aprove a correção antes de o agente seguir para a próxima violação.
- B) Para que o agente, ao ler a saída, saiba o que corrigir e a qual subskill delegar, sem ter de adivinhar.
- C) Para que o ESLint aplique sozinho a correção sugerida em cada bloco, sem precisar passar pelo agente.
- D) Para que o script escolha a subskill da camada ofensora e a chame direto, sem depender da inferência.

## 9. Ao fim da pipeline, os 28 testes passam e o type check não acusa erro, mas o check-layers devolve exit 2. Pela skill, a feature está pronta?
- A) Sim, porque cada subskill já produz os testes do seu arquivo, e os testes passando são o critério de pronto.
- B) Sim, se as violações estiverem na rota, porque ela é a camada mais externa e pode depender das outras.
- C) Não, porque o critério de conclusão é o gate verde; os testes conferem o comportamento, não as fronteiras.
- D) Não, e a pipeline deve ser refeita desde o domínio, porque um exit 2 invalida as camadas já implementadas.

## 10. No teste, o professor pede ao próprio Claude uma edição em src que fure as barreiras, sem rodar a pipeline completa. O que esse teste mostra e o que fica faltando?
- A) Mostra a pipeline completa funcionando, porque o gate do passo 5 é o mesmo que roda após uma edição avulsa.
- B) Não mostra o gate funcionando, porque quem plantou a violação foi o mesmo agente que leu a saída do script.
- C) Mostra o limite de 10 tentativas em ação, mas falta conferir se cada violação sai num bloco separado.
- D) Mostra o gate pegando as violações e disparando a autocorreção; validar tudo pede usar novas features.
