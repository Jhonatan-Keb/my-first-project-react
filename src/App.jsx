// src/App.jsx

import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"       // ← NUEVO
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Alimentos from "./pages/Alimentos"
import Otros from "./pages/Otros"
import Detalle from "./pages/Detalle"
import Contacto from "./pages/Contacto"

function App() {
  const [movies, setMovies]       = useState([])
  const [alimentos, setAlimentos] = useState([])
  const [promos, setPromos]       = useState([])

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

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      {/* El main crece para empujar el footer al fondo */}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/"          element={<Home movies={movies} promos={promos} />} />
          <Route path="/cartelera" element={<Cartelera movies={movies} />} />
          <Route path="/alimentos" element={<Alimentos alimentos={alimentos} />} />
          <Route path="/otros"     element={<Otros promos={promos} />} />
          <Route
            path="/detalle/:tipo/:id"
            element={<Detalle movies={movies} alimentos={alimentos} promos={promos} />}
          />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>

      <Footer />   {/* ← NUEVO — fuera de Routes para que aparezca en todas las páginas */}
    </div>
  )
}

export default App