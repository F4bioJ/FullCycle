# Quizz — Context window

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 19
**Base:** material da aula

---

## 1. Um colega afirma: "esse modelo tem janela de 128 mil tokens, então ele foi treinado com 128 mil tokens de texto". Qual é a correção certa?
- A) É o tamanho máximo da resposta gerada; o prompt de entrada fica fora desse limite.
- B) É quanto o modelo considera de uma vez ao prever o próximo token, não o volume de treino.
- C) É a quantidade de tokens diferentes que o tokenizador do modelo consegue reconhecer.
- D) É quantos tokens de conversas anteriores o modelo guarda para usar em sessões futuras.

## 2. Um documento de 150 mil tokens é enviado ao Claude 3 (janela de cerca de 200 mil). Alguém conclui: "coube na janela, então cada trecho vai receber a mesma atenção". Como avaliar essa conclusão?
- A) Está certa: dentro da janela todos os tokens têm o mesmo peso; só o excedente se perde.
- B) Está errada só porque 150 mil passa da metade da janela; abaixo disso a atenção seria uniforme.
- C) Está errada: a atenção alcança só os últimos tokens, e o começo do documento sai do contexto.
- D) Está errada: caber dá alcance, mas a atenção não é uniforme e a relevância pode se diluir.

## 3. Um prompt de 100 mil tokens, enviado a um modelo de 128 mil, começa com "responda em JSON" e segue com um documento longo. A resposta é boa, mas sai em texto corrido. Qual é a explicação e o ajuste mais coerentes com a aula?
- A) Modelos autoregressivos tendem a pesar mais o fim do contexto; mover ou repetir a instrução no final.
- B) O modelo tentou agradar e inventou um formato; acrescentar uma instrução de cautela no começo.
- C) A instrução foi cortada por ter passado da janela; trocar por um modelo de 200 mil tokens.
- D) Instruções de formato exigem exemplos; incluir alguns casos de JSON certo e errado (few-shot).

## 4. Um time dobra o tamanho dos prompts, de 64 mil para 128 mil tokens. O que esperar do custo e do tempo de processamento da atenção?
- A) Que dobrem, porque custo e tempo crescem na mesma proporção do número de tokens.
- B) Que o tempo dobre e o custo quadruplique, porque só o custo cresce de forma quadrática.
- C) Que fiquem cerca de 4 vezes maiores, porque crescem com o quadrado do tamanho do contexto.
- D) Que fiquem cerca de 8 vezes maiores, porque cada token se compara com todos os outros.

## 5. Qual afirmação sobre janelas de contexto maiores está INCORRETA?
- A) Permitem raciocinar sobre documentos longos e integrar várias fontes na mesma resposta.
- B) Dão o mesmo peso ao começo e ao fim do prompt, já que o modelo enxerga as duas pontas.
- C) Prompts que as aproveitam ficam mais lentos e caros, por causa do mecanismo de atenção.
- D) Mesmo dentro delas, um prompt muito longo pode render uma resposta mais genérica que o esperado.

## 6. Você envia um PDF de 200 páginas pedindo o resumo da cláusula de confidencialidade da página 13. A resposta vem vaga e mistura trechos de outras cláusulas. Qual ação ataca mais diretamente a causa?
- A) Recortar antes: achar a página 13, à mão ou por busca, e enviar só ela ao modelo.
- B) Trocar por um modelo de janela maior, para o PDF ocupar uma fração menor do contexto.
- C) Pedir que o modelo liste as fontes e cite de qual página tirou cada ponto do resumo.
- D) Pedir que o modelo explique o raciocínio passo a passo antes de escrever o resumo final.

## 7. Você precisa de uma síntese que dependa do conteúdo de um livro inteiro, com 40 capítulos. Qual estratégia da aula serve melhor a essa tarefa?
- A) Chunking, enviando ao modelo só o capítulo que parece mais relevante para a síntese.
- B) Instrução explícita de foco, mandando o modelo ignorar a metade final do livro.
- C) Um sistema externo que busque só os trechos mais parecidos com o pedido de síntese.
- D) Resumo hierárquico: resumir cada capítulo e depois trabalhar em cima desses resumos.

## 8. O professor diz que "resuma a cláusula da página 13" já é uma instrução de foco, mas não explícita. Qual reformulação torna o foco explícito, no sentido da aula?
- A) "Você é um advogado especialista em contratos. Resuma a cláusula de confidencialidade da página 13."
- B) "Se não tiver certeza sobre o conteúdo da cláusula da página 13, diga que não sabe em vez de inventar."
- C) "Ignore a metade final do documento e os últimos mil tokens; use só a página 13 para resumir a cláusula."
- D) "A cláusula de confidencialidade da página 13 é muito importante; resuma-a com atenção redobrada."

## 9. Em vez de recortar o PDF de 200 páginas antes, você envia tudo com a instrução "ignore a metade final e os últimos mil tokens". Das limitações da aula, qual essa técnica deixa praticamente intacta, e por quê?
- A) O custo computacional, já que todos os tokens do PDF continuam no prompt e são processados.
- B) A diluição de relevância, já que a instrução faz o modelo espalhar a atenção pelo PDF inteiro.
- C) O viés para o fim, já que a instrução de foco só tem efeito quando vem antes do documento.
- D) Nenhuma, já que os tokens ignorados deixam de ocupar a janela e de custar processamento.

## 10. Um time decide mandar o repositório inteiro (100 mil tokens) em cada pergunta ao modelo, "já que ele aguenta 128 mil". Qual avaliação é a mais coerente com a aula?
- A) Boa: com mais contexto a coerência sobe, e o custo só cresce na mesma proporção dos tokens.
- B) Ruim pelo custo, mas, dentro da janela, a qualidade é igual à de um prompt com o trecho certo.
- C) Boa, desde que a pergunta fique no começo do prompt, que é a parte que o modelo pesa mais.
- D) Troca ruim: ganha alcance, mas paga custo quadrático e arrisca diluir o foco no trecho certo.
