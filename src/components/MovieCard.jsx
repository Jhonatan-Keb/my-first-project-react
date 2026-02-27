import Button from "./Button"

function MovieCard({ title, genre, image, onVerDetalle }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="poster-img" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{genre}</p>
        <Button text="Ver Detalle" onClick={onVerDetalle} />
      </div>
    </div>
  )
}

export default MovieCard