# Gabarito — Otimização para grandes modelos

## 1. O que o LoRA faz para adaptar o Llama 2 ao jurídico
**Correta: B**
**Por quê:** o LoRA congela os pesos originais e adiciona camadas mais leves, de baixa complexidade (low rank). Só essas camadas são treinadas, sem treinar de novo toda a estrutura de parâmetros. Por isso o modelo especializado sai mais rápido e bem mais barato que um fine tuning completo.
- **A:** converter pesos para INT4 é quantização, técnica para rodar o modelo com menos memória, não o mecanismo do LoRA.
- **C:** dividir o modelo em especialistas é Mixture of Experts. O LoRA não divide o modelo; acrescenta camadas leves a ele.
- **D:** retreinar todos os pesos, mesmo com menos dados, continua sendo o fine tuning completo, justamente o que a empresa não pode pagar.
**Conceito:** LoRA = pesos congelados + treino só das camadas low rank

## 2. Afirmação INCORRETA sobre o LoRA
**Correta: C**
**Por quê:** o professor avisa que o LoRA é bem mais barato que um fine tuning completo, mas que ainda se gasta algum dinheiro: "não ache que você vai sair e vai fazer isso super barato". Dizer que sai praticamente sem custo é falso.
- **A:** verdadeira. Os pesos originais ficam congelados.
- **B:** verdadeira. A aula cita a diminuição do risco de sobreajuste entre os ganhos, junto de tempo e memória.
- **D:** verdadeira. Só as camadas low rank são treinadas.
**Conceito:** LoRA barateia o fine tuning, mas não o torna gratuito

## 3. Rodar o Mistral 7B num notebook comum
**Correta: A**
**Por quê:** é o exemplo da aula. Quantizado para INT4, o Mistral 7B cai de uns 13 GB para uns 4 GB e roda localmente, em ferramentas como Ollama ou LM Studio. O preço é a qualidade: fica aceitável, mas "pioradinha".
- **B:** o LoRA reduz a memória e o custo do **fine tuning**, porque treina só as camadas low rank. Mas o modelo continua com todos os pesos originais, congelados, e ainda ganha camadas novas: não fica menor para rodar. A técnica que a aula indica para rodar no notebook é a quantização.
- **C:** a quantização não mantém a qualidade: a perda de precisão é minimizada, mas real ("vai ficar pioradinho"). E ela acelera a execução em vez de deixá-la lenta.
- **D:** Prefix Tuning não troca pesos: insere tokens treinados no início da sequência para orientar o modelo, que continua do mesmo tamanho.
**Conceito:** quantização = modelo menor e mais rápido, com alguma perda de qualidade

## 4. Por que o modelo quantizado ocupa menos memória
**Correta: D**
**Por quê:** os pesos, normalmente em ponto flutuante (FP32 ou FP16), passam a ser representados num formato mais leve, como INT8 ou INT4. Cada peso ocupa menos, então o modelo inteiro usa menos memória e processa mais rápido.
- **A:** é uma leitura literal da analogia do professor. Ele mesmo ressalva que o zip serve só para guardar, enquanto a quantização serve para o modelo processar usando menos memória. Se descompactasse para processar, o ganho de memória sumiria.
- **B:** pôr só parte dos submodelos para trabalhar, conforme um roteador, é o Mixture of Experts. A quantização não escolhe partes do modelo: deixa todos os pesos mais leves.
- **C:** a quantização não apaga pesos: mantém todos, só que guardados com menos precisão.
**Conceito:** quantização reduz a precisão de cada peso, não o número de pesos

## 5. Respostas piores depois de quantizar para INT4
**Correta: B**
**Por quê:** a quantização troca precisão por leveza: a perda é minimizada, mas real, e o professor avisa que o modelo "vai ficar pioradinho". É o meio-termo entre qualidade e eficiência. Um nível menos agressivo, como o INT8, guarda cada peso com mais bits: o modelo fica mais pesado que em INT4, mas mais próximo do original.
- **A:** a conversão não falhou. Perder um pouco de qualidade é o comportamento esperado da quantização, não sinal de erro.
- **C:** roteador e especialistas são do Mixture of Experts. Quantizar não muda quantos experts são ativados; muda a precisão de cada peso.
- **D:** a perda vem dos pesos guardados com menos bits. O LoRA especializa o modelo com camadas novas, mas não devolve aos pesos a precisão que eles perderam.
**Conceito:** quantização tem perda real de qualidade; é um meio-termo

