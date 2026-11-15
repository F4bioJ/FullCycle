# Introdução a temperatura — resumo

## O que é temperatura

Temperatura, aqui, não tem a ver com clima nem com o aquecimento da GPU. É um **parâmetro de controle da geração** das LLMs, que altera o grau de aleatoriedade aplicado à distribuição de probabilidades do próximo token.

## A escolha do próximo token

Retomando bigramas e Transformers, o professor usa a frase "O cachorro hoje latiu no...". O modelo precisa decidir o que vem a seguir, e essa decisão **não é exata**: ele não escolhe "a palavra certa", e sim uma continuação provável, que você deve aceitar como correta. O modelo atribui probabilidades a várias opções e escolhe uma delas. O próximo token pode ser uma palavra inteira, um pedaço de palavra ou um símbolo.

## Estratégias de amostragem e o "depende"

Há formas diferentes de fazer essa escolha, e a temperatura ajuda a controlá-la por meio de estratégias de amostragem. A pergunta prática é que perfil se quer: mais criativo ou mais conservador, mais preciso ou mais surpreendente, mais fluente ou mais técnico. A resposta do professor é que **depende do que você vai fazer**.

Em um texto jurídico, o que se quer é uma saída técnica, precisa e conservadora. Em um poema, um livro ou uma música, o que se quer é criatividade e surpresa. A temperatura serve para alternar entre esses caminhos.

## O mecanismo: abertura ao inesperado

Depois de calcular as probabilidades, na hora da decisão, o modelo dá uma abertura ao inesperado. **Quanto maior a temperatura, maior a abertura; quanto menor, menor a abertura.** A função da temperatura é colocar aleatoriedade na distribuição de probabilidades, achatando-a ou acentuando-a antes da escolha.

O professor descreve isso como aleatoriedade "dentro dos vetores" e das camadas do Transformer. O resumo escrito por ele localiza melhor o efeito: na distribuição, antes de o token ser escolhido.

## A faixa de valores

O professor apresenta como faixa usual de **0,1 a 1,0**, subindo de 0,1 em 0,1. São cerca de dez posições para trabalhar.

## Temperatura baixa

Na faixa de **0,1 a 0,3**, a aleatoriedade diminui e o modelo tende a escolher os tokens de maior probabilidade, sem se desviar. Isso serve para saídas previsíveis e técnicas, como textos jurídicos. O ganho é consistência; a perda é variedade. Um poema escrito com temperatura 0,1 tende a sair ruim, nas palavras do professor, "uma porcaria".

## Temperatura alta

Na faixa de **0,7 a 1,0**, a diversidade aumenta e o modelo fica mais propenso a escolher palavras improváveis. O texto sai mais criativo, o que é bom para brainstorm e tarefas artísticas. O custo é menos previsibilidade e mais chance de escolhas pouco adequadas ao contexto. Em aplicações sensíveis, subir a temperatura sem critério pode degradar a qualidade factual e técnica da resposta.

## A metáfora do especialista na biblioteca

Imagine um especialista entrando em uma biblioteca, a quem se pede tudo sobre temas jurídicos. Com temperatura baixa, ele vai direto ao **Vade Mecum**, sem dar abertura a outras opções. Com temperatura 1,0, o mesmo especialista pode voltar com um livro de Monteiro Lobato ou de Harry Potter.

A metáfora mostra que a temperatura **não acrescenta conhecimento** ao modelo: ela muda o quanto ele se afasta do caminho mais provável.

## O Hugging Face Playground

A parte prática usa o **Playground do Hugging Face**, um ambiente web para testar modelos e ajustar parâmetros de geração sem começar por código. O professor fala em `huggingface.com/playground`; o domínio do site é `huggingface.co`. O mesmo ambiente servirá de base para comparar a temperatura com a janela de tokens e com top-k e top-p.

## Criar a conta

Ao abrir o Playground, a tela já pede um token, mas essa janela pode ser ignorada no início, porque o primeiro passo é ter uma conta. O cadastro pede e-mail, senha e um username que ainda não exista. Avatar e demais dados de perfil são opcionais na prática: o professor só gera um avatar aleatório para seguir adiante.

## Criar o token de acesso

O token é uma **credencial** que autoriza o uso da plataforma e libera o ambiente de teste. Ele é criado em `settings/tokens`, com "Create new token". Antes disso, é preciso **confirmar o e-mail**, pelo link enviado na mensagem de confirmação.

Para simplificar, o professor marca as permissões de usuário, liberando tudo para aquele usuário, e não usa as permissões de repositório. A explicação com calma sobre o Hugging Face fica para outro momento. Depois, basta dar um nome ao token, criá-lo, copiá-lo e colá-lo no campo do Playground.

## Da teoria à prática

Com o token aceito, a página principal fica disponível, e a temperatura aparece nos controles laterais. O teste mais útil é repetir **o mesmo prompt** em valores diferentes, como 0,1 e 1,0, para observar a diferença entre precisão e criatividade. Ao mudar a temperatura, você não muda o assunto do modelo: ajusta a política de escolha entre tokens prováveis e improváveis. É o primeiro mecanismo concreto de controle de geração nas LLMs.
