


import { useCounter } from '../hooks/useCounter'



export const ItemCounter = (initial =1 ,stock =5 ,onAdd) => {
  const {counter ,handleSum, handleRest} = useCounter(initial , stock )
  const handleOnAdd = () => {
    onAdd(counter)
  }


  return (
  <>
      <div>ItemCounter</div>
      <label>{ counter } </label>
      <button onClick={handleSum}> + </button>
      <button onClick={handleRest}> - </button>
      <button onClick={handleOnAdd}>Agregar</button>

  </>

  )
}


export default ItemCounter






