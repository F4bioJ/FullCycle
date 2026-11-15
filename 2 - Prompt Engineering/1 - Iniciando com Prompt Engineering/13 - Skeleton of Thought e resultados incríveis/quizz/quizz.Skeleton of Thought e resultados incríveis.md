# Quizz — Skeleton of Thought e resultados incríveis

**Capítulo:** 1 - Iniciando com Prompt Engineering · **Aula:** 13
**Base:** material da aula

---

## 1. Um time precisa primeiro escolher entre três estratégias de cache, pesando custo e risco, e depois escrever o documento de onboarding da estratégia escolhida. Pelo que as duas últimas aulas mostraram, como Tree of Thought e Skeleton of Thought se dividem nessas etapas?
- A) ToT no documento, porque ramos e sub-ramos já formam as seções; SoT na escolha, porque o esqueleto lista as estratégias.
- B) SoT nas duas etapas, porque o esqueleto também compara alternativas quando cada bullet point é uma estratégia.
- C) ToT na escolha, por explorar e comparar alternativas por critério; SoT no documento, por impor a estrutura antes do texto.
- D) Os dois servem igualmente às duas etapas, e a diferença entre eles está no formato da saída, em ramos ou em bullets.

## 2. Um prompt de Skeleton of Thought gerou e imprimiu um esqueleto com as seções "Configuração do ambiente" e "Setup inicial". Na expansão, as duas seções repetem conteúdo e misturam passos. Qual é a explicação mais provável, segundo a aula?
- A) Os nomes das seções são ambíguos: o modelo perde o contexto entre as etapas e mistura uma seção com a outra.
- B) Faltou um critério explícito para escolher a melhor seção, e sem ele o esqueleto vira verbosidade organizada.
- C) O modelo não usou os tokens do esqueleto ao expandir, porque eles ficam fora do contexto da segunda fase.
- D) O prompt pediu poucos bullet points, e o modelo duplicou seções para chegar ao tamanho esperado de resposta.

## 3. Por que pedir que o esqueleto apareça na saída tende a melhorar a expansão?
- A) O esqueleto impresso passa por uma segunda chamada, em que o modelo revisa os tópicos antes de expandi-los.
- B) A expansão pode referenciar os tópicos já impressos, o que reduz o total de tokens da resposta final.
- C) O usuário vê a estrutura e aprova os tópicos antes que o modelo comece a expandir cada um deles.
- D) Os tokens do esqueleto já estão na saída gerada, e o modelo os usa para calcular os próximos tokens.

## 4. Sobre imprimir ou não o esqueleto, qual afirmação está INCORRETA segundo a aula?
- A) O prompt pode pedir só o resultado final, e mesmo assim dá para obter respostas muito boas.
- B) Sem o esqueleto impresso o resultado costuma piorar, por isso o professor prefere imprimi-lo.
- C) Sem o esqueleto impresso, o modelo perde esses tokens e pode não chegar à melhor resposta.
- D) Com o esqueleto impresso, a saída vem em duas fases: primeiro a estrutura, depois o resultado.

## 5. Ao pedir uma API em Go com Skeleton of Thought, a primeira fase da resposta já trouxe structs e handlers completos, em vez de só listar os tópicos. Que limitação é essa e que elemento do prompt da aula responde a ela?
- A) Perda de contexto entre etapas; o ajuste é dar nomes mais específicos e distintos a cada seção do esqueleto.
- B) Esqueleto ruim que gera expansão ruim; o ajuste é pedir de 6 a 8 bullet points em vez de apenas 3 a 5.
- C) Pular direto para os detalhes; o ajuste é deixar explícito que a fase 1 traz os tópicos sem desenvolvê-los.
- D) Pular direto para os detalhes; o ajuste é pedir o resultado final, sem imprimir o esqueleto antes dele.

## 6. O professor diz que adora o Skeleton of Thought para documentação. Qual é a razão, segundo o material da aula?
- A) Documentação falha mais por desorganização que por falta de conteúdo, e o esqueleto organiza antes do texto.
- B) O esqueleto acrescenta o conteúdo técnico que falta quando o prompt traz pouco contexto sobre o sistema.
- C) Documentação exige comparar alternativas, e cada tópico do esqueleto vira um ramo avaliado por critério.
- D) Documentação pede respostas curtas e imediatas, e o esqueleto entrega o texto mais rápido.

## 7. Você quer que a IA implemente um serviço novo, mas ainda não sabe qual arquitetura usar. Que sequência segue a sugestão do professor ao combinar as técnicas?
- A) Listar as arquiteturas com Skeleton of Thought e depois usar Tree of Thought para expandir a escolhida em passos.
- B) Usar o Skeleton of Thought desde o início, com um bullet para cada arquitetura e outro para a implementação.
- C) Escolher a arquitetura com Tree of Thought e pedir a implementação direto, já que a decisão está tomada.
- D) Explorar as opções com Chain of Thought e Tree of Thought, depois montar com o SoT um plano de ação.

## 8. Na demonstração, a ADR gerada escolheu PostgreSQL em vez de MongoDB a partir de um prompt com pouco contexto. O que a aula conclui desse resultado?
- A) A decisão é confiável, porque seguir as seções da ADR fez o modelo levar em conta o contexto do sistema.
- B) A estrutura saiu profissional, mas a técnica não supre a falta de contexto: o valor mostrado está na forma.
- C) A decisão saiu sem justificativa porque o esqueleto não foi impresso antes da expansão das seções.
- D) A seção de alternativas pedia Tree of Thought, e sem ele o modelo citou opções que não chegou a comparar.

## 9. O resumo do professor contrasta o terceiro prompt da aula, o da API em Go, com um pedido direto como "crie um CRUD de produtos". O que esse prompt fez de diferente?
- A) Definiu no prompt o que o esqueleto devia cobrir e só depois, num segundo passo, pediu o desenvolvimento de cada item.
- B) Definiu no prompt o que o esqueleto devia cobrir e pediu que o modelo gerasse o código de todos os itens de uma vez.
- C) Deixou o modelo propor livremente de 6 a 8 itens para o esqueleto e depois pediu o desenvolvimento com exemplos.
- D) Deu exemplos de handlers e structs já prontos, para o modelo imitar o formato no restante da API de produtos.

## 10. O professor observa que os prompts da aula são curtos e mesmo assim geram respostas longas e bem organizadas. Considerando também as limitações da técnica, qual leitura está correta?
- A) Como os prompts são curtos, a técnica não aumenta o consumo de tokens em relação a um pedido direto.
- B) O prompt curto funciona porque o modelo completa o esqueleto com o contexto que falta sobre o sistema.
- C) O resultado vem da estrutura pedida, não do tamanho do prompt, e o custo extra aparece na saída gerada.
- D) O ganho vem do papel atribuído no prompt, e a divisão em duas fases serve para facilitar a leitura humana.
