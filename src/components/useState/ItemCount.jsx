import React, {useState} from 'react'
import '../useState/ItemCount.css'

function ItemCount({min, max}) {

    const [counter, setCounter] = useState(min)

    const handleIncrement = () => {
        counter < max ? setCounter(prev => prev + 1) : console.log("Stock maximo del producto");
    }

    const handleDecrement = () => {
        counter > min ? setCounter(prev => prev - 1) : console.log('Minimo de compra');
    }

    return (
        <div className='counter'>
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>     
        </div>
    )
}

export default ItemCount
