import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../../context/GlobalStateContext";
import { collection, addDoc, getFirestore,} from 'firebase/firestore'
import swal from 'sweetalert';

const Formulario = () => {

  const {total, carrito, clear} = useContext(GlobalContext);

  const compra = carrito.map(({id, nombre, precio, cantidad}) => ({
    id, nombre, precio, cantidad,
  }));

    const [formulario, setFormulario] = useState({
        buyer: {
            nombre: "",
            email: "",
            telefono: "",
        },
        total: total,
        items: compra,
    })

    const {buyer: {nombre, email, telefono}} = formulario;

    const handleChange = (e) => {
      const {name, value} = e.target;
         setFormulario({
           ...formulario, 
           buyer: {...formulario.buyer,
          [name]: value,
          },
         });
    };

    const [orderID, setOrderID] = useState();
    function crearTiket(order){
      if(order){
        swal("Compra exitosa", `La ID de su compra es ${orderID}`, "success");
        clear()
      }
    }

     const sendOrder = (e) =>{
       const order = {
        buyer:{formulario},
      }
        const db = getFirestore();
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order).then(({id})=> setOrderID(id)).catch(err=>{swal ( "Lo sentimos" ,  "Ocurrio un error" ,  "error" )})
        e.preventDefault();
     };
    
    
    useEffect(() => {
     
      crearTiket(orderID);
  
    return () => {
      
    }
  }, [orderID])
    

  return (
    <>
    <h1 className='d-flex justify-content-center p-5'>Datos del comprador</h1>
    <form onSubmit={sendOrder} class="row g-3 p-5" id="form">
    <div class="col-md-8 position-relative">
      <label for="validationTooltip02" class="form-label">Nombre completo</label>
      <input type="text" class="form-control" name="nombre" value={nombre} onChange={handleChange} required/>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-8 position-relative">
      <label for="validationTooltipUsername" class="form-label">Correo electronico</label>
      <div class="input-group has-validation">
        <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        <input type="text" class="form-control" id="validationTooltipUsername" name="email" value={email} onChange={handleChange} aria-describedby="validationTooltipUsernamePrepend" required/>
        <div class="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
    </div>
    <div class="col-md-8 position-relative">
      <label for="validationTooltip05" class="form-label">Telefono</label>
      <input type="text" class="form-control" id="validationTooltip05" name="telefono" value={telefono} onChange={handleChange} required/>
      <div class="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div>
    <div class="col-md-8 justify-content-center">
      <button class="btn btn-primary" type="submit">Confirmar compra</button>
    </div>
  </form>
  </>
  )
  }

export default Formulario