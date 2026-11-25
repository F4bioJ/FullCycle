# Gabarito — Orquestração de Skills e subskills

## 1. Orquestrador que escreve o domínio
**Correta: C**
**Por quê:** no pedido do professor, a `implement-feature` "não vai escrever diretamente o código, mas sim delegar cada camada do código a uma subskill específica". É a subskill que faz o pré-check em `architecture/`, carrega a convenção da camada e a aplica como fonte da verdade. Se o orquestrador escreve o domínio, esse passo some justamente na camada base.
- **A:** quem escreve não muda a ordem. O pipeline continua começando pelo domínio; o problema é ele sair sem a subskill.
- **B:** quem escreve o domínio não tira a camada do mapa; o domínio continua lá (com a interface do repositório). O que se perde é a subskill e a convenção da camada.
- **D:** o mapa de camadas do orquestrador define a passagem de contexto para a subskill; o pedido do usuário entra pelo orquestrador.
**Conceito:** orquestrador que não escreve código e delega cada camada

## 2. Ordem bottom-up × caminho da requisição
**Correta: B**
**Por quê:** a ordem pedida é bottom-up: domínio, adapter (se existir), serviço, repositório e rota. O professor observa que isso está invertido em relação a como o usuário acessa a aplicação: ele entra pela rota, vai ao serviço, que chama adapters, repositórios e o domínio.
- **A:** descreve o caminho da requisição, não a ordem de geração.
- **C:** o adapter vem depois do domínio e só se existir; na demonstração, nem foi gerado.
- **D:** o professor diz que os itens são não determinísticos (o fluxo "deveria" ser seguido), mas a sequência está definida no pipeline, e a execução seguiu a ordem.
**Conceito:** ordem bottom-up da pipeline, inversa ao fluxo da requisição

## 3. Subskill × arquivo de convenção
**Correta: A**
**Por quê:** a subskill pode trazer critérios próprios da camada (o exemplo do professor é a de domínio exigir domínio rico e value objects), e a convenção do projeto, em `architecture/convention-<camada>.md`, acrescenta o jeito daquele projeto, lido no pré-check e aplicado como fonte da verdade. É o "framework customizado" do professor.
- **B:** o pré-check procura a pasta `architecture` do projeto, não uma seção no corpo da skill; uma seção por projeto também tiraria a vantagem de reaproveitar a subskill.
- **C:** inverte os papéis: o que é de cada projeto fica no projeto, e o critério da camada fica na subskill.
- **D:** o mapa de camadas faz parte da skill do orquestrador, igual para todos os projetos; ele define a passagem de contexto, não guarda o jeito de cada projeto.
**Conceito:** critérios na subskill, convenção do projeto em `architecture/`

## 4. Pedido sem stack num projeto vazio
**Correta: C**
**Por quê:** o orquestrador foi instruído a parar e perguntar ao usuário quando houver item de decisão. Na demonstração, a execução "bateu no portão de decisão" e perguntou a stack; o professor escolheu TypeScript com scaffold mínimo e rota via HTTP com Hono. O agente registrou as decisões e seguiu a pipeline.
- **A:** escolher sozinho e seguir é o contrário da instrução de parar e perguntar.
- **B:** a falta de informação não encerra a execução; é exatamente o caso que a porta de decisão trata.
- **D:** o type check só rodou no fim, e passou; a stack foi resolvida antes, na porta de decisão.
**Conceito:** porta de decisão (parar e perguntar ao usuário)

## 5. Convenções que faltavam
**Correta: D**
**Por quê:** a subskill foi instruída a, antes de produzir o código, procurar a pasta `architecture` do projeto, verificar se há convenção para a camada e aplicá-la "caso exista". As convenções são arquivos do projeto: bastou copiá-los para a pasta para o agente identificá-las e carregá-las, sem editar nenhuma subskill.
- **A:** na aula, a porta de decisão serve para parar e perguntar quando há uma decisão a tomar (como a stack); as convenções copiadas foram identificadas e carregadas sem pedir confirmação ao usuário.
- **B:** a instrução é aplicar a convenção "caso exista"; a subskill traz seus próprios critérios, e a convenção é o acréscimo do projeto.
- **C:** as convenções não ficam no corpo das subskills; ficam em `architecture/`, no projeto.
**Conceito:** pré-check de convenções do projeto, fora da skill

## 6. As três camadas de customização
**Correta: B**
**Por quê:** no fechamento, o professor diz que foram aplicados os fundamentos, a documentação dos frameworks e, por cima, as convenções que o desenvolvedor quer, que podem ser por projeto ou por time: "três camadas de customização".
- **A:** orquestrador e subskills são a estrutura da demonstração, e os scripts determinísticos nem foram usados nela.
- **C:** são os três níveis da progressive disclosure (aula 3.1.2), outro conceito.
- **D:** convenções do time e do projeto são uma camada só, a de cima; faltam os fundamentos e a documentação dos frameworks.
**Conceito:** três camadas de customização (fundamentos, frameworks, convenções)

## 7. Desvio do molde sem script
**Correta: A**
**Por quê:** o professor ressalta que tudo foi feito só com arquivos `.md`, por inferência, sem validar nada com scripts, e que o pipeline tem itens não determinísticos. Para ele, uma camada de script determinístico melhoraria a implementação: se algo saísse do molde, o script apontaria, e haveria autocorreção (self-healing).
- **B:** a porta de decisão serve para parar e perguntar ao usuário; e o professor apresenta o script como melhoria, não como redundância.
- **C:** o type check verifica tipos do TypeScript; um arquivo fora da convenção pode compilar normalmente.
- **D:** o self-healing é o que o script traria; o ciclo por arquivo descrito em `.md` continua dependendo da inferência.
**Conceito:** inferência × script determinístico e self-healing

## 8. O que explica o código "não macarrão" (INCORRETA)
**Correta: C**
**Por quê:** é a afirmação que não corresponde: o professor ressalta que não validaram nada com scripts; foi tudo com arquivos `.md`, por inferência. O script de validação aparece como melhoria possível.
- **A:** corresponde: ele atribui o resultado, primeiro, à forma como as skills foram construídas.
- **B:** corresponde: ele cita o contexto, as informações importantes passadas à LLM para ela entender e espelhar o esperado.
- **D:** corresponde: ele diz que as convenções são arquitetura, padrões de projeto e design de código, fundamentos que o engenheiro precisa saber aplicar.
**Conceito:** o que sustenta a qualidade na orquestração só com `.md`

## 9. Quebrar a subskill de domínio
**Correta: D**
**Por quê:** na aula 3.1.10, o professor diz que a granularidade é particular (varia entre projetos e entre pessoas) e que primeiro se faz a triagem do que é uma responsabilidade, mesmo que envolva duas habilidades. Nesta aula, ele fecha dizendo que se vai segregando e dando granularidade "quando é necessário"; a demonstração usa uma subskill por camada.
- **A:** o corpo curto é uma boa prática da aula anterior (empurrar o peso para o nível 3), mas ela não pede granularidade máxima; pede partir da responsabilidade.
- **B:** a aula anterior fala justamente de uma skill chamar outra (sub-skills), e nada aqui proíbe uma subskill de chamar outra.
- **C:** o ciclo por arquivo é como o orquestrador trabalha, não uma regra de uma subskill por arquivo; na aula, uma subskill atende vários arquivos da camada.
**Conceito:** granularidade guiada pela responsabilidade

## 10. Testes do domínio antes da camada de serviço
**Correta: A**
**Por quê:** no pedido da `implement-feature`, para cada arquivo se invoca a subskill da camada, e "a subskill vai produzir o arquivo garantindo testes daquele arquivo". Por isso, na demonstração, o domínio saiu com erro, value objects, entidade, interface do repositório e testes, e a camada de domínio passou nos testes antes de o agente pedir a de serviço.
- **B:** o mapa de camadas tem uma parte de geração de testes, mas os testes do domínio passaram antes da camada de serviço, e não ao fim da pipeline.
- **C:** o type check rodou no fim, junto dos 28 testes e do smoke test; checagem de tipos não executa testes.
- **D:** a convenção de domínio traz estrutura, como criar, exemplos e o que é permitido e proibido; os testes foram gerados pela subskill.
**Conceito:** ciclo por arquivo: a subskill produz o arquivo com os testes dele
