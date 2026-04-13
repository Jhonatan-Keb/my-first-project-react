// src/components/Footer.jsx

import { Link } from "react-router-dom"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* Línea dorada superior */}
      <div className="footer-top-line" />

      <div className="footer-content">

        {/* Columna 1 — Logo y descripción */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            ▶ Cine<span>mex</span>
          </Link>
          <p className="footer-tagline">
            La mejor experiencia cinematográfica en un solo lugar.
          </p>
        </div>

        {/* Columna 2 — Navegación */}
        <div className="footer-nav">
          <h4 className="footer-nav-title">Explorar</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/cartelera">Cartelera</Link></li>
            <li><Link to="/alimentos">Alimentos</Link></li>
            <li><Link to="/otros">Promociones</Link></li>
          </ul>
        </div>

        {/* Columna 3 — Contacto */}
        <div className="footer-contact">
          <h4 className="footer-nav-title">Contacto</h4>
          <p className="footer-phone">+52 999 100 126255 </p>
          <p className="footer-phone-label">Atención telefónica</p>
        </div>

      </div>

      {/* Franja inferior */}
      <div className="footer-bottom">
        <p>© {year} Cinemex. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer