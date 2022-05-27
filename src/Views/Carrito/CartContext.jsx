import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import { Link } from 'react-router-dom';
import Formulario from '../../componentes/Formulario/Formulario';

const CartContext = () => {

  const {carrito, clear, eliminarProducto} = useContext(GlobalContext);
  
  return (
    <>
      {carrito.length > 0 ? carrito.map((item, index) => {
        
     return (
      <main className="row">
      <div className="col-sm-8">
      <div className="card d-flex justify-content-evenly" style={{width:"14rem"}} key={index}>
       <img src={item.img} className="card-img-top" alt="..."/>
       <div className="card-body">
         <h5 className="card-title">{item.nombre}</h5>
         <p className="card-text">Precio por kilo: {item.precio} pesos</p>
         <p className="card-text">Cantidad: {item.cantidad} kilos</p>
         <p className="card-text">Total: {(item.precio) * (item.cantidad)} pesos</p>
     <button onClick={() => eliminarProducto(item.id)} className='btn btn-success my-5'>Quitar del carro</button>
     </div>
     </div>
    </div>
     </main>
     )}
     

     ) : <h1>El carrito esta vacio </h1>}
    <Link className="btn btn-success my-5 m-2" to="/"><i className="mx-1 bi bi-arrow-left"></i>Volver</Link>
    <button onClick={() => clear(carrito)} className='btn btn-success my-5 m-2'>Vaciar el carro</button> 

    <Formulario carrito={carrito}/>  
      </>      

      
  )
}

export default CartContext

