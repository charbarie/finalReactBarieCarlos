import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Products, getProductsByCategory } from '../Helpers/Products/Products.js';
import CardList from '../CardList/CardList.jsx';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();


  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : Products;
    asyncFunc(categoryId)
      .then(res => {
        setProducts(res);
      })
      .catch(error => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <>
    <CardList products={products}/>
    </>
  );
};

export default ItemListContainer;
