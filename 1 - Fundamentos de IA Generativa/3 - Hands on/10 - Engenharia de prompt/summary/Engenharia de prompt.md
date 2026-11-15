# Engenharia de prompt

## Zero-shot prompting

Zero-shot prompting usa apenas a instrução da tarefa, sem exemplos prévios de entrada e saída. Essa estratégia funciona bem quando o modelo já responde bem ao tipo de tarefa pedido e quando o custo de tokens precisa ficar baixo. O ganho principal é velocidade de formulação, mas a saída tende a depender fortemente da clareza do enunciado. Se a instrução estiver ambígua, a resposta pode vir vaga, fora do formato esperado ou com baixa precisão.

## Quando usar zero-shot

Zero-shot é adequado quando não há necessidade de alto controle sobre a estrutura da resposta ou quando a tarefa já é muito conhecida pelo modelo, como classificações simples. No exemplo de sentimento, pedir “classifique o sentimento da frase: estou muito feliz com o produto que acabei de comprar” costuma ser suficiente porque muitos modelos já foram expostos a esse padrão. Também serve quando o próprio solicitante ainda está explorando o que quer obter e aceita respostas mais abertas. O custo menor vem justamente da ausência de exemplos adicionais no prompt.

## Few-shot prompting

Few-shot prompting adiciona exemplos de input e output antes da solicitação real para induzir o padrão desejado. Em vez de apenas dizer o que fazer, você demonstra como a tarefa deve ser resolvida, o que aumenta o controle sobre estilo, formato e critério de resposta. Essa técnica reduz ambiguidades e costuma ajudar em tarefas mais contextualizadas ou sujeitas a alucinação. O preço desse controle é maior consumo de tokens e maior esforço para selecionar exemplos representativos.

## Como estruturar few-shot

A lógica do few-shot é mostrar pares consistentes antes da consulta final. Em classificação de sentimentos, você pode fornecer frases rotuladas como positivo, negativo e neutro e só depois enviar uma quarta frase para o modelo classificar. Retomando esse cenário, a nova camada não está na tarefa em si, mas na formulação da instrução: o modelo passa a inferir o critério a partir dos exemplos, não apenas do comando. Se os exemplos forem mal escolhidos, o modelo aprende um padrão ruim e a qualidade da saída cai.

## Chain-of-thought prompting

Chain-of-thought prompting, ou CoT, pede que o modelo explicite o raciocínio passo a passo antes de chegar à resposta final. Essa estratégia é útil quando a tarefa exige encadeamento lógico, múltiplas etapas, cálculo ou depuração de erros de raciocínio. Como o aluno já conhece a ideia geral de controle de saída, o ponto novo aqui é que o controle passa a incidir sobre o processo intermediário, não apenas sobre o formato final. Isso aumenta a capacidade de inspecionar desvios e corrigir o caminho seguido pelo modelo.

## Vantagens e custo do CoT

Ao forçar uma decomposição em etapas, o CoT tende a melhorar a precisão em problemas mais complexos e facilita identificar onde o modelo errou. No exemplo das maçãs, pedir “pense passo a passo” faz o modelo explicitar a soma antes de responder que João tem 5 maçãs. Essa transparência ajuda na depuração, mas não é gratuita: a resposta fica mais longa, mais cara em API e frequentemente exige um segundo prompt para condensar o resultado em algo utilizável. Além disso, a confiabilidade do raciocínio exposto depende do modelo, então o passo a passo também precisa ser validado.

## Role-based prompting

Role-based prompting instrui o modelo a responder como se ocupasse um papel específico, como advogado, médico, cientista de dados ou uma persona alinhada à empresa. O objetivo não é apenas mudar o tom, mas induzir vocabulário, profundidade, enquadramento e prioridades compatíveis com um domínio. Isso é especialmente útil quando a resposta precisa parecer profissionalmente situada, como no primeiro contato de um escritório de advocacia. A técnica melhora coerência contextual, mas restringe a amplitude da resposta ao papel definido.

## Ajuste de persona e precisão de resposta

Uma persona bem definida aumenta a precisão da resposta porque reduz a liberdade interpretativa do modelo em domínios específicos. Pedir “você é um advogado trabalhista experiente; explique de forma clara os direitos de um trabalhador segundo a CLT” orienta não só o conteúdo, mas também o registro linguístico esperado. Em contrapartida, personas exigem iteração para ajuste fino e consomem mais tokens, já que a instrução precisa carregar identidade, contexto e limites de atuação. Se o papel estiver mal especificado, o modelo pode ficar artificial ou excessivamente estreito.

## Instruction tuning via prompt

Instruction tuning via prompt consiste em formular comandos altamente explícitos sobre conteúdo, estilo, restrições e tamanho da resposta, sem alterar os pesos do modelo. Em vez de apenas pedir um tema, você define exatamente o que quer, como quer e em que extensão quer a saída. Um pedido como “explique inflação em linguagem simples, com até três parágrafos curtos” já embute objetivo, nível de linguagem e formato. Essa técnica se aproxima do comportamento de modelos afinados para seguir instruções, mas depende de alta precisão na escrita do prompt.

## Escolha da estratégia

A escolha entre zero-shot, few-shot, CoT, role-based e instruction tuning via prompt depende do trade-off entre custo, controle e precisão. Zero-shot favorece rapidez e economia; few-shot melhora aderência por demonstração; CoT aumenta inspeção do raciocínio; role-based alinha a resposta a um domínio; instruction tuning via prompt padroniza saídas com comandos detalhados. A mesma tarefa pode produzir respostas muito diferentes conforme a estrutura da instrução usada. Prompting eficaz, portanto, não é uma única técnica, mas a seleção deliberada da estratégia mais adequada ao tipo de problema.
