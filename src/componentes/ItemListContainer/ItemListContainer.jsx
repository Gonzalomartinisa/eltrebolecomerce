import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <p className='d-flex justify-content-evenly bg-danger w-100 p-2'>
       <h1>{greeting}</h1>
        </p>
  )
}

export default ItemListContainer

