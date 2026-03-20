import { Link } from "react-router-dom"

function MovieCard({ title, genre, image, linkTo }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="poster-img" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{genre}</p>
        <Link to={linkTo} className="btn">Ver Detalle</Link>
      </div>
    </div>
  )
}

export default MovieCard