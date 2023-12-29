import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardList from '../CardList/CardList.jsx';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { firebaseConnection } from '/src/services/firebase/firebaseConfig.js';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const collectionRef = categoryId
          ? query(collection(firebaseConnection, 'products'), where('category', '==', categoryId))
          : collection(firebaseConnection, 'products');

        const snapshot = await getDocs(collectionRef);
        const productsAdapted = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsAdapted);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <>
      {loading ? <LoadingIndicator /> : <CardList products={products} />}
    </>
  );
};

export default ItemListContainer;
