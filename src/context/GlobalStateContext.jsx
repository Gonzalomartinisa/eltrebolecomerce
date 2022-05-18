import React, { createContext, useState } from 'react'

export const GlobalContext = createContext('')

const GlobalProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarCarrito = (productos) => {
      if (carrito.find( ite => ite.id === productos.id )){
        alert("Ya agregaste ese producto al carrito")
      } else {
        setCarrito([...carrito, productos])
      }
    }

    const clear = () => setCarrito([])

    const eliminarProducto = (id) => {
      const borrarProducto = carrito.filter( ite => ite.id !== id)
      setCarrito(borrarProducto)
  }

  return (
    <div>
    <GlobalContext.Provider value={{carrito, agregarCarrito, clear, eliminarProducto}}>
        {children}
    </GlobalContext.Provider>
    </div>
  )
}

export default GlobalProvider