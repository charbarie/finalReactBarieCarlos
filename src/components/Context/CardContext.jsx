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
      setCart(prev =>
        prev.map(prod => (prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod))
      );
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
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <CartContext.Provider value={{ cart, total, addItem, removeItem, clearCart, isInCart, totalQuantity, updateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
