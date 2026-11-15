# Gabarito — Uma simples correção de Bug

## 1. PR grande por proatividade da IA atrasa code review do bugfix urgente.
**Correta: A**
**Por quê:** O problema central da aula é operacional: o desvio de escopo da PR transforma uma revisão de 5 minutos em um dia de trabalho, bloqueando a entrega do bugfix urgente. A qualidade técnica do código gerado não é o gargalo; o custo cognitivo e o tempo do revisor são.
- **B:** A aula afirma explicitamente que o código ficou 'top', testes passam e não há bugs novos. A dívida técnica não é o argumento.
- **C:** O custo de tokens não é mencionado como fator limitante no cenário; o foco é o processo humano de revisão.
- **D:** A aula não cita alucinações na documentação como consequência; o exemplo descreve melhorias reais, porém fora de escopo.
**Conceito:** Impacto operacional da proatividade excessiva

## 2. Ausência de fronteiras faz modelo probabilístico preencher espaço com melhorias colaterais.
**Correta: A**
**Por quê:** A aula explica que modelos tentam ser úteis e, sem barreiras, interpretam a ambiguidade como liberdade para agir proativamente. É a natureza probabilística de 'preencher o vazio' com o que parece bom, não uma configuração técnica oculta ou instrução mágica.
- **B:** A aula atribui a mudança de comportamento à versão do modelo (Sonnet 3 vs 4), não a um parâmetro *temperature* fixo e inalterável exposto ao usuário.
- **C:** A instrução 'entenda o problema' não ativa modo obrigatório de refatoração total; isso é uma invenção do distrator.
- **D:** Não existe menção a *system prompt* global da IDE configurando Clean Code na aula.
**Conceito:** Mecanismo da proatividade não solicitada

## 3. Barreira eficaz proíbe ações fora do escopo (refatorar, outros arquivos, testes extras).
**Correta: B**
**Por quê:** A aula lista explicitamente proibições ('não refatore', 'não altere arquivos fora do escopo', 'não reescreva testes') como exemplos de barreiras que restringem a atuação do modelo ao escopo estrito do bug.
- **A:** Pedir boas práticas *incentiva* a proatividade excessiva (refatoração) que a barreira visa evitar.
- **C:** Análise de histórico é etapa de entendimento, não uma restrição de escopo de atuação (barreira).
- **D:** É o oposto da barreira: pede explicitamente a proatividade desenfreada que causou o problema.
**Conceito:** Barreira de comportamento

## 4. Sem formato definido, modelo inventa entrega e embute mudanças extras 'úteis'.
**Correta: D**
**Por quê:** O professor diz: 'Se você não especifica como você quer a saída, ele vai gerar a saída da cabeça dele... e pode embutir mudanças extras porque considera isso útil'. A saída definida funciona como 'contrato de entrega' que complementa as barreiras.
- **A:** A aula assume contexto de geração de código/patch; linguagem natural pura não é o risco citado.
- **B:** Diff binário é cenário absurdo não citado na aula.
- **C:** Incompatibilidade com CI/CD não é mencionada; o risco é escopo, não formato técnico de arquivo.
**Conceito:** Formato de saída como contrato

## 5. Barreiras e saída definida estabilizam resultado independentemente da versão do modelo.
**Correta: B**
**Por quê:** A aula ensina que 'estruturação intencional serve justamente para reduzir essa dependência do temperamento do modelo'. Fixar versão não escala, e forçar persona não é robusto; barreiras estruturais são a solução proposta.
- **A:** Fixar versão não é a lição; a lição é tornar o prompt robusto à troca de versão.
- **C:** A aula não diz que modelos novos são 'piores', apenas que o comportamento muda; a solução é prompt estruturado, não voltar ao modelo antigo.
- **D:** Forçar persona é frágil e não substitui barreiras operacionais explícitas.
**Conceito:** Robustez a variações de versão

