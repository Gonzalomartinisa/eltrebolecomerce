import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import db from '../../service/firebase'
import { collection, getDocs } from 'firebase/firestore'
const ItemListContainer = () => {

const [productos, setProductos] = useState([])

    const getData = async () => {
      const itemCollection = collection(db, "productos")
      try {
        const data = await getDocs(itemCollection)
        const result = data.docs.map(doc => doc = {id:doc.id, ...doc.data()})
        setProductos(...productos,result)
      } catch (error) {
        console.log(error, "Error")
      }
    }

 useEffect(() => {
   getData()    
  }, []);
 
  return (
    <div className='d-flex row justify-content-evenly w-100 p-2'>
      <h1 className='d-flex justify-content-center p-5'>Bienvenidos a la tienda online de carniceria El Trebol</h1>
      <ItemList productos = {productos}/> 
    </div>
  )
}

export default ItemListContainer

