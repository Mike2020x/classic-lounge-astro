export type MenuItem = {
  name: string;
  description: string;
  category: 'Café' | 'Desayunos' | 'Waffles' | 'Postres' | 'Bebidas';
  price?: number;
  featured?: boolean;
  image?: string;
};

// Aquí puedes agregar precios reales cuando la carta esté definida.
export const menu: MenuItem[] = [
  {
    name: 'Café de la casa',
    description: 'Café preparado para disfrutarlo con calma, solo o acompañado.',
    category: 'Café',
    featured: true
  },
  {
    name: 'Cappuccino Classic',
    description: 'Espresso, leche vaporizada y espuma suave.',
    category: 'Café',
    featured: true
  },
  {
    name: 'Waffle de pandebono',
    description: 'Waffle de inspiración local, ideal para combinar con fruta y crema.',
    category: 'Waffles',
    featured: true
  },
  {
    name: 'Porción de torta de chocolate',
    description: 'Una porción generosa para acompañar tu café.',
    category: 'Postres',
    featured: true
  },
  {
    name: 'Iced Coffee',
    description: 'Café frío y refrescante para cualquier momento del día.',
    category: 'Bebidas'
  },
  {
    name: 'Jugo natural',
    description: 'Una opción fresca para acompañar tu desayuno.',
    category: 'Bebidas'
  }
];
