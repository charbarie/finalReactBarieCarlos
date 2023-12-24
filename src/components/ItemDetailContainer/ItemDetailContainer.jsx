import { useEffect, useState } from 'react';
import { getProductById } from '../Helpers/Products/Products';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    console.log('Before fetch:', product);
    getProductById(itemId)
      .then(res => {
        setProduct(res);
        console.log('After fetch (success):', res);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        console.log('After fetch (error):', product);
      });
  }, [itemId, product]); 

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};





export default ItemDetail;
