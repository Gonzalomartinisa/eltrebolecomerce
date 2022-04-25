import React from 'react'
import Cardwidget from '../Cardwidget/Cardwidget'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Tienda online El Trebol</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Tu cuenta</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ingresa</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Mis compras
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Historial</a></li>
            <li><a className="dropdown-item" href="#">Favoritos</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Opciones</a></li>
          </ul>
        </li>
        <li className="nav-item">
         <Cardwidget/>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
        <button className="btn btn-outline-success p-2" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar