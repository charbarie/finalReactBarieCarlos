/* eslint-disable react/prop-types */

import { useCounter } from '../hooks/useCounter';
import Button from 'react-bootstrap/Button';

export const ItemCounter = ({ initial = 1, stock, onAddToCart }) => {
  const { counter, handleSum, handleRest } = useCounter(initial, stock);

  return (
    <div style={{ margin: '100px' }}>
      <Button variant="primary" style={{ fontSize: '0.8rem' }} onClick={handleSum}> + </Button>
      <label style={{ fontSize: '1.5rem', margin: '0 1px' }}> {counter} </label>
      <Button variant="danger" style={{ fontSize: '0.8rem' }} onClick={handleRest} disabled={counter === 0}> - </Button>
      <div style={{ margin: '1rem' }}>
        <Button variant="success" style={{ fontSize: '0.8rem' }} onClick={() => onAddToCart(counter)} disabled={counter === 0}>
          Agregar
        </Button>
      </div>
    </div>
  );
};

export default ItemCounter;
