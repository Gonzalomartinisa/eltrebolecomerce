import React from "react";
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";
import Card from "../Card/Card";

const ItemDetail = ({ producto }) => {
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
          descripcion={producto.descripcion}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
