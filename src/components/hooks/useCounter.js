import { useState } from "React"



export const useCounter = ( min, max ) => {
    const [counter, setCounter] = useState(min)

    const handleSum = () => {
        if (counter < max){
            setCounter(counter + 1)
        }
    }
    const  handleRest = () => {
        if(counter > min) {
            setCounter(counter - 1 )
        }
    }
return { counter , handleSum ,handleRest }
}
