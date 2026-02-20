import { useState } from 'react';

const Detalle = ({ pelicula, setVistaActual }) => {
  // Estado local para el formulario controlado y el mensaje de confirmación
  const [formulario, setFormulario] = useState({ nombre: '', boletos: 1 });
  const [mensaje, setMensaje] = useState('');

  // Si por alguna razón no llega la información, mostramos este aviso
  if (!pelicula) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Película no seleccionada</h2>;
  }

  // Evento onSubmit que actualiza el estado local y evita recargar la página
  const manejarCompra = (e) => {
    e.preventDefault();
    setMensaje(`¡Gracias ${formulario.nombre}! Has reservado ${formulario.boletos} boletos para ${pelicula.title}.`);
  };

  return (
    <div className="detalle-container">
      <div className="detalle-img-container">
        {/* Renderizado dinámico usando la información de la prop "pelicula" */}
        <img src={pelicula.image} alt={pelicula.title} className="detalle-img" />
      </div>
      
      <div className="detalle-info">
        <h1 className="detalle-title">{pelicula.title}</h1>
        <p className="detalle-genre">{pelicula.genre}</p>
        
        <h3 style={{ marginBottom: '10px', color: 'var(--cx-dark)' }}>Sinopsis</h3>
        <p className="detalle-synopsis">{pelicula.synopsis}</p>
        
        {/* Formulario controlado ligado a useState */}
        <form onSubmit={manejarCompra} style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
           <input 
             type="text" 
             placeholder="Tu nombre" 
             value={formulario.nombre}
             onChange={(e) => setFormulario({...formulario, nombre: e.target.value})}
             required
             style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
           />
           <input 
             type="number" 
             min="1"
             value={formulario.boletos}
             onChange={(e) => setFormulario({...formulario, boletos: e.target.value})}
             required
             style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
           />
           <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
             <button type="submit" className="btn">Comprar</button>
             <button 
                type="button" 
                className="btn" 
                style={{ backgroundColor: '#666' }} 
                onClick={() => setVistaActual('cartelera')}
             >
               Volver
             </button>
           </div>
        </form>

        {/* Mensaje de éxito que aparece tras el re-render automático */}
        {mensaje && (
          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '5px' }}>
            {mensaje}
          </div>
        )}
      </div>
    </div>
  );
};

export default Detalle;