/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { useCounter } from '../hooks/useCounter';
import Button from 'react-bootstrap/Button';

export const ItemCounter = ({ initial = 1, stock, onAddToCart }) => {
  const { counter, handleSum, handleRest } = useCounter(initial, stock);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>

      <Button variant="danger" onClick={handleRest} disabled={counter === 0}> - </Button>
      <label style={{ fontSize: '1.5rem', margin: '0 10px' }}> {counter} </label>
      <Button variant="primary" onClick={handleSum}> + </Button>
      <Link to="/item/:itemId">ver detalle
        <Button variant="success" onClick={() => onAddToCart(counter)} disabled={counter === 0}>

        </Button>
      </Link>
    </div>
  );
};

export default ItemCounter;
