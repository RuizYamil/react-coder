import React from 'react';
import ItemCount from '../../useState/ItemCount';
import './ItemDetail.css';

function ItemDetail({product}) {
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
                    <ItemCount min={1} max={10}/>
                    {product.price}
                </div>
                <div className='card-footer'>
                    {product.description}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
