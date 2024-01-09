/* eslint-disable react/prop-types */

import { useCounter } from '../hooks/useCounter';
import Button from 'react-bootstrap/Button';
import './ItemCounter.css';
import { Link } from 'react-router-dom';

export const ItemCounter = ({ initial = 1, stock, onAddToCart, onFinish }) => {
  const { counter, handleSum, handleRest } = useCounter(initial, stock);

  const handleFinish = () => {
    console.log('Producto finalizado. Cantidad:', counter);
    onFinish(counter);
  };

  return (
    <>
      <div className='Countercontainer'>
        <Button size="sm" onClick={handleRest} disabled={counter === 0}> - </Button>
        <label> {counter} </label>
        <Button size="sm" onClick={handleSum}> + </Button>
      </div>
      <div className='ButtonAdd'>

        <Button variant="outline-success" onClick={() => onAddToCart(counter)} disabled={counter === 0}> Agregar </Button>
        <Link to="/cart">
          <Button variant="outline-primary" onClick={handleFinish} disabled={counter === 0}> Finalizar </Button>
        </Link>
      </div>
    </>
  );
};

export default ItemCounter;
