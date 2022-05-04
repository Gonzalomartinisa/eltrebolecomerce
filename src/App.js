import Footer from './componentes/Footer/Footer';
import Navbar from './componentes/Navbar/Navbar';
import Content from './componentes/Content/Content';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';


function App() {

  return (
    <div>
      <Navbar/>
      <div className='d-flex'>
      <h2>Productos destacados</h2>
      <ItemListContainer/></div>
      <ItemCount/> 
      <Footer/>
    </div>
  );
}

export default App;
