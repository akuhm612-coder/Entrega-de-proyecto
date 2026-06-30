import { Link } from 'react-router-dom'
import '../styles/Card.css'

type ProductCardProps = {
  title: string
  price: string
  image: string
  description: string
  imageClass?: string
  to?: string
}

export default function ProductCard({ title, price, image, description, imageClass, to }: ProductCardProps) {
  if (to) {
    return (
      <Link to={to} className="product-card-link">
        <article className="product-card card text-white bg-dark border-0">
          <img src={image} alt={title} className={`product-card-image card-img-top ${imageClass || ''}`.trim()} />
          <div className="product-card-body card-body">
            <h3 className="card-title">{title}</h3>
            <p className="product-card-price">{price}</p>
            <p className="card-text">{description}</p>
            <button className="btn btn-warning" type="button">
              Ver más
            </button>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <div className="product-card-link">
      <article className="product-card card text-white bg-dark border-0">
        <img src={image} alt={title} className={`product-card-image card-img-top ${imageClass || ''}`.trim()} />
        <div className="product-card-body card-body">
          <h3 className="card-title">{title}</h3>
          <p className="product-card-price">{price}</p>
          <p className="card-text">{description}</p>
          <button className="btn btn-warning" type="button">
            Ver más
          </button>
        </div>
      </article>
    </div>
  )
}
