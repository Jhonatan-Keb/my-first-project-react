import FoodCard from "../components/FoodCard"

function Alimentos({ alimentos, onVerDetalle }) {
  return (
    <main>
      <h2 className="page-title">🍿 Alimentos y Dulcería</h2>

      {alimentos.map((categoria, index) => (
        <div key={index}>
          <h3 className="category-title">{categoria.categoria}</h3>
          <div className="grid-container">
            {categoria.items.map((item) => (
              <FoodCard
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                onVerDetalle={() => onVerDetalle(item)}
              />
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}

export default Alimentos