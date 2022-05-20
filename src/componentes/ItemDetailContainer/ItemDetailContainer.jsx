import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { data } from '../../config'
import { useParams } from "react-router-dom"
import Loader from '../../Views/Loader/Loader'
const ItemDetailContainer = () => {

  const {id} = useParams()

  const [producto, setProducto] = useState(null)

  const filtrado = data.find((prod) => prod.id === Number(id));

 useEffect(() => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(data)
    },2000);
    })
  promesa.then((res)=>{
    setProducto(filtrado)
    console.log(filtrado)
  }).catch((err)=>
    console.log(err)
  )
 
     return () => {
     
  }
 }, []);
 
  return (
     <div className='d-flex row justify-content-evenly w-100 p-2'>
         {producto ? <ItemDetail producto={producto}/> : <Loader/> }
     </div>
  )
}

export default ItemDetailContainer