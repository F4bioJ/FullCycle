# Quizzes: nível e formato

## Relevância primeiro

Em 2026-10-15 o usuário disse que estava gastando tempo demais com os quizzes e duvidou que as contas valessem a pena para o curso. Pediu para tirar "tudo o que não é importante". Cada pergunta precisa responder sim a esta pergunta: **isso muda como alguém entende, escolhe ou depura um sistema de IA?**

- **Entra:** mecanismo (por que funciona), limite (onde quebra e por quê), troca entre abordagens, escolha prática (que modelo usar, o que um sintoma indica) e a ligação com aulas anteriores (nunca com as seguintes, veja "Escopo" abaixo).
- **Sai:** conta feita à mão (forward, Bayes, bigrama com vários fatores), datas, autores e quem publicou o quê, contagem de parâmetros, constantes de paper (8 × 64 = 512, √d_k), quais portas existiam em que versão, perguntas que só checam se uma tabela soma 1.
- Conta só entra quando é de uma linha e serve para enxergar uma ideia (dobrar o contexto quadruplica o custo da atenção). Nunca mais de uma por quizz.
- São 10 perguntas por quizz, padrão e avançado (o usuário pediu em 2026-10-16, depois de um dia com 5 a 6). As 10 passam pelo filtro acima: para chegar a 10, explore outros mecanismos, limites, sintomas e conexões entre aulas, nunca enchimento.
- **Exceção:** aulas com vídeo abaixo de 10 minutos têm 5 ou 3 perguntas, conforme "Aulas curtas" na `SKILL.md` da `next-class` (pedido do usuário em 2026-11-02). Numa aula assim, menos perguntas é melhor do que enchimento.

## Conceito, não a demonstração

Em 2026-11-27, na `3.1.11` (Orquestração de Skills e subskills), o usuário parou o quizz: as perguntas cobravam o que aconteceu na demonstração (o código gerado, a stack escolhida, qual arquivo o professor copiou) e pressupunham TypeScript. Ele entendia os conceitos, mas não a demonstração. Reescrito com 5 perguntas conceituais, fez 5/5. Regra: **o quizz cobra os conceitos da aula, não o código nem os passos mostrados nela.**

- A demonstração serve de fonte para extrair o conceito (o que ela mostra sobre como funciona, onde quebra, quando usar), nunca de pergunta em si.
- Não pergunte sobre o código da aula: nomes de arquivos, classes, funções, pastas, comandos, linguagem, framework, número de testes, ordem em que as coisas apareceram na tela.
- Prefira cenários novos e fora do código da aula (outro domínio, outra equipe, outro tipo de tarefa) em que o mesmo conceito decide a resposta. Não pressuponha que o aluno conheça a linguagem usada na demonstração.
- Aula com poucos conceitos fica com menos perguntas (o N de "Aulas curtas" é teto): não complete com detalhes da demonstração.

## Escopo: só a aula e as anteriores

Em 2026-11-08 o usuário apontou que uma pergunta da `2.2.5` (Truncamento) comparava truncamento com sumarização, tema da aula seguinte, ainda não estudada. Regra: a pergunta e **todas** as alternativas só podem usar o que a aula ensina e o que as **aulas anteriores** (do mesmo módulo ou de módulos já estudados) ensinaram. Aula vizinha posterior não entra, nem como comparação, contraste, "próxima aula" ou "veremos a seguir".

- Pode retomar um conceito de aula anterior quando a própria aula o retoma ou o pressupõe (ex.: janela de contexto, na aula de truncamento).
- O professor costuma anunciar a aula seguinte ("no próximo vídeo falaremos de sumarização"). Esse anúncio não é conteúdo: não gere pergunta, alternativa nem gabarito que dependa do tema anunciado, mesmo que o modelo saiba a resposta.
- Troca entre abordagens só vale entre abordagens que já foram ensinadas até esta aula. Se a comparação exigiria uma técnica ainda não vista, pergunte sobre o limite da técnica atual (onde ela quebra e por quê).

## O nível

O usuário reclamou duas vezes de quizzes fáceis, depois de tirar 10/10 três vezes seguidas. O formato que ele aprovou ("perfeito") foi um quizz em que fez 6/10. O alvo é esse: um aluno que assistiu à aula com atenção deve acertar entre 5 e 8.

Um quizz fácil não ensina nada a ele. Ele aprende quando erra uma pergunta e a explicação revela algo que não tinha percebido.

### O que faz uma pergunta boa

- **Cenário aplicado.** Descreva uma situação concreta e pergunte o resultado mais provável ou a melhor decisão, em vez de pedir uma definição.
- **"Por quê" em vez de "o quê".** Pergunte a causa de um comportamento, não o nome dele.
- **Troca entre abordagens.** O que se ganha e o que se perde ao trocar A por B.
- **Qual está INCORRETA.** Exige avaliar as quatro alternativas, não só reconhecer uma.
- **Conexão entre aulas.** Use distratores que seriam verdadeiros para o assunto de outra aula.

