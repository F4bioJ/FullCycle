# Gabarito — LLMs (avançado)

## 1. Por que −∞ na máscara causal
**Correta: D**
**Por quê:** O softmax usa exponenciais. exp(−∞) = 0, então a posição futura recebe peso exatamente zero, e os pesos restantes continuam somando 1. Um 0 na pontuação daria exp(0) = 1, um peso positivo para o futuro.
- **A:** o valor da máscara não tem relação com desvanecimento de gradiente.
- **B:** o problema do 0 não é "dar mais peso ao futuro": é dar algum peso, o que vaza informação.
- **C:** as pontuações de atenção podem ser negativas ou positivas, e o problema do 0 não depende do tipo de pilha.
**Seção:** 3. Pré-treinamento: dois objetivos diferentes (3.1)
**Conceito:** Máscara causal

## 2. Treino paralelo, geração sequencial
**Correta: B**
**Por quê:** Com a máscara, cada posição só vê o passado e prevê o próximo token. Todas as posições treinam em paralelo, como se cada uma fosse um passo da geração. Na inferência, o token gerado volta como entrada, e por isso a geração é um por vez.
- **A:** o treino não gera o texto inteiro antes; usa a sequência real como entrada.
- **C:** o paralelismo vem de uma única passada com máscara, não de passadas separadas.
- **D:** a atenção bidirecional deixaria as posições verem a resposta; a máscara é aplicada no treino.
**Seção:** 3. Pré-treinamento: dois objetivos diferentes (3.1)
**Conceito:** Paralelismo de treino × geração sequencial

## 3. Por que o BERT usa mascaramento
**Correta: A**
**Por quê:** Com atenção nos dois lados, a posição enxergaria o próprio token seguinte na entrada. Por isso o BERT usa o Masked Language Model: esconde tokens e prevê o original com o contexto dos dois lados.
- **B:** o motivo é a informação vazada, não memória.
- **C:** o objetivo não depende do tipo de tokenização.
- **D:** o objetivo de treino não foi escolhido por falta de dados; foi escolhido por causa do mecanismo de atenção.
**Seção:** 3. Pré-treinamento: dois objetivos diferentes (3.2)
**Conceito:** Masked Language Model

## 4. Rankings no InstructGPT
**Correta: C**
**Por quê:** O InstructGPT tem três etapas: fine-tuning supervisionado com demonstrações, treino de um modelo de recompensa a partir dos rankings e aprendizado por reforço (PPO) usando a nota desse modelo. Os rankings não entram direto no reforço.
- **A:** é o erro de pular o modelo de recompensa.
- **B:** o fine-tuning inicial usa demonstrações escritas por rotuladores, não rankings.
- **D:** os rankings são de respostas do modelo, coletados depois do pré-treinamento.
**Seção:** 4. Fine-tuning e RLHF
**Conceito:** Modelo de recompensa no RLHF

## 5. RLHF e aprendizado contínuo
**Correta: B**
**Por quê:** O RLHF é uma fase de treino com data de término. O modelo implantado tem pesos fixos; as conversas não os atualizam sem um novo ciclo de treino.
- **A:** não há exigência de formato de livros.
- **C:** o RLHF atua justamente sobre o comportamento gerado.
- **D:** o problema não é falta de pré-treinamento, e sim que o modelo implantado não aprende com o uso.
**Seção:** 4. Fine-tuning e RLHF
**Conceito:** RLHF como fase de treino

## 6. Few-shot e zero-shot
**Correta: D**
**Por quê:** Nos dois casos, a tarefa é descrita no prompt e nenhum peso é atualizado (in-context learning). Few-shot acrescenta demonstrações; zero-shot tem só a instrução em linguagem natural.
- **A:** não há ajuste de pesos em nenhum dos regimes.
- **B:** o zero-shot mantém a instrução; o que falta são as demonstrações.
- **C:** o few-shot é feito no prompt; não é fine-tuning.
**Seção:** 5. Few-shot, zero-shot e o que "emerge"
**Conceito:** In-context learning

## 7. Escala × veracidade
**Correta: A**
**Por quê:** A escala reduz a perda de linguagem, ou seja, melhora a previsão estatística do próximo token. Um texto fluente e falso pode ter perda baixa, então melhorar a modelagem não garante fatos corretos.
- **B:** a perda segue uma lei de potência, não chega a zero com mais parâmetros, e menos perda não é veracidade.
- **C:** o RLHF alinha o modelo às preferências, mas não o transforma em verificador de fontes.
- **D:** as leis de escala descrevem a perda de linguagem, que é a base da geração.
**Seção:** 6. Escala e desempenho
**Conceito:** Escala × veracidade

## 8. Afirmação incorreta sobre as famílias
**Correta: C**
**Por quê:** Multimodal descreve o que entra e sai do modelo, e não o objetivo de treino. O relatório do Gemini descreve decoders Transformer, que geram em sequência. As duas propriedades convivem.
- **A:** verdadeira.
- **B:** verdadeira.
- **D:** verdadeira: o modelo gera uma distribuição de probabilidade sobre os tokens do vocabulário, e a escolha do token vem depois.
**Seção:** 7. Famílias e licenças; 2. Os blocos: o que a aula listou e o que faltou (para a alternativa D)
**Conceito:** Multimodal × autoregressivo

## 9. Licença de pesos abertos
**Correta: B**
**Por quê:** Pesos publicados costumam vir com licença própria e restrições de uso (pesos abertos não são o mesmo que open source). Antes de embutir em produto, leia os termos.
- **A:** mesmo que a licença trate da redistribuição, ela também limita o uso; assumir o contrário sem ler os termos não é prudente.
- **C:** as condições vêm do texto da licença, não do tamanho do modelo.
- **D:** a licença dos pesos é própria e não segue automaticamente a dos dados de treino.
**Seção:** 7. Famílias e licenças
**Conceito:** Pesos abertos × open source

## 10. Origem do paralelismo do Transformer
**Correta: A**
**Por quê:** A atenção calcula todas as posições de uma vez, sem depender do passo anterior. A RNN precisa esperar o estado da posição anterior. As camadas feedforward dão profundidade e não linearidade, e rodam por posição.
- **B:** o feedforward não divide a sequência em blocos; é a aplicação por posição.
- **C:** a atenção compara cada token com todos os outros, em vez de comprimir o histórico em um vetor.
- **D:** as conexões residuais ajudam a treinar pilhas profundas, e não reduzem passos de cálculo.
**Seção:** O que a aula simplificou
**Conceito:** Atenção × recorrência (paralelismo)
