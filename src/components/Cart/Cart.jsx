import { useContext, useState } from "react";
import { CartContext } from "../Context/CardContext";
import { Button, Row, Col, CloseButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import './Cart.css';
import Item from "../Item/Item";

const Cart = () => {
  const { cart, clearCart, total, removeItem } = useContext(CartContext);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const handleFinalizarCompra = () => {
    setShowCheckoutForm(true);
  };

  if (total === 0) {
    return (
      <>
        <h1 style={{ color: "white" }}> No hay productos </h1>
        <Link to="/" className="option">
          <Button>Volver</Button>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Row>
          {cart.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '1rem' }}>
              <CloseButton bg="danger" className="delete-button" onClick={() => removeItem(product.id)} />
              <Item key={product.id} product={product} />
            </Col>
          ))}
        </Row>

        <div className="resumen-container">
          <div className="resumen">
            <h3>Total: ${total.toFixed(2)}</h3>
            <Button variant="danger" style={{ margin: '0 0 10px 10px' }} onClick={() => clearCart()} className="button">
              Borrar productos
            </Button>

            <Button variant="success" style={{ margin: '0 0 10px 10px' }} onClick={handleFinalizarCompra}>
              Finalizar compra
            </Button>
          </div>
        </div>

        {showCheckoutForm && (
          <Row className="mt-3">
            <Col xs={12}>
              <CheckoutForm onConfirm={(userData) => console.log(userData)} />
            </Col>
          </Row>
        )}
      </>
    );
  }
};

export default Cart;
