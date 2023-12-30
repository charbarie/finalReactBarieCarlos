import { useEffect, useState } from 'react';
import CardList from '../CardList/CardList.jsx';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { getDocs, collection, getFirestore, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {

    if (categoryId) {
      const filterFirebase = getFirestore();
      const queryCollectionFilter = collection(filterFirebase, 'Productos');
      const queryFilter = query(
        queryCollectionFilter,
        where('category', '==', categoryId)
      );

      getDocs(queryFilter)
        .then(res => setFilteredProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
    } else {
      const dbFirebase = getFirestore();
      const queryCollection = collection(dbFirebase, 'Productos');

      getDocs(queryCollection)
        .then(res => setProducts(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoryId]);

  return (
    <>
      {loading ? <LoadingIndicator /> : <CardList products={filteredProducts.length > 0 ? filteredProducts : products} />}
    </>
  );
};

export default ItemListContainer;

