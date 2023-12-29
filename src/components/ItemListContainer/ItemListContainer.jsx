import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardList from '../CardList/CardList.jsx';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { getDocs, collection, query, where, getFirestore, doc } from 'firebase/firestore';
import { firebaseConnection } from '/src/services/firebase/firebaseConfig.js';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {

    const dbFirebase = getFirestore()
    const queryCollection = collection(dbFirebase, 'Productos')
    getDocs(queryCollection)
      .then(res => setProducts(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))


  }, [])

  console.log(products)




  return (
    <>

      {loading ? <LoadingIndicator /> : <CardList products={products} />}
    </>
  );
};

export default ItemListContainer;

