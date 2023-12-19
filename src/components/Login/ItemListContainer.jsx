

import Login from "../Login/Login";
import "./ItemListContainer.css"
import carrito from "./carrito.png"


export const ItemListContainer = () => {
  return (
    <>
      <div className="itemlistcontainer">
      <img className="carrito" src={ carrito } alt="carrito" />
     {/*  <ItemCounter/> */}
      <Login/>
      </div>
    </>
  )
};

export default ItemListContainer



