// AppRoutes — definición de rutas

import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Cartelera from "../pages/Cartelera"
import Alimentos from "../pages/Alimentos"
import Otros from "../pages/Otros"
import Detalle from "../pages/Detalle"
import Contacto from "../pages/Contacto"

function AppRoutes({ movies, alimentos, promos }) {
  return (
    <Routes>
      <Route path="/"          element={<Home movies={movies} promos={promos} />} />
      <Route path="/cartelera" element={<Cartelera movies={movies} />} />
      <Route path="/alimentos" element={<Alimentos alimentos={alimentos} />} />
      <Route path="/otros"     element={<Otros promos={promos} />} />
      <Route
        path="/detalle/:tipo/:id"
        element={<Detalle movies={movies} alimentos={alimentos} promos={promos} />}
      />
      <Route path="/contacto"  element={<Contacto />} />
    </Routes>
  )
}

export default AppRoutes
