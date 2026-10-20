export const business = {
  name: 'Empório Natural',
  legalName: 'COMERCIO ESSENCIAL LTDA',
  displayLegalName: 'Comercio Essencial LTDA',
  cnpj: '19.682.853/0001-26',
  canonicalUrl: 'https://emporio-natural-lp.pages.dev/',
  canonicalDomain: 'emporio-natural-lp.pages.dev',
  whatsappNumber: '5527998688293',
  whatsappDisplay: '(27) 99868-8293',
  instagramUrl: 'https://www.instagram.com/emporionatural_oficial/',
  instagramHandle: '@emporionatural_oficial',
  publicEmail: 'essencialprimeadm@gmail.com',
  city: 'Pedro Canário',
  state: 'ES',
  postalCode: '29970-000',
  serviceAreas: ['Vitória', 'Vila Velha', 'Serra', 'Cariacica', 'Linhares', 'Guarapari'],
  streetAddress: 'Av. Dr. Mário Vello Silvares, 63, Centro',
  country: 'BR',
  logoPath: '',
  ogImagePath: '/images/products/omega-3.webp'
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const generalWhatsappLink = () =>
  whatsappLink(
    'Olá! Vim pelo site da Empório Natural e quero consultar opções. Produto ou categoria: [PRODUTO]. Minha cidade/CEP: [CIDADE/CEP]. Gostaria de saber marcas disponíveis, preço, prazo e frete.'
  );

export const deliveryWhatsappLink = () =>
  whatsappLink(
    'Olá! Vim pelo site da Empório Natural e quero consultar a entrega. Minha cidade é [CIDADE] e meu CEP é [CEP]. Gostaria de saber quais produtos estão disponíveis, o prazo e o valor do frete.'
  );

export const productWhatsappLink = (productName: string) =>
  whatsappLink(
    `Olá! Vim pelo site da Empório Natural e quero consultar o produto ${productName}. Pode me informar marcas disponíveis, preço, prazo e valor da entrega para minha cidade?`
  );

export const kitWhatsappLink = (kitName: string, composition: string) =>
  whatsappLink(
    `Olá! Vim pelo site da Empório Natural e quero consultar a combinação ${kitName} (${composition}). Pode me informar disponibilidade, marcas, preço e condição de entrega para minha cidade?`
  );

export const instagramMessageUrl =
  'https://ig.me/m/emporionatural_oficial';
