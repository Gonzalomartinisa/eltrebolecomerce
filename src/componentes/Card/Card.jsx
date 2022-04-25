import React from 'react'

const Card = ({
  texto,
  color,
  precio,
  imagen,
  btn,
  descipcion

}) => {

  return (
    <div className="card" style={{width:"18rem"}}>
  <img src={"..."} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{texto}</h5>
    <p className="card-text">{descipcion}</p>
    <p className="card-text">{precio}</p>
    <a href="#" className="btn btn-primary">Comprar</a>
  </div>
</div>
  )
}

export default Card