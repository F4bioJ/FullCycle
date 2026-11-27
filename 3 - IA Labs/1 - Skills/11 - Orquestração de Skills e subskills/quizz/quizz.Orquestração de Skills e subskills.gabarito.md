# Gabarito — Orquestração de Skills e subskills

## 1. Papéis do orquestrador e das subskills
**Correta: B**
**Por quê:** na aula, a `implement-feature` "não vai escrever diretamente o código, mas delegar cada camada a uma subskill específica". O orquestrador tem o mapa das etapas, a ordem (que o professor diz poder padronizar) e a passagem de contexto para cada subskill; cada subskill produz a sua parte.
- **A:** o orquestrador não produz nenhuma parte, nem a mais importante; ele coordena.
- **C:** quem decide quando cada subskill roda é o mapa de camadas do orquestrador, não a própria subskill.
- **D:** o orquestrador não faz rascunho; quem produz é a subskill, e as convenções entram no pré-check dela, antes de gerar.
**Conceito:** orquestrador coordena e delega; subskill produz

## 2. Mesma skill, padrões diferentes por projeto
**Correta: A**
**Por quê:** cada subskill faz um pré-check: procura a pasta `architecture` do projeto e, se houver convenção para a etapa, carrega e aplica como fonte da verdade. O padrão fica no projeto, fora da skill, e a mesma skill serve a vários projetos ("seguir um framework, customizando a forma de trabalhar").
- **B:** copiar a skill por cliente perde o reaproveitamento; na aula, a convenção não fica no corpo da skill.
- **C:** a porta de decisão serve para perguntar o que falta decidir, não para escolher seções; e o padrão continua no corpo da skill.
- **D:** a aula guarda o padrão em arquivo, para ser lido toda vez, em vez de depender do usuário repetir no pedido.
**Conceito:** convenções no projeto, lidas pela subskill no pré-check

## 3. Informação que falta no pedido
**Correta: D**
**Por quê:** o orquestrador foi instruído a, diante de um item de decisão, parar e perguntar ao usuário. Na demonstração, a execução "bateu no portão de decisão", perguntou a stack, registrou as respostas e seguiu a pipeline.
- **A:** escolher sozinho é o contrário da instrução de parar e perguntar.
- **B:** a falta de informação não encerra a execução; é o caso que a porta de decisão trata.
- **C:** a aula não deixa a decisão para depois; a pipeline para, pergunta e continua.
**Conceito:** porta de decisão (parar e perguntar ao usuário)

## 4. Desvio do padrão numa pipeline só com `.md`
**Correta: C**
**Por quê:** o professor diz que tudo foi feito só com arquivos `.md`, por inferência, sem validar com scripts. Uma camada de script determinístico melhoraria a implementação: se algo saísse do molde, o script apontaria, e haveria autocorreção (self-healing).
- **A:** a porta de decisão é para perguntar quando há decisão a tomar, não para revisar o resultado; e o professor propõe o script, não mais intervenção do usuário.
- **B:** uma convenção maior continua dependendo de inferência; o ponto do professor é que só o script dá a checagem determinística.
- **D:** o orquestrador continua sem escrever; o script entra como validação, não como troca de quem produz.
**Conceito:** inferência × script determinístico e self-healing

## 5. Quebrar subskills em várias menores
**Correta: B**
**Por quê:** na aula 3.1.10, o professor diz que a granularidade é particular e que primeiro se identifica a responsabilidade. Nesta aula, ele fecha dizendo que se vai "dando granularidade quando é necessário"; a demonstração usa uma subskill por camada.
- **A:** o corpo curto é boa prática da aula anterior, mas ela não pede o máximo de divisão; pede partir da responsabilidade.
- **C:** nada na aula limita o orquestrador a uma subskill por etapa; a aula anterior inclusive fala de skill chamando outra.
- **D:** o ciclo por arquivo é como o orquestrador trabalha; na aula, uma subskill atende vários arquivos da mesma camada.
**Conceito:** granularidade guiada pela responsabilidade
