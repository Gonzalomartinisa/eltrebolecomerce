import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer"
const Rutas = () => {
  return (
      <>
    <BrowserRouter>
    <Routes>
        <Route index element={<ItemListContainer/>}/>
        <Route path="/Item-detail/:id" element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Rutas