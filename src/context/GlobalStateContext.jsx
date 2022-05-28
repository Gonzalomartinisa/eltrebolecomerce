import React, { createContext, useEffect, useState } from 'react'
import Toastify from 'toastify-js'

export const GlobalContext = createContext('')

const GlobalProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarCarrito = (productos) => {
      if (carrito.find(ite => ite.id === productos.id)){
        Toastify({
          text: "Ya agregaste este producto a tu carrito",
          duration: 2000
         }).showToast();
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
        (total, productos) => total + productos.cantidad * productos.precio, 0)
      setTotal(calculoTotal);
    }, [carrito])
    
    
  return (
    <div>
    <GlobalContext.Provider value={{carrito, agregarCarrito, clear, eliminarProducto, total}}>
        {children}
    </GlobalContext.Provider>
    </div>
  )
}

export default GlobalProvider