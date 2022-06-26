import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStateContext";
import { Link } from "react-router-dom";
import Formulario from "../../componentes/Formulario/Formulario";

const CartContext = () => {
  const { carrito, clear, eliminarProducto, total } = useContext(GlobalContext);

  return (
    <>
      <h1 className="d-flex justify-content-center p-5">Tus compras</h1>
      <div className="container-fluid">
        <div className="row d-flex justify-content-evenly ">
          
          {carrito.length > 0 ? (
            carrito.map((item, index) => {
              const subTotal = item.precio * item.contador;

              return (
                <div className="col-sm-3">
                  <div
                    className="card d-flex justify-content-evenly"
                    style={{ width: "14rem" }}
                    key={index}
                  >
                    <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.nombre}</h5>
                      <p className="card-text">
                        Precio por kilo: {item.precio} pesos
                      </p>
                      <p className="card-text">
                        Cantidad: {item.contador} kilos
                      </p>
                      <p className="card-text">Sub-Total: {subTotal} pesos</p>
                      <button
                        onClick={() => eliminarProducto(item.id)}
                        className="btn btn-danger my-5"
                      >
                        Quitar del carro
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          
          ) : (
            <h1 className="d-flex justify-content-center">
              El carrito esta vacio{" "}
            </h1>
          )}
            
          {carrito.length > 0 ? (
         <div className="row d-flex justify-content-center">
          <button
              onClick={() => clear(carrito)}
              className="btn btn-danger my-5 m-2"
            >
              Vaciar el carro
            </button>
            <Link className="btn btn-success my-5 m-2" to="/">
              <i className="mx-1 bi bi-arrow-left"></i>Seguir comprando
            </Link>
            <h2 className="d-flex justify-content-center">
            {" "}
            El total de tu compra es {total !== 0 ? total : "0"} pesos
          </h2>
            <Formulario carrito={carrito} />
          </div>
          
           ) : (
            <Link className="btn btn-success my-5 m-2" to="/">
              <i className="mx-1 bi bi-arrow-left"></i>Seguir comprando
            </Link>
            
           )}
        </div>
      </div>
    </>
  );
};

export default CartContext;
