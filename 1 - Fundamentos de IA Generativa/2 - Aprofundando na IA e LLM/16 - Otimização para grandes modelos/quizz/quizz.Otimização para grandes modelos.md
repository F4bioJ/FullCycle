# Quizz — Otimização para grandes modelos

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 16
**Base:** material da aula

---

## 1. Uma empresa brasileira quer adaptar o Llama 2 para atendimento jurídico em português, sem verba para um fine tuning completo. O que o LoRA faz para tornar isso viável?
- A) Converte os pesos do modelo para INT4, o que barateia cada rodada do treino.
- B) Congela os pesos originais e treina só camadas leves de baixa complexidade adicionadas.
- C) Divide o modelo em especialistas e treina apenas o que cuida dos textos jurídicos.
- D) Retreina todos os pesos, mas com uma base jurídica menor e menos rodadas de treino.

## 2. Sobre o LoRA, qual afirmação está INCORRETA?
- A) Os pesos originais do modelo ficam congelados durante todo o ajuste.
- B) Tende a diminuir o risco de sobreajuste em relação ao ajuste completo.
- C) Sai praticamente sem custo, então dispensa verba para o treino.
- D) Só as camadas low rank adicionadas recebem treino no processo.

## 3. Um desenvolvedor quer rodar o Mistral 7B, de uns 13 GB, num notebook comum, sem GPU dedicada. Pela aula, qual caminho e qual o preço a pagar?
- A) Quantizar para INT4, levando o modelo a uns 4 GB, com alguma perda de qualidade.
- B) Fazer um fine tuning com LoRA, que congela os pesos e alivia a memória do notebook.
- C) Quantizar para INT4, que reduz o tamanho e mantém a qualidade, mas deixa a execução lenta.
- D) Usar Prefix Tuning, que troca parte dos pesos por tokens treinados e alivia a memória.

## 4. Por que um modelo quantizado ocupa menos memória e roda mais rápido?
- A) Ele é compactado como um zip e descompactado na hora de processar cada pedido.
- B) Só uma parte dos submodelos trabalha a cada entrada, conforme o roteador decide.
- C) Os pesos menos importantes são apagados, e o modelo passa a ter menos parâmetros.
- D) Cada peso, antes em ponto flutuante, passa a ser guardado num formato com menos bits.

## 5. Uma equipe quantizou seu modelo para INT4, e ele passou a rodar num servidor modesto, mas as respostas ficaram um pouco piores. Qual a leitura mais provável e o ajuste a testar?
- A) A conversão falhou, porque passar para INT4 não deveria mudar as respostas; refazê-la.
- B) É a perda de precisão esperada da quantização; testar INT8, mais pesado e mais fiel.
- C) O roteador passou a ativar menos especialistas; aumentar o número de experts ativos.
- D) Faltou um fine tuning após quantizar; um ajuste com LoRA devolve a precisão original.

## 6. Uma startup com pouca verba quer especializar um modelo aberto para o jurídico e depois servi-lo em máquinas com pouca memória. Qual combinação da aula faz sentido?
- A) MoE para especializar no jurídico e Prefix Tuning para caber na pouca memória.
- B) Quantização para especializar no jurídico e LoRA para rodar com pouca memória.
- C) Fine tuning completo para especializar e quantização para rodar com pouca memória.
- D) LoRA para especializar com pouco custo e quantização para rodar com pouca memória.

## 7. Quantização e MoE barateiam a inferência. Qual a diferença no modo como cada um faz isso?
- A) A quantização deixa cada peso mais leve; o MoE põe só parte do modelo para trabalhar por entrada.
- B) A quantização desliga as partes pouco usadas; o MoE converte os pesos para inteiros menores.
- C) A quantização barateia o fine tuning; o MoE barateia a adaptação do modelo a tarefas novas.
- D) A quantização mantém a precisão dos pesos; o MoE aceita perder precisão em troca de escala.

## 8. Vários times usam o mesmo modelo, e a regra é que ele fique exatamente como está: nenhum peso alterado e nenhuma camada nova. Um time precisa especializar o comportamento para uma tarefa. Qual técnica da aula atende à regra?
- A) LoRA, porque os pesos originais ficam congelados e, assim, o modelo não é alterado.
- B) Quantização para INT8, que adapta o modelo à tarefa sem retreinar nenhum dos pesos.
- C) P-Tuning, que insere na entrada vetores aprendidos e deixa o modelo como ele está.
- D) MoE, que ativa só o especialista daquela tarefa e mantém os demais sem alteração.

## 9. Em que P-Tuning e Prefix Tuning diferem de escrever à mão um prompt bem detalhado?
- A) O contexto inserido na entrada é aprendido em treino, como vetores ou tokens, e não redigido.
- B) Eles mudam o modelo de forma permanente, enquanto o prompt manual vale para um pedido.
- C) Eles fazem um fine tuning parcial, como o LoRA, mas em menos camadas do modelo.
- D) Eles usam um roteador que escolhe, a cada pedido, o melhor prompt de uma lista pronta.

## 10. Qual associação entre problema e técnica está INCORRETA?
- A) Especializar um modelo num domínio com pouca verba de treino → LoRA.
- B) Escalar um modelo enorme sem ativá-lo inteiro a cada pedido → MoE.
- C) Adaptar o comportamento a uma tarefa sem tocar nos pesos → Prefix Tuning.
- D) Fazer um modelo de 13 GB caber num notebook comum → Prefix Tuning.
