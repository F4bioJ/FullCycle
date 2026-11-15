# Conceitos básicos de Chain of Thought — resumo

## Além de imitar exemplos

Até aqui, a ideia era dar um exemplo para a IA imitar e adaptar ao contexto. O Chain of Thought (CoT) é uma técnica mais elaborada. Segundo o professor, ela mudou até o modo como os modelos trabalham. Em vez de ir direto à resposta, o modelo é instruído a pensar em etapas antes da resposta final. Pelo resumo do professor, a saída deixa de ser só "qual é a resposta" e passa a incluir "como o modelo chegou nela".

## Quando usar

Vale para tudo o que se pensa passo a passo: resolver um cálculo, explicar a lógica de um algoritmo, listar as etapas da correção de um bug, mostrar como a IA chegou a uma conclusão num debate e estruturar um plano de projeto. O teste sugerido é fazer uma pergunta a uma IA e depois repetir a mesma pergunta com "pense passo a passo" no fim. A resposta muda completamente.

## O roteador do GPT-5

Na interface, o GPT-5 tem um roteador: ele analisa a pergunta e decide se responde direto ou se encaminha para o modelo de reasoning, que cria uma linha de pensamento. Escrever "pense passo a passo antes de responder" no fim da pergunta força esse desvio para o reasoning. Ou seja, o prompt muda também o modo de inferência que o modelo usa, não só o texto da resposta.

## Limitações

- **Resposta longa e verbosa:** como pensa passo a passo, o modelo mostra os passos.
- **Passos irreais:** pode inventar passos, até nos modelos mais avançados.
- **Raciocínio que não bate com a resposta:** a linha de raciocínio diz que um mais um dá dois, e a conclusão final diz três.
- **Erro nos passos:** pode errar as contas dentro do próprio passo a passo. Pedir para pensar em etapas não garante uma resposta correta.
- **Tarefas simples:** usar CoT gasta mais tokens, demora mais e, muitas vezes, entrega a mesma qualidade que a resposta direta. Em agentes e sistemas, o professor recomenda pensar dez vezes antes de usar, porque um prompt mal escrito pode consumir muitos tokens.

## Auditar a resposta

O CoT ajuda a auditar a resposta. É como o "justifique" da prova na escola: não basta responder 22, é preciso mostrar como se chegou ao 22.

## Depurar um prompt

Se um software responde errado e não se sabe por quê, dá para mudar o prompt temporariamente para usar CoT. O modelo mostra o passo a passo, e assim se vê em que ponto o raciocínio dele está errado. Com isso, dá para corrigir o prompt. O resumo do professor acrescenta que, depois da correção, vale reavaliar se o passo a passo precisa continuar em produção.
