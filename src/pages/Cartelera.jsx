import MovieCard from '../components/MovieCard';
import { moviesData } from '../moviesData'; // Importamos los datos

const Cartelera = ({ onVerDetalle }) => {
  return (
    <div>
      <h1 className="page-title" style={{ textAlign: 'center', marginTop: '30px' }}>CARTELERA</h1>
      <div className="grid-container">
        {/* Consumo del JSON e inyección de la función en cada tarjeta */}
        {moviesData.map(movie => (
          <MovieCard 
            key={movie.id} 
            {...movie} 
            onVerDetalle={() => onVerDetalle(movie)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Cartelera;