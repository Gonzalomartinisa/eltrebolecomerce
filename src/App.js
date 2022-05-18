import Rutas from './routes/Rutas';
import GlobalProvider from './context/GlobalStateContext';


function App() {

  return (
    <div>
    <GlobalProvider>
      <Rutas/>
    </GlobalProvider>
    </div>
  );
}

export default App;
