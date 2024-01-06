import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(storedCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }]);
    } else {
      console.log('Producto ya agregado');
    }
  };

  const removeItem = (ItemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== ItemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
