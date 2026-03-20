import { Link } from "react-router-dom"

function PromoCard({ title, subtitle, synopsis, image, linkTo }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="poster-img" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
        <p className="card-synopsis">{synopsis}</p>
        <Link to={linkTo} className="btn">Ver Promoción</Link>
      </div>
    </div>
  )
}

export default PromoCard