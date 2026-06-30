import { useRef } from 'react'
import Gallery from './Gallery'
import '../styles/Home.css'

type Hero = {
  title: string
  image: string
  description: string
  icons: string[]
}

type FeaturedSet = {
  title: string
  image: string
  description: string
}

type Product = {
  title: string
  price: string
  image: string
  description: string
  imageClass?: string
}

type GalleryItem = {
  title: string
  image: string
}

type HomeProps = {
  hero: Hero
  featuredSets: FeaturedSet[]
  products: Product[]
  galleryItems: GalleryItem[]
}

export default function Home({ hero, featuredSets, products, galleryItems }: HomeProps) {
  const carruselRef = useRef<HTMLDivElement | null>(null)

  const moverCarrusel = (direccion: 'izquierda' | 'derecha') => {
    if (carruselRef.current) {
      carruselRef.current.scrollBy({
        left: direccion === 'izquierda' ? -320 : 320,
        behavior: 'smooth',
      })
    }
  }

  return (
    <main className="home-shell">
      <section className="home-hero" style={{ backgroundImage: `url('${hero.image}')` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>{hero.title}</h1>
          <div className="hero-divider" />
          <div className="hero-icons">
            {hero.icons.map((icon) => (
              <i key={icon} className={`fa ${icon}`} aria-hidden="true" />
            ))}
          </div>
        </div>
      </section>

      <section className="featured-sets">
        {featuredSets.map((set) => (
          <article className="featured-card" key={set.title}>
            <img src={set.image} alt={set.title} />
            <div className="featured-overlay">
              <h3>{set.title}</h3>
              <p>{set.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="home-text-block">
        <p>{hero.description}</p>
      </section>

      <section className="product-carousel">
        <button className="carousel-button" type="button" onClick={() => moverCarrusel('izquierda')}>
          &lt;
        </button>
        <div className="carousel-track" ref={carruselRef}>
          {products.map((product) => (
            <article className="carousel-item" key={product.title}>
              <img src={product.image} alt={product.title} />
              <div className="carousel-item-body">
                <h3>{product.title}</h3>
                <p className="carousel-price">{product.price}</p>
                <details>
                  <summary>Más información</summary>
                  <p>{product.description}</p>
                </details>
                <button type="button">Ver más</button>
              </div>
            </article>
          ))}
        </div>
        <button className="carousel-button" type="button" onClick={() => moverCarrusel('derecha')}>
          &gt;
        </button>
      </section>

      <Gallery items={galleryItems} />
    </main>
  )
}
