import Button from "./Button"

function PromoCard({ title, subtitle, synopsis, image, onVerDetalle }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="poster-img" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
        <p className="card-synopsis">{synopsis}</p>
        <Button text="Ver Promoción" onClick={onVerDetalle} />
      </div>
    </div>
  )
}

export default PromoCard