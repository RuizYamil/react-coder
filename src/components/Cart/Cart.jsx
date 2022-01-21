import React from 'react';
import { useCartContext } from '../Context/cartContext';
import './Cart.css';

function Cart() {
    const {cartList, emptyCart} = useCartContext()

    return (
        <div className='container-list-cart'>
            {cartList.map(prod => 
                <div className='list-cart' key={prod.id}>
                    <div className='module'>
                        <p>Titulo</p>
                        {prod.title}
                    </div>
                    <div className='module'>
                        <p>Precio</p>
                        {prod.price}$ 
                    </div>
                    <div className='module'>
                        <p>Cantidad</p>
                        {prod.quantity}  
                    </div> 
                </div>)}
            <button onClick={emptyCart} className='btn btn-outline-primary btn-block'>Vaciar Carrito</button>
        </div>
    )
}

export default Cart
