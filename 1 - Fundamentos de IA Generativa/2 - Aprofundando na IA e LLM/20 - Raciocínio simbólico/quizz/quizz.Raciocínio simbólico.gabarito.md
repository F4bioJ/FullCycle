# Gabarito — Raciocínio simbólico

## 1. Texto impecável sobre álgebra garante cálculo certo?
**Correta: C**
**Por quê:** a fluência vem de associar padrões de linguagem para prever o próximo token. Lógica e cálculo pedem estruturas formais e regras, que esse mecanismo não garante. Um texto bem escrito não atesta o cálculo.
- **A:** o professor separa as duas habilidades: a fluência é o ponto forte da LLM, e o raciocínio simbólico, o ponto fraco.
- **B:** a conclusão do colega está errada, mas não por esse motivo. O modelo produz explicações construindo token a token, e a aula mostra o ChatGPT explicando um caso lógico.
- **D:** a aula diz que modelos como o GPT-4 fazem isso melhor, mas que ainda não é perfeito. Nada garante o cálculo.
**Conceito:** fluência textual x raciocínio simbólico

## 2. Acertar "todos os A são B" autoriza aplicar regras internas?
**Correta: A**
**Por quê:** o modelo acerta esse exemplo porque casos assim aparecem aos milhões na internet e nos livros. Ele consegue, mas não compreende. Diante do que ainda não mapeou, possivelmente vai errar. Regras internas nunca publicadas têm menos padrão parecido para apoiar a resposta.
- **B:** o acerto vem de estatística sobre vetores, e não de dedução pela regra.
- **C:** é a suposição que o professor derruba: o modelo não aprendeu a estrutura formal, e sim padrões de tokens.
- **D:** a aula diz o contrário: a LLM não tem provador lógico nem mecanismo de verificação interna.
**Conceito:** consegue fazer x compreende

## 3. Erro na primeira etapa com texto bem encadeado
**Correta: D**
**Por quê:** a LLM tem falta de consistência entre etapas: um erro no começo compromete tudo o que vem depois. Como ela tende a gerar respostas plausíveis, o erro passa despercebido e pode até convencer quem lê.
- **A:** as etapas são dependentes, como diz o próprio enunciado, e o erro se propaga em vez de ficar isolado.
- **B:** a LLM não tem verificação interna que perceba a falha, e a aula não fala em manter o erro de propósito.
- **C:** usa uma tendência real da aula de janela de contexto, mas ela não corrige a conclusão. O erro inicial contamina as etapas seguintes.
**Conceito:** falta de consistência entre etapas + respostas plausíveis

## 4. Falta de memória e de verificação: qual está INCORRETA?
**Correta: B**
**Por quê:** é a afirmação falsa. A atenção pesa tokens para prever o próximo, mas não confere se um passo lógico faz sentido. A LLM não tem verificação interna, como um compilador ou um provador lógico.
- **A:** verdadeira. A computação normal guarda, busca e continua; a LLM guarda vetores e correlações.
- **C:** verdadeira. A aula cita o compilador e o provador lógico como o tipo de verificação que falta à LLM.
- **D:** verdadeira. O Transformer tenta construir uma frase, então a resposta pode parecer certa sem estar.
**Conceito:** sem memória simbólica nem verificação interna

## 5. Resultado certo, mas passos do meio errados
**Correta: C**
**Por quê:** a aula descreve esse caso: o modelo pode chegar ao resultado e errar ao expandir os cálculos, e responde bem quando já viu algo parecido no treino. O resultado certo não prova que a álgebra foi feita.
- **A:** o enunciado é curto, e nada indica que a janela tenha acabado. O sintoma é de raciocínio, não de limite de contexto.
- **B:** a LLM não tem memória de processamento para resolver a conta e transcrevê-la depois.
- **D:** a aula diz o contrário: esse tipo de probleminha é comum na internet, o que explica de onde vem o padrão.
**Conceito:** problema das idades: resultado x passos intermediários

## 6. Passo a passo com erro visível no segundo passo
**Correta: A**
**Por quê:** o CoT organiza o raciocínio, melhora as chances de acerto e permite dar feedback. Com os passos expostos, dá para ver onde a soma das idades virou a idade de Maria. Ele melhora as chances, mas o modelo continua podendo errar.
- **B:** o CoT não acrescenta verificação interna. Expor os passos não significa conferi-los.
- **C:** a aula afirma que o CoT melhora as chances de acerto, então não é só apresentação.
- **D:** a aula não condiciona o CoT ao tamanho da janela, e um problema tão curto cabe em qualquer uma.
**Conceito:** Chain of Thought: o que melhora e o que não garante

## 7. App financeiro com juros exatos, depois do CoT
**Correta: D**
**Por quê:** é o raciocínio híbrido: a LLM trabalha com a linguagem natural e delega o cálculo a uma ferramenta que sabe calcular (Python, API, motor simbólico). O CoT melhora as chances, mas deixa a conta com um modelo probabilístico.
- **A:** a aula trata o neurossimbólico como uma linha ainda em estudo, que o professor não viu funcionando, e nada nela dispensa validações.
- **B:** detalhar os passos organiza o raciocínio, mas não cria memória simbólica: o modelo não guarda variáveis como a computação normal.
- **C:** treinar mais dá mais padrões, mas a previsão continua estatística, e a matemática não é previsibilidade estatística.
**Conceito:** raciocínio híbrido: delegar o cálculo

## 8. Híbrido com ferramentas x neurossimbólico
**Correta: B**
**Por quê:** no híbrido, a LLM conecta-se a uma ferramenta que faz o cálculo. No neurossimbólico, une-se Deep Learning a um sistema de lógica simbólica, que além de calcular prova que o cálculo está no caminho. O professor diz que isso ainda está sendo estudado e que não o viu funcionando.
- **A:** inverte os dois: quem chama a calculadora externa é o híbrido.
- **C:** inverte a maturidade: LangChain e AutoGPT são exemplos do híbrido, já usado, e é o neurossimbólico que ainda está em estudo.
- **D:** a aula os apresenta como abordagens diferentes, e o neurossimbólico vai além de ligar LLM e Python.
**Conceito:** híbrido x neurossimbólico

## 9. Regra escrita com dupla negação
**Correta: D**
**Por quê:** negação é uma dificuldade da LLM, e o conselho do professor é não trabalhar na negativa. Reescrever de forma afirmativa ataca a causa e mantém o sentido da regra.
- **A:** a dica de pôr o crítico no final é da aula de janela de contexto e vale para prompts muito grandes. Aqui o prompt é curto, e o problema é a negação.
- **B:** mais negação piora o problema que causou o erro.
- **C:** a janela não é o problema, pois o prompt é curto. A frase é difícil por causa da estrutura, não do tamanho.
**Conceito:** dificuldade com negação

## 10. "Todo pedido aprovado foi pago" e um pedido pago
**Correta: A**
**Por quê:** a LLM trocou "todo aprovado é pago" por "todo pago é aprovado", a inversão de quantificadores que a aula cita. Um pedido pode estar pago sem estar aprovado, então a regra não permite concluir. O conselho para esses cenários é fazer mais validações.
- **B:** é a própria inversão. A regra diz que quem foi aprovado foi pago, não que quem foi pago foi aprovado.
- **C:** "não foi aprovado" também não decorre da regra, que não diz se um pedido pago foi aprovado ou não.
- **D:** a regra e a resposta não se contradizem, pois podem valer juntas. O erro é a resposta não decorrer da regra.
**Conceito:** inversão de quantificadores
