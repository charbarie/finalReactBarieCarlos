/* eslint-disable react/prop-types */

import { useCounter } from '../hooks/useCounter';
import Button from 'react-bootstrap/Button';
import './ItemCounter.css'

export const ItemCounter = ({ initial = 1, stock, onAddToCart }) => {
  const { counter, handleSum, handleRest } = useCounter(initial, stock);

  return (
    <>
      <div className='Countercontainer'>
        <Button size="sm" onClick={handleRest} disabled={counter === 0}> - </Button>
        <label> {counter} </label>
        <Button size="sm" onClick={handleSum}> + </Button>
      </div>
      <div className='ButtonAdd'>
        <Button variant="outline-success" onClick={() => onAddToCart(counter)} disabled={counter === 0}> Agregar </Button>
      </div>
    </>

  );
};

export default ItemCounter;
