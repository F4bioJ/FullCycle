# Gabarito — Conceitos básicos do ReAct

## 1. O que acontece depois que o agente ReAct chama a ferramenta do GitHub
**Correta: D**
**Por quê:** O ReAct é um loop: o modelo raciocina, toma uma ação, pega a observação do que a ação resultou e raciocina sobre essa observação para dar a próxima ação. O retorno da ferramenta é a observação que alimenta o passo seguinte.
- **A:** Descreve o Self-consistency (aula 11): várias cadeias independentes e votação na resposta mais frequente.
- **B:** Descreve o Skeleton of Thought (aula 13): esqueleto de tópicos e expansão de cada um.
- **C:** A observação não encerra o processo; ela é entrada para o próximo raciocínio, que pode gerar outra ação.
**Conceito:** loop raciocínio → ação → observação

## 2. ReAct na triagem de 2 milhões de tickets por dia
**Correta: B**
**Por quê:** A aula diz que o ReAct é longo e verboso, gasta muitos tokens e demora; por isso normalmente não se roda em alta escala, e ele serve mais para exploração e desenvolvimento no dia a dia.
- **A:** O custo cresce com o volume, não se dilui: cada ticket paga todos os passos intermediários do loop.
- **C:** A aula diz o contrário: quando você trabalha com prompt, consegue forçar essa linha de raciocínio. O LangChain é só um lugar onde o tipo de agente ReAct já existe.
- **D:** O professor diz que muitas vezes o modelo já trabalha com ReAct, mas isso não torna o loop gratuito: os passos continuam gerando tokens e latência.
**Conceito:** custo e escala do ReAct

## 3. Observação de testes sem ferramenta de testes
**Correta: C**
**Por quê:** O agente simulou uma ação que não existe e inventou uma observação falsa, limitação citada na aula. É grave porque o loop depende da observação real: o raciocínio seguinte passa a se apoiar num estado que nunca existiu (resumo do professor).
- **A:** O ponto de stop controla quando o loop termina e evita gasto de tokens; ele não obriga o modelo a executar uma ação real nem impede que invente o resultado.
- **B:** O professor ressalta que todos os modelos podem simular ações ou inventar observações; o risco é documentado no ReAct, mas não é exclusivo dele.
- **D:** Verbosidade é outra limitação; aqui a conclusão não vale, porque se apoia num resultado inventado.
**Conceito:** ação simulada e observação falsa
