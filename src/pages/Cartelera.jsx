import MovieCard from "../components/MovieCard"

function Cartelera({ movies, onVerDetalle }) {
  return (
    <main>
      <h2 className="page-title">🎬 Cartelera Completa</h2>
      <div className="grid-container">
        {movies.map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            title={pelicula.title}
            genre={pelicula.genre}
            image={pelicula.image}
            onVerDetalle={() => onVerDetalle(pelicula)}
          />
        ))}
      </div>
    </main>
  )
}

export default Cartelera