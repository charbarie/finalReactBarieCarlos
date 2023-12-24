
import Card from 'react-bootstrap/Card';
import ItemCounter from '../ItemCounter/ItemCounter';
import PropTypes from 'prop-types';

const ItemDetail = ({ product }) => {
  console.log('itemdetail');

  if (!product) {

    return <div>No hay información del producto</div>;
  }


  const handleAddToCart = (selectedQuantity) => {
  
    console.log(`Añadir ${selectedQuantity} ${product.name} al carrito`);
  };

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
          <ItemCounter stock={product.stock} onAdd={handleAddToCart} />
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
