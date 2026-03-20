import PromoCard from "../components/PromoCard"

function Otros({ promos }) {
  return (
    <main>
      <h2 className="page-title">🎉 Promociones y Combos</h2>
      <div className="grid-container">
        {promos.map((promo) => (
          <PromoCard
            key={promo.id}
            title={promo.title}
            subtitle={promo.subtitle}
            synopsis={promo.synopsis}
            image={promo.image}
            linkTo={`/detalle/promo/${promo.id}`}
          />
        ))}
      </div>
    </main>
  )
}

export default Otros