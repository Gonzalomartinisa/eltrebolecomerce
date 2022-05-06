import React from "react";
import Item from "../Item/Item";

const ItemDetail = ({ producto }) => {
  return (
    <div className="d-flex justify-content-evenly bg-opacity-25 w-100 p-5">
     {producto.precio}
        </div>
     )};

export default ItemDetail;
