// Navbar.js

import logo from "./yeahlogo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './Navbar.css';


const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="logo-container">
          <img src={logo} alt="LogoMenu" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./index.html" className="nav-link ms-0">Inicio</Nav.Link>
            <Nav.Link href="./pages/productos.html" className="nav-link">Productos</Nav.Link>
            <Nav.Link href="./pages/noticias.html" className="nav-link">Noticias</Nav.Link>
            <Nav.Link href="./pages/nosotros.html" className="nav-link">Nosotros</Nav.Link>
            <Nav.Link href="./pages/contactanos.html" className="nav-link">Contactanos</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
          </Nav>
        </Navbar.Collapse>
      </Container>
      <ItemListContainer />
    </Navbar>
  );
};

export default NavBar;
