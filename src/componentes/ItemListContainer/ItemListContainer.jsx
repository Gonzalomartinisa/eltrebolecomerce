import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
const ItemListContainer = () => {

const [productos, setProductos] = useState([])

  const data = [
    {
      id:1,
      nombre:"Roas beef",
      stock:20,
      descripcion: "carne vacuna",
      precio: 1150,
      img: 'https://es.123rf.com/imagenes-de-archivo/carne_de_res.html?sti=lgei97aglbgg5lgsvx|',
    },
    {
      id:2,
      nombre:"Roas beef",
      stock:20,
      descripcion: "carne vacuna",
      precio: 1150,
      img: 'https://es.123rf.com/imagenes-de-archivo/carne_de_res.html?sti=lgei97aglbgg5lgsvx|',
    },
    {
      id:3,
      nombre:"Roas beef",
      stock:20,
      descripcion: "carne vacuna",
      precio: 1150,
      img: 'https://es.123rf.com/imagenes-de-archivo/carne_de_res.html?sti=lgei97aglbgg5lgsvx|',
    },
    {
      id:4,
      nombre:"Roas beef",
      stock:20,
      descripcion: "carne vacuna",
      precio: 1150,
      img: 'https://es.123rf.com/imagenes-de-archivo/carne_de_res.html?sti=lgei97aglbgg5lgsvx|',
    },
    {
      id:5,
      nombre:"Roas beef",
      stock:20,
      descripcion: "carne vacuna",
      precio: 1150,
      img: 'https://es.123rf.com/imagenes-de-archivo/carne_de_res.html?sti=lgei97aglbgg5lgsvx|',
    },
  ];

 useEffect(() => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(data)
    },2000);
  })
  promesa.then((res)=>{
    setProductos(res)
  }).catch((err)=>
    console.log(err)
  )
 
    return () => {
     
  }
 }, []);
 
  return (
    <div className='d-flex row justify-content-evenly w-100 p-2'>
      <ItemList productos = {productos}/>
    </div>
  )
}

export default ItemListContainer

