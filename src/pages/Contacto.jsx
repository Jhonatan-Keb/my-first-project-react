// src/pages/Contacto.jsx

function Contacto() {
  return (
    <main className="contacto-container">
      <div className="contacto-card">

        <p className="contacto-subtitle">Encuéntranos</p>
        <h1 className="contacto-title">Contacto</h1>
        <p className="contacto-desc">
          ¿Tienes dudas, sugerencias o simplemente quieres saludar?<br />
          Estamos aquí para ti, cada día de la semana 🌿
        </p>

        <ul className="contacto-list">
          <li>
            <span className="contacto-icon">📧</span>
            <div>
              <strong>Correo</strong>
              contacto@cinema.mx
            </div>
          </li>
          <li>
            <span className="contacto-icon">📞</span>
            <div>
              <strong>Teléfono</strong>
              999 123 4567
            </div>
          </li>
          <li>
            <span className="contacto-icon">📍</span>
            <div>
              <strong>Dirección</strong>
              Calle 60 #123, Centro, Mérida, Yucatán
            </div>
          </li>
        </ul>

        <div className="contacto-divider">Horarios</div>

        <div className="contacto-horarios">
          <div className="horario-item">
            <p className="horario-dia">Lunes — Viernes</p>
            <p className="horario-hora">12:00 — 22:00</p>
          </div>
          <div className="horario-item">
            <p className="horario-dia">Sábado — Domingo</p>
            <p className="horario-hora">10:00 — 24:00</p>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Contacto