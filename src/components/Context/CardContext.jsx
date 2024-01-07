import { createContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext({ cart: [], total: 0 });

export const CartProvider = ({ children }) => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(storedCart);
  const [total, setTotal] = useState(0);

  const updateTotal = useCallback(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const roundedTotal = parseFloat(newTotal.toFixed(2));
    setTotal(roundedTotal);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateTotal();
  }, [cart, updateTotal]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }]);
    } else {
      console.log('Producto ya agregado');
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cart, total, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
