import Button from "./Button"

function FoodCard({ name, price, image, onVerDetalle }) {
    return (
        <div className="card">
            <img src={image} alt={name} className="horizontal-img" />
            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <p className="card-price">{price}</p>
                <Button text="Ver Detalle" onClick={onVerDetalle} />
            </div>
        </div>
    )
}

export default FoodCard
