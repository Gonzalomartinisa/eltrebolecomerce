import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import { Link } from 'react-router-dom';

const CartContext = () => {

  const {carrito, clear, eliminarProducto} = useContext(GlobalContext);

  return (
    <>
      <div className='d-flex justify-content-center'></div>
       <h1>En tu carrito encontraras los productos seleccionados</h1>
       
      {carrito.length > 0 ? carrito.map((item, index) => {
        
     return (
      <div className="card d-flex" style={{width:"12rem"}}>
       <img src={item.img} className="card-img-top" alt="..."/>
       <div className="card-body">
         <h5 className="card-title">{item.nombre}</h5>
         <p className="card-text">{}</p>
         <p className="card-text">Precio: {item.precio} pesos</p>
         <p className="card-text">Cantidad: {} kilos</p>
     <button onClick={() => eliminarProducto(item.id)} className='btn btn-success my-5'>Quitar del carro</button>
     </div>
     </div>
     
     )}

     ) : <h1>El carrito esta vacio </h1>}
    <Link className="btn btn-success my-5 m-2" to="/"><i className="mx-1 bi bi-arrow-left"></i>Volver</Link>
    <button onClick={() => clear(carrito)} className='btn btn-success my-5 m-2'>Vaciar el carro</button>  
      </>
  )
}

export default CartContext

