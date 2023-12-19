

import './ItemCounter.css'
import { useCounter } from '../hooks/useCounter'
export const ItemCounter = () => {
  const {} = useCounter()


  return (
  <>
      <div>ItemCounter</div>
      <label>{ 1 } </label>
      <button onClick={handleSum}> + </button>
      <button onClick={handleRest}> - </button>
  </>

  )
}


export default ItemCounter






