# História da IA, o início — material avançado

**Capítulo:** 1 - Gen IA · **Aula:** 4

A aula percorreu Turing, Dartmouth, o perceptron e a IA baseada em regras. Este material mostra o que cada marco propôs de fato, o limite matemático que travou o perceptron e por que as discussões de 1950 voltaram a importar com os LLMs.

---

## 1. O que Turing realmente propôs

O artigo é *Computing Machinery and Intelligence*, de 1950. Turing não tentou responder "as máquinas podem pensar?". Ele considerou a pergunta vaga demais e a **trocou por outra**, que pudesse ser testada.

O ponto de partida era um jogo de salão com três pessoas: um interrogador faz perguntas por escrito a um homem e a uma mulher, em outra sala, e tenta descobrir quem é quem. O homem tenta enganar e a mulher tenta ajudar. Turing propôs colocar **uma máquina no lugar do homem** e perguntar: o interrogador erra com a mesma frequência?

Ele também fez uma previsão concreta: em cerca de cinquenta anos, um interrogador médio não teria mais de **70% de chance** de identificar a máquina corretamente após **cinco minutos** de perguntas.

O teste mede **comportamento**, não compreensão. O resumo do professor acerta nisso: ele oferece um critério operacional sem depender de definir "pensar".

## 2. As duas objeções que os LLMs ressuscitaram

**ELIZA (1966).** Joseph Weizenbaum criou um programa que imitava um psicoterapeuta. Ele procurava palavras-chave na frase do usuário e as devolvia em forma de pergunta. Não havia nenhum modelo de significado, e mesmo assim houve quem acreditasse estar conversando com uma pessoa.

**O quarto chinês (1980).** John Searle imaginou alguém trancado em um quarto, seguindo um manual para responder a mensagens em chinês sem entender chinês. De fora, as respostas parecem perfeitas. O argumento: um programa pode passar no teste **manipulando símbolos sem compreendê-los**, portanto passar no teste não prova que a máquina pensa.

As duas críticas apontam para o mesmo fenômeno: **atribuímos compreensão a qualquer coisa que produza linguagem fluente**. Com os LLMs, isso deixou de ser curiosidade filosófica e virou risco de produto.

## 3. Dartmouth: uma conjectura, não uma conclusão

| Dado | Fato |
|---|---|
| Quando | verão de 1956, por cerca de seis a oito semanas |
| Organizadores | John McCarthy, Marvin Minsky, Nathaniel Rochester e Claude Shannon |
| Origem do nome | McCarthy escolheu "inteligência artificial" na proposta, de 1955 |

A frase central da proposta é uma hipótese de trabalho: todo aspecto do aprendizado ou de qualquer outra característica da inteligência pode, em princípio, ser descrito com tanta precisão que uma máquina seria capaz de simulá-lo.

O evento importa por ter dado **nome e agenda** ao campo. E por ter fixado um otimismo que, duas décadas depois, cobraria a conta (o inverno da IA, na próxima aula).

## 4. O perceptron por dentro

O neurônio artificial vem de **McCulloch e Pitts, em 1943**. A contribuição de Frank Rosenblatt foi fazer o neurônio **aprender**: ele simulou o perceptron em um IBM 704 em 1957 e o descreveu em artigo em 1958. A versão em hardware, o Mark I Perceptron, foi demonstrada em 1960 e reconhecia imagens com uma grade de 20×20 fotocélulas (400 pixels).

### Como ele decide e como aprende

```
saída = 1 se (w1·x1 + w2·x2 + b) > 0, senão 0
```

É uma soma ponderada seguida de um limiar. O aprendizado é uma regra de uma linha:

```
w ← w + taxa × (resposta_certa − saída) × x
```

Se o perceptron acertou, a diferença é zero e nada muda. Se errou, cada peso é empurrado na direção que teria reduzido o erro. É a "quebra de paradigma" da aula: ninguém escreve a regra, ela sai dos exemplos.

### O limite que não era de hardware

A aula atribuiu a estagnação à falta de dados e de processamento. Havia também um **limite matemático**. A soma ponderada com limiar traça **uma linha reta** no espaço das entradas. O perceptron só separa o que uma reta consegue separar.

