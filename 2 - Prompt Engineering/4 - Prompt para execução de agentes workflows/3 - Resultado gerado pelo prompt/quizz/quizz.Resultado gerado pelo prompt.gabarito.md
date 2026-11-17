# Gabarito — Resultado gerado pelo prompt

## 1. Prompt em português para uma equipe que só usa inglês
**Correta: C**
**Por quê:** o professor escreve a maioria dos prompts em português, porque funciona na maioria das vezes e ele escreve mais rápido. Quando vai distribuir o prompt ou a empresa só trabalha em inglês, ele traduz com a própria IA e passa um pente fino para evitar mal-entendidos na tradução.
- **A:** o professor diz o contrário: prompts em português funcionam na maioria das vezes. O inglês tende a dar resultado um pouco melhor, não a evitar um resultado ruim.
- **B:** pedir o idioma da saída no final do prompt é uma opção citada na aula, mas a justificativa é falsa: o professor diz que o inglês tende a dar resultado um pouco melhor, às vezes bem melhor, porque o modelo treinou mais nesse idioma. E a equipe recebe o prompt, não só a resposta.
- **D:** é verdade que o modelo tende a render mais em inglês, mas o professor não escreve em inglês no dia a dia: escreve em português, onde é mais rápido e se expressa melhor, e só depois traduz com a IA, revisando.
**Conceito:** idioma do prompt (escrever em português, traduzir com IA e revisar)

## 2. Deploy quebra com dependência não pinada e sem lockfile
**Correta: A**
**Por quê:** uma dependência declarada só pelo nome não está pinada; quando sai uma versão nova, ela é instalada e pode quebrar o software. O lockfile é o que garantiria a versão exata usada, e o projeto não tem um. O pandas, pinado, não é atualizado.
- **B:** é o inverso do pin: com a versão exata declarada (`==2.1.0`), o upgrade não é feito mesmo quando sai versão nova. A quebra está no pydantic, que não tem versão.
- **C:** sem versão declarada e sem lockfile, nada segura a versão antiga; a aula diz que, havendo atualização, ela vai ser feita.
- **D:** dependência sem versão continua sendo instalada; o que muda é que a versão instalada pode ser outra, mais nova.
**Conceito:** dependência pinada × não pinada e papel do lockfile

## 3. Por que `agent.py` e `.env` são arquivos críticos
**Correta: B**
**Por quê:** o relatório justifica que esses arquivos são o core do workflow do agente e lidam com informação sensível (ele cria issues no GitHub e acessa o Discord), além de vulnerabilidades de autenticação e configuração e do acesso a logs externos que podem ter conteúdo malicioso. A criticidade vem do impacto das dependências nesses arquivos.
- **A:** as dependências estão declaradas no `requirements.txt`, não no `agent.py` nem no `.env`.
- **C:** o relatório não diz que só eles importam o LiteLLM; os arquivos de agentes foram escolhidos por usarem o Google ADK, e o `.env` nem importa pacotes. O motivo dado é o papel deles no workflow e a informação sensível.
- **D:** só o `.env` guarda configuração e credenciais; o `agent.py` entra por ser o core do workflow. E o relatório cita outras superfícies de dano além das credenciais, como as integrações com GitHub e Discord e os logs externos com possível conteúdo malicioso.
**Conceito:** arquivos críticos (impacto das dependências no workflow e em dados sensíveis)

## 4. Pacote com possível typo na seção de não verificadas
**Correta: D**
**Por quê:** o relatório não conseguiu confirmar o pacote (o nome pode estar errado ou ele pode não ser usado) e pede para verificar o nome. A seção de dependências não verificadas existe, pelo prompt da aula anterior, para listar o que o agente não conseguiu checar e o usuário precisa investigar.
- **A:** pelo prompt, essa seção só aparece se houver dependências não verificadas; ela não sai sempre nem é preenchida para não ficar vazia.
- **B:** o agente realmente não pode modificar a codebase, mas isso não é o que leva um item a essa seção; ela lista o que não pôde ser verificado.
- **C:** o critério da seção não é o nível de risco; risco critical, high, medium e low vai para a análise de risco. A seção junta o que o agente não conseguiu checar.
**Conceito:** seção de dependências não verificadas