### O que faz uma alternativa boa

Todas as quatro precisam parecer plausíveis para quem estudou pela metade. Fontes de bons distratores:

- uma meia-verdade (correta em parte, com a conclusão errada);
- a causa certa ligada ao efeito errado, ou o inverso;
- uma afirmação verdadeira sobre outro conceito (da mesma aula ou de aula anterior);
- datas, nomes ou números trocados entre itens próximos;
- um "fato histórico" específico e plausível, mas inventado.

### Vícios que entregam a resposta

O usuário identificou estes padrões e passou a usá-los para acertar sem saber. Revise o quizz inteiro contra a lista antes de gravar:

- a alternativa correta é a mais longa ou a mais detalhada: mantenha as quatro com tamanho parecido;
- as erradas usam palavras absolutas ("sempre", "nunca", "só", "de vez", "elimina"): ou tire, ou ponha uma delas também em alternativas corretas;
- a letra correta se concentra em uma posição (B, principalmente): distribua entre A, B, C e D, sem padrão previsível;
- existe uma alternativa absurda que ninguém marcaria: troque por um erro plausível;
- o enunciado repete palavras que só aparecem na alternativa correta.

### Perguntas com conta

- Refaça a conta de cada alternativa antes de mostrar a pergunta, fator por fator. Em 2026-10-14 uma refação saiu com o gabarito errado (o último fator de um bigrama estava 1/2 no lugar de 1/4) e precisou ser anulada.
- Se o usuário erra a mesma conta duas vezes seguidas, troque a múltipla escolha por uma pergunta aberta com a tabela de passos para ele preencher. Foi o que funcionou na conta do bigrama, depois de três erros em fatores diferentes; na conta de Bayes, o que funcionou foi ensinar o método das frequências (1.000 e-mails, separar pela taxa de base primeiro).

### Diferença entre os dois quizzes

- **Quizz da aula:** tudo o que é cobrado tem base na transcrição ou no resumo do professor. Pode exigir raciocínio sobre o conteúdo, mas não conhecimento que a aula não deu.
- **Quizz avançado:** cobra o que só está no material avançado (mecanismos, fórmulas, simplificações corrigidas, limitações). Marque no gabarito a seção do material que sustenta cada resposta.

### Exemplo do nível esperado

```markdown
## 7. GPUs impulsionaram redes profundas. Por que as RNNs continuavam lentas para treinar?
- A) A GPU acelera contas simultâneas, mas na RNN cada passo espera o anterior, então pouco roda junto.
- B) As GPUs da época só funcionavam com redes feedforward.
- C) RNNs têm muito mais parâmetros e não cabiam na memória da GPU.
- D) O desvanecimento de gradiente obrigava a repetir o treino várias vezes.
```

A correta é A. O usuário marcou B, o "fato histórico plausível". C é o oposto da verdade (a RNN reutiliza os pesos em todos os passos) e D usa um problema real da RNN como causa de outro.

## Formato dos arquivos

Use `<título>` como no nome da pasta. Para o quizz avançado, acrescente `.adv` antes de `.md`, `.gabarito.md` e `.resultado.md`.

### Perguntas: `quizz.<título>.md`

Sem nenhuma marca de resposta, para o usuário poder abrir e refazer.

```markdown
# Quizz — <título>

**Capítulo:** <nº - capítulo> · **Aula:** <nº>
**Base:** material da aula | material avançado

---

## 1. <enunciado>
- A) ...
- B) ...
- C) ...
- D) ...

## 2. ...
```

### Gabarito: `quizz.<título>.gabarito.md`

```markdown
# Gabarito — <título>

## 1. <enunciado resumido>
**Correta: C**
**Por quê:** <explicação da correta, com o raciocínio>
- **A:** <por que está errada>
- **B:** <por que está errada>
- **D:** <por que está errada>
**Conceito:** <nome curto do conceito, usado para refazer as erradas>
```

No quizz avançado, acrescente `**Seção:** <título da seção do material avançado>`.

### Resultado: `quizz.<título>.resultado.md`

Criado ao aplicar o quizz. Cada nova tentativa entra como uma nova seção, a mais recente por último.

```markdown
# Resultado — <título>

## Tentativa 1 — 2026-10-11
**Pontuação:** 6/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | D | D | ✅ |
| 2 | B | A | ❌ |

### Para refazer
- **Q2 — <conceito>:** <uma linha sobre a confusão que o erro revelou>

### Pontos para revisar
- <conceito e onde revisar no material>
```
