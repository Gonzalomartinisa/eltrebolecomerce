import React, { createContext, useEffect, useState } from 'react'
import swal from 'sweetalert';

export const GlobalContext = createContext('')

const GlobalProvider = ({children}) => {

    const verificarCarrito = (carrito, item) => {
    return carrito.some((a) => a.id === item.id)
  };

    const [carrito, setCarrito] = useState([])

    const agregarCarrito = (productos) => {
      if (carrito.find(ite => ite.id === productos.id)){
        swal ("Atencion", "Este producto ya se encuentra en tu carrito" ,  "error" )
      } else {
        setCarrito([...carrito, productos])
      }}

    const clear = () => setCarrito([])

    const eliminarProducto = (id) => {
      const borrarProducto = carrito.filter( ite => ite.id !== id)
      setCarrito(borrarProducto)
  }

    const [total, setTotal] = useState(0)

    useEffect(() => {
      const calculoTotal = carrito.reduce(
        (total, productos) => total + productos.contador * productos.precio, 0)
      setTotal(calculoTotal);
    }, [carrito])
    
    
    
  return (
    <div>
    <GlobalContext.Provider value={{carrito, agregarCarrito, clear, eliminarProducto, verificarCarrito, total}}>
        {children}
    </GlobalContext.Provider>
    </div>
  )
}

export default GlobalProvider