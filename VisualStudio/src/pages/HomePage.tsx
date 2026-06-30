import Home from '../components/Home'

const hero = {
  title: "Ropa's",
  image: '/imagenes/TiendaRopas.avif',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis repellat quidem quia? Consequatur perferendis praesentium reiciendis qui.',
  icons: ['fa-home', 'fa-shopping-bag', 'fa-phone', 'fa-map'],
}

const featuredSets = [
  {
    title: 'Otoño 2026',
    image: '/imagenes/Destacado1.webp',
    description: 'Ver más',
  },
  {
    title: 'Denim Mania',
    image: '/imagenes/ConjuntoDenim.jpg',
    description: 'Ver más',
  },
]

const products = [
  {
    title: 'Pantalón Sastrero "Tailored Relaxed" (Tono acaramelado)',
    price: '$25.00',
    image: '/imagenes/PantalonKakhi.jpg',
    description: 'Sofisticación técnica y comodidad absoluta en una sola prenda.',
  },
  {
    title: 'Vestido "Nautical Chic"',
    price: '$14.99 US',
    image: '/imagenes/Vestido1.jpg',
    description: 'Inspirado en la moda de los años 50, este vestido destaca por su cuello marinero.',
  },
  {
    title: 'Jeans Maxi Wide Leg "Extra Extra Wide"',
    price: '$50.99 US',
    image: '/imagenes/PantalonJean1.png',
    description: 'Una silueta de bota extra ancha para un look moderno y audaz.',
  },
  {
    title: 'Blusa con Estampado Floral y Mangas Globo',
    price: '$30.00 US',
    image: '/imagenes/Blusa1.avif',
    description: 'Diseño romántico con mangas globo y un estampado vibrante.',
  },
]

const galleryItems = [
  {
    title: 'Estilo clásico',
    image: '/imagenes/Destacado1.webp',
  },
  {
    title: 'Colección denim',
    image: '/imagenes/ConjuntoDenim.jpg',
  },
  {
    title: 'Marca en tendencia',
    image: '/imagenes/Blusa1.avif',
  },
]

export default function HomePage() {
  return (
    <Home
      hero={hero}
      featuredSets={featuredSets}
      products={products}
      galleryItems={galleryItems}
    />
  )
}
