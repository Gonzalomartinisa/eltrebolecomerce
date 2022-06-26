import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../../context/GlobalStateContext";
import { collection, addDoc, getFirestore,} from 'firebase/firestore'
import swal from 'sweetalert';
import InputFormulario from '../InputFormulario/InputFormulario';

const Formulario = () => {

  const {total, carrito, clear} = useContext(GlobalContext);

  const compra = carrito.map(({id, nombre, precio, contador}) => ({
    id, nombre, precio, contador,
  }));

    const [formulario, setFormulario] = useState({
        buyer: {
            Nombre: "",
            Email: "",
            Telefono: "",
        },
        total: total,
        items: compra,
    })

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
    <div className='d-flex row-cols-2'>
    <>
    <h1 className='d-flex justify-content-center p-5'>Datos del comprador</h1>
    <form onSubmit={sendOrder} class="row g-3 p-5" id="form">
      {Object.keys(formulario.buyer).map((key, index) => (
         <InputFormulario
            //  key={index}
             name={`${key}`}
             value={key.value}
             onChange={handleChange}
         />
      ))}
  
    <div class="col-md-8 justify-content-center">
      <button class="btn btn-primary" type="submit">Confirmar compra</button>
    </div>
  </form>
  </>
  </div>
  )
  }

export default Formulario

     