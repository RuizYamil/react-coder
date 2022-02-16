import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/cartContext';

function Summary({idOrder}) {
  const {cartList, emptyCart, totalPrice} = useCartContext()

  return (
    <div>
      <h1>El numero de orden es: {idOrder}</h1>
      <div className='container-list-cart'> 
        {cartList.map(prod => 
            <div className='list-cart' key={prod.id}>
                <div className='module'>
                    <p>Titulo</p>
                    {prod.name}
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
        {`Precio total: ${totalPrice()}`}
      </div>
      <Link to={'/'}><button onClick={emptyCart} className='btn btn-outline-primary btn-block'>Ir a Comprar</button></Link>
    </div>
    
  )
}

export default Summary;