export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string; // ISO
  readTime: string;
  cover: string;
  content: string; // markdown-ish
}

export const BLOG_CATEGORIES = [
  "Todos",
  "Apoio Escolar",
  "Robótica",
  "Programação",
  "Inglês",
  "Família",
  "Educação",
];

export const BLOG_POSTS: BlogPost[] = [
{
    slug: "4-habilidades-que-seu-filho-precisa-ter-para-o-futuro",
    title: "4 habilidades que seu filho precisa ter para o futuro",
    excerpt: "A vivência escolar tem como objetivo principal preparar os alunos para o futuro, dialogando diretamente com o âmbito profissional e pessoal da criança. No…",
    category: "Educação",
    author: "Equipe Ensina Mais",
    date: "2019-02-13",
    readTime: "3 min",
    cover: "/images/courses/programacao.jpg",
    content: `A vivência escolar tem como objetivo principal preparar os alunos para o futuro, dialogando diretamente com o âmbito profissional e pessoal da criança. No entanto, os estudantes que frequentam a escola hoje irão se deparar com novas dinâmicas de um mercado de trabalho que está em constante evolução e, portanto, exigirá habilidades diferentes dos seus novos profissionais. Aqui, nós explicamos para você algumas habilidades interpessoais que o seu filho precisa desenvolver além do conhecimento técnico, mas que são extremamente necessárias para um bom posicionamento profissional no futuro. Confira.

## Aprender a solucionar problemas

Ao longo de nossa vivência escolar, aprendemos que dois mais dois são quatro, por exemplo. Ao invés de refletir sobre os conhecimentos do mundo, é esperado que os alunos sejam capazes de absorver os dados e fatos que são ensinados pelos professores. No entanto, no futuro, as coisas tendem a mudar um pouquinho. O aprendizado escolar, sobretudo nas áreas das ciências matemáticas e da natureza, tende a não ser mais pautado em tais conhecimentos estáticos.

Muito além de memorizar, as crianças deverão compreender e refletir sobre as informações às quais são expostas. A importância da programação e dos conhecimentos tecnológicos é inegável para o futuro, mas os pequenos deverão estar preparados para programar e, principalmente, para solucionar problemas reais de maneira interdisciplinar, ou seja, envolver o conhecimento de mais de uma área para alcançar o resultado desejado.

## Valorizar experiências imersivas

Alguns anos atrás nós dificilmente imaginaríamos que a internet iria se desenvolver da maneira intensa e rápida como aconteceu. Em um primeiro momento, essa nova tecnologia tornou necessário o trabalho de profissionais capazes de criar sites e fazê-los funcionar, por exemplo. Logo, a internet se expandiu de maneira intensa, e o ideal não era mais apenas colocar os endereços virtuais no ar, mas também tornar os sites atraentes e otimizar a experiência do usuário.

Essa tendência deve seguir em muitos outros ramos da tecnologia e envolver até mesmo profissionais que, em um primeiro momento, não dialogavam com esse setor de maneira direta. No futuro, será necessário garantir às máquinas e utensílios diversos o design ideal para a interação humana, sendo capazes de proporcionar experiências imersivas e otimizar o uso de uma série de gadgets que logo irão se tornar essenciais para o dia a dia.

## Ser empático

Há quem acredite que nos próximos anos, profissionais que desempenham funções consideradas repetitivas e padronizadas serão facilmente substituídos por máquinas e sistemas automatizados. Mas, apesar das contribuições incríveis que a tecnologia pode trazer no futuro, é considerado improvável que tais máquinas se desenvolvam o suficiente para se tornaram capazes de sentir como um ser humano - e, consequentemente, o substituam por completo.

Portanto, para as crianças de hoje, é extremamente importante desenvolver o raciocínio, a criatividade e, principalmente, as **habilidades socioemocionais**. Apesar do nome complicado, tais habilidades se relacionam diretamente com as competências humanas que nos permitem dialogar diretamente com nós mesmos e com quem está à nossa volta, sendo capazes de tomar decisões que beneficiem a todos.

## Boa comunicação e senso de comunidade

A habilidade de se comunicar de maneira eficiente é, cada dia mais, uma necessidade entre os profissionais. Por isso, em um futuro não tão distante, a comunicação deixará de ser uma habilidade desejada para ser uma habilidade extremamente necessária no mercado de trabalho.

Outra característica que dialoga diretamente com tal facilidade para transmitir ideias é a necessidade de trabalhar bem em grupo. Atualmente, o trabalho em equipe para o desenvolvimento de projetos e outras atividades já é muito valorizado no ambiente de trabalho e na sociedade em geral, e essa característica tende a permanecer, seja para compreender o funcionamento de uma máquina, seja para encontrar a melhor solução para um determinado problema. Portanto, aprender a se comunicar e defender ideias é uma habilidade extremamente necessária aos profissionais do futuro.

Ajudar o seu filho a se preparar para o futuro envolve o cuidado com a sua educação, priorizando um aprendizado eficiente e saudável, e também a preocupação em proporcionar momentos em que o pequeno possa desenvolver suas habilidades interpessoais. Assim, ele estará preparado para enfrentar qualquer desafio profissional no futuro!

Aproveite a visita ao nosso blog e confira alguns posts interessantes:`,
  },
{
    slug: "as-materias-em-que-seus-filhos-vao-sentir-mais-dificuldade-na-escola",
    title: "As matérias em que seus filhos vão sentir mais dificuldade na escola",
    excerpt: "A vivência escolar proporciona uma diversidade de novos conhecimentos, capazes de despertar questionamentos e incentivar a criatividade e a curiosidade. No…",
    category: "Apoio Escolar",
    author: "Equipe Ensina Mais",
    date: "2019-01-23",
    readTime: "7 min",
    cover: "/images/courses/apoio-escolar.jpg",
    content: `A vivência escolar proporciona uma diversidade de novos conhecimentos, capazes de despertar questionamentos e incentivar a criatividade e a curiosidade. No entanto, as aulas e seus conteúdos também costumam trazer novos desafios e, assim, os alunos podem ficar um pouquinho hesitantes, principalmente quando se trata das disciplinas de matemática e português. Será que você se lembra quais são os temas que mais deixam os alunos inseguros ao longo do processo de aprendizagem nessas duas matérias? Acompanhe!

## Matemática

Não há dúvidas de que essa é a disciplina que mais assusta os estudantes e é capaz de deixá-los inseguros em todas as etapas da vida escolar. Muito mais do que apenas decorar fórmulas ou compreender as regras básicas para solucionar um problema, a matemática também exige o desenvolvimento de habilidades relacionadas a análise de gráficos, figuras e grandezas diversas, bem como a formação do raciocínio lógico. Abaixo, confira os principais temas das ciências matemáticas que o seu filho irá estudar ao longo da sua vivência na escola e que podem ser desafiadores para os pequenos:

## Funções de 1° e 2° grau

Quem não se lembra da variável x? As funções polinomiais de 1° e 2° grau são responsáveis por relacionar e comparar grandezas de forma algébrica, ou seja, com números. A função de 1° grau, ou função afim, é definida pela fórmulaf(x) = ax + b. Já a função de 2° grau, também conhecida como função quadrática, é definida por f(x) = ax² + bx + c. Em ambos os casos, as funções originam uma reta em um plano e, por isso, é necessário analisar gráficos em muitas situações.

## Progressão aritmética e geométrica

Relacionadas aos conceitos de sucessão, as progressões são outro tema que costuma desafiar os alunos. A progressão aritmética é definida por uma sequência numérica organizada a partir de um valor constante, o qual é sempre somado ao termo anterior. Por outro lado, a progressão geométrica é definida por uma sequência de números na qual um novo termo é sempre o resultado do número anterior quando multiplicado por um valor constante.

## Estatística

Essa área da matemática é responsável por coletar, analisar e interpretar números. Normalmente, também envolve cálculos relacionados a média aritmética, moda e mediana. Apesar de causar um pouquinho de receio nos estudantes, é multidisciplinar e muito usada para compreender temas relacionados às áreas de história e geografia, por exemplo.

## Grandezas proporcionais

Outro assunto muito usual das ciências matemáticas e que faz parte do nosso dia a dia são as grandezas proporcionais. Apesar de simples, a regra de três pode ser muito eficiente para solucionar problemas e auxiliar na compreensão da proporção entre grandezas diferentes. No entanto, em um primeiro momento, as relações entre as proporções podem assustar os alunos.

## Porcentagem

Também muito comum no nosso cotidiano, os alunos aprendem os fundamentos da porcentagem ainda na escola, mas devem levá-los para toda a vida, já que normalmente esse tema também envolve os princípios da matemática financeira. De maneira geral, a porcentagem é definida como a quantidade ou grandeza relacionada a um valor específico, sempre avaliado sobre uma centena. Está presente no cálculo de juros e descontos, por exemplo.

## Equações de 1° e 2° grau

O nome pode até assustar, mas o conceito das equações de 1° e 2° grau envolve o raciocínio do aluno para originar uma relação entre valores numéricos e, consequentemente, obter seus resultados. Logo, esse tipo de equação envolve as funções de 1° e 2° grau, respectivamente.

## Trigonometria

A trigonometria é a área da matemática responsável por estudar a relação entre os diversos tipos de triângulos. Além de estabelecer as fórmulas responsáveis por definir os tamanhos dos lados, áreas e perímetros desse tipo de forma geométrica, também é seu papel definir as inúmeras relações existentes entre os lados e ângulos, bem como as diversas nomenclaturas dos tipos de triângulo.

## Área de figuras planas e tridimensionais

Assim como os triângulos, as demais figuras planas e tridimensionais também possuem uma área das ciências matemáticas dedicadas ao seu estudo, sendo responsável por definir as relações entre o tamanho de seus lados e ângulos, bem como as fórmulas que definem seu perímetro, área e volume, por exemplo.

## Português

A língua portuguesa é outra das disciplinas que costumam tirar o sono dos alunos. Além de inúmeras regras gramaticais e ortográficas ou conjugações verbais, aprender o idioma também envolve o desenvolvimento de habilidades relacionadas às nuances e subjetividades do português, características que compõem uma matéria complexa e, por consequência, podem afastar os alunos e deixá-los desconfortáveis com o aprendizado. Abaixo, confira os principais temas da língua portuguesa que o seu filho irá estudar e que podem ser desafiadores para os pequenos:

## Interpretação de texto

Um dos principais pilares relacionados à compreensão do conteúdo na língua portuguesa é a interpretação de texto, habilidade que os alunos aprendem ainda novos e exercitam durante toda a vida escolar - e também são cobrados tanto no Enem como nos vestibulares de grandes instituições do país. De uma maneira simples, a interpretação textual é responsável por ir além das palavras, e se preocupa em entender o que está escrito nos textos de maneira subjetiva.

## Gêneros textuais

Compreender as características formais dos textos também é essencial ao longo dos estudos da língua portuguesa. Os gêneros textuais são classificados de acordo com sua linguagem e seu conteúdo, além de sua função e finalidade. É importante ressaltar que os gêneros são organizados a partir dos tipos de texto: narrativo, descritivo, dissertativo-argumentativo, expositivo e injuntivo.

## Norma culta e popular da língua portuguesa

Diretamente relacionadas à linguagem, a norma culta e a norma popular do português são tópicos que costumam causar confusão entre os alunos. No entanto, o tópico merece atenção especial, já que está diretamente relacionado ao processo de comunicação no idioma. Além disso, conhecer as variedades linguísticas do país apresenta uma relevância histórico-cultural de grande peso para a formação acadêmica e social dos estudantes.

## Funções da linguagem

As funções de linguagem estão diretamente relacionadas às intenções dos falantes durante a interlocução e à maneira como o português pode ser utilizado para nos expressarmos. Muitas vezes os alunos costumam sentir certa dificuldade ao estudá-las, já que para compreender esse conteúdo, é necessário perceber como cada um dos tipos de função afeta diretamente um elemento do processo de comunicação - emissor, receptor, mensagem, código, canal e contexto.

## Figuras de linguagem

Apesar do nome semelhante, as figuras de linguagem ou figuras de estilo são recursos estilísticos da língua portuguesa utilizados para dar ênfase à comunicação ou mesmo deixá-la mais bonita e diferente. O tema em si não traz muitas dificuldades para o aprendizado, mas os alunos costumam ficar um pouquinho tensos ao se depararem com uma grande quantidade de figuras, que se dividem entre as figuras de palavras, figuras de pensamento, figuras de sintaxe e figuras de som.

## Gramática

Apesar de a gramática da língua portuguesa ser compreendida como outro tema essencial ao longo da vida escolar dos alunos, ela costuma ser considerada uma das matérias mais desafiadoras. Com os temas subdivididos ao longo das faixas etárias, os estudantes têm contato com o tripé que origina os conceitos gramaticais do idioma: a morfologia, que abrange as formas das palavras, a sintaxe, que é responsável pelo estudo da construção de frases, e a fonologia, área que estuda os sons da língua.

## Literatura

Por fim, a literatura também figura entre os estudos relacionados à língua portuguesa que podem causar dificuldade na aprendizagem dos estudantes. Considerada uma forma de arte, esta área dedica-se à análise de obras e ao estudo sobre o seu tempo, cultura, história e tradições, explorando também como essas características se manifestam nos textos.

A caminhada escolar é sempre um desafio, mas trilhá-la é gratificante e essencial para uma formação acadêmica sólida. Nesse processo, a presença e o suporte dos pais podem ser diferenciais capazes de incentivá-los ainda mais! Por isso, é necessário estar atento e saber identificar as dificuldades do seu filho, proporcionando um aprendizado seguro e eficiente das disciplinas escolares.

Aproveite a visita ao nosso blog, confira quais são os melhores cursos extracurriculares para crianças e não deixe de dar uma olhadinha também nas nossas dicas para escolher melhor a escola do seu filho.`,
  },
{
    slug: "como-ajudar-seu-filho-a-melhorar-o-portugues",
    title: "Como ajudar seu filho a melhorar o português",
    excerpt: "O contato com o português começa ainda cedo no processo pedagógico e, por isso, é muito importante incentivar o aprendizado da língua materna nos pequenos…",
    category: "Apoio Escolar",
    author: "Equipe Ensina Mais",
    date: "2019-01-18",
    readTime: "3 min",
    cover: "/images/courses/bento-apoio-escolar.webp",
    content: `O contato com o português começa ainda cedo no processo pedagógico e, por isso, é muito importante incentivar o aprendizado da língua materna nos pequenos, bem como todas as habilidades associadas a ela, como leitura, escrita e interpretação.

No entanto, para algumas crianças, aprender o português pode ser um pouquinho complicado, e o acompanhamento dos pais é essencial para tornar o processo mais tranquilo e evitar frustrações. Para ajudar seu filho a ampliar os conhecimentos sobre a língua portuguesa organizamos algumas dicas simples, mas que podem ser a diferença para um momento de estudo mais produtivo e prazeroso em casa. Confira!

## Fique atento ao novo acordo ortográfico

Muitas vezes os pais ficam confusos e com dúvidas ao tentar ajudar os pequenos a estudar português, uma vez que o novo acordo ortográfico trouxe novas regras gramaticais e terminologias linguísticas que, para os estudantes de anos atrás, podem soar estranhas.

No entanto, exatamente por conta dessa mudança, é necessário estar atento aos estudos das crianças. Muitas indagações e o desconforto diante das novas regras podem contribuir para que o seu filho também sinta-se desmotivado. Por isso, transforme as “reclamações” em curiosidade e ajude-o a compreender a matéria.

## Deixe que o seu filho seja professor

Uma ótima sugestão é transformar o momento de estudos em uma oportunidade para um aprendizado lúdico e divertido. Que tal acompanhar o seu filho durante a revisão de um determinado tema da língua portuguesa e depois pedir que ele prepare uma pequena aula para lhe ensinar a matéria?

Demonstre interesse, faça perguntas, entre na brincadeira e peça para resolver alguns exercícios na lousa também. Além do sentimento de orgulho por dar uma aula para você, o pequeno ainda aprende enquanto brinca e se sente motivado a continuar desbravando o universo do idioma.

## Cultive o hábito da leitura

Um bom domínio da língua portuguesa está diretamente relacionado ao hábito da leitura e ao contato com o mundo da literatura. Uma maneira prazerosa e leve para ajudar o seu filho a melhorar o domínio do português é ajudando-o a cultivar o hábito da leitura.

Permita que ele escolha livros ou histórias em quadrinhos adequados à sua faixa etária e acompanhe-o durante os momentos de leitura. Outra sugestão é aproveitar a oportunidade para lerem o mesmo livro, ou cada um contar um pouquinho sobre as diferentes histórias que estão lendo.

## Incentive a prática da escrita

Assim como o hábito de ler, escrever textos também proporciona maior contato com a língua portuguesa e, consequentemente, contribui para a fixação de uma série de novas palavras e regras gramaticais. Logo, incentivar seu filho a treinar a escrita sempre que possível pode ser uma estratégia interessante para ajudá-lo a melhorar o português.

Você pode sugerir que ele escreva um poema sobre um tema específico, que se arrisque a escrever o roteiro de um filme com uma história bem criativa, ou então que elabore uma paródia muito engraçada abordando uma nova regra gramatical. Aproveite o momento e alie os conhecimentos do idioma à criatividade!

## Use a tecnologia

Quem disse que a tecnologia não poderia ser uma ótima oportunidade para o aprendizado da língua portuguesa? É possível encontrar uma série de jogos on-line voltados para a correção ortográfica, conhecimento de novos vocabulários e conjugação verbal, por exemplo.

Além disso, você pode baixar uma série de aplicativos disponíveis para smartphones que podem estimular o estudo da língua de maneiras diferentes e lúdicas, comoPortuguês para crianças, Busuu, Sei +e muitos outros.

Estar presente no processo de aprendizagem do seu filho é muito importante. O acompanhamento dos pais é a chave para garantir que o pequeno absorva os conteúdos escolares de maneira saudável e saber em quais matérias ele pode estar apresentando maior dificuldade de compreensão.

O momento também pode ser interessante para perceber quais cursos extracurriculares são interessantes e podem estimular ainda mais o desenvolvimento e a criatividade do seu filho - você pode conferir os melhores cursos extracurriculares para crianças aqui. No entanto, caso o pequeno pareça desmotivado em relação aos estudos e as notas indiquem um sinal vermelho, entenda também como o apoio escolar pode ser a solução para a dificuldade do seu filho.`,
  },
{
    slug: "o-que-e-steam",
    title: "O que é STEAM?",
    excerpt: "O STEAM é uma das novas tendências educacionais que vêm conquistando cada vez mais espaço nas escolas, sobretudo em instituições norte-americanas. O termo…",
    category: "Robótica",
    author: "Equipe Ensina Mais",
    date: "2019-01-16",
    readTime: "3 min",
    cover: "/images/courses/robotica.jpg",
    content: `O STEAM é uma das novas tendências educacionais que vêm conquistando cada vez mais espaço nas escolas, sobretudo em instituições norte-americanas. O termo é, na verdade, um acrônimo para Science, Technology, Engineering, Arts & Mathematics -em português, Ciência, Tecnologia, Engenharia, Artes e Matemática - e consiste em um eixo curricular que inspira a criatividade e o pensamento crítico das crianças, desenvolvendo novas habilidades e percepções através de atividades interdisciplinares e coletivas. Confira quais os diferenciais desse formato educacional e seus impactos na formação dos pequenos.

## Metodologia STEAM

Explorar, construir e compartilhar os aprendizados pautados no mundo que existe ao seu redor. Estes são os ideais por trás do STEAM, uma abordagem pedagógica integrada de ensino que é baseada essencialmente na realização de projetos e atividades práticas e lúdicas. Seu objetivo é formar os alunos em conhecimentos diversos, desenvolvendo em paralelo aos conteúdos escolares um conjunto de valores socioemocionais extremamente relevantes para a convivência em sociedade.

## Diferenciais

Um dos principais diferenciais dessa metodologia é a união dos conteúdos e conceitos das ciências exatas às artes. A interdisciplinaridade com a educação artística possibilita um melhor desempenho acadêmico aos alunos, uma vez que a área os auxilia a perceber e interpretar o mundo de uma maneira diferente. Logo, a disciplina traz a relação com temas ligados às humanidades, como linguagem, cultura, arquitetura, design, pintura, escultura, animação, fotografia, música, dança, cinema e teatro, por exemplo.

Por isso, é importante perceber que, apesar da nomenclatura similar, o STEAM é, na verdade, um pouquinho diferente do STEM, outro método de ensino muito comum em diversos países. De uma maneira simplificada, o método STEM aborda como você faz as coisasenquanto a metodologia STEAM é mais completa e incentiva a descoberta de por que você está realizando uma determinada ação para alcançar um resultado.

## Aprendizagem por etapas

Uma das características mais interessantes do STEAM é que ele se divide em cinco etapas básicas: investigar, descobrir, conectar, criar e refletir. Com esse tipo de abordagem, os alunos têm a oportunidade de vivenciar o pensamento científico de uma maneira interpretativa e reflexiva. Ao longo da educação infantil, a criança tem contato com brincadeiras e projetos lúdicos, enquanto em séries mais avançadas, o aluno é desafiado por projetos interdisciplinares.

Logo, as atividades focadas no STEAM proporcionam momentos em que os alunos são questionados e incentivados a lidar com dilemas e questionamentos que devem ser solucionados com criatividade. Dessa maneira, há o desenvolvimento das habilidades e inteligências de maneira interativa e autônoma.

O curioso é perceber que o método também altera o papel do professor dentro da sala de aula. Nesse novo contexto, o profissional torna-se um guia, sendo responsável por oferecer mentoria e apoio, promovendo um método de trabalho integrado. Consequentemente, o professor torna-se ainda mais capacitado para a percepção da interdisciplinaridade do currículo escolar.

## Impactos na formação educacional

O método é, portanto, uma ótima opção para o desenvolvimento de habilidades interessantes para os alunos de hoje, que amanh, irão se tornar os cidadãos do futuro! Entre os impactos na formação educacional, o STEAM proporciona o desenvolvimento da criatividade, imaginação e inovação, além do incentivo ao pensamento crítico para a resolução de problemas; aprimora as habilidades de comunicação e colaboração, bem como a flexibilidade; e fortalece habilidades sociais e culturais.

O STEAM é pautado, sobretudo, em uma abordagem pedagógica criativa, voltando-se às necessidades de adaptação das crianças a uma sociedade cada vez mais comunicativa, tecnológica e interconectada. Sem dúvida, é uma ótima oportunidade para que seu filho desenvolva seus conhecimentos de maneira saudável e lúdica.

Aproveite a visita ao nosso blog e não deixe de conferir também quais são os melhores cursos extracurriculares para crianças, e alguns experimentos caseiros para se divertir com seus filhos!`,
  },
{
    slug: "para-que-serve-o-arduino-na-robotica",
    title: "Para que serve o Arduino na robótica?",
    excerpt: "Uma plaquinha e inúmeras possibilidades! O Arduino é uma plataforma que, desde seu desenvolvimento, há pouco mais de 10 anos, trouxe o campo da robótica…",
    category: "Robótica",
    author: "Equipe Ensina Mais",
    date: "2019-01-11",
    readTime: "3 min",
    cover: "/images/courses/bento-robotica.webp",
    content: `Uma plaquinha e inúmeras possibilidades! O Arduino é uma plataforma que, desde seu desenvolvimento, há pouco mais de 10 anos, trouxe o campo da robótica para perto não apenas dos estudantes, mas também dos artistas, curiosos e autodidatas no mundo dos códigos. A pequena plaquinha traz consigo a responsabilidade de transformar conhecimentos desta área em um campo acessível e produtivo, moldando sonhos e projetos, e inovando cada vez mais. Mas, apesar de seu sucesso, o que realmente é o Arduino e o que é possível fazer com ele? Nós respondemos essas e outras perguntas para você. Confira!

## O que é o Arduino?

O Arduino é uma plataforma de prototipagem criada em 2005, na Itália, por Massimo Banzi, com o apoio de seus colaboradores David Cuartielles, Tom Igoe, Gianluca Martino e David Mellis. A placa foi idealizada com propostas educacionais e, por isso, tinha como objetivo aliar preço baixo, funcionalidade e facilidade para a programação, características que tornam o equipamento acessível para estudantes, projetistas, designers, artistas e até mesmo pessoas curiosas pelo universo da robótica.

Um de seus atributos mais interessantes é que o Arduino é uma plataforma eletrônica open-source, ou seja, ela pode ser facilmente montada, modificada, personalizada e programada. Ela é composta por um microcontrolador Atmel de 8 bits, além de pinos digitais e analógicos para entrada e saída que permitem a conexão com computadores e programas de IDE (Integrated Development Environment, ou Ambiente de Desenvolvimento Integrado, em português) e uma entrada USB. Já em relação ao seu software, o Arduino utiliza as linguagensC e CC+em seus códigos.

## O que você pode fazer com o Arduino?

Com criatividade e dedicação, o Arduino oferece uma lista infinita de possibilidades, já que com o código adequado aos seus objetivos, é possível fazer a placa automatizar os mais diversos processos e objetos - de casas e automóveis até brinquedos e novas engenhocas. Vale ressaltar que as placas mais simples não apresentam muitos recursos de rede, mas quando combinadas com outras placas Arduino, aumentam sua funcionalidade e criam as extensões chamadas de shields.

Devido aos seus sensores, a plataforma também pode facilmente interagir com o ambiente e seus arredores, controlando luzes e motores, por exemplo. Os projetos desenvolvidos podem ser autônomos ou se comunicar diretamente com um computador para que realizem uma determinada tarefa.

## Como essa plataforma é programada?

Como mencionamos, programar uma plataforma Arduino é, na verdade, extremamente simples! Para ativar suas inúmeras funcionalidades, basta conectá-la ao seu computador através da entrada USB e, na sequência, utilizar um programa IDE para escrever o código adequado aos objetivos do seu projeto. É interessante ressaltar que o site oficial do Arduino permite que você baixe o software gratuitamente, proporcionando o suporte necessário para que você programe, encontre eventuais erros em seu código e transfira todos os dados para a plataforma.

## Onde eu posso comprar um Arduino?

É possível encontrar uma série de placas com diferentes características e componentes no mercado e na loja oficial da marca. Para decidir qual delas comprar, é necessário pesquisar suas características e compreender quais de suas especificidades são ideais e se encaixam com seus projetos ou estudos.

O Arduino é um instrumento muito produtivo e interessante para os apaixonados por robótica - independentemente de seus níveis de conhecimento. A plataforma permite um exercício divertido e prazeroso de conceitos importantes para o universo da programação e, por isso, conhecê-la pode ser uma excelente ideia! Se você e seu filho curtem fazer novas engenhocas, não deixe de conferir 5 experimentos caseiros para fazerem juntos, e aproveite a visita ao nosso blog para conhecer também os benefícios da robótica para as crianças.`,
  },
{
    slug: "o-que-seu-filho-aprende-em-um-curso-de-robotica",
    title: "O que seu filho aprende em um curso de robótica?",
    excerpt: "Com o desenvolvimento da tecnologia, uma série de novos conteúdos se tornou necessária para a formação básica das crianças. Além de aprender os temas…",
    category: "Robótica",
    author: "Equipe Ensina Mais",
    date: "2018-12-20",
    readTime: "3 min",
    cover: "/images/blog/o-que-seu-filho-aprende-em-um-curso-de-robotica.webp",
    content: `Com o desenvolvimento da tecnologia, uma série de novos conteúdos se tornou necessária para a formação básica das crianças. Além de aprender os temas clássicos de matemática ou biologia, os pequenos precisam aprender a lidar com a infinidade de máquinas e de computadores presentes em sua rotina. Nesse sentido, o ensino da robótica se destaca ao englobar diversos temas relacionados à computação e a outros assuntos, como você pode ver nos itens a seguir.

## Do que trata o curso?

O curso de robótica possui um caráter multidisciplinar, trabalhando com conteúdos de matemática, de física e de programação. As crianças aprendem assuntos como funcionamento de motores, geração e conservação de energia, programação de computadores e funcionamento de componentes eletrônicos. Os alunos são desafiados a executar projetos que se utilizam das bases teóricas aprendidas para criar soluções para o dia a dia da criança.

Os materiais didáticos procuram trabalhar a parte mecânica, cuidando da montagem de placas eletrônicas para a criação da estrutura de robôs e outros sistemas mecânicos. A parte de informática propicia a escrita de códigos de programação para designar funções aos aparelhos produzidos. Um dos exemplos bem comuns no curso é a criação de um carrinho de controle remoto feito com placas de Arduino!

O objetivo do curso é trazer às crianças temas importantes para o estudo da tecnologia, tudo de uma maneira lúdica e divertida. Os principais temas que seu filho aprenderá no curso são:

## Mecânica

As crianças estudam temas relacionados ao movimento, principalmente por configurar-se como um assunto importante para o estudo dos robôs. Para projetar um carrinho que anda sozinho, por exemplo, os alunos precisam entender toda a montagem das peças e saber como a energia atua para realizar o movimento das rodas.

## Eletrônica

Os alunos entram em contato com peças eletrônicas, como o Arduino. Durante as aulas, aprendem como elas são utilizadas para a transmissão de energia e transformações dentro da máquina.

## Programação

A programação de computadores está muito relacionada com a robótica, já que os códigos são responsáveis por designar ações aos robôs ou a qualquer outro sistema autônomo. Durante o desenvolvimento do curso, as crianças estudam temas como lógicas de programação e criação de algoritmos.

## Benefícios com o aprendizado da robótica

Além de tratar de temas mais teóricos da física e da computação, a robótica ainda auxilia no desenvolvimento de outras habilidades, como:

## Raciocínio lógico

Todo o curso de robótica trabalha com a utilização do raciocínio lógico e da criatividade para a construção dos projetos. Além disso, o aprendizado das linguagens de programação pede um trabalho muito cuidadoso, já que um detalhe equivocado pode ocasionar o mau funcionamento de toda a peça.

## Trabalho em equipe

Os projetos propostos em sala de aula engajam os alunos a trabalhar juntos. Com isso, eles aprendem importantes lições sobre organização, divisão de tarefas e relacionamento com os colegas.

## Resolução de problemas

A robótica está muito ligada com a cultura maker, que ensina as pessoas a se utilizar de coisas do seu dia a dia para criar soluções criativas e inteligentes. Assim, a criança trabalha suas habilidades de resolver problemas, já que ela recebe a tarefa em sala e precisa usar o seu conhecimento para projetar um robô ou um sistema autônomo para o fim desejado.

Venha conhecer o curso de robótica Ensina Mais Turma da Mônica! Acesse o link abaixo e saiba mais:

Curso de robótica educacional`,
  },
{
    slug: "como-ensinar-os-seus-filhos-a-usar-a-internet-com-seguranca",
    title: "Como ensinar os seus filhos a usar a internet com segurança",
    excerpt: "A internet proporciona um mundo incrível de atividades: jogar games, procurar por novas informações, conversar com os amigos e dar boas risadas assistindo a…",
    category: "Família",
    author: "Equipe Ensina Mais",
    date: "2018-12-12",
    readTime: "4 min",
    cover: "/images/blog/como-ensinar-os-seus-filhos-a-usar-a-internet-com-seguranca.webp",
    content: `A internet proporciona um mundo incrível de atividades: jogar games, procurar por novas informações, conversar com os amigos e dar boas risadas assistindo a vídeos on-line. Com tantas funcionalidades, é natural o contato precoce das crianças com o universo virtual, por isso muitos pais questionam qual é a melhor maneira de lidar com a situação.

Para uma criança é difícil entender o quão perigosa a internet pode ser caso suas informações pessoais caiam em mãos erradas. Os pequenos não têm a compreensão de que o mundo virtual é, na verdade, uma extensão da nossa sociedade, e é necessário seguir algumas regras para se manter seguro. Para ajudá-lo a conversar com o seu filho e ter a certeza de que ele está usando as ferramentas on-line de maneira adequada, nós separamos algumas dicas. Acompanhe!

## Transforme a internet em uma ferramenta comum a toda a família

Manter o computador conectado à internet em uma área comum da casa pode ser uma boa maneira de reforçar a segurança do seu filho no universo virtual. Ao navegar sob o olhar dos pais, é possível explicar à criança como a internet envolve algumas regras, como acontece na escola, por exemplo.

Outro ponto interessante é que ao tornar o computador um item comum no ambiente familiar, é mais fácil perceber o que o seu filho faz no mundo on-line. Além de orientá-lo sobre quais sites e games ele deve acessar, você também deve ajudá-lo a criar contas que não revelem sua identidade e explicar como suas senhas são códigos importantes que não devem ser compartilhados.

Vale ressaltar que existem diversossoftwares e extensões capazes de controlar e bloquear o acesso a sites e plataformas com conteúdo impróprio para a idade da criança.

## Peça que seus filhos dividam com você suas experiências on-line

Antes de tudo, bater um papo sincero com o seu filho é a melhor decisão para ter certeza de que o pequeno está usando o mundo on-line de maneira segura. Por isso, demonstre interesse sobre os endereços que ele frequenta na webe, sempre que possível, peça para acompanhá-lo em suas pesquisas ou games. Além disso, é muito importante mostrar a ele como esse é um caminho para uma comunicação sincera, e que ele deve lhe contar sobre situações que julgar esquisitas ou que causem desconforto.

## Incentive-o a pensar sobre o mundo on-line

Desde cedo, os pais devem incentivar o seu filho a compreender o que pode ou não ser publicado nas redes sociais e demais espaços da internet. É essencial esclarecer que informações como telefones, endereços, nome da escola ou mesmo fotos pessoais não devem ser compartilhadas - e que essa regra não é apenas para eles, pois também é seguida à risca por todos os usuários, independente da idade.

Portanto, é muito bacana orientá-los sobre como é importante refletir antes de postar qualquer tipo de conteúdo na web. Explique como ao postar uma foto ou texto, muitas pessoas podem vê-lo ou mesmo copiá-lo, impedindo que ele desapareça mesmo quando excluído. Por isso, é essencial ter certeza sobre aquilo que está compartilhando, mesmo que apenas com os amigos.

## Explique como tomar cuidado

Um dos conceitos mais importantes sobre o mundo on-line é compreender como ele é uma extensão da nossa realidade e, logo, é necessário se comportar como na vida real. A partir daqui, é muito relevante explicar que, assim como nós não conversamos com pessoas estranhas na rua, não se deve conversar com desconhecidos pela internet também, e que esse conselho vale para as redes sociais e para as salas de bate-papo dos games.

Seguindo a mesma ideia, é fundamental esclarecer que na web a diferença entre boas e más ações são as mesmas que no mundo real e, dessa maneira, é muito importante respeitar os outros usuários. Essa talvez seja uma boa ponte para comentar também que nem todas as informações disponíveis na internet são públicas. Vale usar exemplos, mencionando que realizar o download ilegal de um filme ou copiar um texto sem dizer quem o escreveu é considerado errado, pois essas informações pertencem a outra pessoa.

Aproveite o gancho e explique para o seu filho que nem todo conteúdo disponível na internet pode ser considerado verdadeiro. É importante incentivar o pequeno a criar consciência crítica e procurar fontes seguras de informações.

A segurança na internet é um assunto sério e merece a atenção adequada dos pais. Assim sendo, é muito importante que a criança também veja nos adultos à sua volta a imagem de uma relação boa e saudável com o mundo on-line.

Aproveite a visita e confira outros textos que você pode achar interessantes:

Dicas para ajudar seu filho a ser mais independente`,
  },
{
    slug: "os-5-robos-mais-amados-dos-filmes",
    title: "Os 5 robôs mais amados dos filmes",
    excerpt: "Como você imagina o futuro? Carros voadores, portais para teletransporte e, claro, muitos robôs! Parte da nossa imaginação, as máquinas conquistam nosso…",
    category: "Robótica",
    author: "Equipe Ensina Mais",
    date: "2018-12-05",
    readTime: "3 min",
    cover: "/images/blog/os-5-robos-mais-amados-dos-filmes.webp",
    content: `Como você imagina o futuro? Carros voadores, portais para teletransporte e, claro, muitos robôs! Parte da nossa imaginação, as máquinas conquistam nosso coração e inspiram sonhos bem malucos, movidos principalmente pelas criações incríveis que conhecemos nas telonas. Em homenagem a esses personagens mecanicamente encantadores, nós elencamos os cinco robôs mais amados do mundo do cinema. Confira!

## Wall-E

(Divulgação/Disney/Pixar)

É impossível não se apaixonar por ele. Wall-E é o personagem principal na animação distópica de mesmo nome, cuja produção e direção é dosEstúdios Pixar. No longa-metragem, o simpático robô é a última das máquinas remanescentes no planeta Terra e tem a missão de limpar toda a sujeira deixada para trás pelos seres humanos.

Solitário, percebemos que ele não abandona seu trabalho e aproveita a oportunidade para colecionar alguns itens curiosos. Também sonhador, Wall-E se apaixona por Eva e encara algumas confusões para ficar ao seu lado.

## Bumblebee

(Divulgação/Paramount Pictures)

Um dos personagens mais amados da franquia Transformers, Bumblebee é o primeiro Autobot a chegar à Terra. Com problemas para se comunicar, o robô costuma arrancar sorrisos ao usar as estações de rádio para falar o que está pensando.

Carismático, sua relação de lealdade com os humanos é a marca mais forte da sua personalidade. Sua forma alternativa, usada para se misturar às demais máquinas do nosso planeta, é o célebre Chevrolet Camaro SS, na cor amarela.

## Sonny

(Reprodução/O Globo)

Também chamado de NS5, Sonny é o protagonista do filmeEu, Robô, longa-metragem que retrata um futuro utópico no qual os seres humanos contam com máquinas inteligentes como assistentes pessoais. No entanto, a trama começa quando o personagem vai contra uma das Três Leis da Robótica e assassina seu mestre, Dr. Alfred Lanning.

Não se encaixando na descrição perfeita de uma máquina obediente, Sunny torna-se um personagem cativante ao demonstrar que sente emoções e é capaz de sonhar.

## Baymax

Não tem quem não repare em seu formato peculiar! Extremamente fofinho, Baymax foi desenvolvido pelo estudante Tadashi Hamada como um robô-médico, responsável por cuidar do bem-estar e da saúde de seus pacientes - e também ser muito abraçável.

No entanto, o personagem se vê enfrentando alguns desafios quando Hiro Hamada decide encontrar o responsável pelo acidente com seu irmão, Tadashi, e com a ajuda de seus amigos superinteligentes e criativos, formam a equipeBig Hero 6.

## C3PO eR2D2

(Divulgação/StarWars.com)

É claro que nós iríamos fechar esta lista com chave ouro, afinal, os robôs da incrível sérieStar Wars fascinam milhões de fãs há anos!

R2D2 é um robô multi-tarefas, capaz de consertar espaçonaves e outras estruturas complexas. Dono de uma personalidade carismática, é conhecido por sua inteligência, coragem e linguagem engraçada, formada por blips e blops.

Já C3PO é uma máquina um pouquinho... atrapalhada. Protagonista de cenas engraçadas na franquia, o robô é um andróide de protocolo e é fluente em mais de 6 milhões de idiomas falados por toda a galáxia. Dá para imaginar?

E aí, qual é o seu robô favorito? Conta pra gente nos comentários! :)

E se você curte o mundo das ciências e invenções malucas, não deixe de conferir os benefícios da robótica para as crianças e, quem sabe, você não decide estudar um pouquinho e criar o seu próprio robô?`,
  },
{
    slug: "quais-sao-os-melhores-cursos-extracurriculares-para-criancas",
    title: "Quais são os melhores cursos extracurriculares para crianças?",
    excerpt: "É importante que a educação oferecida pelas instituições de ensino tradicional seja complementada pela realização de cursos extracurriculares, auxiliando e…",
    category: "Educação",
    author: "Equipe Ensina Mais",
    date: "2018-11-21",
    readTime: "4 min",
    cover: "/images/blog/quais-sao-os-melhores-cursos-extracurriculares-para-criancas.webp",
    content: `É importante que a educação oferecida pelas instituições de ensino tradicional seja complementada pela realização de cursos extracurriculares, auxiliando e incentivando a criança a desenvolver novos repertórios e curiosidades. Além do desenvolvimento de habilidades motoras, cognitivas e emocionais, os cursos livres podem também contribuir para a formação de traços pessoais e conhecimentos que a longo prazo serão de grande importância para o cotidiano do seu filho. Mas em meio a tantas opções que o mercado oferece, como escolher o curso ideal?

## Principais cursos extracurriculares

Antes de escolher uma atividade extracurricular para o seu filho, é muito importante estar atento e priorizar aquelas com as quais o pequeno se identifica, de maneira a proporcionar novos momentos de aprendizado de maneira prazerosa. Listamos alguns cursos que você pode considerar interessantes, bem como seus benefícios para o desenvolvimento infantil.

## Curso de inglês

Desenvolver a fluência na língua inglesa é essencial para um futuro de sucesso. lém do reconhecimento no universo profissional e acadêmico, o aprendizado de uma segunda língua traz consigo um crescimento pessoal muito interessante para a criança, aproximando o pequeno de uma nova cultura.

Esse curso também proporciona um estímulo direto no desenvolvimento cognitivo, incentivando a criatividade e o raciocínio lógico. Além dos novos conhecimentos, aprender uma nova língua aguça a curiosidade e ainda contribui para uma melhora clara no relacionamento do aluno com a sua língua materna.

## Curso de língua portuguesa

Ler e escrever figuram entre as habilidades mais importantes para o processo educacional. Tais habilidades proporcionam, a longo prazo, o desenvolvimento de um raciocínio coeso e a correta compreensão e interpretação das demais disciplinas escolares.

Dessa maneira, entender textos, conhecer os fundamentos gramaticais e aprender a se expressar através das palavras é extremamente importante para o crescimento infantil. A opção por um curso extracurricular de língua portuguesa auxilia a garantir um processo de alfabetização sólido, contribuindo para que a criança ganhe gosto pelo idioma e sinta-se confortável para utilizá-lo e descobrir suas diversas nuances.

## Curso de matemática

O raciocínio lógico é extremamente relevante para a compreensão em diversas áreas de conhecimento, ganhando também muita importância em situações simples e cotidianas. Esse saber, em especial, é instigado pelo aprendizado de uma área específica: a matemática. Uma base sólida, ainda durante a infância, permite que a criança conquiste novos conhecimentos e aperfeiçoe-se ao longo do tempo.

Um curso extracurricular nessa área faz com que o aluno entre em contato novamente com fundamentos importantes, facilitando a sedimentação de conceitos relevantes. Com o material didático apropriado e atividades lúdicas, pode ainda contribuir para quebrar o estigma e o medo dos números, trazendo o conteúdo para perto do universo do seu filho.

## Curso de informática

Não há mais dúvidas de que nós vivemos em uma era digital, e nesse novo cenário, é importante proporcionar às crianças uma formação apropriada. Um contato saudável com a tecnologia e suas vertentes permite que o seu filho não apenas cresça atuando como um consumidor, mas também compreenda e reconheça os benefícios dessa ciência.

Os conhecimentos de informática ocasionam uma melhora significativa no raciocínio lógico, estimulando o desenvolvimento intelectual e psicossocial da criança. O computador é uma excelente ferramenta educacional, e o contato com diversos softwares e programas ainda na infância contribui para que, ao longo da vida, o pequeno conheça e se interesse por novas plataformas que se encaixam com suas necessidades e expectativas.

## Curso de robótica

A robótica é um dos cursos extracurriculares que mais despertam a curiosidade nas crianças. lém da criação de robôs e estruturas mecânicas, a disciplina instiga o raciocínio lógico dos alunos, desafiando-os com o ensino da programação, linguagem composta essencialmente por números e palavras.

Além disso, o curso permite ainda desenvolver um raciocínio coeso, com pensamentos bem estruturados e críticos, em conjunto com o incentivo à criatividade e à busca por soluções eficientes para problemas e desafios diversos.

## Realizando uma escolha: dicas importantes

Antes de optar por um curso extracurricular para o seu filho, permita que o pequeno participe da escolha, realizando aulas demonstrativas das atividades que pretende estudar. Também é interessante pensar em maneiras de adaptar o curso escolhido ao dia a dia, tornando esse novo momento de estudos uma experiência divertida e prazerosa.

Por isso, vale a ressalva: preencher toda a rotina da criança com cursos extracurriculares pode não ser uma boa saída. É necessário que o pequeno também tenha o tempo necessário para lidar com as tarefas da escola, descansar e até mesmo não fazer nada, uma vez que o ócio possibilita o desenvolvimento da criatividade e a curiosidade para explorar o mundo de uma maneira própria e pessoal.`,
  },
{
    slug: "5-experimentos-caseiros-para-fazer-com-seus-filhos",
    title: "5 experimentos caseiros para fazer com seus filhos",
    excerpt: "É comum se deparar com o questionamento das crianças de “por que eu devo aprender isso?”. Não é difícil se assustar com a quantidade de teoria à qual estão…",
    category: "Família",
    author: "Equipe Ensina Mais",
    date: "2018-11-14",
    readTime: "4 min",
    cover: "/images/blog/5-experimentos-caseiros-para-fazer-com-seus-filhos.webp",
    content: `É comum se deparar com o questionamento das crianças de “por que eu devo aprender isso?”. Não é difícil se assustar com a quantidade de teoria à qual estão expostos, mas é possível reverter essa situação. Além do apoio ao estudo, algumas soluções caseiras, como experimentos científicos, ajudam os pequenos a assimilar os assuntos.

## Bexiga que enche sozinha

## Ingredientes

- Bexiga
- Garrafa pet vazia e limpa
- Uma colher de sopa
- Um funil
- Vinagre
- Bicarbonato de sódio

## Como fazer

Encha aproximadamente ? da garrafa pet com vinagre. Coloque 2 ou 3 colheres de bicarbonato de sódio dentro da bexiga. Após ambos os materiais preparados, prenda a bexiga no gargalo da garrafa, de modo que o bicarbonato de sódio caia dentro do recipiente.

## Explicação

A interação entre o bicarbonato de sódio e o vinagre, uma base e um ácido, provoca a liberação do dióxido de carbono, o famoso CO2. A reação entre os componentes faz com que essa liberação de gás encha a bexiga.

## Colorir as flores

## Ingredientes

- Flor branca
- Recipiente de vidro (vaso ou não)
- Corante alimentício

## Como fazer

Em um recipiente de vidro, acrescente o corante alimentício e misture bem. A cor é de sua preferência. Corte o talo da flor, de modo que ainda fique um bom espaço para sustentá-la e mantê-la viva. Após isso, coloque o talo na água com corante e espere a mágica acontecer. Essa experiência pode levar algumas horas.

## Explicação

As flores, assim como qualquer outro vegetal, absorvem água pelo caule. Quando colocada na água, a flor absorve todos componentes presentes nela, inclusive o corante. Essa experiência mostra o processo de absorção de nutrientes das flores.

## Areia movediça

## Ingredientes

- Recipiente de vidro
- 1 caixa de amido de milho
- 1 copos de água

## Como fazer

Misture 3 copos de amido de milho com 1 de água até que forme uma mistura homogênea e grossa. O tempo aproximado para chegar ao ponto ideal é de 5 minutos.

## Explicação

Assim como a areia movediça, essa experiência permite observar misturas que agem tanto como líquido quanto como sólido. Se colocar a superfície da mão com pressão sobre a “areia movediça” caseira, a mistura agirá como sólido e não afundará. Já se apenas um dedo for colocado na mistura, o corpo afunda devido à baixa pressão. Esse tipo de mistura é conhecida como “não newtoniana”.

## Vela mágica

## Ingredientes

- Vela pequena
- Recipiente de vidro (que cubra a vela em pé)
- Recipiente raso (pode ser umprato)
- Água
- Corante alimentício

## Como fazer

Fixe a vela em pé no recipiente raso, misture um copo de água com o corante e o despeje em volta da vela. Acenda a vela e tampe-a com o recipiente de vidro. É importante a supervisão de um adulto para que as crianças não se queimem. Após tampada, você poderá observar o conteúdo líquido do recipiente raso subindo no recipiente de vidro e apagando a vela.

## Explicação

A água sobe, pois a vela precisa de oxigênio para se manter acesa e, quando o recipiente é colocado em cima dela, a quantidade de O2 (oxigênio) fica limitada. Quando esse gás acaba dentro do recipiente de vidro devido à queima da vela, outros gases ainda permanecem ali dentro, o que causa a diferença de pressão atmosférica em relação ao que está para fora. Essa pressão faz com que a água seja empurrada para dentro do vidro.

## O balão que não explode

## Ingredientes

- Bexiga
- Vela
- Água

## Como fazer

Acrescente um pouco de água dentro da bexiga e a encha com ar. Não é necessário colocar muita água. Acenda a vela e coloque a parte da bexiga que está com água sobre ela. Como se fosse um truque de mágica, a bexiga, que normalmente exposta a altas temperaturas estouraria, permanece intacta.

## Explicação

Essa experiência pode ser explicada a partir do conceito físico de calor específico. Como a água possui calor específico maior do que o ar, é capaz de absorver o calor da chama e não permitir que a borracha esquente a ponto de estourar.

Além de garantir bons momentos com os filhos, as experiências permitem que eles coloquem em prática os assuntos vistos em sala de aula. A prática, assim como a realização de exercícios, ajuda na absorção de conteúdos programáticos. Buscar atividades que ajudam no desenvolvimento infantil é essencial para os pequenos. Há maneiras de conciliar o aprendizado com diversão, como é o caso do uso da tecnologia como ferramenta de ensino.`,
  },
{
    slug: "como-o-apoio-escolar-pode-ser-solucao-para-a-dificuldade-nos-estudos-do-seu-filho",
    title: "Como o apoio escolar pode ser solução para a dificuldade nos estudos do seu filho?",
    excerpt: "Boa estrutura escolar, incentivo da família, estudo e muitas notas vermelhas? Apesar de esse cenário soar um pouco estranho, muitas crianças apresentam…",
    category: "Apoio Escolar",
    author: "Equipe Ensina Mais",
    date: "2018-11-07",
    readTime: "3 min",
    cover: "/images/blog/como-o-apoio-escolar-pode-ser-solucao-para-a-dificuldade-nos-estudos-do-seu-filho.webp",
    content: `Boa estrutura escolar, incentivo da família, estudo e muitas notas vermelhas? Apesar de esse cenário soar um pouco estranho, muitas crianças apresentam dificuldades em diversas etapas do aprendizado ao longo da vivência escolar. É natural que diante dos contratempos uma nova rede de apoio além da comunidade escolar seja procurada. O reforço escolar pode ser uma solução interessante, uma vez que proporciona uma nova oportunidade para que a criança aprimore seus conhecimentos e entenda suas dúvidas, lidando com as dificuldades de uma maneira saudável e produtiva.

## Um empurrãozinho a mais

Diferente do que se imagina, o apoio escolar não tem o objetivo de substituir o processo de aprendizagem das escolas tradicionais. A ideia é que essas aulas extras atuem como uma ajudinha ao ensino, auxiliando na revisão e fixação de conceitos previamente aprendidos.

Além disso, o reforço pode ainda se configurar como um novo método de abordagem para os conteúdos, oferecendo outros olhares e permitindo a aprendizagem com o uso de outras linguagens. As turmas menores também garantem maior proximidade entre aluno e professor, facilitando o estudo em uma atmosfera diferente e com mais incentivo.

## Formação mais completa

O acesso às aulas de apoio escolar pode maximizar o aprendizado, tornando-se uma janela para um melhor desenvolvimento cognitivo da criança. Esse tipo de abordagem se faz extremamente interessante ao longo do processo de alfabetização, já corrigindo falhas e solucionando dúvidas.

Com esse pensamento a longo prazo, o reforço escolar garante uma formação futura ainda mais abrangente, resultado de uma base completa de conhecimentos adquiridos ainda nos primeiros anos escolares. A metodologia utilizada garante um acompanhamento focado no aluno e nas suas necessidades, auxiliando o pequeno a desenvolver ainda mais sua atenção e resiliência.

## Facilidades x dificuldades

Assim como os adultos, as crianças já expressam desde cedo os conhecimentos com os quais possuem maior afinidade. Alguns têm mais interesse pelo raciocínio lógico, enquanto outros desenvolvem melhor ideias verbais ou possuem maior rendimento em disciplinas que exigem desempenho físico, por exemplo. Essas predileções podem, no entanto, resultar em um esforço maior ou menor em determinadas matérias.

Ao apoio escolar cabe não só auxiliar com dúvidas, mas também quebrar a resistência natural que a criança pode desenvolver aos números ou palavras. Preencher tais lacunas resulta em maior incentivo, principalmente quando os pais colaboram e ressaltam a importância que os diversos conhecimentos têm na vida adulta.

## Cuidado com a superproteção

Acompanhar o desempenho dos pequenos na escola eas tarefas de casa concluídas, ou auxiliá-los a se organizar para a próxima prova é muito importante. No entanto, resolver as atividades por eles ou mesmo superprotegê-los pode não ser a melhor saída. O reforço escolar permite que os pais incentivem a autonomia de seus filhos, deixando-os aos cuidados de profissionais qualificados para ajudar com as lições e estudos de maneira pedagogicamente correta. Vale ressaltar que, mesmo em aulas de reforço, o incentivo dos pais aos estudos é imprescindível.

## Atenção à origem da dificuldade

É necessário estar atento principalmente às situações adversas que causam transtornos no aprendizado. Seria estresse ou apenas questões relacionadas ao ritmo das aulas na escola? Nesses casos, o apoio escolar e a presença dos pais pode auxiliar a solucionar as dificuldades. No entanto, caso as situações persistam, é interessante atentar aos fatores biológicos, como dislexia, autismo ou TDAH. Por isso, mantenha um canal de comunicação saudável com a instituição de ensino, sempre questionando sobre o desempenho do seu filho e seus comportamentos em sala, procurando os profissionais indicados caso exista a necessidade.`,
  },
{
    slug: "5-coisas-que-toda-crianca-deve-fazer",
    title: "5 coisas que toda criança deve fazer",
    excerpt: "Ser criança é muito bom! Essa época da vida guarda muitas das nossas memórias afetivas, ligadas principalmente aos momentos divertidos e prazerosos vividos…",
    category: "Família",
    author: "Equipe Ensina Mais",
    date: "2018-11-01",
    readTime: "3 min",
    cover: "/images/blog/5-coisas-que-toda-crianca-deve-fazer.webp",
    content: `Ser criança é muito bom! Essa época da vida guarda muitas das nossas memórias afetivas, ligadas principalmente aos momentos divertidos e prazerosos vividos ao lado da família e dos amigos. Entre as lembranças, muitas delas são de atividades vivenciadas ao ar livre que são capazes de proporcionar uma nova percepção sobre o mundo e a natureza.

Para que você incentive o seu filho a se reconectar com um estilo de vida sem tecnologia, aproveitando a sua infância ao máximo, separamos cinco passeios ou atividades muito legais para vocês fazerem juntos. Confira!

## Conhecer animais de perto

Quem não sonha em ver seus animais favoritos de perto? Ir ao zoológico ou ao aquário da sua cidade pode ser um passeio muito animado para as crianças, já que vai proporcionar o descobrimento de inúmeras espécies. Converse com elas sobre os nomes dos animais, suas cores, cheiros e até mesmo curiosidades, como alimentação e hábitos interessantes.

O programa é uma oportunidade para reforçar o vocabulário e o conhecimento dos pequenos, além de uma alternativa gratificante para que os adultos também saiam da rotina.

## Fazer e conhecer arte

Desenhar é uma das atividades favoritas das crianças. Além dos benefícios para o desenvolvimento motor e cognitivo, os desenhos instigam a criatividade e contribuem para uma melhor percepção do mundo e relação com as suas emoções. Mas que tal proporcionar novas vivências às crianças durante esse processo?

Leve seus filhos a exposições e museus apropriados para a idade. Visitem monumentos e referências arquitetônicas locais. Em seguida, proponha exercícios relacionados aos novos conhecimentos, como a releitura de uma obra de arte que conheceram.

Permita também que as crianças entrem em contato com novos materiais e texturas. Que tal uma escultura em argila? Ou uma colagem feita apenas com coisas encontradas no jardim? Deixe a imaginação aflorar e entre junto na brincadeira!

## Acampar

Acampar proporciona uma atividade diferente e incomum na rotina dos seus filhos. Vocês podem acampar em uma área própria para camping, no quintal de casa ou mesmo na sala de estar. O importante é incentivar uma nova aventura com atividades curiosas e que irão render boas lembranças, como dormir em barracas e sacos de dormir, observar e aprender sobre as estrelas ou contar histórias enquanto comem marshmallows.

## Cozinhar em família

De maneira organizada, é muito divertido e prazeroso cozinhar com a ajuda dos pequenos. A atividade incentiva a autoestima das crianças, permitindo que elas desenvolvam novas habilidades, e valoriza o trabalho em equipe. Atribua as responsabilidades e afazeres sempre de acordo com a idade, não deixando-as sem supervisão e evitando o contato com objetos que podem causar ferimentos ou queimaduras.

Uma receita pode ser também uma ótima oportunidade para ensinar quais alimentos são saudáveis e quais podem prejudicar diretamente a saúde das crianças. Nesse momento em família, você pode reforçar alguns conceitos matemáticos e de cálculos dos ingredientes. Que tal escolher uma receita bem gostosa e fazer com as crianças um almoço de domingo?

## Brincar na praia

Brincadeiras divertidas devem ser parte da rotina de crescimento dos pequenos. No entanto, aproveitar os fins de semana e as férias escolares para levá-los para novas aventuras pode ser uma ótima opção. Programe-se e leve o seu filho à praia. As novas texturas, ambientes e atividades podem ser estímulos interessantes para o desenvolvimento dele, sem contar as inúmeras memórias que irão construir juntos, seja montando um castelo de areia, seja tomando um banho de mar.`,
  },
{
    slug: "7-beneficios-da-robotica-para-as-criancas",
    title: "7 benefícios da robótica para as crianças",
    excerpt: "A tecnologia está cada vez mais presente em nosso dia a dia, configurando uma verdadeira transformação do nosso relacionamento com a informação e…",
    category: "Robótica",
    author: "Equipe Ensina Mais",
    date: "2018-10-25",
    readTime: "3 min",
    cover: "/images/blog/7-beneficios-da-robotica-para-as-criancas.webp",
    content: `A tecnologia está cada vez mais presente em nosso dia a dia, configurando uma verdadeira transformação do nosso relacionamento com a informação e influenciando diretamente os nossos comportamentos. As crianças, consideradas nativos digitais, já lidam com essa realidade em que as mudanças acontecem de maneira quase imediata.

Como reflexo dessa tendência, vemos um crescimento do interesse pelos conhecimentos relacionados às áreas da computação e da tecnologia. A robótica, por exemplo, é uma temática muito procurada pelas crianças movidas pela curiosidade e, claro, pela familiaridade com os gadgets. Hoje, esses aprendizados são considerados tão importantes quanto o domínio de uma segunda língua, uma vez que podem permitir no futuro um grande diferencial na vida profissional.

Pensando nisso, nós separamos os principais benefícios que o estudo da robótica pode trazer para o seu filho. Confira!

## Melhora do raciocínio lógico

Para aprender a programar, o aluno precisa desenvolver as suas habilidades cognitivas, estruturando um pensamento lógico e objetivo com o uso de uma linguagem codificada, formada essencialmente por números e letras. Ao executar uma série de atividades práticas, o pequeno tem a oportunidade de testar e desenvolver um raciocínio mais rápido, crítico e analítico.

## Mais facilidade com conceitos matemáticos

Com projetos dinâmicos, a robótica proporciona a aplicação de conceitos teóricos em desafios divertidos, com resultados visíveis aos alunos. Consequentemente, o pequeno sente-se incentivado a aprender, fixa o conhecimento de uma maneira orgânica e se familiariza com os números e as operações matemáticas, o que pode representar também uma melhora significativa na compreensão das matérias escolares correlatas.

## Desenvolve uma boa redação

Um melhor desempenho nas matérias de ciências humanas também é perceptível, uma vez que aprender a codificar exige que o aluno desenvolva intensamente a sua capacidade de estruturar pensamentos e ideias. Como resultado, a produção de conteúdo textual torna-se mais coerente e há uma maior facilidade na aprendizagem de uma língua estrangeira, como o inglês, devido ao maior contato com palavras no idioma.

## Incentiva a criatividade e a experimentação

Apesar de desafiadora, a robótica é vista como um tema curioso pelas crianças. A abordagem prática, com projetos variados, proporciona o desenvolvimento da criatividade, impulsionado pela necessidade de criar storytellings em games ou alcançar o objetivo idealizado para suas criações, por exemplo. Em conjunto, os pequenos ainda exploram a sua capacidade de experimentar novas ideias, buscando solucionar ou lidar com contratempos que podem aparecer ao longo do processo.

## Melhora o desempenho pessoal e a organização

A elaboração de um projeto eficiente requer concentração e organização. Ao longo do aprendizado, o aluno compreende as melhores maneiras de projetar suas ideias - desde o planejamento até a execução - e a importância de manter seu material e espaço de trabalho sempre organizados. É necessário que o aluno atente aos prazos, o que contribui para o desenvolvimento de noções ligadas à responsabilidade.

## Preparação para o mercado de trabalho

A valorização do trabalho em equipe, o comprometimento, a capacidade de lidar com imprevistos e a proatividade são características importantes e incentivadas pela aprendizagem da robótica. Entusiasmado e preparado, o pequeno terá uma vantagem pessoal significativa frente aos desafios do mercado de trabalho - somada, é claro, aos conhecimentos e habilidades diferenciados, o que pode ser um passo à frente independente da carreira escolhida no futuro.`,
  },
{
    slug: "7-motivos-que-levam-as-criancas-a-irem-mal-em-matematica",
    title: "7 motivos que levam as crianças a irem mal em matemática",
    excerpt: "Nem sempre é fácil lidar com as notas baixas dos filhos, mas é preciso entender quais são os motivos que levaram a tal resultado. Muitas vezes, a matemática…",
    category: "Apoio Escolar",
    author: "Equipe Ensina Mais",
    date: "2018-10-19",
    readTime: "3 min",
    cover: "/images/blog/7-motivos-que-levam-as-criancas-a-irem-mal-em-matematica.webp",
    content: `Nem sempre é fácil lidar com as notas baixas dos filhos, mas é preciso entender quais são os motivos que levaram a tal resultado. Muitas vezes, a matemática é vista como um bicho de sete cabeças, tornando o interesse dos alunos em algo quase raro. É importante saber driblar os desafios que esse mundo proporciona, afinal é uma matéria que faz toda a diferença na vida adulta, independentemente de carreira a ser seguida.

## Problemas orgânicos

O equilíbrio na rotina de uma criança é essencial para que haja um bom desempenho escolar e em seu desenvolvimento como um todo. Os aspectos orgânicos podem ser fortes influenciadores na performance de uma pessoa em suas atividades.

Uma boa noite de sono e uma alimentação balanceada são essenciais para que as crianças possam explorar seu lado cognitivo e lógico, essenciais para lidar com os desafios matemáticos. É importante manter acompanhamento com um profissional para que todas as carências fisiológicas sejam supridas e o desenvolvimento possa acontecer corretamente.

## Falta de estímulos

É comum encontrar pessoas que sentem dificuldade e que “odeiam” a matemática. Procure não demonstrar esse tipo de visão para crianças. Começar a aprender algo baseado em um pré-julgamento de que é difícil ou chato não é uma boa ideia. A falta de estímulos parentais pode influenciar diretamente no desenvolvimento da criança com as matérias aprendidas. É preciso enfrentar as dificuldades juntamente com a criança, de forma imparcial e incentivadora.

## Deficiência interpretativa

Um dos grandes impactos que a matemática tem na vida dos estudantes é devido à falta de capacidade interpretativa dos enunciados. Uma criança que tem dificuldade de interpretar textos dificilmente irá dominar o lado lógico das exatas. Isso ocorre pela falta de entendimento do que o exercício pede e que, consequentemente, prejudica a execução. É preciso preencher todas as lacunas existentes no ensino básico para que um bom rendimento na matéria aconteça.

## Não saber estudar

A lógica, a resolução de contas e a interpretação de problemas acontecem a partir da prática. Independentemente da idade, é importante que o treino seja constante e acompanhe o ritmo que é proposto na escola. É fundamental que as crianças levem para casa o que foi aprendido na sala de aula e que, dessa forma, possa ser exercitado o aprendizado, proporcionando de fato o domínio do conteúdo. É necessário que o gosto por estudar seja estimulado desde cedo.

## Falta de valor à matemática

Quem não pretende embarcar na área de exatas costuma não enxergar o valor que a matemática tem no dia a dia. É importante mostrar que as contas e, principalmente, o raciocínio lógico são tão importantes quanto aprender a ler ou a se comunicar em outro idioma. Esse sentimento de não importância faz com que o interesse em aprender caia, e sem interesse não há dedicação.

## Acompanhamento superficial

Cada pessoa possui suas próprias dificuldades individuais, e é importante que isso seja explorado. É fato que algumas pessoas possuem maior dificuldade em lidar com os números, mas isso não significa incapacidade. É preciso que ocorra um acompanhamento tanto pedagógico quanto parental para que a criança não se perca ou desanime em meio aos obstáculos encontrados na matéria. Procure entender qual é o nível de dificuldade do seu filho para que as atitudes necessárias possam ser tomadas e não ocorra uma defasagem no aprendizado.

## Adaptação ao ambiente escolar

O modo como as crianças e adolescentes se sentem em relação ao ambiente em que estão inseridos está diretamente ligado ao seu rendimento. Sentir-se seguro e encorajado é essencial para que o gatilho do desenvolvimento aconteça. Esse aspecto pode influenciar não só o aprendizado de matemática, mas também de todas as matérias.

O raciocínio lógico pode ajudar não só nas contas matemáticas, mas também a entender e processar as mudanças que ocorrem no cotidiano. É possível ajudar os filhos na escola mesmo com pouco tempo. Esteja atento às dificuldades que seu filho pode estar enfrentando e saiba como ajudá-lo.

A Ensina Mais dispõe de um ambiente preparado para ajudar seu filho com as dificuldades escolares. As aulas de reforço podem ser o empurrão de que ele precisava para superar o medo da matemática.`,
  },
{
    slug: "8-dicas-para-escolher-melhor-a-escola-do-seu-filho",
    title: "8 dicas para escolher melhor a escola do seu filho",
    excerpt: "O fim do ano se aproxima, e junto com ele, muitos pais optam por escolher uma nova escola para seus filhos. Seja qual for o motivo, mudar os ares pode ser…",
    category: "Apoio Escolar",
    author: "Equipe Ensina Mais",
    date: "2018-10-17",
    readTime: "3 min",
    cover: "/images/blog/8-dicas-para-escolher-melhor-a-escola-do-seu-filho.webp",
    content: `O fim do ano se aproxima, e junto com ele, muitos pais optam por escolher uma nova escola para seus filhos. Seja qual for o motivo, mudar os ares pode ser bom para toda a família e trazer resultados positivos para o desempenhos dos pequenos. No post de hoje, nós vamos te dar algumas dicas que irão ajudar bastante na hora de escolher uma instituição de ensino para matricular as crianças no próximo semestre!

## Defina prioridades

Antes de começar sua busca, liste os critérios de análise para a sua decisão, classificando-os de acordo com uma ordem de prioridade. O importante é que você saiba exatamente quais pontos julga mais importantes e podem ser decisivos para a escolha de uma instituição em lugar de outra.

## Pense na localização da escola

Lembre-se de que a escola é um local para onde seu filho deverá se deslocar todos os dias. Por isso, é fundamental que você pense em questões práticas relativas a transporte. Por mais que a instituição seja de qualidade, fica complicado para a criança ter que atravessar a cidade diariamente, por exemplo.

## Estude a metodologia

Por mais que o conteúdo proposto siga a mesma Base Curricular Nacional, a metodologia e os estilos de abordagem variam bastante de uma escola para outra. Assim, procure analisar com calma os materiais disponibilizados pela instituição. Além disso, veja se ela oferece outras estratégias de ensino, como ferramentas digitais e on-line.

## Analise a estrutura do local

Além da parte dos materiais de ensino, você precisa se preocupar com os espaços físicos da escola. Veja se há locais para favorecer a interação entre os alunos, se possui áreas confortáveis para seus filhos te esperarem caso você se atrase um dia, ou se conta com quadras para a prática de esportes coletivos, por exemplo.

## Conheça os profissionais

Procure falar com os diretores, professores e coordenadores da escola. Conheça o máximo de pessoas que trabalham no local e veja se a instituição oferece outros tipos de profissionais que podem ajudar bastante no desenvolvimento do seu filho, como orientadores pedagógicos e psicólogos.

## Procure por atividades extras

Busque saber o que a escola oferece além do ensino do currículo regular dentro de sala de aula. Pode ser que a oferta de outros conteúdos, como programação e prática de esportes, seja um critério decisivo para te ajudar a escolher a melhor instituição possível dentro do seu orçamento.

## Leve a criança junto

A palavra final deve ser dada pelos pais, que precisam levar em conta outros critérios, como o financeiro. Porém, ainda é importante ouvir o que seu filho tem a dizer, já que será ele quem irá estudar todos os dias. Por isso, leve a criança junto e considere o que ela achou sobre a escola. Insistir em um lugar de que ela não gostou pode te trazer problemas.

## Analise as opções com calma

Ao menos que você esteja passando por um momento muito delicado em que precisa escolher a escola com urgência, procure tirar um tempo para estudar todas as possibilidades e julgar com calma cada uma delas. Não tome decisões de um dia para o outro e visite o máximo de instituições possível.

## Bônus: conheça uma escola para todos os momentos

A Ensina Mais Turma da Mônica é uma escola que pode estar com o seu filho em todos os momentos, independentemente do colégio que você escolher para ele! Nossos cursos oferecem o que há de melhor quando o assunto é reforço escolar.

Acesse os links abaixo e conheça um pouco mais do que fazemos:`,
  },
{
    slug: "6-maneiras-de-ajudar-seu-filho-a-fazer-amigos",
    title: "6 maneiras de ajudar seu filho a fazer amigos",
    excerpt: "Manter um círculo de amigos é algo importante na vida de qualquer pessoa. E na infância não é diferente! As amizades são fundamentais para o desenvolvimento…",
    category: "Família",
    author: "Equipe Ensina Mais",
    date: "2018-10-10",
    readTime: "3 min",
    cover: "/images/blog/6-maneiras-de-ajudar-seu-filho-a-fazer-amigos.webp",
    content: `Manter um círculo de amigos é algo importante na vida de qualquer pessoa. E na infância não é diferente! As amizades são fundamentais para o desenvolvimento pessoal e social das crianças. Porém, alguns podem encontrar mais dificuldades no processo de se relacionar com os colegas de classe e da escola. Nesse sentido, cabe aos pais trazer as primeiras noções de companheirismo para os seus filhos. Por isso, as dicas que trouxemos hoje vão te auxiliar neste processo.

## Ofereça diversas atividades

Procure expandir o círculo social do seu filho oferecendo um número diverso de atividades para dar a ele a oportunidade de conviver com crianças diferentes. Matricule-o em aulas de esportes, de reforço escolar ou de inglês, por exemplo. Além disso, frequente espaços comuns, como parques, praças, clubes e eventos que tenham um público com a idade correspondente à dele.

## Ensine o valor das amizades

Assistam juntos a filmes, séries e desenhos animados que ilustrem a importância da amizade. Procure por produções que contem histórias emocionantes, valorizando o relacionamento entre amigos e mostrando como criar vínculos duradouros com as pessoas.

## Promova atividades em sua casa

Primeiro, procure conhecer os pais dos colegas que frequentam constantemente os mesmos espaços que os seus filhos, como a escola ou o curso de inglês. A partir daí, promova a interação entre as crianças, realizando atividades como cafés da tarde e noites de filme. O importante é criar um clima amistoso e convidativo para os pequenos se sentirem confortáveis em sua casa.

## Dê o exemplo

Mantenha os seus amigos próximos à você, demonstrando desde cedo a importância de manter um círculo social e conviver com pessoas queridas. Se eles tiverem filhos, é muito provável que as crianças também façam amizade entre si.

## Identifique o perfil do seu filho

Conheça a personalidade do seu filho e crie uma relação forte o bastante para ele conseguir se abrir com você. Saiba dizer se ele é uma pessoa mais fechada ou se tem facilidade na interação com os outros. O importante é que você respeite o perfil do seu filho e procure lidar com o assunto da maneira como ele se sente confortável.

## Dê suporte emocional

Não transforme o ato de fazer amigos em uma obrigação para os seus filhos. É importante que, primeiramente, ele se sinta amado e acolhido dentro de casa, e o que vier de fora é um complemento. Por isso, ofereça um suporte emocional confortável e, em casos mais graves, procure ajuda profissional para ajudar o seu filho a melhorar o relacionamento com as pessoas.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
