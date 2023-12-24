
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
            <NavLink to="/category/Indumetaria" className="nav-link ms-0" activeClassName ="ActiveOption">
              Indumentaria
            </NavLink>
            <NavLink to="/category/Skate" className="nav-link ms-0" activeClassName ="ActiveOption">
              Skate
            </NavLink>
            <NavLink to="/category/Proteccion" className="nav-link ms-0" activeClassName ="ActiveOption">
              Proteccion
            </NavLink>
          </div>
        </Nav>
        <Nav className="ms-auto">
        </Nav>
        <CardWidget />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
