import React from 'react'
import Item from '../Item/Item'
import { useState, useEffect } from 'react'
import { getFetch } from '../mock'

function ItemList() {
    const [products, setproducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then(resp => setproducts(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])

    return (
        <div>
            { loading ? <h2> Cargando... </h2>
                :
                products.map(prod => <div 
                    key={prod.id}
                    className='col-md-4'
                >
                    <Item prod={prod}/>
                </div>
            )}
        </div>  
    )
}

export default ItemList
