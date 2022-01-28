import React from 'react';
import { Link } from 'react-router-dom';

function Item({prod}) {
    return (
        <div className='card w-100 mt-5'>
            <div className='card-header'>
                {`${prod.name} - ${prod.price}`}
            </div>
            <div className='card-body'>
                <img src={prod.img} alt={prod.alt} className='w-50' />
            </div>
            <div className='card-footer'>
                <Link to={`/detail/${prod.id}`}>
                    <button className='btn btn-outline-primary btn-block'>Detalle del producto</button>
                </Link>
            </div>
        </div>
    )
}

export default Item
