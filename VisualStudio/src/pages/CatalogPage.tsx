import '../styles/Catalog.css'
import ProductCard from '../components/Card'
import { catalogProducts } from '../data/products'

export default function CatalogPage() {
  return (
    <section className="catalog-shell">
      <h1>Catálogo</h1>
      <p className="catalog-subtitle">Explora las prendas destacadas de la temporada.</p>
      <div className="catalog-grid">
        {catalogProducts.map((product) => (
          <ProductCard
            key={product.slug}
            {...product}
            to={`/catalogo/${product.slug}`}
          />
        ))}
      </div>
    </section>
  )
}
