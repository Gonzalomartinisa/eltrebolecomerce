import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'

const Card = ({producto: {id, nombre, stock, descripcion, precio, tipo, coccion, img}}) => {

  const {carrito, agregarCarrito} = useContext(GlobalContext);
   
  const [productos, setProductos] = useState({id, nombre, stock, tipo, precio, img}); 
  
  const [cantidadComprada, setCantidadComprada] = useState(0)
  const cantidadAAgregar = (contador) => {
    setCantidadComprada(contador)
  }
  
  return (
    <div className="card" style={{width:"500px", fontSize:"20px", fontFamily:"sans-serif", backgroundColor:""}}>
    <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h2 className="card-title">{nombre}</h2>
      <p className="card-text">{tipo}</p>
      <p className="card-text">{descripcion}</p>
      <p className="card-text">{coccion}</p>
      <p className="card-text">Precio: {precio} pesos</p>
      <p className="card-text">Stock: {stock} kilos</p>
      <ItemCount stock={id.stock}
          click={cantidadAAgregar}/> 
          <button onClick={() => agregarCarrito(productos)} className='btn btn-success my-5'>Agregar al carro</button> 
    </div>
  </div>
  )
}


export default Card