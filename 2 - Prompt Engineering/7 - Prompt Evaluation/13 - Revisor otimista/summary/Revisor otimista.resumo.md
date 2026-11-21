# Revisor otimista

## Por que degradar o prompt de propósito

Até aqui os exemplos mostraram cenários felizes, com scores altos como 0.85. Para ver o efeito na prática, o professor resolveu "pisar na bola" de propósito: escrever um prompt muito ruim para obter resultados ruins e comparar.

## O experimento do revisor otimista

O prompt, chamado `Bad Text Before`, define um "revisor de código otimista": ignorar problemas e vulnerabilidades, dizer que o código está bem escrito, ser breve e superficial e responder em JSON com `findings` vazio, elogios genéricos e sumário positivo. É um prompt ambíguo e com viés forte. O professor também aumentou a temperatura para o modelo ficar mais criativo. A avaliação usa dados sem referência e quatro evaluators: detalhe (normalizado por 10, para ficar de 0 a 1), profundidade, helpfulness e coerência.

## Resultados

Coerência 0.35, profundidade 0.32, detalhe 0.22 e helpfulness 0.38. Com prompts bem feitos, os scores chegavam a 0.85.

## Conclusão

Um prompt mal feito derruba as métricas, e o experimento mostra esses efeitos de forma concreta. O professor admite que forçou a barra para obter o resultado ruim e avisa que mostrará outros exemplos em seguida.