## 6. Especializar com pouca verba e rodar com pouca memória
**Correta: D**
**Por quê:** são dois gargalos, e cada um tem sua técnica. O LoRA ataca o custo de especializar (fine tuning parcial, como no Llama 2 jurídico); a quantização ataca a memória e o custo de rodar (como o Mistral 7B em INT4). O resumo do professor lembra que, em ambientes reais, as técnicas podem ser combinadas.
- **A:** Prefix Tuning não reduz a memória: insere tokens treinados na entrada, e o modelo continua do mesmo tamanho. E MoE é uma forma de organizar um modelo muito grande, não de especializar um modelo pronto num domínio.
- **B:** troca os papéis. A quantização não especializa nada, só deixa os pesos mais leves; e o LoRA barateia o fine tuning, mas não faz o modelo caber em menos memória para rodar.
- **C:** a segunda metade se sustenta (quantização para rodar com pouca memória), mas o fine tuning completo é justamente o que a startup não pode pagar: o professor diz que ele seria "extremamente caro" para uma empresa brasileira, e é por isso que existe o LoRA.
**Conceito:** técnicas diferentes para gargalos diferentes, e podem ser combinadas

## 7. Diferença entre quantização e MoE na inferência
**Correta: A**
**Por quê:** a quantização deixa o modelo mais leve por inteiro, representando cada peso com menos bits. O MoE não mexe na representação dos pesos: reduz quanto do modelo trabalha a cada entrada, porque o roteador ativa só alguns especialistas.
- **B:** troca os papéis das duas técnicas: desligar partes conforme a entrada é o MoE; converter pesos para inteiros menores é a quantização.
- **C:** atribui às duas técnicas o papel de outras. A aula apresenta a quantização para rodar o modelo com menos GPU e memória, não para baratear o fine tuning (isso é o LoRA). E o MoE organiza o modelo em especialistas para reduzir o custo de cada inferência; adaptar o modelo a tarefas novas de forma barata é o papel do LoRA e do P-Tuning/Prefix Tuning.
- **D:** inverte quem perde precisão. Quem aceita uma perda de precisão é a quantização; a aula não atribui essa perda ao MoE.
**Conceito:** quantização encolhe cada peso; MoE ativa só parte do modelo

## 8. Especializar sem alterar o modelo compartilhado
**Correta: C**
**Por quê:** P-Tuning (e Prefix Tuning) adaptam o comportamento sem modificar o modelo original: inserem na entrada vetores ou tokens aprendidos, que orientam o modelo, como um sidecar ao lado dele. O professor contrasta com o resto da aula: até ali, quase tudo pegava o modelo original e fazia fine tuning nele.
- **A:** é a armadilha. O LoRA congela os pesos originais, mas adiciona camadas novas ao modelo e as treina: é um fine tuning parcial. A regra proíbe camada nova.
- **B:** a quantização muda a representação de todos os pesos para deixá-los mais leves; ela não especializa o modelo para tarefa nenhuma.
- **D:** o MoE é uma forma de organizar o modelo internamente, não uma forma de adaptar um modelo pronto a uma tarefa nova sem tocá-lo.
**Conceito:** P-Tuning/Prefix Tuning = especialização pela entrada, sem alterar o modelo

## 9. Diferença entre P-Tuning/Prefix Tuning e um prompt escrito à mão
**Correta: A**
**Por quê:** as duas técnicas usam a lógica da engenharia de prompt, mas o contexto inserido é aprendido: vetores de entrada (P-Tuning) ou tokens treinados no início da sequência (Prefix Tuning). O resumo do professor diz que aqui a engenharia de prompt "deixa de ser apenas texto manual e passa a incorporar estruturas aprendidas".
- **B:** nenhuma das duas muda o modelo. A ideia central é justamente especializar sem modificar o modelo original; o efeito vem do que é inserido na entrada.
- **C:** fine tuning parcial é o LoRA, que acrescenta camadas ao modelo e as treina. P-Tuning e Prefix Tuning ficam fora do modelo: o professor diz que especializam usando engenharia de prompt "em vez de usar finetuning propriamente dito".
- **D:** roteador é o mecanismo do MoE. P-Tuning e Prefix Tuning não escolhem entre prompts de uma lista.
**Conceito:** P-Tuning/Prefix Tuning = contexto aprendido, não escrito à mão

## 10. Associação INCORRETA entre problema e técnica
**Correta: D**
**Por quê:** Prefix Tuning não mexe no modelo: insere tokens treinados no início da sequência para orientar a saída. O modelo continua com o mesmo tamanho, então não passa a caber no notebook. Para isso, a aula indica a quantização (o Mistral 7B em INT4 cai para uns 4 GB).
- **A:** correta. O LoRA ataca o custo do fine tuning, como no exemplo do Llama 2 jurídico.
- **B:** correta. O MoE ativa só alguns especialistas por entrada, o que permite escalar o modelo sem pagar o custo de ativá-lo inteiro.
- **C:** correta. Prefix Tuning orienta o modelo com tokens treinados no início da sequência, sem mexer nos pesos. (Ele aparece certo aqui e errado na D: a técnica serve para adaptar comportamento, não para encolher o modelo.)
**Conceito:** cada técnica ataca um gargalo diferente
