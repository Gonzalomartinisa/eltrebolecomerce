import React from "react";
import Item from "../Item/Item";

const ItemList = ({productos}) => {
  return (
    <main className='d-flex justify-content-evenly w-100 p-2'>
      {productos.length > 0 ? (
        productos.map((producto) => <Item 
        stock={"Nombre del producto"}
        descripcion={"Descipcion del producto"}
        precio={"Precio"}
        />)
      ) : (
        <h1>Cargando...</h1>
      )}
    </main>
  );
};

export default ItemList;
