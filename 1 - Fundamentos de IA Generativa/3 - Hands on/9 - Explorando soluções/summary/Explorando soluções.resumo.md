# Explorando soluções — resumo

## O fechamento do curso

O professor abre o último bloco lembrando o objetivo do treinamento: entender como uma LLM foi criada e como funciona, para ter mais autonomia e tomar decisões melhores no dia a dia. Faltam três temas: estratégias de prompt, RAG (a transcrição traz "reg" e "reggae") e mais alguns detalhes de fine-tuning. Sobre prompt, ele avisa que não vai ensinar a promptar em detalhe, como fazem muitos cursos de IA: quer mostrar as estratégias e deixar que cada um evolua com o uso.

## Custo, eficiência e controle

Mais do que dominar a ferramenta, a ideia é decidir bem. A conversa não é só com quem usa prompt no dia a dia, mas também com quem cria aplicações e negócios sobre essas estratégias. A pergunta que guia tudo é como gerar o máximo impacto com o menor custo e a melhor eficiência, sem perder o controle do que está sendo gerado.

## O que é prompt engineering

É criar instruções textuais específicas para o modelo, e não é o mesmo que saber escrever. Muita gente escreve bem, mas não consegue dar instruções claras e eficazes a uma LLM. O professor resume assim: "o óbvio precisa ser dito". Ele conta que achava que sabia promptar e só percebeu a dificuldade depois de 9 meses estudando IA, quando precisou de resultados que não podiam falhar. Conta também que criou estratégias próprias, que deixam os prompts mais eficientes e reduzem seu custo operacional.

## Três formas de direcionar uma LLM

Dá para deixar o modelo mais propenso ao que se precisa gerar por três caminhos: prompt engineering, fine-tuning e RAG. Em uma construção de tiro curto, o prompt é o mais barato, porque influencia o comportamento da LLM sem mudar a arquitetura nem os pesos. Isso o torna a primeira opção quando o problema pode ser resolvido com uma instrução melhor.

## Do pedido genérico à instrução

"Aqui está um texto, me ajude resumindo" é uma instrução básica. O modelo responde, possivelmente com algo interessante, mas sem aproveitar toda a sua capacidade. Já "resuma o texto abaixo em até cinco linhas, com uma linguagem simples, destacando os principais argumentos apresentados" define limite, linguagem e foco. O professor chama isso de "nichar o pensamento" da LLM e descreve o prompt engineering como a arte de formular os melhores direcionamentos em linguagem natural, com bastante criatividade.

## Motivo 1: eficiência sem retreinar

Treinar um modelo de novo é caro, demora e exige um time capaz de fazê-lo. Um prompt bem escrito melhora a resposta com muito menos gasto e de forma mais simples.

O exemplo: "escreva um parágrafo sobre o clima" pode trazer qualquer coisa, o que não serve em uma solução real. "Escreva um parágrafo informativo em linguagem jornalística explicando o impacto do El Niño no clima do Brasil em 2023" delimita tema, estilo e escopo. O resumo escrito do professor acrescenta a diferença para os parâmetros de geração: eles ajustam o comportamento probabilístico, e o prompt define a direção da saída.

## Motivo 2: precisão

Sem uma instrução clara não há resposta precisa, e o prompt bem estruturado diminui a liberdade de interpretação do modelo. Isso não significa perfeição. Ao fazer a mesma pergunta 10 vezes, o professor recebeu 10 respostas diferentes, e o tamanho dessa variação depende do modelo. Por isso, o cuidado é maior em tarefas críticas, como geração de código, diagnóstico e resposta a clientes.

## Motivo 3: economia de tokens

Uma pergunta muito aberta gasta muitos tokens até a resposta tomar forma. O resumo do professor explica o motivo: é preciso mais interações para corrigir o rumo. Uma instrução específica reduz esse retrabalho e o custo das APIs pagas. O ganho, portanto, está no custo total para chegar à resposta.

O peso disso muda com o cenário:

- **Assinatura paga do ChatGPT:** dá para fazer muitas perguntas à vontade.
- **Manus gratuito:** os tokens acabam depois de certo uso.
- **Veo 3:** o professor cita, de memória, cerca de mil créditos por mês e 100 por vídeo, ou seja, 10 vídeos. Promptando de qualquer jeito, ele estima aproveitar 3 e descartar o resto.
- **Uso empresarial:** ele diz que o custo sobe "exponencialmente". Leia como força de expressão: em escala, pequenas ineficiências se multiplicam rápido.

## Motivo 4: controle e testes

O prompt também facilita controlar e testar o que se gera. Dá para fazer testes A/B de estilos de resposta ao usuário: mais ou menos simpático, mais aberto ou mais nichado. O resumo do professor trata o prompt como um artefato de engenharia, que pode ser comparado, versionado e testado. Quanto mais explícita a instrução, mais fácil é reproduzir e ajustar o resultado, e assim se automatizam fluxos com consistência.

## Quando o prompt não basta

O resumo do professor completa o panorama. O fine-tuning entra quando só as instruções não resolvem e é preciso adaptar mais a fundo o comportamento do modelo; custa mais porque mexe no treinamento. Por isso, a decisão racional começa pelo prompt e só avança quando o ganho esperado justifica o investimento. O RAG é uma estratégia complementar, útil quando o problema exige informação externa ao prompt.

## O que vem a seguir

Prompt engineering não é só escrever um texto: envolve pensar em tudo isso. A próxima aula aprofunda as estratégias reais de prompt.
