# Usando ReAct para análise de trade-offs

## ReAct aplicado a decisão com restrições

Retomando o ReAct já estabelecido, a novidade aqui é usar o mesmo ciclo para comparar alternativas em um problema de decisão, não para depurar código. O prompt transforma uma escolha ambígua em uma sequência auditável de verificações: custo, duração, conveniência e impacto no descanso da família. Isso importa porque a melhor opção não é simplesmente a mais barata; ela precisa satisfazer restrições simultâneas de orçamento, horário e fadiga.

## Estrutura do prompt para planejamento de viagem

O prompt funciona melhor quando separa claramente papel, contexto, opções e critério de saída. Neste caso, o papel é “planejador de viagens”, o contexto inclui composição da família, limite de mil dólares e necessidade de chegada até a noite do dia 10, e as opções já trazem custos e condições. A instrução para alternar pensamento, action e observation força o modelo a inspecionar cada alternativa antes de recomendar uma, em vez de responder por intuição.

## Restrições familiares como variáveis de decisão

A presença de duas crianças pequenas muda o peso de conveniência e cansaço na análise. O fim das aulas no dia 9 ao meio-dia e o casamento na manhã do dia 11 criam uma janela curta, na qual chegar no horário não basta; é preciso chegar com energia suficiente. Em cenários assim, restrições humanas e logísticas entram no prompt como critérios explícitos, porque o modelo tende a ignorá-las se elas aparecerem apenas como detalhe narrativo.

## Avaliação da opção de voo

O voo atende ao limite financeiro por pouco: 220 dólares por pessoa para quatro pessoas somam 880, e a bagagem adicional leva o total a 960 dólares. Mesmo não sendo a alternativa mais barata, ele reduz drasticamente o tempo de deslocamento, ficando em cerca de 5 a 6 horas quando se considera aeroporto e procedimentos. Essa combinação de custo aceitável com menor fadiga faz o voo dominar o trade-off quando o evento principal ocorre na manhã seguinte.

## Avaliação da opção de trem

O trem é financeiramente viável tanto sem quanto com camas, chegando a 600 ou 800 dólares no total. O problema não está no orçamento, mas na duração de 20 horas, que compromete descanso e conveniência para uma família com crianças. Esse é um bom exemplo de trade-off em que uma opção “cabe no budget” e ainda assim perde, porque falha no critério operacional mais sensível do cenário.

## Avaliação da opção de aluguel de carro

O aluguel de carro parece muito competitivo em custo, já que 60 dólares por dia mais gasolina e pedágio mantêm o total abaixo do teto. Ainda assim, dois dias dirigindo aumentam o desgaste dos pais e a chance de cansaço das crianças, o que piora a condição de chegada para o compromisso do dia 11. Em decisões com agenda apertada, custo baixo não compensa quando o deslocamento consome energia demais da família.

## Síntese da recomendação final

A recomendação final escolhe o voo porque ele oferece o melhor equilíbrio entre custo e conveniência, não porque seja o menor preço absoluto. O valor total permanece dentro do orçamento e a duração curta preserva descanso antes do casamento. Essa é a camada nova do uso de ReAct: comparar opções por trade-off explícito e justificar a decisão com base nas restrições do problema.

## Custo, verbosidade e auditabilidade

Esse formato produz respostas mais longas e consome mais tokens porque cada alternativa precisa ser inspecionada separadamente. Em troca, a decisão fica auditável: é possível verificar se o modelo calculou corretamente, se respeitou as restrições e se a recomendação final realmente decorre das observações. Para agentes e sistemas de apoio à decisão, essa transparência costuma valer o overhead quando o erro custa mais do que os tokens extras.
