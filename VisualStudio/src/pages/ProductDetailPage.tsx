import { useParams, Link } from 'react-router-dom'
import { catalogProducts } from '../data/products'
import '../styles/Catalog.css'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = catalogProducts.find((item) => item.slug === slug)

  if (!product) {
    return (
      <section className="catalog-shell">
        <h1>Producto no encontrado</h1>
        <p>El producto que buscas no existe o ya no está disponible.</p>
        <Link to="/catalogo" className="btn btn-warning">
          Volver al catálogo
        </Link>
      </section>
    )
  }

  return (
    <section className="catalog-shell">
      <h1>{product.title}</h1>
      <div className="product-detail-grid">
        <img src={product.image} alt={product.title} className="product-detail-image" />
        <div className="product-detail-info">
          <p className="product-card-price">{product.price}</p>
          <p>{product.details}</p>
          <Link to="/catalogo" className="btn btn-warning mt-3">
            Volver al catálogo
          </Link>
        </div>
      </div>
    </section>
  )
}
