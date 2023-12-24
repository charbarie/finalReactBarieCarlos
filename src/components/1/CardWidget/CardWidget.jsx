
/* 
import Login from "../Login/Login"; */
import "./CardWidget.css"
import carrito from "./carrito.png"


export const CardWidget = () => {
  return (
    <>
      <div className="itemlistcontainer">
      <img className="carrito" src={ carrito } alt="carrito" />

      {/*   <Login/> */}
      </div>
    </>
  )
};

export default CardWidget



