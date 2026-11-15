# Gabarito — Skeleton of Thought e resultados incríveis

## 1. Escolha da estratégia e documento: ToT × SoT
**Correta: C**
**Por quê:** o ToT explora alternativas diferentes em ramos e escolhe pelo critério declarado (custo e risco), o que serve à escolha. O resumo do professor diz que o ganho do SoT não é explorar alternativas, como no ToT, mas impor estrutura à resposta, e documentação está entre os usos da técnica.
- **A:** inverte as técnicas: a árvore do ToT serve para comparar hipóteses, não para estruturar seções de um documento, e o esqueleto do SoT organiza a resposta, não compara opções.
- **B:** o SoT expande cada bullet, mas não compara nem escolhe entre eles por critério; essa é a função do ToT.
- **D:** a diferença não é só de formato: um explora e decide entre alternativas, o outro organiza a entrega.
**Conceito:** diferença entre Skeleton of Thought e Tree of Thought

## 2. Seções ambíguas no esqueleto
**Correta: A**
**Por quê:** a aula lista a perda de contexto entre etapas como limitação: o modelo pode misturar uma etapa com a outra, principalmente quando o nome da seção é ambíguo e se confunde com outro. Como cada tópico do esqueleto é expandido, a falha passa para o resultado (esqueleto ruim leva a expansão ruim).
- **B:** critério explícito e "verbosidade organizada" são do Tree of Thought, na aula anterior. O SoT não escolhe a melhor seção.
- **C:** o enunciado diz que o esqueleto foi impresso, e a aula diz o contrário: os tokens impressos ficam visíveis e ajudam o modelo a gerar o que vem depois.
- **D:** a aula não fala em duplicar seções para atingir um tamanho; o número de bullets só delimita o esqueleto.
**Conceito:** esqueleto ruim leva a expansão ruim / perda de contexto entre etapas

## 3. Por que imprimir o esqueleto ajuda
**Correta: D**
**Por quê:** o professor explica pelo next token: com o esqueleto na saída, o modelo vê o que já escreveu, e isso ajuda a calcular o que vem depois. Sem ele, perde esses tokens.
- **A:** não há segunda chamada de revisão; a aula descreve uma única saída em duas fases.
- **B:** é o contrário: imprimir o esqueleto acrescenta tokens, e a aula lista o custo maior como limitação.
- **C:** o professor sugere discutir e ajustar o plano quando combina as técnicas, mas o motivo que ele dá para a melhora da expansão é o next token, não a aprovação do usuário.
**Conceito:** esqueleto impresso e cálculo do next token

## 4. Imprimir ou não o esqueleto (INCORRETA)
**Correta: B**
**Por quê:** é a afirmação falsa. O professor diz que imprimir tende a ajudar, mas admite que na maioria das vezes não pede o esqueleto antes, e que dá para ter resultados muito bons sem ele. Ele não prefere imprimi-lo.
- **A:** verdadeira: o prompt pode pedir só o resultado, com resultados muito bons.
- **C:** verdadeira: sem o esqueleto impresso, o modelo perde esses tokens e não necessariamente traz a melhor resposta.
- **D:** verdadeira: a saída vem em duas fases, primeiro o esqueleto e depois o resultado.
**Conceito:** saída em duas fases e esqueleto opcional

## 5. Modelo que detalha já na primeira fase
**Correta: C**
**Por quê:** a aula diz que a técnica exige controle para o modelo não pular direto para os detalhes e sair detalhando sem seguir o esqueleto. Os prompts da aula fazem esse controle: "gere somente o esqueleto" e, no de Go, "ainda não expanda" (o professor destaca: "perceba que eu só pedi para ele gerar o esqueleto").
- **A:** nomes específicos combatem a mistura entre seções (perda de contexto), não o detalhamento precoce.
- **B:** a faixa de 6 a 8 bullets do prompt de Go define o tamanho do esqueleto; não impede o modelo de expandir cedo.
- **D:** a limitação está certa, mas o ajuste não: não imprimir o esqueleto só tira a estrutura da saída e não impede o modelo de detalhar cedo. Pela aula, sem o esqueleto impresso o modelo ainda perde os tokens que o ajudariam a seguir a estrutura.
**Conceito:** controle para não pular direto para os detalhes

