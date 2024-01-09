/* eslint-disable react/prop-types */

import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CardContext';
import ItemCounter from '../ItemCounter/ItemCounter';


const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (selectedQuantity) => {
    const quantity = selectedQuantity;
    addItem(product, quantity);
    console.log(`Añadir ${quantity} ${product.name} al carrito`);
  };

  return (
    <>

      <Card className="custom-card">
        <Link to={`/item/${product.id}`} className="custom-link">
          <Card.Img variant="top" src={product.imageProduct} className="custom-image" />
          <Card.Body>
            <div className="text-container">
              <Card.Text>${product.price}</Card.Text>
              <Card.Title>{product.name}</Card.Title>
            </div>
          </Card.Body>
        </Link>
        <ItemCounter stock={product.stock} onAddToCart={handleAddToCart} />
      </Card>


    </>
  );
};


export default ItemDetail;
