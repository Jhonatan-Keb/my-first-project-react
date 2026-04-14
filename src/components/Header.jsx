// Header — barra de navegación principal

import { useState } from "react"
import { NavLink, Link } from "react-router-dom"

function Header() {
  // Estado: tema actual (dark/light)
  const [tema, setTema] = useState("dark")

  const toggleTema = () => {
    const nuevoTema = tema === "dark" ? "light" : "dark"
    setTema(nuevoTema)

    // Cambiar atributo data-theme en el HTML
    if (nuevoTema === "light") {
      document.documentElement.setAttribute("data-theme", "light")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }
  }

  return (
    <header className="header">
      <Link to="/" className="logo">
        Cine<span>mex</span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/cartelera">Cartelera</NavLink>
        <NavLink to="/alimentos">Alimentos</NavLink>
        <NavLink to="/otros">Promos</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>

      <button className="theme-toggle-btn" onClick={toggleTema}>
        {tema === "dark" ? "☾ Oscuro" : "☀ Claro"}
      </button>
    </header>
  )
}

export default Header