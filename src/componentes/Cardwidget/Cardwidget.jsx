import React, { useContext } from 'react'
import { GlobalContext } from "../../context/GlobalStateContext";
const Cardwidget = ({Icon, color, size}) => {

  const {carrito} = useContext(GlobalContext)

  const contador = carrito.length

  return (
    <div>
      {<Icon style={{color: color, fontSize: size}}/>}
      <span style={{color: 'white'}}>{contador}</span>
    </div>
    )
}

export default Cardwidget

