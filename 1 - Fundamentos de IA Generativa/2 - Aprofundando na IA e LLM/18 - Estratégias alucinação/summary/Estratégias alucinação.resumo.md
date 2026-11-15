# Estratégias alucinação — resumo

## Do problema ao uso: técnicas de prompt

Depois de mostrar que as LLMs alucinam, o professor muda o foco da arquitetura para o **uso** no dia a dia: o que fazer, na hora de escrever o prompt, para **diminuir** a alucinação. São técnicas que reduzem o problema, não que o eliminam.

## Pedir evidência e restringir as fontes

A primeira técnica é **pedir evidência**. No prompt, você pede algo como "liste as fontes confiáveis que sustentam a sua resposta" e "cite os autores e os estudos usados". Também pode **delimitar onde buscar**: só artigos de jornal, só revistas acadêmicas.

Isso tem dois efeitos:

- **força o modelo a buscar consistência** no conhecimento que tem. Quando ele busca em dados externos, passa por um **enriquecimento** com informação de um lugar definido, e a chance de alucinar cai. Quanto mais **nichado** o local da busca e mais nova a informação, melhor ele costuma ir;
- **permite a verificação humana**: ao listar as fontes, ele mostra de onde tirou cada coisa, e você vai atrás dos autores para conferir se fazem sentido.

## Instrução de cautela

A segunda técnica é incluir **instruções de cautela** diretas: "se você não tiver certeza, diga que não sabe" e "evite inventar informações se os dados não forem conhecidos".

O motivo vem da aula anterior: quando o usuário trata a LLM como uma pessoa, ela tende a alucinar, porque, na visão dela, **precisa agradar**. A instrução explícita mostra que ela não precisa agradar e **reduz a tendência de completar qualquer lacuna com criatividade**. Com isso, segundo o professor, dificilmente ela alucina.

## Chain of Truth Proofing: o raciocínio antes da conclusão

A terceira técnica, que o professor chama de **Chain of Truth Proofing** (o nome mais usado para pedir o raciocínio passo a passo é *Chain of Thought*), é pedir ao modelo que **explique o passo a passo antes de responder**: "explique o seu raciocínio antes de chegar à conclusão". Algumas ferramentas, como o Manus, já mostram o que estão processando, mas pedir a explicação é o jeito melhorado.

O ganho é duplo:

1. o modelo ganha **mais consistência lógica**, porque precisa justificar o caminho;
2. você consegue **ver se ele deu algum "salto maluco"** de inferência.

O exemplo (inventado pelo professor) é um artigo sobre a Amazônia: o modelo começa com base em livros e, de repente, afirma que a Amazônia vai acabar no ano que vem, sem mostrar que buscou isso em alguma fonte. No raciocínio exposto, fica visível que ele não foi a lugar nenhum buscar a informação, ou seja, inventou.

## Persona ou escopo declarado

A quarta técnica, que o professor diz usar muito, é **criar uma persona ou um escopo** para o modelo e deixá-lo declarado. Hoje quase todas as LLMs permitem isso, cada uma de um jeito: no ChatGPT (e, ao que ele se lembra, no Manus) você cria uma **pasta de conversa** e escreve em cima o comportamento esperado; no Copilot você cria algo **como se fosse um agente**, numa janela própria; no Gemini também dá.

Exemplo: declarar que o assistente foi **treinado só com dados até 2023 e não tenta prever o futuro**. Você mostra a ele o que ele é e o que não deve inventar. Não precisa ser sobre datas: dá para declarar qualquer jeito de atuar. A vantagem é colocar ali **todas as instruções anteriores** (fontes, cautela, raciocínio) uma única vez, sem repeti-las a cada uso.

Essas são as quatro técnicas que o professor costuma usar.

## Few-shot Prompting

Há uma quinta, o **Few-shot Prompting**, que também reduz a alucinação: você dá ao modelo **exemplos do que entende como correto e como incorreto**. Com o tempo, ele entende **até onde pode responder inferindo** e até onde não, e vai sendo "afinado" para você. O professor não gosta muito dela porque **dá muito trabalho**.

## A conta fica mais afinada com o tempo de uso

Uma observação pessoal do professor: depois de anos usando a mesma ferramenta, ela **passa a falhar menos** para ele. Sua conta do ChatGPT é mais afinada que a do Gemini, que é mais afinada que a do Manus, usada há menos tempo, e o Llama, que ele usou pouquíssimo, talvez seja a menos afinada. A dica: **não ficar pulando de uma para outra**, para ter um assistente que responde melhor. Testar todas é interessante, mas não é obrigatório.

## Casos reais: alucinação em processos judiciais

Para mostrar o tamanho do problema, o professor traz **três casos jurídicos** dos Estados Unidos em que a IA foi usada num cenário que exige precisão. Havia casos médicos também, mas as fontes saíram do ar.

- **Royer vs Nelson (Utah):** o advogado usou uma **citação inexistente**; o tribunal não encontrou registro do caso citado. Ele teve de **se retratar formalmente**, e o tribunal criou diretrizes mais rígidas para o uso de IA. O ponto central: não foi um argumento incoerente, mas um **fato inventado**, que até poderia ser plausível e mesmo assim não existia. Isso destrói a credibilidade.
- **Um grande escritório (citado como "K.A.L." na fala):** apresentou uma peça com **seis citações inexistentes** geradas por IA. O juiz considerou **negligência**, e veio uma **multa de 31 mil dólares**. Para o professor, pior que o valor foi o **dano à reputação**: quem contrataria um escritório conhecido por usar IA errado?
- **Butler Snow (Alabama):** contratado pelo estado para defender o sistema prisional num processo de violação de direitos humanos, o escritório usou IA para gerar argumentos e incluiu **citações falsas**. O impacto, segundo o professor, envolveu **milhões de dólares** e a imagem do estado, e abriu outra discussão: o uso de **dinheiro público** numa defesa feita com IA.

Os casos que ele encontrou são dos EUA; no Brasil, ele nunca viu um.

## A IA como estagiário

A conclusão: a empolgação com a IA precisa existir, mas **com cautela**. Ela não é o gênio da lâmpada. A analogia do professor é a do **estagiário**: alguém que está aprendendo, cujo trabalho você **precisa validar** antes de levar adiante como verdade absoluta.
