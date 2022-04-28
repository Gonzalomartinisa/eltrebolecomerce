import React, { useState } from "react";

const ItemCount = () => {
  var stock = 5;

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

  return (
    <div>
      <h1>Agregar al carro</h1>
      <div>
        <h2>El stock es de {stock} unidades</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "300px",
          }}
        >
          <button onClick={sumar}>+</button>
          <h1>{contador}</h1>
          <button onClick={restar}>-</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "300px",
          padding: "10px",
          margin: "10px",
        }}
      >
        <button onClick={comprar}>Comprar</button>
      </div>
    </div>
  );
};

export default ItemCount;
