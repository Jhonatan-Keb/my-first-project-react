// App — componente raíz, carga datos y estructura principal

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AppRoutes from "./routes/AppRoutes"

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
    <div className="app-layout">
      <Header />
      <main className="app-main">
        <AppRoutes movies={movies} alimentos={alimentos} promos={promos} />
      </main>
      <Footer />
    </div>
  )
}

export default App
