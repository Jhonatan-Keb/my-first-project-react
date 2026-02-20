import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Cartelera from './pages/Cartelera';
import Alimentos from './pages/Alimentos';
import Otros from './pages/Otros';
import Detalle from './pages/Detalle';
import './App.css';

function App() {
  const [vistaActual, setVistaActual] = useState('home');
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const verDetalle = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
    setVistaActual('detalle');
  };

  return (
    <>
      <Header setVistaActual={setVistaActual} />
      <main className="main-content">
        {vistaActual === 'home' && <Home onVerDetalle={verDetalle} setVistaActual={setVistaActual} />}
        {vistaActual === 'cartelera' && <Cartelera onVerDetalle={verDetalle} />}
        {vistaActual === 'alimentos' && <Alimentos />}
        {vistaActual === 'otros' && <Otros />}
        {vistaActual === 'detalle' && <Detalle pelicula={peliculaSeleccionada} setVistaActual={setVistaActual} />}
      </main>
    </>
  );
}

export default App;