## 6. PR pequena não é estética; é necessidade operacional de revisão rápida e baixo custo cognitivo.
**Correta: C**
**Por quê:** O professor afirma explicitamente: 'Uma PR pequena não é só uma preferência estética; ela preserva a capacidade de revisão rápida e reduz o custo cognitivo do time'. É necessidade operacional, não estética.
- **A:** Correta segundo a aula: não elimina probabilismo, mas melhora previsibilidade.
- **B:** Correta segundo a aula: limites diminuem mudanças laterais e alinham review ao objetivo.
- **D:** Correta segundo a aula: preserva revisão rápida e reduz custo cognitivo.
**Conceito:** PR pequena como necessidade operacional

## 7. Orada: 1. Bug objetivo. 2. Barreiras (proibições). 3. Saída (patch mínimo, arquivos, justificativa).
**Correta: A**
**Por quê:** O passo a passo prático da aula lista: 1) Descrever o bug de forma objetiva e localizável; 2) Impor barreira de comportamento; 3) Declarar a saída esperada. A ordem lógica é problema -> restrições -> contrato de entrega.
- **B:** Inclui 'contexto geral' (não citado como bloco obrigatório) e 'refatoração opcional' (proibido pelas barreiras).
- **C:** Inverte a ordem; o modelo precisa do problema primeiro para aplicar as barreiras corretamente.
- **D:** Barreiras genéricas não servem; devem ser específicas do escopo. Formato livre contradiz a aula.
**Conceito:** Estrutura do prompt para bugfix

## 8. Estruturação não garante 100%, mas melhora previsibilidade do escopo, reduzindo atrito no pipeline.
**Correta: B**
**Por quê:** A aula conclui: 'Isso não elimina completamente o comportamento probabilístico da IA, mas melhora bastante a previsibilidade entre execuções e entre versões de modelo. Em ambientes de engenharia, esse ganho de previsibilidade vale mais do que uma refatoração não solicitada.'
- **A:** Code review humano continua necessário; a estruturação só o torna mais rápido/previsível.
- **C:** Contradiz a natureza probabilística; não torna o sistema determinístico.
- **D:** Contradiz 'nunca vai conseguir garantir absolutamente nada'.
**Conceito:** Valor da previsibilidade vs garantia

## 9. Ambiguidade operacional: resposta tecnicamente correta que quebra o workflow (escopo/processo).
**Correta: D**
**Por quê:** O resumo do professor diz: 'A ambiguidade já foi tratada anteriormente; aqui, ela aparece como falha operacional... O resultado pode até parecer tecnicamente melhor, mas operacionalmente piora o fluxo da equipe.' A IA acerta o código (semântica), mas erra o processo (operacional).
- **A:** Ambiguidade semântica ocorre em código e linguagem natural; a distinção não é de domínio.
- **B:** A aula não menciona *temperature* ou *few-shot* como soluções; a solução é estrutura do prompt (barreiras/saída).
- **C:** Verbosidade é sintoma, não a definição da falha operacional (que é desvio de escopo/processo).
**Conceito:** Ambiguidade semântica vs operacional

## 10. Falha esporádica (ex: 10%) é ruído probabilístico aceitável; estruturação reduziu drasticamente a frequência vs ausência de barreiras.
**Correta: C**
**Por quê:** A aula ensina que 'não há garantias absolutas' mas a estruturação 'melhora bastante a previsibilidade'. O ganho é a redução drástica da frequência do erro (de 'sempre/quase sempre' para 'raro'), não a eliminação total. Aceitar o risco residual é parte da engenharia com IA.
- **A:** Linguagem agressiva ('NUNCA') é vício de prompt; a aula prega barreiras claras, não gritaria. 10% de falha não indica falha total da barreira.
- **B:** Não é bug do modelo; é natureza probabilística esperada.
- **D:** Conclusão oposta à aula: a estruturação *vale a pena* exatamente por reduzir o problema, mesmo sem perfeição.
**Conceito:** Gestão de risco probabilístico residual
