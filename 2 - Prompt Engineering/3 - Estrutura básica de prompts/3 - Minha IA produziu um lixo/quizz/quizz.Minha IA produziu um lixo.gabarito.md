# Gabarito — Minha IA produziu um lixo

## 1. Regra para a IA que abandona o arquivo ao ser corrigida no meio do trabalho
**Correta: C**
**Por quê:** A aula dá duas regras para esse caso: "termine a implementação do arquivo atual e depois siga as minhas instruções" ou "corrija isso e não esqueça de voltar e continuar de onde você parou". A C é a segunda.
- **A:** Pedir plano e aprovação antes de cada alteração não aparece na aula e não trata o problema, que é largar um arquivo pela metade quando chega uma correção.
- **B:** É a guideline da aula para outra falha (arquivos grandes demais), não para o abandono do arquivo.
- **D:** Separar chats não está na aula e não resolve: a correção chega justamente no meio da tarefa, no mesmo chat.
**Conceito:** Limite de comportamento ao ser interrompida

## 2. A guideline que o professor monta para APIs de versões misturadas
**Correta: D**
**Por quê:** Para a biblioteca antiga, o professor registra o import errado e o certo (few-shot, para a IA "copiar e transpor") e soma a instrução "antes de importar um pacote dessa família ou dessa versão, pesquise as documentações".
- **A:** É self-consistency (várias respostas e a mais frequente), de aula anterior. Se a IA erra a versão de forma sistemática, a forma mais frequente tende a ser a errada.
- **B:** É prompt chaining, de aula anterior; não é o que a aula propõe para esse erro.
- **C:** É uma barreira de comportamento razoável, mas não é a guideline que a aula monta: falta o par de exemplos e a consulta à documentação.
**Conceito:** Few-shot + consulta à documentação

## 3. O que muda no uso de limites em relação à aula anterior
**Correta: A**
**Por quê:** Aqui, os limites saem do Code Review da saída ruim (biblioteca antiga, arquivo grande, função desnecessária, arquivo abandonado) e viram guidelines documentadas; a cada chat novo, o "funcionário que acabou de chegar" já recebe essas regras. É o que o resumo do professor chama de treinamento acumulativo.
- **B:** Os exemplos few-shot entram junto com as regras, não no lugar delas.
- **C:** É o contrário: a guideline é escrita para valer nos chats seguintes.
- **D:** Quem faz o Code Review e documenta é o desenvolvedor; a aula não fala da IA escrevendo as próprias regras.
**Conceito:** Limites como treinamento acumulativo

## 4. O ajuste na direção do skeleton of thoughts
**Correta: B**
**Por quê:** O professor diz que, quando o few-shot traz como exemplo a saída escolhida, isso "poderia ser uma espécie de um skeleton of thoughts, porque você está sendo um pouco mais específico de como você quer a saída". O resumo do professor liga isso ao caso em que a IA entende a tarefa mas entrega num formato confuso.
- **A:** Expor o raciocínio passo a passo é chain of thought; não fixa o formato da resposta.
- **C:** É self-consistency; escolhe a resposta mais frequente, não padroniza o formato.
- **D:** É prompt chaining. Até pode ajudar, mas não é o que a aula chama de skeleton of thoughts, que é especificar a saída com um exemplo.
**Conceito:** Skeleton of thoughts e formato da saída

## 5. Por que uma base de guidelines desorganizada piora as respostas
**Correta: A**
**Por quê:** O professor diz que, sem estrutura clara, o arquivo fica insustentável e gera mais ambiguidade: "às vezes, mais informação gera mais ambiguidade e aí ela começa a fazer coisas piores do que você estava mandando menos informação".
- **B:** A aula não diz que guidelines em excesso tiram a margem da IA; o problema é a desorganização.
- **C:** A aula não fala de a IA copiar os exemplos em vez da regra.
- **D:** A aula não liga o tamanho do arquivo de regras a latência nem a etapas puladas.
**Conceito:** Mais informação desorganizada gera ambiguidade

## 6. O que fazer quando os erros voltam num chat novo
**Correta: B**
**Por quê:** "Cada chat que você iniciar é um funcionário que acabou de chegar na empresa." A recomendação é documentar, em vez de passar raiva, para que o funcionário seguinte "já vai ter essas regras".
- **A:** Ficar num chat só não está na aula, e o histórico cresce até encher a janela de contexto; a aula propõe que as regras viajem para qualquer chat.
- **C:** Um resumo da conversa não é uma regra organizada; a aula pede guidelines estruturadas (e alerta que informação desorganizada gera ambiguidade).
- **D:** Repetir no chat é corrigir de novo o mesmo funcionário novo a cada dia; a aula propõe documentar uma vez.
**Conceito:** Cada chat novo é um funcionário novo

## 7. A expectativa firmada sobre o efeito da guideline do import
**Correta: C**
**Por quê:** Com a informação adicional, "provavelmente esse erro ela não vai cometer mais"; se cometer, "você pode restringir ainda mais". Ao fechar: "Eu nunca vou falar que esses erros nunca mais vão aparecer", mas eles são minimizados.
- **A:** O professor chega a dizer "vai resolver 100%", mas se corrige logo em seguida ("Será que ela nunca mais vai importar uma versão antiga? Talvez...") e no fim nega a eliminação.
- **B:** A guideline documentada é justamente o que leva a regra para os próximos chats.
- **D:** A aula não liga o efeito da guideline ao tamanho da conversa.
**Conceito:** Guideline minimiza, não elimina

## 8. A resposta do professor ao "o código é um lixo"
**Correta: D**
**Por quê:** "Vamos fazer um Code Review de um lixo": o desenvolvedor mapeia as falhas (bibliotecas antigas, arquivos grandes, funções desnecessárias, arquivo abandonado, padrões alterados) e transforma cada uma em guideline.
- **A:** A variação entre modelos apareceu na aula anterior, mas não é a resposta dada aqui.
- **B:** Barreiras e saída definida são da aula anterior; sem antes mapear o que deu errado, não se sabe quais barreiras escrever.
- **C:** Na aula, quem faz o Code Review é o desenvolvedor, tratando a IA como um colega que precisa ser orientado.
**Conceito:** Code Review da saída ruim

## 9. Afirmação que NÃO corresponde à aula
**Correta: B**
**Por quê:** A aula diz o contrário: "nenhuma estratégia de estruturação vai resolver todos os seus problemas", e os erros são minimizados, não eliminados.
- **A:** Está na aula: "todas as vezes que a IA gerar algo que você não espera, é porque você não define os limites e o comportamento".
- **C:** Está na aula: as formas de estruturar não são só para o workflow de desenvolvimento; valem para agentes que atendem o cliente final, exploração e geração de documentos.
- **D:** Está na aula: a comparação com testes automatizados, que precisam ser claros porque crescem com o tempo, como a base de conhecimento passada à IA.
**Conceito:** Estrutura ajuda, mas não resolve tudo

## 10. A guideline para o helper duplicado
**Correta: C**
**Por quê:** Para as funções desnecessárias, a aula propõe: "após criar qualquer função, revisite e veja se realmente ela é necessária ou se não existe algo similar já implementado". O professor a classifica como chain of thought, porque encadeia um passo de verificação depois da ação.
- **A:** Perguntar e esperar não está na aula, e o desenvolvedor teria de responder a cada função criada.
- **B:** É a guideline da aula para arquivos grandes demais.
- **D:** Mudança de padrões foi outra falha do Code Review; seguir convenções não faz a IA procurar uma função equivalente antes de manter a nova.
**Conceito:** Revisar funções criadas (chain of thought)
