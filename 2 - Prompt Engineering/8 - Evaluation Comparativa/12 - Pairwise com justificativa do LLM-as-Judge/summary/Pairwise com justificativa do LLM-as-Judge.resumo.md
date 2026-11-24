# Pairwise com justificativa do LLM-as-Judge — resumo

Aula prática: o professor roda mais um exemplo de pairwise, agora com um dataset de geração de documentação, e mostra um juiz que, além de dizer quem ganhou, justifica a decisão por categoria.

## Os dois prompts

- **Prompt A:** "você é um especialista em documentação de Python e IA". Pede documentação high-level, com descrição, explicação, sumário etc., dados factuais e concisos, em Markdown, a partir dos arquivos do projeto.
- **Prompt B:** pede uma documentação boa para desenvolvedores, concisa, mas sem muitos detalhes técnicos. O professor o deixou mais fraco de propósito.
- **Dataset:** os "arquivos do projeto" são o próprio dataset: o conteúdo de três arquivos (entre eles um `prompt.py`) tirados de um projeto da LangChain. O dataset tem um exemplo só.

## O juiz

O prompt do juiz é bem grande. Ele recebe o código, a referência (o ground truth da documentação esperada), a documentação A e a B, as métricas a avaliar somando pontos, as regras e o formato de retorno. A novidade em relação ao exemplo anterior: para cada categoria (conciseness, reference alignment, clarity, utility, technical precision, structural completeness), o juiz diz quem ganhou e justifica de forma objetiva. Assim dá para auditar a decisão, e não só saber se venceu A ou B.

## Passo 1: preparar e rodar

- **O que fazer:** criar os prompts (`createPrompt`), subir o dataset e rodar o script `pairwise doc`, que é praticamente igual aos anteriores; mudam o nome dos prompts e a evaluation.
- **O que observar:** roda o A, depois o B e por fim a comparação. Com um registro só, há uma única iteração, mas ela demora, porque gerar documentação produz muitos output tokens.

Para o professor, a parte mais legal é a comparação: um juiz bem feito justifica a decisão, e você pode concordar ou não. Ele lembra que também existe evaluation com anotações, inclusive humanas, e que esses dados podem ser usados para fazer evaluation com base no dataset.

## Passo 2: as métricas sozinhas não decidem

- **O que observar:** além do pairwise, o professor pediu métricas que considera importantes, como conciseness e nível de detalhe. A cobertura de conteúdo sai muito baixa num dos lados, porque o prompt pediu para ser conciso e escrever pouco, e os scores variam bastante entre os dois (terminologia em 0,4 num caso, outros valores como 0,2, 0,6 e alguns em 1).
- **O que mostra:** com tantos scores, quem ganhou, e em qual perspectiva? É por isso que o pairwise é importante: em vez de só olhar as métricas, ele põe uma resposta contra a outra. As categorias foram criadas para deixar isso mais claro.

## Passo 3: o resultado e a justificativa

- **O que observar:** em pairwise experiments, o A vence o B por 1 a 0, porque havia só um exemplo. A comparação mostra todos os evaluators usados, mas o verde e o vermelho vêm do pairwise judge (1 para A, 0 para B).
- **O que mostra:** no output da chamada ao modelo (chat OpenAI) aparece o raciocínio do juiz por categoria:
  - structural completeness: A por 9 a 7 (visão geral mais completa, com contexto, objetivos, tecnologias, data flow);
  - technical precision: A por 9 a 7 (mais acurada, com mais nomes e funções);
  - clarity e utility: A por 8 a 7;
  - reference alignment: A melhor;
  - conciseness versus detail: empate.

Fica um tracing do que o juiz pensou para chegar ao resultado daquela linha.

## Fechamento do capítulo

O professor diz que o objetivo não era aprender a ferramenta nem fazer cálculos, mas entender que comparar prompts lado a lado é uma das coisas mais importantes em Prompt Engineering, e algo contínuo, porque os modelos mudam. Ele usou o GPT-4o mini; com GPT-5, Claude ou Gemini, a resposta talvez fosse outra. Evaluation aparece em todo lugar, e aqui foi vista pelo prisma do Prompt Engineering. Para ele, quem acompanhou os exemplos consegue discutir as métricas com outras pessoas e, com objetivos claros do que medir, tem um bom ponto de partida.
