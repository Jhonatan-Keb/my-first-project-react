// src/pages/Home.jsx

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import MovieCarousel from "../components/MovieCarousel"   // ← NUEVO
import PromoCard from "../components/PromoCard"

function Home({ movies, promos }) {
  const [peliculasDestacadas, setPeliculasDestacadas] = useState([])
  const [promosDestacadas, setPromosDestacadas] = useState([])

  useEffect(() => {
    if (movies.length > 0) {
      const random = [...movies].sort(() => 0.5 - Math.random()).slice(0, 3)
      setPeliculasDestacadas(random)
    }
  }, [movies])

  useEffect(() => {
    if (promos.length > 0) {
      const random = [...promos].sort(() => 0.5 - Math.random()).slice(0, 3)
      setPromosDestacadas(random)
    }
  }, [promos])

  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="hero-section">
        <h1 className="hero-title">Bienvenido a <em>DendroCinema</em></h1>
        <div className="hero-divider"><span>◆</span></div>
        <p className="hero-subtitle">La mejor experiencia cinematográfica en un solo lugar</p>
        <div className="hero-cta">
          <Link to="/cartelera" className="btn btn-solid">
            <span>Ver Cartelera</span>
          </Link>
          <Link to="/otros" className="btn">
            <span>Ver Promos</span>
          </Link>
        </div>
      </section>

      {/* ── Carrusel Hero estilo Cinemex ── */}
      {movies.length > 0
        ? <MovieCarousel movies={movies} />
        : <div className="carousel-empty">Cargando estrenos...</div>
      }

      {/* ── Películas Destacadas ── */}
      <h2 className="page-title">Destacados</h2>
      <div className="grid-container">
        {peliculasDestacadas.map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            title={pelicula.title}
            genre={pelicula.genre}
            image={pelicula.image}
            linkTo={`/detalle/pelicula/${pelicula.id}`}
          />
        ))}
      </div>

      {/* ── Promos Destacadas ── */}
      <h2 className="page-title">Promociones Imperdibles</h2>
      <div className="grid-container">
        {promosDestacadas.map((promo) => (
          <PromoCard
            key={promo.id}
            title={promo.title}
            subtitle={promo.subtitle}
            synopsis={promo.synopsis}
            image={promo.image}
            linkTo={`/detalle/promo/${promo.id}`}
          />
        ))}
      </div>

      {/* ── CTA Final ── */}
      <div style={{ textAlign: "center", margin: "40px 0 60px" }}>
        <Link to="/cartelera" className="btn btn-solid"
          style={{ width: "auto", padding: "16px 40px", fontSize: "1rem", display: "inline-block" }}>
          <span>VER CARTELERA COMPLETA →</span>
        </Link>
      </div>
    </main>
  )
}

export default Home