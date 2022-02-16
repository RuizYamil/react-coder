import React, {useState} from 'react';
import './ItemCount.css';

function ItemCount({stock, onAdd, price}) {

    const [counter, setCounter] = useState(1)

    const handleIncrement = () => {
        counter < stock ? setCounter(prev => prev + 1) : alert("Stock maximo del producto");
    }

    const handleDecrement = () => {
        counter > 1 && setCounter(prev => prev -1); 
    }

    return (
        <div className='counter'>
            <button className='btn btn-outline-primary btn-block' onClick={handleDecrement}>-</button>
            <h1>{counter}</h1>
            <button className='btn btn-outline-primary btn-block' onClick={handleIncrement}>+</button>
            {price}
            <button className='btn btn-outline-primary btn-block' onClick={() => onAdd(counter)}>Agregar al carrito</button>     
        </div>
    )
}

export default ItemCount
