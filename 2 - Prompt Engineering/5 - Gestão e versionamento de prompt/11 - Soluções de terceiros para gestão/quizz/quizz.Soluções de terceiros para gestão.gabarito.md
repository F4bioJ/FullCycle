# Gabarito — Soluções de terceiros para gestão

## 1. Dar acesso ao Git para a prompt engineer
**Correta: C**
**Por quê:** O professor cita dar acesso ao Git como um caminho possível, mas diz que, em muitos contextos, isso não funciona nem faz sentido: essas pessoas querem entender, melhorar e avaliar o prompt, garantir que ele não gasta demais, que gera o resultado certo e que funciona num modelo, e não trabalhar com o repositório.
- **A:** O fluxo de PR e code review é o da equipe de devs (aulas anteriores); a aula mostra que, para outras áreas, ele muitas vezes não faz sentido.
- **B:** Separar a pasta `prompts` do código (aula 2.5.6) não muda o problema: a pessoa continua tendo que lidar com clone e repositório.
- **D:** Fazer os devs aplicarem as mudanças mantém a gestão com eles; a aula mostra ferramentas em que essa gestão não é função do desenvolvedor.
**Conceito:** limites do Git para outras áreas

## 2. Afirmação INCORRETA sobre a gestão remota de prompts
**Correta: D**
**Por quê:** Na gestão remota, a aplicação baixa o prompt pelo SDK da ferramenta; ele não é embutido no build. É isso que permite que outras áreas mudem o prompt fora do repositório.
- **A:** Correta: no formato de CMS, uma pessoa edita, outra revisa e outra roda testes.
- **B:** Correta: a aula cita desenvolvimento, homologação e produção.
- **C:** Correta: a aula cita o teste A/B entre versões.
**Conceito:** gestão de prompts como CMS

## 3. Como a aplicação obtém o prompt remoto
**Correta: A**
**Por quê:** As ferramentas têm um SDK, e com ele o sistema baixa o prompt e o usa. O professor também diz que, nesses serviços, os prompts não ficam no Git, e os devs muitas vezes nem têm permissão para acessá-los.
- **B:** A aula diz que os prompts não são gerenciados no repositório Git; não fala de sincronização a cada deploy.
- **C:** O `registry.yml` é a solução local das aulas anteriores; aqui o prompt é gerenciado na própria ferramenta.
- **D:** Links simbólicos e a pasta `.prompts` eram para prompts de produtividade (aula 2.5.3), não para obter prompts de uma ferramenta remota.
**Conceito:** consumo remoto via SDK

## 4. Startup em que os devs mantêm os prompts
**Correta: B**
**Por quê:** O professor descreve o "mundo dos desenvolvedores", em que eles criam e gerenciam os prompts, como um cenário em que "está tudo ok". As ferramentas remotas fazem sentido quando outras pessoas (produto, prompt engineering) passam a trabalhar nos prompts.
- **A:** Teste A/B é um recurso citado das ferramentas, mas a aula não diz que ele é obrigatório nem que o time pequeno precisa dele.
- **C:** As aulas anteriores mostraram como versionar prompts no projeto (Git, semver, registry); a ferramenta remota não é a única forma.
- **D:** O professor diz que o LangSmith faz observabilidade e também gestão de prompts.
**Conceito:** quando usar gestão remota

## 5. O que mais o LangSmith oferece ao desenvolvedor
**Correta: C**
**Por quê:** O professor diz que o LangSmith não serve só para gestão de prompts: faz observabilidade e tracing, "super importante" para os desenvolvedores verem performance.
- **A:** A aula não fala de geração automática de prompts.
- **B:** O LangSmith gerencia prompts, não o código-fonte; o Git continua no projeto.
- **D:** A aula não diz que o LangSmith fornece acesso aos modelos.
**Conceito:** LangSmith além da gestão de prompts
