import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import Button from 'react-bootstrap/Button';
import './ItemCounter.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export const ItemCounter = ({ initial = 1, stock, onAddToCart, onFinish }) => {
  const { counter, handleSum, handleRest } = useCounter(initial, stock);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleFinish = () => {
    console.log('Producto finalizado. Cantidad:', counter);
    onFinish(counter);
  };

  const handleAddToCart = () => {
    onAddToCart(counter);
    setAddedToCart(true);
  };

  return (
    <>
      <div className='Countercontainer'>
        <Button size="sm" onClick={handleRest} disabled={counter === 0}> - </Button>
        <label> {counter} </label>
        <Button size="sm" onClick={handleSum}> + </Button>
      </div>
      <div className='ButtonAdd'>
        <Button variant="outline-success" onClick={handleAddToCart} disabled={counter === 0 || addedToCart}> Agregar </Button>
        {addedToCart && (
          <Link to="/Checkout">
            <Button variant="outline-primary" onClick={handleFinish} disabled={counter === 0}> Finalizar </Button>
          </Link>
        )}
      </div>
    </>
  );
}; ItemCounter.propTypes = {
  initial: PropTypes.number,
  stock: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
};

export default ItemCounter;
