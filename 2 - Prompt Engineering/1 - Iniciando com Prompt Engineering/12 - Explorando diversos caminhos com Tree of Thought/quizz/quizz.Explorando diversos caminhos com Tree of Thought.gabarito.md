# Gabarito — Explorando diversos caminhos com Tree of Thought

## 1. Self-consistency × Tree of Thought numa escolha entre abordagens
**Correta: C**
**Por quê:** no ToT, os caminhos são alternativas diferentes, cada uma desenvolvida num ramo, e a escolha segue um critério que normalmente vai no prompt ("esse é o ponto", diz o professor). No self-consistency, o modelo repete o raciocínio várias vezes e fica com a resposta mais consistente, a da maioria na aula anterior.
- **A:** inverte as técnicas: quem compara por critério é o ToT, e quem vota é o self-consistency.
- **B:** o ToT não escolhe pela maioria. A escolha segue o critério declarado, e os ramos são alternativas distintas, não repetições.
- **D:** a aula anterior diz que o self-consistency ajuda na dúvida sobre uma decisão técnica, mas o ToT também termina numa decisão: tomar a decisão final está entre os usos, e os dois prompts pedem a escolha da melhor opção.
**Conceito:** diferença entre ToT e self-consistency

## 2. Prompt de ToT sem critério
**Correta: A**
**Por quê:** o professor diz que, no ToT, normalmente se coloca o critério do que é melhor, e que esse é o ponto. O resumo do professor acrescenta que, sem critério explícito, a árvore vira apenas verbosidade organizada.
- **B:** ramos parecidos são uma limitação real da técnica, mas a aula não a liga à falta de critério, e "idênticos" vai além do que se diz: o modelo às vezes segue linhas de raciocínio parecidas.
- **C:** o prompt pede três opções desenvolvidas, então a árvore é gerada. O que falta é base para escolher entre os ramos.
- **D:** a escolha pela maioria é do self-consistency. Três opções de deploy diferentes não formam uma maioria, e a aula não diz que o ToT recorre a votação.
**Conceito:** critério de escolha explícito

## 3. Ramos que repetem a mesma ideia
**Correta: D**
**Por quê:** as três "causas" são variações do banco de dados. A aula lista como limitação que é difícil garantir ramos realmente distintos, porque o modelo às vezes segue linhas de raciocínio parecidas, e diz que a técnica precisa de instruções bem claras para funcionar bem.
- **A:** o critério serve para escolher entre os ramos, não para gerá-los. Trocá-lo mudaria a escolha, não a variedade das causas.
- **B:** a aula diz que se podem pedir mais opções, mas não que isso garanta variedade. Mais ramos parecidos aumentam a repetição e o gasto de tokens.
- **C:** confunde ToT com self-consistency, e a aula anterior já mostrou que consistência não é prova. Aqui nem há convergência: são três ramos que deveriam ser alternativas e não foram.
**Conceito:** ramos pouco distintos

## 4. A frase "pense como um Tree of Thought"
**Correta: B**
**Por quê:** o professor diz que escreveu a frase para deixar registrado no exemplo e que não é preciso colocá-la explicitamente. O que gera a árvore é a estrutura do prompt: pelo menos três causas, um raciocínio para cada uma, a comparação dos branches e a escolha da mais plausível.
- **A:** a técnica não depende do nome. O professor diz que a frase não é necessária.
- **C:** o GPT-4o não é um modelo de reasoning por padrão (aula 2.1.10), e a aula não diz que a frase muda o resultado conforme o modelo.
- **D:** a comparação é pedida no próprio prompt ("depois compare esses branches"), não vem do nome da técnica.
**Conceito:** a estrutura do prompt monta a árvore

## 5. Comparação completa ou só a resposta final
**Correta: B**
**Por quê:** pelo resumo do professor, a comparação completa é mais auditável e mais longa, e depuração e brainstorming pedem visibilidade. Só a resposta final deixa a saída enxuta, e uma integração em produção muitas vezes pede só a decisão consolidada.
- **A:** no brainstorming, o valor está em ver as opções e a comparação. Cortar a saída ali tira o que a sessão precisa.
- **C:** a integração não precisa da comparação para gravar a opção. O prompt 3 existe justamente para entregar só a resposta final.
- **D:** inverte os usos: visibilidade é o que o brainstorming pede, e a integração precisa só da decisão.
**Conceito:** controle de saída

