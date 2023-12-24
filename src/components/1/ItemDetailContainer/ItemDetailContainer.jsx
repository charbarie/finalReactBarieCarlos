import React, { useEffect, useState } from 'react'

export const ItemDetailContainer = () => {

    const [ product,setProduct] = useState(null)
    
    useEffect( () => {
        getProduct('1')
        .then( res => setProduct(res))
    }
    )
    
        .cath(error => {
            console.error(error)
        })
},[]
    




  return (
    <div>ItemDetailContainer</div>
  )
}
