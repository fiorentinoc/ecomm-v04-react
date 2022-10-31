import React, { useState} from 'react'
import './css/itemCount.css'

const ItemCount = ({inicial, stock, onAdd}) => {

    const [count, setCount] = useState(inicial)

    const decrease = () => {
        setCount(count - 1)
    }
    const increase = () => {
        setCount(count + 1)
    }

    return (
        <div className='counter'>
            <button disabled={count <= 1} onClick={ decrease }>-</button>
            <span>{ count }</span>
            <button disabled={count >= stock} onClick={ increase }>+</button>
            <div>
                <button disabled={ stock <= 0 } onClick={ () => onAdd(count) } >Agregar al carro</button>
            </div>
        </div>
    )
}

export default ItemCount