# Quizz — Gestão e controle de versão

**Capítulo:** 5 - Gestão e versionamento de prompt · **Aula:** 3
**Base:** material da aula

---

## 1. Um dev clona o repositório de prompts da equipe inteiro, com guidelines de TypeScript, Go e Python, dentro da pasta do projeto em Go em que trabalha. Logo depois, o agente de código começa a misturar convenções nas respostas. Segundo a aula, qual é a causa mais provável?
- A) O clone ficou desatualizado em relação ao repositório central, e o agente seguiu versões antigas dos prompts.
- B) Os prompts clonados não passaram por pull request e code review, então trazem instruções ainda não validadas.
- C) O agente leu os arquivos clonados e encontrou instruções de contextos diferentes, o que gera ambiguidade.
- D) O volume de arquivos clonados excedeu a janela de contexto do modelo, que passou a truncar as instruções.

## 2. O projeto da equipe ganhou um `AGENTS.md` com as convenções daquele repositório e alguns workflows feitos só para ele. Pela recomendação da aula, onde esses arquivos devem ficar?
- A) Dentro do próprio projeto, versionados com ele, porque fazem parte do funcionamento desse repositório.
- B) No repositório de uso geral, expostos no projeto por link simbólico na pasta `.prompts`.
- C) Na pasta `.prompts` do projeto, protegida pelo `.gitignore` para não poluir o histórico do código.
- D) No repositório de uso geral, copiados para o projeto quando alguém for usá-los no dia a dia.

## 3. Por que a aula prefere criar links simbólicos para os prompts de interesse em vez de copiá-los para dentro de cada projeto?
- A) Porque o link simbólico faz o agente tratar os prompts como instruções de sistema, com prioridade sobre o resto.
- B) Porque arquivos copiados seriam bloqueados pelo `.gitignore`, enquanto os links continuam visíveis ao Git.
- C) Porque os links permitem abrir pull request dos prompts gerais direto do projeto em que estão sendo usados.
- D) Porque a fonte continua sendo o repositório único, sem cópias espalhadas, e o projeto só recebe o que é relevante.

## 4. Sobre o que conta como prompt e como organizá-lo, qual afirmação está INCORRETA?
- A) Um `AGENTS.md` é prompt, e por ser lido por ferramentas como Codex, Gemini e Claude tende a virar padrão.
- B) Arquivos como `AGENTS.md` e `CLAUDE.md` pertencem ao projeto em que são usados, e por isso ficam fora do repositório geral.
- C) Comandos do Claude também são prompts e podem ser guardados e versionados junto com os demais.
- D) Um `CLAUDE.md` com instruções sobre uma tecnologia pode ser reaproveitado entre projetos pelo repositório geral.

## 5. Um dev guarda seus prompts pessoais num repositório que só ele usa. Segundo a aula, o que muda em relação ao fluxo de equipe?
- A) Ele mantém o controle de versão, mas deixa de fazer pull request e code review sobre o próprio prompt.
- B) Como ninguém mais revisa, ele pode dispensar o controle de versão e guardar os prompts em cada projeto.
- C) Ele mantém pull request e code review, mas dispensa o repositório e versiona os prompts dentro de cada projeto.
- D) Ele dispensa os links simbólicos, já que a ambiguidade depende de haver prompts de vários autores.
