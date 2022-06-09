import React, { useEffect, useState } from 'react'
import ItemList from '../../componentes/ItemList/ItemList'
import db from '../../service/firebase'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

export const Porcino = () => {

    const [productos, setProductos] = useState([])

 useEffect(() => {
     const db = getFirestore();

     const q = query(collection(db, "productos"), where("tipo", "==", "Porcino"));
     getDocs(q).then((snapshot) => {
         if(snapshot.size === 0) {
             console.log("No hay resultados");
         }
         setProductos(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
     })  
  }, []);

  return (
    <div className='d-flex row justify-content-evenly w-100 p-2'>
      <h1 className='d-flex justify-content-center p-5'>Estos son nuestros cortes porcinos de primera calidad</h1>
      <ItemList productos = {productos}/> 
    </div>
  )
}

export default Porcino;
