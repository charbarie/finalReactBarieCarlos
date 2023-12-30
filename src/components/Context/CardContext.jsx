/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

// Cart Context
export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart)


  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }]);
    } else {
      console.log('Producto ya agregado')
    }

  };

  const removeItem = (ItemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== ItemId);
    setCart(cartUpdated);
  }

  const clearCart = () => {
    setCart([]);
  }
  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
  }
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}