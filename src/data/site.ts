// Todas as informações de contato e conteúdo editável ficam aqui.
// Telefones no formato internacional, só dígitos (55 + DDD + número).

export const WA_MESSAGE = 'Olá! Vim pelo site da Evolumix e gostaria de um orçamento.';

export function waLink(phone: string, message = WA_MESSAGE) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/** 5562993208081 -> (62) 99320-8081 | 556230911533 -> (62) 3091-1533 */
export function formatPhone(phone: string) {
  const ddd = phone.slice(2, 4);
  const n = phone.slice(4);
  return `(${ddd}) ${n.slice(0, n.length - 4)}-${n.slice(-4)}`;
}

export const company = {
  name: 'Evolumix',
  tagline: 'Distribuição e Suprimentos',
  legalName: 'Evolução Sistemas de Higienização Ltda – EPP',
  cnpj: '08.108.745/0001-80',
  email: 'evolucaopapeis.digital@gmail.com',
  mainPhone: '556230911533',
};

export type Seller = { name: string; role: string; phone: string };

export const sellers: Record<'goiania' | 'ferragista' | 'rioverde', Seller[]> = {
  goiania: [
    { name: 'Ana Tinoco', role: 'Vendedora · Goiânia', phone: '5562993208081' },
    { name: 'Maxiliano Cabral', role: 'Vendedor · Goiânia', phone: '5562982582552' },
    { name: 'Rodrigo Lopes', role: 'Vendedor · Goiânia', phone: '5562982582526' },
    { name: 'Kherley Alves', role: 'Vendedor · Goiânia', phone: '5562982582500' },
    { name: 'Davi Felipe', role: 'Vendedor · Goiânia', phone: '5562991137753' },
    { name: 'Neuza Mara', role: 'Vendedora · Goiânia', phone: '5562998058651' },
    { name: 'Reginaldo Moura', role: 'Vendedor · Goiânia', phone: '5562982580011' },
  ],
  ferragista: [
    { name: 'Dalmo Alves', role: 'Ferragista · Goiânia', phone: '5562994771965' },
    { name: 'Sara Cabral', role: 'Ferragista · Goiânia', phone: '5562999492246' },
  ],
  rioverde: [{ name: 'Greice Keilly', role: 'Vendedora · Rio Verde', phone: '5564981266383' }],
};

export const units = [
  {
    id: 'goiania',
    city: 'Goiânia',
    label: 'Matriz',
    street: 'Av. Marialva, 638, Qd. 12, Lt. 17',
    district: 'Vila Rosa',
    postalCode: '74843-610',
    region: 'GO',
    note: 'Loja ferragista com atendimento no balcão.',
    hours: [
      { days: 'Segunda a sexta', time: '8h–12h · 13h–18h' },
      { days: 'Sábado e domingo', time: 'Fechado' },
    ],
    openingHours: [{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ranges: [['08:00', '12:00'], ['13:00', '18:00']] }],
    phoneLabel: 'Televendas e WhatsApp',
    phone: company.mainPhone,
    email: company.email,
    maps: 'https://maps.app.goo.gl/86jceLZKAsNRYQndA',
  },
  {
    id: 'rioverde',
    city: 'Rio Verde',
    label: 'Filial',
    street: 'Rua 09, Qd. 25, Lt. 11',
    district: 'Setor Universitário',
    postalCode: '',
    region: 'GO',
    note: '',
    hours: [
      { days: 'Segunda a sexta', time: '8h–18h' },
      { days: 'Sábado', time: '8h–12h' },
      { days: 'Domingo', time: 'Fechado' },
    ],
    openingHours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ranges: [['08:00', '18:00']] },
      { days: ['Saturday'], ranges: [['08:00', '12:00']] },
    ],
    phoneLabel: 'WhatsApp',
    phone: '5564981266383',
    email: 'greice.evolucao@gmail.com',
    maps: 'https://maps.app.goo.gl/oH52h8qYkJAmjjYx7',
  },
] as const;

export const socials = [
  { name: 'Instagram', handle: '@evolumix.distribuicao', href: 'https://www.instagram.com/evolumix.distribuicao/', icon: 'instagram' },
  { name: 'Instagram Rio Verde', handle: '@greice_evolumix', href: 'https://www.instagram.com/greice_evolumix/', icon: 'instagram' },
  { name: 'Facebook', handle: 'evolucaopapeis', href: 'https://www.facebook.com/evolucaopapeis', icon: 'facebook' },
  { name: 'TikTok', handle: '@anatinoco036', href: 'https://www.tiktok.com/@anatinoco036', icon: 'tiktok' },
  { name: 'Mercado Livre', handle: 'Loja oficial', href: 'https://www.mercadolivre.com.br/pagina/evolumixdistribuicao', icon: 'bag' },
] as const;

export const brands = ['Elite Profissional', 'Report', 'Leinertex', 'Softys'];

export const segments = ['Restaurantes', 'Bares', 'Hotéis', 'Clínicas', 'Condomínios', 'Escritórios e empresas'];

export type Category = { title: string; text: string; tag?: string; photo: string };

export const categories: Record<'empresas' | 'casa', Category[]> = {
  empresas: [
    {
      title: 'Higiene e limpeza profissional',
      text: 'Produtos de alto rendimento para a limpeza diária e pesada de cozinhas, banheiros e áreas comuns.',
      photo: 'Galões e produtos de limpeza profissional',
    },
    {
      title: 'Papéis e descartáveis',
      text: 'Papel toalha, higiênico, guardanapos e descartáveis para a rotina do seu negócio.',
      photo: 'Fardos de papel toalha e higiênico',
    },
    {
      title: 'Dispensers, lixeiras e acessórios',
      text: 'Dispensers, lixeiras, coletores e suportes para banheiros e cozinhas.',
      photo: 'Dispenser instalado em banheiro',
    },
    {
      title: 'Embalagens',
      text: 'Embalagens para armazenar, embalar e entregar no dia a dia da operação.',
      photo: 'Embalagens empilhadas',
    },
    {
      title: 'Papelaria e escritório',
      text: 'Papel A4, materiais de escritório e suprimentos para manter a empresa funcionando.',
      photo: 'Resmas de papel A4 e material de escritório',
    },
    {
      title: 'Ferragista e construção',
      text: 'Ferramentas, ferragens, tintas e materiais para manutenção e reforma, com atendimento no balcão.',
      tag: 'Goiânia',
      photo: 'Parede de ferramentas da loja ferragista',
    },
  ],
  casa: [
    {
      title: 'Limpeza para casa',
      text: 'Os mesmos produtos de alto rendimento usados por empresas, para a limpeza da sua casa.',
      photo: 'Produtos de limpeza em uso doméstico',
    },
    {
      title: 'Papelaria',
      text: 'Material escolar e de escritório para o dia a dia.',
      photo: 'Material de papelaria',
    },
    {
      title: 'Ferragista e reforma',
      text: 'Ferramentas, tintas e materiais para pequenos reparos e reformas.',
      tag: 'Goiânia',
      photo: 'Tintas e ferramentas na loja',
    },
  ],
};
