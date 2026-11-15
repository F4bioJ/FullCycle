# Quizz — Introdução a temperatura

**Capítulo:** 3 - Hands on · **Aula:** 1
**Base:** material da aula

---

## 1. Para "O cachorro hoje latiu no...", o modelo estima: "quintal" 60%, "portão" 25%, "sofá" 10%, "telhado" 5%. O que muda ao subir a temperatura?
- A) "Telhado" e "sofá" passam ao topo do ranking, porque a temperatura alta inverte a ordem das probabilidades.
- B) Entram tokens que estavam fora da distribuição, porque a temperatura alta amplia o vocabulário da escolha.
- C) A distribuição fica mais achatada: "quintal" perde folga, e "sofá" e "telhado" ganham chance de sair.
- D) A distribuição segue igual, e o modelo apenas sorteia mais vezes até encontrar um token diferente.

## 2. Um colega diz: "quando ajusto a temperatura no Playground, estou retreinando um pouco o modelo, e por isso a resposta muda". Onde está o erro?
- A) A temperatura age na escolha do próximo token, e os pesos treinados continuam os mesmos.
- B) A temperatura age na tokenização, quebrando o prompt em pedaços diferentes a cada valor.
- C) A temperatura age na janela de contexto, mudando quantos tokens o modelo pode considerar.
- D) A temperatura age no contexto, acrescentando ao prompt uma instrução oculta de criatividade.

## 3. Um time gera letras de música com temperatura 0,1. O texto sai gramaticalmente correto, mas banal e parecido entre as tentativas. Qual diagnóstico e ajuste seguem da aula?
- A) Faltou pedir criatividade no prompt, porque a temperatura tem pouco efeito antes de o tom ser instruído.
- B) A temperatura baixa favorece os tokens mais prováveis, então vale subir para a faixa de 0,7 a 1,0.
- C) A temperatura baixa favorece os tokens mais prováveis, então vale repetir o prompt até sair algo melhor.
- D) A temperatura baixa espalha a escolha entre muitos tokens, então vale baixar mais para dar identidade ao texto.

## 4. Como na metáfora do especialista na biblioteca, um assistente jurídico em temperatura 1,0 cita um romance no meio de um parecer. O time conclui: "subir a temperatura ensinou o modelo a citar romances". Como avaliar essa conclusão?
- A) Está certa: a temperatura alta acrescenta referências ao modelo, e baixá-la volta a retirá-las.
- B) Está certa em parte: ele não aprendeu, mas a temperatura alta buscou o romance em uma fonte externa.
- C) Está errada: a temperatura não influi na escolha, então a citação veio de algo no prompt do time.
- D) Está errada: o romance já era uma opção do modelo, e a temperatura alta só lhe deu mais chance de sair.

## 5. Em temperatura 0,2, um modelo responde a uma pergunta factual com a mesma informação falsa a cada tentativa. O time baixa para 0,1 esperando resolver. O que é mais provável?
- A) O erro tende a continuar, porque a temperatura muda a escolha entre tokens, mas não acrescenta conhecimento.
- B) O erro tende a sumir, porque a temperatura menor faz o modelo recusar conteúdo de baixa probabilidade.
- C) O erro tende a sumir, porque a menor aleatoriedade faz o modelo conferir os fatos antes de responder.
- D) O erro tende a piorar, porque a temperatura menor leva o modelo a preferir os tokens mais improváveis.

## 6. Sobre a geração do próximo token e o efeito da temperatura, qual afirmação está INCORRETA?
- A) O próximo token pode ser uma palavra inteira, um pedaço de palavra ou um símbolo.
- B) Mesmo em temperatura baixa, a escolha segue probabilidades, e não um cálculo exato da palavra certa.
- C) Em temperatura alta, tokens improváveis ficam mais propensos a sair, sem que o modelo saiba algo novo.
- D) Ao subir a temperatura, o modelo muda o assunto considerado, e é daí que vem a maior variedade.

## 7. Um chatbot que responde sobre regras de reembolso parece "robótico" em temperatura 0,2. O time sobe para 0,9. Qual é a troca esperada?
- A) Ganha naturalidade e pouco mais muda, porque a temperatura age no tom, e não na escolha dos tokens.
- B) Ganha variedade e segue fiel às regras, porque o conhecimento do modelo não muda com a temperatura.
- C) Ganha variedade e perde previsibilidade, com mais risco de a resposta errar as regras de reembolso.
- D) Ganha naturalidade e perde contexto, porque a temperatura alta reduz o espaço da janela para o histórico.

## 8. Para comparar temperaturas no Playground, uma pessoa testa 0,1 com um prompt sobre contratos e 1,0 com um prompt sobre poemas, e conclui que "1,0 é mais criativa". Qual é o problema do teste?
- A) Valores tão distantes não são comparáveis, porque cada um deles usa a distribuição de outro modelo.
- B) A temperatura e o prompt mudaram juntos, então a diferença não pode ser atribuída só à temperatura.
- C) O teste mediu conhecimento, e não criatividade, porque a temperatura 1,0 dá ao modelo palavras novas.
- D) O tom depende do prompt, então o efeito da temperatura na diferença observada foi desprezível.

## 9. Em temperatura alta, um token improvável sai logo no início da resposta, e o texto inteiro toma outro rumo. Qual é o mecanismo?
- A) O token improvável ajusta os pesos da sessão, e a mudança se espalha pelos tokens seguintes.
- B) O token improvável esgota a janela de contexto, e o modelo perde a parte inicial do prompt.
- C) O token improvável eleva a temperatura a cada passo, e a aleatoriedade cresce ao longo do texto.
- D) O token improvável entra no contexto da escolha seguinte, e essa decisão condiciona as próximas.

## 10. Uma empresa padroniza temperatura 0,1 para um gerador de contratos e um gerador de slogans, com o argumento de que "menos aleatoriedade dá mais qualidade". Como avaliar essa decisão?
- A) Serve aos dois, porque um prompt pedindo criatividade já compensa a temperatura baixa nos slogans.
- B) Serve aos contratos e prejudica os slogans, porque cada tarefa pede um perfil de saída diferente.
- C) Prejudica os dois, porque contratos também precisam de variedade para não repetir as mesmas cláusulas.
- D) Serve aos slogans e prejudica os contratos, porque textos curtos ficam melhores no caminho mais provável.
