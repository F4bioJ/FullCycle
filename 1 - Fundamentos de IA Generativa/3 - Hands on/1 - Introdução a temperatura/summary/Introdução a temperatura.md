# Introdução a temperatura

## Temperatura e geração probabilística

Temperatura é um parâmetro de controle de geração que altera o grau de aleatoriedade aplicado à distribuição de probabilidades do próximo token. Um modelo de linguagem não escolhe a “palavra certa” de forma determinística; ele estima quais tokens são mais prováveis dado o contexto atual e seleciona a continuação a partir dessa distribuição. Esse parâmetro importa porque a mesma entrada pode produzir saídas mais previsíveis ou mais variadas, dependendo de quanto espaço se dá para opções menos prováveis. Em termos práticos, temperatura baixa favorece continuidade conservadora; temperatura alta amplia diversidade e risco de respostas inesperadas.

## Próximo token e distribuição de probabilidades

Quando o modelo recebe uma frase incompleta como “O cachorro hoje latiu no...”, ele precisa prever qual token vem a seguir. Essa decisão não é binária nem exata: o modelo atribui probabilidades a várias continuações possíveis e escolhe uma delas com base nesse ranking probabilístico. O próximo token pode ser uma palavra inteira, parte de palavra ou símbolo, dependendo da tokenização do modelo. A temperatura atua exatamente nesse ponto, achatando ou acentuando a distribuição antes da escolha.

## Efeito de temperaturas baixas

Na faixa baixa, como 0,1 a 0,3, o modelo tende a privilegiar os tokens de maior probabilidade e reduz a chance de desvios criativos. Isso é útil quando a saída precisa ser previsível, técnica e conservadora, como em textos jurídicos ou respostas em que precisão importa mais que originalidade. O ganho é consistência; a perda é variedade. Se a tarefa exigir expressão artística, essa configuração tende a produzir resultados pobres ou excessivamente rígidos.

## Efeito de temperaturas altas

Na faixa alta, como 0,7 a 1,0, a distribuição fica mais aberta a tokens improváveis e a saída ganha diversidade lexical e estrutural. Esse comportamento favorece brainstorm, poesia, música e outras tarefas em que surpresa e exploração são desejáveis. O custo dessa liberdade é a redução de previsibilidade e o aumento da chance de escolhas menos adequadas ao contexto. Em aplicações sensíveis, elevar a temperatura sem critério pode degradar a qualidade factual e técnica da resposta.

## Metáfora da biblioteca

Uma forma intuitiva de entender temperatura é imaginar um especialista dentro de uma biblioteca. Com temperatura baixa, ao pedir referências jurídicas, ele vai direto ao Vade Mecum porque a escolha mais provável domina a decisão. Com temperatura alta, esse mesmo especialista passa a considerar livros menos relacionados e pode retornar com opções improváveis, como literatura infantil ou fantasia. A metáfora mostra que temperatura não adiciona conhecimento novo ao modelo; ela altera o quanto ele se afasta do caminho mais provável.

## Hugging Face Playground

O Hugging Face Playground é um ambiente web para testar modelos e ajustar parâmetros de geração sem precisar começar por código. Ele permite observar rapidamente como mudanças em temperatura afetam a resposta para o mesmo prompt, o que o torna útil para experimentação inicial. Como este parâmetro será reutilizado junto com janela de tokens e top-k/top-p, o Playground funciona como base operacional para comparar comportamentos. O objetivo aqui é validar visualmente que o controle de geração altera a escolha do próximo token.

## Token de acesso e autenticação

Para usar o Playground autenticado, é necessário criar uma conta no Hugging Face e gerar um token de acesso nas configurações da conta. Esse token funciona como uma credencial que autoriza o uso da plataforma e libera o ambiente de teste após o login. O fluxo básico é: acessar `huggingface.com/playground`, fazer cadastro ou login, confirmar o e-mail e depois criar um token em `huggingface.com/settings/tokens`. Após copiar o token e submetê-lo no Playground, a interface principal fica disponível para experimentação.

## Passo a passo prático de acesso

Abra `huggingface.com/playground` e ignore inicialmente a solicitação de token, porque o primeiro passo é autenticar a conta. Se ainda não houver cadastro, crie usuário, senha e username; em seguida, confirme o e-mail para liberar a geração de credenciais. Depois acesse `settings/tokens`, crie um novo token, copie o valor gerado e cole no campo solicitado pelo Playground. Com isso, a interface passa a exibir os controles laterais, incluindo o parâmetro de temperatura que será usado nos testes.

## Conexão entre teoria e prática

Ao alterar a temperatura no Playground, você não está “mudando o assunto” do modelo, mas ajustando a política de escolha entre tokens prováveis e improváveis. O experimento mais útil é repetir o mesmo prompt em diferentes valores, como 0,1 e 1,0, para observar a diferença entre precisão e criatividade. Retomando a frase incompleta e a metáfora da biblioteca, o comportamento esperado é simples: valores baixos aproximam a resposta do caminho mais previsível; valores altos aumentam a abertura para alternativas inesperadas. Esse é o primeiro mecanismo concreto de controle de geração em LLMs.
