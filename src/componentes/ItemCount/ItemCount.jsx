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

  return (
    <div className="d-flex justify-content-center p-5">
        <div>
        <h3>Cantidad a comprar {contador}</h3>
          <button className="btn btn-danger text-light m-2" onClick={sumar}>+</button>
          <button className="btn btn-danger text-light m-2" onClick={restar}>-</button>
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
        <Link to="" onClick={() => click(contador)}  className="btn btn-success w-100 text-light">Agregar al carro</Link>
      
      </div>
    </div>
  );
};

export default ItemCount;
