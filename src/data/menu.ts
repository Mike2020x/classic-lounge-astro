export type MenuCategory =
  | 'Desayunos'
  | 'Waffles'
  | 'Hojaldrados'
  | 'Panadería'
  | 'Sándwiches'
  | 'Bebidas';

export type MenuItem = {
  name: string;
  description: string;
  category: MenuCategory;
  price?: number;
  image?: string;
  tag?: string;
  featured?: boolean;
};

export const categoryMeta: Record<MenuCategory, { icon: string; blurb: string }> = {
  Desayunos: {
    icon: '🍳',
    blurb: 'Omelette, waffle y fruta: para empezar el día con todo.'
  },
  Waffles: {
    icon: '🧇',
    blurb: 'De pandebono o de queso, sencillos, dobles o con fruta.'
  },
  Hojaldrados: {
    icon: '🥐',
    blurb: 'Croissants, pasteles y antojos recién horneados.'
  },
  'Panadería': {
    icon: '🍞',
    blurb: 'Pan de la casa y empanada de cambray.'
  },
  'Sándwiches': {
    icon: '🥪',
    blurb: 'Contundentes, para el hambre de verdad.'
  },
  Bebidas: {
    icon: '🥛',
    blurb: 'El acompañamiento perfecto.'
  }
};

export const menuOrder: MenuCategory[] = [
  'Desayunos',
  'Waffles',
  'Hojaldrados',
  'Panadería',
  'Sándwiches',
  'Bebidas'
];

// Precios tomados de la lista manuscrita del negocio (octubre 2026).
// Pb = pandebono, Q = queso.
const img = (file: string) => `images/carta/${file}`;

export const menu: MenuItem[] = [
  // ——— Desayunos (combos) ———
  {
    name: 'Combo Desayuno #1',
    description: 'Omelette, mini waffle, fruta picada y bebida. El clásico de la casa.',
    category: 'Desayunos',
    price: 11000,
    image: img('desayuno-omelette.jpg'),
    tag: 'Para empezar',
    featured: true
  },
  {
    name: 'Combo Desayuno #2',
    description: 'Versión más completa: omelette, waffle, fruta y bebida.',
    category: 'Desayunos',
    price: 13000,
    image: img('desayuno-barra.jpg'),
    tag: 'El equilibrado'
  },
  {
    name: 'Combo Desayuno #3 · Especial',
    description: 'Nuestro desayuno más completo. Omelette generoso, waffle doble, fruta y bebida grande.',
    category: 'Desayunos',
    price: 20000,
    tag: 'El más completo',
    featured: true
  },

  // ——— Waffles ———
  {
    name: 'Waffle Pandebono con Fruta',
    description: 'Fresas, kiwi, arándanos y crema chantilly sobre waffle de pandebono.',
    category: 'Waffles',
    price: 20000,
    image: img('waffle-frutas-fiesta.jpg'),
    tag: 'Más pedido',
    featured: true
  },
  {
    name: 'Waffle Queso con Fruta',
    description: 'Fruta de temporada y crema sobre nuestro waffle de queso.',
    category: 'Waffles',
    price: 18000,
    image: img('waffle-frutas-crema.jpg'),
    featured: true
  },
  {
    name: 'Waffle Pandebono Sencillo',
    description: 'Crujiente por fuera, suave por dentro. Con salsa de mora y chocolate.',
    category: 'Waffles',
    price: 7000,
    image: img('waffle-pandebono-mora.jpg'),
    tag: 'El de la casa',
    featured: true
  },
  {
    name: 'Waffle con Chocolate',
    description: 'Waffle dorado con salsa de chocolate. Simple y perfecto.',
    category: 'Waffles',
    price: 7000,
    image: img('waffle-chocolate.jpg')
  },
  {
    name: 'Waffle Queso Sencillo',
    description: 'La versión en queso de nuestro waffle clásico.',
    category: 'Waffles',
    price: 6000
  },
  {
    name: 'Waffle Pandebono Doble',
    description: 'Doble porción para compartir (o no).',
    category: 'Waffles',
    price: 13000
  },
  {
    name: 'Waffle Queso Doble',
    description: 'Doble porción de waffle de queso.',
    category: 'Waffles',
    price: 12000
  },

  // ——— Hojaldrados ———
  {
    name: 'Chicharrones',
    description: 'Hojaldre crocante, ideal con café.',
    category: 'Hojaldrados',
    price: 5000
  },
  {
    name: 'Croissant Jamón y Queso',
    description: 'El favorito para media mañana.',
    category: 'Hojaldrados',
    price: 5000
  },
  {
    name: 'Croissant Chocolate',
    description: 'Relleno de chocolate, para los dulceros.',
    category: 'Hojaldrados',
    price: 5500
  },
  {
    name: 'Dedos de Queso',
    description: 'Queso derretido en hojaldre dorado.',
    category: 'Hojaldrados',
    price: 4000
  },
  {
    name: 'Pastel de Carne',
    description: 'Relleno generoso, masa hojaldrada.',
    category: 'Hojaldrados',
    price: 7000
  },
  {
    name: 'Pastel de Pollo',
    description: 'El clásico que nunca falla.',
    category: 'Hojaldrados',
    price: 7000
  },
  {
    name: 'Pastel Hawaiano',
    description: 'Jamón, queso y un toque dulce.',
    category: 'Hojaldrados',
    price: 5500
  },

  // ——— Panadería ———
  {
    name: 'Pan de Yuca × 70 g',
    description: 'Recién horneado, para llevar o acompañar.',
    category: 'Panadería',
    price: 4000
  },
  {
    name: 'Pandebono × 70 g',
    description: 'El sabor del Valle en cada mordisco.',
    category: 'Panadería',
    price: 4000
  },
  {
    name: 'Empanada de Cambray',
    description: 'Dulce tradicional de guayaba y queso.',
    category: 'Panadería',
    price: 4000
  },

  // ——— Sándwiches ———
  {
    name: 'Sándwich de la Casa',
    description: 'Jamón, queso y vegetales en pan suave.',
    category: 'Sándwiches',
    price: 12000
  },
  {
    name: 'Sándwich Especial',
    description: 'Versión doble, para el hambre grande.',
    category: 'Sándwiches',
    price: 13000
  },

  // ——— Bebidas ———
  {
    name: 'Avena',
    description: 'Cremosa y fría, hecha en casa.',
    category: 'Bebidas',
    price: 6000
  },
  {
    name: 'Bebida Sencilla',
    description: 'Jugo o bebida del día para acompañar.',
    category: 'Bebidas',
    price: 5000
  }
];
