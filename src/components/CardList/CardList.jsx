import { useEffect, useState } from 'react';
import CardProduct from '../Card/CardProduct';
import { Products } from '../Helpers/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Products()
      .then((res) => setProducts(res))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '1rem' }}>
          <CardProduct productKey={product.id} product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default CardList;


