import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { data } from '../../config'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'
const ItemListContainer = () => {

const [productos, setProductos] = useState([])

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
      {/* <Link to={'/carrito'} >Carrito</Link> */}
        {/* {productos.length > 0 ? productos.map (({id,img,nombre,stock,precio},key) => (
            <Item  
            id={id} 
            img={img} 
            nombre={nombre} 
            stock={stock} 
            precio={precio} />
        )) : <h1>Cargandoo...</h1>    
    } */}
    </div>
  )
}

export default ItemListContainer

