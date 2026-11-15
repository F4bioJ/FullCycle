# Context window — resumo

## Janela de contexto

Entre os pontos em que as LLMs ainda precisam evoluir, o professor destaca a **janela de contexto** e a sua limitação. O ponto de partida é o funcionamento já visto no curso: o modelo usa um **grupo de tokens anteriores** para **prever o próximo token**. Esse conjunto de tokens anteriores é o contexto.

O contexto tem um **número máximo de tokens**. Quando você manda um prompt, o modelo tem um limite do que consegue enxergar, ou seja, do que consegue considerar **de uma vez só**. Esse limite é a janela de contexto.

## O tamanho da janela em alguns modelos

Os números que o professor cita, aproximados:

| Modelo | Janela de contexto |
|---|---|
| GPT-3.5 | cerca de 4.100 tokens |
| GPT-4 | 8 mil tokens |
| GPT-4 Turbo | 128 mil tokens |
| Claude 3 (Anthropic) | cerca de 200 mil tokens |

## Janela maior, mais coerência

Quanto **maior** a janela, **mais coerência** o modelo consegue manter, porque enxerga mais. Ele também consegue **raciocinar sobre documentos longos** e **integrar várias fontes de informação** para produzir o que foi pedido.

Mesmo assim, a qualidade **não é uniforme**. Um modelo como o Claude, com 200 mil tokens, tem uma janela gigante, mas não trata toda essa extensão da mesma forma. O professor aponta **três limitações principais**.

## Limitação 1: diluição de relevância

Com **muitos tokens**, o modelo tem **mais dificuldade de manter o foco**. A razão está no **mecanismo de atenção**, explicado no começo do curso: ele **não é perfeito** e tem falhas. Quanto mais informação, mais difícil manter a atenção, e mais precisão seria necessária para isso.

Essa atenção seletiva, num prompt com uma quantidade muito grande de tokens, pode levar a:

- uma **resposta mais genérica**;
- **instruções ignoradas**: num prompt de 200 mil tokens cheio de instruções, alguns detalhes importantes podem se perder, porque o modelo dá **menos peso** a certas partes do texto e concentra a atenção em outras;
- **perda de coerência** em trechos mais longos, que é a parte mais difícil da IA generativa.

## Limitação 2: perda de foco no começo ou no fim

Modelos **autoregressivos** tendem a dar **mais foco ao final do contexto**: os **últimos tokens têm mais peso**. É uma tendência, não uma regra. O efeito possível é **perder parte das informações do início do prompt**.

A dica do professor: se for preciso usar um prompt muito grande, **deixe o que é mais crítico para o final**. Colocado no começo, aquilo pode perder um pouco de acurácia.

## Limitação 3: custo computacional

Trabalhar sempre com o GPT-4 de 128 mil tokens não resolve tudo. O **custo e o tempo de processamento** da atenção crescem de forma **quadrática** com o tamanho do contexto: o mecanismo de atenção fica mais caro, mais complexo e mais **lento**. Em troca, o modelo consegue olhar um grupo maior de coisas e pode trazer uma informação melhor. Mas a conta pode ficar difícil de pagar no fim do dia. Como resume o professor, **não existe almoço grátis**.

## Exemplo: o PDF de 200 páginas

Você manda um PDF de 200 páginas para a LLM e pede: "resuma os principais pontos da **cláusula de confidencialidade da página 13**". O pedido é claro: diz a cláusula e a página. Suponha que o documento cabe na janela do GPT-4 Turbo, de 128 mil tokens.

O modelo olha as 200 páginas, mas pode trazer uma **resposta mais vaga**, porque **diluiu o foco** em vez de ir só à página 13. Ele pode até **ignorar a instrução** de se limitar àquela página ou àquela cláusula, por ter perdido tanto foco. Caber na janela não garante a resposta certa.

## Contornar: chunking e trechos relevantes

Para contornar, o professor apresenta algumas **estratégias de prompt**. A primeira é o **chunking** (ele fala em "chunking intelligence"): dividir o documento em **partes lógicas**, como capítulos e seções, para dar mais atenção a cada pedaço.

Variações da mesma ideia:

- usar um **sistema externo** que **busque só os trechos relevantes**. O trabalho é separado: primeiro se recorta, depois o modelo faz a ação. "Fatia o bolo" e entrega com menos tokens, para que ele não precise dividir tanto a atenção;
- **enviar os trechos num prompt mais curto e direcionado**, copiando e cortando em vez de mandar o PDF inteiro. Pode ser feito à mão ou de forma automática;
- **quebrar por capítulos e seções e focar só em alguns**. Ainda se perde um pouco de atenção e não é a melhor prática, mas ajuda.

## Resumos hierárquicos

Outra estratégia é o **resumo hierárquico**: **resumir por partes**. Por exemplo, resumir um capítulo e, depois, trabalhar **em cima desse resumo** o que precisa ser feito.

## Prompts com instrução explícita de foco

A última estratégia, pouco usada segundo o professor, é escrever **prompts com instrução de foco explícita**. Pedir "a página 13" já é uma instrução de foco, mas **não explícita**. Para deixá-la explícita, você diz, por exemplo: "**ignore da metade para frente**, ignore os **mil tokens finais** e foque só no conteúdo da página 13 para resumir a cláusula que pedi", sabendo que a página 13 não está nesses trechos.

Assim você direciona a atenção pedindo que o modelo **ignore um trecho**. Em vez de cortar o documento à mão, você **corta pelo prompt**: diz a ele de onde até onde não vai precisar usar.
