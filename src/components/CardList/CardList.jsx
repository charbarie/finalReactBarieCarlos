// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'React';
import { Products } from '../Helpers/Products/Products';
import  { CardProduct } from '../Card/Card';
import './CardList.css'

import Row from 'react-bootstrap/Row';

const CardList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
                    Products()
                      .then((res) => setProducts(res))
                      .catch((error) => console.error('Error fetching data:', error));
                  }, []
            );
  return (
    <>    
      <Row>
          <div className='box-card' >
            {products.map(  (product) => (<CardProduct roduct = { product }/>) ) }
          </div>
      </Row>
    </>
  )
}


export default CardList;
