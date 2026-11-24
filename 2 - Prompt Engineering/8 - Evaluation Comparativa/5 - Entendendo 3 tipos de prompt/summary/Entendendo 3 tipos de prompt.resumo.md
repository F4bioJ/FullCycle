# Entendendo 3 tipos de prompt

## O dataset do experimento

O experimento continua no cenário de code review. Cada item do dataset tem um **input**, um trecho de código em Go escrito em uma única linha, e um **ground truth**, o output esperado para aquele código. A IA analisa o código e devolve o resultado num formato definido; a avaliação confere se ele bate com o esperado, como nos exemplos anteriores.

## Prompt agressivo

O primeiro prompt coloca o modelo como especialista em segurança e code review e manda reportar **qualquer** possível erro, mesmo que a chance seja remota: "é melhor trazer coisa errada do que perder um bug". Ele pede rigor extremo, suspeita de tudo, e traz uma lista longa de tipos de erro. A intenção, nas palavras do professor, é "achar 100% dos bugs", aceitando trazer alguns que não existem.

Atenção à nomenclatura: na fala, o professor diz que esse prompt foca em **precisão**, mas, pelas definições das aulas anteriores, achar todos os bugs reais aceitando falsos positivos aumenta o **recall** e tende a baixar a precision. O resumo do professor corrige isso: o agressivo maximiza cobertura.

## Prompt conservador

O segundo prompt manda reportar só o que o modelo tiver **100% de certeza**: "é melhor não colocar nada do que gerar falso positivo". Ele restringe o foco a apenas três vulnerabilidades críticas e força os tipos possíveis no formato de resposta, o que deixa o modelo muito mais restrito e seletivo.

Aqui a troca se repete: o professor diz que esse prompt busca um recall mais alto, mas preferir não errar a trazer coisa errada é o comportamento que favorece a **precision**. O custo é que alguns bugs reais deixam de ser reportados, o que derruba o recall.

## Prompt balanceado

O terceiro prompt é o mais longo e tenta equilibrar os dois lados. Ele dá ao modelo três prioridades, **segurança**, **robustez e performance** e **qualidade de código**, escolhidas porque são os três tipos de problema que existem no dataset.

## Few-shot e checklist por categoria

O prompt balanceado usa few-shot com exemplos de problemas de cada categoria: falhas de segurança, problemas de performance como N+1 e problemas de qualidade como nomes errados ou código verboso demais. Ele também lista as categorias e traz uma checklist dos tipos de erro que o modelo pode encontrar, deixando claro o que conta como finding.

## Regras de confiança

O prompt balanceado define que o modelo só reporta o que tiver **80% ou mais de confiança**, e acrescenta uma regra por categoria:

- **Segurança:** ser minucioso (thorough) e verificar se a vulnerabilidade é real.
- **Robustez:** reportar só padrões claros, em que o problema é óbvio.
- **Qualidade:** só violações, deixando de fora os casos de fronteira (borderline cases).

Assim ele equilibra exigência de confiança com um escopo menos restrito que o do conservador.

## Três políticas para comparar

No fim, são três prompts distintos sobre o mesmo dataset: um que puxa para cobertura (agressivo), um que puxa para confiabilidade (conservador) e um que tenta equilibrar os dois (balanceado).
