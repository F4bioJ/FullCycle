# Alucinação — resumo

## Os desafios da IA, começando pela alucinação

Depois de mostrar como a IA evoluiu e como uma LLM é treinada, o professor abre, antes do próximo capítulo, uma série sobre os **desafios** das LLMs. Começa pelo mais próximo da conversa sobre arquitetura, que não é o mais importante, só o mais perto do que vinha sendo discutido.

Esse primeiro desafio se divide em dois temas que costumam ser misturados num "bololo só": **alucinação** e **factualidade**. São coisas diferentes, mas muito próximas, e a aula trata as duas juntas.

## Como a LLM "pensa"

Para entender a alucinação, é preciso entender como a LLM funciona. Ela é **mestre em fluência textual**: com base no texto que já conhece, prevê a construção textual que vem pela frente. O que ela **não** faz é entender o que está dizendo; ela desconhece o assunto tratado.

O professor cita o neurocientista brasileiro Miguel Nicolelis, da Universidade Duke, para quem a IA "não é nem inteligente, nem artificial". A LLM transforma a linguagem em cálculo: os tokens viram vetores, e sobre eles o modelo calcula a **probabilidade de cada novo token aparecer**. Se todos os tokens fossem trocados por sinais sem sentido, o processo chegaria ao mesmo lugar. Por isso, responder sobre física quântica e responder sobre bolo de cenoura usa **a mesma estratégia**: o mecanismo é textual, não uma checagem do assunto.

Daí a crítica: ela é inteligente ou só cria texto, como uma criança também cria? A base enorme de informação faz parecer conhecimento vasto, mas seria como chamar um banco de dados de inteligente por guardar muita informação.

## Respostas fluentes, erros convincentes

Como o modelo não sabe o que está respondendo, ele gera respostas **naturais, bem estruturadas e confiantes**, inclusive quando estão erradas: "mente com categoria". Na maior parte das vezes acerta, mas quando erra, o erro pode convencer. Isso cria uma ilusão perigosa: **"se o texto parece certo, então deve estar certo"**.

O modelo pode tanto gerar tokens errados quanto **inventar informações para agradar**, dependendo de como foi treinado, e entregar dados plausíveis, porém falsos. A alucinação é, então, o fenômeno em que a LLM gera uma afirmação **factualmente incorreta**, sem base em dados factuais. Não há intenção de errar: é uma composição probabilística que produz uma frase bem construída com uma mentira dentro.

## Alucinação factual

O modelo afirma como verdade algo objetivamente errado. Exemplo: dizer que **Marie Curie ganhou três prêmios Nobel**, quando ganhou dois. Para quem não conhece a história, faz sentido, porque ela de fato ganhou prêmios Nobel.

O impacto **depende do uso**: numa conversa, o erro não importa; numa cirurgia, pode importar muito. A LLM possivelmente não serve para algo que não admita nenhum erro, o que não proíbe usá-la, mas exige cuidado.

## Alucinação de citação ou fonte

O modelo cita frases, artigos ou casos que não existem. Exemplo: pedir uma frase do Steve Jobs, perguntar onde ele disse aquilo e receber uma fonte inventada. Alguns modelos alucinam mais que outros. Informações muito recentes, que exigem busca na internet, também levam a erros.

O problema piora com **pedidos indutivos**: pedir artigos que comprovem que a Terra é plana faz o modelo listar artigos que, ao clicar, não existem.

## Alucinação estrutural

O modelo produz **fórmulas matemáticas, código ou instruções que não existem** ou têm erro, o que acontece principalmente na codificação. Por isso, quem usa IA para programar precisa fazer **peer review** do que ela gera, como num pair programming, para conferir se o resultado é real.

## Alucinação contextual

É a mais difícil de pegar. A resposta começa coerente, mas, **quanto maior a conversa, mais difícil manter a correlação**, e ela deriva para trechos que não fazem sentido com o começo: o modelo perde o raciocínio no meio. Acontece em texto e ainda mais em imagem, que começa bem e se perde no final, porque a construção é feita token a token.

## Por que acontece

O modelo gera texto por probabilidade. Ele **não tem uma base factual** para confirmar que algo é real, só uma **intuição estatística** do que deveria vir a seguir. As alucinações surgem quando:

- **falta conhecimento específico** no treinamento;
- a pergunta exige uma **inferência combinada** com algo que o modelo não aprendeu (por exemplo, cruzar duas teorias), e ele precisa imaginar o meio;
- o **prompt deixa lacunas** que o modelo preenche com suposições.

Por isso o professor diz que às vezes é melhor "tratar mal a IA": fazer a pergunta **direta e específica** e, quando possível, dar **exemplos** da resposta esperada.

Há ainda um fator de comportamento: a maioria das LLMs foi feita para **parecer humana** e agradável, para o usuário continuar usando, o que aumenta a chance de uma resposta convincente e falsa. Quanto mais direto o usuário for, mais o modelo interage do mesmo jeito, e menor a chance de erro.

## Por que o problema é crítico

Numa conversa descontraída, como comparar a Bíblia com o Rei Leão, falar besteira não tem problema. Num **cálculo estrutural** ou em contextos **médicos e jurídicos**, um erro pode ser grave.

Além disso, os erros geram **perda de confiança**: o usuário que os percebe passa a confiar menos e deixa de usar, o que ameaça o boom atual e traz o medo de um novo **inverno da IA**. E validar tudo é muito difícil: as respostas são muitas, rápidas e fluentes, e não dá para checar cada uma num site. Por isso, quem usa o conteúdo gerado precisa **ter conhecimento** do assunto, em vez de repetir o que a IA "cuspiu".

## Exemplo final: o Nobel inventado

O professor imagina a pergunta "quem ganhou o Nobel de Física de 2023?" e inventa na hora uma resposta: uma pesquisadora, Claudia Miller, premiada por "estrutura de prótons aplicada à quântica no clima". Soa técnico e convincente, mas é invenção. A reflexão: se a IA entregasse isso, você validaria? Deveria. Ao usar uma LLM, é preciso treiná-la direito e, num chat do dia a dia, validar o que não se domina.
