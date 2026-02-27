import { useState, useEffect } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Alimentos from "./pages/Alimentos"
import Otros from "./pages/Otros"
import Detalle from "./pages/Detalle"

function App() {
  // ── Estado de navegación ──
  const [vistaActual, setVistaActual] = useState("home")
  const [itemSeleccionado, setItemSeleccionado] = useState(null)
  const [refreshKey, setRefreshKey] = useState(0)

  // ── Estados globales para datos (consumo de API local) ──
  const [movies, setMovies] = useState([])
  const [alimentos, setAlimentos] = useState([])
  const [promos, setPromos] = useState([])

  // ── Consumo de datos con fetch + useEffect ──
  useEffect(() => {
    fetch("/data/movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error al cargar movies:", err))

    fetch("/data/alimentos.json")
      .then((res) => res.json())
      .then((data) => setAlimentos(data))
      .catch((err) => console.error("Error al cargar alimentos:", err))

    fetch("/data/promos.json")
      .then((res) => res.json())
      .then((data) => setPromos(data))
      .catch((err) => console.error("Error al cargar promos:", err))
  }, [])

  // ── Funciones de navegación ──
  const cambiarVista = (vista) => {
    setVistaActual(vista)
    setRefreshKey((k) => k + 1)
    window.scrollTo(0, 0)
  }

  const onVerDetalle = (item) => {
    setItemSeleccionado(item)
    setVistaActual("detalle")
    window.scrollTo(0, 0)
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header cambiarVista={cambiarVista} vistaActual={vistaActual} />

      {vistaActual === "home" && (
        <Home
          key={refreshKey}
          movies={movies}
          promos={promos}
          cambiarVista={cambiarVista}
          onVerDetalle={onVerDetalle}
        />
      )}
      {vistaActual === "cartelera" && (
        <Cartelera
          movies={movies}
          onVerDetalle={onVerDetalle}
        />
      )}
      {vistaActual === "alimentos" && (
        <Alimentos
          alimentos={alimentos}
          onVerDetalle={onVerDetalle}
        />
      )}
      {vistaActual === "otros" && (
        <Otros
          promos={promos}
          onVerDetalle={onVerDetalle}
        />
      )}
      {vistaActual === "detalle" && (
        <Detalle
          item={itemSeleccionado}
          cambiarVista={cambiarVista}
        />
      )}
    </div>
  )
}

export default App