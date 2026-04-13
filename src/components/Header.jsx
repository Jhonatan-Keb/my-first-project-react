// src/components/Header.jsx

import { useState } from "react"
import { NavLink, Link } from "react-router-dom"

function Header() {
  // Bug fix #1: el CSS usa dark como default (:root), entonces
  // el estado inicial debe ser "dark" para que coincidan
  const [tema, setTema] = useState("dark")

  const toggleTema = () => {
    const nuevoTema = tema === "dark" ? "light" : "dark"
    setTema(nuevoTema)

    // Bug fix #2: el CSS tiene [data-theme='light'] para el tema claro
    // y :root (sin atributo) para el oscuro
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
        {tema === "dark" ? "☀ Claro" : "☾ Oscuro"}
      </button>
    </header>
  )
}

export default Header