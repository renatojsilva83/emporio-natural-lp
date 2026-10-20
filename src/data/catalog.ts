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
    description: 'Opções para diferentes rotinas, marcas e preferências.'
  },
  {
    icon: 'bolt' as IconName,
    label: 'Vitaminas e minerais',
    description: 'Consulte formatos, marcas e apresentações disponíveis.'
  },
  {
    icon: 'package' as IconName,
    label: 'Suplementos em destaque',
    description: 'Uma seleção inicial para você começar a procurar.'
  },
  {
    icon: 'layers' as IconName,
    label: 'Outras categorias',
    description: 'Não encontrou o que procura? A equipe consulta para você.'
  }
];

export const featuredProducts = [
  {
    name: 'Cúrcuma',
    label: 'Destaque para conhecer',
    description: 'Consulte marcas, composição, apresentação e disponibilidade atual.',
    image: '/images/products/curcuma.webp',
    imageAlt: 'Frasco de cúrcuma em suplemento natural sobre fundo claro',
    tone: 'amber',
    icon: 'sparkle' as IconName
  },
  {
    name: 'Magnésio',
    label: 'Destaque para conhecer',
    description: 'Compare opções e encontre a apresentação adequada à sua rotina.',
    image: '/images/products/magnesio.webp',
    imageAlt: 'Frasco de magnésio Empório Natural com 60 cápsulas',
    tone: 'emerald',
    icon: 'bolt' as IconName
  },
  {
    name: 'Ômega 3',
    label: 'Destaque para conhecer',
    description: 'Consulte marcas, concentração, quantidade e preço pelo WhatsApp.',
    image: '/images/products/omega-3.webp',
    imageAlt: 'Frasco de ômega 3 Premium Fish Oil com cápsulas ao lado',
    tone: 'sky',
    icon: 'heart' as IconName
  },
  {
    name: 'Colágeno',
    label: 'Destaque para conhecer',
    description: 'Veja as opções disponíveis e confirme prazo e entrega para sua cidade.',
    image: '/images/products/colageno.webp',
    imageAlt: 'Frasco de colágeno em suplemento natural sobre fundo claro',
    tone: 'violet',
    icon: 'leaf' as IconName
  }
];

export const faqs = [
  {
    question: 'Vocês vendem apenas os produtos em destaque?',
    answer:
      'Não. Os produtos exibidos são apenas alguns destaques. A Empório Natural trabalha com outras categorias e marcas. Consulte nossa equipe para encontrar o produto que você procura.'
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
