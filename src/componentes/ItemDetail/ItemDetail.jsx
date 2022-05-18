import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Card from "../Card/Card";
import { useState } from 'react'

const ItemDetail = ({ producto }) => {

  const [cantidadComprada, setCantidadComprada] = useState(0)
  const cantidadAAgregar = (contador) => {
    setCantidadComprada(contador)
  }

  return (
    <div className="d-flex justify-content-evenly bg-opacity-25 w-100 p-5">
      <div>
        {" "}
        <Card
          key={producto.id}
          id={producto.id}
          img={producto.img}
          nombre={producto.nombre}
          precio={producto.precio}
          stock={producto.stock}
          coccion={producto.coccion}
          tipo={producto.tipo}
          descripcion={producto.descripcion}/>
          <h2>Vas a comprar {cantidadComprada} kilos de {producto.nombre}</h2>
          {cantidadComprada > 0 ? (
         <Link to={'/CartContext'}> <button>Finalizar Compra</button></Link> 
         ) :(
          <ItemCount stock={producto.stock}
          click={cantidadAAgregar}/>
          )}
      </div>
    </div>

  );
};

export default ItemDetail;
