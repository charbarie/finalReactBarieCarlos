/* eslint-disable no-unused-vars */

import './ItemCounter.css'
import { useCounter } from '../hooks/useCounter'
export const ItemCounter = () => {
  const {} = useCounter()


  return (
  <>
      <div>ItemCounter</div>
      <label>{ 1 } </label>
      <button onClick={handleSum}> + </button>
      <button onClick={handleRest}> - </button>
  </>

  )
}


export default ItemCounter






/* import { useEffect } from 'react';

export const ItemListCotainer = () => {
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/ability/?limit=20&offset=20',{
    method:'GET',
    headers:{
      'Content-Type':'application/json; charset:utf-8'
    },
})
.then((res) => res.json())
.then((data) => console.log(data))
.catch((error) => console.error('Error fetching data:', error));
},[])

  return (
    <>
      <div>ItemCount</div>
    </>
  );
};

export default ItemListCotainer;
 */