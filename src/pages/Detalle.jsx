import { useState } from 'react';

const Detalle = ({ pelicula, setVistaActual }) => {
  // REQUISITO 1: Interacción dinámica (Mostrar/Ocultar descripción)
  const [mostrarSinopsis, setMostrarSinopsis] = useState(true);

  // REQUISITO 3: Formulario Controlado con 2 inputs
  const [formulario, setFormulario] = useState({ nombre: '', boletos: 1 });
  const [mensaje, setMensaje] = useState('');

  if (!pelicula) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Película no seleccionada</h2>;
  }

  // REQUISITO 2 y 3: Uso de onSubmit y preventDefault
  const manejarCompra = (e) => {
    e.preventDefault();
    // REQUISITO 3: Mostrar la información ingresada en pantalla
    setMensaje(`¡Gracias ${formulario.nombre}! Has reservado ${formulario.boletos} boletos para ${pelicula.title}.`);
  };

  return (
    <div className="detalle-container">
      <div className="detalle-img-container">
        <img src={pelicula.image} alt={pelicula.title} className="detalle-img" />
      </div>
      
      <div className="detalle-info">
        <h1 className="detalle-title">{pelicula.title}</h1>
        <p className="detalle-genre">{pelicula.genre}</p>
        
        {/* REQUISITO 1: Botón que cambia el estado para mostrar/ocultar */}
        <button 
          onClick={() => setMostrarSinopsis(!mostrarSinopsis)}
          style={{ marginBottom: '15px', padding: '5px 10px', cursor: 'pointer', backgroundColor: '#eee', border: '1px solid #ccc', borderRadius: '4px' }}
        >
          {mostrarSinopsis ? 'Ocultar Sinopsis' : 'Ver Sinopsis'}
        </button>

        {/* REQUISITO 1: Renderizado condicional de la sinopsis */}
        {mostrarSinopsis && <p className="detalle-synopsis">{pelicula.synopsis}</p>}
        
        {/* REQUISITO 3: Formulario con onSubmit */}
        <form onSubmit={manejarCompra} style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
           <input 
             type="text" 
             placeholder="Tu nombre" 
             value={formulario.nombre}
             onChange={(e) => setFormulario({...formulario, nombre: e.target.value})} // REQUISITO 2: onChange
             required
             style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
           />
           <input 
             type="number" 
             min="1"
             value={formulario.boletos}
             onChange={(e) => setFormulario({...formulario, boletos: e.target.value})} // REQUISITO 2: onChange
             required
             style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
           />
           <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
             <button type="submit" className="btn">Confirmar Compra</button>
             <button type="button" className="btn" style={{ backgroundColor: '#666' }} onClick={() => setVistaActual('cartelera')}>
               Volver
             </button>
           </div>
        </form>

        {/* REQUISITO 3: Mostrar la info en pantalla al enviarse */}
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