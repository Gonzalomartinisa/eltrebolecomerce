import React from 'react'

const Item = ({id, nombre, stock, descripcion, precio, img}) => {
  return (
    <div className="card" style={{width:"18rem"}}>
    <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{nombre}</h5>
      <p className="card-text">{descripcion}</p>
      <p className="card-text">Precio: {precio}</p>
      <p className="card-text">Stock: {stock} kilos</p>
      <a href="#" className="btn btn-primary">Comprar</a>
    </div>
  </div>
  )
}

export default Item

