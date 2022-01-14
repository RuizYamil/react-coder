import React, {useState} from 'react';
import './ItemCount.css';

function ItemCount({min, max}) {

    const [counter, setCounter] = useState(min)

    const handleIncrement = () => {
        counter < max ? setCounter(prev => prev + 1) : alert("Stock maximo del producto");
    }

    const handleDecrement = () => {
        counter > min ? setCounter(prev => prev - 1) : alert('Minimo de compra');
    }

    return (
        <div className='counter'>
            <button onClick={handleIncrement}>+</button>
            <h1>{counter}</h1>
            <button onClick={handleDecrement}>-</button>     
        </div>
    )
}

export default ItemCount
