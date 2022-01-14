import React from 'react';
import cart from './cart.png';
import './Widget.css';

function Widget() {
    return (
        <div>
            <img src={cart} className='cart' alt='cart'/>
        </div>
    )
}

export default Widget
