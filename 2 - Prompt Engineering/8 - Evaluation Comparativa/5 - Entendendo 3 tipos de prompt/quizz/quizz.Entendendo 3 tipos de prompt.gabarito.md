# Gabarito — Entendendo 3 tipos de prompt

## 1. Agressivo e conservador rodados em metades diferentes do dataset
**Correta: B**
**Por quê:** a comparação entre prompts só vale quando o prompt é a única coisa que muda: mesmo dataset, mesmo ground truth, prompt diferente. A aula monta um único dataset (código Go + ground truth) para os três prompts, e a aula anterior tratou o prompt como variável experimental ("muda-se o prompt, executa-se no mesmo dataset e mede-se o efeito"). Com metades diferentes, a precision maior pode vir de trechos mais fáceis, e não do prompt.
- **A:** ter ground truth em cada trecho permite calcular a métrica, mas não torna comparáveis dois conjuntos de código diferentes.
- **C:** o ground truth é o output esperado para cada código e não muda com o prompt; é ele que serve de régua comum para comparar os três. Ajustá-lo ao prompt destruiria a comparação.
- **D:** o professor chamou o conservador de "focado em recall", mas o comportamento descrito (só reportar com 100% de certeza) favorece precision. E trocar a métrica não resolve o problema dos subconjuntos diferentes.
**Conceito:** mesmo dataset para comparar prompts

## 2. Alerta indevido caro, bugs menores toleráveis
**Correta: D**
**Por quê:** o conservador manda reportar só o que tiver 100% de certeza ("é melhor não colocar nada do que gerar falso positivo"). Menos falsos positivos entre os itens reportados é o que sobe a precision, que é o que esse time quer. O custo, deixar passar alguns bugs reais (falsos negativos, recall menor), é aceitável no cenário.
- **A:** o agressivo manda reportar qualquer possível erro, mesmo remoto, e aceita trazer bugs que não existem: isso aumenta os falsos positivos e tende a baixar a precision. O professor diz na fala que esse prompt "foca em precisão", mas o comportamento descrito é o de recall.
- **B:** o balanceado busca um meio-termo entre os dois lados, mas o cenário pede priorizar um deles (evitar alertas indevidos e aceitar perder bugs menores), que é o papel do conservador.
- **C:** o prompt é o certo, mas a métrica está trocada (o professor também a chamou de recall). Exigir 100% de certeza reduz alarmes falsos e deixa bugs reais de fora, o que favorece precision e derruba recall.
**Conceito:** prompt conservador favorece precision

## 3. Reaproveitar o balanceado num dataset de concorrência
**Correta: A**
**Por quê:** o professor diz que deu ao balanceado as prioridades segurança, robustez/performance e qualidade de código "porque esses três tipos de situações são coisas que têm no nosso dataset", e os exemplos few-shot e a checklist seguem essas mesmas categorias. Num dataset dominado por outro tipo de bug, o prompt continua orientado para problemas que quase não aparecem ali.
- **B:** a aula não diz que os 80% foram calculados a partir do dataset; é uma regra de confiança escrita no prompt, não um número ajustado aos dados.
- **C:** o limiar de 80% é uma regra geral de confiança, mas ele não diz o que procurar; as prioridades, os exemplos e a checklist continuam apontando para segurança, robustez/performance e qualidade, e não para concorrência.
- **D:** exigir 100% de certeza é a regra do conservador; o balanceado pede 80% ou mais de confiança.
**Conceito:** categorias do balanceado vêm do dataset

## 4. Qual candidato o balanceado reporta
**Correta: C**
**Por quê:** os quatro candidatos passam do limiar geral de 80%; o que decide é a regra de cada categoria. Em robustez/performance, o prompt pede padrões claros, em que o problema é óbvio. Uma consulta dentro de um loop (N+1), visível no código, é esse tipo de padrão, e N+1 é um dos exemplos citados na aula.
- **A:** passa dos 80%, mas a regra de segurança é ser minucioso (thorough) e verificar se a vulnerabilidade é real; uma suspeita deduzida do nome da função, sem conferir o fluxo da entrada, não cumpre isso.
- **B:** passa dos 80%, mas em qualidade o prompt pede só violações e manda deixar de fora os casos de fronteira (borderline cases), como este.
- **D:** passa dos 80%, mas a regra de robustez/performance pede padrões claros; uma impressão de que a função "faz coisa demais", sem padrão específico, não passa.
**Conceito:** regras de confiança por categoria

## 5. Tirar few-shot e checklist do balanceado
**Correta: B**
**Por quê:** no balanceado, os exemplos few-shot mostram problemas de cada categoria (falhas de segurança, N+1, nomes errados, código verboso) e a checklist lista os tipos de erro que o modelo pode encontrar. São eles que dizem o que conta como finding em cada categoria. Sem eles, sobra uma instrução genérica e o limiar, e o modelo tem de adivinhar onde fica a fronteira de cada categoria.
- **A:** o limiar diz o quanto de confiança é preciso, não o que procurar; os exemplos e a checklist é que definem os tipos de problema esperados.
- **C:** a regra dos 80% continua escrita no prompt; tirar a checklist não a anula, e nada indica que o modelo passe a reportar qualquer indício como o agressivo.
- **D:** few-shot também ajuda no formato, mas no balanceado os exemplos foram escolhidos por categoria de problema, para mostrar o que o modelo pode encontrar.
**Conceito:** few-shot e checklist por categoria
