# Quizz — Dependency Auditor Agent Prompt

**Capítulo:** 4 - Prompt para execução de agentes workflows · **Aula:** 2
**Base:** material da aula

---

## 1. A persona já diz que o agente só analisa e reporta, sem upgrades. Por que o professor repete, nos critérios, "compare com a última versão estável apenas para reportar"?
- A) Porque os critérios definem o conteúdo do relatório, e sem a frase a comparação de versões sairia da tabela.
- B) Porque a comparação com a última versão estável é o critério que leva o agente a classificar um risco como critical.
- C) Porque é ao comparar versões que o upgrade parece o passo natural, e repetir o limite ali reduz esse risco.
- D) Porque o workflow resumido no fim do prompt é montado a partir dos critérios, e a persona fica de fora dele.

## 2. Um colega tira do prompt a observação "só inclua esta seção se existirem dependências não verificadas". Num projeto em que todas foram verificadas, o que é mais provável?
- A) O relatório traz a seção mesmo assim, só para dizer que nenhuma dependência ficou sem verificação.
- B) O agente cria a seção e a preenche com as dependências desatualizadas, para ela não ficar vazia.
- C) O agente omite a seção e registra no summary que todas as dependências foram verificadas.
- D) O agente junta as dependências não verificadas na seção de critical issues, por falta de um lugar próprio.

## 3. Na seção da tabela de dependências, o prompt traz linhas de exemplo, como Express, Lodash e LangChain com versão atual, última versão e status. Qual é a função dessas linhas?
- A) Dar ao modelo valores de referência de versão, para ele não depender de consultas a registros externos.
- B) Servir de lista inicial de dependências a verificar, que o agente completa com as que achar nos manifestos.
- C) Mostrar como classificar o risco de cada biblioteca, já que a escala critical, high, medium e low vem delas.
- D) Mostrar o formato esperado da tabela, porque pedir só "uma tabela com o que está depreciado" seria ambíguo.

## 4. O time quer que o plano de ação do relatório traga quanto tempo leva cada correção. Pelo raciocínio do professor, o que fazer?
- A) Tirar a instrução negativa e deixar o modelo estimar, já que ele leu os arquivos e conhece o tamanho do projeto.
- B) Dizer no prompt como o tempo deve ser calculado, porque sem um método o modelo escreve números sem base.
- C) Manter a proibição e estimar à parte, porque uma estimativa sairia do escopo de "analisar e reportar".
- D) Pedir a estimativa em story points em vez de horas, porque a unidade relativa evita o número inventado.

## 5. Um desenvolvedor escreve o objetivo como "faça uma auditoria das dependências do projeto", e os relatórios variam muito entre execuções, cada um verificando coisas diferentes. Pela aula, qual é a causa mais provável?
- A) Falta uma persona: com um engenheiro sênior definido, o modelo deduz sozinho o que uma auditoria completa inclui.
- B) Falta o workflow resumido no fim, que é o bloco do prompt que define o que verificar em cada execução.
- C) Falta uma tabela de exemplo na saída: vendo as linhas preenchidas, o modelo entende o que verificar.
- D) A instrução não lista o que verificar, e escrever essa lista exige ter clareza do que se quer da auditoria.

## 6. O projeto declara a biblioteca A, que depende da biblioteca B, e B tem uma vulnerabilidade conhecida. Pelos critérios do prompt, como B aparece no relatório?
- A) B entra na tabela de dependências, porque uma vulnerabilidade conhecida passa por cima da regra das diretas.
- B) B entra na seção de dependências não verificadas, porque o agente não chega a ela pelos manifestos.
- C) B fica fora do catálogo: o relatório trata só das diretas, por escopo, mesmo as transitivas importando.
- D) B aparece como single point of failure de A, porque afeta todas as features que dependem de A.

## 7. Sobre o uso de MCP servers no prompt, qual afirmação está INCORRETA?
- A) Usar MCP "quando disponível" evita que a auditoria dependa de um servidor que pode não estar ativo.
- B) Citar Context7 e Firecrawl só como exemplos deixa espaço para outro servidor que cumpra o mesmo papel.
- C) Sem acesso a MCP nem a bancos externos, o agente declara a limitação e segue com os arquivos do projeto.
- D) Sem acesso a MCP, o agente usa o formato de erro, porque a checagem de vulnerabilidades ficaria incompleta.

## 8. Na pasta há um back-end em Python cujas versões não estão travadas em nenhum lockfile e um front-end em Node com lockfile. O usuário não indica o que auditar. O que o prompt espera?
- A) Perguntar ao usuário qual pasta auditar antes de começar, porque dois ecossistemas no mesmo lugar tornam o pedido ambíguo.
- B) Auditar os dois em separado, dizendo isso no resumo, e alertar que reproduzir o back-end em produção tem risco maior.
- C) Auditar só o front-end e registrar o back-end como não verificado, já que sem versões travadas não há o que comparar.
- D) Auditar tudo numa tabela única e marcar as dependências do back-end com nível de confiança baixo no resumo.

## 9. Mesmo com "não use emojis" no prompt, um relatório sai com emojis. Pela aula, qual é a leitura certa?
- A) A regra foi escrita sem dizer o que usar no lugar; reescrita de forma positiva, ela passaria a ser cumprida.
- B) Os emojis vêm de a regra estar fora da seção de output; levá-la para lá ataca essa causa e reduz o problema.
- C) A regra diminui a frequência, mas o resultado é probabilístico; testar e reforçar reduz o problema, sem eliminá-lo.
- D) O modelo ignora instruções negativas sobre estilo, e por isso elas devem ser trocadas por exemplos de saída.

## 10. O agente encontra os manifestos, mas o ambiente bloqueia a leitura dos arquivos do projeto. Pelo prompt, como ele deve responder?
- A) No formato de erro previsto no prompt, com status, razão e próximos passos, como liberar o acesso aos arquivos.
- B) Declarando a limitação e seguindo só com os nomes dos arquivos, como no critério para quando faltam fontes externas.
- C) Gerando o relatório com todas as dependências na seção de não verificadas, que existe para o que não pôde ser checado.
- D) Dizendo que não encontrou arquivos de dependência e pedindo o caminho, para confirmar se segue com informação limitada.
