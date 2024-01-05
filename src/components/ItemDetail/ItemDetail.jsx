import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from '../Context/CardContext';

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
  };




  if (!product) {
    return <p>No product available</p>;
  }

  return (
    <Card style={{ width: '100%', height: '100%' }}>
      <Card.Img variant="top" src={product.imageProduct} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <div>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
          <Card.Text>Stock: {product.stock}</Card.Text>
        </div>
        <div style={{ width: '100%' }}>
          {quantityAdded > 0 ? (
            <Link to="/cart">
              <Button onClick={() => addItem(product, quantityAdded)}>Finalizar</Button>
            </Link>
          ) : (
            <Button variant="success" onClick={() => handleOnAdd(1)}>
              Agregar al carrito
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

ItemDetail.propTypes = {
  product: PropTypes.shape({
    imageProduct: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
  }),
};

export default ItemDetail;
