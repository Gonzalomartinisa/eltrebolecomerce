import Footer from './componentes/Footer/Footer';
import Navbar from './componentes/Navbar/Navbar';
import Content from './componentes/Content/Content';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';


function App() {

  return (
    <div>
      <Navbar/>
      <h1 className='d-flex justify-content-center'>Productos destacados</h1>
      <div className='d-flex'>
      <ItemListContainer/></div>
      <ItemCount/> 
      <Footer/>
    </div>
  );
}

export default App;
