import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import PromoCard from "../components/PromoCard"
import Button from "../components/Button"

function Home({ movies, promos, cambiarVista, onVerDetalle }) {
  const [peliculasDestacadas, setPeliculasDestacadas] = useState([])
  const [promosDestacadas, setPromosDestacadas] = useState([])

  // Seleccionar elementos destacados cuando lleguen los datos por props
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
        <h1 className="hero-title">🌿 Bienvenido a CinePrueba</h1>
        <p className="hero-subtitle">La sabiduría del Akasha te invita a descubrir las mejores historias</p>
        <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "20px" }}>
          <button className="btn" style={{ width: "auto", padding: "14px 30px" }} onClick={() => cambiarVista("cartelera")}>
            Ver Cartelera
          </button>
          <button className="btn" style={{ width: "auto", padding: "14px 30px", backgroundColor: "var(--text-muted)" }} onClick={() => cambiarVista("otros")}>
            Ver Promos
          </button>
        </div>
      </section>

      {/* ── Películas Destacadas ── */}
      <h2 className="page-title">🍃 Estrenos Destacados</h2>
      <div className="grid-container">
        {peliculasDestacadas.map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            title={pelicula.title}
            genre={pelicula.genre}
            image={pelicula.image}
            onVerDetalle={() => onVerDetalle(pelicula)}
          />
        ))}
      </div>

      {/* ── Promos Destacadas ── */}
      <h2 className="page-title">✨ Promociones Imperdibles</h2>
      <div className="grid-container">
        {promosDestacadas.map((promo) => (
          <PromoCard
            key={promo.id}
            title={promo.title}
            subtitle={promo.subtitle}
            synopsis={promo.synopsis}
            image={promo.image}
            onVerDetalle={() => onVerDetalle(promo)}
          />
        ))}
      </div>

      {/* ── CTA Final ── */}
      <div style={{ textAlign: "center", margin: "40px 0 60px" }}>
        <button
          className="btn"
          style={{ width: "auto", padding: "16px 40px", fontSize: "1rem" }}
          onClick={() => cambiarVista("cartelera")}
        >
          VER CARTELERA COMPLETA →
        </button>
      </div>
    </main>
  )
}

export default Home