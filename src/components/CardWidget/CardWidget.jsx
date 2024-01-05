import { useContext } from "react";
import "./CardWidget.css";
import carrito from "./carrito.png";
import { CartContext } from "../Context/CardContext";
import { Link } from "react-router-dom";

export const CardWidget = () => {
  const totalQuantity = useContext(CartContext);

  return (
    <>
      <Link to="/cart" className="CartWidget" >
        <img className="carrito" src={carrito} alt="carrito" />
        {totalQuantity.cart.length}
      </Link>
    </>
  );
};

export default CardWidget;

