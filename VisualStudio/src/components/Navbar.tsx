import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

type NavLinkItem = {
  to: string
  label: string
}

type AppNavbarProps = {
  brand?: string
  links: NavLinkItem[]
}

export default function AppNavbar({ brand = "Ropa's", links }: AppNavbarProps) {
  return (
    <nav className="app-navbar navbar navbar-expand-lg navbar-dark bg-transparent py-3">
      <div className="container">
        <span className="navbar-brand mb-0 h1">{brand}</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-3">
            {links.map((link) => (
              <li className="nav-item" key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
