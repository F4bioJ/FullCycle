# Quizz — Role Specification como Orquestrador

**Capítulo:** 4 - Prompt para execução de agentes workflows · **Aula:** 11
**Base:** material da aula

---

## 1. Um aluno troca a seção "Core responsibilities" do orquestrador por "Objetivo: criar o manifesto e registrar os relatórios desta execução". Segundo o professor, o que se perde?
- A) Nada relevante: objetivo e responsabilidades core dizem o mesmo, e o modelo trata os dois igual.
- B) A sequência de execução, porque as responsabilidades core são os passos que o orquestrador segue.
- C) O sentido de inegociável: o objetivo mostra o que fazer a curto prazo; as responsabilidades, o que manter.
- D) O formato de status, porque é nas responsabilidades que se define como falar com o coordenador.

## 2. Ao conferir a cobertura, o orquestrador nota que um componente listado no relatório de arquitetura não tem relatório. Pelo prompt, o que ele deve fazer?
- A) Passar o gap ao coordenador, que decide chamar outro agente para completar o relatório.
- B) Disparar um agente de análise para o componente, já que é ele quem mantém o tracking.
- C) Escrever ele mesmo um relatório breve, para a cobertura do manifesto chegar a 100%.
- D) Marcar o componente como "falhou" no manifesto e seguir para a finalização da integridade.

## 3. O coordenador avisa o orquestrador que concluiu um relatório, mas o caminho informado não existe no disco. O que o prompt orienta?
- A) Registrar com o caminho informado, porque quem conclui o artefato é a fonte da verdade do caminho.
- B) Registrar com o caminho da pasta padrão de saída, onde o relatório deveria estar pelo comando.
- C) Registrar agora e corrigir o caminho depois, na etapa de finalização da integridade do manifesto.
- D) Não registrar: o caminho é verificado antes da gravação, e a segurança vale mais que a conveniência.

## 4. Para poupar leitura, alguém pede que o orquestrador inclua no `manifesto.md` um resumo das vulnerabilidades achadas pelo auditor. Por que o prompt não permite isso?
- A) Porque o orquestrador não tem acesso ao conteúdo dos relatórios dos especialistas, só aos caminhos.
- B) Porque o manifesto guarda só o estado mínimo e factual; conteúdo analítico fica nos relatórios.
- C) Porque as vulnerabilidades no manifesto seriam CVEs fabricados, que o auditor não chegou a verificar.
- D) Porque as vulnerabilidades vão para o README final, que o orquestrador monta na fase 4 do workflow.

## 5. O professor conta que, nos testes, não teve race condition no manifesto, porque o Claude percebe arquivos abertos e altera por diff. O que isso permite concluir?
- A) Que o princípio de registro seguro em paralelo pode sair do prompt, pois a ferramenta já resolve.
- B) Que o manifesto passa a funcionar como um banco de dados com isolamento entre os agentes.
- C) Que basta registrar tudo ao final do lote paralelo, pois o diff junta as escritas sem perda.
- D) Que é algo observado, não garantido: o arquivo não tem isolamento, e o princípio continua valendo.

## 6. Num projeto grande, em que a sessão pode cair no meio da fase 3, alguém faz o comando subir um orquestrador novo a cada tarefa concluída. Que troca está fazendo?
- A) Ganha tracking quase em tempo real e evita refazer tudo, mas o workflow fica mais lento.
- B) Ganha velocidade, porque os registros rodam em paralelo, mas o manifesto deixa de ser a fonte da verdade.
- C) Ganha registro seguro em paralelo sem custo, porque cada orquestrador tem a tarefa leve de dar baixa.
- D) Ganha consistência no manifesto, mas os relatórios da fase 3 deixam de rodar em paralelo.

## 7. O prompt do orquestrador traz instruções e formato para o master coordinator (indicar ao especialista o diretório de saída no padrão e devolver o resultado ao orquestrador). Por que pôr isso nesse prompt?
- A) Porque é o orquestrador quem invoca os especialistas, e o coordenador repassa as mensagens a eles.
- B) Para o coordenador saber em que ordem disparar os especialistas, já que o orquestrador tem o workflow.
- C) Para criar um protocolo entre os dois, com o que vai e o que volta de forma previsível.
- D) Para o orquestrador falar direto com os especialistas quando o coordenador estiver ocupado.

## 8. Alguém quer reescrever o orquestrador numa estrutura mais extensa, como a dos agentes especialistas, com muito mais seções, "para garantir". Pela aula, qual o efeito mais provável?
- A) Mais aderência, porque mais instruções deixam menos espaço para o modelo improvisar.
- B) Mais ambiguidade e mais chance de erro, sem ganho, já que o papel do orquestrador é simples.
- C) Erro de estrutura, porque um Role Specification se limita às seções de papel, framework e decisão.
- D) Mais previsibilidade, porque um orquestrador mais detalhado depende menos do modelo usado.

## 9. Qual afirmação sobre o `manifesto.md` está INCORRETA?
- A) A escrita nele cabe ao orquestrador; os especialistas e o coordenador não o editam.
- B) Cada registro traz o título, o caminho absoluto, o nome do agente e o timestamp.
- C) Ele guarda o estado do workflow e mostra de onde retomar quando há muitos agentes.
- D) É a entrega final ao usuário, com o índice dos relatórios e um sumário executivo.

## 10. O prompt manda o orquestrador usar caminhos determinísticos e não inventar nomes de pasta. Como isso se liga ao controle de cobertura por componente?
- A) Com os relatórios em locais previsíveis, ele confere de forma confiável o que existe e o que falta.
- B) Caminhos fixos deixam os agentes da fase 3 rodarem em paralelo sem passar pelo coordenador.
- C) Pastas novas são aceitas, desde que o orquestrador as registre antes no manifesto como pendentes.
- D) Com nomes já conhecidos, o orquestrador pode criar as pastas de saída que faltarem na verificação.
