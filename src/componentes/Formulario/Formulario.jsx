import React from 'react'
import { useState } from 'react';
import CartContext from '../../Views/Carrito/CartContext';
import db from '../../service/firebase'
import { collection, doc, getDoc, getDocs, getFirestore, orderBy } from 'firebase/firestore'
import { keyboard } from '@testing-library/user-event/dist/keyboard';
const Formulario = ({total, carrito}) => {

    // const {limpiarCarrito} = CartContext();
    // const {fetchGenerateTicket} = useFirebase();

    const [formulario, setFormulario] = useState({
        buyer: {
            nombre: "",
            email: "",
            apellido: "",
            telefono: "",
        },
        total: total,
        items: carrito,
    })

    const [error, setError] = useState({});

    const {buyer: {nombre, email, apellido, telefono}} = formulario;

    const handleChange = (e) => {
      const {name, value} = e.target;
         setFormulario({
           ...formulario, 
           buyer: {...formulario.buyer,
          [name]: value,
          }
         })
    }

  return (
    <form class="row g-3 needs-validation" novalidate>
    <div class="col-md-4 position-relative">
      <label for="validationTooltip01" class="form-label">First name</label>
      {Object.keys(formulario.buyer).map((key, index) =>(
      <input
      type="email"
      className={`form-control"}`}
      id="email"
      aria-describedby="emailHelp"
      value={key.value}
      onChange={handleChange}
      required
    />
      ))}
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 position-relative">
      <label for="validationTooltip02" class="form-label">Last name</label>
      {Object.keys(formulario.buyer).map((key, index) =>(
      <input type="text" class="form-control" id={nombre} key={index} value={nombre} onChange={handleChange} required/>
      ))}
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 position-relative">
      <label for="validationTooltipUsername" class="form-label">Username</label>
      <div class="input-group has-validation">
        <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required/>
        <div class="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
    </div>
    <div class="col-md-6 position-relative">
      <label for="validationTooltip03" class="form-label">City</label>
      <input type="text" class="form-control" id="validationTooltip03" required/>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 position-relative">
      <label for="validationTooltip04" class="form-label">State</label>
      <select class="form-select" id="validationTooltip04" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
      </select>
      <div class="invalid-tooltip">
        Please select a valid state.
      </div>
    </div>
    <div class="col-md-3 position-relative">
      <label for="validationTooltip05" class="form-label">Zip</label>
      <input type="text" class="form-control" id="validationTooltip05" required/>
      <div class="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Submit form</button>
    </div>
  </form>
  )
}

export default Formulario