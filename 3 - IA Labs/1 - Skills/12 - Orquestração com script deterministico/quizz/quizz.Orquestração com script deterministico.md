# Quizz — Orquestração com script deterministico

**Capítulo:** 1 - Skills · **Aula:** 12
**Base:** material da aula

---

## 1. Uma skill orquestradora gera, por inferência, a documentação de cada serviço seguindo um padrão de seções. Na maioria das execuções o padrão sai certo, mas, de vez em quando, falta uma seção obrigatória. Pela ideia da aula, qual reforço ataca a causa do problema?
- A) Reescrever as instruções em Markdown com mais exemplos, para o modelo deixar de errar o padrão nas próximas execuções.
- B) Um script que confere as seções do mesmo jeito em toda execução e, se faltar alguma, devolve o erro para a autocorreção.
- C) Trocar o modelo por um mais capaz, porque o desvio vem de um modelo fraco, e um mais forte segue o padrão a cada vez.
- D) Pedir ao próprio agente, ao fim da pipeline, que releia o documento e confirme que as seções obrigatórias estão lá.

## 2. Um app de agendamento tem as camadas de controlador (a entrada HTTP), caso de uso, domínio e repositório, e segue as regras da aula: o controlador fala com o caso de uso, que orquestra o domínio e o repositório, e o domínio não depende de nada de fora. Qual destas dependências passaria pelo gate?
- A) O controlador que importa a entidade de agendamento do domínio para montar a resposta HTTP da listagem.
- B) O controlador que importa o repositório para listar os horários livres sem passar pelo caso de uso.
- C) A entidade de domínio que importa um utilitário de fora do domínio para formatar a data do agendamento.
- D) O caso de uso que importa a entidade do domínio para criar o agendamento e depois mandá-lo ao repositório.

## 3. Um time escreve um script de checagem que, ao achar um problema, só imprime "FALHOU" e sai com erro. Ele roda ao fim de uma pipeline de agente com autocorreção. Pelo desenho da aula, o que se perde?
- A) O agente sabe que há erro, mas não sabe o que corrigir, em que arquivo, por quê nem a quem delegar, e passa a adivinhar.
- B) Nada de essencial: o código de saída diferente de zero já basta para o agente localizar e corrigir a violação.
- C) A garantia determinística, porque o script passa a ser determinístico quando descreve cada violação em detalhe.
- D) O registro para o usuário, que precisa ler cada violação e aprovar a correção antes de o agente seguir em frente.

## 4. Uma pipeline tem uma subskill por camada (controlador, caso de uso, domínio, repositório) e um orquestrador que só delega. O gate acusa que um arquivo do domínio importa algo do repositório. Pelo passo de autocorreção da aula, quem corrige?
- A) A subskill de repositório, porque é a camada que o domínio importou, e a correção começa pela origem da dependência.
- B) O orquestrador, porque é ele que roda o gate e recebe o arquivo e a linha do erro, e por isso já tem tudo para corrigir.
- C) A subskill de domínio, porque o import proibido está no arquivo dela, e a correção vai para a camada ofensora.
- D) A subskill da última camada implementada, porque o gate roda no fim e a correção segue a ordem da pipeline.

## 5. Num loop de autocorreção como o da aula, uma violação volta a aparecer a cada tentativa, e o gate segue vermelho. Qual desenho o professor escreveu para esse caso?
- A) Depois de um número fixo de tentativas, a tarefa é entregue como pronta, com as violações restantes no relatório.
- B) O loop repete sem limite até o gate ficar verde, porque o critério de pronto é o código de saída zero.
- C) Depois de algumas falhas, o orquestrador corrige a violação por conta própria, sem a subskill, que não resolveu.
- D) O loop repete até o gate ficar verde, mas, passado um limite de tentativas, o agente consulta o usuário.

## 6. Ao fim de uma pipeline com gate de arquitetura, os testes de todas as camadas passam, mas o gate acusa uma violação. Pela regra da aula, a tarefa está pronta?
- A) Não: o critério de pronto é o gate verde; os testes conferem o comportamento, e o gate confere as fronteiras.
- B) Sim: os testes passando mostram que o código funciona, e a violação pode ficar para uma próxima tarefa.
- C) Sim, se a violação estiver na camada mais externa, porque é ela que pode depender das outras camadas.
- D) Não, e a pipeline deve ser refeita desde a primeira camada, porque a violação invalida as que vieram depois.

## 7. Ao fim de uma pipeline, o gate de arquitetura devolve exit 0. Qual destas conclusões ele NÃO sustenta?
- A) As dependências entre as camadas respeitam as fronteiras que o script define como proibidas.
- B) O loop de autocorreção pode parar, porque o código de saída que ele esperava para encerrar já veio.
- C) As regras de negócio estão certas, como a de que um agendamento não pode ser marcado no passado.
- D) Com os testes já verdes, a tarefa pode ser dada como pronta, porque o gate de arquitetura passou.

## 8. Uma equipe quer que o gate rode também quando um dev pede ao agente só uma edição pequena num arquivo do código, sem acionar a skill orquestradora. Onde a aula põe essa regra, e por quê?
- A) No corpo da skill orquestradora, porque a skill inteira é carregada no início da sessão e vale para qualquer edição.
- B) No CLAUDE.md, porque ele é lido a todo momento, enquanto o corpo da skill só entra quando ela é acionada.
- C) Na description da skill orquestradora, porque o nível 1 fica no contexto e faz o gate rodar a cada edição.
- D) Num script que o próprio gate dispara ao salvar cada arquivo, para que a regra deixe de depender do agente.

## 9. Um time quer ter no projeto tanto o CLAUDE.md quanto o AGENTS.md com a regra do gate, sem manter duas cópias dela. Qual saída segue o que foi feito na aula?
- A) Escrever a regra no CLAUDE.md e deixar o AGENTS.md como uma referência a ele, o que, segundo o professor, funciona.
- B) Escrever a regra no AGENTS.md e apagar o CLAUDE.md, porque o Claude Code passa a ler o AGENTS.md no lugar dele.
- C) Escrever a regra na description da skill orquestradora, porque o nível 1 fica no contexto desde o início da sessão.
- D) Copiar a regra nos dois arquivos, porque um AGENTS.md que aponta para o CLAUDE.md não é lido pelo agente.