| x1 | x2 | E (AND) | OU-exclusivo (XOR) |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 0 |

No AND, uma reta separa o único "1" dos três "0". No XOR, os "1" ficam em cantos opostos de um quadrado, e **nenhuma reta** os separa dos "0".

Em 1969, Marvin Minsky e Seymour Papert publicaram o livro *Perceptrons*, que expôs esse limite. A influência do livro contribuiu para a queda de pesquisa e de financiamento em redes neurais até os anos 1980.

A solução era conhecida: **uma segunda camada** resolve o XOR, e os próprios autores sabiam disso. O que faltava era um método para **treinar** redes de várias camadas, que só se firmaria mais tarde, com o backpropagation.

## 5. IA baseada em regras: por que venceu e por que parou

As regras "se... então" venceram naquele momento porque cabiam no hardware da época e porque seu comportamento era previsível. Evoluíram para os **sistemas especialistas**, que tiveram uso comercial real.

O limite apareceu na manutenção. Sistemas como o XCON ficaram **caros demais para manter**: eram frágeis diante de casos não previstos e **não aprendiam**. Cada exceção do mundo real exigia mais uma regra escrita à mão, e as regras começavam a conflitar entre si.

## 6. Os dois caminhos continuam vivos

| | Simbólico (regras) | Conexionista (redes) |
|---|---|---|
| Conhecimento vem de | especialistas que o escrevem | exemplos |
| Ponto forte | previsível, auditável, exato | lida com ambiguidade e variação |
| Ponto fraco | não cobre o que não foi previsto | difícil de explicar e de garantir |

Os sistemas atuais **combinam os dois**: um LLM interpreta a linguagem, e regras em volta dele validam o formato da saída, aplicam políticas e bloqueiam ações proibidas.

---

## O que a aula simplificou

- **"Turing perguntou se as máquinas podem pensar."** Ele abriu com essa pergunta e a substituiu pelo jogo da imitação, por considerá-la impossível de responder como estava.
- **"Dartmouth concluiu que seria possível."** Essa era a conjectura da proposta, o ponto de partida do encontro, e não um resultado demonstrado.
- **"O perceptron foi travado por falta de dados e processamento."** Havia também um limite matemático (só separa o que é linearmente separável) e a falta de um método para treinar várias camadas.
- **"As regras foram um passo para trás."** Foram a abordagem viável e útil por décadas, e continuam sendo a ferramenta certa quando o comportamento precisa ser exato e auditável.
- **"Rosenblatt criou a primeira ideia de rede neural."** O neurônio artificial é de McCulloch e Pitts (1943). Rosenblatt acrescentou o aprendizado.

## Implicações para quem constrói software com IA

- **Fluência não é evidência de compreensão.** Seus usuários vão atribuir ao sistema entendimento e intenção que ele não tem. Projete a interface e os avisos considerando isso.
- **Regra de negócio exata continua sendo código.** Cálculo de imposto, permissão de acesso e validação de formato não devem ser delegados a um modelo probabilístico.
- **Use o modelo para a ambiguidade e as regras para a garantia.** É a divisão de trabalho que sobreviveu a setenta anos de história.
- **Desconfie de previsões de prazo.** A área errou para mais em 1956 e muitas vezes depois.

## Armadilhas comuns

- Tratar "passou no teste de Turing" como prova de inteligência.
- Achar que redes neurais são uma ideia recente (o neurônio artificial é de 1943).
- Achar que o perceptron falhou só por falta de máquina.
- Descartar regras como tecnologia ultrapassada.

## Fontes

- Turing test (artigo de 1950, jogo da imitação, previsão, quarto chinês, ELIZA) — https://en.wikipedia.org/wiki/Turing_test
- Dartmouth workshop — https://en.wikipedia.org/wiki/Dartmouth_workshop
- Perceptron (Rosenblatt, Mark I, XOR, Minsky e Papert) — https://en.wikipedia.org/wiki/Perceptron
- AI winter (sistemas especialistas, XCON) — https://en.wikipedia.org/wiki/AI_winter
