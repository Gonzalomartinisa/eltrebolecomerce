import React from 'react'

const Formulario = ({total, compra}) => {

    const {limpiarCarrito} = CartProvider();
    const {fetchGenerateTicket} = useFirebase();

    const [formulario, setFormulario] = useState({
        buyer: {
            nombre: "",
            email: "",
            apellido: "",
            telefono: "",
        },
        total: total,
        items: compra
    })

    const [error, setError] = useState({});

    const {buyer: {nombre, email, apellido, telefono}} = formulario;

  return (
    <div>Formulario</div>
  )
}

export default Formulario