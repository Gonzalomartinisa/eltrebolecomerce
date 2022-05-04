import React from 'react'

const Item = ({id, stock, descripcion, precio, img}) => {
  return (
    <div className="card" style={{width:"18rem"}}>
    <img src={"..."} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{stock}</h5>
      <p className="card-text">{descripcion}</p>
      <p className="card-text">{precio}</p>
      <a href="#" className="btn btn-primary">Comprar</a>
    </div>
  </div>
  )
}

export default Item

