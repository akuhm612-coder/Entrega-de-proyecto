import '../styles/Gallery.css'

type GalleryItem = {
  title: string
  image: string
}

type GalleryProps = {
  items: GalleryItem[]
}

export default function Gallery({ items }: GalleryProps) {
  return (
    <section className="home-gallery">
      <h2>Galería de estilo</h2>
      <div className="gallery-grid">
        {items.map((item) => (
          <div className="gallery-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
