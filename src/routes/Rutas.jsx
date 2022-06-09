import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer"
import Ingresa from "../Views/Ingresa/Ingresa"
import Layout from "../componentes/Layout/Layout"
import Error from "../Views/Error/Error"
import CartContext from "../Views/Carrito/CartContext"
import Nosotros from "../Views/Nosotros/Nosotros"
import Vacuno from "../Views/Vacuno/Vacuno"
import Porcino from "../Views/Porcino/Porcino"
import Ave from "../Views/Ave/Ave"
const Rutas = () => {
  return (
      <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
             <Route index element={<ItemListContainer/>}/>
             <Route path="/Vacuno" element={<Vacuno/>}/>
             <Route path="/Ave" element={<Ave/>}/>
             <Route path="/Porcino" element={<Porcino/>}/>
             <Route path="/Item-detail/:id/" element={<ItemDetailContainer/>}/>
             <Route path="/CartContext" element={<CartContext/>}/>
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