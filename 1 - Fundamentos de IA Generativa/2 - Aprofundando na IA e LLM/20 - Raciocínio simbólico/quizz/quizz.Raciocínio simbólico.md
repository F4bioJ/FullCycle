# Quizz — Raciocínio simbólico

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 20
**Base:** material da aula

---

## 1. Um colega pede a uma LLM que explique álgebra, recebe um texto impecável e conclui: "se explica assim, também calcula direito". Como avaliar essa conclusão?
- A) Está certa: fluência e cálculo vêm da mesma habilidade, e um texto bem construído indica passos corretos.
- B) Está errada: a LLM repete trechos prontos do treino e não consegue escrever explicações novas.
- C) Está errada: a fluência vem de prever tokens por padrões de linguagem; a lógica exige regras formais.
- D) Está errada para modelos antigos; a partir do GPT-4, a fluência já indica o cálculo correto.

## 2. Um time testa um modelo com "todos os A são B; X é A" e recebe a conclusão certa, bem explicada. Decide então usá-lo para aplicar regras internas da empresa, que nunca foram publicadas. O que a aula indica sobre essa decisão?
- A) O acerto pode vir de padrões vistos no treino; sem padrão parecido, o risco de erro aumenta.
- B) O acerto prova que o modelo deduziu pela regra; basta informar as regras internas para ele aplicá-las.
- C) O acerto vale para toda regra com a mesma forma lógica, porque o modelo aprendeu a estrutura formal.
- D) O acerto vem de uma verificação interna da resposta, que funciona igual para regras públicas ou internas.

## 3. Uma LLM gera a solução de um problema de código com várias etapas dependentes. Ela erra a primeira condição, mas o texto final sai bem encadeado. Por que esse caso é perigoso?
- A) Cada etapa é gerada de forma independente, então o erro fica isolado, mas é difícil achá-lo no texto.
- B) O modelo percebe a falha na etapa seguinte, mas mantém o erro para não contradizer o que escreveu.
- C) Os últimos tokens pesam mais, então a conclusão sai certa e esconde um erro que afeta o começo.
- D) As etapas seguintes dependem da primeira e herdam o erro, e a resposta continua soando plausível.

## 4. Sobre a falta de memória e de verificação nas LLMs, qual afirmação está INCORRETA?
- A) A computação normal guarda valores em memória, busca e continua; a LLM guarda vetores e correlações.
- B) A atenção compara cada token com os anteriores e, assim, faz o papel de verificador dos passos lógicos.
- C) Um compilador ou um provador lógico avisa se algo não faz sentido; a LLM não traz esse mecanismo.
- D) Como o Transformer tenta construir uma frase, a resposta pode parecer certa sem ter sido conferida.

## 5. Uma LLM recebe: "João tem o dobro da idade de Maria; daqui a 5 anos, a soma das idades será 45". Ela dá o resultado final certo, mas, ao expandir os cálculos, erra passos do meio. O que esse comportamento indica?
- A) A janela de contexto acabou ao pedir a expansão, e o enunciado saiu do alcance do modelo.
- B) A conta estava certa porque o modelo a resolveu em memória, e os erros surgiram ao transcrevê-la.
- C) O resultado pode vir de um padrão visto no treino, e não de uma álgebra feita passo a passo.
- D) O acerto foi casual: problemas assim são raros na internet, e não havia padrão para seguir.

## 6. No mesmo problema, o usuário pede "vamos resolver passo a passo" e, no segundo passo, lê: "daqui a 5 anos, Maria terá 45 anos". O que isso mostra sobre o Chain of Thought?
- A) As etapas visíveis melhoram as chances e permitem achar o erro e dar feedback, sem garantir o acerto.
- B) Ao expor o raciocínio, o modelo passa a conferir cada passo; se o erro continua, o prompt foi mal escrito.
- C) O passo a passo muda a apresentação: o modelo resolve antes, descreve depois e não ganha em acerto.
- D) O CoT depende de uma janela grande; o erro aparece porque o contexto não comportou as etapas anteriores.

## 7. Um app financeiro recebe pedidos em linguagem natural e precisa devolver juros exatos. O time já usa CoT, e as contas ainda saem erradas de vez em quando. Qual é o próximo passo mais coerente com a aula?
- A) Adotar um modelo neurossimbólico pronto, que prova cada cálculo e dispensa as validações do time.
- B) Detalhar mais os passos do CoT, até o modelo manter cada valor intermediário como variável.
- C) Treinar o modelo com muitas contas de juros, até a previsão de tokens substituir a calculadora.
- D) Manter a LLM na interpretação do pedido e delegar a conta a Python ou a uma API, ligando os dois.

## 8. O que distingue o raciocínio híbrido com ferramentas externas dos modelos neurossimbólicos, segundo a aula?
- A) O híbrido une Deep Learning e lógica dentro do modelo; o neurossimbólico chama uma calculadora externa.
- B) O híbrido delega o cálculo a um sistema externo; o neurossimbólico busca também provar o caminho.
- C) O híbrido ainda está em estudo, sem uso real; o neurossimbólico é o padrão que LangChain e AutoGPT adotam.
- D) Diferem no nome: neurossimbólico é o termo técnico do arranjo em que LLM e Python se ligam por API.

## 9. Um prompt curto traz: "ninguém que não tem contrato ativo pode deixar de receber o aviso". O modelo aplica a regra ao contrário em vários casos. Qual ajuste é o mais coerente com a aula?
- A) Mover a frase para o final do prompt, porque modelos autoregressivos pesam mais os últimos tokens.
- B) Acrescentar outra negação à frase, para deixar claro ao modelo que a regra é mesmo obrigatória.
- C) Trocar por um modelo de janela maior, para ele manter em atenção a frase da regra por inteiro.
- D) Reescrever na afirmativa ("todo cliente com contrato inativo recebe o aviso"), evitando a negação.

## 10. A regra de um sistema é "todo pedido aprovado foi pago". Perguntada se um pedido pago foi aprovado, a LLM responde "sim". Como avaliar essa resposta?
- A) Errou ao inverter o quantificador: o pagamento não permite concluir sobre a aprovação; validar a saída.
- B) Acertou: se todo aprovado foi pago, então o pagamento é a condição que leva à aprovação do pedido.
- C) Errou; o certo seria "não foi aprovado", porque a regra liga aprovação a pagamento em um único sentido.
- D) Errou por contradição: regra e resposta não podem valer juntas; pedir que o modelo cite as premissas.
