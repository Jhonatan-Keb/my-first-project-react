import Button from '../components/Button';

const Otros = () => {
  return (
    <div>
      <h1 className="page-title">Más para ti</h1>
      <div className="grid-container">
        <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Tarjeta Invitado Especial</h2>
          <p style={{ margin: '15px 0' }}>Sube de nivel y obtén precios especiales en boletos y dulcería.</p>
          <Button text="Afiliarme" />
        </div>
        <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Combo Lunes</h2>
          <p style={{ margin: '15px 0' }}>Disfruta 2 boletos, palomitas y refrescos a un precio increíble.</p>
          <Button text="Ver Promoción" />
        </div>
        <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Formatos Especiales</h2>
          <p style={{ margin: '15px 0' }}>Vive la magia en pantallas IMAX, Dolby Atmos y Premium.</p>
          <Button text="Conocer más" />
        </div>
      </div>
    </div>
  );
};

export default Otros;