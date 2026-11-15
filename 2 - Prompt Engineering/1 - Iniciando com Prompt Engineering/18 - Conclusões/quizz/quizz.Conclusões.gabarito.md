# Gabarito — Conclusões

## 1. "Pense passo a passo" em todos os prompts de um sistema simples
**Correta: C**
**Por quê:** o professor pede para verificar se há necessidade real de a IA pensar passo a passo: é fácil viciar nisso e levar o hábito para sistemas, e sistemas gastam tokens. Numa classificação simples e em alto volume, o custo extra não se paga.
- **A:** o professor não diz que o passo a passo aumenta a alucinação; o problema que ele aponta é o gasto de tokens por hábito.
- **B:** self-consistency gera várias respostas para comparar, o que gastaria ainda mais tokens; ele a cita para reverificar respostas, não como substituto barato.
- **D:** Chain of Thought não depende de exemplos; few-shot é outra técnica, que o professor até separa do grupo "do CoT em diante".
**Conceito:** passo a passo só com necessidade real (custo em sistemas)

## 2. Onde a exploração de alternativas raramente acontece
**Correta: A**
**Por quê:** ele incentiva abusar da exploração de alternativas enquanto se trabalha e desenvolve, mas ressalva que em aplicações de alta escala raramente se trabalha dessa forma.
- **B:** é o contrário: explorar alternativas em decisões técnicas é justamente um dos desafios que ele propõe no fim da aula.
- **C:** ele diz que essas técnicas mudam até o uso da IA na interface do dia a dia (GPT, Claude, Gemini, no celular).
- **D:** ele cita Tree of Thought e ReAct juntos como opções de exploração; não diz que uma torna a outra dispensável.
**Conceito:** exploração de alternativas: desenvolvimento sim, alta escala raramente

## 3. Código ruim com o mesmo tipo de erro
**Correta: D**
**Por quê:** entre os trabalhos de ser intencional, o professor cita entender o que de ruim a IA gerou para ajustar o prompt e ela não cometer mais o erro, por exemplo com few-shot ("nunca faça isso").
- **A:** trocar de modelo não aparece na conclusão; a resposta dele é ajustar o prompt, não o modelo.
- **B:** é a ideia da self-consistency, que ele cita para reverificar respostas, não para corrigir um erro que se repete; se o erro é sistemático, a maioria tende a repeti-lo.
- **C:** o passo a passo pode expor o raciocínio, mas não ensina a IA a evitar o erro; o professor ainda pede para verificar se ele é realmente necessário.
**Conceito:** intencionalidade: analisar o erro e ajustar o prompt (few-shot)

## 4. Por que a complexidade cresce do CoT em diante
**Correta: B**
**Por quê:** segundo o professor, do Chain of Thought para baixo (deixando de lado zero, one e few-shot) tudo fica mais complexo porque essas técnicas geram linhas de pensamento que a IA reaproveita para dar a resposta.
- **A:** exemplos de entrada e saída são a marca de one-shot e few-shot, justamente o grupo que ele deixa de fora.
- **C:** encadear modelos é o prompt chaining da aula anterior, não o motivo geral que ele dá para CoT, ToT, ReAct e as demais.
- **D:** a aula não condiciona essas técnicas a modelos de raciocínio; o motivo que o professor dá é a geração de linhas de pensamento, não o tipo de modelo.
**Conceito:** técnicas com linhas de pensamento aumentam a complexidade

## 5. Qual afirmação NÃO está de acordo com a conclusão
**Correta: D**
**Por quê:** o professor diz o contrário: as técnicas mudam completamente como se programa, como se desenvolvem agentes e também como se usa a IA na interface do dia a dia (GPT, Claude, Gemini), até no celular.
- **A:** está de acordo: ele diz que se pode usar um ou outro tipo para tarefas similares e que o que muda é o nível de detalhamento.
- **B:** está de acordo: definir como a IA vai responder para ser compatível com a chamada de outro modelo é um dos "dá trabalho" que ele lista.
- **C:** está de acordo: ele diz que, em tarefas realmente simples, não tem tanto sentido; o ganho está nas complexas.
**Conceito:** alcance das técnicas, inclusive no uso cotidiano
