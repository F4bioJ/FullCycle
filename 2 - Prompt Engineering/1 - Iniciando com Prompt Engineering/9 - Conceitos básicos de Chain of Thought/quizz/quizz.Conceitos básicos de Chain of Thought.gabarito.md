# Gabarito — Conceitos básicos de Chain of Thought

## 1. "Pense passo a passo" no GPT-5
**Correta: C**
**Por quê:** a aula explica que o GPT-5 tem um roteador que decide se responde direto ou se encaminha para o modelo de reasoning. Escrever "pense passo a passo antes de responder" força esse desvio, mesmo numa pergunta simples, e o reasoning gasta mais tokens e tempo.
- **A:** a frase não é um par de entrada e saída. É uma instrução, não um exemplo para imitar (aula 2.1.8).
- **B:** pela aula, o roteador decide se usa reasoning ou não, e a frase é que força o desvio para o reasoning. Sem ela, numa pergunta simples, o roteador pode responder direto.
- **D:** a aula não liga a frase à temperatura. O efeito descrito é o roteamento para o reasoning.
**Conceito:** roteador do GPT-5 e indução de reasoning pelo prompt

## 2. Sistema que responde errado
**Correta: A**
**Por quê:** a aula sugere mudar o prompt temporariamente para usar CoT. O modelo mostra o passo a passo, você vê onde o raciocínio está errado e corrige o prompt. O resumo do professor acrescenta que, depois, vale reavaliar se o passo a passo precisa continuar em produção.
- **B:** a aula diz que pedir para pensar em etapas não garante a resposta correta: o modelo erra nos passos e inventa passos. Deixar o CoT em produção também mantém o custo extra de tokens.
- **C:** a aula indica o CoT para entender o erro antes de mexer no prompt. Acrescentar exemplos no escuro pode até criar conflito (aula 2.1.8).
- **D:** esconder os passos tira a pista do erro. Os passos inventados são uma limitação real, mas o uso que a aula propõe é justamente expor o raciocínio para auditar.
**Conceito:** CoT temporário para depurar prompts

## 3. Passos que dão dois e conclusão que dá três
**Correta: D**
**Por quê:** a aula mostra que o raciocínio exibido pode não bater com a resposta final, e que o modelo pode errar nas próprias contas. O CoT melhora a inspeção, mas não substitui a validação.
- **A:** a aula não atribui o problema ao número de passos pedidos. Ela diz que a IA não é perfeita e que, mesmo pedindo passo a passo, a resposta nem sempre será correta.
- **B:** o professor diz que inventar passos é um problema até em modelos mais avançados.
- **C:** no exemplo, os passos estão certos (um mais um dá dois); o erro está na conclusão, que não combina com eles. Errar a conta num passo é outra falha que a aula cita, mas não é este caso.
**Conceito:** raciocínio exposto não garante resposta correta

## 4. CoT num classificador simples de alto volume
**Correta: B**
**Por quê:** a aula diz que, em tarefas simples, o CoT atrapalha: gasta mais tokens, demora mais e muitas vezes entrega a mesma qualidade. Em agentes e sistemas, é preciso pensar dez vezes antes de usar.
- **A:** a aula diz que, em tarefas simples, a qualidade sem o CoT muitas vezes seria a mesma. Aqui a qualidade já é boa, então o custo extra não compra nada.
- **C:** a aula não diz que o passo a passo some em produção nem que deixa de custar: o CoT gera resposta longa e verbosa e pode acionar o reasoning, e isso consome tokens em qualquer ambiente.
- **D:** a aula cita usos além de cálculos: lógica de algoritmo, correção de bug, debate, plano de projeto. O motivo para evitar aqui é a tarefa ser simples, não o tipo de tarefa.
**Conceito:** custo do CoT em tarefas simples

## 5. Formato fixo e diagnóstico auditável
**Correta: C**
**Por quê:** pela aula 2.1.8, os exemplos do few-shot dão controle sobre a forma da saída (o modelo imita o padrão). Pela aula 2.1.9, o CoT faz o modelo pensar em etapas e mostrar como chegou à conclusão, o que permite auditar a resposta, como o "justifique" da prova.
- **A:** inverte as técnicas: os exemplos ensinam o padrão e o formato, e o CoT mostra o caminho.
- **B:** a aula não diz que as etapas padronizam o formato. Ao contrário, cita a resposta longa e verbosa como limitação do CoT.
- **D:** o CoT aumenta o consumo de tokens (resposta verbosa e, às vezes, reasoning). Ele não deixa a resposta mais curta.
**Conceito:** few-shot (formato) × CoT (auditar o raciocínio)
