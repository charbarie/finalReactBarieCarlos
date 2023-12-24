/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from "react";

export const useCounter = (min, max, onAdd) => {
  const [counter, setCounter] = useState(min);

  const handleSum = () => {
    if (counter < max) {
      setCounter(counter + 1);
    }
  };

  const handleRest = () => {
    if (counter > min) {
      setCounter(counter - 1);
    }
  };

  return { counter, handleSum, handleRest };
};
