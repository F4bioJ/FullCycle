# Gabarito — Prompts no processo de desenvolvimento

## 1. O argumento para não economizar tokens num bug pequeno
**Correta: A**
**Por quê:** O professor diz que codificação é algo extremamente complexo e que, sem economizar tokens, "a gente tem uma chance maior de diminuir o problema"; e que muitas vezes se usa um prompt gigante para um problema pequeno, "então você não vai ter problemas em janela de contexto".
- **B:** Modelos de reasoning aparecem na aula como opção do plano que consome mais do limite, não como algo acionado pelo tamanho do prompt.
- **C:** Prompt caching foi tema de aula anterior, mas não é o argumento usado aqui; a aula fala de complexidade do código e de modelo de cobrança.
- **D:** Contraria o que já foi estudado sobre janela de contexto: entrada maior também pesa em custo e latência. A aula não diz isso.
**Conceito:** Não economizar tokens em código

## 2. API key contra plano mensal na decisão de enxugar prompts
**Correta: B**
**Por quê:** Com a API key, "cada token contava e saía uma conta muito clara", e usá-la no Claude Code o dia todo custa "uma grana absurda". O plano mensal permite trabalhar "quase que de forma ilimitada, sem ter surpresas no final do mês": os planos e IDEs "estão cobrando por utilização", não por token.
- **A:** A aula cita modelos de reasoning como algo que consome mais do plano, mas não diz que o limite do plano é contado em tokens de reasoning, nem que enxugar pesa mais no plano do que na API.
- **C:** O consumo do plano também é medido em tokens (por isso reasoning gasta mais do limite), mas o token pesa de forma diferente: na API cada token vira dinheiro na fatura; no plano ele gasta cota de um valor fixo, sem preço por milhão. Por isso a decisão de enxugar muda entre os dois, e não só o preço.
- **D:** A aula não fala de prompts repetidos ficarem mais baratos na API; é na API que cada token pesa na conta.
**Conceito:** Cobrança por uso em vez de por token

## 3. Como evitar que a IA leia o codebase inteiro
**Correta: C**
**Por quê:** Com a ideia de branches e leafs, o professor manda a IA "partir a partir desse princípio, seguindo esse fluxo aqui. Todo o restante você ignora".
- **A:** Resumir o projeto lembra a sumarização de aulas anteriores, mas não é a estratégia desta aula, e ainda exige ler tudo antes.
- **B:** Dividir em lotes lembra o batch prompting, mas a aula não propõe mandar o codebase em partes; propõe recortar o que importa.
- **D:** Cortar por idade dos arquivos lembra o truncamento, mas não garante que o componente da tarefa fique no contexto; a aula recorta pelo fluxo.
**Conceito:** Branches e leafs

## 4. Por que branches e leafs falha num sistema acoplado
**Correta: A**
**Por quê:** "Tudo isso depende muito de como você estrutura a sua aplicação. Se ela trabalha de forma modular, os componentes estão desacoplados o suficiente, você consegue fazer a IA entender o contexto desse pedaço sem ter que internalizar toda essa outra parte."
- **B:** As janelas grandes foram citadas como argumento para não economizar tokens, não como requisito da estratégia.
- **C:** A aula não liga a estratégia a número de requisições; os limites de plano aparecem na discussão de custo.
- **D:** A aula sugere o contrário: documentação e instruções em cada pedaço, não um arquivo central.
**Conceito:** Modularização como condição do recorte

## 5. Para que servem documentação e instruções por pedaço
**Correta: D**
**Por quê:** O professor sugere "criar documentações e instruções em cada pedaço para que ela evite sair e entrar em outra bolha de partes do seu sistema".
- **A:** A mesma aula pede para não economizar tokens no desenvolvimento; o objetivo da documentação é manter a IA no recorte, não reduzir custo.
- **B:** É o oposto do objetivo: as instruções de cada pedaço servem para a IA não sair da sua bolha e entrar em outras partes do sistema.
- **C:** É o oposto: a ideia é a IA entender o pedaço "sem ter que internalizar toda essa outra parte".
**Conceito:** Instruções por módulo
