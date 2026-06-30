import '../styles/Footer.css'

type NavLinkItem = {
  to: string
  label: string
}

type FooterProps = {
  brand: string
  links: NavLinkItem[]
}

export default function Footer({ brand, links }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} {brand}. Todos los derechos reservados.</p>
      <nav>
        <ul className="footer-menu">
          {links.map((link) => (
            <li key={link.to}>{link.label}</li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
