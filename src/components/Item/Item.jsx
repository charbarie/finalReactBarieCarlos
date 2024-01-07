/* eslint-disable react/prop-types */

import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemCounter } from '../ItemCounter/ItemCounter';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from '../Context/CardContext';

export const Item = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (selectedQuantity) => {

    const quantity = selectedQuantity;


    addItem(product, quantity);

    console.log(`Añadir ${quantity} ${product.name} al carrito`);
  };

  return (
    <Card style={{ width: '100%', height: '100%' }}>
      <Card.Img variant="top" src={product.imageProduct} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <div style={{ textAlign: 'center' }}>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
        </div>
        <div style={{ width: '100%', textAlign: 'center', marginTop: '10px' }}>
          <ItemCounter stock={product.stock} onAddToCart={handleAddToCart} />
          <Button style={{ marginTop: '10px' }}>
            <Link to={`/item/${product.id}`}  >Ver detalles</Link>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;
