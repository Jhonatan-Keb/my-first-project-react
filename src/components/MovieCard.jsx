import Button from './Button';

// Recibe la prop onVerDetalle [cite: 76]
const MovieCard = ({ title, genre, image, onVerDetalle }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="poster-img" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{genre}</p>
        
        {/* El botón ahora ejecuta la función onVerDetalle [cite: 76] */}
        <div style={{ marginTop: 'auto' }}>
           <Button text="Ver Detalles" onClick={onVerDetalle} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;