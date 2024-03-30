import React from 'react'
import Image from '../../atomos/Logo'
import './Navbar.css'

function NavbarHeader() {
  return (
    <nav className="navbar bg-#00800 fixed-top">
    <div className="d-flex container aling-items-center">
    <button className="btn shadow-none navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      {/* Offcanvas transicion */}
        <span className="navbar-toggler-icon fs-3"></span>
      </button>
      <a className="navbar-brand text-white fs-4 active" href="#">Inicio</a>
      <a className="navbar-brand text-white fs-4 active" href="#">Usuarios</a>
      <a className="navbar-brand text-white fs-4 active" href="#">Programar</a>
      <Image/>
    </div>
  </nav>
  )
}

export default NavbarHeader