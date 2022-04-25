import Footer from './componentes/Footer/Footer';
import Navbar from './componentes/Navbar/Navbar';
import Content from './componentes/Content/Content';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer
      greeting={"Bienvenidos a la tienda online de El Trebol"}
      />
      <div className='d-flex'>
      <h2>Ofertas de la semana</h2>
      <Content/></div>
      <div className='d-flex'>
      <h2>Productos destacados</h2>
      <Content/></div>
      <Footer/>
    </div>
  );
}

export default App;
