import Footer from './componentes/Footer/Footer';
import Navbar from './componentes/Navbar/Navbar';
import Content from './componentes/Content/Content';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Rutas from './routes/Rutas';


function App() {

  return (
    <div>
      <Navbar/>
      <Rutas/>
      <Footer/>
    </div>
  );
}

export default App;
