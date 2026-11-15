# GANs

## Geração de imagem exige estratégias diferentes de LLMs

LLMs foram otimizados para linguagem natural, onde a estrutura sequencial, a coesão textual e a previsão do próximo token são centrais. Em imagem, esse raciocínio não se aplica da mesma forma, porque a organização visual não depende de uma leitura linear da esquerda para a direita como no texto. Isso exige arquiteturas voltadas para coerência espacial e aparência visual, não apenas para continuidade linguística. Por isso, a geração de imagem seguiu caminhos diferentes dos modelos usados em texto.

## GANs e o salto de realismo visual

GANs surgiram para enfrentar a baixa qualidade das imagens geradas, especialmente no contexto em que resultados visuais ainda eram muito artificiais e pouco utilizáveis. O ganho principal foi produzir saídas mais realistas, aproximando a geração sintética da aparência esperada em imagens do mundo real. Esse avanço abriu espaço para aplicações em arte, moda, jogos e design, onde qualidade visual é requisito básico. O valor do GAN está justamente em empurrar a geração para um nível de realismo que antes era difícil de alcançar.

## Gerador e discriminador

A arquitetura de um GAN se apoia em dois componentes com papéis opostos: o gerador cria amostras sintéticas e o discriminador tenta distinguir essas amostras dos dados reais. Essa dinâmica competitiva força o gerador a melhorar continuamente, porque ele só “vence” quando produz algo suficientemente convincente para enganar o discriminador. O discriminador, por sua vez, também evolui ao aprender a separar melhor o falso do real. O treinamento acontece nesse ciclo de refinamento mútuo.

## Exemplo das notas de 10 reais

Imagine um sistema tentando gerar imagens de notas de 10 reais. O gerador produz versões sintéticas, enquanto o discriminador recebe tanto exemplos reais quanto gerados e decide quais parecem autênticos. Cada erro do discriminador ou do gerador vira sinal de ajuste para a próxima iteração, fazendo a saída sintética se aproximar gradualmente do padrão real. A lógica do exemplo não depende de dinheiro em si; ele apenas ilustra como o GAN aprende por confronto entre criação e validação.

## Onde GANs se destacam

GANs são especialmente fortes quando o objetivo é produzir imagens visualmente convincentes, como rostos humanos, peças de moda, arte digital e ativos para jogos. Nesses cenários, o critério dominante é a aparência final da saída, e não necessariamente o controle fino de cada atributo gerado. O modelo tende a ser valioso quando o realismo perceptual importa mais do que a interpretabilidade interna do processo. Essa característica explica por que GANs ganharam relevância em domínios criativos.

## VAEs e controle sobre a geração

Além do realismo, existe outro problema importante: controlar o que será gerado. VAEs atacam esse ponto ao permitir manipular variáveis latentes para direcionar a saída, em vez de apenas produzir uma amostra plausível. Isso é útil quando a especificação precisa incluir atributos mais detalhados, como “um homem sorrindo, de cabelo curto e bigode”. O foco deixa de ser apenas gerar algo realista e passa a incluir geração orientada por características.

## Encoder, decoder e espaço latente

Um VAE é descrito aqui como um modelo probabilístico que aprende por meio de um encoder e de um decoder. O encoder comprime os dados em uma representação latente, e o decoder reconstrói a saída a partir dessa representação. Essa estrutura permite navegar por atributos internos da amostra gerada com mais controle do que no caso dos GANs. O resultado é uma geração mais organizada quando se quer especificidade.

## Estabilidade e aplicações dos VAEs

Em comparação com GANs, VAEs aparecem como modelos matematicamente mais estáveis e mais controlados. Essa estabilidade os torna úteis em situações em que detalhes específicos da saída importam mais do que maximizar apenas o realismo visual bruto. A mesma lógica se estende além de imagem e alcança som e voz, onde a modelagem mais controlada ajuda a produzir resultados mais realistas. O ponto central é a troca entre realismo competitivo e controle probabilístico da geração.
