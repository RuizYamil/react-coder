import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/cartContext';
import ItemCount from '../../useState/ItemCount';
import './ItemDetail.css';

function ItemDetail({product}) {
    const {cartList, addCart} = useCartContext()

    console.log(cartList);

    const [show, setShow] = useState(true)

    const onAdd = (quantity) => {
        setShow(false)
        addCart({...product, quantity: quantity})
    }

    return (
        <div className='col-md-4'>
            <div className='card w-100 mt-5'>
                <div className='card-header'>
                    {product.title}
                </div>
                <div className='card-body'>
                    <img src={product.img} alt={product.alt} className='w-50' />
                </div>
                <div className='card-price'>
                    {show ? <ItemCount stock={product.stock} onAdd={onAdd} price={product.price}/> :
                        <div className='buy-buttons'>
                            <Link to={'/cart'}><button className='btn btn-outline-primary btn-block'>Terminar la compra</button></Link>
                            <Link to={'/'}><button className='btn btn-outline-primary btn-block'>Seguir comprando</button></Link>
                        </div>
                    }
                </div>
                <div className='card-footer'>
                    {product.description}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
