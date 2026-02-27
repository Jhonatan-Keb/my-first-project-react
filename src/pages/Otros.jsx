import PromoCard from "../components/PromoCard"

function Otros({ promos, onVerDetalle }) {
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
            onVerDetalle={() => onVerDetalle(promo)}
          />
        ))}
      </div>
    </main>
  )
}

export default Otros