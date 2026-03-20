import { Link } from "react-router-dom"

function FoodCard({ name, price, image, linkTo }) {
    return (
        <div className="card">
            <img src={image} alt={name} className="horizontal-img" />
            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <p className="card-price">{price}</p>
                <Link to={linkTo} className="btn">Ver Detalle</Link>
            </div>
        </div>
    )
}

export default FoodCard
