import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { data } from '../../config'
const ItemListContainer = () => {

const [productos, setProductos] = useState([])

  // const data = [
  //   {
  //     id:1,
  //     nombre:"Roas beef",
  //     stock:20,
  //     descripcion: "Carne vacuna",
  //     precio: 1150,
  //     img: 'https://static.diariovasco.com/www/multimedia/201906/03/media/cortadas/carne-roja-kS1C-R5uqUSGFlSqj84mn1I9bQuN-624x385@Diario%20Vasco.jpg',
  //   },
  //   {
  //     id:2,
  //     nombre:"Asado",
  //     stock:10,
  //     descripcion: "Carne vacuna",
  //     precio: 1250,
  //     img: 'https://static.diariovasco.com/www/multimedia/201906/03/media/cortadas/carne-roja-kS1C-R5uqUSGFlSqj84mn1I9bQuN-624x385@Diario%20Vasco.jpg',
  //   },
  //   {
  //     id:3,
  //     nombre:"Bondiola",
  //     stock:20,
  //     descripcion: "Carne porcina",
  //     precio: 850,
  //     img: 'https://elgourmet.s3.amazonaws.com/recetas/cover/bondi_WV2YC6bQEuTpRmkF79rBAKHZhzoa4v.png',
  //   },
  //   {
  //     id:4,
  //     nombre:"Pollo",
  //     stock:50,
  //     descripcion: "Carne de ave",
  //     precio: 350,
  //     img: 'https://www.paulinacocina.net/wp-content/uploads/2021/11/pollo-asado.jpg',
  //   },
  //   {
  //     id: 5,
  //     nombre:"Bife de chorizo",
  //     stock: 15,
  //     descripcion: "Carne vacuna",
  //     precio: 1850,
  //     img: 'https://static.diariovasco.com/www/multimedia/201906/03/media/cortadas/carne-roja-kS1C-R5uqUSGFlSqj84mn1I9bQuN-624x385@Diario%20Vasco.jpg',
  //   },
  // ];

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
      <h1 className='d-flex justify-content-center p-5'>Bienvenidos a la tienda online de carniceria El Trebol</h1>
      <ItemList productos = {productos}/>
    </div>
  )
}

export default ItemListContainer

