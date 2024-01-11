import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc, getFirestore } from 'firebase/firestore';


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const dbFirestore = getFirestore()
    const docRef = doc(dbFirestore, 'Productos', itemId);

    getDoc(docRef)
      .then(res => setProducto({ id: res.id, ...res.data() }))
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div style={{ width: '80%', height: '80%', paddingLeft: '35rem' }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ItemDetail product={producto} />
      )}
    </div >
  );
};

export default ItemDetailContainer;
