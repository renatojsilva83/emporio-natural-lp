export type IconName =
  | 'whatsapp'
  | 'instagram'
  | 'shield'
  | 'truck'
  | 'bolt'
  | 'leaf'
  | 'heart'
  | 'sparkle'
  | 'check'
  | 'chevron'
  | 'menu'
  | 'map-pin'
  | 'mail'
  | 'phone'
  | 'package'
  | 'search'
  | 'layers'
  | 'message';

export const categories = [
  {
    icon: 'leaf' as IconName,
    label: 'Produtos naturais',
    description: 'Opções para quem quer cuidar melhor da rotina com escolhas naturais.'
  },
  {
    icon: 'bolt' as IconName,
    label: 'Vitaminas e minerais',
    description: 'Magnésio e outras opções para diferentes momentos do dia.'
  },
  {
    icon: 'package' as IconName,
    label: 'Articulações e mobilidade',
    description: 'Cúrcuma, colágeno e alternativas para uma rotina mais ativa.'
  },
  {
    icon: 'layers' as IconName,
    label: 'Ômega 3 e proteínas',
    description: 'Consulte concentrações, marcas e apresentações disponíveis.'
  }
];

export const needs = [
  {
    icon: 'bolt' as IconName,
    title: 'Cansaço e pouca disposição',
    description: 'Quando o ritmo da rotina pesa, vitaminas e minerais entram na conversa sobre reposição e cuidado diário.',
    product: 'Magnésio e vitaminas'
  },
  {
    icon: 'heart' as IconName,
    title: 'Coração, foco e alimentação',
    description: 'O ômega 3 é procurado por quem quer incluir gorduras essenciais em uma rotina de alimentação equilibrada.',
    product: 'Ômega 3'
  },
  {
    icon: 'leaf' as IconName,
    title: 'Mobilidade e articulações',
    description: 'Cúrcuma e colágeno aparecem entre as opções buscadas por quem quer cuidar da mobilidade e manter uma rotina ativa.',
    product: 'Cúrcuma e colágeno'
  },
  {
    icon: 'shield' as IconName,
    title: 'Cuidado depois dos 35',
    description: 'Uma fase em que muita gente passa a olhar com mais atenção para energia, músculos, descanso e alimentação.',
    product: 'Consulte a equipe'
  }
];

export const featuredProducts = [
  {
    name: 'Cúrcuma',
    label: 'Mobilidade e rotina articular',
    description: 'A cúrcuma é procurada por quem deseja incluir um suplemento na rotina de cuidado com mobilidade e articulações. Consulte composição, marca e apresentação disponíveis.',
    keyPoints: ['Cúrcuma em cápsulas', 'Consulte composição e marca', 'Disponibilidade e frete por cidade'],
    image: '/images/products/curcuma.webp',
    imageAlt: 'Frasco de cúrcuma em suplemento natural sobre fundo claro',
    tone: 'amber',
    icon: 'sparkle' as IconName
  },
  {
    name: 'Magnésio',
    label: 'Energia, músculos e descanso',
    description: 'O magnésio costuma aparecer na busca de quem sente a rotina mais pesada, tensão muscular ou quer cuidar melhor do descanso. Confira a forma e a dose no rótulo.',
    keyPoints: ['Para diferentes rotinas', 'Confira forma e dose no rótulo', 'Consulte a apresentação disponível'],
    image: '/images/products/magnesio.webp',
    imageAlt: 'Frasco de magnésio Empório Natural com 60 cápsulas',
    tone: 'emerald',
    icon: 'bolt' as IconName
  },
  {
    name: 'Ômega 3',
    label: 'Coração, foco e alimentação',
    description: 'O ômega 3 é procurado por quem quer incluir uma fonte de gorduras essenciais na rotina de alimentação e autocuidado. Consulte concentração, origem e marca disponíveis.',
    keyPoints: ['Fonte de gorduras essenciais', 'Consulte EPA, DHA e concentração', 'Marca e quantidade conforme estoque'],
    image: '/images/products/omega-3.webp',
    imageAlt: 'Frasco de ômega 3 Premium Fish Oil com cápsulas ao lado',
    tone: 'sky',
    icon: 'heart' as IconName
  },
  {
    name: 'Colágeno',
    label: 'Pele, unhas e aporte proteico',
    description: 'O colágeno costuma ser buscado em rotinas de cuidado com pele, unhas e aporte proteico. Consulte o tipo, a apresentação e a composição do produto disponível.',
    keyPoints: ['Rotinas de cuidado com a pele', 'Consulte tipo e composição', 'Apresentação conforme estoque'],
    image: '/images/products/colageno.webp',
    imageAlt: 'Frasco de colágeno em suplemento natural sobre fundo claro',
    tone: 'violet',
    icon: 'leaf' as IconName
  }
];

export const kits = [
  {
    name: 'Combinação Mobilidade e Rotina',
    composition: 'Cúrcuma + Colágeno',
    description:
      'Uma combinação de categorias para quem quer comparar opções relacionadas a mobilidade, articulações, pele e aporte proteico. Consulte composição, marca e disponibilidade de cada item.',
    icon: 'layers' as IconName
  },
  {
    name: 'Combinação Energia e Autocuidado',
    composition: 'Magnésio + Ômega 3',
    description:
      'Uma combinação de categorias para diferentes rotinas de energia, alimentação e autocuidado. Consulte apresentações, concentrações e condições para o pedido completo.',
    icon: 'package' as IconName
  }
];

export const faqs = [
  {
    question: 'Vocês vendem apenas os produtos em destaque?',
    answer:
      'Não. Os produtos exibidos são apenas alguns destaques. A Empório Natural trabalha com outras categorias e marcas. Consulte nossa equipe para encontrar o produto que você procura.'
  },
  {
    question: 'Qual é a finalidade dos produtos em destaque?',
    answer:
      'Cada destaque conversa com uma necessidade diferente da rotina: a cúrcuma é procurada para cuidado com mobilidade, o magnésio para rotinas de energia, músculos e descanso, o ômega 3 para alimentação e autocuidado, e o colágeno para rotinas de pele, unhas e aporte proteico. A composição e a indicação devem ser conferidas no rótulo do produto disponível.'
  },
  {
    question: 'Como consultar o frete?',
    answer:
      'Envie sua cidade ou CEP pelo WhatsApp. A equipe informará disponibilidade, prazo estimado, modalidade e valor da entrega.'
  },
  {
    question: 'O frete é mais barato para o Espírito Santo?',
    answer:
      'Trabalhamos para oferecer condições competitivas e rotas mais convenientes no Espírito Santo. O valor depende da cidade, do pedido, do peso, da quantidade e da modalidade. Consulte antes de confirmar.'
  },
  {
    question: 'Vocês entregam para outros estados?',
    answer:
      'Podemos avaliar envios para outras regiões do Brasil conforme disponibilidade, modalidade e cotação.'
  },
  {
    question: 'Posso comprar vários produtos juntos?',
    answer:
      'Sim. Informe os produtos que procura e consulte a condição para o pedido completo. Combinar itens pode alterar o valor da entrega.'
  },
  {
    question: 'Como comprar?',
    answer:
      'Escolha um destaque ou informe a categoria desejada, fale com a equipe pelo WhatsApp e confirme preço, disponibilidade, frete, prazo e pagamento.'
  },
  {
    question: 'Suplementos substituem medicamentos ou orientação profissional?',
    answer:
      'Suplementos alimentares não são medicamentos e não substituem alimentação equilibrada ou orientação de profissional de saúde. Consulte o rótulo e procure orientação quando necessário.'
  }
];
