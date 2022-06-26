import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalStateContext";

const ItemCount = ({ productos }) => {

  const { stock, precio } = productos

  const [contador, setContador] = useState(1);

  const {carrito, agregarCarrito, verificarCarrito} = useContext(GlobalContext)

  const [cantidadComprada, setCantidadComprada] = useState(0)
  const cantidadAAgregar = (contador) => {
  setCantidadComprada(contador)
 }

 let item = productos && {
    ...productos,
    contador,
 }

  function sumar(params) {
    if (contador < stock) {
      setContador(contador + 1);
    }
  }

  function restar(params) {
    if (contador > 1) {
      setContador(contador - 1)
    }
  }

  return (
    
    <div className="row d-flex justify-content-center p-5">
          <h4>Cantidad a comprar: {contador} kilos</h4>
          <h4>Sub-total: {contador * precio}</h4>
        <div className="d-flex justify-content-center">

          <button className="btn btn-info text-light m-2 p-3" onClick={sumar}>+</button>
          <button className="btn btn-warning text-light m-2 p-3" onClick={restar}>-</button>
        </div>
      
      <div style={{
          display: "flex",
          justifyContent: "space-around",
          width: "200px",
          padding: "10px",
          margin: "10px",
        }} 
      >
        </div>
        {!verificarCarrito(carrito, item) ? ( 
          
        <Link to="" onClick={() => agregarCarrito(item)}  className="btn btn-success w-100 text-light">Agregar al carrito</Link>   
        ) : ( 
          <div className="d-flex justify-content-around">
          <Link to={"/CartContext"} className="btn btn-danger my-5 m-2"><i className="mx-1 bi bi-arrow-left"></i>Terminar compra</Link> 
          <Link to={"/"} className="btn btn-success my-5"><i className="mx-1 bi bi-arrow-left"></i>Seguir comprando</Link> 
          </div>
          )} 
    </div>
    
  );
};

export default ItemCount;

