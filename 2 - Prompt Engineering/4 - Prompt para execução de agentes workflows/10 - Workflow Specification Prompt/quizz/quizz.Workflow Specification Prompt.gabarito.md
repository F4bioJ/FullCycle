# Gabarito — Workflow Specification Prompt

## 1. Disparo dos agentes no prompt do orquestrador
**Correta: C**
**Por quê:** O comando separa os papéis: o Claude Code é o coordenador, que decide quando cada agente começa e os dispara; o orquestrador só faz o setup (fase 1), a síntese (fase 4) e o tracking no manifesto. As restrições críticas dizem para nunca dar o fluxo completo ao orquestrador e que ele não deve gerar subagentes.
- **A:** É a confusão que o prompt tenta evitar: apesar do nome, o orquestrador não coordena; quem coordena é o Claude Code.
- **B:** A fase 2 roda em paralelo justamente porque auditoria de dependências e análise de arquitetura não dependem uma da outra.
- **D:** O orquestrador atua nas fases 1 e 4; quem grava o README na fase 5 é o Claude Code.
**Conceito:** coordenador × orquestrador

## 2. Manifesto como fonte da verdade
**Correta: A**
**Por quê:** O manifesto é o registro do que foi concluído (título, caminho absoluto, agente, timestamp), atualizado a cada task terminada. Montar o índice a partir dele evita depender do que o coordenador supõe ou lembra ter gerado; o comando ainda pede para validar cada link.
- **B:** Os subagentes têm janelas de contexto isoladas (aula 2.4.7) e se comunicam por input e output; o manifesto registra estado, não compartilha contexto.
- **C:** O comando proíbe informar tempo de duração; o manifesto não guarda isso.
- **D:** Não há geração automática: na fase 5 o Claude Code lê o manifesto, valida os arquivos e grava o README porque o prompt manda.
**Conceito:** manifest.md como fonte da verdade

## 3. Antecipar a análise de componentes
**Correta: D**
**Por quê:** A fase 3 depende do relatório de arquitetura, que lista os componentes e é tratado como artefato. Sem ele pronto, o coordenador não sabe quais componentes cobrir, então essa etapa é dependente, não paralela à fase 2.
- **A:** A aula não fala de limite de dois agentes; na fase 3 podem subir 10 agentes em paralelo.
- **B:** Causa certa no relatório errado: a lista vem da arquitetura, não do auditor de dependências.
- **C:** A fase 4 vem depois da fase 3; a síntese consolida os relatórios de componentes, não os antecede.
**Conceito:** dependência entre fases 2 e 3

## 4. Cobertura incompleta na fase 3
**Correta: B**
**Por quê:** O comando manda reabrir o relatório de arquitetura, rever as seções de componentes linha por linha e, para cada componente sem relatório, disparar mais um agente de análise até a cobertura chegar a 100%, sem duplicar relatórios.
- **A:** A regra é cobertura total: nenhum componente pode ser pulado.
- **C:** Rodar tudo de novo gera relatórios duplicados, que o comando manda evitar com verificação precisa.
- **D:** O orquestrador não analisa componentes nem chama agentes; na fase 4 ele só consolida o que existe.
**Conceito:** reverificação de cobertura

## 5. Uso do ULTRATHINK
**Correta: C**
**Por quê:** O professor usou ULTRATHINK na checagem de duplicidade: já lhe aconteceu de o modelo ver relatórios com data e hora no nome, achar que um relatório não existia e duplicá-lo. A palavra-chave força uma verificação mais cuidadosa de nomes parecidos e timestamps.
- **A:** O paralelismo da fase 2 é pedido explicitamente ("em paralelo"), não com ULTRATHINK.
- **B:** A IA é probabilística (aula 2.4.7): nada no prompt torna o fluxo determinístico; as fases e reforços aumentam as chances de ele ser seguido.
- **D:** A aula não liga o ULTRATHINK à criação do manifesto na fase 1.
**Conceito:** ULTRATHINK contra duplicidade

## 6. Coordenador que adia a atualização do manifesto
**Correta: D**
**Por quê:** O professor diz que nem sempre o Claude trabalha dessa forma (às vezes espera terminar os relatórios para sintetizar) e que, se o comportamento incomoda, a saída é ser ainda mais específico naquele ponto. Foi o que ele fez com o exemplo do Architecture Analyzer e com o de 10 componentes.
- **A:** O desvio é efeito da natureza probabilística, não prova de que o modelo não suporta fases; a aula propõe ajustar o prompt.
- **B:** Contraria a regra do comando: só o orquestrador grava no manifesto; o Claude Code não o altera.
- **C:** A aula não liga o adiamento ao paralelismo, e a fase 2 é paralela por desenho.
**Conceito:** ser mais específico quando o modelo desvia

## 7. Relatório raso com prompt de especialista bom
**Correta: A**
**Por quê:** O professor aponta como o passo mais importante: o coordenador precisa pensar passo a passo a mensagem de cada invocação e passar todo o contexto necessário; uma mensagem vaga faz o agente não cumprir bem o trabalho, mesmo com um bom prompt de base.
- **B:** O subagente não herda o contexto do agente principal: as janelas são isoladas, e é por isso que a mensagem de invocação precisa carregar o contexto.
- **C:** O agente recebe o componente pela invocação do coordenador; o manifesto registra conclusões, não distribui tarefas.
- **D:** O ULTRATHINK foi usado na verificação de duplicidade e na reflexão do coordenador; a aula não o trata como o que garante profundidade no especialista.
**Conceito:** passagem de contexto na invocação

## 8. Parâmetros de execução (INCORRETA)
**Correta: C**
**Por quê:** É a incorreta: a fase 1 manda ler a lista de pastas ignoradas antes de escanear e nunca escanear essas pastas. Não basta filtrar os achados depois.
- **A:** Correta: é o caso do monorepo citado na aula.
- **B:** Correta: sem o parâmetro, usam-se as localizações padrão (`docs/agent/...`), e nenhum outro caminho.
- **D:** Correta: o comando proíbe subpastas como `reports` ou `output` sem especificação.
**Conceito:** parâmetros de execução e ignore folders

## 9. README com recomendação e CVE
**Correta: B**
**Por quê:** O comando proíbe recomendações e planos de ação (o objetivo é um raio-x), proíbe linguagem vaga ("provavelmente") e proíbe fabricar CVEs: só entram vulnerabilidades encontradas pelo agente auditor.
- **A:** Recomendação continua proibida mesmo com base real: o comando quer só o diagnóstico.
- **C:** CVE que o auditor não encontrou é justamente o que o comando chama de fabricar CVE.
- **D:** Context7 e Firecrawl são usados pelo auditor; se a CVE não está no relatório dele, ela não veio dessa verificação.
**Conceito:** instruções negativas e restrições críticas

## 10. Relatório no manifesto sem arquivo
**Correta: D**
**Por quê:** Na fase 5 o Claude Code lê o manifesto e valida que todos os arquivos existem antes de salvar o README; a final delivery também pede validar cada link antes de gravá-lo.
- **A:** O orquestrador não dispara agentes; na fase 4 ele consolida e finaliza o manifesto.
- **B:** Na fase 1 o manifesto é só inicializado; os relatórios ainda nem existem.
- **C:** O manifesto é a fonte para mapear os relatórios, mas o comando manda conferir que cada caminho existe antes de salvar o link.
**Conceito:** validação final na fase 5
