# Top_K & Top_P

## Top-k sampling

Top-k sampling limita o conjunto elegível do próximo token aos `k` candidatos mais prováveis da distribuição atual. Em vez de permitir que qualquer token participe da escolha, o modelo ordena os candidatos por probabilidade e descarta tudo o que estiver fora desse recorte. Isso existe para controlar a geração sem cair nem no comportamento totalmente determinístico nem em uma abertura excessiva para opções improváveis. Retomando a ideia de temperatura já conhecida, a temperatura altera a forma da distribuição; o top-k decide quantos candidatos continuam vivos depois desse ranqueamento.

## Como o corte por K funciona

O mecanismo é simples: o modelo calcula as probabilidades do próximo token, ordena os tokens do maior para o menor valor e mantém apenas os `k` primeiros. Se `k = 2`, só os dois tokens mais prováveis podem ser escolhidos; se `k = 5`, os cinco primeiros continuam na disputa. Todos os demais são excluídos da amostragem naquele passo, mesmo que ainda tenham alguma probabilidade não nula. O efeito prático é um limite rígido por quantidade de candidatos, independentemente de quanto da massa probabilística esses candidatos representam.

## Exemplo numérico de top-k

Na continuação de `o sol está brilhando no ...`, suponha os candidatos `céu (0,35)`, `horizonte (0,25)`, `mar (0,15)`, `campo (0,10)` e `deserto (0,08)`, seguidos por outros tokens menos prováveis. Com `top-k = 5`, apenas esses cinco entram no conjunto elegível; o sexto em diante é descartado. A escolha final ainda não precisa ser sempre `céu`, porque a seleção ocorre dentro desse subconjunto filtrado. Isso mostra que controlar geração não é só “mais ou menos criatividade”, mas também decidir quais opções podem concorrer.

## Por que top-k existe

Sem um mecanismo de corte, a geração pode ficar presa demais ao caminho mais provável ou aberta demais a alternativas ruins, dependendo da combinação de parâmetros. Um recorte por `k` ajuda a reduzir repetição mecânica sem liberar tokens muito improváveis demais cedo demais. O resultado tende a ser uma saída mais natural do que uma escolha sempre gulosa do token líder. Em aplicações reais, isso é útil quando se quer previsibilidade estrutural com alguma diversidade local.

## Top-p sampling

Top-p sampling, também chamado de nucleus sampling, não fixa um número de candidatos; ele fixa um limiar de probabilidade acumulada. O modelo ordena os tokens por probabilidade e vai somando esses valores até atingir ou ultrapassar `p`. Só os tokens necessários para alcançar essa massa acumulada permanecem elegíveis. A diferença central para top-k é que o tamanho do conjunto varia conforme o formato da distribuição em cada passo.

## Massa acumulada de probabilidade

Massa acumulada de probabilidade é a soma progressiva das probabilidades dos tokens mais prováveis após a ordenação. Esse conceito importa porque o top-p não pergunta “quantos candidatos entram?”, mas sim “quanta probabilidade total eu quero cobrir antes de parar?”. Se poucos tokens já concentram quase toda a distribuição, o conjunto será pequeno; se a distribuição estiver mais espalhada, mais tokens precisarão ser incluídos. Por isso, top-p responde melhor à incerteza real do modelo em cada contexto.

## Exemplo numérico de top-p

Retomando os mesmos candidatos, a soma acumulada fica `céu 0,35`, depois `horizonte 0,60`, depois `mar 0,75`, depois `campo 0,83` e depois `deserto 0,90`. Com `top-p = 0,9`, o conjunto elegível vai até `deserto`, porque é nesse ponto que a massa acumulada atinge 90%. Um token seguinte como `luz (0,04)` já fica fora, mesmo que fosse o sexto colocado. O corte, portanto, não depende da posição ordinal do token, mas da cobertura probabilística acumulada.

## Diferença entre corte por K e corte por P

O corte por `k` é rígido em quantidade e variável em cobertura probabilística; o corte por `p` é rígido em cobertura probabilística e variável em quantidade. Isso faz o top-k ser mais simples de prever operacionalmente, enquanto o top-p é mais adaptativo ao formato da distribuição. Em distribuições muito concentradas, top-p pode manter poucos tokens; em distribuições mais dispersas, ele amplia o conjunto automaticamente. Essa distinção é a base para interpretar corretamente experimentos práticos com parâmetros de geração.

## Relação com a temperatura

Temperatura e top-k/top-p atuam em camadas diferentes do processo de amostragem. A temperatura altera a distribuição antes da escolha, tornando-a mais concentrada ou mais dispersa; top-k e top-p definem quais tokens continuam elegíveis depois desse cenário probabilístico. Na prática, combinar esses controles permite ajustar tanto o formato da distribuição quanto o tamanho efetivo do espaço de escolha. Ler resultados no Hugging Face sem separar essas duas funções costuma levar a interpretações erradas sobre “criatividade” do modelo.
