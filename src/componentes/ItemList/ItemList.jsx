import React from "react";
import Item from "../Item/Item";

const ItemList = ({productos}) => {
  return (
    <main className='d-flex justify-content-evenly w-100 p-5'>
      {productos.length > 0 ? (
        productos.map((producto) => <Item 
        img={producto.img}
        nombre={producto.nombre}
        descripcion={producto.descripcion}
        stock={producto.stock}
        precio={producto.precio}
        />)
      ) : (
        <h1>Cargando...</h1>
      )}
    </main>
  );
};

export default ItemList;
