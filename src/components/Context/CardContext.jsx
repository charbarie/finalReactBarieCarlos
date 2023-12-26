/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, createContext, useState, useMemo } from 'react';

// Cart Context
export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(storedCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const totalQuantity = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);
 
  const addItem = (game, id, quantity) => {
    setCart(prev => [...prev, { ...game, id, quantity }]);
  };

  const removeItem = (gameId) => {
    const cartUpdated = cart.filter(item => item.game.id !== gameId);
    setCart(cartUpdated);
  }

  const clearItem = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, totalQuantity, addItem, removeItem, clearItem }}>
      {children}
    </CartContext.Provider>
  );
}