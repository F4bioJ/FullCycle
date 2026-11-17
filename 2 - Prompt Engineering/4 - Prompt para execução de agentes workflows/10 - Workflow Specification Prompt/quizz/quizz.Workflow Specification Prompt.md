# Quizz — Workflow Specification Prompt

**Capítulo:** 4 - Prompt para execução de agentes workflows · **Aula:** 10
**Base:** material da aula

---

## 1. Para "simplificar", alguém move para o prompt do agente orquestrador a instrução "na fase 2, dispare o Dependency Auditor e o Architecture Analyzer em paralelo". O que isso contradiz no desenho da aula?
- A) Nada: o nome "orquestrador" já indica que cabe a ele disparar e coordenar os especialistas.
- B) A fase 2, que no comando deve rodar em sequência, porque o auditor precisa do relatório de arquitetura.
- C) A separação de papéis: o coordenador dispara os agentes; o orquestrador faz setup, síntese e tracking.
- D) A ordem das fases, porque o papel do orquestrador é atuar na fase 5, gravando o README final.

## 2. Por que o comando manda usar o `manifest.md` como fonte da verdade para montar o índice do README, em vez de o coordenador listar os relatórios de que se lembra?
- A) Porque o índice deve refletir o que foi registrado como concluído, não o que o agente supõe ter gerado.
- B) Porque o manifesto é o canal pelo qual os subagentes compartilham a janela de contexto com o agente principal.
- C) Porque o manifesto guarda a duração de cada tarefa, dado que o template do README exige no índice final.
- D) Porque o Claude Code gera o README automaticamente a partir do arquivo de manifesto da pasta.

## 3. Para ganhar tempo, alguém quer disparar a análise de cada componente junto com os dois agentes da fase 2. Por que o workflow não permite isso?
- A) Porque o Claude Code só sustenta dois agentes em paralelo, e a fase 2 já ocupa esse limite.
- B) Porque a lista de componentes sai do relatório do Dependency Auditor, que ainda não terminou na fase 2.
- C) Porque o orquestrador precisa finalizar o manifesto, na fase 4, antes de qualquer análise de componente.
- D) Porque a lista de componentes a cobrir vem do relatório de arquitetura, que só existe ao fim da fase 2.

## 4. O relatório de arquitetura listou 10 componentes, mas a fase 3 terminou com 9 relatórios. O que o comando manda o coordenador fazer?
- A) Registrar no manifesto que a cobertura ficou parcial e seguir para a síntese da fase 4.
- B) Reabrir o relatório de arquitetura, conferir os componentes e disparar outro agente só para o que faltou.
- C) Rodar de novo a fase 3 inteira, com os 10 componentes, para que todos os relatórios fiquem consistentes.
- D) Pedir ao orquestrador que escreva o relatório que faltou durante a síntese, com base no da arquitetura.

## 5. Em que situação o professor usou ULTRATHINK no comando, e por quê?
- A) Na fase 2, para garantir que os dois agentes realmente sejam disparados ao mesmo tempo e não em sequência.
- B) Em todo o workflow, porque essa palavra-chave torna o fluxo determinístico, fase após fase.
- C) Na checagem de duplicidade, porque o modelo já tinha lido nomes com data e hora e duplicado um relatório.
- D) Na fase 1, porque o modelo precisa raciocinar mais para criar o manifesto com caminhos absolutos corretos.

## 6. Mesmo com o comando pedindo para atualizar o manifesto após cada agente, você nota que o Claude Code espera todos os relatórios e só então aciona o orquestrador. Qual é a saída indicada na aula?
- A) Trocar o modelo do coordenador, porque esse desvio mostra que ele não consegue seguir workflows por fases.
- B) Deixar o próprio Claude Code escrever no manifesto ao fim de cada agente, dispensando a chamada ao orquestrador.
- C) Tirar o paralelismo da fase 2, porque é ele que leva o coordenador a adiar a atualização do manifesto.
- D) Ser mais específico nesse ponto, com um exemplo: "quando o Architecture Analyzer terminar, chame o orquestrador".

## 7. O prompt do analisador de componentes é muito bom, mas um relatório sai raso e fora de escopo. O coordenador o invocou só com "analise o componente Payments". Qual é a causa mais provável, segundo a aula?
- A) A mensagem de invocação foi vaga: o coordenador deve passar todo o contexto de que o agente precisa para cumprir a tarefa.
- B) O subagente herdou a janela de contexto inteira do coordenador, e o excesso de informação diluiu a instrução dele.
- C) O orquestrador ainda não tinha registrado a fase 2 no manifesto, então o agente não sabia qual componente analisar.
- D) Faltou ULTRATHINK no prompt do especialista, que é o que dá profundidade à análise de cada componente.

## 8. Sobre os parâmetros de execução do comando, qual afirmação está INCORRETA?
- A) `--projectfolder` restringe a análise a uma pasta, útil para analisar um projeto específico dentro de um monorepo.
- B) Sem `--outputfolder`, os relatórios vão para a localização padrão, e não para pastas criadas por iniciativa do agente.
- C) As pastas de `ignore folders` podem ser escaneadas normalmente, desde que seus achados fiquem fora dos relatórios.
- D) O agente não deve criar subpastas como `reports` ou `output` além do que a especificação pede.

## 9. O README final traz: "Recomendamos atualizar a lib X, provavelmente vulnerável (CVE-2024-1234)". Essa CVE não aparece no relatório do auditor. Qual análise está correta?
- A) A CVE viola o comando, mas a recomendação é aceitável, já que se apoia em um risco de dependência real.
- B) Viola três restrições: traz recomendação, usa linguagem vaga e cita uma CVE que o auditor não encontrou.
- C) A linguagem vaga viola o comando, mas a CVE é aceitável se o modelo a conhece do próprio treinamento.
- D) Não viola nada se o auditor usou Context7 e Firecrawl na fase 2, porque essas ferramentas já validam CVEs.

## 10. Um relatório consta no manifesto, mas o arquivo nunca foi salvo no disco. Em que ponto do workflow isso deve ser pego?
- A) Na fase 4, quando o orquestrador percebe a falta e dispara de novo o agente que gerou aquele relatório.
- B) Na fase 1, quando o manifesto é inicializado com título, caminho absoluto, agente e timestamp de cada item.
- C) Não deve ser pego: como o manifesto é a fonte da verdade, o README lista o link mesmo sem o arquivo.
- D) Na fase 5, quando o coordenador lê o manifesto e valida que cada arquivo existe antes de gravar o README.
