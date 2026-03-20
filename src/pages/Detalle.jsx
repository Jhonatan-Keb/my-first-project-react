import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

function Detalle({ movies, alimentos, promos }) {
  const { tipo, id } = useParams()
  const navigate = useNavigate()

  // ── 3 estados funcionales (useState) para formulario controlado ──
  const [nombre, setNombre] = useState("")
  const [cantidad, setCantidad] = useState(1)
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState("")

  // ── Buscar el item según tipo e id ──
  let item = null
  const idNum = parseInt(id)

  if (tipo === "pelicula") {
    item = movies.find((m) => m.id === idNum)
  } else if (tipo === "alimento") {
    // Alimentos están agrupados por categoría, aplanar para buscar
    for (const categoria of alimentos) {
      const found = categoria.items.find((i) => i.id === idNum)
      if (found) {
        item = found
        break
      }
    }
  } else if (tipo === "promo") {
    item = promos.find((p) => p.id === idNum)
  }

  // Si no hay ítem seleccionado
  if (!item) {
    return (
      <div style={{ textAlign: "center", marginTop: "80px", padding: "40px" }}>
        <h2 style={{ color: "var(--text-main)" }}>No hay elemento seleccionado</h2>
        <button className="btn" onClick={() => navigate("/")} style={{ width: "auto", marginTop: "20px" }}>
          Volver al Inicio
        </button>
      </div>
    )
  }

  // ── Detectar tipo de ítem ──
  const esPelicula = tipo === "pelicula"
  const esAlimento = tipo === "alimento"
  // Si no es película ni alimento, es promo

  // Título principal del ítem
  const tituloItem = item.title || item.name
  // Subtítulo / info secundaria
  const subtituloItem = item.genre || item.subtitle || item.price || ""

  // ── Ruta de retorno según tipo ──
  const rutaVolver = esPelicula ? "/cartelera" : esAlimento ? "/alimentos" : "/otros"

  // ── Función de envío con e.preventDefault() ──
  const manejarSubmit = (e) => {
    e.preventDefault()

    if (esPelicula) {
      setMensajeConfirmacion(
        `🎬 ¡Reserva confirmada! Gracias ${nombre}, has reservado ${cantidad} boleto(s) para "${tituloItem}". ¡Disfruta la función!`
      )
    } else if (esAlimento) {
      setMensajeConfirmacion(
        `🍿 ¡Pedido confirmado! Gracias ${nombre}, has pedido ${cantidad} unidad(es) de "${tituloItem}". ¡Buen provecho!`
      )
    } else {
      setMensajeConfirmacion(
        `🎉 ¡Promo activada! Gracias ${nombre}, has reservado ${cantidad} promo(s) "${tituloItem}". ¡A disfrutar!`
      )
    }

    // Limpiar formulario
    setNombre("")
    setCantidad(1)
  }

  return (
    <div className="detalle-container">
      {/* ── Imagen ── */}
      <div className="detalle-img-container">
        <img src={item.image} alt={tituloItem} className="detalle-img" />
      </div>

      {/* ── Info + Formulario ── */}
      <div className="detalle-info">
        <h1 className="detalle-title">{tituloItem}</h1>
        <p className="detalle-genre">{subtituloItem}</p>

        {/* Sinopsis (si existe) */}
        {item.synopsis && (
          <>
            <h3 style={{ marginBottom: "10px", marginTop: "20px", color: "var(--text-main)" }}>
              {esPelicula ? "Sinopsis" : "Descripción"}
            </h3>
            <p className="detalle-synopsis">{item.synopsis}</p>
          </>
        )}

        {/* Precio (si es alimento) */}
        {esAlimento && (
          <p style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--primary-color)", margin: "15px 0" }}>
            {item.price}
          </p>
        )}

        {/* ── Formulario Controlado ── */}
        <div style={{ marginTop: "30px", padding: "25px", backgroundColor: "var(--surface-color)", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
          <h3 style={{ marginBottom: "15px", color: "var(--text-main)" }}>
            {esPelicula ? "🎟️ Comprar Boletos" : esAlimento ? "🛒 Hacer Pedido" : "🎁 Reservar Promo"}
          </h3>

          <form onSubmit={manejarSubmit}>
            {/* Input: nombre (controlado con onChange) */}
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: "700" }}>
                Tu Nombre:
              </label>
              <input
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej. Juan Pérez"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-color)",
                  backgroundColor: "var(--bg-color)",
                  color: "var(--text-main)",
                  fontFamily: "inherit",
                  fontSize: "1rem"
                }}
              />
            </div>

            {/* Input: cantidad (controlado con onChange) */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: "700" }}>
                {esPelicula ? "Boletos:" : "Cantidad:"}
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <button
                  type="button"
                  onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                  style={{
                    padding: "8px 18px",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "var(--border-color)",
                    color: "var(--text-main)",
                    fontWeight: "bold"
                  }}
                >
                  −
                </button>
                <span style={{ fontSize: "1.3rem", fontWeight: "bold", color: "var(--text-main)", minWidth: "30px", textAlign: "center" }}>
                  {cantidad}
                </span>
                <button
                  type="button"
                  onClick={() => setCantidad(cantidad + 1)}
                  style={{
                    padding: "8px 18px",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "var(--primary-color)",
                    color: "#fff",
                    fontWeight: "bold"
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Botones submit + volver */}
            <div style={{ display: "flex", gap: "15px" }}>
              <button type="submit" className="btn">
                {esPelicula ? "Confirmar Compra" : esAlimento ? "Confirmar Pedido" : "Reservar Promo"}
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => navigate(rutaVolver)}
                style={{ backgroundColor: "var(--text-muted)" }}
              >
                Volver
              </button>
            </div>
          </form>

          {/* ── Mensaje de confirmación dinámico ── */}
          {mensajeConfirmacion && (
            <div style={{
              marginTop: "20px",
              padding: "18px",
              backgroundColor: "var(--accent-glow)",
              border: "2px solid var(--primary-color)",
              borderRadius: "10px",
              color: "var(--text-main)",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "1rem",
              animation: "dendroPulse 2s infinite"
            }}>
              {mensajeConfirmacion}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Detalle