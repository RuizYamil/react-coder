import { useState, useEffect } from 'react'
import { getFetch } from '../ItemListContainer/mock'
import ItemDetail from './ItemDetail/ItemDetail'

function ItemDetailContainer() {
    const [product, setproducts] = useState({})

    useEffect(() => {
        getFetch
        .then(resp => setproducts(resp.find(prod => prod.id === '1')))
    }, [])

    return (
        <center>
            <ItemDetail product={product} />
        </center>
    )
}

export default ItemDetailContainer
