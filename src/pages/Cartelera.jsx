import MovieCard from "../components/MovieCard"

function Cartelera({ movies }) {
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
            linkTo={`/detalle/pelicula/${pelicula.id}`}
          />
        ))}
      </div>
    </main>
  )
}

export default Cartelera