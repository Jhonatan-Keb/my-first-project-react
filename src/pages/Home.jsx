import { moviesData } from '../moviesData';
import MovieCard from '../components/MovieCard';

const Home = ({ onVerDetalle, setVistaActual }) => {
  // Tomamos solo las primeras 3 películas para dejarle el 4to espacio al Combo
  const featuredMovies = moviesData.slice(0, 3);

  return (
    <div className="home-container">
      {/* Título Principal */}
      <h1 className="page-title" style={{ textAlign: 'center', margin: '40px 0 20px' }}>
        Destacados de la Semana
      </h1>

      <div className="grid-container">
        {/* 1. Renderizamos las 3 películas automáticamente y conectamos el estado */}
        {featuredMovies.map(movie => (
          <MovieCard 
            key={movie.id} 
            {...movie} 
            onVerDetalle={() => onVerDetalle(movie)} 
          />
        ))}

        {/* 2. Tarjeta de Combo manual con el MISMO formato que las películas */}
        <div className="card">
          <img 
            /* Aquí puedes poner un link de una imagen vertical de palomitas/combos */
            src="https://images.unsplash.com/photo-1585647347384-2593bc35786b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
            alt="Combo Pareja" 
            className="poster-img" 
          />
          <div className="card-content">
            <h3 className="card-title">Combo Pareja</h3>
            <p className="card-subtitle">Alimentos y Dulcería</p>
            <p className="card-synopsis">
              Disfruta de tu película favorita con 2 boletos, 1 palomitas grandes y 2 refrescos. ¡El plan perfecto para compartir!
            </p>
            {/* Reemplazamos Link por onClick para cambiar la vista manualmente */}
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'auto' }}>
              <button className="btn" onClick={() => setVistaActual('alimentos')}>
                Ver Promoción
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Botón para ir a la cartelera */}
      <section className="estrenos-section" style={{ textAlign: 'center', margin: '30px 0 50px' }}>
        <h2 className="estrenos-title" style={{border: 'none', fontSize: '1.2rem', marginBottom: '20px'}}>
          ¿Quieres ver más películas?
        </h2>
        <div>
          {/* Reemplazamos Link por onClick */}
          <button 
            className="btn" 
            onClick={() => setVistaActual('cartelera')}
            style={{ width: 'auto', padding: '12px 40px', fontSize: '1rem' }}
          >
            VER CARTELERA COMPLETA
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;