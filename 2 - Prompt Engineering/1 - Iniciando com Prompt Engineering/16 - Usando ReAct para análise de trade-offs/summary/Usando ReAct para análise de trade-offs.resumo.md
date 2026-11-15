# Usando ReAct para análise de trade-offs — resumo

## O que testar

Na aula anterior o ReAct achou um bug. Aqui o mesmo ciclo apoia uma decisão que poderia rodar num agente ou num sistema da empresa: como uma família vai de Orlando a Nova York.

O prompt tem quatro partes:

1. **Papel:** você é um planejador de viagens que ajuda famílias.
2. **Formato ReAct:** alternar entre pensamento e *action*, em que cada ação verifica tempo de viagem, custo ou conveniência; depois de cada ação, uma observação do que foi encontrado; no fim, a resposta final como recomendação.
3. **Contexto:** dois adultos e duas crianças de 5 e 8 anos; orçamento de no máximo 1.000 dólares para o transporte, sem o hotel; chegada até a noite do dia 10 de julho.
4. **Opções e detalhes:**
   - **Voo:** 220 dólares por pessoa (ida e volta), 3 horas de voo, mais 80 dólares de bagagem.
   - **Trem:** 150 dólares por pessoa, 20 horas de viagem, com Wi-Fi e camas por mais 50 dólares por pessoa.
   - **Carro alugado:** 60 dólares por dia, dois dias dirigindo, mais cerca de 250 dólares de gasolina e pedágio; as crianças se cansam em viagens longas.
   - A escola das crianças termina ao meio-dia do dia 9, e os pais não querem chegar cansados ao casamento na manhã do dia 11.

As restrições se cruzam (data, horário de chegada, cansaço das crianças). Sem um prompt intencional como esse, diz o professor, uma pergunta simples a um GPT ou a um agente com modelo fraco raramente traz boa resposta.

## O que observar

A resposta percorre as opções uma a uma, no ciclo pensamento → ação → observação:

- **Voo:** 4 × 220 = 880, mais 80 de bagagem, total de 960 dólares. Com aeroporto e procedimentos, a viagem leva de 5 a 6 horas. Cabe no orçamento e a família chega mais descansada.
- **Trem:** 600 dólares, ou 800 com as camas. Cabe no orçamento, mas as 20 horas de viagem cansam a família. Ao ler, o professor primeiro diz que a opção não cabe no orçamento e logo corrige.
- **Carro:** 4 dias de aluguel (240) mais 250 de gasolina, total de 490 dólares, mas a viagem leva 2 dias. Cabe no orçamento, mas o tempo na estrada traz risco de fadiga antes do casamento.

**Resposta final:** voar. Custa 960 dólares, cabe no orçamento e, com 3 horas de voo, a família chega a tempo e com o mínimo de cansaço.

## O que o experimento mostra

- **O mais barato não vence sozinho.** Trem e carro custam menos e cabem no orçamento, mas perdem no cansaço, que pesa por causa das crianças e do casamento logo de manhã.
- **Basta pedir para pensar, agir e observar.** Essa instrução já produz a linha de raciocínio da resposta. Alguns agentes e modelos trabalham assim naturalmente, e nos outros o prompt provoca o formato.
- **Custa tokens, mas dá para auditar.** A resposta é longa e gasta muitos tokens, mas mostra a linha de raciocínio, e dá para conferir se o modelo tomou mesmo a decisão certa.
