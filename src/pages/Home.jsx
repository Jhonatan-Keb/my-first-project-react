import { useState, useEffect } from 'react';
import { moviesData } from '../moviesData';
import MovieCard from '../components/MovieCard';

const Home = ({ onVerDetalle, setVistaActual }) => {
  const featuredMovies = moviesData.slice(0, 3);
  
  // REQUISITO 4: Estado para guardar los datos de la API
  const [noticias, setNoticias] = useState([]);

  // REQUISITO 4: Consumo Básico de Datos Dinámicos con fetch y useEffect
  useEffect(() => {
    // Usamos jsonplaceholder como lo pide la instrucción, limitando a 3 resultados
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then(response => response.json())
      .then(data => setNoticias(data))
      .catch(error => console.error("Error al cargar noticias:", error));
  }, []);

  return (
    <div className="home-container">
      <h1 className="page-title" style={{ textAlign: 'center', margin: '40px 0 20px' }}>
        Destacados de la Semana
      </h1>

      <div className="grid-container">
        {featuredMovies.map(movie => (
          <MovieCard key={movie.id} {...movie} onVerDetalle={() => onVerDetalle(movie)} />
        ))}

        <div className="card">
          <img 
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
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'auto' }}>
              <button className="btn" onClick={() => setVistaActual('alimentos')}>
                Ver Promoción
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="estrenos-section" style={{ textAlign: 'center', margin: '30px 0 50px' }}>
        <h2 className="estrenos-title" style={{border: 'none', fontSize: '1.2rem', marginBottom: '20px'}}>
          ¿Quieres ver más películas?
        </h2>
        <div>
          <button className="btn" onClick={() => setVistaActual('cartelera')} style={{ width: 'auto', padding: '12px 40px', fontSize: '1rem' }}>
            VER CARTELERA COMPLETA
          </button>
        </div>
      </section>

      {/* REQUISITO 4: Renderizado de las noticias obtenidas dinámicamente */}
      <section style={{ padding: '40px 20px', backgroundColor: '#f4f4f4', marginTop: '40px', borderRadius: '8px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Noticias del Cine (Datos de API)</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {noticias.length === 0 ? <p>Cargando noticias...</p> : noticias.map(noticia => (
            <div key={noticia.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '300px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <h4 style={{ textTransform: 'capitalize', color: 'var(--cx-red)', marginBottom: '10px' }}>
                {noticia.title.substring(0, 25)}...
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>
                {noticia.body.substring(0, 80)}...
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;