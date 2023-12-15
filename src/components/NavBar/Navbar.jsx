import logo from "./yeahlogo.png";
import "./Navbar.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";


export const NavBar = () => {
    return (
      <>
        <div className="navbar">
            <img src={ logo } alt="LogoMenu" />
            <nav className="menu">
                <ul>
                  <li><a href="./index.html">Inicio</a></li>
                  <li><a href="./pages/productos.html">Productos</a></li>
                  <li><a href="./pages/noticias.html">Noticias</a></li>
                  <li><a href="./pages/nosotros.html">Nosotros</a></li>
                  <li><a href="./pages/contactanos.html">Contactanos</a></li>
                </ul>
                <div className="ItemlistContainer-nav">
                <ItemListContainer/>
                </div>
            </nav>
        </div>
      </>
    );
  };

export default NavBar;
