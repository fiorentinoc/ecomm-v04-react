import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo_S.jpg'
import CartWidget from './CartWidget'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
  return (
    <div>
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
		        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavLink to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        <img src={logo} alt="logo"></img>
                    </NavLink>
                    
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink to="/" className="nav-link px-2 link-dark {(navData) => navData.isActive ? 'active' : '' }" >Home</NavLink></li>
                        <li><NavLink to="/store" className="nav-link px-2 link-dark">Store</NavLink></li>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                          <NavDropdown.Item href="/store/categoria/cuerdas" >Cuerdas</NavDropdown.Item>
                          <NavDropdown.Item href="/store/categoria/viento">Viento</NavDropdown.Item>
                          <NavDropdown.Item href="/store/categoria/percusion">Percusión</NavDropdown.Item>
                        </NavDropdown>
                        <li><NavLink to="/contacto" className="nav-link px-2 link-dark">Contacto</NavLink></li>
                        <li><NavLink to="/ayuda" className="nav-link px-2 link-dark">Ayuda</NavLink></li>
                    </ul>
                    <NavLink to="cart">
                      <CartWidget />
                    </NavLink>     
		        </div>
            </div>
        </header>
    </div>
  )
}

export default NavBar