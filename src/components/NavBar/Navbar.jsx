
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import CardWidget from '../CardWidget/CardWidget';
import { NavLink } from 'react-router-dom';
import logo from './yeahlogo.png';
import './Navbar.css';


const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <NavLink to="/" className="logo-container">
          <img src={logo} alt="LogoMenu" className="logo-img" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto categorys">
            <NavLink to="/" className="nav-link ms-0"> Inicio </NavLink>
            <NavLink to="/category/Indumentaria" className="nav-link ms-0">   Indumentaria  </NavLink>
            <NavLink to="/category/Skate" className="nav-link ms-0">   Skate         </NavLink>
            <NavLink to="/category/Protección" className="nav-link ms-0">   Proteccion    </NavLink>
          </Nav>
        </Navbar.Collapse>
        <CardWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
