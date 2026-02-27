import { useState } from "react"

function Header({ cambiarVista, vistaActual }) {
  const [tema, setTema] = useState("light")

  const toggleTema = () => {
    const nuevoTema = tema === "light" ? "dark" : "light"
    setTema(nuevoTema)
    document.documentElement.setAttribute("data-theme", nuevoTema === "dark" ? "dark" : "")
  }

  return (
    <header className="header">
      <span className="logo" style={{ cursor: "pointer" }} onClick={() => cambiarVista("home")}>
        🌿 CinePrueba
      </span>

      <nav className="nav-links">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); cambiarVista("home") }}
          style={{ color: vistaActual === "home" ? "var(--primary-color)" : undefined }}
        >
          Inicio
        </a>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); cambiarVista("cartelera") }}
          style={{ color: vistaActual === "cartelera" ? "var(--primary-color)" : undefined }}
        >
          Cartelera
        </a>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); cambiarVista("alimentos") }}
          style={{ color: vistaActual === "alimentos" ? "var(--primary-color)" : undefined }}
        >
          Alimentos
        </a>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); cambiarVista("otros") }}
          style={{ color: vistaActual === "otros" ? "var(--primary-color)" : undefined }}
        >
          Promos
        </a>
      </nav>

      <button className="theme-toggle-btn" onClick={toggleTema}>
        {tema === "light" ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
      </button>
    </header>
  )
}

export default Header