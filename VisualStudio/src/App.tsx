import { Route, Routes } from 'react-router-dom'
import AppNavbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import FormPage from './pages/FormPage'
import NotFoundPage from './pages/NotFoundPage'
import ProductDetailPage from './pages/ProductDetailPage'
import useScrollToTop from './hooks/useScrollToTop'
import './styles/App.css'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/formulario', label: 'Formulario' },
]

function App() {
  useScrollToTop()

  return (
    <>
      <AppNavbar brand="Ropa's" links={navLinks} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route path="/catalogo/:slug" element={<ProductDetailPage />} />
        <Route path="/formulario" element={<FormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer brand="Ropa's" links={navLinks} />
    </>
  )
}

export default App
