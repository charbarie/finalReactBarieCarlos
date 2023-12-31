
import { useState } from "react";

export const useCounter = (min = 1, max) => {
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
