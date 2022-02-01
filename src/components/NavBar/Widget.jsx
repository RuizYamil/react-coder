import React from 'react';
import cart from './cart.png';
import './Widget.css';
import { useCartContext } from '../Context/cartContext'

function Widget() {
    const { totalQuantity } = useCartContext()

    return (
        <div>
            <img src={cart} className='cart' alt='cart'/>
            <span className='position-absolute translate-middle badge rounded-circle bg-danger'>
                { totalQuantity() !== 0 && totalQuantity() }
            </span>
        </div>
    )
}

export default Widget