## 6. Prompt de 94 tokens, resposta enorme
**Correta: D**
**Por quê:** o professor destaca que o prompt tinha só 94 tokens de entrada e gerou respostas desse nível. O resumo do professor conclui que o custo não depende só do tamanho do input, mas da estrutura de raciocínio pedida e do volume de output gerado.
- **A:** a conta inclui a saída, e a técnica gasta mais tokens justamente porque gera vários ramos e a comparação.
- **B:** o exemplo mostra o oposto: a saída não acompanha a entrada. Um prompt curto pediu uma estrutura grande.
- **C:** a primeira parte é coerente com a aula, mas ela não diz que o custo cai com um modelo mais forte. O GPT-4o também produziu uma resposta longa.
**Conceito:** custo depende da saída pedida

## 7. Limitações do ToT (INCORRETA)
**Correta: A**
**Por quê:** é a afirmação incorreta. A aula diz que é difícil garantir que os ramos sejam completamente distintos, porque às vezes o modelo segue linhas de raciocínio bem parecidas. O critério orienta a escolha entre os ramos e não garante a diversidade deles.
- **B:** correta: resposta longa e complexa e mais gasto de tokens estão entre as limitações.
- **C:** correta: o professor diz que a resposta pode ficar repetitiva por causa dos ramos parecidos.
- **D:** correta: a técnica precisa de instruções bem claras, e o resumo do professor diz que prompts vagos geram árvores pobres ou redundantes.
**Conceito:** limitações do ToT

## 8. Banco de dados como hipótese mais plausível
**Correta: C**
**Por quê:** o prompt pede a hipótese mais plausível e a próxima ação para depurar. O modelo priorizou o banco por ser uma causa comum e recomendou começar a investigação por ele, usando as verificações do ramo (tempo das queries, plano de execução, índices).
- **A:** o modelo não mediu nada. Escolheu pela plausibilidade, então a escolha ainda precisa ser verificada.
- **B:** a aula fala em escolher a hipótese mais plausível e por onde começar, não em descartar as outras. Os outros ramos também trazem como verificá-los.
- **D:** cada ramo trouxe uma causa diferente (banco, rede e código), então não houve maioria. Votação é do self-consistency.
**Conceito:** escolha por plausibilidade ≠ diagnóstico

## 9. Serverless, mas "depende"
**Correta: B**
**Por quê:** o professor concorda com a resposta, mas diz que depende e que falta muita coisa no prompt para uma decisão real. O valor está em tornar explícito por que uma alternativa foi preferida pelos critérios dados, não em a resposta final ser sempre correta.
- **A:** o professor concordou com a escolha. O ponto dele é que faltam informações no prompt, não que outra arquitetura fosse a certa.
- **C:** critérios explícitos tornam a escolha justificável, mas a decisão ainda depende do contexto que o prompt traz, e o professor diz que esse contexto faltava.
- **D:** o próprio modelo apontou limites do serverless (cotas, duração e custo que cresce nos picos). A aula não diz que ele tende a vencer.
**Conceito:** a decisão depende do contexto do prompt

## 10. Sub-ramos no prompt da latência
**Correta: A**
**Por quê:** cada causa é um ramo. O prompt pede, para cada uma, uma linha de raciocínio passo a passo sobre como chegou nela e como verificá-la. É esse desdobramento dentro de cada ramo que forma as subcamadas da árvore: o "raciocínio do raciocínio", nas palavras do professor.
- **B:** as três causas são os ramos (branches), o primeiro nível da árvore, não os sub-ramos.
- **C:** a comparação acontece depois da árvore montada: é o momento da escolha, não um desdobramento de um ramo.
- **D:** repetir o mesmo raciocínio e comparar as respostas é o self-consistency, não um nível da árvore do ToT.
**Conceito:** ramos e sub-ramos
