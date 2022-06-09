import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, stock, tipo, precio, img}) => {
 
  return (
    <div className="card d-flex flex-column p-2 m-1" style={{width:"18rem"}}>
    <img src={img} className="card-img-top w-70" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{nombre}</h5>
      <p className="card-text">{tipo}</p>
      <p className="card-text">Precio: {precio} pesos</p>
      <p className="card-text">Stock: {stock} kilos</p>
      <Link to={`/Item-detail/${id}`} className="btn btn-primary">Ver el detalle</Link>
    </div>
  </div>
  )
}

export default Item

