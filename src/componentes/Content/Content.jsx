import React from 'react'
import Card from '../ItemListContainer/Card'

function content() {
  return (
    <main className='d-flex justify-content-evenly w-100 p-2'>
      <Card
        texto={"Nombre del producto"}
        greeting={"Descipcion del producto"}
        precio={"Precio"}
      />
      <Card
        texto={"Nombre del producto"}
        greeting={"Descipcion del producto"}
       precio={"Precio"}
      />
       <Card
        texto={"Nombre del producto"}
        greeting={"Descipcion del producto"}
        precio={"Precio"}
      />
      <Card
        texto={"Nombre del producto"}
        greeting={"Descipcion del producto"}
       precio={"Precio"}
      />
    </main>
  )
}

export default content