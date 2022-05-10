import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer"
import Ingresa from "../Views/Ingresa/Ingresa"
import Layout from "../componentes/Layout/Layout"
import Error from "../Views/Error/Error"
import Carrito from "../Views/Carrito/Carrito"
import Nosotros from "../Views/Nosotros/Nosotros"
const Rutas = () => {
  return (
      <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
             <Route index element={<ItemListContainer/>}/>
             <Route path="/Item-detail/:id/" element={<ItemDetailContainer/>}/>
             <Route path="/Carrito" element={<Carrito/>}/>
             <Route path="/Ingresa" element={<Ingresa/>}/>
             <Route path="/Nosotros" element={<Nosotros/>}/>
        </Route>
      
    <Route path="*" element={<Error/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Rutas