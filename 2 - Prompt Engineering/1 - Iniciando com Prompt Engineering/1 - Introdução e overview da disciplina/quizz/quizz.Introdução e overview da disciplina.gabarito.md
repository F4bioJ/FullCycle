# Gabarito — Introdução e overview da disciplina

## 1. Frase do prompt alterada sem versionamento
**Correta: C**
**Por quê:** A aula coloca o prompt no mesmo nível do código ("50% é código, 50% é prompt") e avisa que a falta de gestão pode trazer danos irreparáveis. O resumo do professor explica que, sem armazenar e versionar, ficam difíceis a auditoria, o rollback e a comparação entre versões, justamente o que faltou aqui.
- **A:** Um prompt não ajusta os pesos do modelo, como visto no Fundamentos. Por isso não há retreino a fazer: bastaria voltar ao texto anterior, se ele estivesse guardado.
- **B:** O resumo do professor diz o contrário: mudanças pequenas podem alterar significativamente o comportamento da aplicação.
- **D:** Custo e latência são afetados pelo prompt, mas acompanhá-los não diz qual texto estava no ar nem permite voltar a ele. A aula não diz que a queda de qualidade aparece primeiro nesses sinais.
**Conceito:** Prompt como parte do software e versionamento

## 2. Migração para um modelo mais barato
**Correta: A**
**Por quê:** A aula cita exatamente esse uso da avaliação: pegar o mesmo prompt, testá-lo com diversos modelos e ver se o resultado era o esperado. Só isso mostra se o prompt mantém a qualidade no modelo novo.
- **B:** A estimativa de custo informa o gasto, não a qualidade. O mesmo texto pode ter resultados diferentes em modelos diferentes, e por isso a aula manda testar.
- **C:** Comparar variações é o outro uso da avaliação, mas aqui tudo acontece no modelo atual. Sem repetir o teste, nada garante o resultado no modelo mais barato.
- **D:** Custo e latência não dizem se a resposta é a esperada. Além disso, a decisão ficaria para depois de os usuários já receberem o resultado do modelo novo.
**Conceito:** Testabilidade: mesmo prompt em modelos diferentes

## 3. Técnica copiada sem entendimento
**Correta: D**
**Por quê:** O professor afirma que, sem entender a estrutura e o motivo de usar uma técnica, não se consegue tirar resultados decentes. O resumo dele completa: é preciso entender por que cada técnica existe e em que condição funciona melhor.
- **A:** A aula não restringe as técnicas aos modelos em que foram publicadas nem diz que cada modelo exige uma técnica própria. O que ela diz é que um mesmo prompt pode ser testado em vários modelos.
- **B:** O modelo não memoriza conversas de outros projetos: guardar conversas não é treinar, como visto no Fundamentos.
- **C:** O resumo do professor diz que escrever prompt profissional não significa apenas escolher boas palavras. O valor está em compreender o mecanismo por trás da instrução.
**Conceito:** Técnicas de prompt: entender o porquê

## 4. Documentação genérica
**Correta: B**
**Por quê:** O professor observa que muitos desenvolvedores não têm clareza das variações de documentação. O resumo dele diz que os design docs exigem prompts que orientem objetivo, profundidade e formato, e que sem essa clareza a IA tende a produzir texto genérico.
- **A:** O problema é um pedido sem direção. Texto genérico não indica falta de janela de contexto, e um modelo maior receberia o mesmo pedido vago.
- **C:** Pedir tudo de uma vez não dá direção a nenhum documento. Além disso, deixa para depois justamente a decisão sobre o tipo de documento, que a aula pede para ter clara desde o início.
- **D:** Repetir o pedido gera variações do mesmo texto sem direção. O ganho real, segundo o resumo do professor, está em estruturar a demanda.
**Conceito:** Design docs: estruturar o pedido de documentação

## 5. Fatura e latência depois de mudar o prompt
**Correta: C**
**Por quê:** A aula diz que o que está em volta de Prompt Engineering afeta diretamente custo, qualidade e latência. O resumo do professor dá o mecanismo: instruções mal desenhadas podem gerar respostas longas demais e execuções mais lentas, elevando o gasto.
- **A:** É a separação que a aula desfaz: o prompt afeta custo e latência, e não apenas a qualidade.
- **B:** Um prompt não muda os pesos do modelo, então não há reaprendizado em andamento nem custo que caia sozinho.
- **D:** A resposta também pesa na conta e no tempo. Encurtar o texto do prompt pode não resolver, porque o problema pode estar em respostas longas demais.
**Conceito:** Efeito do prompt em custo e latência
