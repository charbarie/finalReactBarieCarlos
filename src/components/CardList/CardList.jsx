// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
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
          <div className='box-card' >
               {products.map(  (product) => (<CardProduct product={ product }/>) ) }
              </Row>
          </div>
        )
}


export default CardList;
