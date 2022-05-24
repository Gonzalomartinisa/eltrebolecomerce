import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { data } from '../../config'
import { useParams } from "react-router-dom"
import Loader from '../../Views/Loader/Loader'
import db from '../../service/firebase'
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
const ItemDetailContainer = () => {

  const {id} = useParams()

  const [productos, setProductos] = useState(null)

  // const filtrado = data.find((prod) => prod.id === Number(id));

  const getData = async () => {
    const itemDetailCollection = collection(db, "productos")
    try {
      const data = await getDocs(itemDetailCollection)
      const result = data.docs.map(doc => doc = {id:doc.id, ...doc.data()})
      const filtrado = result.find((prod) => prod.id == id)
      setProductos(filtrado)
     
    } catch (error) {
      console.log(error, "Error")
    }
  }

useEffect(() => {
 getData()    
}, []);

//  useEffect(() => {
//   const promesa = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       resolve(data)
//     },2000);
//     })
//   promesa.then((res)=>{
//     setProductos(filtrado)
//     console.log(filtrado)
//   }).catch((err)=>
//     console.log(err)
//   )
 
//      return () => {
     
//   }
//  }, []);
 
  return (
     <div className='d-flex row justify-content-evenly w-100 p-2'>
         {productos ? <ItemDetail productos={productos}/> : <Loader/> }
     </div>
  )
}

export default ItemDetailContainer