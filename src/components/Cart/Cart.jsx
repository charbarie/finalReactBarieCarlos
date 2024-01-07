import { CartContext } from "../Context/CardContext";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import { useContext } from "react";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <>
        <h1>No hay productos </h1>
        <Link to="/" className="option">
          Productos
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Row>
          {cart.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '1rem' }}>
              <Item key={product.id} product={product} />
            </Col>
          ))}
        </Row>
        <h3>Total: ${total}</h3>
        <Button onClick={() => clearCart()} className="button">
          Limpiar carrito
        </Button>
        <Link to="/Checkout" className="option">
          Checkout
        </Link>
      </>
    );
  }
};

export default Cart;
