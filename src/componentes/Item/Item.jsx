import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'

const Item = ({id, nombre, stock, tipo, precio, img}) => {

   const {carrito, agregarCarrito} = useContext(GlobalContext);
   
   const [productos, setProductos] = useState({id, nombre, stock, tipo, precio, img});
 
  return (
    <div className="card d-flex flex-column p-2 m-1" style={{width:"18rem"}}>
    <img src={img} className="card-img-top w-70" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{nombre}</h5>
      <p className="card-text">{tipo}</p>
      <p className="card-text">Precio: {precio} pesos</p>
      <p className="card-text">Stock: {stock} kilos</p>
      <Link to={`/Item-detail/${id}`} className="btn btn-primary">Ver el detalle</Link>
      {/* <button onClick={() => agregarCarrito(productos)} className='btn btn-success my-5'>Agregar al carro</button>  */}
    </div>
  </div>
  )
}

export default Item

