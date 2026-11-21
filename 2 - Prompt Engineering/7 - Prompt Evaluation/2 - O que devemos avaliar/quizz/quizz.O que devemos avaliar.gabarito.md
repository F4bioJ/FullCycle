# Gabarito — O que devemos avaliar

## 1. Prompt novo em modelo novo contra prompt antigo em modelo antigo
**Correta: C**
**Por quê:** Na avaliação de prompt, o modelo é mantido e muda-se a instrução; na avaliação de modelo, mantém-se o prompt e trocam-se os modelos. Ao variar os dois juntos, a diferença de nota pode vir de qualquer um, e a equipe não aprende nada sobre o prompt.
- **A:** O professor diz que trocar de modelo com o mesmo prompt é algo completamente comum; o problema não é a prática, é misturá-la com a mudança de prompt.
- **B:** O dataset deve ser o mesmo para todas as versões comparadas, não um por modelo; o erro do cenário é outro (duas variáveis mudando).
- **D:** A avaliação de prompt observa como a instrução influencia a qualidade das respostas (e também custo e performance), não só o custo.
**Conceito:** Avaliar prompt vs avaliar modelo

## 2. Escolher tipo de avaliação e avaliador sem definir o porquê
**Correta: A**
**Por quê:** As três perguntas são por que avaliar, quais tipos usar e quem avalia. O professor diz que entender o objetivo é difícil e que há muitos tipos e avaliadores; por isso é preciso clareza do objetivo para escolher o como e o quem.
- **B:** A aula não condiciona o teste em produção à ordem em que o avaliador é escolhido; a avaliação contínua, inclusive em produção, é parte do processo.
- **C:** O professor não diz que o avaliador define os tipos; o objetivo vem primeiro e orienta tanto o como quanto o quem.
- **D:** Inverte a aula: o professor aponta o objetivo como a parte difícil, porque exige pensar no que realmente se quer.
**Conceito:** Por que, como e quem avaliar

## 3. Prompts comparados com entradas diferentes
**Correta: D**
**Por quê:** O dataset é o mesmo para todos os prompts, de modo que, com a mesma entrada, se veja quais saídas são melhores ou piores. Com entradas diferentes, a diferença de nota pode vir dos casos e não do prompt.
- **A:** O professor cita testes em produção como uma das formas de comparar, mas não como a única; o defeito aqui é a falta de dataset comum.
- **B:** Dataset, critério e análise são necessários, mas a falha descrita no cenário é a entrada diferente para cada prompt, não a ausência da análise.
- **C:** Contradiz a aula: o dataset precisa ser igual para todos os prompts comparados.
**Conceito:** Dataset comum na comparação de prompts
