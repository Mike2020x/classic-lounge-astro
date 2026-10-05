export const business = {
  name: 'Classic Lounge Café',
  shortName: 'Classic Lounge',
  tagline: 'Café, desayunos y momentos especiales',
  description:
    'Un espacio acogedor en La Pradera para disfrutar café de calidad, desayunos especiales, waffles y postres.',
  address: 'Cra. 17 #21-17, La Pradera',
  city: 'Colombia',
  phone: '+57 300 000 0000',
  whatsapp: '573000000000',
  instagram: 'https://instagram.com/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Cra.+17+%2321-17+La+Pradera',
  hours: [
    { days: 'Lunes a sábado', hours: '7:00 a. m. – 9:00 p. m.' },
    { days: 'Domingo', hours: '8:00 a. m. – 6:00 p. m.' }
  ]
} as const;
