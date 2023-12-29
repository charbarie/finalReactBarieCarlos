import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

import { getDoc, doc } from 'firebase/firestore';
import { firebaseConnection } from '/src/services/firebase/firebaseConfig.js';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(firebaseConnection, 'products', itemId);

    getDoc(docRef)
      .then(res => {
        const data = res.data();
        const productAdapted = { id: res.id, ...data };
        setProduct(productAdapted);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ItemDetail product={product} />
      )}
    </>
  );
};

export default ItemDetailContainer;
