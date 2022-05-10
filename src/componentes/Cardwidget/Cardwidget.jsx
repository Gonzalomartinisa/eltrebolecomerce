import React, { Component } from 'react'
// import { BsCart } from 'react-icons/bs';
const Cardwidget = ({Icon, color, size}) => {

  return (
    <div>
      {<Icon style={{color: color, fontSize: size}}/>}
    </div>
    )
}

export default Cardwidget

