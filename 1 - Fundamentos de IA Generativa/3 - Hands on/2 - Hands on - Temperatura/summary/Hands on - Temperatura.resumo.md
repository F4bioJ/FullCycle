# Hands on - Temperatura — resumo

## O Playground e o que ajustar

O experimento roda no Playground do Hugging Face, com a conta criada na aula anterior. Dois lugares importam: a área central, onde vão as mensagens, e o painel à direita, com o modelo e os parâmetros. Algumas partes do site são pagas, mas nada do que a aula faz exige plano pago.

O controle de temperatura vai até 2. O professor trabalha de **0,1 a 1**; o limite maior serve aqui para ver o que acontece fora dessa faixa.

## Montar o teste: modelo, provider e prompt

O modelo principal é o DeepSeek R1-0528, porque o DeepSeek R1 direto pede upgrade. O professor também escolhe quem executa o modelo: pode ficar em automático, mas ele prefere a Novita, porque outros às vezes quebram.

O prompt fixo é: "me explique como funciona um buraco negro utilizando exemplos claros de abstração com temas mais fáceis para melhorar o entendimento". Ele já puxa a resposta para analogias, então a criatividade não vem só da temperatura.

## Temperatura 0,1: resposta contida

**O que observar:** o campo **Thinking**, em que o DeepSeek mostra o plano antes da resposta (analogias simples, gravidade extrema, horizonte de eventos, singularidade). Ao fechar esse bloco, vem o texto que o usuário veria normalmente.

**O que saiu:** um "ralo de pia cósmico" para o buraco negro e um rio que deságua em uma cachoeira para o horizonte de eventos, o ponto sem volta. O professor considerou a explicação boa. Mesmo aqui apareceu um token errado: "grava" onde provavelmente caberia "gera".

## Temperatura 1: criatividade não pedida

**O que observar:** o que entra na resposta sem ter sido solicitado. O Thinking segue parecido com o anterior, mas o texto muda.

**O que saiu:** o espaço-tempo como uma cama elástica rasgada, uma estrela que vira "pipoca queimada" e uma curiosidade sobre dilatação do tempo que ninguém pediu. A resposta fica mais abstrata e menos direta.

## Temperatura 2: a saída desmonta

**O que observar:** se o texto ainda faz sentido. O professor roda de novo para descartar que tenha sido um erro pontual, e o resultado se repete.

**O que saiu:** mistura de idiomas, menção a um resumo em chinês, Thinking bagunçado e resposta final incompreensível. Para quem lê, parece alucinação. A explicação do professor é que, a cada próximo token, a escolha fica tão aberta que pode ir "para qualquer lado". Por isso ele fica entre 0,1 e 1.

Ele levanta a hipótese de que o DeepSeek passa pelo chinês por dentro, mas avisa que não tem certeza.

## Temperatura 0,5: o ponto de trabalho do professor

**O que saiu:** um "ralo no fundo da piscina", em texto mais organizado e direto, com menos palavras erradas. As analogias lembram as anteriores, porque o modelo é o mesmo. É onde o professor acha que se deveria trabalhar normalmente com esse tipo de pergunta.

## Trocar o modelo, mantendo o prompt

- **Minimax:** respondeu em inglês e entregou o texto em blocos. Isso dá impressão de lentidão, embora o professor não saiba se é mais lento.
- **Gemini de entrada (versão 2):** resposta bem mais curta, com colchão d'água e bolinha de gude. O professor atribui isso a um modelo mais simples e barato. Em 1, gerou mais texto, com trampolim e funil. Em 2, degradou com caracteres de outro idioma e pareceu pior que o DeepSeek; a suspeita de que isso venha de ter menos tokens é só um "talvez" dele.
- **Mistral:** resposta curta, sem mostrar o Thinking, com a montanha-russa como fio condutor do começo ao fim. O professor lê isso como uma IA mais nichada.

**O que isso mostra:** o Thinking não aparece em todo modelo, e tamanho, idioma e profundidade variam mesmo com o prompt igual.

## Erros e pedidos de upgrade

Às vezes o botão de executar dá erro: basta fechar e rodar de novo. Se aparecer um pop-up pedindo upgrade, recuse e troque de modelo. Isso é raro; com o professor, aconteceu umas duas vezes.

## O que fazer por conta própria

1. Fixe a IA e mude só a temperatura.
2. Fixe a temperatura e mude só a IA.
3. Em ambos, repita exatamente o mesmo prompt.

Assim, as diferenças não vêm da pergunta, e você passa a ter base para dizer por que prefere um modelo a outro: como cada um pensa, responde e até onde aprofunda.
