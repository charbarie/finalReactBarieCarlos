/* eslint-disable react/prop-types */

import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCounter from '../ItemCounter/ItemCounter';


export const CardProduct = ({ product }) => {
  return (
    <Card style={{ width: '100%', height: '100%' }}>
      <Card.Img variant="top" src={product.imageProduct} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <div>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
          <Card.Text> stock: {product.stock}</Card.Text>
          <Card.Text></Card.Text>
           
        </div>
        <div style={{ width: '100%' }}>
          <ItemCounter stock= {product.stock} />
         
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;


