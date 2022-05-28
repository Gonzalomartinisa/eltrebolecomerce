import React from "react";
import Item from "../Item/Item";
import Loader from "../../Views/Loader/Loader";


const ItemList = ({productos}) => {

  return (
    <main className='d-flex row justify-content-evenly w-200 p-5'>
      {productos.length > 0 ? (
        productos.map((producto) => <Item 
        key={producto.id}
        id={producto.id}
        img={producto.img}
        nombre={producto.nombre}
        descripcion={producto.descripcion}
        stock={producto.stock}
        precio={producto.precio}
        />)
      ) : (
        <Loader/>
      )}
    </main>
  );
};

export default ItemList;
