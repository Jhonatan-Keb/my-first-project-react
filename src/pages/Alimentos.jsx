import Button from '../components/Button';

const Alimentos = () => {
  const menu = [
    {
      categoria: 'Bebidas',
      items: [
        { 
          id: 1, 
          name: 'Refresco Grande', 
          price: '$85.00', 
          // Link directo a una foto de refresco (.jpg)
          image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' 
        },
        { 
          id: 2, 
          name: 'Icee Cereza', 
          price: '$95.00', 
          // Link directo a una foto de bebida tipo Icee (.jpg)
          image: 'https://www.google.com/imgres?q=icee%20cereza&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D236221907844964%26get_thumbnail%3D1&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FICEEMx%2Fvideos%2Ficee-cereza%2F236221907844964%2F&docid=PG6WVmlJf4a99M&tbnid=WPtdqVKHZqowfM&vet=12ahUKEwjYrPCvieaSAxVmnGoFHRW6JI8QnPAOegQIIxAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwjYrPCvieaSAxVmnGoFHRW6JI8QnPAOegQIIxAA' 
        }
      ]
    },
    {
      categoria: 'Comestibles',
      items: [
        { id: 3, name: 'Hot Dog Tradicional', price: '$75.00', image: 'Pega tu link aquí' },
        { id: 4, name: 'Nachos con Queso', price: '$90.00', image: 'Pega tu link aquí' }
      ]
    },
    {
      categoria: 'Snacks y Dulces',
      items: [
        { id: 5, name: 'Palomitas Clásicas', price: '$110.00', image: 'Pega tu link aquí' },
        { id: 6, name: 'Chocolates M&Ms', price: '$65.00', image: 'Pega tu link aquí' }
      ]
    }
  ];

  return (
    <div className="home-container">
      <h1 className="page-title" style={{ textAlign: 'center', margin: '40px 0' }}>Alimentos y Dulcería</h1>
      
      {menu.map((seccion, index) => (
        <div key={index} style={{ marginBottom: '50px' }}>
          <h2 className="category-title">{seccion.categoria}</h2>
          
          <div className="grid-container">
            {seccion.items.map(item => (
              <div key={item.id} className="card">
                <img src={item.image} alt={item.name} className="horizontal-img" />
                <div className="card-content">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-price">{item.price}</p>
                  <Button text="Agregar" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Alimentos;