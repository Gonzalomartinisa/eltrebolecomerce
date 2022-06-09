import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from 'react'
import { GlobalContext } from "../../context/GlobalStateContext";

const ItemDetail = ({ productos: {id, img, nombre, precio, stock, coccion, tipo, descripcion}}) => {  
  
  const {carrito, agregarCarrito} = useContext(GlobalContext)

    const [cantidadComprada, setCantidadComprada] = useState(0)
    const cantidadAAgregar = (contador) => {
    setCantidadComprada(contador)
   }

   const [state, setState] = useState({})
   useEffect(() => {
      setState({id, img, nombre, cantidadComprada, precio, coccion, descripcion})
    }, [img])

  const item = {
    id: id, img: img, nombre: nombre, precio: precio, stock: stock, coccion: coccion, descripcion: descripcion, cantidad: cantidadComprada}

    const verificarCarrito = (carrito, item) => {
      return carrito.some((a) => a.id === item.id)
  };
  
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
      <p>Vas a enviar al carrito {cantidadComprada} kilos de {nombre} por {cantidadComprada * precio} pesos</p>
      {cantidadComprada > 0 ? ( 
      <Link to={'/CartContext'} onClick={() => agregarCarrito(item)} className='btn btn-success my-5'>Agregar al carrito</Link>
      ) : ( 
      <ItemCount stock={stock}
          click={cantidadAAgregar}/> 
         )} 
      <Link to={"/"} className="btn btn-primary my-5 m-2"><i className="mx-1 bi bi-arrow-left"></i>Volver</Link> 
    </div>
  </div>
  );
}

export default ItemDetail;




