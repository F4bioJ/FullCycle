# Conhecimento em tempo real

## Conhecimento congelado após o treinamento

LLMs não atualizam seu conhecimento automaticamente depois do pré-treinamento e dos ajustes posteriores. Quando o treinamento termina, o modelo fica congelado em relação aos fatos do mundo, mesmo que continue útil para geração, síntese e raciocínio sobre o que já aprendeu. Isso cria uma limitação direta para perguntas sobre eventos recentes, preços atuais, decisões judiciais novas ou dados operacionais que mudam com frequência. Nesses casos, a resposta pode ficar desatualizada ou até derivar para alucinação, tema já discutido anteriormente.

## Interações do usuário não retreinam o modelo

Conversar com um modelo não significa alterar seus pesos internos. Cada interação de usuário é processada para inferência, não para treinamento contínuo, porque atualizar pesos a cada conversa exigiria custo computacional e latência incompatíveis com uso em produção. Por isso, o fato de muitas pessoas usarem o mesmo produto não implica que o modelo esteja aprendendo em tempo real com todas elas. Mesmo que logs possam ser armazenados para uso futuro, isso só teria efeito após um novo ciclo explícito de treinamento.

## Instâncias de inferência não compartilham aprendizado em tempo real

Retomando a ideia de infraestrutura, o modelo acessado por um usuário não é necessariamente a mesma instância de inferência usada por outro. Em ambientes com GPUs, múltiplas instâncias podem estar distribuídas por servidores diferentes e não compartilham estado de conversa nem aprendizado online entre si. Isso desmonta o mito de uma “mente coletiva” se atualizando a cada prompt. O sistema pode parecer unificado como produto, mas a inferência ocorre de forma segmentada.

## Contexto de conversa não é aprendizado

Lembra da janela de contexto já discutida? Aqui ela aparece como explicação para o comportamento de “lembrar” algo dentro de uma conversa. O modelo consegue responder como se soubesse seu nome ou preferências porque essas informações ainda estão no contexto ativo, não porque ele reescreveu seu conhecimento interno. Quando a conversa ultrapassa o limite de contexto, parte dessa continuidade se perde e uma nova janela deixa de carregar automaticamente esse histórico.

## Memória ativada é armazenamento auxiliar, não atualização de pesos

Alguns produtos adicionam uma camada de memória persistente para guardar preferências e fatos recorrentes do usuário, como nome, estilo de resposta ou temas de interesse. Essa memória acompanha a interação e melhora personalização, mas continua sendo um mecanismo externo ao modelo, semelhante a um bloco de notas consultado durante a geração. O ponto central é que pesos, vieses e representações internas do modelo não são recalculados por causa disso. Há retenção de informação útil para experiência do usuário, mas não há retreinamento.

## O problema se agrava em domínios com alta volatilidade

Áreas como medicina, jurídico, catálogo de produtos e dados corporativos mudam rápido demais para depender apenas do conhecimento congelado do modelo. Uma recomendação clínica, uma decisão judicial recente, um preço atualizado ou um número financeiro do dia podem simplesmente não existir na memória do modelo base. Nesses cenários, confiar apenas no que foi aprendido no treinamento é operacionalmente arriscado. O sistema precisa receber dados externos atualizados no momento da consulta.

## Atualizar a base por retreinamento é caro e lento

Se um modelo foi treinado com dados até certo período, ele continuará refletindo esse recorte temporal até passar por novo treinamento ou fine-tuning apropriado. Esse processo é caro, demorado e inadequado para acompanhar mudanças diárias ou horárias. Por isso, retreinamento não é a solução padrão para conhecimento em tempo real. A arquitetura precisa separar capacidade linguística do modelo e atualização factual dos dados consultados.

## Prompting com fontes externas injeta atualidade na resposta

Uma forma simples de contornar a desatualização é instruir o sistema a consultar fontes específicas antes de responder. Em vez de perguntar genericamente sobre tecnologia atual, é mais eficaz restringir a busca a bases como publicações do MIT ou de Stanford e usar esse conteúdo como referência imediata. Isso reduz a dependência do conhecimento congelado e melhora a confiabilidade da resposta. A estratégia continua baseada em prompt, mas passa a operar com contexto externo recente.

## RAG organiza a recuperação de conhecimento atualizado

RAG aplica de forma estruturada a ideia de buscar informação externa e inseri-la no contexto do modelo antes da geração. Retomando o conceito já visto, a novidade aqui é seu papel como mecanismo de atualização factual: a pergunta aciona uma busca em documentos recentes, os trechos relevantes são recuperados e incorporados ao prompt, e só então o modelo responde. O modelo não aprende o conteúdo novo; ele apenas o lê no momento da inferência. A vantagem é combinar linguagem natural fluente com evidência atual sem alterar os pesos do LLM.

## A analogia correta é consulta, não aprendizado

O comportamento se parece mais com uma pessoa que sabe ler e consulta um livro antes de responder do que com alguém que internalizou permanentemente o conteúdo. Depois da leitura, a pessoa consegue formular a resposta, mas isso não significa que dominava o assunto antes nem que reconfigurou sua mente de forma duradoura. Com LLMs ocorre algo semelhante quando documentos externos são anexados ao prompt. A resposta melhora porque a informação certa foi fornecida no momento certo.
