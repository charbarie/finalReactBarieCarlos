import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import CardWidget from '../CardWidget/CardWidget';
import { NavLink } from 'react-router-dom';

import logo from './yeahlogo.png';

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home" className="logo-container">
        <img src={logo} alt="LogoMenu" className="logo-img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <div className='Categories'>
            <NavLink to="/category/Indumentaria" className="nav-link ms-0" >
              Indumentaria
            </NavLink>
            <NavLink to="/category/Skate" className="nav-link ms-0" >
              Skate
            </NavLink>
            <NavLink to="/category/Protección" className="nav-link ms-0" >
              Proteccion
            </NavLink>
          </div>
        </Nav>

        <CardWidget />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
