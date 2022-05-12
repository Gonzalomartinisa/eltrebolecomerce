import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Card = ({id, nombre, stock, descripcion, precio, tipo, coccion, img, cantidadComprada}) => {
  return (
    <div className="card" style={{width:"500px", fontSize:"20px", fontFamily:"sans-serif", backgroundColor:"coral"}}>
    <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h2 className="card-title">{nombre}</h2>
      <p className="card-text">{tipo}</p>
      <p className="card-text">{descripcion}</p>
      <p className="card-text">{coccion}</p>
      <p className="card-text">Precio: {precio} pesos</p>
      <p className="card-text">Stock: {stock} kilos</p>
      {/* <ItemCount/> */}
    </div>
  </div>
  )
}


export default Card