## 6. Por que documentação combina com SoT
**Correta: A**
**Por quê:** o resumo do professor diz que documentação falha mais por desorganização do que por falta de conteúdo, e o SoT organiza a estrutura antes do texto.
- **B:** a técnica não corrige falta de contexto; o resumo do professor diz que o esqueleto errado só amplia o erro, e o professor comenta que a ADR teve pouco contexto.
- **C:** comparar alternativas por critério é o Tree of Thought. Os tópicos do esqueleto são seções a expandir, não ramos avaliados.
- **D:** é o contrário: a técnica gasta mais tokens, e o resumo do professor diz que ela vale mais quando estrutura e legibilidade importam mais do que respostas curtas e imediatas.
**Conceito:** documentação técnica com estrutura antes do texto

## 7. Combinação das técnicas
**Correta: D**
**Por quê:** o professor sugere explorar linhas de pensamento com Chain of Thought e Tree of Thought, depois criar com o Skeleton of Thought um esqueleto dos passos, discutir e ajustar as sugestões e usar isso como plano de ação para a IA implementar.
- **A:** inverte a ordem: a exploração de alternativas (ToT) vem antes, e o esqueleto vem depois, para estruturar a solução.
- **B:** o SoT não compara arquiteturas por critério; a dúvida sobre qual usar pede exploração antes.
- **C:** começa certo, mas pula o esqueleto: a sugestão é transformar a exploração num plano de passos, discuti-lo e ajustá-lo antes de a IA implementar.
**Conceito:** combinação de CoT/ToT com Skeleton of Thought como plano de ação

## 8. ADR com pouco contexto
**Correta: B**
**Por quê:** o professor destaca a ADR bem estruturada "independente se eu concordo com ela aqui ou não", porque o prompt deu pouco contexto. O objetivo era mostrar o poder dos ajustes no prompt. O resumo do professor completa: a técnica não corrige falta de contexto nem substitui julgamento técnico.
- **A:** as seções da ADR organizam o documento, mas não dão à decisão o contexto que o prompt não trouxe: o professor diz que deu pouco contexto e não endossa a decisão ("independente se eu concordo com ela aqui ou não").
- **C:** o esqueleto foi impresso (contexto, decisão, alternativas consideradas, consequências e referências), e a decisão veio justificada pelo ecossistema mais maduro.
- **D:** a ADR listou alternativas (MongoDB, MySQL e SQLite) sem ToT, e a aula não diz que essa seção exige outra técnica.
**Conceito:** a estrutura não supre a falta de contexto

## 9. CRUD em Go: o que o prompt fez de diferente
**Correta: A**
**Por quê:** o terceiro prompt definiu os blocos que o esqueleto devia cobrir (structs, framework HTTP, rotas, handlers, validação, banco de dados, tratamento de erros e estrutura do projeto), mandou "ainda não expanda" e só no passo 2 pediu a expansão com exemplos e boas práticas de Go. O resumo do professor diz que isso transforma a geração de código em planejamento guiado.
- **B:** a primeira metade está certa, mas o prompt separou as fases: o passo 1 gera só o esqueleto e não expande, e o código vem no passo 2.
- **C:** o prompt pediu de 6 a 8 bullets, mas não deixou o conteúdo livre: listou o que o esqueleto devia cobrir.
- **D:** dar exemplos prontos para imitar é few-shot; o prompt de Go pediu que o modelo gerasse os exemplos de código na expansão.
**Conceito:** esqueleto como plano da implementação

## 10. Prompts curtos, respostas longas
**Correta: C**
**Por quê:** o professor diz que os prompts não são grandes, mas são intencionais, e por isso geram os resultados. A aula também lista o consumo maior de tokens como limitação: a saída traz o esqueleto e a expansão.
- **A:** o prompt curto não elimina o custo; a técnica gasta mais tokens, como a aula diz.
- **B:** a técnica não corrige falta de contexto. O professor nota que a ADR teve pouco contexto, e o resumo do professor diz que um esqueleto errado só amplia o erro.
- **D:** os três prompts usam papel, mas a aula atribui o resultado à estrutura em duas fases. O esqueleto não serve só à leitura humana: os tokens dele ajudam o próprio modelo a gerar a expansão.
**Conceito:** prompts curtos e intencionais, custo na saída
