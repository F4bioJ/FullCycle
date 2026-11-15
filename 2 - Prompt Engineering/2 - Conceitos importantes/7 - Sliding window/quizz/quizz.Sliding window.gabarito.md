# Gabarito — Sliding window

## 1. Consequência de descartar mensagens antigas sem arquivar em sliding window.
**Correta: A**
**Por quê:** Descartar sem arquivar elimina o histórico para sempre. Se o usuário voltar amanhã, o sistema não tem como reconstruir o contexto anterior — não há banco de dados, sumário nem snapshot para recuperar. A janela só garante o contexto imediato; memória de longo prazo exige arquivamento deliberado.
- **B:** A latência não cai por causa do descarte; a janela já mantém o tamanho fixo (4.000 tokens). O descarte só decide o destino do que sai, não altera o tamanho do prompt atual.
- **C:** Não há reprocessamento do histórico descartado — ele simplesmente some. O custo de inferência depende do tamanho da janela ativa, não do destino do conteúdo removido.
- **D:** Alucinação não é consequência direta de descartar histórico antigo; o modelo alucina por falta de grounding no momento da geração, não por não ter visto mensagens de 10 turnos atrás.
**Conceito:** Descarte vs arquivamento

## 2. Papel da sumarização num desenho com sliding window e arquivamento a curto prazo.
**Correta: D**
**Por quê:** A janela móvel só decide o que fica dentro do limite (a versão mais recente). O que sai é descartado ou arquivado; o professor diz que se arquiva a curto prazo justamente porque "eu posso vir a sumarizar algo". A sumarização é um uso posterior do conteúdo arquivado, não parte do mecanismo da janela.
- **A:** A janela desliza sozinha conforme o conteúdo cresce; o antigo sai e o novo entra, sem depender de resumo.
- **B:** A aula separa as coisas: a longo prazo, "em vez de sumarizar", salva-se o conteúdo bruto num arquivo barato (S3, Google Cloud Storage). O resumo não é o armazenamento de longo prazo.
- **C:** A janela não resume o que está dentro dela; ela mantém o conteúdo recente como está. O que pode ser resumido é o que ficou para trás.
**Conceito:** Relação entre sliding window, arquivamento e sumarização

## 3. Modelo "esquece" a primeira mensagem mesmo com o histórico arquivado no S3.
**Correta: B**
**Por quê:** "O que entra na janela de contexto da minha IA é o que está dentro dessa janela"; o resto está descartado ou arquivado. Arquivar preserva o conteúdo para uso futuro (sumarizar, revisitar), mas não o põe de volta no contexto: depois de 40 turnos, a primeira mensagem já saiu da janela e o modelo não a vê.
- **A:** Não houve falha: o arquivo está fora da janela, e o modelo não consulta o armazenamento por conta própria. Arquivar não é o mesmo que estar no contexto.
- **C:** Inverte o mecanismo: a janela avança para o conteúdo novo e empurra o antigo para fora, nunca o contrário.
- **D:** A aula descreve o arquivamento a longo prazo como salvar a conversa num arquivo "em vez de sumarizar"; não há troca por resumo. E, mesmo íntegro, o arquivo continua fora da janela.
**Conceito:** O contexto do modelo é só o que está na janela
