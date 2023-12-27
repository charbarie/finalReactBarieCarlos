import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardList from '../CardList/CardList.jsx';
import { getDocs, collection , query , where } from 'firebase/firestore';
import { firebas } from '../../services/firebase/firebaseConfig.js'


 const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading , setLoading ] = useState(true)
  const { categoryId } = useParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {

    setLoading(true)
    
    const collectionRef = categoryId
      ? query(collection(firebas,"products"),where('category', '==',categoryId ))
      : collection(firebas,'products')
      
    getDocs(collectionRef)
          .then(res => {
              const productsAdapted = res.docs.map( doc => {
                    const data = doc.data()
                    return{ id: doc.id, ...data}
            })
            setProducts(productsAdapted)
          })
          .catch(error => { console.log(error)})
          .finally(() => { setLoading(false)})
  })
  return (
    <>
    <CardList products={products}/>
    </>
  );
};

export default ItemListContainer;
