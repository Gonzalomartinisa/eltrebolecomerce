import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, stock, descripcion, precio, img}) => {
  return (
    <div className="card" style={{width:"18rem"}}>
    <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{nombre}</h5>
      <p className="card-text">{descripcion}</p>
      <p className="card-text">Precio: {precio} pesos</p>
      <p className="card-text">Stock: {stock} kilos</p>
      <Link to={`/Item-detail/${id}`} className="btn btn-primary">Detalle</Link>
    </div>
  </div>
  )
}

export default Item

