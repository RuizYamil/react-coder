import React from 'react'

function Item({prod}) {
    return (
        <div className='card w-100 mt-5'>
            <div className='card-header'>
                {`${prod.title} - ${prod.price}`}
            </div>
            <div className='card-body'>
                <img src={prod.productImg} alt={prod.alt} className='w-50' />
            </div>
            <div className='card-footer'>
                <button className='btn btn-outline-primary btn-block'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Item
