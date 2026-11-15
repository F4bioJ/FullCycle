# Exemplo estruturado de prompts — resumo

## Prompts elaborados e escala

Os prompts mais elaborados desta aula normalmente não rodam em alta escala. Com centenas de milhares ou milhões de requisições, é raro ter um prompt tão grande, a não ser que haja uma especificidade muito grande; às vezes compensa fazer várias chamadas com prompts menores do que fazer o modelo ler uma quantidade enorme de tokens. Nada é regra: a decisão vem na hora, com o problema na mão. O exemplo mostrado, um prompt para gerar testes unitários de uma função Node.js com Jest, é simples e não pretende ser o melhor prompt do mundo; o que importa é a estrutura.

## Persona e escopo

A primeira seção define quem o modelo é (papel, especialidade, role) e o que ele não deve fazer. Exemplo: "Você é um assistente especializado em Node.js versão X e testes com Jest. Não faça refatorações no código original." Isso reduz improvisos, garante alinhamento técnico e deixa mais feliz o colega do Code Review, que terá menos mudanças para revisar.

## Objetivo

Descreva de forma direta e sem ambiguidade o que precisa ser feito. "Escreva testes para o código abaixo" é aberto e vago demais. "Escreva testes unitários para a função abaixo, usando o Jest, cobrindo casos de entradas válidas e inválidas" é mais direto ao ponto.

## Entrada

Depois que a IA sabe o que fazer, defina claramente a entrada: liste só o necessário para a tarefa, mantenha uma separação visual e evite colar arquivos inteiros quando só uma parte importa. No exemplo, a função vai num bloco próprio. Se a entrada vier misturada ao objetivo, a IA confunde o objetivo com o material sobre o qual deve trabalhar, e o resultado fica menos sistemático e mais ambíguo.

## Formato de saída

Para o professor, é o ponto mais crítico: muitas vezes sabemos o que pedir, mas não como queremos a resposta, sobretudo em documentação. Defina o formato exato para minimizar respostas fora do padrão. No exemplo: "Responda apenas com um objeto JSON" com os campos `testFile` (conteúdo do arquivo de teste) e `coverageNotes` (breve descrição da cobertura). JSON não é obrigatório, mas, quando agentes se comunicam entre si, JSON ou outro formato com regras claras mitiga muitos problemas, inclusive riscos de segurança.

## Critérios de qualidade

Especifique o que define uma boa resposta. No exemplo: o teste deve rodar com `npm test` sem ajustes, cobrir casos de entrada válidos e inválidos e não usar bibliotecas externas além do Jest.

## Ambiguidades e pressupostos (assumptions)

Muitas vezes esquecido: diga o que a IA deve fazer quando faltar informação que você supõe que ela tenha. Exemplo: "Se faltar a versão do Node, assuma Node 18. Liste todos os pressupostos feitos no campo `assumptions`." Assim, sempre que a IA tiver de assumir algo para terminar a tarefa, ela informa o que assumiu ao cumprir os critérios.

## Instruções negativas

Liste o que não pode aparecer na resposta, por exemplo: "Não inclua explicações ou comentários fora do JSON." As instruções negativas normalmente são feitas para a saída.

## Tratamento de erro

Explique como a IA deve responder se não conseguir cumprir a tarefa: por exemplo, um JSON com `statusError` e a explicação do motivo pelo qual não atendeu aos critérios.

## O prompt completo

Juntas, as seções formam o prompt: persona e escopo, objetivo, entrada, formato de saída, critérios, ambiguidades e pressupostos, instruções negativas e tratamento de erro. Não é o prompt perfeito, mas tem uma estrutura clara por seções, fácil de entender para a IA e para você, e fácil de reaproveitar. Pedir apenas "gere o teste deste trecho, com base nos outros testes destes arquivos" aumenta a chance de sair fora do padrão ou de gerar testes inúteis. Com estrutura, você é intencional.

## Prompts como ativo

Montar esses prompts dá trabalho e leva tempo. Mas, assim como testes e documentação, os prompts viram um ativo do projeto ao longo dos anos: podem ser reutilizados em vários programas, sem partir do zero.
