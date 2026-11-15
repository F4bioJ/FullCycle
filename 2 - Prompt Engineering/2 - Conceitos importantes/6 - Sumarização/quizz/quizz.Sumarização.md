# Quizz — Sumarização

**Capítulo:** 2 - Conceitos importantes · **Aula:** 6
**Base:** material da aula

---

## 1. Um sistema de chat com janela de contexto de 8k tokens atinge 7.5k tokens após 20 interações. O engenheiro implementa sumarização automática disparada a 70% da janela. Qual é o principal risco que permanece mesmo após a sumarização bem-sucedida?
- A) O modelo de sumarização pode introduzir informações que nunca estiveram no histórico original.
- B) A reinjeção do resumo no início da conversa consome mais tokens do que o histórico original truncado.
- C) O monitoramento contínuo de tokens adiciona latência suficiente para tornar a conversa inviável em tempo real.
- D) O resumo pode omitir exceções e detalhes finos que seriam necessários para resolver ambiguidades nas próximas interações.

## 2. Por que a aula recomenda usar um modelo mais barato para gerar o resumo do histórico, em vez do mesmo modelo caro usado na tarefa principal?
- A) Sumarizar informação já existente exige menos capacidade de raciocínio do que resolver o problema principal, então modelo mais barato basta.
- B) A API de modelos caros não permite o parâmetro de temperatura baixa necessário para sumarização fiel.
- C) Modelos caros são otimizados para geração criativa e produzem resumos verbosos que não cabem na janela de contexto.
- D) Modelos caros têm janela de contexto menor e não conseguem processar históricos longos para sumarizar.

## 3. O sistema detecta que o histórico de uma conversa de codificação atingiu o limite e dispara sumarização automática. O resumo gerado é salvo no banco de dados. Na próxima sessão, o sistema injeta esse resumo no lugar das mensagens antigas. Qual afirmação sobre esse fluxo está INCORRETA?
- A) Evita recomputar o mesmo resumo a cada nova interação da mesma conversa.
- B) Simplifica a reconstrução do estado conversacional entre sessões.
- C) Garante que o modelo nunca alucine, pois o resumo preserva toda a informação essencial do histórico.
- D) Transforma a sumarização em parte do ciclo normal de gerenciamento de contexto, não evento manual.

## 4. Um engenheiro usa o mesmo prompt "Resuma o histórico abaixo mantendo os pontos principais" tanto para condensar o histórico de um chat de suporte técnico quanto para resumir um livro técnico de 300 páginas injetado no contexto. O resultado no chat de suporte é útil; no livro, o resumo omite decisões arquiteturais críticas. Por que a estratégia falhou para o livro?
- A) Livros têm tokens demais e o modelo de sumarização trunca silenciosamente a entrada antes de resumir.
- B) Critérios de relevância, granularidade e fidelidade diferem entre domínio conversacional e domínio de livro técnico; prompt único não captura essa diferença.
- C) Modelos não conseguem resumir textos que não sejam diálogos; a arquitetura de atenção falha em narrativas contínuas.
- D) O prompt deveria ter incluído a temperatura 0 para garantir determinismo no resumo do livro.

## 5. Comparando truncamento e sumarização como estratégias de gerenciamento de janela de contexto: qual troca melhor descreve a decisão de engenharia?
- A) Truncamento preserva detalhes recentes perfeitamente mas perde continuidade temática; sumarização preserva continuidade temática mas perde detalhes finos e exceções.
- B) Truncamento funciona só em diálogos; sumarização funciona em qualquer tipo de texto incluindo código e documentação.
- C) Sumarização permite janela de contexto ilimitada; truncamento limita o histórico a tamanho fixo imutável.
- D) Truncamento é mais barato computacionalmente; sumarização exige chamada extra de LLM mas garante zero perda de informação.
