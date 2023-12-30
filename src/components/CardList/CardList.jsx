/* eslint-disable react/prop-types */

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardProduct from '../CardProduct/CardProduct';

const CardList = ({ products }) => {
  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '1rem' }}>
          <CardProduct product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default CardList;
