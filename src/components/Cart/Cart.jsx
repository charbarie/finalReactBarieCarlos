import { useContext } from "react"
import { CartContext } from "../Context/CardContext"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"




const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

  if (totalQuantity === 0) {
    return (
      <>
        <h1>No hay productos </h1>
        <Link to='/' className="option"> Productos </Link>
      </>
    )
  }
  return (
    <>
      {cart.map(p => <CardProduct key={p.id}{...p} />)}
      <h3> Total: ${total}</h3>
      <Button onClick={() => clearCart()} className="button"> Limpiar carrito </Button>
      <Link to='/checkout' className=' option'> Checkout </Link>
    </>
  )
}

export default Cart