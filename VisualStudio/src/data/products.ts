export type ProductItem = {
  title: string
  price: string
  image: string
  description: string
  slug: string
  details: string
}

export const catalogProducts: ProductItem[] = [
  {
    title: 'Pantalón Sastrero "Tailored Relaxed"',
    price: '$25.00',
    image: '/imagenes/PantalonKakhi.jpg',
    description: 'Una prenda sofisticada con corte wide leg y gran comodidad.',
    slug: 'pantalon-sastrero-tailored-relaxed',
    details:
      'Este pantalón sastrero de corte Wide Leg combina la elegancia de la sastrería tradicional con una caída moderna y relajada. Diseñado con doble pinza frontal para añadir estructura y volumen, es la pieza clave para elevar cualquier look de oficina o evento social esta temporada.',
  },
  {
    title: 'Vestido "Nautical Chic"',
    price: '$14.99 US',
    image: '/imagenes/Vestido1.jpg',
    description: 'Inspirado en los años 50, elegante y con un toque vintage.',
    slug: 'vestido-nautical-chic',
    details:
      'Inspirado en la moda de los años 50, este vestido de corte A-line es el equilibrio perfecto entre lo clásico y lo moderno. Su diseño destaca por el emblemático cuello marinero con ribetes blancos en contraste, que se anuda delicadamente al frente creando un punto focal sofisticado y encantador.',
  },
  {
    title: 'Jeans Maxi Wide Leg',
    price: '$50.99 US',
    image: '/imagenes/PantalonJean1.png',
    description: 'El jean perfecto para un look moderno y de impacto.',
    slug: 'jeans-maxi-wide-leg',
    details:
      'Este jean redefine el volumen con una silueta de bota extra ancha que se impone en el street style global. Confeccionado en denim rígido de alta calidad, ofrece una caída imponente que llega hasta el piso, fusionando la comodidad de un pantalón "pijamero" con la sofisticación de un corte de pasarela.',
  },
  {
    title: 'Blusa Floral',
    price: '$30.00 US',
    image: '/imagenes/Blusa1.avif',
    description: 'Una pieza romántica con mangas globo y estilo femenino.',
    slug: 'blusa-floral',
    details:
      'Eleva tu estilo diario con esta sofisticada blusa de inspiración romántica. Confeccionada en un tejido ligero y vaporoso, destaca por su vibrante estampado floral en tonos rojos y rosados sobre un fondo blanco marfil. El diseño presenta un favorecedor cuello alto con detalles fruncidos y mangas globo de volumen dramático.',
  },
]
