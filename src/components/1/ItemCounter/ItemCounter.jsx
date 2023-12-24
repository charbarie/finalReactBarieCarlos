/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useCounter } from '../hooks/useCounter'

import Button from 'react-bootstrap/Button';


export const ItemCounter = ({initial = 1 ,stock }) => {
const { counter, handleSum, handleRest } = useCounter(initial, stock);
const handleOnAdd = () => {
    onAdd(counter)
  }


  return (
<>
      <button onClick={handleRest}> - </button>
      <label> { counter } </label>
      <button onClick={handleSum}> + </button>
      <Button variant="primary" style={{ width: '100%' }} onClick={handleOnAdd} disabled={!stock || counter === 0}> Agregar </Button>


  </>

  )
}

export default ItemCounter
