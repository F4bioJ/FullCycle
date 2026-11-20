# Quizz — Soluções de terceiros para gestão

**Capítulo:** 5 - Gestão e versionamento de prompt · **Aula:** 11
**Base:** material da aula

---

## 1. Uma prompt engineer do time de produto quer ajustar o prompt de atendimento, comparar o custo entre versões e ver se ele funciona em outro modelo. Alguém sugere dar a ela acesso ao Git do projeto. O que a aula diz sobre esse caminho?
- A) É o caminho recomendado, porque prompt é software e toda mudança deve passar por PR e code review.
- B) Funciona bem desde que o acesso dela se limite à pasta `prompts`, separada do código da aplicação.
- C) É possível, mas costuma não fazer sentido: ela quer avaliar e melhorar o prompt, não lidar com Git.
- D) Ela deveria passar as mudanças aos devs, que as aplicam no registry e publicam uma nova versão.

## 2. Sobre a gestão de prompts em ferramentas remotas, no formato de CMS, qual afirmação está INCORRETA?
- A) Pessoas diferentes podem editar, revisar e rodar testes sobre o mesmo prompt dentro da ferramenta.
- B) Uma versão do prompt pode passar por desenvolvimento, homologação e produção, como em outros sistemas.
- C) Dá para fazer teste A/B entre duas versões do prompt para descobrir qual funciona melhor.
- D) Como deixam o Git, o texto de cada um passa a ser embutido no build de cada release da aplicação.

## 3. Num projeto em que os prompts ficam numa ferramenta remota de gestão, como a aplicação passa a obter o prompt, e o que muda para o desenvolvedor?
- A) A aplicação faz o download pelo SDK da ferramenta, e o dev pode nem ter permissão de edição nela.
- B) A ferramenta sincroniza os prompts com o Git a cada deploy, e o dev continua editando pelo repositório.
- C) O dev edita o `registry.yml` local, e a ferramenta publica as mudanças dele para as outras áreas.
- D) A aplicação lê os prompts por links simbólicos na pasta `.prompts`, e o dev mantém os links atualizados.

## 4. Numa startup pequena, os próprios devs escrevem e mantêm todos os prompts da aplicação. Pela lógica da aula, eles precisam de um CMS de prompts?
- A) Sim, porque prompts de aplicação precisam de teste A/B, recurso que vem das ferramentas remotas.
- B) Não necessariamente: quando os devs criam e gerenciam os prompts, organizar no projeto com Git atende.
- C) Sim, porque sem uma ferramenta remota não há como versionar os prompts nem separar os ambientes.
- D) Não, porque ferramentas como o LangSmith servem para observabilidade e não fazem gestão de prompts.

## 5. Além da gestão de prompts, o que a aula aponta como útil no LangSmith para o próprio desenvolvedor?
- A) A geração automática de prompts a partir do código, que dispensa escrever o template à mão.
- B) A substituição do Git no projeto, já que a ferramenta passa a versionar também o código-fonte.
- C) A observabilidade e o tracing das chamadas, que ajudam a acompanhar a performance da aplicação.
- D) O acesso aos modelos de linguagem, que deixam de exigir chave própria de cada provedor.
