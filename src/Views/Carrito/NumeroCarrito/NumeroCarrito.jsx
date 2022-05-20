import React from 'react'
import { useState } from 'react';

const NumeroCarrito = (sumar) => {

    const [numero, setNumero] = useState(0);

    function sumar(){
        setNumero(numero + 1); 
    }

  return (
    <div>
          <h1>{numero}</h1>
        </div>
  )
}

export default NumeroCarrito

// const ItemCount = ({stock, click}) => {
  
//     const [contador, setContador] = useState(1);
  
//     function sumar(params) {
//       if (contador < stock) {
//         setContador(contador + 1);
//       }
//     }