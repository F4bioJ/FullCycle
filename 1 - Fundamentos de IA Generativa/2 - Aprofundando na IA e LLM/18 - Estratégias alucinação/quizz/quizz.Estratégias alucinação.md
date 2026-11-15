# Quizz — Estratégias alucinação

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 18
**Base:** material da aula

---

## 1. Um usuário conversa com o chatbot em tom amigável, como se falasse com uma pessoa, e pede detalhes de um tema de nicho. Recebe uma resposta confiante e inventada. Qual acréscimo ao prompt ataca a causa que o professor apontou para esse comportamento?
- A) "Se você não tiver certeza, diga que não sabe", porque mostra ao modelo que ele não precisa agradar.
- B) "Liste as fontes que sustentam a resposta", porque a lista de fontes tira do modelo a pressão de agradar.
- C) "Explique o raciocínio antes de concluir", porque o passo a passo impede o modelo de completar a lacuna.
- D) "Vamos conversar como amigos", porque o modelo entende melhor o pedido quando a relação é mais próxima.

## 2. Sobre a técnica de pedir evidências e restringir as fontes no prompt, qual afirmação está INCORRETA?
- A) Pedir as fontes que sustentam a resposta força o modelo a buscar consistência no conhecimento que ele tem.
- B) A lista de autores e estudos dá ao usuário um caminho para conferir, depois, se as referências fazem sentido.
- C) O ganho está na verificação feita pelo próprio modelo ao listar as fontes, que poupa o usuário de ir atrás dos autores.
- D) Delimitar onde buscar, como só revistas acadêmicas, tende a reduzir a chance de invenção na resposta.

## 3. Você pede ao modelo que explique o raciocínio antes da conclusão. Os primeiros passos citam livros, mas a conclusão afirma que uma floresta vai desaparecer no ano que vem, sem nenhum passo mostrando de onde veio isso. O que a técnica permitiu?
- A) Confiar na conclusão, já que o modelo justificou o caminho até ela.
- B) Pouco, já que o que vale é o processamento interno, como o que o Manus exibe.
- C) Impedir o erro, já que ter de explicar cada passo bloqueia a invenção.
- D) Ver o salto, já que o raciocínio mostra que a afirmação não veio de busca alguma.

## 4. Uma equipe usa o ChatGPT todo dia para relatórios e, a cada prompt, cola as mesmas instruções: listar fontes, dizer quando não sabe e explicar o raciocínio. O que o professor sugere para esse caso?
- A) Alternar entre ChatGPT, Gemini e Manus a cada relatório, para comparar as respostas e descartar a que destoar.
- B) Declarar essas instruções uma única vez num escopo ou persona, como uma pasta de conversa, para que valham sempre.
- C) Trocar as três instruções por Few-shot Prompting, que reúne tudo num só conjunto de exemplos de certo e errado.
- D) Reduzir as instruções aos poucos, já que a conta fica mais afinada com o tempo de uso e passa a falhar menos.

## 5. Ao configurar um assistente, você declara: "você foi treinado com dados até 2023 e não tenta prever o futuro". Qual é o efeito esperado dessa declaração?
- A) Marcar o limite do que o modelo tem, para que ele não invente nem preveja o que ficou fora desse limite.
- B) Funcionar como um few-shot, em que o modelo aprende pelos exemplos qual período a resposta deve cobrir.
- C) Forçar a busca em dados externos para tudo o que for posterior a 2023, o que reduz a chance de invenção.
- D) Substituir as instruções de cautela, que deixam de ser necessárias quando o escopo já está declarado.

## 6. O que descreve corretamente o Few-shot Prompting, como apresentado na aula?
- A) Ajusta os pesos do modelo com exemplos, como um fine tuning supervisionado feito dentro da conversa.
- B) Dá exemplos de perguntas e respostas para o modelo imitar o formato, sem mudar o quanto ele infere.
- C) Mostra exemplos de certo e errado e é a técnica preferida do professor, por ser a mais rápida de aplicar.
- D) Mostra exemplos de certo e errado para que o modelo calibre até onde pode responder inferindo.

## 7. Um colega troca de ferramenta toda semana (ChatGPT, Gemini, Manus, Llama) em busca da melhor. Pela experiência que o professor relatou, o que ele tende a perder?
- A) Pouco, porque o que reduz a alucinação são as técnicas de prompt, e elas funcionam igual em qualquer ferramenta.
- B) O escopo declarado, porque é a persona configurada, e não o tempo de uso, que deixa uma conta mais afinada.
- C) A afinação da conta, porque no relato dele a ferramenta usada há mais tempo passa a falhar menos para ele.
- D) A consistência entre as respostas, porque cada ferramenta foi treinada com uma base de dados diferente.

## 8. Num dos casos citados, o tribunal não encontrou registro de um precedente que o advogado incluiu na peça gerada com IA. Qual é a lição central que o professor tira desse caso?
- A) O argumento era incoerente com a Constituição, e foi essa incoerência jurídica que denunciou o uso da IA.
- B) A IA fabricou um fato que até poderia soar coerente, e ser plausível não o torna real nem verificável.
- C) O precedente existia, mas com data e número trocados, um erro de detalhe que o tribunal considerou grave.
- D) A retratação formal encerrou o caso, sem mudar a forma como aquele tribunal trata o uso de IA nas peças.

## 9. Os três casos jurídicos ilustram qual tipo de alucinação visto na aula anterior, e por que ele é especialmente arriscado nesse contexto?
- A) Contextual: a peça começa coerente e deriva no fim, e as peças jurídicas longas favorecem essa deriva.
- B) Factual: um fato real com um detalhe trocado, como o número de prêmios Nobel de uma cientista conhecida.
- C) Estrutural: o modelo gera instruções e fórmulas erradas, e as peças jurídicas seguem uma estrutura rígida.
- D) De citação: referências com cara de legítimas que não existem, num meio em que cada detalhe é conferido.

## 10. Um escritório quer adotar IA para redigir peças. Qual postura corresponde à recomendação do professor?
- A) Usar como trabalho de estagiário: ganha-se tempo no rascunho, e toda citação é conferida antes de seguir.
- B) Usar com as técnicas de prompt da aula, que reduzem a alucinação o bastante para revisar só por amostragem.
- C) Usar sempre a mesma ferramenta, já que a conta afinada pelo uso dispensa a conferência das citações.
- D) Adiar a adoção até a IA parar de alucinar, já que, para o professor, o risco ainda supera o ganho.
