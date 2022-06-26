import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ productos }) => {  

  return ( 
    
    <div className="card" style={{width:"500px", fontSize:"20px", fontFamily:"sans-serif", backgroundColor:""}}>
    <img src={productos.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h2 className="card-title">{productos.nombre}</h2>
      <p className="card-text">{productos.tipo}</p>
      <p className="card-text">{productos.descripcion}</p>
      <p className="card-text">{productos.coccion}</p>
      <p className="card-text">Precio: {productos.precio} pesos</p>
      <p className="card-text">Stock: {productos.stock} kilos</p>  
      <ItemCount productos={productos}/> 
      <Link to={"/"} className="d-flex justify-content-center btn btn-primary my-5 m-2"><i className="mx-1 bi bi-arrow-left"></i>Volver</Link> 
    </div>
  </div>
  );
}

export default ItemDetail;




