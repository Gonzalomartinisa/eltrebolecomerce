import React from 'react'
import Cardwidget from '../Cardwidget/Cardwidget'
import { BsCart } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const categorias = [
  {
    path:"/Vacuno",
    name:"Vacuno",
    className:"nav-link",
  },
  {
    path:"/Porcino",
    name:"Porcino",
    className:"nav-link",
  },
  {
    path:"/Ave",
    name:"Ave",
    className:"nav-link",
  },
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand bg-black">
      <NavLink to="/" className='nav-link'>Home</NavLink></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu bg-black" aria-labelledby="navbarDropdown">
          {categorias.map(({path,name,className},index) => (
              <li><NavLink className={className} to={path}>{name}</NavLink></li>
          ))}
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Ingresa">Informacion</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Nosotros">Nosotros</NavLink>
        </li>
        <NavLink to="/CartContext" className="nav-item">
         <Cardwidget Icon={BsCart} color={"white"} size={"30px"}/>
        </NavLink>
        </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
        <button className="btn btn-outline-light p-2" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar