import '../styles/Catalog.css'
import ProductCard from '../components/Card'
import { catalogProducts } from '../data/products'

const catalogSections = [
  {
    title: 'Nuevos',
    description: 'Lo más reciente para empezar tu visita.',
    products: catalogProducts.slice(0, 2),
  },
  {
    title: 'De tela',
    description: 'Prendas con volumen, caída y estilo artesanal.',
    products: catalogProducts.slice(2),
  },
]

export default function CatalogPage() {
  return (
    <section className="catalog-shell">
      <div className="catalog-hero">
        <h1>Catálogo</h1>
        <p className="catalog-subtitle">Explora las prendas destacadas de la temporada con secciones inspiradas en un catálogo visual.</p>
      </div>

      {catalogSections.map((section) => (
        <section key={section.title} className="catalog-section">
          <div className="catalog-section-header">
            <div>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
            <span className="catalog-section-badge">Colección</span>
          </div>

          <div className="catalog-carousel">
            {section.products.map((product) => (
              <ProductCard
                key={product.slug}
                {...product}
                to={`/catalogo/${product.slug}`}
              />
            ))}
          </div>
        </section>
      ))}
    </section>
  )
}
