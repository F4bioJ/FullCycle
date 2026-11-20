# ITER-RETGEN na prática - parte 2

## O programa: uma chain por prompt

Depois de ver os prompts na aula anterior, o professor mostra o programa sem se aprofundar no Python (o código está no repositório). Cada prompt virou uma **chain**: o draft, por exemplo, pega o prompt, chama o LLM e devolve o resultado. O mesmo vale para as outras etapas.

## A função de iteração

A função principal recebe a **pergunta**, o **número máximo de iterações** (para o loop não rodar infinitamente) e um parâmetro de quanto considerar o trabalho completo, que não é usado com tanta intensidade. O fluxo é este:

1. **Draft:** gera o rascunho a partir da pergunta, já com os missing markers, e o imprime.
2. **Contagem:** conta os [MISSING]. Iterações e progresso começam em zero.
3. **Loop:** a cada iteração, pega os gaps (as informações faltantes).
   - Se não há gaps, o trabalho terminou.
   - Se não há gaps, mas houve **menos de duas iterações**, pede uma **expansão**: um novo draft, com novos gaps, para continuar iterando e evitar que tudo se resolva de uma vez.
4. **Perguntas:** a partir das partes em [MISSING], gera as perguntas **já com as respostas**. O código limita a dez perguntas, e o prompt foi ajustado para no máximo cinco, para não exagerar.
5. **Fill:** a fill chain recebe a pergunta inicial, o draft, as perguntas com respostas e o número da iteração, e **preenche os buracos**, gerando um novo draft.
6. **Verificação:** confere se ainda há gaps e mostra quantos faltam.

Boa parte do código é **debug**, para acompanhar linha a linha o que acontece; sem isso, o arquivo poderia ser umas cinco vezes menor. O conceito central é *fill in the blanks*: tapar os buracos.

## A execução

A pergunta é a mesma do exemplo sem expansão: *"explain about LangChain and LangGraph?"*. O professor também pediu ao programa estatísticas de tamanho e outras informações. O programa demora, porque **chama o modelo várias vezes**, e cada chamada tem custo.

- O draft inicial se parece com a resposta sem expansão, mas traz missing markers, como versão e data de release, especificações técnicas e parâmetros, e métricas de performance. Ele encontrou cinco gaps.
- Nas perguntas geradas, o modelo respondeu, por exemplo, que o LangChain estava na versão "0.12", um valor **desatualizado**, porque o modelo foi treinado há algum tempo. O professor ressalta que o importante ali é o fluxo.
- O draft refinado substitui os marcadores pelas respostas. Na tela, o professor limitou o número de caracteres impressos, para o texto não ficar gigante.
- Segundo o professor, numa das iterações o modelo resolveu só um de três gaps, e os dois restantes foram fechados na rodada seguinte.
- Ao final, ele diz que foram **três iterações** até a versão final.
- As contagens dele não fecham entre si: fala em cinco gaps no draft, depois em três, e o relato das rodadas não soma claramente três iterações. O que vale é o fluxo, não os números.

## O que isso mostra

O documento final tem muito mais informação e detalhe do que a resposta sem expansão: cresceu **quase 100%** em relação ao tamanho original. Se o draft pedisse dez missing points, cresceria ainda mais. A lição do professor é que, encadeando prompts, um resultado alimenta o próximo até a versão final. O preço, como o professor lembra, é pagar pelas várias chamadas ao modelo, que também deixam a execução mais demorada. E, no exemplo, a versão 0.12 veio desatualizada porque o modelo foi treinado há algum tempo.

Na próxima aula, o foco muda de enriquecer a resposta para enriquecer a pergunta do usuário.
