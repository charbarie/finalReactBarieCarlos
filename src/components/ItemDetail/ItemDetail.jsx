
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from '../Context/CardContext'


const ItemDetail = ({ product }) => {
  const [ quantityAdded,  setQuantityAdded] = useState(0)
  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
  }
 

   const item = { 
    id, name , price
  }
  addItem (item ,quantity)




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
              {
                quantityAdded > 0 ? ( <Link to="/cart">
                                        <Button> Finaliza </Button>
                                      </Link>
                                ) : (
                                      <CartContext initial={1} stock={product.stock} price={product.price} addItem={handleOnAdd} />
                                    )
              }
      
        </div>
      </Card.Body>
    </Card>
  );

            }
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
