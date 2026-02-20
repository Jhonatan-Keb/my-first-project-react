const Header = ({ setVistaActual }) => {
  return (
    <header className="header">
      <div className="header-left">
        <span onClick={() => setVistaActual('home')} className="logo" style={{ cursor: 'pointer' }}>
          CINEMEX
        </span>
        <nav className="nav-links">
          <span onClick={() => setVistaActual('cartelera')} style={{ cursor: 'pointer' }}>
            Cartelera
          </span>
          <span onClick={() => setVistaActual('alimentos')} style={{ cursor: 'pointer' }}>
            Alimentos
          </span>
          <span onClick={() => setVistaActual('otros')} style={{ cursor: 'pointer' }}>
            Promociones
          </span>
        </nav>
      </div>
      <div className="header-right">
         <span style={{ fontSize: '0.9rem', cursor: 'pointer' }}>Iniciar Sesión</span>
      </div>
    </header>
  );
};

export default Header;