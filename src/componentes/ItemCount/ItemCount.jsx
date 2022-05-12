import React, { useState } from "react";
import { Link } from "react-router-dom";
const ItemCount = ({stock, click}) => {
  
  const [contador, setContador] = useState(1);

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

   function comprar() {
    stock = stock - contador;
    console.log(stock);
  }

  //   const handleClick = (e) => {
  //   cantidadAAgregar = contador
  //   console.log(cantidadAAgregar) 
  // }

  return (
    <div className="d-flex justify-content-center p-5">
      <div>
        <h2>El stock es de {stock} kilos</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "300px",
          }}
        >
          <button className="btn btn-primary" onClick={sumar}>+</button>
          <h1>{contador}</h1>
          <button className="btn btn-primary" onClick={restar}>-</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "200px",
          padding: "10px",
          margin: "10px",
        }}
      >
        <Link to="" onClick={() => click(contador)}  className="btn btn-success w-100 text-light">Añadir al carro</Link>
        {/* <button className="btn btn-primary" onClick={handleClick}>Comprar</button> */}
      </div>
    </div>
  );
};

export default ItemCount;
